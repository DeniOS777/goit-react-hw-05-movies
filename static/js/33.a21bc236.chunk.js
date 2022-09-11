"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{33:function(e,n,r){r.r(n),r.d(n,{default:function(){return U}});var t,o,s,c,a,i,u,p,d=r(885),l=r(791),f=r(501),x=r(871),h=r(66),m=r(390),v=r(834),b=r(168),j=r(444),w=(0,j.ZP)(f.rU)(t||(t=(0,b.Z)(["\n  display: inline-flex;\n  margin-bottom: 8px;\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  font-weight: 500;\n  color: #f15c27;\n  border: 1px solid #f15c27;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-top-left-radius: 16px;\n  border-bottom-left-radius: 16px;\n  text-decoration: none;\n  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;\n\n  &:hover {\n    color: #fff;\n    background-color: #f15c27;\n  }\n"]))),k=j.ZP.h2(o||(o=(0,b.Z)(["\n  margin-bottom: 35px;\n  font-size: 28px;\n  font-weight: 600;\n"]))),g=j.ZP.p(s||(s=(0,b.Z)(["\n  margin-bottom: 25px;\n"]))),Z=j.ZP.p(c||(c=(0,b.Z)(["\n  margin-bottom: 25px;\n\n  & b {\n    display: block;\n    margin-bottom: 15px;\n    font-size: 20px;\n  }\n"]))),y=j.ZP.p(a||(a=(0,b.Z)(["\n  margin-bottom: 15px;\n\n  & b {\n    display: block;\n    margin-bottom: 15px;\n  }\n"]))),P=j.ZP.div(i||(i=(0,b.Z)(["\n  border-radius: 6px;\n  overflow: hidden;\n"]))),_=j.ZP.div(u||(u=(0,b.Z)([""]))),S=j.ZP.div(p||(p=(0,b.Z)(["\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  grid-gap: 20px;\n"]))),E=r(184),U=function(){var e,n,r,t,o,s,c=(0,x.TH)(),a=(0,x.UO)().movieId,i=(0,l.useState)(null),u=(0,d.Z)(i,2),p=u[0],b=u[1];if((0,l.useEffect)((function(){(0,m.ce)(a).then((function(e){return b(e)})).catch((function(e){return h.Am.error(e.message)}))}),[a]),p){console.log(p);var j=null!==(e=null===(n=c.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",U=Number((p.vote_average/10*100).toFixed());return(0,E.jsx)("main",{children:(0,E.jsxs)(v.x,{px:4,children:[(0,E.jsx)(w,{to:j,children:"Go back"}),(0,E.jsxs)(S,{children:[(0,E.jsx)(P,{children:(0,E.jsx)("img",{src:"https://image.tmdb.org/t/p/w342".concat(p.poster_path),alt:"poster"})}),(0,E.jsxs)(_,{children:[(0,E.jsx)(k,{children:"".concat(p.title," (").concat(p.release_date,")")}),(0,E.jsxs)(g,{children:[(0,E.jsx)("b",{children:"User score:"})," ",U||"\ud83e\udd37\u200d\u2642\ufe0f","%"]}),(0,E.jsxs)(Z,{children:[(0,E.jsx)("b",{children:"Overview:"})," ",p.overview]}),(0,E.jsxs)(y,{children:[(0,E.jsx)("b",{children:"Genres:"})," ",p.genres[0].name]})]})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("p",{children:"Additional information"}),(0,E.jsxs)(v.x,{as:"ul",children:[(0,E.jsx)("li",{children:(0,E.jsx)(f.rU,{to:"cast",state:{from:null!==(r=null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==r?r:"/"},children:"Cast"})}),(0,E.jsx)("li",{children:(0,E.jsx)(f.rU,{to:"reviews",state:{from:null!==(o=null===(s=c.state)||void 0===s?void 0:s.from)&&void 0!==o?o:"/"},children:"Reviews"})})]}),(0,E.jsx)(l.Suspense,{fallback:null,children:(0,E.jsx)(x.j3,{})})]})]})})}}},390:function(e,n,r){r.d(n,{ZF:function(){return l},as:function(){return p},ce:function(){return u},re:function(){return i},zq:function(){return d}});var t=r(861),o=r(757),s=r.n(o),c="fac524451816d908f081cf899bfc32e2",a="https://api.themoviedb.org/3",i=function(){var e=(0,t.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/trending/movie/day?api_key=").concat(c));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.results);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(n.status))));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/movie/").concat(n,"?api_key=").concat(c));case 2:if(!(r=e.sent).ok){e.next=8;break}return e.next=6,r.json();case 6:return t=e.sent,e.abrupt("return",t);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(r.status))));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(c));case 2:if(!(r=e.sent).ok){e.next=8;break}return e.next=6,r.json();case 6:return t=e.sent,e.abrupt("return",t.cast);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(r.status))));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(c));case 2:if(!(r=e.sent).ok){e.next=8;break}return e.next=6,r.json();case 6:return t=e.sent,e.abrupt("return",t.results);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(r.status))));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/search/movie?api_key=").concat(c,"&query=").concat(n));case 2:if(!(r=e.sent).ok){e.next=8;break}return e.next=6,r.json();case 6:return t=e.sent,e.abrupt("return",t.results);case 8:return e.abrupt("return",Promise.reject(new Error("Server responsed with status code: ".concat(r.status))));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=33.a21bc236.chunk.js.map