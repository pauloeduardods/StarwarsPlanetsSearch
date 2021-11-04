(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var r,c,a,s,i,l,o,u,d=n(2),j=n(57),x=n.n(j),b=n(1),m=n.n(b),f=(n(65),Object(d.createContext)()),h=n(6),p=n(7),O=n.n(p),v=O.a.th(r||(r=Object(h.a)(["\n  px-6\n  py-3\n  text-left\n  text-xs\n  font-medium\n  text-white\n  uppercase\n  tracking-wider\n"]))),y=O.a.td(c||(c=Object(h.a)(["\n  px-6\n  py-4\n  whitespace-nowrap\n  overflow-x-auto\n  max-w-table\n  overflow-y-hidden\n"]))),g=O.a.label(a||(a=Object(h.a)(["\n  block\n  ml-2\n"]))),k=O.a.span(s||(s=Object(h.a)(["\n  block\n  ml-2\n"]))),N=O.a.input(i||(i=Object(h.a)(["\n  mt-1\n  focus:ring-indigo-500\n  focus:border-indigo-500\n  block\n  w-full\n  sm:text-sm\n  border\n  border-gray-200\n  rounded-md\n  shadow-sm\n  text-lg\n  p-1\n  sm:p-2\n"]))),w=O.a.select(l||(l=Object(h.a)(["\n  mt-1\n  focus:ring-indigo-500\n  focus:border-indigo-500\n  block\n  w-full\n  sm:text-sm\n  border\n  border-gray-200\n  rounded-md\n  shadow-sm\n  text-lg\n  py-1\n  pl-1\n  sm:py-2\n  sm:pl-2\n  pr-5\n"]))),S=O.a.button(o||(o=Object(h.a)(["\n  col-span-12\n  inline-flex\n  justify-center\n  py-2\n  px-4\n  border\n  border-transparent\n  shadow-sm\n  text-sm\n  font-medium\n  rounded-md\n  text-white\n  bg-indigo-600\n  hover:bg-indigo-700\n  focus:outline-none\n  focus:ring-2\n  focus:ring-offset-2\n  focus:ring-indigo-500\n"]))),B=O.a.form(u||(u=Object(h.a)(["\n  border-t\n  border-gray-200\n  w-full\n  py-4\n  grid\n  grid-cols-12\n  gap-6\n"]))),C=n(58),V=n.n(C),F=n(59),A=n(0);var E=function(){var e=Object(d.useContext)(f),t=e.planets,n=e.loading,r=e.filters.filters,c=r.filterByName.name,a=r.filterByNumericValues,s=r.order,i={loop:!0,autoplay:!0,animationData:F,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return Object(A.jsx)("div",{className:"flex flex-col",children:Object(A.jsx)("div",{className:"-my-2 overflow-x-auto",children:Object(A.jsx)("div",{className:"py-2 align-middle inline-block min-w-full",children:n||!t||0===t.length?Object(A.jsx)(V.a,{height:150,width:150,options:i}):Object(A.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(A.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[Object(A.jsx)("thead",{className:"bg-indigo-600",children:Object(A.jsxs)("tr",{children:[Object(A.jsx)(v,{children:Object(A.jsx)(m.a,{children:"Name"})}),Object(A.jsx)(v,{children:Object(A.jsx)(m.a,{children:"Rotation Period"})}),Object(A.jsx)(v,{children:Object(A.jsx)(m.a,{children:"Orbital Period"})}),Object(A.jsx)(v,{children:Object(A.jsx)(m.a,{children:"Diameter"})}),Object(A.jsx)(v,{children:Object(A.jsx)(m.a,{children:"Climate"})}),Object(A.jsx)(v,{children:Object(A.jsx)(m.a,{children:"Gravity"})}),Object(A.jsx)(v,{children:Object(A.jsx)(m.a,{children:"Terrain"})}),Object(A.jsx)(v,{children:Object(A.jsx)(m.a,{children:"Surface Water"})}),Object(A.jsx)(v,{children:Object(A.jsx)(m.a,{children:"Population"})}),Object(A.jsx)(v,{children:Object(A.jsx)(m.a,{children:"Films"})}),Object(A.jsx)(v,{children:Object(A.jsx)(m.a,{children:"Residents"})})]})}),Object(A.jsx)("tbody",{className:"bg-white divide-y divide-gray-300",children:t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})).filter((function(e){return a.reduce((function(t,n){var r=n.column,c=n.comparison,a=n.value;if(!1===t)return!1;var s=Number(e[r]),i=Number(a);switch(c){case"maior que":return s>i;case"menor que":return s<i;case"igual a":return s===i;default:return!1}}),!0)})).sort((function(e,t){return function(e,t,n){var r=n.column,c=n.sort,a=Number.isNaN(Number(e[r]))?e[r]:Number(e[r]),s=Number.isNaN(Number(t[r]))?t[r]:Number(t[r]);return"ASC"===c?a>s?1:-1:a<s?1:-1}(e,t,s)})).map((function(e,t){return Object(A.jsxs)("tr",{className:t%2===0?"bg-gray-50":"bg-gray-200",children:[Object(A.jsx)(y,{"data-testid":"planet-name",children:Object(A.jsx)(m.a,{children:e.name})}),Object(A.jsx)(y,{children:Object(A.jsx)(m.a,{children:e.rotation_period})}),Object(A.jsx)(y,{children:Object(A.jsx)(m.a,{children:e.orbital_period})}),Object(A.jsx)(y,{children:Object(A.jsx)(m.a,{children:e.diameter})}),Object(A.jsx)(y,{children:Object(A.jsx)(m.a,{children:e.climate})}),Object(A.jsx)(y,{children:Object(A.jsx)(m.a,{children:e.gravity})}),Object(A.jsx)(y,{children:Object(A.jsx)(m.a,{children:e.terrain})}),Object(A.jsx)(y,{children:Object(A.jsx)(m.a,{children:e.surface_water})}),Object(A.jsx)(y,{children:Object(A.jsx)(m.a,{children:e.population})}),Object(A.jsx)(y,{children:Object(A.jsx)(m.a,{children:e.films.join(" | ")})}),Object(A.jsx)(y,{children:Object(A.jsx)(m.a,{children:e.residents.join(" | ")})})]},e.name)}))})]})})})})})},D=n(5),P=["population","orbital_period","diameter","rotation_period","surface_water"],G=["name","Climate","Terrain"].concat(P);var T=function(){var e=Object(d.useContext)(f),t=e.setFilterByName,n=e.setFilterByNumericValues,r=e.setOrder,c=e.filters.filters,a=c.filterByName,s=c.filterByNumericValues,i=c.order,l=Object(d.useState)(""),o=Object(D.a)(l,2),u=o[0],j=o[1],x=Object(d.useState)(""),b=Object(D.a)(x,2),h=b[0],p=b[1],O=Object(d.useState)(""),v=Object(D.a)(O,2),y=v[0],C=v[1],V=Object(d.useState)(i.column),F=Object(D.a)(V,2),E=F[0],T=F[1],q=Object(d.useState)(i.sort),_=Object(D.a)(q,2),J=_[0],L=_[1];return Object(A.jsx)(m.a,{children:Object(A.jsx)("div",{className:"w-full flex justify-center my-6",children:Object(A.jsxs)("div",{className:"sm:w-4/5 border-2 border-gray-200 shadow-lg sm:rounded-xl rounded-none",children:[Object(A.jsx)("div",{className:"bg-indigo-600 w-full h-16 sm:rounded-t-xl rounded-none flex justify-center items-center",children:Object(A.jsx)("h1",{className:"text-3xl font-bold text-white",children:"Filters"})}),Object(A.jsxs)("div",{className:"py-3 px-6",children:[Object(A.jsxs)("div",{className:"w-full mb-4",children:[Object(A.jsx)(g,{htmlFor:"by-name",children:"Filter By Name"}),Object(A.jsx)(N,{"data-testid":"name-filter",type:"text",value:a.name,id:"by-name",onChange:function(e){var n=e.target.value;return t(n)}})]}),Object(A.jsxs)(B,{onSubmit:function(e){e.preventDefault(),n(u,h,y),j(""),p(""),C("")},children:[Object(A.jsxs)("div",{className:"col-span-4 flex justify-between flex-col",children:[Object(A.jsx)(g,{htmlFor:"columns-filter",children:"Filter By Column"}),Object(A.jsxs)(w,{id:"columns-filter","data-testid":"column-filter",value:u,onChange:function(e){var t=e.target.value;return j(t)},children:[Object(A.jsx)("option",{value:"",disabled:!0,children:"Select a column"}),P.filter((function(e){return!s.some((function(t){return e===t.column}))})).map((function(e){return Object(A.jsx)("option",{value:e,children:e},e)}))]})]}),Object(A.jsxs)("div",{className:"col-span-4 flex justify-between flex-col",children:[Object(A.jsx)(g,{htmlFor:"comparison-filter",children:"Comparison"}),Object(A.jsxs)(w,{id:"comparison-filter","data-testid":"comparison-filter",value:h,onChange:function(e){var t=e.target.value;return p(t)},children:[Object(A.jsx)("option",{value:"",disabled:!0,children:"Select a comparison"}),Object(A.jsx)("option",{value:"maior que",children:"maior que"}),Object(A.jsx)("option",{value:"menor que",children:"menor que"}),Object(A.jsx)("option",{value:"igual a",children:"igual a"})]})]}),Object(A.jsxs)("div",{className:"col-span-4 flex justify-between flex-col",children:[Object(A.jsx)(g,{htmlFor:"value-filter",children:"Value"}),Object(A.jsx)(N,{id:"value-filter","data-testid":"value-filter",type:"number",value:y,onChange:function(e){var t=e.target.value;return C(t)}})]}),Object(A.jsx)(S,{"data-testid":"button-filter",type:"submit",children:"Filtrar"})]}),Object(A.jsxs)(B,{onSubmit:function(e){e.preventDefault(),r(E,J)},children:[Object(A.jsxs)("div",{className:"col-span-12 sm:col-span-7 md:col-span-9",children:[Object(A.jsx)(g,{htmlFor:"order",children:"Order By"}),Object(A.jsxs)(w,{id:"order","data-testid":"column-sort",value:E,onChange:function(e){var t=e.target.value;return T(t)},children:[Object(A.jsx)("option",{value:"",disabled:!0,children:"Select a column"}),G.map((function(e){return Object(A.jsx)("option",{value:e,children:e},e)}))]})]}),Object(A.jsxs)("div",{className:"col-span-12 sm:col-span-5 md:col-span-3",children:[Object(A.jsx)(k,{children:"Order"}),Object(A.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(A.jsxs)("div",{className:"flex items-center",children:[Object(A.jsx)("input",{type:"radio",id:"ASC",className:"form-radio mr-1 h-4 w-4","data-testid":"column-sort-input-asc",onChange:function(){return L("ASC")},checked:"ASC"===J}),Object(A.jsx)("label",{htmlFor:"ASC",children:"ASC"})]}),Object(A.jsxs)("div",{className:"flex items-center",children:[Object(A.jsx)("input",{type:"radio",id:"ASC",className:"form-radio mr-1 h-4 w-4","data-testid":"column-sort-input-desc",onChange:function(){return L("DESC")},checked:"DESC"===J}),Object(A.jsx)("label",{htmlFor:"ASC",children:"DESC"})]})]})]}),Object(A.jsx)(S,{type:"submit","data-testid":"column-sort-button",children:"Order"})]})]})]})})})},q=n(60),_=n(3),J=n(8),L=n.n(J),R=n(21),M="https://swapi-trybe.herokuapp.com/api",I=function(){var e=Object(R.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(R.a)(L.a.mark((function e(){var t,n,r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(M,"/films"));case 3:return t=e.sent,e.next=6,t.json();case 6:if(!((n=e.sent).count>10)){e.next=14;break}for(r=[],c=11;c<=n.count;c+=1)r.push(I("".concat(M,"/films/").concat(c)));return e.next=12,Promise.all(r);case 12:e.sent.forEach((function(e){return n.results.push(e)}));case 14:return e.abrupt("return",n.results);case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(R.a)(L.a.mark((function e(){var t,n,r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(M,"/people"));case 3:return t=e.sent,e.next=6,t.json();case 6:if(!((n=e.sent).count>10)){e.next=14;break}for(r=[],c=11;c<=n.count;c+=1)r.push(I("".concat(M,"/people/").concat(c)));return e.next=12,Promise.all(r);case 12:e.sent.forEach((function(e){return n.results.push(e)}));case 14:return e.abrupt("return",n.results);case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(R.a)(L.a.mark((function e(){var t,n,r,c,a,s,i,l,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:return t=e.sent,e.next=5,W();case 5:return n=e.sent,e.prev=6,e.next=9,fetch("".concat(M,"/planets"));case 9:return r=e.sent,e.next=12,r.json();case 12:if(c=e.sent,a=c.results,!((s=c.count)>10)){e.next=22;break}for(i=[],l=11;l<=s;l+=1)i.push(I("".concat(M,"/planets/").concat(l)));return e.next=20,Promise.all(i);case 20:e.sent.forEach((function(e){return a.push(e)}));case 22:return e.next=24,a.map((function(e){var r=e.films,c=e.residents,a=r.map((function(e){return n.find((function(t){return t.url===e})).title})),s=c.map((function(e){var n=t.find((function(t){return t.url===e}));return n?n.name:null}));return Object(_.a)(Object(_.a)({},e),{},{films:a,residents:s})}));case 24:return o=e.sent,e.abrupt("return",o);case 28:e.prev=28,e.t0=e.catch(6),console.log(e.t0);case 31:case"end":return e.stop()}}),e,null,[[6,28]])})));return function(){return e.apply(this,arguments)}}(),H=z,K={filters:{filterByName:{name:""},filterByNumericValues:[],order:{column:"name",sort:"ASC"}}};var Q=function(e){var t=e.children,n=Object(d.useState)([]),r=Object(D.a)(n,2),c=r[0],a=r[1],s=Object(d.useState)(!0),i=Object(D.a)(s,2),l=i[0],o=i[1],u=Object(d.useState)(K),j=Object(D.a)(u,2),x=j[0],b=j[1];return Object(d.useEffect)((function(){o(!0),H().then((function(e){a(e),o(!1)}))}),[]),Object(A.jsx)(f.Provider,{value:{planets:c,loading:l,filters:x,setFilterByName:function(e){b({filters:Object(_.a)(Object(_.a)({},x.filters),{},{filterByName:{name:e}})})},setFilterByNumericValues:function(e,t,n){var r=x.filters.filterByNumericValues,c=[{column:e,comparison:t,value:n}].concat(Object(q.a)(r));b({filters:Object(_.a)(Object(_.a)({},x.filters),{},{filterByNumericValues:c})})},deleteFilterByNumericValues:function(e){var t=x.filters.filterByNumericValues.filter((function(t){return t.column!==e}));b({filters:Object(_.a)(Object(_.a)({},x.filters),{},{filterByNumericValues:t})})},setOrder:function(e,t){b({filters:Object(_.a)(Object(_.a)({},x.filters),{},{order:{column:e,sort:t}})})}},children:t})};var U=function(){var e=Object(d.useContext)(f),t=e.filters.filters.filterByNumericValues,n=e.deleteFilterByNumericValues;return Object(A.jsx)("div",{children:t.map((function(e){return Object(A.jsxs)("div",{"data-testid":"filter",children:[Object(A.jsx)("span",{children:e.column}),Object(A.jsx)("span",{children:e.comparison}),Object(A.jsx)("span",{children:e.value}),Object(A.jsx)("button",{type:"button",onClick:function(){return n(e.column)},children:"x"})]},e.column)}))})},X=n.p+"static/media/logo.44ff9a25.svg";var Z=function(){return Object(A.jsxs)(Q,{children:[Object(A.jsx)("div",{className:"lg:flex lg:items-center lg:justify-between mt-4 mb-6",children:Object(A.jsxs)("div",{className:"flex-1 min-w-0",children:[Object(A.jsx)("div",{className:"flex justify-center",children:Object(A.jsx)(m.a,{children:Object(A.jsx)("img",{src:X,alt:"logo",className:"h-48 w-48"})})}),Object(A.jsx)(T,{}),Object(A.jsx)(U,{})]})}),Object(A.jsx)(E,{})]})};n(134);x.a.render(Object(A.jsx)(Z,{}),document.getElementById("root"))},59:function(e){e.exports=JSON.parse('{"v":"5.5.5","fr":25,"ip":0,"op":79,"w":300,"h":150,"nm":"Loading-2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"icon 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":39,"s":[-90]},{"t":79,"s":[270]}],"ix":10},"p":{"a":0,"k":[150,75,0],"ix":2},"a":{"a":0,"k":[53,53,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-15.464],[15.464,0],[0,15.464],[-15.464,0]],"o":[[0,15.464],[-15.464,0],[0,-15.464],[15.464,0]],"v":[[28,0],[0,28],[-28,0],[0,-28]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.30980392156862746,0.27450980392156865,0.8980392156862745,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[53,53],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":51,"s":[0]},{"t":79,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":39,"s":[0]},{"t":64,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":39,"op":79,"st":39,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"icon","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[-90]},{"t":40,"s":[270]}],"ix":10},"p":{"a":0,"k":[150,75,0],"ix":2},"a":{"a":0,"k":[53,53,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-15.464],[15.464,0],[0,15.464],[-15.464,0]],"o":[[0,15.464],[-15.464,0],[0,-15.464],[15.464,0]],"v":[[28,0],[0,28],[-28,0],[0,-28]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.30980392156862746,0.27450980392156865,0.8980392156862745,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[53,53],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":12,"s":[0]},{"t":40,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":25,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":40,"st":0,"bm":0}],"markers":[]}')},65:function(e,t,n){}},[[135,1,2]]]);
//# sourceMappingURL=main.207fac04.chunk.js.map