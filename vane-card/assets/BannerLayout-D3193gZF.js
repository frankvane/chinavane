const r=`/**\r
 * Banner横幅布局示例\r
 * 全宽展示，左侧内容右侧图片的促销横幅布局\r
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
interface ProductData {\r
  id: string;\r
  name: string;\r
  price: number;\r
  description?: string;\r
  image: string;\r
  badge?: string;\r
  badgeType?: "premium" | "hot" | "new" | "sale";\r
}\r
\r
export default function BannerLayout() {\r
  const products: ProductData[] = [\r
    {\r
      id: "1",\r
      name: "专业运动耳机",\r
      price: 899,\r
      description: "高品质音质，舒适佩戴，长续航",\r
      image:\r
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",\r
      badge: "热卖",\r
      badgeType: "hot",\r
    },\r
    {\r
      id: "2",\r
      name: "智能手环",\r
      price: 299,\r
      description: "健康监测，运动追踪，智能提醒",\r
      image:\r
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",\r
      badge: "新品",\r
      badgeType: "new",\r
    },\r
  ];\r
\r
  const Card = withPlugins(CardCore, {\r
    plugins: [createHoverPlugin({ enableShadow: true })],\r
  });\r
\r
  return (\r
    <DemoPage\r
      title="Banner横幅布局"\r
      description="全宽展示的促销横幅，适用于页面头部、活动推广"\r
    >\r
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>\r
        {/* 紫色渐变 Banner */}\r
        <Card\r
          cardId="banner-1"\r
          data={products[0]}\r
          containerStyle={{\r
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",\r
            borderRadius: "12px",\r
            overflow: "hidden",\r
            display: "flex",\r
            alignItems: "center",\r
            minHeight: "260px",\r
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",\r
          }}\r
        >\r
          {/* 左侧：内容区域 (55%) */}\r
          <div\r
            style={{\r
              width: "55%",\r
              padding: "40px",\r
              display: "flex",\r
              flexDirection: "column",\r
              justifyContent: "center",\r
              color: "#fff",\r
            }}\r
          >\r
            <h2\r
              style={{\r
                margin: "0 0 16px 0",\r
                fontSize: "36px",\r
                fontWeight: "bold",\r
                color: "#fff",\r
                lineHeight: 1.2,\r
              }}\r
            >\r
              {products[0].name}\r
            </h2>\r
            <p\r
              style={{\r
                margin: "0 0 24px 0",\r
                fontSize: "16px",\r
                color: "rgba(255,255,255,0.95)",\r
                lineHeight: 1.8,\r
              }}\r
            >\r
              {products[0].description}\r
            </p>\r
            <div style={{ marginBottom: "28px" }}>\r
              <span\r
                style={{\r
                  fontSize: "48px",\r
                  fontWeight: "bold",\r
                  color: "#FFD700",\r
                  textShadow: "0 2px 4px rgba(0,0,0,0.2)",\r
                }}\r
              >\r
                ¥{products[0].price}\r
              </span>\r
            </div>\r
            <div style={{ display: "flex", gap: "12px" }}>\r
              <button\r
                style={{\r
                  padding: "14px 32px",\r
                  background: "#fff",\r
                  color: "#667eea",\r
                  border: "none",\r
                  borderRadius: "8px",\r
                  fontSize: "16px",\r
                  fontWeight: "600",\r
                  cursor: "pointer",\r
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",\r
                  transition: "all 0.3s",\r
                }}\r
                onMouseEnter={(e) => {\r
                  e.currentTarget.style.transform = "translateY(-2px)";\r
                  e.currentTarget.style.boxShadow =\r
                    "0 6px 16px rgba(0,0,0,0.2)";\r
                }}\r
                onMouseLeave={(e) => {\r
                  e.currentTarget.style.transform = "translateY(0)";\r
                  e.currentTarget.style.boxShadow =\r
                    "0 4px 12px rgba(0,0,0,0.15)";\r
                }}\r
              >\r
                加入购物车\r
              </button>\r
              <button\r
                style={{\r
                  padding: "14px 32px",\r
                  background: "rgba(255,255,255,0.2)",\r
                  color: "#fff",\r
                  border: "2px solid rgba(255,255,255,0.6)",\r
                  borderRadius: "8px",\r
                  fontSize: "16px",\r
                  fontWeight: "600",\r
                  cursor: "pointer",\r
                  backdropFilter: "blur(10px)",\r
                  transition: "all 0.3s",\r
                }}\r
                onMouseEnter={(e) => {\r
                  e.currentTarget.style.background = "rgba(255,255,255,0.3)";\r
                  e.currentTarget.style.borderColor = "#fff";\r
                }}\r
                onMouseLeave={(e) => {\r
                  e.currentTarget.style.background = "rgba(255,255,255,0.2)";\r
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";\r
                }}\r
              >\r
                加入心愿单\r
              </button>\r
            </div>\r
          </div>\r
\r
          {/* 右侧：图片区域 (45%) */}\r
          <div\r
            style={{\r
              width: "45%",\r
              height: "260px",\r
              flexShrink: 0,\r
              position: "relative",\r
            }}\r
          >\r
            <img\r
              src={products[0].image}\r
              alt={products[0].name}\r
              style={{\r
                width: "100%",\r
                height: "100%",\r
                objectFit: "cover",\r
              }}\r
              loading="lazy"\r
            />\r
            {products[0].badge && (\r
              <div\r
                style={{\r
                  position: "absolute",\r
                  top: "20px",\r
                  right: "20px",\r
                  padding: "8px 20px",\r
                  background: "#FF5722",\r
                  color: "#fff",\r
                  fontSize: "14px",\r
                  fontWeight: "bold",\r
                  borderRadius: "20px",\r
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",\r
                }}\r
              >\r
                {products[0].badge}\r
              </div>\r
            )}\r
          </div>\r
        </Card>\r
\r
        {/* 橙色渐变 Banner */}\r
        <Card\r
          cardId="banner-2"\r
          data={products[1]}\r
          containerStyle={{\r
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",\r
            borderRadius: "12px",\r
            overflow: "hidden",\r
            display: "flex",\r
            alignItems: "center",\r
            minHeight: "260px",\r
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",\r
          }}\r
        >\r
          {/* 左侧：内容区域 */}\r
          <div\r
            style={{\r
              width: "55%",\r
              padding: "40px",\r
              display: "flex",\r
              flexDirection: "column",\r
              justifyContent: "center",\r
              color: "#fff",\r
            }}\r
          >\r
            <h2\r
              style={{\r
                margin: "0 0 16px 0",\r
                fontSize: "36px",\r
                fontWeight: "bold",\r
                color: "#fff",\r
                lineHeight: 1.2,\r
              }}\r
            >\r
              {products[1].name}\r
            </h2>\r
            <p\r
              style={{\r
                margin: "0 0 24px 0",\r
                fontSize: "16px",\r
                color: "rgba(255,255,255,0.95)",\r
                lineHeight: 1.8,\r
              }}\r
            >\r
              {products[1].description}\r
            </p>\r
            <div style={{ marginBottom: "28px" }}>\r
              <span\r
                style={{\r
                  fontSize: "48px",\r
                  fontWeight: "bold",\r
                  color: "#fff",\r
                  textShadow: "0 2px 4px rgba(0,0,0,0.2)",\r
                }}\r
              >\r
                ¥{products[1].price}\r
              </span>\r
            </div>\r
            <div style={{ display: "flex", gap: "12px" }}>\r
              <button\r
                style={{\r
                  padding: "14px 32px",\r
                  background: "#fff",\r
                  color: "#f5576c",\r
                  border: "none",\r
                  borderRadius: "8px",\r
                  fontSize: "16px",\r
                  fontWeight: "600",\r
                  cursor: "pointer",\r
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",\r
                  transition: "all 0.3s",\r
                }}\r
              >\r
                立即购买\r
              </button>\r
              <button\r
                style={{\r
                  padding: "14px 32px",\r
                  background: "rgba(255,255,255,0.2)",\r
                  color: "#fff",\r
                  border: "2px solid rgba(255,255,255,0.6)",\r
                  borderRadius: "8px",\r
                  fontSize: "16px",\r
                  fontWeight: "600",\r
                  cursor: "pointer",\r
                  backdropFilter: "blur(10px)",\r
                  transition: "all 0.3s",\r
                }}\r
              >\r
                了解详情\r
              </button>\r
            </div>\r
          </div>\r
\r
          {/* 右侧：图片区域 */}\r
          <div\r
            style={{\r
              width: "45%",\r
              height: "260px",\r
              flexShrink: 0,\r
              position: "relative",\r
            }}\r
          >\r
            <img\r
              src={products[1].image}\r
              alt={products[1].name}\r
              style={{\r
                width: "100%",\r
                height: "100%",\r
                objectFit: "cover",\r
              }}\r
              loading="lazy"\r
            />\r
            {products[1].badge && (\r
              <div\r
                style={{\r
                  position: "absolute",\r
                  top: "20px",\r
                  right: "20px",\r
                  padding: "8px 20px",\r
                  background: "#4CAF50",\r
                  color: "#fff",\r
                  fontSize: "14px",\r
                  fontWeight: "bold",\r
                  borderRadius: "20px",\r
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",\r
                }}\r
              >\r
                {products[1].badge}\r
              </div>\r
            )}\r
          </div>\r
        </Card>\r
      </div>\r
\r
      {/* 说明文档 */}\r
      <div\r
        style={{\r
          marginTop: "40px",\r
          padding: "20px",\r
          background: "#f5f5f5",\r
          borderRadius: "8px",\r
        }}\r
      >\r
        <h2 style={{ marginTop: 0 }}>布局说明</h2>\r
        <h3>适用场景</h3>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>页面顶部主推广位</li>\r
          <li>活动专区入口</li>\r
          <li>重点商品推荐</li>\r
          <li>促销活动展示</li>\r
        </ul>\r
\r
        <h3>布局特点</h3>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>全宽展示，视觉冲击力强</li>\r
          <li>左侧内容 55%，右侧图片 45%，黄金比例</li>\r
          <li>渐变背景营造品牌氛围</li>\r
          <li>大字号价格和行动按钮，引导转化</li>\r
        </ul>\r
\r
        <h3>设计要点</h3>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>使用渐变背景区分不同活动或分类</li>\r
          <li>标题 36px，价格 48px，层次分明</li>\r
          <li>按钮有悬停效果，增强交互反馈</li>\r
          <li>徽章位于图片右上角，不遮挡主体</li>\r
          <li>使用 CardPlugin 包裹，布局主体通过自定义内容呈现</li>\r
        </ul>\r
\r
        <h3>颜色方案</h3>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>\r
            <strong>紫色系</strong>：高端、科技感（#667eea → #764ba2）\r
          </li>\r
          <li>\r
            <strong>粉橙系</strong>：活力、时尚感（#f093fb → #f5576c）\r
          </li>\r
          <li>\r
            <strong>蓝绿系</strong>：清新、自然感（可自定义）\r
          </li>\r
        </ul>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
