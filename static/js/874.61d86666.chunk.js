"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[874],{874:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var i,r=t(739),a=t(731),s=t(885),c=t(791),o=t(243),d=t(168),u=(0,t(444).ZP)("div")(i||(i=(0,d.Z)(["\n  text-decoration: none;\n  font-size: 18px;\n  color: #000;\n  display: flex;\n  justify-content: start;\n  gap: 15px;\n  align-items: center;\n  max-width: 1200px;\n"]))),l=t(184),h=function(){var n=function(){var n=(0,c.useState)(null),e=(0,s.Z)(n,2),t=e[0],i=e[1],a=(0,r.UO)().movieId;return(0,c.useEffect)((function(){(0,o.Mc)(a).then(i)}),[a]),t}(),e=(0,r.s0)(),t=(0,r.TH)();return(0,l.jsx)("div",{children:n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{type:"button",onClick:function(){var n,i;e(null!==(n=null===t||void 0===t||null===(i=t.state)||void 0===i?void 0:i.from)&&void 0!==n?n:"/")},children:"\u227a Go Back"}),(0,l.jsxs)(u,{children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n.data.poster_path),alt:n.data.original_title,width:"300px",height:"460px"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:n.data.original_title}),(0,l.jsxs)("p",{children:["User Score: ",Math.round(10*n.data.vote_average),"%"]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:n.data.overview}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:n.data.genres.map((function(n){var e=n.id,t=n.name;return(0,l.jsxs)("span",{children:[t,", "]},e)}))})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Additional Information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(a.rU,{to:"cast",state:t.state,children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a.rU,{to:"reviews",state:t.state,children:"Reviews"})})]})]}),(0,l.jsx)(r.j3,{})]})})}},243:function(n,e,t){t.d(e,{Jw:function(){return d},LI:function(){return s},Mc:function(){return c},XK:function(){return o},a8:function(){return a}});var i=t(44);i.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var r="e15863a6aae97b6859d248b0c6515614",a=function(){return(0,i.ZP)("trending/movie/day",{params:{api_key:r}})},s=function(n){return(0,i.ZP)("search/movie",{params:{api_key:r,query:n}})},c=function(n){return(0,i.ZP)("movie/".concat(n),{params:{api_key:r}})},o=function(n){return(0,i.ZP)("movie/".concat(n,"/credits"),{params:{api_key:r}})},d=function(n){return(0,i.ZP)("movie/".concat(n,"/reviews"),{params:{api_key:r}})}}}]);
//# sourceMappingURL=874.61d86666.chunk.js.map