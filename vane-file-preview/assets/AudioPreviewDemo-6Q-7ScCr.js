const n=`/**\r
 * 音频预览示例\r
 * 展示音频文件的预览功能\r
 */\r
\r
import React, { useState } from "react";\r
import DemoPage from "./_layout/DemoPage";\r
import {\r
  FilePreviewCore,\r
  withPlugins,\r
  createAudioPreviewPlugin,\r
  type FileInfo,\r
} from "../../components/FilePreviewPlugin";\r
\r
// 示例音频文件列表\r
const audioFiles: FileInfo[] = [\r
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
];\r
\r
export default function AudioPreviewDemo() {\r
  const [selectedFile, setSelectedFile] = useState<FileInfo>(audioFiles[0]);\r
\r
  // 创建音频预览组件\r
  const Preview = withPlugins(FilePreviewCore, [\r
    createAudioPreviewPlugin({\r
      // 可以配置音频预览的选项\r
      controls: true,\r
      loop: false,\r
      preload: "metadata",\r
    }),\r
  ]);\r
\r
  return (\r
    <DemoPage\r
      title="音频预览"\r
      description="展示音频文件的预览功能，支持 MP3、WAV、OGG 等格式，提供完整的播放控制"\r
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
        {/* 音频文件列表 */}\r
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
          <h3 style={{ margin: "0 0 16px", fontSize: 16 }}>音频文件</h3>\r
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>\r
            {audioFiles.map((file, index) => (\r
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
                  {file.extension} • {(file.size / 1024 / 1024).toFixed(1)} MB\r
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
            display: "flex",\r
            alignItems: "center",\r
            justifyContent: "center",\r
          }}\r
        >\r
          <Preview file={selectedFile} />\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{n as default};
