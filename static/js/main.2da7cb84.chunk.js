(this["webpackJsonpreact-gif-browser"]=this["webpackJsonpreact-gif-browser"]||[]).push([[0],{12:function(e,t,n){e.exports=n(28)},17:function(e,t,n){},18:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=(n(17),n(2)),l=(n(18),n(3)),u=n(4),s=function(e){var t=r.a.useState(""),n=Object(i.a)(t,2),a=n[0],o=n[1],c=r.a.createRef();return r.a.useEffect((function(){c.current.focus()}),[]),r.a.createElement("div",{className:"center"===e.position?"searchBar":"searchBar-Top"},r.a.createElement("div",{className:"searchTitle"},r.a.createElement("h1",{onClick:function(){window.location.reload()},style:{cursor:"pointer"}},"GIF browser"),r.a.createElement("sub",null,"Powered by ",r.a.createElement("a",{href:"https://developers.giphy.com/docs/sdk/",rel:"noopener noreferrer",target:"_blank"},"Giphy"))),r.a.createElement("div",{className:"searchForm"},r.a.createElement("input",{type:"text",ref:c,className:"searchInput",placeholder:"Search GIF database...",value:a,onChange:function(e){return o(e.target.value)},onKeyDown:function(t){return"Enter"===t.key&&e.onSearch(a)}}),r.a.createElement("button",{className:"searchButton",onClick:function(){return e.onSearch(a)}},r.a.createElement(l.a,{icon:u.c}))))},f=n(10),d=function(e){var t=e.gifData.images.fixed_width,n=t.webp,a=e.gifData.title,o=t.width,c=t.height;return r.a.createElement("div",{style:{position:"absolute",width:o+"px",height:c+"px",top:e.gifData.top,left:e.gifData.left,backgroundColor:"#bbbbf9",cursor:"pointer"},onClick:e.onClick},r.a.createElement("img",{src:n,alt:a}))},h=(n(24),n(25),n(26),function(e){var t;switch(e.position){case"floating":t="loaderFloating";break;case"absolute":t="loaderAbsolute";break;default:t="loaderFixed"}return r.a.createElement("div",{className:t},"Loading... ",r.a.createElement(l.a,{icon:u.d,spin:!0}))}),m=function(e){var t=r.a.useState(!1),n=Object(i.a)(t,2),a=n[0],o=n[1],c=r.a.useRef(),s=e.gif.images.original,f=s.webp,d=e.gif.title,m=parseInt(s.width)+10,g=parseInt(s.height)+10;return r.a.useEffect((function(){c.current.addEventListener("click",(function(t){"overlay"===t.target.className&&e.closeView()}))}),[]),r.a.useEffect((function(){o(!1)}),[e.gif]),r.a.createElement("div",{className:"overlay",ref:c},r.a.createElement(l.a,{icon:u.e,className:"closeButton",onClick:e.closeView}),e.showPrevious&&r.a.createElement(l.a,{icon:u.a,className:"leftButton",onClick:e.previous}),r.a.createElement("div",{className:"modalWindow",style:{width:m+"px",height:g+"px"}},r.a.createElement("div",{className:"previewContainer"},!a&&r.a.createElement(h,{position:"absolute"}),r.a.createElement("img",{src:f,alt:d,key:e.index,style:{zIndex:2,maxWidth:"1000px",maxHeight:"600px"},onLoad:function(){o(!0)}}))),e.showNext&&r.a.createElement(l.a,{icon:u.b,className:"rightButton",onClick:e.next}))},g=function(e){var t=r.a.useState([]),n=Object(i.a)(t,2),a=n[0],o=n[1],c=r.a.useState(-1),l=Object(i.a)(c,2),u=l[0],s=l[1],h=r.a.useRef(u),g=r.a.useRef(a.length),E=function(e){h.current=e,s(e)};return r.a.useEffect((function(){return window.addEventListener("keyup",(function(e){-1!==h.current&&("ArrowLeft"===e.key?E(h.current-1>=0?h.current-1:h.current):"ArrowRight"===e.key?E(h.current+1<g.current?h.current+1:h.current):"Escape"===e.key&&E(-1))})),function(){window.removeEventListener("keyup",(function(){}))}}),[]),r.a.useEffect((function(){!function(e){g.current=e.length,o(e)}(function(e,t){var n,a=[],r=0,o=-1,c=Object(f.a)(e);try{for(c.s();!(n=c.n()).done;){var i=n.value;r%t===0&&(a[++o]=[]);var l=r-o*t;if(i.top=0,o>0){var u=a[o-1][l];i.top=parseInt(u.top)+parseInt(u.images.fixed_width.height)+10}if(i.left=0,l>0){var s=a[o][l-1];i.left=parseInt(s.left)+parseInt(s.images.fixed_width.width)+10}a[o].push(i),r++}}catch(d){c.e(d)}finally{c.f()}return e}(e.data,e.columns))}),[e.data,e.columns]),0===e.data.length?null:r.a.createElement(r.a.Fragment,null,u>=0&&r.a.createElement(m,{gif:a[u],index:u,closeView:function(){return E(-1)},next:function(){return E((function(e){return e+1<a.length?e+1:e}))},showNext:u<a.length-1,previous:function(){return E((function(e){return e-1>=0?e-1:e}))},showPrevious:u>0}),r.a.createElement("div",{className:"searchResult"},a.map((function(e,t){return r.a.createElement(d,{gifData:e,key:t,onClick:function(){return E(t)}})}))))},E=n(11),p=n.n(E),w=Object({NODE_ENV:"production",PUBLIC_URL:"/react-gif-browser",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL,v=Object({NODE_ENV:"production",PUBLIC_URL:"/react-gif-browser",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY,b=function(){var e=r.a.useState([]),t=Object(i.a)(e,2),n=t[0],a=t[1],o=r.a.useState(null),c=Object(i.a)(o,2),l=c[0],u=c[1],f=r.a.useState(0),d=Object(i.a)(f,2),m=d[0],E=d[1],b=r.a.useState(!1),y=Object(i.a)(b,2),S=y[0],_=y[1],k=r.a.useState(0),O=Object(i.a)(k,2),C=O[0],x=O[1],N=r.a.useState(!1),T=Object(i.a)(N,2),P=T[0],j=T[1],I=r.a.useState(null),D=Object(i.a)(I,2),L=D[0],R=D[1];return r.a.useEffect((function(){return window.addEventListener("scroll",(function(e){window.scrollY+window.innerHeight>=document.body.scrollHeight&&E((function(e){return e+1}))})),function(){window.removeEventListener("scroll",(function(){}))}}),[]),r.a.useEffect((function(){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;null===e||25*t>C||(_(!0),window.fetch("".concat(w,"?api_key=").concat(v,"&q=").concat(e,"&limit=").concat(25,"&offset=").concat(25*t)).then((function(e){return e.json()})).then((function(e){_(!1),R(null),x(e.pagination.total_count),j(0===e.data.length),a((function(n){return 0===t?e.data:n.concat(e.data)}))})).catch((function(e){R("Ouch! There has been an error. Please try again later."),_(!1)})))}(l,m)}),[l,m]),r.a.useEffect((function(){n.length>0&&window.innerHeight>document.body.scrollHeight&&E((function(e){return e+1}))}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{href:"https://github.com/nerychucuy/react-gif-browser",bannerColor:"#7f51fd",octoColor:"#fff",size:80,direction:"right"}),r.a.createElement("div",{style:{width:"80%",margin:"0 auto"}},r.a.createElement(s,{onSearch:function(e){0!==e.length&&(E(0),a([]),u(e))},position:null===l?"center":"top"}),P&&r.a.createElement("p",null,"No results found. Try another word."),null!==L&&r.a.createElement("p",{style:{color:"#ff0000"}},L),n.length>0&&r.a.createElement(g,{data:n,columns:6}),S&&r.a.createElement(h,{position:n.length>0?"fixed":"floating"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.2da7cb84.chunk.js.map