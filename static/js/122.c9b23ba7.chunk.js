"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[122],{122:function(e,r,t){t.r(r),t.d(r,{default:function(){return i}});var n=t(885),c=t(791),u=t(871),a=t(66),s=t(390),o=t(184),i=function(){var e=(0,u.UO)().movieId,r=(0,c.useState)(null),t=(0,n.Z)(r,2),i=t[0],f=t[1];if((0,c.useEffect)((function(){(0,s.zq)(e).then((function(e){return f(e)})).catch((function(e){return a.Am.error(e.message)}))}),[e]),i)return console.log(i),(0,o.jsx)("div",{children:i.length>0?(0,o.jsx)("ul",{children:i.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("p",{children:["Author: ",e.author]}),(0,o.jsx)("p",{children:e.content})]},e.id)}))}):(0,o.jsx)("p",{children:"We don't have any reviews for this movie."})})}},390:function(e,r,t){t.d(r,{ZF:function(){return h},as:function(){return f},ce:function(){return i},re:function(){return o},zq:function(){return p}});var n=t(861),c=t(757),u=t.n(c),a="fac524451816d908f081cf899bfc32e2",s="https://api.themoviedb.org/3",o=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/trending/movie/day?api_key=").concat(a));case 2:if(!(r=e.sent).ok){e.next=8;break}return e.next=6,r.json();case 6:return t=e.sent,e.abrupt("return",t.results);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(r.status))));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(r,"?api_key=").concat(a));case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(t.status))));case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(r,"/credits?api_key=").concat(a));case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.cast);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(t.status))));case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(r,"/reviews?api_key=").concat(a));case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(t.status))));case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/search/movie?api_key=").concat(a,"&query=").concat(r));case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(t.status))));case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=122.c9b23ba7.chunk.js.map