const t=`import DemoPage from "./_layout/DemoPage";
import { LazyLoadImageCore } from "vane-lazy-image/core";
import React from "react";
import { createGlitchEffectPlugin } from "vane-lazy-image/custom-plugins";
import { withPlugins } from "vane-lazy-image/plugins";

const PageTitle = "GlitchEffect Plugin - 故障艺术效果";

// RGB 分离效果
const ImageWithRgbSplit = withPlugins(LazyLoadImageCore as any, [
  createGlitchEffectPlugin({
    style: 'rgb-split',
    continuous: true,
    intensity: 0.8,
    rgbOffset: 5,
  }),
]);

// 扫描线效果
const ImageWithScanLines = withPlugins(LazyLoadImageCore as any, [
  createGlitchEffectPlugin({
    style: 'scan-lines',
    continuous: true,
    intensity: 0.6,
    scanLineCount: 40,
    animateScanLines: true,
  }),
]);

// 数字失真效果
const ImageWithDigital = withPlugins(LazyLoadImageCore as any, [
  createGlitchEffectPlugin({
    style: 'digital',
    continuous: true,
    intensity: 0.6,
  }),
]);

// 混合效果
const ImageWithGlitchMix = withPlugins(LazyLoadImageCore as any, [
  createGlitchEffectPlugin({
    style: 'glitch-mix',
    continuous: true,
    intensity: 0.8,
    rgbOffset: 3,
    scanLineCount: 30,
  }),
]);

// 强烈模式
const ImageWithIntense = withPlugins(LazyLoadImageCore as any, [
  createGlitchEffectPlugin({
    style: 'intense',
    continuous: true,
    intensity: 0.8,
    rgbOffset: 5,
  }),
]);

// 触发式效果（一次性）
const ImageWithTrigger = withPlugins(LazyLoadImageCore as any, [
  createGlitchEffectPlugin({
    style: 'glitch-mix',
    continuous: false,
    duration: 1500,
    intensity: 0.9,
  }),
]);

// 悬停触发
const ImageWithHoverTrigger = withPlugins(LazyLoadImageCore as any, [
  createGlitchEffectPlugin({
    style: 'glitch-mix',
    triggerOnHover: true,
    intensity: 0.8,
  }),
]);

const GlitchEffectDemo = () => {
  const [resetKey, setResetKey] = React.useState(0);

  return (
    <DemoPage
      title={PageTitle}
      description="赛博朋克风格的故障艺术效果，纯 CSS 实现，无依赖。💡 提示：点击右上角的'🔄 全局重试'按钮可以重新观看所有效果。适合科技感、创意类网站。支持持续动画、触发式、悬停触发等多种模式。"
    >
      <button
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1000,
          padding: '10px 20px',
          fontSize: '14px',
          fontWeight: 600,
          color: '#fff',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          transition: 'all 0.3s ease',
        }}
        onClick={() => setResetKey(prev => prev + 1)}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
        }}
        title="重新加载所有图片和效果"
      >
        🔄 全局重试
      </button>

      <div key={resetKey}>

      {/* 基础效果 */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          📌 基础故障效果
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600, color: "#333" }}>
              RGB 分离（RGB Split）
            </h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              红蓝分离效果，经典赛博朋克风格
            </p>
            <ImageWithRgbSplit
              src="https://picsum.photos/id/180/400/300"
              alt="RGB分离效果"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600, color: "#333" }}>
              扫描线（Scan Lines）
            </h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              CRT 显示器风格的扫描线效果
            </p>
            <ImageWithScanLines
              src="https://picsum.photos/id/182/400/300"
              alt="扫描线效果"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600, color: "#333" }}>
              数字失真（Digital）
            </h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              数字信号失真效果
            </p>
            <ImageWithDigital
              src="https://picsum.photos/id/188/400/300"
              alt="数字失真效果"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>

      {/* 高级效果 */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          ✨ 高级混合效果
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600, color: "#333" }}>
              混合模式（Glitch Mix）
            </h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              RGB + 扫描线 + 数字失真组合
            </p>
            <ImageWithGlitchMix
              src="https://picsum.photos/id/190/400/300"
              alt="混合效果"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600, color: "#333" }}>
              强烈模式（Intense）
            </h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              最强故障效果，视觉冲击力最强
            </p>
            <ImageWithIntense
              src="https://picsum.photos/id/191/400/300"
              alt="强烈模式"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>

      {/* 交互模式 */}
      <section>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          🎯 交互触发模式
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600, color: "#333" }}>
              一次性触发（加载时）
            </h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              图片加载完成时触发一次，点击"🔄 重试"可重新观看
            </p>
            <ImageWithTrigger
              src="https://picsum.photos/id/193/400/300"
              alt="一次性触发"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600, color: "#333" }}>
              悬停触发（Hover）
            </h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              鼠标悬停时触发效果
            </p>
            <ImageWithHoverTrigger
              src="https://picsum.photos/id/195/400/300"
              alt="悬停触发"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>

      {/* 使用说明 */}
      <section style={{ marginTop: 60, padding: 24, background: "#fff", borderRadius: 8, border: "1px solid #e5e7eb" }}>
        <h2 style={{ marginBottom: 16, fontSize: 20, fontWeight: 600, color: "#333" }}>
          📖 使用说明
        </h2>
        <pre style={{ background: "#f8fafc", padding: 16, borderRadius: 4, overflow: "auto", fontSize: 14 }}>
{\`import { withPlugins } from "vane-lazy-image/plugins";
import { createGlitchEffectPlugin } from "vane-lazy-image/custom-plugins";

const ImageWithGlitch = withPlugins(LazyLoadImageCore as any, [
  createGlitchEffectPlugin({
    style: 'glitch-mix',     // 故障效果类型
    continuous: true,        // 是否持续动画
    duration: 1000,          // 持续时间（非持续模式）
    intensity: 0.8,          // 效果强度（0-1）
    triggerOnHover: false,   // 是否悬停触发
    rgbOffset: 3,            // RGB 分离距离
    scanLineCount: 30,       // 扫描线数量
    animateScanLines: true,  // 扫描线是否动画
  }),
]);

// 使用组件
<ImageWithGlitch
  src="your-image.jpg"
  alt="描述"
  loading="lazy"
  containerStyle={{ width: 400, height: 300 }}
/>\`}
        </pre>
      </section>
      </div>
    </DemoPage>
  );
};

export default GlitchEffectDemo;

`;export{t as default};
