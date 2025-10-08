const r=`/**\r
 * 插槽示例：Gallery + Video（头部画廊与视频预览）\r
 */\r
\r
import {\r
  CardCore,\r
  createActionsPlugin,\r
  createGalleryPlugin,\r
  createHoverPlugin,\r
  createStatePlugin,\r
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
  images?: string[];\r
  image?: string;\r
  video?: string;\r
  poster?: string;\r
}\r
\r
const ProductCard = withPlugins(CardCore, {\r
  plugins: [\r
    // 使用 Gallery 插件统一处理图片/视频头部区域\r
    createGalleryPlugin({\r
      autoplay: false,\r
      showIndicators: true,\r
      showThumbnails: true,\r
      enableZoom: true,\r
      // 将视频插入到第 2 个位置（1 开始）\r
      videoIndex: 2,\r
    }),\r
    createHoverPlugin({ enableShadow: true, enableScale: true }),\r
    createStatePlugin({ enableCart: true, enableWishlist: true }),\r
    createActionsPlugin({ showCartButton: true, showWishlistButton: true }),\r
  ],\r
});\r
\r
export default function GalleryVideoSlots() {\r
  const products: ProductData[] = [\r
    {\r
      id: "gv1",\r
      name: "旗舰耳机（含视频）",\r
      price: 1299,\r
      images: [\r
        "https://picsum.photos/id/1060/800/600",\r
        "https://picsum.photos/id/1059/800/600",\r
        "https://picsum.photos/id/1058/800/600",\r
      ],\r
      video: "https://www.w3schools.com/html/mov_bbb.mp4",\r
      poster: "https://picsum.photos/id/1060/800/600",\r
    },\r
    {\r
      id: "gv2",\r
      name: "轻薄相机（无视频）",\r
      price: 2599,\r
      images: [\r
        "https://picsum.photos/id/1015/800/600",\r
        "https://picsum.photos/id/1016/800/600",\r
      ],\r
    },\r
  ];\r
\r
  return (\r
    <DemoPage\r
      title="插槽示例：Gallery + Video"\r
      description="通过 Gallery 插件管理图片与视频，支持缩略图、指示器与点击播放。"\r
    >\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",\r
          gap: 20,\r
        }}\r
      >\r
        {products.map((p) => (\r
          <ProductCard\r
            key={p.id}\r
            cardId={p.id}\r
            data={p}\r
            containerStyle={{\r
              background: "#fff",\r
              borderRadius: 8,\r
              border: "1px solid #eee",\r
              overflow: "hidden",\r
            }}\r
          >\r
            <div style={{ padding: 16 }}>\r
              <h3 style={{ margin: 0, fontSize: 16 }}>{p.name}</h3>\r
              <div style={{ marginTop: 8, fontSize: 18, fontWeight: 800, color: "#e53935" }}>\r
                ¥{p.price}\r
              </div>\r
            </div>\r
          </ProductCard>\r
        ))}\r
      </div>\r
    </DemoPage>\r
  );\r
}`;export{r as default};
