const r=`import {\r
  LazyLoadImageCore,\r
  createResponsivePlugin,\r
  withPlugins,\r
} from "../../components/LazyLoadImagePlugin";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const ResponsiveImage = withPlugins(LazyLoadImageCore, [\r
  createResponsivePlugin({\r
    variants: [\r
      { width: 640 },  // mobile\r
      { width: 1024 }, // tablet\r
      { width: 1920 }, // desktop\r
    ],\r
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px",\r
  }),\r
]);\r
\r
const ResponsiveDemo: React.FC = () => {\r
  const srcs = [\r
    "https://picsum.photos/seed/responsive-1/1920/1080",\r
    "https://picsum.photos/seed/responsive-2/1920/1080",\r
    "https://picsum.photos/seed/responsive-3/1920/1080",\r
  ];\r
\r
  return (\r
    <DemoPage\r
      title="Responsive - 响应式图片"\r
      description="根据设备屏幕大小自动选择最优图片尺寸和质量"\r
    >\r
      <div style={{ marginBottom: 20 }}>\r
        <p style={{ color: "#666", lineHeight: "1.6" }}>\r
          💡 <strong>提示：</strong>调整浏览器窗口大小查看效果，插件会根据视口宽度自动选择最优图片源。\r
        </p>\r
      </div>\r
      <div\r
        style={{\r
          display: "flex",\r
          flexDirection: "column",\r
          gap: 16,\r
        }}\r
      >\r
        {srcs.map((src, i) => (\r
          <div\r
            key={src + i}\r
            style={{\r
              width: "100%",\r
              height: 400,\r
              borderRadius: "8px",\r
              overflow: "hidden",\r
            }}\r
          >\r
            <ResponsiveImage\r
              src={src}\r
              alt={\`响应式图片示例 \${i + 1}\`}\r
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
        ))}\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default ResponsiveDemo;\r
\r
`;export{r as default};
