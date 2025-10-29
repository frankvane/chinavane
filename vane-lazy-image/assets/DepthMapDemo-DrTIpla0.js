const e=`import DemoPage from "./_layout/DemoPage";
import { LazyLoadImageCore } from "vane-lazy-image/core";
import React from "react";
import { createDepthMapPlugin } from "vane-lazy-image/custom-plugins";
import { withPlugins } from "vane-lazy-image/plugins";

const PageTitle = "DepthMap Plugin - 3D 视差深度效果";

// 倾斜效果
const ImageWithTilt = withPlugins(LazyLoadImageCore as any, [
  createDepthMapPlugin({
    style: 'tilt',
    intensity: 0.6,
    maxTilt: 15,
    enablePerspective: true,
    enableGlare: true,
    enableShadow: true,
  }),
]);

// 视差效果
const ImageWithParallax = withPlugins(LazyLoadImageCore as any, [
  createDepthMapPlugin({
    style: 'parallax',
    intensity: 0.7,
    maxTilt: 20,
    enablePerspective: true,
    enableGlare: true,
    enableShadow: true,
  }),
]);

// 浮动效果
const ImageWithFloat = withPlugins(LazyLoadImageCore as any, [
  createDepthMapPlugin({
    style: 'float',
    intensity: 0.8,
    enablePerspective: true,
    enableGlare: false,
    enableShadow: true,
  }),
]);

// 3D 旋转
const ImageWithRotate3D = withPlugins(LazyLoadImageCore as any, [
  createDepthMapPlugin({
    style: 'rotate-3d',
    intensity: 0.9,
    maxTilt: 25,
    enablePerspective: true,
    perspective: 800,
    enableGlare: true,
    glareOpacity: 0.6,
    enableShadow: true,
  }),
]);

// 强烈倾斜
const ImageWithIntenseTilt = withPlugins(LazyLoadImageCore as any, [
  createDepthMapPlugin({
    style: 'tilt',
    intensity: 1.0,
    maxTilt: 30,
    enablePerspective: true,
    perspective: 600,
    enableGlare: true,
    glareColor: 'rgba(147, 197, 253, 0.4)',
    enableShadow: true,
  }),
]);

// 轻微倾斜（适合产品展示）
const ImageWithSubtle = withPlugins(LazyLoadImageCore as any, [
  createDepthMapPlugin({
    style: 'tilt',
    intensity: 0.3,
    maxTilt: 8,
    enablePerspective: true,
    enableGlare: true,
    glareOpacity: 0.3,
    enableShadow: true,
    transitionDuration: 200,
  }),
]);

// 无光泽版本
const ImageWithNoGlare = withPlugins(LazyLoadImageCore as any, [
  createDepthMapPlugin({
    style: 'parallax',
    intensity: 0.7,
    maxTilt: 18,
    enablePerspective: true,
    enableGlare: false,
    enableShadow: true,
  }),
]);

// 快速响应
const ImageWithFastResponse = withPlugins(LazyLoadImageCore as any, [
  createDepthMapPlugin({
    style: 'tilt',
    intensity: 0.6,
    maxTilt: 15,
    enablePerspective: true,
    enableGlare: true,
    enableShadow: true,
    transitionDuration: 100,
    resetOnLeave: true,
  }),
]);

const DepthMapDemo = () => {
  const [resetKey, setResetKey] = React.useState(0);

  return (
    <DemoPage
      title={PageTitle}
      description="鼠标跟随的 3D 视差深度效果，让图片展示更具立体感。纯 CSS transforms 实现。💡 提示：移动鼠标到图片上体验 3D 深度效果，点击右上角的'🔄 全局重试'重新加载。"
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

      {/* 基础深度效果 */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          📌 基础深度效果
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>倾斜效果（Tilt）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              跟随鼠标倾斜，带光泽和阴影
            </p>
            <ImageWithTilt
              src="https://picsum.photos/id/220/400/300"
              alt="倾斜效果"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>视差效果（Parallax）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              多层视差，深度感更强
            </p>
            <ImageWithParallax
              src="https://picsum.photos/id/221/400/300"
              alt="视差效果"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>浮动效果（Float）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              跟随鼠标上下浮动
            </p>
            <ImageWithFloat
              src="https://picsum.photos/id/222/400/300"
              alt="浮动效果"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>
        </div>
      </section>

      {/* 高级 3D 效果 */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          ✨ 高级 3D 效果
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>3D 旋转（Rotate 3D）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              强烈的 3D 旋转效果，透视感强
            </p>
            <ImageWithRotate3D
              src="https://picsum.photos/id/223/400/300"
              alt="3D旋转"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>强烈倾斜</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              最大倾斜角度，视觉冲击力强
            </p>
            <ImageWithIntenseTilt
              src="https://picsum.photos/id/213/400/300"
              alt="强烈倾斜"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>轻微倾斜（产品级）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              适合产品展示的轻微效果
            </p>
            <ImageWithSubtle
              src="https://picsum.photos/id/225/400/300"
              alt="轻微倾斜"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>
        </div>
      </section>

      {/* 配置变化 */}
      <section>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          🎯 配置优化
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>无光泽版本</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              关闭光泽效果，更简洁
            </p>
            <ImageWithNoGlare
              src="https://picsum.photos/id/214/400/300"
              alt="无光泽"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>快速响应</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              更短的过渡时间，反应更灵敏
            </p>
            <ImageWithFastResponse
              src="https://picsum.photos/id/227/400/300"
              alt="快速响应"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
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
import { createDepthMapPlugin } from "vane-lazy-image/custom-plugins";

const ImageWithDepth = withPlugins(LazyLoadImageCore as any, [
  createDepthMapPlugin({
    style: 'tilt',               // 深度效果样式
    intensity: 0.6,              // 效果强度（0-1）
    maxTilt: 15,                 // 最大倾斜角度
    enablePerspective: true,     // 启用透视效果
    perspective: 1000,           // 透视距离
    enableGlare: true,           // 启用光泽效果
    glareColor: 'rgba(255, 255, 255, 0.3)',
    glareOpacity: 0.5,           // 光泽不透明度
    enableShadow: true,          // 启用阴影
    transitionDuration: 300,     // 过渡时长（毫秒）
    resetOnLeave: true,          // 离开时重置
  }),
]);

// 使用组件
<ImageWithDepth
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

export default DepthMapDemo;

`;export{e as default};
