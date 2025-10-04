const r=`import {\r
  LazyLoadImageCore,\r
  createBlurUpPlugin,\r
  createBorderGlowPlugin,\r
  createCaptionPlugin,\r
  createFadeInPlugin,\r
  createWatermarkPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const LazyImage = withPlugins(LazyLoadImageCore as any, [\r
  createBlurUpPlugin({ startBlur: 6, endBlur: 0, durationMs: 450 }),\r
  createFadeInPlugin({ durationMs: 450 }),\r
  createBorderGlowPlugin({}),\r
  createCaptionPlugin({ text: "组合示例：视觉与效果" }),\r
  createWatermarkPlugin({\r
    text: "DEMO",\r
    position: "bottom-right",\r
    opacity: 0.6,\r
  }),\r
]);\r
\r
export default function ComboVisualEffectsDemo() {\r
  return (\r
    <DemoPage\r
      title="组合示例：视觉与效果"\r
      description="组合 Blur-Up、Fade-In、边框辉光、说明文字与水印效果。"\r
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
            src="https://picsum.photos/seed/visual-combo-1/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="视觉效果示例 1"\r
          />\r
        </div>\r
        <div style={{ width: 360, height: 240 }}>\r
          <LazyImage\r
            src="https://picsum.photos/seed/visual-combo-2/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="视觉效果示例 2"\r
          />\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
