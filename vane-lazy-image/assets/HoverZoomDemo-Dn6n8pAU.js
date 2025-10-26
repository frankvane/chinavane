const r=`import {\r
  LazyLoadImageCore,\r
  createHoverZoomPlugin,\r
  withPlugins,\r
} from "../../components/LazyLoadImagePlugin";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const ImageWithHoverZoom = withPlugins(LazyLoadImageCore, [\r
  createHoverZoomPlugin({\r
    scale: 1.2,\r
    durationMs: 300,\r
  }),\r
]);\r
\r
const HoverZoomDemo: React.FC = () => {\r
  const srcs = [\r
    "https://picsum.photos/seed/hover-zoom-1/800/600?w=1280&auto=format&fit=crop",\r
    "https://picsum.photos/seed/hover-zoom-2/800/600?w=1280&auto=format&fit=crop",\r
    "https://picsum.photos/seed/hover-zoom-3/800/600?w=1280&auto=format&fit=crop",\r
    "https://picsum.photos/seed/hover-zoom-4/800/600?w=1280&auto=format&fit=crop",\r
  ];\r
\r
  return (\r
    <DemoPage\r
      title="HoverZoom - 悬停放大"\r
      description="鼠标悬停时图片平滑放大效果，适合商品展示和图片库"\r
    >\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",\r
          gap: 16,\r
        }}\r
      >\r
        {srcs.map((src, i) => (\r
          <div\r
            key={src + i}\r
            style={{\r
              width: "100%",\r
              height: 200,\r
              overflow: "hidden",\r
              borderRadius: "8px",\r
              cursor: "pointer",\r
            }}\r
          >\r
            <ImageWithHoverZoom\r
              src={src}\r
              alt={\`悬停放大示例 \${i + 1}\`}\r
              loading="lazy"\r
              rootMargin="300px"\r
              containerStyle={{ width: "100%", height: "100%" }}\r
              imageStyle={{\r
                width: "100%",\r
                height: "100%",\r
                objectFit: "cover",\r
                transition: "transform 0.3s ease-in-out",\r
              }}\r
            />\r
          </div>\r
        ))}\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default HoverZoomDemo;\r
\r
`;export{r as default};
