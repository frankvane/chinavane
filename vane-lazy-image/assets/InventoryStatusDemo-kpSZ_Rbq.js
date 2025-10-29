const r=`import React, { useState } from "react";\r
import { LazyLoadImageCore } from "vane-lazy-image/core";\r
import { withPlugins } from "vane-lazy-image/plugins";\r
import { createInventoryStatusPlugin } from "vane-lazy-image/custom-plugins";\r
import DemoPage from "./_layout/DemoPage";\r
\r
const InventoryStatusDemo = () => {\r
  const [stockStatus, setStockStatus] = useState<'in-stock' | 'low-stock' | 'out-of-stock' | 'pre-order'>('in-stock');\r
\r
  // 有货\r
  const ImageWithInStock = withPlugins(LazyLoadImageCore as any, [\r
    createInventoryStatusPlugin({\r
      status: "in-stock",\r
      stockCount: 100,\r
      showBadge: true,\r
      position: "top-right",\r
    }),\r
  ]);\r
\r
  // 低库存\r
  const ImageWithLowStock = withPlugins(LazyLoadImageCore as any, [\r
    createInventoryStatusPlugin({\r
      status: "low-stock",\r
      stockCount: 5,\r
      lowStockThreshold: 10,\r
      showBadge: true,\r
      position: "top-right",\r
    }),\r
  ]);\r
\r
  // 缺货\r
  const ImageWithOutOfStock = withPlugins(LazyLoadImageCore as any, [\r
    createInventoryStatusPlugin({\r
      status: "out-of-stock",\r
      stockCount: 0,\r
      showBadge: true,\r
      position: "top-right",\r
    }),\r
  ]);\r
\r
  // 预订\r
  const ImageWithPreOrder = withPlugins(LazyLoadImageCore as any, [\r
    createInventoryStatusPlugin({\r
      status: "pre-order",\r
      showBadge: true,\r
      position: "top-right",\r
    }),\r
  ]);\r
\r
  // 自动刷新（模拟）\r
  const mockFetchStock = async () => {\r
    // 模拟API请求\r
    await new Promise(resolve => setTimeout(resolve, 100));\r
\r
    const statuses: Array<'in-stock' | 'low-stock' | 'out-of-stock' | 'pre-order'> =\r
      ['in-stock', 'low-stock', 'out-of-stock', 'pre-order'];\r
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];\r
    const randomCount = Math.floor(Math.random() * 100);\r
\r
    return {\r
      status: randomStatus,\r
      count: randomCount,\r
    };\r
  };\r
\r
  const ImageWithAutoRefresh = withPlugins(LazyLoadImageCore as any, [\r
    createInventoryStatusPlugin({\r
      status: stockStatus,\r
      stockCount: 50,\r
      showBadge: true,\r
      autoRefresh: true,\r
      refreshInterval: 5000, // 5秒刷新一次\r
      fetchStock: mockFetchStock,\r
      onStatusChange: (status: string) => {\r
        console.log("库存状态变更:", status);\r
        setStockStatus(status as any);\r
      },\r
      position: "top-right",\r
    }),\r
  ]);\r
\r
  return (\r
    <DemoPage\r
      title="InventoryStatus Plugin"\r
      description="库存状态插件 - 实时显示商品库存状态，支持自动刷新和低库存预警"\r
    >\r
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 30 }}>\r
        <div>\r
          <h3 style={{ marginBottom: 10 }}>✅ 有货（100件）</h3>\r
          <div style={{ position: "relative", display: "inline-block" }}>\r
            <ImageWithInStock\r
              src="https://picsum.photos/id/152/280/280"\r
              alt="有货商品"\r
              imageStyle={{ borderRadius: "8px", width: "100%" }}\r
            />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h3 style={{ marginBottom: 10 }}>⚠️ 库存紧张（5件）</h3>\r
          <div style={{ position: "relative", display: "inline-block" }}>\r
            <ImageWithLowStock\r
              src="https://picsum.photos/id/164/280/280"\r
              alt="低库存商品"\r
              imageStyle={{ borderRadius: "8px", width: "100%" }}\r
            />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h3 style={{ marginBottom: 10 }}>❌ 缺货</h3>\r
          <div style={{ position: "relative", display: "inline-block" }}>\r
            <ImageWithOutOfStock\r
              src="https://picsum.photos/id/177/280/280"\r
              alt="缺货商品"\r
              imageStyle={{ borderRadius: "8px", width: "100%" }}\r
            />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h3 style={{ marginBottom: 10 }}>🕐 预订</h3>\r
          <div style={{ position: "relative", display: "inline-block" }}>\r
            <ImageWithPreOrder\r
              src="https://picsum.photos/id/183/280/280"\r
              alt="预订商品"\r
              imageStyle={{ borderRadius: "8px", width: "100%" }}\r
            />\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div style={{ marginTop: 40 }}>\r
        <h3 style={{ marginBottom: 10 }}>🔄 自动刷新库存（每5秒）</h3>\r
        <p style={{ fontSize: 14, color: "#666", marginBottom: 10 }}>\r
          当前状态: <strong>{stockStatus}</strong> - 该图片会自动刷新库存状态\r
        </p>\r
        <div style={{ position: "relative", display: "inline-block" }}>\r
          <ImageWithAutoRefresh\r
            src="https://picsum.photos/id/225/400/300"\r
            alt="自动刷新库存"\r
            imageStyle={{ borderRadius: "8px" }}\r
          />\r
        </div>\r
      </div>\r
\r
      <div style={{ marginTop: 30, padding: 20, backgroundColor: "#f5f5f5", borderRadius: 8 }}>\r
        <h4>🎯 功能特性</h4>\r
        <ul style={{ marginTop: 10 }}>\r
          <li>✅ 4种库存状态：有货/低库存/缺货/预订</li>\r
          <li>✅ 显示实时库存数量</li>\r
          <li>✅ 低库存阈值预警</li>\r
          <li>✅ 自动刷新库存（可配置间隔）</li>\r
          <li>✅ 库存变更回调通知</li>\r
          <li>✅ 颜色编码（绿色=有货/橙色=低库存/红色=缺货/蓝色=预订）</li>\r
        </ul>\r
\r
        <h4 style={{ marginTop: 20 }}>💡 使用场景</h4>\r
        <ul style={{ marginTop: 10 }}>\r
          <li>🛒 电商产品列表页</li>\r
          <li>📦 库存管理系统</li>\r
          <li>🏪 在线商城首页</li>\r
          <li>🎫 门票/课程售卖</li>\r
          <li>⏰ 限时抢购活动</li>\r
        </ul>\r
\r
        <h4 style={{ marginTop: 20 }}>🔧 技术特点</h4>\r
        <ul style={{ marginTop: 10 }}>\r
          <li>⚡ 支持轮询刷新</li>\r
          <li>🎣 自定义fetchStock函数</li>\r
          <li>📊 实时状态同步</li>\r
          <li>🔔 状态变更通知</li>\r
        </ul>\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default InventoryStatusDemo;\r
\r
`;export{r as default};
