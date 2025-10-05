const n=`import React, { useMemo, useState } from "react";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import { WaterfallCore } from "vane-waterfall";\r
\r
interface WaterfallItem {\r
  id: number;\r
  title: string;\r
  color: string;\r
  height: number;\r
}\r
\r
export default function AdvancedConfigDemo() {\r
  const [useTransform, setUseTransform] = useState(true);\r
  const [debug, setDebug] = useState(false);\r
  const [padding, setPadding] = useState({\r
    top: 20,\r
    right: 20,\r
    bottom: 20,\r
    left: 20,\r
  });\r
\r
  const items = useMemo(() => {\r
    return Array.from({ length: 30 }, (_, i) => ({\r
      id: i + 1,\r
      title: \`Item \${i + 1}\`,\r
      color: \`hsl(\${(i * 137.5) % 360}, 70%, 80%)\`,\r
      height: Math.floor(Math.random() * 200) + 150,\r
    }));\r
  }, []);\r
\r
  return (\r
    <DemoPage\r
      title="高级配置"\r
      description="演示高级配置选项：内边距、定位方式、调试模式等"\r
    >\r
      <div style={{ marginBottom: "16px" }}>\r
        <h3 style={{ marginBottom: "12px", fontSize: "1.1em" }}>⚙️ 配置选项</h3>\r
\r
        {/* Transform vs 绝对定位 */}\r
        <div\r
          style={{\r
            marginBottom: "16px",\r
            padding: "12px",\r
            background: "#f8f9fa",\r
            borderRadius: "4px",\r
          }}\r
        >\r
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>\r
            <input\r
              type="checkbox"\r
              checked={useTransform}\r
              onChange={(e) => setUseTransform(e.target.checked)}\r
            />\r
            <strong>useTransform</strong>\r
            <span style={{ color: "#666", fontSize: "14px" }}>\r
              {useTransform\r
                ? "✅ 使用 Transform 定位 (性能更好，GPU 加速)"\r
                : "❌ 使用绝对定位 (left/top)"}\r
            </span>\r
          </label>\r
        </div>\r
\r
        {/* Debug 模式 */}\r
        <div\r
          style={{\r
            marginBottom: "16px",\r
            padding: "12px",\r
            background: "#f8f9fa",\r
            borderRadius: "4px",\r
          }}\r
        >\r
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>\r
            <input\r
              type="checkbox"\r
              checked={debug}\r
              onChange={(e) => setDebug(e.target.checked)}\r
            />\r
            <strong>debug</strong>\r
            <span style={{ color: "#666", fontSize: "14px" }}>\r
              {debug ? "✅ 调试模式开启 (查看控制台输出)" : "关闭调试模式"}\r
            </span>\r
          </label>\r
        </div>\r
\r
        {/* Padding 配置 */}\r
        <div\r
          style={{\r
            marginBottom: "16px",\r
            padding: "12px",\r
            background: "#f8f9fa",\r
            borderRadius: "4px",\r
          }}\r
        >\r
          <div style={{ marginBottom: "12px" }}>\r
            <strong>padding</strong> - 容器内边距\r
          </div>\r
          <div\r
            style={{\r
              display: "grid",\r
              gridTemplateColumns: "repeat(2, 1fr)",\r
              gap: "12px",\r
            }}\r
          >\r
            <div>\r
              <label style={{ display: "block", marginBottom: "4px" }}>\r
                上边距: {padding.top}px\r
              </label>\r
              <input\r
                type="range"\r
                min="0"\r
                max="50"\r
                value={padding.top}\r
                onChange={(e) =>\r
                  setPadding((p) => ({ ...p, top: Number(e.target.value) }))\r
                }\r
                style={{ width: "100%" }}\r
              />\r
            </div>\r
            <div>\r
              <label style={{ display: "block", marginBottom: "4px" }}>\r
                右边距: {padding.right}px\r
              </label>\r
              <input\r
                type="range"\r
                min="0"\r
                max="50"\r
                value={padding.right}\r
                onChange={(e) =>\r
                  setPadding((p) => ({ ...p, right: Number(e.target.value) }))\r
                }\r
                style={{ width: "100%" }}\r
              />\r
            </div>\r
            <div>\r
              <label style={{ display: "block", marginBottom: "4px" }}>\r
                下边距: {padding.bottom}px\r
              </label>\r
              <input\r
                type="range"\r
                min="0"\r
                max="50"\r
                value={padding.bottom}\r
                onChange={(e) =>\r
                  setPadding((p) => ({ ...p, bottom: Number(e.target.value) }))\r
                }\r
                style={{ width: "100%" }}\r
              />\r
            </div>\r
            <div>\r
              <label style={{ display: "block", marginBottom: "4px" }}>\r
                左边距: {padding.left}px\r
              </label>\r
              <input\r
                type="range"\r
                min="0"\r
                max="50"\r
                value={padding.left}\r
                onChange={(e) =>\r
                  setPadding((p) => ({ ...p, left: Number(e.target.value) }))\r
                }\r
                style={{ width: "100%" }}\r
              />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div\r
          style={{\r
            padding: "12px",\r
            background: "#d1ecf1",\r
            borderRadius: "4px",\r
            fontSize: "14px",\r
          }}\r
        >\r
          <strong>💡 说明：</strong>\r
          <ul style={{ margin: "8px 0", paddingLeft: "20px" }}>\r
            <li>\r
              <strong>useTransform</strong>: 使用 CSS Transform 进行定位，GPU\r
              加速，性能更好\r
            </li>\r
            <li>\r
              <strong>debug</strong>: 开启后会在控制台输出布局计算时间和详细信息\r
            </li>\r
            <li>\r
              <strong>padding</strong>: 容器内边距，可以统一设置或分别设置四边\r
            </li>\r
          </ul>\r
        </div>\r
      </div>\r
\r
      <div\r
        style={{\r
          height: "600px",\r
          border: "1px solid #ddd",\r
          borderRadius: "8px",\r
          overflow: "hidden",\r
          position: "relative",\r
        }}\r
      >\r
        {/* 显示内边距参考线 */}\r
        {(padding.top > 0 ||\r
          padding.right > 0 ||\r
          padding.bottom > 0 ||\r
          padding.left > 0) && (\r
          <div\r
            style={{\r
              position: "absolute",\r
              top: padding.top,\r
              right: padding.right,\r
              bottom: padding.bottom,\r
              left: padding.left,\r
              border: "2px dashed #007bff",\r
              pointerEvents: "none",\r
              zIndex: 10,\r
            }}\r
          >\r
            <div\r
              style={{\r
                position: "absolute",\r
                top: "-20px",\r
                left: "50%",\r
                transform: "translateX(-50%)",\r
                background: "#007bff",\r
                color: "white",\r
                padding: "2px 8px",\r
                borderRadius: "4px",\r
                fontSize: "12px",\r
              }}\r
            >\r
              内容区域\r
            </div>\r
          </div>\r
        )}\r
\r
        <WaterfallCore\r
          items={items}\r
          columns={3}\r
          gap={16}\r
          padding={padding}\r
          useTransform={useTransform}\r
          debug={debug}\r
          renderItem={(item: WaterfallItem) => (\r
            <div\r
              style={{\r
                background: item.color,\r
                height: item.height,\r
                borderRadius: "8px",\r
                padding: "16px",\r
                display: "flex",\r
                flexDirection: "column",\r
                alignItems: "center",\r
                justifyContent: "center",\r
                fontWeight: "bold",\r
                fontSize: "16px",\r
                color: "#333",\r
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",\r
              }}\r
              role="button"\r
              tabIndex={0}\r
              onKeyDown={(e) => {\r
                if (e.key === "Enter" || e.key === " ") {\r
                  e.preventDefault();\r
                  e.currentTarget.click();\r
                }\r
              }}\r
            >\r
              <div>{item.title}</div>\r
              <div style={{ fontSize: "12px", marginTop: "8px", opacity: 0.7 }}>\r
                {useTransform ? "Transform" : "Absolute"}\r
              </div>\r
            </div>\r
          )}\r
          keyExtractor={(item: WaterfallItem) => item.id}\r
          itemStyle={{\r
            // 自定义项样式\r
            border: "2px solid rgba(0,0,0,0.1)",\r
          }}\r
          containerStyle={{\r
            height: "100%",\r
            background: "#f5f5f5",\r
          }}\r
        />\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{n as default};
