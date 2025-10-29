import{j as t}from"./index-C0E0sUJ6.js";function d({imageState:e,type:s="shimmer",backgroundColor:i="#e5e7eb",highlightColor:n="#f3f4f6",borderRadius:o=4,zIndex:l=2,showWhen:r="loading"}){if(!(r==="always"?!0:e.isLoading))return null;const a={position:"absolute",inset:0,borderRadius:o,overflow:"hidden",pointerEvents:"none",zIndex:l},h={width:"100%",height:"100%",backgroundImage:`linear-gradient(90deg, ${i} 0%, ${i} 35%, ${n} 50%, ${i} 65%, ${i} 100%)`,backgroundSize:"200% 100%",animation:"lli-skeleton-shimmer 1200ms ease-in-out infinite"},m={width:"100%",height:"100%",background:i,animation:"lli-skeleton-pulse 1200ms ease-in-out infinite"};return t.jsxs("div",{style:a,children:[t.jsx("style",{children:`
@keyframes lli-skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
@keyframes lli-skeleton-pulse {
  0%, 100% { opacity: 0.85; }
  50% { opacity: 0.6; }
}
        `}),t.jsx("div",{style:s==="shimmer"?h:m})]})}function y(e={}){return{name:"skeleton",version:"1.0.0",config:e,hooks:{renderOverlay:s=>t.jsx(d,{imageState:s.imageState,type:e.type,backgroundColor:e.backgroundColor,highlightColor:e.highlightColor,borderRadius:e.borderRadius,zIndex:e.zIndex,showWhen:e.showWhen})}}}export{y as c};
