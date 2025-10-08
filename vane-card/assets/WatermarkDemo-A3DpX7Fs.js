const r=`import { LazyLoadImageCore, createWatermarkPlugin, withPlugins } from "vane-lazy-image";\r
import { ProductCard } from "vane-card";\r
import DemoPage from "../_layout/DemoPage";\r
import React from "react";\r
\r
const LazyImage = withPlugins(LazyLoadImageCore as any, [\r
  createWatermarkPlugin({\r
    text: "VANE",\r
    position: "bottom-right",\r
    opacity: 0.6,\r
  }),\r
]);\r
\r
export default function WatermarkDemo() {\r
  const product = {\r
    id: "card-lazy-watermark",\r
    title: "示例商品：水印懒加载图",\r
    description: "结合 vane-card 与 vane-lazy-image 水印插件",\r
    price: 199,\r
    image: "https://picsum.photos/seed/watermark-demo/800/600",\r
  };\r
\r
  return (\r
    <DemoPage\r
      title="vane-card 结合 vane-lazy-image（水印）"\r
      description="在卡片的媒体区域使用带水印的懒加载图片，并配合标题/价格等卡片信息。"\r
    >\r
      <div className="card" style={{ padding: 16, maxWidth: 860, margin: "0 auto" }}>\r
        <ProductCard productId={product.id} data={product}>\r
          <div style={{ display: "grid", gridTemplateColumns: "480px 1fr", gap: 16 }}>\r
            {/* 左侧：媒体区使用 LazyImage + 水印 */}\r
            <ProductCard.Section title="媒体">\r
              <div style={{ width: "100%", aspectRatio: "4 / 3", borderRadius: 12, overflow: "hidden" }}>\r
                <LazyImage\r
                  src={product.image}\r
                  loading="lazy"\r
                  containerStyle={{ width: "100%", height: "100%" }}\r
                  imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
                />\r
              </div>\r
            </ProductCard.Section>\r
\r
            {/* 右侧：卡片文本与价格信息 */}\r
            <div>\r
              <ProductCard.Title />\r
              <ProductCard.Description lines={2} style={{ color: "#555", marginTop: 6 }} />\r
\r
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 10 }}>\r
                <ProductCard.Price />\r
              </div>\r
\r
              <div style={{ marginTop: 12 }}>\r
                <ProductCard.Actions />\r
              </div>\r
            </div>\r
          </div>\r
        </ProductCard>\r
      </div>\r
    </DemoPage>\r
  );\r
}`;export{r as default};
