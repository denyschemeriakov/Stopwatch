(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{19:function(t,e,n){},21:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var c=n(3),r=n.n(c),a=n(14),s=n.n(a),i=(n(19),n(10)),j=n(28),o=n(25),b=n(26),u=n(27),l=n(1),O=function(){var t=Object(c.useState)(0),e=Object(i.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)([]),s=Object(i.a)(a,2),O=s[0],p=s[1],f=Object(c.useState)(0),d=Object(i.a)(f,2),x=d[0],h=d[1],m=Object(c.useState)(!1),v=Object(i.a)(m,2),y=v[0],S=v[1],k=Object(c.useState)(new j.a),I=Object(i.a)(k,1)[0];Object(c.useEffect)((function(){var t=function(t){var e=Math.floor(t/3600),n=Math.floor((t-3600*e)/60),c=t-3600*e-60*n;return[e<10?"0".concat(e):e,n<10?"0".concat(n):n,c<10?"0".concat(c):c]}(n);I.pipe(Object(o.a)((function(){return(new Date).getTime()})),Object(b.a)(2,1),Object(u.a)((function(t){return t[0]>(new Date).getTime()-300}))).subscribe((function(){clearInterval(x),S(!y)})),p(t)}),[n]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("section",{className:"d-flex justify-content-center display-3",children:[Object(l.jsx)("p",{children:O[0]}),Object(l.jsx)("span",{children:":"}),Object(l.jsx)("p",{children:O[1]}),Object(l.jsx)("span",{children:":"}),Object(l.jsx)("p",{children:O[2]})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(l.jsx)("button",{type:"button",onClick:function(){if(y)clearInterval(x),r(0);else{var t=setInterval((function(){r((function(t){return t+1}))}),1e3);h(t)}S(!y)},className:"btn btn-outline-primary",children:"Start/Stop"}),Object(l.jsx)("button",{type:"button",onClick:function(){I.next(!0)},className:"btn btn-outline-primary mx-2",children:"Wait"}),Object(l.jsx)("button",{type:"button",onClick:function(){if(y){clearInterval(x),r(0);var t=setInterval((function(){r((function(t){return t+1}))}),1e3);h(t)}},className:"btn btn-outline-primary",children:"Reset"})]})]})},p=(n(21),n(22),function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(O,{})})});s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9eae82ac.chunk.js.map