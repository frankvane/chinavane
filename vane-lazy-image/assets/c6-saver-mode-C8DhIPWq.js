const r=`// 版式参照：B 站移动端「省流模式」—— 3G / 低电量下只出缩略图\r
// 装配：省流量 → 电量感知 → 网络分析\r
import {\r
  LazyLoadImageCore,\r
  createBatteryAwarePlugin,\r
  createDataSaverPlugin,\r
  createNetworkAnalyticsPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
import type { CSSProperties } from "react";\r
\r
const Lazy = withPlugins(LazyLoadImageCore as any, [\r
  // 尊重 Save-Data 请求头：开启时按 0.6 质量降级，并关闭预取\r
  createDataSaverPlugin({ respectSaveData: true, fallbackQuality: 0.6, disablePreload: true }),\r
  // 电量低于 20% 时把请求宽度压到 640，同时停掉预连接\r
  createBatteryAwarePlugin({\r
    lowBatteryThreshold: 0.2,\r
    downgradeWidth: 640,\r
    disablePreconnect: true,\r
  }),\r
  // 采集每张图的实际传输字节与耗时，落到自己的上报端点\r
  createNetworkAnalyticsPlugin({ trackCDN: true }),\r
]);\r
\r
const FEED = Array.from({ length: 6 }, (_, i) => ({\r
  id: i + 1,\r
  title: \`动态封面 \${i + 1}\`,\r
  src: \`https://picsum.photos/seed/vane-saver-\${i + 1}/320/180\`,\r
}));\r
\r
export default function SaverMode() {\r
  return (\r
    <div style={STAGE}>\r
      <div style={BAR}>\r
        <span style={CHIP}>Save-Data: on</span>\r
        <span style={CHIP}>电量 15%</span>\r
        <span style={CHIP}>3G</span>\r
      </div>\r
      <div style={GRID}>\r
        {FEED.map((f) => (\r
          <div key={f.id} style={CELL}>\r
            <Lazy\r
              src={f.src}\r
              alt={f.title}\r
              loading="lazy"\r
              containerStyle={{ width: "100%", aspectRatio: "320 / 180", borderRadius: 4, overflow: "hidden" }}\r
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}\r
            />\r
            <span style={NAME}>{f.title}</span>\r
          </div>\r
        ))}\r
      </div>\r
      <p style={HINT}>\r
        上方三个状态是演示站的"环境模拟"口径；插件本身读的是真实的\r
        <code>navigator.connection</code> 与 <code>getBattery()</code>。\r
      </p>\r
    </div>\r
  );\r
}\r
\r
const STAGE: CSSProperties = { background: "#0f0f0f", padding: 14, borderRadius: 6 };\r
const BAR: CSSProperties = { display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" };\r
const CHIP: CSSProperties = {\r
  padding: "2px 8px",\r
  borderRadius: 999,\r
  fontSize: 10.5,\r
  color: "#ffb27a",\r
  border: "1px solid rgba(255,122,41,.4)",\r
  background: "rgba(255,122,41,.1)",\r
};\r
const GRID: CSSProperties = {\r
  display: "grid",\r
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",\r
  gap: 10,\r
};\r
const CELL: CSSProperties = { display: "flex", flexDirection: "column", gap: 4 };\r
const NAME: CSSProperties = { flexShrink: 0, color: "#9a9a9a", fontSize: 10.5 };\r
const HINT: CSSProperties = { margin: "10px 0 0", color: "#7d7d7d", fontSize: 11, lineHeight: 1.7 };\r
`;export{r as default};
