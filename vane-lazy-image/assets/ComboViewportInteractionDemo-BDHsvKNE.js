const r=`import {\r
  LazyLoadImageCore,\r
  createHoverPrefetchPlugin,\r
  createScrollIdlePlugin,\r
  createViewportAwarePlugin,\r
  createViewportDebouncePlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const LazyImage = withPlugins(LazyLoadImageCore as any, [\r
  createViewportAwarePlugin({}),\r
  createViewportDebouncePlugin({}),\r
  createHoverPrefetchPlugin({}),\r
  createScrollIdlePlugin({}),\r
]);\r
\r
export default function ComboViewportInteractionDemo() {\r
  return (\r
    <DemoPage\r
      title="组合示例：视口与交互"\r
      description="视口感知、事件去抖、悬停预取与滚动空闲协同工作。"\r
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
            src="https://picsum.photos/seed/viewport-combo-1/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="视口交互示例 1"\r
          />\r
        </div>\r
        <div style={{ width: 360, height: 240 }}>\r
          <LazyImage\r
            src="https://picsum.photos/seed/viewport-combo-2/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="视口交互示例 2"\r
          />\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
