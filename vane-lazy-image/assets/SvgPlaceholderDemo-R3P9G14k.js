const r=`import {\r
  LazyLoadImageCore,\r
  createSvgPlaceholderPlugin,\r
  withPlugins,\r
} from "../../components/LazyLoadImagePlugin";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const ImageWithSvgPlaceholder = withPlugins(LazyLoadImageCore, [\r
  createSvgPlaceholderPlugin({\r
    svgContent: '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f0f0"/></svg>',\r
    showWhen: "loading",\r
    fadeOutOnLoaded: true,\r
  }),\r
]);\r
\r
const ImageWithGradientPlaceholder = withPlugins(LazyLoadImageCore, [\r
  createSvgPlaceholderPlugin({\r
    svgContent: '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#667eea"/><stop offset="100%" stop-color="#764ba2"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#grad)"/></svg>',\r
    showWhen: "loading",\r
    fadeOutOnLoaded: true,\r
  }),\r
]);\r
\r
const ImageWithPatternPlaceholder = withPlugins(LazyLoadImageCore, [\r
  createSvgPlaceholderPlugin({\r
    svgContent: '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="2" fill="#cbd5e0"/></pattern><rect width="100%" height="100%" fill="url(#dots)"/></svg>',\r
    showWhen: "loading",\r
    fadeOutOnLoaded: true,\r
  }),\r
]);\r
\r
const SvgPlaceholderDemo: React.FC = () => {\r
  const srcs = [\r
    "https://picsum.photos/seed/svg-placeholder-1/800/600?w=1280&auto=format&fit=crop",\r
    "https://picsum.photos/seed/svg-placeholder-2/800/600?w=1280&auto=format&fit=crop",\r
    "https://picsum.photos/seed/svg-placeholder-3/800/600?w=1280&auto=format&fit=crop",\r
  ];\r
\r
  return (\r
    <DemoPage\r
      title="SvgPlaceholder - SVG 占位符"\r
      description="使用 SVG 生成轻量级、可缩放的占位符效果"\r
    >\r
      <div style={{ marginBottom: 20 }}>\r
        <h3 style={{ fontSize: "1.1em", marginBottom: 8 }}>\r
          Shimmer 闪烁效果\r
        </h3>\r
        <p style={{ color: "#666", marginBottom: 12 }}>\r
          流光动画效果，模拟内容加载中的状态\r
        </p>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",\r
            gap: 16,\r
          }}\r
        >\r
          {srcs.map((src, i) => (\r
            <div key={\`shimmer-\${i}\`} style={{ width: "100%", height: 180 }}>\r
              <ImageWithSvgPlaceholder\r
                src={src}\r
                alt={\`Shimmer 占位符 \${i + 1}\`}\r
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
      </div>\r
\r
      <div style={{ marginBottom: 20 }}>\r
        <h3 style={{ fontSize: "1.1em", marginBottom: 8 }}>渐变占位符</h3>\r
        <p style={{ color: "#666", marginBottom: 12 }}>\r
          使用渐变色作为占位符，提供优雅的视觉效果\r
        </p>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",\r
            gap: 16,\r
          }}\r
        >\r
          {srcs.map((src, i) => (\r
            <div key={\`gradient-\${i}\`} style={{ width: "100%", height: 180 }}>\r
              <ImageWithGradientPlaceholder\r
                src={src}\r
                alt={\`渐变占位符 \${i + 1}\`}\r
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
      </div>\r
\r
      <div>\r
        <h3 style={{ fontSize: "1.1em", marginBottom: 8 }}>图案占位符</h3>\r
        <p style={{ color: "#666", marginBottom: 12 }}>\r
          使用点阵或其他图案作为占位符\r
        </p>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",\r
            gap: 16,\r
          }}\r
        >\r
          {srcs.map((src, i) => (\r
            <div key={\`pattern-\${i}\`} style={{ width: "100%", height: 180 }}>\r
              <ImageWithPatternPlaceholder\r
                src={src}\r
                alt={\`图案占位符 \${i + 1}\`}\r
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
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default SvgPlaceholderDemo;\r
\r
`;export{r as default};
