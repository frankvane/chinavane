const n=`import React from "react";
import { LazyLoadImageCore } from "vane-lazy-image/core";
import { withPlugins } from "vane-lazy-image/plugins";
import { createPriceTagPlugin } from "vane-lazy-image/custom-plugins";
import DemoPage from "./_layout/DemoPage";

const PriceTagDemo = () => {
  // 创建带价格标签的图片组件
  const ImageWithPriceTag = withPlugins(LazyLoadImageCore as any, [
    createPriceTagPlugin({
      price: 299.99,
      currency: "$",
      position: "bottom-left",
      originalPrice: 499.99,
      discount: "40% OFF",
      showSavings: true,
      animate: true,
    }),
  ]);

  const ImageWithSimplePrice = withPlugins(LazyLoadImageCore as any, [
    createPriceTagPlugin({
      price: 1999,
      currency: "¥",
      position: "top-left",
      animate: true,
    }),
  ]);

  const ImageWithCustomStyle = withPlugins(LazyLoadImageCore as any, [
    createPriceTagPlugin({
      price: 59.99,
      currency: "€",
      position: "bottom-right",
      animate: true,
      backgroundColor: "#4ECDC4",
      textColor: "#1A535C",
      style: {
        borderRadius: "8px",
        padding: "12px 16px",
      },
    }),
  ]);

  // 异步获取价格（模拟API请求）
  const ImageWithAsyncPrice = withPlugins(LazyLoadImageCore as any, [
    createPriceTagPlugin({
      currency: "¥",
      position: "top-right",
      animate: true,
      productId: "12345",
      fetchPrice: async () => {
        // 模拟API延迟
        await new Promise((resolve) => setTimeout(resolve, 1500));
        // 模拟API返回数据
        return {
          price: 1299.99,
          originalPrice: 1999,
          discount: "限时优惠",
        };
      },
      showSavings: true,
      loadingText: "查询价格...",
      errorText: "价格查询失败",
    }),
  ]);

  return (
    <DemoPage
      title="PriceTag Plugin"
      description="商品价格标签插件 - 在图片上叠加价格信息，支持原价、折扣、节省金额等功能"
    >
      <div style={{ marginBottom: 40 }}>
        <h3 style={{ marginBottom: 10 }}>完整价格信息（带折扣和节省金额）</h3>
        <div style={{ position: "relative", display: "inline-block" }}>
          <ImageWithPriceTag
            src="https://picsum.photos/id/180/400/300"
            alt="商品图片 - 带折扣"
            loading="lazy"
            containerStyle={{ width: 400, height: 300, position: "relative" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h3 style={{ marginBottom: 10 }}>简单价格标签</h3>
        <div style={{ position: "relative", display: "inline-block" }}>
          <ImageWithSimplePrice
            src="https://picsum.photos/id/201/400/300"
            alt="商品图片 - 简单价格"
            loading="lazy"
            containerStyle={{ width: 400, height: 300, position: "relative" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h3 style={{ marginBottom: 10 }}>自定义样式价格标签</h3>
        <div style={{ position: "relative", display: "inline-block" }}>
          <ImageWithCustomStyle
            src="https://picsum.photos/id/250/400/300"
            alt="商品图片 - 自定义样式"
            loading="lazy"
            containerStyle={{ width: 400, height: 300, position: "relative" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h3 style={{ marginBottom: 10 }}>🔄 异步获取价格（模拟API请求）</h3>
        <p style={{ fontSize: 14, color: "#666", marginBottom: 10 }}>
          价格数据从API异步获取，显示加载状态
        </p>
        <div style={{ position: "relative", display: "inline-block" }}>
          <ImageWithAsyncPrice
            src="https://picsum.photos/id/260/400/300"
            alt="商品图片 - 异步价格"
            loading="lazy"
            containerStyle={{ width: 400, height: 300, position: "relative" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      </div>

      <div style={{ marginTop: 30, padding: 20, backgroundColor: "#f5f5f5", borderRadius: 8 }}>
        <h4>🎯 功能特性</h4>
        <ul style={{ marginTop: 10 }}>
          <li>✅ 显示当前价格、原价、折扣标签</li>
          <li>✅ 计算并显示节省金额</li>
          <li>✅ 支持多种货币符号</li>
          <li>✅ 4个位置可选（四角）</li>
          <li>✅ 淡入动画效果</li>
          <li>✅ 完全自定义样式</li>
          <li>🆕 <strong>支持异步价格数据获取（API集成）</strong></li>
          <li>🆕 <strong>显示加载和错误状态</strong></li>
        </ul>

        <h4 style={{ marginTop: 20 }}>💡 使用场景</h4>
        <ul style={{ marginTop: 10 }}>
          <li>🛍️ 电商产品列表</li>
          <li>💰 促销活动页面</li>
          <li>🏷️ 特价商品展示</li>
          <li>📱 移动端商城</li>
          <li>🔄 从API动态获取价格的场景</li>
          <li>🌐 跨境电商实时汇率转换</li>
        </ul>
      </div>
    </DemoPage>
  );
};

export default PriceTagDemo;

`;export{n as default};
