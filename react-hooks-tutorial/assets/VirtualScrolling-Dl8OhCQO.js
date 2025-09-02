import{r as m,j as e}from"./index-D5aG88J3.js";import{C as x}from"./ComponentTemplate-DZf1RTVD.js";const v=`import React, { useCallback, useEffect, useRef, useState } from "react";
import { ListComponentProps } from "./types";
import { useVirtualScroll } from "./hooks";

// 普通列表组件（渲染所有项目）
export const RegularList: React.FC<ListComponentProps> = ({ items }) => {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount((prev) => prev + 1);
  }, []);

  return (
    <div className="h-96 overflow-y-auto border border-red-300 rounded-lg">
      <div className="p-2 bg-red-50 border-b">
        <h4 className="font-semibold text-red-700">
          普通列表（渲染所有 {items.length} 项）
        </h4>
        <p className="text-sm text-gray-600">渲染次数: {renderCount}</p>
      </div>
      <div className="space-y-1 p-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-2 bg-white rounded border hover:bg-gray-50"
          >
            <img
              src={item.avatar}
              alt={item.name}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div className="flex-1">
              <div className="font-medium text-sm">{item.name}</div>
              <div className="text-xs text-gray-500">{item.email}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{item.department}</div>
              <div className="text-xs text-gray-500">
                \${item.salary.toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 虚拟滚动列表组件
export const VirtualList: React.FC<ListComponentProps> = ({ items }) => {
  const [renderCount, setRenderCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const itemHeight = 60;
  const containerHeight = 320; // 减去头部高度

  const { visibleItems, totalHeight, offsetY, setScrollTop } = useVirtualScroll(
    {
      items,
      itemHeight,
      containerHeight,
    }
  );

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      setScrollTop(e.currentTarget.scrollTop);
    },
    [setScrollTop]
  );

  useEffect(() => {
    setRenderCount((prev) => prev + 1);
  }, []);

  return (
    <div className="h-96 border border-green-300 rounded-lg">
      <div className="p-2 bg-green-50 border-b">
        <h4 className="font-semibold text-green-700">
          虚拟滚动列表（只渲染可见项）
        </h4>
        <p className="text-sm text-gray-600">渲染次数: {renderCount}</p>
        <p className="text-sm text-gray-600">
          当前渲染: {visibleItems.length} / {items.length} 项
        </p>
      </div>
      <div
        ref={containerRef}
        className="h-80 overflow-y-auto"
        onScroll={handleScroll}
      >
        <div style={{ height: totalHeight, position: "relative" }}>
          <div style={{ transform: \`translateY(\${offsetY}px)\` }}>
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-2 bg-white border-b hover:bg-gray-50"
                style={{ height: itemHeight }}
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div className="flex-1">
                  <div className="font-medium text-sm">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.email}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{item.department}</div>
                  <div className="text-xs text-gray-500">
                    \${item.salary.toLocaleString()}
                  </div>
                </div>
                <div className="ml-2 text-xs text-gray-400">
                  #{item.index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};`,p=`import React, { useEffect, useState } from "react";
import { PerformanceMetrics } from "./types";

// 性能监控组件
export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderTime: 0,
    memoryUsage: 0,
  });

  useEffect(() => {
    const startTime = performance.now();

    // 模拟渲染时间测量
    const measureRenderTime = () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      setMetrics((prev) => ({ ...prev, renderTime }));
    };

    // 测量内存使用（如果支持）
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
        setMetrics((prev) => ({ ...prev, memoryUsage }));
      }
    };

    // 延迟测量以确保渲染完成
    setTimeout(() => {
      measureRenderTime();
      measureMemory();
    }, 0);

    // 定期更新内存使用情况
    const interval = setInterval(measureMemory, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
      <h4 className="font-semibold text-blue-700 mb-2">性能监控</h4>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-600">渲染时间:</span>
          <span className="ml-2 font-mono">
            {metrics.renderTime.toFixed(2)}ms
          </span>
        </div>
        <div>
          <span className="text-gray-600">内存使用:</span>
          <span className="ml-2 font-mono">
            {metrics.memoryUsage.toFixed(2)}MB
          </span>
        </div>
      </div>
    </div>
  );
};`,f=`// 虚拟滚动相关类型定义\r
\r
// 列表项接口\r
export interface ListItem {\r
  id: number;\r
  name: string;\r
  email: string;\r
  avatar: string;\r
  department: string;\r
  salary: number;\r
}\r
\r
// 虚拟滚动 Hook 参数接口\r
export interface UseVirtualScrollParams {\r
  items: any[];\r
  itemHeight: number;\r
  containerHeight: number;\r
  overscan?: number;\r
}\r
\r
// 可见范围接口\r
export interface VisibleRange {\r
  start: number;\r
  end: number;\r
}\r
\r
// 虚拟滚动返回值接口\r
export interface VirtualScrollResult {\r
  visibleItems: any[];\r
  totalHeight: number;\r
  offsetY: number;\r
  setScrollTop: (scrollTop: number) => void;\r
}\r
\r
// 性能监控指标接口\r
export interface PerformanceMetrics {\r
  renderTime: number;\r
  memoryUsage: number;\r
}\r
\r
// 列表组件 Props 接口\r
export interface ListComponentProps {\r
  items: ListItem[];\r
}`,b=`import { ListItem } from "./types";

// 生成大量测试数据
export const generateItems = (count: number): ListItem[] => {
  const departments = [
    "Engineering",
    "Design",
    "Marketing",
    "Sales",
    "HR",
    "Finance",
  ];
  const firstNames = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Eve",
    "Frank",
    "Grace",
    "Henry",
  ];
  const lastNames = [
    "Johnson",
    "Smith",
    "Brown",
    "Davis",
    "Wilson",
    "Miller",
    "Taylor",
    "Anderson",
  ];

  return Array.from({ length: count }, (_, index) => {
    const firstName = firstNames[index % firstNames.length];
    const lastName =
      lastNames[Math.floor(index / firstNames.length) % lastNames.length];
    const name = \`\${firstName} \${lastName} \${
      Math.floor(index / (firstNames.length * lastNames.length)) || ""
    }\`;

    return {
      id: index + 1,
      name: name.trim(),
      email: \`\${firstName.toLowerCase()}.\${lastName.toLowerCase()}\${index}@company.com\`,
      avatar: \`https://api.dicebear.com/7.x/avataaars/svg?seed=\${index}\`,
      department: departments[index % departments.length],
      salary: 50000 + (index % 10) * 10000 + Math.floor(Math.random() * 20000),
    };
  });
};`,N=t=>{const s=["Engineering","Design","Marketing","Sales","HR","Finance"],r=["Alice","Bob","Charlie","Diana","Eve","Frank","Grace","Henry"],n=["Johnson","Smith","Brown","Davis","Wilson","Miller","Taylor","Anderson"];return Array.from({length:t},(c,a)=>{const o=r[a%r.length],i=n[Math.floor(a/r.length)%n.length],d=`${o} ${i} ${Math.floor(a/(r.length*n.length))||""}`;return{id:a+1,name:d.trim(),email:`${o.toLowerCase()}.${i.toLowerCase()}${a}@company.com`,avatar:`https://api.dicebear.com/7.x/avataaars/svg?seed=${a}`,department:s[a%s.length],salary:5e4+a%10*1e4+Math.floor(Math.random()*2e4)}})};function y({items:t,itemHeight:s,containerHeight:r,overscan:n=5}){const[c,a]=m.useState(0),o=m.useMemo(()=>{const u=Math.floor(c/s),l=Math.min(u+Math.ceil(r/s),t.length-1);return{start:Math.max(0,u-n),end:Math.min(t.length-1,l+n)}},[c,s,r,t.length,n]),i=m.useMemo(()=>t.slice(o.start,o.end+1).map((u,l)=>({...u,index:o.start+l})),[t,o]),d=t.length*s,h=o.start*s;return{visibleItems:i,totalHeight:d,offsetY:h,setScrollTop:a}}const j=({items:t})=>{const[s,r]=m.useState(0);return m.useEffect(()=>{r(n=>n+1)},[]),e.jsxs("div",{className:"h-96 overflow-y-auto border border-red-300 rounded-lg",children:[e.jsxs("div",{className:"p-2 bg-red-50 border-b",children:[e.jsxs("h4",{className:"font-semibold text-red-700",children:["普通列表（渲染所有 ",t.length," 项）"]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["渲染次数: ",s]})]}),e.jsx("div",{className:"space-y-1 p-2",children:t.map(n=>e.jsxs("div",{className:"flex items-center p-2 bg-white rounded border hover:bg-gray-50",children:[e.jsx("img",{src:n.avatar,alt:n.name,className:"w-8 h-8 rounded-full mr-3"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium text-sm",children:n.name}),e.jsx("div",{className:"text-xs text-gray-500",children:n.email})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-sm font-medium",children:n.department}),e.jsxs("div",{className:"text-xs text-gray-500",children:["$",n.salary.toLocaleString()]})]})]},n.id))})]})},S=({items:t})=>{const[s,r]=m.useState(0),n=m.useRef(null),c=60,a=320,{visibleItems:o,totalHeight:i,offsetY:d,setScrollTop:h}=y({items:t,itemHeight:c,containerHeight:a}),u=m.useCallback(l=>{h(l.currentTarget.scrollTop)},[h]);return m.useEffect(()=>{r(l=>l+1)},[]),e.jsxs("div",{className:"h-96 border border-green-300 rounded-lg",children:[e.jsxs("div",{className:"p-2 bg-green-50 border-b",children:[e.jsx("h4",{className:"font-semibold text-green-700",children:"虚拟滚动列表（只渲染可见项）"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["渲染次数: ",s]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["当前渲染: ",o.length," / ",t.length," 项"]})]}),e.jsx("div",{ref:n,className:"h-80 overflow-y-auto",onScroll:u,children:e.jsx("div",{style:{height:i,position:"relative"},children:e.jsx("div",{style:{transform:`translateY(${d}px)`},children:o.map(l=>e.jsxs("div",{className:"flex items-center p-2 bg-white border-b hover:bg-gray-50",style:{height:c},children:[e.jsx("img",{src:l.avatar,alt:l.name,className:"w-8 h-8 rounded-full mr-3"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium text-sm",children:l.name}),e.jsx("div",{className:"text-xs text-gray-500",children:l.email})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-sm font-medium",children:l.department}),e.jsxs("div",{className:"text-xs text-gray-500",children:["$",l.salary.toLocaleString()]})]}),e.jsxs("div",{className:"ml-2 text-xs text-gray-400",children:["#",l.index+1]})]},l.id))})})})]})},M=()=>{const[t,s]=m.useState({renderTime:0,memoryUsage:0});return m.useEffect(()=>{const r=performance.now(),n=()=>{const i=performance.now()-r;s(d=>({...d,renderTime:i}))},c=()=>{if("memory"in performance){const i=performance.memory.usedJSHeapSize/1024/1024;s(d=>({...d,memoryUsage:i}))}};setTimeout(()=>{n(),c()},0);const a=setInterval(c,1e3);return()=>clearInterval(a)},[]),e.jsxs("div",{className:"bg-blue-50 p-3 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-700 mb-2",children:"性能监控"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"渲染时间:"}),e.jsxs("span",{className:"ml-2 font-mono",children:[t.renderTime.toFixed(2),"ms"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"内存使用:"}),e.jsxs("span",{className:"ml-2 font-mono",children:[t.memoryUsage.toFixed(2),"MB"]})]})]})]})},w=()=>{const[t,s]=m.useState(1e3),[r,n]=m.useState(!0),[c,a]=m.useState(!0),o=m.useMemo(()=>N(t),[t]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"控制面板"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-1",children:["数据量: ",t.toLocaleString()," 项"]}),e.jsxs("select",{value:t,onChange:i=>s(Number(i.target.value)),className:"w-full p-2 border rounded",children:[e.jsx("option",{value:100,children:"100 项"}),e.jsx("option",{value:1e3,children:"1,000 项"}),e.jsx("option",{value:5e3,children:"5,000 项"}),e.jsx("option",{value:1e4,children:"10,000 项"}),e.jsx("option",{value:5e4,children:"50,000 项"})]})]}),e.jsx("div",{children:e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:r,onChange:i=>n(i.target.checked),className:"mr-2"}),"显示普通列表"]})}),e.jsx("div",{children:e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:c,onChange:i=>a(i.target.checked),className:"mr-2"}),"显示虚拟滚动列表"]})})]})]}),e.jsx(M,{}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[r&&e.jsx("div",{children:e.jsx(j,{items:o})}),c&&e.jsx("div",{children:e.jsx(S,{items:o})})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"🔍 观察要点"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 当数据量较大时（如 10,000+ 项），普通列表会明显卡顿，而虚拟滚动列表保持流畅"}),e.jsx("li",{children:"• 虚拟滚动列表只渲染可见区域的项目，大大减少了 DOM 节点数量"}),e.jsx("li",{children:'• 滚动时观察"当前渲染"数量的变化，虚拟列表始终保持较少的渲染项目'}),e.jsx("li",{children:"• 性能监控显示虚拟滚动在内存使用和渲染时间上的优势"})]})]})]})},g=`import React, { useState, useMemo } from "react";
import { generateItems } from "./utils";
import { RegularList, VirtualList } from "./ListComponents";
import { PerformanceMonitor } from "./PerformanceMonitor";

// 虚拟滚动演示组件
export const VirtualScrollingDemo: React.FC = () => {
  const [itemCount, setItemCount] = useState(1000);
  const [showRegular, setShowRegular] = useState(true);
  const [showVirtual, setShowVirtual] = useState(true);

  // 生成测试数据
  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  return (
    <div className="space-y-6">
      {/* 控制面板 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-3">控制面板</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              数据量: {itemCount.toLocaleString()} 项
            </label>
            <select
              value={itemCount}
              onChange={(e) => setItemCount(Number(e.target.value))}
              className="w-full p-2 border rounded"
            >
              <option value={100}>100 项</option>
              <option value={1000}>1,000 项</option>
              <option value={5000}>5,000 项</option>
              <option value={10000}>10,000 项</option>
              <option value={50000}>50,000 项</option>
            </select>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={showRegular}
                onChange={(e) => setShowRegular(e.target.checked)}
                className="mr-2"
              />
              显示普通列表
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={showVirtual}
                onChange={(e) => setShowVirtual(e.target.checked)}
                className="mr-2"
              />
              显示虚拟滚动列表
            </label>
          </div>
        </div>
      </div>

      {/* 性能监控 */}
      <PerformanceMonitor />

      {/* 列表对比 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {showRegular && (
          <div>
            <RegularList items={items} />
          </div>
        )}
        {showVirtual && (
          <div>
            <VirtualList items={items} />
          </div>
        )}
      </div>

      {/* 观察要点 */}
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h4 className="font-semibold text-yellow-800 mb-2">🔍 观察要点</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>
            • 当数据量较大时（如 10,000+ 项），普通列表会明显卡顿，而虚拟滚动列表保持流畅
          </li>
          <li>
            • 虚拟滚动列表只渲染可见区域的项目，大大减少了 DOM 节点数量
          </li>
          <li>
            • 滚动时观察"当前渲染"数量的变化，虚拟列表始终保持较少的渲染项目
          </li>
          <li>
            • 性能监控显示虚拟滚动在内存使用和渲染时间上的优势
          </li>
        </ul>
      </div>
    </div>
  );
};`,R=`import { useMemo, useState } from "react";
import { UseVirtualScrollParams, VirtualScrollResult, VisibleRange } from "./types";

// 虚拟滚动 Hook
export function useVirtualScroll({
  items,
  itemHeight,
  containerHeight,
  overscan = 5,
}: UseVirtualScrollParams): VirtualScrollResult {
  const [scrollTop, setScrollTop] = useState(0);

  const visibleRange = useMemo((): VisibleRange => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight),
      items.length - 1
    );

    return {
      start: Math.max(0, startIndex - overscan),
      end: Math.min(items.length - 1, endIndex + overscan),
    };
  }, [scrollTop, itemHeight, containerHeight, items.length, overscan]);

  const visibleItems = useMemo(() => {
    return items
      .slice(visibleRange.start, visibleRange.end + 1)
      .map((item, index) => ({
        ...item,
        index: visibleRange.start + index,
      }));
  }, [items, visibleRange]);

  const totalHeight = items.length * itemHeight;
  const offsetY = visibleRange.start * itemHeight;

  return {
    visibleItems,
    totalHeight,
    offsetY,
    setScrollTop,
  };
}`,I=()=>e.jsx(x,{title:"虚拟滚动 (Virtual Scrolling)",description:"虚拟滚动是一种性能优化技术，只渲染可见区域的列表项，大大提升大数据量列表的渲染性能。",overview:[{title:"核心概念",items:["可视区域渲染：只渲染可视区域内的列表项","动态计算：根据滚动位置动态计算可见范围","虚拟高度：维护虚拟的总高度保持滚动条正确","位置偏移：使用绝对定位处理滚动位置偏移"]},{title:"主要优势",items:["显著提升大列表渲染性能","减少 DOM 节点数量，降低内存使用","保持流畅的滚动体验","支持大数据量（10000+ 项）的流畅展示"]},{title:"适用场景",items:["大数据量列表（1000+ 项）","表格数据展示和商品列表","聊天消息列表和评论系统","文件列表和日志展示"]},{title:"注意事项",items:["需要固定的项目高度进行精确计算","实现相对复杂，需要处理边界情况","需要正确处理滚动位置同步","可能影响 SEO（搜索引擎优化）"]}],examples:[{title:"虚拟滚动演示",component:e.jsx(w,{}),description:"对比普通列表和虚拟滚动列表在处理大量数据时的性能差异。",observationPoints:["当数据量较大时（如 10,000+ 项），普通列表会明显卡顿，而虚拟滚动列表保持流畅","虚拟滚动列表只渲染可见区域的项目，大大减少了 DOM 节点数量","滚动时观察'当前渲染'数量的变化，虚拟列表始终保持较少的渲染项目","性能监控显示虚拟滚动在内存使用和渲染时间上的优势"],keyPoints:["虚拟滚动只渲染可见区域的项目","通过计算滚动位置确定可见范围","使用绝对定位和偏移量模拟完整列表","显著减少 DOM 操作和内存使用"],commonTraps:["项目高度不固定导致计算错误","滚动位置同步问题","过度渲染（overscan）设置不当","没有正确处理边界情况"],solutions:["确保所有列表项具有相同的固定高度","正确处理滚动事件和位置计算","合理设置 overscan 值（通常 3-10 项）","添加边界检查和错误处理"],importantTips:["虚拟滚动适用于大数据量场景（通常 1000+ 项）","小数据量时使用虚拟滚动可能得不偿失","需要考虑搜索和过滤功能的实现","可以结合分页或无限滚动进一步优化"],preCode:[{title:"Types",code:f},{title:"hooks",code:R},{title:"Utils",code:b},{title:"ListComponents",code:v},{title:"VirtualScrollingDemo",code:g},{title:"PerformanceMonitor",code:p}],codeExample:{title:"虚拟滚动演示",code:g}}],tutorial:{concepts:["虚拟滚动的基本原理：只渲染可见区域","可见范围计算：根据滚动位置和容器高度","项目定位：使用绝对定位和偏移量","性能优化：减少 DOM 操作和内存使用"],steps:["创建虚拟滚动 Hook，管理滚动状态","计算可见范围，确定需要渲染的项目","实现滚动事件处理，更新滚动位置","使用绝对定位和偏移量渲染可见项目","添加 overscan 缓冲区，提升滚动体验"],tips:["确保所有列表项具有相同的固定高度","合理设置 overscan 值，平衡性能和体验","使用 useMemo 优化计算密集型操作","考虑添加加载状态和错误处理","可以结合 Intersection Observer API 进一步优化"]},interview:{questions:[{question:"什么是虚拟滚动？它解决了什么问题？",answer:"虚拟滚动是一种性能优化技术，只渲染可视区域内的列表项，而不是渲染整个列表。它主要解决大数据量列表渲染时的性能问题，包括：1) DOM 节点过多导致的渲染缓慢；2) 内存使用过高；3) 滚动卡顿。通过只渲染可见项目，可以显著提升性能。"},{question:"虚拟滚动的实现原理是什么？",answer:"虚拟滚动的核心原理包括：1) 计算可见范围：根据滚动位置、容器高度和项目高度计算哪些项目应该被渲染；2) 动态渲染：只渲染可见范围内的项目；3) 位置偏移：使用 transform 或绝对定位来正确定位可见项目；4) 虚拟高度：维护一个虚拟的总高度来保持滚动条的正确行为。"},{question:"虚拟滚动有哪些限制和注意事项？",answer:"虚拟滚动的主要限制包括：1) 需要固定的项目高度，动态高度实现复杂；2) 实现相对复杂，需要处理滚动同步、边界情况等；3) 可能影响 SEO，因为内容不是一次性渲染；4) 对于小数据量可能得不偿失；5) 需要额外处理搜索、过滤等功能。"},{question:"如何优化虚拟滚动的性能？",answer:"优化虚拟滚动性能的方法：1) 使用 useMemo 缓存计算结果；2) 合理设置 overscan 值，避免频繁重新渲染；3) 使用 useCallback 缓存事件处理函数；4) 避免在渲染过程中进行复杂计算；5) 考虑使用 Intersection Observer API；6) 实现项目回收和复用机制。"}],keyPoints:["虚拟滚动只渲染可见区域的项目","需要固定的项目高度进行精确计算","通过偏移量和绝对定位实现正确的视觉效果","适用于大数据量列表（通常 1000+ 项）","需要处理滚动同步和边界情况"]},bestPractices:{dos:["确保所有列表项具有相同的固定高度","合理设置 overscan 值（通常 3-10 项）","使用 useMemo 和 useCallback 优化性能","添加加载状态和错误处理","考虑用户体验，如平滑滚动","在大数据量场景下使用（1000+ 项）"],donts:["不要在小数据量时使用虚拟滚动","不要忽略边界情况的处理","不要在渲染过程中进行复杂计算","不要设置过大的 overscan 值","不要忘记处理滚动位置同步","不要在项目高度不固定时强行使用"],patterns:["结合分页或无限滚动进一步优化","使用 Intersection Observer API 检测可见性","实现项目回收和复用机制","添加虚拟滚动的配置选项","考虑使用成熟的虚拟滚动库（如 react-window）"]}});export{I as default};
