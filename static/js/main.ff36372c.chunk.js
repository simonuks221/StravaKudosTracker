(this["webpackJsonpstrava-kudos-tracker"]=this["webpackJsonpstrava-kudos-tracker"]||[]).push([[0],{173:function(e,t,a){},174:function(e,t,a){},314:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(62),o=a.n(s),i=a(15),u=(a(173),a(174),a(175),a(34)),l=a(316),h=a(317),d=["title","titleId"];function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function p(e,t){var a=e.title,c=e.titleId,s=b(e,d);return r.createElement("svg",j({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},s),void 0===a?r.createElement("title",{id:c},"GitHub"):a?r.createElement("title",{id:c},a):null,n||(n=r.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))}var f,m=r.forwardRef(p),O=(a.p,["title","titleId"]);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function k(e,t){var a=e.title,n=e.titleId,c=x(e,O);return r.createElement("svg",v({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},c),void 0===a?r.createElement("title",{id:n},"LinkedIn"):a?r.createElement("title",{id:n},a):null,f||(f=r.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))}var g=r.forwardRef(k),w=(a.p,a(2)),y=function(){var e=Object(r.useContext)(D),t=Object(r.useState)(""),a=Object(i.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){var t=window.location;"localhost"===t.hostname?c("http://localhost:3000"):c("https://simonuks221.github.io/StravaKudosTracker"),console.log(n);var a=new URLSearchParams(t.search).get("code");a&&(e.changeAuth(Object(u.a)(Object(u.a)({},e.auth),{},{code:a})),e.changeState("authorization"))}),[]),Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"page pre-login",children:[Object(w.jsx)(l.a,{children:Object(w.jsxs)(h.a,{children:[Object(w.jsx)("h1",{className:"text-center",children:"Kudos tracker"}),Object(w.jsx)("p",{className:"text-center",children:"An app to show who gives you Kudos the most"})]})}),Object(w.jsx)(l.a,{className:"pt-5",children:Object(w.jsxs)(h.a,{className:"text-center",children:[Object(w.jsx)("a",{className:"text-center link-button",href:"https://www.strava.com/oauth/authorize?client_id=".concat(e.auth.clientId,"&response_type=code&redirect_uri=").concat(n,"&approval_prompt=force&scope=activity:read"),children:"Login to strava"}),Object(w.jsxs)("div",{className:"pt-5",children:[Object(w.jsx)("p",{children:"Made by Simonas Riauka"}),Object(w.jsx)("a",{className:"about-links",href:"https://github.com/simonuks221",children:Object(w.jsx)(m,{})}),Object(w.jsx)("a",{className:"about-links",href:"https://linkedin.com/in/simonas-riauka-851a7017b",children:Object(w.jsx)(g,{})})]})]})})]})})},S=a(20),E=a.n(S),N=a(43),C=a(318),P=function(){var e=Object(r.useContext)(D),t=function(){var t=Object(N.a)(E.a.mark((function t(){var a,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.strava.com/api/v3/oauth/token?client_id=".concat(e.auth.clientId,"&client_secret=").concat(e.auth.clientSecret,"&code=").concat(e.auth.code,"&grant_type=authorization_code"),{method:"POST",headers:{"Content-Type":"application/json"}});case 3:if(!(a=t.sent).ok){t.next=12;break}return t.next=7,a.json();case 7:n=t.sent,e.changeAuth(Object(u.a)(Object(u.a)({},e.auth),{},{data:n})),e.changeState("loggedIn"),t.next=13;break;case 12:e.changeState("preLogin");case 13:window.history.replaceState({},document.title,"/"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log("error fetching token: ",t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){t()}),[]),Object(w.jsx)("div",{className:"page authorization",children:Object(w.jsx)(l.a,{children:Object(w.jsxs)(h.a,{className:"text-center",children:[Object(w.jsx)("p",{className:"p-2",children:"Loading, please wait"}),Object(w.jsx)(C.a,{animation:"border",role:"status",children:Object(w.jsx)("span",{className:"sr-only",children:"Loading..."})})]})})})},z=a(325),I=a(319),_=a(320),A=a(324),L=a(161),K=a(162),T=a(164),B=a(70),M=a(67),G=function(e){var t=e.kudosData,a=e.activityCount,n=Object(r.useState)(),c=Object(i.a)(n,2),s=(c[0],c[1]),o=function(e){var a=e.active,n=e.payload,r=e.label;return a&&n&&n.length?Object(w.jsxs)("div",{className:"chart-tooltip",children:[Object(w.jsx)("p",{children:"#".concat(t.findIndex((function(e){return e.name===n[0].payload.name}))+1," ").concat(r,", ").concat(n[0].payload.surname)}),Object(w.jsx)("hr",{className:"solid"}),Object(w.jsx)("p",{children:"Kudos given: ".concat(n[0].value)})]}):""};return Object(r.useEffect)((function(){s(Date.now())}),[t]),Object(w.jsx)("div",{className:"secondary-panel",children:0===t.length?Object(w.jsx)("p",{children:"Looks like you don't have any Kudos given to you :("}):Object(w.jsx)(I.a,{width:"100%",height:75*t.length,children:Object(w.jsxs)(_.a,{layout:"vertical",width:800,height:75*a,data:t,margin:{top:5,right:30,left:20,bottom:5},children:[Object(w.jsx)(A.a,{strokeDasharray:"6 6",horizontal:!1}),Object(w.jsx)(L.a,{type:"number",dataKey:"kudos"}),Object(w.jsx)(K.a,{type:"category",dataKey:"name"}),Object(w.jsx)(T.a,{name:"Number of Kudos given across ".concat(a," ").concat(1===a?"activity":"activities"),dataKey:"kudos",barSize:50,fill:getComputedStyle(document.documentElement).getPropertyValue("--primaryColor")}),Object(w.jsx)(B.a,{content:Object(w.jsx)(o,{}),cursor:{fill:"rgb(255, 255, 255, 0.6)"}}),Object(w.jsx)(M.a,{})]})})})},H=function(){var e,t=Object(r.useContext)(D),a=Object(r.useState)([]),n=Object(i.a)(a,2),c=n[0],s=n[1],o=Object(r.useState)(0),d=Object(i.a)(o,2),j=d[0],b=d[1],p=Object(r.useState)(!1),f=Object(i.a)(p,2),m=f[0],O=f[1],v=Object(r.useState)([]),x=Object(i.a)(v,2),k=(x[0],x[1]),g=function(){var e=Object(N.a)(E.a.mark((function e(){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.strava.com/api/v3/athlete/activities",{method:"GET",headers:{Authorization:"Bearer ".concat(t.auth.data.access_token)}});case 2:if(!(a=e.sent).ok){e.next=10;break}return e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:if(429!==a.status){e.next=14;break}throw new Error("Too mnay requests please try again later, code: 0001");case 14:throw new Error("Couldnt get all activities: "+a);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(N.a)(E.a.mark((function e(a){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.strava.com/api/v3/activities/".concat(a,"/kudos"),{method:"GET",headers:{Authorization:"Bearer ".concat(t.auth.data.access_token)}});case 2:if(!(n=e.sent).ok){e.next=10;break}return e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:if(429!==n.status){e.next=14;break}throw new Error("Too mnay requests please try again later, code: 0002");case 14:throw new Error("Couldnt get kudoers of the activity: "+n);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(N.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(),e.prev=1,e.next=4,g();case 4:if(t=e.sent,a=0,!t){e.next=12;break}return k(t),e.next=10,t.forEach(function(){var e=Object(N.a)(E.a.mark((function e(t){var n,r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t.id);case 2:if(!(n=e.sent)){e.next=10;break}for(r=function(e){var t=c.findIndex((function(t){return t.name===n[e].firstname}));if(-1===t){var a=c;a.push({name:n[e].firstname,surname:n[e].lastname,kudos:1}),s(a)}else{var r=c;r[t]=Object(u.a)(Object(u.a)({},r[t]),{},{kudos:r[t].kudos+1}),s(r)}},o=0;o<n.length;o++)r(o);b(a+=1),e.next=11;break;case 10:throw new Error("Code 0003");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 10:b(a),O(!0);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),alert(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}(),C=function(){b(0),s([]),O(!1)},P=function(){var e=Object(N.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.strava.com/oauth/deauthorize?access_token".concat(t.auth.data.access_token,"/kudos"),{method:"POST",headers:{Authorization:"Bearer ".concat(t.auth.data.access_token)}});case 3:if(!(a=e.sent).ok){e.next=10;break}return t.changeAuth({}),t.changeState("preLogin"),e.abrupt("return");case 10:429===a.status?alert("Too many requests, please try again later 3"):console.log("Couldnt deauthorize: ",a);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Error encountered while deauthorizing: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{className:"page logged-in",children:Object(w.jsxs)(z.a,{fluid:!0,children:[Object(w.jsx)(l.a,{children:Object(w.jsx)(h.a,{className:"mb-2",children:t.auth.data?Object(w.jsx)("h2",{className:"secondary-panel text-center",children:"Hello ".concat(t.auth.data.athlete.firstname," ").concat(t.auth.data.athlete.lastname)}):""})}),Object(w.jsxs)(l.a,{children:[Object(w.jsx)(h.a,{md:10,children:m?Object(w.jsx)(G,{activityCount:j,kudosData:(e=c,e?e.sort((function(e,t){return t.kudos-e.kudos})):"")}):Object(w.jsx)("div",{className:"chart-placeholder secondary-panel",children:Object(w.jsx)("h4",{children:"Kudos data will show up here after you press the button on the right"})})}),Object(w.jsxs)(h.a,{md:2,children:[Object(w.jsx)("button",{className:"link-button mb-5",onClick:S,children:"Get activities"}),Object(w.jsx)("button",{className:"link-button mb-5",onClick:function(){C();b(7),s([{name:"Petras1",surname:"Petrauskas1",kudos:4},{name:"Antanas11",surname:"Petrauskas2",kudos:5},{name:"Petras2",surname:"Petrauskas3",kudos:7},{name:"Antanas2",surname:"Petrauskas4",kudos:2},{name:"Petras3",surname:"Petrauskas5",kudos:1},{name:"Antanas3",surname:"Petrauskas6",kudos:3}]),O(!0)},children:"Get dummy data"}),m?Object(w.jsx)("button",{className:"link-button mb-5",onClick:C,children:"Clear data"}):"",Object(w.jsx)("button",{className:"link-button",onClick:P,children:"Log out"})]})]})]})})},D=c.a.createContext(void 0);var R=function(){var e=Object(r.useState)({clientId:68084,clientSecret:"c16851e68bce7147d63916970b9f3ab9b8c2330d"}),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)("preLogin"),s=Object(i.a)(c,2),o=s[0],u=s[1];return Object(w.jsx)("div",{children:Object(w.jsx)(D.Provider,{value:{auth:a,changeAuth:n,changeState:u},children:function(){switch(o){case"preLogin":return Object(w.jsx)(y,{});case"authorization":return Object(w.jsx)(P,{});case"loggedIn":return Object(w.jsx)(H,{});default:return console.log("Error, state not true"),Object(w.jsx)("p",{children:"State faulty"})}}()})})};o.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(R,{})}),document.getElementById("root"))}},[[314,1,2]]]);
//# sourceMappingURL=main.ff36372c.chunk.js.map