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
  // 容器级滚动空闲：水平滚动场景\r
  createScrollIdlePlugin({\r
    idleMs: 160,\r
    maxWaitMs: 1200,\r
    onlyWhenIntersecting: true,\r
    target: "container",\r
    axis: "horizontal",\r
  }),\r
  // 视口驻留阈值：快速水平滚动时仅加载停留足够的项\r
  createViewportDwellPlugin({\r
    dwellMs: 160,\r
    maxWaitMs: 1000,\r
    onlyWhenIntersecting: true,\r
  }),\r
  // 并发闸控，避免停顿后瞬时触发过多请求\r
  createConcurrencyControlPlugin({ maxConcurrent: 6 }),\r
  createFetchLoaderPlugin({ enabled: true }),\r
  createProgressOverlayPlugin({\r
    showWhen: "loading",\r
    height: 3,\r
    color: "#4caf50",\r
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
      \`Horizontal • \${new URL(ctx.src, window.location.origin).pathname}\`,\r
    position: "bottom",\r
    background: "rgba(0,0,0,0.35)",\r
    color: "#fff",\r
    showWhen: "loading",\r
    zIndex: 4,\r
  }),\r
  createPreconnectPlugin({ domains: ["https://picsum.photos"] }),\r
  createEventLoggerPlugin({ enabled: true, prefix: "[HL-Demo]" }),\r
]);\r
\r
const RW = ReactWindow as any;\r
const GridNew = RW.Grid;\r
const ListOld = RW.FixedSizeList;\r
\r
export default function VirtualHorizontalListDemo() {\r
  const listOuterRef = React.useRef<HTMLDivElement | null>(null);\r
  const gridRef = React.useRef<any>(null);\r
  const [rootEl, setRootEl] = React.useState<HTMLElement | undefined>(\r
    undefined\r
  );\r
  const [items] = React.useState(\r
    Array.from({ length: 180 }).map((_, i) => ({\r
      id: i,\r
      src: \`https://picsum.photos/seed/virt-h-\${i}/800/600\`,\r
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
    index,\r
    style,\r
  }: {\r
    index: number;\r
    style: React.CSSProperties;\r
  }) => {\r
    const item = items[index];\r
    return (\r
      <div style={{ ...style, padding: 8 }}>\r
        <div\r
          style={{\r
            position: "relative",\r
            width: 240,\r
            height: 160,\r
            borderRadius: 8,\r
            overflow: "hidden",\r
            boxShadow: "0 1px 6px rgba(0,0,0,0.1)",\r
          }}\r
        >\r
          <LazyImage\r
            src={item.src}\r
            loading="lazy"\r
            root={rootEl || listOuterRef.current || undefined}\r
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
      title="LazyLoadImagePlugin • 水平虚拟列表示例（react-window）"\r
      description="结合 react-window 的水平虚拟列表，优化横向滚动图片加载"\r
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
              style,\r
            }: {\r
              columnIndex: number;\r
              style: React.CSSProperties;\r
            }) => <Cell index={columnIndex} style={style} />}\r
            columnCount={items.length}\r
            columnWidth={256}\r
            rowCount={1}\r
            rowHeight={220}\r
            gridRef={gridRef}\r
            cellProps={{ items }}\r
            style={{ height: 220, width: 960 }}\r
          />\r
        ) : (\r
          <ListOld\r
            height={220}\r
            width={960}\r
            itemCount={items.length}\r
            itemSize={256}\r
            layout="horizontal"\r
            outerRef={listOuterRef}\r
            overscanCount={8}\r
          >\r
            {Cell as any}\r
          </ListOld>\r
        )}\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{n as default};
