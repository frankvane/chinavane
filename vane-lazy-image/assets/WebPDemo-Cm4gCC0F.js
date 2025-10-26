const r=`import {\r
  LazyLoadImageCore,\r
  createFallbackImagePlugin,\r
  createWebPPlugin,\r
  withPlugins,\r
} from "../../components/LazyLoadImagePlugin";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const WebPImage = withPlugins(LazyLoadImageCore, [\r
  createWebPPlugin({\r
    enabled: true,\r
    testSupport: true,\r
    replaceExtensions: [".jpg", ".jpeg", ".png"],\r
    appendQueryParam: "format=webp",\r
  }),\r
  createFallbackImagePlugin({\r
    fallbackSrc: "/404.jpg",\r
  }),\r
]);\r
\r
const WebPDemo: React.FC = () => {\r
  const srcs = [\r
    "https://picsum.photos/seed/webp-1/800/600",\r
    "https://picsum.photos/seed/webp-2/800/600",\r
    "https://picsum.photos/seed/webp-3/800/600",\r
    "https://picsum.photos/seed/webp-4/800/600",\r
  ];\r
\r
  return (\r
    <DemoPage\r
      title="WebP - WebP 格式优化"\r
      description="自动检测浏览器支持并优先使用 WebP 格式，显著减小图片体积"\r
    >\r
      <div style={{ marginBottom: 20 }}>\r
        <div\r
          style={{\r
            padding: 16,\r
            background: "#f0fdf4",\r
            borderRadius: "8px",\r
            border: "1px solid #22c55e",\r
          }}\r
        >\r
          <p\r
            style={{\r
              margin: 0,\r
              color: "#166534",\r
              lineHeight: "1.6",\r
              marginBottom: 8,\r
            }}\r
          >\r
            🎯 <strong>WebP 优势：</strong>\r
          </p>\r
          <ul style={{ margin: 0, color: "#166534", lineHeight: "1.8" }}>\r
            <li>体积比 JPEG 小 25-35%</li>\r
            <li>比 PNG 小 26%</li>\r
            <li>支持透明度和动画</li>\r
            <li>自动检测浏览器支持并回退</li>\r
          </ul>\r
        </div>\r
      </div>\r
\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",\r
          gap: 16,\r
          marginBottom: 20,\r
        }}\r
      >\r
        {srcs.map((src, i) => (\r
          <div key={src + i}>\r
            <div style={{ width: "100%", height: 220 }}>\r
              <WebPImage\r
                src={src}\r
                alt={\`WebP 优化示例 \${i + 1}\`}\r
                loading="lazy"\r
                rootMargin="300px"\r
                containerStyle={{\r
                  width: "100%",\r
                  height: "100%",\r
                  background: "#f3f4f6",\r
                  borderRadius: "8px",\r
                  overflow: "hidden",\r
                }}\r
                imageStyle={{\r
                  width: "100%",\r
                  height: "100%",\r
                  objectFit: "cover",\r
                }}\r
              />\r
            </div>\r
            <p\r
              style={{\r
                textAlign: "center",\r
                marginTop: 8,\r
                fontSize: "0.9em",\r
                color: "#666",\r
              }}\r
            >\r
              WebP 优化图片 {i + 1}\r
            </p>\r
          </div>\r
        ))}\r
      </div>\r
\r
      <div\r
        style={{\r
          padding: 16,\r
          background: "#ede9fe",\r
          borderRadius: "8px",\r
          border: "1px solid #8b5cf6",\r
        }}\r
      >\r
        <p\r
          style={{\r
            margin: 0,\r
            color: "#5b21b6",\r
            lineHeight: "1.6",\r
            marginBottom: 8,\r
          }}\r
        >\r
          📊 <strong>格式对比：</strong>\r
        </p>\r
        <table\r
          style={{\r
            width: "100%",\r
            borderCollapse: "collapse",\r
            marginTop: 12,\r
            background: "white",\r
            borderRadius: "4px",\r
            overflow: "hidden",\r
          }}\r
        >\r
          <thead>\r
            <tr style={{ background: "#f3f4f6" }}>\r
              <th\r
                style={{\r
                  padding: "8px 12px",\r
                  textAlign: "left",\r
                  borderBottom: "1px solid #e5e7eb",\r
                }}\r
              >\r
                格式\r
              </th>\r
              <th\r
                style={{\r
                  padding: "8px 12px",\r
                  textAlign: "left",\r
                  borderBottom: "1px solid #e5e7eb",\r
                }}\r
              >\r
                大小\r
              </th>\r
              <th\r
                style={{\r
                  padding: "8px 12px",\r
                  textAlign: "left",\r
                  borderBottom: "1px solid #e5e7eb",\r
                }}\r
              >\r
                质量\r
              </th>\r
              <th\r
                style={{\r
                  padding: "8px 12px",\r
                  textAlign: "left",\r
                  borderBottom: "1px solid #e5e7eb",\r
                }}\r
              >\r
                支持度\r
              </th>\r
            </tr>\r
          </thead>\r
          <tbody style={{ color: "#5b21b6" }}>\r
            <tr>\r
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #e5e7eb" }}>\r
                WebP\r
              </td>\r
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #e5e7eb" }}>\r
                ⭐⭐⭐⭐⭐\r
              </td>\r
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #e5e7eb" }}>\r
                ⭐⭐⭐⭐⭐\r
              </td>\r
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #e5e7eb" }}>\r
                97%+\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #e5e7eb" }}>\r
                JPEG\r
              </td>\r
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #e5e7eb" }}>\r
                ⭐⭐⭐\r
              </td>\r
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #e5e7eb" }}>\r
                ⭐⭐⭐⭐\r
              </td>\r
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #e5e7eb" }}>\r
                100%\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style={{ padding: "8px 12px" }}>PNG</td>\r
              <td style={{ padding: "8px 12px" }}>⭐⭐</td>\r
              <td style={{ padding: "8px 12px" }}>⭐⭐⭐⭐⭐</td>\r
              <td style={{ padding: "8px 12px" }}>100%</td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default WebPDemo;\r
\r
`;export{r as default};
