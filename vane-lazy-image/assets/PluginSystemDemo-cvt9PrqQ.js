const r=`import {\r
  LazyLoadImageCore,\r
  createAltTextPlugin,\r
  createAspectRatioSpacerPlugin,\r
  createBadgePlugin,\r
  createBlurUpPlugin,\r
  createCachePrewarmPlugin,\r
  createDominantColorPlugin,\r
  createErrorBadgePlugin,\r
  createErrorOverlayPlugin,\r
  createEventLoggerPlugin,\r
  createFadeInPlugin,\r
  createFallbackImagePlugin,\r
  createFetchLoaderPlugin,\r
  createIDBCachePlugin,\r
  createLqipPlugin,\r
  createMemoryCachePlugin,\r
  createOverlayInfoPlugin,\r
  createPreconnectPlugin,\r
  createPriorityLoadingPlugin,\r
  createProgressOverlayPlugin,\r
  createRetryOnErrorPlugin,\r
  createSkeletonPlugin,\r
  createWatermarkPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const LazyImage = withPlugins(LazyLoadImageCore as any, [\r
  // 缓存（命中优先返回，避免重复网络请求）\r
  createMemoryCachePlugin({\r
    maxEntries: 300,\r
    ttlMs: 60 * 60 * 1000,\r
    debug: false,\r
  }),\r
  createIDBCachePlugin({ ttlMs: 7 * 24 * 60 * 60 * 1000, debug: false }),\r
  // 视口预热（进入视口即预取并写入缓存）\r
  createCachePrewarmPlugin({\r
    trigger: "enter",\r
    preferMemory: true,\r
    debug: false,\r
  }),\r
  // 单次请求加载器（带进度）\r
  createFetchLoaderPlugin({ enabled: true }),\r
  // 进度叠加层\r
  createProgressOverlayPlugin({\r
    showWhen: "loading",\r
    height: 3,\r
    color: "#ff0000",\r
    showPercentText: true,\r
  }),\r
  // 骨架屏叠加层（加载时显示）\r
  createSkeletonPlugin({\r
    type: "shimmer",\r
    showWhen: "loading",\r
    borderRadius: 4,\r
    zIndex: 1,\r
  }),\r
  // 底部信息蒙层（加载时显示）\r
  createOverlayInfoPlugin({\r
    content: (ctx) =>\r
      \`Loading • \${new URL(ctx.src, window.location.origin).pathname}\`,\r
    position: "bottom",\r
    background: "rgba(0,0,0,0.35)",\r
    color: "#fff",\r
    showWhen: "loading",\r
    zIndex: 4,\r
  }),\r
  // 预连接到图片源\r
  createPreconnectPlugin({ domains: ["https://picsum.photos"] }),\r
  // LQIP 低清预览（覆盖层显示，加载后隐藏）\r
  createLqipPlugin({\r
    lqipSrc: (src) => {\r
      try {\r
        const u = new URL(src);\r
        if (u.hostname.includes("picsum.photos")) {\r
          // 将 800/600 等尺寸替换为更小的低清版本\r
          const parts = u.pathname.split("/");\r
          const last = parts.slice(-2);\r
          if (last.length === 2 && /\\d+/.test(last[0]) && /\\d+/.test(last[1])) {\r
            parts.splice(-2, 2, "40", "30");\r
            u.pathname = parts.join("/");\r
            return u.toString();\r
          }\r
        }\r
      } catch {}\r
      return "/404.jpg"; // 兜底的低清占位\r
    },\r
    blur: 12,\r
    opacity: 0.9,\r
    zIndex: 2,\r
  }),\r
  // Blur-Up 模糊淡出\r
  createBlurUpPlugin({ startBlur: 6, endBlur: 0, durationMs: 450 }),\r
  // Fade-In 加载完成淡入\r
  createFadeInPlugin({ durationMs: 450 }),\r
  // Dominant Color 背景（从 LQIP 采样或使用默认色）\r
  createDominantColorPlugin({ lqipSrc: (src) => src }),\r
  // Aspect-Ratio 空间占位（增强布局稳定性）\r
  createAspectRatioSpacerPlugin({ ratio: 4 / 3 }),\r
  // 错误覆盖层（显示提示与重试按钮）\r
  createErrorOverlayPlugin({ retryText: "重试" }),\r
  // 错误徽标（Top-Right 红色）\r
  createErrorBadgePlugin({}),\r
  // 错误时切换到备用图\r
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),\r
  // 错误自动重试（指数退避）\r
  createRetryOnErrorPlugin({ maxRetries: 1, baseDelayMs: 600, jitter: true }),\r
  // 事件日志插件（便于观察效果）\r
  createEventLoggerPlugin({ enabled: true, prefix: "[LLI-Demo]" }),\r
  // 自动补全 alt 文本\r
  createAltTextPlugin({ prefix: "Demo" }),\r
  // 调整加载优先级\r
  createPriorityLoadingPlugin({ priority: "medium" }),\r
  // 水印插件\r
  createWatermarkPlugin({\r
    text: (src) => \`Demo • \${new URL(src, window.location.origin).pathname}\`,\r
    position: "bottom-right",\r
    opacity: 0.85,\r
    fontSize: 13,\r
    color: "#fff",\r
    offsetX: 10,\r
    offsetY: 10,\r
  }),\r
  // 徽标插件（在加载成功时显示）\r
  createBadgePlugin({\r
    text: () => "Loaded",\r
    position: "top-left",\r
    bgColor: "rgba(30, 144, 255, 0.75)",\r
    color: "#fff",\r
    fontSize: 12,\r
    padding: "2px 6px",\r
    borderRadius: 4,\r
    zIndex: 3,\r
    showWhen: "loaded",\r
  }),\r
]);\r
\r
export default function PluginSystemDemo() {\r
  const [images, setImages] = React.useState<string[]>([\r
    // 故意加入一个错误链接以观察错误插件效果\r
    "https://invalid.example.com/not-found.jpg",\r
    // JD 示例图\r
    "https://img11.360buyimg.com/n1/s720x720_jfs/t1/241589/31/30587/68929/68db47d5Fcbc7a2f7/a70b8f66e17214be.png.avif",\r
    // Picsum 示例图\r
    "https://picsum.photos/seed/watermark-demo/800/600",\r
  ]);\r
\r
  const addImage = () => {\r
    const candidates = [\r
      \`https://picsum.photos/seed/watermark-demo-\${\r
        Date.now() % 100000\r
      }/800/600\`,\r
      "https://img11.360buyimg.com/n1/s720x720_jfs/t1/241589/31/30587/68929/68db47d5Fcbc7a2f7/a70b8f66e17214be.png.avif",\r
    ];\r
    const next = candidates[Math.floor(Math.random() * candidates.length)];\r
    setImages((prev) => [...prev, next]);\r
  };\r
\r
  return (\r
    <DemoPage\r
      title="LazyLoadImagePlugin • 动态加载示例"\r
      description="综合演示多个插件的组合效果，包括缓存、加载、错误处理、视觉效果等"\r
    >\r
      <div style={{ marginBottom: 12 }}>\r
        <button onClick={addImage} style={{ padding: "6px 10px" }}>\r
          添加图片\r
        </button>\r
      </div>\r
\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",\r
          gap: 12,\r
        }}\r
      >\r
        {images.map((src, idx) => (\r
          <div\r
            key={src + idx}\r
            style={{ width: 320, height: 200, position: "relative" }}\r
          >\r
            <LazyImage\r
              src={src}\r
              loading="lazy"\r
              rootMargin="300px"\r
              containerStyle={{ width: "100%", height: "100%" }}\r
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
              containerClassName="lazy-image-container"\r
            />\r
          </div>\r
        ))}\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
