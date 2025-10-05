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
export default function CustomGapDemo() {\r
  const [gap, setGap] = useState(16);\r
  const [rowGap, setRowGap] = useState(16);\r
  const [columnGap, setColumnGap] = useState(16);\r
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
      title="自定义间距"\r
      description="自定义行间距和列间距，支持统一间距或分别设置"\r
    >\r
      <div style={{ marginBottom: "16px" }}>\r
        <div style={{ marginBottom: "12px" }}>\r
          <label style={{ display: "block", marginBottom: "4px" }}>\r
            统一间距: {gap}px\r
          </label>\r
          <input\r
            type="range"\r
            min="0"\r
            max="50"\r
            value={gap}\r
            onChange={(e) => {\r
              const value = Number(e.target.value);\r
              setGap(value);\r
              setRowGap(value);\r
              setColumnGap(value);\r
            }}\r
            style={{ width: "300px" }}\r
          />\r
        </div>\r
        <div style={{ marginBottom: "12px" }}>\r
          <label style={{ display: "block", marginBottom: "4px" }}>\r
            行间距: {rowGap}px\r
          </label>\r
          <input\r
            type="range"\r
            min="0"\r
            max="50"\r
            value={rowGap}\r
            onChange={(e) => setRowGap(Number(e.target.value))}\r
            style={{ width: "300px" }}\r
          />\r
        </div>\r
        <div style={{ marginBottom: "12px" }}>\r
          <label style={{ display: "block", marginBottom: "4px" }}>\r
            列间距: {columnGap}px\r
          </label>\r
          <input\r
            type="range"\r
            min="0"\r
            max="50"\r
            value={columnGap}\r
            onChange={(e) => setColumnGap(Number(e.target.value))}\r
            style={{ width: "300px" }}\r
          />\r
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
          columns={3}\r
          rowGap={rowGap}\r
          columnGap={columnGap}\r
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
