const n=`/**\r
 * PDF预览示例\r
 * 展示PDF文件的预览功能\r
 */\r
\r
import React, { useState } from "react";\r
import DemoPage from "./_layout/DemoPage";\r
import {\r
  FilePreviewCore,\r
  withPlugins,\r
  createPdfPreviewPlugin,\r
  type FileInfo,\r
} from "../../components/FilePreviewPlugin";\r
\r
// 示例PDF文件列表\r
const pdfFiles: FileInfo[] = [\r
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
    url: "./danmu.pdf", // 使用现有PDF作为示例\r
  },\r
  {\r
    name: "STAR法则",\r
    size: 101 * 1024,\r
    type: "application/pdf",\r
    extension: ".pdf",\r
    url: "./star.pdf", // 使用现有PDF作为示例\r
  },\r
];\r
\r
export default function PdfPreviewDemo() {\r
  const [selectedFile, setSelectedFile] = useState<FileInfo>(pdfFiles[0]);\r
\r
  // 创建PDF预览组件\r
  const Preview = withPlugins(FilePreviewCore, [\r
    createPdfPreviewPlugin({\r
      // 可以配置PDF预览的选项\r
      useIframe: true,\r
      enableToolbar: true,\r
    }),\r
  ]);\r
\r
  return (\r
    <DemoPage\r
      title="PDF预览"\r
      description="展示PDF文件的预览功能，支持工具栏、下载、打印、全屏等功能"\r
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
        {/* PDF文件列表 */}\r
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
          <h3 style={{ margin: "0 0 16px", fontSize: 16 }}>PDF文件</h3>\r
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>\r
            {pdfFiles.map((file, index) => (\r
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
          <Preview file={selectedFile} />\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{n as default};
