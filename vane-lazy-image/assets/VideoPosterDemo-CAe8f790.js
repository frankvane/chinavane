const r=`import { LazyLoadImageCore, withPlugins } from "vane-lazy-image";\r
import { createVideoPosterPlugin } from "vane-lazy-image/custom-plugins";\r
import DemoPage from "./_layout/DemoPage";\r
\r
const VideoPosterDemo = () => {\r
  // 示例：基础视频海报\r
  const BasicVideoPosterImage = withPlugins(LazyLoadImageCore, [\r
    createVideoPosterPlugin({\r
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",\r
      playButtonPosition: "center",\r
      playButtonSize: "large",\r
      onPlay: () => console.log("视频开始播放"),\r
    }),\r
  ]);\r
\r
  // 示例：内联播放模式\r
  const InlineVideoPosterImage = withPlugins(LazyLoadImageCore, [\r
    createVideoPosterPlugin({\r
      videoUrl: "https://www.w3schools.com/html/movie.mp4",\r
      playInModal: false,\r
      playButtonPosition: "center",\r
      playButtonSize: "medium",\r
      autoPlay: true,\r
      loop: true,\r
      muted: true,\r
    }),\r
  ]);\r
\r
  // 示例：自定义播放按钮样式\r
  const CustomStyledVideoPosterImage = withPlugins(LazyLoadImageCore, [\r
    createVideoPosterPlugin({\r
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",\r
      playButtonPosition: "bottom-right",\r
      playButtonSize: "small",\r
      playButtonStyle: {\r
        backgroundColor: "rgba(255, 59, 48, 0.9)",\r
        border: "2px solid white",\r
      },\r
      onPlay: () => console.log("自定义样式视频播放"),\r
    }),\r
  ]);\r
\r
  // 示例：悬停才显示播放按钮（使用自定义渲染）\r
  const HoverPlayImage = withPlugins(LazyLoadImageCore, [\r
    createVideoPosterPlugin({\r
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",\r
      playButtonPosition: "center",\r
      playButtonSize: "large",\r
      showPlayButton: true,\r
      playIcon: (\r
        <div\r
          style={{\r
            width: "60px",\r
            height: "60px",\r
            borderRadius: "50%",\r
            backgroundColor: "rgba(34, 139, 230, 0.9)",\r
            display: "flex",\r
            alignItems: "center",\r
            justifyContent: "center",\r
            fontSize: "14px",\r
            color: "white",\r
            fontWeight: "bold",\r
          }}\r
        >\r
          PLAY\r
        </div>\r
      ),\r
    }),\r
  ]);\r
\r
  // 示例：多个视频海报（不同位置）\r
  const MultipleButtonsImage = withPlugins(LazyLoadImageCore, [\r
    createVideoPosterPlugin({\r
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",\r
      playButtonPosition: "top-left",\r
      playButtonSize: "small",\r
      playButtonStyle: {\r
        backgroundColor: "rgba(52, 199, 89, 0.9)",\r
      },\r
    }),\r
  ]);\r
\r
  return (\r
    <DemoPage\r
      title="VideoPoster Plugin"\r
      description="视频海报插件 - 将图片作为视频封面，点击播放视频"\r
    >\r
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>\r
        {/* 功能特性 */}\r
        <div\r
          style={{\r
            padding: "20px",\r
            backgroundColor: "#f8f9fa",\r
            borderRadius: "8px",\r
            borderLeft: "4px solid #007bff",\r
          }}\r
        >\r
          <h3 style={{ marginTop: 0, color: "#007bff" }}>✨ 功能特性</h3>\r
          <ul style={{ marginBottom: 0, lineHeight: 1.8 }}>\r
            <li>🎬 <strong>模态框播放</strong> - 在全屏模态框中播放视频</li>\r
            <li>📺 <strong>内联播放</strong> - 直接在图片位置播放视频</li>\r
            <li>🎨 <strong>自定义样式</strong> - 自定义播放按钮大小、位置、样式</li>\r
            <li>🎯 <strong>多位置支持</strong> - center / bottom-left / bottom-right</li>\r
            <li>🔄 <strong>播放控制</strong> - 支持自动播放、循环、静音</li>\r
            <li>🎭 <strong>自定义图标</strong> - 使用自定义播放按钮图标</li>\r
          </ul>\r
        </div>\r
\r
        {/* 示例 1: 基础视频海报 */}\r
        <div>\r
          <h3>📌 示例 1: 基础视频海报（模态框播放）</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            点击图片中心的播放按钮，在模态框中播放视频\r
          </p>\r
          <div style={{ maxWidth: "500px" }}>\r
            <BasicVideoPosterImage\r
              src="https://picsum.photos/id/1015/500/300"\r
              alt="视频海报 - 大自然"\r
              imageStyle={{\r
                width: "100%",\r
                borderRadius: "8px",\r
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\r
              }}\r
            />\r
          </div>\r
        </div>\r
\r
        {/* 示例 2: 内联播放模式 */}\r
        <div>\r
          <h3>📌 示例 2: 内联播放模式</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            视频直接在图片位置播放，不弹出模态框\r
          </p>\r
          <div style={{ maxWidth: "500px" }}>\r
            <InlineVideoPosterImage\r
              src="https://picsum.photos/id/1018/500/300"\r
              alt="视频海报 - 内联播放"\r
              imageStyle={{\r
                width: "100%",\r
                borderRadius: "8px",\r
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\r
              }}\r
            />\r
          </div>\r
        </div>\r
\r
        {/* 示例 3: 自定义播放按钮样式 */}\r
        <div>\r
          <h3>📌 示例 3: 自定义播放按钮样式</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            按钮位于右下角，红色背景，小尺寸\r
          </p>\r
          <div style={{ maxWidth: "500px" }}>\r
            <CustomStyledVideoPosterImage\r
              src="https://picsum.photos/id/1019/500/300"\r
              alt="视频海报 - 自定义样式"\r
              imageStyle={{\r
                width: "100%",\r
                borderRadius: "8px",\r
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\r
              }}\r
            />\r
          </div>\r
        </div>\r
\r
        {/* 示例 4: 自定义播放图标 */}\r
        <div>\r
          <h3>📌 示例 4: 自定义播放图标</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            使用自定义的"PLAY"文字图标代替默认三角形\r
          </p>\r
          <div style={{ maxWidth: "500px" }}>\r
            <HoverPlayImage\r
              src="https://picsum.photos/id/1020/500/300"\r
              alt="视频海报 - 自定义图标"\r
              imageStyle={{\r
                width: "100%",\r
                borderRadius: "8px",\r
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\r
              }}\r
            />\r
          </div>\r
        </div>\r
\r
        {/* 示例 5: 不同按钮位置 */}\r
        <div>\r
          <h3>📌 示例 5: 不同按钮位置</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            播放按钮位于左上角\r
          </p>\r
          <div style={{ maxWidth: "500px" }}>\r
            <MultipleButtonsImage\r
              src="https://picsum.photos/id/1021/500/300"\r
              alt="视频海报 - 多按钮"\r
              imageStyle={{\r
                width: "100%",\r
                borderRadius: "8px",\r
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\r
              }}\r
            />\r
          </div>\r
        </div>\r
\r
        {/* 应用场景 */}\r
        <div\r
          style={{\r
            padding: "20px",\r
            backgroundColor: "#e7f3ff",\r
            borderRadius: "8px",\r
            borderLeft: "4px solid #0066cc",\r
          }}\r
        >\r
          <h3 style={{ marginTop: 0, color: "#0066cc" }}>💡 应用场景</h3>\r
          <ul style={{ marginBottom: 0, lineHeight: 1.8 }}>\r
            <li>📺 <strong>视频网站</strong> - 视频列表预览图，点击播放</li>\r
            <li>🎓 <strong>在线教育</strong> - 课程视频封面</li>\r
            <li>🛍️ <strong>电商平台</strong> - 商品视频展示</li>\r
            <li>📰 <strong>新闻媒体</strong> - 视频新闻封面</li>\r
            <li>🎬 <strong>视频博客</strong> - Vlog封面展示</li>\r
            <li>🏢 <strong>企业官网</strong> - 产品演示视频</li>\r
          </ul>\r
        </div>\r
\r
        {/* API 说明 */}\r
        <div>\r
          <h3>📚 配置项说明</h3>\r
          <div\r
            style={{\r
              backgroundColor: "#f5f5f5",\r
              padding: "16px",\r
              borderRadius: "8px",\r
              fontFamily: "monospace",\r
              fontSize: "14px",\r
              overflowX: "auto",\r
            }}\r
          >\r
            <pre style={{ margin: 0 }}>\r
{\`interface VideoPosterConfig {\r
  videoUrl: string;                    // 视频URL\r
  autoPlay?: boolean;                  // 自动播放（默认true）\r
  loop?: boolean;                      // 循环播放（默认false）\r
  muted?: boolean;                     // 静音（默认true）\r
  playButtonPosition?: string;         // 'center' | 'bottom-left' | 'bottom-right'\r
  playButtonSize?: string;             // 'small' | 'medium' | 'large'\r
  playButtonStyle?: CSSProperties;     // 自定义按钮样式\r
  showPlayButton?: boolean;            // 是否显示按钮（默认true）\r
  onPlay?: () => void;                 // 播放回调\r
  playInModal?: boolean;               // 模态框播放（默认true）\r
  playIcon?: ReactNode;                // 自定义播放图标\r
}\`}\r
            </pre>\r
          </div>\r
        </div>\r
\r
        {/* 使用提示 */}\r
        <div\r
          style={{\r
            padding: "20px",\r
            backgroundColor: "#fff3cd",\r
            borderRadius: "8px",\r
            borderLeft: "4px solid #ffc107",\r
          }}\r
        >\r
          <h3 style={{ marginTop: 0, color: "#856404" }}>⚠️ 使用提示</h3>\r
          <ul style={{ marginBottom: 0, lineHeight: 1.8, color: "#856404" }}>\r
            <li>确保视频URL可访问，否则播放会失败</li>\r
            <li>移动端自动播放可能受到浏览器限制，建议设置 muted=true</li>\r
            <li>大视频文件建议使用流媒体服务</li>\r
            <li>模态框播放体验更好，但会阻断其他交互</li>\r
            <li>内联播放适合小尺寸视频预览</li>\r
          </ul>\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default VideoPosterDemo;\r
\r
`;export{r as default};
