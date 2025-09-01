var k=Object.defineProperty;var A=(a,n,r)=>n in a?k(a,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[n]=r;var x=(a,n,r)=>A(a,typeof n!="symbol"?n+"":n,r);import{r as d,j as e}from"./index-nevtk0dH.js";import{C as D}from"./ComponentTemplate-CQT_cNgc.js";function U(a,n){switch(n.type){case"ADD_MESSAGE":return{...a,messages:[...a.messages,n.payload]};case"UPDATE_MESSAGE":return{...a,messages:a.messages.map(r=>r.id===n.payload.id?{...r,...n.payload.updates}:r)};case"SET_CONNECTION_STATUS":return{...a,connectionStatus:n.payload};case"SET_TYPING":return{...a,isTyping:n.payload};case"SET_ONLINE_USERS":return{...a,onlineUsers:n.payload};case"CLEAR_MESSAGES":return{...a,messages:[]};default:return a}}const _={messages:[],connectionStatus:"disconnected",isTyping:!1,onlineUsers:[]};class I{constructor(n){x(this,"listeners",{});x(this,"connectionStatus","disconnected");x(this,"reconnectTimer",null);x(this,"messageTimer",null);x(this,"botResponses",["你好！我是智能助手","这是一个很有趣的话题","我理解你的意思","让我想想...","这个功能很实用","感谢你的反馈","还有其他问题吗？","我会继续学习改进"]);this.url=n}connect(){this.connectionStatus="connecting",this.emit("statusChange","connecting"),setTimeout(()=>{this.connectionStatus="connected",this.emit("statusChange","connected"),this.emit("open"),setTimeout(()=>{this.emit("message",{type:"message",payload:{id:Date.now().toString(),content:"欢迎使用实时聊天系统！",sender:"system",timestamp:new Date,type:"system",status:"sent"}})},1e3)},1e3+Math.random()*1e3)}disconnect(){this.connectionStatus="disconnected",this.emit("statusChange","disconnected"),this.emit("close"),this.stopAutoReply(),this.stopReconnect()}send(n){if(this.connectionStatus!=="connected")throw new Error("WebSocket is not connected");const r=JSON.parse(n);setTimeout(()=>{Math.random()>.9?this.emit("error",new Error("Send failed")):(this.emit("messageSent",r),r.type==="sendMessage"&&this.scheduleAutoReply())},200+Math.random()*300)}on(n,r){this.listeners[n]||(this.listeners[n]=[]),this.listeners[n].push(r)}off(n,r){this.listeners[n]&&(this.listeners[n]=this.listeners[n].filter(o=>o!==r))}emit(n,r){this.listeners[n]&&this.listeners[n].forEach(o=>o(r))}scheduleAutoReply(){this.messageTimer&&clearTimeout(this.messageTimer),this.messageTimer=setTimeout(()=>{if(this.connectionStatus==="connected"){const n=this.botResponses[Math.floor(Math.random()*this.botResponses.length)];this.emit("message",{type:"message",payload:{id:Date.now().toString(),content:n,sender:"bot",timestamp:new Date,type:"text",status:"sent"}})}},1e3+Math.random()*2e3)}stopAutoReply(){this.messageTimer&&(clearTimeout(this.messageTimer),this.messageTimer=null)}startReconnect(){this.reconnectTimer=setTimeout(()=>{this.connectionStatus==="disconnected"&&this.connect()},3e3+Math.random()*2e3)}stopReconnect(){this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null)}}function S(a){const[n,r]=d.useReducer(U,_),o=d.useRef(null),u=d.useRef([]),h=d.useCallback(()=>{o.current&&o.current.disconnect();const s=new I(`ws://localhost:8080/chat?userId=${a}`);o.current=s,s.on("statusChange",i=>{r({type:"SET_CONNECTION_STATUS",payload:i})}),s.on("open",()=>{for(;u.current.length>0;){const i=u.current.shift();try{s.send(JSON.stringify(i))}catch(l){console.error("Failed to send queued message:",l)}}}),s.on("message",i=>{const{type:l,payload:b}=i;l==="message"&&r({type:"ADD_MESSAGE",payload:b})}),s.on("messageSent",i=>{i.type==="sendMessage"&&r({type:"UPDATE_MESSAGE",payload:{id:i.payload.id,updates:{status:"sent"}}})}),s.on("error",i=>{console.error("WebSocket error:",i),r({type:"SET_CONNECTION_STATUS",payload:"error"})}),s.on("close",()=>{r({type:"SET_CONNECTION_STATUS",payload:"disconnected"})}),s.connect()},[a]),g=d.useCallback(()=>{o.current&&(o.current.disconnect(),o.current=null)},[]),c=d.useCallback(s=>{const i={id:Date.now().toString(),content:s,sender:a,timestamp:new Date,type:"text",status:"sending"};r({type:"ADD_MESSAGE",payload:i});const l={type:"sendMessage",payload:i};if(o.current&&n.connectionStatus==="connected")try{o.current.send(JSON.stringify(l))}catch{r({type:"UPDATE_MESSAGE",payload:{id:i.id,updates:{status:"failed"}}})}else u.current.push(l),r({type:"UPDATE_MESSAGE",payload:{id:i.id,updates:{status:"failed"}}})},[a,n.connectionStatus]),m=d.useCallback(s=>{const i=n.messages.find(l=>l.id===s);if(i&&i.status==="failed"){r({type:"UPDATE_MESSAGE",payload:{id:s,updates:{status:"sending"}}});const l={type:"sendMessage",payload:{...i,status:"sending"}};if(o.current&&n.connectionStatus==="connected")try{o.current.send(JSON.stringify(l))}catch{r({type:"UPDATE_MESSAGE",payload:{id:s,updates:{status:"failed"}}})}}},[n.messages,n.connectionStatus]),p=d.useCallback(()=>{r({type:"CLEAR_MESSAGES"})},[]);return d.useEffect(()=>()=>{g()},[g]),{...n,connect:h,disconnect:g,sendMessage:c,retryMessage:m,clearMessages:p}}const f=[{id:"general",name:"通用",description:"通用聊天室"},{id:"tech",name:"技术",description:"技术讨论"},{id:"random",name:"随机",description:"随机话题"}],$=()=>{var v,N,w;const[a]=d.useState("user1"),[n,r]=d.useState("general"),[o,u]=d.useState({}),h=d.useRef({}),g={general:S(`${a}-general`),tech:S(`${a}-tech`),random:S(`${a}-random`)},c=g[n],m=o[n]||"";d.useEffect(()=>{const t=h.current[n];t&&t.scrollIntoView({behavior:"smooth"})},[c.messages,n]);const p=()=>{m.trim()&&(c.sendMessage(m.trim()),u(t=>({...t,[n]:""})))},s=t=>{t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),p())},i=t=>{u(y=>({...y,[n]:t}))},l=t=>{switch(t){case"connected":return"text-green-600";case"connecting":return"text-yellow-600";case"disconnected":return"text-red-600";case"error":return"text-red-600";default:return"text-gray-600"}},b=t=>{switch(t){case"connected":return"已连接";case"connecting":return"连接中...";case"disconnected":return"已断开";case"error":return"连接错误";default:return"未知状态"}},M=t=>t===n?0:g[t].messages.filter(C=>C.sender!==a&&C.timestamp>new Date(Date.now()-6e4)).length;return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"高级实时聊天（多房间）"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-4 h-96",children:[e.jsxs("div",{className:"lg:col-span-1 border border-gray-200 rounded-lg p-3",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:"房间列表"}),e.jsx("div",{className:"space-y-2",children:f.map(t=>{const y=M(t.id);return e.jsxs("button",{onClick:()=>r(t.id),className:`w-full text-left p-2 rounded-md transition-colors relative ${n===t.id?"bg-blue-100 border border-blue-300":"hover:bg-gray-100"}`,children:[e.jsx("div",{className:"font-medium text-sm",children:t.name}),e.jsx("div",{className:"text-xs text-gray-500",children:t.description}),y>0&&e.jsx("div",{className:"absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",children:y})]},t.id)})}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h5",{className:"font-medium text-gray-800 mb-2 text-sm",children:"在线用户"}),e.jsx("div",{className:"space-y-1",children:c.onlineUsers.map(t=>e.jsxs("div",{className:"flex items-center space-x-2 text-sm",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:t===a?"font-medium":"",children:t===a?`${t} (你)`:t})]},t))})]})]}),e.jsxs("div",{className:"lg:col-span-3 border border-gray-200 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"p-3 bg-gray-50 border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:(v=f.find(t=>t.id===n))==null?void 0:v.name}),e.jsxs("div",{className:"flex items-center space-x-2 text-sm",children:[e.jsx("span",{className:"text-gray-600",children:"状态:"}),e.jsx("span",{className:l(c.connectionStatus),children:b(c.connectionStatus)}),e.jsx("div",{className:`w-2 h-2 rounded-full ${c.connectionStatus==="connected"?"bg-green-500":c.connectionStatus==="connecting"?"bg-yellow-500 animate-pulse":"bg-red-500"}`})]})]}),e.jsx("button",{onClick:c.connectionStatus==="connected"?c.disconnect:c.connect,className:`px-3 py-1 rounded text-sm ${c.connectionStatus==="connected"?"bg-red-500 text-white hover:bg-red-600":"bg-blue-500 text-white hover:bg-blue-600"}`,children:c.connectionStatus==="connected"?"断开":"连接"})]})}),e.jsx("div",{className:"h-64 overflow-y-auto p-3 bg-gray-50",children:c.messages.length===0?e.jsxs("div",{className:"text-center text-gray-500 mt-16",children:["欢迎来到 ",(N=f.find(t=>t.id===n))==null?void 0:N.name," 房间！"]}):e.jsxs("div",{className:"space-y-2",children:[c.messages.map(t=>e.jsx("div",{className:`flex ${t.sender===a?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:`max-w-xs px-3 py-2 rounded-lg ${t.sender===a?"bg-blue-500 text-white":t.type==="system"?"bg-green-100 text-green-800 border border-green-200":"bg-white border border-gray-200"}`,children:[t.sender!==a&&t.type!=="system"&&e.jsx("div",{className:"text-xs text-gray-500 mb-1",children:t.sender}),e.jsx("div",{className:"text-sm",children:t.content}),e.jsx("div",{className:`text-xs mt-1 ${t.sender===a?"text-blue-100":t.type==="system"?"text-green-600":"text-gray-500"}`,children:t.timestamp.toLocaleTimeString()})]})},t.id)),e.jsx("div",{ref:t=>{h.current[n]=t}})]})}),e.jsx("div",{className:"p-3 bg-white border-t border-gray-200",children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",value:m,onChange:t=>i(t.target.value),onKeyPress:s,placeholder:`在 ${(w=f.find(t=>t.id===n))==null?void 0:w.name} 中发言...`,disabled:c.connectionStatus!=="connected",className:`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${c.connectionStatus!=="connected"?"bg-gray-100 cursor-not-allowed":""}`}),e.jsx("button",{onClick:p,disabled:!m.trim()||c.connectionStatus!=="connected",className:`px-4 py-2 rounded-md text-sm ${!m.trim()||c.connectionStatus!=="connected"?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"发送"})]})})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 border border-blue-200 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"高级功能演示："}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("p",{children:"• 多房间支持：每个房间独立的聊天环境"}),e.jsx("p",{children:"• 独立连接：每个房间维护自己的连接状态"}),e.jsx("p",{children:"• 在线用户：显示当前房间的在线用户列表"}),e.jsx("p",{children:"• 未读消息：非活跃房间显示未读消息数量"}),e.jsx("p",{children:"• 用户标识：区分自己和其他用户的消息"})]})]})]})})},W=`import { ConnectionStatus, Room } from "./types";
import React, { useEffect, useRef, useState } from "react";

import { useRealTimeChat } from "./useRealTimeChat";

// 房间列表
const rooms: Room[] = [
  { id: "general", name: "通用", description: "通用聊天室" },
  { id: "tech", name: "技术", description: "技术讨论" },
  { id: "random", name: "随机", description: "随机话题" },
];

// 高级实时聊天演示
const AdvancedRealTimeChatDemo: React.FC = () => {
  const [currentUser] = useState("user1");
  const [activeRoom, setActiveRoom] = useState("general");
  const [inputMessages, setInputMessages] = useState<Record<string, string>>(
    {}
  );
  const messagesEndRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // 为每个房间创建聊天实例
  const chats = {
    general: useRealTimeChat(\`\${currentUser}-general\`),
    tech: useRealTimeChat(\`\${currentUser}-tech\`),
    random: useRealTimeChat(\`\${currentUser}-random\`),
  };

  const currentChat = chats[activeRoom as keyof typeof chats];
  const currentInputMessage = inputMessages[activeRoom] || "";

  // 自动滚动到底部
  useEffect(() => {
    const ref = messagesEndRefs.current[activeRoom];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentChat.messages, activeRoom]);

  // 发送消息
  const handleSendMessage = () => {
    if (currentInputMessage.trim()) {
      currentChat.sendMessage(currentInputMessage.trim());
      setInputMessages((prev) => ({ ...prev, [activeRoom]: "" }));
    }
  };

  // 处理回车发送
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // 更新输入消息
  const handleInputChange = (value: string) => {
    setInputMessages((prev) => ({ ...prev, [activeRoom]: value }));
  };

  // 获取连接状态颜色
  const getStatusColor = (status: ConnectionStatus) => {
    switch (status) {
      case "connected":
        return "text-green-600";
      case "connecting":
        return "text-yellow-600";
      case "disconnected":
        return "text-red-600";
      case "error":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  // 获取连接状态文本
  const getStatusText = (status: ConnectionStatus) => {
    switch (status) {
      case "connected":
        return "已连接";
      case "connecting":
        return "连接中...";
      case "disconnected":
        return "已断开";
      case "error":
        return "连接错误";
      default:
        return "未知状态";
    }
  };

  // 获取未读消息数量
  const getUnreadCount = (roomId: string) => {
    if (roomId === activeRoom) return 0;
    const chat = chats[roomId as keyof typeof chats];
    return chat.messages.filter(
      (msg) =>
        msg.sender !== currentUser &&
        msg.timestamp > new Date(Date.now() - 60000) // 最近1分钟的消息
    ).length;
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">高级实时聊天（多房间）</h3>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-96">
          {/* 房间列表 */}
          <div className="lg:col-span-1 border border-gray-200 rounded-lg p-3">
            <h4 className="font-medium text-gray-800 mb-3">房间列表</h4>
            <div className="space-y-2">
              {rooms.map((room) => {
                const unreadCount = getUnreadCount(room.id);
                return (
                  <button
                    key={room.id}
                    onClick={() => setActiveRoom(room.id)}
                    className={\`w-full text-left p-2 rounded-md transition-colors relative \${
                      activeRoom === room.id
                        ? "bg-blue-100 border border-blue-300"
                        : "hover:bg-gray-100"
                    }\`}
                  >
                    <div className="font-medium text-sm">{room.name}</div>
                    <div className="text-xs text-gray-500">
                      {room.description}
                    </div>
                    {unreadCount > 0 && (
                      <div className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {unreadCount}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* 在线用户 */}
            <div className="mt-4">
              <h5 className="font-medium text-gray-800 mb-2 text-sm">
                在线用户
              </h5>
              <div className="space-y-1">
                {currentChat.onlineUsers.map((user) => (
                  <div
                    key={user}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className={user === currentUser ? "font-medium" : ""}>
                      {user === currentUser ? \`\${user} (你)\` : user}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 聊天区域 */}
          <div className="lg:col-span-3 border border-gray-200 rounded-lg overflow-hidden">
            {/* 聊天头部 */}
            <div className="p-3 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">
                    {rooms.find((r) => r.id === activeRoom)?.name}
                  </h4>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-gray-600">状态:</span>
                    <span
                      className={getStatusColor(currentChat.connectionStatus)}
                    >
                      {getStatusText(currentChat.connectionStatus)}
                    </span>
                    <div
                      className={\`w-2 h-2 rounded-full \${
                        currentChat.connectionStatus === "connected"
                          ? "bg-green-500"
                          : currentChat.connectionStatus === "connecting"
                          ? "bg-yellow-500 animate-pulse"
                          : "bg-red-500"
                      }\`}
                    />
                  </div>
                </div>
                <button
                  onClick={
                    currentChat.connectionStatus === "connected"
                      ? currentChat.disconnect
                      : currentChat.connect
                  }
                  className={\`px-3 py-1 rounded text-sm \${
                    currentChat.connectionStatus === "connected"
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }\`}
                >
                  {currentChat.connectionStatus === "connected"
                    ? "断开"
                    : "连接"}
                </button>
              </div>
            </div>

            {/* 消息列表 */}
            <div className="h-64 overflow-y-auto p-3 bg-gray-50">
              {currentChat.messages.length === 0 ? (
                <div className="text-center text-gray-500 mt-16">
                  欢迎来到 {rooms.find((r) => r.id === activeRoom)?.name} 房间！
                </div>
              ) : (
                <div className="space-y-2">
                  {currentChat.messages.map((message) => (
                    <div
                      key={message.id}
                      className={\`flex \${
                        message.sender === currentUser
                          ? "justify-end"
                          : "justify-start"
                      }\`}
                    >
                      <div
                        className={\`max-w-xs px-3 py-2 rounded-lg \${
                          message.sender === currentUser
                            ? "bg-blue-500 text-white"
                            : message.type === "system"
                            ? "bg-green-100 text-green-800 border border-green-200"
                            : "bg-white border border-gray-200"
                        }\`}
                      >
                        {message.sender !== currentUser &&
                          message.type !== "system" && (
                            <div className="text-xs text-gray-500 mb-1">
                              {message.sender}
                            </div>
                          )}
                        <div className="text-sm">{message.content}</div>
                        <div
                          className={\`text-xs mt-1 \${
                            message.sender === currentUser
                              ? "text-blue-100"
                              : message.type === "system"
                              ? "text-green-600"
                              : "text-gray-500"
                          }\`}
                        >
                          {message.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div
                    ref={(el) => {
                      messagesEndRefs.current[activeRoom] = el;
                    }}
                  />
                </div>
              )}
            </div>

            {/* 输入区域 */}
            <div className="p-3 bg-white border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={currentInputMessage}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={\`在 \${
                    rooms.find((r) => r.id === activeRoom)?.name
                  } 中发言...\`}
                  disabled={currentChat.connectionStatus !== "connected"}
                  className={\`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm \${
                    currentChat.connectionStatus !== "connected"
                      ? "bg-gray-100 cursor-not-allowed"
                      : ""
                  }\`}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={
                    !currentInputMessage.trim() ||
                    currentChat.connectionStatus !== "connected"
                  }
                  className={\`px-4 py-2 rounded-md text-sm \${
                    !currentInputMessage.trim() ||
                    currentChat.connectionStatus !== "connected"
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }\`}
                >
                  发送
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
          <h4 className="font-medium text-blue-800 mb-2">高级功能演示：</h4>
          <div className="text-sm text-blue-700 space-y-1">
            <p>• 多房间支持：每个房间独立的聊天环境</p>
            <p>• 独立连接：每个房间维护自己的连接状态</p>
            <p>• 在线用户：显示当前房间的在线用户列表</p>
            <p>• 未读消息：非活跃房间显示未读消息数量</p>
            <p>• 用户标识：区分自己和其他用户的消息</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedRealTimeChatDemo;
`,P=()=>{const[a]=d.useState("user1"),n=S(a),[r,o]=d.useState(""),u=d.useRef(null);d.useEffect(()=>{var s;(s=u.current)==null||s.scrollIntoView({behavior:"smooth"})},[n.messages]);const h=()=>{r.trim()&&(n.sendMessage(r.trim()),o(""))},g=s=>{s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),h())},c=s=>{switch(s){case"connected":return"text-green-600";case"connecting":return"text-yellow-600";case"disconnected":return"text-red-600";case"error":return"text-red-600";default:return"text-gray-600"}},m=s=>{switch(s){case"connected":return"已连接";case"connecting":return"连接中...";case"disconnected":return"已断开";case"error":return"连接错误";default:return"未知状态"}},p=s=>{switch(s){case"sending":return"⏳";case"sent":return"✓";case"failed":return"❌";default:return""}};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础实时聊天"}),e.jsx("div",{className:"mb-4 p-3 bg-gray-50 rounded-lg",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"连接状态:"}),e.jsx("span",{className:`text-sm font-medium ${c(n.connectionStatus)}`,children:m(n.connectionStatus)}),e.jsx("div",{className:`w-2 h-2 rounded-full ${n.connectionStatus==="connected"?"bg-green-500":n.connectionStatus==="connecting"?"bg-yellow-500 animate-pulse":"bg-red-500"}`})]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:n.connect,disabled:n.connectionStatus==="connecting"||n.connectionStatus==="connected",className:`px-3 py-1 rounded text-sm ${n.connectionStatus==="connecting"||n.connectionStatus==="connected"?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"连接"}),e.jsx("button",{onClick:n.disconnect,disabled:n.connectionStatus==="disconnected",className:`px-3 py-1 rounded text-sm ${n.connectionStatus==="disconnected"?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-red-500 text-white hover:bg-red-600"}`,children:"断开"}),e.jsx("button",{onClick:n.clearMessages,className:"px-3 py-1 rounded text-sm bg-gray-500 text-white hover:bg-gray-600",children:"清空"})]})]})}),e.jsxs("div",{className:"border border-gray-300 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"h-96 overflow-y-auto p-4 bg-gray-50",children:n.messages.length===0?e.jsx("div",{className:"text-center text-gray-500 mt-20",children:"暂无消息，开始聊天吧！"}):e.jsxs("div",{className:"space-y-3",children:[n.messages.map(s=>e.jsx("div",{className:`flex ${s.sender===a?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${s.sender===a?"bg-blue-500 text-white":s.type==="system"?"bg-green-100 text-green-800 border border-green-200":"bg-white border border-gray-200"}`,children:[e.jsx("div",{className:"text-sm",children:s.content}),e.jsxs("div",{className:`text-xs mt-1 flex items-center justify-between ${s.sender===a?"text-blue-100":s.type==="system"?"text-green-600":"text-gray-500"}`,children:[e.jsx("span",{children:s.timestamp.toLocaleTimeString()}),s.sender===a&&e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx("span",{children:p(s.status)}),s.status==="failed"&&e.jsx("button",{onClick:()=>n.retryMessage(s.id),className:"text-xs underline hover:no-underline",children:"重试"})]})]})]})},s.id)),e.jsx("div",{ref:u})]})}),e.jsxs("div",{className:"p-4 bg-white border-t border-gray-300",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",value:r,onChange:s=>o(s.target.value),onKeyPress:g,placeholder:"输入消息...",disabled:n.connectionStatus!=="connected",className:`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${n.connectionStatus!=="connected"?"bg-gray-100 cursor-not-allowed":""}`}),e.jsx("button",{onClick:h,disabled:!r.trim()||n.connectionStatus!=="connected",className:`px-4 py-2 rounded-md ${!r.trim()||n.connectionStatus!=="connected"?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"发送"})]}),n.connectionStatus!=="connected"&&e.jsx("div",{className:"mt-2 text-sm text-red-600",children:"连接断开，消息将在重新连接后发送"})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-green-50 border border-green-200 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"实时功能演示："}),e.jsxs("div",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("p",{children:"• 模拟连接：点击连接按钮建立模拟 WebSocket 连接"}),e.jsx("p",{children:"• 消息状态：显示发送中、已发送、失败等状态"}),e.jsx("p",{children:"• 智能回复：系统会自动回复你的消息"}),e.jsx("p",{children:"• 消息队列：离线时消息会排队等待发送"}),e.jsx("p",{children:"• 失败重试：发送失败的消息可以手动重试"})]})]})]})})},O=`import { ConnectionStatus, Message } from "./types";
import React, { useEffect, useRef, useState } from "react";

import { useRealTimeChat } from "./useRealTimeChat";

// 基础实时聊天演示
const BasicRealTimeChatDemo: React.FC = () => {
  const [currentUser] = useState("user1");
  const chat = useRealTimeChat(currentUser);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat.messages]);

  // 发送消息
  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      chat.sendMessage(inputMessage.trim());
      setInputMessage("");
    }
  };

  // 处理回车发送
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // 获取连接状态颜色
  const getStatusColor = (status: ConnectionStatus) => {
    switch (status) {
      case "connected":
        return "text-green-600";
      case "connecting":
        return "text-yellow-600";
      case "disconnected":
        return "text-red-600";
      case "error":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  // 获取连接状态文本
  const getStatusText = (status: ConnectionStatus) => {
    switch (status) {
      case "connected":
        return "已连接";
      case "connecting":
        return "连接中...";
      case "disconnected":
        return "已断开";
      case "error":
        return "连接错误";
      default:
        return "未知状态";
    }
  };

  // 获取消息状态图标
  const getMessageStatusIcon = (status: Message["status"]) => {
    switch (status) {
      case "sending":
        return "⏳";
      case "sent":
        return "✓";
      case "failed":
        return "❌";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">基础实时聊天</h3>

        {/* 连接控制 */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">连接状态:</span>
              <span
                className={\`text-sm font-medium \${getStatusColor(
                  chat.connectionStatus
                )}\`}
              >
                {getStatusText(chat.connectionStatus)}
              </span>
              <div
                className={\`w-2 h-2 rounded-full \${
                  chat.connectionStatus === "connected"
                    ? "bg-green-500"
                    : chat.connectionStatus === "connecting"
                    ? "bg-yellow-500 animate-pulse"
                    : "bg-red-500"
                }\`}
              />
            </div>
            <div className="space-x-2">
              <button
                onClick={chat.connect}
                disabled={
                  chat.connectionStatus === "connecting" ||
                  chat.connectionStatus === "connected"
                }
                className={\`px-3 py-1 rounded text-sm \${
                  chat.connectionStatus === "connecting" ||
                  chat.connectionStatus === "connected"
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }\`}
              >
                连接
              </button>
              <button
                onClick={chat.disconnect}
                disabled={chat.connectionStatus === "disconnected"}
                className={\`px-3 py-1 rounded text-sm \${
                  chat.connectionStatus === "disconnected"
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-red-500 text-white hover:bg-red-600"
                }\`}
              >
                断开
              </button>
              <button
                onClick={chat.clearMessages}
                className="px-3 py-1 rounded text-sm bg-gray-500 text-white hover:bg-gray-600"
              >
                清空
              </button>
            </div>
          </div>
        </div>

        {/* 聊天区域 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          {/* 消息列表 */}
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            {chat.messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-20">
                暂无消息，开始聊天吧！
              </div>
            ) : (
              <div className="space-y-3">
                {chat.messages.map((message) => (
                  <div
                    key={message.id}
                    className={\`flex \${
                      message.sender === currentUser
                        ? "justify-end"
                        : "justify-start"
                    }\`}
                  >
                    <div
                      className={\`max-w-xs lg:max-w-md px-4 py-2 rounded-lg \${
                        message.sender === currentUser
                          ? "bg-blue-500 text-white"
                          : message.type === "system"
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : "bg-white border border-gray-200"
                      }\`}
                    >
                      <div className="text-sm">{message.content}</div>
                      <div
                        className={\`text-xs mt-1 flex items-center justify-between \${
                          message.sender === currentUser
                            ? "text-blue-100"
                            : message.type === "system"
                            ? "text-green-600"
                            : "text-gray-500"
                        }\`}
                      >
                        <span>{message.timestamp.toLocaleTimeString()}</span>
                        {message.sender === currentUser && (
                          <div className="flex items-center space-x-1">
                            <span>{getMessageStatusIcon(message.status)}</span>
                            {message.status === "failed" && (
                              <button
                                onClick={() => chat.retryMessage(message.id)}
                                className="text-xs underline hover:no-underline"
                              >
                                重试
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* 输入区域 */}
          <div className="p-4 bg-white border-t border-gray-300">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="输入消息..."
                disabled={chat.connectionStatus !== "connected"}
                className={\`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${
                  chat.connectionStatus !== "connected"
                    ? "bg-gray-100 cursor-not-allowed"
                    : ""
                }\`}
              />
              <button
                onClick={handleSendMessage}
                disabled={
                  !inputMessage.trim() || chat.connectionStatus !== "connected"
                }
                className={\`px-4 py-2 rounded-md \${
                  !inputMessage.trim() || chat.connectionStatus !== "connected"
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }\`}
              >
                发送
              </button>
            </div>
            {chat.connectionStatus !== "connected" && (
              <div className="mt-2 text-sm text-red-600">
                连接断开，消息将在重新连接后发送
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
          <h4 className="font-medium text-green-800 mb-2">实时功能演示：</h4>
          <div className="text-sm text-green-700 space-y-1">
            <p>• 模拟连接：点击连接按钮建立模拟 WebSocket 连接</p>
            <p>• 消息状态：显示发送中、已发送、失败等状态</p>
            <p>• 智能回复：系统会自动回复你的消息</p>
            <p>• 消息队列：离线时消息会排队等待发送</p>
            <p>• 失败重试：发送失败的消息可以手动重试</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicRealTimeChatDemo;
`,T=`import { ChatState, ChatAction } from './types';

// 聊天 Reducer
export function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case "UPDATE_MESSAGE":
      return {
        ...state,
        messages: state.messages.map((msg) =>
          msg.id === action.payload.id
            ? { ...msg, ...action.payload.updates }
            : msg
        ),
      };
    case "SET_CONNECTION_STATUS":
      return { ...state, connectionStatus: action.payload };
    case "SET_TYPING":
      return { ...state, isTyping: action.payload };
    case "SET_ONLINE_USERS":
      return { ...state, onlineUsers: action.payload };
    case "CLEAR_MESSAGES":
      return { ...state, messages: [] };
    default:
      return state;
  }
}

// 初始状态
export const initialChatState: ChatState = {
  messages: [],
  connectionStatus: "disconnected",
  isTyping: false,
  onlineUsers: [],
};`,R=`import { ConnectionStatus } from './types';

// 模拟 WebSocket 连接
export class MockWebSocket {
  private listeners: { [event: string]: Function[] } = {};
  private connectionStatus: ConnectionStatus = "disconnected";
  private reconnectTimer: NodeJS.Timeout | null = null;
  private messageTimer: NodeJS.Timeout | null = null;
  private botResponses = [
    "你好！我是智能助手",
    "这是一个很有趣的话题",
    "我理解你的意思",
    "让我想想...",
    "这个功能很实用",
    "感谢你的反馈",
    "还有其他问题吗？",
    "我会继续学习改进",
  ];

  constructor(private url: string) {}

  connect() {
    this.connectionStatus = "connecting";
    this.emit("statusChange", "connecting");

    // 模拟连接延迟
    setTimeout(() => {
      this.connectionStatus = "connected";
      this.emit("statusChange", "connected");
      this.emit("open");
      
      // 发送欢迎消息
      setTimeout(() => {
        this.emit("message", {
          type: "message",
          payload: {
            id: Date.now().toString(),
            content: "欢迎使用实时聊天系统！",
            sender: "system",
            timestamp: new Date(),
            type: "system",
            status: "sent",
          },
        });
      }, 1000);
    }, 1000 + Math.random() * 1000);
  }

  disconnect() {
    this.connectionStatus = "disconnected";
    this.emit("statusChange", "disconnected");
    this.emit("close");
    this.stopAutoReply();
    this.stopReconnect();
  }

  send(data: any) {
    if (this.connectionStatus !== "connected") {
      throw new Error("WebSocket is not connected");
    }

    const messageData = JSON.parse(data);
    
    // 模拟发送延迟和可能的失败
    setTimeout(() => {
      if (Math.random() > 0.9) {
        // 10% 失败率
        this.emit("error", new Error("Send failed"));
      } else {
        this.emit("messageSent", messageData);
        
        // 模拟机器人回复
        if (messageData.type === "sendMessage") {
          this.scheduleAutoReply();
        }
      }
    }, 200 + Math.random() * 300);
  }

  on(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: Function) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(
        (cb) => cb !== callback
      );
    }
  }

  private emit(event: string, data?: any) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((callback) => callback(data));
    }
  }

  private scheduleAutoReply() {
    // 清除之前的定时器
    if (this.messageTimer) {
      clearTimeout(this.messageTimer);
    }

    // 随机延迟回复
    this.messageTimer = setTimeout(() => {
      if (this.connectionStatus === "connected") {
        const response = this.botResponses[Math.floor(Math.random() * this.botResponses.length)];
        this.emit("message", {
          type: "message",
          payload: {
            id: Date.now().toString(),
            content: response,
            sender: "bot",
            timestamp: new Date(),
            type: "text",
            status: "sent",
          },
        });
      }
    }, 1000 + Math.random() * 2000);
  }

  private stopAutoReply() {
    if (this.messageTimer) {
      clearTimeout(this.messageTimer);
      this.messageTimer = null;
    }
  }

  private startReconnect() {
    this.reconnectTimer = setTimeout(() => {
      if (this.connectionStatus === "disconnected") {
        this.connect();
      }
    }, 3000 + Math.random() * 2000);
  }

  private stopReconnect() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }
}`,j=`// 消息类型\r
export interface Message {\r
  id: string;\r
  content: string;\r
  sender: string;\r
  timestamp: Date;\r
  type: "text" | "system";\r
  status: "sending" | "sent" | "failed";\r
}\r
\r
// 连接状态\r
export type ConnectionStatus =\r
  | "connecting"\r
  | "connected"\r
  | "disconnected"\r
  | "error";\r
\r
// 聊天状态\r
export interface ChatState {\r
  messages: Message[];\r
  connectionStatus: ConnectionStatus;\r
  isTyping: boolean;\r
  onlineUsers: string[];\r
}\r
\r
// 聊天动作\r
export type ChatAction =\r
  | { type: "ADD_MESSAGE"; payload: Message }\r
  | {\r
      type: "UPDATE_MESSAGE";\r
      payload: { id: string; updates: Partial<Message> };\r
    }\r
  | { type: "SET_CONNECTION_STATUS"; payload: ConnectionStatus }\r
  | { type: "SET_TYPING"; payload: boolean }\r
  | { type: "SET_ONLINE_USERS"; payload: string[] }\r
  | { type: "CLEAR_MESSAGES" };\r
\r
// 房间信息\r
export interface Room {\r
  id: string;\r
  name: string;\r
  unread?: number;\r
  description: string;\r
}\r
`,E=`import { ConnectionStatus, Message } from "./types";
import { chatReducer, initialChatState } from "./chatReducer";
import { useCallback, useEffect, useReducer, useRef } from "react";

import { MockWebSocket } from "./MockWebSocket";

// 实时聊天 Hook
export function useRealTimeChat(userId: string) {
  const [state, dispatch] = useReducer(chatReducer, initialChatState);
  const wsRef = useRef<MockWebSocket | null>(null);
  const messageQueueRef = useRef<any[]>([]);

  // 连接 WebSocket
  const connect = useCallback(() => {
    if (wsRef.current) {
      wsRef.current.disconnect();
    }

    const ws = new MockWebSocket(\`ws://localhost:8080/chat?userId=\${userId}\`);
    wsRef.current = ws;

    ws.on("statusChange", (status: ConnectionStatus) => {
      dispatch({ type: "SET_CONNECTION_STATUS", payload: status });
    });

    ws.on("open", () => {
      // 发送队列中的消息
      while (messageQueueRef.current.length > 0) {
        const message = messageQueueRef.current.shift();
        try {
          ws.send(JSON.stringify(message));
        } catch (error) {
          console.error("Failed to send queued message:", error);
        }
      }
    });

    ws.on("message", (data: any) => {
      const { type, payload } = data;
      if (type === "message") {
        dispatch({ type: "ADD_MESSAGE", payload });
      }
    });

    ws.on("messageSent", (data: any) => {
      // 消息发送成功的确认
      if (data.type === "sendMessage") {
        dispatch({
          type: "UPDATE_MESSAGE",
          payload: { id: data.payload.id, updates: { status: "sent" } },
        });
      }
    });

    ws.on("error", (error: Error) => {
      console.error("WebSocket error:", error);
      dispatch({ type: "SET_CONNECTION_STATUS", payload: "error" });
    });

    ws.on("close", () => {
      dispatch({ type: "SET_CONNECTION_STATUS", payload: "disconnected" });
    });

    ws.connect();
  }, [userId]);

  // 断开连接
  const disconnect = useCallback(() => {
    if (wsRef.current) {
      wsRef.current.disconnect();
      wsRef.current = null;
    }
  }, []);

  // 发送消息
  const sendMessage = useCallback(
    (content: string) => {
      const message: Message = {
        id: Date.now().toString(),
        content,
        sender: userId,
        timestamp: new Date(),
        type: "text",
        status: "sending",
      };

      // 乐观更新
      dispatch({ type: "ADD_MESSAGE", payload: message });

      const messageData = {
        type: "sendMessage",
        payload: message,
      };

      if (wsRef.current && state.connectionStatus === "connected") {
        try {
          wsRef.current.send(JSON.stringify(messageData));
        } catch (error) {
          dispatch({
            type: "UPDATE_MESSAGE",
            payload: { id: message.id, updates: { status: "failed" } },
          });
        }
      } else {
        // 添加到队列
        messageQueueRef.current.push(messageData);
        dispatch({
          type: "UPDATE_MESSAGE",
          payload: { id: message.id, updates: { status: "failed" } },
        });
      }
    },
    [userId, state.connectionStatus]
  );

  // 重试发送失败的消息
  const retryMessage = useCallback(
    (messageId: string) => {
      const message = state.messages.find((m) => m.id === messageId);
      if (message && message.status === "failed") {
        dispatch({
          type: "UPDATE_MESSAGE",
          payload: { id: messageId, updates: { status: "sending" } },
        });

        const messageData = {
          type: "sendMessage",
          payload: { ...message, status: "sending" },
        };

        if (wsRef.current && state.connectionStatus === "connected") {
          try {
            wsRef.current.send(JSON.stringify(messageData));
          } catch (error) {
            dispatch({
              type: "UPDATE_MESSAGE",
              payload: { id: messageId, updates: { status: "failed" } },
            });
          }
        }
      }
    },
    [state.messages, state.connectionStatus]
  );

  // 清空消息
  const clearMessages = useCallback(() => {
    dispatch({ type: "CLEAR_MESSAGES" });
  }, []);

  // 清理
  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [disconnect]);

  return {
    ...state,
    connect,
    disconnect,
    sendMessage,
    retryMessage,
    clearMessages,
  };
}
`,J=()=>{const a=e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• WebSocket 连接"}),e.jsx("li",{children:"• 消息状态管理"}),e.jsx("li",{children:"• 连接状态处理"}),e.jsx("li",{children:"• 实时状态同步"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 消息即时传递"}),e.jsx("li",{children:"• 状态跟踪重试"}),e.jsx("li",{children:"• 流畅聊天体验"}),e.jsx("li",{children:"• 多房间支持"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 聊天客服系统"}),e.jsx("li",{children:"• 实时编辑评论"}),e.jsx("li",{children:"• 多人游戏通信"}),e.jsx("li",{children:"• 弹幕互动功能"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 连接重连逻辑"}),e.jsx("li",{children:"• 离线消息处理"}),e.jsx("li",{children:"• 内存泄漏清理"}),e.jsx("li",{children:"• 网络异常处理"})]})]})]})}),n=[{title:"基础实时聊天",component:e.jsx(P,{}),description:"展示基础的实时聊天功能，包括连接管理、消息发送和状态跟踪。",observationPoints:["点击'连接'按钮建立 WebSocket 连接，观察连接状态变化","发送消息时观察消息状态：发送中(⏳) → 已发送(✓)","系统会自动回复消息，模拟真实的聊天环境","断开连接后发送消息会提示连接状态，重连后消息会自动发送","失败的消息会显示重试按钮，点击可重新发送"],keyPoints:["使用 useReducer 管理复杂的聊天状态","WebSocket 事件监听和状态同步","乐观更新提升用户体验","消息队列处理离线场景","错误处理和重试机制"],commonTraps:["忘记清理 WebSocket 连接导致内存泄漏","没有处理连接断开时的消息队列","缺少错误处理和用户反馈","消息状态更新不及时或不准确"],solutions:["在 useEffect 清理函数中关闭 WebSocket 连接","实现消息队列，连接恢复后自动发送","添加完善的错误处理和状态提示","使用事件监听器及时更新消息状态"],importantTips:["WebSocket 连接是异步的，需要监听连接状态","消息发送采用乐观更新，先显示再确认","合理使用 useCallback 避免不必要的重新渲染","考虑网络异常情况下的用户体验"],preCode:[{title:"types",code:j},{title:"chatReducer",code:T},{title:"mockWebsocket",code:R},{title:"useRealTimeChat",code:E}],codeExample:{title:"基础实时聊天",code:O}},{title:"高级实时聊天",component:e.jsx($,{}),description:"展示高级的多房间聊天功能，包括房间切换、在线用户和未读消息。",observationPoints:["左侧房间列表支持切换，每个房间独立维护聊天状态","非活跃房间有新消息时会显示未读数量红色徽章","右侧显示当前房间的在线用户列表","每个房间有独立的连接状态和消息历史","切换房间时输入框内容会保持独立状态"],keyPoints:["多实例管理：每个房间独立的 Hook 实例","状态隔离：房间间数据完全独立","未读消息统计和提醒机制","用户在线状态管理","输入状态的房间级别管理"],commonTraps:["多个 WebSocket 连接管理复杂","房间切换时状态混乱","未读消息计算逻辑错误","内存占用过高问题"],solutions:["为每个房间创建独立的 Hook 实例","使用对象管理多个房间的状态","基于时间戳计算未读消息","适时清理不活跃房间的资源"],importantTips:["多房间场景下要合理管理资源消耗","考虑实现房间的懒加载和资源回收","未读消息的计算要考虑用户活跃时间","保持各房间状态的独立性和一致性"],preCode:[{title:"types",code:j},{title:"chatReducer",code:T},{title:"mockWebsocket",code:R},{title:"useRealTimeChat",code:E}],codeExample:{title:"高级实时聊天",code:W}}],r={concepts:["理解 WebSocket 的工作原理和生命周期","掌握实时通信中的状态管理模式","学习消息队列和离线处理机制","了解连接管理和错误处理策略","掌握多房间架构的设计思路"],steps:["创建 WebSocket 连接管理类","设计消息和连接状态的数据结构","实现 useReducer 管理复杂状态","添加消息发送和接收逻辑","实现连接状态监听和处理","添加错误处理和重试机制","扩展多房间和高级功能"],tips:["使用 TypeScript 定义清晰的消息和状态类型","合理设计 Reducer 的 Action 类型","实现乐观更新提升用户体验","添加完善的错误边界和降级方案","考虑性能优化和资源管理"]},o={questions:[{question:"如何在 React 中实现实时通信？",answer:"主要通过 WebSocket 实现：1) 创建 WebSocket 连接；2) 使用 useEffect 管理连接生命周期；3) 通过事件监听器处理消息；4) 使用 useState/useReducer 管理状态；5) 在组件卸载时清理连接。"},{question:"实时聊天中如何处理消息状态？",answer:"消息状态包括：sending(发送中)、sent(已发送)、failed(失败)。通过乐观更新先显示消息，然后根据服务器响应更新状态。失败的消息提供重试功能。"},{question:"如何处理 WebSocket 连接断开？",answer:"1) 监听连接状态变化；2) 实现消息队列缓存离线消息；3) 连接恢复后自动发送队列中的消息；4) 提供手动重连功能；5) 显示连接状态给用户。"},{question:"多房间聊天如何设计架构？",answer:"1) 每个房间独立的 Hook 实例；2) 使用对象管理多个房间状态；3) 房间切换时保持各自的连接和消息；4) 实现未读消息统计；5) 合理管理资源避免内存泄漏。"},{question:"实时通信中的性能优化策略？",answer:"1) 使用 useCallback 缓存事件处理函数；2) 合理使用 useMemo 缓存计算结果；3) 避免频繁的状态更新；4) 实现消息分页和虚拟滚动；5) 及时清理不需要的连接和监听器。"}],keyPoints:["WebSocket 连接管理是实时通信的核心","状态管理要考虑异步和并发场景","用户体验需要完善的状态反馈","错误处理和降级方案必不可少","多房间场景下的资源管理很重要"]},u={dos:["使用 TypeScript 定义清晰的类型","实现完善的错误处理机制","提供清晰的连接状态反馈","使用乐观更新提升用户体验","合理管理 WebSocket 连接生命周期","实现消息队列处理离线场景","添加重试机制处理发送失败"],donts:["不要忘记清理 WebSocket 连接","不要在每次渲染时创建新的连接","不要忽略网络异常的处理","不要让多个房间共享状态","不要缺少用户操作的反馈","不要忽略内存泄漏问题","不要硬编码连接参数"],patterns:["连接管理模式：封装 WebSocket 操作","状态管理模式：使用 Reducer 管理复杂状态","事件驱动模式：基于事件的消息处理","乐观更新模式：先更新 UI 再确认","队列模式：处理离线和失败消息","观察者模式：监听连接和消息状态","工厂模式：创建多个房间实例"]};return e.jsx(D,{title:"实时通信",description:"学习如何在 React 中实现实时通信功能，包括 WebSocket 连接管理、消息状态跟踪、多房间聊天等高级特性。",overview:a,examples:n,tutorial:r,interview:o,bestPractices:u})};export{J as default};
