const n=`import React, { useState } from "react";

import DemoPage from "./_layout/DemoPage";
import { LazyLoadImageCore } from "vane-lazy-image/core";
import { createColorSwatchPlugin } from "vane-lazy-image/custom-plugins";
import { withPlugins } from "vane-lazy-image/plugins";

const ColorSwatchDemo = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  // 底部色板
  const ImageWithBottomSwatch = withPlugins(LazyLoadImageCore as any, [
    createColorSwatchPlugin({
      maxColors: 6,
      showPalette: true,
      position: "bottom",
      interactive: true,
      swatchSize: 36,
      onColorSelect: (color: string) => {
        console.log("选中颜色:", color);
        setSelectedColor(color);
      },
    }),
  ]);

  // 居中叠加
  const ImageWithOverlaySwatch = withPlugins(LazyLoadImageCore as any, [
    createColorSwatchPlugin({
      maxColors: 5,
      showPalette: true,
      position: "overlay",
      interactive: true,
      swatchSize: 40,
      gap: 10,
    }),
  ]);

  // 显示颜色代码
  const ImageWithColorCode = withPlugins(LazyLoadImageCore as any, [
    createColorSwatchPlugin({
      maxColors: 5,
      showPalette: true,
      position: "bottom-center",
      interactive: true,
      swatchSize: 32,
      showColorCode: true,
      gap: 12,
    }),
  ]);

  // 小色块
  const ImageWithSmallSwatch = withPlugins(LazyLoadImageCore as any, [
    createColorSwatchPlugin({
      maxColors: 8,
      showPalette: true,
      position: "bottom",
      interactive: true,
      swatchSize: 24,
      gap: 6,
    }),
  ]);

  return (
    <DemoPage
      title="ColorSwatch Plugin"
      description="颜色选择器插件 - 自动提取商品图片的主要颜色，支持交互选择和颜色代码显示"
    >
      {selectedColor && (
        <div
          style={{
            padding: 15,
            marginBottom: 20,
            backgroundColor: "#e3f2fd",
            borderRadius: 8,
            borderLeft: "4px solid #2196F3",
          }}
        >
          <strong>选中颜色:</strong> {selectedColor}
          <div
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              backgroundColor: selectedColor,
              marginLeft: 10,
              borderRadius: 4,
              border: "1px solid #ccc",
              verticalAlign: "middle",
            }}
          />
        </div>
      )}

      <div style={{ marginBottom: 40 }}>
        <h3 style={{ marginBottom: 10 }}>底部色板（可交互）</h3>
        <p style={{ fontSize: 14, color: "#666", marginBottom: 10 }}>
          点击色块可选择颜色
        </p>
        <div style={{ position: "relative", display: "inline-block" }}>
          <ImageWithBottomSwatch
            src="/100-500x400.jpg"
            alt="商品图片 - 底部色板"
            loading="lazy"
            containerStyle={{ width: 500, height: 400, position: "relative" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h3 style={{ marginBottom: 10 }}>居中叠加</h3>
        <div style={{ position: "relative", display: "inline-block" }}>
          <ImageWithOverlaySwatch
            src="/106-500x400.jpg"
            alt="商品图片 - 居中叠加"
            loading="lazy"
            containerStyle={{ width: 500, height: 400, position: "relative" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h3 style={{ marginBottom: 10 }}>显示颜色代码</h3>
        <div style={{ position: "relative", display: "inline-block" }}>
          <ImageWithColorCode
            src="/116-500x400.jpg"
            alt="商品图片 - 颜色代码"
            loading="lazy"
            containerStyle={{ width: 500, height: 400, position: "relative" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h3 style={{ marginBottom: 10 }}>多颜色小色块</h3>
        <div style={{ position: "relative", display: "inline-block" }}>
          <ImageWithSmallSwatch
            src="/129-500x400.jpg"
            alt="商品图片 - 小色块"
            loading="lazy"
            containerStyle={{ width: 500, height: 400, position: "relative" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      </div>

      <div style={{ marginTop: 30, padding: 20, backgroundColor: "#f5f5f5", borderRadius: 8 }}>
        <h4>🎯 功能特性</h4>
        <ul style={{ marginTop: 10 }}>
          <li>✅ 自动提取图片主要颜色</li>
          <li>✅ 智能过滤黑白和透明色</li>
          <li>✅ 可配置提取颜色数量</li>
          <li>✅ 3种显示位置（底部/居中/底部居中）</li>
          <li>✅ 交互式颜色选择</li>
          <li>✅ 显示HEX颜色代码</li>
          <li>✅ 悬停放大效果</li>
          <li>✅ 选中状态标识</li>
        </ul>

        <h4 style={{ marginTop: 20 }}>💡 使用场景</h4>
        <ul style={{ marginTop: 10 }}>
          <li>👗 服装多颜色选择</li>
          <li>🎨 艺术品/设计作品配色</li>
          <li>🪑 家具/装饰品颜色筛选</li>
          <li>👟 鞋包配色选择</li>
          <li>🎁 礼品个性化定制</li>
        </ul>

        <h4 style={{ marginTop: 20 }}>🔧 技术特点</h4>
        <ul style={{ marginTop: 10 }}>
          <li>⚡ Canvas API 颜色提取</li>
          <li>🎯 颜色量化算法</li>
          <li>📊 按出现频率排序</li>
          <li>🔄 RGB to HEX 转换</li>
          <li>🎨 智能去重和过滤</li>
        </ul>

        <div
          style={{
            marginTop: 20,
            padding: "16px",
            backgroundColor: "#fff3cd",
            borderRadius: "8px",
            borderLeft: "4px solid #ffc107",
          }}
        >
          <h4 style={{ marginTop: 0, color: "#856404" }}>⚠️ 重要提示：跨域问题</h4>
          <p style={{ margin: "8px 0", color: "#856404", lineHeight: 1.6 }}>
            本Demo使用的 picsum.photos 图片<strong>没有 CORS 头</strong>，因此无法提取真实颜色。
            <br />
            当前显示的是<strong>默认演示颜色</strong>。
          </p>
          <p style={{ margin: "8px 0", color: "#856404", lineHeight: 1.6 }}>
            <strong>在实际使用中</strong>，请确保：
          </p>
          <ul style={{ margin: "8px 0 0 0", color: "#856404", lineHeight: 1.6 }}>
            <li>图片服务器配置了正确的 CORS 头（Access-Control-Allow-Origin）</li>
            <li>或者使用同域图片</li>
            <li>这样插件才能正确提取图片的真实颜色</li>
          </ul>
        </div>
      </div>
    </DemoPage>
  );
};

export default ColorSwatchDemo;

`;export{n as default};
