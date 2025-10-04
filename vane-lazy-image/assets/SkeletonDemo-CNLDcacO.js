const e=`import {\r
  LazyLoadImageCore,\r
  createSkeletonPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const LazyImage = withPlugins(LazyLoadImageCore as any, [\r
  createSkeletonPlugin({ type: "shimmer" }),\r
]);\r
\r
export default function SkeletonDemo() {\r
  return (\r
    <DemoPage title="Skeleton 插件示例" description="在加载阶段显示骨架占位。">\r
      <div style={{ width: 480, height: 300, maxWidth: "100%" }}>\r
        <LazyImage\r
          src="https://picsum.photos/seed/skeleton-demo/800/600"\r
          loading="lazy"\r
          containerStyle={{ width: "100%", height: "100%" }}\r
          imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
        />\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{e as default};
