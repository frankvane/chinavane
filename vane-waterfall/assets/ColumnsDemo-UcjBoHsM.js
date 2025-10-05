const r=`import React, { useMemo, useState } from "react";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import { WaterfallCore } from "@/components/WaterfallPlugin";\r
\r
interface WaterfallItem {\r
  id: number;\r
  title: string;\r
  color: string;\r
  height: number;\r
}\r
\r
export default function ColumnsDemo() {\r
  const [columns, setColumns] = useState(3);\r
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
      title="自定义列数"\r
      description="手动调整列数，查看不同列数下的布局效果"\r
    >\r
      <div style={{ marginBottom: "16px" }}>\r
        <label style={{ display: "block", marginBottom: "8px" }}>\r
          列数: <strong>{columns}</strong>\r
        </label>\r
        <input\r
          type="range"\r
          min="1"\r
          max="6"\r
          value={columns}\r
          onChange={(e) => setColumns(Number(e.target.value))}\r
          style={{ width: "300px" }}\r
        />\r
        <div style={{ marginTop: "8px", fontSize: "14px", color: "#666" }}>\r
          拖动滑块调整列数（1-6）\r
        </div>\r
      </div>\r
\r
      <div\r
        style={{\r
          height: "600px",\r
          border: "1px solid #ddd",\r
          borderRadius: "8px",\r
          overflow: "hidden",\r
        }}\r
      >\r
        <WaterfallCore\r
          items={items}\r
          columns={columns}\r
          gap={16}\r
          renderItem={(item: WaterfallItem) => (\r
            <div\r
              style={{\r
                background: item.color,\r
                height: item.height,\r
                borderRadius: "8px",\r
                padding: "16px",\r
                display: "flex",\r
                alignItems: "center",\r
                justifyContent: "center",\r
                fontWeight: "bold",\r
                fontSize: "18px",\r
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
              {item.title}\r
            </div>\r
          )}\r
          keyExtractor={(item: WaterfallItem) => item.id}\r
          containerStyle={{\r
            height: "100%",\r
            background: "#f5f5f5",\r
            padding: "16px",\r
          }}\r
        />\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
