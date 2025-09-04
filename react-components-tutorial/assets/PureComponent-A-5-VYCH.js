import{j as e,R as p,r as i}from"./index-H7t66yxh.js";import{C as N}from"./ComponentTemplate-bNJaV0ol.js";let x=0;const j=({name:t,age:n})=>(x++,console.log(`RegularComponent 渲染次数: ${x}`),e.jsxs("div",{className:"p-4 border border-gray-200 rounded bg-white",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"普通组件"}),e.jsxs("p",{className:"text-gray-600 mb-1",children:["姓名: ",t]}),e.jsxs("p",{className:"text-gray-600 mb-2",children:["年龄: ",n]}),e.jsxs("p",{className:"text-sm text-blue-600",children:["渲染次数: ",x]})]}));let b=0;const P=p.memo(({name:t,age:n})=>(b++,console.log(`MemoizedComponent 渲染次数: ${b}`),e.jsxs("div",{className:"p-4 border border-gray-200 rounded bg-white",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"纯组件 (React.memo)"}),e.jsxs("p",{className:"text-gray-600 mb-1",children:["姓名: ",t]}),e.jsxs("p",{className:"text-gray-600 mb-2",children:["年龄: ",n]}),e.jsxs("p",{className:"text-sm text-green-600",children:["渲染次数: ",b]})]}))),k=()=>{const[t,n]=i.useState(0),[r,m]=i.useState("张三"),[o,l]=i.useState(25);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsxs("button",{onClick:()=>n(t+1),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:["无关更新 (count: ",t,")"]}),e.jsx("button",{onClick:()=>m(r==="张三"?"李四":"张三"),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"更新姓名"}),e.jsx("button",{onClick:()=>l(o+1),className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:"增加年龄"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(j,{name:r,age:o}),e.jsx(P,{name:r,age:o})]}),e.jsxs("div",{className:"p-4 border border-gray-200 rounded bg-gray-50",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"行为说明"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-sm text-gray-600",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:'点击"无关更新"：'}),"只有普通组件会重新渲染，纯组件会跳过渲染"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:'点击"更新姓名"或"增加年龄"：'}),"两个组件都会重新渲染，因为props发生了变化"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"React.memo："}),"通过浅比较props来决定是否重新渲染"]})]}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"打开控制台查看详细渲染日志，观察React.memo的优化效果。"})]})]})},w=`import React, { useState } from 'react';
import RegularComponent from './RegularComponent';
import MemoizedComponent from './MemoizedComponent';

const BasicPureComponentExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('张三');
  const [age, setAge] = useState(25);

  return (
    <div className="space-y-4">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          无关更新 (count: {count})
        </button>
        <button
          onClick={() => setName(name === '张三' ? '李四' : '张三')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          更新姓名
        </button>
        <button
          onClick={() => setAge(age + 1)}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          增加年龄
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RegularComponent name={name} age={age} />
        <MemoizedComponent name={name} age={age} />
      </div>

      <div className="p-4 border border-gray-200 rounded bg-gray-50">
        <h4 className="font-semibold text-gray-800 mb-2">行为说明</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
          <li>
            <span className="font-medium">点击"无关更新"：</span>
            只有普通组件会重新渲染，纯组件会跳过渲染
          </li>
          <li>
            <span className="font-medium">点击"更新姓名"或"增加年龄"：</span>
            两个组件都会重新渲染，因为props发生了变化
          </li>
          <li>
            <span className="font-medium">React.memo：</span>
            通过浅比较props来决定是否重新渲染
          </li>
        </ul>
        <p className="mt-2 text-sm text-gray-500">
          打开控制台查看详细渲染日志，观察React.memo的优化效果。
        </p>
      </div>
    </div>
  );
};

export default BasicPureComponentExample;`;let h=0;class R extends i.Component{render(){h++,console.log(`RegularClassComponent 渲染次数: ${h}`);const{name:n,age:r}=this.props;return e.jsxs("div",{className:"p-4 border border-gray-200 rounded bg-white",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"普通类组件"}),e.jsxs("p",{className:"text-gray-600 mb-1",children:["姓名: ",n]}),e.jsxs("p",{className:"text-gray-600 mb-2",children:["年龄: ",r]}),e.jsxs("p",{className:"text-sm text-blue-600",children:["渲染次数: ",h]})]})}}let C=0;class S extends i.PureComponent{render(){C++,console.log(`PureClassComponent 渲染次数: ${C}`);const{name:n,age:r}=this.props;return e.jsxs("div",{className:"p-4 border border-gray-200 rounded bg-white",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"纯类组件 (PureComponent)"}),e.jsxs("p",{className:"text-gray-600 mb-1",children:["姓名: ",n]}),e.jsxs("p",{className:"text-gray-600 mb-2",children:["年龄: ",r]}),e.jsxs("p",{className:"text-sm text-green-600",children:["渲染次数: ",C]})]})}}const M=()=>{const[t,n]=i.useState(0),[r,m]=i.useState("王五"),[o,l]=i.useState(30);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsxs("button",{onClick:()=>n(t+1),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:["无关更新 (count: ",t,")"]}),e.jsx("button",{onClick:()=>m(r==="王五"?"赵六":"王五"),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"更新姓名"}),e.jsx("button",{onClick:()=>l(o+1),className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:"增加年龄"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(R,{name:r,age:o}),e.jsx(S,{name:r,age:o})]}),e.jsxs("div",{className:"p-4 border border-gray-200 rounded bg-gray-50",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"行为说明"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-sm text-gray-600",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:'点击"无关更新"：'}),"只有普通类组件会重新渲染，PureComponent会跳过渲染"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:'点击"更新姓名"或"增加年龄"：'}),"两个组件都会重新渲染，因为props发生了变化"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"PureComponent："}),"自动实现了shouldComponentUpdate的浅比较逻辑"]})]}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"打开控制台查看详细渲染日志，观察PureComponent的优化效果。"})]})]})},I=`import React, { useState } from 'react';
import RegularClassComponent from './RegularClassComponent';
import PureClassComponent from './PureClassComponent';

const ClassComponentComparisonExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('王五');
  const [age, setAge] = useState(30);

  return (
    <div className="space-y-4">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          无关更新 (count: {count})
        </button>
        <button
          onClick={() => setName(name === '王五' ? '赵六' : '王五')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          更新姓名
        </button>
        <button
          onClick={() => setAge(age + 1)}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          增加年龄
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RegularClassComponent name={name} age={age} />
        <PureClassComponent name={name} age={age} />
      </div>

      <div className="p-4 border border-gray-200 rounded bg-gray-50">
        <h4 className="font-semibold text-gray-800 mb-2">行为说明</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
          <li>
            <span className="font-medium">点击"无关更新"：</span>
            只有普通类组件会重新渲染，PureComponent会跳过渲染
          </li>
          <li>
            <span className="font-medium">点击"更新姓名"或"增加年龄"：</span>
            两个组件都会重新渲染，因为props发生了变化
          </li>
          <li>
            <span className="font-medium">PureComponent：</span>
            自动实现了shouldComponentUpdate的浅比较逻辑
          </li>
        </ul>
        <p className="mt-2 text-sm text-gray-500">
          打开控制台查看详细渲染日志，观察PureComponent的优化效果。
        </p>
      </div>
    </div>
  );
};

export default ClassComponentComparisonExample;`;let y=0;const E=p.memo(({user:t})=>(y++,console.log(`ShallowComponent 渲染次数: ${y}`,t),e.jsxs("div",{className:"p-4 border border-gray-200 rounded bg-white",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 mb-2",children:"浅比较组件"}),e.jsxs("p",{className:"text-gray-600 mb-1",children:["姓名: ",t.name]}),e.jsxs("p",{className:"text-gray-600 mb-1",children:["年龄: ",t.profile.age]}),e.jsxs("p",{className:"text-gray-600 mb-2",children:["城市: ",t.profile.city]}),e.jsxs("p",{className:"text-sm text-blue-600",children:["渲染次数: ",y]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"只进行浅比较，嵌套对象变化可能检测不到"})]})));let f=0;const v=(t,n)=>{if(t===n)return!0;if(t==null||n==null||typeof t!="object"||typeof n!="object")return!1;const r=Object.keys(t),m=Object.keys(n);if(r.length!==m.length)return!1;for(let o of r)if(!m.includes(o)||!v(t[o],n[o]))return!1;return!0},$=p.memo(({user:t})=>(f++,console.log(`DeepComponent 渲染次数: ${f}`,t),e.jsxs("div",{className:"p-4 border border-gray-200 rounded bg-white",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 mb-2",children:"深比较组件"}),e.jsxs("p",{className:"text-gray-600 mb-1",children:["姓名: ",t.name]}),e.jsxs("p",{className:"text-gray-600 mb-1",children:["年龄: ",t.profile.age]}),e.jsxs("p",{className:"text-gray-600 mb-2",children:["城市: ",t.profile.city]}),e.jsxs("p",{className:"text-sm text-green-600",children:["渲染次数: ",f]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"使用深比较，可以检测嵌套对象的变化"})]})),(t,n)=>v(t.user,n.user)),L=()=>{const[t,n]=i.useState({name:"张三",profile:{age:25,city:"北京"}}),[r,m]=i.useState(0),o=()=>{n(a=>({...a,name:a.name==="张三"?"李四":"张三"}))},l=()=>{n(a=>({...a,profile:{...a.profile,age:a.profile.age+1}}))},s=()=>{const a={...t};a.profile.age+=1,n(a)},d=()=>{n(a=>({...a,profile:{...a.profile,city:a.profile.city==="北京"?"上海":"北京"}}))};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[e.jsx("button",{onClick:o,className:"px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"更新姓名"}),e.jsx("button",{onClick:l,className:"px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"更新年龄（正确）"}),e.jsx("button",{onClick:s,className:"px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm",children:"更新年龄（引用）"}),e.jsx("button",{onClick:d,className:"px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"更新城市"}),e.jsxs("button",{onClick:()=>m(a=>a+1),className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:["无关更新 (",r,")"]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(E,{user:t}),e.jsx($,{user:t})]}),e.jsxs("div",{className:"p-4 border border-gray-200 rounded bg-gray-50",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"行为说明"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-sm text-gray-600",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"更新姓名/城市（正确）："}),"两个组件都会重新渲染，因为创建了新的对象引用"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"更新年龄（引用）："}),"浅比较组件不会重新渲染，深比较组件会重新渲染"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"无关更新："}),"两个组件都不会重新渲染，因为user对象没有变化"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"深比较成本："}),"深比较需要遍历所有属性，性能开销较大"]})]}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"打开控制台查看详细渲染日志，观察浅比较和深比较的行为差异。"})]})]})},U=`import React, { useState } from 'react';
import ShallowComponent from './ShallowComponent';
import DeepComponent from './DeepComponent';

const ComplexPropsExample: React.FC = () => {
  const [user, setUser] = useState({
    name: '张三',
    profile: {
      age: 25,
      city: '北京'
    }
  });
  const [updateTrigger, setUpdateTrigger] = useState(0);

  const updateName = () => {
    setUser(prev => ({
      ...prev,
      name: prev.name === '张三' ? '李四' : '张三'
    }));
  };

  const updateAge = () => {
    setUser(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        age: prev.profile.age + 1
      }
    }));
  };

  const updateAgeByReference = () => {
    // 直接修改嵌套对象（错误做法，但用于演示浅比较的限制）
    const newUser = { ...user };
    newUser.profile.age += 1; // 这样修改浅比较检测不到
    setUser(newUser);
  };

  const updateCity = () => {
    setUser(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        city: prev.profile.city === '北京' ? '上海' : '北京'
      }
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={updateName}
          className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          更新姓名
        </button>
        <button
          onClick={updateAge}
          className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
        >
          更新年龄（正确）
        </button>
        <button
          onClick={updateAgeByReference}
          className="px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
        >
          更新年龄（引用）
        </button>
        <button
          onClick={updateCity}
          className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
        >
          更新城市
        </button>
        <button
          onClick={() => setUpdateTrigger(prev => prev + 1)}
          className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
        >
          无关更新 ({updateTrigger})
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ShallowComponent user={user} />
        <DeepComponent user={user} />
      </div>

      <div className="p-4 border border-gray-200 rounded bg-gray-50">
        <h4 className="font-semibold text-gray-800 mb-2">行为说明</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
          <li>
            <span className="font-medium">更新姓名/城市（正确）：</span>
            两个组件都会重新渲染，因为创建了新的对象引用
          </li>
          <li>
            <span className="font-medium">更新年龄（引用）：</span>
            浅比较组件不会重新渲染，深比较组件会重新渲染
          </li>
          <li>
            <span className="font-medium">无关更新：</span>
            两个组件都不会重新渲染，因为user对象没有变化
          </li>
          <li>
            <span className="font-medium">深比较成本：</span>
            深比较需要遍历所有属性，性能开销较大
          </li>
        </ul>
        <p className="mt-2 text-sm text-gray-500">
          打开控制台查看详细渲染日志，观察浅比较和深比较的行为差异。
        </p>
      </div>
    </div>
  );
};

export default ComplexPropsExample;`,c={},D=(t,n)=>{const r=t.product,m=n.product;return r.id===m.id&&r.name===m.name&&r.price===m.price&&t.highlight===n.highlight},T=p.memo(({product:t,highlight:n})=>(c[t.id]=(c[t.id]||0)+1,console.log(`ProductCard ${t.id} 渲染次数: ${c[t.id]}`),e.jsxs("div",{className:`p-4 border rounded ${n?"bg-yellow-50 border-yellow-300":"bg-white border-gray-200"}`,children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:t.name}),e.jsxs("span",{className:"text-lg font-bold text-green-600",children:["$",t.price]})]}),t.metadata&&e.jsxs("div",{className:"text-sm text-gray-500 mb-2",children:[e.jsxs("p",{children:["分类: ",t.metadata.category]}),e.jsxs("p",{children:["标签: ",t.metadata.tags.join(", ")]})]}),e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsxs("span",{className:"text-blue-600",children:["渲染次数: ",c[t.id]]}),n&&e.jsx("span",{className:"bg-yellow-200 px-2 py-1 rounded text-yellow-800",children:"高价商品"})]})]})),D),z=()=>{const[t,n]=i.useState([{id:1,name:"iPhone 15",price:999,metadata:{category:"手机",tags:["苹果","5G","高端"],lastUpdated:new Date().toISOString()}},{id:2,name:"MacBook Pro",price:1999,metadata:{category:"笔记本",tags:["苹果","M3","专业"],lastUpdated:new Date().toISOString()}},{id:3,name:"AirPods Pro",price:249,metadata:{category:"耳机",tags:["苹果","降噪","无线"],lastUpdated:new Date().toISOString()}}]),r=i.useMemo(()=>[...t].sort((s,d)=>d.price-s.price),[t]),m=s=>{n(d=>d.map(a=>a.id===s?{...a,price:a.price+100}:a))},o=s=>{n(d=>d.map(a=>a.id===s?{...a,metadata:{...a.metadata,lastUpdated:new Date().toISOString(),tags:[...a.metadata.tags,"新标签"]}}:a))},l=()=>{n(s=>[...s].reverse())};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[e.jsx("button",{onClick:()=>m(1),className:"px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"iPhone +$100"}),e.jsx("button",{onClick:()=>m(2),className:"px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"MacBook +$100"}),e.jsx("button",{onClick:()=>o(1),className:"px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm",children:"iPhone 添加元数据"}),e.jsx("button",{onClick:()=>o(2),className:"px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"MacBook 添加元数据"}),e.jsx("button",{onClick:l,className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"排序"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:r.map(s=>e.jsx(T,{product:s,highlight:s.price>1e3},`${s.id}_${s.price}`))}),e.jsxs("div",{className:"p-4 border border-gray-200 rounded bg-gray-50",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"行为说明"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-sm text-gray-600",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"更新价格："}),"会重新渲染对应产品卡片（price变化）"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"添加元数据："}),"不会重新渲染卡片（比较函数忽略metadata）"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"排序："}),"不会导致重新渲染（只是顺序变化）"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"高亮逻辑："}),"价格超过$1000的产品会有黄色高亮"]})]}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"打开控制台查看详细渲染日志，观察自定义比较函数的效果。"})]})]})},A=`import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';

const CustomCompareExample: React.FC = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'iPhone 15',
      price: 999,
      metadata: {
        category: '手机',
        tags: ['苹果', '5G', '高端'],
        lastUpdated: new Date().toISOString()
      }
    },
    {
      id: 2,
      name: 'MacBook Pro',
      price: 1999,
      metadata: {
        category: '笔记本',
        tags: ['苹果', 'M3', '专业'],
        lastUpdated: new Date().toISOString()
      }
    },
    {
      id: 3,
      name: 'AirPods Pro',
      price: 249,
      metadata: {
        category: '耳机',
        tags: ['苹果', '降噪', '无线'],
        lastUpdated: new Date().toISOString()
      }
    }
  ]);

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => b.price - a.price);
  }, [products]);

  const updatePrice = (id: number) => {
    setProducts(prev => prev.map(product => 
      product.id === id 
        ? { ...product, price: product.price + 100 }
        : product
    ));
  };

  const addMetadata = (id: number) => {
    setProducts(prev => prev.map(product => 
      product.id === id 
        ? {
            ...product,
            metadata: {
              ...product.metadata!,
              lastUpdated: new Date().toISOString(),
              tags: [...product.metadata!.tags, '新标签']
            }
          }
        : product
    ));
  };

  const sortProducts = () => {
    setProducts(prev => [...prev].reverse());
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => updatePrice(1)}
          className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          iPhone +$100
        </button>
        <button
          onClick={() => updatePrice(2)}
          className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
        >
          MacBook +$100
        </button>
        <button
          onClick={() => addMetadata(1)}
          className="px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
        >
          iPhone 添加元数据
        </button>
        <button
          onClick={() => addMetadata(2)}
          className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
        >
          MacBook 添加元数据
        </button>
        <button
          onClick={sortProducts}
          className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
        >
          排序
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedProducts.map(product => (
          <ProductCard
            key={\`\${product.id}_\${product.price}\`}
            product={product}
            highlight={product.price > 1000}
          />
        ))}
      </div>

      <div className="p-4 border border-gray-200 rounded bg-gray-50">
        <h4 className="font-semibold text-gray-800 mb-2">行为说明</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
          <li>
            <span className="font-medium">更新价格：</span>
            会重新渲染对应产品卡片（price变化）
          </li>
          <li>
            <span className="font-medium">添加元数据：</span>
            不会重新渲染卡片（比较函数忽略metadata）
          </li>
          <li>
            <span className="font-medium">排序：</span>
            不会导致重新渲染（只是顺序变化）
          </li>
          <li>
            <span className="font-medium">高亮逻辑：</span>
            价格超过$1000的产品会有黄色高亮
          </li>
        </ul>
        <p className="mt-2 text-sm text-gray-500">
          打开控制台查看详细渲染日志，观察自定义比较函数的效果。
        </p>
      </div>
    </div>
  );
};

export default CustomCompareExample;`,B=`import React from 'react';

interface User {
  name: string;
  profile: {
    age: number;
    city: string;
  };
}

interface DeepComponentProps {
  user: User;
}

let renderCount = 0;

// 深比较函数
const deepEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) return true;
  
  if (obj1 == null || obj2 == null) return false;
  
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  
  return true;
};

const DeepComponent: React.FC<DeepComponentProps> = React.memo(({ user }) => {
  renderCount++;
  console.log(\`DeepComponent 渲染次数: \${renderCount}\`, user);

  return (
    <div className="p-4 border border-gray-200 rounded bg-white">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">深比较组件</h4>
      <p className="text-gray-600 mb-1">姓名: {user.name}</p>
      <p className="text-gray-600 mb-1">年龄: {user.profile.age}</p>
      <p className="text-gray-600 mb-2">城市: {user.profile.city}</p>
      <p className="text-sm text-green-600">渲染次数: {renderCount}</p>
      <p className="text-xs text-gray-500 mt-2">
        使用深比较，可以检测嵌套对象的变化
      </p>
    </div>
  );
}, (prevProps, nextProps) => {
  return deepEqual(prevProps.user, nextProps.user);
});

export default DeepComponent;`,O=`import React from 'react';

interface MemoizedComponentProps {
  name: string;
  age: number;
}

let renderCount = 0;

const MemoizedComponent: React.FC<MemoizedComponentProps> = React.memo(({ name, age }) => {
  renderCount++;
  console.log(\`MemoizedComponent 渲染次数: \${renderCount}\`);

  return (
    <div className="p-4 border border-gray-200 rounded bg-white">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">纯组件 (React.memo)</h3>
      <p className="text-gray-600 mb-1">姓名: {name}</p>
      <p className="text-gray-600 mb-2">年龄: {age}</p>
      <p className="text-sm text-green-600">渲染次数: {renderCount}</p>
    </div>
  );
});

export default MemoizedComponent;`,q=`import React from 'react';

interface MemoizedListItemProps {
  id: number;
  name: string;
  value: number;
}

const renderCounts: { [key: number]: number } = {};

const MemoizedListItem: React.FC<MemoizedListItemProps> = React.memo(({ id, name, value }) => {
  renderCounts[id] = (renderCounts[id] || 0) + 1;
  console.log(\`MemoizedListItem \${id} 渲染次数: \${renderCounts[id]}\`);

  return (
    <div className="p-3 border border-gray-200 rounded bg-white">
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-800">{name}</span>
        <span className="text-gray-600">值: {value}</span>
      </div>
      <div className="text-sm text-green-600 mt-1">
        渲染次数: {renderCounts[id]}
      </div>
    </div>
  );
});

export default MemoizedListItem;`,u={},F=({id:t,name:n,value:r})=>(u[t]=(u[t]||0)+1,console.log(`RegularListItem ${t} 渲染次数: ${u[t]}`),e.jsxs("div",{className:"p-3 border border-gray-200 rounded bg-white",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-medium text-gray-800",children:n}),e.jsxs("span",{className:"text-gray-600",children:["值: ",r]})]}),e.jsxs("div",{className:"text-sm text-blue-600 mt-1",children:["渲染次数: ",u[t]]})]})),g={},V=p.memo(({id:t,name:n,value:r})=>(g[t]=(g[t]||0)+1,console.log(`MemoizedListItem ${t} 渲染次数: ${g[t]}`),e.jsxs("div",{className:"p-3 border border-gray-200 rounded bg-white",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-medium text-gray-800",children:n}),e.jsxs("span",{className:"text-gray-600",children:["值: ",r]})]}),e.jsxs("div",{className:"text-sm text-green-600 mt-1",children:["渲染次数: ",g[t]]})]}))),Y=()=>{const[t,n]=i.useState(""),[r,m]=i.useState(0),o=i.useMemo(()=>[{id:1,name:"项目A",value:100},{id:2,name:"项目B",value:200},{id:3,name:"项目C",value:300},{id:4,name:"项目D",value:400},{id:5,name:"项目E",value:500}],[]),l=i.useMemo(()=>o.filter(s=>s.name.toLowerCase().includes(t.toLowerCase())),[o,t]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsx("input",{type:"text",placeholder:"过滤项目...",value:t,onChange:s=>n(s.target.value),className:"px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("button",{onClick:()=>m(s=>s+1),className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:["触发无关更新 (",r,")"]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold mb-3 text-gray-800",children:"普通列表项"}),e.jsx("div",{className:"space-y-2",children:l.map(s=>e.jsx(F,{id:s.id,name:s.name,value:s.value},s.id))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold mb-3 text-gray-800",children:"纯组件列表项"}),e.jsx("div",{className:"space-y-2",children:l.map(s=>e.jsx(V,{id:s.id,name:s.name,value:s.value},s.id))})]})]}),e.jsxs("div",{className:"p-4 border border-gray-200 rounded bg-gray-50",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"行为说明"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-sm text-gray-600",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"过滤操作："}),"两种列表项都会重新渲染，因为props发生了变化"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"无关更新："}),"只有普通列表项会重新渲染，纯组件列表项会跳过渲染"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"性能对比："}),"在大型列表中，纯组件的优势会更加明显"]})]}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"打开控制台查看详细渲染日志，观察两种列表项的渲染行为差异。"})]})]})},G=`import React, { useState, useMemo } from 'react';
import RegularListItem from './RegularListItem';
import MemoizedListItem from './MemoizedListItem';

const PerformanceComparisonExample: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [updateTrigger, setUpdateTrigger] = useState(0);

  const items = useMemo(() => [
    { id: 1, name: '项目A', value: 100 },
    { id: 2, name: '项目B', value: 200 },
    { id: 3, name: '项目C', value: 300 },
    { id: 4, name: '项目D', value: 400 },
    { id: 5, name: '项目E', value: 500 },
  ], []);

  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  return (
    <div className="space-y-4">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="过滤项目..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setUpdateTrigger(prev => prev + 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          触发无关更新 ({updateTrigger})
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-800">普通列表项</h4>
          <div className="space-y-2">
            {filteredItems.map(item => (
              <RegularListItem
                key={item.id}
                id={item.id}
                name={item.name}
                value={item.value}
              />
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-800">纯组件列表项</h4>
          <div className="space-y-2">
            {filteredItems.map(item => (
              <MemoizedListItem
                key={item.id}
                id={item.id}
                name={item.name}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 border border-gray-200 rounded bg-gray-50">
        <h4 className="font-semibold text-gray-800 mb-2">行为说明</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
          <li>
            <span className="font-medium">过滤操作：</span>
            两种列表项都会重新渲染，因为props发生了变化
          </li>
          <li>
            <span className="font-medium">无关更新：</span>
            只有普通列表项会重新渲染，纯组件列表项会跳过渲染
          </li>
          <li>
            <span className="font-medium">性能对比：</span>
            在大型列表中，纯组件的优势会更加明显
          </li>
        </ul>
        <p className="mt-2 text-sm text-gray-500">
          打开控制台查看详细渲染日志，观察两种列表项的渲染行为差异。
        </p>
      </div>
    </div>
  );
};

export default PerformanceComparisonExample;`,J=`import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  metadata?: {
    category: string;
    tags: string[];
    lastUpdated: string;
  };
}

interface ProductCardProps {
  product: Product;
  highlight: boolean;
}

const renderCounts: { [key: number]: number } = {};

// 自定义比较函数：只关心 id, name, price, highlight
const areEqual = (prevProps: ProductCardProps, nextProps: ProductCardProps) => {
  const prev = prevProps.product;
  const next = nextProps.product;
  
  return (
    prev.id === next.id &&
    prev.name === next.name &&
    prev.price === next.price &&
    prevProps.highlight === nextProps.highlight
  );
  // 注意：我们故意忽略了 metadata 的比较
};

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product, highlight }) => {
  renderCounts[product.id] = (renderCounts[product.id] || 0) + 1;
  console.log(\`ProductCard \${product.id} 渲染次数: \${renderCounts[product.id]}\`);

  return (
    <div className={\`p-4 border rounded \${
      highlight ? 'bg-yellow-50 border-yellow-300' : 'bg-white border-gray-200'
    }\`}>
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-800">{product.name}</h4>
        <span className="text-lg font-bold text-green-600">\${product.price}</span>
      </div>
      
      {product.metadata && (
        <div className="text-sm text-gray-500 mb-2">
          <p>分类: {product.metadata.category}</p>
          <p>标签: {product.metadata.tags.join(', ')}</p>
        </div>
      )}
      
      <div className="flex justify-between items-center text-xs">
        <span className="text-blue-600">渲染次数: {renderCounts[product.id]}</span>
        {highlight && (
          <span className="bg-yellow-200 px-2 py-1 rounded text-yellow-800">
            高价商品
          </span>
        )}
      </div>
    </div>
  );
}, areEqual);

export default ProductCard;`,_=`import React, { PureComponent } from 'react';

interface PureClassComponentProps {
  name: string;
  age: number;
}

let renderCount = 0;

class PureClassComponent extends PureComponent<PureClassComponentProps> {
  render() {
    renderCount++;
    console.log(\`PureClassComponent 渲染次数: \${renderCount}\`);
    
    const { name, age } = this.props;
    
    return (
      <div className="p-4 border border-gray-200 rounded bg-white">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">纯类组件 (PureComponent)</h3>
        <p className="text-gray-600 mb-1">姓名: {name}</p>
        <p className="text-gray-600 mb-2">年龄: {age}</p>
        <p className="text-sm text-green-600">渲染次数: {renderCount}</p>
      </div>
    );
  }
}

export default PureClassComponent;`,H=`import React, { Component } from 'react';

interface RegularClassComponentProps {
  name: string;
  age: number;
}

let renderCount = 0;

class RegularClassComponent extends Component<RegularClassComponentProps> {
  render() {
    renderCount++;
    console.log(\`RegularClassComponent 渲染次数: \${renderCount}\`);
    
    const { name, age } = this.props;
    
    return (
      <div className="p-4 border border-gray-200 rounded bg-white">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">普通类组件</h3>
        <p className="text-gray-600 mb-1">姓名: {name}</p>
        <p className="text-gray-600 mb-2">年龄: {age}</p>
        <p className="text-sm text-blue-600">渲染次数: {renderCount}</p>
      </div>
    );
  }
}

export default RegularClassComponent;`,K=`import React from 'react';\r
\r
interface RegularComponentProps {\r
  name: string;\r
  age: number;\r
}\r
\r
let renderCount = 0;\r
\r
const RegularComponent: React.FC<RegularComponentProps> = ({ name, age }) => {\r
  renderCount++;\r
  console.log(\`RegularComponent 渲染次数: \${renderCount}\`);\r
\r
  return (\r
    <div className="p-4 border border-gray-200 rounded bg-white">\r
      <h3 className="text-lg font-semibold text-gray-800 mb-2">普通组件</h3>\r
      <p className="text-gray-600 mb-1">姓名: {name}</p>\r
      <p className="text-gray-600 mb-2">年龄: {age}</p>\r
      <p className="text-sm text-blue-600">渲染次数: {renderCount}</p>\r
    </div>\r
  );\r
};\r
\r
export default RegularComponent;`,Q=`import React from 'react';

interface RegularListItemProps {
  id: number;
  name: string;
  value: number;
}

const renderCounts: { [key: number]: number } = {};

const RegularListItem: React.FC<RegularListItemProps> = ({ id, name, value }) => {
  renderCounts[id] = (renderCounts[id] || 0) + 1;
  console.log(\`RegularListItem \${id} 渲染次数: \${renderCounts[id]}\`);

  return (
    <div className="p-3 border border-gray-200 rounded bg-white">
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-800">{name}</span>
        <span className="text-gray-600">值: {value}</span>
      </div>
      <div className="text-sm text-blue-600 mt-1">
        渲染次数: {renderCounts[id]}
      </div>
    </div>
  );
};

export default RegularListItem;`,W=`import React from 'react';

interface User {
  name: string;
  profile: {
    age: number;
    city: string;
  };
}

interface ShallowComponentProps {
  user: User;
}

let renderCount = 0;

const ShallowComponent: React.FC<ShallowComponentProps> = React.memo(({ user }) => {
  renderCount++;
  console.log(\`ShallowComponent 渲染次数: \${renderCount}\`, user);

  return (
    <div className="p-4 border border-gray-200 rounded bg-white">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">浅比较组件</h4>
      <p className="text-gray-600 mb-1">姓名: {user.name}</p>
      <p className="text-gray-600 mb-1">年龄: {user.profile.age}</p>
      <p className="text-gray-600 mb-2">城市: {user.profile.city}</p>
      <p className="text-sm text-blue-600">渲染次数: {renderCount}</p>
      <p className="text-xs text-gray-500 mt-2">
        只进行浅比较，嵌套对象变化可能检测不到
      </p>
    </div>
  );
});

export default ShallowComponent;`,ee=()=>{const t={title:"纯组件 (Pure Components)",description:"纯组件是React中的性能优化技术，通过浅比较props和state来避免不必要的重新渲染。React.memo是函数组件的纯组件实现，而React.PureComponent是类组件的纯组件基类。",overview:[{title:"核心概念",items:["纯组件是React中的性能优化技术，通过浅比较props和state来避免不必要的重新渲染","React.memo是函数组件的纯组件实现，而React.PureComponent是类组件的纯组件基类","浅比较只检查第一层属性，嵌套对象的变化可能被忽略","自定义比较函数可以实现更精确的比较逻辑"]},{title:"主要优势",items:["性能优化 - 自动跳过不必要的重新渲染，提升应用性能","简单易用 - 只需使用React.memo包装组件或继承PureComponent","浅比较 - 自动比较props和state的第一层属性","自定义比较 - React.memo支持自定义比较函数","向后兼容 - 不影响组件的正常功能和API"]},{title:"适用场景",items:["展示型组件 - props变化频率较低的纯展示组件","列表项组件 - 大量重复渲染的列表项优化","复杂计算组件 - 渲染成本较高的组件","深层嵌套组件 - 避免父组件更新导致的连锁重渲染","稳定props组件 - props结构相对稳定的组件"]},{title:"注意事项",items:["浅比较限制 - 只比较第一层属性，深层对象变化可能被忽略","比较成本 - 对于简单组件，比较成本可能超过渲染成本","引用相等性 - 避免在render中创建新对象或函数作为props","自定义比较 - 复杂的比较逻辑可能影响性能","调试困难 - 可能使组件行为变得不够直观"]}],examples:[{title:"示例1：函数组件纯组件对比",description:"使用React.memo对比普通函数组件和纯函数组件的渲染行为",component:e.jsx(k,{}),observationPoints:["普通组件在父组件每次更新时都会重新渲染","纯组件只有在props实际变化时才会重新渲染","React.memo包装函数组件实现纯组件功能","浅比较检查props的第一层属性是否变化"],keyPoints:["React.memo是函数组件的纯组件实现方式","浅比较只检查props的第一层属性变化","可以显著减少不必要的重新渲染"],commonTraps:["在render中创建新对象或函数作为props","误以为纯组件会进行深比较","对所有组件盲目使用纯组件优化"],solutions:["使用useMemo和useCallback缓存对象和函数","理解浅比较的限制，必要时使用自定义比较","只对渲染成本较高的组件使用纯组件优化"],importantTips:["React.memo通过浅比较props来决定是否重新渲染组件","纯组件优化适用于props变化频率较低的展示型组件","避免在父组件render中创建新对象，这会导致纯组件失效"],preCode:[{title:"RegularComponent",code:K},{title:"MemoizedComponent",code:O}],codeExample:{title:"BasicPureComponentExample 实现",code:w}},{title:"示例2：类组件纯组件对比",description:"使用React.PureComponent对比普通类组件和纯类组件的渲染行为",component:e.jsx(M,{}),observationPoints:["普通类组件在父组件每次更新时都会重新渲染","PureComponent会自动进行浅比较，只有props变化时才重新渲染","PureComponent是类组件的内置优化方案","控制台日志可以清晰显示渲染行为差异"],keyPoints:["PureComponent继承自Component，内置了shouldComponentUpdate优化","自动进行props和state的浅比较","适用于props和state相对稳定的类组件"],commonTraps:["在render中创建新对象或函数作为props","误以为PureComponent会进行深比较","忽略state变化也会触发浅比较"],solutions:["将对象和函数定义在组件外部或使用实例方法","理解浅比较的工作原理和限制","合理设计state结构，避免不必要的嵌套"],importantTips:["PureComponent是类组件性能优化的标准方案","相比手动实现shouldComponentUpdate，PureComponent更安全可靠","现代React开发中，函数组件+React.memo是更推荐的方案"],preCode:[{title:"RegularClassComponent",code:H},{title:"PureClassComponent",code:_}],codeExample:{title:"ClassComponentComparisonExample 实现",code:I}},{title:"示例3：性能对比示例",description:"在列表渲染中观察纯组件的性能优势",component:e.jsx(Y,{}),observationPoints:["列表项组件使用纯组件优化可以显著提升性能","普通组件在父组件更新时全部重新渲染","纯组件只有在自身props变化时才重新渲染","渲染计数器可以直观显示渲染次数差异"],keyPoints:["列表渲染是纯组件优化的典型应用场景","大量组件的重复渲染会显著影响性能","纯组件可以有效减少不必要的渲染"],commonTraps:["列表项的key值不稳定导致优化失效","父组件传递不稳定的props给列表项","忽略了渲染计数器的性能监控价值"],solutions:["使用稳定的key值，通常是数据的唯一标识","避免在父组件中创建新对象作为props","使用React DevTools Profiler监控性能"],importantTips:["列表渲染中的纯组件优化可以带来显著的性能提升","渲染计数器是调试和验证优化效果的有效工具","大型列表应该优先考虑使用纯组件优化"],preCode:[{title:"RegularListItem",code:Q},{title:"MemoizedListItem",code:q}],codeExample:{title:"PerformanceComparisonExample 实现",code:G}},{title:"示例4：复杂Props处理",description:"处理嵌套对象props时的浅比较限制",component:e.jsx(L,{}),observationPoints:["浅比较只检查props的第一层属性","嵌套对象的变化可能不会被浅比较检测到","自定义比较函数可以实现深比较","深比较的性能成本需要权衡"],keyPoints:["理解浅比较的限制和适用场景","自定义比较函数提供更灵活的控制","深比较需要考虑性能成本"],commonTraps:["误以为纯组件会自动进行深比较","在自定义比较函数中执行昂贵操作","忽略嵌套对象变化导致的渲染问题"],solutions:["保持props结构扁平，避免深层嵌套","使用不可变数据结构或immutable库","合理使用自定义比较函数"],importantTips:["浅比较只检查第一层属性，嵌套对象变化可能被忽略","自定义比较函数可以实现深比较，但要注意性能成本","保持props结构简单是纯组件优化的最佳实践"],preCode:[{title:"ShallowComponent",code:W},{title:"DeepComponent",code:B}],codeExample:{title:"ComplexPropsExample 实现",code:U}},{title:"示例5：自定义比较策略",description:"实现只关心特定属性变化的自定义比较逻辑",component:e.jsx(z,{}),observationPoints:["自定义比较函数可以只关心特定属性","忽略不重要的属性变化可以进一步优化性能","比较逻辑应该简单高效","返回true表示props相等，跳过渲染"],keyPoints:["自定义比较提供精确的渲染控制","可以忽略不影响渲染的属性变化","比较函数的性能直接影响优化效果"],commonTraps:["比较函数返回值含义与shouldComponentUpdate相反","在比较函数中执行复杂或昂贵的操作","忽略了重要属性的变化检测"],solutions:["明确比较函数的返回值含义","保持比较逻辑简单高效","仔细考虑哪些属性变化需要重新渲染"],importantTips:["自定义比较函数返回true表示props相等，跳过渲染","只比较影响渲染结果的关键属性可以进一步优化性能","比较函数应该保持简单高效，避免复杂的计算逻辑"],preCode:[{title:"ProductCard",code:J}],codeExample:{title:"CustomCompareExample 实现",code:A}}],tutorial:{concepts:["纯组件通过浅比较props和state来避免不必要的重新渲染","React.memo是函数组件的纯组件实现，React.PureComponent是类组件的基类","浅比较只检查第一层属性，嵌套对象的变化可能被忽略","自定义比较函数可以实现更精确的比较逻辑","纯组件优化适用于props变化频率较低的展示型组件"],steps:["识别优化目标：找出渲染频繁但props变化较少的组件","应用纯组件：使用React.memo包装函数组件或继承PureComponent","避免新对象：使用useMemo和useCallback缓存对象和函数","测试效果：使用React DevTools Profiler测量性能提升","处理复杂props：必要时实现自定义比较函数","监控性能：持续监控和调整优化策略","文档记录：记录优化决策和效果，便于团队维护"],tips:["不要对所有组件都使用纯组件，只优化真正需要的组件","保持props结构简单扁平，避免深层嵌套对象","使用useMemo和useCallback确保传递给纯组件的props引用稳定","自定义比较函数要简单高效，避免复杂的计算逻辑","使用React DevTools Profiler验证优化效果","在列表渲染中优先考虑使用纯组件优化"]},interview:{questions:[{question:"React.PureComponent 和 React.Component 的区别是什么？",answer:`React.PureComponent 和 React.Component 的主要区别在于 shouldComponentUpdate 的实现。React.PureComponent 自动实现了浅比较优化，而 React.Component 默认总是重新渲染。

**核心差异：**

- **React.Component**：默认的 shouldComponentUpdate 总是返回 true，每次 setState 或父组件更新都会重新渲染
- **React.PureComponent**：自动实现了 shouldComponentUpdate，对 props 和 state 进行浅比较
- **浅比较机制**：只比较第一层属性的引用是否相等，使用 Object.is() 进行比较
- **性能优势**：可以避免不必要的重新渲染，特别适用于展示型组件

**使用场景对比：**

\`\`\`javascript
// 普通组件 - 每次都重新渲染
class RegularComponent extends Component {
  render() {
    console.log('重新渲染'); // 每次父组件更新都会执行
    return <div>{this.props.name}</div>;
  }
}

// 纯组件 - 只有 props 变化时才重新渲染
class PureComponentExample extends PureComponent {
  render() {
    console.log('重新渲染'); // 只有 name 变化时才执行
    return <div>{this.props.name}</div>;
  }
}
\`\`\``},{question:"React.memo 的第二个参数有什么作用？如何正确使用？",answer:`React.memo 的第二个参数是自定义比较函数（areEqual），用于精确控制组件的重新渲染逻辑。这个函数让开发者可以实现比默认浅比较更复杂的比较策略。

**函数签名和返回值：**

\`\`\`javascript
const MyComponent = React.memo(Component, (prevProps, nextProps) => {
  // 返回 true：props 相等，跳过重新渲染
  // 返回 false：props 不同，需要重新渲染
  return prevProps.id === nextProps.id && prevProps.name === nextProps.name;
});
\`\`\`

**注意事项：**

- **返回值含义**：与 shouldComponentUpdate 相反，true 表示不需要更新
- **性能考虑**：比较函数本身不应该有复杂的计算逻辑
- **引用比较**：可以实现深比较，但要注意性能开销

**实际应用场景：**

1. **选择性比较**：只比较关键 props
2. **深比较**：处理嵌套对象的变化
3. **复杂逻辑**：基于业务规则的比较
4. **性能优化**：避免昂贵的重新渲染`},{question:"什么情况下不应该使用纯组件？为什么？",answer:`虽然纯组件是重要的性能优化手段，但并非所有场景都适用。错误使用可能导致性能下降或功能异常。

**不适用的场景：**

**1. 高频变化的 props**
\`\`\`javascript
// ❌ 不适合：props 频繁变化
const Timer = memo(({ timestamp }) => {
  return <div>{new Date(timestamp).toLocaleString()}</div>;
});
// 每秒都更新 timestamp，memo 的比较开销大于渲染开销
\`\`\`

**2. 复杂嵌套对象**
\`\`\`javascript
// ❌ 不适合：浅比较无法检测深层变化
const UserProfile = memo(({ user }) => {
  return <div>{user.profile.settings.theme}</div>;
});
// user.profile.settings.theme 变化时，浅比较检测不到
\`\`\`

**3. 渲染成本极低的组件**
\`\`\`javascript
// ❌ 不适合：组件过于简单
const SimpleText = memo(({ text }) => <span>{text}</span>);
// 比较开销可能大于渲染开销
\`\`\`

**4. 依赖副作用的组件**
\`\`\`javascript
// ❌ 不适合：需要每次都执行副作用
const AnalyticsComponent = memo(({ event }) => {
  useEffect(() => {
    analytics.track(event); // 需要每次都执行
  });
  return null;
});
\`\`\``},{question:"如何避免纯组件优化失效？有哪些最佳实践？",answer:`纯组件优化失效通常是由于 props 引用不稳定导致的。掌握正确的模式和技巧是关键。

**核心原则：保持 props 引用稳定**

**1. 避免内联对象和函数**
\`\`\`javascript
// ❌ 错误：每次渲染都创建新对象
function Parent() {
  return (
    <PureChild 
      style={{ color: 'red' }} // 新对象引用
      onClick={() => console.log('click')} // 新函数引用
    />
  );
}

// ✅ 正确：使用稳定引用
const STYLE = { color: 'red' };
function Parent() {
  const handleClick = useCallback(() => {
    console.log('click');
  }, []);

  return (
    <PureChild 
      style={STYLE}
      onClick={handleClick}
    />
  );
}
\`\`\`

**2. 合理使用 useMemo 和 useCallback**
\`\`\`javascript
function Parent({ items, filter }) {
  // ✅ 缓存计算结果
  const filteredItems = useMemo(() => {
    return items.filter(item => item.category === filter);
  }, [items, filter]);

  // ✅ 缓存事件处理函数
  const handleItemClick = useCallback((id) => {
    // 处理点击事件
  }, []);

  return (
    <PureItemList 
      items={filteredItems}
      onItemClick={handleItemClick}
    />
  );
}
\`\`\`

**3. 列表渲染优化**
\`\`\`javascript
// ✅ 稳定的 key 和 props
function ItemList({ items }) {
  return items.map(item => (
    <PureItem
      key={item.id} // 稳定的 key
      item={item}
      onUpdate={handleUpdate} // 稳定的回调
    />
  ));
}
\`\`\``},{question:"React.memo 和 useMemo 的区别是什么？什么时候使用哪个？",answer:`React.memo 和 useMemo 都是性能优化工具，但作用对象和使用场景完全不同。理解它们的区别对于正确的性能优化至关重要。

**核心区别：**

| 特性 | React.memo | useMemo |
|------|------------|---------|
| **作用对象** | 整个组件 | 计算值/对象 |
| **优化目标** | 避免组件重新渲染 | 避免重复计算 |
| **使用位置** | 组件定义时 | 组件内部 |
| **返回值** | 优化后的组件 | 缓存的值 |

**React.memo 使用场景：**
\`\`\`javascript
// 优化整个组件的重新渲染
const ExpensiveComponent = memo(({ data }) => {
  // 复杂的渲染逻辑
  return (
    <div>
      {data.map(item => (
        <ComplexItem key={item.id} item={item} />
      ))}
    </div>
  );
});
\`\`\`

**useMemo 使用场景：**
\`\`\`javascript
function Component({ items, filter }) {
  // 优化昂贵的计算
  const expensiveValue = useMemo(() => {
    return items
      .filter(item => item.category === filter)
      .sort((a, b) => a.priority - b.priority)
      .slice(0, 10);
  }, [items, filter]);

  // 优化对象引用稳定性
  const config = useMemo(() => ({
    theme: 'dark',
    layout: 'grid'
  }), []);

  return <ExpensiveComponent data={expensiveValue} config={config} />;
}
\`\`\`

**组合使用模式：**
\`\`\`javascript
// 父组件使用 useMemo 优化 props
function Parent({ rawData }) {
  const processedData = useMemo(() => {
    return rawData.map(item => ({
      ...item,
      displayName: \`\${item.firstName} \${item.lastName}\`
    }));
  }, [rawData]);

  return <MemoizedChild data={processedData} />;
}

// 子组件使用 memo 避免重新渲染
const MemoizedChild = memo(({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.displayName}</div>
      ))}
    </div>
  );
});
\`\`\``},{question:"如何在大型列表中正确使用纯组件优化？",answer:`大型列表是纯组件优化最能发挥作用的场景之一。正确的优化策略可以显著提升性能，但也需要注意一些关键点。

**基础优化模式：**
\`\`\`javascript
// 列表项组件优化
const ListItem = memo(({ item, onUpdate, onDelete }) => {
  console.log(\`ListItem \${item.id} 渲染\`);
  
  return (
    <div className="list-item">
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <button onClick={() => onUpdate(item.id)}>更新</button>
      <button onClick={() => onDelete(item.id)}>删除</button>
    </div>
  );
});

// 列表容器组件
function ItemList({ items }) {
  // ✅ 使用 useCallback 确保回调函数引用稳定
  const handleUpdate = useCallback((id) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, updated: true } : item
    ));
  }, []);

  const handleDelete = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  return (
    <div>
      {items.map(item => (
        <ListItem
          key={item.id} // ✅ 稳定的 key
          item={item}
          onUpdate={handleUpdate} // ✅ 稳定的回调
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
\`\`\`

**高级优化技巧：**

**1. 自定义比较函数**
\`\`\`javascript
const ListItem = memo(({ item, isSelected, onSelect }) => {
  return (
    <div 
      className={isSelected ? 'selected' : ''}
      onClick={() => onSelect(item.id)}
    >
      {item.title}
    </div>
  );
}, (prevProps, nextProps) => {
  // 只比较关键属性
  return (
    prevProps.item.id === nextProps.item.id &&
    prevProps.item.title === nextProps.item.title &&
    prevProps.isSelected === nextProps.isSelected
  );
});
\`\`\`

**2. 虚拟化结合纯组件**
\`\`\`javascript
import { FixedSizeList as List } from 'react-window';

const VirtualizedItem = memo(({ index, style, data }) => {
  const item = data[index];
  return (
    <div style={style}>
      <ListItem item={item} />
    </div>
  );
});

function VirtualizedList({ items }) {
  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={80}
      itemData={items}
    >
      {VirtualizedItem}
    </List>
  );
}
\`\`\``},{question:"纯组件的浅比较是如何实现的？有什么限制？",answer:`理解浅比较的实现原理对于正确使用纯组件至关重要。浅比较的限制也决定了我们需要采用特定的编程模式。

**浅比较实现原理：**

\`\`\`javascript
// React 内部浅比较的简化实现
function shallowEqual(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // 只比较第一层属性
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (!objB.hasOwnProperty(key) || 
        !Object.is(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}
\`\`\`

**浅比较的限制：**

**1. 嵌套对象变化检测不到**
\`\`\`javascript
const user1 = { name: 'John', profile: { age: 25 } };
const user2 = { name: 'John', profile: { age: 26 } };

// 浅比较结果：false（profile 引用不同）
// 但如果是：
user1.profile.age = 26; // 修改原对象
const user2 = user1;
// 浅比较结果：true（引用相同），但实际内容已变化
\`\`\`

**2. 数组内容变化**
\`\`\`javascript
const items1 = [{ id: 1, name: 'A' }];
const items2 = [{ id: 1, name: 'B' }]; // 内容不同但结构相同

// 浅比较：false（数组引用不同）
// 但无法检测到具体哪个元素变化
\`\`\`

**3. 函数和对象的引用比较**
\`\`\`javascript
// ❌ 每次都是新引用
function Parent() {
  return (
    <PureChild 
      onClick={() => {}} // 新函数引用
      style={{ color: 'red' }} // 新对象引用
    />
  );
}

// ✅ 稳定引用
const STYLE = { color: 'red' };
function Parent() {
  const handleClick = useCallback(() => {}, []);
  return <PureChild onClick={handleClick} style={STYLE} />;
}
\`\`\`

**应对策略：**

1. **使用不可变数据结构**
2. **合理使用 useMemo/useCallback**
3. **自定义比较函数处理复杂场景**
4. **保持 props 结构扁平化**`}],keyPoints:["**浅比较机制**：React.memo 和 PureComponent 都使用 Object.is() 进行第一层属性比较，不会递归比较嵌套对象","**引用稳定性**：避免在 render 中创建新对象、数组或函数，这会导致每次都产生新的引用，使优化失效","**性能权衡**：比较成本 vs 渲染成本，只有当渲染成本高于比较成本时，纯组件优化才有意义","**适用场景**：纯组件最适合展示型组件、列表项组件、以及 props 相对稳定的组件","**Hook 配合**：合理使用 useMemo、useCallback、useState 的函数式更新来保持引用稳定","**自定义比较**：通过 React.memo 的第二个参数可以实现深比较、选择性比较等高级优化策略","**调试技巧**：使用 React DevTools Profiler 和 console.log 来验证组件是否按预期跳过渲染","**常见陷阱**：内联样式对象、箭头函数、每次渲染创建的配置对象都会破坏优化效果","**列表优化**：在大型列表中，纯组件配合稳定的 key 和回调函数可以显著提升性能","**不可变数据**：配合 Immutable.js、Immer 等库可以更好地利用浅比较的优势","**组件拆分**：将频繁变化的部分和稳定的部分拆分成不同组件，提高优化效果","**批量更新**：React 18 的自动批处理特性与纯组件优化相结合，可以进一步提升性能"]},bestPractices:{dos:["对渲染成本较高的展示型组件使用纯组件优化","在列表渲染中使用纯组件优化列表项性能","使用 useMemo 和 useCallback 缓存传递给纯组件的对象和函数","保持 props 结构简单，避免深层嵌套对象","使用稳定的 key 值，特别是在列表渲染中","合理使用不可变数据结构提升比较效率"],donts:["不要在 render 方法中创建新对象或数组作为 props","不要在 render 方法中创建新函数作为 props","不要对 props 频繁变化的组件使用纯组件优化","不要忽略纯组件的比较开销，确保优化有实际价值","不要在纯组件中使用不稳定的内联样式对象"],patterns:["使用 React.memo 包装函数组件实现纯组件","使用 useMemo 缓存复杂计算结果和对象","使用 useCallback 缓存事件处理函数","使用自定义比较函数实现深比较或选择性比较","结合 Immutable.js 或 immer 实现不可变数据更新","列表优化模式 - 在列表渲染中使用纯组件优化列表项","缓存优化模式 - 使用 useMemo/useCallback 缓存 props","自定义比较模式 - 实现精确的 props 比较逻辑","性能监控模式 - 使用工具测量和验证优化效果","渐进优化模式 - 从性能瓶颈组件开始逐步优化","组件库优化模式 - 在可复用组件中合理使用纯组件","深比较模式 - 处理复杂嵌套对象的比较需求"]}};return e.jsx(N,{...t})};export{ee as default};
