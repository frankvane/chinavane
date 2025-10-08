const r=`/**\r
 * 下图布局示例（内容在上，图片在下）\r
 * 适合资讯/说明类卡片，上部文字信息，下部大图展示\r
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
interface CardData {\r
  id: string;\r
  title: string;\r
  subtitle?: string;\r
  image: string;\r
}\r
\r
const BottomImageCard = withPlugins(CardCore, {\r
  plugins: [createHoverPlugin({ enableShadow: true })],\r
});\r
\r
export default function BottomImageLayout() {\r
  const cards: CardData[] = [\r
    {\r
      id: "1",\r
      title: "夏季出行装备指南",\r
      subtitle: "精选轻量与防水单品推荐",\r
      image:\r
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900",\r
    },\r
    {\r
      id: "2",\r
      title: "桌面效率提升方案",\r
      subtitle: "键鼠、支架与显示器搭配建议",\r
      image:\r
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",\r
    },\r
  ];\r
\r
  return (\r
    <DemoPage\r
      title="下图布局（上文 / 下图）"\r
      description="内容在上、图片在下，适合说明类/攻略类卡片。"\r
    >\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",\r
          gap: 16,\r
        }}\r
      >\r
        {cards.map((c) => (\r
          <BottomImageCard\r
            key={c.id}\r
            cardId={c.id}\r
            data={c}\r
            containerStyle={{\r
              background: "#fff",\r
              borderRadius: 10,\r
              border: "1px solid #eee",\r
              overflow: "hidden",\r
              display: "flex",\r
              flexDirection: "column",\r
            }}\r
          >\r
            {/* 上部：文本区 */}\r
            <div style={{ padding: 16 }}>\r
              <h3\r
                style={{\r
                  margin: "0 0 6px 0",\r
                  fontSize: 18,\r
                  fontWeight: 700,\r
                  color: "#333",\r
                }}\r
              >\r
                {c.title}\r
              </h3>\r
              {c.subtitle && (\r
                <p style={{ margin: 0, color: "#666", fontSize: 13 }}>\r
                  {c.subtitle}\r
                </p>\r
              )}\r
            </div>\r
\r
            {/* 下部：图片区 */}\r
            <div style={{ width: "100%", height: 200 }}>\r
              <img\r
                src={c.image}\r
                alt={c.title}\r
                style={{ width: "100%", height: "100%", objectFit: "cover" }}\r
                loading="lazy"\r
              />\r
            </div>\r
          </BottomImageCard>\r
        ))}\r
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
          <li>结构为 column：上部文本、下部大图，信息先于视觉</li>\r
          <li>适合攻略、专题、活动说明等信息主导的场景</li>\r
          <li>图片区域建议固定高度，保证卡片对齐</li>\r
        </ul>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
