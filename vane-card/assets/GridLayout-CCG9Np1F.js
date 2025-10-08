const r=`/**\r
 * 网格紧凑布局示例\r
 * 多列小卡片，适合快速浏览和密集展示\r
 */\r
\r
import {\r
  CardCore,\r
  createHoverPlugin,\r
  createImagePlugin,\r
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
  image: string;\r
}\r
\r
const GridCard = withPlugins(CardCore, {\r
  plugins: [\r
    createImagePlugin({ lazyLoad: true }),\r
    createHoverPlugin({ enableShadow: true }),\r
  ],\r
});\r
\r
export default function GridLayout() {\r
  const products: ProductData[] = [\r
    {\r
      id: "1",\r
      name: "专业运动耳机",\r
      price: 899,\r
      image:\r
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",\r
    },\r
    {\r
      id: "2",\r
      name: "智能手环",\r
      price: 299,\r
      image:\r
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",\r
    },\r
    {\r
      id: "3",\r
      name: "无线充电器",\r
      price: 199,\r
      image:\r
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",\r
    },\r
    {\r
      id: "4",\r
      name: "蓝牙音箱",\r
      price: 599,\r
      image:\r
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",\r
    },\r
    {\r
      id: "5",\r
      name: "智能手表",\r
      price: 1299,\r
      image:\r
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",\r
    },\r
    {\r
      id: "6",\r
      name: "无线鼠标",\r
      price: 159,\r
      image:\r
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",\r
    },\r
    {\r
      id: "7",\r
      name: "机械键盘",\r
      price: 599,\r
      image:\r
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",\r
    },\r
    {\r
      id: "8",\r
      name: "显示器",\r
      price: 1899,\r
      image:\r
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",\r
    },\r
  ];\r
\r
  return (\r
    <DemoPage\r
      title="网格紧凑布局"\r
      description="多列小卡片布局，适合快速浏览和密集展示商品"\r
    >\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",\r
          gap: "12px",\r
        }}\r
      >\r
        {products.map((product) => (\r
          <GridCard\r
            key={product.id}\r
            cardId={product.id}\r
            data={product}\r
            containerStyle={{\r
              background: "#fff",\r
              borderRadius: "6px",\r
              overflow: "hidden",\r
              border: "1px solid #f0f0f0",\r
            }}\r
          >\r
            <div style={{ padding: "8px" }}>\r
              <h4\r
                style={{\r
                  margin: "0 0 4px 0",\r
                  fontSize: "13px",\r
                  fontWeight: "500",\r
                  color: "#333",\r
                  overflow: "hidden",\r
                  textOverflow: "ellipsis",\r
                  whiteSpace: "nowrap",\r
                }}\r
              >\r
                {product.name}\r
              </h4>\r
              <p\r
                style={{\r
                  margin: 0,\r
                  fontSize: "16px",\r
                  fontWeight: "bold",\r
                  color: "#e53935",\r
                }}\r
              >\r
                ¥{product.price}\r
              </p>\r
            </div>\r
          </GridCard>\r
        ))}\r
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
          <li>商品快速浏览</li>\r
          <li>分类商品墙</li>\r
          <li>相关推荐区域</li>\r
          <li>搭配商品展示</li>\r
        </ul>\r
\r
        <h3>布局特点</h3>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>单个卡片尺寸较小，信息密度高</li>\r
          <li>自动填充网格，充分利用空间</li>\r
          <li>最小宽度 160px，保证内容可读性</li>\r
          <li>间距紧凑（12px），视觉统一</li>\r
        </ul>\r
\r
        <h3>设计要点</h3>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>标题使用省略号防止换行</li>\r
          <li>只展示最核心信息：图片、名称、价格</li>\r
          <li>悬停时有阴影效果，提供反馈</li>\r
          <li>适合移动端和桌面端响应式展示</li>\r
        </ul>\r
\r
        <h3>使用建议</h3>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>建议一行展示 4-6 个卡片</li>\r
          <li>商品名称控制在 10 字以内</li>\r
          <li>图片保持 1:1 比例，视觉整齐</li>\r
          <li>可配合分页或无限滚动使用</li>\r
        </ul>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
