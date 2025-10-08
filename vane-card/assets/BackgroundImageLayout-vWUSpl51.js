const r=`/**\r
 * 背景图布局示例（图片为背景，内容覆盖其上）\r
 * 适合海报/活动卡片：背景大图 + 前景渐变遮罩 + 文字与按钮\r
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
export default function BackgroundImageLayout() {\r
  const bg =\r
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1500";\r
\r
  return (\r
    <DemoPage\r
      title="背景图布局（覆盖内容）"\r
      description="使用背景图+渐变遮罩提升可读性，适合活动海报/品牌展示。"\r
    >\r
      <Card\r
        cardId="bg-hero"\r
        data={{}}\r
        containerStyle={{\r
          position: "relative",\r
          borderRadius: 12,\r
          overflow: "hidden",\r
          minHeight: 280,\r
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",\r
          backgroundImage: \`url(\${bg})\`,\r
          backgroundSize: "cover",\r
          backgroundPosition: "center",\r
        }}\r
      >\r
        {/* 渐变遮罩 */}\r
        <div\r
          style={{\r
            position: "absolute",\r
            inset: 0,\r
            background:\r
              "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.2) 100%)",\r
          }}\r
        />\r
\r
        {/* 前景内容 */}\r
        <div\r
          style={{\r
            position: "relative",\r
            zIndex: 1,\r
            color: "#fff",\r
            padding: "36px 40px",\r
            maxWidth: 560,\r
          }}\r
        >\r
          <h2 style={{ margin: 0, fontSize: 34, fontWeight: 800 }}>\r
            夏日清凉季\r
          </h2>\r
          <p style={{ margin: "12px 0 20px", fontSize: 16, opacity: 0.92 }}>\r
            全场耳机/音箱/穿戴低至 8 折，先到先得，售完即止。\r
          </p>\r
          <div style={{ display: "flex", gap: 12 }}>\r
            <button\r
              style={{\r
                padding: "12px 28px",\r
                background: "#ffeb3b",\r
                color: "#333",\r
                border: "none",\r
                borderRadius: 8,\r
                fontWeight: 700,\r
                cursor: "pointer",\r
              }}\r
            >\r
              立即抢购\r
            </button>\r
            <button\r
              style={{\r
                padding: "12px 28px",\r
                background: "rgba(255,255,255,0.15)",\r
                color: "#fff",\r
                border: "1px solid rgba(255,255,255,0.4)",\r
                borderRadius: 8,\r
                cursor: "pointer",\r
              }}\r
            >\r
              活动详情\r
            </button>\r
          </div>\r
        </div>\r
      </Card>\r
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
          <li>图片作为背景，使用 CSS 背景属性控制填充方式</li>\r
          <li>叠加渐变遮罩，保证文字对比度和可读性</li>\r
          <li>前景内容采用较大字号和高对比色，突出行动按钮</li>\r
        </ul>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
