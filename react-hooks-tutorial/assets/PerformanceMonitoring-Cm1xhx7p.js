import{r as l,j as e}from"./index-D5aG88J3.js";import{C as L}from"./ComponentTemplate-DZf1RTVD.js";const _={enabled:!0,interval:1e3,maxDataPoints:100,thresholds:{FPS:{warning:30,critical:20},内存使用率:{warning:70,critical:85},页面加载时间:{warning:3e3,critical:5e3},DOM节点数:{warning:1e3,critical:1500}},autoReport:!1,reportInterval:6e4},A={metrics:[],isMonitoring:!1,config:_,alerts:[],reports:[]};function F(t,r){switch(r.type){case"ADD_METRIC":const x=[...t.metrics,r.payload],h=x.length>t.config.maxDataPoints?x.slice(-t.config.maxDataPoints):x;return{...t,metrics:h};case"SET_METRICS":return{...t,metrics:r.payload};case"SET_MONITORING":return{...t,isMonitoring:r.payload};case"UPDATE_CONFIG":return{...t,config:{...t.config,...r.payload}};case"ADD_ALERT":return{...t,alerts:[...t.alerts,r.payload]};case"ACKNOWLEDGE_ALERT":return{...t,alerts:t.alerts.map(c=>c.id===r.payload?{...c,acknowledged:!0}:c)};case"ADD_REPORT":return{...t,reports:[...t.reports,r.payload]};case"CLEAR_OLD_DATA":const b=new Date(Date.now()-60*60*1e3);return{...t,metrics:t.metrics.filter(c=>c.timestamp>b),alerts:t.alerts.filter(c=>c.timestamp>b)};default:return t}}function E(t){const[r,x]=l.useReducer(F,{...A,config:{...A.config,...t}}),h=l.useRef(null),b=l.useRef(null),c=l.useRef({frames:0,lastTime:performance.now()}),j=l.useCallback(()=>{const n=[],m=new Date,u=performance.now(),y=u-c.current.lastTime;if(y>=1e3){const M=c.current.frames*1e3/y;n.push({id:`fps-${Date.now()}`,name:"FPS",value:M,unit:"fps",timestamp:m,category:"runtime",threshold:r.config.thresholds.FPS}),c.current={frames:0,lastTime:u}}if(c.current.frames++,"memory"in performance){const M=performance.memory,P=M.usedJSHeapSize/M.jsHeapSizeLimit*100;n.push({id:`memory-${Date.now()}`,name:"内存使用率",value:P,unit:"%",timestamp:m,category:"memory",threshold:r.config.thresholds.内存使用率})}const w=document.querySelectorAll("*").length;return n.push({id:`dom-${Date.now()}`,name:"DOM节点数",value:w,unit:"个",timestamp:m,category:"runtime",threshold:r.config.thresholds.DOM节点数}),n},[r.config.thresholds]),i=l.useCallback(()=>{const n=[],m=new Date;if(performance.timing){const u=performance.timing.loadEventEnd-performance.timing.navigationStart;u>0&&n.push({id:`load-${Date.now()}`,name:"页面加载时间",value:u,unit:"ms",timestamp:m,category:"network",threshold:r.config.thresholds.页面加载时间})}return n},[r.config.thresholds]),p=l.useCallback(()=>{const n=[],m=new Date,u=Math.random()*50+10;return n.push({id:`interaction-${Date.now()}`,name:"交互延迟",value:u,unit:"ms",timestamp:m,category:"user"}),n},[]),o=l.useCallback(()=>{const n=j(),m=i(),u=p();return[...n,...m,...u]},[j,i,p]),N=l.useCallback(n=>{if(!n.threshold)return;const{warning:m,critical:u}=n.threshold;let y=null,w="";if(n.value>=u?(y="critical",w=`${n.name} 达到临界值: ${n.value.toFixed(1)}${n.unit} (阈值: ${u}${n.unit})`):n.value>=m&&(y="warning",w=`${n.name} 超过警告值: ${n.value.toFixed(1)}${n.unit} (阈值: ${m}${n.unit})`),y){const M={id:`alert-${Date.now()}-${Math.random()}`,metricId:n.id,level:y,message:w,timestamp:new Date,acknowledged:!1};x({type:"ADD_ALERT",payload:M})}},[]),g=l.useCallback(()=>{const n=new Date,m=new Date(n.getTime()-6e4),u=r.metrics.filter(f=>f.timestamp>=m),y={},w={};u.forEach(f=>{w[f.name]||(w[f.name]=[]),w[f.name].push(f)}),Object.entries(w).forEach(([f,D])=>{const R=D.reduce((I,O)=>I+O.value,0);y[f]=R/D.length});const M=[];Object.entries(y).forEach(([f,D])=>{const R=r.config.thresholds[f];R&&(D>=R.critical?M.push(`${f} 平均值达到临界水平`):D>=R.warning&&M.push(`${f} 平均值超过警告水平`))});const P={id:`report-${Date.now()}`,startTime:m,endTime:n,summary:{totalMetrics:u.length,averageValues:y,alerts:r.alerts.filter(f=>f.timestamp>=m).length,issues:M}};return x({type:"ADD_REPORT",payload:P}),P},[r.metrics,r.alerts,r.config.thresholds]),C=l.useCallback(()=>{if(r.isMonitoring)return;x({type:"SET_MONITORING",payload:!0}),h.current=setInterval(()=>{o().forEach(u=>{x({type:"ADD_METRIC",payload:u}),N(u)})},r.config.interval),r.config.autoReport&&(b.current=setInterval(()=>{g()},r.config.reportInterval));const n=setInterval(()=>{x({type:"CLEAR_OLD_DATA"})},3e5);return()=>{clearInterval(n)}},[r.isMonitoring,r.config.interval,r.config.autoReport,r.config.reportInterval,o,N,g]),v=l.useCallback(()=>{x({type:"SET_MONITORING",payload:!1}),h.current&&(clearInterval(h.current),h.current=null),b.current&&(clearInterval(b.current),b.current=null)},[]),k=l.useCallback(n=>{x({type:"UPDATE_CONFIG",payload:n})},[]),T=l.useCallback(n=>{x({type:"ACKNOWLEDGE_ALERT",payload:n})},[]),a=l.useCallback(()=>{x({type:"CLEAR_OLD_DATA"})},[]),s=l.useMemo(()=>{const n=new Map;return r.metrics.forEach(m=>{const u=n.get(m.name);(!u||m.timestamp>u.timestamp)&&n.set(m.name,m)}),Array.from(n.values())},[r.metrics]),d=l.useMemo(()=>r.alerts.filter(n=>!n.acknowledged),[r.alerts]);return l.useEffect(()=>()=>{v()},[v]),{...r,latestMetrics:s,unacknowledgedAlerts:d,startMonitoring:C,stopMonitoring:v,updateConfig:k,acknowledgeAlert:T,clearOldData:a,generateReport:g}}const V=()=>{const t=E({interval:500,maxDataPoints:200,autoReport:!0}),[r,x]=l.useState(null),[h,b]=l.useState("overview"),[c,j]=l.useState("idle"),[i,p]=l.useState(new Date);l.useEffect(()=>{t.isMonitoring||(t.startMonitoring(),p(new Date))},[t]);const o=l.useCallback(a=>{switch(j(a),a){case"cpu":{const s=performance.now();for(;performance.now()-s<2e3;);break}case"memory":{const s=new Array(1e6).fill(0).map(()=>({id:Math.random(),data:new Array(100).fill(Math.random())}));setTimeout(()=>{s.length=0},3e3);break}case"dom":{const s=document.createElement("div");document.body.appendChild(s);for(let d=0;d<1e3;d++){const n=document.createElement("div");n.textContent=`Element ${d}`,n.style.cssText=`
            position: absolute;
            left: ${Math.random()*100}px;
            top: ${Math.random()*100}px;
            background: rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255});
          `,s.appendChild(n)}setTimeout(()=>{document.body.removeChild(s)},3e3);break}}setTimeout(()=>j("idle"),3e3)},[]),N=l.useCallback(a=>{if(a.length===0)return 0;let s=100;if(a.slice(-20).forEach(n=>{if(n.threshold){const{warning:m,critical:u}=n.threshold;n.value>=u?s-=25:n.value>=m&&(s-=15)}else n.name==="FPS"&&n.value<30?s-=20:n.name==="内存使用率"&&n.value>80?s-=15:n.name==="DOM节点数"&&n.value>2e3?s-=10:n.name==="页面加载时间"&&n.value>5e3&&(s-=20)}),t.isMonitoring){const n=Date.now()-i.getTime();n>6e4&&(s+=5),n>3e5&&(s+=5)}return Math.max(0,Math.min(100,s))},[t.isMonitoring,i]),g=l.useCallback(a=>{const s=[],{averageValues:d}=a.summary;return d.FPS&&d.FPS<30&&s.push("优化渲染性能：减少不必要的重新渲染，使用 React.memo 和 useMemo"),d.内存使用率&&d.内存使用率>70&&s.push("优化内存使用：及时清理不需要的对象，避免内存泄漏"),d.页面加载时间&&d.页面加载时间>3e3&&s.push("优化加载性能：使用代码分割、懒加载和资源压缩"),d.DOM节点数&&d.DOM节点数>1500&&s.push("优化DOM结构：减少DOM节点数量，使用虚拟滚动"),s.length===0&&s.push("性能表现良好，继续保持当前的优化策略"),s},[]),C=a=>{if(!a.threshold)return"text-gray-600";const{warning:s,critical:d}=a.threshold;return a.value>=d?"text-red-600":a.value>=s?"text-yellow-600":"text-green-600"},v=N(t.metrics),k=v>=80?"text-green-600":v>=60?"text-yellow-600":"text-red-600",T=()=>{if(!t.isMonitoring)return"已停止";const a=Date.now()-i.getTime(),s=Math.floor(a/6e4),d=Math.floor(a%6e4/1e3);return s>0?`${s}分${d}秒`:`${d}秒`};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"高级性能分析"}),e.jsxs("div",{className:"mb-6 grid grid-cols-1 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg",children:[e.jsx("div",{className:"text-sm text-blue-600 mb-1",children:"性能评分"}),e.jsxs("div",{className:`text-3xl font-bold ${k}`,children:[v,e.jsx("span",{className:"text-sm font-normal",children:"/100"})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg",children:[e.jsx("div",{className:"text-sm text-green-600 mb-1",children:"监控时长"}),e.jsx("div",{className:"text-3xl font-bold text-green-600",children:T()})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg",children:[e.jsx("div",{className:"text-sm text-purple-600 mb-1",children:"数据点数"}),e.jsx("div",{className:"text-3xl font-bold text-purple-600",children:t.metrics.length})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg",children:[e.jsx("div",{className:"text-sm text-orange-600 mb-1",children:"活跃告警"}),e.jsx("div",{className:"text-3xl font-bold text-orange-600",children:t.unacknowledgedAlerts.length})]})]}),e.jsxs("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:"性能压力测试"}),e.jsxs("div",{className:"flex items-center space-x-3 mb-3",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"当前状态:"}),e.jsx("span",{className:`text-sm font-medium px-2 py-1 rounded ${c==="idle"?"bg-green-100 text-green-800":c==="cpu"?"bg-red-100 text-red-800":c==="memory"?"bg-yellow-100 text-yellow-800":"bg-blue-100 text-blue-800"}`,children:c==="idle"?"空闲":c==="cpu"?"CPU测试中":c==="memory"?"内存测试中":"DOM测试中"})]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:()=>o("cpu"),disabled:c!=="idle",className:`px-3 py-1 rounded text-sm ${c!=="idle"?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-red-500 text-white hover:bg-red-600"}`,children:"CPU 压力测试"}),e.jsx("button",{onClick:()=>o("memory"),disabled:c!=="idle",className:`px-3 py-1 rounded text-sm ${c!=="idle"?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-yellow-500 text-white hover:bg-yellow-600"}`,children:"内存压力测试"}),e.jsx("button",{onClick:()=>o("dom"),disabled:c!=="idle",className:`px-3 py-1 rounded text-sm ${c!=="idle"?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"DOM 压力测试"})]})]}),e.jsx("div",{className:"mb-6",children:e.jsx("div",{className:"flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit",children:[{key:"overview",label:"概览"},{key:"details",label:"详情"},{key:"comparison",label:"对比"}].map(a=>e.jsx("button",{onClick:()=>b(a.key),className:`px-4 py-2 rounded-md text-sm font-medium transition-colors ${h===a.key?"bg-white text-blue-600 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:a.label},a.key))})}),h==="overview"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium text-gray-800",children:"性能概览"}),t.latestMetrics.length>0?e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:t.latestMetrics.map(a=>e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"font-medium",children:a.name}),e.jsx("span",{className:`text-sm px-2 py-1 rounded ${a.category==="runtime"?"bg-blue-100 text-blue-800":a.category==="network"?"bg-green-100 text-green-800":a.category==="memory"?"bg-purple-100 text-purple-800":"bg-orange-100 text-orange-800"}`,children:a.category})]}),e.jsxs("div",{className:`text-xl font-bold ${C(a)}`,children:[a.value.toFixed(1)," ",a.unit]}),a.threshold&&e.jsxs("div",{className:"text-xs text-gray-500 mt-1",children:["警告: ",a.threshold.warning,a.unit," | 临界: ",a.threshold.critical,a.unit]})]},a.id))}):e.jsx("div",{className:"text-center text-gray-500 py-8",children:"正在收集性能数据，请稍候..."})]}),h==="details"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium text-gray-800",children:"详细分析"}),t.reports.length>0?e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex space-x-2 overflow-x-auto",children:t.reports.map(a=>e.jsx("button",{onClick:()=>x(a),className:`px-3 py-2 rounded text-sm whitespace-nowrap ${(r==null?void 0:r.id)===a.id?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:a.endTime.toLocaleString()},a.id))}),r&&e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsxs("h5",{className:"font-medium mb-3",children:["报告时间: ",r.startTime.toLocaleString()," -"," ",r.endTime.toLocaleString()]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"font-medium text-gray-800 mb-2",children:"平均值"}),e.jsx("div",{className:"space-y-1",children:Object.entries(r.summary.averageValues).map(([a,s])=>e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsxs("span",{children:[a,":"]}),e.jsx("span",{className:"font-medium",children:s.toFixed(2)})]},a))})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"font-medium text-gray-800 mb-2",children:"统计信息"}),e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"总指标数:"}),e.jsx("span",{className:"font-medium",children:r.summary.totalMetrics})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"告警数:"}),e.jsx("span",{className:"font-medium",children:r.summary.alerts})]})]})]})]}),r.summary.issues.length>0&&e.jsxs("div",{className:"mb-4",children:[e.jsx("h6",{className:"font-medium text-gray-800 mb-2",children:"发现的问题"}),e.jsx("ul",{className:"space-y-1",children:r.summary.issues.map((a,s)=>e.jsxs("li",{className:"text-sm text-red-600 flex items-start",children:[e.jsx("span",{className:"mr-2",children:"•"}),e.jsx("span",{children:a})]},s))})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"font-medium text-gray-800 mb-2",children:"优化建议"}),e.jsx("ul",{className:"space-y-1",children:g(r).map((a,s)=>e.jsxs("li",{className:"text-sm text-blue-600 flex items-start",children:[e.jsx("span",{className:"mr-2",children:"•"}),e.jsx("span",{children:a})]},s))})]})]})]}):e.jsx("div",{className:"text-center text-gray-500 py-8",children:"暂无性能报告，请先开始监控并生成报告"})]}),h==="comparison"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium text-gray-800",children:"性能对比"}),e.jsx("div",{className:"p-4 border border-gray-200 rounded-lg",children:e.jsxs("div",{className:"text-center text-gray-500 py-8",children:["性能对比功能开发中...",e.jsx("br",{}),"将支持不同时间段的性能指标对比分析"]})})]}),e.jsxs("div",{className:"mt-6 p-3 bg-purple-50 border border-purple-200 rounded",children:[e.jsx("h4",{className:"font-medium text-purple-800 mb-2",children:"高级分析功能："}),e.jsxs("div",{className:"text-sm text-purple-700 space-y-1",children:[e.jsx("p",{children:"• 性能评分：基于多个指标计算综合性能分数"}),e.jsx("p",{children:"• 压力测试：模拟不同类型的性能压力场景"}),e.jsx("p",{children:"• 详细报告：生成包含问题分析和优化建议的报告"}),e.jsx("p",{children:"• 历史对比：对比不同时间段的性能表现"}),e.jsx("p",{children:"• 智能建议：基于性能数据提供优化建议"})]})]})]})})},G=`import { PerformanceMetric, PerformanceReport } from "./types";
import React, { useCallback, useEffect, useState } from "react";

import { usePerformanceMonitoring } from "./usePerformanceMonitoring";

// 高级性能分析示例组件
export const AdvancedPerformanceAnalysisDemo: React.FC = () => {
  const monitoring = usePerformanceMonitoring({
    interval: 500,
    maxDataPoints: 200,
    autoReport: true,
  });

  const [selectedReport, setSelectedReport] =
    useState<PerformanceReport | null>(null);
  const [analysisView, setAnalysisView] = useState<
    "overview" | "details" | "comparison"
  >("overview");
  const [performanceTest, setPerformanceTest] = useState<
    "idle" | "cpu" | "memory" | "dom"
  >("idle");
  const [monitoringStartTime, setMonitoringStartTime] = useState<Date>(
    new Date()
  );

  // 自动启动监控
  useEffect(() => {
    if (!monitoring.isMonitoring) {
      monitoring.startMonitoring();
      setMonitoringStartTime(new Date());
    }
  }, [monitoring]);

  // 性能压力测试
  const runPerformanceTest = useCallback(
    (testType: "cpu" | "memory" | "dom") => {
      setPerformanceTest(testType);

      switch (testType) {
        case "cpu": {
          // CPU 密集型任务
          const startTime = performance.now();
          while (performance.now() - startTime < 2000) {
            // 执行CPU密集型计算
            for (let i = 0; i < 1000; i++) {
              Math.sqrt(Math.random() * 1000);
            }
          }
          break;
        }

        case "memory": {
          // 内存密集型任务
          const largeArray = new Array(1000000).fill(0).map(() => ({
            id: Math.random(),
            data: new Array(100).fill(Math.random()),
          }));
          setTimeout(() => {
            largeArray.length = 0; // 清理
          }, 3000);
          break;
        }

        case "dom": {
          // DOM 操作密集型任务
          const container = document.createElement("div");
          document.body.appendChild(container);
          for (let i = 0; i < 1000; i++) {
            const element = document.createElement("div");
            element.textContent = \`Element \${i}\`;
            element.style.cssText = \`
            position: absolute;
            left: \${Math.random() * 100}px;
            top: \${Math.random() * 100}px;
            background: rgb(\${Math.random() * 255}, \${Math.random() * 255}, \${
              Math.random() * 255
            });
          \`;
            container.appendChild(element);
          }
          setTimeout(() => {
            document.body.removeChild(container);
          }, 3000);
          break;
        }
      }

      setTimeout(() => setPerformanceTest("idle"), 3000);
    },
    []
  );

  // 获取性能评分
  const getPerformanceScore = useCallback(
    (metrics: PerformanceMetric[]) => {
      if (metrics.length === 0) return 0;

      let score = 100;
      const latestMetrics = metrics.slice(-20); // 最近20个数据点

      // 检查各种性能指标
      latestMetrics.forEach((metric) => {
        if (metric.threshold) {
          const { warning, critical } = metric.threshold;
          if (metric.value >= critical) {
            score -= 25; // 临界值扣分更多
          } else if (metric.value >= warning) {
            score -= 15; // 警告值扣分
          }
        } else {
          // 没有阈值的指标，根据经验值判断
          if (metric.name === "FPS" && metric.value < 30) {
            score -= 20;
          } else if (metric.name === "内存使用率" && metric.value > 80) {
            score -= 15;
          } else if (metric.name === "DOM节点数" && metric.value > 2000) {
            score -= 10;
          } else if (metric.name === "页面加载时间" && metric.value > 5000) {
            score -= 20;
          }
        }
      });

      // 根据监控时长给予奖励分
      if (monitoring.isMonitoring) {
        const monitoringDuration = Date.now() - monitoringStartTime.getTime();
        if (monitoringDuration > 60000) {
          // 超过1分钟
          score += 5;
        }
        if (monitoringDuration > 300000) {
          // 超过5分钟
          score += 5;
        }
      }

      return Math.max(0, Math.min(100, score));
    },
    [monitoring.isMonitoring, monitoringStartTime]
  );

  // 性能建议
  const getPerformanceRecommendations = useCallback(
    (report: PerformanceReport) => {
      const recommendations: string[] = [];
      const { averageValues } = report.summary;

      if (averageValues["FPS"] && averageValues["FPS"] < 30) {
        recommendations.push(
          "优化渲染性能：减少不必要的重新渲染，使用 React.memo 和 useMemo"
        );
      }

      if (averageValues["内存使用率"] && averageValues["内存使用率"] > 70) {
        recommendations.push(
          "优化内存使用：及时清理不需要的对象，避免内存泄漏"
        );
      }

      if (
        averageValues["页面加载时间"] &&
        averageValues["页面加载时间"] > 3000
      ) {
        recommendations.push("优化加载性能：使用代码分割、懒加载和资源压缩");
      }

      if (averageValues["DOM节点数"] && averageValues["DOM节点数"] > 1500) {
        recommendations.push("优化DOM结构：减少DOM节点数量，使用虚拟滚动");
      }

      // 添加通用建议
      if (recommendations.length === 0) {
        recommendations.push("性能表现良好，继续保持当前的优化策略");
      }

      return recommendations;
    },
    []
  );

  // 获取指标状态颜色
  const getMetricStatusColor = (metric: PerformanceMetric) => {
    if (!metric.threshold) return "text-gray-600";

    const { warning, critical } = metric.threshold;
    if (metric.value >= critical) return "text-red-600";
    if (metric.value >= warning) return "text-yellow-600";
    return "text-green-600";
  };

  const performanceScore = getPerformanceScore(monitoring.metrics);
  const scoreColor =
    performanceScore >= 80
      ? "text-green-600"
      : performanceScore >= 60
      ? "text-yellow-600"
      : "text-red-600";

  // 获取监控时长显示
  const getMonitoringDuration = () => {
    if (!monitoring.isMonitoring) return "已停止";

    const duration = Date.now() - monitoringStartTime.getTime();
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);

    if (minutes > 0) {
      return \`\${minutes}分\${seconds}秒\`;
    }
    return \`\${seconds}秒\`;
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">高级性能分析</h3>

        {/* 性能概览 */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
            <div className="text-sm text-blue-600 mb-1">性能评分</div>
            <div className={\`text-3xl font-bold \${scoreColor}\`}>
              {performanceScore}
              <span className="text-sm font-normal">/100</span>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
            <div className="text-sm text-green-600 mb-1">监控时长</div>
            <div className="text-3xl font-bold text-green-600">
              {getMonitoringDuration()}
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
            <div className="text-sm text-purple-600 mb-1">数据点数</div>
            <div className="text-3xl font-bold text-purple-600">
              {monitoring.metrics.length}
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
            <div className="text-sm text-orange-600 mb-1">活跃告警</div>
            <div className="text-3xl font-bold text-orange-600">
              {monitoring.unacknowledgedAlerts.length}
            </div>
          </div>
        </div>

        {/* 性能测试 */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-3">性能压力测试</h4>
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-sm text-gray-600">当前状态:</span>
            <span
              className={\`text-sm font-medium px-2 py-1 rounded \${
                performanceTest === "idle"
                  ? "bg-green-100 text-green-800"
                  : performanceTest === "cpu"
                  ? "bg-red-100 text-red-800"
                  : performanceTest === "memory"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-blue-100 text-blue-800"
              }\`}
            >
              {performanceTest === "idle"
                ? "空闲"
                : performanceTest === "cpu"
                ? "CPU测试中"
                : performanceTest === "memory"
                ? "内存测试中"
                : "DOM测试中"}
            </span>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => runPerformanceTest("cpu")}
              disabled={performanceTest !== "idle"}
              className={\`px-3 py-1 rounded text-sm \${
                performanceTest !== "idle"
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-red-500 text-white hover:bg-red-600"
              }\`}
            >
              CPU 压力测试
            </button>
            <button
              onClick={() => runPerformanceTest("memory")}
              disabled={performanceTest !== "idle"}
              className={\`px-3 py-1 rounded text-sm \${
                performanceTest !== "idle"
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-yellow-500 text-white hover:bg-yellow-600"
              }\`}
            >
              内存压力测试
            </button>
            <button
              onClick={() => runPerformanceTest("dom")}
              disabled={performanceTest !== "idle"}
              className={\`px-3 py-1 rounded text-sm \${
                performanceTest !== "idle"
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }\`}
            >
              DOM 压力测试
            </button>
          </div>
        </div>

        {/* 分析视图切换 */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            {[
              { key: "overview", label: "概览" },
              { key: "details", label: "详情" },
              { key: "comparison", label: "对比" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setAnalysisView(tab.key as any)}
                className={\`px-4 py-2 rounded-md text-sm font-medium transition-colors \${
                  analysisView === tab.key
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }\`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 分析内容 */}
        {analysisView === "overview" && (
          <div className="space-y-4">
            <h4 className="font-medium text-gray-800">性能概览</h4>
            {monitoring.latestMetrics.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {monitoring.latestMetrics.map((metric) => (
                  <div
                    key={metric.id}
                    className="p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{metric.name}</span>
                      <span
                        className={\`text-sm px-2 py-1 rounded \${
                          metric.category === "runtime"
                            ? "bg-blue-100 text-blue-800"
                            : metric.category === "network"
                            ? "bg-green-100 text-green-800"
                            : metric.category === "memory"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-orange-100 text-orange-800"
                        }\`}
                      >
                        {metric.category}
                      </span>
                    </div>
                    <div
                      className={\`text-xl font-bold \${getMetricStatusColor(
                        metric
                      )}\`}
                    >
                      {metric.value.toFixed(1)} {metric.unit}
                    </div>
                    {metric.threshold && (
                      <div className="text-xs text-gray-500 mt-1">
                        警告: {metric.threshold.warning}
                        {metric.unit} | 临界: {metric.threshold.critical}
                        {metric.unit}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                正在收集性能数据，请稍候...
              </div>
            )}
          </div>
        )}

        {analysisView === "details" && (
          <div className="space-y-4">
            <h4 className="font-medium text-gray-800">详细分析</h4>
            {monitoring.reports.length > 0 ? (
              <div className="space-y-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {monitoring.reports.map((report) => (
                    <button
                      key={report.id}
                      onClick={() => setSelectedReport(report)}
                      className={\`px-3 py-2 rounded text-sm whitespace-nowrap \${
                        selectedReport?.id === report.id
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }\`}
                    >
                      {report.endTime.toLocaleString()}
                    </button>
                  ))}
                </div>

                {selectedReport && (
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h5 className="font-medium mb-3">
                      报告时间: {selectedReport.startTime.toLocaleString()} -{" "}
                      {selectedReport.endTime.toLocaleString()}
                    </h5>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h6 className="font-medium text-gray-800 mb-2">
                          平均值
                        </h6>
                        <div className="space-y-1">
                          {Object.entries(
                            selectedReport.summary.averageValues
                          ).map(([name, value]) => (
                            <div
                              key={name}
                              className="flex justify-between text-sm"
                            >
                              <span>{name}:</span>
                              <span className="font-medium">
                                {value.toFixed(2)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h6 className="font-medium text-gray-800 mb-2">
                          统计信息
                        </h6>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>总指标数:</span>
                            <span className="font-medium">
                              {selectedReport.summary.totalMetrics}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>告警数:</span>
                            <span className="font-medium">
                              {selectedReport.summary.alerts}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {selectedReport.summary.issues.length > 0 && (
                      <div className="mb-4">
                        <h6 className="font-medium text-gray-800 mb-2">
                          发现的问题
                        </h6>
                        <ul className="space-y-1">
                          {selectedReport.summary.issues.map((issue, index) => (
                            <li
                              key={index}
                              className="text-sm text-red-600 flex items-start"
                            >
                              <span className="mr-2">•</span>
                              <span>{issue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h6 className="font-medium text-gray-800 mb-2">
                        优化建议
                      </h6>
                      <ul className="space-y-1">
                        {getPerformanceRecommendations(selectedReport).map(
                          (rec, index) => (
                            <li
                              key={index}
                              className="text-sm text-blue-600 flex items-start"
                            >
                              <span className="mr-2">•</span>
                              <span>{rec}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                暂无性能报告，请先开始监控并生成报告
              </div>
            )}
          </div>
        )}

        {analysisView === "comparison" && (
          <div className="space-y-4">
            <h4 className="font-medium text-gray-800">性能对比</h4>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="text-center text-gray-500 py-8">
                性能对比功能开发中...
                <br />
                将支持不同时间段的性能指标对比分析
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 p-3 bg-purple-50 border border-purple-200 rounded">
          <h4 className="font-medium text-purple-800 mb-2">高级分析功能：</h4>
          <div className="text-sm text-purple-700 space-y-1">
            <p>• 性能评分：基于多个指标计算综合性能分数</p>
            <p>• 压力测试：模拟不同类型的性能压力场景</p>
            <p>• 详细报告：生成包含问题分析和优化建议的报告</p>
            <p>• 历史对比：对比不同时间段的性能表现</p>
            <p>• 智能建议：基于性能数据提供优化建议</p>
          </div>
        </div>
      </div>
    </div>
  );
};
`,U=()=>{const t=E({interval:1e3,maxDataPoints:50}),[r,x]=l.useState(null),h=l.useRef(null),b=l.useCallback(i=>{const p=h.current;if(!p)return;const o=p.getContext("2d");if(!o)return;const N=t.metrics.filter(s=>s.name===i);if(N.length===0)return;o.clearRect(0,0,p.width,p.height),o.strokeStyle="#3b82f6",o.lineWidth=2,o.fillStyle="rgba(59, 130, 246, 0.1)";const g=40,C=p.width-g*2,v=p.height-g*2,k=Math.max(...N.map(s=>s.value)),T=Math.min(...N.map(s=>s.value)),a=k-T||1;o.strokeStyle="#e5e7eb",o.lineWidth=1;for(let s=0;s<=5;s++){const d=g+v/5*s;o.beginPath(),o.moveTo(g,d),o.lineTo(p.width-g,d),o.stroke()}o.strokeStyle="#3b82f6",o.lineWidth=2,o.beginPath(),N.forEach((s,d)=>{const n=g+C/(N.length-1)*d,m=g+v-(s.value-T)/a*v;d===0?o.moveTo(n,m):o.lineTo(n,m)}),o.stroke(),o.lineTo(p.width-g,p.height-g),o.lineTo(g,p.height-g),o.closePath(),o.fill(),o.fillStyle="#374151",o.font="12px Arial",o.fillText(`最大值: ${k.toFixed(1)}`,g,g-10),o.fillText(`最小值: ${T.toFixed(1)}`,g,p.height-10)},[t.metrics]);l.useEffect(()=>{r&&b(r)},[r,b]);const c=i=>{if(!i.threshold)return"text-gray-600";const{warning:p,critical:o}=i.threshold;return i.value>=o?"text-red-600":i.value>=p?"text-yellow-600":"text-green-600"},j=i=>i==="critical"?"border-red-200 bg-red-50":"border-yellow-200 bg-yellow-50";return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础性能监控"}),e.jsxs("div",{className:"mb-6 flex items-center space-x-4",children:[e.jsx("button",{onClick:t.startMonitoring,disabled:t.isMonitoring,className:`px-4 py-2 rounded font-medium ${t.isMonitoring?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-green-500 text-white hover:bg-green-600"}`,children:"开始监控"}),e.jsx("button",{onClick:t.stopMonitoring,disabled:!t.isMonitoring,className:`px-4 py-2 rounded font-medium ${t.isMonitoring?"bg-red-500 text-white hover:bg-red-600":"bg-gray-200 text-gray-400 cursor-not-allowed"}`,children:"停止监控"}),e.jsx("button",{onClick:t.generateReport,className:"px-4 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600",children:"生成报告"}),e.jsx("button",{onClick:t.clearOldData,className:"px-4 py-2 bg-gray-500 text-white rounded font-medium hover:bg-gray-600",children:"清理数据"}),e.jsx("div",{className:`px-3 py-1 rounded text-sm font-medium ${t.isMonitoring?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:t.isMonitoring?"监控中":"已停止"})]}),e.jsxs("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:"监控配置"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs text-gray-600 mb-1",children:"监控间隔 (ms)"}),e.jsx("input",{type:"number",value:t.config.interval,onChange:i=>t.updateConfig({interval:parseInt(i.target.value)||1e3}),className:"w-full px-2 py-1 border rounded text-sm",min:"100",max:"5000",step:"100"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs text-gray-600 mb-1",children:"最大数据点"}),e.jsx("input",{type:"number",value:t.config.maxDataPoints,onChange:i=>t.updateConfig({maxDataPoints:parseInt(i.target.value)||100}),className:"w-full px-2 py-1 border rounded text-sm",min:"50",max:"1000",step:"50"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs text-gray-600 mb-1",children:"自动报告"}),e.jsxs("select",{value:t.config.autoReport?"true":"false",onChange:i=>t.updateConfig({autoReport:i.target.value==="true"}),className:"w-full px-2 py-1 border rounded text-sm",children:[e.jsx("option",{value:"true",children:"启用"}),e.jsx("option",{value:"false",children:"禁用"})]})]})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:"实时指标"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:t.latestMetrics.map(i=>e.jsxs("div",{onClick:()=>x(i.name),className:`p-4 border rounded-lg cursor-pointer transition-colors ${r===i.name?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-gray-300"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-sm font-medium text-gray-800",children:i.name}),e.jsx("span",{className:`text-xs px-2 py-1 rounded ${i.category==="runtime"?"bg-blue-100 text-blue-800":i.category==="network"?"bg-green-100 text-green-800":i.category==="memory"?"bg-purple-100 text-purple-800":"bg-orange-100 text-orange-800"}`,children:i.category})]}),e.jsxs("div",{className:`text-2xl font-bold ${c(i)}`,children:[i.value.toFixed(1),e.jsx("span",{className:"text-sm font-normal ml-1",children:i.unit})]}),e.jsx("div",{className:"text-xs text-gray-500 mt-1",children:i.timestamp.toLocaleTimeString()})]},i.id))})]}),r&&e.jsxs("div",{className:"mb-6",children:[e.jsxs("h4",{className:"font-medium text-gray-800 mb-3",children:[r," 趋势图"]}),e.jsx("div",{className:"border border-gray-200 rounded-lg p-4",children:e.jsx("canvas",{ref:h,width:800,height:300,className:"w-full h-auto"})})]}),t.unacknowledgedAlerts.length>0&&e.jsxs("div",{className:"mb-6",children:[e.jsxs("h4",{className:"font-medium text-gray-800 mb-3",children:["告警 (",t.unacknowledgedAlerts.length,")"]}),e.jsx("div",{className:"space-y-2",children:t.unacknowledgedAlerts.slice(0,5).map(i=>e.jsx("div",{className:`p-3 rounded-lg border ${j(i.level)}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"font-medium",children:[i.level==="critical"?"🚨":"⚠️"," ",i.message]}),e.jsx("div",{className:"text-xs mt-1",children:i.timestamp.toLocaleString()})]}),e.jsx("button",{onClick:()=>t.acknowledgeAlert(i.id),className:"px-2 py-1 text-xs bg-white border rounded hover:bg-gray-50",children:"确认"})]})},i.id))})]}),e.jsxs("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"监控功能演示："}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("p",{children:"• 实时监控：FPS、内存使用率、DOM节点数等关键指标"}),e.jsx("p",{children:"• 阈值告警：超过预设阈值时自动生成告警"}),e.jsx("p",{children:"• 趋势图表：点击指标卡片查看历史趋势"}),e.jsx("p",{children:"• 自动报告：定期生成性能分析报告"}),e.jsx("p",{children:"• 配置灵活：可调整监控间隔和数据保留策略"})]})]})]})})},W=`import React, { useCallback, useEffect, useRef, useState } from "react";

import { PerformanceMetric } from "./types";
import { usePerformanceMonitoring } from "./usePerformanceMonitoring";

// 基础性能监控示例组件
export const BasicPerformanceMonitoringDemo: React.FC = () => {
  const monitoring = usePerformanceMonitoring({
    interval: 1000,
    maxDataPoints: 50,
  });

  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const chartRef = useRef<HTMLCanvasElement>(null);

  // 绘制性能图表
  const drawChart = useCallback(
    (metricName: string) => {
      const canvas = chartRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const metrics = monitoring.metrics.filter((m) => m.name === metricName);
      if (metrics.length === 0) return;

      // 清空画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 设置样式
      ctx.strokeStyle = "#3b82f6";
      ctx.lineWidth = 2;
      ctx.fillStyle = "rgba(59, 130, 246, 0.1)";

      // 计算缩放比例
      const padding = 40;
      const chartWidth = canvas.width - padding * 2;
      const chartHeight = canvas.height - padding * 2;

      const maxValue = Math.max(...metrics.map((m) => m.value));
      const minValue = Math.min(...metrics.map((m) => m.value));
      const valueRange = maxValue - minValue || 1;

      // 绘制网格线
      ctx.strokeStyle = "#e5e7eb";
      ctx.lineWidth = 1;
      for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
      }

      // 绘制数据线
      ctx.strokeStyle = "#3b82f6";
      ctx.lineWidth = 2;
      ctx.beginPath();

      metrics.forEach((metric, index) => {
        const x = padding + (chartWidth / (metrics.length - 1)) * index;
        const y =
          padding +
          chartHeight -
          ((metric.value - minValue) / valueRange) * chartHeight;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // 填充区域
      ctx.lineTo(canvas.width - padding, canvas.height - padding);
      ctx.lineTo(padding, canvas.height - padding);
      ctx.closePath();
      ctx.fill();

      // 绘制标签
      ctx.fillStyle = "#374151";
      ctx.font = "12px Arial";
      ctx.fillText(\`最大值: \${maxValue.toFixed(1)}\`, padding, padding - 10);
      ctx.fillText(
        \`最小值: \${minValue.toFixed(1)}\`,
        padding,
        canvas.height - 10
      );
    },
    [monitoring.metrics]
  );

  // 当选中指标变化时重新绘制图表
  useEffect(() => {
    if (selectedMetric) {
      drawChart(selectedMetric);
    }
  }, [selectedMetric, drawChart]);

  // 获取指标状态颜色
  const getMetricStatusColor = (metric: PerformanceMetric) => {
    if (!metric.threshold) return "text-gray-600";

    const { warning, critical } = metric.threshold;
    if (metric.value >= critical) return "text-red-600";
    if (metric.value >= warning) return "text-yellow-600";
    return "text-green-600";
  };

  // 获取告警级别颜色
  const getAlertLevelColor = (level: "warning" | "critical") => {
    return level === "critical"
      ? "border-red-200 bg-red-50"
      : "border-yellow-200 bg-yellow-50";
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">基础性能监控</h3>

        {/* 监控控制 */}
        <div className="mb-6 flex items-center space-x-4">
          <button
            onClick={monitoring.startMonitoring}
            disabled={monitoring.isMonitoring}
            className={\`px-4 py-2 rounded font-medium \${
              monitoring.isMonitoring
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }\`}
          >
            开始监控
          </button>
          <button
            onClick={monitoring.stopMonitoring}
            disabled={!monitoring.isMonitoring}
            className={\`px-4 py-2 rounded font-medium \${
              !monitoring.isMonitoring
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600"
            }\`}
          >
            停止监控
          </button>
          <button
            onClick={monitoring.generateReport}
            className="px-4 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600"
          >
            生成报告
          </button>
          <button
            onClick={monitoring.clearOldData}
            className="px-4 py-2 bg-gray-500 text-white rounded font-medium hover:bg-gray-600"
          >
            清理数据
          </button>
          <div
            className={\`px-3 py-1 rounded text-sm font-medium \${
              monitoring.isMonitoring
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }\`}
          >
            {monitoring.isMonitoring ? "监控中" : "已停止"}
          </div>
        </div>

        {/* 配置面板 */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-3">监控配置</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                监控间隔 (ms)
              </label>
              <input
                type="number"
                value={monitoring.config.interval}
                onChange={(e) =>
                  monitoring.updateConfig({
                    interval: parseInt(e.target.value) || 1000,
                  })
                }
                className="w-full px-2 py-1 border rounded text-sm"
                min="100"
                max="5000"
                step="100"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                最大数据点
              </label>
              <input
                type="number"
                value={monitoring.config.maxDataPoints}
                onChange={(e) =>
                  monitoring.updateConfig({
                    maxDataPoints: parseInt(e.target.value) || 100,
                  })
                }
                className="w-full px-2 py-1 border rounded text-sm"
                min="50"
                max="1000"
                step="50"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                自动报告
              </label>
              <select
                value={monitoring.config.autoReport ? "true" : "false"}
                onChange={(e) =>
                  monitoring.updateConfig({
                    autoReport: e.target.value === "true",
                  })
                }
                className="w-full px-2 py-1 border rounded text-sm"
              >
                <option value="true">启用</option>
                <option value="false">禁用</option>
              </select>
            </div>
          </div>
        </div>

        {/* 实时指标 */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-800 mb-3">实时指标</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {monitoring.latestMetrics.map((metric) => (
              <div
                key={metric.id}
                onClick={() => setSelectedMetric(metric.name)}
                className={\`p-4 border rounded-lg cursor-pointer transition-colors \${
                  selectedMetric === metric.name
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }\`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">
                    {metric.name}
                  </span>
                  <span
                    className={\`text-xs px-2 py-1 rounded \${
                      metric.category === "runtime"
                        ? "bg-blue-100 text-blue-800"
                        : metric.category === "network"
                        ? "bg-green-100 text-green-800"
                        : metric.category === "memory"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-orange-100 text-orange-800"
                    }\`}
                  >
                    {metric.category}
                  </span>
                </div>
                <div
                  className={\`text-2xl font-bold \${getMetricStatusColor(
                    metric
                  )}\`}
                >
                  {metric.value.toFixed(1)}
                  <span className="text-sm font-normal ml-1">
                    {metric.unit}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {metric.timestamp.toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 性能图表 */}
        {selectedMetric && (
          <div className="mb-6">
            <h4 className="font-medium text-gray-800 mb-3">
              {selectedMetric} 趋势图
            </h4>
            <div className="border border-gray-200 rounded-lg p-4">
              <canvas
                ref={chartRef}
                width={800}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* 告警列表 */}
        {monitoring.unacknowledgedAlerts.length > 0 && (
          <div className="mb-6">
            <h4 className="font-medium text-gray-800 mb-3">
              告警 ({monitoring.unacknowledgedAlerts.length})
            </h4>
            <div className="space-y-2">
              {monitoring.unacknowledgedAlerts.slice(0, 5).map((alert) => (
                <div
                  key={alert.id}
                  className={\`p-3 rounded-lg border \${getAlertLevelColor(
                    alert.level
                  )}\`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">
                        {alert.level === "critical" ? "🚨" : "⚠️"}{" "}
                        {alert.message}
                      </div>
                      <div className="text-xs mt-1">
                        {alert.timestamp.toLocaleString()}
                      </div>
                    </div>
                    <button
                      onClick={() => monitoring.acknowledgeAlert(alert.id)}
                      className="px-2 py-1 text-xs bg-white border rounded hover:bg-gray-50"
                    >
                      确认
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="p-3 bg-blue-50 border border-blue-200 rounded">
          <h4 className="font-medium text-blue-800 mb-2">监控功能演示：</h4>
          <div className="text-sm text-blue-700 space-y-1">
            <p>• 实时监控：FPS、内存使用率、DOM节点数等关键指标</p>
            <p>• 阈值告警：超过预设阈值时自动生成告警</p>
            <p>• 趋势图表：点击指标卡片查看历史趋势</p>
            <p>• 自动报告：定期生成性能分析报告</p>
            <p>• 配置灵活：可调整监控间隔和数据保留策略</p>
          </div>
        </div>
      </div>
    </div>
  );
};
`,S=`// 性能监控相关类型定义

// 性能指标接口
export interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  timestamp: Date;
  category: "runtime" | "network" | "memory" | "user";
  threshold?: {
    warning: number;
    critical: number;
  };
}

// 监控配置接口
export interface MonitoringConfig {
  enabled: boolean;
  interval: number;
  maxDataPoints: number;
  thresholds: {
    [key: string]: {
      warning: number;
      critical: number;
    };
  };
  autoReport: boolean;
  reportInterval: number;
}

// 监控状态接口
export interface MonitoringState {
  metrics: PerformanceMetric[];
  isMonitoring: boolean;
  config: MonitoringConfig;
  alerts: Alert[];
  reports: PerformanceReport[];
}

// 告警接口
export interface Alert {
  id: string;
  metricId: string;
  level: "warning" | "critical";
  message: string;
  timestamp: Date;
  acknowledged: boolean;
}

// 性能报告接口
export interface PerformanceReport {
  id: string;
  startTime: Date;
  endTime: Date;
  summary: {
    totalMetrics: number;
    averageValues: { [key: string]: number };
    alerts: number;
    issues: string[];
  };
}

// 监控操作类型
export type MonitoringAction =
  | { type: "ADD_METRIC"; payload: PerformanceMetric }
  | { type: "SET_METRICS"; payload: PerformanceMetric[] }
  | { type: "SET_MONITORING"; payload: boolean }
  | { type: "UPDATE_CONFIG"; payload: Partial<MonitoringConfig> }
  | { type: "ADD_ALERT"; payload: Alert }
  | { type: "ACKNOWLEDGE_ALERT"; payload: string }
  | { type: "ADD_REPORT"; payload: PerformanceReport }
  | { type: "CLEAR_OLD_DATA" };`,$=`import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import {
  PerformanceMetric,
  MonitoringConfig,
  Alert,
  PerformanceReport,
} from "./types";
import { monitoringReducer, initialState } from "./monitoringReducer";

// 性能监控自定义 Hook
export function usePerformanceMonitoring(
  initialConfig?: Partial<MonitoringConfig>
) {
  const [state, dispatch] = useReducer(monitoringReducer, {
    ...initialState,
    config: {
      ...initialState.config,
      ...initialConfig,
    },
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const reportIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const fpsRef = useRef({ frames: 0, lastTime: performance.now() });

  // 收集运行时性能指标
  const collectRuntimeMetrics = useCallback(() => {
    const metrics: PerformanceMetric[] = [];
    const now = new Date();

    // FPS 计算
    const currentTime = performance.now();
    const deltaTime = currentTime - fpsRef.current.lastTime;
    if (deltaTime >= 1000) {
      const fps = (fpsRef.current.frames * 1000) / deltaTime;
      metrics.push({
        id: \`fps-\${Date.now()}\`,
        name: "FPS",
        value: fps,
        unit: "fps",
        timestamp: now,
        category: "runtime",
        threshold: state.config.thresholds["FPS"],
      });
      fpsRef.current = { frames: 0, lastTime: currentTime };
    }
    fpsRef.current.frames++;

    // 内存使用情况
    if ("memory" in performance) {
      const memory = (performance as any).memory;
      const usage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
      metrics.push({
        id: \`memory-\${Date.now()}\`,
        name: "内存使用率",
        value: usage,
        unit: "%",
        timestamp: now,
        category: "memory",
        threshold: state.config.thresholds["内存使用率"],
      });
    }

    // DOM 节点数量
    const domNodes = document.querySelectorAll("*").length;
    metrics.push({
      id: \`dom-\${Date.now()}\`,
      name: "DOM节点数",
      value: domNodes,
      unit: "个",
      timestamp: now,
      category: "runtime",
      threshold: state.config.thresholds["DOM节点数"],
    });

    return metrics;
  }, [state.config.thresholds]);

  // 收集网络性能指标
  const collectNetworkMetrics = useCallback(() => {
    const metrics: PerformanceMetric[] = [];
    const now = new Date();

    // 页面加载时间
    if (performance.timing) {
      const loadTime =
        performance.timing.loadEventEnd - performance.timing.navigationStart;
      if (loadTime > 0) {
        metrics.push({
          id: \`load-\${Date.now()}\`,
          name: "页面加载时间",
          value: loadTime,
          unit: "ms",
          timestamp: now,
          category: "network",
          threshold: state.config.thresholds["页面加载时间"],
        });
      }
    }

    return metrics;
  }, [state.config.thresholds]);

  // 收集用户体验指标
  const collectUserMetrics = useCallback(() => {
    const metrics: PerformanceMetric[] = [];
    const now = new Date();

    // 模拟用户交互延迟
    const interactionDelay = Math.random() * 50 + 10; // 10-60ms
    metrics.push({
      id: \`interaction-\${Date.now()}\`,
      name: "交互延迟",
      value: interactionDelay,
      unit: "ms",
      timestamp: now,
      category: "user",
    });

    return metrics;
  }, []);

  // 收集所有指标
  const collectAllMetrics = useCallback(() => {
    const runtimeMetrics = collectRuntimeMetrics();
    const networkMetrics = collectNetworkMetrics();
    const userMetrics = collectUserMetrics();

    return [...runtimeMetrics, ...networkMetrics, ...userMetrics];
  }, [collectRuntimeMetrics, collectNetworkMetrics, collectUserMetrics]);

  // 检查阈值并生成告警
  const checkThresholds = useCallback(
    (metric: PerformanceMetric) => {
      if (!metric.threshold) return;

      const { warning, critical } = metric.threshold;
      let level: "warning" | "critical" | null = null;
      let message = "";

      if (metric.value >= critical) {
        level = "critical";
        message = \`\${metric.name} 达到临界值: \${metric.value.toFixed(
          1
        )}\${metric.unit} (阈值: \${critical}\${metric.unit})\`;
      } else if (metric.value >= warning) {
        level = "warning";
        message = \`\${metric.name} 超过警告值: \${metric.value.toFixed(
          1
        )}\${metric.unit} (阈值: \${warning}\${metric.unit})\`;
      }

      if (level) {
        const alert: Alert = {
          id: \`alert-\${Date.now()}-\${Math.random()}\`,
          metricId: metric.id,
          level,
          message,
          timestamp: new Date(),
          acknowledged: false,
        };
        dispatch({ type: "ADD_ALERT", payload: alert });
      }
    },
    []
  );

  // 生成性能报告
  const generateReport = useCallback(() => {
    const endTime = new Date();
    const startTime = new Date(endTime.getTime() - 60000); // 最近1分钟

    const recentMetrics = state.metrics.filter(
      (metric) => metric.timestamp >= startTime
    );

    const averageValues: { [key: string]: number } = {};
    const metricGroups: { [key: string]: PerformanceMetric[] } = {};

    // 按指标名称分组
    recentMetrics.forEach((metric) => {
      if (!metricGroups[metric.name]) {
        metricGroups[metric.name] = [];
      }
      metricGroups[metric.name].push(metric);
    });

    // 计算平均值
    Object.entries(metricGroups).forEach(([name, metrics]) => {
      const sum = metrics.reduce((acc, metric) => acc + metric.value, 0);
      averageValues[name] = sum / metrics.length;
    });

    // 识别问题
    const issues: string[] = [];
    Object.entries(averageValues).forEach(([name, value]) => {
      const threshold = state.config.thresholds[name];
      if (threshold) {
        if (value >= threshold.critical) {
          issues.push(\`\${name} 平均值达到临界水平\`);
        } else if (value >= threshold.warning) {
          issues.push(\`\${name} 平均值超过警告水平\`);
        }
      }
    });

    const report: PerformanceReport = {
      id: \`report-\${Date.now()}\`,
      startTime,
      endTime,
      summary: {
        totalMetrics: recentMetrics.length,
        averageValues,
        alerts: state.alerts.filter(
          (alert) => alert.timestamp >= startTime
        ).length,
        issues,
      },
    };

    dispatch({ type: "ADD_REPORT", payload: report });
    return report;
  }, [state.metrics, state.alerts, state.config.thresholds]);

  // 开始监控
  const startMonitoring = useCallback(() => {
    if (state.isMonitoring) return;

    dispatch({ type: "SET_MONITORING", payload: true });

    // 开始收集指标
    intervalRef.current = setInterval(() => {
      const metrics = collectAllMetrics();
      metrics.forEach((metric) => {
        dispatch({ type: "ADD_METRIC", payload: metric });
        checkThresholds(metric);
      });
    }, state.config.interval);

    // 自动生成报告
    if (state.config.autoReport) {
      reportIntervalRef.current = setInterval(() => {
        generateReport();
      }, state.config.reportInterval);
    }

    // 定期清理旧数据
    const cleanupInterval = setInterval(() => {
      dispatch({ type: "CLEAR_OLD_DATA" });
    }, 300000); // 每5分钟清理一次

    return () => {
      clearInterval(cleanupInterval);
    };
  }, [
    state.isMonitoring,
    state.config.interval,
    state.config.autoReport,
    state.config.reportInterval,
    collectAllMetrics,
    checkThresholds,
    generateReport,
  ]);

  // 停止监控
  const stopMonitoring = useCallback(() => {
    dispatch({ type: "SET_MONITORING", payload: false });

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (reportIntervalRef.current) {
      clearInterval(reportIntervalRef.current);
      reportIntervalRef.current = null;
    }
  }, []);

  // 更新配置
  const updateConfig = useCallback((newConfig: Partial<MonitoringConfig>) => {
    dispatch({ type: "UPDATE_CONFIG", payload: newConfig });
  }, []);

  // 确认告警
  const acknowledgeAlert = useCallback((alertId: string) => {
    dispatch({ type: "ACKNOWLEDGE_ALERT", payload: alertId });
  }, []);

  // 清理旧数据
  const clearOldData = useCallback(() => {
    dispatch({ type: "CLEAR_OLD_DATA" });
  }, []);

  // 计算最新指标
  const latestMetrics = useMemo(() => {
    const metricMap = new Map<string, PerformanceMetric>();
    state.metrics.forEach((metric) => {
      const existing = metricMap.get(metric.name);
      if (!existing || metric.timestamp > existing.timestamp) {
        metricMap.set(metric.name, metric);
      }
    });
    return Array.from(metricMap.values());
  }, [state.metrics]);

  // 未确认的告警
  const unacknowledgedAlerts = useMemo(() => {
    return state.alerts.filter((alert) => !alert.acknowledged);
  }, [state.alerts]);

  // 清理资源
  useEffect(() => {
    return () => {
      stopMonitoring();
    };
  }, [stopMonitoring]);

  return {
    ...state,
    latestMetrics,
    unacknowledgedAlerts,
    startMonitoring,
    stopMonitoring,
    updateConfig,
    acknowledgeAlert,
    clearOldData,
    generateReport,
  };
}`,z=()=>e.jsx(L,{title:"性能监控场景实践",description:"性能监控是保证应用质量的重要手段。本节展示如何使用 React Hooks 构建完整的性能监控系统，包括实时指标收集、阈值告警、性能分析和优化建议等功能。",overview:[{title:"核心概念",items:["性能指标收集","实时监控","阈值告警","性能分析"]},{title:"主要优势",items:["实时数据展示","多维度监控","自动优化建议","直观图表报告"]},{title:"适用场景",items:["线上性能监控","瓶颈识别优化","用户体验指标","资源规划分析"]},{title:"注意事项",items:["平衡精度开销","存储清理策略","避免敏感信息","API 兼容性"]}],examples:[{title:"基础性能监控",component:e.jsx(U,{}),description:"展示基础的性能监控功能，包括实时指标收集、阈值告警和趋势图表。",observationPoints:["点击'开始监控'按钮后，系统开始实时收集性能指标","指标卡片显示最新的性能数据，颜色表示健康状态","点击指标卡片可查看该指标的历史趋势图","当指标超过阈值时，会自动生成告警","可以调整监控间隔和数据保留策略"],keyPoints:["使用 Performance API 收集浏览器性能数据","通过 useReducer 管理复杂的监控状态","使用 Canvas 绘制实时性能图表","实现阈值检查和自动告警机制","支持配置化的监控参数"],commonTraps:["监控频率过高导致性能开销过大","内存泄漏：忘记清理定时器和观察器","数据积累过多导致内存溢出","在组件卸载时未正确清理资源"],solutions:["合理设置监控间隔，平衡精度和性能","在 useEffect 清理函数中停止所有监控","设置最大数据点数量，自动清理旧数据","使用 useCallback 和 useMemo 优化性能"],importantTips:["监控系统本身的性能开销需要控制在合理范围内","不同浏览器对 Performance API 的支持程度不同","生产环境中应该使用更轻量级的监控方案","告警阈值需要根据实际业务场景调整"],preCode:[{title:"types",code:S},{title:"usePerformanceMonitoring",code:$}],codeExample:{title:"基础性能监控",code:W}},{title:"高级性能分析",component:e.jsx(V,{}),description:"展示高级的性能分析功能，包括性能评分、压力测试和智能建议。",observationPoints:["性能评分基于多个指标综合计算，直观反映应用健康状态","压力测试可以模拟不同类型的性能压力场景","详细报告包含问题分析和优化建议","支持多种分析视图：概览、详情、对比","智能建议基于性能数据自动生成"],keyPoints:["实现综合性能评分算法","支持 CPU、内存、DOM 等多种压力测试","生成包含统计信息和建议的详细报告","提供多维度的性能分析视图","基于规则引擎生成优化建议"],commonTraps:["压力测试可能影响正常的性能监控","评分算法过于简单，不能准确反映实际情况","报告数据过多，影响用户体验","建议过于通用，缺乏针对性"],solutions:["压力测试期间暂停正常监控或使用独立的测试环境","设计更科学的评分算法，考虑权重和业务重要性","实现分页和筛选功能，优化大数据量展示","基于具体的性能数据生成个性化建议"],importantTips:["性能评分应该结合业务场景和用户体验","压力测试需要在安全的环境中进行","报告生成频率需要根据实际需求调整","优化建议应该具有可操作性和优先级"],preCode:[{title:"types",code:S},{title:"usePerformanceMonitoring",code:$}],codeExample:{title:"高级性能分析",code:G}}],tutorial:{concepts:["性能监控的基本原理和重要性","浏览器 Performance API 的使用方法","性能指标的分类和意义","阈值告警机制的设计","性能数据的可视化展示","性能分析和优化建议的生成"],steps:["设计性能指标数据结构，包括指标类型、阈值等信息","实现性能数据收集函数，使用 Performance API 获取各类指标","使用 useReducer 管理复杂的监控状态和操作","实现定时收集机制，使用 setInterval 定期收集数据","添加阈值检查逻辑，超过阈值时生成告警","实现数据可视化，使用 Canvas 绘制性能图表","添加配置管理功能，支持动态调整监控参数","实现报告生成功能，分析性能数据并提供建议","添加清理机制，防止内存泄漏和数据积累过多"],tips:["合理设置监控频率，避免过度消耗资源","使用 useCallback 和 useMemo 优化组件性能","在组件卸载时清理所有定时器和观察器","设置合理的数据保留策略，避免内存溢出","根据业务需求调整告警阈值","使用 Web Workers 处理复杂的数据分析任务","考虑浏览器兼容性，提供降级方案","在生产环境中使用采样监控，减少性能开销"]},interview:{questions:[{question:"如何设计一个高效的前端性能监控系统？",answer:"设计高效的前端性能监控系统需要考虑以下几个方面：1) 指标选择：选择关键的性能指标，如 FPS、内存使用率、页面加载时间等；2) 数据收集：使用 Performance API、PerformanceObserver 等浏览器原生 API；3) 存储策略：设置合理的数据保留策略，避免内存溢出；4) 告警机制：设置阈值告警，及时发现性能问题；5) 可视化展示：提供直观的图表和报告；6) 性能开销：监控系统本身的开销要控制在合理范围内。"},{question:"前端性能监控中有哪些关键指标？",answer:"前端性能监控的关键指标包括：1) 运行时指标：FPS（帧率）、内存使用率、CPU 使用率、DOM 节点数量；2) 网络指标：页面加载时间、DNS 解析时间、TCP 连接时间、资源加载时间；3) 用户体验指标：LCP（最大内容绘制）、FID（首次输入延迟）、CLS（累积布局偏移）；4) 业务指标：页面访问量、用户停留时间、错误率等。这些指标从不同维度反映应用的性能状况。"},{question:"如何处理性能监控中的数据存储和清理？",answer:"性能监控中的数据存储和清理策略：1) 内存管理：设置最大数据点数量，超过限制时自动删除旧数据；2) 时间窗口：只保留一定时间范围内的数据，如最近24小时；3) 数据压缩：对历史数据进行聚合和压缩，减少存储空间；4) 分级存储：实时数据存储在内存中，历史数据可以存储到 localStorage 或发送到服务器；5) 清理策略：定期清理过期数据，在组件卸载时清理所有数据；6) 采样策略：在数据量大时使用采样，减少存储压力。"},{question:"如何优化性能监控系统本身的性能开销？",answer:"优化性能监控系统的性能开销：1) 采样监控：不是每次都收集数据，而是按一定频率采样；2) 异步处理：使用 Web Workers 处理复杂的数据分析任务；3) 批量操作：批量收集和处理数据，减少频繁的操作；4) 懒加载：按需加载监控功能，避免影响应用启动；5) 缓存优化：缓存计算结果，避免重复计算；6) 条件监控：只在需要时启用监控，如开发环境或出现问题时；7) 轻量级实现：使用高效的算法和数据结构；8) 资源控制：设置监控资源的使用上限。"}],keyPoints:["性能监控需要平衡监控精度和性能开销","选择合适的性能指标，覆盖关键的性能维度","使用浏览器原生 API 获取准确的性能数据","实现智能的告警机制，避免告警疲劳","提供直观的数据可视化和分析报告","考虑浏览器兼容性和降级方案","在生产环境中使用轻量级的监控方案","建立完善的数据存储和清理策略"]},bestPractices:{dos:["选择关键的性能指标进行监控，避免过度监控","设置合理的监控频率，平衡精度和性能开销","使用浏览器原生 Performance API 获取准确数据","实现智能告警机制，设置合适的阈值","提供直观的数据可视化和趋势分析","建立完善的数据存储和清理策略","在组件卸载时清理所有监控资源","考虑浏览器兼容性，提供降级方案","使用采样监控减少生产环境的性能开销","基于性能数据提供具体的优化建议"],donts:["不要监控过多的指标，避免性能开销过大","不要设置过高的监控频率，影响应用性能","不要忽略监控系统本身的性能开销","不要在生产环境中使用重量级的监控方案","不要忘记清理定时器和观察器，避免内存泄漏","不要设置过于敏感的告警阈值，造成告警疲劳","不要无限制地积累性能数据，导致内存溢出","不要忽略浏览器兼容性问题","不要收集敏感的用户信息，注意隐私保护","不要依赖单一的性能指标进行判断"],patterns:["观察者模式：使用 PerformanceObserver 监听性能事件","策略模式：不同类型的性能指标使用不同的收集策略","工厂模式：根据配置创建不同的监控实例","单例模式：确保全局只有一个监控实例","装饰器模式：为现有组件添加性能监控功能","发布订阅模式：性能事件的发布和订阅机制","状态机模式：管理监控系统的不同状态","缓存模式：缓存计算结果，提高性能","批处理模式：批量处理性能数据","采样模式：按一定规则采样性能数据"]}});export{z as default};
