const e=`import {\r
  LazyLoadImageCore,\r
  createA11yPlugin,\r
  createAltTextPlugin,\r
  createAspectRatioSpacerPlugin,\r
  createResponsivePlugin,\r
  createSEOPlugin,\r
  createWebPPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const LazyImage = withPlugins(LazyLoadImageCore as any, [\r
  createA11yPlugin({}),\r
  createSEOPlugin({}),\r
  createAspectRatioSpacerPlugin({ ratio: 4 / 3 }),\r
  createResponsivePlugin({}),\r
  createWebPPlugin({}),\r
  createAltTextPlugin({ prefix: "Demo" }),\r
]);\r
\r
export default function ComboA11ySeoDemo() {\r
  return (\r
    <DemoPage\r
      title="组合示例：可访问性与 SEO"\r
      description="结合 A11y、SEO、比例占位与响应式资源，提升页面质量。"\r
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
            src="https://picsum.photos/seed/a11y-seo-combo-1/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="可访问性与 SEO 组合示例 1"\r
          />\r
        </div>\r
        <div style={{ width: 360, height: 240 }}>\r
          <LazyImage\r
            src="https://picsum.photos/seed/a11y-seo-combo-2/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="可访问性与 SEO 组合示例 2"\r
          />\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{e as default};
