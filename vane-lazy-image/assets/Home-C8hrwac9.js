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
          style={{ fontSize: "1.2em", lineHeight: "1.8", marginBottom: "12px" }}\r
        >\r
          一个功能强大、高度可扩展的 React 图片懒加载组件库\r
        </p>\r
        <div\r
          style={{\r
            display: "inline-flex",\r
            gap: "8px",\r
            flexWrap: "wrap",\r
            fontSize: "0.9em",\r
          }}\r
        >\r
          <span\r
            style={{\r
              padding: "4px 12px",\r
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",\r
              color: "white",\r
              borderRadius: "12px",\r
              fontWeight: "600",\r
            }}\r
          >\r
            v1.0.19\r
          </span>\r
          <span\r
            style={{\r
              padding: "4px 12px",\r
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",\r
              color: "white",\r
              borderRadius: "12px",\r
              fontWeight: "600",\r
            }}\r
          >\r
            🚀 99% 资源优化\r
          </span>\r
          <span\r
            style={{\r
              padding: "4px 12px",\r
              background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",\r
              color: "white",\r
              borderRadius: "12px",\r
              fontWeight: "600",\r
            }}\r
          >\r
            66+ 插件\r
          </span>\r
        </div>\r
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
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",\r
              borderRadius: "8px",\r
              border: "2px solid #667eea",\r
              boxShadow: "0 4px 12px rgba(102, 126, 234, 0.15)",\r
            }}\r
          >\r
            <h3 style={{ marginBottom: "8px", fontSize: "1.1em", color: "white" }}>\r
              ⚡ 性能优化 🆕\r
            </h3>\r
            <p style={{ color: "rgba(255, 255, 255, 0.95)", lineHeight: "1.6" }}>\r
              GlobalContext + ObserverPool 双重优化，减少 99% 资源消耗\r
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
      <div\r
        className="page-card"\r
        style={{\r
          marginBottom: "20px",\r
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",\r
          border: "2px solid #667eea",\r
        }}\r
      >\r
        <h2 style={{ fontSize: "1.5em", marginBottom: "16px" }}>\r
          🎯 v1.0.19 核心优化\r
        </h2>\r
        <div style={{ lineHeight: "2" }}>\r
          <div\r
            style={{\r
              display: "grid",\r
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",\r
              gap: "16px",\r
              marginBottom: "16px",\r
            }}\r
          >\r
            <div\r
              style={{\r
                padding: "16px",\r
                background: "white",\r
                borderRadius: "8px",\r
                border: "1px solid #e9ecef",\r
              }}\r
            >\r
              <h3 style={{ fontSize: "1em", marginBottom: "8px", color: "#667eea" }}>\r
                🌐 GlobalContext 全局单例\r
              </h3>\r
              <p style={{ fontSize: "0.9em", color: "#666", margin: 0 }}>\r
                网络/设备信息自动缓存，监听器数量减少 95%\r
              </p>\r
            </div>\r
            <div\r
              style={{\r
                padding: "16px",\r
                background: "white",\r
                borderRadius: "8px",\r
                border: "1px solid #e9ecef",\r
              }}\r
            >\r
              <h3 style={{ fontSize: "1em", marginBottom: "8px", color: "#667eea" }}>\r
                👁️ ObserverPool 共享池\r
              </h3>\r
              <p style={{ fontSize: "0.9em", color: "#666", margin: 0 }}>\r
                Observer 实例共享，内存占用减少 99%\r
              </p>\r
            </div>\r
            <div\r
              style={{\r
                padding: "16px",\r
                background: "white",\r
                borderRadius: "8px",\r
                border: "1px solid #e9ecef",\r
              }}\r
            >\r
              <h3 style={{ fontSize: "1em", marginBottom: "8px", color: "#667eea" }}>\r
                ⚡ 综合性能提升\r
              </h3>\r
              <p style={{ fontSize: "0.9em", color: "#666", margin: 0 }}>\r
                100 张图片从 200 次检测减少到 2 次\r
              </p>\r
            </div>\r
          </div>\r
          <div\r
            style={{\r
              padding: "12px",\r
              background: "#fff3cd",\r
              borderRadius: "6px",\r
              border: "1px solid #ffc107",\r
              fontSize: "0.9em",\r
              color: "#856404",\r
            }}\r
          >\r
            💡 <strong>提示：</strong>查看{" "}\r
            <NavLink\r
              to="/lli-plugin/performance-optimization"\r
              style={{ color: "#667eea", fontWeight: "600" }}\r
            >\r
              性能优化综合演示\r
            </NavLink>{" "}\r
            了解详细的优化效果\r
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
            <strong>🆕 性能优化演示：</strong>查看最新的性能优化效果\r
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
              to="/lli-plugin/global-context"\r
              style={{\r
                padding: "6px 12px",\r
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",\r
                color: "white",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
                fontWeight: "600",\r
              }}\r
            >\r
              🚀 GlobalContext\r
            </NavLink>\r
            <NavLink\r
              to="/lli-plugin/observer-pool"\r
              style={{\r
                padding: "6px 12px",\r
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",\r
                color: "white",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
                fontWeight: "600",\r
              }}\r
            >\r
              👁️ ObserverPool\r
            </NavLink>\r
            <NavLink\r
              to="/lli-plugin/performance-optimization"\r
              style={{\r
                padding: "6px 12px",\r
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",\r
                color: "white",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
                fontWeight: "600",\r
              }}\r
            >\r
              ⚡ 性能优化综合\r
            </NavLink>\r
          </div>\r
\r
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
            <NavLink\r
              to="/lli-plugin/hover-zoom"\r
              style={{\r
                padding: "6px 12px",\r
                background: "#fff4e6",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
              }}\r
            >\r
              悬停放大\r
            </NavLink>\r
            <NavLink\r
              to="/lli-plugin/responsive"\r
              style={{\r
                padding: "6px 12px",\r
                background: "#fff4e6",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
              }}\r
            >\r
              响应式\r
            </NavLink>\r
            <NavLink\r
              to="/lli-plugin/seo"\r
              style={{\r
                padding: "6px 12px",\r
                background: "#fff4e6",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
              }}\r
            >\r
              SEO优化\r
            </NavLink>\r
            <NavLink\r
              to="/lli-plugin/svg-placeholder"\r
              style={{\r
                padding: "6px 12px",\r
                background: "#fff4e6",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
              }}\r
            >\r
              SVG占位符\r
            </NavLink>\r
            <NavLink\r
              to="/lli-plugin/viewport-dwell"\r
              style={{\r
                padding: "6px 12px",\r
                background: "#fff4e6",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
              }}\r
            >\r
              视口驻留\r
            </NavLink>\r
            <NavLink\r
              to="/lli-plugin/webp"\r
              style={{\r
                padding: "6px 12px",\r
                background: "#fff4e6",\r
                borderRadius: "4px",\r
                textDecoration: "none",\r
                fontSize: "0.9em",\r
              }}\r
            >\r
              WebP优化\r
            </NavLink>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div className="page-card">\r
        <h2 style={{ fontSize: "1.5em", marginBottom: "16px" }}>\r
          🚀 高级功能\r
        </h2>\r
        <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "20px" }}>\r
          探索企业级高级特性：插件沙箱、性能监控、热更新和依赖管理系统\r
        </p>\r
        <div\r
          style={{\r
            display: "flex",\r
            flexWrap: "wrap",\r
            gap: "12px",\r
          }}\r
        >\r
          <NavLink\r
            to="/lli-plugin/plugin-sandbox"\r
            style={{\r
              padding: "10px 20px",\r
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",\r
              color: "white",\r
              borderRadius: "8px",\r
              textDecoration: "none",\r
              fontSize: "0.95em",\r
              fontWeight: "bold",\r
              boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",\r
            }}\r
          >\r
            🛡️ 插件沙箱\r
          </NavLink>\r
          <NavLink\r
            to="/lli-plugin/performance-monitoring"\r
            style={{\r
              padding: "10px 20px",\r
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",\r
              color: "white",\r
              borderRadius: "8px",\r
              textDecoration: "none",\r
              fontSize: "0.95em",\r
              fontWeight: "bold",\r
              boxShadow: "0 4px 12px rgba(240, 147, 251, 0.4)",\r
            }}\r
          >\r
            📊 性能监控\r
          </NavLink>\r
          <NavLink\r
            to="/lli-plugin/plugin-hot-reload"\r
            style={{\r
              padding: "10px 20px",\r
              background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",\r
              color: "white",\r
              borderRadius: "8px",\r
              textDecoration: "none",\r
              fontSize: "0.95em",\r
              fontWeight: "bold",\r
              boxShadow: "0 4px 12px rgba(79, 172, 254, 0.4)",\r
            }}\r
          >\r
            🔥 热更新\r
          </NavLink>\r
          <NavLink\r
            to="/lli-plugin/dependency-resolver"\r
            style={{\r
              padding: "10px 20px",\r
              background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",\r
              color: "white",\r
              borderRadius: "8px",\r
              textDecoration: "none",\r
              fontSize: "0.95em",\r
              fontWeight: "bold",\r
              boxShadow: "0 4px 12px rgba(250, 112, 154, 0.4)",\r
            }}\r
          >\r
            🧩 依赖解析\r
          </NavLink>\r
        </div>\r
        <div\r
          style={{\r
            marginTop: "20px",\r
            padding: "16px",\r
            background: "#fef3c7",\r
            borderRadius: "8px",\r
            border: "1px solid #f59e0b",\r
          }}\r
        >\r
          <p style={{ margin: 0, color: "#92400e", lineHeight: "1.6" }}>\r
            <strong>💡 企业级特性：</strong>\r
          </p>\r
          <ul style={{ margin: "8px 0 0 20px", color: "#92400e", lineHeight: "1.8" }}>\r
            <li><strong>沙箱机制</strong>：隔离插件执行，防止错误传播</li>\r
            <li><strong>性能监控</strong>：完整的性能追踪和分析系统</li>\r
            <li><strong>热更新</strong>：运行时动态加载和替换插件</li>\r
            <li><strong>依赖解析</strong>：自动处理插件依赖关系</li>\r
          </ul>\r
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
          <li>支持 66+ 种插件，可根据需求自由组合</li>\r
          <li>查看浏览器控制台可以看到更多日志信息</li>\r
        </ul>\r
      </div>\r
    </div>\r
  );\r
}\r
`;export{n as default};
