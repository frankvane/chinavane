import{r as u,j as e}from"./index-BWM6UHr8.js";import{c as j,C as y}from"./ComponentTemplate-ClBHhBQ8.js";const w=[{id:"user-module",name:"用户模块",description:"管理用户信息、认证和权限",isLoaded:!1},{id:"product-module",name:"产品模块",description:"管理产品信息、分类和库存",isLoaded:!1},{id:"order-module",name:"订单模块",description:"管理订单信息、状态和流程",isLoaded:!1}],v=j((m,g)=>({modules:w,loadedModules:new Map,loadModule:async n=>{const l=Date.now();await new Promise(r=>setTimeout(r,1e3+Math.random()*2e3));const o=Date.now()-l;m(r=>({modules:r.modules.map(i=>i.id===n?{...i,isLoaded:!0,loadTime:o}:i)}));const t={id:n,loadTime:o,data:`Store data for ${n}`,actions:{getData:()=>`Data from ${n}`,updateData:r=>`Updated: ${r}`}};m(r=>{const i=new Map(r.loadedModules);return i.set(n,t),{loadedModules:i}})},unloadModule:n=>{m(l=>({modules:l.modules.map(o=>o.id===n?{...o,isLoaded:!1,loadTime:void 0}:o)})),m(l=>{const o=new Map(l.loadedModules);return o.delete(n),{loadedModules:o}})},isModuleLoaded:n=>g().loadedModules.has(n),getModuleStore:n=>g().loadedModules.get(n)})),S=()=>{const[m,g]=u.useState(0),n=u.useRef(0),[l,o]=u.useState({}),{modules:t,loadModule:r,unloadModule:i,isModuleLoaded:M,getModuleStore:N}=v();n.current+=1,u.useEffect(()=>{g(n.current)},[t]);const x=async s=>{o(c=>({...c,[s]:!0}));try{await r(s)}finally{o(c=>({...c,[s]:!1}))}},p=s=>{i(s)},h=t.filter(s=>s.isLoaded).length,b=t.length;return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"静态加载问题演示"}),e.jsxs("div",{className:"mb-4 p-4 bg-red-50 rounded-lg border border-red-200",children:[e.jsx("h4",{className:"font-medium text-red-800 mb-2",children:"❌ 静态加载问题"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 所有模块在应用启动时一次性加载"}),e.jsx("li",{children:"• 增加初始包大小，影响首屏加载时间"}),e.jsx("li",{children:"• 加载不需要的模块，浪费资源"}),e.jsx("li",{children:"• 内存占用高，影响应用性能"}),e.jsx("li",{children:"• 难以实现按需加载和代码分割"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-red-50",children:[e.jsx("h4",{className:"font-medium text-red-800 mb-2",children:"静态加载组件"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["总模块数: ",b]}),e.jsxs("p",{children:["已加载模块: ",h]}),e.jsxs("p",{children:["加载进度: ",Math.round(h/b*100),"%"]}),e.jsxs("p",{className:"text-red-600 font-medium",children:["渲染次数: ",m]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-orange-50",children:[e.jsx("h4",{className:"font-medium text-orange-800 mb-2",children:"问题代码"}),e.jsxs("div",{className:"text-xs font-mono bg-gray-100 p-2 rounded",children:[e.jsx("div",{children:"// 静态导入所有模块"}),e.jsx("div",{children:"import { useUserStore } from './userStore';"}),e.jsx("div",{children:"import { useProductStore } from './productStore';"}),e.jsx("div",{children:"import { useOrderStore } from './orderStore';"}),e.jsx("div",{className:"mt-2",children:"// 所有模块都会被打包"}),e.jsx("div",{children:"const userStore = useUserStore();"}),e.jsx("div",{children:"const productStore = useProductStore();"}),e.jsx("div",{children:"const orderStore = useOrderStore();"}),e.jsx("div",{className:"mt-2 text-red-600",children:"// ❌ 增加包大小"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:t.map(s=>e.jsxs("div",{className:"border rounded-lg p-4 bg-gray-50",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h5",{className:"font-medium text-sm",children:s.name}),e.jsx("span",{className:`px-2 py-1 text-xs rounded ${s.isLoaded?"bg-green-100 text-green-800":"bg-gray-100 text-gray-600"}`,children:s.isLoaded?"已加载":"未加载"})]}),e.jsx("p",{className:"text-xs text-gray-600 mb-3",children:s.description}),s.isLoaded&&s.loadTime&&e.jsxs("p",{className:"text-xs text-blue-600 mb-3",children:["加载时间: ",s.loadTime,"ms"]}),e.jsx("div",{className:"flex gap-2",children:s.isLoaded?e.jsx("button",{onClick:()=>p(s.id),className:"px-3 py-1 text-xs bg-red-500 hover:bg-red-600 text-white rounded",children:"卸载模块"}):e.jsx("button",{onClick:()=>x(s.id),disabled:l[s.id],className:`px-3 py-1 text-xs rounded ${l[s.id]?"bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600 text-white"}`,children:l[s.id]?"加载中...":"加载模块"})})]},s.id))}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h4",{className:"font-medium text-yellow-800 mb-2",children:"⚠️ 观察要点"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"加载模块"}),"：所有模块都需要手动加载"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"内存占用"}),"：加载的模块会一直占用内存"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"加载时间"}),"：每个模块都有固定的加载时间"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"资源浪费"}),"：可能加载不需要的模块"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"性能影响"}),"：大量模块影响应用性能"]})]}),e.jsx("p",{className:"mt-2 text-yellow-600 font-medium",children:"⚠️ 注意：静态加载导致包大小增加，首屏加载时间长！"})]})]})]})})},L=()=>{const[m,g]=u.useState(0),n=u.useRef(0),[l,o]=u.useState({}),{modules:t,loadModule:r,unloadModule:i,isModuleLoaded:M,getModuleStore:N}=v();n.current+=1,u.useEffect(()=>{g(n.current)},[t]);const x=async d=>{o(a=>({...a,[d]:!0}));try{await r(d)}finally{o(a=>({...a,[d]:!1}))}},p=d=>{i(d)},h=async()=>{const d=t.filter(a=>!a.isLoaded);for(const a of d)await x(a.id)},b=()=>{t.filter(a=>a.isLoaded).forEach(a=>p(a.id))},s=t.filter(d=>d.isLoaded).length,c=t.length,f=t.filter(d=>d.isLoaded&&d.loadTime).reduce((d,a)=>d+(a.loadTime||0),0);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"动态加载解决方案演示"}),e.jsxs("div",{className:"mb-4 p-4 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"✅ 动态加载优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 按需加载模块，减少初始包大小"}),e.jsx("li",{children:"• 提升首屏加载速度，改善用户体验"}),e.jsx("li",{children:"• 支持代码分割和懒加载"}),e.jsx("li",{children:"• 降低内存占用，优化应用性能"}),e.jsx("li",{children:"• 便于模块管理和维护"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-green-50",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"动态加载组件"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["总模块数: ",c]}),e.jsxs("p",{children:["已加载模块: ",s]}),e.jsxs("p",{children:["加载进度:"," ",Math.round(s/c*100),"%"]}),e.jsxs("p",{children:["总加载时间: ",f,"ms"]}),e.jsxs("p",{className:"text-green-600 font-medium",children:["渲染次数: ",m]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-blue-50",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"解决方案代码"}),e.jsxs("div",{className:"text-xs font-mono bg-gray-100 p-2 rounded",children:[e.jsx("div",{children:"// 动态导入模块"}),e.jsx("div",{children:"const loadModule = async (moduleId) => {"}),e.jsx("div",{className:"ml-2",children:"const module = await import(`./modules/${moduleId}`);"}),e.jsx("div",{className:"ml-2",children:"return module.createStore();"}),e.jsx("div",{children:"};"}),e.jsx("div",{className:"mt-2",children:"// 按需加载"}),e.jsx("div",{children:"const store = await loadModule('userModule');"}),e.jsx("div",{className:"mt-2 text-green-600",children:"// ✅ 减少包大小"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-3 mb-4",children:[e.jsx("button",{onClick:h,disabled:s===c,className:`px-4 py-2 text-white rounded ${s===c?"bg-gray-400 cursor-not-allowed":"bg-green-500 hover:bg-green-600"}`,children:"加载所有模块"}),e.jsx("button",{onClick:b,disabled:s===0,className:`px-4 py-2 text-white rounded ${s===0?"bg-gray-400 cursor-not-allowed":"bg-red-500 hover:bg-red-600"}`,children:"卸载所有模块"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:t.map(d=>e.jsxs("div",{className:"border rounded-lg p-4 bg-gray-50",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h5",{className:"font-medium text-sm",children:d.name}),e.jsx("span",{className:`px-2 py-1 text-xs rounded ${d.isLoaded?"bg-green-100 text-green-800":"bg-gray-100 text-gray-600"}`,children:d.isLoaded?"已加载":"未加载"})]}),e.jsx("p",{className:"text-xs text-gray-600 mb-3",children:d.description}),d.isLoaded&&d.loadTime&&e.jsxs("p",{className:"text-xs text-blue-600 mb-3",children:["加载时间: ",d.loadTime,"ms"]}),e.jsx("div",{className:"flex gap-2",children:d.isLoaded?e.jsx("button",{onClick:()=>p(d.id),className:"px-3 py-1 text-xs bg-red-500 hover:bg-red-600 text-white rounded",children:"卸载模块"}):e.jsx("button",{onClick:()=>x(d.id),disabled:l[d.id],className:`px-3 py-1 text-xs rounded ${l[d.id]?"bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600 text-white"}`,children:l[d.id]?"加载中...":"加载模块"})})]},d.id))}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"⚠️ 观察要点"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"按需加载"}),"：只加载需要的模块"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"加载时间"}),"：每个模块独立加载，时间可控"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"内存优化"}),"：可以卸载不需要的模块"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"性能提升"}),"：减少初始包大小，提升加载速度"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"用户体验"}),"：首屏加载更快，交互更流畅"]})]}),e.jsx("p",{className:"mt-2 text-blue-600 font-medium",children:"✅ 动态加载实现按需加载，优化应用性能和用户体验！"})]})]})]})})},C=`import React, { useState, useRef, useEffect } from 'react';
import { useDynamicStoreManager } from '../stores/dynamicStoreManager';

const StaticLoadingDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);
  const renderCountRef = useRef(0);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  const { modules, loadModule, unloadModule, isModuleLoaded, getModuleStore } = useDynamicStoreManager();

  // 渲染计数 - 修复逻辑
  renderCountRef.current += 1;
  useEffect(() => {
    setRenderCount(renderCountRef.current);
  }, [modules]);

  const handleLoadModule = async (moduleId: string) => {
    setLoadingStates(prev => ({ ...prev, [moduleId]: true }));
    try {
      await loadModule(moduleId);
    } finally {
      setLoadingStates(prev => ({ ...prev, [moduleId]: false }));
    }
  };

  const handleUnloadModule = (moduleId: string) => {
    unloadModule(moduleId);
  };

  const loadedModulesCount = modules.filter(m => m.isLoaded).length;
  const totalModulesCount = modules.length;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">静态加载问题演示</h3>
        
        <div className="mb-4 p-4 bg-red-50 rounded-lg border border-red-200">
          <h4 className="font-medium text-red-800 mb-2">❌ 静态加载问题</h4>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• 所有模块在应用启动时一次性加载</li>
            <li>• 增加初始包大小，影响首屏加载时间</li>
            <li>• 加载不需要的模块，浪费资源</li>
            <li>• 内存占用高，影响应用性能</li>
            <li>• 难以实现按需加载和代码分割</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4 bg-red-50">
            <h4 className="font-medium text-red-800 mb-2">静态加载组件</h4>
            <div className="text-sm space-y-1">
              <p>总模块数: {totalModulesCount}</p>
              <p>已加载模块: {loadedModulesCount}</p>
              <p>加载进度: {Math.round((loadedModulesCount / totalModulesCount) * 100)}%</p>
              <p className="text-red-600 font-medium">渲染次数: {renderCount}</p>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-orange-50">
            <h4 className="font-medium text-orange-800 mb-2">问题代码</h4>
            <div className="text-xs font-mono bg-gray-100 p-2 rounded">
              <div>// 静态导入所有模块</div>
              <div>import &#123; useUserStore &#125; from './userStore';</div>
              <div>import &#123; useProductStore &#125; from './productStore';</div>
              <div>import &#123; useOrderStore &#125; from './orderStore';</div>
              <div className="mt-2">// 所有模块都会被打包</div>
              <div>const userStore = useUserStore();</div>
              <div>const productStore = useProductStore();</div>
              <div>const orderStore = useOrderStore();</div>
              <div className="mt-2 text-red-600">// ❌ 增加包大小</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {modules.map((module) => (
              <div key={module.id} className="border rounded-lg p-4 bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-sm">{module.name}</h5>
                  <span className={\`px-2 py-1 text-xs rounded \${
                    module.isLoaded 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-600'
                  }\`}>
                    {module.isLoaded ? '已加载' : '未加载'}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-3">{module.description}</p>
                {module.isLoaded && module.loadTime && (
                  <p className="text-xs text-blue-600 mb-3">
                    加载时间: {module.loadTime}ms
                  </p>
                )}
                <div className="flex gap-2">
                  {!module.isLoaded ? (
                    <button
                      onClick={() => handleLoadModule(module.id)}
                      disabled={loadingStates[module.id]}
                      className={\`px-3 py-1 text-xs rounded \${
                        loadingStates[module.id]
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }\`}
                    >
                      {loadingStates[module.id] ? '加载中...' : '加载模块'}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUnloadModule(module.id)}
                      className="px-3 py-1 text-xs bg-red-500 hover:bg-red-600 text-white rounded"
                    >
                      卸载模块
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-800 mb-2">⚠️ 观察要点</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• <strong>加载模块</strong>：所有模块都需要手动加载</li>
              <li>• <strong>内存占用</strong>：加载的模块会一直占用内存</li>
              <li>• <strong>加载时间</strong>：每个模块都有固定的加载时间</li>
              <li>• <strong>资源浪费</strong>：可能加载不需要的模块</li>
              <li>• <strong>性能影响</strong>：大量模块影响应用性能</li>
            </ul>
            <p className="mt-2 text-yellow-600 font-medium">
              ⚠️ 注意：静态加载导致包大小增加，首屏加载时间长！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticLoadingDemo;
`,D=`import React, { useEffect, useRef, useState } from "react";

import { useDynamicStoreManager } from "../stores/dynamicStoreManager";

const DynamicLoadingDemo: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);
  const renderCountRef = useRef(0);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );

  const { modules, loadModule, unloadModule, isModuleLoaded, getModuleStore } =
    useDynamicStoreManager();

  // 渲染计数 - 修复逻辑
  renderCountRef.current += 1;
  useEffect(() => {
    setRenderCount(renderCountRef.current);
  }, [modules]);

  const handleLoadModule = async (moduleId: string) => {
    setLoadingStates((prev) => ({ ...prev, [moduleId]: true }));
    try {
      await loadModule(moduleId);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [moduleId]: false }));
    }
  };

  const handleUnloadModule = (moduleId: string) => {
    unloadModule(moduleId);
  };

  const handleLoadAllModules = async () => {
    const unloadedModules = modules.filter((m) => !m.isLoaded);
    for (const module of unloadedModules) {
      await handleLoadModule(module.id);
    }
  };

  const handleUnloadAllModules = () => {
    const loadedModules = modules.filter((m) => m.isLoaded);
    loadedModules.forEach((module) => handleUnloadModule(module.id));
  };

  const loadedModulesCount = modules.filter((m) => m.isLoaded).length;
  const totalModulesCount = modules.length;
  const totalLoadTime = modules
    .filter((m) => m.isLoaded && m.loadTime)
    .reduce((sum, m) => sum + (m.loadTime || 0), 0);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">动态加载解决方案演示</h3>

        <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-medium text-green-800 mb-2">✅ 动态加载优势</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• 按需加载模块，减少初始包大小</li>
            <li>• 提升首屏加载速度，改善用户体验</li>
            <li>• 支持代码分割和懒加载</li>
            <li>• 降低内存占用，优化应用性能</li>
            <li>• 便于模块管理和维护</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4 bg-green-50">
            <h4 className="font-medium text-green-800 mb-2">动态加载组件</h4>
            <div className="text-sm space-y-1">
              <p>总模块数: {totalModulesCount}</p>
              <p>已加载模块: {loadedModulesCount}</p>
              <p>
                加载进度:{" "}
                {Math.round((loadedModulesCount / totalModulesCount) * 100)}%
              </p>
              <p>总加载时间: {totalLoadTime}ms</p>
              <p className="text-green-600 font-medium">
                渲染次数: {renderCount}
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-blue-50">
            <h4 className="font-medium text-blue-800 mb-2">解决方案代码</h4>
            <div className="text-xs font-mono bg-gray-100 p-2 rounded">
              <div>// 动态导入模块</div>
              <div>const loadModule = async (moduleId) =&gt; &#123;</div>
              <div className="ml-2">
                const module = await import(\`./modules/$&#123;moduleId&#125;\`);
              </div>
              <div className="ml-2">return module.createStore();</div>
              <div>&#125;;</div>
              <div className="mt-2">// 按需加载</div>
              <div>const store = await loadModule('userModule');</div>
              <div className="mt-2 text-green-600">// ✅ 减少包大小</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={handleLoadAllModules}
              disabled={loadedModulesCount === totalModulesCount}
              className={\`px-4 py-2 text-white rounded \${
                loadedModulesCount === totalModulesCount
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }\`}
            >
              加载所有模块
            </button>

            <button
              onClick={handleUnloadAllModules}
              disabled={loadedModulesCount === 0}
              className={\`px-4 py-2 text-white rounded \${
                loadedModulesCount === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }\`}
            >
              卸载所有模块
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {modules.map((module) => (
              <div key={module.id} className="border rounded-lg p-4 bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-sm">{module.name}</h5>
                  <span
                    className={\`px-2 py-1 text-xs rounded \${
                      module.isLoaded
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-600"
                    }\`}
                  >
                    {module.isLoaded ? "已加载" : "未加载"}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-3">
                  {module.description}
                </p>
                {module.isLoaded && module.loadTime && (
                  <p className="text-xs text-blue-600 mb-3">
                    加载时间: {module.loadTime}ms
                  </p>
                )}
                <div className="flex gap-2">
                  {!module.isLoaded ? (
                    <button
                      onClick={() => handleLoadModule(module.id)}
                      disabled={loadingStates[module.id]}
                      className={\`px-3 py-1 text-xs rounded \${
                        loadingStates[module.id]
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-500 hover:bg-blue-600 text-white"
                      }\`}
                    >
                      {loadingStates[module.id] ? "加载中..." : "加载模块"}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUnloadModule(module.id)}
                      className="px-3 py-1 text-xs bg-red-500 hover:bg-red-600 text-white rounded"
                    >
                      卸载模块
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">⚠️ 观察要点</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>
                • <strong>按需加载</strong>：只加载需要的模块
              </li>
              <li>
                • <strong>加载时间</strong>：每个模块独立加载，时间可控
              </li>
              <li>
                • <strong>内存优化</strong>：可以卸载不需要的模块
              </li>
              <li>
                • <strong>性能提升</strong>：减少初始包大小，提升加载速度
              </li>
              <li>
                • <strong>用户体验</strong>：首屏加载更快，交互更流畅
              </li>
            </ul>
            <p className="mt-2 text-blue-600 font-medium">
              ✅ 动态加载实现按需加载，优化应用性能和用户体验！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicLoadingDemo;
`,T=`import { create } from 'zustand';
import { DynamicModule, DynamicStoreManager } from '../types';

// 模拟动态模块定义
const availableModules: DynamicModule[] = [
  {
    id: 'user-module',
    name: '用户模块',
    description: '管理用户信息、认证和权限',
    isLoaded: false,
  },
  {
    id: 'product-module',
    name: '产品模块',
    description: '管理产品信息、分类和库存',
    isLoaded: false,
  },
  {
    id: 'order-module',
    name: '订单模块',
    description: '管理订单信息、状态和流程',
    isLoaded: false,
  },
];

// 动态 Store 管理器
const useDynamicStoreManager = create<DynamicStoreManager>((set, get) => ({
  modules: availableModules,
  loadedModules: new Map(),

  loadModule: async (moduleId: string) => {
    const startTime = Date.now();
    
    // 模拟异步加载
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const loadTime = Date.now() - startTime;
    
    set((state) => ({
      modules: state.modules.map(module => 
        module.id === moduleId 
          ? { ...module, isLoaded: true, loadTime }
          : module
      ),
    }));

    // 模拟创建对应的 store
    const mockStore = {
      id: moduleId,
      loadTime,
      data: \`Store data for \${moduleId}\`,
      actions: {
        getData: () => \`Data from \${moduleId}\`,
        updateData: (newData: string) => \`Updated: \${newData}\`,
      },
    };

    set((state) => {
      const newLoadedModules = new Map(state.loadedModules);
      newLoadedModules.set(moduleId, mockStore);
      return { loadedModules: newLoadedModules };
    });
  },

  unloadModule: (moduleId: string) => {
    set((state) => ({
      modules: state.modules.map(module => 
        module.id === moduleId 
          ? { ...module, isLoaded: false, loadTime: undefined }
          : module
      ),
    }));

    set((state) => {
      const newLoadedModules = new Map(state.loadedModules);
      newLoadedModules.delete(moduleId);
      return { loadedModules: newLoadedModules };
    });
  },

  isModuleLoaded: (moduleId: string) => {
    return get().loadedModules.has(moduleId);
  },

  getModuleStore: (moduleId: string) => {
    return get().loadedModules.get(moduleId);
  },
}));

export { useDynamicStoreManager };
`,I=()=>e.jsx(y,{title:"动态 Store（按需加载）",description:"学习如何实现动态 store 的按需加载策略。掌握代码分割、懒加载和性能优化最佳实践。",overview:[{title:"核心概念",items:["动态 store 是在运行时按需加载的模块化状态管理方案。","通过代码分割和懒加载技术，减少初始包大小。","支持模块的独立加载、卸载和生命周期管理。","实现按需加载，提升应用性能和用户体验。","便于大型应用的模块化架构和维护。"]},{title:"主要优势",items:["减少初始包大小，提升首屏加载速度。","支持按需加载，避免加载不必要的模块。","降低内存占用，优化应用性能。","便于代码分割和模块化管理。","提升用户体验，支持渐进式加载。"]},{title:"适用场景",items:["大型应用的复杂状态管理。","需要按需加载功能模块的应用。","对首屏加载速度要求较高的项目。","需要支持代码分割的应用。","多团队协作的模块化项目。"]},{title:"注意事项",items:["合理设计模块边界和依赖关系。","处理模块加载失败和错误情况。","考虑模块间的数据共享和通信。","建立清晰的模块生命周期管理。","优化加载策略和缓存机制。"]}],examples:[{title:"静态加载问题演示",component:e.jsx(S,{}),description:"演示静态加载的问题，所有模块在启动时一次性加载",observationPoints:["观察静态加载组件的模块加载过程","注意所有模块都需要手动加载","理解静态加载对包大小的影响","体验静态加载的性能问题","观察渲染次数：通常为 7 次（1 次初始渲染 + 3 个模块 × 2 次状态变化）"],keyPoints:["静态加载增加初始包大小","所有模块在启动时加载","影响首屏加载时间","浪费资源和内存","渲染次数反映了状态变化的频率"],commonTraps:["静态导入所有模块","忽视包大小优化","不理解代码分割的重要性","缺乏按需加载策略"],solutions:["使用动态导入加载模块","实现按需加载策略","优化模块边界设计","建立加载缓存机制"],codeExample:{code:C,title:"静态加载问题演示组件"}},{title:"动态加载解决方案",component:e.jsx(L,{}),description:"演示动态加载的解决方案，按需加载和卸载模块",observationPoints:["观察动态加载组件的模块管理","注意按需加载的性能优势","理解动态加载的灵活性","体验模块卸载的内存优化","观察渲染次数：通常为 8 次（比静态加载多 1 次，因为增加了批量操作功能）"],keyPoints:["按需加载减少包大小","支持模块的独立管理","提升首屏加载速度","优化内存使用","渲染次数体现了功能复杂度的差异"],commonTraps:["不理解动态加载的实现","忽视模块生命周期管理","缺乏错误处理机制","不考虑加载策略优化"],solutions:["实现动态导入机制","建立模块生命周期管理","添加错误处理和重试","优化加载策略和缓存"],codeExample:{code:D,title:"动态加载解决方案组件"}}],tutorial:{concepts:["动态 store 是大型应用状态管理的重要策略","按需加载可以显著提升应用性能","代码分割是现代前端开发的最佳实践","模块化架构有助于团队协作和维护","合理的加载策略可以优化用户体验","渲染次数反映了状态管理的效率"],steps:["分析应用的功能模块和依赖关系","设计模块边界和加载策略","实现动态导入和模块管理","建立错误处理和重试机制","优化加载性能和缓存策略","持续监控和优化加载效果"],tips:["优先考虑按需加载的必要性","合理设计模块的边界和大小","建立清晰的模块依赖关系","实现完善的错误处理机制","定期监控和优化加载性能","通过渲染次数监控性能表现"]},interview:{questions:[{question:"什么是动态 store？它有什么优势？",answer:"动态 store 是在运行时按需加载的模块化状态管理方案。它的优势包括：减少初始包大小、提升首屏加载速度、支持按需加载、降低内存占用、便于模块化管理等。"},{question:"如何实现动态 store 的按需加载？",answer:"可以通过动态导入（import()）、代码分割、懒加载等技术实现。关键是建立模块管理系统，支持模块的加载、卸载和生命周期管理。"},{question:"动态加载对性能有什么影响？",answer:"动态加载可以提升首屏加载速度，减少初始包大小，但会增加运行时加载时间。需要平衡初始加载和运行时性能，选择合适的加载策略。"},{question:"如何处理动态加载的错误情况？",answer:"需要实现完善的错误处理机制，包括加载失败重试、降级方案、错误边界等。同时要提供用户友好的加载状态和错误提示。"},{question:"动态 store 适合什么场景？",answer:"适合大型应用、需要按需加载功能模块的应用、对首屏加载速度要求较高的项目、需要支持代码分割的应用等场景。"},{question:"如何通过渲染次数评估性能？",answer:"渲染次数反映了组件重新渲染的频率，可以用来评估状态管理的效率。渲染次数越少，说明状态管理越高效，性能越好。"}],keyPoints:["动态 store 是大型应用架构的重要策略","按需加载可以显著提升应用性能","代码分割是现代前端开发的最佳实践","合理的加载策略可以优化用户体验","建立完善的错误处理机制很重要","渲染次数是性能评估的重要指标"]},bestPractices:{dos:["按需加载必要的模块","建立清晰的模块边界","实现完善的错误处理","优化加载策略和缓存","监控加载性能和用户体验","建立模块生命周期管理","通过渲染次数监控性能"],donts:["不要过度拆分模块","不要忽视错误处理","不要缺乏加载策略","不要忽视性能监控","不要忽视用户体验","不要忽视渲染性能"],patterns:["代码分割：将应用拆分为独立的代码块","懒加载：在需要时才加载模块","预加载：提前加载可能需要的模块","缓存策略：缓存已加载的模块","性能监控：通过渲染次数评估性能"]},codeExamples:[{title:"动态 Store 管理器",code:T,language:"typescript"}]});export{I as default};
