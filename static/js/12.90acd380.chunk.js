(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{1068:function(e,t,n){"use strict";n.r(t);var a=n(621),r=n(1),o=n.n(r),l=n(613),i=n(614),c=[{id:0,nome:"Contrato de Afilia\xe7\xe3o",descricao:"Contrato referente ao processo e aprova\xe7\xe3o de afilia\xe7\xe3o a CONAFER BRASIL",comentatio:[{id:0,comentario:"Do que se trata o termo 'afilia\xe7\xe3o'?",comentarioPai:null,feitopor:"Por Mim",feitoem:"18/08/2020"},{id:1,comentario:"O termo afiliado \xe9 o nome que se d\xe1 ao indiv\xedduo afiliado a conafer",comentarioPai:0,feitopor:"Colaborador Jur\xeddico",feitoem:"19/08/2020"}],criado:"18/08/2020",assinado:"20/08/2020",status:"Assinado"},{id:0,nome:"Contrato de ETC",descricao:"Contrato referente a etc",comentatio:[{id:0,comentario:"E esse contrato aqui? N\xe3o entendi seu prop\xf3sito",comentarioPai:null,feitopor:"Por Mim",feitoem:"18/08/2020"}],criado:"19/08/2020",assinado:"-",status:"Pendente"}],u=function(e){switch(e){case"Assinado":return"success";case"Inactive":return"secondary";case"Pendente":return"warning";case"Banned":return"danger";default:return"primary"}},s=["nome","criado","assinado","status"];t.default=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],m=t[1],d=Object(r.useState)(null),f=Object(a.a)(d,2),p=f[0],E=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.U,null,o.a.createElement(l.n,null,o.a.createElement(l.i,null,o.a.createElement(l.m,{style:{flexDirection:"row",display:"flex",justifyContent:"space-between"}},o.a.createElement("div",null,o.a.createElement("h3",null,"Contratos"),o.a.createElement("span",null,"Confira aqui seus contratos com a CONAFER BRASIL")),o.a.createElement("div",null,o.a.createElement(l.z,{row:!0},o.a.createElement(l.I,null,o.a.createElement(l.K,null,o.a.createElement(l.f,{type:"button",color:"primary"},o.a.createElement(i.a,{name:"cil-magnifying-glass"})," Procurar")),o.a.createElement(l.G,{id:"input1-group2",name:"input1-group2",placeholder:"Nome de contrato"})))),o.a.createElement("div",null,o.a.createElement(l.I,null,o.a.createElement(l.s,{className:"input-group-prepend"},o.a.createElement(l.v,{caret:!0,color:"primary"},"Filtrar"),o.a.createElement(l.u,null,o.a.createElement(l.t,null,"Assinados"),o.a.createElement(l.t,null,"Rejeitados"),o.a.createElement(l.t,null,"Pendentes")))))),o.a.createElement(l.j,null,o.a.createElement(l.r,{items:c,fields:s,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,clickableRows:!0,onRowClick:function(e){m(!n),E(e)},scopedSlots:{status:function(e){return o.a.createElement("td",null,o.a.createElement(l.b,{color:u(e.status)},e.status))}}})))),o.a.createElement(l.O,{show:n,onClose:function(){return m(!n)},size:"lg"},o.a.createElement(l.R,{closeButton:!0},o.a.createElement(l.S,null,p&&p.nome," [",p&&p.status,"]")),o.a.createElement(l.P,null,o.a.createElement("p",null,p&&p.descricao,o.a.createElement("br",null),o.a.createElement("p",{style:{fontSize:9}},"Criando em ",p&&p.criado)),p&&p.comentatio&&p.comentatio.map((function(e){return o.a.createElement(l.a,{color:null==e.comentarioPai?"secondary":"success"},null!=e.comentarioPai&&o.a.createElement("p",null,"EM RESPOSTA",o.a.createElement("br",null)),o.a.createElement("p",null,e.comentario),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},o.a.createElement("p",{style:{fontWeight:"bold"}},e.feitopor),o.a.createElement("p",null,e.feitoem)))}))),o.a.createElement(l.Q,null,p&&"Pendente"==p.status&&o.a.createElement(l.f,{color:"primary",onClick:function(){return m(!n)}},"Assinar"),o.a.createElement(l.f,{color:"secondary",onClick:function(){return alert("Baixar arquivo de contrato ''"+p.nome+".pdf'?")}},"Download PDF")))))}},621:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(631);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(c){r=!0,o=c}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},631:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(632);function r(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},632:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=12.90acd380.chunk.js.map