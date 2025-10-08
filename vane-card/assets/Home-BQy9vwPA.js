const r=`import { Link } from "react-router-dom";\r
import React, { ReactNode } from "react";\r
\r
// 设计升级版首页：更强的视觉层次、卡片化信息架构、清晰 CTA\r
export default function CardPluginHome() {\r
  const Section = ({ title, children }: { title: string; children: ReactNode }) => (\r
    <section style={{ marginTop: 28 }}>\r
      <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>{title}</h2>\r
      <div style={{ marginTop: 14 }}>{children}</div>\r
    </section>\r
  );\r
\r
  const Card = ({ title, children }: { title: string; children: ReactNode }) => (\r
    <div\r
      style={{\r
        padding: 16,\r
        borderRadius: 14,\r
        border: "1px solid #e7e9ee",\r
        background:\r
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,250,255,1) 100%)",\r
        boxShadow: "0 6px 20px rgba(30, 41, 59, 0.08)",\r
        transition: "transform 200ms ease, box-shadow 200ms ease",\r
      }}\r
      onMouseEnter={(e) => {\r
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";\r
        (e.currentTarget as HTMLDivElement).style.boxShadow =\r
          "0 12px 28px rgba(30, 41, 59, 0.12)";\r
      }}\r
      onMouseLeave={(e) => {\r
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";\r
        (e.currentTarget as HTMLDivElement).style.boxShadow =\r
          "0 6px 20px rgba(30, 41, 59, 0.08)";\r
      }}\r
    >\r
      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{title}</div>\r
      <div style={{ color: "#4b5563" }}>{children}</div>\r
    </div>\r
  );\r
\r
  const NavItem = ({ to, children }: { to: string; children: ReactNode }) => (\r
    <Link\r
      to={to}\r
      style={{\r
        display: "block",\r
        padding: "10px 12px",\r
        borderRadius: 10,\r
        border: "1px solid #e5e7eb",\r
        color: "#111827",\r
        textDecoration: "none",\r
        background:\r
          "linear-gradient(180deg, rgba(249,250,251,1) 0%, rgba(243,244,246,1) 100%)",\r
      }}\r
      onMouseEnter={(e) => {\r
        (e.currentTarget as HTMLAnchorElement).style.background =\r
          "linear-gradient(180deg, rgba(243,244,246,1) 0%, rgba(229,231,235,1) 100%)";\r
      }}\r
      onMouseLeave={(e) => {\r
        (e.currentTarget as HTMLAnchorElement).style.background =\r
          "linear-gradient(180deg, rgba(249,250,251,1) 0%, rgba(243,244,246,1) 100%)";\r
      }}\r
    >\r
      {children}\r
    </Link>\r
  );\r
\r
  return (\r
    <div style={{ padding: 24, maxWidth: 1120, margin: "0 auto" }}>\r
      {/* Hero 区：品牌标题 + 副标题 + 主 CTA */}\r
      <div\r
        style={{\r
          padding: 28,\r
          borderRadius: 18,\r
          background:\r
            "linear-gradient(120deg, rgba(67,97,238,0.12) 0%, rgba(67,97,238,0.06) 40%, rgba(16,185,129,0.08) 100%)",\r
          border: "1px solid rgba(67,97,238,0.25)",\r
        }}\r
      >\r
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>\r
          <span style={{ fontSize: 24 }}>🧩</span>\r
          <h1 style={{ margin: 0, fontSize: 24 }}>Vane Card · CardPlugin</h1>\r
        </div>\r
        <p style={{ marginTop: 8, color: "#334155", fontSize: 15 }}>\r
          以「卡片容器 + 插件扩展 + 插槽区域」构建电商产品卡，统一的 priceArea 承载价格与优惠信息，事件总线与分析插件提供跨插件通信与可观测能力。\r
        </p>\r
        <div style={{ display: "flex", gap: 10, marginTop: 14 }}>\r
          <Link\r
            to="/compound/basic"\r
            style={{\r
              padding: "10px 14px",\r
              borderRadius: 12,\r
              background: "#4361ee",\r
              color: "#fff",\r
              textDecoration: "none",\r
              fontWeight: 700,\r
              boxShadow: "0 6px 18px rgba(67, 97, 238, 0.2)",\r
            }}\r
          >\r
            立即体验基础示例\r
          </Link>\r
          <Link\r
            to="/readme"\r
            style={{\r
              padding: "10px 14px",\r
              borderRadius: 12,\r
              background: "#fff",\r
              color: "#111827",\r
              textDecoration: "none",\r
              border: "1px solid #e5e7eb",\r
              fontWeight: 700,\r
            }}\r
          >\r
            查看文档\r
          </Link>\r
        </div>\r
      </div>\r
\r
      {/* 系统概览 */}\r
      <Section title="系统概览">\r
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>\r
          <Card title="📂 架构与目录">\r
            <div>\r
              - 组件与容器：\`src/components/CardPlugin\`\r
              <br />- 页面与路由：\`src/pages/CardPlugin\` 与 \`src/App.tsx\`\r
              <br />- 插件与演示：\`custom-plugins\`，含价格、优惠、比价、分析、可视化等\r
            </div>\r
          </Card>\r
          <Card title="🔔 事件与状态">\r
            <div>\r
              - 总线事件：如 \`sku:change\`、\`price:change\`\r
              <br />- 生命周期：\`onMount\` / \`onVisibilityChange\` / 插槽渲染钩子\r
            </div>\r
          </Card>\r
          <Card title="💰 统一价格区域">\r
            <div>\r
              - 插件 \`config.order\` 控制 \`priceArea\` 展示顺序\r
              <br />- 标准化 Chip 样式与间距，保证一致体验\r
            </div>\r
          </Card>\r
          <Card title="📈 分析与上报">\r
            <div>\r
              - \`AnalyticsPlugin\` 支持曝光/可见性/点击/加购上报\r
              <br />- 可自定义 \`transport\` 与最小曝光阈值\r
            </div>\r
          </Card>\r
        </div>\r
      </Section>\r
\r
      {/* 快速导航 */}\r
      <Section title="快速导航">\r
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>\r
          <Card title="🧱 复合组件专区">\r
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>\r
              <NavItem to="/compound/basic">基础应用</NavItem>\r
              <NavItem to="/compound/left-right">左右布局</NavItem>\r
              <NavItem to="/compound/top-bottom">上下布局</NavItem>\r
              <NavItem to="/compound/enhanced">增强：复合组件+插件</NavItem>\r
              <NavItem to="/compound/sku-compound/ecommerce-sku">电商增强 + SKU</NavItem>\r
            </div>\r
          </Card>\r
\r
          <Card title="📐 布局专区">\r
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>\r
              <NavItem to="/layouts/vertical">垂直布局</NavItem>\r
              <NavItem to="/layouts/horizontal">横向布局</NavItem>\r
              <NavItem to="/layouts/right-image">右图布局</NavItem>\r
              <NavItem to="/layouts/bottom-image">下图布局</NavItem>\r
              <NavItem to="/layouts/banner">Banner横幅</NavItem>\r
              <NavItem to="/layouts/grid">网格紧凑</NavItem>\r
              <NavItem to="/layouts/minimal">极简布局</NavItem>\r
              <NavItem to="/layouts/background">背景图布局</NavItem>\r
              <NavItem to="/layouts/two-column">双列对称</NavItem>\r
            </div>\r
          </Card>\r
\r
          <Card title="🧩 插槽专区">\r
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>\r
              <NavItem to="/slots/basic">基础（children）</NavItem>\r
              <NavItem to="/slots/header-overlay">Header & Overlay</NavItem>\r
              <NavItem to="/slots/footer-actions">Footer Actions</NavItem>\r
              <NavItem to="/slots/gallery-video">Gallery + Video</NavItem>\r
              <NavItem to="/slots/responsive">Responsive</NavItem>\r
            </div>\r
          </Card>\r
\r
          <Card title="🚀 高级专区">\r
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>\r
              <NavItem to="/advanced/animation-analytics">动画+统计</NavItem>\r
              <NavItem to="/advanced/custom-actions">自定义操作</NavItem>\r
              <NavItem to="/advanced/countdown-promo">倒计时促销</NavItem>\r
              <NavItem to="/advanced/all-in-one">综合示例</NavItem>\r
            </div>\r
          </Card>\r
        </div>\r
      </Section>\r
\r
      {/* 文档与示例 CTA */}\r
      <Section title="文档与示例">\r
        <div\r
          style={{\r
            padding: 16,\r
            borderRadius: 14,\r
            background: "#f6f9ff",\r
            border: "1px solid #dbeafe",\r
          }}\r
        >\r
          <div style={{ fontWeight: 700 }}>📖 项目 README</div>\r
          <div style={{ marginTop: 8, color: "#4b5563" }}>\r
            查看 <Link to="/readme">README</Link> 获取完整说明，或浏览侧边栏的演示路由。\r
          </div>\r
        </div>\r
      </Section>\r
    </div>\r
  );\r
}`;export{r as default};
