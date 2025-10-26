const r=`import {\r
  LazyLoadImageCore,\r
  createSEOPlugin,\r
  withPlugins,\r
} from "../../components/LazyLoadImagePlugin";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const SEOImage = withPlugins(LazyLoadImageCore, [\r
  createSEOPlugin({\r
    altFallback: "SEO优化图片",\r
    aspectRatio: "16/9",\r
    priority: "lcp",\r
    preload: true,\r
  }),\r
]);\r
\r
const SEODemo: React.FC = () => {\r
  const srcs = [\r
    {\r
      url: "https://picsum.photos/seed/seo-1/1200/630",\r
      title: "SEO优化示例图片 1",\r
      description: "这是一张经过SEO优化的图片，包含结构化数据和Open Graph标签",\r
    },\r
    {\r
      url: "https://picsum.photos/seed/seo-2/1200/630",\r
      title: "SEO优化示例图片 2",\r
      description: "适合社交媒体分享的图片，包含Twitter Card元数据",\r
    },\r
    {\r
      url: "https://picsum.photos/seed/seo-3/1200/630",\r
      title: "SEO优化示例图片 3",\r
      description: "搜索引擎友好的图片，增强页面SEO效果",\r
    },\r
  ];\r
\r
  return (\r
    <DemoPage\r
      title="SEO - 搜索引擎优化"\r
      description="自动添加结构化数据、Open Graph 和 Twitter Card 元标签"\r
    >\r
      <div style={{ marginBottom: 20 }}>\r
        <div\r
          style={{\r
            padding: 16,\r
            background: "#f0f9ff",\r
            borderRadius: "8px",\r
            border: "1px solid #0ea5e9",\r
          }}\r
        >\r
          <p style={{ margin: 0, color: "#0369a1", lineHeight: "1.6" }}>\r
            🔍 <strong>SEO 优化功能：</strong>\r
          </p>\r
          <ul style={{ marginTop: 8, color: "#0369a1", lineHeight: "1.8" }}>\r
            <li>自动生成 Schema.org ImageObject 结构化数据</li>\r
            <li>添加 Open Graph 标签用于社交媒体分享</li>\r
            <li>添加 Twitter Card 元数据</li>\r
            <li>提升搜索引擎索引和排名</li>\r
          </ul>\r
        </div>\r
      </div>\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",\r
          gap: 20,\r
        }}\r
      >\r
        {srcs.map((item, i) => (\r
          <div\r
            key={item.url + i}\r
            style={{\r
              border: "1px solid #e5e7eb",\r
              borderRadius: "8px",\r
              overflow: "hidden",\r
            }}\r
          >\r
            <div style={{ width: "100%", height: 200 }}>\r
              <SEOImage\r
                src={item.url}\r
                alt={item.title}\r
                loading="lazy"\r
                rootMargin="300px"\r
                containerStyle={{ width: "100%", height: "100%" }}\r
                imageStyle={{\r
                  width: "100%",\r
                  height: "100%",\r
                  objectFit: "cover",\r
                }}\r
              />\r
            </div>\r
            <div style={{ padding: 12 }}>\r
              <h4 style={{ margin: "0 0 8px", fontSize: "1em" }}>\r
                {item.title}\r
              </h4>\r
              <p style={{ margin: 0, fontSize: "0.9em", color: "#666" }}>\r
                {item.description}\r
              </p>\r
            </div>\r
          </div>\r
        ))}\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default SEODemo;\r
\r
`;export{r as default};
