"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{304:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r,c,o,u=n(885),a=n(791),s=n(66),i=(n(462),n(390)),f=n(834),p=n(168),h=n(444),l=n(501),d=h.ZP.h1(r||(r=(0,p.Z)(["\n  margin-bottom: ","px;\n  font-size: ",";\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.fontSizes.l})),v=(0,h.ZP)(l.rU)(c||(c=(0,p.Z)(["\n  text-decoration: underline;\n  color: ",";\n\n  &:visited {\n    color: ",";\n  }\n\n  &:hover:not(.active),\n  &:focus-visible:not(.active) {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.blue}),(function(e){return e.theme.colors.violet}),(function(e){return e.theme.colors.orange})),m=h.ZP.li(o||(o=(0,p.Z)(["\n  font-weight: ",";\n\n  &:not(:last-child) {\n    margin-bottom: ","px;\n  }\n"])),(function(e){return e.theme.fontWeights.middle}),(function(e){return e.theme.space[2]})),x=n(184),k=function(){var e=(0,a.useState)([]),t=(0,u.Z)(e,2),n=t[0],r=t[1];return(0,a.useEffect)((function(){(0,i.re)().then((function(e){return r(e)})).catch((function(e){return s.Am.error(e.message)}))}),[]),(0,x.jsx)("main",{children:(0,x.jsxs)(f.x,{px:4,children:[(0,x.jsx)(d,{children:"Trending today"}),n.length>0&&(0,x.jsx)(f.x,{as:"ul",pl:3,children:n.map((function(e){var t=e.id,n=e.title,r=e.original_title;return(0,x.jsx)(m,{children:(0,x.jsx)(v,{to:"/movies/".concat(t),children:n||r})},t)}))})]})})}},390:function(e,t,n){n.d(t,{ZF:function(){return h},as:function(){return f},ce:function(){return i},re:function(){return s},zq:function(){return p}});var r=n(861),c=n(757),o=n.n(c),u="fac524451816d908f081cf899bfc32e2",a="https://api.themoviedb.org/3",s=function(){var e=(0,r.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/trending/movie/day?api_key=").concat(u));case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(t.status))));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/movie/").concat(t,"?api_key=").concat(u));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(n.status))));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.cast);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(n.status))));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.results);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(n.status))));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/search/movie?api_key=").concat(u,"&query=").concat(t));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.results);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(n.status))));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},462:function(){}}]);
//# sourceMappingURL=304.68bd5b27.chunk.js.map