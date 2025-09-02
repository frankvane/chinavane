import{r as o,j as e}from"./index-D5aG88J3.js";import{C as x}from"./ComponentTemplate-DZf1RTVD.js";function l(s){const[t,d]=o.useState(()=>typeof window<"u"?window.matchMedia(s).matches:!1);return o.useEffect(()=>{if(typeof window>"u")return;const i=window.matchMedia(s),n=r=>{d(r.matches)};return d(i.matches),i.addEventListener("change",n),()=>{i.removeEventListener("change",n)}},[s]),t}function g(s){const[t,d]=o.useState(()=>typeof window>"u"?Object.keys(s).reduce((i,n)=>(i[n]=!1,i),{}):Object.entries(s).reduce((i,[n,r])=>(i[n]=window.matchMedia(r).matches,i),{}));return o.useEffect(()=>{if(typeof window>"u")return;const i=Object.entries(s).map(([r,a])=>{const c=window.matchMedia(a);return{key:r,mq:c}}),n=()=>{const r=i.reduce((a,{key:c,mq:p})=>(a[c]=p.matches,a),{});d(r)};return n(),i.forEach(({mq:r})=>{r.addEventListener("change",n)}),()=>{i.forEach(({mq:r})=>{r.removeEventListener("change",n)})}},[s]),t}function h(){const s=o.useMemo(()=>({xs:"(max-width: 575px)",sm:"(min-width: 576px) and (max-width: 767px)",md:"(min-width: 768px) and (max-width: 991px)",lg:"(min-width: 992px) and (max-width: 1199px)",xl:"(min-width: 1200px)",mobile:"(max-width: 767px)",tablet:"(min-width: 768px) and (max-width: 1023px)",desktop:"(min-width: 1024px)"}),[]),t=g(s),d=o.useMemo(()=>t.xs?"xs":t.sm?"sm":t.md?"md":t.lg?"lg":t.xl?"xl":"unknown",[t]),i=o.useMemo(()=>t.mobile?"mobile":t.tablet?"tablet":t.desktop?"desktop":"unknown",[t]);return{...t,currentBreakpoint:d,deviceType:i,isMobile:t.mobile,isTablet:t.tablet,isDesktop:t.desktop}}function b(){const s=l("(orientation: portrait)"),t=l("(orientation: landscape)");return{isPortrait:s,isLandscape:t,orientation:s?"portrait":"landscape"}}function f(){const s=l("(prefers-color-scheme: dark)"),t=l("(prefers-color-scheme: light)"),d=l("(prefers-reduced-motion: reduce)"),i=l("(prefers-contrast: high)");return{prefersDark:s,prefersLight:t,prefersReducedMotion:d,prefersHighContrast:i,colorScheme:s?"dark":t?"light":"no-preference"}}const y=()=>{const[s,t]=o.useState("(min-width: 768px)"),d=l(s),n=[{name:"移动设备",query:"(max-width: 767px)",description:"屏幕宽度小于等于 767px"},{name:"平板设备",query:"(min-width: 768px) and (max-width: 1023px)",description:"屏幕宽度在 768px 到 1023px 之间"},{name:"桌面设备",query:"(min-width: 1024px)",description:"屏幕宽度大于等于 1024px"},{name:"竖屏方向",query:"(orientation: portrait)",description:"屏幕高度大于宽度"},{name:"横屏方向",query:"(orientation: landscape)",description:"屏幕宽度大于高度"},{name:"深色模式",query:"(prefers-color-scheme: dark)",description:"用户偏好深色主题"},{name:"浅色模式",query:"(prefers-color-scheme: light)",description:"用户偏好浅色主题"},{name:"减少动画",query:"(prefers-reduced-motion: reduce)",description:"用户偏好减少动画效果"},{name:"高对比度",query:"(prefers-contrast: high)",description:"用户偏好高对比度"},{name:"高分辨率",query:"(min-resolution: 2dppx)",description:"设备像素比大于等于 2"},{name:"触摸设备",query:"(hover: none) and (pointer: coarse)",description:"主要输入设备是触摸"},{name:"鼠标设备",query:"(hover: hover) and (pointer: fine)",description:"主要输入设备是鼠标"}].map(a=>({...a,matches:l(a.query)})),r=["(min-width: 768px)","(max-width: 767px)","(orientation: portrait)","(prefers-color-scheme: dark)","(min-resolution: 2dppx)","(hover: hover)"];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-4",children:"自定义媒体查询测试"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"输入媒体查询语句:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",value:s,onChange:a=>t(a.target.value),className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm",placeholder:"例如: (min-width: 768px)"}),e.jsx("div",{className:`px-4 py-2 rounded-lg font-medium text-sm ${d?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:d?"匹配":"不匹配"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"快速选择:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:r.map(a=>e.jsx("button",{onClick:()=>t(a),className:`px-3 py-1 rounded text-sm font-mono transition-colors ${s===a?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:a},a))})]})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-4",children:"常用媒体查询状态"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:n.map(a=>e.jsxs("div",{className:`p-4 rounded-lg border-2 transition-colors ${a.matches?"border-green-200 bg-green-50":"border-red-200 bg-red-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h5",{className:`font-medium ${a.matches?"text-green-800":"text-red-800"}`,children:a.name}),e.jsx("div",{className:`w-3 h-3 rounded-full ${a.matches?"bg-green-500":"bg-red-500"}`})]}),e.jsx("p",{className:`text-sm mb-2 ${a.matches?"text-green-700":"text-red-700"}`,children:a.description}),e.jsx("code",{className:`text-xs font-mono px-2 py-1 rounded ${a.matches?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:a.query}),e.jsxs("div",{className:`mt-2 text-xs font-medium ${a.matches?"text-green-600":"text-red-600"}`,children:["状态: ",a.matches?"✓ 匹配":"✗ 不匹配"]})]},a.name))})]}),e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-4",children:"媒体查询语法说明"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-blue-700 mb-2",children:"尺寸查询"}),e.jsxs("ul",{className:"text-sm text-blue-600 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"(min-width: 768px)"})," - 最小宽度"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"(max-width: 767px)"})," - 最大宽度"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"(width: 768px)"})," - 精确宽度"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"(height: 600px)"})," - 精确高度"]})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-blue-700 mb-2",children:"方向和特性"}),e.jsxs("ul",{className:"text-sm text-blue-600 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"(orientation: portrait)"})," - 竖屏"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"(orientation: landscape)"})," - 横屏"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"(hover: hover)"})," - 支持悬停"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"(pointer: fine)"})," - 精确指针"]})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-blue-700 mb-2",children:"用户偏好"}),e.jsxs("ul",{className:"text-sm text-blue-600 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"(prefers-color-scheme: dark)"})," - 深色主题"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"(prefers-reduced-motion: reduce)"})," - 减少动画"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"(prefers-contrast: high)"})," - 高对比度"]})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-blue-700 mb-2",children:"逻辑操作符"}),e.jsxs("ul",{className:"text-sm text-blue-600 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"and"})," - 逻辑与"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"or"})," - 逻辑或"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"not"})," - 逻辑非"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"()"})," - 分组"]})]})]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"使用提示"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 在自定义查询输入框中输入媒体查询语句进行实时测试"}),e.jsx("li",{children:"• 调整浏览器窗口大小观察尺寸相关查询的变化"}),e.jsx("li",{children:"• 在系统设置中切换主题模式观察偏好查询的变化"}),e.jsx("li",{children:"• 使用开发者工具的设备模拟器测试不同设备特性"})]})]})]})},N=`import React, { useState } from 'react';
import { useMediaQuery } from './useMediaQuery';
import type { CommonMediaQueries } from './types';

const MediaQueryTester: React.FC = () => {
  const [customQuery, setCustomQuery] = useState('(min-width: 768px)');
  const customResult = useMediaQuery(customQuery);

  // 常用媒体查询列表
  const commonQueries: CommonMediaQueries[] = [
    {
      name: '移动设备',
      query: '(max-width: 767px)',
      description: '屏幕宽度小于等于 767px'
    },
    {
      name: '平板设备',
      query: '(min-width: 768px) and (max-width: 1023px)',
      description: '屏幕宽度在 768px 到 1023px 之间'
    },
    {
      name: '桌面设备',
      query: '(min-width: 1024px)',
      description: '屏幕宽度大于等于 1024px'
    },
    {
      name: '竖屏方向',
      query: '(orientation: portrait)',
      description: '屏幕高度大于宽度'
    },
    {
      name: '横屏方向',
      query: '(orientation: landscape)',
      description: '屏幕宽度大于高度'
    },
    {
      name: '深色模式',
      query: '(prefers-color-scheme: dark)',
      description: '用户偏好深色主题'
    },
    {
      name: '浅色模式',
      query: '(prefers-color-scheme: light)',
      description: '用户偏好浅色主题'
    },
    {
      name: '减少动画',
      query: '(prefers-reduced-motion: reduce)',
      description: '用户偏好减少动画效果'
    },
    {
      name: '高对比度',
      query: '(prefers-contrast: high)',
      description: '用户偏好高对比度'
    },
    {
      name: '高分辨率',
      query: '(min-resolution: 2dppx)',
      description: '设备像素比大于等于 2'
    },
    {
      name: '触摸设备',
      query: '(hover: none) and (pointer: coarse)',
      description: '主要输入设备是触摸'
    },
    {
      name: '鼠标设备',
      query: '(hover: hover) and (pointer: fine)',
      description: '主要输入设备是鼠标'
    }
  ];

  // 为每个常用查询创建 Hook
  const commonResults = commonQueries.map(query => ({
    ...query,
    matches: useMediaQuery(query.query)
  }));

  // 预设查询示例
  const presetQueries = [
    '(min-width: 768px)',
    '(max-width: 767px)',
    '(orientation: portrait)',
    '(prefers-color-scheme: dark)',
    '(min-resolution: 2dppx)',
    '(hover: hover)'
  ];

  return (
    <div className="space-y-6">
      {/* 自定义查询测试器 */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-4">自定义媒体查询测试</h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              输入媒体查询语句:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={customQuery}
                onChange={(e) => setCustomQuery(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                placeholder="例如: (min-width: 768px)"
              />
              <div className={\`px-4 py-2 rounded-lg font-medium text-sm \${
                customResult
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }\`}>
                {customResult ? '匹配' : '不匹配'}
              </div>
            </div>
          </div>

          {/* 预设查询快速选择 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              快速选择:
            </label>
            <div className="flex flex-wrap gap-2">
              {presetQueries.map((query) => (
                <button
                  key={query}
                  onClick={() => setCustomQuery(query)}
                  className={\`px-3 py-1 rounded text-sm font-mono transition-colors \${
                    customQuery === query
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }\`}
                >
                  {query}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 常用媒体查询状态 */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-4">常用媒体查询状态</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {commonResults.map((result) => (
            <div
              key={result.name}
              className={\`p-4 rounded-lg border-2 transition-colors \${
                result.matches
                  ? 'border-green-200 bg-green-50'
                  : 'border-red-200 bg-red-50'
              }\`}
            >
              <div className="flex items-center justify-between mb-2">
                <h5 className={\`font-medium \${
                  result.matches ? 'text-green-800' : 'text-red-800'
                }\`}>
                  {result.name}
                </h5>
                <div className={\`w-3 h-3 rounded-full \${
                  result.matches ? 'bg-green-500' : 'bg-red-500'
                }\`}></div>
              </div>
              
              <p className={\`text-sm mb-2 \${
                result.matches ? 'text-green-700' : 'text-red-700'
              }\`}>
                {result.description}
              </p>
              
              <code className={\`text-xs font-mono px-2 py-1 rounded \${
                result.matches 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }\`}>
                {result.query}
              </code>
              
              <div className={\`mt-2 text-xs font-medium \${
                result.matches ? 'text-green-600' : 'text-red-600'
              }\`}>
                状态: {result.matches ? '✓ 匹配' : '✗ 不匹配'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 媒体查询语法说明 */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-4">媒体查询语法说明</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-blue-700 mb-2">尺寸查询</h5>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>• <code className="bg-blue-100 px-1 rounded">(min-width: 768px)</code> - 最小宽度</li>
              <li>• <code className="bg-blue-100 px-1 rounded">(max-width: 767px)</code> - 最大宽度</li>
              <li>• <code className="bg-blue-100 px-1 rounded">(width: 768px)</code> - 精确宽度</li>
              <li>• <code className="bg-blue-100 px-1 rounded">(height: 600px)</code> - 精确高度</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-blue-700 mb-2">方向和特性</h5>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>• <code className="bg-blue-100 px-1 rounded">(orientation: portrait)</code> - 竖屏</li>
              <li>• <code className="bg-blue-100 px-1 rounded">(orientation: landscape)</code> - 横屏</li>
              <li>• <code className="bg-blue-100 px-1 rounded">(hover: hover)</code> - 支持悬停</li>
              <li>• <code className="bg-blue-100 px-1 rounded">(pointer: fine)</code> - 精确指针</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-blue-700 mb-2">用户偏好</h5>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>• <code className="bg-blue-100 px-1 rounded">(prefers-color-scheme: dark)</code> - 深色主题</li>
              <li>• <code className="bg-blue-100 px-1 rounded">(prefers-reduced-motion: reduce)</code> - 减少动画</li>
              <li>• <code className="bg-blue-100 px-1 rounded">(prefers-contrast: high)</code> - 高对比度</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-blue-700 mb-2">逻辑操作符</h5>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>• <code className="bg-blue-100 px-1 rounded">and</code> - 逻辑与</li>
              <li>• <code className="bg-blue-100 px-1 rounded">or</code> - 逻辑或</li>
              <li>• <code className="bg-blue-100 px-1 rounded">not</code> - 逻辑非</li>
              <li>• <code className="bg-blue-100 px-1 rounded">()</code> - 分组</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 使用提示 */}
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">使用提示</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• 在自定义查询输入框中输入媒体查询语句进行实时测试</li>
          <li>• 调整浏览器窗口大小观察尺寸相关查询的变化</li>
          <li>• 在系统设置中切换主题模式观察偏好查询的变化</li>
          <li>• 使用开发者工具的设备模拟器测试不同设备特性</li>
        </ul>
      </div>
    </div>
  );
};

export default MediaQueryTester;`,v=()=>{const s=h(),t=b(),d=()=>s.xs?1:s.sm?2:s.md?3:4,i=Array.from({length:12},(n,r)=>({id:r+1,title:`项目 ${r+1}`,content:`这是第 ${r+1} 个网格项目`}));return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-3",children:"设备信息"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-blue-700",children:"当前断点:"}),e.jsx("span",{className:"ml-2 px-2 py-1 bg-blue-100 rounded text-blue-800",children:s.currentBreakpoint})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-blue-700",children:"设备类型:"}),e.jsx("span",{className:"ml-2 px-2 py-1 bg-blue-100 rounded text-blue-800",children:s.deviceType})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-blue-700",children:"屏幕方向:"}),e.jsx("span",{className:"ml-2 px-2 py-1 bg-blue-100 rounded text-blue-800",children:t.orientation})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-3",children:"断点状态"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-sm",children:Object.entries(s).map(([n,r])=>typeof r!="boolean"?null:e.jsxs("div",{className:`flex items-center justify-between p-2 rounded ${r?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:[e.jsxs("span",{className:"font-medium",children:[n,":"]}),e.jsx("span",{className:`px-2 py-1 rounded text-xs ${r?"bg-green-200":"bg-red-200"}`,children:r?"✓":"✗"})]},n))})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border",children:[e.jsxs("h4",{className:"font-semibold text-gray-800 mb-3",children:["响应式网格 (当前: ",d()," 列)"]}),e.jsx("div",{className:"grid gap-4",style:{gridTemplateColumns:`repeat(${d()}, 1fr)`},children:i.map(n=>e.jsxs("div",{className:"bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg border border-purple-200 hover:shadow-md transition-shadow",children:[e.jsx("h5",{className:"font-semibold text-purple-800 mb-2",children:n.title}),e.jsx("p",{className:"text-purple-600 text-sm",children:n.content}),e.jsxs("div",{className:"mt-2 text-xs text-purple-500",children:["断点: ",s.currentBreakpoint," | 列数: ",d()]})]},n.id))})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-3",children:"屏幕方向信息"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:`w-4 h-4 rounded-full ${t.isPortrait?"bg-green-500":"bg-gray-300"}`}),e.jsxs("span",{className:"text-yellow-700",children:["竖屏模式 ",t.isPortrait?"(当前)":""]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:`w-4 h-4 rounded-full ${t.isLandscape?"bg-green-500":"bg-gray-300"}`}),e.jsxs("span",{className:"text-yellow-700",children:["横屏模式 ",t.isLandscape?"(当前)":""]})]})]})]}),e.jsxs("div",{className:"bg-indigo-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-indigo-800 mb-2",children:"使用提示"}),e.jsxs("ul",{className:"text-sm text-indigo-700 space-y-1",children:[e.jsx("li",{children:"• 调整浏览器窗口大小观察网格列数变化"}),e.jsx("li",{children:"• 断点状态会实时更新显示匹配情况"}),e.jsx("li",{children:"• 设备信息显示当前的断点和设备类型"}),e.jsx("li",{children:"• 屏幕方向信息在移动设备上更明显"})]})]})]})},j=`import React from 'react';
import { useBreakpoint, useOrientation } from './useMediaQuery';

const ResponsiveLayoutDemo: React.FC = () => {
  const breakpoint = useBreakpoint();
  const orientation = useOrientation();

  const getGridCols = () => {
    if (breakpoint.xs) return 1;
    if (breakpoint.sm) return 2;
    if (breakpoint.md) return 3;
    return 4;
  };

  const gridItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: \`项目 \${i + 1}\`,
    content: \`这是第 \${i + 1} 个网格项目\`
  }));

  return (
    <div className="space-y-6">
      {/* 设备信息面板 */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-3">设备信息</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-medium text-blue-700">当前断点:</span>
            <span className="ml-2 px-2 py-1 bg-blue-100 rounded text-blue-800">
              {breakpoint.currentBreakpoint}
            </span>
          </div>
          <div>
            <span className="font-medium text-blue-700">设备类型:</span>
            <span className="ml-2 px-2 py-1 bg-blue-100 rounded text-blue-800">
              {breakpoint.deviceType}
            </span>
          </div>
          <div>
            <span className="font-medium text-blue-700">屏幕方向:</span>
            <span className="ml-2 px-2 py-1 bg-blue-100 rounded text-blue-800">
              {orientation.orientation}
            </span>
          </div>
        </div>
      </div>

      {/* 断点状态面板 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-3">断点状态</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          {Object.entries(breakpoint).map(([key, value]) => {
            if (typeof value !== 'boolean') return null;
            return (
              <div
                key={key}
                className={\`flex items-center justify-between p-2 rounded \${
                  value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }\`}
              >
                <span className="font-medium">{key}:</span>
                <span className={\`px-2 py-1 rounded text-xs \${
                  value ? 'bg-green-200' : 'bg-red-200'
                }\`}>
                  {value ? '✓' : '✗'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 响应式网格 */}
      <div className="bg-white p-4 rounded-lg border">
        <h4 className="font-semibold text-gray-800 mb-3">
          响应式网格 (当前: {getGridCols()} 列)
        </h4>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: \`repeat(\${getGridCols()}, 1fr)\` }}
        >
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg border border-purple-200 hover:shadow-md transition-shadow"
            >
              <h5 className="font-semibold text-purple-800 mb-2">{item.title}</h5>
              <p className="text-purple-600 text-sm">{item.content}</p>
              <div className="mt-2 text-xs text-purple-500">
                断点: {breakpoint.currentBreakpoint} | 列数: {getGridCols()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 方向信息 */}
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-3">屏幕方向信息</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <div className={\`w-4 h-4 rounded-full \${
              orientation.isPortrait ? 'bg-green-500' : 'bg-gray-300'
            }\`}></div>
            <span className="text-yellow-700">
              竖屏模式 {orientation.isPortrait ? '(当前)' : ''}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={\`w-4 h-4 rounded-full \${
              orientation.isLandscape ? 'bg-green-500' : 'bg-gray-300'
            }\`}></div>
            <span className="text-yellow-700">
              横屏模式 {orientation.isLandscape ? '(当前)' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* 使用提示 */}
      <div className="bg-indigo-50 p-4 rounded-lg">
        <h4 className="font-semibold text-indigo-800 mb-2">使用提示</h4>
        <ul className="text-sm text-indigo-700 space-y-1">
          <li>• 调整浏览器窗口大小观察网格列数变化</li>
          <li>• 断点状态会实时更新显示匹配情况</li>
          <li>• 设备信息显示当前的断点和设备类型</li>
          <li>• 屏幕方向信息在移动设备上更明显</li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveLayoutDemo;`,m=`// 媒体查询相关的类型定义

export interface MediaQueryState {
  matches: boolean;
}

export interface BreakpointMatches {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}

export interface BreakpointResult extends BreakpointMatches {
  currentBreakpoint: string;
  deviceType: string;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export interface OrientationResult {
  isPortrait: boolean;
  isLandscape: boolean;
  orientation: 'portrait' | 'landscape';
}

export interface UserPreferencesResult {
  prefersDark: boolean;
  prefersLight: boolean;
  prefersReducedMotion: boolean;
  prefersHighContrast: boolean;
  colorScheme: 'dark' | 'light' | 'no-preference';
}

export interface MediaQueryBreakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface CommonMediaQueries {
  name: string;
  query: string;
  description: string;
}`,u=`import type {
  BreakpointResult,
  MediaQueryBreakpoints,
  OrientationResult,
  UserPreferencesResult,
} from "./types";
import { useEffect, useMemo, useState } from "react";

// 基础媒体查询 Hook
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // 设置初始值
    setMatches(mediaQuery.matches);

    // 添加监听器
    mediaQuery.addEventListener("change", handleChange);

    // 清理函数
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

// 多媒体查询 Hook
export function useMediaQueries(
  queries: Record<string, string>
): Record<string, boolean> {
  const [matches, setMatches] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") {
      return Object.keys(queries).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {} as Record<string, boolean>);
    }

    return Object.entries(queries).reduce((acc, [key, query]) => {
      acc[key] = window.matchMedia(query).matches;
      return acc;
    }, {} as Record<string, boolean>);
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueries = Object.entries(queries).map(([key, query]) => {
      const mq = window.matchMedia(query);
      return { key, mq };
    });

    const handleChange = () => {
      const newMatches = mediaQueries.reduce((acc, { key, mq }) => {
        acc[key] = mq.matches;
        return acc;
      }, {} as Record<string, boolean>);
      setMatches(newMatches);
    };

    // 设置初始值
    handleChange();

    // 添加监听器
    mediaQueries.forEach(({ mq }) => {
      mq.addEventListener("change", handleChange);
    });

    // 清理函数
    return () => {
      mediaQueries.forEach(({ mq }) => {
        mq.removeEventListener("change", handleChange);
      });
    };
  }, [queries]);

  return matches;
}

// 响应式断点 Hook
export function useBreakpoint(): BreakpointResult {
  const breakpoints: MediaQueryBreakpoints = useMemo(
    () => ({
      xs: "(max-width: 575px)",
      sm: "(min-width: 576px) and (max-width: 767px)",
      md: "(min-width: 768px) and (max-width: 991px)",
      lg: "(min-width: 992px) and (max-width: 1199px)",
      xl: "(min-width: 1200px)",
      mobile: "(max-width: 767px)",
      tablet: "(min-width: 768px) and (max-width: 1023px)",
      desktop: "(min-width: 1024px)",
    }),
    []
  );

  const matches = useMediaQueries(breakpoints);

  const currentBreakpoint = useMemo(() => {
    if (matches.xs) return "xs";
    if (matches.sm) return "sm";
    if (matches.md) return "md";
    if (matches.lg) return "lg";
    if (matches.xl) return "xl";
    return "unknown";
  }, [matches]);

  const deviceType = useMemo(() => {
    if (matches.mobile) return "mobile";
    if (matches.tablet) return "tablet";
    if (matches.desktop) return "desktop";
    return "unknown";
  }, [matches]);

  return {
    ...matches,
    currentBreakpoint,
    deviceType,
    isMobile: matches.mobile,
    isTablet: matches.tablet,
    isDesktop: matches.desktop,
  };
}

// 屏幕方向 Hook
export function useOrientation(): OrientationResult {
  const isPortrait = useMediaQuery("(orientation: portrait)");
  const isLandscape = useMediaQuery("(orientation: landscape)");

  return {
    isPortrait,
    isLandscape,
    orientation: isPortrait ? "portrait" : "landscape",
  };
}

// 用户偏好 Hook
export function useUserPreferences(): UserPreferencesResult {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const prefersLight = useMediaQuery("(prefers-color-scheme: light)");
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );
  const prefersHighContrast = useMediaQuery("(prefers-contrast: high)");

  return {
    prefersDark,
    prefersLight,
    prefersReducedMotion,
    prefersHighContrast,
    colorScheme: prefersDark
      ? "dark"
      : prefersLight
      ? "light"
      : "no-preference",
  };
}
`,w=()=>{const s=f(),[t,d]=o.useState("auto"),i=t==="auto"?s.colorScheme:t,n=i==="dark";return e.jsxs("div",{className:`space-y-6 p-6 rounded-lg transition-colors duration-300 ${n?"bg-gray-800 text-white":"bg-white text-gray-900 border border-gray-200"}`,children:[e.jsxs("div",{className:`p-4 rounded-lg ${n?"bg-gray-700":"bg-gray-50"}`,children:[e.jsx("h4",{className:`font-semibold mb-3 ${n?"text-gray-100":"text-gray-800"}`,children:"主题设置"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["auto","light","dark"].map(r=>e.jsx("button",{onClick:()=>d(r),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${t===r?n?"bg-blue-600 text-white":"bg-blue-500 text-white":n?"bg-gray-600 text-gray-200 hover:bg-gray-500":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:r==="auto"?"自动":r==="light"?"浅色":"深色"},r))}),e.jsxs("p",{className:`mt-2 text-sm ${n?"text-gray-300":"text-gray-600"}`,children:["当前主题: ",e.jsx("span",{className:"font-medium",children:i==="dark"?"深色模式":i==="light"?"浅色模式":"无偏好"})]})]}),e.jsxs("div",{className:`p-4 rounded-lg ${n?"bg-gray-700":"bg-blue-50"}`,children:[e.jsx("h4",{className:`font-semibold mb-3 ${n?"text-gray-100":"text-blue-800"}`,children:"系统偏好检测"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-sm ${n?"text-gray-300":"text-blue-700"}`,children:"深色模式偏好:"}),e.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${s.prefersDark?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:s.prefersDark?"是":"否"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-sm ${n?"text-gray-300":"text-blue-700"}`,children:"浅色模式偏好:"}),e.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${s.prefersLight?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:s.prefersLight?"是":"否"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-sm ${n?"text-gray-300":"text-blue-700"}`,children:"减少动画:"}),e.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${s.prefersReducedMotion?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:s.prefersReducedMotion?"是":"否"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-sm ${n?"text-gray-300":"text-blue-700"}`,children:"高对比度:"}),e.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${s.prefersHighContrast?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:s.prefersHighContrast?"是":"否"})]})]})]})]}),e.jsxs("div",{className:`p-4 rounded-lg ${n?"bg-gray-700":"bg-purple-50"}`,children:[e.jsx("h4",{className:`font-semibold mb-3 ${n?"text-gray-100":"text-purple-800"}`,children:"动画效果演示"}),e.jsx("div",{className:"flex items-center justify-center h-32",children:s.prefersReducedMotion?e.jsx("div",{className:`w-16 h-16 rounded-full flex items-center justify-center ${n?"bg-gray-600 text-gray-200":"bg-purple-200 text-purple-800"}`,children:"静态"}):e.jsx("div",{className:`w-16 h-16 rounded-full flex items-center justify-center animate-bounce ${n?"bg-blue-600 text-white":"bg-purple-500 text-white"}`,children:"动画"})}),e.jsx("p",{className:`text-center text-sm mt-2 ${n?"text-gray-300":"text-purple-600"}`,children:s.prefersReducedMotion?"检测到减少动画偏好，显示静态内容":"正常显示动画效果"})]}),e.jsxs("div",{className:`p-4 rounded-lg ${n?"bg-gray-700":"bg-green-50"}`,children:[e.jsx("h4",{className:`font-semibold mb-3 ${n?"text-gray-100":"text-green-800"}`,children:"对比度适配"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:`p-3 rounded border-2 ${s.prefersHighContrast?n?"border-white bg-black text-white":"border-black bg-white text-black":n?"border-gray-500 bg-gray-600 text-gray-200":"border-gray-300 bg-gray-100 text-gray-700"}`,children:[e.jsx("h5",{className:"font-medium mb-2",children:"示例卡片"}),e.jsx("p",{className:"text-sm",children:"这是一个根据对比度偏好调整的卡片示例。"})]}),e.jsxs("div",{className:`p-3 rounded ${s.prefersHighContrast?n?"bg-white text-black":"bg-black text-white":n?"bg-blue-600 text-blue-100":"bg-blue-500 text-blue-50"}`,children:[e.jsx("h5",{className:"font-medium mb-2",children:"高对比度卡片"}),e.jsx("p",{className:"text-sm",children:s.prefersHighContrast?"已启用高对比度模式":"正常对比度显示"})]})]})]}),e.jsxs("div",{className:`p-4 rounded-lg ${n?"bg-gray-700":"bg-yellow-50"}`,children:[e.jsx("h4",{className:`font-semibold mb-2 ${n?"text-gray-100":"text-yellow-800"}`,children:"使用说明"}),e.jsxs("ul",{className:`text-sm space-y-1 ${n?"text-gray-300":"text-yellow-700"}`,children:[e.jsx("li",{children:"• 在系统设置中切换深色/浅色模式观察自动主题变化"}),e.jsx("li",{children:'• 在辅助功能设置中启用"减少动画"观察动画效果变化'}),e.jsx("li",{children:'• 在辅助功能设置中启用"高对比度"观察对比度调整'}),e.jsx("li",{children:"• 手动主题设置会覆盖系统偏好"})]})]})]})},k=`import React, { useState } from 'react';
import { useUserPreferences } from './useMediaQuery';

const UserPreferencesDemo: React.FC = () => {
  const preferences = useUserPreferences();
  const [manualTheme, setManualTheme] = useState<'auto' | 'light' | 'dark'>('auto');

  // 确定当前主题
  const currentTheme = manualTheme === 'auto' 
    ? preferences.colorScheme 
    : manualTheme;

  const isDark = currentTheme === 'dark';

  return (
    <div className={\`space-y-6 p-6 rounded-lg transition-colors duration-300 \${
      isDark 
        ? 'bg-gray-800 text-white' 
        : 'bg-white text-gray-900 border border-gray-200'
    }\`}>
      {/* 主题控制面板 */}
      <div className={\`p-4 rounded-lg \${
        isDark ? 'bg-gray-700' : 'bg-gray-50'
      }\`}>
        <h4 className={\`font-semibold mb-3 \${
          isDark ? 'text-gray-100' : 'text-gray-800'
        }\`}>
          主题设置
        </h4>
        <div className="flex flex-wrap gap-2">
          {['auto', 'light', 'dark'].map((theme) => (
            <button
              key={theme}
              onClick={() => setManualTheme(theme as any)}
              className={\`px-4 py-2 rounded-lg text-sm font-medium transition-colors \${
                manualTheme === theme
                  ? isDark
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-500 text-white'
                  : isDark
                    ? 'bg-gray-600 text-gray-200 hover:bg-gray-500'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }\`}
            >
              {theme === 'auto' ? '自动' : theme === 'light' ? '浅色' : '深色'}
            </button>
          ))}
        </div>
        <p className={\`mt-2 text-sm \${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }\`}>
          当前主题: <span className="font-medium">
            {currentTheme === 'dark' ? '深色模式' : 
             currentTheme === 'light' ? '浅色模式' : '无偏好'}
          </span>
        </p>
      </div>

      {/* 系统偏好检测 */}
      <div className={\`p-4 rounded-lg \${
        isDark ? 'bg-gray-700' : 'bg-blue-50'
      }\`}>
        <h4 className={\`font-semibold mb-3 \${
          isDark ? 'text-gray-100' : 'text-blue-800'
        }\`}>
          系统偏好检测
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className={\`text-sm \${
                isDark ? 'text-gray-300' : 'text-blue-700'
              }\`}>
                深色模式偏好:
              </span>
              <span className={\`px-2 py-1 rounded text-xs font-medium \${
                preferences.prefersDark
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }\`}>
                {preferences.prefersDark ? '是' : '否'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className={\`text-sm \${
                isDark ? 'text-gray-300' : 'text-blue-700'
              }\`}>
                浅色模式偏好:
              </span>
              <span className={\`px-2 py-1 rounded text-xs font-medium \${
                preferences.prefersLight
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }\`}>
                {preferences.prefersLight ? '是' : '否'}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className={\`text-sm \${
                isDark ? 'text-gray-300' : 'text-blue-700'
              }\`}>
                减少动画:
              </span>
              <span className={\`px-2 py-1 rounded text-xs font-medium \${
                preferences.prefersReducedMotion
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }\`}>
                {preferences.prefersReducedMotion ? '是' : '否'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className={\`text-sm \${
                isDark ? 'text-gray-300' : 'text-blue-700'
              }\`}>
                高对比度:
              </span>
              <span className={\`px-2 py-1 rounded text-xs font-medium \${
                preferences.prefersHighContrast
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }\`}>
                {preferences.prefersHighContrast ? '是' : '否'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 动画演示 */}
      <div className={\`p-4 rounded-lg \${
        isDark ? 'bg-gray-700' : 'bg-purple-50'
      }\`}>
        <h4 className={\`font-semibold mb-3 \${
          isDark ? 'text-gray-100' : 'text-purple-800'
        }\`}>
          动画效果演示
        </h4>
        <div className="flex items-center justify-center h-32">
          {preferences.prefersReducedMotion ? (
            <div className={\`w-16 h-16 rounded-full flex items-center justify-center \${
              isDark ? 'bg-gray-600 text-gray-200' : 'bg-purple-200 text-purple-800'
            }\`}>
              静态
            </div>
          ) : (
            <div className={\`w-16 h-16 rounded-full flex items-center justify-center animate-bounce \${
              isDark ? 'bg-blue-600 text-white' : 'bg-purple-500 text-white'
            }\`}>
              动画
            </div>
          )}
        </div>
        <p className={\`text-center text-sm mt-2 \${
          isDark ? 'text-gray-300' : 'text-purple-600'
        }\`}>
          {preferences.prefersReducedMotion 
            ? '检测到减少动画偏好，显示静态内容' 
            : '正常显示动画效果'}
        </p>
      </div>

      {/* 对比度演示 */}
      <div className={\`p-4 rounded-lg \${
        isDark ? 'bg-gray-700' : 'bg-green-50'
      }\`}>
        <h4 className={\`font-semibold mb-3 \${
          isDark ? 'text-gray-100' : 'text-green-800'
        }\`}>
          对比度适配
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={\`p-3 rounded border-2 \${
            preferences.prefersHighContrast
              ? isDark
                ? 'border-white bg-black text-white'
                : 'border-black bg-white text-black'
              : isDark
                ? 'border-gray-500 bg-gray-600 text-gray-200'
                : 'border-gray-300 bg-gray-100 text-gray-700'
          }\`}>
            <h5 className="font-medium mb-2">示例卡片</h5>
            <p className="text-sm">
              这是一个根据对比度偏好调整的卡片示例。
            </p>
          </div>
          <div className={\`p-3 rounded \${
            preferences.prefersHighContrast
              ? isDark
                ? 'bg-white text-black'
                : 'bg-black text-white'
              : isDark
                ? 'bg-blue-600 text-blue-100'
                : 'bg-blue-500 text-blue-50'
          }\`}>
            <h5 className="font-medium mb-2">高对比度卡片</h5>
            <p className="text-sm">
              {preferences.prefersHighContrast 
                ? '已启用高对比度模式' 
                : '正常对比度显示'}
            </p>
          </div>
        </div>
      </div>

      {/* 使用说明 */}
      <div className={\`p-4 rounded-lg \${
        isDark ? 'bg-gray-700' : 'bg-yellow-50'
      }\`}>
        <h4 className={\`font-semibold mb-2 \${
          isDark ? 'text-gray-100' : 'text-yellow-800'
        }\`}>
          使用说明
        </h4>
        <ul className={\`text-sm space-y-1 \${
          isDark ? 'text-gray-300' : 'text-yellow-700'
        }\`}>
          <li>• 在系统设置中切换深色/浅色模式观察自动主题变化</li>
          <li>• 在辅助功能设置中启用"减少动画"观察动画效果变化</li>
          <li>• 在辅助功能设置中启用"高对比度"观察对比度调整</li>
          <li>• 手动主题设置会覆盖系统偏好</li>
        </ul>
      </div>
    </div>
  );
};

export default UserPreferencesDemo;`,Q=()=>e.jsx(x,{title:"媒体查询 Hook",description:"学习如何创建响应式的媒体查询 Hook，实现自适应布局和用户偏好检测。",overview:[{title:"核心概念",items:["媒体查询检测","响应式设计","用户偏好检测","断点管理"]},{title:"主要优势",items:["实时响应屏幕尺寸变化","检测用户系统偏好","统一的断点管理","良好的用户体验"]},{title:"适用场景",items:["响应式布局设计","主题切换功能","移动端适配","可访问性优化"]},{title:"注意事项",items:["考虑服务端渲染的兼容性","合理设置断点范围","注意性能优化","处理浏览器兼容性"]}],examples:[{title:"响应式布局演示",component:e.jsx(v,{}),description:"展示如何使用媒体查询 Hook 实现响应式布局和设备检测。",observationPoints:["调整浏览器窗口大小观察布局变化","网格列数根据屏幕尺寸自动调整","实时显示当前设备信息和断点状态","支持移动端、平板和桌面设备检测"],keyPoints:["useBreakpoint Hook 提供完整的断点信息","支持多种设备类型的检测","实时响应屏幕尺寸变化","提供当前断点和设备类型信息"],commonTraps:["服务端渲染时 window 对象不存在","断点范围设置不合理","忘记清理媒体查询监听器","过度依赖 JavaScript 实现响应式"],solutions:["添加 typeof window 检查","使用标准的断点规范","在 useEffect 清理函数中移除监听器","结合 CSS 媒体查询使用"],importantTips:["网格布局会根据当前断点自动调整列数","设备信息实时更新，包括断点、设备类型和屏幕方向","断点状态面板显示所有断点的匹配情况","支持 xs、sm、md、lg、xl 等标准断点"],preCode:[{title:"types",code:m},{title:"useMediaQuery",code:u}],codeExample:{title:"响应式布局演示",code:j}},{title:"用户偏好检测",component:e.jsx(w,{}),description:"展示如何检测用户的系统偏好设置，如深色模式、减少动画等。",observationPoints:["自动检测系统的深色模式设置","支持手动切换主题模式","检测用户的动画偏好设置","界面会根据主题自动调整颜色"],keyPoints:["useUserPreferences Hook 检测系统偏好","支持深色模式、减少动画等偏好","可以结合手动设置实现主题切换","提升应用的可访问性"],commonTraps:["忽视用户偏好设置","强制覆盖系统偏好","不处理偏好变化","缺少降级方案"],solutions:["检测并尊重用户偏好","提供手动覆盖选项","监听偏好变化事件","为不支持的浏览器提供降级"],importantTips:["主题会根据系统偏好自动切换","动画效果会根据用户偏好调整","对比度会根据可访问性需求调整","手动设置会覆盖系统偏好"],preCode:[{title:"types",code:m},{title:"useMediaQuery",code:u}],codeExample:{title:"用户偏好检测",code:k}},{title:"媒体查询测试器",component:e.jsx(y,{}),description:"提供一个交互式的媒体查询测试工具，可以测试自定义查询。",observationPoints:["输入自定义媒体查询语句进行测试","显示常用媒体查询的匹配状态","实时反映查询结果的变化","包含移动端、平板、桌面等常用查询"],keyPoints:["支持自定义媒体查询测试","提供常用查询的预设","实时显示查询匹配状态","帮助理解媒体查询语法"],commonTraps:["媒体查询语法错误","不了解查询优先级","忽视浏览器兼容性","查询过于复杂"],solutions:["使用标准的媒体查询语法","理解查询的逻辑关系","测试不同浏览器的支持","保持查询简洁明了"],importantTips:["可以输入任意媒体查询语句进行测试","常用查询列表显示实时匹配状态","语法说明帮助理解查询规则","支持复杂的逻辑组合查询"],preCode:[{title:"types",code:m},{title:"useMediaQuery",code:u}],codeExample:{title:"媒体查询测试器",code:N}}],tutorial:{concepts:["媒体查询是 CSS 的功能，可以在 JavaScript 中使用","window.matchMedia() 提供了媒体查询的 JavaScript API","MediaQueryList 对象可以监听查询状态的变化","响应式断点帮助统一管理不同屏幕尺寸","用户偏好查询可以检测系统级别的设置"],steps:["使用 window.matchMedia() 创建媒体查询对象","监听 MediaQueryList 的 change 事件","在 React 中封装为自定义 Hook","处理服务端渲染的兼容性","添加多查询支持和断点管理","实现用户偏好检测功能"],tips:["使用标准的断点规范确保一致性","考虑服务端渲染时的初始值","合理使用 useMemo 优化性能","结合 CSS 媒体查询使用","注意浏览器兼容性问题"]},interview:{questions:[{question:"媒体查询在 React 中的实现原理是什么？",answer:"实现原理：1) 使用 window.matchMedia() 创建 MediaQueryList 对象；2) 监听其 change 事件获取状态变化；3) 在 React Hook 中管理查询状态；4) 使用 useEffect 处理监听器的添加和清理；5) 考虑 SSR 兼容性。"},{question:"如何处理服务端渲染中的媒体查询？",answer:"SSR 处理方案：1) 检查 window 对象是否存在；2) 设置合理的初始值；3) 使用 useEffect 在客户端初始化；4) 考虑使用 CSS-in-JS 的媒体查询；5) 避免服务端和客户端的不一致。"},{question:"响应式设计的最佳实践有哪些？",answer:"最佳实践包括：1) 移动优先的设计策略；2) 使用标准的断点规范；3) 结合 CSS 和 JavaScript 媒体查询；4) 考虑用户偏好设置；5) 优化性能和加载速度；6) 测试不同设备和屏幕尺寸。"},{question:"如何优化媒体查询的性能？",answer:"性能优化方法：1) 使用 useMemo 缓存计算结果；2) 避免过多的媒体查询监听器；3) 合并相关的查询；4) 使用防抖处理频繁的变化；5) 优先使用 CSS 媒体查询；6) 合理设置断点数量。"}],keyPoints:["媒体查询是响应式设计的核心技术","JavaScript 媒体查询补充了 CSS 的不足","用户偏好检测提升了可访问性","服务端渲染需要特殊处理","性能优化对用户体验很重要"]},bestPractices:{dos:["使用标准的断点规范","处理服务端渲染兼容性","检测用户偏好设置","合理优化性能","结合 CSS 媒体查询使用"],donts:["不要忽视服务端渲染","不要设置过多的断点","不要忘记清理监听器","不要过度依赖 JavaScript","不要忽视可访问性"],patterns:["媒体查询 Hook 封装模式","响应式断点管理模式","用户偏好检测模式","多查询统一管理模式","SSR 兼容处理模式"]}});export{Q as default};
