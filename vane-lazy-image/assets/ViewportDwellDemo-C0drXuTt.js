const r=`import {\r
  LazyLoadImageCore,\r
  createViewportDwellPlugin,\r
  withPlugins,\r
} from "../../components/LazyLoadImagePlugin";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const ImageWithDwell = withPlugins(LazyLoadImageCore, [\r
  createViewportDwellPlugin({\r
    dwellMs: 1000, // 需要在视口停留1秒才加载\r
    maxWaitMs: 3000, // 最长等待3秒\r
    onlyWhenIntersecting: true,\r
    debug: true,\r
  }),\r
]);\r
\r
const ViewportDwellDemo: React.FC = () => {\r
  const srcs = Array.from(\r
    { length: 12 },\r
    (_, i) =>\r
      \`https://picsum.photos/seed/viewport-dwell-\${i}/800/600?w=1280&auto=format&fit=crop\`\r
  );\r
\r
  return (\r
    <DemoPage\r
      title="ViewportDwell - 视口驻留加载"\r
      description="图片进入视口后需停留一定时间才开始加载，减少快速滚动时的无效请求"\r
    >\r
      <div style={{ marginBottom: 20 }}>\r
        <div\r
          style={{\r
            padding: 16,\r
            background: "#fef3c7",\r
            borderRadius: "8px",\r
            border: "1px solid #f59e0b",\r
          }}\r
        >\r
          <p style={{ margin: 0, color: "#92400e", lineHeight: "1.6" }}>\r
            ⏱️ <strong>驻留时间策略：</strong>\r
            图片进入视口后需停留 <strong>1 秒</strong>{" "}\r
            才会开始加载。快速滚动时不会触发加载，节省带宽。\r
          </p>\r
        </div>\r
      </div>\r
\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",\r
          gap: 16,\r
        }}\r
      >\r
        {srcs.map((src, i) => (\r
          <div key={src + i} style={{ width: "100%", height: 200 }}>\r
            <ImageWithDwell\r
              src={src}\r
              alt={\`视口驻留加载示例 \${i + 1}\`}\r
              loading="lazy"\r
              rootMargin="200px"\r
              containerStyle={{\r
                width: "100%",\r
                height: "100%",\r
                background: "#f3f4f6",\r
              }}\r
              imageStyle={{\r
                width: "100%",\r
                height: "100%",\r
                objectFit: "cover",\r
              }}\r
            />\r
            <p\r
              style={{\r
                textAlign: "center",\r
                marginTop: 8,\r
                fontSize: "0.9em",\r
                color: "#666",\r
              }}\r
            >\r
              图片 {i + 1}\r
            </p>\r
          </div>\r
        ))}\r
      </div>\r
\r
      <div style={{ marginTop: 20 }}>\r
        <div\r
          style={{\r
            padding: 16,\r
            background: "#dbeafe",\r
            borderRadius: "8px",\r
            border: "1px solid #3b82f6",\r
          }}\r
        >\r
          <p\r
            style={{\r
              margin: 0,\r
              color: "#1e40af",\r
              lineHeight: "1.6",\r
              marginBottom: 8,\r
            }}\r
          >\r
            💡 <strong>测试方法：</strong>\r
          </p>\r
          <ul style={{ margin: 0, color: "#1e40af", lineHeight: "1.8" }}>\r
            <li>快速滚动页面，图片不会立即加载</li>\r
            <li>在某张图片上停留1秒以上，它会开始加载</li>\r
            <li>打开控制台查看驻留时间日志</li>\r
          </ul>\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default ViewportDwellDemo;\r
\r
`;export{r as default};
