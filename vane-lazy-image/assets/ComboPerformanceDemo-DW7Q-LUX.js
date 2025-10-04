const r=`import {\r
  LazyLoadImageCore,\r
  createAdaptiveQualityPlugin,\r
  createImageOptimizationPlugin,\r
  createPreconnectPlugin,\r
  createPriorityLoadingPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const LazyImage = withPlugins(LazyLoadImageCore as any, [\r
  createPreconnectPlugin({\r
    domains: ["https://picsum.photos", "https://img11.360buyimg.com"],\r
  }),\r
  createPriorityLoadingPlugin({ priority: "high" }),\r
  createAdaptiveQualityPlugin({}),\r
  createImageOptimizationPlugin({}),\r
]);\r
\r
export default function ComboPerformanceDemo() {\r
  return (\r
    <DemoPage\r
      title="组合示例：性能与网络"\r
      description="结合预连接、加载优先级、自适应质量与图片优化以提升加载性能。"\r
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
            src="https://picsum.photos/seed/perf-combo-1/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="性能优化示例 1"\r
          />\r
        </div>\r
        <div style={{ width: 360, height: 240 }}>\r
          <LazyImage\r
            src="https://img11.360buyimg.com/n1/s720x720_jfs/t1/241589/31/30587/68929/68db47d5Fcbc7a2f7/a70b8f66e17214be.png.avif"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="性能优化示例 2"\r
          />\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
