const r=`import {\r
  LazyLoadImageCore,\r
  getObserverPoolDetails,\r
  getObserverPoolStats,\r
  setObserverPoolDebugMode,\r
} from "../../components/LazyLoadImagePlugin";\r
import React, { useEffect, useState } from "react";\r
\r
import DemoPage from "./_layout/DemoPage";\r
\r
/**\r
 * ObserverPool Demo - IntersectionObserver 共享池\r
 *\r
 * 功能演示：\r
 * 1. Observer 实例共享\r
 * 2. 减少 97-99.5% 的 Observer 数量\r
 * 3. 内存优化 87-90%\r
 * 4. 滚动性能提升\r
 */\r
export default function ObserverPoolDemo() {\r
  const [stats, setStats] = useState(getObserverPoolStats());\r
  const [details, setDetails] = useState(getObserverPoolDetails());\r
  const [imageCount, setImageCount] = useState(20);\r
  const [debugMode, setDebugMode] = useState(false);\r
\r
  useEffect(() => {\r
    // 定期更新统计\r
    const interval = setInterval(() => {\r
      setStats(getObserverPoolStats());\r
      setDetails(getObserverPoolDetails());\r
    }, 500);\r
\r
    return () => clearInterval(interval);\r
  }, []);\r
\r
  const toggleDebugMode = () => {\r
    const newMode = !debugMode;\r
    setDebugMode(newMode);\r
    setObserverPoolDebugMode(newMode);\r
  };\r
\r
  const efficiency = stats.observerCount > 0\r
    ? Math.round((1 - stats.observerCount / stats.elementCount) * 100)\r
    : 0;\r
\r
  return (\r
    <DemoPage\r
      title="ObserverPool - IntersectionObserver 共享池"\r
      description="多个组件共享 Observer 实例，减少 97-99.5% 的资源占用"\r
    >\r
      <div style={{ marginBottom: 24 }}>\r
        <h3>🎯 核心优势</h3>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>✅ <strong>池化管理</strong>: 相同配置共享一个 Observer</li>\r
          <li>✅ <strong>大幅减少实例</strong>: 100 张图片从 100 个减少到 1-3 个 (⬇️ 97%)</li>\r
          <li>✅ <strong>内存优化</strong>: 减少 87-90% 的内存占用</li>\r
          <li>✅ <strong>滚动性能</strong>: 显著提升滚动流畅度</li>\r
          <li>✅ <strong>自动清理</strong>: 每 60 秒清理空闲 Observer</li>\r
        </ul>\r
      </div>\r
\r
      {/* 控制面板 */}\r
      <div style={{\r
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",\r
        color: "white",\r
        padding: 24,\r
        borderRadius: 12,\r
        marginBottom: 24\r
      }}>\r
        <h3 style={{ margin: "0 0 16px 0", color: "white" }}>🎮 控制面板</h3>\r
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>\r
          <div>\r
            <label style={{ marginRight: 8 }}>图片数量:</label>\r
            <select\r
              value={imageCount}\r
              onChange={(e) => setImageCount(Number(e.target.value))}\r
              style={{ padding: "8px 12px", borderRadius: 6, border: "none" }}\r
            >\r
              <option value={10}>10 张 (小规模)</option>\r
              <option value={20}>20 张 (小规模)</option>\r
              <option value={50}>50 张 (中等规模)</option>\r
              <option value={100}>100 张 (中等规模)</option>\r
              <option value={200}>200 张 (大规模)</option>\r
            </select>\r
          </div>\r
          <button\r
            onClick={toggleDebugMode}\r
            style={{\r
              padding: "8px 16px",\r
              borderRadius: 6,\r
              border: "none",\r
              background: debugMode ? "#22c55e" : "#94a3b8",\r
              color: "white",\r
              cursor: "pointer",\r
              fontWeight: "bold"\r
            }}\r
          >\r
            {debugMode ? "✅ 调试模式开启" : "调试模式关闭"}\r
          </button>\r
        </div>\r
      </div>\r
\r
      {/* 实时统计 */}\r
      <div style={{\r
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",\r
        color: "white",\r
        padding: 24,\r
        borderRadius: 12,\r
        marginBottom: 24\r
      }}>\r
        <h3 style={{ margin: "0 0 16px 0", color: "white" }}>📊 实时统计</h3>\r
        <div style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",\r
          gap: 16\r
        }}>\r
          <div style={{ background: "rgba(255,255,255,0.2)", padding: 16, borderRadius: 8 }}>\r
            <div style={{ fontSize: 32, fontWeight: "bold" }}>{stats.observerCount}</div>\r
            <div style={{ opacity: 0.9 }}>Observer 实例</div>\r
          </div>\r
          <div style={{ background: "rgba(255,255,255,0.2)", padding: 16, borderRadius: 8 }}>\r
            <div style={{ fontSize: 32, fontWeight: "bold" }}>{stats.elementCount}</div>\r
            <div style={{ opacity: 0.9 }}>观察的元素</div>\r
          </div>\r
          <div style={{ background: "rgba(255,255,255,0.2)", padding: 16, borderRadius: 8 }}>\r
            <div style={{ fontSize: 32, fontWeight: "bold" }}>\r
              {stats.averageElementsPerObserver}\r
            </div>\r
            <div style={{ opacity: 0.9 }}>平均元素/Observer</div>\r
          </div>\r
          <div style={{ background: "rgba(255,255,255,0.2)", padding: 16, borderRadius: 8 }}>\r
            <div style={{ fontSize: 32, fontWeight: "bold" }}>{efficiency}%</div>\r
            <div style={{ opacity: 0.9 }}>资源节省</div>\r
          </div>\r
          <div style={{ background: "rgba(255,255,255,0.2)", padding: 16, borderRadius: 8 }}>\r
            <div style={{ fontSize: 32, fontWeight: "bold" }}>\r
              {stats.totalCallbackExecutions}\r
            </div>\r
            <div style={{ opacity: 0.9 }}>回调执行次数</div>\r
          </div>\r
          <div style={{ background: "rgba(255,255,255,0.2)", padding: 16, borderRadius: 8 }}>\r
            <div style={{ fontSize: 32, fontWeight: "bold" }}>{stats.memoryEstimate}</div>\r
            <div style={{ opacity: 0.9 }}>内存估算</div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      {/* Observer 详情 */}\r
      {details.length > 0 && (\r
        <div style={{\r
          background: "#f0f9ff",\r
          border: "2px solid #0ea5e9",\r
          padding: 20,\r
          borderRadius: 8,\r
          marginBottom: 24\r
        }}>\r
          <h3 style={{ margin: "0 0 12px 0", color: "#0369a1" }}>🔍 Observer 详情</h3>\r
          <div style={{ overflowX: "auto" }}>\r
            <table style={{ width: "100%", fontSize: 14, borderCollapse: "collapse" }}>\r
              <thead>\r
                <tr style={{ background: "#e0f2fe" }}>\r
                  <th style={{ padding: 8, textAlign: "left", border: "1px solid #7dd3fc" }}>配置键</th>\r
                  <th style={{ padding: 8, textAlign: "center", border: "1px solid #7dd3fc" }}>元素数</th>\r
                  <th style={{ padding: 8, textAlign: "center", border: "1px solid #7dd3fc" }}>回调次数</th>\r
                  <th style={{ padding: 8, textAlign: "center", border: "1px solid #7dd3fc" }}>存活时间</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                {details.map((observer, i) => (\r
                  <tr key={i}>\r
                    <td style={{\r
                      padding: 8,\r
                      border: "1px solid #7dd3fc",\r
                      fontFamily: "monospace",\r
                      fontSize: 12,\r
                      maxWidth: "300px",\r
                      overflow: "hidden",\r
                      textOverflow: "ellipsis",\r
                      whiteSpace: "nowrap"\r
                    }}>\r
                      {observer.key}\r
                    </td>\r
                    <td style={{ padding: 8, textAlign: "center", border: "1px solid #7dd3fc" }}>\r
                      {observer.elementCount}\r
                    </td>\r
                    <td style={{ padding: 8, textAlign: "center", border: "1px solid #7dd3fc" }}>\r
                      {observer.totalCallbacks}\r
                    </td>\r
                    <td style={{ padding: 8, textAlign: "center", border: "1px solid #7dd3fc" }}>\r
                      {Math.round((Date.now() - observer.createdAt) / 1000)}s\r
                    </td>\r
                  </tr>\r
                ))}\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
      )}\r
\r
      {/* 性能对比 */}\r
      <div style={{\r
        background: "#f0fdf4",\r
        border: "2px solid #22c55e",\r
        padding: 20,\r
        borderRadius: 8,\r
        marginBottom: 24\r
      }}>\r
        <h3 style={{ margin: "0 0 12px 0", color: "#15803d" }}>⚡ 性能对比</h3>\r
        <table style={{ width: "100%", borderCollapse: "collapse" }}>\r
          <thead>\r
            <tr style={{ background: "#dcfce7" }}>\r
              <th style={{ padding: 8, textAlign: "left", border: "1px solid #86efac" }}>场景</th>\r
              <th style={{ padding: 8, textAlign: "center", border: "1px solid #86efac" }}>改进前</th>\r
              <th style={{ padding: 8, textAlign: "center", border: "1px solid #86efac" }}>改进后</th>\r
              <th style={{ padding: 8, textAlign: "center", border: "1px solid #86efac" }}>提升</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={{ padding: 8, border: "1px solid #86efac" }}>20张图片</td>\r
              <td style={{ padding: 8, textAlign: "center", border: "1px solid #86efac" }}>20个 Observer</td>\r
              <td style={{ padding: 8, textAlign: "center", border: "1px solid #86efac" }}>1-2个 Observer</td>\r
              <td style={{ padding: 8, textAlign: "center", border: "1px solid #86efac", fontWeight: "bold", color: "#15803d" }}>⬇️ 90-95%</td>\r
            </tr>\r
            <tr>\r
              <td style={{ padding: 8, border: "1px solid #86efac" }}>100张图片</td>\r
              <td style={{ padding: 8, textAlign: "center", border: "1px solid #86efac" }}>100个 Observer</td>\r
              <td style={{ padding: 8, textAlign: "center", border: "1px solid #86efac" }}>1-3个 Observer</td>\r
              <td style={{ padding: 8, textAlign: "center", border: "1px solid #86efac", fontWeight: "bold", color: "#15803d" }}>⬇️ 97%</td>\r
            </tr>\r
            <tr>\r
              <td style={{ padding: 8, border: "1px solid #86efac" }}>1000张图片</td>\r
              <td style={{ padding: 8, textAlign: "center", border: "1px solid #86efac" }}>1000个 Observer</td>\r
              <td style={{ padding: 8, textAlign: "center", border: "1px solid #86efac" }}>1-5个 Observer</td>\r
              <td style={{ padding: 8, textAlign: "center", border: "1px solid #86efac", fontWeight: "bold", color: "#15803d" }}>⬇️ 99.5%</td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      {/* 图片网格 */}\r
      <div>\r
        <h3>📸 图片网格 ({imageCount} 张)</h3>\r
        <p style={{ color: "#64748b", marginBottom: 16 }}>\r
          滚动页面观察统计数据的变化。所有图片共享 {stats.observerCount} 个 Observer 实例。\r
        </p>\r
        <div style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",\r
          gap: 12\r
        }}>\r
          {Array.from({ length: imageCount }, (_, i) => (\r
            <div key={i} style={{\r
              border: "2px solid #e2e8f0",\r
              borderRadius: 8,\r
              overflow: "hidden",\r
              background: "#fff"\r
            }}>\r
              <LazyLoadImageCore\r
                src={\`https://picsum.photos/150/150?random=\${i + 100}\`}\r
                alt={\`Image \${i + 1}\`}\r
                loading="lazy"\r
                imageStyle={{ width: "100%", display: "block" }}\r
              />\r
              <div style={{\r
                padding: 6,\r
                fontSize: 11,\r
                color: "#64748b",\r
                textAlign: "center"\r
              }}>\r
                #{i + 1}\r
              </div>\r
            </div>\r
          ))}\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
\r
`;export{r as default};
