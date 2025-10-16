import{j as e}from"./index-HctDrVfM.js";import{M as l,r as a}from"./index-Bvggk2O-.js";import{h as s,t as u}from"./tomorrow-CRMQJKJ-.js";const c=`# 🗂️ Vane File Preview\r
\r
一个功能强大、高度可扩展的 React 文件预览组件库\r
\r
[![NPM Version](https://img.shields.io/badge/npm-v1.0.0-blue)](https://www.npmjs.com/package/vane-file-preview)\r
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)\r
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)\r
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)\r
\r
[在线演示](https://chinavane.netlify.app/) | [快速开始](#快速开始) | [插件列表](#插件列表) | [API 文档](#api-文档)\r
\r
---\r
\r
## ✨ 核心特性\r
\r
### 🔌 **插件化架构**\r
\r
- 基于事件总线的插件系统，支持灵活组合\r
- 15+ 内置预览插件，覆盖主流文件格式\r
- 易于扩展，支持自定义插件开发\r
\r
### 📄 **丰富的文件格式支持**\r
\r
- **文档类**：PDF、Word (DOCX)、PowerPoint (PPTX)、Excel (XLSX)、Markdown、EPUB\r
- **代码类**：JavaScript、TypeScript、Python、Java、CSS、HTML 等 180+ 语言\r
- **数据类**：JSON、CSV、TSV 等结构化数据\r
- **媒体类**：图片、音频、视频\r
- **压缩包**：ZIP 文件内容预览\r
\r
### ⚡ **性能优化**\r
\r
- 懒加载机制，按需渲染\r
- 虚拟滚动支持大文件预览\r
- 内存缓存优化\r
- 支持文件流式加载\r
- 响应式设计，适配各种屏幕尺寸\r
\r
### 🛡️ **稳健性**\r
\r
- 完善的错误处理机制\r
- 文件格式自动检测\r
- 降级预览策略\r
- TypeScript 类型安全\r
\r
### 🎨 **用户体验**\r
\r
- 统一的预览界面设计\r
- 主题切换支持（亮色/暗色/自动）\r
- 语法高亮、代码折叠\r
- 搜索、导航、缩放等交互功能\r
- 可访问性支持\r
\r
---\r
\r
## 📦 安装\r
\r
### NPM / Yarn / PNPM\r
\r
\`\`\`bash\r
# npm\r
npm install vane-file-preview\r
\r
# yarn\r
yarn add vane-file-preview\r
\r
# pnpm\r
pnpm add vane-file-preview\r
\`\`\`\r
\r
### 本地开发\r
\r
如果您想本地运行演示站点或进行二次开发：\r
\r
\`\`\`bash\r
# 克隆仓库\r
git clone https://github.com/frankvane/vane-file-preview.git\r
\r
# 进入项目目录\r
cd vane-file-preview\r
\r
# 安装依赖\r
npm install\r
\r
# 启动开发服务器\r
npm run dev\r
\r
# 构建生产版本\r
npm run build\r
\r
# 预览构建产物\r
npm run preview\r
\`\`\`\r
\r
---\r
\r
## 🚀 快速开始\r
\r
### 基础使用\r
\r
最简单的使用方式，不带任何插件：\r
\r
\`\`\`tsx\r
import { FilePreviewCore } from "vane-file-preview";\r
\r
function App() {\r
  const fileInfo = {\r
    name: "example.pdf",\r
    url: "/path/to/example.pdf",\r
    size: 1024000,\r
    type: "application/pdf",\r
  };\r
\r
  return (\r
    <div style={{ width: "100%", height: "600px" }}>\r
      <FilePreviewCore\r
        file={fileInfo}\r
        onLoadStart={() => console.log("开始加载")}\r
        onLoadSuccess={() => console.log("加载成功")}\r
        onLoadError={(error) => console.error("加载失败", error)}\r
      />\r
    </div>\r
  );\r
}\r
\`\`\`\r
\r
### 使用插件\r
\r
通过 \`withPlugins\` 高阶组件组合多个预览插件：\r
\r
\`\`\`tsx\r
import {\r
  FilePreviewCore,\r
  withPlugins,\r
  createPdfPreviewPlugin,\r
  createImagePreviewPlugin,\r
  createJsonPreviewPlugin,\r
} from "vane-file-preview";\r
\r
// 组合插件\r
const FilePreview = withPlugins(FilePreviewCore, [\r
  createPdfPreviewPlugin({\r
    enableTextSelection: true,\r
    scale: 1.2,\r
  }),\r
  createImagePreviewPlugin({\r
    enableZoom: true,\r
    enableRotation: true,\r
  }),\r
  createJsonPreviewPlugin({\r
    theme: "auto",\r
    enableSearch: true,\r
    collapsed: false,\r
  }),\r
]);\r
\r
function App() {\r
  const fileInfo = {\r
    name: "data.json",\r
    url: "/path/to/data.json",\r
    size: 2048,\r
    type: "application/json",\r
  };\r
\r
  return (\r
    <div style={{ width: "100%", height: "600px" }}>\r
      <FilePreview\r
        file={fileInfo}\r
        containerStyle={{ border: "1px solid #ddd", borderRadius: 8 }}\r
      />\r
    </div>\r
  );\r
}\r
\`\`\`\r
\r
### 完整示例：多格式文件预览器\r
\r
\`\`\`tsx\r
import {\r
  FilePreviewCore,\r
  withPlugins,\r
  createPdfPreviewPlugin,\r
  createImagePreviewPlugin,\r
  createJsonPreviewPlugin,\r
  createCodePreviewPlugin,\r
  createMarkdownPreviewPlugin,\r
  createDocxPreviewPlugin,\r
  createXlsxPreviewPlugin,\r
  createVideoPreviewPlugin,\r
  createAudioPreviewPlugin,\r
  createZipPreviewPlugin,\r
} from "vane-file-preview";\r
\r
const UniversalFilePreview = withPlugins(FilePreviewCore, [\r
  // 文档预览\r
  createPdfPreviewPlugin(),\r
  createDocxPreviewPlugin(),\r
  createXlsxPreviewPlugin(),\r
\r
  // 代码预览\r
  createCodePreviewPlugin({\r
    theme: "github",\r
    showLineNumbers: true,\r
    enableCodeFolding: true,\r
  }),\r
  createMarkdownPreviewPlugin({\r
    enableMath: true,\r
    enableMermaid: true,\r
  }),\r
\r
  // 数据预览\r
  createJsonPreviewPlugin({\r
    theme: "auto",\r
    enableSearch: true,\r
  }),\r
\r
  // 媒体预览\r
  createImagePreviewPlugin({\r
    enableZoom: true,\r
    enableRotation: true,\r
  }),\r
  createVideoPreviewPlugin({\r
    controls: true,\r
    autoplay: false,\r
  }),\r
  createAudioPreviewPlugin({\r
    showPlaylist: true,\r
  }),\r
\r
  // 压缩包预览\r
  createZipPreviewPlugin({\r
    maxDepth: 3,\r
    showFileSize: true,\r
  }),\r
]);\r
\r
export default function FilePreviewDemo() {\r
  const [selectedFile, setSelectedFile] = useState(null);\r
\r
  const handleFileSelect = (event) => {\r
    const file = event.target.files[0];\r
    if (file) {\r
      setSelectedFile({\r
        name: file.name,\r
        url: URL.createObjectURL(file),\r
        size: file.size,\r
        type: file.type,\r
      });\r
    }\r
  };\r
\r
  return (\r
    <div style={{ padding: 20 }}>\r
      <input\r
        type="file"\r
        onChange={handleFileSelect}\r
        style={{ marginBottom: 20 }}\r
      />\r
\r
      {selectedFile && (\r
        <div style={{ height: 600, border: "1px solid #ddd", borderRadius: 8 }}>\r
          <UniversalFilePreview\r
            file={selectedFile}\r
            onLoadError={(error) => {\r
              console.error("文件预览失败:", error);\r
              alert("文件预览失败，请检查文件格式是否支持");\r
            }}\r
          />\r
        </div>\r
      )}\r
    </div>\r
  );\r
}\r
\`\`\`\r
\r
---\r
\r
## 📚 插件列表\r
\r
本项目提供 15+ 个开箱即用的预览插件，按文件类型分类如下：\r
\r
### 📄 文档预览插件\r
\r
| 插件                          | 支持格式 | 主要功能                          |\r
| ----------------------------- | -------- | --------------------------------- |\r
| \`createPdfPreviewPlugin\`      | PDF      | 页面导航、缩放、文本选择、搜索    |\r
| \`createDocxPreviewPlugin\`     | DOCX     | 文档渲染、样式保持、图片显示      |\r
| \`createXlsxPreviewPlugin\`     | XLSX     | 表格预览、工作表切换、数据筛选    |\r
| \`createMarkdownPreviewPlugin\` | MD       | Markdown 渲染、数学公式、代码高亮 |\r
| \`createEpubPreviewPlugin\`     | EPUB     | 电子书阅读、章节导航、字体调节    |\r
\r
### 💻 代码预览插件\r
\r
| 插件                      | 支持格式  | 主要功能                           |\r
| ------------------------- | --------- | ---------------------------------- |\r
| \`createCodePreviewPlugin\` | 180+ 语言 | 语法高亮、行号、代码折叠、主题切换 |\r
| \`createJsonPreviewPlugin\` | JSON      | 结构化显示、搜索、折叠、主题切换   |\r
\r
### 📊 数据预览插件\r
\r
| 插件                     | 支持格式 | 主要功能                   |\r
| ------------------------ | -------- | -------------------------- |\r
| \`createCsvPreviewPlugin\` | CSV/TSV  | 表格显示、分页、排序、筛选 |\r
\r
### 🖼️ 媒体预览插件\r
\r
| 插件                       | 支持格式        | 主要功能                     |\r
| -------------------------- | --------------- | ---------------------------- |\r
| \`createImagePreviewPlugin\` | JPG/PNG/GIF/SVG | 缩放、旋转、全屏查看         |\r
| \`createVideoPreviewPlugin\` | MP4/WebM/OGV    | 播放控制、进度条、音量调节   |\r
| \`createAudioPreviewPlugin\` | MP3/WAV/OGG     | 音频播放、波形显示、播放列表 |\r
\r
### 🗜️ 压缩包预览插件\r
\r
| 插件                     | 支持格式 | 主要功能                   |\r
| ------------------------ | -------- | -------------------------- |\r
| \`createZipPreviewPlugin\` | ZIP      | 文件列表、目录树、文件提取 |\r
\r
### 🔧 通用插件\r
\r
| 插件                        | 说明         |\r
| --------------------------- | ------------ |\r
| \`createDownloadPlugin\`      | 文件下载功能 |\r
| \`createErrorBoundaryPlugin\` | 错误边界处理 |\r
| \`createLoadingPlugin\`       | 加载状态显示 |\r
\r
> 💡 **提示**：所有插件都可以通过 \`vane-file-preview\` 包导入。详细配置请参考 [API 文档](#api-文档) 或查看 [在线演示](https://chinavane.netlify.app/)。\r
\r
---\r
\r
## 📂 项目结构\r
\r
\`\`\`\r
vane-file-preview/\r
├── src/\r
│   ├── components/\r
│   │   └── FilePreviewPlugin/\r
│   │       ├── core/\r
│   │       │   └── FilePreviewCore.tsx    # 核心组件\r
│   │       ├── plugins/\r
│   │       │   ├── types.ts               # 插件类型定义\r
│   │       │   ├── PluginBus.ts           # 事件总线\r
│   │       │   ├── PluginManager.ts       # 插件管理器\r
│   │       │   ├── withPlugins.tsx        # HOC 组合方法\r
│   │       │   └── index.ts               # 插件系统导出\r
│   │       ├── custom-plugins/             # 15+ 自定义预览插件\r
│   │       │   ├── PdfPreviewPlugin.tsx\r
│   │       │   ├── ImagePreviewPlugin.tsx\r
│   │       │   ├── JsonPreviewPlugin.tsx\r
│   │       │   ├── CodePreviewPlugin.tsx\r
│   │       │   ├── MarkdownPreviewPlugin.tsx\r
│   │       │   ├── DocxPreviewPlugin.tsx\r
│   │       │   ├── XlsxPreviewPlugin.tsx\r
│   │       │   ├── VideoPreviewPlugin.tsx\r
│   │       │   ├── AudioPreviewPlugin.tsx\r
│   │       │   ├── ZipPreviewPlugin.tsx\r
│   │       │   └── ...\r
│   │       └── index.ts                   # 统一导出\r
│   ├── pages/\r
│   │   └── FilePreviewPlugin/\r
│   │       └── Example.tsx                # 演示页面\r
│   ├── App.tsx                            # 应用入口\r
│   └── main.tsx                           # React 入口\r
├── public/                                # 测试文件\r
│   ├── example.jpg\r
│   ├── sample-data.csv\r
│   ├── sample-config.json\r
│   ├── test.docx\r
│   ├── test.xlsx\r
│   ├── typescript.pdf\r
│   └── ...\r
├── dist/                                  # 构建产物\r
├── vite.config.ts                         # Vite 配置\r
├── tsconfig.json                          # TypeScript 配置\r
└── package.json                           # 项目配置\r
\`\`\`\r
\r
---\r
\r
## 🔧 API 文档\r
\r
### FilePreviewCore\r
\r
核心文件预览组件，提供基础的文件预览能力。\r
\r
#### Props\r
\r
\`\`\`typescript\r
interface FilePreviewCoreProps {\r
  // 文件信息（必需）\r
  file: FileInfo;\r
\r
  // 生命周期回调\r
  onBeforeLoad?: () => Promise<boolean> | boolean;\r
  onLoadStart?: () => void;\r
  onLoadSuccess?: () => void;\r
  onLoadError?: (error: Error) => void;\r
\r
  // 渲染增强\r
  children?: React.ReactNode;\r
\r
  // 样式\r
  containerStyle?: React.CSSProperties;\r
  containerClassName?: string;\r
  contentStyle?: React.CSSProperties;\r
  contentClassName?: string;\r
\r
  // 外部 refs（供插件使用）\r
  containerRefExternal?: React.RefObject<HTMLDivElement | null>;\r
  contentRefExternal?: React.RefObject<HTMLDivElement | null>;\r
}\r
\r
interface FileInfo {\r
  name: string; // 文件名\r
  url: string; // 文件 URL\r
  size?: number; // 文件大小（字节）\r
  type?: string; // MIME 类型\r
}\r
\`\`\`\r
\r
#### Ref 方法\r
\r
\`\`\`typescript\r
interface FilePreviewCoreRef {\r
  reload: () => void; // 重新加载文件\r
  reset: () => void; // 重置组件状态\r
  getState: () => PreviewStateInfo; // 获取当前状态\r
}\r
\`\`\`\r
\r
### withPlugins\r
\r
高阶组件，用于为 FilePreviewCore 添加插件功能。\r
\r
\`\`\`typescript\r
function withPlugins<T extends ComponentType<any>>(\r
  Component: T,\r
  plugins: Plugin[]\r
): ComponentType<ComponentProps<T>>;\r
\`\`\`\r
\r
#### 使用示例\r
\r
\`\`\`typescript\r
import {\r
  FilePreviewCore,\r
  withPlugins,\r
  createPdfPreviewPlugin,\r
} from "vane-file-preview";\r
\r
const EnhancedFilePreview = withPlugins(FilePreviewCore, [\r
  createPdfPreviewPlugin({\r
    enableTextSelection: true,\r
    scale: 1.0,\r
  }),\r
]);\r
\`\`\`\r
\r
### 插件配置\r
\r
#### PDF 预览插件\r
\r
\`\`\`typescript\r
createPdfPreviewPlugin({\r
  enableTextSelection?: boolean;  // 启用文本选择，默认 true\r
  scale?: number;                 // 缩放比例，默认 1.0\r
  enableNavigation?: boolean;     // 启用页面导航，默认 true\r
  enableSearch?: boolean;         // 启用搜索功能，默认 true\r
})\r
\`\`\`\r
\r
#### JSON 预览插件\r
\r
\`\`\`typescript\r
createJsonPreviewPlugin({\r
  theme?: "light" | "dark" | "auto";  // 主题，默认 "auto"\r
  enableSearch?: boolean;             // 启用搜索，默认 true\r
  collapsed?: boolean;                // 默认折叠，默认 false\r
  displayDataTypes?: boolean;         // 显示数据类型，默认 true\r
})\r
\`\`\`\r
\r
#### 代码预览插件\r
\r
\`\`\`typescript\r
createCodePreviewPlugin({\r
  theme?: string;                     // 代码主题，默认 "github"\r
  showLineNumbers?: boolean;          // 显示行号，默认 true\r
  enableCodeFolding?: boolean;        // 启用代码折叠，默认 true\r
  wrapLongLines?: boolean;           // 长行换行，默认 false\r
})\r
\`\`\`\r
\r
#### 图片预览插件\r
\r
\`\`\`typescript\r
createImagePreviewPlugin({\r
  enableZoom?: boolean;              // 启用缩放，默认 true\r
  enableRotation?: boolean;          // 启用旋转，默认 true\r
  enableFullscreen?: boolean;        // 启用全屏，默认 true\r
  maxZoom?: number;                  // 最大缩放比例，默认 3\r
})\r
\`\`\`\r
\r
---\r
\r
## 🎯 使用场景\r
\r
### 1. 文档管理系统\r
\r
\`\`\`tsx\r
// 企业文档管理系统\r
const DocumentViewer = withPlugins(FilePreviewCore, [\r
  createPdfPreviewPlugin({ enableTextSelection: true }),\r
  createDocxPreviewPlugin({ preserveFormatting: true }),\r
  createXlsxPreviewPlugin({ enableFiltering: true }),\r
  createDownloadPlugin({ showDownloadButton: true }),\r
]);\r
\`\`\`\r
\r
### 2. 代码审查平台\r
\r
\`\`\`tsx\r
// 代码审查工具\r
const CodeReviewer = withPlugins(FilePreviewCore, [\r
  createCodePreviewPlugin({\r
    theme: "vs-dark",\r
    showLineNumbers: true,\r
    enableCodeFolding: true,\r
  }),\r
  createJsonPreviewPlugin({ theme: "dark" }),\r
  createMarkdownPreviewPlugin({ enableMath: true }),\r
]);\r
\`\`\`\r
\r
### 3. 媒体资源管理\r
\r
\`\`\`tsx\r
// 媒体文件管理器\r
const MediaViewer = withPlugins(FilePreviewCore, [\r
  createImagePreviewPlugin({\r
    enableZoom: true,\r
    enableRotation: true,\r
  }),\r
  createVideoPreviewPlugin({\r
    controls: true,\r
    preload: "metadata",\r
  }),\r
  createAudioPreviewPlugin({\r
    showWaveform: true,\r
  }),\r
]);\r
\`\`\`\r
\r
### 4. 数据分析工具\r
\r
\`\`\`tsx\r
// 数据文件预览器\r
const DataViewer = withPlugins(FilePreviewCore, [\r
  createCsvPreviewPlugin({\r
    enableSorting: true,\r
    enableFiltering: true,\r
    pageSize: 100,\r
  }),\r
  createJsonPreviewPlugin({\r
    enableSearch: true,\r
    displayDataTypes: true,\r
  }),\r
  createXlsxPreviewPlugin({\r
    enableSheetSwitching: true,\r
  }),\r
]);\r
\`\`\`\r
\r
---\r
\r
## 🔌 自定义插件开发\r
\r
### 插件接口\r
\r
\`\`\`typescript\r
interface Plugin {\r
  name: string;\r
  version: string;\r
  canHandle: (file: FileInfo) => boolean;\r
  render: (props: PluginRenderProps) => React.ReactNode;\r
  onMount?: (context: PluginContext) => void;\r
  onUnmount?: (context: PluginContext) => void;\r
}\r
\`\`\`\r
\r
### 创建自定义插件\r
\r
\`\`\`typescript\r
import { Plugin, FileInfo } from "vane-file-preview";\r
\r
export function createCustomPreviewPlugin(options = {}) {\r
  return {\r
    name: "CustomPreviewPlugin",\r
    version: "1.0.0",\r
\r
    canHandle: (file: FileInfo) => {\r
      // 判断是否能处理该文件类型\r
      return file.type === "application/custom";\r
    },\r
\r
    render: ({\r
      file,\r
      containerRef,\r
      onLoadStart,\r
      onLoadSuccess,\r
      onLoadError,\r
    }) => {\r
      // 渲染预览内容\r
      return (\r
        <div ref={containerRef}>\r
          <h3>自定义预览：{file.name}</h3>\r
          {/* 自定义预览逻辑 */}\r
        </div>\r
      );\r
    },\r
\r
    onMount: (context) => {\r
      console.log("插件已挂载", context);\r
    },\r
\r
    onUnmount: (context) => {\r
      console.log("插件已卸载", context);\r
    },\r
  } as Plugin;\r
}\r
\`\`\`\r
\r
### 使用自定义插件\r
\r
\`\`\`typescript\r
import { FilePreviewCore, withPlugins } from "vane-file-preview";\r
import { createCustomPreviewPlugin } from "./CustomPreviewPlugin";\r
\r
const CustomFilePreview = withPlugins(FilePreviewCore, [\r
  createCustomPreviewPlugin({\r
    // 插件配置选项\r
  }),\r
]);\r
\`\`\`\r
\r
---\r
\r
## 🌟 高级特性\r
\r
### 主题系统\r
\r
支持亮色、暗色和自动主题切换：\r
\r
\`\`\`tsx\r
// 全局主题配置\r
const ThemedFilePreview = withPlugins(FilePreviewCore, [\r
  createJsonPreviewPlugin({ theme: "auto" }),\r
  createCodePreviewPlugin({ theme: "vs-dark" }),\r
]);\r
\r
// 运行时主题切换\r
const [theme, setTheme] = useState("auto");\r
\r
<ThemedFilePreview file={fileInfo} theme={theme} />;\r
\`\`\`\r
\r
### 性能优化\r
\r
#### 懒加载\r
\r
\`\`\`tsx\r
// 大文件懒加载\r
const LazyFilePreview = withPlugins(FilePreviewCore, [\r
  createPdfPreviewPlugin({\r
    lazyLoading: true,\r
    pageBufferSize: 3,\r
  }),\r
]);\r
\`\`\`\r
\r
#### 虚拟滚动\r
\r
\`\`\`tsx\r
// 大数据集虚拟滚动\r
const VirtualizedPreview = withPlugins(FilePreviewCore, [\r
  createCsvPreviewPlugin({\r
    enableVirtualization: true,\r
    rowHeight: 40,\r
    overscan: 10,\r
  }),\r
]);\r
\`\`\`\r
\r
### 错误处理\r
\r
\`\`\`tsx\r
const RobustFilePreview = withPlugins(FilePreviewCore, [\r
  createErrorBoundaryPlugin({\r
    fallback: (error) => <div>预览失败：{error.message}</div>,\r
  }),\r
  // 其他插件...\r
]);\r
\`\`\`\r
\r
---\r
\r
## 🤝 贡献指南\r
\r
我们欢迎社区贡献！请遵循以下步骤：\r
\r
### 开发环境设置\r
\r
\`\`\`bash\r
# 1. Fork 并克隆仓库\r
git clone https://github.com/your-username/vane-file-preview.git\r
\r
# 2. 安装依赖\r
cd vane-file-preview\r
npm install\r
\r
# 3. 启动开发服务器\r
npm run dev\r
\r
# 4. 运行测试\r
npm test\r
\r
# 5. 构建项目\r
npm run build\r
\`\`\`\r
\r
### 提交规范\r
\r
我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：\r
\r
\`\`\`bash\r
# 功能添加\r
git commit -m "feat: 添加 PowerPoint 预览插件"\r
\r
# 问题修复\r
git commit -m "fix: 修复 PDF 缩放问题"\r
\r
# 文档更新\r
git commit -m "docs: 更新 API 文档"\r
\r
# 性能优化\r
git commit -m "perf: 优化大文件加载性能"\r
\`\`\`\r
\r
### 插件开发指南\r
\r
1. 在 \`src/components/FilePreviewPlugin/custom-plugins/\` 目录下创建新插件\r
2. 实现 \`Plugin\` 接口\r
3. 添加相应的类型定义\r
4. 编写单元测试\r
5. 更新文档和示例\r
\r
---\r
\r
## 📄 许可证\r
\r
本项目采用 [MIT 许可证](./LICENSE)。\r
\r
---\r
\r
## 🙏 致谢\r
\r
感谢以下开源项目的支持：\r
\r
- [React](https://reactjs.org/) - UI 框架\r
- [TypeScript](https://www.typescriptlang.org/) - 类型安全\r
- [Vite](https://vitejs.dev/) - 构建工具\r
- [PDF.js](https://mozilla.github.io/pdf.js/) - PDF 渲染\r
- [Highlight.js](https://highlightjs.org/) - 代码高亮\r
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown 渲染\r
\r
---\r
\r
## 📞 联系我们\r
\r
- **GitHub Issues**: [提交问题](https://github.com/frankvane/vane-file-preview/issues)\r
- **GitHub Discussions**: [参与讨论](https://github.com/frankvane/vane-file-preview/discussions)\r
- **Email**: chinavane_2008@163.com\r
\r
---\r
\r
<div align="center">\r
\r
**如果这个项目对您有帮助，请给我们一个 ⭐️**\r
\r
[⬆️ 回到顶部](#-vane-file-preview)\r
`;function v(){return e.jsxs("div",{className:"page",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{className:"page-title",children:"📖 README 文档"}),e.jsx("p",{className:"page-desc",children:"项目完整文档"})]}),e.jsx("div",{className:"page-card",style:{fontSize:"15px",lineHeight:"1.8",maxWidth:"100%"},children:e.jsx(l,{remarkPlugins:[a],components:{code({className:r,children:n,...i}){const t=/language-(\w+)/.exec(r||""),o=t?t[1]:"";return!!r&&o?e.jsx(s,{style:u,language:o,PreTag:"div",customStyle:{borderRadius:"4px",fontSize:"14px",lineHeight:"1.5",margin:"16px 0"},children:String(n).replace(/\n$/,"")}):e.jsx("code",{className:r,style:{background:"#f4f4f4",padding:"2px 6px",borderRadius:"3px",fontFamily:"monospace",fontSize:"0.9em"},children:n})},table({children:r,...n}){return e.jsx("div",{style:{overflowX:"auto",margin:"16px 0"},children:e.jsx("table",{style:{borderCollapse:"collapse",width:"100%",border:"1px solid #ddd"},...n,children:r})})},th({children:r,...n}){return e.jsx("th",{style:{border:"1px solid #ddd",padding:"8px",backgroundColor:"#f2f2f2",textAlign:"left"},...n,children:r})},td({children:r,...n}){return e.jsx("td",{style:{border:"1px solid #ddd",padding:"8px"},...n,children:r})},h1({children:r,...n}){return e.jsx("h1",{style:{marginTop:"24px",marginBottom:"12px",fontSize:"2em",fontWeight:"bold"},...n,children:r})},h2({children:r,...n}){return e.jsx("h2",{style:{marginTop:"20px",marginBottom:"12px",fontSize:"1.5em",fontWeight:"bold"},...n,children:r})},h3({children:r,...n}){return e.jsx("h3",{style:{marginTop:"20px",marginBottom:"12px",fontSize:"1.3em",fontWeight:"bold"},...n,children:r})},h4({children:r,...n}){return e.jsx("h4",{style:{marginTop:"20px",marginBottom:"12px",fontSize:"1.1em",fontWeight:"bold"},...n,children:r})},p({children:r,...n}){return e.jsx("p",{style:{marginBottom:"12px",lineHeight:"1.6"},...n,children:r})},a({children:r,href:n,...i}){return e.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{color:"#0066cc",textDecoration:"none"},...i,children:r})},ul({children:r,...n}){return e.jsx("ul",{style:{marginLeft:"20px",marginBottom:"12px"},...n,children:r})},ol({children:r,...n}){return e.jsx("ol",{style:{marginLeft:"20px",marginBottom:"12px"},...n,children:r})},hr({...r}){return e.jsx("hr",{style:{margin:"24px 0",border:"none",borderTop:"1px solid #ddd"},...r})},blockquote({children:r,...n}){return e.jsx("blockquote",{style:{borderLeft:"4px solid #ddd",paddingLeft:"16px",margin:"16px 0",color:"#666",fontStyle:"italic"},...n,children:r})}},children:c})})]})}export{v as default};
