const r=`/**\r
 * 双列对称布局示例（50/50）\r
 * 左右对称两列，支持并排展示两类信息/两张图\r
 */\r
\r
import {\r
  CardCore,\r
  createHoverPlugin,\r
  withPlugins,\r
} from "vane-card";\r
\r
import DemoPage from "../_layout/DemoPage";\r
import React from "react";\r
\r
const Card = withPlugins(CardCore, {\r
  plugins: [createHoverPlugin({ enableShadow: true })],\r
});\r
\r
export default function TwoColumnLayout() {\r
  const left =\r
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=900";\r
  const right =\r
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900";\r
\r
  return (\r
    <DemoPage\r
      title="双列对称布局（50/50）"\r
      description="左右两列对称，适合对比展示或并列内容。"\r
    >\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "1fr 1fr",\r
          gap: 16,\r
        }}\r
      >\r
        <Card\r
          cardId="two-left"\r
          data={{}}\r
          containerStyle={{\r
            borderRadius: 10,\r
            overflow: "hidden",\r
            background: "#fff",\r
            border: "1px solid #eee",\r
          }}\r
        >\r
          <img\r
            src={left}\r
            alt="left"\r
            style={{ width: "100%", height: 220, objectFit: "cover" }}\r
          />\r
          <div style={{ padding: 16 }}>\r
            <h3 style={{ margin: 0 }}>左侧内容块</h3>\r
            <p style={{ margin: "8px 0 0", color: "#666" }}>\r
              可放置图文、参数、卖点等。\r
            </p>\r
          </div>\r
        </Card>\r
\r
        <Card\r
          cardId="two-right"\r
          data={{}}\r
          containerStyle={{\r
            borderRadius: 10,\r
            overflow: "hidden",\r
            background: "#fff",\r
            border: "1px solid #eee",\r
          }}\r
        >\r
          <img\r
            src={right}\r
            alt="right"\r
            style={{ width: "100%", height: 220, objectFit: "cover" }}\r
          />\r
          <div style={{ padding: 16 }}>\r
            <h3 style={{ margin: 0 }}>右侧内容块</h3>\r
            <p style={{ margin: "8px 0 0", color: "#666" }}>\r
              适合对比、并列展示两类内容。\r
            </p>\r
          </div>\r
        </Card>\r
      </div>\r
\r
      <div\r
        style={{\r
          marginTop: 40,\r
          padding: 20,\r
          background: "#f5f5f5",\r
          borderRadius: 8,\r
        }}\r
      >\r
        <h2 style={{ marginTop: 0 }}>布局说明</h2>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>50/50 两列对称，借助 CSS Grid 快速实现</li>\r
          <li>移动端可改为单列（示例保持桌面尺寸）</li>\r
          <li>适合对比展示、专题页模块化拼装</li>\r
        </ul>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
