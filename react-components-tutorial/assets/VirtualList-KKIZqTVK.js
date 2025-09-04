import{r,j as e}from"./index-H7t66yxh.js";import{C as w}from"./ComponentTemplate-bNJaV0ol.js";const R=({items:i,itemHeight:l,containerHeight:s,renderItem:a,overscan:n=5})=>{const[o,v]=r.useState(0),p=r.useRef(null),y=r.useCallback(x=>{v(x.currentTarget.scrollTop)},[]),g=r.useMemo(()=>{const x=Math.max(0,Math.floor(o/l)-n),t=Math.min(i.length-1,Math.ceil((o+s)/l)+n);return{startIndex:x,endIndex:t}},[o,l,s,i.length,n]),c=r.useMemo(()=>{const x=[];for(let t=g.startIndex;t<=g.endIndex;t++)x.push({index:t,item:i[t],top:t*l});return x},[i,g,l]),h=i.length*l;return e.jsx("div",{ref:p,style:{height:s,overflow:"auto",position:"relative"},onScroll:y,children:e.jsx("div",{style:{height:h,position:"relative"},children:c.map(({index:x,item:t,top:u})=>e.jsx("div",{style:{position:"absolute",top:u,left:0,right:0,height:l},children:a(t,x)},x))})})},I=()=>{const[i,l]=r.useState(1e4),s=r.useMemo(()=>Array.from({length:i},(n,o)=>({id:o,name:`Item ${o}`,value:Math.random()*1e3})),[i]),a=r.useCallback((n,o)=>e.jsxs("div",{style:{padding:"10px",borderBottom:"1px solid #eee",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:n.name}),e.jsxs("span",{children:["Value: ",n.value.toFixed(2)]})]}),[]);return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"10px"},children:e.jsxs("label",{children:["数据量:",e.jsxs("select",{value:i,onChange:n=>l(Number(n.target.value)),style:{marginLeft:"10px"},children:[e.jsx("option",{value:1e3,children:"1,000 条"}),e.jsx("option",{value:5e3,children:"5,000 条"}),e.jsx("option",{value:1e4,children:"10,000 条"}),e.jsx("option",{value:5e4,children:"50,000 条"})]})]})}),e.jsx(R,{items:s,itemHeight:50,containerHeight:400,renderItem:a,overscan:5})]})},j=`import React, { useCallback, useMemo, useState } from "react";
import VirtualList from "./VirtualList";

// 基础虚拟列表示例
const BasicVirtualListExample: React.FC = () => {
  const [itemCount, setItemCount] = useState(10000);

  const items = useMemo(
    () =>
      Array.from({ length: itemCount }, (_, i) => ({
        id: i,
        name: \`Item \${i}\`,
        value: Math.random() * 1000,
      })),
    [itemCount]
  );

  const renderItem = useCallback(
    (item: any, index: number) => (
      <div
        style={{
          padding: "10px",
          borderBottom: "1px solid #eee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{item.name}</span>
        <span>Value: {item.value.toFixed(2)}</span>
      </div>
    ),
    []
  );

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          数据量:
          <select
            value={itemCount}
            onChange={(e) => setItemCount(Number(e.target.value))}
            style={{ marginLeft: "10px" }}
          >
            <option value={1000}>1,000 条</option>
            <option value={5000}>5,000 条</option>
            <option value={10000}>10,000 条</option>
            <option value={50000}>50,000 条</option>
          </select>
        </label>
      </div>
      <VirtualList
        items={items}
        itemHeight={50}
        containerHeight={400}
        renderItem={renderItem}
        overscan={5}
      />
    </div>
  );
};

export default BasicVirtualListExample;`,k=`import React, { useCallback, useMemo, useRef, useState } from "react";
import ResizeObserver from "./ResizeObserver";

interface DynamicVirtualListProps {
  items: any[];
  containerHeight: number;
  renderItem: (item: any, index: number) => React.ReactNode;
  estimatedItemHeight?: number;
  overscan?: number;
}

const DynamicVirtualList: React.FC<DynamicVirtualListProps> = ({
  items,
  containerHeight,
  renderItem,
  estimatedItemHeight = 50,
  overscan = 5,
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [itemHeights, setItemHeights] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const updateItemHeight = useCallback((index: number, height: number) => {
    setItemHeights((prev) => {
      const newHeights = [...prev];
      newHeights[index] = height;
      return newHeights;
    });
  }, []);

  const itemOffsets = useMemo(() => {
    const offsets = [0];
    for (let i = 1; i < items.length; i++) {
      const prevHeight = itemHeights[i - 1] || estimatedItemHeight;
      offsets[i] = offsets[i - 1] + prevHeight;
    }
    return offsets;
  }, [items.length, itemHeights, estimatedItemHeight]);

  const totalHeight = useMemo(() => {
    const lastIndex = items.length - 1;
    const lastOffset = itemOffsets[lastIndex] || 0;
    const lastHeight = itemHeights[lastIndex] || estimatedItemHeight;
    return lastOffset + lastHeight;
  }, [items.length, itemOffsets, itemHeights, estimatedItemHeight]);

  const visibleRange = useMemo(() => {
    let startIndex = 0;
    let endIndex = items.length - 1;

    // 二分查找起始索引
    for (let i = 0; i < itemOffsets.length; i++) {
      if (itemOffsets[i] >= scrollTop) {
        startIndex = Math.max(0, i - overscan);
        break;
      }
    }

    // 查找结束索引
    for (let i = startIndex; i < itemOffsets.length; i++) {
      if (itemOffsets[i] >= scrollTop + containerHeight) {
        endIndex = Math.min(items.length - 1, i + overscan);
        break;
      }
    }

    return { startIndex, endIndex };
  }, [scrollTop, containerHeight, itemOffsets, items.length, overscan]);

  const visibleItems = useMemo(() => {
    const result = [];
    for (let i = visibleRange.startIndex; i <= visibleRange.endIndex; i++) {
      result.push({
        index: i,
        item: items[i],
        top: itemOffsets[i] || 0,
      });
    }
    return result;
  }, [items, visibleRange, itemOffsets]);

  return (
    <div
      ref={containerRef}
      style={{
        height: containerHeight,
        overflow: "auto",
        position: "relative",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        {visibleItems.map(({ index, item, top }) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            style={{
              position: "absolute",
              top,
              left: 0,
              right: 0,
            }}
          >
            <ResizeObserver
              onResize={(height) => updateItemHeight(index, height)}
            >
              {renderItem(item, index)}
            </ResizeObserver>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicVirtualList;`,S=({children:i,onResize:l})=>{const s=r.useRef(null);return r.useEffect(()=>{if(!s.current)return;const a=new window.ResizeObserver(n=>{for(const o of n)l(o.contentRect.height)});return a.observe(s.current),()=>{a.disconnect()}},[l]),e.jsx("div",{ref:s,children:i})},L=({items:i,containerHeight:l,renderItem:s,estimatedItemHeight:a=50,overscan:n=5})=>{const[o,v]=r.useState(0),[p,y]=r.useState([]),g=r.useRef(null),c=r.useRef([]),h=r.useCallback(d=>{v(d.currentTarget.scrollTop)},[]),x=r.useCallback((d,m)=>{y(f=>{const C=[...f];return C[d]=m,C})},[]),t=r.useMemo(()=>{const d=[0];for(let m=1;m<i.length;m++){const f=p[m-1]||a;d[m]=d[m-1]+f}return d},[i.length,p,a]),u=r.useMemo(()=>{const d=i.length-1,m=t[d]||0,f=p[d]||a;return m+f},[i.length,t,p,a]),T=r.useMemo(()=>{let d=0,m=i.length-1;for(let f=0;f<t.length;f++)if(t[f]>=o){d=Math.max(0,f-n);break}for(let f=d;f<t.length;f++)if(t[f]>=o+l){m=Math.min(i.length-1,f+n);break}return{startIndex:d,endIndex:m}},[o,l,t,i.length,n]),b=r.useMemo(()=>{const d=[];for(let m=T.startIndex;m<=T.endIndex;m++)d.push({index:m,item:i[m],top:t[m]||0});return d},[i,T,t]);return e.jsx("div",{ref:g,style:{height:l,overflow:"auto",position:"relative"},onScroll:h,children:e.jsx("div",{style:{height:u,position:"relative"},children:b.map(({index:d,item:m,top:f})=>e.jsx("div",{ref:C=>c.current[d]=C,style:{position:"absolute",top:f,left:0,right:0},children:e.jsx(S,{onResize:C=>x(d,C),children:s(m,d)})},d))})})},H=()=>{const[i,l]=r.useState(1e3),s=r.useMemo(()=>Array.from({length:i},(n,o)=>({id:o,title:`动态内容 ${o}`,content:`这是第 ${o} 项的内容。`.repeat(Math.floor(Math.random()*5)+1),tags:Array.from({length:Math.floor(Math.random()*4)+1},(v,p)=>`标签${p+1}`)})),[i]),a=r.useCallback((n,o)=>e.jsxs("div",{style:{padding:"15px",borderBottom:"1px solid #eee",backgroundColor:o%2===0?"#f9f9f9":"white"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0",color:"#333"},children:n.title}),e.jsx("p",{style:{margin:"0 0 8px 0",lineHeight:"1.4"},children:n.content}),e.jsx("div",{style:{display:"flex",gap:"5px",flexWrap:"wrap"},children:n.tags.map((v,p)=>e.jsx("span",{style:{padding:"2px 8px",backgroundColor:"#e3f2fd",borderRadius:"12px",fontSize:"12px",color:"#1976d2"},children:v},p))})]}),[]);return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"10px"},children:e.jsxs("label",{children:["数据量:",e.jsxs("select",{value:i,onChange:n=>l(Number(n.target.value)),style:{marginLeft:"10px"},children:[e.jsx("option",{value:500,children:"500 条"}),e.jsx("option",{value:1e3,children:"1,000 条"}),e.jsx("option",{value:2e3,children:"2,000 条"}),e.jsx("option",{value:5e3,children:"5,000 条"})]})]})}),e.jsx(L,{items:s,containerHeight:400,renderItem:a,estimatedItemHeight:80,overscan:3})]})},V=`import React, { useCallback, useMemo, useState } from "react";\r
import DynamicVirtualList from "./DynamicVirtualList";\r
\r
// 动态高度虚拟列表示例\r
const DynamicVirtualListExample: React.FC = () => {\r
  const [itemCount, setItemCount] = useState(1000);\r
\r
  const items = useMemo(\r
    () =>\r
      Array.from({ length: itemCount }, (_, i) => ({\r
        id: i,\r
        title: \`动态内容 \${i}\`,\r
        content: \`这是第 \${i} 项的内容。\`.repeat(\r
          Math.floor(Math.random() * 5) + 1\r
        ),\r
        tags: Array.from(\r
          { length: Math.floor(Math.random() * 4) + 1 },\r
          (_, j) => \`标签\${j + 1}\`\r
        ),\r
      })),\r
    [itemCount]\r
  );\r
\r
  const renderItem = useCallback(\r
    (item: any, index: number) => (\r
      <div\r
        style={{\r
          padding: "15px",\r
          borderBottom: "1px solid #eee",\r
          backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",\r
        }}\r
      >\r
        <h4 style={{ margin: "0 0 8px 0", color: "#333" }}>{item.title}</h4>\r
        <p style={{ margin: "0 0 8px 0", lineHeight: "1.4" }}>\r
          {item.content}\r
        </p>\r
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>\r
          {item.tags.map((tag: string, tagIndex: number) => (\r
            <span\r
              key={tagIndex}\r
              style={{\r
                padding: "2px 8px",\r
                backgroundColor: "#e3f2fd",\r
                borderRadius: "12px",\r
                fontSize: "12px",\r
                color: "#1976d2",\r
              }}\r
            >\r
              {tag}\r
            </span>\r
          ))}\r
        </div>\r
      </div>\r
    ),\r
    []\r
  );\r
\r
  return (\r
    <div>\r
      <div style={{ marginBottom: "10px" }}>\r
        <label>\r
          数据量:\r
          <select\r
            value={itemCount}\r
            onChange={(e) => setItemCount(Number(e.target.value))}\r
            style={{ marginLeft: "10px" }}\r
          >\r
            <option value={500}>500 条</option>\r
            <option value={1000}>1,000 条</option>\r
            <option value={2000}>2,000 条</option>\r
            <option value={5000}>5,000 条</option>\r
          </select>\r
        </label>\r
      </div>\r
      <DynamicVirtualList\r
        items={items}\r
        containerHeight={400}\r
        renderItem={renderItem}\r
        estimatedItemHeight={80}\r
        overscan={3}\r
      />\r
    </div>\r
  );\r
};\r
\r
export default DynamicVirtualListExample;`,O=()=>{const[i,l]=r.useState(1e3),[s,a]=r.useState({normal:0,virtual:0}),n=r.useMemo(()=>Array.from({length:i},(c,h)=>({id:h,name:`Item ${h}`,description:`这是第 ${h} 个项目的描述`,value:Math.random()*1e3})),[i]),o=r.useCallback((c,h)=>e.jsxs("div",{style:{padding:"12px",borderBottom:"1px solid #eee",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold"},children:c.name}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:c.description})]}),e.jsx("div",{style:{color:"#1890ff"},children:c.value.toFixed(2)})]}),[]);r.useCallback(c=>{const h=performance.now();setTimeout(()=>{const t=performance.now()-h;a(u=>({...u,[c]:t})),console.log(`${c==="normal"?"普通列表":"虚拟列表"}渲染时间: ${t.toFixed(2)}ms`)},0)},[]);const v=r.useRef(0),p=r.useRef(0),y=r.useMemo(()=>(v.current=performance.now(),e.jsxs("div",{style:{height:"300px",overflow:"auto",border:"1px solid #d9d9d9",borderRadius:"4px"},children:[n.slice(0,Math.min(100,n.length)).map((c,h)=>e.jsx("div",{children:o(c,h)},c.id)),n.length>100&&e.jsxs("div",{style:{padding:"12px",textAlign:"center",color:"#999",backgroundColor:"#f5f5f5"},children:["... 还有 ",n.length-100," 项（为了性能只显示前100项）"]})]})),[n,o]),g=r.useMemo(()=>(p.current=performance.now(),e.jsx(R,{items:n,itemHeight:60,containerHeight:300,renderItem:o,overscan:5})),[n,o]);return r.useEffect(()=>{const c=setTimeout(()=>{const h=performance.now(),x=performance.now();a(t=>({normal:v.current?h-v.current:t.normal,virtual:p.current?x-p.current:t.virtual})),console.log(`普通列表渲染时间: ${(h-v.current).toFixed(2)}ms`),console.log(`虚拟列表渲染时间: ${(x-p.current).toFixed(2)}ms`)},0);return()=>clearTimeout(c)},[n]),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"16px"},children:e.jsxs("label",{children:["数据量:",e.jsxs("select",{value:i,onChange:c=>l(Number(c.target.value)),style:{marginLeft:"8px"},children:[e.jsx("option",{value:100,children:"100 条"}),e.jsx("option",{value:500,children:"500 条"}),e.jsx("option",{value:1e3,children:"1,000 条"}),e.jsx("option",{value:5e3,children:"5,000 条"}),e.jsx("option",{value:1e4,children:"10,000 条"})]})]})}),e.jsxs("div",{style:{display:"flex",gap:"16px",marginBottom:"16px",padding:"12px",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"普通列表渲染时间:"})," ",e.jsxs("span",{style:{color:"#ff4d4f"},children:[s.normal.toFixed(2),"ms"]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"虚拟列表渲染时间:"})," ",e.jsxs("span",{style:{color:"#52c41a"},children:[s.virtual.toFixed(2),"ms"]})]}),s.normal>0&&s.virtual>0&&e.jsxs("div",{children:[e.jsx("strong",{children:"性能提升:"})," ",e.jsxs("span",{style:{color:"#1890ff"},children:[(s.normal/s.virtual*100-100).toFixed(1),"%"]})]})]}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h4",{children:"普通列表 (最多显示100项)"}),y]}),e.jsxs("div",{style:{flex:1},children:[e.jsxs("h4",{children:["虚拟列表 (显示全部 ",i.toLocaleString()," 项)"]}),g]})]})]})},E=`import React, { useCallback, useMemo, useState, useEffect, useRef } from "react";
import VirtualList from "./VirtualList";

// 性能对比组件
const PerformanceComparison: React.FC = () => {
  const [itemCount, setItemCount] = useState(1000);
  const [renderTimes, setRenderTimes] = useState<{
    normal: number;
    virtual: number;
  }>({ normal: 0, virtual: 0 });

  const items = useMemo(
    () =>
      Array.from({ length: itemCount }, (_, i) => ({
        id: i,
        name: \`Item \${i}\`,
        description: \`这是第 \${i} 个项目的描述\`,
        value: Math.random() * 1000,
      })),
    [itemCount]
  );

  const renderItem = useCallback(
    (item: any, index: number) => (
      <div
        style={{
          padding: "12px",
          borderBottom: "1px solid #eee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontWeight: "bold" }}>{item.name}</div>
          <div style={{ fontSize: "12px", color: "#666" }}>
            {item.description}
          </div>
        </div>
        <div style={{ color: "#1890ff" }}>
          {item.value.toFixed(2)}
        </div>
      </div>
    ),
    []
  );

  const measureRenderTime = useCallback(
    (type: "normal" | "virtual") => {
      const startTime = performance.now();
      
      // 模拟渲染时间测量
      setTimeout(() => {
        const endTime = performance.now();
        const renderTime = endTime - startTime;
        
        setRenderTimes(prev => ({
          ...prev,
          [type]: renderTime
        }));
        
        console.log(\`\${type === 'normal' ? '普通列表' : '虚拟列表'}渲染时间: \${renderTime.toFixed(2)}ms\`);
      }, 0);
    },
    []
  );

  const normalListStartTime = useRef<number>(0);
  const virtualListStartTime = useRef<number>(0);

  const NormalList = useMemo(() => {
    normalListStartTime.current = performance.now();
    
    return (
      <div
        style={{
          height: "300px",
          overflow: "auto",
          border: "1px solid #d9d9d9",
          borderRadius: "4px",
        }}
      >
        {items.slice(0, Math.min(100, items.length)).map((item, index) => (
          <div key={item.id}>{renderItem(item, index)}</div>
        ))}
        {items.length > 100 && (
          <div
            style={{
              padding: "12px",
              textAlign: "center",
              color: "#999",
              backgroundColor: "#f5f5f5",
            }}
          >
            ... 还有 {items.length - 100} 项（为了性能只显示前100项）
          </div>
        )}
      </div>
    );
  }, [items, renderItem]);

  const VirtualListComponent = useMemo(() => {
    virtualListStartTime.current = performance.now();
    
    return (
      <VirtualList
        items={items}
        itemHeight={60}
        containerHeight={300}
        renderItem={renderItem}
        overscan={5}
      />
    );
  }, [items, renderItem]);

  // 使用 useEffect 来测量渲染时间，避免在渲染过程中更新状态
  useEffect(() => {
    const timer = setTimeout(() => {
      const normalEndTime = performance.now();
      const virtualEndTime = performance.now();
      
      setRenderTimes(prev => ({
        normal: normalListStartTime.current ? normalEndTime - normalListStartTime.current : prev.normal,
        virtual: virtualListStartTime.current ? virtualEndTime - virtualListStartTime.current : prev.virtual
      }));
      
      console.log(\`普通列表渲染时间: \${(normalEndTime - normalListStartTime.current).toFixed(2)}ms\`);
      console.log(\`虚拟列表渲染时间: \${(virtualEndTime - virtualListStartTime.current).toFixed(2)}ms\`);
    }, 0);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <label>
          数据量:
          <select
            value={itemCount}
            onChange={(e) => setItemCount(Number(e.target.value))}
            style={{ marginLeft: "8px" }}
          >
            <option value={100}>100 条</option>
            <option value={500}>500 条</option>
            <option value={1000}>1,000 条</option>
            <option value={5000}>5,000 条</option>
            <option value={10000}>10,000 条</option>
          </select>
        </label>
      </div>

      {/* 性能统计 */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "16px",
          padding: "12px",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
        }}
      >
        <div>
          <strong>普通列表渲染时间:</strong>{" "}
          <span style={{ color: "#ff4d4f" }}>
            {renderTimes.normal.toFixed(2)}ms
          </span>
        </div>
        <div>
          <strong>虚拟列表渲染时间:</strong>{" "}
          <span style={{ color: "#52c41a" }}>
            {renderTimes.virtual.toFixed(2)}ms
          </span>
        </div>
        {renderTimes.normal > 0 && renderTimes.virtual > 0 && (
          <div>
            <strong>性能提升:</strong>{" "}
            <span style={{ color: "#1890ff" }}>
              {((renderTimes.normal / renderTimes.virtual) * 100 - 100).toFixed(1)}%
            </span>
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: "16px" }}>
        {/* 普通列表 */}
        <div style={{ flex: 1 }}>
          <h4>普通列表 (最多显示100项)</h4>
          {NormalList}
        </div>

        {/* 虚拟列表 */}
        <div style={{ flex: 1 }}>
          <h4>虚拟列表 (显示全部 {itemCount.toLocaleString()} 项)</h4>
          {VirtualListComponent}
        </div>
      </div>
    </div>
  );
};

export default PerformanceComparison;`,M=`import React, { useCallback, useMemo, useRef, useState } from "react";

// 基础虚拟列表组件
interface VirtualListProps {
  items: any[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: any, index: number) => React.ReactNode;
  overscan?: number;
}

const VirtualList: React.FC<VirtualListProps> = ({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 5,
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const visibleRange = useMemo(() => {
    const startIndex = Math.max(
      0,
      Math.floor(scrollTop / itemHeight) - overscan
    );
    const endIndex = Math.min(
      items.length - 1,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
    );
    return { startIndex, endIndex };
  }, [scrollTop, itemHeight, containerHeight, items.length, overscan]);

  const visibleItems = useMemo(() => {
    const result = [];
    for (let i = visibleRange.startIndex; i <= visibleRange.endIndex; i++) {
      result.push({
        index: i,
        item: items[i],
        top: i * itemHeight,
      });
    }
    return result;
  }, [items, visibleRange, itemHeight]);

  const totalHeight = items.length * itemHeight;

  return (
    <div
      ref={containerRef}
      style={{
        height: containerHeight,
        overflow: "auto",
        position: "relative",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        {visibleItems.map(({ index, item, top }) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top,
              left: 0,
              right: 0,
              height: itemHeight,
            }}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualList;`,D=`import React, { useCallback, useMemo, useRef, useState } from "react";

interface Column {
  key: string;
  title: string;
  width: number;
  render?: (value: any, record: any, index: number) => React.ReactNode;
}

interface VirtualTableProps {
  data: any[];
  columns: Column[];
  rowHeight: number;
  containerHeight: number;
  overscan?: number;
}

const VirtualTable: React.FC<VirtualTableProps> = ({
  data,
  columns,
  rowHeight,
  containerHeight,
  overscan = 5,
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const visibleRange = useMemo(() => {
    const startIndex = Math.max(
      0,
      Math.floor(scrollTop / rowHeight) - overscan
    );
    const endIndex = Math.min(
      data.length - 1,
      Math.ceil((scrollTop + containerHeight - 40) / rowHeight) + overscan // 减去表头高度
    );
    return { startIndex, endIndex };
  }, [scrollTop, rowHeight, containerHeight, data.length, overscan]);

  const visibleRows = useMemo(() => {
    const result = [];
    for (let i = visibleRange.startIndex; i <= visibleRange.endIndex; i++) {
      result.push({
        index: i,
        record: data[i],
        top: i * rowHeight,
      });
    }
    return result;
  }, [data, visibleRange, rowHeight]);

  const totalHeight = data.length * rowHeight;
  const totalWidth = columns.reduce((sum, col) => sum + col.width, 0);

  return (
    <div
      style={{
        height: containerHeight,
        border: "1px solid #d9d9d9",
        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      {/* 表头 */}
      <div
        style={
          {
            display: "flex",
            backgroundColor: "#fafafa",
            borderBottom: "1px solid #d9d9d9",
            height: "40px",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 1,
          } as React.CSSProperties
        }
      >
        {columns.map((column) => (
          <div
            key={column.key}
            style={{
              width: column.width,
              padding: "0 12px",
              fontWeight: "600",
              borderRight: "1px solid #d9d9d9",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {column.title}
          </div>
        ))}
      </div>

      {/* 表体 */}
      <div
        ref={containerRef}
        style={{
          height: containerHeight - 40,
          overflow: "auto",
          position: "relative",
        }}
        onScroll={handleScroll}
      >
        <div style={{ height: totalHeight, position: "relative" }}>
          {visibleRows.map(({ index, record, top }) => (
            <div
              key={index}
              style={{
                position: "absolute",
                top,
                left: 0,
                width: totalWidth,
                height: rowHeight,
                display: "flex",
                alignItems: "center",
                backgroundColor: index % 2 === 0 ? "white" : "#fafafa",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              {columns.map((column) => (
                <div
                  key={column.key}
                  style={{
                    width: column.width,
                    padding: "0 12px",
                    borderRight: "1px solid #f0f0f0",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {column.render
                    ? column.render(record[column.key], record, index)
                    : record[column.key]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualTable;`,$=({data:i,columns:l,rowHeight:s,containerHeight:a,overscan:n=5})=>{const[o,v]=r.useState(0),p=r.useRef(null),y=r.useCallback(t=>{v(t.currentTarget.scrollTop)},[]),g=r.useMemo(()=>{const t=Math.max(0,Math.floor(o/s)-n),u=Math.min(i.length-1,Math.ceil((o+a-40)/s)+n);return{startIndex:t,endIndex:u}},[o,s,a,i.length,n]),c=r.useMemo(()=>{const t=[];for(let u=g.startIndex;u<=g.endIndex;u++)t.push({index:u,record:i[u],top:u*s});return t},[i,g,s]),h=i.length*s,x=l.reduce((t,u)=>t+u.width,0);return e.jsxs("div",{style:{height:a,border:"1px solid #d9d9d9",borderRadius:"6px",overflow:"hidden"},children:[e.jsx("div",{style:{display:"flex",backgroundColor:"#fafafa",borderBottom:"1px solid #d9d9d9",height:"40px",alignItems:"center",position:"sticky",top:0,zIndex:1},children:l.map(t=>e.jsx("div",{style:{width:t.width,padding:"0 12px",fontWeight:"600",borderRight:"1px solid #d9d9d9",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t.title},t.key))}),e.jsx("div",{ref:p,style:{height:a-40,overflow:"auto",position:"relative"},onScroll:y,children:e.jsx("div",{style:{height:h,position:"relative"},children:c.map(({index:t,record:u,top:T})=>e.jsx("div",{style:{position:"absolute",top:T,left:0,width:x,height:s,display:"flex",alignItems:"center",backgroundColor:t%2===0?"white":"#fafafa",borderBottom:"1px solid #f0f0f0"},children:l.map(b=>e.jsx("div",{style:{width:b.width,padding:"0 12px",borderRight:"1px solid #f0f0f0",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:b.render?b.render(u[b.key],u,t):u[b.key]},b.key))},t))})})]})},F=()=>{const[i,l]=r.useState(1e4),s=r.useMemo(()=>Array.from({length:i},(n,o)=>({id:o+1,name:`用户 ${o+1}`,email:`user${o+1}@example.com`,age:Math.floor(Math.random()*50)+20,city:["北京","上海","广州","深圳","杭州"][Math.floor(Math.random()*5)],salary:Math.floor(Math.random()*5e4)+5e4,department:["技术部","产品部","设计部","运营部","市场部"][Math.floor(Math.random()*5)],status:Math.random()>.5?"在职":"离职"})),[i]),a=r.useMemo(()=>[{key:"id",title:"ID",width:80},{key:"name",title:"姓名",width:120},{key:"email",title:"邮箱",width:200},{key:"age",title:"年龄",width:80},{key:"city",title:"城市",width:100},{key:"salary",title:"薪资",width:120,render:n=>`¥${n.toLocaleString()}`},{key:"department",title:"部门",width:120},{key:"status",title:"状态",width:80,render:n=>e.jsx("span",{style:{padding:"2px 8px",borderRadius:"4px",fontSize:"12px",backgroundColor:n==="在职"?"#f6ffed":"#fff2f0",color:n==="在职"?"#52c41a":"#ff4d4f",border:`1px solid ${n==="在职"?"#b7eb8f":"#ffccc7"}`},children:n})}],[]);return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("label",{children:["数据量:",e.jsxs("select",{value:i,onChange:n=>l(Number(n.target.value)),style:{marginLeft:"8px"},children:[e.jsx("option",{value:1e3,children:"1,000 行"}),e.jsx("option",{value:5e3,children:"5,000 行"}),e.jsx("option",{value:1e4,children:"10,000 行"}),e.jsx("option",{value:5e4,children:"50,000 行"}),e.jsx("option",{value:1e5,children:"100,000 行"})]})]}),e.jsxs("span",{style:{marginLeft:"16px",color:"#666"},children:["当前显示 ",i.toLocaleString()," 行数据"]})]}),e.jsx($,{data:s,columns:a,rowHeight:50,containerHeight:500,overscan:5})]})},B=`import React, { useMemo, useState } from "react";
import VirtualTable from "./VirtualTable";

// 虚拟表格示例
const VirtualTableExample: React.FC = () => {
  const [rowCount, setRowCount] = useState(10000);

  const data = useMemo(
    () =>
      Array.from({ length: rowCount }, (_, i) => ({
        id: i + 1,
        name: \`用户 \${i + 1}\`,
        email: \`user\${i + 1}@example.com\`,
        age: Math.floor(Math.random() * 50) + 20,
        city: ["北京", "上海", "广州", "深圳", "杭州"][
          Math.floor(Math.random() * 5)
        ],
        salary: Math.floor(Math.random() * 50000) + 50000,
        department: ["技术部", "产品部", "设计部", "运营部", "市场部"][
          Math.floor(Math.random() * 5)
        ],
        status: Math.random() > 0.5 ? "在职" : "离职",
      })),
    [rowCount]
  );

  const columns = useMemo(
    () => [
      {
        key: "id",
        title: "ID",
        width: 80,
      },
      {
        key: "name",
        title: "姓名",
        width: 120,
      },
      {
        key: "email",
        title: "邮箱",
        width: 200,
      },
      {
        key: "age",
        title: "年龄",
        width: 80,
      },
      {
        key: "city",
        title: "城市",
        width: 100,
      },
      {
        key: "salary",
        title: "薪资",
        width: 120,
        render: (value: number) => \`¥\${value.toLocaleString()}\`,
      },
      {
        key: "department",
        title: "部门",
        width: 120,
      },
      {
        key: "status",
        title: "状态",
        width: 80,
        render: (value: string) => (
          <span
            style={{
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              backgroundColor: value === "在职" ? "#f6ffed" : "#fff2f0",
              color: value === "在职" ? "#52c41a" : "#ff4d4f",
              border: \`1px solid \${
                value === "在职" ? "#b7eb8f" : "#ffccc7"
              }\`,
            }}
          >
            {value}
          </span>
        ),
      },
    ],
    []
  );

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <label>
          数据量:
          <select
            value={rowCount}
            onChange={(e) => setRowCount(Number(e.target.value))}
            style={{ marginLeft: "8px" }}
          >
            <option value={1000}>1,000 行</option>
            <option value={5000}>5,000 行</option>
            <option value={10000}>10,000 行</option>
            <option value={50000}>50,000 行</option>
            <option value={100000}>100,000 行</option>
          </select>
        </label>
        <span style={{ marginLeft: "16px", color: "#666" }}>
          当前显示 {rowCount.toLocaleString()} 行数据
        </span>
      </div>
      <VirtualTable
        data={data}
        columns={columns}
        rowHeight={50}
        containerHeight={500}
        overscan={5}
      />
    </div>
  );
};

export default VirtualTableExample;`,P={title:"虚拟列表 Virtual List",subtitle:"Virtual List Performance Optimization",description:"虚拟列表是一种性能优化技术，通过只渲染可见区域的列表项来处理大量数据的展示，避免DOM节点过多导致的性能问题。",overview:[{title:"核心概念",items:["虚拟列表是前端性能优化的重要技术之一，特别适用于需要展示大量数据的场景","通过'按需渲染'的策略，只渲染用户当前可见的列表项","避免创建大量DOM节点导致的性能问题","使用滚动事件监听和数学计算确定可见区域"]},{title:"核心优势",items:["性能稳定：DOM节点数量恒定，不随数据量增长","内存友好：避免创建大量DOM节点，减少内存占用","滚动流畅：即使数万条数据也能保持60fps的滚动体验","用户体验：支持快速跳转和无限滚动功能"]},{title:"适用场景",items:["大数据量列表展示（通常>1000条）","列表项结构相对简单且高度一致","需要流畅滚动体验的场景","内存敏感的应用"]},{title:"注意事项",items:["实现复杂度较高，特别是动态高度场景","不适合小数据量，会增加不必要的复杂度","对于复杂的列表项（如包含大量交互元素）效果有限","需要额外处理焦点管理、可访问性等问题"]}],examples:[{title:"基础虚拟列表",component:e.jsx(I,{}),preCode:[{title:"VirtualList",code:M,language:"tsx"}],codeExample:{title:"基础虚拟列表",code:j,language:"tsx"},description:"展示固定高度虚拟列表的基本实现，支持大量数据的高性能渲染。",observationPoints:["观察不同数据量下的渲染性能差异","注意滚动时DOM节点数量保持恒定","体验大数据量下的流畅滚动效果","查看开发者工具中的实际DOM结构"],keyPoints:["只渲染可见区域的列表项，DOM节点数量固定","使用绝对定位精确控制每个项目的位置","通过滚动事件实时计算可见区域范围","缓冲区机制提升滚动体验，减少白屏现象"],commonTraps:["忘记设置容器固定高度，导致虚拟化失效","使用不稳定的key值，如数组索引，影响性能","在渲染函数中进行复杂计算，导致滚动卡顿","缓冲区设置过大，增加不必要的渲染开销"],solutions:["确保容器有明确的height样式，避免高度自适应","使用数据的唯一标识作为key，如id字段","将复杂计算移到useMemo中，避免重复计算","根据实际需求调整overscan参数，通常3-10个项目"],importantTips:["虚拟列表适合数据量大于1000条的场景","列表项高度保持一致可以简化计算逻辑","使用React.memo优化列表项组件的渲染","监控实际DOM节点数量，确保虚拟化生效"]},{title:"动态高度虚拟列表",component:e.jsx(H,{}),preCode:[{title:"DynamicVirtualList",code:k}],codeExample:{title:"动态高度虚拟列表示例代码",code:V,language:"tsx"},description:"处理不同高度列表项的虚拟列表实现，支持动态高度测量和位置计算。",observationPoints:["观察不同高度项目的正确定位","注意高度测量和缓存机制","体验动态高度下的滚动效果","查看ResizeObserver的使用"],keyPoints:["使用ResizeObserver动态测量每个项目的实际高度","维护高度缓存数组，避免重复测量","通过累积计算确定每个项目的绝对位置","使用二分查找优化可见区域的计算性能"],commonTraps:["初始渲染时高度测量不准确，导致位置偏移","频繁的高度变化导致性能问题","滚动时位置计算错误，出现跳跃现象","未正确处理异步高度更新的时序问题"],solutions:["提供合理的预估高度，减少初始渲染的位置偏移","使用防抖机制减少频繁的高度更新","实现稳定的位置计算算法，确保滚动连续性","使用useCallback确保高度更新回调的稳定性"],importantTips:["动态高度虚拟列表实现复杂度较高，需要权衡性能收益","预估高度应该接近实际平均高度，提高计算准确性","考虑使用成熟的库如react-window处理复杂场景","在移动端特别注意触摸滚动的性能优化","使用React.memo优化列表项组件的渲染性能","实现合理的错误边界处理机制"]},{title:"虚拟表格",component:e.jsx(F,{}),preCode:[{title:"VirtualTable",code:D}],codeExample:{title:"虚拟表格",code:B,language:"tsx"},description:"结合虚拟列表技术实现的高性能表格组件，支持大量数据的表格展示。",observationPoints:["观察表头固定，内容区域虚拟化的效果","注意表格列的对齐和样式处理","体验大数据量表格的滚动性能","查看自定义渲染函数的使用"],keyPoints:["表头固定，只对表格内容进行虚拟化处理","使用flexbox布局确保列宽和对齐的一致性","支持自定义列渲染函数，满足复杂展示需求","保持表格的语义化结构和可访问性"],commonTraps:["表头和内容列宽不一致，导致对齐问题","忘记处理表格的边框和间距样式","在自定义渲染函数中进行复杂计算","未考虑表格的响应式布局需求"],solutions:["使用相同的列宽配置确保表头和内容对齐","统一处理表格的样式，使用CSS变量管理","将复杂计算移到useMemo中，优化渲染性能","实现响应式的列宽调整和隐藏机制"],importantTips:["虚拟表格适合展示结构化的大量数据","合理设计列宽，避免内容溢出或截断","考虑添加排序、筛选等交互功能","在移动端考虑横向滚动的用户体验"]},{title:"性能对比",component:e.jsx(O,{}),preCode:[{title:"VirtualList",code:M}],codeExample:{title:"性能对比",code:E,language:"tsx"},description:"对比虚拟列表和普通列表的性能差异，直观展示虚拟化技术的优势。",observationPoints:["对比不同数据量下两种模式的渲染时间","观察DOM节点数量的差异","体验滚动性能的明显区别","注意内存使用情况的变化"],keyPoints:["虚拟列表的渲染时间相对稳定，不随数据量线性增长","DOM节点数量在虚拟模式下保持恒定","大数据量时虚拟列表的滚动更加流畅","内存占用在虚拟模式下显著降低"],commonTraps:["在小数据量时过度使用虚拟化，增加复杂度","忽略初始化时间的性能开销","未考虑不同设备性能的差异","缺少性能监控和优化指标"],solutions:["根据实际数据量选择合适的渲染策略","优化虚拟列表的初始化逻辑","在不同设备上进行性能测试","建立完善的性能监控体系"],importantTips:["性能对比应该在真实的业务场景中进行","考虑用户设备的性能差异和网络条件","同时测试初始渲染、滚动、更新等多个场景","在不同设备和浏览器上进行性能测试"]}],tutorial:{concepts:["虚拟列表的核心原理：只渲染可见区域的DOM节点","滚动事件监听：实时计算可见区域的起始和结束索引","绝对定位布局：使用position: absolute精确控制项目位置","缓冲区机制：在可见区域前后额外渲染几个项目，提升滚动体验","动态高度处理：使用ResizeObserver测量实际高度，支持不同高度的项目","性能优化策略：useMemo、useCallback、React.memo等优化手段"],steps:["创建固定高度的滚动容器，设置overflow: auto","监听容器的scroll事件，获取当前滚动位置","根据滚动位置和项目高度计算可见区域的索引范围","使用绝对定位渲染可见区域内的项目","设置容器内部的总高度，确保滚动条正确显示","优化滚动事件处理，使用requestAnimationFrame防抖","处理边界情况，如空数据、极端滚动位置等","集成到实际业务场景，添加加载状态和错误处理","进行性能测试和监控，持续优化用户体验"],tips:["虚拟列表适用于数据量大（通常>1000条）且列表项相对简单的场景","保持列表项高度一致可以大大简化计算逻辑和提升性能","合理设置缓冲区大小，过小会导致滚动时出现白屏，过大会增加渲染开销","使用稳定的key值（如数据的唯一ID）而不是数组索引，避免不必要的重渲染","在动态高度场景下，提供合理的预估高度可以减少布局抖动","结合懒加载、分页等技术可以进一步提升大数据场景的用户体验","在移动端需要特别注意触摸滚动的性能优化和用户体验","定期进行性能监控，确保虚拟化带来的性能提升符合预期"]},interview:{questions:[{question:"什么是虚拟列表？它解决了什么问题？",answer:'虚拟列表是一种性能优化技术，通过只渲染用户当前可见的列表项来处理大量数据的展示。它解决的主要问题包括：1）DOM节点过多导致的性能问题；2）大量数据渲染时的内存占用；3）滚动卡顿和页面响应慢的问题。虚拟列表通过"按需渲染"策略，使DOM节点数量保持恒定，不随数据量增长。'},{question:"虚拟列表的核心实现原理是什么？",answer:"虚拟列表的核心实现包括几个关键步骤：1）创建固定高度的滚动容器；2）监听滚动事件，获取scrollTop值；3）根据scrollTop、项目高度和容器高度计算可见区域的起始和结束索引；4）只渲染可见区域内的项目，使用绝对定位控制位置；5）设置内部容器的总高度，确保滚动条正确显示。关键是通过数学计算确定哪些项目需要渲染，而不是渲染所有数据。"},{question:"如何处理动态高度的虚拟列表？",answer:"动态高度虚拟列表的实现更加复杂：1）使用ResizeObserver监听每个项目的高度变化；2）维护一个高度缓存数组，记录每个项目的实际高度；3）通过累积计算得到每个项目的绝对位置偏移；4）使用二分查找等算法优化可见区域的计算性能；5）提供合理的预估高度，减少初始渲染的布局抖动。这种方式虽然复杂，但能支持内容高度不一致的场景。"},{question:"虚拟列表有哪些性能优化策略？",answer:"虚拟列表的性能优化策略包括：1）使用useMemo缓存计算结果，如可见区域、项目位置等；2）使用useCallback缓存事件处理函数，避免不必要的重渲染；3）使用React.memo优化列表项组件；4）合理设置缓冲区大小，平衡性能和用户体验；5）使用requestAnimationFrame优化滚动事件处理；6）避免在渲染函数中进行复杂计算；7）使用稳定的key值；8）结合懒加载等技术进一步优化。"},{question:"虚拟列表适用于哪些场景？有什么限制？",answer:"虚拟列表适用场景：1）大数据量列表展示（通常>1000条）；2）列表项结构相对简单且高度一致；3）需要流畅滚动体验的场景；4）内存敏感的应用。限制包括：1）实现复杂度较高，特别是动态高度场景；2）不适合小数据量，会增加不必要的复杂度；3）对于复杂的列表项（如包含大量交互元素）效果有限；4）需要额外处理焦点管理、可访问性等问题；5）在某些边界情况下可能出现布局问题。"}],keyPoints:["虚拟列表通过只渲染可见项目实现性能优化","核心是滚动监听 + 可见区域计算 + 绝对定位渲染","动态高度需要ResizeObserver + 高度缓存 + 位置计算","性能优化需要合理使用React优化API和缓存策略","适用于大数据量、简单列表项的场景，需要权衡复杂度和收益","虚拟化适合数据量大、列表项相对简单的场景","需要注意滚动事件优化、组件记忆化等性能优化技巧","在移动端需要特别考虑触摸滚动的性能和体验"]},bestPractices:{dos:["在数据量超过1000条时考虑使用虚拟列表","确保容器有明确的高度限制，避免虚拟化失效","使用useMemo和useCallback优化计算和事件处理","合理设置缓冲区大小，通常3-10个项目","使用稳定的唯一标识作为key值","监控实际DOM节点数量，确保虚拟化生效","结合懒加载技术优化图片和复杂内容","定期进行性能测试，确保优化效果","考虑用户设备性能差异，提供降级方案","实现合理的加载状态和错误边界处理"],donts:["不要在小数据量（<100条）时过度使用虚拟化","不要忘记设置容器的固定高度，导致虚拟化失效","不要在渲染函数中使用内联函数或复杂计算","不要使用不稳定的key值，如数组索引","不要设置过大的缓冲区，增加不必要开销","不要忽略滚动事件的性能优化","不要在动态高度场景下忽略预估高度的重要性","不要忘记处理边界情况和错误状态","不要在生产环境中缺少性能监控","不要忽略移动端的特殊滚动行为"],patterns:["容器固定高度 + 内容绝对定位的基础虚拟化模式","滚动监听 + 可见区域计算 + DOM复用的核心模式","缓冲区机制提升用户体验的优化模式","useMemo + useCallback 的性能优化模式","ResizeObserver + 高度缓存的动态高度处理模式","二分查找优化可见区域计算的算法模式","懒加载 + 虚拟化的组合优化模式","分页加载 + 虚拟化的大数据处理模式","表头固定 + 内容虚拟化的表格展示模式","性能监控 + 动态调优的持续优化模式"]}};function N(){return e.jsx(w,{...P})}export{N as default};
