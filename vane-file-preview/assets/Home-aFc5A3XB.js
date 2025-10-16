const r=`import React, { ReactNode } from "react";\r
\r
import { Link } from "react-router-dom";\r
\r
// 设计升级版首页：更强的视觉层次、卡片化信息架构、清晰 CTA\r
export default function FilePreviewHome() {\r
  const Section = ({\r
    title,\r
    children,\r
  }: {\r
    title: string;\r
    children: ReactNode;\r
  }) => (\r
    <section style={{ marginTop: 28 }}>\r
      <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>{title}</h2>\r
      <div style={{ marginTop: 14 }}>{children}</div>\r
    </section>\r
  );\r
\r
  const Card = ({\r
    title,\r
    children,\r
  }: {\r
    title: string;\r
    children: ReactNode;\r
  }) => (\r
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
        (e.currentTarget as HTMLDivElement).style.transform =\r
          "translateY(-2px)";\r
        (e.currentTarget as HTMLDivElement).style.boxShadow =\r
          "0 12px 28px rgba(30, 41, 59, 0.12)";\r
      }}\r
      onMouseLeave={(e) => {\r
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";\r
        (e.currentTarget as HTMLDivElement).style.boxShadow =\r
          "0 6px 20px rgba(30, 41, 59, 0.08)";\r
      }}\r
    >\r
      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 10 }}>\r
        {title}\r
      </div>\r
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
          <span style={{ fontSize: 24 }}>📄</span>\r
          <h1 style={{ margin: 0, fontSize: 24 }}>\r
            Vane File Preview · 文件预览组件\r
          </h1>\r
        </div>\r
        <p style={{ marginTop: 8, color: "#334155", fontSize: 15 }}>\r
          一个功能强大、高度可扩展的 React 文件预览组件库，支持 15+\r
          种文件格式，基于插件化架构，提供统一的预览体验。\r
        </p>\r
        <div style={{ display: "flex", gap: 10, marginTop: 14 }}>\r
          <Link\r
            to="/file-preview/image"\r
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
            立即体验图片预览\r
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
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",\r
            gap: 14,\r
          }}\r
        >\r
          <Card title="🔌 插件化架构">\r
            <div>\r
              - 基于事件总线的插件系统，支持灵活组合\r
              <br />- 15+ 内置预览插件，覆盖主流文件格式\r
              <br />- 易于扩展，支持自定义插件开发\r
            </div>\r
          </Card>\r
          <Card title="📄 丰富的文件格式">\r
            <div>\r
              - 文档类：PDF、Word、PowerPoint、Excel、Markdown、EPUB\r
              <br />- 代码类：JavaScript、TypeScript、Python 等 180+ 语言\r
              <br />- 媒体类：图片、音频、视频\r
            </div>\r
          </Card>\r
          <Card title="⚡ 性能优化">\r
            <div>\r
              - 懒加载机制，按需渲染\r
              <br />- 虚拟滚动支持大文件预览\r
              <br />- 内存缓存优化，响应式设计\r
            </div>\r
          </Card>\r
          <Card title="🛡️ 稳健性">\r
            <div>\r
              - 完善的错误处理机制\r
              <br />- 文件格式自动检测\r
              <br />- TypeScript 类型安全\r
            </div>\r
          </Card>\r
        </div>\r
      </Section>\r
\r
      {/* 快速导航 */}\r
      <Section title="快速导航">\r
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>\r
          <Card title="🖼️ 基础预览专区">\r
            <div\r
              style={{\r
                display: "grid",\r
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",\r
                gap: 10,\r
              }}\r
            >\r
              <NavItem to="/file-preview/image">图片预览</NavItem>\r
              <NavItem to="/file-preview/pdf">PDF预览</NavItem>\r
              <NavItem to="/file-preview/video">视频预览</NavItem>\r
              <NavItem to="/file-preview/audio">音频预览</NavItem>\r
            </div>\r
          </Card>\r
\r
          <Card title="📝 文档预览专区">\r
            <div\r
              style={{\r
                display: "grid",\r
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",\r
                gap: 10,\r
              }}\r
            >\r
              <NavItem to="/file-preview/code">代码预览</NavItem>\r
              <NavItem to="/file-preview/markdown">Markdown预览</NavItem>\r
              <NavItem to="/file-preview/office">Office文档预览</NavItem>\r
            </div>\r
          </Card>\r
\r
          <Card title="📊 数据预览专区">\r
            <div\r
              style={{\r
                display: "grid",\r
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",\r
                gap: 10,\r
              }}\r
            >\r
              <NavItem to="/file-preview/csv">CSV预览</NavItem>\r
              <NavItem to="/file-preview/json">JSON预览</NavItem>\r
            </div>\r
          </Card>\r
\r
          <Card title="🗜️ 压缩文件专区">\r
            <div\r
              style={{\r
                display: "grid",\r
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",\r
                gap: 10,\r
              }}\r
            >\r
              <NavItem to="/file-preview/zip">ZIP预览</NavItem>\r
              <NavItem to="/file-preview/epub">EPUB预览</NavItem>\r
            </div>\r
          </Card>\r
\r
          <Card title="🚀 综合示例专区">\r
            <div\r
              style={{\r
                display: "grid",\r
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",\r
                gap: 10,\r
              }}\r
            >\r
              <NavItem to="/fp-plugin/example">综合示例</NavItem>\r
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
            查看 <Link to="/readme">README</Link>{" "}\r
            获取完整说明，或浏览侧边栏的演示路由。\r
          </div>\r
        </div>\r
      </Section>\r
    </div>\r
  );\r
}\r
`;export{r as default};
