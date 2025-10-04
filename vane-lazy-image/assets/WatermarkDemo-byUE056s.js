const r=`import {\r
  LazyLoadImageCore,\r
  createWatermarkPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const LazyImage = withPlugins(LazyLoadImageCore as any, [\r
  createWatermarkPlugin({\r
    text: "VANE",\r
    position: "bottom-right",\r
    opacity: 0.6,\r
  }),\r
]);\r
\r
export default function WatermarkDemo() {\r
  return (\r
    <DemoPage title="Watermark 插件示例" description="在图片上叠加半透明水印。">\r
      <div style={{ width: 480, height: 300, maxWidth: "100%" }}>\r
        <LazyImage\r
          src="https://picsum.photos/seed/watermark-demo/800/600"\r
          loading="lazy"\r
          containerStyle={{ width: "100%", height: "100%" }}\r
          imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
        />\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
