(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{18:function(t,e,n){t.exports={button:"button_button__1Uw6D",disabled:"button_disabled__2H7RE"}},19:function(t,e,n){t.exports={wrapper:"answersPage_wrapper__3c5Hm",button:"answersPage_button__2cBRX"}},23:function(t,e,n){t.exports={text:"text_text__1IHVh"}},24:function(t,e,n){t.exports={button:"linkButton_button__1RM6F"}},26:function(t,e,n){t.exports={wrapper:"mainPage_wrapper__2BUPa"}},27:function(t,e,n){t.exports={wrapper:"questionsPage_wrapper__3Sj5V"}},28:function(t,e,n){t.exports={button:"nextButton_button__12eLn"}},29:function(t,e,n){t.exports={wrapper:"App_wrapper__q8765"}},40:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var s=n(0),r=n.n(s),a=n(22),c=n.n(a),o=n(7),i=n(2),u=n(23),l=n.n(u),j=n(1),b=function(t){var e=t.tag,n=t.fontSize,s=t.content,r=e;return Object(j.jsx)(r,{className:l.a.text,style:{fontSize:n},children:s})},f=n(24),p=n.n(f),d=function(t){var e=t.destination,n=t.content,s=t.fontSize,r=t.roundSize,a={width:r,height:r};return Object(j.jsx)(o.b,{to:e,className:p.a.button,style:a,children:Object(j.jsx)(b,{tag:"span",fontSize:s,content:n})})},x=n(26),h=n.n(x),O=function(){return Object(j.jsxs)("div",{className:h.a.wrapper,children:[Object(j.jsx)(b,{tag:"h1",fontSize:"3rem",content:"quizz app"}),Object(j.jsx)(d,{destination:"/questions",content:"start",fontSize:"3rem",roundSize:"15rem"})]})},m=n(13),w=n(9),g=function(t){for(var e=Object(m.a)(t),n=e.length-1;n>0;n--){var s=Math.floor(Math.random()*n),r=e[n];e[n]=e[s],e[s]=r}return e},_=[{text:"What was the first commercially successful video game?",answers:["pac-man","pong","saper"],correct:"pong"},{text:"What is the best selling videogame of all time?",answers:["minecraft","terraria","roblox"],correct:"minecraft"},{text:"What is the highest-selling gaming console to date?",answers:["ps2","ps3","xbox 360"],correct:"ps2"},{text:"What is the name of Mario\u2019s dinosaur sidekick?",answers:["luigi","yoshi","bowser"],correct:"yoshi"},{text:"Who released the first flight simulator game?",answers:["microsoft","apple","samsung"],correct:"microsoft"},{text:"What year was Nintendo founded?",answers:["1954","1889","1992"],correct:"1889"}],v=function(t){var e,n=Object(s.useState)((e=_,g(e.map((function(t){return{text:t.text,answers:g(t.answers),correct:t.correct}})))).slice(0,t));return Object(w.a)(n,1)[0]},S=n(18),z=n.n(S),k={button:"#FF7E7E",buttonSuccess:"#9CFF7E",buttonFail:"#AC1010",text:"#FFFFFF",background:"#FF5151"},F={success:k.buttonSuccess,fail:k.buttonFail,default:k.button},y=function(t){var e=t.onClick,n=t.content,s=t.fontSize,r=t.type,a=t.width,c={backgroundColor:F[r],width:a},o="".concat(z.a.button," ").concat(void 0===e?z.a.disabled:"");return Object(j.jsx)("button",{onClick:e,className:o,style:c,children:Object(j.jsx)(b,{tag:"span",fontSize:s,content:n})})},C=y;y.defaultProps={onClick:void 0,type:"default"};var q=n(27),N=n.n(q),P=Object(s.createContext)(),E=function(){var t=Object(s.useContext)(P),e=v(3),n=Object(i.f)(),r=Object(s.useState)(0),a=Object(w.a)(r,2),c=a[0],o=a[1];Object(s.useEffect)((function(){t.questions=e,t.answers=[]}),[]);return Object(j.jsxs)("div",{className:N.a.wrapper,children:[Object(j.jsx)(b,{tag:"h2",fontSize:"2.4rem",content:"Question ".concat(c+1,":")}),Object(j.jsx)(b,{tag:"p",fontSize:"1.5rem",content:e[c].text}),e[c].answers.map((function(s){return Object(j.jsx)(C,{onClick:function(){return function(s){t.answers=[].concat(Object(m.a)(t.answers),[s]),c>=e.length-1?n.push("/answers"):o((function(t){return t+1}))}(s)},content:s,fontSize:"2rem",width:"15rem"},s)}))]})},B=n(20),M=n(28),W=n.n(M),H=function(t){var e=t.destination,n=t.onClick,s=e?o.b:"button",r=e?{to:e}:{onClick:n};return Object(j.jsx)(s,Object(B.a)(Object(B.a)({},r),{},{className:W.a.button,children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 109 109",children:Object(j.jsxs)("g",{id:"Group_1","data-name":"Group 1",transform:"translate(-267 -696)",children:[Object(j.jsx)("circle",{id:"Ellipse_2","data-name":"Ellipse 2",cx:"54.5",cy:"54.5",r:"54.5",transform:"translate(267 696)",fill:"#fff"}),Object(j.jsx)("path",{id:"Polygon_1","data-name":"Polygon 1",d:"M34,0,68,59H0Z",transform:"translate(359 716) rotate(90)",fill:"#ff7e7e"})]})})}))},R=H;H.defaultProps={destination:void 0,onClick:void 0};var A=n(19),G=n.n(A),I=function(){var t=Object(s.useContext)(P),e=Object(i.f)(),n=Object(s.useState)(0),r=Object(w.a)(n,2),a=r[0],c=r[1],o=t.questions[a],u=t.answers[a];return Object(j.jsxs)("div",{className:G.a.wrapper,children:[Object(j.jsx)(b,{tag:"h2",fontSize:"2.4rem",content:"Question ".concat(a+1,":")}),Object(j.jsx)(b,{tag:"p",fontSize:"1.5rem",content:o.text}),o.answers.map((function(t){return Object(j.jsx)(C,{content:t,type:u!==t?"default":u===o.correct?"success":"fail",fontSize:"2rem",width:"15rem"},t)})),Object(j.jsx)("div",{className:G.a.button,children:Object(j.jsx)(R,{onClick:function(){a>=t.answers.length-1?e.push("/"):c((function(t){return t+1}))}})})]})},J=n(29),Q=n.n(J),U=function(){return Object(j.jsx)("div",{className:Q.a.wrapper,children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",exact:!0,children:Object(j.jsx)(O,{})}),Object(j.jsx)(i.a,{path:"/questions",children:Object(j.jsx)(E,{})}),Object(j.jsx)(i.a,{path:"/answers",children:Object(j.jsx)(I,{})})]})})};n(40);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(P.Provider,{value:{questions:{},answers:{}},children:Object(j.jsx)(o.a,{children:Object(j.jsx)(U,{})})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.ccd84061.chunk.js.map