import{r as l,j as e}from"./index-D5aG88J3.js";import{C as L}from"./ComponentTemplate-DZf1RTVD.js";const $=()=>{const[t,v]=l.useState(""),s=l.useDeferredValue(t),[N,m]=l.useState([]),o=d=>{const g=new Date().toLocaleTimeString();m(y=>[...y.slice(-5),`${g}: ${d}`])},u=l.useMemo(()=>{if(!s)return[];o(`开始计算搜索建议: "${s}"`);const g=["苹果手机","苹果电脑","苹果平板","苹果手表","苹果耳机","华为手机","华为电脑","华为平板","华为手表","华为耳机","小米手机","小米电脑","小米平板","小米手表","小米耳机","三星手机","三星电脑","三星平板","三星手表","三星耳机","iPhone 15","iPhone 14","iPhone 13","MacBook Pro","MacBook Air","iPad Pro","iPad Air","Apple Watch","AirPods Pro","AirPods Max"].filter(y=>y.toLowerCase().includes(s.toLowerCase()));return o(`搜索建议计算完成，找到 ${g.length} 个建议`),g},[s]),p=d=>{v(d),o(`输入更新: "${d}"`)},h=()=>{v(""),o("清空输入")},c=()=>{m([])},a=t!==s;return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"搜索建议演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:h,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空输入"}),e.jsx("button",{onClick:c,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"搜索输入:"}),e.jsx("input",{type:"text",value:t,onChange:d=>p(d.target.value),placeholder:"输入产品名称...",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-1",children:"当前输入值:"}),e.jsxs("p",{className:"text-sm text-blue-700 font-mono",children:['"',t,'" (',t.length," 字符)"]})]}),e.jsxs("div",{className:"p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-1",children:"延迟值:"}),e.jsxs("p",{className:"text-sm text-green-700 font-mono",children:['"',s,'" (',s.length," 字符)"]})]})]}),e.jsx("div",{className:"flex items-center space-x-4",children:e.jsxs("div",{className:`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${a?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${a?"bg-yellow-500 animate-pulse":"bg-green-500"}`}),e.jsx("span",{children:a?"延迟更新中...":"同步状态"})]})}),e.jsxs("div",{className:"border border-gray-200 rounded-lg",children:[e.jsx("div",{className:"bg-gray-50 px-3 py-2 border-b border-gray-200",children:e.jsxs("h4",{className:"font-semibold text-gray-700",children:["搜索建议 (",u.length,")"]})}),e.jsx("div",{className:"max-h-48 overflow-y-auto",children:u.length===0?e.jsx("div",{className:"p-4 text-center text-gray-500",children:s===""?"输入关键词查看建议":"没有找到相关建议"}):e.jsx("div",{className:"divide-y divide-gray-100",children:u.map((d,g)=>e.jsx("div",{className:"px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer",onClick:()=>p(d),children:d},g))})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[300px]",children:N.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"输入内容查看日志"}):e.jsx("div",{className:"space-y-1 max-h-60 overflow-y-auto",children:N.map((d,g)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:d},g))})}),e.jsxs("div",{className:"mt-4 p-3 bg-purple-50 rounded border border-purple-200",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"状态对比:"}),e.jsxs("div",{className:"text-sm text-purple-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"输入值长度:"})," ",t.length]}),e.jsxs("p",{children:[e.jsx("strong",{children:"延迟值长度:"})," ",s.length]}),e.jsxs("p",{children:[e.jsx("strong",{children:"是否延迟:"})," ",a?"是":"否"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"建议数量:"})," ",u.length]})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-blue-50 rounded border border-blue-200",children:e.jsx("p",{className:"text-sm text-blue-800",children:"💡 useDeferredValue 延迟搜索建议的计算，保持输入框的响应性。快速输入时，建议计算会被延迟到输入稳定后。"})})]})},S=()=>{const[t,v]=l.useState(""),[s,N]=l.useState("all"),m=l.useDeferredValue(t),o=l.useDeferredValue(s),[u,p]=l.useState([]),h=r=>{const x=new Date().toLocaleTimeString();p(f=>[...f.slice(-5),`${x}: ${r}`])},c=l.useMemo(()=>{const r=["电子产品","服装","食品","图书","家居"],x=[];for(let f=1;f<=2e3;f++){const C=r[Math.floor(Math.random()*r.length)];x.push({id:f,name:`${C}商品${f}`,category:C,price:Math.floor(Math.random()*1e3)+10,description:`这是一个优质的${C}，编号${f}，性价比很高。`})}return x},[]),a=l.useMemo(()=>{h(`开始过滤产品: 搜索"${m}", 分类"${o}"`);let r=c;return o!=="all"&&(r=r.filter(x=>x.category===o)),m&&(r=r.filter(x=>x.name.toLowerCase().includes(m.toLowerCase())||x.description.toLowerCase().includes(m.toLowerCase()))),h(`过滤完成，找到 ${r.length} 个产品`),r},[c,m,o]),d=r=>{v(r),h(`搜索输入: "${r}"`)},g=r=>{N(r),h(`分类选择: "${r}"`)},y=()=>{v(""),N("all"),h("清空所有过滤条件")},j=()=>{p([])},n=t!==m,i=s!==o,b=n||i,w=["all","电子产品","服装","食品","图书","家居"],D={all:"全部分类",电子产品:"电子产品",服装:"服装",食品:"食品",图书:"图书",家居:"家居"};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"产品过滤演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:y,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空过滤"}),e.jsx("button",{onClick:j,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"搜索产品:"}),e.jsx("input",{type:"text",value:t,onChange:r=>d(r.target.value),placeholder:"输入产品名称...",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"选择分类:"}),e.jsx("select",{value:s,onChange:r=>g(r.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:w.map(r=>e.jsx("option",{value:r,children:D[r]},r))})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"当前值:"}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"搜索:"}),' "',t,'"']}),e.jsxs("p",{children:[e.jsx("strong",{children:"分类:"})," ",D[s]]})]})]}),e.jsxs("div",{className:"p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"延迟值:"}),e.jsxs("div",{className:"text-sm text-green-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"搜索:"}),' "',m,'"']}),e.jsxs("p",{children:[e.jsx("strong",{children:"分类:"})," ",D[o]]})]})]})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("div",{className:`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${b?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${b?"bg-yellow-500 animate-pulse":"bg-green-500"}`}),e.jsx("span",{children:b?"过滤更新中...":"过滤完成"})]}),e.jsxs("span",{className:"text-sm text-gray-600",children:[c.length.toLocaleString()," → ",a.length.toLocaleString()," 个产品"]})]}),e.jsxs("div",{className:"border border-gray-200 rounded-lg",children:[e.jsx("div",{className:"bg-gray-50 px-3 py-2 border-b border-gray-200",children:e.jsxs("h4",{className:"font-semibold text-gray-700",children:["产品列表 (",a.length,")"]})}),e.jsx("div",{className:"max-h-60 overflow-y-auto",children:a.length===0?e.jsx("div",{className:"p-4 text-center text-gray-500",children:"没有找到匹配的产品"}):e.jsxs("div",{className:"divide-y divide-gray-100",children:[a.slice(0,50).map(r=>e.jsx("div",{className:"p-3 hover:bg-gray-50",children:e.jsx("div",{className:"flex justify-between items-start",children:e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"font-medium text-gray-900",children:r.name}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:r.description}),e.jsxs("div",{className:"flex items-center space-x-2 mt-2",children:[e.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded",children:r.category}),e.jsxs("span",{className:"text-sm font-semibold text-green-600",children:["¥",r.price]})]})]})})},r.id)),a.length>50&&e.jsxs("div",{className:"p-3 text-center text-sm text-gray-500 bg-gray-50",children:["还有 ",(a.length-50).toLocaleString()," 个产品..."]})]})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[200px]",children:u.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"修改过滤条件查看日志"}):e.jsx("div",{className:"space-y-1 max-h-40 overflow-y-auto",children:u.map((r,x)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:r},x))})}),e.jsxs("div",{className:"mt-4 p-3 bg-indigo-50 rounded border border-indigo-200",children:[e.jsx("h4",{className:"font-semibold text-indigo-800 mb-2",children:"过滤状态:"}),e.jsxs("div",{className:"text-sm text-indigo-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"总产品数:"})," ",c.length.toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"过滤结果:"})," ",a.length.toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"搜索延迟:"})," ",n?"是":"否"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"分类延迟:"})," ",i?"是":"否"]})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-teal-50 rounded border border-teal-200",children:[e.jsx("h4",{className:"font-semibold text-teal-800 mb-2",children:"性能优化:"}),e.jsxs("ul",{className:"text-sm text-teal-700 space-y-1",children:[e.jsx("li",{children:"• 延迟过滤计算，保持输入响应性"}),e.jsx("li",{children:"• 减少不必要的重新渲染"}),e.jsx("li",{children:"• 智能批量更新"}),e.jsx("li",{children:"• 提升用户体验"})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-green-50 rounded border border-green-200",children:e.jsx("p",{className:"text-sm text-green-800",children:"💡 useDeferredValue 延迟产品过滤的计算，在用户快速修改过滤条件时保持界面响应性。"})})]})},P=()=>{const[t,v]=l.useState(""),s=l.useDeferredValue(t),[N,m]=l.useTransition(),[o,u]=l.useState([]),p=n=>{const i=new Date().toLocaleTimeString();u(b=>[...b.slice(-5),`${i}: ${n}`])},h=(n,i)=>{if(!n)return[];p(`${i} 开始计算: "${n}"`);const b=[];for(let w=0;w<1e3;w++)`项目${w}`.includes(n)&&b.push(`${i} - 项目${w}`);return p(`${i} 计算完成，找到 ${b.length} 个结果`),b},c=l.useMemo(()=>h(t,"立即计算"),[t]),a=l.useMemo(()=>h(s,"延迟计算"),[s]),d=n=>{v(n),p(`输入更新: "${n}"`)},g=()=>{v(""),p("清空输入")},y=()=>{u([])},j=t!==s;return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"性能对比演示"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:g,className:"px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空输入"}),e.jsx("button",{onClick:y,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"搜索输入 (快速输入测试性能):"}),e.jsx("input",{type:"text",value:t,onChange:n=>d(n.target.value),placeholder:"快速输入数字测试...",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),e.jsx("div",{className:"flex items-center space-x-4",children:e.jsxs("div",{className:`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${j?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${j?"bg-yellow-500 animate-pulse":"bg-green-500"}`}),e.jsx("span",{children:j?"延迟更新中...":"同步状态"})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"border border-red-200 rounded-lg",children:[e.jsxs("div",{className:"bg-red-50 px-3 py-2 border-b border-red-200",children:[e.jsx("h4",{className:"font-semibold text-red-800",children:"❌ 立即计算 (无优化)"}),e.jsx("p",{className:"text-xs text-red-600 mt-1",children:"每次输入都立即计算"})]}),e.jsxs("div",{className:"p-3",children:[e.jsxs("div",{className:"text-sm text-gray-600 mb-2",children:['查询: "',t,'" → ',c.length," 个结果"]}),e.jsx("div",{className:"max-h-32 overflow-y-auto bg-gray-50 rounded p-2",children:c.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"输入内容查看结果"}):e.jsxs("div",{className:"space-y-1",children:[c.slice(0,10).map((n,i)=>e.jsx("div",{className:"text-xs text-gray-700",children:n},i)),c.length>10&&e.jsxs("div",{className:"text-xs text-gray-500",children:["还有 ",c.length-10," 个结果..."]})]})})]})]}),e.jsxs("div",{className:"border border-green-200 rounded-lg",children:[e.jsxs("div",{className:"bg-green-50 px-3 py-2 border-b border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800",children:"✅ 延迟计算 (useDeferredValue)"}),e.jsx("p",{className:"text-xs text-green-600 mt-1",children:"延迟计算，保持响应性"})]}),e.jsxs("div",{className:"p-3",children:[e.jsxs("div",{className:"text-sm text-gray-600 mb-2",children:['查询: "',s,'" → ',a.length," 个结果"]}),e.jsx("div",{className:"max-h-32 overflow-y-auto bg-gray-50 rounded p-2",children:a.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"输入内容查看结果"}):e.jsxs("div",{className:"space-y-1",children:[a.slice(0,10).map((n,i)=>e.jsx("div",{className:"text-xs text-gray-700",children:n},i)),a.length>10&&e.jsxs("div",{className:"text-xs text-gray-500",children:["还有 ",a.length-10," 个结果..."]})]})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[200px]",children:o.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"输入内容查看日志"}):e.jsx("div",{className:"space-y-1 max-h-40 overflow-y-auto",children:o.map((n,i)=>e.jsx("div",{className:"text-xs font-mono text-gray-700",children:n},i))})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-orange-50 rounded-lg border border-orange-200",children:[e.jsx("h4",{className:"font-semibold text-orange-800 mb-2",children:"🔍 观察要点:"}),e.jsxs("ul",{className:"text-sm text-orange-700 space-y-1",children:[e.jsx("li",{children:"• 快速输入时，立即计算会频繁触发"}),e.jsx("li",{children:"• 延迟计算会等待输入稳定后执行"}),e.jsx("li",{children:"• 输入框始终保持响应性"}),e.jsx("li",{children:"• 查看日志中的计算频率差异"})]})]}),e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"📊 性能对比:"}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"当前输入:"}),' "',t,'"']}),e.jsxs("p",{children:[e.jsx("strong",{children:"延迟输入:"}),' "',s,'"']}),e.jsxs("p",{children:[e.jsx("strong",{children:"是否延迟:"})," ",j?"是":"否"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"立即结果:"})," ",c.length," 个"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"延迟结果:"})," ",a.length," 个"]})]})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-purple-50 rounded border border-purple-200",children:e.jsx("p",{className:"text-sm text-purple-800",children:"💡 对比可以看出，useDeferredValue 显著减少了计算频率，在快速输入时保持界面响应性，避免不必要的计算。"})})]})},k=`import React, { useState, useDeferredValue, useMemo } from 'react';

// 基础用法演示 - 搜索建议
const BasicUsageDemo: React.FC = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-5), \`\${timestamp}: \${message}\`]);
  };

  // 模拟搜索建议数据
  const suggestions = useMemo(() => {
    if (!deferredQuery) return [];
    
    addLog(\`开始计算搜索建议: "\${deferredQuery}"\`);
    
    // 模拟复杂计算
    const allSuggestions = [
      '苹果手机', '苹果电脑', '苹果平板', '苹果手表', '苹果耳机',
      '华为手机', '华为电脑', '华为平板', '华为手表', '华为耳机',
      '小米手机', '小米电脑', '小米平板', '小米手表', '小米耳机',
      '三星手机', '三星电脑', '三星平板', '三星手表', '三星耳机',
      'iPhone 15', 'iPhone 14', 'iPhone 13', 'MacBook Pro', 'MacBook Air',
      'iPad Pro', 'iPad Air', 'Apple Watch', 'AirPods Pro', 'AirPods Max'
    ];
    
    const filtered = allSuggestions.filter(item => 
      item.toLowerCase().includes(deferredQuery.toLowerCase())
    );
    
    addLog(\`搜索建议计算完成，找到 \${filtered.length} 个建议\`);
    return filtered;
  }, [deferredQuery]);

  const handleInputChange = (value: string) => {
    setQuery(value);
    addLog(\`输入更新: "\${value}"\`);
  };

  const clearInput = () => {
    setQuery('');
    addLog('清空输入');
  };

  const clearLogs = () => {
    setLogs([]);
  };

  const isDeferred = query !== deferredQuery;

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">搜索建议演示</h3>
        <div className="space-x-2">
          <button
            onClick={clearInput}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
          >
            清空输入
          </button>
          <button
            onClick={clearLogs}
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
          >
            清空日志
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              搜索输入:
            </label>
            <input
              type="text"
              value={query}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="输入产品名称..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-blue-50 rounded border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-1">当前输入值:</h4>
              <p className="text-sm text-blue-700 font-mono">
                "{query}" ({query.length} 字符)
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded border border-green-200">
              <h4 className="font-semibold text-green-800 mb-1">延迟值:</h4>
              <p className="text-sm text-green-700 font-mono">
                "{deferredQuery}" ({deferredQuery.length} 字符)
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className={\`flex items-center space-x-2 px-3 py-1 rounded-full text-sm \${
              isDeferred ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
            }\`}>
              <div className={\`w-2 h-2 rounded-full \${
                isDeferred ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'
              }\`} />
              <span>{isDeferred ? '延迟更新中...' : '同步状态'}</span>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg">
            <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">
              <h4 className="font-semibold text-gray-700">搜索建议 ({suggestions.length})</h4>
            </div>
            <div className="max-h-48 overflow-y-auto">
              {suggestions.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  {deferredQuery === '' ? '输入关键词查看建议' : '没有找到相关建议'}
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {suggestions.map((suggestion, index) => (
                    <div 
                      key={index} 
                      className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleInputChange(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>
          <div className="bg-gray-50 rounded-lg p-3 min-h-[300px]">
            {logs.length === 0 ? (
              <p className="text-gray-500 text-sm">输入内容查看日志</p>
            ) : (
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {logs.map((log, index) => (
                  <div key={index} className="text-sm font-mono text-gray-700">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="mt-4 p-3 bg-purple-50 rounded border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">状态对比:</h4>
            <div className="text-sm text-purple-700 space-y-1">
              <p><strong>输入值长度:</strong> {query.length}</p>
              <p><strong>延迟值长度:</strong> {deferredQuery.length}</p>
              <p><strong>是否延迟:</strong> {isDeferred ? '是' : '否'}</p>
              <p><strong>建议数量:</strong> {suggestions.length}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
        <p className="text-sm text-blue-800">
          💡 useDeferredValue 延迟搜索建议的计算，保持输入框的响应性。快速输入时，建议计算会被延迟到输入稳定后。
        </p>
      </div>
    </div>
  );
};

export default BasicUsageDemo;`,T=`import React, { useState, useDeferredValue, useMemo } from 'react';\r
\r
// 产品接口定义\r
interface Product {\r
  id: number;\r
  name: string;\r
  category: string;\r
  price: number;\r
  description: string;\r
}\r
\r
// 实时过滤演示\r
const FilterDemo: React.FC = () => {\r
  const [searchTerm, setSearchTerm] = useState('');\r
  const [categoryFilter, setCategoryFilter] = useState('all');\r
  const deferredSearchTerm = useDeferredValue(searchTerm);\r
  const deferredCategoryFilter = useDeferredValue(categoryFilter);\r
  const [logs, setLogs] = useState<string[]>([]);\r
\r
  const addLog = (message: string) => {\r
    const timestamp = new Date().toLocaleTimeString();\r
    setLogs(prev => [...prev.slice(-5), \`\${timestamp}: \${message}\`]);\r
  };\r
\r
  // 模拟大量产品数据\r
  const allProducts = useMemo(() => {\r
    const categories = ['电子产品', '服装', '食品', '图书', '家居'];\r
    const products: Product[] = [];\r
    \r
    for (let i = 1; i <= 2000; i++) {\r
      const category = categories[Math.floor(Math.random() * categories.length)];\r
      products.push({\r
        id: i,\r
        name: \`\${category}商品\${i}\`,\r
        category,\r
        price: Math.floor(Math.random() * 1000) + 10,\r
        description: \`这是一个优质的\${category}，编号\${i}，性价比很高。\`\r
      });\r
    }\r
    \r
    return products;\r
  }, []);\r
\r
  // 过滤后的产品\r
  const filteredProducts = useMemo(() => {\r
    addLog(\`开始过滤产品: 搜索"\${deferredSearchTerm}", 分类"\${deferredCategoryFilter}"\`);\r
    \r
    let filtered = allProducts;\r
    \r
    // 按分类过滤\r
    if (deferredCategoryFilter !== 'all') {\r
      filtered = filtered.filter(product => product.category === deferredCategoryFilter);\r
    }\r
    \r
    // 按搜索词过滤\r
    if (deferredSearchTerm) {\r
      filtered = filtered.filter(product => \r
        product.name.toLowerCase().includes(deferredSearchTerm.toLowerCase()) ||\r
        product.description.toLowerCase().includes(deferredSearchTerm.toLowerCase())\r
      );\r
    }\r
    \r
    addLog(\`过滤完成，找到 \${filtered.length} 个产品\`);\r
    return filtered;\r
  }, [allProducts, deferredSearchTerm, deferredCategoryFilter]);\r
\r
  const handleSearchChange = (value: string) => {\r
    setSearchTerm(value);\r
    addLog(\`搜索输入: "\${value}"\`);\r
  };\r
\r
  const handleCategoryChange = (category: string) => {\r
    setCategoryFilter(category);\r
    addLog(\`分类选择: "\${category}"\`);\r
  };\r
\r
  const clearFilters = () => {\r
    setSearchTerm('');\r
    setCategoryFilter('all');\r
    addLog('清空所有过滤条件');\r
  };\r
\r
  const clearLogs = () => {\r
    setLogs([]);\r
  };\r
\r
  const isSearchDeferred = searchTerm !== deferredSearchTerm;\r
  const isCategoryDeferred = categoryFilter !== deferredCategoryFilter;\r
  const isAnyDeferred = isSearchDeferred || isCategoryDeferred;\r
\r
  const categories = ['all', '电子产品', '服装', '食品', '图书', '家居'];\r
  const categoryLabels: Record<string, string> = {\r
    all: '全部分类',\r
    电子产品: '电子产品',\r
    服装: '服装',\r
    食品: '食品',\r
    图书: '图书',\r
    家居: '家居'\r
  };\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg border border-gray-200">\r
      <div className="flex items-center justify-between mb-4">\r
        <h3 className="text-lg font-semibold text-gray-800">产品过滤演示</h3>\r
        <div className="space-x-2">\r
          <button\r
            onClick={clearFilters}\r
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"\r
          >\r
            清空过滤\r
          </button>\r
          <button\r
            onClick={clearLogs}\r
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"\r
          >\r
            清空日志\r
          </button>\r
        </div>\r
      </div>\r
      \r
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
        <div className="space-y-4">\r
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
            <div>\r
              <label className="block text-sm font-medium text-gray-700 mb-2">\r
                搜索产品:\r
              </label>\r
              <input\r
                type="text"\r
                value={searchTerm}\r
                onChange={(e) => handleSearchChange(e.target.value)}\r
                placeholder="输入产品名称..."\r
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
              />\r
            </div>\r
            \r
            <div>\r
              <label className="block text-sm font-medium text-gray-700 mb-2">\r
                选择分类:\r
              </label>\r
              <select\r
                value={categoryFilter}\r
                onChange={(e) => handleCategoryChange(e.target.value)}\r
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
              >\r
                {categories.map(category => (\r
                  <option key={category} value={category}>\r
                    {categoryLabels[category]}\r
                  </option>\r
                ))}\r
              </select>\r
            </div>\r
          </div>\r
          \r
          <div className="grid grid-cols-2 gap-4">\r
            <div className="p-3 bg-blue-50 rounded border border-blue-200">\r
              <h4 className="font-semibold text-blue-800 mb-2">当前值:</h4>\r
              <div className="text-sm text-blue-700 space-y-1">\r
                <p><strong>搜索:</strong> "{searchTerm}"</p>\r
                <p><strong>分类:</strong> {categoryLabels[categoryFilter]}</p>\r
              </div>\r
            </div>\r
            <div className="p-3 bg-green-50 rounded border border-green-200">\r
              <h4 className="font-semibold text-green-800 mb-2">延迟值:</h4>\r
              <div className="text-sm text-green-700 space-y-1">\r
                <p><strong>搜索:</strong> "{deferredSearchTerm}"</p>\r
                <p><strong>分类:</strong> {categoryLabels[deferredCategoryFilter]}</p>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div className="flex items-center space-x-4">\r
            <div className={\`flex items-center space-x-2 px-3 py-1 rounded-full text-sm \${\r
              isAnyDeferred ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'\r
            }\`}>\r
              <div className={\`w-2 h-2 rounded-full \${\r
                isAnyDeferred ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'\r
              }\`} />\r
              <span>{isAnyDeferred ? '过滤更新中...' : '过滤完成'}</span>\r
            </div>\r
            <span className="text-sm text-gray-600">\r
              {allProducts.length.toLocaleString()} → {filteredProducts.length.toLocaleString()} 个产品\r
            </span>\r
          </div>\r
          \r
          <div className="border border-gray-200 rounded-lg">\r
            <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">\r
              <h4 className="font-semibold text-gray-700">产品列表 ({filteredProducts.length})</h4>\r
            </div>\r
            <div className="max-h-60 overflow-y-auto">\r
              {filteredProducts.length === 0 ? (\r
                <div className="p-4 text-center text-gray-500">\r
                  没有找到匹配的产品\r
                </div>\r
              ) : (\r
                <div className="divide-y divide-gray-100">\r
                  {filteredProducts.slice(0, 50).map((product) => (\r
                    <div key={product.id} className="p-3 hover:bg-gray-50">\r
                      <div className="flex justify-between items-start">\r
                        <div className="flex-1">\r
                          <h5 className="font-medium text-gray-900">{product.name}</h5>\r
                          <p className="text-sm text-gray-600 mt-1">{product.description}</p>\r
                          <div className="flex items-center space-x-2 mt-2">\r
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">\r
                              {product.category}\r
                            </span>\r
                            <span className="text-sm font-semibold text-green-600">\r
                              ¥{product.price}\r
                            </span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  ))}\r
                  {filteredProducts.length > 50 && (\r
                    <div className="p-3 text-center text-sm text-gray-500 bg-gray-50">\r
                      还有 {(filteredProducts.length - 50).toLocaleString()} 个产品...\r
                    </div>\r
                  )}\r
                </div>\r
              )}\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div>\r
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>\r
          <div className="bg-gray-50 rounded-lg p-3 min-h-[200px]">\r
            {logs.length === 0 ? (\r
              <p className="text-gray-500 text-sm">修改过滤条件查看日志</p>\r
            ) : (\r
              <div className="space-y-1 max-h-40 overflow-y-auto">\r
                {logs.map((log, index) => (\r
                  <div key={index} className="text-sm font-mono text-gray-700">\r
                    {log}\r
                  </div>\r
                ))}\r
              </div>\r
            )}\r
          </div>\r
          \r
          <div className="mt-4 p-3 bg-indigo-50 rounded border border-indigo-200">\r
            <h4 className="font-semibold text-indigo-800 mb-2">过滤状态:</h4>\r
            <div className="text-sm text-indigo-700 space-y-1">\r
              <p><strong>总产品数:</strong> {allProducts.length.toLocaleString()}</p>\r
              <p><strong>过滤结果:</strong> {filteredProducts.length.toLocaleString()}</p>\r
              <p><strong>搜索延迟:</strong> {isSearchDeferred ? '是' : '否'}</p>\r
              <p><strong>分类延迟:</strong> {isCategoryDeferred ? '是' : '否'}</p>\r
            </div>\r
          </div>\r
          \r
          <div className="mt-4 p-3 bg-teal-50 rounded border border-teal-200">\r
            <h4 className="font-semibold text-teal-800 mb-2">性能优化:</h4>\r
            <ul className="text-sm text-teal-700 space-y-1">\r
              <li>• 延迟过滤计算，保持输入响应性</li>\r
              <li>• 减少不必要的重新渲染</li>\r
              <li>• 智能批量更新</li>\r
              <li>• 提升用户体验</li>\r
            </ul>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">\r
        <p className="text-sm text-green-800">\r
          💡 useDeferredValue 延迟产品过滤的计算，在用户快速修改过滤条件时保持界面响应性。\r
        </p>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default FilterDemo;\r
export type { Product };`,V=`import React, { useState, useDeferredValue, useMemo, useTransition } from 'react';\r
\r
// 对比演示 - 有无 useDeferredValue\r
const ComparisonDemo: React.FC = () => {\r
  const [query, setQuery] = useState('');\r
  const deferredQuery = useDeferredValue(query);\r
  const [isPending, startTransition] = useTransition();\r
  const [logs, setLogs] = useState<string[]>([]);\r
\r
  const addLog = (message: string) => {\r
    const timestamp = new Date().toLocaleTimeString();\r
    setLogs(prev => [...prev.slice(-5), \`\${timestamp}: \${message}\`]);\r
  };\r
\r
  // 模拟复杂计算\r
  const expensiveCalculation = (searchQuery: string, label: string) => {\r
    if (!searchQuery) return [];\r
    \r
    addLog(\`\${label} 开始计算: "\${searchQuery}"\`);\r
    \r
    // 模拟大量数据处理\r
    const results = [];\r
    for (let i = 0; i < 1000; i++) {\r
      if (\`项目\${i}\`.includes(searchQuery)) {\r
        results.push(\`\${label} - 项目\${i}\`);\r
      }\r
    }\r
    \r
    addLog(\`\${label} 计算完成，找到 \${results.length} 个结果\`);\r
    return results;\r
  };\r
\r
  // 不使用 useDeferredValue 的结果\r
  const immediateResults = useMemo(() => {\r
    return expensiveCalculation(query, '立即计算');\r
  }, [query]);\r
\r
  // 使用 useDeferredValue 的结果\r
  const deferredResults = useMemo(() => {\r
    return expensiveCalculation(deferredQuery, '延迟计算');\r
  }, [deferredQuery]);\r
\r
  const handleInputChange = (value: string) => {\r
    setQuery(value);\r
    addLog(\`输入更新: "\${value}"\`);\r
  };\r
\r
  const clearInput = () => {\r
    setQuery('');\r
    addLog('清空输入');\r
  };\r
\r
  const clearLogs = () => {\r
    setLogs([]);\r
  };\r
\r
  const isDeferred = query !== deferredQuery;\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg border border-gray-200">\r
      <div className="flex items-center justify-between mb-4">\r
        <h3 className="text-lg font-semibold text-gray-800">性能对比演示</h3>\r
        <div className="space-x-2">\r
          <button\r
            onClick={clearInput}\r
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"\r
          >\r
            清空输入\r
          </button>\r
          <button\r
            onClick={clearLogs}\r
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"\r
          >\r
            清空日志\r
          </button>\r
        </div>\r
      </div>\r
      \r
      <div className="space-y-6">\r
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
          <div>\r
            <label className="block text-sm font-medium text-gray-700 mb-2">\r
              搜索输入 (快速输入测试性能):\r
            </label>\r
            <input\r
              type="text"\r
              value={query}\r
              onChange={(e) => handleInputChange(e.target.value)}\r
              placeholder="快速输入数字测试..."\r
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
            />\r
          </div>\r
          \r
          <div className="flex items-center space-x-4">\r
            <div className={\`flex items-center space-x-2 px-3 py-1 rounded-full text-sm \${\r
              isDeferred ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'\r
            }\`}>\r
              <div className={\`w-2 h-2 rounded-full \${\r
                isDeferred ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'\r
              }\`} />\r
              <span>{isDeferred ? '延迟更新中...' : '同步状态'}</span>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">\r
          <div className="border border-red-200 rounded-lg">\r
            <div className="bg-red-50 px-3 py-2 border-b border-red-200">\r
              <h4 className="font-semibold text-red-800">❌ 立即计算 (无优化)</h4>\r
              <p className="text-xs text-red-600 mt-1">每次输入都立即计算</p>\r
            </div>\r
            <div className="p-3">\r
              <div className="text-sm text-gray-600 mb-2">\r
                查询: "{query}" → {immediateResults.length} 个结果\r
              </div>\r
              <div className="max-h-32 overflow-y-auto bg-gray-50 rounded p-2">\r
                {immediateResults.length === 0 ? (\r
                  <p className="text-gray-500 text-sm">输入内容查看结果</p>\r
                ) : (\r
                  <div className="space-y-1">\r
                    {immediateResults.slice(0, 10).map((result, index) => (\r
                      <div key={index} className="text-xs text-gray-700">\r
                        {result}\r
                      </div>\r
                    ))}\r
                    {immediateResults.length > 10 && (\r
                      <div className="text-xs text-gray-500">\r
                        还有 {immediateResults.length - 10} 个结果...\r
                      </div>\r
                    )}\r
                  </div>\r
                )}\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div className="border border-green-200 rounded-lg">\r
            <div className="bg-green-50 px-3 py-2 border-b border-green-200">\r
              <h4 className="font-semibold text-green-800">✅ 延迟计算 (useDeferredValue)</h4>\r
              <p className="text-xs text-green-600 mt-1">延迟计算，保持响应性</p>\r
            </div>\r
            <div className="p-3">\r
              <div className="text-sm text-gray-600 mb-2">\r
                查询: "{deferredQuery}" → {deferredResults.length} 个结果\r
              </div>\r
              <div className="max-h-32 overflow-y-auto bg-gray-50 rounded p-2">\r
                {deferredResults.length === 0 ? (\r
                  <p className="text-gray-500 text-sm">输入内容查看结果</p>\r
                ) : (\r
                  <div className="space-y-1">\r
                    {deferredResults.slice(0, 10).map((result, index) => (\r
                      <div key={index} className="text-xs text-gray-700">\r
                        {result}\r
                      </div>\r
                    ))}\r
                    {deferredResults.length > 10 && (\r
                      <div className="text-xs text-gray-500">\r
                        还有 {deferredResults.length - 10} 个结果...\r
                      </div>\r
                    )}\r
                  </div>\r
                )}\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div>\r
            <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>\r
            <div className="bg-gray-50 rounded-lg p-3 min-h-[200px]">\r
              {logs.length === 0 ? (\r
                <p className="text-gray-500 text-sm">输入内容查看日志</p>\r
              ) : (\r
                <div className="space-y-1 max-h-40 overflow-y-auto">\r
                  {logs.map((log, index) => (\r
                    <div key={index} className="text-xs font-mono text-gray-700">\r
                      {log}\r
                    </div>\r
                  ))}\r
                </div>\r
              )}\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">\r
            <h4 className="font-semibold text-orange-800 mb-2">🔍 观察要点:</h4>\r
            <ul className="text-sm text-orange-700 space-y-1">\r
              <li>• 快速输入时，立即计算会频繁触发</li>\r
              <li>• 延迟计算会等待输入稳定后执行</li>\r
              <li>• 输入框始终保持响应性</li>\r
              <li>• 查看日志中的计算频率差异</li>\r
            </ul>\r
          </div>\r
          \r
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">\r
            <h4 className="font-semibold text-blue-800 mb-2">📊 性能对比:</h4>\r
            <div className="text-sm text-blue-700 space-y-1">\r
              <p><strong>当前输入:</strong> "{query}"</p>\r
              <p><strong>延迟输入:</strong> "{deferredQuery}"</p>\r
              <p><strong>是否延迟:</strong> {isDeferred ? '是' : '否'}</p>\r
              <p><strong>立即结果:</strong> {immediateResults.length} 个</p>\r
              <p><strong>延迟结果:</strong> {deferredResults.length} 个</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="mt-4 p-3 bg-purple-50 rounded border border-purple-200">\r
        <p className="text-sm text-purple-800">\r
          💡 对比可以看出，useDeferredValue 显著减少了计算频率，在快速输入时保持界面响应性，避免不必要的计算。\r
        </p>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default ComparisonDemo;`,F=()=>e.jsx(L,{title:"useDeferredValue",description:"React 18 中的并发特性 Hook，用于延迟更新非关键的值。它可以让 React 在高优先级更新进行时延迟低优先级的值更新，从而保持界面的响应性。",overview:[{title:"核心概念",items:["延迟非关键值的更新","保持高优先级操作响应性","智能批量更新机制","并发渲染优化"]},{title:"主要优势",items:["减少不必要的计算","提升用户交互体验","优化渲染性能","智能延迟策略"]},{title:"适用场景",items:["搜索建议和自动完成","实时过滤和排序","数据可视化更新","复杂列表渲染"]},{title:"注意事项",items:["仅在 React 18+ 中可用","不适用于关键数据","需要合理设计延迟逻辑","避免过度使用"]}],examples:[{title:"搜索建议演示",component:e.jsx($,{}),description:"演示在搜索建议中使用 useDeferredValue 优化性能",observationPoints:["快速输入时，观察输入框的响应性","注意当前输入值和延迟值的差异","观察搜索建议的更新时机","查看延迟状态的视觉反馈","检查操作日志中的计算频率"],keyPoints:["useDeferredValue 延迟搜索建议计算","输入框保持实时响应","减少不必要的计算次数","提供延迟状态的用户反馈"],commonTraps:["对所有值都使用 useDeferredValue","忽略延迟状态的用户体验","在关键数据上使用延迟"],solutions:["只对非关键、计算密集的值使用","提供适当的加载状态反馈","保持关键数据的实时性"],codeExample:{code:k,highlights:[10,20,30],title:"搜索建议演示源码"}},{title:"产品过滤演示",component:e.jsx(S,{}),description:"演示在复杂产品过滤中使用 useDeferredValue 优化性能",observationPoints:["快速修改搜索条件和分类筛选","观察过滤计算的延迟效果","注意界面的响应性保持","查看过滤状态的实时反馈","检查大数据量处理的性能"],keyPoints:["多个过滤条件都使用延迟值","复杂过滤逻辑不阻塞界面","智能批量更新机制","保持用户操作的流畅性"],commonTraps:["混合使用延迟值和即时值","缺乏过滤状态的反馈","在简单过滤中过度使用"],solutions:["统一使用延迟值进行计算","提供清晰的过滤状态指示","根据复杂度选择是否使用"],codeExample:{code:T,highlights:[12,22,32],title:"产品过滤演示源码"}},{title:"性能对比演示",component:e.jsx(P,{}),description:"对比有无 useDeferredValue 的性能差异",observationPoints:["快速输入时观察两种计算方式的差异","注意立即计算的频繁触发","观察延迟计算的智能批量处理","查看操作日志中的计算次数对比","体验输入框的响应性差异"],keyPoints:["立即计算每次输入都触发","延迟计算智能批量处理","显著减少计算频率","保持界面响应性"],commonTraps:["不理解延迟值的工作原理","期望延迟值立即更新","忽略性能优化的效果"],solutions:["理解延迟值的批量更新机制","设计合适的用户反馈","通过对比验证优化效果"],codeExample:{code:V,highlights:[15,25,35],title:"性能对比演示源码"}}],tutorial:{concepts:["useDeferredValue 的基本语法和用法","延迟值与原始值的关系","React 18 并发特性的工作原理","延迟更新的触发时机","与 useTransition 的区别和联系"],steps:["从 React 中导入 useDeferredValue Hook","识别需要延迟更新的非关键值","使用 useDeferredValue 包装这些值","在计算中使用延迟值而非原始值","添加延迟状态的用户反馈","测试性能优化效果"],tips:["只对计算密集、非关键的值使用延迟","在 useMemo 和 useCallback 中使用延迟值","提供延迟状态的视觉反馈","避免在关键路径上使用延迟值","结合 useTransition 实现更好的用户体验"]},interview:{questions:[{question:"useDeferredValue 的作用是什么？",answer:"useDeferredValue 用于延迟更新非关键的值，让 React 在高优先级更新进行时延迟低优先级的值更新。它可以减少不必要的计算，保持界面响应性，特别适用于搜索、过滤等场景。"},{question:"useDeferredValue 和 useTransition 有什么区别？",answer:"useDeferredValue 用于延迟值的更新，返回一个延迟的值；useTransition 用于标记状态更新为非紧急，返回 isPending 状态和 startTransition 函数。前者关注值，后者关注更新操作。"},{question:"什么时候应该使用 useDeferredValue？",answer:"当有计算密集的非关键值可能影响用户交互时使用：1) 搜索建议和自动完成；2) 实时过滤和排序；3) 数据可视化更新；4) 复杂列表渲染。不要在关键数据或简单计算中使用。"},{question:"如何判断值是否被延迟了？",answer:"通过比较原始值和延迟值是否相等：const isDeferred = originalValue !== deferredValue。当 isDeferred 为 true 时，说明延迟值还没有更新到最新的原始值。"}],keyPoints:["延迟非关键值的更新","保持高优先级操作响应性","减少不必要的计算","智能批量更新机制","仅在 React 18+ 中可用"]},bestPractices:{dos:["只对计算密集、非关键的值使用延迟","在 useMemo 和 useCallback 中使用延迟值","提供延迟状态的用户反馈","结合 useTransition 优化用户体验","测试和验证性能优化效果","保持关键数据的实时性"],donts:["不要对所有值都使用 useDeferredValue","不要在关键路径上使用延迟值","不要忽略延迟状态的用户体验","不要期望延迟值立即更新","不要在简单计算中过度使用"],patterns:["搜索延迟模式：输入实时，建议延迟","过滤延迟模式：条件实时，结果延迟","可视化延迟模式：交互实时，渲染延迟","列表延迟模式：操作实时，更新延迟"]}});export{F as default};
