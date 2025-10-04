const n=`import * as ReactWindow from "react-window";\r
\r
import {\r
  LazyLoadImageCore,\r
  createConcurrencyControlPlugin,\r
  createEventLoggerPlugin,\r
  createFetchLoaderPlugin,\r
  createIDBCachePlugin,\r
  createMemoryCachePlugin,\r
  createOverlayInfoPlugin,\r
  createPreconnectPlugin,\r
  createProgressOverlayPlugin,\r
  createScrollIdlePlugin,\r
  createSkeletonPlugin,\r
  createViewportDwellPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const LazyImage = withPlugins(LazyLoadImageCore as any, [\r
  createMemoryCachePlugin({ maxEntries: 300, ttlMs: 60 * 60 * 1000 }),\r
  createIDBCachePlugin({ ttlMs: 7 * 24 * 60 * 60 * 1000 }),\r
  // 双向网格滚动：容器级监听 + 双向轴向标注\r
  createScrollIdlePlugin({\r
    idleMs: 160,\r
    maxWaitMs: 1200,\r
    onlyWhenIntersecting: true,\r
    target: "container",\r
    axis: "both",\r
  }),\r
  // 视口驻留阈值：网格场景下避免短暂露出就发起请求\r
  createViewportDwellPlugin({\r
    dwellMs: 140,\r
    maxWaitMs: 900,\r
    onlyWhenIntersecting: true,\r
  }),\r
  // 并发闸控，避免停顿后瞬时触发过多请求\r
  createConcurrencyControlPlugin({ maxConcurrent: 6 }),\r
  createFetchLoaderPlugin({ enabled: true }),\r
  createProgressOverlayPlugin({\r
    showWhen: "loading",\r
    height: 3,\r
    color: "#2196f3",\r
    showPercentText: true,\r
  }),\r
  createSkeletonPlugin({\r
    type: "shimmer",\r
    showWhen: "loading",\r
    borderRadius: 6,\r
    zIndex: 1,\r
  }),\r
  createOverlayInfoPlugin({\r
    content: (ctx) =>\r
      \`Grid • \${new URL(ctx.src, window.location.origin).pathname}\`,\r
    position: "bottom",\r
    background: "rgba(0,0,0,0.35)",\r
    color: "#fff",\r
    showWhen: "loading",\r
    zIndex: 4,\r
  }),\r
  createPreconnectPlugin({ domains: ["https://picsum.photos"] }),\r
  createEventLoggerPlugin({ enabled: true, prefix: "[GRID-Demo]" }),\r
]);\r
\r
const RW = ReactWindow as any;\r
const GridNew = RW.Grid;\r
const GridOld = RW.FixedSizeGrid;\r
\r
export default function VirtualGridDemo() {\r
  const gridOuterRef = React.useRef<HTMLDivElement | null>(null);\r
  const gridRef = React.useRef<any>(null);\r
  const [rootEl, setRootEl] = React.useState<HTMLElement | undefined>(\r
    undefined\r
  );\r
  const cols = 4;\r
  const rows = 60;\r
  const [items] = React.useState(\r
    Array.from({ length: cols * rows }).map((_, i) => ({\r
      id: i,\r
      src: \`https://picsum.photos/seed/virt-g-\${i}/800/600\`,\r
    }))\r
  );\r
\r
  React.useEffect(() => {\r
    const api = gridRef.current;\r
    if (api) {\r
      const el =\r
        api?.getElement?.() ||\r
        api?.getOuterElement?.() ||\r
        api?.getRootElement?.() ||\r
        api?._outerRef?.current ||\r
        api?._outerElement;\r
      if (el instanceof HTMLElement) setRootEl(el);\r
    }\r
  }, []);\r
\r
  const Cell = ({\r
    columnIndex,\r
    rowIndex,\r
    style,\r
  }: {\r
    columnIndex: number;\r
    rowIndex: number;\r
    style: React.CSSProperties;\r
  }) => {\r
    const idx = rowIndex * cols + columnIndex;\r
    const item = items[idx];\r
    return (\r
      <div style={{ ...style, padding: 8 }}>\r
        <div\r
          style={{\r
            position: "relative",\r
            width: "100%",\r
            height: "100%",\r
            borderRadius: 8,\r
            overflow: "hidden",\r
            boxShadow: "0 1px 6px rgba(0,0,0,0.1)",\r
          }}\r
        >\r
          <LazyImage\r
            src={item.src}\r
            loading="lazy"\r
            root={rootEl || gridOuterRef.current || undefined}\r
            rootMargin="240px"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
          />\r
        </div>\r
      </div>\r
    );\r
  };\r
\r
  return (\r
    <DemoPage\r
      title="LazyLoadImagePlugin • 双向网格虚拟滚动示例（react-window）"\r
      description="结合 react-window 的双向网格虚拟滚动，优化大量图片加载性能"\r
    >\r
      <div\r
        style={{\r
          border: "1px solid #eee",\r
          borderRadius: 8,\r
          overflow: "hidden",\r
        }}\r
      >\r
        {GridNew ? (\r
          <GridNew\r
            cellComponent={({\r
              columnIndex,\r
              rowIndex,\r
              style,\r
            }: {\r
              columnIndex: number;\r
              rowIndex: number;\r
              style: React.CSSProperties;\r
            }) => (\r
              <Cell\r
                columnIndex={columnIndex}\r
                rowIndex={rowIndex}\r
                style={style}\r
              />\r
            )}\r
            columnCount={cols}\r
            columnWidth={240}\r
            rowCount={rows}\r
            rowHeight={200}\r
            gridRef={gridRef}\r
            cellProps={{ items, cols, rows }}\r
            style={{ height: 640, width: 960 }}\r
          />\r
        ) : (\r
          <GridOld\r
            height={640}\r
            width={960}\r
            columnCount={cols}\r
            columnWidth={240}\r
            rowCount={rows}\r
            rowHeight={200}\r
            outerRef={gridOuterRef}\r
            overscanColumnsCount={2}\r
            overscanRowsCount={4}\r
          >\r
            {Cell as any}\r
          </GridOld>\r
        )}\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{n as default};
