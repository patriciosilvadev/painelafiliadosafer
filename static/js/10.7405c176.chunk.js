(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{1005:function(e,t,a){"use strict";var r=a(782);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,a="--".concat(e),o=Object(r.a)(a,t);return o||e}},1061:function(e,t,a){"use strict";a.r(t);var r=a(1),o=a.n(r),n=a(613),l=a(614),i=a(701);t.default=function(e){return e.withCharts?o.a.createElement(n.U,null,o.a.createElement(n.n,{sm:"6",lg:"3"},o.a.createElement(n.hb,{color:"facebook",rightHeader:"89k",rightFooter:"friends",leftHeader:"459",leftFooter:"feeds"},o.a.createElement(l.a,{name:"cib-facebook",height:"52",className:"my-4"}),o.a.createElement(i.a,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[65,59,84,84,51,55,40],label:"Friends",labels:"months"}))),o.a.createElement(n.n,{sm:"6",lg:"3"},o.a.createElement(n.hb,{color:"twitter",rightHeader:"973k",rightFooter:"followers",leftHeader:"1.792",leftFooter:"tweets"},o.a.createElement(l.a,{name:"cib-twitter",height:"52",className:"my-4"}),o.a.createElement(i.a,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[1,13,9,17,34,41,38],label:"Followers",labels:"months"}))),o.a.createElement(n.n,{sm:"6",lg:"3"},o.a.createElement(n.hb,{color:"linkedin",rightHeader:"500+",rightFooter:"contracts",leftHeader:"292",leftFooter:"feeds"},o.a.createElement(l.a,{name:"cib-linkedin",height:"52",className:"my-4"}),o.a.createElement(i.a,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[78,81,80,45,34,12,40],label:"Contracts",labels:"months"}))),o.a.createElement(n.n,{sm:"6",lg:"3"},o.a.createElement(n.hb,{rightHeader:"12",rightFooter:"events",leftHeader:"4",leftFooter:"meetings",color:"gradient-warning"},o.a.createElement(l.a,{name:"cil-calendar",height:"52",className:"my-4"}),o.a.createElement(i.a,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[35,23,56,22,97,23,64],label:"Followers",labels:"months"})))):o.a.createElement(n.U,null,o.a.createElement(n.n,{sm:"6",lg:"3"},o.a.createElement(n.hb,{color:"facebook",rightHeader:"89k",rightFooter:"friends",leftHeader:"459",leftFooter:"feeds"},o.a.createElement(l.a,{name:"cib-facebook",height:"56",className:"my-4"}))),o.a.createElement(n.n,{sm:"6",lg:"3"},o.a.createElement(n.hb,{color:"twitter",rightHeader:"973k",rightFooter:"followers",leftHeader:"1.792",leftFooter:"tweets"},o.a.createElement(l.a,{name:"cib-twitter",height:"56",className:"my-4"}))),o.a.createElement(n.n,{sm:"6",lg:"3"},o.a.createElement(n.hb,{color:"linkedin",rightHeader:"500+",rightFooter:"contracts",leftHeader:"292",leftFooter:"feeds"},o.a.createElement(l.a,{name:"cib-linkedin",height:"56",className:"my-4"}))),o.a.createElement(n.n,{sm:"6",lg:"3"},o.a.createElement(n.hb,{rightHeader:"12",rightFooter:"events",leftHeader:"4",leftFooter:"meetings",color:"gradient-warning"},o.a.createElement(l.a,{name:"cil-calendar",height:"56",className:"my-4"}))))}},674:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}a.d(t,"a",(function(){return r}))},701:function(e,t,a){"use strict";var r=a(674),o=a(1),n=a.n(o),l=a(1005),i=function e(t,a){for(var r=0,o=Object.keys(a);r<o.length;r++){var n=o[r];a[n]instanceof Object&&Object.assign(a[n],e(t[n],a[n]))}return Object.assign(t||{},a),t},s=a(673),c=function(e){var t=e.borderColor,a=e.backgroundColor,o=e.pointHoverBackgroundColor,c=e.dataPoints,m=e.label,d=e.pointed,b=Object(r.a)(e,["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"]),g=o||("transparent"!==a?a:t),h=[{data:c,borderColor:Object(l.a)(t),backgroundColor:Object(l.a)(a),pointBackgroundColor:Object(l.a)(g),pointHoverBackgroundColor:Object(l.a)(g),label:m}],u={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,c)-5,max:Math.max.apply(Math,c)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},f={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},p=function(){var e=d?u:f;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),E=i(h,b.datasets||{}),k=i(p,b.options||{});return n.a.createElement(s.b,Object.assign({},b,{type:"line",datasets:E,options:k,labels:m}))};c.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"};t.a=c}}]);
//# sourceMappingURL=10.7405c176.chunk.js.map