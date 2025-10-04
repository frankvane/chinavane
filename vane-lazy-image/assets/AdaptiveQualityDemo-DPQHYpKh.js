const n=`import {\r
  LazyLoadImageCore,\r
  createAdaptiveQualityPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import React from "react";\r
\r
// 实时模式：监听网络变化，随时调整 q\r
const LazyImageRealtime = withPlugins(LazyLoadImageCore as any, [\r
  createAdaptiveQualityPlugin({\r
    lowQ: 45,\r
    highQ: 85,\r
    saveDataQuality: 35,\r
    mode: "realtime",\r
  }),\r
]);\r
\r
// 一次模式：仅在初始时设置 q（后续网络变化不影响）\r
const LazyImageOnce = withPlugins(LazyLoadImageCore as any, [\r
  createAdaptiveQualityPlugin({\r
    lowQ: 45,\r
    highQ: 85,\r
    saveDataQuality: 35,\r
    mode: "once",\r
  }),\r
]);\r
\r
export default function AdaptiveQualityDemo() {\r
  return (\r
    <div style={{ padding: 24 }}>\r
      <h3>AdaptiveQuality 插件示例</h3>\r
      <p>展示两种模式：实时监听（realtime）与一次设置（once）。</p>\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",\r
          gap: 16,\r
        }}\r
      >\r
        <div>\r
          <h4 style={{ margin: "8px 0" }}>实时模式（realtime）</h4>\r
          <div style={{ width: 480, height: 300, maxWidth: "100%" }}>\r
            <LazyImageRealtime\r
              src="https://picsum.photos/seed/aq-demo-realtime/800/600"\r
              loading="lazy"\r
              containerStyle={{ width: "100%", height: "100%" }}\r
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            />\r
          </div>\r
          <small>切换系统网络或省流模式，观察地址中的 q 参数随网络变化。</small>\r
        </div>\r
        <div>\r
          <h4 style={{ margin: "8px 0" }}>一次模式（once）</h4>\r
          <div style={{ width: 480, height: 300, maxWidth: "100%" }}>\r
            <LazyImageOnce\r
              src="https://picsum.photos/seed/aq-demo-once/800/600"\r
              loading="lazy"\r
              containerStyle={{ width: "100%", height: "100%" }}\r
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            />\r
          </div>\r
          <small>\r
            仅在初次渲染时确定 q；之后网络变化不再影响（可切换网络后对比）。\r
          </small>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`;export{n as default};
