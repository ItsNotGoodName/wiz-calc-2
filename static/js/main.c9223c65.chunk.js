(this["webpackJsonpwiz-calc-2"]=this["webpackJsonpwiz-calc-2"]||[]).push([[0],{48:function(e,a,t){e.exports=t(60)},60:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),l=t.n(c),o=t(44),u=t(18),i=t(40),m=t(5),p=t(65),s=t(66),d=t(69),b=t(63),h=t(64),f=t(31),g="solid 3px",v=t(46),x=t(36),E=t(45),w=function(e){var a=e.label,t=Object(v.a)(e,["label"]);return r.a.createElement(m.a,null,r.a.createElement(x.a,null,a),r.a.createElement(E.a,t))},y=function(e){var a=e.character,t=e.dispatch;return r.a.createElement(b.a,{boxShadow:"md",border:g,borderRadius:"10px",borderColor:"gray.300"},r.a.createElement(m.a,{p:"10px",borderBottom:g,borderColor:"gray.300",textAlign:"center",fontSize:"20px"},"Character Stats"),r.a.createElement(b.a,{pt:"5px",px:"10px"},r.a.createElement(w,{label:"Percent Modifier",value:a.percentModifier,onChange:function(e){e.preventDefault(),t({type:"change_percent",value:e.target.value})}}),r.a.createElement(w,{label:"Flat Damage",value:a.flatDamage,onChange:function(e){e.preventDefault(),t({type:"change_flat",value:e.target.value})}})),r.a.createElement(m.a,{py:"10px",borderBottom:g,borderTop:g,borderColor:"gray.300",fontSize:"20px",textAlign:"center",mb:"100px"},"+ / - Charms"),r.a.createElement(b.a,{px:"10px",pb:"10px",pt:"5px"},r.a.createElement(h.a,{height:"212px",resize:"vertical",placeholder:"[percent] [name]",value:a.buffsRaw,onChange:function(e){t({type:"change_buffs",value:e.target.value})}}),r.a.createElement(f.a,{onClick:function(){return t({type:"change_buffs",value:""})},mx:"auto",mt:"5px",w:"40%"},"Clear")))},C=t(67),O=t(43),_=function(e){var a=e.dispatch,t=e.id,n=e.deleteSpell;return r.a.createElement(C.d,null,r.a.createElement(C.a,null,r.a.createElement(O.a,{"aria-label":"spell-options",size:"24px"})),r.a.createElement(C.c,null,r.a.createElement(C.b,{onClick:function(){return a({type:"add_base"})}},"Add Base"),r.a.createElement(C.b,{onClick:function(){return a({type:"toggle_enchantment"})}},"Toggle Enchantment"),r.a.createElement(C.b,{onClick:function(){return a({type:"toggle_increment"})}},"Toggle Increment"),r.a.createElement(C.b,{onClick:function(){return n(t)}},"Delete")))},j=t(9),S=function(e){var a=parseInt(e);return a||0},k=function(e){for(var a=0;a<e.bases.length;a++)z(e,a)},z=function(e,a){var t=e.enchantment?e.enchantment:0,n=e.increment?e.increment.base*e.increment.pips:0;return e.damages[a]=function(e,a){for(var t=e.percentModifier,n=e.flatDamage,r=e.buffs,c=Math.floor((1+Number(t)/100)*Number(a)+Number(n)),l=0;l<r.length;l++)c*=1+r[l]/100,c=Math.floor(c);return c}(e.character,e.bases[a]+t+n),e},D=function(e,a){switch(a.type){case"change_name":return Object(j.a)(Object(j.a)({},e),{},{name:a.name});case"add_base":var t=Object(j.a)({},e);return t.bases.push(0),t.damages.push(0),t;case"change_base":var n=Object(j.a)({},e);return n.bases[a.index]=S(a.value),z(n,a.index),n;case"update_character":var r=Object(j.a)({},e);return r.character=a.value,k(r),r;case"toggle_enchantment":var c=Object(j.a)({},e);return void 0===c.enchantment?c.enchantment=0:c.enchantment=void 0,k(c),c;case"change_enchantment":var l=Object(j.a)({},e);return l.enchantment=S(a.value),k(l),l;case"toggle_increment":var o=Object(j.a)({},e);return void 0===o.increment?o.increment={base:0,pips:1}:o.increment=void 0,k(o),o;case"change_increment":var u=Object(j.a)({},e);return console.log(a),void 0!==a.base&&(u.increment.base=S(a.base)),void 0!==a.pips&&(u.increment.pips=S(a.pips)),k(u),u;default:throw new Error("Error")}},B=function(e){var a=e.character,t=e.id,c=e.deleteSpell,l=function(e){var a=e.character,t={id:e.id,name:"Untitled",bases:[0],damages:[0],character:a},c=r.a.useReducer(D,t),l=Object(u.a)(c,2)[1];return Object(n.useEffect)((function(){l({type:"update_character",value:a})}),[a,l]),c}({character:a,id:t}),o=Object(u.a)(l,2),p=o[0],s=o[1];return r.a.createElement(b.a,{w:"100%",border:g,borderRadius:"10px",boxShadow:"md",borderColor:"gray.300"},r.a.createElement(m.a,{p:"5px",borderBottom:g,borderColor:"gray.300"},r.a.createElement(i.a,null,r.a.createElement(E.a,{textAlign:"center",fontSize:"20px",mr:"5px",border:"none",spellCheck:"false",value:p.name,onFocus:function(e){e.target.select()},onChange:function(e){e.preventDefault(),s({type:"change_name",name:e.target.value})}}),r.a.createElement(_,{dispatch:s,deleteSpell:c,id:t}))),r.a.createElement(b.a,null,void 0!==p.enchantment?r.a.createElement(m.a,{px:"10px",pb:"10px",borderBottom:g,borderColor:"gray.300"},r.a.createElement(w,{onChange:function(e){s({type:"change_enchantment",value:e.target.value})},value:p.enchantment,label:"Enchantment"})):null,void 0!==p.increment?r.a.createElement(b.a,{px:"10px",pb:"10px",borderBottom:g,borderColor:"gray.300"},r.a.createElement(i.a,null,r.a.createElement(m.a,{pr:"10px"},r.a.createElement(w,{onChange:function(e){s({type:"change_increment",pips:e.target.value})},value:p.increment.pips,label:"Pips"})),r.a.createElement(w,{onChange:function(e){s({type:"change_increment",base:e.target.value})},value:p.increment.base,label:"Increment"}))):null),r.a.createElement(b.a,{px:"10px",pb:"10px"},p.bases.map((function(e,a){return r.a.createElement(i.a,{key:a},r.a.createElement(m.a,{w:"45%"},r.a.createElement(E.a,{value:e,onChange:function(e){e.preventDefault(),s({type:"change_base",index:a,value:e.target.value})}})),r.a.createElement(i.a,{ml:"auto",w:"50%"},r.a.createElement(x.a,{flexWrap:"wrap",wordBreak:"break-word",my:"auto",ml:"auto",fontSize:"18px",fontWeight:"bold"},p.damages[a].toLocaleString("en",{useGrouping:!0}))))}))))},R=function(e,a){switch(a.type){case"change_percent":var t=Object(j.a)({},e);return t.percentModifier=S(a.value),t;case"change_flat":var n=Object(j.a)({},e);return n.flatDamage=S(a.value),n;case"change_buffs":var r=Object(j.a)({},e);return r.buffs=a.value.split("\n").map((function(e){var a=parseInt(e.split(" ")[0]);return a||0})),r.buffsRaw=a.value,r;default:throw new Error("Error")}},M=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.reducer,t=void 0===a?R:a,n={percentModifier:0,flatDamage:0,pierce:0,buffs:[],buffsRaw:"",shields:[],sheldsRaw:""};return r.a.useReducer(t,n)}(),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([Object(d.a)()]),b=Object(u.a)(l,2),h=b[0],f=b[1],v=function(e){var a=h.indexOf(e);if(-1!==a){for(var t=[],n=0;n<h.length;n++)a!==n&&t.push(h[n]);f(t)}},x=h.map((function(e){return r.a.createElement(i.a,{key:e,mb:"auto",pb:"20px",w:"206px",mr:"20px"},r.a.createElement(B,{id:e,deleteSpell:v,character:t}))}));return r.a.createElement(m.a,{maxW:"900px",pl:"20px",mx:"auto"},r.a.createElement(m.a,{my:"20px",mr:"20px",py:"10px",boxShadow:"md",border:g,borderRadius:"10px",borderColor:"gray.300"},r.a.createElement(p.a,{color:"gray.900",textAlign:"center",size:"xl"},"Wiz Calculator 2")),r.a.createElement(m.a,null,r.a.createElement(i.a,{float:"left",minW:"181px",w:"181px",mr:"20px"},r.a.createElement(y,{character:t,dispatch:c})),r.a.createElement(i.a,{wrap:"wrap"},x,r.a.createElement(i.a,{w:"206px",mr:"10px"},h.length<12?r.a.createElement(s.a,{variantColor:"blue",boxShadow:"md",mx:"auto",mt:"25px","aria-label":"Add Spellcard",icon:"add",onClick:function(){var e=Object(o.a)(h);e.push(Object(d.a)()),f(e)}}):null))))},W=t(16),A=t(70);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=t(68),N=Object(j.a)({},I.a);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W.a,{theme:N},r.a.createElement(A.a,null),r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.c9223c65.chunk.js.map