(this.webpackJsonpbread=this.webpackJsonpbread||[]).push([[0],{24:function(e,t,r){},25:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var a=r(1),s=r(0),i=r.n(s),n=r(17),l=r.n(n),o=(r(24),r(10)),c=r(13),h=r(8),u=(r(25),[{title:"Starter Care",url:"starter_care",steps:{"Day 1, Morning":"Take the starter out of the fridge. Take 10g of the starter and mix with 50g of flour and 50g of water. Let rest covered at room temperature for 8 to 12 hours. Discard the unused rest of the starter or bake into pancakes","Day 1, Evening":"Put the starter back into the fridge. It will survive there for 7-10 days."}},{title:"Tartine Bread",url:"tartine",steps:{"Day 1, Morning":"Take the starter and feed it (10g Starter, 50g Rye flour, 50g water). Let it rest at room temperature for the day.","Day 1, Evening":"Mixing the main dough: The activated starter (110g), 500g flour (there you can vary a lot, I mainly use 60-70% T550 wheat flour and the rest either whole wheat, whole spelt or rye. Though rye doughs turn very sticky, so it's probably easier to try this after some initial experiments), 375g water (probably easier to start the first breads with something like 330g), 12g salt. Mix until the dough is almost smooth. Let it rest for 10-15 minutes, mix again until smooth. Now the dough rests for something like 2h. During that period the dough is strech and folded every 30 minutes, if you find the time. After the 2h passed, it's put in the fridge. This stage is called the bulk fermentation.","Day 2, Morning":"Shaping the dough. Getting the dough out of the fridge and on the counter. Pre-shape, let it rest for 10-15 minutes, and final shaping. That's hard to explain, I'll add some links to videos. Or there is also a good description in Tartine Bread. Place the shaped loaf in a proofing basket or a lined sieve as alternative, put it in a plastic bag (so it doesn't dry out) and put it back in the fridge.","Day 2, Evening":"I normally bake in a dutch oven. Pre-heating the oven with the dutch-oven inside upto 250\xb0C for 30 minutes. During that time you can let the loaf rest at room temperature, too. Bake the bread at 250\xb0C for 30 minutes with the dutch-oven lid on, and another 15 minutes without the lid."},ratios:{Flour:100,Water:72,Salt:2.3,Sourdough:20},base:500},{title:"Brezel",url:"brezel",steps:{},ratios:{Flour:100,Water:50,Butter:10,Salt:2.3,Sourdough:20},base:250}]),d=r(14),b=r(2),j=function(e){var t=e.title,r=e.description;return Object(a.jsxs)("div",{className:"py-3 border-b-2",children:[Object(a.jsx)("h1",{className:"font-semibold text-xl underline",children:t}),Object(a.jsx)("p",{className:"pl-4 pt-2",children:r})]})},g=function(e){var t=e.recipe.steps;return Object(a.jsx)("div",{children:Object.entries(t).map((function(e){var t=Object(h.a)(e,2),r=t[0],s=t[1];return Object(a.jsx)(j,{title:r,description:s},r)}))})},m=function(e){var t=e.recipe,r=Object(s.useState)(t.ratios),i=Object(h.a)(r,2),n=i[0],l=i[1],u=Object(s.useState)(t.base),d=Object(h.a)(u,2),b=d[0],j=d[1];if(!t.ratios)return Object(a.jsx)(a.Fragment,{});var g=Object.entries(n).map((function(e){var t=Object(h.a)(e,2),r=(t[0],t[1]);return b*r})).reduce((function(e,t){return e+t}))/100;return Object(a.jsxs)("ul",{className:"table w-96 shadow-md border rounded mx-auto p-2",children:[Object(a.jsxs)("li",{className:"table-row",children:[Object(a.jsx)("span",{className:"table-cell border-b border-r"}),Object(a.jsx)("span",{className:"table-cell pl-3 border-b font-semibold text-right",children:"Percentage | %"}),Object(a.jsx)("span",{className:"table-cell pl-3 border-b font-semibold text-right",children:"Weight | g"})]}),Object.entries(n).map((function(e){var t=Object(h.a)(e,2),r=t[0],s=t[1];return Object(a.jsxs)("li",{className:"table-row",children:[Object(a.jsx)("span",{className:"table-cell font-semibold text-right border-r pr-2",children:r}),"Flour"!==r?Object(a.jsx)("input",{className:"table-cell text-right w-full bg-yellow-50",type:"number",value:s,onChange:function(e){return function(e,t,r,a){a(Object(c.a)(Object(c.a)({},e),{},Object(o.a)({},t,r)))}(n,r,e.target.value,l)}}):Object(a.jsx)("span",{className:"table-cell pl-4 text-right",children:s}),"Flour"===r?Object(a.jsx)("input",{className:"table-cell text-right w-full bg-yellow-50 right-0",type:"number",value:b,onChange:function(e){return j(e.target.value)}}):Object(a.jsx)("span",{className:"table-cell pl-4 text-right",children:(b*(s/100)).toFixed(0)})]},r)})),Object(a.jsxs)("li",{className:"table-row",children:[Object(a.jsx)("span",{className:"table-cell"}),Object(a.jsx)("span",{className:"table-cell"}),Object(a.jsx)("span",{className:"table-cell border-t italic text-right",children:g.toFixed(0)})]})]})};var p=function(){var e=Object.values(u);return Object(a.jsx)(d.a,{children:Object(a.jsxs)("div",{className:"bg-yellow-50 font-serif min-h-screen",children:[Object(a.jsx)("header",{className:"bg-yellow-400 py-3",children:Object(a.jsx)("nav",{className:"w-7/12 mx-auto",children:Object(a.jsx)("ul",{className:"flex flex-row space-x-6 text-3xl",children:e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{activeClassName:"font-bold",to:"/"+e.url,children:e.title})},e.url)}))})})}),Object(a.jsx)("div",{className:"w-10/12 mx-auto max-w-2xl mt-8",children:Object(a.jsx)(b.c,{children:e.map((function(e){return Object(a.jsxs)(b.a,{path:"/"+e.url,children:[Object(a.jsx)(m,{recipe:e}),Object(a.jsx)(g,{recipe:e})]},e.url)}))})})]})})},f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,35)).then((function(t){var r=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;r(e),a(e),s(e),i(e),n(e)}))};l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),f()}},[[34,1,2]]]);
//# sourceMappingURL=main.40419137.chunk.js.map