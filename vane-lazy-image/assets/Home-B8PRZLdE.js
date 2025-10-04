const n=`import { NavLink } from "react-router-dom";\r
import React from "react";\r
\r
export default function Home() {\r
  return (\r
    <div className="page">\r
      <div className="page-header">\r
        <h1\r
          className="page-title"\r
          style={{ fontSize: "2.5em", marginBottom: "16px" }}\r
        >\r
          🖼️ Vane LazyLoadImage\r
        </h1>\r
        <p\r
          className="page-desc"\r
          style={{ fontSize: "1.2em", lineHeight: "1.8" }}\r
        >\r
          一个功能强大、高度可扩展的 React 图片懒加载组件库\r
        </p>\r
      </div>\r
\r
      <div className="page-card" style={{ marginBottom: "20px" }}>\r
        <h2 style={{ fontSize: "1.5em", marginBottom: "16px" }}>✨ 核心特性</h2>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",\r
            gap: "16px",\r
          }}\r
        >\r
          <div\r
            style={{\r
              padding: "20px",\r
              background: "#f8f9fa",\r
              borderRadius: "8px",\r
              border: "1px solid #e9ecef",\r
            }}\r
          >\r
            <h3 style={{ marginBottom: "8px", fontSize: "1.1em" }}>\r
              🔌 插件化架构\r
            </h3>\r
            <p style={{ color: "#666", lineHeight: "1.6" }}>\r
              基于事件总线的插件系统，支持灵活组合和自定义扩展\r
            </p>\r
          </div>\r
\r
          <div\r
            style={{\r
              padding: "20px",\r
              background: "#f8f9fa",\r
              borderRadius: "8px",\r
              border: "1px solid #e9ecef",\r
            }}\r
          >\r
            <h3 style={{ marginBottom: "8px", fontSize: "1.1em" }}>\r
              🎨 丰富的效果\r
            </h3>\r
            <p style={{ color: "#666", lineHeight: "1.6" }}>\r
              支持水印、模糊占位、渐变过渡、滤镜等多种视觉效果\r
            </p>\r
          </div>\r
\r
          <div\r
            style={{\r
              padding: "20px",\r
              background: "#f8f9fa",\r
              borderRadius: "8px",\r
              border: "1px solid #e9ecef",\r
            }}\r
          >\r
            <h3 style={{ marginBottom: "8px", fontSize: "1.1em" }}>\r
              ⚡ 性能优化\r
            </h3>\r
            <p style={{ color: "#666", lineHeight: "1.6" }}>\r
              支持优先级加载、预连接、并发控制、缓存策略等\r
            </p>\r
          </div>\r
\r
          <div\r
            style={{\r
              padding: "20px",\r
              background: "#f8f9fa",\r
              borderRadius: "8px",\r
              border: "1px solid #e9ecef",\r
            }}\r
          >\r
            <h3 style={{ marginBottom: "8px", fontSize: "1.1em" }}>\r
              🛡️ 错误处理\r
            </h3>\r
            <p style={{ color: "#666", lineHeight: "1.6" }}>\r
              支持重试、降级、CDN 回退、离线缓存等容错机制\r
            </p>\r
          </div>\r
\r
          <div\r
            style={{\r
              padding: "20px",\r
              background: "#f8f9fa",\r
              borderRadius: "8px",\r
              border: "1px solid #e9ecef",\r
            }}\r
          >\r
            <h3 style={{ marginBottom: "8px", fontSize: "1.1em" }}>\r
              ♿ 可访问性\r
            </h3>\r
            <p style={{ color: "#666", lineHeight: "1.6" }}>\r
              支持 ARIA 属性、Alt 文本、SEO 优化等无障碍功能\r
            </p>\r
          </div>\r
\r
          <div\r
            style={{\r
              padding: "20px",\r
              background: "#f8f9fa",\r
              borderRadius: "8px",\r
              border: "1px solid #e9ecef",\r
            }}\r
          >\r
            <h3 style={{ marginBottom: "8px", fontSize: "1.1em" }}>\r
              📊 监控分析\r
            </h3>\r
            <p style={{ color: "#666", lineHeight: "1.6" }}>\r
              支持性能监控、网络分析、用户行为追踪等\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="page-card" style={{ marginBottom: "20px" }}>\r
        <h2 style={{ fontSize: "1.5em", marginBottom: "16px" }}>🚀 快速开始</h2>\r
        <div\r
          style={{\r
            background: "#282c34",\r
            padding: "20px",\r
            borderRadius: "8px",\r
            color: "#abb2bf",\r
            fontSize: "14px",\r
            lineHeight: "1.8",\r
            overflowX: "auto",\r
          }}\r
        >\r
          <div style={{ marginBottom: "16px" }}>\r
            <div style={{ color: "#5c6370", marginBottom: "4px" }}>// 安装</div>\r
            <div>\r
              <span style={{ color: "#c678dd" }}>npm</span> install\r
              vane-lazy-image\r
            </div>\r
          </div>\r
\r
          <div style={{ marginBottom: "16px" }}>\r
            <div style={{ color: "#5c6370", marginBottom: "4px" }}>\r
              // 基础使用\r
            </div>\r
            <div>\r
              <span style={{ color: "#c678dd" }}>import</span> {"{"}{" "}\r
              LazyLoadImageCore, withPlugins {"}"}{" "}\r
              <span style={{ color: "#c678dd" }}>from</span>{" "}\r
              <span style={{ color: "#98c379" }}>"vane-lazy-image"</span>;\r
            </div>\r
          </div>\r
\r
          <div>\r
            <div style={{ color: "#5c6370", marginBottom: "4px" }}>\r
              // 带插件使用\r
            </div>\r
            <div>\r
              <span style={{ color: "#c678dd" }}>const</span> LazyImage ={" "}\r
              <span style={{ color: "#61afef" }}>withPlugins</span>\r
              (LazyLoadImageCore, [plugins]);\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="page-card" style={{ marginBottom: "20px" }}>\r
        <h2 style={{ fontSize: "1.5em", marginBottom: "16px" }}>📚 示例导航</h2>\r
        <div style={{ lineHeight: "2" }}>\r
          <p style={{ marginBottom: "12px" }}>\r
            <strong>组合示例：</strong>探索多个插件配合使用的效果\r
          </p>\r
          <div\r
            style={{\r
              display: "flex",\r
              flexWrap: "wrap",\r
              gap: "8px",\r
              marginBottom: "20px",\r
            }}\r
          >\r
            <NavLink\r
              to="/lli-plugin/combo/error-resilience"\r
              style={{\r
                padding: "6px 12px",\r
                background: "#e7f3ff",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
              }}\r
            >\r
              错误韧性组合\r
            </NavLink>\r
            <NavLink\r
              to="/lli-plugin/combo/performance"\r
              style={{\r
                padding: "6px 12px",\r
                background: "#e7f3ff",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
              }}\r
            >\r
              性能优化组合\r
            </NavLink>\r
            <NavLink\r
              to="/lli-plugin/combo/visual-effects"\r
              style={{\r
                padding: "6px 12px",\r
                background: "#e7f3ff",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
              }}\r
            >\r
              视觉效果组合\r
            </NavLink>\r
          </div>\r
\r
          <p style={{ marginBottom: "12px" }}>\r
            <strong>单个插件：</strong>查看每个插件的具体功能和用法\r
          </p>\r
          <div\r
            style={{\r
              display: "flex",\r
              flexWrap: "wrap",\r
              gap: "8px",\r
            }}\r
          >\r
            <NavLink\r
              to="/lli-plugin/watermark"\r
              style={{\r
                padding: "6px 12px",\r
                background: "#fff4e6",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
              }}\r
            >\r
              水印\r
            </NavLink>\r
            <NavLink\r
              to="/lli-plugin/blur-up"\r
              style={{\r
                padding: "6px 12px",\r
                background: "#fff4e6",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
              }}\r
            >\r
              模糊占位\r
            </NavLink>\r
            <NavLink\r
              to="/lli-plugin/fade-in"\r
              style={{\r
                padding: "6px 12px",\r
                background: "#fff4e6",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
              }}\r
            >\r
              渐入效果\r
            </NavLink>\r
            <NavLink\r
              to="/lli-plugin/retry-on-error"\r
              style={{\r
                padding: "6px 12px",\r
                background: "#fff4e6",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
              }}\r
            >\r
              错误重试\r
            </NavLink>\r
            <NavLink\r
              to="/lli-plugin/image-optimization"\r
              style={{\r
                padding: "6px 12px",\r
                background: "#fff4e6",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
              }}\r
            >\r
              图片优化\r
            </NavLink>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="page-card">\r
        <h2 style={{ fontSize: "1.5em", marginBottom: "16px" }}>💡 提示</h2>\r
        <ul\r
          style={{\r
            lineHeight: "2",\r
            color: "#666",\r
            paddingLeft: "20px",\r
          }}\r
        >\r
          <li>点击左侧菜单栏探索所有可用的插件示例</li>\r
          <li>每个示例页面底部都会显示完整的源代码</li>\r
          <li>支持 60+ 种插件，可根据需求自由组合</li>\r
          <li>查看浏览器控制台可以看到更多日志信息</li>\r
        </ul>\r
      </div>\r
    </div>\r
  );\r
}\r
`;export{n as default};
