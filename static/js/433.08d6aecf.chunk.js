"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[433],{433:function(n,e,t){t.r(e),t.d(e,{default:function(){return o}});var r=t(885),i=t(791),u=t(739),a=t(243),c=t(184),o=function(){var n=function(){var n=(0,i.useState)(null),e=(0,r.Z)(n,2),t=e[0],c=e[1],o=(0,u.UO)().movieId;return(0,i.useEffect)((function(){(0,a.Jw)(o).then(c)}),[o]),t}();return(0,c.jsx)("div",{children:n&&(0,c.jsx)(c.Fragment,{children:0!==n.data.results.length?(0,c.jsx)("ul",{children:n.data.results.map((function(n){return(0,c.jsxs)("li",{children:[(0,c.jsx)("h2",{children:n.author}),(0,c.jsx)("p",{children:n.content})]},n.id)}))}):(0,c.jsx)("p",{children:"Don't Found Reviews"})})})}},243:function(n,e,t){t.d(e,{Jw:function(){return s},LI:function(){return a},Mc:function(){return c},XK:function(){return o},a8:function(){return u}});var r=t(44);r.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i="e15863a6aae97b6859d248b0c6515614",u=function(){return(0,r.ZP)("trending/movie/day",{params:{api_key:i}})},a=function(n){return(0,r.ZP)("search/movie",{params:{api_key:i,query:n}})},c=function(n){return(0,r.ZP)("movie/".concat(n),{params:{api_key:i}})},o=function(n){return(0,r.ZP)("movie/".concat(n,"/credits"),{params:{api_key:i}})},s=function(n){return(0,r.ZP)("movie/".concat(n,"/reviews"),{params:{api_key:i}})}}}]);
//# sourceMappingURL=433.08d6aecf.chunk.js.map