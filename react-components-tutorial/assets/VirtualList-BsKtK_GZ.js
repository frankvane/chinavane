import{j as e,r as i}from"./index-B_BA6J2H.js";import{C as k}from"./ComponentTemplate-CRmS-rAK.js";const M=({items:t,itemHeight:n,containerHeight:o,renderItem:s,overscan:d=5})=>{const[r,x]=i.useState(0),m=i.useRef(null),g=i.useCallback(p=>{x(p.currentTarget.scrollTop)},[]),u=i.useMemo(()=>{const p=Math.max(0,Math.floor(r/n)-d),c=Math.min(t.length-1,Math.ceil((r+o)/n)+d);return{startIndex:p,endIndex:c}},[r,n,o,t.length,d]),f=i.useMemo(()=>{const p=[];for(let c=u.startIndex;c<=u.endIndex;c++)p.push({index:c,item:t[c],top:c*n});return p},[t,u,n]),b=t.length*n;return e.jsx("div",{ref:m,style:{height:o,overflow:"auto",position:"relative"},onScroll:g,children:e.jsx("div",{style:{height:b,position:"relative"},children:f.map(({index:p,item:c,top:y})=>e.jsx("div",{style:{position:"absolute",top:y,left:0,right:0,height:n},children:s(c,p)},p))})})},R=()=>{const[t,n]=i.useState(1e4),o=i.useMemo(()=>Array.from({length:t},(d,r)=>({id:r,name:`Item ${r}`,value:Math.random()*1e3})),[t]),s=i.useCallback((d,r)=>e.jsxs("div",{style:{padding:"10px",borderBottom:"1px solid #eee",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:d.name}),e.jsxs("span",{children:["Value: ",d.value.toFixed(2)]})]}),[]);return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"10px"},children:e.jsxs("label",{children:["数据量:",e.jsxs("select",{value:t,onChange:d=>n(Number(d.target.value)),style:{marginLeft:"10px"},children:[e.jsx("option",{value:1e3,children:"1,000 条"}),e.jsx("option",{value:5e3,children:"5,000 条"}),e.jsx("option",{value:1e4,children:"10,000 条"}),e.jsx("option",{value:5e4,children:"50,000 条"})]})]})}),e.jsx(M,{items:o,itemHeight:50,containerHeight:400,renderItem:s,overscan:5})]})},T=({items:t,containerHeight:n,renderItem:o,estimatedItemHeight:s=50,overscan:d=5})=>{const[r,x]=i.useState(0),[m,g]=i.useState([]),u=i.useRef(null),f=i.useRef([]),b=i.useCallback(l=>{x(l.currentTarget.scrollTop)},[]),p=i.useCallback((l,a)=>{g(h=>{const v=[...h];return v[l]=a,v})},[]),c=i.useMemo(()=>{const l=[0];for(let a=1;a<t.length;a++){const h=m[a-1]||s;l[a]=l[a-1]+h}return l},[t.length,m,s]),y=i.useMemo(()=>{const l=t.length-1,a=c[l]||0,h=m[l]||s;return a+h},[t.length,c,m,s]),j=i.useMemo(()=>{let l=0,a=t.length-1;for(let h=0;h<c.length;h++)if(c[h]>=r){l=Math.max(0,h-d);break}for(let h=l;h<c.length;h++)if(c[h]>=r+n){a=Math.min(t.length-1,h+d);break}return{startIndex:l,endIndex:a}},[r,n,c,t.length,d]),I=i.useMemo(()=>{const l=[];for(let a=j.startIndex;a<=j.endIndex;a++)l.push({index:a,item:t[a],top:c[a]||0});return l},[t,j,c]);return e.jsx("div",{ref:u,style:{height:n,overflow:"auto",position:"relative"},onScroll:b,children:e.jsx("div",{style:{height:y,position:"relative"},children:I.map(({index:l,item:a,top:h})=>e.jsx("div",{ref:v=>f.current[l]=v,style:{position:"absolute",top:h,left:0,right:0},children:e.jsx(H,{onResize:v=>p(l,v),children:o(a,l)})},l))})})},H=({children:t,onResize:n})=>{const o=i.useRef(null);return i.useEffect(()=>{if(!o.current)return;const s=new window.ResizeObserver(d=>{for(const r of d)n(r.contentRect.height)});return s.observe(o.current),()=>{s.disconnect()}},[n]),e.jsx("div",{ref:o,children:t})},w=()=>{const t=i.useMemo(()=>Array.from({length:1e3},(o,s)=>({id:s,title:`动态内容 ${s}`,content:`这是第${s}项的内容，`.repeat(Math.floor(Math.random()*10)+1)})),[]),n=i.useCallback((o,s)=>e.jsxs("div",{style:{padding:"15px",borderBottom:"1px solid #eee",backgroundColor:s%2===0?"#f9f9f9":"#fff"},children:[e.jsx("h4",{style:{margin:"0 0 10px 0",color:"#333"},children:o.title}),e.jsx("p",{style:{margin:0,lineHeight:"1.5",color:"#666"},children:o.content})]}),[]);return e.jsx(T,{items:t,containerHeight:400,renderItem:n,estimatedItemHeight:80,overscan:3})},C=({data:t,columns:n,rowHeight:o,containerHeight:s})=>{const d=i.useCallback((r,x)=>e.jsx("div",{style:{display:"flex",borderBottom:"1px solid #eee",backgroundColor:x%2===0?"#f9f9f9":"#fff"},children:n.map(m=>e.jsx("div",{style:{width:m.width,padding:"10px",display:"flex",alignItems:"center",borderRight:"1px solid #eee"},children:m.render?m.render(r[m.key],r,x):r[m.key]},m.key))}),[n]);return e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",backgroundColor:"#f0f0f0",borderBottom:"2px solid #ddd",fontWeight:"bold"},children:n.map(r=>e.jsx("div",{style:{width:r.width,padding:"12px 10px",borderRight:"1px solid #ddd"},children:r.title},r.key))}),e.jsx(M,{items:t,itemHeight:o,containerHeight:s,renderItem:d,overscan:5})]})},O=()=>{const t=i.useMemo(()=>Array.from({length:1e4},(o,s)=>({id:s,name:`用户 ${s}`,email:`user${s}@example.com`,age:Math.floor(Math.random()*50)+20,city:["北京","上海","广州","深圳","杭州"][Math.floor(Math.random()*5)],score:Math.floor(Math.random()*100)})),[]),n=[{key:"id",title:"ID",width:80},{key:"name",title:"姓名",width:120},{key:"email",title:"邮箱",width:200},{key:"age",title:"年龄",width:80},{key:"city",title:"城市",width:100},{key:"score",title:"评分",width:100,render:o=>e.jsx("span",{style:{color:o>=80?"#52c41a":o>=60?"#faad14":"#f5222d"},children:o})}];return e.jsx(C,{data:t,columns:n,rowHeight:50,containerHeight:400})},S=()=>{const[t,n]=i.useState("virtual"),[o,s]=i.useState(1e3),[d,r]=i.useState(0),x=i.useMemo(()=>Array.from({length:o},(g,u)=>({id:u,name:`Item ${u}`,description:`这是第${u}个项目的描述信息`})),[o]),m=i.useCallback((g,u)=>e.jsxs("div",{style:{padding:"10px",borderBottom:"1px solid #eee",backgroundColor:u%2===0?"#f9f9f9":"#fff"},children:[e.jsx("div",{style:{fontWeight:"bold"},children:g.name}),e.jsx("div",{style:{color:"#666",fontSize:"14px"},children:g.description})]}),[]);return i.useEffect(()=>{const g=performance.now();requestAnimationFrame(()=>{const u=performance.now();r(u-g)})},[t,o]),e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("div",{style:{marginBottom:"10px"},children:e.jsxs("label",{children:["渲染模式:",e.jsxs("select",{value:t,onChange:g=>n(g.target.value),style:{marginLeft:"10px"},children:[e.jsx("option",{value:"virtual",children:"虚拟列表"}),e.jsx("option",{value:"normal",children:"普通列表"})]})]})}),e.jsx("div",{style:{marginBottom:"10px"},children:e.jsxs("label",{children:["数据量:",e.jsxs("select",{value:o,onChange:g=>s(Number(g.target.value)),style:{marginLeft:"10px"},children:[e.jsx("option",{value:100,children:"100 条"}),e.jsx("option",{value:500,children:"500 条"}),e.jsx("option",{value:1e3,children:"1,000 条"}),e.jsx("option",{value:5e3,children:"5,000 条"}),e.jsx("option",{value:1e4,children:"10,000 条"})]})]})}),e.jsxs("div",{style:{padding:"10px",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"14px"},children:["渲染时间: ",d.toFixed(2),"ms | 渲染模式: ",t==="virtual"?"虚拟列表":"普通列表"," | 数据量: ",o.toLocaleString()," 条"]})]}),t==="virtual"?e.jsx(M,{items:x,itemHeight:60,containerHeight:400,renderItem:m,overscan:5}):e.jsx("div",{style:{height:400,overflow:"auto",border:"1px solid #ddd"},children:x.map((g,u)=>e.jsx("div",{children:m(g,u)},g.id))})]})},D={title:"虚拟列表 Virtual List",description:"虚拟列表是一种性能优化技术，通过只渲染可见区域的列表项来处理大量数据的展示，避免DOM节点过多导致的性能问题。",overview:e.jsxs("div",{children:[e.jsx("p",{children:'虚拟列表（Virtual List）是前端性能优化的重要技术之一，特别适用于需要展示大量数据的场景。 它通过"按需渲染"的策略，只渲染用户当前可见的列表项，从而避免创建大量DOM节点导致的性能问题。'}),e.jsx("p",{children:e.jsx("strong",{children:"核心优势："})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"性能稳定："}),"DOM节点数量恒定，不随数据量增长"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"内存友好："}),"避免创建大量DOM节点，减少内存占用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"滚动流畅："}),"即使数万条数据也能保持60fps的滚动体验"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"用户体验："}),"支持快速跳转和无限滚动功能"]})]})]}),examples:[{title:"基础虚拟列表",component:e.jsx(R,{}),description:"展示固定高度虚拟列表的基本实现，支持大量数据的高性能渲染。",observationPoints:["观察不同数据量下的渲染性能差异","注意滚动时DOM节点数量保持恒定","体验大数据量下的流畅滚动效果","查看开发者工具中的实际DOM结构"],keyPoints:["只渲染可见区域的列表项，DOM节点数量固定","使用绝对定位精确控制每个项目的位置","通过滚动事件实时计算可见区域范围","缓冲区机制提升滚动体验，减少白屏现象"],commonTraps:["忘记设置容器固定高度，导致虚拟化失效","使用不稳定的key值，如数组索引，影响性能","在渲染函数中进行复杂计算，导致滚动卡顿","缓冲区设置过大，增加不必要的渲染开销"],solutions:["确保容器有明确的height样式，避免高度自适应","使用数据的唯一标识作为key，如id字段","将复杂计算移到useMemo中，避免重复计算","根据实际需求调整overscan参数，通常3-10个项目"],importantTips:["虚拟列表适合数据量大于1000条的场景","列表项高度保持一致可以简化计算逻辑","使用React.memo优化列表项组件的渲染","监控实际DOM节点数量，确保虚拟化生效"],codeExample:{title:"基础虚拟列表实现",language:"tsx",code:`const VirtualList: React.FC<VirtualListProps> = ({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 5
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 滚动事件处理
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop); // [!code highlight]
  }, []);

  // 计算可见区域
  const visibleRange = useMemo(() => {
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan); // [!code highlight]
    const endIndex = Math.min( // [!code highlight]
      items.length - 1, // [!code highlight]
      Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan // [!code highlight]
    ); // [!code highlight]
    return { startIndex, endIndex };
  }, [scrollTop, itemHeight, containerHeight, items.length, overscan]);

  // 计算可见项目
  const visibleItems = useMemo(() => {
    const result = [];
    for (let i = visibleRange.startIndex; i <= visibleRange.endIndex; i++) {
      result.push({
        index: i,
        item: items[i],
        top: i * itemHeight // [!code highlight]
      });
    }
    return result;
  }, [items, visibleRange, itemHeight]);

  const totalHeight = items.length * itemHeight; // [!code highlight]

  return (
    <div
      ref={containerRef}
      style={{
        height: containerHeight, // [!code highlight]
        overflow: 'auto',
        position: 'relative'
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}> // [!code highlight]
        {visibleItems.map(({ index, item, top }) => (
          <div
            key={index}
            style={{
              position: 'absolute', // [!code highlight]
              top, // [!code highlight]
              left: 0,
              right: 0,
              height: itemHeight
            }}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
};`,highlightedLines:[11,15,16,17,18,19,30,36,44,50]}},{title:"动态高度虚拟列表",component:e.jsx(w,{}),description:"处理不同高度列表项的虚拟列表实现，支持动态高度测量和位置计算。",observationPoints:["观察不同高度项目的正确定位","注意高度测量和缓存机制","体验动态高度下的滚动效果","查看ResizeObserver的使用"],keyPoints:["使用ResizeObserver动态测量每个项目的实际高度","维护高度缓存数组，避免重复测量","通过累积计算确定每个项目的绝对位置","使用二分查找优化可见区域的计算性能"],commonTraps:["初始渲染时高度测量不准确，导致位置偏移","频繁的高度变化导致性能问题","滚动时位置计算错误，出现跳跃现象","未正确处理异步高度更新的时序问题"],solutions:["提供合理的预估高度，减少初始渲染的位置偏移","使用防抖机制减少频繁的高度更新","实现稳定的位置计算算法，确保滚动连续性","使用useCallback确保高度更新回调的稳定性"],importantTips:["动态高度虚拟列表实现复杂度较高，需要权衡性能收益","预估高度应该接近实际平均高度，提高计算准确性","考虑使用成熟的库如react-window处理复杂场景","在移动端特别注意触摸滚动的性能优化","使用React.memo优化列表项组件的渲染性能","实现合理的错误边界处理机制"],codeExample:{title:"动态高度虚拟列表实现",language:"tsx",code:`const DynamicVirtualList: React.FC<DynamicVirtualListProps> = ({
  items,
  containerHeight,
  renderItem,
  estimatedItemHeight = 50,
  overscan = 5
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [itemHeights, setItemHeights] = useState<number[]>([]); // [!code highlight]
  const containerRef = useRef<HTMLDivElement>(null);

  const updateItemHeight = useCallback((index: number, height: number) => { // [!code highlight]
    setItemHeights(prev => {
      const newHeights = [...prev];
      newHeights[index] = height;
      return newHeights;
    });
  }, []);

  // 计算每个项目的偏移位置
  const itemOffsets = useMemo(() => { // [!code highlight]
    const offsets = [0];
    for (let i = 1; i < items.length; i++) {
      const prevHeight = itemHeights[i - 1] || estimatedItemHeight;
      offsets[i] = offsets[i - 1] + prevHeight;
    }
    return offsets;
  }, [items.length, itemHeights, estimatedItemHeight]);

  // 二分查找可见区域
  const visibleRange = useMemo(() => { // [!code highlight]
    let startIndex = 0;
    let endIndex = items.length - 1;

    for (let i = 0; i < itemOffsets.length; i++) {
      if (itemOffsets[i] >= scrollTop) {
        startIndex = Math.max(0, i - overscan);
        break;
      }
    }

    for (let i = startIndex; i < itemOffsets.length; i++) {
      if (itemOffsets[i] >= scrollTop + containerHeight) {
        endIndex = Math.min(items.length - 1, i + overscan);
        break;
      }
    }

    return { startIndex, endIndex };
  }, [scrollTop, containerHeight, itemOffsets, items.length, overscan]);

  return (
    <div
      ref={containerRef}
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map(({ index, item, top }) => (
          <div key={index} style={{ position: 'absolute', top }}>
            <ResizeObserver onResize={(height) => updateItemHeight(index, height)}> // [!code highlight]
              {renderItem(item, index)}
            </ResizeObserver>
          </div>
        ))}
      </div>
    </div>
  );
};`,highlightedLines:[9,12,21,31,58]}},{title:"虚拟表格",component:e.jsx(O,{}),description:"结合虚拟列表技术实现的高性能表格组件，支持大量数据的表格展示。",observationPoints:["观察表头固定，内容区域虚拟化的效果","注意表格列的对齐和样式处理","体验大数据量表格的滚动性能","查看自定义渲染函数的使用"],keyPoints:["表头固定，只对表格内容进行虚拟化处理","使用flexbox布局确保列宽和对齐的一致性","支持自定义列渲染函数，满足复杂展示需求","保持表格的语义化结构和可访问性"],commonTraps:["表头和内容列宽不一致，导致对齐问题","忘记处理表格的边框和间距样式","在自定义渲染函数中进行复杂计算","未考虑表格的响应式布局需求"],solutions:["使用相同的列宽配置确保表头和内容对齐","统一处理表格的样式，使用CSS变量管理","将复杂计算移到useMemo中，优化渲染性能","实现响应式的列宽调整和隐藏机制"],importantTips:["虚拟表格适合展示结构化的大量数据","合理设计列宽，避免内容溢出或截断","考虑添加排序、筛选等交互功能","在移动端考虑横向滚动的用户体验"],codeExample:{title:"虚拟表格实现",language:"tsx",code:`const VirtualTable: React.FC<VirtualTableProps> = ({
  data,
  columns,
  rowHeight,
  containerHeight
}) => {
  const renderRow = useCallback((item: any, index: number) => ( // [!code highlight]
    <div style={{
      display: 'flex',
      borderBottom: '1px solid #eee',
      backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff'
    }}>
      {columns.map(column => (
        <div
          key={column.key}
          style={{
            width: column.width, // [!code highlight]
            padding: '10px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {column.render  // [!code highlight]
            ? column.render(item[column.key], item, index)
            : item[column.key]
          }
        </div>
      ))}
    </div>
  ), [columns]);

  return (
    <div>
      {/* 固定表头 */}
      <div style={{ // [!code highlight]
        display: 'flex',
        backgroundColor: '#f0f0f0',
        borderBottom: '2px solid #ddd',
        fontWeight: 'bold'
      }}>
        {columns.map(column => (
          <div key={column.key} style={{ width: column.width, padding: '12px 10px' }}>
            {column.title}
          </div>
        ))}
      </div>
      
      {/* 虚拟化内容 */}
      <VirtualList // [!code highlight]
        items={data}
        itemHeight={rowHeight}
        containerHeight={containerHeight}
        renderItem={renderRow}
      />
    </div>
  );
};`,highlightedLines:[7,17,23,33,45]}},{title:"性能对比",component:e.jsx(S,{}),description:"对比虚拟列表和普通列表的性能差异，直观展示虚拟化技术的优势。",observationPoints:["对比不同数据量下两种模式的渲染时间","观察DOM节点数量的差异","体验滚动性能的明显区别","注意内存使用情况的变化"],keyPoints:["虚拟列表的渲染时间相对稳定，不随数据量线性增长","DOM节点数量在虚拟模式下保持恒定","大数据量时虚拟列表的滚动更加流畅","内存占用在虚拟模式下显著降低"],commonTraps:["在小数据量时过度使用虚拟化，增加复杂度","忽略初始化时间的性能开销","未考虑不同设备性能的差异","缺少性能监控和优化指标"],solutions:["根据实际数据量选择合适的渲染策略","优化虚拟列表的初始化逻辑","在不同设备上进行性能测试","建立完善的性能监控体系"],importantTips:["性能对比应该在真实的业务场景中进行","考虑用户设备的性能差异和网络条件","同时测试初始渲染、滚动、更新等多个场景","在不同设备和浏览器上进行性能测试"],codeExample:{title:"性能对比实现",language:"tsx",code:`const PerformanceComparison: React.FC = () => {
  const [renderMode, setRenderMode] = useState<'normal' | 'virtual'>('virtual');
  const [itemCount, setItemCount] = useState(1000);
  const [renderTime, setRenderTime] = useState(0); // [!code highlight]

  useEffect(() => {
    const startTime = performance.now(); // [!code highlight]
    
    requestAnimationFrame(() => { // [!code highlight]
      const endTime = performance.now();
      setRenderTime(endTime - startTime);
    });
  }, [renderMode, itemCount]);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            渲染模式: 
            <select 
              value={renderMode} 
              onChange={(e) => setRenderMode(e.target.value as 'normal' | 'virtual')} // [!code highlight]
            >
              <option value="virtual">虚拟列表</option>
              <option value="normal">普通列表</option>
            </select>
          </label>
        </div>
        
        <div style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
          渲染时间: {renderTime.toFixed(2)}ms | // [!code highlight]
          渲染模式: {renderMode === 'virtual' ? '虚拟列表' : '普通列表'}
        </div>
      </div>

      {renderMode === 'virtual' ? ( // [!code highlight]
        <VirtualList
          items={items}
          itemHeight={60}
          containerHeight={400}
          renderItem={renderItem}
        />
      ) : (
        <div style={{ height: 400, overflow: 'auto' }}>
          {items.map((item, index) => (
            <div key={item.id}>{renderItem(item, index)}</div>
          ))}
        </div>
      )}
    </div>
  );
};`,highlightedLines:[4,7,9,23,32,37]}}],tutorial:{concepts:["虚拟列表的核心原理：只渲染可见区域的DOM节点","滚动事件监听：实时计算可见区域的起始和结束索引","绝对定位布局：使用position: absolute精确控制项目位置","缓冲区机制：在可见区域前后额外渲染几个项目，提升滚动体验","动态高度处理：使用ResizeObserver测量实际高度，支持不同高度的项目","性能优化策略：useMemo、useCallback、React.memo等优化手段"],steps:["创建固定高度的滚动容器，设置overflow: auto","监听容器的scroll事件，获取当前滚动位置","根据滚动位置和项目高度计算可见区域的索引范围","使用绝对定位渲染可见区域内的项目","设置容器内部的总高度，确保滚动条正确显示","优化滚动事件处理，使用requestAnimationFrame防抖","处理边界情况，如空数据、极端滚动位置等","集成到实际业务场景，添加加载状态和错误处理","进行性能测试和监控，持续优化用户体验"],tips:["虚拟列表适用于数据量大（通常>1000条）且列表项相对简单的场景","保持列表项高度一致可以大大简化计算逻辑和提升性能","合理设置缓冲区大小，过小会导致滚动时出现白屏，过大会增加渲染开销","使用稳定的key值（如数据的唯一ID）而不是数组索引，避免不必要的重渲染","在动态高度场景下，提供合理的预估高度可以减少布局抖动","结合懒加载、分页等技术可以进一步提升大数据场景的用户体验","在移动端需要特别注意触摸滚动的性能优化和用户体验","定期进行性能监控，确保虚拟化带来的性能提升符合预期"]},interview:{questions:[{question:"什么是虚拟列表？它解决了什么问题？",answer:'虚拟列表是一种性能优化技术，通过只渲染用户当前可见的列表项来处理大量数据的展示。它解决的主要问题包括：1）DOM节点过多导致的性能问题；2）大量数据渲染时的内存占用；3）滚动卡顿和页面响应慢的问题。虚拟列表通过"按需渲染"策略，使DOM节点数量保持恒定，不随数据量增长。'},{question:"虚拟列表的核心实现原理是什么？",answer:"虚拟列表的核心实现包括几个关键步骤：1）创建固定高度的滚动容器；2）监听滚动事件，获取scrollTop值；3）根据scrollTop、项目高度和容器高度计算可见区域的起始和结束索引；4）只渲染可见区域内的项目，使用绝对定位控制位置；5）设置内部容器的总高度，确保滚动条正确显示。关键是通过数学计算确定哪些项目需要渲染，而不是渲染所有数据。"},{question:"如何处理动态高度的虚拟列表？",answer:"动态高度虚拟列表的实现更加复杂：1）使用ResizeObserver监听每个项目的高度变化；2）维护一个高度缓存数组，记录每个项目的实际高度；3）通过累积计算得到每个项目的绝对位置偏移；4）使用二分查找等算法优化可见区域的计算性能；5）提供合理的预估高度，减少初始渲染的布局抖动。这种方式虽然复杂，但能支持内容高度不一致的场景。"},{question:"虚拟列表有哪些性能优化策略？",answer:"虚拟列表的性能优化策略包括：1）使用useMemo缓存计算结果，如可见区域、项目位置等；2）使用useCallback缓存事件处理函数，避免不必要的重渲染；3）使用React.memo优化列表项组件；4）合理设置缓冲区大小，平衡性能和用户体验；5）使用requestAnimationFrame优化滚动事件处理；6）避免在渲染函数中进行复杂计算；7）使用稳定的key值；8）结合懒加载等技术进一步优化。"},{question:"虚拟列表适用于哪些场景？有什么限制？",answer:"虚拟列表适用场景：1）大数据量列表展示（通常>1000条）；2）列表项结构相对简单且高度一致；3）需要流畅滚动体验的场景；4）内存敏感的应用。限制包括：1）实现复杂度较高，特别是动态高度场景；2）不适合小数据量，会增加不必要的复杂度；3）对于复杂的列表项（如包含大量交互元素）效果有限；4）需要额外处理焦点管理、可访问性等问题；5）在某些边界情况下可能出现布局问题。"}],keyPoints:["虚拟列表通过只渲染可见项目实现性能优化","核心是滚动监听 + 可见区域计算 + 绝对定位渲染","动态高度需要ResizeObserver + 高度缓存 + 位置计算","性能优化需要合理使用React优化API和缓存策略","适用于大数据量、简单列表项的场景，需要权衡复杂度和收益","虚拟化适合数据量大、列表项相对简单的场景","需要注意滚动事件优化、组件记忆化等性能优化技巧","在移动端需要特别考虑触摸滚动的性能和体验"]},bestPractices:{dos:["在数据量超过1000条时考虑使用虚拟列表","确保容器有明确的高度限制，避免虚拟化失效","使用useMemo和useCallback优化计算和事件处理","合理设置缓冲区大小，通常3-10个项目","使用稳定的唯一标识作为key值","监控实际DOM节点数量，确保虚拟化生效","结合懒加载技术优化图片和复杂内容","定期进行性能测试，确保优化效果","考虑用户设备性能差异，提供降级方案","实现合理的加载状态和错误边界处理"],donts:["不要在小数据量（<100条）时过度使用虚拟化","不要忘记设置容器的固定高度，导致虚拟化失效","不要在渲染函数中使用内联函数或复杂计算","不要使用不稳定的key值，如数组索引","不要设置过大的缓冲区，增加不必要开销","不要忽略滚动事件的性能优化","不要在动态高度场景下忽略预估高度的重要性","不要忘记处理边界情况和错误状态","不要在生产环境中缺少性能监控","不要忽略移动端的特殊滚动行为"],patterns:["容器固定高度 + 内容绝对定位的基础虚拟化模式","滚动监听 + 可见区域计算 + DOM复用的核心模式","缓冲区机制提升用户体验的优化模式","useMemo + useCallback 的性能优化模式","ResizeObserver + 高度缓存的动态高度处理模式","二分查找优化可见区域计算的算法模式","懒加载 + 虚拟化的组合优化模式","分页加载 + 虚拟化的大数据处理模式","表头固定 + 内容虚拟化的表格展示模式","性能监控 + 动态调优的持续优化模式"]}};function P(){return e.jsx(k,{...D})}export{P as default};
