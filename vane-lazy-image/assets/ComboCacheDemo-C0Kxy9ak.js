const r=`import {\r
  LazyLoadImageCore,\r
  createCachePrewarmPlugin,\r
  createIDBCachePlugin,\r
  createMemoryCachePlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const LazyImage = withPlugins(LazyLoadImageCore as any, [\r
  createMemoryCachePlugin({ maxEntries: 200 }),\r
  createIDBCachePlugin({}),\r
  createCachePrewarmPlugin({ trigger: "enter", preferMemory: true }),\r
]);\r
\r
export default function ComboCacheDemo() {\r
  return (\r
    <DemoPage\r
      title="组合示例：缓存与存储"\r
      description="结合内存缓存、IDB 缓存与视口预热，降低重复请求与提升体验。"\r
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
            src="https://picsum.photos/seed/cache-combo-1/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="缓存组合示例 1"\r
          />\r
        </div>\r
        <div style={{ width: 360, height: 240 }}>\r
          <LazyImage\r
            src="https://picsum.photos/seed/cache-combo-2/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="缓存组合示例 2"\r
          />\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
