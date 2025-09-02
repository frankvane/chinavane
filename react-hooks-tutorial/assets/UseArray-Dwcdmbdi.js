import{r as d,j as e}from"./index-CKH9Ek1I.js";import{C as I}from"./ComponentTemplate-B8dTsNLj.js";const A=(r=[])=>{const[g,t]=d.useState(r),c=d.useCallback(n=>{t(i=>[...i,n])},[]),y=d.useCallback(()=>{t(n=>n.slice(0,-1))},[]),u=d.useCallback(()=>{t(n=>n.slice(1))},[]),m=d.useCallback(n=>{t(i=>[n,...i])},[]),b=d.useCallback(n=>{t(i=>i.filter((h,v)=>v!==n))},[]),o=d.useCallback((n,i)=>{t(h=>[...h.slice(0,n),i,...h.slice(n)])},[]),l=d.useCallback((n,i)=>{t(h=>h.map((v,N)=>N===n?i:v))},[]),p=d.useCallback(()=>{t([])},[]),s=d.useCallback(()=>{t(r)},[r]),a=d.useCallback((n,i)=>{t(h=>{const v=[...h],[N]=v.splice(n,1);return v.splice(i,0,N),v})},[]);return{array:g,set:t,push:c,pop:y,shift:u,unshift:m,remove:b,insert:o,update:l,clear:p,reset:s,move:a}},H=(r=[],g={})=>{const{maxLength:t,onAdd:c,onRemove:y,onChange:u,validator:m}=g,[b,o]=d.useState(r),[l,p]=d.useState([r]),[s,a]=d.useState(0),n=d.useCallback(x=>{o(x),p(f=>[...f.slice(0,s+1),x]),a(f=>f+1),u==null||u(x)},[s,u]),i=d.useCallback(x=>{if(t&&b.length>=t)return{success:!1,error:`数组长度不能超过 ${t}`};if(m&&!m(x))return{success:!1,error:"元素验证失败"};const f=[...b,x];return n(f),c==null||c(x,f),{success:!0}},[b,t,m,n,c]),h=d.useCallback(x=>{if(x<0||x>=b.length)return{success:!1,error:"索引超出范围"};const f=b[x],k=b.filter((P,C)=>C!==x);return n(k),y==null||y(f,k),{success:!0}},[b,n,y]),v=d.useCallback(()=>(n([]),{success:!0}),[n]),N=d.useCallback(()=>{if(s>0){const x=s-1;return a(x),o(l[x]),{success:!0}}return{success:!1,error:"无法撤销"}},[s,l]),j=d.useCallback(()=>{if(s<l.length-1){const x=s+1;return a(x),o(l[x]),{success:!0}}return{success:!1,error:"无法重做"}},[s,l]);return{array:b,push:i,remove:h,clear:v,undo:N,redo:j,canUndo:s>0,canRedo:s<l.length-1,isFull:t?b.length>=t:!1,length:b.length,maxLength:t}},T=()=>{const[r,g]=d.useState([]),t=H([],{maxLength:5,validator:o=>o.length>=2,onAdd:(o,l)=>{u(`添加成功: "${o}", 数组长度: ${l.length}`)},onRemove:(o,l)=>{u(`移除成功: "${o}", 数组长度: ${l.length}`)},onChange:o=>{console.log("数组变化:",o)}}),[c,y]=d.useState(""),u=o=>{const l=new Date().toLocaleTimeString();g(p=>[...p.slice(-4),`${l}: ${o}`])},m=()=>{c.trim()&&(t.push(c.trim()).success||(t.isFull?u("添加失败: 数组已满 (最大长度: 5)"):u(`添加失败: "${c.trim()}" 不符合验证规则 (最少2个字符)`)),y(""))},b=o=>{t.remove(o)};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"高级数组操作 (最大长度: 5, 最少2字符)"}),e.jsxs("div",{className:"flex gap-2 mb-4",children:[e.jsx("input",{type:"text",value:c,onChange:o=>y(o.target.value),placeholder:"输入新元素 (至少2个字符)...",className:"flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",onKeyPress:o=>o.key==="Enter"&&m()}),e.jsx("button",{onClick:m,disabled:!c.trim()||t.isFull,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:t.isFull?"数组已满":"添加元素"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded border border-blue-200",children:[e.jsx("div",{className:"text-sm font-medium text-blue-800",children:"数组长度"}),e.jsxs("div",{className:"text-lg font-bold text-blue-600",children:[t.array.length," / 5"]})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded border border-green-200",children:[e.jsx("div",{className:"text-sm font-medium text-green-800",children:"可撤销"}),e.jsx("div",{className:"text-lg font-bold text-green-600",children:t.canUndo?"是":"否"})]}),e.jsxs("div",{className:"bg-purple-50 p-3 rounded border border-purple-200",children:[e.jsx("div",{className:"text-sm font-medium text-purple-800",children:"可重做"}),e.jsx("div",{className:"text-lg font-bold text-purple-600",children:t.canRedo?"是":"否"})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"当前数组:"}),e.jsx("div",{className:"min-h-[60px] p-3 bg-gray-50 rounded border",children:t.array.length===0?e.jsx("div",{className:"text-gray-500 italic",children:"数组为空"}):e.jsx("div",{className:"flex flex-wrap gap-2",children:t.array.map((o,l)=>e.jsxs("div",{className:"flex items-center bg-white px-3 py-2 rounded border",children:[e.jsxs("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2",children:["[",l,"]"]}),e.jsx("span",{className:"font-medium mr-2",children:o}),e.jsx("button",{onClick:()=>b(l),className:"w-5 h-5 text-xs bg-red-200 hover:bg-red-300 rounded text-red-700",title:"删除",children:"×"})]},l))})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[e.jsx("button",{onClick:t.undo,disabled:!t.canUndo,className:"px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"撤销 (Undo)"}),e.jsx("button",{onClick:t.redo,disabled:!t.canRedo,className:"px-3 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"重做 (Redo)"}),e.jsx("button",{onClick:t.clear,disabled:t.array.length===0,className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"清空数组"})]}),r.length>0&&e.jsxs("div",{className:"bg-gray-50 p-3 rounded border",children:[e.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"操作日志："}),e.jsx("div",{className:"space-y-1",children:r.map((o,l)=>e.jsx("div",{className:"text-xs text-gray-600 font-mono",children:o},l))})]})]})})},$=`import React, { useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useAdvancedArray } from "./useArrayHook";

// 高级数组操作演示
const AdvancedArrayDemo: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);

  const arrayHook = useAdvancedArray<string>([], {
    maxLength: 5,
    validator: (item) => item.length >= 2,
    onAdd: (item, array) => {
      addLog(\`添加成功: "\${item}", 数组长度: \${array.length}\`);
    },
    onRemove: (item, array) => {
      addLog(\`移除成功: "\${item}", 数组长度: \${array.length}\`);
    },
    onChange: (array) => {
      console.log("数组变化:", array);
    },
  });

  const [inputValue, setInputValue] = useState("");

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev.slice(-4), \`\${timestamp}: \${message}\`]);
  };

  const handleAdd = () => {
    if (inputValue.trim()) {
      const result = arrayHook.push(inputValue.trim());
      if (!result.success) {
        if (arrayHook.isFull) {
          addLog(\`添加失败: 数组已满 (最大长度: 5)\`);
        } else {
          addLog(
            \`添加失败: "\${inputValue.trim()}" 不符合验证规则 (最少2个字符)\`
          );
        }
      }
      setInputValue("");
    }
  };

  const handleRemove = (index: number) => {
    arrayHook.remove(index);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">
          高级数组操作 (最大长度: 5, 最少2字符)
        </h3>

        {/* 输入区域 */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="输入新元素 (至少2个字符)..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === "Enter" && handleAdd()}
          />
          <button
            onClick={handleAdd}
            disabled={!inputValue.trim() || arrayHook.isFull}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {arrayHook.isFull ? "数组已满" : "添加元素"}
          </button>
        </div>

        {/* 状态指示器 */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 p-3 rounded border border-blue-200">
            <div className="text-sm font-medium text-blue-800">数组长度</div>
            <div className="text-lg font-bold text-blue-600">
              {arrayHook.array.length} / 5
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <div className="text-sm font-medium text-green-800">可撤销</div>
            <div className="text-lg font-bold text-green-600">
              {arrayHook.canUndo ? "是" : "否"}
            </div>
          </div>
          <div className="bg-purple-50 p-3 rounded border border-purple-200">
            <div className="text-sm font-medium text-purple-800">可重做</div>
            <div className="text-lg font-bold text-purple-600">
              {arrayHook.canRedo ? "是" : "否"}
            </div>
          </div>
        </div>

        {/* 数组显示 */}
        <div className="mb-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
            当前数组:
          </div>
          <div className="min-h-[60px] p-3 bg-gray-50 rounded border">
            {arrayHook.array.length === 0 ? (
              <div className="text-gray-500 italic">数组为空</div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {arrayHook.array.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white px-3 py-2 rounded border"
                  >
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                      [{index}]
                    </span>
                    <span className="font-medium mr-2">{item}</span>
                    <button
                      onClick={() => handleRemove(index)}
                      className="w-5 h-5 text-xs bg-red-200 hover:bg-red-300 rounded text-red-700"
                      title="删除"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={arrayHook.undo}
            disabled={!arrayHook.canUndo}
            className="px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            撤销 (Undo)
          </button>
          <button
            onClick={arrayHook.redo}
            disabled={!arrayHook.canRedo}
            className="px-3 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            重做 (Redo)
          </button>
          <button
            onClick={arrayHook.clear}
            disabled={arrayHook.array.length === 0}
            className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            清空数组
          </button>
        </div>

        {/* 操作日志 */}
        {logs.length > 0 && (
          <div className="bg-gray-50 p-3 rounded border">
            <div className="text-sm font-medium text-gray-700 mb-2">
              操作日志：
            </div>
            <div className="space-y-1">
              {logs.map((log, index) => (
                <div key={index} className="text-xs text-gray-600 font-mono">
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedArrayDemo;
`,L=()=>{const r=A(["Apple","Banana"]),[g,t]=d.useState(""),[c,y]=d.useState([]),u=a=>{const n=new Date().toLocaleTimeString();y(i=>[...i.slice(-4),`${n}: ${a}`])},m=()=>{g.trim()&&(r.push(g.trim()),u(`添加 "${g.trim()}" 到末尾`),t(""))},b=()=>{g.trim()&&(r.unshift(g.trim()),u(`添加 "${g.trim()}" 到开头`),t(""))},o=()=>{if(r.array.length>0){const a=r.array[r.array.length-1];r.pop(),u(`移除末尾元素 "${a}"`)}},l=()=>{if(r.array.length>0){const a=r.array[0];r.shift(),u(`移除开头元素 "${a}"`)}},p=a=>{const n=r.array[a];r.remove(a),u(`移除索引 ${a} 的元素 "${n}"`)},s=(a,n)=>{const i=n==="up"?a-1:a+1;i>=0&&i<r.array.length&&(r.move(a,i),u(`移动元素从索引 ${a} 到 ${i}`))};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础数组操作"}),e.jsxs("div",{className:"flex gap-2 mb-4",children:[e.jsx("input",{type:"text",value:g,onChange:a=>t(a.target.value),placeholder:"输入新元素...",className:"flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",onKeyPress:a=>a.key==="Enter"&&m()}),e.jsx("button",{onClick:m,disabled:!g.trim(),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"添加到末尾"}),e.jsx("button",{onClick:b,disabled:!g.trim(),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"添加到开头"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"text-sm font-medium text-gray-700 mb-2",children:["当前数组 (长度: ",r.array.length,"):"]}),e.jsx("div",{className:"min-h-[60px] p-3 bg-gray-50 rounded border",children:r.array.length===0?e.jsx("div",{className:"text-gray-500 italic",children:"数组为空"}):e.jsx("div",{className:"space-y-2",children:r.array.map((a,n)=>e.jsxs("div",{className:"flex items-center justify-between bg-white p-2 rounded border",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:["[",n,"]"]}),e.jsx("span",{className:"font-medium",children:a})]}),e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("button",{onClick:()=>s(n,"up"),disabled:n===0,className:"w-6 h-6 text-xs bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed rounded",title:"上移",children:"↑"}),e.jsx("button",{onClick:()=>s(n,"down"),disabled:n===r.array.length-1,className:"w-6 h-6 text-xs bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed rounded",title:"下移",children:"↓"}),e.jsx("button",{onClick:()=>p(n),className:"w-6 h-6 text-xs bg-red-200 hover:bg-red-300 rounded text-red-700",title:"删除",children:"×"})]})]},n))})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[e.jsx("button",{onClick:o,disabled:r.array.length===0,className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"移除末尾"}),e.jsx("button",{onClick:l,disabled:r.array.length===0,className:"px-3 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"移除开头"}),e.jsx("button",{onClick:r.clear,disabled:r.array.length===0,className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"清空数组"}),e.jsx("button",{onClick:r.reset,className:"px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:"重置数组"})]}),c.length>0&&e.jsxs("div",{className:"bg-gray-50 p-3 rounded border",children:[e.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"操作日志："}),e.jsx("div",{className:"space-y-1",children:c.map((a,n)=>e.jsx("div",{className:"text-xs text-gray-600 font-mono",children:a},n))})]})]})})},S=`import React, { useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useArray } from "./useArrayHook";

// 基础数组操作演示
const BasicArrayDemo: React.FC = () => {
  const arrayHook = useArray<string>(["Apple", "Banana"]);
  const [inputValue, setInputValue] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (action: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev.slice(-4), \`\${timestamp}: \${action}\`]);
  };

  const handlePush = () => {
    if (inputValue.trim()) {
      arrayHook.push(inputValue.trim());
      addLog(\`添加 "\${inputValue.trim()}" 到末尾\`);
      setInputValue("");
    }
  };

  const handleUnshift = () => {
    if (inputValue.trim()) {
      arrayHook.unshift(inputValue.trim());
      addLog(\`添加 "\${inputValue.trim()}" 到开头\`);
      setInputValue("");
    }
  };

  const handlePop = () => {
    if (arrayHook.array.length > 0) {
      const lastItem = arrayHook.array[arrayHook.array.length - 1];
      arrayHook.pop();
      addLog(\`移除末尾元素 "\${lastItem}"\`);
    }
  };

  const handleShift = () => {
    if (arrayHook.array.length > 0) {
      const firstItem = arrayHook.array[0];
      arrayHook.shift();
      addLog(\`移除开头元素 "\${firstItem}"\`);
    }
  };

  const handleRemove = (index: number) => {
    const item = arrayHook.array[index];
    arrayHook.remove(index);
    addLog(\`移除索引 \${index} 的元素 "\${item}"\`);
  };

  const handleMove = (fromIndex: number, direction: "up" | "down") => {
    const toIndex = direction === "up" ? fromIndex - 1 : fromIndex + 1;
    if (toIndex >= 0 && toIndex < arrayHook.array.length) {
      arrayHook.move(fromIndex, toIndex);
      addLog(\`移动元素从索引 \${fromIndex} 到 \${toIndex}\`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">基础数组操作</h3>

        {/* 输入区域 */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="输入新元素..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === "Enter" && handlePush()}
          />
          <button
            onClick={handlePush}
            disabled={!inputValue.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            添加到末尾
          </button>
          <button
            onClick={handleUnshift}
            disabled={!inputValue.trim()}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            添加到开头
          </button>
        </div>

        {/* 数组显示 */}
        <div className="mb-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
            当前数组 (长度: {arrayHook.array.length}):
          </div>
          <div className="min-h-[60px] p-3 bg-gray-50 rounded border">
            {arrayHook.array.length === 0 ? (
              <div className="text-gray-500 italic">数组为空</div>
            ) : (
              <div className="space-y-2">
                {arrayHook.array.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white p-2 rounded border"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        [{index}]
                      </span>
                      <span className="font-medium">{item}</span>
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={() => handleMove(index, "up")}
                        disabled={index === 0}
                        className="w-6 h-6 text-xs bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed rounded"
                        title="上移"
                      >
                        ↑
                      </button>
                      <button
                        onClick={() => handleMove(index, "down")}
                        disabled={index === arrayHook.array.length - 1}
                        className="w-6 h-6 text-xs bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed rounded"
                        title="下移"
                      >
                        ↓
                      </button>
                      <button
                        onClick={() => handleRemove(index)}
                        className="w-6 h-6 text-xs bg-red-200 hover:bg-red-300 rounded text-red-700"
                        title="删除"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={handlePop}
            disabled={arrayHook.array.length === 0}
            className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            移除末尾
          </button>
          <button
            onClick={handleShift}
            disabled={arrayHook.array.length === 0}
            className="px-3 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            移除开头
          </button>
          <button
            onClick={arrayHook.clear}
            disabled={arrayHook.array.length === 0}
            className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            清空数组
          </button>
          <button
            onClick={arrayHook.reset}
            className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            重置数组
          </button>
        </div>

        {/* 操作日志 */}
        {logs.length > 0 && (
          <div className="bg-gray-50 p-3 rounded border">
            <div className="text-sm font-medium text-gray-700 mb-2">
              操作日志：
            </div>
            <div className="space-y-1">
              {logs.map((log, index) => (
                <div key={index} className="text-xs text-gray-600 font-mono">
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicArrayDemo;
`,V=()=>{const r=A([]),[g,t]=d.useState(""),[c,y]=d.useState("all"),u=d.useMemo(()=>{switch(c){case"active":return r.array.filter(s=>!s.completed);case"completed":return r.array.filter(s=>s.completed);default:return r.array}},[r.array,c]),m=d.useMemo(()=>{const s=r.array.length,a=r.array.filter(i=>i.completed).length,n=s-a;return{total:s,completed:a,active:n}},[r.array]),b=()=>{if(g.trim()){const s={id:Date.now(),text:g.trim(),completed:!1,createdAt:new Date};r.push(s),t("")}},o=s=>{const a=r.array.findIndex(i=>i.id===u[s].id),n={...r.array[a],completed:!r.array[a].completed};r.update(a,n)},l=s=>{const a=r.array.findIndex(n=>n.id===u[s].id);r.remove(a)},p=()=>{const s=r.array.filter(a=>!a.completed);r.set(s)};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"待办事项列表"}),e.jsxs("div",{className:"flex gap-2 mb-4",children:[e.jsx("input",{type:"text",value:g,onChange:s=>t(s.target.value),placeholder:"添加新的待办事项...",className:"flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",onKeyPress:s=>s.key==="Enter"&&b()}),e.jsx("button",{onClick:b,disabled:!g.trim(),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"添加"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded border border-blue-200",children:[e.jsx("div",{className:"text-sm font-medium text-blue-800",children:"总计"}),e.jsx("div",{className:"text-lg font-bold text-blue-600",children:m.total})]}),e.jsxs("div",{className:"bg-yellow-50 p-3 rounded border border-yellow-200",children:[e.jsx("div",{className:"text-sm font-medium text-yellow-800",children:"待完成"}),e.jsx("div",{className:"text-lg font-bold text-yellow-600",children:m.active})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded border border-green-200",children:[e.jsx("div",{className:"text-sm font-medium text-green-800",children:"已完成"}),e.jsx("div",{className:"text-lg font-bold text-green-600",children:m.completed})]})]}),e.jsxs("div",{className:"flex gap-2 mb-4",children:[e.jsxs("button",{onClick:()=>y("all"),className:`px-3 py-2 rounded ${c==="all"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:["全部 (",m.total,")"]}),e.jsxs("button",{onClick:()=>y("active"),className:`px-3 py-2 rounded ${c==="active"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:["待完成 (",m.active,")"]}),e.jsxs("button",{onClick:()=>y("completed"),className:`px-3 py-2 rounded ${c==="completed"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:["已完成 (",m.completed,")"]})]}),e.jsx("div",{className:"mb-4",children:u.length===0?e.jsx("div",{className:"text-center py-8 text-gray-500",children:c==="all"?"暂无待办事项":`暂无${c==="active"?"待完成":"已完成"}的事项`}):e.jsx("div",{className:"space-y-2",children:u.map((s,a)=>e.jsxs("div",{className:"flex items-center bg-gray-50 p-3 rounded border",children:[e.jsx("input",{type:"checkbox",checked:s.completed,onChange:()=>o(a),className:"mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:`font-medium ${s.completed?"line-through text-gray-500":"text-gray-800"}`,children:s.text}),e.jsxs("div",{className:"text-xs text-gray-500",children:["创建于: ",s.createdAt.toLocaleString()]})]}),e.jsx("button",{onClick:()=>l(a),className:"ml-2 w-6 h-6 text-xs bg-red-200 hover:bg-red-300 rounded text-red-700",title:"删除",children:"×"})]},s.id))})}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("button",{onClick:p,disabled:m.completed===0,className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:["清除已完成 (",m.completed,")"]}),e.jsx("button",{onClick:r.clear,disabled:m.total===0,className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:"清空全部"})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"使用场景"}),e.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[e.jsxs("p",{children:["• ",e.jsx("strong",{children:"待办事项管理"}),"：任务列表、项目管理"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"购物车功能"}),"：商品列表管理"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"表单数组字段"}),"：动态表单项管理"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"文件上传"}),"：文件列表管理"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"标签管理"}),"：标签的增删改查"]})]})]})]})},R=`import React, { useState, useMemo } from 'react';
import { useArray } from './useArrayHook';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

const TodoListDemo: React.FC = () => {
  const todoArray = useArray<TodoItem>([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todoArray.array.filter(todo => !todo.completed);
      case 'completed':
        return todoArray.array.filter(todo => todo.completed);
      default:
        return todoArray.array;
    }
  }, [todoArray.array, filter]);

  const stats = useMemo(() => {
    const total = todoArray.array.length;
    const completed = todoArray.array.filter(todo => todo.completed).length;
    const active = total - completed;
    return { total, completed, active };
  }, [todoArray.array]);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      const newTodo: TodoItem = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date()
      };
      todoArray.push(newTodo);
      setInputValue('');
    }
  };

  const handleToggleTodo = (index: number) => {
    const actualIndex = todoArray.array.findIndex(todo => todo.id === filteredTodos[index].id);
    const updatedTodo = {
      ...todoArray.array[actualIndex],
      completed: !todoArray.array[actualIndex].completed
    };
    todoArray.update(actualIndex, updatedTodo);
  };

  const handleRemoveTodo = (index: number) => {
    const actualIndex = todoArray.array.findIndex(todo => todo.id === filteredTodos[index].id);
    todoArray.remove(actualIndex);
  };

  const handleClearCompleted = () => {
    const activeTodos = todoArray.array.filter(todo => !todo.completed);
    todoArray.set(activeTodos);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">待办事项列表</h3>
        
        {/* 输入区域 */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="添加新的待办事项..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          />
          <button
            onClick={handleAddTodo}
            disabled={!inputValue.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            添加
          </button>
        </div>

        {/* 统计信息 */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 p-3 rounded border border-blue-200">
            <div className="text-sm font-medium text-blue-800">总计</div>
            <div className="text-lg font-bold text-blue-600">{stats.total}</div>
          </div>
          <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
            <div className="text-sm font-medium text-yellow-800">待完成</div>
            <div className="text-lg font-bold text-yellow-600">{stats.active}</div>
          </div>
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <div className="text-sm font-medium text-green-800">已完成</div>
            <div className="text-lg font-bold text-green-600">{stats.completed}</div>
          </div>
        </div>

        {/* 过滤器 */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFilter('all')}
            className={\`px-3 py-2 rounded \${
              filter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }\`}
          >
            全部 ({stats.total})
          </button>
          <button
            onClick={() => setFilter('active')}
            className={\`px-3 py-2 rounded \${
              filter === 'active'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }\`}
          >
            待完成 ({stats.active})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={\`px-3 py-2 rounded \${
              filter === 'completed'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }\`}
          >
            已完成 ({stats.completed})
          </button>
        </div>

        {/* 待办事项列表 */}
        <div className="mb-4">
          {filteredTodos.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              {filter === 'all' ? '暂无待办事项' : \`暂无\${filter === 'active' ? '待完成' : '已完成'}的事项\`}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredTodos.map((todo, index) => (
                <div key={todo.id} className="flex items-center bg-gray-50 p-3 rounded border">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(index)}
                    className="mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <div className={\`font-medium \${
                      todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
                    }\`}>
                      {todo.text}
                    </div>
                    <div className="text-xs text-gray-500">
                      创建于: {todo.createdAt.toLocaleString()}
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveTodo(index)}
                    className="ml-2 w-6 h-6 text-xs bg-red-200 hover:bg-red-300 rounded text-red-700"
                    title="删除"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 操作按钮 */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleClearCompleted}
            disabled={stats.completed === 0}
            className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            清除已完成 ({stats.completed})
          </button>
          <button
            onClick={todoArray.clear}
            disabled={stats.total === 0}
            className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            清空全部
          </button>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2">使用场景</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p>• <strong>待办事项管理</strong>：任务列表、项目管理</p>
          <p>• <strong>购物车功能</strong>：商品列表管理</p>
          <p>• <strong>表单数组字段</strong>：动态表单项管理</p>
          <p>• <strong>文件上传</strong>：文件列表管理</p>
          <p>• <strong>标签管理</strong>：标签的增删改查</p>
        </div>
      </div>
    </div>
  );
};

export default TodoListDemo;`,w=`import { useState, useCallback } from 'react';\r
\r
// 基础数组Hook\r
export const useArray = <T>(initialArray: T[] = []) => {\r
  const [array, setArray] = useState<T[]>(initialArray);\r
\r
  const push = useCallback((element: T) => {\r
    setArray(prev => [...prev, element]);\r
  }, []);\r
\r
  const pop = useCallback(() => {\r
    setArray(prev => prev.slice(0, -1));\r
  }, []);\r
\r
  const shift = useCallback(() => {\r
    setArray(prev => prev.slice(1));\r
  }, []);\r
\r
  const unshift = useCallback((element: T) => {\r
    setArray(prev => [element, ...prev]);\r
  }, []);\r
\r
  const remove = useCallback((index: number) => {\r
    setArray(prev => prev.filter((_, i) => i !== index));\r
  }, []);\r
\r
  const insert = useCallback((index: number, element: T) => {\r
    setArray(prev => [\r
      ...prev.slice(0, index),\r
      element,\r
      ...prev.slice(index)\r
    ]);\r
  }, []);\r
\r
  const update = useCallback((index: number, element: T) => {\r
    setArray(prev => prev.map((item, i) => i === index ? element : item));\r
  }, []);\r
\r
  const clear = useCallback(() => {\r
    setArray([]);\r
  }, []);\r
\r
  const reset = useCallback(() => {\r
    setArray(initialArray);\r
  }, [initialArray]);\r
\r
  const move = useCallback((fromIndex: number, toIndex: number) => {\r
    setArray(prev => {\r
      const newArray = [...prev];\r
      const [movedItem] = newArray.splice(fromIndex, 1);\r
      newArray.splice(toIndex, 0, movedItem);\r
      return newArray;\r
    });\r
  }, []);\r
\r
  return {\r
    array,\r
    set: setArray,\r
    push,\r
    pop,\r
    shift,\r
    unshift,\r
    remove,\r
    insert,\r
    update,\r
    clear,\r
    reset,\r
    move\r
  };\r
};\r
\r
// 高级数组Hook\r
export interface UseAdvancedArrayOptions<T> {\r
  maxLength?: number;\r
  onAdd?: (item: T, array: T[]) => void;\r
  onRemove?: (item: T, array: T[]) => void;\r
  onChange?: (array: T[]) => void;\r
  validator?: (item: T) => boolean;\r
}\r
\r
export const useAdvancedArray = <T>(\r
  initialArray: T[] = [],\r
  options: UseAdvancedArrayOptions<T> = {}\r
) => {\r
  const { maxLength, onAdd, onRemove, onChange, validator } = options;\r
  const [array, setArray] = useState<T[]>(initialArray);\r
  const [history, setHistory] = useState<T[][]>([initialArray]);\r
  const [historyIndex, setHistoryIndex] = useState(0);\r
\r
  const updateArrayWithHistory = useCallback((newArray: T[]) => {\r
    setArray(newArray);\r
    setHistory(prev => [...prev.slice(0, historyIndex + 1), newArray]);\r
    setHistoryIndex(prev => prev + 1);\r
    onChange?.(newArray);\r
  }, [historyIndex, onChange]);\r
\r
  const push = useCallback((element: T) => {\r
    if (maxLength && array.length >= maxLength) {\r
      return { success: false, error: \`数组长度不能超过 \${maxLength}\` };\r
    }\r
    if (validator && !validator(element)) {\r
      return { success: false, error: '元素验证失败' };\r
    }\r
    const newArray = [...array, element];\r
    updateArrayWithHistory(newArray);\r
    onAdd?.(element, newArray);\r
    return { success: true };\r
  }, [array, maxLength, validator, updateArrayWithHistory, onAdd]);\r
\r
  const remove = useCallback((index: number) => {\r
    if (index < 0 || index >= array.length) {\r
      return { success: false, error: '索引超出范围' };\r
    }\r
    const removedItem = array[index];\r
    const newArray = array.filter((_, i) => i !== index);\r
    updateArrayWithHistory(newArray);\r
    onRemove?.(removedItem, newArray);\r
    return { success: true };\r
  }, [array, updateArrayWithHistory, onRemove]);\r
\r
  const clear = useCallback(() => {\r
    updateArrayWithHistory([]);\r
    return { success: true };\r
  }, [updateArrayWithHistory]);\r
\r
  const undo = useCallback(() => {\r
    if (historyIndex > 0) {\r
      const newIndex = historyIndex - 1;\r
      setHistoryIndex(newIndex);\r
      setArray(history[newIndex]);\r
      return { success: true };\r
    }\r
    return { success: false, error: '无法撤销' };\r
  }, [historyIndex, history]);\r
\r
  const redo = useCallback(() => {\r
    if (historyIndex < history.length - 1) {\r
      const newIndex = historyIndex + 1;\r
      setHistoryIndex(newIndex);\r
      setArray(history[newIndex]);\r
      return { success: true };\r
    }\r
    return { success: false, error: '无法重做' };\r
  }, [historyIndex, history]);\r
\r
  return {\r
    array,\r
    push,\r
    remove,\r
    clear,\r
    undo,\r
    redo,\r
    canUndo: historyIndex > 0,\r
    canRedo: historyIndex < history.length - 1,\r
    isFull: maxLength ? array.length >= maxLength : false,\r
    length: array.length,\r
    maxLength\r
  };\r
};`,U=()=>e.jsx(I,{title:"useArray - 数组操作Hook",description:"useArray 是一个用于管理数组状态的自定义 Hook，提供完整的数组操作方法，支持历史记录、验证、长度限制等高级功能。",overview:[{title:"核心概念",items:["数组状态管理","完整操作方法","批量操作支持","TypeScript 泛型"]},{title:"主要优势",items:["简化数组操作","不可变更新","性能优化","扩展功能丰富"]},{title:"适用场景",items:["列表管理","表单数组","数据展示","拖拽排序"]},{title:"注意事项",items:["索引边界检查","对象引用比较","大数组性能","内存管理"]}],examples:[{title:"基础数组操作演示",component:e.jsx(L,{}),description:"展示 useArray 的基本功能，包括添加、删除、移动、清空等操作。",observationPoints:["支持在数组开头和末尾添加元素","可以删除指定索引的元素","支持元素的上下移动操作","提供清空和重置功能","所有操作都会记录在日志中"],keyPoints:["useArray 返回数组状态和操作方法","push/unshift 用于添加元素","pop/shift 用于移除首尾元素","remove 用于删除指定索引的元素","move 用于移动元素位置"],commonTraps:["直接修改数组引用而不是创建新数组","索引越界导致的错误操作","忘记处理空数组的边界情况"],solutions:["始终使用不可变的方式更新数组","在操作前检查索引的有效性","为空数组状态提供合适的 UI 反馈"],importantTips:["所有操作方法都使用 useCallback 优化性能","支持泛型，可以处理任意类型的数组","move 操作使用 splice 方法实现高效的元素移动"],preCode:[{code:w}],codeExample:{code:S,highlights:[15,20,25,30],title:"基础 useArray Hook 实现"}},{title:"高级数组操作演示",component:e.jsx(T,{}),description:"展示 useAdvancedArray 的高级功能，包括长度限制、验证、历史记录等。",observationPoints:["数组长度被限制在最大5个元素","元素必须至少包含2个字符才能添加","支持撤销和重做操作","提供详细的状态指示器","添加失败时会显示具体的错误原因"],keyPoints:["支持 maxLength 长度限制","validator 函数用于元素验证","内置历史记录功能支持撤销重做","提供 onAdd、onRemove、onChange 回调","返回 canUndo、canRedo、isFull 状态"],commonTraps:["验证函数过于复杂影响性能","历史记录占用过多内存","回调函数中的副作用处理不当"],solutions:["保持验证函数的简单和高效","限制历史记录的最大长度","在回调中避免直接修改数组状态"],importantTips:["高级版本适用于需要更多控制的复杂场景","历史记录功能对于用户体验很重要","验证和回调功能提供了很好的扩展性"],preCode:[{code:w}],codeExample:{code:$,highlights:[19,23,31,37],title:"高级 useAdvancedArray Hook 实现"}},{title:"待办事项列表演示",component:e.jsx(V,{}),description:"展示在实际应用中使用 useArray 管理复杂的列表数据。",observationPoints:["支持添加、完成、删除待办事项","提供全部、待完成、已完成的过滤功能","实时统计各种状态的数量","支持批量清除已完成的事项","每个事项都有创建时间记录"],keyPoints:["结合 useMemo 优化过滤和统计计算","使用复杂对象作为数组元素","支持条件过滤和批量操作","提供丰富的用户交互功能"],commonTraps:["过滤操作时索引不匹配的问题","状态更新时的性能问题","复杂对象的引用比较问题"],solutions:["使用唯一 ID 而不是索引来标识元素","使用 useMemo 缓存计算结果","正确处理对象的不可变更新"],importantTips:["实际项目中通常需要与后端 API 同步","考虑添加本地存储功能持久化数据","复杂列表操作时要注意性能优化"],preCode:[{code:w}],codeExample:{code:R,highlights:[13,18,29,33,40],title:"待办事项列表应用示例"}}],tutorial:{concepts:["useArray 是一个专门用于数组状态管理的自定义 Hook","基础版本提供常见的数组操作方法","高级版本增加了验证、长度限制、历史记录等功能","使用不可变的方式更新数组状态","支持 TypeScript 泛型，提供类型安全"],steps:["定义 useArray Hook，接收初始数组参数","使用 useState 管理数组状态","实现基础操作方法：push、pop、shift、unshift","实现高级操作方法：remove、insert、update、move","添加批量操作方法：clear、reset","使用 useCallback 优化所有方法的引用","高级版本添加验证、限制、历史记录功能"],tips:["根据使用场景选择基础版本或高级版本","合理设置验证规则和长度限制","使用 TypeScript 提供更好的类型安全","在复杂场景中结合 useMemo 优化性能","考虑内存使用，合理控制历史记录长度"]},interview:{questions:[{question:"useArray 相比直接使用 useState 管理数组有什么优势？",answer:"useArray 封装了常见的数组操作逻辑，提供了统一的 API 接口，确保了不可变更新，减少了样板代码。它还提供了验证、长度限制、历史记录等高级功能，使用 useCallback 优化性能，并且代码更加语义化和易于维护。"},{question:"如何实现一个支持撤销重做功能的 useArray？",answer:"可以维护一个历史记录数组和当前索引。每次数组变化时，将新状态添加到历史记录中，并更新索引。撤销时将索引减1，重做时将索引加1。需要注意限制历史记录的最大长度，避免内存泄漏。"},{question:"useArray 在什么场景下最有用？",answer:"useArray 在以下场景最有用：1) 列表管理（待办事项、购物车）；2) 表单数组字段（动态表单项）；3) 数据展示（表格、卡片列表）；4) 拖拽排序功能；5) 文件上传列表管理。任何需要频繁进行数组操作的场景都适用。"},{question:"如何处理 useArray 的性能优化？",answer:"主要通过以下方式优化：1) 使用 useCallback 缓存所有操作方法；2) 结合 useMemo 缓存计算结果；3) 对于大数组，考虑虚拟化技术；4) 使用 React.memo 避免不必要的重渲染；5) 合理设置依赖数组；6) 对于频繁操作，考虑添加防抖处理。"},{question:"useArray 如何处理复杂对象的更新？",answer:"处理复杂对象时需要：1) 确保对象的不可变更新；2) 使用唯一 ID 而不是索引来标识对象；3) 在 update 方法中正确合并对象属性；4) 考虑使用 immer 等库简化不可变更新；5) 在比较对象时注意引用相等性问题。"}],keyPoints:["useArray 简化了数组状态的管理，提供完整的操作接口","高级版本支持验证、长度限制、历史记录等功能","使用不可变的方式更新数组，确保状态的正确性","适用于列表管理、表单数组、数据展示等多种场景","可以与其他 Hook 和状态管理库很好地集成"]},bestPractices:{dos:["始终使用不可变的方式更新数组","在操作前检查索引的有效性","使用 TypeScript 提供类型安全","为复杂场景选择高级版本的 useArray","结合 useMemo 优化计算密集的操作","提供清晰的 UI 反馈显示操作结果","合理控制历史记录的长度"],donts:["不要直接修改数组引用","不要忽略索引越界的检查","不要在验证函数中执行复杂操作","不要在回调函数中创建循环依赖","不要过度使用 useArray，简单场景直接用 useState","不要忘记处理空数组的边界情况","不要在每次渲染时创建新的回调函数"],patterns:["列表管理模式：使用 useArray 管理待办事项、购物车等列表","表单数组模式：在动态表单中使用 useArray 管理字段","拖拽排序模式：结合拖拽库实现可排序的列表","分页列表模式：结合分页功能管理大量数据","过滤搜索模式：结合过滤条件展示数组数据","批量操作模式：支持多选和批量处理功能","历史记录模式：使用撤销重做功能提升用户体验"]}});export{U as default};
