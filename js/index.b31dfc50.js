import{g as pe,E as M,z as fe,A as me,b as v,d as U,B as b,_ as x,j as o,V as l,D as he,H as ge,f as ve,F as R,i as be,S as xe,G as we,J as ye,e as Ee,K as _e,X as Ce,M as je,N as Te,O as Se,s as p,u,P as Be,Q,U as Z,r as A,W as Pe,Y as ke,Z as Fe,$ as Ne,a0 as Ae,a1 as De,a2 as ee,a3 as h}from"./vendors.5806d90d.js";import{c as O,P as Oe,B,C as He,a as Re,b as D,d as Le,e as Ie,t as $,T as ze}from"./common.3622fc2a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();var Ve=`
/* H5 端隐藏 TabBar 空图标（只隐藏没有 src 的图标） */
.weui-tabbar__icon:not([src]),
.weui-tabbar__icon[src=''] {
  display: none !important;
}

.weui-tabbar__item:has(.weui-tabbar__icon:not([src])) .weui-tabbar__label,
.weui-tabbar__item:has(.weui-tabbar__icon[src='']) .weui-tabbar__label {
  margin-top: 0 !important;
}

/* Vite 错误覆盖层无法选择文本的问题 */
vite-error-overlay {
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-user-select: text !important;
}

vite-error-overlay::part(window) {
  max-width: 90vw;
  padding: 10px;
}

.taro_page {
  overflow: auto;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* H5 导航栏页面自动添加顶部间距 */
body.h5-navbar-visible .taro_page {
  padding-top: 44px;
}

body.h5-navbar-visible .toaster[data-position^="top"] {
  top: 44px !important;
}

/* Sheet 组件在 H5 导航栏下的位置修正 */
body.h5-navbar-visible .sheet-content:not([data-side="bottom"]) {
    top: 44px !important;
}

/*
 * H5 端 rem 适配：与小程序 rpx 缩放一致
 * 375px 屏幕：1rem = 16px，小程序 32rpx = 16px
 */
html {
    font-size: 4vw !important;
}

/* H5 端组件默认样式修复 */
taro-view-core {
    display: block;
}

taro-text-core {
    display: inline;
}

taro-input-core {
    display: block;
    width: 100%;
}

taro-input-core input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
}

taro-input-core.taro-otp-hidden-input input {
    color: transparent;
    caret-color: transparent;
    -webkit-text-fill-color: transparent;
}

/* 全局按钮样式重置 */
taro-button-core,
button {
    margin: 0 !important;
    padding: 0 !important;
    line-height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
}

taro-button-core::after,
button::after {
    border: none;
}

taro-textarea-core > textarea,
.taro-textarea,
textarea.taro-textarea {
    resize: none !important;
}
`,We=`
/* PC 宽屏适配 - 基础布局 */
@media (min-width: 769px) {
  html {
    font-size: 15px !important;
  }

  body {
    background-color: #f3f4f6 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    min-height: 100vh !important;
  }
}
`,Me=`
/* PC 宽屏适配 - 手机框样式（有 TabBar 页面） */
@media (min-width: 769px) {
  .taro-tabbar__container {
    width: 375px !important;
    max-width: 375px !important;
    height: calc(100vh - 40px) !important;
    max-height: 900px !important;
    background-color: #fff !important;
    transform: translateX(0) !important;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1) !important;
    border-radius: 20px !important;
    overflow: hidden !important;
    position: relative !important;
  }

  .taro-tabbar__panel {
    height: 100% !important;
    overflow: auto !important;
  }
}

/* PC 宽屏适配 - Toast 定位到手机框范围内 */
@media (min-width: 769px) {
  body .toaster {
    left: 50% !important;
    right: auto !important;
    width: 375px !important;
    max-width: 375px !important;
    transform: translateX(-50%) !important;
    box-sizing: border-box !important;
  }
}

/* PC 宽屏适配 - 手机框样式（无 TabBar 页面，通过 JS 添加 no-tabbar 类） */
@media (min-width: 769px) {
  body.no-tabbar #app {
    width: 375px !important;
    max-width: 375px !important;
    height: calc(100vh - 40px) !important;
    max-height: 900px !important;
    background-color: #fff !important;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1) !important;
    border-radius: 20px !important;
    overflow: hidden !important;
    position: relative !important;
    transform: translateX(0) !important;
  }

  body.no-tabbar #app .taro_router {
    height: 100% !important;
    overflow: auto !important;
  }
}
`;function Ue(){var s=document.createElement("style");s.innerHTML=Ve+We+Me,document.head.appendChild(s)}function $e(){var s=function(){var t=!!document.querySelector(".taro-tabbar__container");document.body.classList.toggle("no-tabbar",!t)};s();var e=new MutationObserver(s);e.observe(document.body,{childList:!0,subtree:!0})}function Ye(){Ue(),$e()}function Xe(){var s=pe();if(s===M.WEAPP||s===M.TT)try{var e=fe(),r=e.miniProgram.envVersion;console.log("[Debug] envVersion:",r),r!=="release"&&me({enableDebug:!0})}catch(t){console.error("[Debug] 开启调试模式失败:",t)}}var Ge={visible:!1,title:"",bgColor:"#ffffff",textStyle:"black",navStyle:"default",transparent:"none",leftIcon:"none"},Je=function(){var e,r=R();return(r==null||(e=r.config)===null||e===void 0?void 0:e.window)||{}},qe=function(){var e,r,t=(e=R())===null||e===void 0||(e=e.config)===null||e===void 0?void 0:e.tabBar;return new Set((t==null||(r=t.list)===null||r===void 0?void 0:r.map(function(i){return i.pagePath}))||[])},Y=function(){var e,r=R();return(r==null||(e=r.config)===null||e===void 0||(e=e.pages)===null||e===void 0?void 0:e[0])||"pages/index/index"},k=function(e){return e.replace(/^\//,"")},Ke=function(e,r,t,i){if(!e)return"none";var n=k(e),a=k(i),g=n===a,c=r.has(n)||r.has("/".concat(n)),f=t>1;return c||g?"none":f?"back":"home"},Qe=function(){var e=v.useState(Ge),r=U(e,2),t=r[0],i=r[1],n=v.useState(0),a=U(n,2),g=a[0],c=a[1],f=v.useCallback(function(){var d=b.getCurrentPages();if(d.length===0){i(function(de){return x(x({},de),{},{visible:!1})});return}var m=d[d.length-1],z=(m==null?void 0:m.route)||"";if(z){var E=(m==null?void 0:m.config)||{},_=Je(),T=qe(),le=Y(),S=k(z),V=k(le),ue=S===V,ce=T.has(S)||T.has("/".concat(S)),W=T.size<=1&&d.length<=1&&(ue||ce);i({visible:!W,title:document.title||E.navigationBarTitleText||_.navigationBarTitleText||"",bgColor:E.navigationBarBackgroundColor||_.navigationBarBackgroundColor||"#ffffff",textStyle:E.navigationBarTextStyle||_.navigationBarTextStyle||"black",navStyle:E.navigationStyle||_.navigationStyle||"default",transparent:E.transparentTitle||_.transparentTitle||"none",leftIcon:W?"none":Ke(S,T,d.length,V)})}},[]);b.useDidShow(function(){f()}),b.usePageScroll(function(d){var m=d.scrollTop;t.transparent==="auto"&&c(Math.min(m/100,1))}),v.useEffect(function(){var d=null,m=new MutationObserver(function(){d&&clearTimeout(d),d=setTimeout(function(){f()},50)});return m.observe(document.head,{subtree:!0,childList:!0,characterData:!0}),f(),function(){m.disconnect(),d&&clearTimeout(d)}},[f]);var N=t.visible&&t.navStyle!=="custom";if(v.useEffect(function(){N?document.body.classList.add("h5-navbar-visible"):document.body.classList.remove("h5-navbar-visible")},[N]),!N)return o.jsx(o.Fragment,{});var I=t.textStyle==="white"?"#fff":"#333",ne=t.textStyle==="white"?"text-white":"text-gray-800",ie=function(){return t.transparent==="always"?{backgroundColor:"transparent"}:t.transparent==="auto"?{backgroundColor:t.bgColor,opacity:g}:{backgroundColor:t.bgColor}},oe=function(){return b.navigateBack()},se=function(){var m=Y();b.reLaunch({url:"/".concat(m)})};return o.jsxs(o.Fragment,{children:[o.jsxs(l,{className:"fixed top-0 left-0 right-0 h-11 flex items-center justify-center z-1000",style:ie(),children:[t.leftIcon==="back"&&o.jsx(l,{className:"absolute left-2 top-1/2 -translate-y-1/2 p-1 flex items-center justify-center",onClick:oe,children:o.jsx(he,{size:24,color:I})}),t.leftIcon==="home"&&o.jsx(l,{className:"absolute left-2 top-1/2 -translate-y-1/2 p-1 flex items-center justify-center",onClick:se,children:o.jsx(ge,{size:22,color:I})}),o.jsx(ve,{className:"text-base font-medium max-w-3/5 truncate ".concat(ne),children:t.title})]}),o.jsx(l,{className:"h-11 shrink-0"})]})},Ze=function(e){var r=e.children;return o.jsxs(o.Fragment,{children:[o.jsx(Qe,{}),r]})},er=["className","children","orientation"],re=v.forwardRef(function(s,e){var r=s.className,t=s.children,i=s.orientation,n=i===void 0?"vertical":i,a=be(s,er),g=n==="horizontal"||n==="both",c=n==="vertical"||n==="both";return o.jsx(xe,x(x({ref:e,className:O("relative",r),scrollY:c,scrollX:g,style:{overflowX:g?"auto":"hidden",overflowY:c?"auto":"hidden"}},a),{},{children:t}))});re.displayName="ScrollArea";var rr={error:null,report:"",source:"",visible:!1,open:!1,timestamp:""},X="hsl(360, 100%, 45%)",G=!1,F=rr,H=new Set,tr=function(){H.forEach(function(e){return e()})},ar=function(e){return H.add(e),function(){return H.delete(e)}},J=function(){return F},te=function(e){F=e,tr()},nr=function(){var s=p(u().m(function e(r){var t,i,n,a,g;return u().w(function(c){for(;;)switch(c.p=c.n){case 0:if(typeof window!="undefined"){c.n=1;break}return c.a(2,!1);case 1:if(c.p=1,!((t=navigator.clipboard)!==null&&t!==void 0&&t.writeText)){c.n=3;break}return c.n=2,navigator.clipboard.writeText(r);case 2:return c.a(2,!0);case 3:c.n=5;break;case 4:c.p=4,a=c.v,console.warn("[H5ErrorBoundary] Clipboard API copy failed:",a);case 5:return c.p=5,i=document.createElement("textarea"),i.value=r,i.setAttribute("readonly","true"),i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select(),n=document.execCommand("copy"),document.body.removeChild(i),c.a(2,n);case 6:return c.p=6,g=c.v,console.warn("[H5ErrorBoundary] Fallback copy failed:",g),c.a(2,!1)}},e,null,[[5,6],[1,4]])}));return function(r){return s.apply(this,arguments)}}(),ir=function(e){if(e instanceof Error)return e;if(typeof e=="string")return new Error(e);try{return new Error(JSON.stringify(e))}catch(r){return new Error(String(e))}},or=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=["[H5 Runtime Error]","Time: ".concat(new Date().toISOString()),r.source?"Source: ".concat(r.source):"","Name: ".concat(e.name),"Message: ".concat(e.message),e.stack?`Stack:
`.concat(e.stack):"",r.componentStack?`Component Stack:
`.concat(r.componentStack):"",typeof navigator!="undefined"?"User Agent: ".concat(navigator.userAgent):""].filter(Boolean);return t.join(`

`)},q=function(e){F.visible&&te(x(x({},F),{},{open:e}))},L=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof window!="undefined"){var t=ir(e),i=or(t,r),n=new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"});te({error:t,report:i,source:r.source||"runtime",timestamp:n,visible:!0,open:!1}),console.error("[H5ErrorOverlay] Showing error overlay:",t,r)}},sr=function(e){var r=e.error||new Error(e.message||"Unknown H5 runtime error");L(r,{source:"window.error"})},lr=function(e){L(e.reason,{source:"window.unhandledrejection"})},ur=function(){typeof window=="undefined"||G||(G=!0,window.addEventListener("error",sr),window.addEventListener("unhandledrejection",lr))},cr=function(){var e,r,t=v.useSyncExternalStore(ar,J,J);if(!t.visible)return null;var i=((e=t.error)===null||e===void 0?void 0:e.name)||"Error";return o.jsx(Oe,{children:o.jsxs(l,{className:"pointer-events-none fixed inset-0 z-[2147483646]",children:[o.jsx(l,{className:"pointer-events-auto fixed bottom-5 left-5",children:o.jsx(B,{variant:"outline",size:"icon",className:O("h-11 w-11 rounded-full shadow-md transition-transform"),style:{backgroundColor:"hsl(359, 100%, 97%)",borderColor:"hsl(359, 100%, 94%)",color:X},onClick:function(){return q(!t.open)},children:o.jsx(Ee,{size:22,color:X})})}),t.open&&o.jsx(l,{className:"pointer-events-none fixed inset-0 bg-white bg-opacity-15 supports-[backdrop-filter]:backdrop-blur-md",children:o.jsx(l,{className:"absolute inset-0 flex items-center justify-center px-4 py-4",children:o.jsx(l,{className:"w-full max-w-md",style:{width:"min(calc(100vw - 32px), var(--h5-phone-width, 390px))",height:"min(calc(100vh - 32px), 900px)"},children:o.jsx(He,{className:O("pointer-events-auto h-full rounded-2xl border border-border bg-background text-foreground shadow-2xl"),children:o.jsxs(l,{className:"relative flex h-full flex-col",children:[o.jsxs(Re,{className:"gap-2 p-4 pb-2",children:[o.jsxs(l,{className:"flex items-start justify-between gap-3",children:[o.jsxs(l,{className:"flex flex-wrap items-center gap-2",children:[o.jsx(D,{variant:"destructive",className:"border-none bg-red-500 px-3 py-1 text-xs font-medium text-white",children:"Runtime Error"}),o.jsx(D,{variant:"outline",className:"px-3 py-1 text-xs",children:t.source})]}),o.jsxs(l,{className:"flex shrink-0 items-center gap-1",children:[o.jsx(B,{variant:"ghost",size:"icon",className:"h-8 w-8 rounded-full",onClick:function(){return window.location.reload()},children:o.jsx(_e,{size:15,color:"inherit"})}),o.jsx(B,{variant:"ghost",size:"icon",className:"h-8 w-8 rounded-full",onClick:function(){return q(!1)},children:o.jsx(Ce,{size:17,color:"inherit"})})]})]}),o.jsxs(l,{className:"flex items-center justify-between gap-3",children:[o.jsx(Le,{className:"text-left text-lg",children:i}),o.jsxs(B,{variant:"outline",size:"sm",className:"shrink-0 rounded-lg",onClick:function(){var n=p(u().m(function g(){var c;return u().w(function(f){for(;;)switch(f.n){case 0:return f.n=1,nr(t.report);case 1:if(c=f.v,!c){f.n=2;break}return $.success("已复制错误信息",{description:"可发送给 Agent 进行自动修复",position:"top-center"}),f.a(2);case 2:$.warning("复制失败",{description:"请直接选中文本后手动复制。",position:"top-center"});case 3:return f.a(2)}},g)}));function a(){return n.apply(this,arguments)}return a}(),children:[o.jsx(je,{size:15,color:"inherit"}),o.jsx(l,{children:"复制错误"})]})]})]}),o.jsx(Ie,{className:"min-h-0 flex-1 overflow-hidden px-4 pb-4 pt-2",children:o.jsxs(l,{className:"flex h-full min-h-0 flex-col gap-2",children:[o.jsxs(l,{className:"flex flex-wrap items-center gap-x-4 gap-y-2 rounded-lg border border-border px-3 py-2 text-sm",children:[o.jsxs(l,{className:"flex items-center gap-2",children:[o.jsx(l,{className:"text-muted-foreground",children:"Error"}),o.jsx(l,{className:"font-medium text-foreground",children:((r=t.error)===null||r===void 0?void 0:r.name)||"Error"})]}),o.jsx(l,{className:"h-4 w-px bg-border"}),o.jsxs(l,{className:"flex items-center gap-2",children:[o.jsx(l,{className:"text-muted-foreground",children:"Source"}),o.jsx(l,{className:"font-medium text-foreground",children:t.source})]})]}),o.jsxs(l,{className:"min-h-0 flex flex-1 flex-col overflow-hidden rounded-xl border border-border bg-black text-white",children:[o.jsxs(l,{className:"flex items-center justify-between border-b border-white border-opacity-10 px-3 py-3",children:[o.jsx(l,{className:"text-xs font-medium uppercase tracking-wide text-zinc-400",children:"Full Report"}),o.jsx(D,{variant:"outline",className:"border-zinc-700 bg-transparent px-2 py-1 text-xs text-zinc-400",children:t.timestamp})]}),o.jsx(re,{className:"min-h-0 flex-1 w-full",orientation:"both",children:o.jsx(l,{className:"inline-block min-w-full whitespace-pre px-3 py-3 pb-8 font-mono text-xs leading-6 text-zinc-200",children:t.report})})]})]})})]})})})})})]})})},dr=function(s){function e(){var r;Te(this,e);for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return r=Se(this,e,[].concat(i)),r.state={error:null},r}return we(e,s),ye(e,[{key:"componentDidUpdate",value:function(t){this.state.error&&t.children!==this.props.children&&this.setState({error:null})}},{key:"componentDidCatch",value:function(t,i){L(t,{source:"React Error Boundary",componentStack:i.componentStack||""})}},{key:"render",value:function(){return o.jsxs(o.Fragment,{children:[o.jsx(cr,{}),this.state.error?null:this.props.children]})}}],[{key:"getDerivedStateFromError",value:function(t){return{error:t}}}])}(v.Component),pr=function(e){var r=e.children;return o.jsx(dr,{children:r})},fr=function(e){var r=e.children;return ur(),b.useLaunch(function(){Xe(),Ye()}),o.jsx(pr,{children:o.jsx(Ze,{children:r})})},mr=function(e){var r=e.children;return o.jsxs(Be,{defaultColor:"#000",defaultSize:24,children:[o.jsx(fr,{children:r}),o.jsx(ze,{})]})},j=Q.__taroAppConfig={router:{mode:"hash"},pages:["pages/index/index","pages/project/list","pages/project/detail","pages/project/create","pages/project/evaluation","pages/audit/list","pages/audit/detail","pages/history/list","pages/history/detail","pages/system/index","pages/system/tags","pages/report/monthly-create"],window:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#fff",navigationBarTitleText:"WeChat",navigationBarTextStyle:"black"},tabBar:{color:"#999999",selectedColor:"#2563eb",backgroundColor:"#ffffff",borderStyle:"black",list:[{pagePath:"pages/index/index",text:"首页",iconPath:"./assets/tabbar/home.png",selectedIconPath:"./assets/tabbar/home-active.png"},{pagePath:"pages/project/list",text:"项目",iconPath:"./assets/tabbar/folder.png",selectedIconPath:"./assets/tabbar/folder-active.png"},{pagePath:"pages/audit/list",text:"审核",iconPath:"./assets/tabbar/check-circle.png",selectedIconPath:"./assets/tabbar/check-circle-active.png"},{pagePath:"pages/history/list",text:"历史库",iconPath:"./assets/tabbar/database.png",selectedIconPath:"./assets/tabbar/database-active.png"},{pagePath:"pages/system/tags",text:"标签管理",iconPath:"./assets/tabbar/tags.png",selectedIconPath:"./assets/tabbar/tags-active.png"}]}},w=[],y=[];w[0]="/static/images/home.png";y[0]="/static/images/home-active.png";w[1]="/static/images/folder.png";y[1]="/static/images/folder-active.png";w[2]="/static/images/check-circle.png";y[2]="/static/images/check-circle-active.png";w[3]="/static/images/database.png";y[3]="/static/images/database-active.png";w[4]="/static/images/tags.png";y[4]="/static/images/tags-active.png";var K=j.tabBar.list;for(var C=0;C<K.length;C++){var P=K[C];P.iconPath&&(P.iconPath=w[C]),P.selectedIconPath&&(P.selectedIconPath=y[C])}j.routes=[Object.assign({path:"pages/index/index",load:function(){var s=p(u().m(function r(t,i){var n;return u().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,h(()=>import("./index.d334def7.js"),["./index.d334def7.js","./vendors.5806d90d.js","..\\css\\vendors.8886af03.css","./common.3622fc2a.js"],import.meta.url);case 1:return n=a.v,a.a(2,[n,t,i])}},r)}));function e(r,t){return s.apply(this,arguments)}return e}()},{navigationBarTitleText:"首页"}),Object.assign({path:"pages/project/list",load:function(){var s=p(u().m(function r(t,i){var n;return u().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,h(()=>import("./list.7d71b843.js"),["./list.7d71b843.js","./vendors.5806d90d.js","..\\css\\vendors.8886af03.css","./common.3622fc2a.js"],import.meta.url);case 1:return n=a.v,a.a(2,[n,t,i])}},r)}));function e(r,t){return s.apply(this,arguments)}return e}()},{navigationBarTitleText:"项目列表",navigationStyle:"default",backgroundColor:"#f9fafb"}),Object.assign({path:"pages/project/detail",load:function(){var s=p(u().m(function r(t,i){var n;return u().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,h(()=>import("./detail.b6f21816.js"),["./detail.b6f21816.js","./vendors.5806d90d.js","..\\css\\vendors.8886af03.css","./common.3622fc2a.js"],import.meta.url);case 1:return n=a.v,a.a(2,[n,t,i])}},r)}));function e(r,t){return s.apply(this,arguments)}return e}()},{navigationBarTitleText:"项目详情",navigationStyle:"default",backgroundColor:"#f9fafb"}),Object.assign({path:"pages/project/create",load:function(){var s=p(u().m(function r(t,i){var n;return u().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,h(()=>import("./create.7d2888cc.js"),["./create.7d2888cc.js","./vendors.5806d90d.js","..\\css\\vendors.8886af03.css","./common.3622fc2a.js"],import.meta.url);case 1:return n=a.v,a.a(2,[n,t,i])}},r)}));function e(r,t){return s.apply(this,arguments)}return e}()},{navigationBarTitleText:"项目申报",navigationStyle:"default",backgroundColor:"#f9fafb"}),Object.assign({path:"pages/project/evaluation",load:function(){var s=p(u().m(function r(t,i){var n;return u().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,h(()=>import("./evaluation.032d5601.js"),["./evaluation.032d5601.js","./vendors.5806d90d.js","..\\css\\vendors.8886af03.css","./common.3622fc2a.js"],import.meta.url);case 1:return n=a.v,a.a(2,[n,t,i])}},r)}));function e(r,t){return s.apply(this,arguments)}return e}()},{navigationBarTitleText:"项目后评估",navigationBarBackgroundColor:"#2563eb",navigationBarTextStyle:"white"}),Object.assign({path:"pages/audit/list",load:function(){var s=p(u().m(function r(t,i){var n;return u().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,h(()=>import("./list.5bbb8842.js"),["./list.5bbb8842.js","./vendors.5806d90d.js","..\\css\\vendors.8886af03.css","./common.3622fc2a.js"],import.meta.url);case 1:return n=a.v,a.a(2,[n,t,i])}},r)}));function e(r,t){return s.apply(this,arguments)}return e}()},{navigationBarTitleText:"智能审核",navigationStyle:"default",backgroundColor:"#f9fafb"}),Object.assign({path:"pages/audit/detail",load:function(){var s=p(u().m(function r(t,i){var n;return u().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,h(()=>import("./detail.e9434330.js"),["./detail.e9434330.js","./vendors.5806d90d.js","..\\css\\vendors.8886af03.css","./common.3622fc2a.js"],import.meta.url);case 1:return n=a.v,a.a(2,[n,t,i])}},r)}));function e(r,t){return s.apply(this,arguments)}return e}()},{navigationBarTitleText:"审核详情",navigationStyle:"default",backgroundColor:"#f9fafb"}),Object.assign({path:"pages/history/list",load:function(){var s=p(u().m(function r(t,i){var n;return u().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,h(()=>import("./list.645d9a9e.js"),["./list.645d9a9e.js","./vendors.5806d90d.js","..\\css\\vendors.8886af03.css","./common.3622fc2a.js"],import.meta.url);case 1:return n=a.v,a.a(2,[n,t,i])}},r)}));function e(r,t){return s.apply(this,arguments)}return e}()},{navigationBarTitleText:"历史项目库",navigationStyle:"default",backgroundColor:"#f9fafb"}),Object.assign({path:"pages/history/detail",load:function(){var s=p(u().m(function r(t,i){var n;return u().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,h(()=>import("./detail.d03907ed.js"),["./detail.d03907ed.js","./vendors.5806d90d.js","..\\css\\vendors.8886af03.css","./common.3622fc2a.js"],import.meta.url);case 1:return n=a.v,a.a(2,[n,t,i])}},r)}));function e(r,t){return s.apply(this,arguments)}return e}()},{navigationBarTitleText:"项目详情"}),Object.assign({path:"pages/system/index",load:function(){var s=p(u().m(function r(t,i){var n;return u().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,h(()=>import("./index.4c11a6a5.js"),["./index.4c11a6a5.js","./vendors.5806d90d.js","..\\css\\vendors.8886af03.css","./common.3622fc2a.js"],import.meta.url);case 1:return n=a.v,a.a(2,[n,t,i])}},r)}));function e(r,t){return s.apply(this,arguments)}return e}()},{navigationBarTitleText:"系统管理"}),Object.assign({path:"pages/system/tags",load:function(){var s=p(u().m(function r(t,i){var n;return u().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,h(()=>import("./tags.0c6744b7.js"),["./tags.0c6744b7.js","./vendors.5806d90d.js","..\\css\\vendors.8886af03.css","./common.3622fc2a.js"],import.meta.url);case 1:return n=a.v,a.a(2,[n,t,i])}},r)}));function e(r,t){return s.apply(this,arguments)}return e}()},{navigationBarTitleText:"标签管理"}),Object.assign({path:"pages/report/monthly-create",load:function(){var s=p(u().m(function r(t,i){var n;return u().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,h(()=>import("./monthly-create.363c6a4f.js"),["./monthly-create.363c6a4f.js","./vendors.5806d90d.js","..\\css\\vendors.8886af03.css","./common.3622fc2a.js"],import.meta.url);case 1:return n=a.v,a.a(2,[n,t,i])}},r)}));function e(r,t){return s.apply(this,arguments)}return e}()},{navigationBarTitleText:"月度进展报表",navigationBarBackgroundColor:"#2563eb",navigationBarTextStyle:"white"})];Object.assign(Z,{findDOMNode:A.findDOMNode,render:A.render,unstable_batchedUpdates:A.unstable_batchedUpdates});Pe();var hr=ke(mr,ee,Z,j),ae=Fe({window:Q});Ne(j,ae);Ae(ae,hr,j,ee);De({designWidth:750,deviceRatio:{375:2,640:1.17,750:1,828:.905},baseFontSize:20,unitPrecision:void 0,targetUnit:void 0});
