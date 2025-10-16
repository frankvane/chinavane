const e=`/**\r
 * FilePreviewPlugin 综合示例页\r
 * 展示所有文件预览功能，整合所有单独示例的内容\r
 */\r
\r
import React, { useState, useMemo } from "react";\r
import DemoPage from "./_layout/DemoPage";\r
import {\r
  FilePreviewCore,\r
  withPlugins,\r
  createImagePreviewPlugin,\r
  createPdfPreviewPlugin,\r
  createVideoPreviewPlugin,\r
  createAudioPreviewPlugin,\r
  createCodePreviewPlugin,\r
  createMarkdownPreviewPlugin,\r
  createMammothDocxPlugin,\r
  createDocxPreviewPlugin,\r
  createXlsxPreviewPlugin,\r
  createPptxPreviewPlugin,\r
  createSimpleReactReaderEpubPlugin,\r
  createCsvPreviewPlugin,\r
  createJsonPreviewPlugin,\r
  createOfficePreviewPlugin,\r
  createZipPreviewPlugin,\r
  type FileInfo,\r
} from "vane-file-preview";\r
\r
// 示例文件列表 - 从各个单独示例文件中提取的准确 FileInfo 数据\r
const exampleFiles: FileInfo[] = [\r
  // 图片预览文件 (来自 ImagePreviewDemo.tsx)\r
  {\r
    name: "sample.svg",\r
    size: 2 * 1024,\r
    type: "image/svg+xml",\r
    extension: ".svg",\r
    url: "./sample.svg",\r
  },\r
  {\r
    name: "sample.jpg",\r
    size: 44 * 1024,\r
    type: "image/jpeg",\r
    extension: ".jpg",\r
    url: "./sample.jpg",\r
  },\r
  {\r
    name: "sample.png",\r
    size: 132 * 1024,\r
    type: "image/png",\r
    extension: ".png",\r
    url: "./sample.png",\r
  },\r
  {\r
    name: "sample.gif",\r
    size: 102 * 1024,\r
    type: "image/gif",\r
    extension: ".gif",\r
    url: "./sample.gif",\r
  },\r
\r
  // PDF预览文件 (来自 PdfPreviewDemo.tsx)\r
  {\r
    name: "白屏问题的处理",\r
    size: 107 * 1024,\r
    type: "application/pdf",\r
    extension: ".pdf",\r
    url: "./white-screen.pdf",\r
  },\r
  {\r
    name: "弹幕操作",\r
    size: 241 * 1024,\r
    type: "application/pdf",\r
    extension: ".pdf",\r
    url: "./danmu.pdf",\r
  },\r
  {\r
    name: "STAR法则",\r
    size: 101 * 1024,\r
    type: "application/pdf",\r
    extension: ".pdf",\r
    url: "./star.pdf",\r
  },\r
\r
  // 视频预览文件 (来自 VideoPreviewDemo.tsx)\r
  {\r
    name: "mp4 sample",\r
    size: 2440 * 1024,\r
    type: "video/mp4",\r
    extension: ".mp4",\r
    url: "./sample.mp4",\r
  },\r
  {\r
    name: "webm sample",\r
    size: 2115 * 1024,\r
    type: "video/webm",\r
    extension: ".webm",\r
    url: "./sample.webm",\r
  },\r
  {\r
    name: "flv sample",\r
    size: 1031 * 1024,\r
    type: "video/flv",\r
    extension: ".flv",\r
    url: "./sample.flv",\r
  },\r
\r
  // 音频预览文件 (来自 AudioPreviewDemo.tsx)\r
  {\r
    name: "mp3 sample",\r
    size: 2995 * 1024,\r
    type: "audio/mpeg",\r
    extension: ".mp3",\r
    url: "./sample.mp3",\r
  },\r
  {\r
    name: "wav sample",\r
    size: 1024 * 1024,\r
    type: "audio/wav",\r
    extension: ".wav",\r
    url: "./sample.wav",\r
  },\r
  {\r
    name: "ogg sample",\r
    size: 1695 * 1024,\r
    type: "audio/ogg",\r
    extension: ".ogg",\r
    url: "./sample.ogg",\r
  },\r
\r
  // 代码预览文件 (来自 CodePreviewDemo.tsx)\r
  {\r
    name: "sample.tsx",\r
    size: 6 * 1024,\r
    type: "text/typescript",\r
    extension: ".tsx",\r
    url: "./sample.tsx",\r
  },\r
  {\r
    name: "sample.js",\r
    size: 2 * 1024,\r
    type: "text/javascript",\r
    extension: ".js",\r
    url: "./sample.js",\r
  },\r
  {\r
    name: "sample.css",\r
    size: 2 * 1024,\r
    type: "text/css",\r
    extension: ".css",\r
    url: "./sample.css",\r
  },\r
  {\r
    name: "sample.ts",\r
    size: 2 * 1024,\r
    type: "text/typescript",\r
    extension: ".ts",\r
    url: "./sample.ts",\r
  },\r
  {\r
    name: "sample.html",\r
    size: 7 * 1024,\r
    type: "text/html",\r
    extension: ".html",\r
    url: "./sample.html",\r
  },\r
\r
  // Markdown预览文件 (来自 MarkdownPreviewDemo.tsx)\r
  {\r
    name: "sample.md",\r
    size: 188 * 1024,\r
    type: "text/markdown",\r
    extension: ".md",\r
    url: "./sample.md",\r
  },\r
\r
  // Office文档预览文件 (来自 OfficePreviewDemo.tsx)\r
  {\r
    name: "sample-online.docx",\r
    size: 100 * 1024,\r
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",\r
    extension: ".docx",\r
    url: "https://chinavane.netlify.app/test.docx",\r
    previewMode: "online", // 标记使用在线预览\r
  },\r
  {\r
    name: "sample-mammoth.docx",\r
    size: 21 * 1024,\r
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",\r
    extension: ".docx",\r
    url: "./sample.docx",\r
    previewMode: "offline", // 标记使用离线预览\r
    docxMode: "mammoth", // 指定使用 mammoth 模式\r
  },\r
  {\r
    name: "sample-docx-preview.docx",\r
    size: 21 * 1024,\r
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",\r
    extension: ".docx",\r
    url: "./sample.docx",\r
    previewMode: "offline", // 标记使用离线预览\r
    docxMode: "docx-preview", // 指定使用 docx-preview 模式\r
  },\r
  {\r
    name: "sample.xlsx",\r
    size: 13 * 1024,\r
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",\r
    extension: ".xlsx",\r
    url: "./sample.xlsx",\r
  },\r
  {\r
    name: "sample.pptx",\r
    size: 2042 * 1024,\r
    type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",\r
    extension: ".pptx",\r
    url: "./sample.pptx",\r
  },\r
\r
  // CSV预览文件 (来自 CsvPreviewDemo.tsx)\r
  {\r
    name: "sample-data.csv",\r
    size: 2048,\r
    type: "text/csv",\r
    extension: ".csv",\r
    url: "./sample-data.csv",\r
  },\r
  {\r
    name: "sales-data.tsv",\r
    size: 1536,\r
    type: "text/tab-separated-values",\r
    extension: ".tsv",\r
    url: "./sales-data.tsv",\r
  },\r
  {\r
    name: "sample-data-semicolon.csv",\r
    size: 1024,\r
    type: "text/csv",\r
    extension: ".csv",\r
    url: "./sample-data-semicolon.csv",\r
  },\r
  {\r
    name: "sample-data-pipe.csv",\r
    size: 896,\r
    type: "text/csv",\r
    extension: ".csv",\r
    url: "./sample-data-pipe.csv",\r
  },\r
  {\r
    name: "mixed-data.csv",\r
    size: 512,\r
    type: "text/csv",\r
    extension: ".csv",\r
    url: "./mixed-data.csv",\r
  },\r
\r
  // JSON预览文件 (来自 JsonPreviewDemo.tsx)\r
  {\r
    name: "sample.json",\r
    size: 2 * 1024,\r
    type: "application/json",\r
    extension: ".json",\r
    url: "./sample.json",\r
  },\r
  {\r
    name: "package.json",\r
    size: 1 * 1024,\r
    type: "application/json",\r
    extension: ".json",\r
    url: "./package.json",\r
  },\r
\r
  // ZIP预览文件 (来自 ZipPreviewDemo.tsx)\r
  {\r
    name: "sample.zip",\r
    size: 96 * 1024,\r
    type: "application/zip",\r
    extension: ".zip",\r
    url: "./sample.zip",\r
  },\r
\r
  // EPUB预览文件 (来自 EpubPreviewDemo.tsx)\r
  {\r
    name: "sample.epub",\r
    size: 185 * 1024,\r
    type: "application/epub+zip",\r
    extension: ".epub",\r
    url: "./sample.epub",\r
  },\r
];\r
\r
export default function FilePreviewExample() {\r
  const [selectedFile, setSelectedFile] = useState<FileInfo>(exampleFiles[0]);\r
  // Toggle: true -> use online Office viewer for DOCX; false -> use offline mammoth\r
  // 默认使用离线预览，避免本地文件无法被在线查看器访问的问题\r
  const [preferOnlineDocx, setPreferOnlineDocx] = useState<boolean>(false);\r
\r
  const Preview = useMemo(() => {\r
    // 根据当前选择的文件决定插件配置\r
    const isOnlineDocx = selectedFile.previewMode === "online";\r
    const isOfflineDocx = selectedFile.previewMode === "offline";\r
    const docxMode = selectedFile.docxMode || "mammoth"; // 默认使用 mammoth\r
\r
    const plugins = [\r
      createImagePreviewPlugin(),\r
      createPdfPreviewPlugin(),\r
      createVideoPreviewPlugin({ controls: true }),\r
      createAudioPreviewPlugin({ controls: true }),\r
      createCodePreviewPlugin({\r
        showLineNumbers: true,\r
      }),\r
      createMarkdownPreviewPlugin(),\r
      // Offline Office plugins - 根据文件类型启用/禁用\r
      createMammothDocxPlugin({\r
        enabled: isOfflineDocx && docxMode === "mammoth",\r
      }),\r
      createDocxPreviewPlugin({\r
        enabled: isOfflineDocx && docxMode === "docx-preview",\r
      }),\r
      createXlsxPreviewPlugin(),\r
      createPptxPreviewPlugin(),\r
      createSimpleReactReaderEpubPlugin(),\r
      createCsvPreviewPlugin({\r
        pageSize: 20,\r
        maxPreviewRows: 500,\r
        autoDetectDelimiter: true,\r
        autoDetectEncoding: true,\r
      }),\r
      createJsonPreviewPlugin({\r
        maxFileSize: 10 * 1024 * 1024, // 10MB\r
        enableSearch: true,\r
        enableCopy: true,\r
        theme: "light",\r
        collapsed: 2,\r
      }),\r
      // Online Office viewer - 根据文件类型启用/禁用\r
      createOfficePreviewPlugin({\r
        preferDocxOnline: isOnlineDocx || (!isOfflineDocx && preferOnlineDocx),\r
        viewer: "google", // 直接使用 Google Docs Viewer，避免 Microsoft 连接问题\r
      }),\r
      createZipPreviewPlugin(),\r
    ];\r
    return withPlugins(FilePreviewCore, plugins);\r
  }, [preferOnlineDocx, selectedFile]);\r
\r
  return (\r
    <DemoPage\r
      title="综合示例"\r
      description="展示所有文件预览功能，包括图片、PDF、视频、音频、代码、Markdown、Office文档、CSV、JSON、ZIP、EPUB等文件类型的预览"\r
    >\r
      <div\r
        style={{\r
          display: "flex",\r
          height: "600px",\r
          gap: 16,\r
          padding: 16,\r
          boxSizing: "border-box",\r
        }}\r
      >\r
        {/* 文件列表 */}\r
        <div\r
          style={{\r
            width: 240,\r
            background: "#f5f5f5",\r
            borderRadius: 8,\r
            padding: 16,\r
            overflow: "auto",\r
            flexShrink: 0,\r
          }}\r
        >\r
          <h3 style={{ margin: "0 0 16px", fontSize: 16 }}>Files</h3>\r
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>\r
            {exampleFiles.map((file, index) => (\r
              <button\r
                key={index}\r
                onClick={() => setSelectedFile(file)}\r
                style={{\r
                  padding: "12px 16px",\r
                  background:\r
                    selectedFile.name === file.name ? "#2196f3" : "#fff",\r
                  color: selectedFile.name === file.name ? "#fff" : "#333",\r
                  border: "1px solid #ddd",\r
                  borderRadius: 6,\r
                  textAlign: "left",\r
                  cursor: "pointer",\r
                  transition: "all 0.2s",\r
                  fontSize: 14,\r
                }}\r
              >\r
                <div style={{ fontWeight: 500 }}>{file.name}</div>\r
                <div\r
                  style={{\r
                    fontSize: 12,\r
                    marginTop: 4,\r
                    opacity: 0.8,\r
                  }}\r
                >\r
                  {file.extension} • {(file.size / 1024).toFixed(0)} KB\r
                </div>\r
              </button>\r
            ))}\r
          </div>\r
        </div>\r
\r
        {/* 预览区域 */}\r
        <div\r
          style={{\r
            flex: 1,\r
            background: "#fff",\r
            borderRadius: 8,\r
            overflow: "hidden",\r
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",\r
          }}\r
        >\r
          {/* 简易切换控件 - 只在没有明确指定预览模式的 DOCX 文件时显示 */}\r
          {selectedFile.extension.toLowerCase() === ".docx" &&\r
            !selectedFile.previewMode && (\r
              <div style={{ padding: 8, borderBottom: "1px solid #eee" }}>\r
                <label style={{ fontSize: 12, color: "#555" }}>\r
                  <input\r
                    type="checkbox"\r
                    checked={preferOnlineDocx}\r
                    onChange={(e) => setPreferOnlineDocx(e.target.checked)}\r
                    style={{ marginRight: 8 }}\r
                  />\r
                  Prefer online viewer for DOCX (Office Online)\r
                </label>\r
              </div>\r
            )}\r
\r
          {/* 显示当前预览模式信息 */}\r
          {selectedFile.extension.toLowerCase() === ".docx" &&\r
            selectedFile.previewMode && (\r
              <div\r
                style={{\r
                  padding: 8,\r
                  borderBottom: "1px solid #eee",\r
                  background:\r
                    selectedFile.previewMode === "online"\r
                      ? "#e3f2fd"\r
                      : "#f3e5f5",\r
                  fontSize: 12,\r
                  color: "#555",\r
                }}\r
              >\r
                📄{" "}\r
                {selectedFile.previewMode === "online"\r
                  ? "在线预览 (Office Online)"\r
                  : \`离线预览 (\${\r
                      selectedFile.docxMode === "mammoth"\r
                        ? "Mammoth"\r
                        : "docx-preview"\r
                    })\`}\r
              </div>\r
            )}\r
          <Preview file={selectedFile} />\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{e as default};
