(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{24:function(e,t){},25:function(e,t){},30:function(e,t,c){},33:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(20),r=c.n(s),o=(c(30),c(16)),i=c.n(o),j=c(21),u=c(9),b=c(13),l=c(12),d=c(11),h=c(22),m=c(2),p=[{title:"Home",path:"/Home",icon:Object(m.jsx)(l.a,{}),cName:"nav-text"},{title:"Reports",path:"/reports",icon:Object(m.jsx)(h.a,{}),cName:"nav-text"},{title:"Products",path:"/products",icon:Object(m.jsx)(b.b,{}),cName:"nav-text"}],x=(c(33),c(0));var O=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],s=function(){return a(!c)};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(x.b.Provider,{value:{color:"#fff"},children:[Object(m.jsx)("div",{className:"navbar",children:Object(m.jsx)(d.a,{to:"#",className:"menu-bars",children:Object(m.jsx)(b.a,{onClick:s})})}),Object(m.jsx)("nav",{className:c?"nav-menu-active":"nav-menu",children:Object(m.jsxs)("ul",{className:"nav-meni-items",onClick:s,children:[Object(m.jsx)("li",{"className-":"navbar-toggle",children:Object(m.jsx)(d.a,{to:"#",className:"menu-bars",children:Object(m.jsx)(l.b,{})})}),p.map((function(e,t){return Object(m.jsx)("li",{className:e.cName,children:Object(m.jsxs)(d.a,{to:e.path,children:[e.icon,Object(m.jsx)("span",{children:e.title})]})},t)}))]})})]})})},f=c(3);var v=function(){return Object(m.jsx)("div",{className:"home",children:Object(m.jsx)("h1",{children:" Home "})})},y=c(24),N=c.n(y),g=c(25),w=c.n(g),S="e18cd550-7ab3-11eb-b603-3d466becf114",P="https://geolocation-db.com/json/",F="6c91341b4c2a841ddae2e208e7da2de4",D="https://api.openweathermap.org/data/2.5/";var k=function(){Object(n.useEffect)((function(){p()}),[]);var e=Object(n.useState)(),t=Object(u.a)(e,2),c=(t[0],t[1]),a=Object(n.useState)(""),s=Object(u.a)(a,2),r=s[0],o=s[1],b=Object(n.useState)({}),l=Object(u.a)(b,2),d=l[0],h=l[1],p=function(){var e=Object(j.a)(i.a.mark((function e(){var t,n,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(P).concat(S));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,c(n),e.next=9,fetch("".concat(D,"weather?q=").concat(n.city,"&units=metric&APPID=").concat(F));case 9:return a=e.sent,e.next=12,a.json();case 12:s=e.sent,h(s);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"undefined"!=typeof d.main&&d.main.temp>16?"app warm":"app",children:[Object(m.jsx)(O,{}),Object(m.jsxs)(f.c,{children:[Object(m.jsx)(f.a,{path:"/home",exact:!0,components:v}),Object(m.jsx)(f.a,{path:"/reports",components:N.a}),Object(m.jsx)(f.a,{path:"/products",components:w.a})]}),Object(m.jsxs)("main",{children:[Object(m.jsx)("div",{className:"search-box",children:Object(m.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return o(e.target.value)},value:r,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(D,"weather?q=").concat(r,"&units=metric&APPID=").concat(F)).then((function(e){return e.json()})).then((function(e){h(e),o(""),console.log(e)}))}})}),"undefined"!=typeof d.main?Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"location-box",children:[Object(m.jsxs)("div",{className:"location",children:[d.name,", ",d.sys.country]}),Object(m.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],c=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],a=e.getFullYear();return"".concat(t," ").concat(c," ").concat(n," ").concat(a)}(new Date)})]}),Object(m.jsxs)("div",{className:"weather-box",children:[Object(m.jsxs)("div",{className:"temp",children:[Math.round(d.main.temp),"\xb0c"]}),Object(m.jsx)("div",{className:"weather",children:d.weather[0].main})]})]}):""]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),C()}},[[39,1,2]]]);
//# sourceMappingURL=main.aaedf971.chunk.js.map