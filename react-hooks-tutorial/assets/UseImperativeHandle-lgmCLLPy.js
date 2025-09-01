import{r as i,j as e}from"./index-nevtk0dH.js";import{C as S}from"./ComponentTemplate-CQT_cNgc.js";const T=i.forwardRef(({placeholder:b,onValueChange:l},n)=>{const[f,a]=i.useState(""),u=i.useRef(null);i.useImperativeHandle(n,()=>({focus:()=>{var s;(s=u.current)==null||s.focus()},blur:()=>{var s;(s=u.current)==null||s.blur()},clear:()=>{a(""),l==null||l("")},getValue:()=>f,setValue:s=>{a(s),l==null||l(s)}}),[f,l]);const g=s=>{const h=s.target.value;a(h),l==null||l(h)};return e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:u,type:"text",value:f,onChange:g,placeholder:b,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),f&&e.jsx("button",{onClick:()=>{a(""),l==null||l("")},className:"absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:"✕"})]})});T.displayName="CustomInput";const M=()=>{const[b,l]=i.useState([]),[n,f]=i.useState(""),a=i.useRef(null),u=t=>{const d=new Date().toLocaleTimeString();l(m=>[...m.slice(-5),`${d}: ${t}`])},g=()=>{var t;(t=a.current)==null||t.focus(),u("调用 focus() 方法")},s=()=>{var t;(t=a.current)==null||t.blur(),u("调用 blur() 方法")},h=()=>{var t;(t=a.current)==null||t.clear(),u("调用 clear() 方法")},N=()=>{var d;const t=((d=a.current)==null?void 0:d.getValue())||"";u(`调用 getValue(): "${t}"`)},R=()=>{var d;const t=`随机值 ${Math.floor(Math.random()*1e3)}`;(d=a.current)==null||d.setValue(t),u(`调用 setValue("${t}")`)},w=()=>{l([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"自定义输入框控制"}),e.jsx("button",{onClick:w,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"自定义输入框:"}),e.jsx(T,{ref:a,placeholder:"请输入内容...",onValueChange:f})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:g,className:"px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors",children:"聚焦输入框"}),e.jsx("button",{onClick:s,className:"px-3 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 transition-colors",children:"失焦输入框"}),e.jsx("button",{onClick:h,className:"px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"清空内容"}),e.jsx("button",{onClick:N,className:"px-3 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors",children:"获取值"}),e.jsx("button",{onClick:R,className:"px-3 py-2 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 transition-colors col-span-2",children:"设置随机值"})]}),e.jsx("div",{className:"p-3 bg-blue-50 rounded border border-blue-200",children:e.jsxs("p",{className:"text-sm text-blue-800",children:[e.jsx("strong",{children:"当前值:"}),' "',n,'"']})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[200px]",children:b.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"点击按钮查看操作日志"}):e.jsx("div",{className:"space-y-1 max-h-40 overflow-y-auto",children:b.map((t,d)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:t},d))})})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-green-50 rounded border border-green-200",children:e.jsx("p",{className:"text-sm text-green-800",children:"💡 通过 useImperativeHandle，父组件可以调用子组件暴露的自定义方法，而不是直接访问 DOM 元素。"})})]})},V=i.forwardRef(({label:b,type:l="text",required:n=!1,minLength:f,pattern:a,placeholder:u},g)=>{const[s,h]=i.useState(""),[N,R]=i.useState(""),[w,t]=i.useState(!1),d=i.useRef(null),m=i.useCallback(()=>{let r="";return n&&!s.trim()?r=`${b} 是必填项`:f&&s.length<f?r=`${b} 至少需要 ${f} 个字符`:a&&!a.test(s)&&(r=`${b} 格式不正确`),R(r),r===""},[s,n,f,a,b]);i.useImperativeHandle(g,()=>({validate:m,reset:()=>{h(""),R(""),t(!1)},focus:()=>{var r;(r=d.current)==null||r.focus()},getValue:()=>s,getError:()=>N}),[m,s,N]);const v=r=>{h(r.target.value),w&&setTimeout(m,0)},j=()=>{t(!0),m()};return e.jsxs("div",{className:"space-y-1",children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700",children:[b,n&&e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx("input",{ref:d,type:l,value:s,onChange:v,onBlur:j,placeholder:u,className:`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${N&&w?"border-red-300 focus:ring-red-500 focus:border-red-500":"border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}),N&&w&&e.jsx("p",{className:"text-sm text-red-600",children:N})]})});V.displayName="FormField";const $=()=>{var t;const[b,l]=i.useState([]),[n,f]=i.useState({}),a=i.useRef(null),u=i.useRef(null),g=i.useRef(null),s=d=>{const m=new Date().toLocaleTimeString();l(v=>[...v.slice(-5),`${m}: ${d}`])},h=()=>{var r,c,y,o,p,x;const d=((r=a.current)==null?void 0:r.validate())??!1,m=((c=u.current)==null?void 0:c.validate())??!1,v=((y=g.current)==null?void 0:y.validate())??!1,j=d&&m&&v;if(s(`表单验证: ${j?"通过":"失败"}`),j){const k={name:((o=a.current)==null?void 0:o.getValue())??"",email:((p=u.current)==null?void 0:p.getValue())??"",password:((x=g.current)==null?void 0:x.getValue())??""};f(k),s("表单数据已收集")}return j},N=()=>{var d,m,v;(d=a.current)==null||d.reset(),(m=u.current)==null||m.reset(),(v=g.current)==null||v.reset(),f({}),s("表单已重置")},R=()=>{var d,m,v,j,r,c;(d=a.current)!=null&&d.getError()?((m=a.current)==null||m.focus(),s("聚焦到姓名字段")):(v=u.current)!=null&&v.getError()?((j=u.current)==null||j.focus(),s("聚焦到邮箱字段")):(r=g.current)!=null&&r.getError()?((c=g.current)==null||c.focus(),s("聚焦到密码字段")):s("没有发现错误字段")},w=()=>{l([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"表单字段控制"}),e.jsx("button",{onClick:w,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(V,{ref:a,label:"姓名",required:!0,minLength:2,placeholder:"请输入您的姓名"}),e.jsx(V,{ref:u,label:"邮箱",type:"email",required:!0,pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,placeholder:"请输入您的邮箱"}),e.jsx(V,{ref:g,label:"密码",type:"password",required:!0,minLength:6,placeholder:"请输入密码 (至少6位)"}),e.jsxs("div",{className:"flex space-x-2 pt-2",children:[e.jsx("button",{onClick:h,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"验证表单"}),e.jsx("button",{onClick:N,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"重置表单"}),e.jsx("button",{onClick:R,className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors",children:"聚焦错误"})]}),Object.keys(n).length>0&&e.jsxs("div",{className:"p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"表单数据:"}),e.jsxs("div",{className:"space-y-1 text-sm text-green-700",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"姓名:"})," ",n.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"邮箱:"})," ",n.email]}),e.jsxs("p",{children:[e.jsx("strong",{children:"密码:"})," ","*".repeat(((t=n.password)==null?void 0:t.length)||0)]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[300px]",children:b.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"填写表单查看操作日志"}):e.jsx("div",{className:"space-y-1 max-h-60 overflow-y-auto",children:b.map((d,m)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:d},m))})})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 rounded border border-yellow-200",children:e.jsx("p",{className:"text-sm text-yellow-800",children:"💡 每个表单字段都通过 useImperativeHandle 暴露了验证、重置、聚焦等方法，父组件可以统一控制。"})})]})},F=i.forwardRef(({src:b,onTimeUpdate:l,onPlayStateChange:n},f)=>{const[a,u]=i.useState(!1),[g,s]=i.useState(0),[h,N]=i.useState(0),[R,w]=i.useState(1),t=i.useRef(null);i.useImperativeHandle(f,()=>({play:async()=>{if(t.current)try{await t.current.play()}catch(o){console.warn("播放失败:",o)}},pause:()=>{t.current&&t.current.pause()},stop:()=>{t.current&&(t.current.pause(),t.current.currentTime=0,s(0),u(!1),n==null||n(!1))},seek:o=>{if(t.current&&!isNaN(o)&&o>=0){const p=Math.min(o,t.current.duration||0);t.current.currentTime=p,s(p)}},setVolume:o=>{if(t.current){const p=Math.max(0,Math.min(1,o));t.current.volume=p,w(p)}},getCurrentTime:()=>{var o;return((o=t.current)==null?void 0:o.currentTime)||0},getDuration:()=>{var o;return((o=t.current)==null?void 0:o.duration)||0},isPlaying:()=>t.current?!t.current.paused:!1}),[n]);const d=()=>{u(!0),n==null||n(!0)},m=()=>{u(!1),n==null||n(!1)},v=()=>{u(!1),s(0),n==null||n(!1)},j=()=>{if(t.current){const o=t.current.currentTime,p=t.current.duration||0;s(o),l==null||l(o,p)}},r=()=>{if(t.current){const o=t.current.duration||0;N(o),l==null||l(0,o)}},c=()=>{t.current&&w(t.current.volume)},y=o=>{const p=Math.floor(o/60),x=Math.floor(o%60);return`${p}:${x.toString().padStart(2,"0")}`};return e.jsxs("div",{className:"p-4 bg-gray-100 rounded-lg border",children:[e.jsx("audio",{ref:t,src:b,onPlay:d,onPause:m,onEnded:v,onTimeUpdate:j,onLoadedMetadata:r,onCanPlay:c,preload:"metadata",crossOrigin:"anonymous"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-600",children:[e.jsx("span",{children:y(g)}),e.jsx("span",{className:"font-medium",children:"音频播放器"}),e.jsx("span",{children:y(h)})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-100",style:{width:h>0?`${g/h*100}%`:"0%"}})}),e.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[e.jsx("div",{className:`w-3 h-3 rounded-full ${a?"bg-green-500 animate-pulse":"bg-gray-400"}`}),e.jsx("span",{className:"text-sm text-gray-600",children:a?"播放中":"已暂停"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"音量:"}),e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-1",children:e.jsx("div",{className:"bg-blue-400 h-1 rounded-full",style:{width:`${R*100}%`}})}),e.jsxs("span",{className:"text-xs text-gray-500 w-8",children:[Math.round(R*100),"%"]})]})]})]})});F.displayName="MediaPlayer";const D=()=>{const[b,l]=i.useState([]),[n,f]=i.useState({currentTime:0,duration:0,isPlaying:!1}),a=i.useRef(null),u=()=>{const p=new ArrayBuffer(176444),x=new DataView(p),k=(I,C)=>{for(let L=0;L<C.length;L++)x.setUint8(I+L,C.charCodeAt(L))};k(0,"RIFF"),x.setUint32(4,36+88200*2,!0),k(8,"WAVE"),k(12,"fmt "),x.setUint32(16,16,!0),x.setUint16(20,1,!0),x.setUint16(22,1,!0),x.setUint32(24,44100,!0),x.setUint32(28,44100*2,!0),x.setUint16(32,2,!0),x.setUint16(34,16,!0),k(36,"data"),x.setUint32(40,88200*2,!0);for(let I=0;I<88200;I++){const C=Math.sin(2*Math.PI*440*I/44100)*.3;x.setInt16(44+I*2,C*32767,!0)}const P=new Blob([p],{type:"audio/wav"});return URL.createObjectURL(P)},[g]=i.useState(()=>u());i.useEffect(()=>()=>{g.startsWith("blob:")&&URL.revokeObjectURL(g)},[g]);const s=r=>{const c=new Date().toLocaleTimeString();l(y=>[...y.slice(-5),`${c}: ${r}`])},h=async()=>{var r;try{await((r=a.current)==null?void 0:r.play()),s("开始播放音频")}catch(c){s("播放失败: "+c.message)}},N=()=>{var r;(r=a.current)==null||r.pause(),s("暂停音频")},R=()=>{var r;(r=a.current)==null||r.stop(),s("停止音频并重置到开头")},w=r=>{var y,o;const c=((y=a.current)==null?void 0:y.getDuration())||0;if(c>0){const p=r/100*c;(o=a.current)==null||o.seek(p),s(`跳转到 ${r}% (${p.toFixed(1)}s)`)}else s("音频尚未加载完成，无法跳转")},t=r=>{var c;(c=a.current)==null||c.setVolume(r/100),s(`设置音量为 ${r}%`)},d=()=>{var o,p,x;const r=((o=a.current)==null?void 0:o.getCurrentTime())||0,c=((p=a.current)==null?void 0:p.getDuration())||0,y=((x=a.current)==null?void 0:x.isPlaying())||!1;s(`播放信息 - 当前: ${r.toFixed(1)}s / 总长: ${c.toFixed(1)}s / 状态: ${y?"播放中":"已暂停"}`)},m=(r,c)=>{f(y=>({...y,currentTime:r,duration:c}))},v=r=>{f(c=>({...c,isPlaying:r}))},j=()=>{l([])};return e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"媒体播放器控制"}),e.jsx("button",{onClick:j,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors",children:"清空日志"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(F,{ref:a,src:g,onTimeUpdate:m,onPlayStateChange:v}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx("button",{onClick:h,className:"px-3 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors",children:"播放"}),e.jsx("button",{onClick:N,className:"px-3 py-2 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 transition-colors",children:"暂停"}),e.jsx("button",{onClick:R,className:"px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors",children:"停止"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"快速跳转:"}),e.jsx("div",{className:"grid grid-cols-4 gap-1",children:[0,25,50,75].map(r=>e.jsxs("button",{onClick:()=>w(r),className:"px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs hover:bg-blue-200 transition-colors",children:[r,"%"]},r))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"音量控制:"}),e.jsx("div",{className:"grid grid-cols-4 gap-1",children:[0,30,60,100].map(r=>e.jsxs("button",{onClick:()=>t(r),className:"px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs hover:bg-purple-200 transition-colors",children:[r,"%"]},r))})]}),e.jsx("button",{onClick:d,className:"w-full px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors",children:"获取播放信息"}),e.jsxs("div",{className:"p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-1",children:"实时状态:"}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("p",{children:["播放状态: ",n.isPlaying?"播放中":"已暂停"]}),e.jsxs("p",{children:["当前时间: ",n.currentTime.toFixed(1),"s"]}),e.jsxs("p",{children:["总时长: ",n.duration.toFixed(1),"s"]}),e.jsxs("p",{children:["进度: ",n.duration>0?(n.currentTime/n.duration*100).toFixed(1):0,"%"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"操作日志:"}),e.jsx("div",{className:"bg-gray-50 rounded-lg p-3 min-h-[400px]",children:b.length===0?e.jsx("p",{className:"text-gray-500 text-sm",children:"使用播放器控制查看操作日志"}):e.jsx("div",{className:"space-y-1 max-h-80 overflow-y-auto",children:b.map((r,c)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:r},c))})})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-purple-50 rounded border border-purple-200",children:e.jsx("p",{className:"text-sm text-purple-800",children:"💡 媒体播放器通过 useImperativeHandle 暴露了完整的控制接口，父组件可以精确控制播放行为。"})})]})},H=`import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';

// 基础用法演示 - 自定义输入框组件
interface CustomInputRef {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  getValue: () => string;
  setValue: (value: string) => void;
}

const CustomInput = forwardRef<CustomInputRef, { placeholder?: string; onValueChange?: (value: string) => void }>(
  ({ placeholder, onValueChange }, ref) => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // 使用 useImperativeHandle 自定义暴露给父组件的方法
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      blur: () => {
        inputRef.current?.blur();
      },
      clear: () => {
        setValue('');
        onValueChange?.('');
      },
      getValue: () => value,
      setValue: (newValue: string) => {
        setValue(newValue);
        onValueChange?.(newValue);
      }
    }), [value, onValueChange]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onValueChange?.(newValue);
    };

    return (
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {value && (
          <button
            onClick={() => {
              setValue('');
              onValueChange?.('');
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>
    );
  }
);

CustomInput.displayName = 'CustomInput';

const BasicUsageDemo: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const customInputRef = useRef<CustomInputRef>(null);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-5), \`\${timestamp}: \${message}\`]);
  };

  const handleFocus = () => {
    customInputRef.current?.focus();
    addLog('调用 focus() 方法');
  };

  const handleBlur = () => {
    customInputRef.current?.blur();
    addLog('调用 blur() 方法');
  };

  const handleClear = () => {
    customInputRef.current?.clear();
    addLog('调用 clear() 方法');
  };

  const handleGetValue = () => {
    const value = customInputRef.current?.getValue() || '';
    addLog(\`调用 getValue(): "\${value}"\`);
  };

  const handleSetValue = () => {
    const newValue = \`随机值 \${Math.floor(Math.random() * 1000)}\`;
    customInputRef.current?.setValue(newValue);
    addLog(\`调用 setValue("\${newValue}")\`);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">自定义输入框控制</h3>
        <button
          onClick={clearLogs}
          className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
        >
          清空日志
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              自定义输入框:
            </label>
            <CustomInput
              ref={customInputRef}
              placeholder="请输入内容..."
              onValueChange={setInputValue}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleFocus}
              className="px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
            >
              聚焦输入框
            </button>
            <button
              onClick={handleBlur}
              className="px-3 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 transition-colors"
            >
              失焦输入框
            </button>
            <button
              onClick={handleClear}
              className="px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
            >
              清空内容
            </button>
            <button
              onClick={handleGetValue}
              className="px-3 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
            >
              获取值
            </button>
            <button
              onClick={handleSetValue}
              className="px-3 py-2 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 transition-colors col-span-2"
            >
              设置随机值
            </button>
          </div>
          
          <div className="p-3 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>当前值:</strong> "{inputValue}"
            </p>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>
          <div className="bg-gray-50 rounded-lg p-3 min-h-[200px]">
            {logs.length === 0 ? (
              <p className="text-gray-500 text-sm">点击按钮查看操作日志</p>
            ) : (
              <div className="space-y-1 max-h-40 overflow-y-auto">
                {logs.map((log, index) => (
                  <div key={index} className="text-sm font-mono text-gray-700">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
        <p className="text-sm text-green-800">
          💡 通过 useImperativeHandle，父组件可以调用子组件暴露的自定义方法，而不是直接访问 DOM 元素。
        </p>
      </div>
    </div>
  );
};

export default BasicUsageDemo;`,E=`import React, { useState, useRef, useImperativeHandle, forwardRef, useCallback } from 'react';\r
\r
// 复杂表单控制演示\r
interface FormFieldRef {\r
  validate: () => boolean;\r
  reset: () => void;\r
  focus: () => void;\r
  getValue: () => string;\r
  getError: () => string;\r
}\r
\r
interface FormFieldProps {\r
  label: string;\r
  type?: 'text' | 'email' | 'password';\r
  required?: boolean;\r
  minLength?: number;\r
  pattern?: RegExp;\r
  placeholder?: string;\r
}\r
\r
const FormField = forwardRef<FormFieldRef, FormFieldProps>(\r
  ({ label, type = 'text', required = false, minLength, pattern, placeholder }, ref) => {\r
    const [value, setValue] = useState('');\r
    const [error, setError] = useState('');\r
    const [touched, setTouched] = useState(false);\r
    const inputRef = useRef<HTMLInputElement>(null);\r
\r
    const validate = useCallback(() => {\r
      let errorMessage = '';\r
      \r
      if (required && !value.trim()) {\r
        errorMessage = \`\${label} 是必填项\`;\r
      } else if (minLength && value.length < minLength) {\r
        errorMessage = \`\${label} 至少需要 \${minLength} 个字符\`;\r
      } else if (pattern && !pattern.test(value)) {\r
        errorMessage = \`\${label} 格式不正确\`;\r
      }\r
      \r
      setError(errorMessage);\r
      return errorMessage === '';\r
    }, [value, required, minLength, pattern, label]);\r
\r
    useImperativeHandle(ref, () => ({\r
      validate,\r
      reset: () => {\r
        setValue('');\r
        setError('');\r
        setTouched(false);\r
      },\r
      focus: () => {\r
        inputRef.current?.focus();\r
      },\r
      getValue: () => value,\r
      getError: () => error\r
    }), [validate, value, error]);\r
\r
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
      setValue(e.target.value);\r
      if (touched) {\r
        // 实时验证\r
        setTimeout(validate, 0);\r
      }\r
    };\r
\r
    const handleBlur = () => {\r
      setTouched(true);\r
      validate();\r
    };\r
\r
    return (\r
      <div className="space-y-1">\r
        <label className="block text-sm font-medium text-gray-700">\r
          {label}\r
          {required && <span className="text-red-500 ml-1">*</span>}\r
        </label>\r
        <input\r
          ref={inputRef}\r
          type={type}\r
          value={value}\r
          onChange={handleChange}\r
          onBlur={handleBlur}\r
          placeholder={placeholder}\r
          className={\`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors \${\r
            error && touched\r
              ? 'border-red-300 focus:ring-red-500 focus:border-red-500'\r
              : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'\r
          }\`}\r
        />\r
        {error && touched && (\r
          <p className="text-sm text-red-600">{error}</p>\r
        )}\r
      </div>\r
    );\r
  }\r
);\r
\r
FormField.displayName = 'FormField';\r
\r
const FormControlDemo: React.FC = () => {\r
  const [logs, setLogs] = useState<string[]>([]);\r
  const [formData, setFormData] = useState<Record<string, string>>({});\r
  const nameRef = useRef<FormFieldRef>(null);\r
  const emailRef = useRef<FormFieldRef>(null);\r
  const passwordRef = useRef<FormFieldRef>(null);\r
\r
  const addLog = (message: string) => {\r
    const timestamp = new Date().toLocaleTimeString();\r
    setLogs(prev => [...prev.slice(-5), \`\${timestamp}: \${message}\`]);\r
  };\r
\r
  const validateForm = () => {\r
    const nameValid = nameRef.current?.validate() ?? false;\r
    const emailValid = emailRef.current?.validate() ?? false;\r
    const passwordValid = passwordRef.current?.validate() ?? false;\r
    \r
    const isValid = nameValid && emailValid && passwordValid;\r
    addLog(\`表单验证: \${isValid ? '通过' : '失败'}\`);\r
    \r
    if (isValid) {\r
      const data = {\r
        name: nameRef.current?.getValue() ?? '',\r
        email: emailRef.current?.getValue() ?? '',\r
        password: passwordRef.current?.getValue() ?? ''\r
      };\r
      setFormData(data);\r
      addLog('表单数据已收集');\r
    }\r
    \r
    return isValid;\r
  };\r
\r
  const resetForm = () => {\r
    nameRef.current?.reset();\r
    emailRef.current?.reset();\r
    passwordRef.current?.reset();\r
    setFormData({});\r
    addLog('表单已重置');\r
  };\r
\r
  const focusFirstError = () => {\r
    if (nameRef.current?.getError()) {\r
      nameRef.current?.focus();\r
      addLog('聚焦到姓名字段');\r
    } else if (emailRef.current?.getError()) {\r
      emailRef.current?.focus();\r
      addLog('聚焦到邮箱字段');\r
    } else if (passwordRef.current?.getError()) {\r
      passwordRef.current?.focus();\r
      addLog('聚焦到密码字段');\r
    } else {\r
      addLog('没有发现错误字段');\r
    }\r
  };\r
\r
  const clearLogs = () => {\r
    setLogs([]);\r
  };\r
\r
  return (\r
    <div className="p-6 bg-white rounded-lg border border-gray-200">\r
      <div className="flex items-center justify-between mb-4">\r
        <h3 className="text-lg font-semibold text-gray-800">表单字段控制</h3>\r
        <button\r
          onClick={clearLogs}\r
          className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"\r
        >\r
          清空日志\r
        </button>\r
      </div>\r
      \r
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
        <div className="space-y-4">\r
          <FormField\r
            ref={nameRef}\r
            label="姓名"\r
            required\r
            minLength={2}\r
            placeholder="请输入您的姓名"\r
          />\r
          \r
          <FormField\r
            ref={emailRef}\r
            label="邮箱"\r
            type="email"\r
            required\r
            pattern={/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/}\r
            placeholder="请输入您的邮箱"\r
          />\r
          \r
          <FormField\r
            ref={passwordRef}\r
            label="密码"\r
            type="password"\r
            required\r
            minLength={6}\r
            placeholder="请输入密码 (至少6位)"\r
          />\r
          \r
          <div className="flex space-x-2 pt-2">\r
            <button\r
              onClick={validateForm}\r
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"\r
            >\r
              验证表单\r
            </button>\r
            <button\r
              onClick={resetForm}\r
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"\r
            >\r
              重置表单\r
            </button>\r
            <button\r
              onClick={focusFirstError}\r
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"\r
            >\r
              聚焦错误\r
            </button>\r
          </div>\r
          \r
          {Object.keys(formData).length > 0 && (\r
            <div className="p-3 bg-green-50 rounded border border-green-200">\r
              <h4 className="font-semibold text-green-800 mb-2">表单数据:</h4>\r
              <div className="space-y-1 text-sm text-green-700">\r
                <p><strong>姓名:</strong> {formData.name}</p>\r
                <p><strong>邮箱:</strong> {formData.email}</p>\r
                <p><strong>密码:</strong> {'*'.repeat(formData.password?.length || 0)}</p>\r
              </div>\r
            </div>\r
          )}\r
        </div>\r
        \r
        <div>\r
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>\r
          <div className="bg-gray-50 rounded-lg p-3 min-h-[300px]">\r
            {logs.length === 0 ? (\r
              <p className="text-gray-500 text-sm">填写表单查看操作日志</p>\r
            ) : (\r
              <div className="space-y-1 max-h-60 overflow-y-auto">\r
                {logs.map((log, index) => (\r
                  <div key={index} className="text-sm font-mono text-gray-700">\r
                    {log}\r
                  </div>\r
                ))}\r
              </div>\r
            )}\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">\r
        <p className="text-sm text-yellow-800">\r
          💡 每个表单字段都通过 useImperativeHandle 暴露了验证、重置、聚焦等方法，父组件可以统一控制。\r
        </p>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default FormControlDemo;`,U=`import React, { useState, useRef, useImperativeHandle, forwardRef, useEffect } from 'react';

// 媒体播放器控制演示
interface MediaPlayerRef {
  play: () => void;
  pause: () => void;
  stop: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  isPlaying: () => boolean;
}

interface MediaPlayerProps {
  src: string;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onPlayStateChange?: (isPlaying: boolean) => void;
}

const MediaPlayer = forwardRef<MediaPlayerRef, MediaPlayerProps>(
  ({ src, onTimeUpdate, onPlayStateChange }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef<HTMLAudioElement>(null);

    useImperativeHandle(ref, () => ({
      play: async () => {
        if (audioRef.current) {
          try {
            await audioRef.current.play();
          } catch (error) {
            console.warn('播放失败:', error);
          }
        }
      },
      pause: () => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      },
      stop: () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          setCurrentTime(0);
          setIsPlaying(false);
          onPlayStateChange?.(false);
        }
      },
      seek: (time: number) => {
        if (audioRef.current && !isNaN(time) && time >= 0) {
          const seekTime = Math.min(time, audioRef.current.duration || 0);
          audioRef.current.currentTime = seekTime;
          setCurrentTime(seekTime);
        }
      },
      setVolume: (vol: number) => {
        if (audioRef.current) {
          const volume = Math.max(0, Math.min(1, vol));
          audioRef.current.volume = volume;
          setVolume(volume);
        }
      },
      getCurrentTime: () => audioRef.current?.currentTime || 0,
      getDuration: () => audioRef.current?.duration || 0,
      isPlaying: () => audioRef.current ? !audioRef.current.paused : false
    }), [onPlayStateChange]);

    const handlePlay = () => {
      setIsPlaying(true);
      onPlayStateChange?.(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
      onPlayStateChange?.(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      onPlayStateChange?.(false);
    };

    const handleTimeUpdate = () => {
      if (audioRef.current) {
        const current = audioRef.current.currentTime;
        const total = audioRef.current.duration || 0;
        setCurrentTime(current);
        onTimeUpdate?.(current, total);
      }
    };

    const handleLoadedMetadata = () => {
      if (audioRef.current) {
        const total = audioRef.current.duration || 0;
        setDuration(total);
        onTimeUpdate?.(0, total);
      }
    };

    const handleCanPlay = () => {
      // 音频可以播放时的处理
      if (audioRef.current) {
        setVolume(audioRef.current.volume);
      }
    };

    const formatTime = (time: number) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return \`\${minutes}:\${seconds.toString().padStart(2, '0')}\`;
    };

    return (
      <div className="p-4 bg-gray-100 rounded-lg border">
        <audio
          ref={audioRef}
          src={src}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onCanPlay={handleCanPlay}
          preload="metadata"
          crossOrigin="anonymous"
        />
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{formatTime(currentTime)}</span>
            <span className="font-medium">音频播放器</span>
            <span>{formatTime(duration)}</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-100"
              style={{
                width: duration > 0 ? \`\${(currentTime / duration) * 100}%\` : '0%'
              }}
            />
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <div className={\`w-3 h-3 rounded-full \${
              isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
            }\`} />
            <span className="text-sm text-gray-600">
              {isPlaying ? '播放中' : '已暂停'}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">音量:</span>
            <div className="flex-1 bg-gray-200 rounded-full h-1">
              <div
                className="bg-blue-400 h-1 rounded-full"
                style={{ width: \`\${volume * 100}%\` }}
              />
            </div>
            <span className="text-xs text-gray-500 w-8">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>
      </div>
    );
  }
);

MediaPlayer.displayName = 'MediaPlayer';

const MediaControlDemo: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [playbackInfo, setPlaybackInfo] = useState({ currentTime: 0, duration: 0, isPlaying: false });
  const playerRef = useRef<MediaPlayerRef>(null);

  // 创建一个简单的音频文件 (440Hz正弦波，持续2秒)
  const createAudioSrc = () => {
    // 创建一个简单的WAV文件
    const sampleRate = 44100;
    const duration = 2; // 2秒
    const frequency = 440; // A4音符
    const samples = sampleRate * duration;
    
    // WAV文件头
    const buffer = new ArrayBuffer(44 + samples * 2);
    const view = new DataView(buffer);
    
    // RIFF header
    const writeString = (offset: number, string: string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };
    
    writeString(0, 'RIFF');
    view.setUint32(4, 36 + samples * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(36, 'data');
    view.setUint32(40, samples * 2, true);
    
    // 生成正弦波数据
    for (let i = 0; i < samples; i++) {
      const sample = Math.sin(2 * Math.PI * frequency * i / sampleRate) * 0.3;
      view.setInt16(44 + i * 2, sample * 32767, true);
    }
    
    const blob = new Blob([buffer], { type: 'audio/wav' });
    return URL.createObjectURL(blob);
  };
  
  const [audioSrc] = useState(() => createAudioSrc());

  // 清理资源
  useEffect(() => {
    return () => {
      if (audioSrc.startsWith('blob:')) {
        URL.revokeObjectURL(audioSrc);
      }
    };
  }, [audioSrc]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-5), \`\${timestamp}: \${message}\`]);
  };

  const handlePlay = async () => {
    try {
      await playerRef.current?.play();
      addLog('开始播放音频');
    } catch (error) {
      addLog('播放失败: ' + (error as Error).message);
    }
  };

  const handlePause = () => {
    playerRef.current?.pause();
    addLog('暂停音频');
  };

  const handleStop = () => {
    playerRef.current?.stop();
    addLog('停止音频并重置到开头');
  };

  const handleSeek = (percentage: number) => {
    const duration = playerRef.current?.getDuration() || 0;
    if (duration > 0) {
      const seekTime = (percentage / 100) * duration;
      playerRef.current?.seek(seekTime);
      addLog(\`跳转到 \${percentage}% (\${seekTime.toFixed(1)}s)\`);
    } else {
      addLog('音频尚未加载完成，无法跳转');
    }
  };

  const handleVolumeChange = (volume: number) => {
    playerRef.current?.setVolume(volume / 100);
    addLog(\`设置音量为 \${volume}%\`);
  };

  const getPlayerInfo = () => {
    const currentTime = playerRef.current?.getCurrentTime() || 0;
    const duration = playerRef.current?.getDuration() || 0;
    const isPlaying = playerRef.current?.isPlaying() || false;
    
    addLog(\`播放信息 - 当前: \${currentTime.toFixed(1)}s / 总长: \${duration.toFixed(1)}s / 状态: \${isPlaying ? '播放中' : '已暂停'}\`);
  };

  const handleTimeUpdate = (currentTime: number, duration: number) => {
    setPlaybackInfo(prev => ({ ...prev, currentTime, duration }));
  };

  const handlePlayStateChange = (isPlaying: boolean) => {
    setPlaybackInfo(prev => ({ ...prev, isPlaying }));
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">媒体播放器控制</h3>
        <button
          onClick={clearLogs}
          className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
        >
          清空日志
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <MediaPlayer
            ref={playerRef}
            src={audioSrc}
            onTimeUpdate={handleTimeUpdate}
            onPlayStateChange={handlePlayStateChange}
          />
          
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={handlePlay}
              className="px-3 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
            >
              播放
            </button>
            <button
              onClick={handlePause}
              className="px-3 py-2 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 transition-colors"
            >
              暂停
            </button>
            <button
              onClick={handleStop}
              className="px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
            >
              停止
            </button>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">快速跳转:</label>
            <div className="grid grid-cols-4 gap-1">
              {[0, 25, 50, 75].map(percentage => (
                <button
                  key={percentage}
                  onClick={() => handleSeek(percentage)}
                  className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs hover:bg-blue-200 transition-colors"
                >
                  {percentage}%
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">音量控制:</label>
            <div className="grid grid-cols-4 gap-1">
              {[0, 30, 60, 100].map(volume => (
                <button
                  key={volume}
                  onClick={() => handleVolumeChange(volume)}
                  className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs hover:bg-purple-200 transition-colors"
                >
                  {volume}%
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={getPlayerInfo}
            className="w-full px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            获取播放信息
          </button>
          
          <div className="p-3 bg-blue-50 rounded border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-1">实时状态:</h4>
            <div className="text-sm text-blue-700 space-y-1">
              <p>播放状态: {playbackInfo.isPlaying ? '播放中' : '已暂停'}</p>
              <p>当前时间: {playbackInfo.currentTime.toFixed(1)}s</p>
              <p>总时长: {playbackInfo.duration.toFixed(1)}s</p>
              <p>进度: {playbackInfo.duration > 0 ? ((playbackInfo.currentTime / playbackInfo.duration) * 100).toFixed(1) : 0}%</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">操作日志:</h4>
          <div className="bg-gray-50 rounded-lg p-3 min-h-[400px]">
            {logs.length === 0 ? (
              <p className="text-gray-500 text-sm">使用播放器控制查看操作日志</p>
            ) : (
              <div className="space-y-1 max-h-80 overflow-y-auto">
                {logs.map((log, index) => (
                  <div key={index} className="text-sm font-mono text-gray-700">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-purple-50 rounded border border-purple-200">
        <p className="text-sm text-purple-800">
          💡 媒体播放器通过 useImperativeHandle 暴露了完整的控制接口，父组件可以精确控制播放行为。
        </p>
      </div>
    </div>
  );
};

export default MediaControlDemo;`,A=()=>e.jsx(S,{title:"useImperativeHandle",description:"React 中用于自定义 ref 暴露给父组件的实例值的 Hook。它允许你在使用 forwardRef 时自定义暴露给父组件的 ref 值，而不是暴露整个 DOM 节点。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 自定义 ref 暴露的值"}),e.jsx("li",{children:"• 必须与 forwardRef 配合使用"}),e.jsx("li",{children:"• 控制父子组件间的接口"}),e.jsx("li",{children:"• 封装组件内部实现细节"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 提供清晰的组件接口"}),e.jsx("li",{children:"• 隐藏内部实现细节"}),e.jsx("li",{children:"• 支持复杂的组件控制"}),e.jsx("li",{children:"• 提高组件的可维护性"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 表单组件的验证和控制"}),e.jsx("li",{children:"• 媒体播放器控制"}),e.jsx("li",{children:"• 复杂 UI 组件的操作接口"}),e.jsx("li",{children:"• 第三方库的 React 封装"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 避免过度使用，优先使用 props"}),e.jsx("li",{children:"• 必须与 forwardRef 配合"}),e.jsx("li",{children:"• 注意依赖项数组的设置"}),e.jsx("li",{children:"• 保持接口的简洁性"})]})]})]})}),examples:[{title:"自定义输入框控制",component:e.jsx(M,{}),description:"演示如何使用 useImperativeHandle 创建可控制的自定义输入框组件",observationPoints:["点击各种控制按钮，观察输入框的响应","注意父组件如何调用子组件的方法","观察操作日志中的方法调用记录",'输入内容后点击"获取值"查看当前值','使用"设置随机值"观察程序化设置内容'],keyPoints:["useImperativeHandle 定义了暴露给父组件的接口","父组件通过 ref 调用子组件的方法","子组件内部实现被完全封装","提供了清晰的组件控制接口"],commonTraps:["直接暴露 DOM 元素而不是自定义接口","忘记使用 forwardRef 包装组件","依赖项数组设置不正确"],solutions:["使用 useImperativeHandle 自定义暴露的方法","用 forwardRef 包装需要暴露 ref 的组件","正确设置依赖项数组"],codeExample:{code:H,highlights:[10,20,30],title:"自定义输入框控制源码"}},{title:"表单字段控制",component:e.jsx($,{}),description:"演示在复杂表单中使用 useImperativeHandle 进行统一的字段控制和验证",observationPoints:["填写表单字段，观察实时验证效果",'点击"验证表单"查看整体验证结果','使用"聚焦错误"自动定位到错误字段','点击"重置表单"清空所有字段',"观察操作日志中的验证和控制记录"],keyPoints:["每个表单字段暴露统一的控制接口","父组件可以统一管理所有字段","支持复杂的验证逻辑","提供良好的用户体验"],commonTraps:["验证逻辑分散在各个组件中","缺乏统一的表单控制接口","忘记处理异步验证"],solutions:["使用 useImperativeHandle 统一表单接口","在父组件中集中管理表单状态","合理处理验证时机和反馈"],codeExample:{code:E,highlights:[12,22,32],title:"表单字段控制源码"}},{title:"媒体播放器控制",component:e.jsx(D,{}),description:"演示使用 useImperativeHandle 创建功能完整的媒体播放器控制接口",observationPoints:["使用播放、暂停、停止按钮控制音频","点击快速跳转按钮观察进度变化","调整音量控制观察音量变化",'点击"获取播放信息"查看当前状态',"观察实时状态面板的数据更新"],keyPoints:["媒体播放器暴露完整的控制接口","父组件可以精确控制播放行为","支持实时状态监听和反馈","封装了复杂的媒体操作逻辑"],commonTraps:["直接暴露 audio 元素而不是控制接口","缺乏状态同步机制","忽略媒体加载和错误处理"],solutions:["设计清晰的播放器控制接口","实现状态变化的回调机制","处理各种媒体事件和异常情况"],codeExample:{code:U,highlights:[15,25,35],title:"媒体播放器控制源码"}}],tutorial:{concepts:["useImperativeHandle 的基本语法和用法","与 forwardRef 的配合使用","自定义 ref 接口的设计原则","依赖项数组的正确设置","组件封装和接口设计的最佳实践"],steps:["从 React 中导入 useImperativeHandle 和 forwardRef","定义要暴露给父组件的接口类型","使用 forwardRef 包装组件","在组件内部使用 useImperativeHandle","定义暴露给父组件的方法和属性","设置正确的依赖项数组"],tips:["优先使用 props 和回调，只在必要时使用 useImperativeHandle","保持暴露接口的简洁和一致性","使用 TypeScript 定义清晰的接口类型","注意依赖项数组的设置，避免不必要的重新创建","考虑组件的可测试性和可维护性"]},interview:{questions:[{question:"useImperativeHandle 的作用是什么？",answer:"useImperativeHandle 允许你自定义暴露给父组件的 ref 值。它必须与 forwardRef 配合使用，可以让你控制父组件通过 ref 能够访问到的方法和属性，而不是暴露整个 DOM 节点或组件实例。"},{question:"什么时候应该使用 useImperativeHandle？",answer:"当需要暴露组件的命令式 API 时使用：1) 表单组件的验证和重置；2) 媒体播放器的控制；3) 复杂 UI 组件的操作接口；4) 第三方库的 React 封装。但应该优先使用 props 和回调，只在必要时使用。"},{question:"useImperativeHandle 和直接暴露 ref 有什么区别？",answer:"直接暴露 ref 会暴露整个 DOM 元素或组件实例，父组件可以访问所有属性和方法；useImperativeHandle 允许你精确控制暴露什么，隐藏内部实现细节，提供更清晰的组件接口。"},{question:"useImperativeHandle 的依赖项数组如何设置？",answer:"依赖项数组应该包含暴露方法中使用的所有变量和状态。如果依赖项变化，会重新创建暴露的对象。正确设置依赖项可以避免闭包陷阱，确保暴露的方法始终使用最新的值。"}],keyPoints:["必须与 forwardRef 配合使用","允许自定义暴露给父组件的接口","隐藏组件内部实现细节","提供清晰的组件控制接口","应该谨慎使用，优先考虑 props 方案"]},bestPractices:{dos:["与 forwardRef 配合使用","设计清晰简洁的接口","使用 TypeScript 定义接口类型","正确设置依赖项数组","保持接口的稳定性","提供完整的错误处理"],donts:["不要过度使用，优先使用 props","不要暴露过多的内部细节","不要忽略依赖项数组","不要在接口中包含不稳定的引用","不要破坏组件的封装性"],patterns:["命令式接口模式：暴露组件的控制方法","状态查询模式：提供组件状态的查询接口","生命周期控制模式：暴露组件的生命周期控制","复合操作模式：将多个操作组合成单一接口"]}});export{A as default};
