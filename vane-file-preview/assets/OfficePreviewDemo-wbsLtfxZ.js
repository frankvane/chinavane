const e=`/**\r
 * Office文档预览示例\r
 * 展示Office文档的预览功能，包括DOCX、XLSX、PPTX等\r
 */\r
\r
import React, { useState, useMemo } from "react";\r
import DemoPage from "./_layout/DemoPage";\r
import {\r
  FilePreviewCore,\r
  withPlugins,\r
  createMammothDocxPlugin,\r
  createDocxPreviewPlugin,\r
  createXlsxPreviewPlugin,\r
  createPptxPreviewPlugin,\r
  createOfficePreviewPlugin,\r
  type FileInfo,\r
} from "../../components/FilePreviewPlugin";\r
\r
// 示例Office文件列表\r
const officeFiles: FileInfo[] = [\r
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
];\r
\r
export default function OfficePreviewDemo() {\r
  const [selectedFile, setSelectedFile] = useState<FileInfo>(officeFiles[0]);\r
  const [preferOnlineDocx, setPreferOnlineDocx] = useState<boolean>(false);\r
\r
  // 根据当前选择的文件决定插件配置\r
  const Preview = useMemo(() => {\r
    const isOnlineDocx = selectedFile.previewMode === "online";\r
    const isOfflineDocx = selectedFile.previewMode === "offline";\r
    const docxMode = selectedFile.docxMode || "mammoth"; // 默认使用 mammoth\r
\r
    const plugins = [\r
      // Offline Office plugins - 根据文件类型启用/禁用\r
      createMammothDocxPlugin({\r
        enabled: isOfflineDocx && docxMode === "mammoth",\r
      }),\r
      createDocxPreviewPlugin({\r
        enabled: isOfflineDocx && docxMode === "docx-preview",\r
      }),\r
      createXlsxPreviewPlugin(),\r
      createPptxPreviewPlugin(),\r
      // Online Office viewer - 根据文件类型启用/禁用\r
      createOfficePreviewPlugin({\r
        preferDocxOnline: isOnlineDocx || (!isOfflineDocx && preferOnlineDocx),\r
        viewer: "google", // 直接使用 Google Docs Viewer，避免 Microsoft 连接问题\r
      }),\r
    ];\r
    return withPlugins(FilePreviewCore, plugins);\r
  }, [preferOnlineDocx, selectedFile]);\r
\r
  return (\r
    <DemoPage\r
      title="Office文档预览"\r
      description="展示Office文档的预览功能，支持DOCX、XLSX、PPTX等格式，提供在线和离线两种预览模式"\r
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
        {/* Office文件列表 */}\r
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
          <h3 style={{ margin: "0 0 16px", fontSize: 16 }}>Office文件</h3>\r
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>\r
            {officeFiles.map((file, index) => (\r
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
                {file.previewMode && (\r
                  <div\r
                    style={{\r
                      fontSize: 10,\r
                      marginTop: 2,\r
                      opacity: 0.7,\r
                      fontStyle: "italic",\r
                    }}\r
                  >\r
                    {file.previewMode === "online"\r
                      ? "在线预览"\r
                      : file.docxMode === "mammoth"\r
                      ? "离线预览 (Mammoth)"\r
                      : "离线预览 (docx-preview)"}\r
                  </div>\r
                )}\r
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
