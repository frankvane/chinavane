const r=`import {\r
  LazyLoadImageCore,\r
  createErrorBadgePlugin,\r
  createErrorOverlayPlugin,\r
  createEventLoggerPlugin,\r
  createFallbackImagePlugin,\r
  createRetryOnErrorPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const LazyImage = withPlugins(LazyLoadImageCore as any, [\r
  createErrorOverlayPlugin({ retryText: "重试" }),\r
  createErrorBadgePlugin({}),\r
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),\r
  createRetryOnErrorPlugin({ maxRetries: 1 }),\r
  createEventLoggerPlugin({ enabled: true }),\r
]);\r
\r
export default function ComboErrorResilienceDemo() {\r
  return (\r
    <DemoPage\r
      title="组合示例：错误韧性"\r
      description="结合错误覆盖层、错误徽标、备用图与自动重试，提升失败处理体验。"\r
    >\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(2, 1fr)",\r
          gap: 12,\r
        }}\r
      >\r
        <div style={{ width: 360, height: 240 }}>\r
          <LazyImage\r
            src="https://invalid.example.com/not-found.jpg"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="错误触发示例"\r
          />\r
        </div>\r
        <div style={{ width: 360, height: 240 }}>\r
          <LazyImage\r
            src="https://picsum.photos/seed/error-combo/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="正常加载示例"\r
          />\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
