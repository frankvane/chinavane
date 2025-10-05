const r=`import React, { useMemo } from "react";\r
import { WaterfallCore, createVirtualWaterfallPlugin, withPlugins } from "vane-waterfall";\r
\r
import DemoPage from "./_layout/DemoPage";\r
\r
interface ImageItem {\r
  id: number;\r
  url: string;\r
  title: string;\r
  height: number; // 依据列宽和图片纵横比预先计算出的高度\r
}\r
\r
// 固定容器宽度，便于演示依据列宽计算图片高度的虚拟瀑布流\r
const CONTAINER_WIDTH = 960;\r
const COLUMNS = 4;\r
const GAP = 12;\r
const COLUMN_WIDTH = Math.floor((CONTAINER_WIDTH - (COLUMNS - 1) * GAP) / COLUMNS);\r
\r
const VirtualImages = withPlugins(WaterfallCore, [\r
  createVirtualWaterfallPlugin<ImageItem>({\r
    overscanPx: 400,\r
    getItemHeight: (item) => item.height,\r
  }),\r
]);\r
\r
export default function VirtualImageDemo() {\r
  const items = useMemo(() => {\r
    // 构造图片项，使用随机纵横比计算高度，并生成对应尺寸的图片 URL\r
    return Array.from({ length: 400 }, (_, i) => {\r
      const aspectRatio = 0.75 + Math.random() * 0.85; // 大约 0.75 ~ 1.6 的纵横比\r
      const height = Math.round(COLUMN_WIDTH * aspectRatio);\r
      const id = (i % 100) + 1; // picsum 有很多 id，可循环复用\r
      const url = \`https://picsum.photos/id/\${id}/\${COLUMN_WIDTH}/\${height}\`;\r
      return {\r
        id: i + 1,\r
        url,\r
        title: \`Photo \${i + 1}\`,\r
        height,\r
      } as ImageItem;\r
    });\r
  }, []);\r
\r
  return (\r
    <DemoPage\r
      title="虚拟瀑布流（可预测高度）"\r
      description="此示例为可预测高度：高度基于列宽与纵横比预先计算。为加快演示，可用不同高度的色块替代图片。"\r
    >\r
      <div style={{ marginBottom: 12, color: "#666" }}>\r
        图片项提前根据列宽和纵横比计算高度，核心仅渲染视口附近项，滚动更流畅。\r
      </div>\r
\r
      <div\r
        style={{\r
          width: \`\${CONTAINER_WIDTH}px\`,\r
          height: "650px",\r
          border: "1px solid #ddd",\r
          borderRadius: "8px",\r
          overflow: "hidden",\r
          position: "relative",\r
        }}\r
      >\r
        <VirtualImages\r
          items={items}\r
          columns={COLUMNS}\r
          gap={GAP}\r
          renderItem={(item: ImageItem) => (\r
            // 为演示速度，使用色块替代图片，但高度仍为预计算值\r
            <div\r
              style={{\r
                height: item.height,\r
                borderRadius: 6,\r
                overflow: "hidden",\r
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",\r
                background: \`hsl(\${(item.id * 137.5) % 360}, 70%, 80%)\`,\r
                display: "flex",\r
                alignItems: "center",\r
                justifyContent: "center",\r
                color: "#333",\r
                fontWeight: 500,\r
              }}\r
            >\r
              {item.title}\r
            </div>\r
          )}\r
          containerStyle={{ height: "100%" }}\r
        />\r
      </div>\r
    </DemoPage>\r
  );\r
}`;export{r as default};
