import{r as l,j as e}from"./index-CKH9Ek1I.js";import{C as w}from"./ComponentTemplate-B8dTsNLj.js";function E(d,t){switch(t.type){case"SET_ITEMS":return{...d,items:t.payload};case"ADD_ITEM":return{...d,items:[...d.items,t.payload]};case"UPDATE_ITEM":return{...d,items:d.items.map(i=>i.id===t.payload.id?{...i,...t.payload.updates}:i)};case"DELETE_ITEM":return{...d,items:d.items.filter(i=>i.id!==t.payload),selectedItems:d.selectedItems.filter(i=>i!==t.payload)};case"SET_FILTERS":return{...d,filters:{...d.filters,...t.payload}};case"SET_SORT":return{...d,sort:t.payload};case"SET_PAGINATION":return{...d,pagination:{...d.pagination,...t.payload}};case"SET_LOADING":return{...d,loading:t.payload};case"TOGGLE_SELECTION":const a=d.selectedItems.includes(t.payload);return{...d,selectedItems:a?d.selectedItems.filter(i=>i!==t.payload):[...d.selectedItems,t.payload]};case"SELECT_ALL":return{...d,selectedItems:d.paginatedItems.map(i=>i.id)};case"CLEAR_SELECTION":return{...d,selectedItems:[]};default:return d}}function S(d=[]){const t={items:d,filteredItems:[],paginatedItems:[],filters:{search:"",category:"",status:"",priceRange:[0,1e3],tags:[]},sort:{field:"name",order:"asc"},pagination:{page:1,pageSize:10},loading:!1,selectedItems:[],totalCount:0},[a,i]=l.useReducer(E,t),u=l.useMemo(()=>{let r=a.items;if(a.filters.search){const g=a.filters.search.toLowerCase();r=r.filter(h=>h.name.toLowerCase().includes(g)||h.category.toLowerCase().includes(g))}return a.filters.category&&(r=r.filter(g=>g.category===a.filters.category)),a.filters.status&&(r=r.filter(g=>g.status===a.filters.status)),r=r.filter(g=>g.price>=a.filters.priceRange[0]&&g.price<=a.filters.priceRange[1]),a.filters.tags.length>0&&(r=r.filter(g=>a.filters.tags.some(h=>g.tags.includes(h)))),r},[a.items,a.filters]),x=l.useMemo(()=>{const r=[...u];return r.sort((g,h)=>{let f=g[a.sort.field],v=h[a.sort.field];return a.sort.field==="createdAt"&&(f=f.getTime(),v=v.getTime()),f<v?a.sort.order==="asc"?-1:1:f>v?a.sort.order==="asc"?1:-1:0}),r},[u,a.sort]),y=l.useMemo(()=>{const r=(a.pagination.page-1)*a.pagination.pageSize,g=r+a.pagination.pageSize;return x.slice(r,g)},[x,a.pagination]);l.useEffect(()=>{i({type:"SET_ITEMS",payload:a.items})},[]);const s=l.useCallback(r=>{const g={...r,id:Date.now().toString(),createdAt:new Date};i({type:"ADD_ITEM",payload:g})},[]),b=l.useCallback((r,g)=>{i({type:"UPDATE_ITEM",payload:{id:r,updates:g}})},[]),n=l.useCallback(r=>{i({type:"DELETE_ITEM",payload:r})},[]),c=l.useCallback(r=>{i({type:"SET_FILTERS",payload:r}),i({type:"SET_PAGINATION",payload:{page:1}})},[]),M=l.useCallback(r=>{i({type:"SET_SORT",payload:r})},[]),I=l.useCallback(r=>{i({type:"SET_PAGINATION",payload:r})},[]),N=l.useCallback(r=>{i({type:"TOGGLE_SELECTION",payload:r})},[]),o=l.useCallback(()=>{i({type:"SELECT_ALL"})},[]),p=l.useCallback(()=>{i({type:"CLEAR_SELECTION"})},[]),m=l.useCallback(()=>{a.selectedItems.forEach(r=>{i({type:"DELETE_ITEM",payload:r})}),i({type:"CLEAR_SELECTION"})},[a.selectedItems]);return{...a,filteredItems:u,paginatedItems:y,totalCount:x.length,addItem:s,updateItem:b,deleteItem:n,setFilters:c,setSort:M,setPagination:I,toggleSelection:N,selectAll:o,clearSelection:p,batchDelete:m}}const D=()=>{const[d,t]=l.useState(!0),[a,i]=l.useState(!1),u=l.useRef(new Map),x=l.useCallback(()=>{const o=["手机","笔记本","平板","耳机","手表","相机"],p=["active","inactive","pending"],m=["苹果","安卓","高端","中端","入门","5G","4G","WiFi","蓝牙"];return Array.from({length:1e3},(r,g)=>({id:(g+1).toString(),name:`产品 ${g+1}`,category:o[Math.floor(Math.random()*o.length)],price:Math.floor(Math.random()*2e3)+100,status:p[Math.floor(Math.random()*p.length)],createdAt:new Date(Date.now()-Math.random()*365*24*60*60*1e3),tags:Array.from({length:Math.floor(Math.random()*3)+1},()=>m[Math.floor(Math.random()*m.length)]).filter((h,f,v)=>v.indexOf(h)===f)}))},[]),[y]=l.useState(()=>x()),s=S(y),b=l.useCallback((o,p)=>{if(!d)return p();if(u.current.has(o))return u.current.get(o);const m=p();return u.current.set(o,m),m},[d]),n=l.useCallback(()=>{u.current.clear()},[]),c=l.useMemo(()=>{const o=`stats-${JSON.stringify(s.filters)}-${s.items.length}`;return b(o,()=>{const p=s.filteredItems;return{totalItems:p.length,averagePrice:p.length>0?p.reduce((m,r)=>m+r.price,0)/p.length:0,categoryDistribution:p.reduce((m,r)=>(m[r.category]=(m[r.category]||0)+1,m),{}),statusDistribution:p.reduce((m,r)=>(m[r.status]=(m[r.status]||0)+1,m),{})}})},[s.filteredItems,s.filters,s.items.length,b]),[M,I]=l.useState(0),N=l.useRef(0);return l.useEffect(()=>{N.current=performance.now()}),l.useEffect(()=>{const o=performance.now();I(o-N.current)}),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"高级数据管理（大数据集）"}),e.jsxs("div",{className:"mb-6 p-4 bg-purple-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-purple-800 mb-3",children:"性能优化选项"}),e.jsxs("div",{className:"flex items-center space-x-6",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:d,onChange:o=>t(o.target.checked),className:"mr-2"}),"启用缓存"]}),e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:a,onChange:o=>i(o.target.checked),className:"mr-2"}),"启用虚拟滚动"]}),e.jsx("button",{onClick:n,className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"清除缓存"})]})]}),e.jsxs("div",{className:"mb-6 p-4 bg-orange-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-orange-800 mb-3",children:"性能指标"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-orange-700",children:"渲染时间:"}),e.jsxs("span",{className:"ml-2 font-mono",children:[M.toFixed(2),"ms"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-orange-700",children:"缓存大小:"}),e.jsx("span",{className:"ml-2 font-mono",children:u.current.size})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-orange-700",children:"数据量:"}),e.jsx("span",{className:"ml-2 font-mono",children:s.items.length})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-orange-700",children:"过滤后:"}),e.jsx("span",{className:"ml-2 font-mono",children:s.totalCount})]})]})]}),e.jsxs("div",{className:"mb-6 p-4 bg-blue-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-3",children:"快速过滤"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:()=>s.setFilters({status:"active"}),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm",children:"仅活跃"}),e.jsx("button",{onClick:()=>s.setFilters({priceRange:[500,1500]}),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"中等价位"}),e.jsx("button",{onClick:()=>s.setFilters({category:"手机"}),className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm",children:"仅手机"}),e.jsx("button",{onClick:()=>s.setFilters({search:"",category:"",status:"",priceRange:[0,1e3],tags:[]}),className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"清除过滤"})]})]}),e.jsxs("div",{className:"mb-6 p-4 bg-green-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-3",children:"数据统计"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-green-700 mb-2",children:"基本信息"}),e.jsxs("div",{className:"text-sm text-green-600 space-y-1",children:[e.jsxs("p",{children:["总项目数: ",c.totalItems]}),e.jsxs("p",{children:["平均价格: $",c.averagePrice.toFixed(2)]})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-green-700 mb-2",children:"分类分布"}),e.jsx("div",{className:"text-sm text-green-600 space-y-1",children:Object.entries(c.categoryDistribution).map(([o,p])=>e.jsxs("p",{children:[o,": ",p]},o))})]})]})]}),e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs("div",{className:"mb-2 text-sm text-gray-600",children:[a?"虚拟滚动模式":"普通模式"," - 显示前"," ",Math.min(50,s.totalCount)," 项"]}),e.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("th",{className:"border border-gray-300 p-2",children:"名称"}),e.jsx("th",{className:"border border-gray-300 p-2",children:"分类"}),e.jsx("th",{className:"border border-gray-300 p-2",children:"价格"}),e.jsx("th",{className:"border border-gray-300 p-2",children:"状态"})]})}),e.jsx("tbody",{children:(a?s.filteredItems.slice(0,50):s.paginatedItems).map(o=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 p-2",children:o.name}),e.jsx("td",{className:"border border-gray-300 p-2",children:o.category}),e.jsxs("td",{className:"border border-gray-300 p-2",children:["$",o.price]}),e.jsx("td",{className:"border border-gray-300 p-2",children:e.jsx("span",{className:`px-2 py-1 rounded text-xs ${o.status==="active"?"bg-green-100 text-green-800":o.status==="inactive"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:o.status==="active"?"活跃":o.status==="inactive"?"非活跃":"待定"})})]},o.id))})]})]}),!a&&e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["显示"," ",(s.pagination.page-1)*s.pagination.pageSize+1," ","-"," ",Math.min(s.pagination.page*s.pagination.pageSize,s.totalCount)," ","条，共 ",s.totalCount," 条"]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("select",{value:s.pagination.pageSize,onChange:o=>s.setPagination({pageSize:Number(o.target.value),page:1}),className:"px-2 py-1 border rounded text-sm",children:[e.jsx("option",{value:10,children:"10/页"}),e.jsx("option",{value:25,children:"25/页"}),e.jsx("option",{value:50,children:"50/页"}),e.jsx("option",{value:100,children:"100/页"})]}),e.jsx("button",{onClick:()=>s.setPagination({page:Math.max(1,s.pagination.page-1)}),disabled:s.pagination.page===1,className:`px-3 py-1 rounded text-sm ${s.pagination.page===1?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"上一页"}),e.jsxs("span",{className:"text-sm text-gray-600",children:[s.pagination.page," /"," ",Math.ceil(s.totalCount/s.pagination.pageSize)]}),e.jsx("button",{onClick:()=>s.setPagination({page:s.pagination.page+1}),disabled:s.pagination.page>=Math.ceil(s.totalCount/s.pagination.pageSize),className:`px-3 py-1 rounded text-sm ${s.pagination.page>=Math.ceil(s.totalCount/s.pagination.pageSize)?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"下一页"})]})]})]})})},T=`import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useDataManagement } from "./useDataManagement";

const AdvancedDataManagementDemo: React.FC = () => {
  const [cacheEnabled, setCacheEnabled] = useState(true);
  const [virtualEnabled, setVirtualEnabled] = useState(false);
  const cacheRef = useRef<Map<string, any>>(new Map());

  // 生成大量测试数据
  const generateLargeDataset = useCallback(() => {
    const categories = ["手机", "笔记本", "平板", "耳机", "手表", "相机"];
    const statuses: ("active" | "inactive" | "pending")[] = [
      "active",
      "inactive",
      "pending",
    ];
    const tags = [
      "苹果",
      "安卓",
      "高端",
      "中端",
      "入门",
      "5G",
      "4G",
      "WiFi",
      "蓝牙",
    ];

    return Array.from({ length: 1000 }, (_, index) => ({
      id: (index + 1).toString(),
      name: \`产品 \${index + 1}\`,
      category: categories[Math.floor(Math.random() * categories.length)],
      price: Math.floor(Math.random() * 2000) + 100,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      createdAt: new Date(
        Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
      ),
      tags: Array.from(
        { length: Math.floor(Math.random() * 3) + 1 },
        () => tags[Math.floor(Math.random() * tags.length)]
      ).filter((tag, index, arr) => arr.indexOf(tag) === index),
    }));
  }, []);

  const [largeDataset] = useState(() => generateLargeDataset());
  const dataManager = useDataManagement(largeDataset);

  // 缓存计算结果
  const getCachedResult = useCallback(
    (key: string, computeFn: () => any) => {
      if (!cacheEnabled) {
        return computeFn();
      }

      if (cacheRef.current.has(key)) {
        return cacheRef.current.get(key);
      }

      const result = computeFn();
      cacheRef.current.set(key, result);
      return result;
    },
    [cacheEnabled]
  );

  // 清除缓存
  const clearCache = useCallback(() => {
    cacheRef.current.clear();
  }, []);

  // 统计数据（带缓存）
  const statistics = useMemo(() => {
    const cacheKey = \`stats-\${JSON.stringify(dataManager.filters)}-\${
      dataManager.items.length
    }\`;

    return getCachedResult(cacheKey, () => {
      const items = dataManager.filteredItems;
      return {
        totalItems: items.length,
        averagePrice:
          items.length > 0
            ? items.reduce((sum, item) => sum + item.price, 0) / items.length
            : 0,
        categoryDistribution: items.reduce((acc, item) => {
          acc[item.category] = (acc[item.category] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
        statusDistribution: items.reduce((acc, item) => {
          acc[item.status] = (acc[item.status] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
      };
    });
  }, [
    dataManager.filteredItems,
    dataManager.filters,
    dataManager.items.length,
    getCachedResult,
  ]);

  // 性能监控
  const [renderTime, setRenderTime] = useState(0);
  const renderStartTime = useRef(0);

  useEffect(() => {
    renderStartTime.current = performance.now();
  });

  useEffect(() => {
    const endTime = performance.now();
    setRenderTime(endTime - renderStartTime.current);
  });

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">高级数据管理（大数据集）</h3>

        {/* 性能控制 */}
        <div className="mb-6 p-4 bg-purple-50 rounded-lg">
          <h4 className="font-medium text-purple-800 mb-3">性能优化选项</h4>
          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={cacheEnabled}
                onChange={(e) => setCacheEnabled(e.target.checked)}
                className="mr-2"
              />
              启用缓存
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={virtualEnabled}
                onChange={(e) => setVirtualEnabled(e.target.checked)}
                className="mr-2"
              />
              启用虚拟滚动
            </label>
            <button
              onClick={clearCache}
              className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
            >
              清除缓存
            </button>
          </div>
        </div>

        {/* 性能指标 */}
        <div className="mb-6 p-4 bg-orange-50 rounded-lg">
          <h4 className="font-medium text-orange-800 mb-3">性能指标</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-orange-700">渲染时间:</span>
              <span className="ml-2 font-mono">{renderTime.toFixed(2)}ms</span>
            </div>
            <div>
              <span className="text-orange-700">缓存大小:</span>
              <span className="ml-2 font-mono">{cacheRef.current.size}</span>
            </div>
            <div>
              <span className="text-orange-700">数据量:</span>
              <span className="ml-2 font-mono">{dataManager.items.length}</span>
            </div>
            <div>
              <span className="text-orange-700">过滤后:</span>
              <span className="ml-2 font-mono">{dataManager.totalCount}</span>
            </div>
          </div>
        </div>

        {/* 快速过滤器 */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-800 mb-3">快速过滤</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => dataManager.setFilters({ status: "active" })}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              仅活跃
            </button>
            <button
              onClick={() =>
                dataManager.setFilters({ priceRange: [500, 1500] })
              }
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              中等价位
            </button>
            <button
              onClick={() => dataManager.setFilters({ category: "手机" })}
              className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
            >
              仅手机
            </button>
            <button
              onClick={() =>
                dataManager.setFilters({
                  search: "",
                  category: "",
                  status: "",
                  priceRange: [0, 1000],
                  tags: [],
                })
              }
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
            >
              清除过滤
            </button>
          </div>
        </div>

        {/* 统计信息 */}
        <div className="mb-6 p-4 bg-green-50 rounded-lg">
          <h4 className="font-medium text-green-800 mb-3">数据统计</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-green-700 mb-2">基本信息</h5>
              <div className="text-sm text-green-600 space-y-1">
                <p>总项目数: {statistics.totalItems}</p>
                <p>平均价格: \${statistics.averagePrice.toFixed(2)}</p>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-green-700 mb-2">分类分布</h5>
              <div className="text-sm text-green-600 space-y-1">
                {Object.entries(statistics.categoryDistribution).map(
                  ([category, count]) => (
                    <p key={category}>
                      {category}: {count}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 简化的数据表格（虚拟化支持） */}
        <div className="overflow-x-auto">
          <div className="mb-2 text-sm text-gray-600">
            {virtualEnabled ? "虚拟滚动模式" : "普通模式"} - 显示前{" "}
            {Math.min(50, dataManager.totalCount)} 项
          </div>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 p-2">名称</th>
                <th className="border border-gray-300 p-2">分类</th>
                <th className="border border-gray-300 p-2">价格</th>
                <th className="border border-gray-300 p-2">状态</th>
              </tr>
            </thead>
            <tbody>
              {(virtualEnabled
                ? dataManager.filteredItems.slice(0, 50)
                : dataManager.paginatedItems
              ).map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2">{item.name}</td>
                  <td className="border border-gray-300 p-2">
                    {item.category}
                  </td>
                  <td className="border border-gray-300 p-2">\${item.price}</td>
                  <td className="border border-gray-300 p-2">
                    <span
                      className={\`px-2 py-1 rounded text-xs \${
                        item.status === "active"
                          ? "bg-green-100 text-green-800"
                          : item.status === "inactive"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }\`}
                    >
                      {item.status === "active"
                        ? "活跃"
                        : item.status === "inactive"
                        ? "非活跃"
                        : "待定"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {!virtualEnabled && (
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              显示{" "}
              {(dataManager.pagination.page - 1) *
                dataManager.pagination.pageSize +
                1}{" "}
              -{" "}
              {Math.min(
                dataManager.pagination.page * dataManager.pagination.pageSize,
                dataManager.totalCount
              )}{" "}
              条，共 {dataManager.totalCount} 条
            </div>
            <div className="flex items-center space-x-2">
              <select
                value={dataManager.pagination.pageSize}
                onChange={(e) =>
                  dataManager.setPagination({
                    pageSize: Number(e.target.value),
                    page: 1,
                  })
                }
                className="px-2 py-1 border rounded text-sm"
              >
                <option value={10}>10/页</option>
                <option value={25}>25/页</option>
                <option value={50}>50/页</option>
                <option value={100}>100/页</option>
              </select>
              <button
                onClick={() =>
                  dataManager.setPagination({
                    page: Math.max(1, dataManager.pagination.page - 1),
                  })
                }
                disabled={dataManager.pagination.page === 1}
                className={\`px-3 py-1 rounded text-sm \${
                  dataManager.pagination.page === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }\`}
              >
                上一页
              </button>
              <span className="text-sm text-gray-600">
                {dataManager.pagination.page} /{" "}
                {Math.ceil(
                  dataManager.totalCount / dataManager.pagination.pageSize
                )}
              </span>
              <button
                onClick={() =>
                  dataManager.setPagination({
                    page: dataManager.pagination.page + 1,
                  })
                }
                disabled={
                  dataManager.pagination.page >=
                  Math.ceil(
                    dataManager.totalCount / dataManager.pagination.pageSize
                  )
                }
                className={\`px-3 py-1 rounded text-sm \${
                  dataManager.pagination.page >=
                  Math.ceil(
                    dataManager.totalCount / dataManager.pagination.pageSize
                  )
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }\`}
              >
                下一页
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedDataManagementDemo;
`,k=()=>{const t=S([{id:"1",name:"iPhone 15 Pro",category:"手机",price:999,status:"active",createdAt:new Date("2024-01-15"),tags:["苹果","5G","高端"]},{id:"2",name:"MacBook Air M3",category:"笔记本",price:1299,status:"active",createdAt:new Date("2024-01-20"),tags:["苹果","M3","轻薄"]},{id:"3",name:"AirPods Pro",category:"耳机",price:249,status:"pending",createdAt:new Date("2024-01-10"),tags:["苹果","降噪","无线"]},{id:"4",name:"iPad Pro",category:"平板",price:799,status:"inactive",createdAt:new Date("2024-01-05"),tags:["苹果","M4","创作"]},{id:"5",name:"Apple Watch",category:"手表",price:399,status:"active",createdAt:new Date("2024-01-25"),tags:["苹果","健康","智能"]}]),[a,i]=l.useState({name:"",category:"",price:0,status:"active",tags:""}),u=l.useMemo(()=>{const n=new Set(t.items.map(c=>c.category));return Array.from(n)},[t.items]);l.useMemo(()=>{const n=new Set(t.items.flatMap(c=>c.tags));return Array.from(n)},[t.items]);const x=()=>{a.name&&a.category&&(t.addItem({name:a.name,category:a.category,price:a.price,status:a.status,tags:a.tags.split(",").map(n=>n.trim()).filter(Boolean)}),i({name:"",category:"",price:0,status:"active",tags:""}))},y=n=>{const c=t.sort.field===n&&t.sort.order==="asc"?"desc":"asc";t.setSort({field:n,order:c})},s=n=>t.sort.field!==n?"↕️":t.sort.order==="asc"?"↑":"↓",b=Math.ceil(t.totalCount/t.pagination.pageSize);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础数据管理"}),e.jsxs("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:"添加新项目"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-3",children:[e.jsx("input",{type:"text",placeholder:"名称",value:a.name,onChange:n=>i(c=>({...c,name:n.target.value})),className:"px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx("input",{type:"text",placeholder:"分类",value:a.category,onChange:n=>i(c=>({...c,category:n.target.value})),className:"px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx("input",{type:"number",placeholder:"价格",value:a.price,onChange:n=>i(c=>({...c,price:Number(n.target.value)})),className:"px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("select",{value:a.status,onChange:n=>i(c=>({...c,status:n.target.value})),className:"px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"active",children:"活跃"}),e.jsx("option",{value:"inactive",children:"非活跃"}),e.jsx("option",{value:"pending",children:"待定"})]}),e.jsx("input",{type:"text",placeholder:"标签(逗号分隔)",value:a.tags,onChange:n=>i(c=>({...c,tags:n.target.value})),className:"px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsx("button",{onClick:x,className:"mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600",children:"添加项目"})]}),e.jsxs("div",{className:"mb-6 p-4 bg-blue-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-3",children:"过滤器"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-3",children:[e.jsx("input",{type:"text",placeholder:"搜索名称或分类",value:t.filters.search,onChange:n=>t.setFilters({search:n.target.value}),className:"px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("select",{value:t.filters.category,onChange:n=>t.setFilters({category:n.target.value}),className:"px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"",children:"所有分类"}),u.map(n=>e.jsx("option",{value:n,children:n},n))]}),e.jsxs("select",{value:t.filters.status,onChange:n=>t.setFilters({status:n.target.value}),className:"px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"",children:"所有状态"}),e.jsx("option",{value:"active",children:"活跃"}),e.jsx("option",{value:"inactive",children:"非活跃"}),e.jsx("option",{value:"pending",children:"待定"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"价格:"}),e.jsx("input",{type:"range",min:"0",max:"2000",value:t.filters.priceRange[1],onChange:n=>t.setFilters({priceRange:[0,Number(n.target.value)]}),className:"flex-1"}),e.jsxs("span",{className:"text-sm text-gray-600",children:["$",t.filters.priceRange[1]]})]})]})]}),t.selectedItems.length>0&&e.jsx("div",{className:"mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-yellow-800",children:["已选择 ",t.selectedItems.length," 个项目"]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:t.clearSelection,className:"px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm",children:"取消选择"}),e.jsx("button",{onClick:t.batchDelete,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm",children:"批量删除"})]})]})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("th",{className:"border border-gray-300 p-2",children:e.jsx("input",{type:"checkbox",checked:t.selectedItems.length===t.paginatedItems.length&&t.paginatedItems.length>0,onChange:()=>{t.selectedItems.length===t.paginatedItems.length?t.clearSelection():t.selectAll()}})}),e.jsxs("th",{className:"border border-gray-300 p-2 cursor-pointer hover:bg-gray-100",onClick:()=>y("name"),children:["名称 ",s("name")]}),e.jsx("th",{className:"border border-gray-300 p-2",children:"分类"}),e.jsxs("th",{className:"border border-gray-300 p-2 cursor-pointer hover:bg-gray-100",onClick:()=>y("price"),children:["价格 ",s("price")]}),e.jsx("th",{className:"border border-gray-300 p-2",children:"状态"}),e.jsxs("th",{className:"border border-gray-300 p-2 cursor-pointer hover:bg-gray-100",onClick:()=>y("createdAt"),children:["创建时间 ",s("createdAt")]}),e.jsx("th",{className:"border border-gray-300 p-2",children:"标签"}),e.jsx("th",{className:"border border-gray-300 p-2",children:"操作"})]})}),e.jsx("tbody",{children:t.paginatedItems.map(n=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 p-2 text-center",children:e.jsx("input",{type:"checkbox",checked:t.selectedItems.includes(n.id),onChange:()=>t.toggleSelection(n.id)})}),e.jsx("td",{className:"border border-gray-300 p-2",children:n.name}),e.jsx("td",{className:"border border-gray-300 p-2",children:n.category}),e.jsxs("td",{className:"border border-gray-300 p-2",children:["$",n.price]}),e.jsx("td",{className:"border border-gray-300 p-2",children:e.jsx("span",{className:`px-2 py-1 rounded text-xs ${n.status==="active"?"bg-green-100 text-green-800":n.status==="inactive"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:n.status==="active"?"活跃":n.status==="inactive"?"非活跃":"待定"})}),e.jsx("td",{className:"border border-gray-300 p-2",children:n.createdAt.toLocaleDateString()}),e.jsx("td",{className:"border border-gray-300 p-2",children:e.jsx("div",{className:"flex flex-wrap gap-1",children:n.tags.map(c=>e.jsx("span",{className:"px-1 py-0.5 bg-blue-100 text-blue-800 rounded text-xs",children:c},c))})}),e.jsx("td",{className:"border border-gray-300 p-2",children:e.jsx("button",{onClick:()=>t.deleteItem(n.id),className:"px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs",children:"删除"})})]},n.id))})]})}),e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["显示"," ",(t.pagination.page-1)*t.pagination.pageSize+1," ","-"," ",Math.min(t.pagination.page*t.pagination.pageSize,t.totalCount)," ","条，共 ",t.totalCount," 条"]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:()=>t.setPagination({page:t.pagination.page-1}),disabled:t.pagination.page===1,className:`px-3 py-1 rounded ${t.pagination.page===1?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"上一页"}),e.jsxs("span",{className:"text-sm text-gray-600",children:["第 ",t.pagination.page," 页，共 ",b," 页"]}),e.jsx("button",{onClick:()=>t.setPagination({page:t.pagination.page+1}),disabled:t.pagination.page===b,className:`px-3 py-1 rounded ${t.pagination.page===b?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"下一页"})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-green-50 border border-green-200 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"数据统计："}),e.jsxs("div",{className:"text-sm text-green-700 space-y-1",children:[e.jsxs("p",{children:["总项目数: ",t.items.length]}),e.jsxs("p",{children:["过滤后项目数: ",t.totalCount]}),e.jsxs("p",{children:["已选择项目数: ",t.selectedItems.length]}),e.jsxs("p",{children:["当前页项目数: ",t.paginatedItems.length]})]})]})]})})},A=`import { DataItem, SortField } from "./types";
import React, { useMemo, useState } from "react";

import { useDataManagement } from "./useDataManagement";

const BasicDataManagementDemo: React.FC = () => {
  // 模拟数据
  const initialData: DataItem[] = [
    {
      id: "1",
      name: "iPhone 15 Pro",
      category: "手机",
      price: 999,
      status: "active",
      createdAt: new Date("2024-01-15"),
      tags: ["苹果", "5G", "高端"],
    },
    {
      id: "2",
      name: "MacBook Air M3",
      category: "笔记本",
      price: 1299,
      status: "active",
      createdAt: new Date("2024-01-20"),
      tags: ["苹果", "M3", "轻薄"],
    },
    {
      id: "3",
      name: "AirPods Pro",
      category: "耳机",
      price: 249,
      status: "pending",
      createdAt: new Date("2024-01-10"),
      tags: ["苹果", "降噪", "无线"],
    },
    {
      id: "4",
      name: "iPad Pro",
      category: "平板",
      price: 799,
      status: "inactive",
      createdAt: new Date("2024-01-05"),
      tags: ["苹果", "M4", "创作"],
    },
    {
      id: "5",
      name: "Apple Watch",
      category: "手表",
      price: 399,
      status: "active",
      createdAt: new Date("2024-01-25"),
      tags: ["苹果", "健康", "智能"],
    },
  ];

  const dataManager = useDataManagement(initialData);
  const [newItemForm, setNewItemForm] = useState({
    name: "",
    category: "",
    price: 0,
    status: "active" as const,
    tags: "",
  });

  const categories = useMemo(() => {
    const cats = new Set(dataManager.items.map((item) => item.category));
    return Array.from(cats);
  }, [dataManager.items]);

  const allTags = useMemo(() => {
    const tags = new Set(dataManager.items.flatMap((item) => item.tags));
    return Array.from(tags);
  }, [dataManager.items]);

  const handleAddItem = () => {
    if (newItemForm.name && newItemForm.category) {
      dataManager.addItem({
        name: newItemForm.name,
        category: newItemForm.category,
        price: newItemForm.price,
        status: newItemForm.status,
        tags: newItemForm.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      });
      setNewItemForm({
        name: "",
        category: "",
        price: 0,
        status: "active",
        tags: "",
      });
    }
  };

  const handleSort = (field: SortField) => {
    const newOrder =
      dataManager.sort.field === field && dataManager.sort.order === "asc"
        ? "desc"
        : "asc";
    dataManager.setSort({ field, order: newOrder });
  };

  const getSortIcon = (field: SortField) => {
    if (dataManager.sort.field !== field) return "↕️";
    return dataManager.sort.order === "asc" ? "↑" : "↓";
  };

  const totalPages = Math.ceil(
    dataManager.totalCount / dataManager.pagination.pageSize
  );

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">基础数据管理</h3>

        {/* 添加新项目 */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-3">添加新项目</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <input
              type="text"
              placeholder="名称"
              value={newItemForm.name}
              onChange={(e) =>
                setNewItemForm((prev) => ({ ...prev, name: e.target.value }))
              }
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="分类"
              value={newItemForm.category}
              onChange={(e) =>
                setNewItemForm((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="价格"
              value={newItemForm.price}
              onChange={(e) =>
                setNewItemForm((prev) => ({
                  ...prev,
                  price: Number(e.target.value),
                }))
              }
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={newItemForm.status}
              onChange={(e) =>
                setNewItemForm((prev) => ({
                  ...prev,
                  status: e.target.value as any,
                }))
              }
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="active">活跃</option>
              <option value="inactive">非活跃</option>
              <option value="pending">待定</option>
            </select>
            <input
              type="text"
              placeholder="标签(逗号分隔)"
              value={newItemForm.tags}
              onChange={(e) =>
                setNewItemForm((prev) => ({ ...prev, tags: e.target.value }))
              }
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleAddItem}
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            添加项目
          </button>
        </div>

        {/* 过滤器 */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-800 mb-3">过滤器</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              type="text"
              placeholder="搜索名称或分类"
              value={dataManager.filters.search}
              onChange={(e) =>
                dataManager.setFilters({ search: e.target.value })
              }
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={dataManager.filters.category}
              onChange={(e) =>
                dataManager.setFilters({ category: e.target.value })
              }
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">所有分类</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              value={dataManager.filters.status}
              onChange={(e) =>
                dataManager.setFilters({ status: e.target.value })
              }
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">所有状态</option>
              <option value="active">活跃</option>
              <option value="inactive">非活跃</option>
              <option value="pending">待定</option>
            </select>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">价格:</span>
              <input
                type="range"
                min="0"
                max="2000"
                value={dataManager.filters.priceRange[1]}
                onChange={(e) =>
                  dataManager.setFilters({
                    priceRange: [0, Number(e.target.value)],
                  })
                }
                className="flex-1"
              />
              <span className="text-sm text-gray-600">
                \${dataManager.filters.priceRange[1]}
              </span>
            </div>
          </div>
        </div>

        {/* 批量操作 */}
        {dataManager.selectedItems.length > 0 && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-yellow-800">
                已选择 {dataManager.selectedItems.length} 个项目
              </span>
              <div className="space-x-2">
                <button
                  onClick={dataManager.clearSelection}
                  className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
                >
                  取消选择
                </button>
                <button
                  onClick={dataManager.batchDelete}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                >
                  批量删除
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 数据表格 */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 p-2">
                  <input
                    type="checkbox"
                    checked={
                      dataManager.selectedItems.length ===
                        dataManager.paginatedItems.length &&
                      dataManager.paginatedItems.length > 0
                    }
                    onChange={() => {
                      if (
                        dataManager.selectedItems.length ===
                        dataManager.paginatedItems.length
                      ) {
                        dataManager.clearSelection();
                      } else {
                        dataManager.selectAll();
                      }
                    }}
                  />
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort("name")}
                >
                  名称 {getSortIcon("name")}
                </th>
                <th className="border border-gray-300 p-2">分类</th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort("price")}
                >
                  价格 {getSortIcon("price")}
                </th>
                <th className="border border-gray-300 p-2">状态</th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort("createdAt")}
                >
                  创建时间 {getSortIcon("createdAt")}
                </th>
                <th className="border border-gray-300 p-2">标签</th>
                <th className="border border-gray-300 p-2">操作</th>
              </tr>
            </thead>
            <tbody>
              {dataManager.paginatedItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2 text-center">
                    <input
                      type="checkbox"
                      checked={dataManager.selectedItems.includes(item.id)}
                      onChange={() => dataManager.toggleSelection(item.id)}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">{item.name}</td>
                  <td className="border border-gray-300 p-2">
                    {item.category}
                  </td>
                  <td className="border border-gray-300 p-2">\${item.price}</td>
                  <td className="border border-gray-300 p-2">
                    <span
                      className={\`px-2 py-1 rounded text-xs \${
                        item.status === "active"
                          ? "bg-green-100 text-green-800"
                          : item.status === "inactive"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }\`}
                    >
                      {item.status === "active"
                        ? "活跃"
                        : item.status === "inactive"
                        ? "非活跃"
                        : "待定"}
                    </span>
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.createdAt.toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1 py-0.5 bg-blue-100 text-blue-800 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => dataManager.deleteItem(item.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                    >
                      删除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 分页 */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            显示{" "}
            {(dataManager.pagination.page - 1) *
              dataManager.pagination.pageSize +
              1}{" "}
            -{" "}
            {Math.min(
              dataManager.pagination.page * dataManager.pagination.pageSize,
              dataManager.totalCount
            )}{" "}
            条，共 {dataManager.totalCount} 条
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() =>
                dataManager.setPagination({
                  page: dataManager.pagination.page - 1,
                })
              }
              disabled={dataManager.pagination.page === 1}
              className={\`px-3 py-1 rounded \${
                dataManager.pagination.page === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }\`}
            >
              上一页
            </button>
            <span className="text-sm text-gray-600">
              第 {dataManager.pagination.page} 页，共 {totalPages} 页
            </span>
            <button
              onClick={() =>
                dataManager.setPagination({
                  page: dataManager.pagination.page + 1,
                })
              }
              disabled={dataManager.pagination.page === totalPages}
              className={\`px-3 py-1 rounded \${
                dataManager.pagination.page === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }\`}
            >
              下一页
            </button>
          </div>
        </div>

        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
          <h4 className="font-medium text-green-800 mb-2">数据统计：</h4>
          <div className="text-sm text-green-700 space-y-1">
            <p>总项目数: {dataManager.items.length}</p>
            <p>过滤后项目数: {dataManager.totalCount}</p>
            <p>已选择项目数: {dataManager.selectedItems.length}</p>
            <p>当前页项目数: {dataManager.paginatedItems.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDataManagementDemo;
`,j=`// 数据项类型\r
export interface DataItem {\r
  id: string;\r
  name: string;\r
  category: string;\r
  price: number;\r
  status: "active" | "inactive" | "pending";\r
  createdAt: Date;\r
  tags: string[];\r
}\r
\r
// 过滤条件类型\r
export interface FilterOptions {\r
  search: string;\r
  category: string;\r
  status: string;\r
  priceRange: [number, number];\r
  tags: string[];\r
}\r
\r
// 排序选项类型\r
export type SortField = "name" | "price" | "createdAt";\r
export type SortOrder = "asc" | "desc";\r
\r
export interface SortOptions {\r
  field: SortField;\r
  order: SortOrder;\r
}\r
\r
// 分页选项类型\r
export interface PaginationOptions {\r
  page: number;\r
  pageSize: number;\r
}\r
\r
// 数据管理状态类型\r
export interface DataState {\r
  items: DataItem[];\r
  filteredItems: DataItem[];\r
  paginatedItems: DataItem[];\r
  filters: FilterOptions;\r
  sort: SortOptions;\r
  pagination: PaginationOptions;\r
  loading: boolean;\r
  selectedItems: string[];\r
  totalCount: number;\r
}\r
\r
// 数据管理动作类型\r
export type DataAction =\r
  | { type: "SET_ITEMS"; payload: DataItem[] }\r
  | { type: "ADD_ITEM"; payload: DataItem }\r
  | { type: "UPDATE_ITEM"; payload: { id: string; updates: Partial<DataItem> } }\r
  | { type: "DELETE_ITEM"; payload: string }\r
  | { type: "SET_FILTERS"; payload: Partial<FilterOptions> }\r
  | { type: "SET_SORT"; payload: SortOptions }\r
  | { type: "SET_PAGINATION"; payload: Partial<PaginationOptions> }\r
  | { type: "SET_LOADING"; payload: boolean }\r
  | { type: "TOGGLE_SELECTION"; payload: string }\r
  | { type: "SELECT_ALL" }\r
  | { type: "CLEAR_SELECTION" };\r
`,C=`import {
  DataItem,
  DataState,
  FilterOptions,
  PaginationOptions,
  SortOptions,
} from "./types";
import { useCallback, useEffect, useMemo, useReducer } from "react";

import { dataReducer } from "./dataReducer";

export function useDataManagement(initialItems: DataItem[] = []) {
  const initialState: DataState = {
    items: initialItems,
    filteredItems: [],
    paginatedItems: [],
    filters: {
      search: "",
      category: "",
      status: "",
      priceRange: [0, 1000],
      tags: [],
    },
    sort: { field: "name", order: "asc" },
    pagination: { page: 1, pageSize: 10 },
    loading: false,
    selectedItems: [],
    totalCount: 0,
  };

  const [state, dispatch] = useReducer(dataReducer, initialState);

  // 过滤数据
  const filteredItems = useMemo(() => {
    let filtered = state.items;

    // 搜索过滤
    if (state.filters.search) {
      const searchLower = state.filters.search.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchLower) ||
          item.category.toLowerCase().includes(searchLower)
      );
    }

    // 分类过滤
    if (state.filters.category) {
      filtered = filtered.filter(
        (item) => item.category === state.filters.category
      );
    }

    // 状态过滤
    if (state.filters.status) {
      filtered = filtered.filter(
        (item) => item.status === state.filters.status
      );
    }

    // 价格范围过滤
    filtered = filtered.filter(
      (item) =>
        item.price >= state.filters.priceRange[0] &&
        item.price <= state.filters.priceRange[1]
    );

    // 标签过滤
    if (state.filters.tags.length > 0) {
      filtered = filtered.filter((item) =>
        state.filters.tags.some((tag) => item.tags.includes(tag))
      );
    }

    return filtered;
  }, [state.items, state.filters]);

  // 排序数据
  const sortedItems = useMemo(() => {
    const sorted = [...filteredItems];
    sorted.sort((a, b) => {
      let aValue: any = a[state.sort.field];
      let bValue: any = b[state.sort.field];

      if (state.sort.field === "createdAt") {
        aValue = aValue.getTime();
        bValue = bValue.getTime();
      }

      if (aValue < bValue) {
        return state.sort.order === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return state.sort.order === "asc" ? 1 : -1;
      }
      return 0;
    });
    return sorted;
  }, [filteredItems, state.sort]);

  // 分页数据
  const paginatedItems = useMemo(() => {
    const startIndex = (state.pagination.page - 1) * state.pagination.pageSize;
    const endIndex = startIndex + state.pagination.pageSize;
    return sortedItems.slice(startIndex, endIndex);
  }, [sortedItems, state.pagination]);

  // 更新计算后的数据
  useEffect(() => {
    dispatch({ type: "SET_ITEMS", payload: state.items });
  }, []);

  // 数据操作方法
  const addItem = useCallback((item: Omit<DataItem, "id" | "createdAt">) => {
    const newItem: DataItem = {
      ...item,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    dispatch({ type: "ADD_ITEM", payload: newItem });
  }, []);

  const updateItem = useCallback((id: string, updates: Partial<DataItem>) => {
    dispatch({ type: "UPDATE_ITEM", payload: { id, updates } });
  }, []);

  const deleteItem = useCallback((id: string) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  }, []);

  const setFilters = useCallback((filters: Partial<FilterOptions>) => {
    dispatch({ type: "SET_FILTERS", payload: filters });
    dispatch({ type: "SET_PAGINATION", payload: { page: 1 } }); // 重置到第一页
  }, []);

  const setSort = useCallback((sort: SortOptions) => {
    dispatch({ type: "SET_SORT", payload: sort });
  }, []);

  const setPagination = useCallback(
    (pagination: Partial<PaginationOptions>) => {
      dispatch({ type: "SET_PAGINATION", payload: pagination });
    },
    []
  );

  const toggleSelection = useCallback((id: string) => {
    dispatch({ type: "TOGGLE_SELECTION", payload: id });
  }, []);

  const selectAll = useCallback(() => {
    dispatch({ type: "SELECT_ALL" });
  }, []);

  const clearSelection = useCallback(() => {
    dispatch({ type: "CLEAR_SELECTION" });
  }, []);

  const batchDelete = useCallback(() => {
    state.selectedItems.forEach((id) => {
      dispatch({ type: "DELETE_ITEM", payload: id });
    });
    dispatch({ type: "CLEAR_SELECTION" });
  }, [state.selectedItems]);

  return {
    ...state,
    filteredItems,
    paginatedItems,
    totalCount: sortedItems.length,
    addItem,
    updateItem,
    deleteItem,
    setFilters,
    setSort,
    setPagination,
    toggleSelection,
    selectAll,
    clearSelection,
    batchDelete,
  };
}
`,P=()=>e.jsx(w,{title:"数据管理场景实践",description:"数据管理是现代应用的核心功能之一。本节展示如何使用 React Hooks 构建高效、可扩展的数据管理系统，包括数据的增删改查、过滤排序、分页处理、批量操作以及性能优化等实际应用场景。",overview:[{title:"核心概念",items:["数据状态管理","过滤和排序","分页处理","批量操作"]},{title:"主要优势",items:["性能优化","大数据支持","实时反馈","类型安全"]},{title:"适用场景",items:["数据管理系统","报表查询展示","内容管理平台","库存管理系统"]},{title:"注意事项",items:["虚拟化和缓存","及时清理缓存","加载状态反馈","错误处理机制"]}],examples:[{title:"基础数据管理",component:e.jsx(k,{}),description:"展示完整的数据管理功能，包括增删改查、过滤排序、分页和批量操作。",observationPoints:["实时的数据过滤和搜索功能","可点击的表头排序（升序/降序切换）","多选和批量删除操作","分页导航和页面大小控制","数据统计的实时更新"],keyPoints:["使用 useReducer 管理复杂的数据状态","useMemo 优化过滤和排序计算","支持多种过滤条件的组合","提供直观的用户操作界面"],commonTraps:["每次过滤都重新计算导致性能问题","状态更新不同步导致数据不一致","缺乏用户操作反馈"],solutions:["使用 useMemo 缓存计算结果","使用 useReducer 确保状态更新的一致性","提供加载状态和操作确认"],importantTips:["过滤和排序操作会自动重置分页到第一页","批量操作提供了选择状态的可视化反馈"],preCode:[{title:"types",code:j},{title:"useDataManagement",code:C}],codeExample:{title:"基础数据管理",code:A}},{title:"高级数据管理",component:e.jsx(D,{}),description:"演示大数据集的高性能处理，包括缓存优化、虚拟化渲染和性能监控。",observationPoints:["缓存开关对性能的显著影响","虚拟化渲染处理大数据集","实时的性能指标监控","快速过滤器的便捷操作","统计数据的缓存优化"],keyPoints:["缓存机制显著提升重复计算性能","虚拟化渲染处理大量数据","性能监控帮助识别瓶颈","智能的缓存键生成策略"],commonTraps:["缓存过多导致内存泄漏","虚拟化实现复杂度高","性能监控影响实际性能"],solutions:["提供缓存清理机制","使用成熟的虚拟化库","在开发环境启用性能监控"],importantTips:["缓存键应该包含所有影响结果的因素","虚拟化适合大数据集但增加了复杂性"],preCode:[{title:"types",code:j},{title:"useDataManagement",code:C}],codeExample:{title:"高级数据管理",code:T}}],tutorial:{concepts:["数据状态应该包含原始数据、过滤条件、排序选项和分页信息","使用 useReducer 管理复杂的数据操作逻辑","useMemo 可以优化昂贵的计算操作","缓存机制可以避免重复计算","虚拟化渲染适合处理大数据集"],steps:["设计数据结构和状态管理方案","实现基础的增删改查功能","添加过滤和搜索功能","实现排序和分页功能","添加批量操作支持","优化性能（缓存、虚拟化）","添加用户体验增强功能"],tips:["使用 TypeScript 确保数据类型安全","合理使用 useMemo 避免不必要的计算","为大数据集考虑虚拟化渲染","提供清晰的加载和错误状态","实现乐观更新提升用户体验","考虑数据的持久化和同步"]},interview:{questions:[{question:"如何设计一个高性能的数据管理系统？",answer:"高性能数据管理系统的设计要点：1) 状态管理 - 使用 useReducer 管理复杂状态，确保更新的一致性；2) 计算优化 - 使用 useMemo 缓存过滤、排序等计算结果；3) 渲染优化 - 对大数据集使用虚拟化渲染；4) 缓存策略 - 缓存频繁计算的结果，避免重复计算；5) 分页处理 - 合理的分页大小和懒加载；6) 内存管理 - 及时清理不需要的数据和缓存；7) 用户体验 - 提供加载状态、操作反馈和错误处理。"},{question:"如何处理大数据集的性能问题？",answer:"处理大数据集性能问题的策略：1) 虚拟化渲染 - 只渲染可见区域的数据；2) 分页加载 - 按需加载数据，避免一次性加载全部；3) 缓存机制 - 缓存计算结果和渲染结果；4) 防抖优化 - 对搜索和过滤操作使用防抖；5) Web Workers - 将复杂计算移到后台线程；6) 索引优化 - 为常用查询字段建立索引；7) 懒加载 - 延迟加载非关键数据；8) 内存监控 - 监控内存使用，及时清理。"},{question:"数据过滤和排序的最佳实践？",answer:"数据过滤和排序的最佳实践：1) 计算优化 - 使用 useMemo 缓存过滤和排序结果；2) 多条件过滤 - 支持多个过滤条件的组合；3) 实时搜索 - 使用防抖避免频繁计算；4) 排序稳定性 - 确保排序结果的一致性；5) 用户体验 - 提供清晰的过滤状态指示；6) 性能监控 - 监控过滤和排序的性能；7) 缓存策略 - 合理的缓存键设计；8) 类型安全 - 使用 TypeScript 确保类型安全。"},{question:"如何实现高效的批量操作？",answer:"高效批量操作的实现：1) 状态管理 - 使用数组管理选中项的 ID；2) 全选逻辑 - 支持当前页全选和全部数据全选；3) 操作确认 - 对危险操作提供确认机制；4) 进度反馈 - 对耗时操作显示进度；5) 错误处理 - 处理部分成功的情况；6) 乐观更新 - 先更新 UI，再同步到服务器；7) 撤销功能 - 为误操作提供撤销机制；8) 性能优化 - 批量 API 调用减少网络请求。"},{question:"数据管理中的缓存策略？",answer:"数据管理缓存策略：1) 缓存粒度 - 根据数据变化频率选择合适的缓存粒度；2) 缓存键设计 - 包含所有影响结果的因素；3) 缓存失效 - 数据更新时及时清理相关缓存；4) 内存限制 - 设置缓存大小限制，使用 LRU 等策略；5) 缓存层级 - 多级缓存提升命中率；6) 缓存预热 - 预先计算常用数据；7) 缓存监控 - 监控缓存命中率和内存使用；8) 持久化缓存 - 将重要缓存持久化到本地存储。"}],keyPoints:["数据管理需要考虑性能、用户体验和数据一致性","useReducer 适合管理复杂的数据状态","useMemo 和缓存机制可以显著提升性能","虚拟化渲染是处理大数据集的有效方案","批量操作需要考虑错误处理和用户反馈"]},bestPractices:{dos:["使用 TypeScript 确保类型安全","合理使用 useMemo 优化计算性能","为大数据集实现虚拟化渲染","提供清晰的加载和错误状态","实现乐观更新提升用户体验","使用防抖优化搜索和过滤","提供批量操作的确认机制","监控性能指标和内存使用"],donts:["不要在每次渲染时重新计算过滤结果","不要忽略大数据集的性能问题","不要缺少用户操作的反馈","不要忘记清理不需要的缓存","不要在批量操作时阻塞 UI","不要忽略数据更新的一致性","不要过度缓存导致内存泄漏","不要忽略错误处理和边界情况"],patterns:["数据状态分离模式：将原始数据、过滤条件、排序选项分开管理","计算缓存模式：使用 useMemo 和自定义缓存优化性能","批量操作模式：统一的选择状态管理和批量处理","虚拟化渲染模式：只渲染可见区域的数据","乐观更新模式：先更新 UI，再同步到服务器","分页加载模式：按需加载数据，避免一次性加载全部","防抖搜索模式：避免频繁的搜索请求","错误恢复模式：提供撤销和重试机制"]}});export{P as default};
