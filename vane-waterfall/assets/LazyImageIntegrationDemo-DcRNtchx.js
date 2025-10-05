const r=`import {\r
  FILTER_PRESETS,\r
  LazyLoadImageCore,\r
  withPlugins as VaneLazyImage,\r
  createA11yPlugin,\r
  createAltTextPlugin,\r
  createBadgePlugin,\r
  createBlurUpPlugin,\r
  createCachePrewarmPlugin,\r
  createConcurrencyControlPlugin,\r
  createErrorBadgePlugin,\r
  createFadeInPlugin,\r
  createFallbackImagePlugin,\r
  createFilterPlugin,\r
  createHoverZoomPlugin,\r
  createIDBCachePlugin,\r
  createMemoryCachePlugin,\r
  createPreconnectPlugin,\r
  createScrollIdlePlugin,\r
  createSkeletonPlugin,\r
  createWatermarkPlugin,\r
} from "vane-lazy-image";\r
import {\r
  WaterfallCore,\r
  createAlignmentPlugin,\r
  createAutoColumnPlugin,\r
  createBookmarkPlugin,\r
  createInfiniteScrollPlugin,\r
  createResponsiveColumnsPlugin,\r
  createTransitionPlugin,\r
  withPlugins\r
} from "vane-waterfall";\r
import { useEffect, useMemo, useRef, useState } from "react";\r
\r
import DemoPage from "./_layout/DemoPage";\r
\r
interface Item {\r
  id: number;\r
  title: string;\r
  color: string;\r
  height: number;\r
  url: string;\r
}\r
const LazyImage = VaneLazyImage(LazyLoadImageCore as any, [\r
  createSkeletonPlugin({}),\r
  createFadeInPlugin({}),\r
  createMemoryCachePlugin({ maxEntries: 200 }),\r
  createIDBCachePlugin({}),\r
  createCachePrewarmPlugin({ trigger: "enter", preferMemory: true }),\r
  createPreconnectPlugin({}),\r
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),\r
  createWatermarkPlugin({\r
    text: "VANE",\r
    position: "bottom-right",\r
    opacity: 0.6,\r
  }),\r
  createBlurUpPlugin({ startBlur: 8, endBlur: 0, durationMs: 500 }),\r
  createBadgePlugin({\r
    // 使用插件上下文读取每个实例的 props，实现按图片序号显示\r
    // 宽化类型，避免 LazyLoadImageCoreProps 上无 badgeText 报错\r
    text: (ctx) => String((ctx.props as any)?.badgeText ?? ""),\r
    position: "top-left",\r
  }),\r
  createFilterPlugin(FILTER_PRESETS.grayscaleSoft),\r
  createHoverZoomPlugin({ scale: 1.15, durationMs: 180 }),\r
  createConcurrencyControlPlugin({\r
    maxConcurrent: 4,\r
    adaptive: true,\r
    scope: "perHost",\r
    acquireTimeoutMs: 6000,\r
  }),\r
  createScrollIdlePlugin({\r
    idleMs: 160,\r
    maxWaitMs: 1200,\r
    onlyWhenIntersecting: true,\r
  }),\r
  createErrorBadgePlugin({}),\r
  createA11yPlugin(),\r
  createAltTextPlugin({ prefix: "Demo" }),\r
]);\r
\r
// 为了给 Badge 插件传递 badgeText（类型未在核心声明），在本地进行类型宽化\r
const LazyImageAny = LazyImage as any;\r
\r
const initialItems = Array.from({ length: 60 }, (_, i) => ({\r
  id: i + 1,\r
  title: \`Item \${i + 1}\`,\r
  color: \`hsl(\${(i * 37) % 360}, 75%, 85%)\`,\r
  height: 120 + Math.floor(Math.random() * 180),\r
  url: \`https://picsum.photos/seed/wfall-\${i + 1}/640/480\`,\r
}));\r
\r
export default function InfiniteScrollDemo() {\r
  const [items, setItems] = useState<Item[]>(initialItems);\r
  const [loading, setLoading] = useState(false);\r
  const [hasMore, setHasMore] = useState(true);\r
\r
  // 使用 ref 持有最新的状态，避免插件持有的闭包读取到旧值导致继续加载\r
  const loadingRef = useRef(loading);\r
  const hasMoreRef = useRef(hasMore);\r
  useEffect(() => {\r
    loadingRef.current = loading;\r
  }, [loading]);\r
  useEffect(() => {\r
    hasMoreRef.current = hasMore;\r
  }, [hasMore]);\r
\r
  const loadMore = async () => {\r
    // 使用 ref 读取最新值，保证停止条件生效\r
    if (loadingRef.current || !hasMoreRef.current) return;\r
    setLoading(true);\r
    await new Promise((r) => setTimeout(r, 600));\r
    setItems((prev) => {\r
      const start = prev.length;\r
      const add = Array.from({ length: 24 }, (_, i) => ({\r
        id: start + i + 1,\r
        title: \`Item \${start + i + 1}\`,\r
        color: \`hsl(\${((start + i) * 37) % 360}, 75%, 85%)\`,\r
        height: 120 + Math.floor(Math.random() * 180),\r
        url: \`https://picsum.photos/seed/cache-combo-\${start + i + 1}/800/600\`,\r
      }));\r
      const next = [...prev, ...add];\r
      if (next.length >= 200) setHasMore(false);\r
      return next;\r
    });\r
    setLoading(false);\r
  };\r
\r
  const WaterfallWithInfinite = useMemo(\r
    () =>\r
      withPlugins(WaterfallCore, [\r
        // 视口宽度自适应列数（优先级：AutoColumn -> ResponsiveColumns -> props.columns）\r
        createAutoColumnPlugin({\r
          minColumnWidth: 220,\r
          minColumns: 1,\r
          maxColumns: 6,\r
        }),\r
        createResponsiveColumnsPlugin({\r
          breakpoints: {\r
            xs: { width: 0, columns: 1 },\r
            sm: { width: 640, columns: 2 },\r
            md: { width: 768, columns: 3 },\r
            lg: { width: 1024, columns: 4 },\r
            xl: { width: 1280, columns: 5 },\r
          },\r
        }),\r
        // 列分配策略（按最矮列放置）\r
        createAlignmentPlugin({ mode: "shortest" }),\r
        createBookmarkPlugin({\r
          storageKey: "waterfall-bookmark",\r
          scrollBehavior: "smooth",\r
        }),\r
        createTransitionPlugin({ duration: 180, easing: "ease-out" }),\r
        createInfiniteScrollPlugin({ threshold: 0, onLoadMore: loadMore }),\r
      ]),\r
    // eslint-disable-next-line react-hooks/exhaustive-deps\r
    []\r
  );\r
\r
  return (\r
    <DemoPage\r
      title="LazyImage 集成瀑布流演示"\r
      description="展示 LazyLoadImage × WaterfallPlugin 的插件化集成与无限滚动。"\r
    >\r
      <div\r
        style={{\r
          height: 600,\r
          border: "1px solid #ddd",\r
          borderRadius: 8,\r
          overflow: "hidden",\r
          position: "relative",\r
        }}\r
      >\r
        <WaterfallWithInfinite\r
          items={items}\r
          columns={4}\r
          gap={12}\r
          padding={12}\r
          containerStyle={{\r
            height: "100%",\r
            background: "#f5f5f5",\r
          }}\r
          onReachBottom={async () => {\r
            if (hasMore) await loadMore();\r
          }}\r
          renderItem={(item, index) => (\r
            <div\r
              style={{\r
                height: item.height,\r
                borderRadius: 8,\r
                overflow: "hidden",\r
                background: item.color,\r
              }}\r
            >\r
              <LazyImageAny\r
                src={item.url}\r
                loading="lazy"\r
                badgeText={index + 1}\r
                containerStyle={{ width: "100%", height: "100%" }}\r
                imageStyle={{\r
                  width: "100%",\r
                  height: "100%",\r
                  objectFit: "cover",\r
                }}\r
                alt={item.title}\r
              />\r
            </div>\r
          )}\r
        />\r
        {loading && (\r
          <div\r
            style={{\r
              position: "absolute",\r
              bottom: 8,\r
              left: "50%",\r
              transform: "translateX(-50%)",\r
              background: "#e9f7ff",\r
              border: "1px solid #b6e3ff",\r
              borderRadius: 6,\r
              padding: "6px 8px",\r
              fontSize: 12,\r
            }}\r
          >\r
            数据加载中...\r
          </div>\r
        )}\r
        {!hasMore && (\r
          <div\r
            style={{\r
              position: "absolute",\r
              bottom: 8,\r
              left: "50%",\r
              transform: "translateX(-50%)",\r
              background: "#fff3cd",\r
              border: "1px solid #ffeeba",\r
              borderRadius: 6,\r
              padding: "6px 8px",\r
              fontSize: 12,\r
            }}\r
          >\r
            我是有底线的\r
          </div>\r
        )}\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
