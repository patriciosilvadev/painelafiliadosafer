(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9],{1070:function(e,t,a){"use strict";a.r(t);var n=a(621),r=a(1),l=a.n(r),o=a(613),c=a(614),i=[{id:"1298037144",numero:"#1298037144",via:"Primeira",mesreferente:"Agosto",recebido:"01/08/2020",vencimento:"31/08/2020",status:"Em Aberto"},{id:"1012123717",numero:"#1012123717",via:"Primeira",mesreferente:"Julho",recebido:"01/07/2020",vencimento:"31/07/2020",status:"Atrasado"},{id:"1901231283",numero:"#1901231283",via:"Primeira",mesreferente:"Junho",recebido:"01/06/2020",vencimento:"30/06/2020",status:"Pago"}],s=a(964),u=a.n(s),m=function(e){switch(e){case"Pago":return"success";case"Em Aberto":return"secondary";case"Pendente":return"warning";case"Atrasado":return"danger";default:return"primary"}},d=["numero","mesreferente","recebido","vencimento","via","status"];t.default=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],s=t[1],E=Object(r.useState)(null),f=Object(n.a)(E,2),p=f[0],b=f[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.U,null,l.a.createElement(o.n,null,l.a.createElement(o.i,null,l.a.createElement(o.m,{style:{flexDirection:"row",display:"flex",justifyContent:"space-between"}},l.a.createElement("div",null,l.a.createElement("h3",null,"Mensalidades"),l.a.createElement("span",null,"Confira aqui os status de suas mensalidades de afilia\xe7\xe3o a CONAFER")),l.a.createElement("div",null,l.a.createElement(o.z,{row:!0},l.a.createElement(o.I,null,l.a.createElement(o.K,null,l.a.createElement(o.f,{type:"button",color:"primary"},l.a.createElement(c.a,{name:"cil-magnifying-glass"})," Procurar")),l.a.createElement(o.G,{id:"input1-group2",name:"input1-group2",placeholder:"M\xeas referente"})))),l.a.createElement("div",null,l.a.createElement(o.I,null,l.a.createElement(o.s,{className:"input-group-prepend"},l.a.createElement(o.v,{caret:!0,color:"primary"},"Filtrar"),l.a.createElement(o.u,null,l.a.createElement(o.t,null,"Em Aberto"),l.a.createElement(o.t,null,"Atrasado"),l.a.createElement(o.t,null,"Pago")))))),l.a.createElement(o.j,null,l.a.createElement(o.r,{items:i,fields:d,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,clickableRows:!0,onRowClick:function(e){s(!a),b(e)},scopedSlots:{status:function(e){return l.a.createElement("td",null,l.a.createElement(o.b,{color:m(e.status)},e.status))}}})))),l.a.createElement(o.O,{show:a,onClose:function(){return s(!a)},size:"lg"},l.a.createElement(o.R,{closeButton:!0},l.a.createElement(o.S,null,"Mensalidade m\xeas de ",p&&p.mesreferente," [",p&&p.status,"]")),l.a.createElement(o.P,null,l.a.createElement(u.a,{document:{url:"http://localhost:3000/boleto-facil-exemplo.pdf"}})),l.a.createElement(o.Q,null,p&&"Pago"==p.status&&l.a.createElement(o.f,{color:"primary",onClick:function(){alert("Download recibo pagamento m\xeas "+p.mesreferente+".pdf?"),s(!a)}},"Download RECIBO"),l.a.createElement(o.f,{color:"secondary",onClick:function(){return alert("Baixar arquivo de boleto mensalidade do m\xeas''"+p.mesreferente+".pdf'?")}},"Download BOLETO")))))}},994:function(e,t){},995:function(e,t){},996:function(e,t){},997:function(e,t){},998:function(e,t){}}]);
//# sourceMappingURL=9.d63d01e2.chunk.js.map