import{ca as mt}from"./chunk-3RWY3PT4.js";import{$d as X,Md as L,Nd as K,a as B,b as G,d as pt,f as Q,ie as R,je as z,me as Z,oe as S,re as U}from"./chunk-EFFDRVQG.js";var et=pt((O,J)=>{"use strict";(function(e,l){typeof O=="object"&&typeof J=="object"?J.exports=l():typeof define=="function"&&define.amd?define([],l):typeof O=="object"?O.ClipboardJS=l():e.ClipboardJS=l()})(O,function(){return function(){var i={686:function(o,s,t){"use strict";t.d(s,{default:function(){return dt}});var u=t(279),f=t.n(u),d=t(370),n=t.n(d),b=t(817),E=t.n(b);function h(g){try{return document.execCommand(g)}catch{return!1}}var r=function(c){var a=E()(c);return h("cut"),a},y=r;function w(g){var c=document.documentElement.getAttribute("dir")==="rtl",a=document.createElement("textarea");a.style.fontSize="12pt",a.style.border="0",a.style.padding="0",a.style.margin="0",a.style.position="absolute",a.style[c?"right":"left"]="-9999px";var p=window.pageYOffset||document.documentElement.scrollTop;return a.style.top="".concat(p,"px"),a.setAttribute("readonly",""),a.value=g,a}var P=function(c,a){var p=w(c);a.container.appendChild(p);var m=E()(p);return h("copy"),p.remove(),m},q=function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},p="";return typeof c=="string"?p=P(c,a):c instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(c?.type)?p=P(c.value,a):(p=E()(c),h("copy")),p},T=q;function C(g){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(a){return typeof a}:C=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},C(g)}var M=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.action,p=a===void 0?"copy":a,m=c.container,v=c.target,_=c.text;if(p!=="copy"&&p!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(v!==void 0)if(v&&C(v)==="object"&&v.nodeType===1){if(p==="copy"&&v.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(p==="cut"&&(v.hasAttribute("readonly")||v.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return T(_,{container:m});if(v)return p==="cut"?y(v):T(v,{container:m})},W=M;function A(g){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(a){return typeof a}:A=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},A(g)}function H(g,c){if(!(g instanceof c))throw new TypeError("Cannot call a class as a function")}function x(g,c){for(var a=0;a<c.length;a++){var p=c[a];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(g,p.key,p)}}function I(g,c,a){return c&&x(g.prototype,c),a&&x(g,a),g}function at(g,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");g.prototype=Object.create(c&&c.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),c&&F(g,c)}function F(g,c){return F=Object.setPrototypeOf||function(p,m){return p.__proto__=m,p},F(g,c)}function st(g){var c=ft();return function(){var p=D(g),m;if(c){var v=D(this).constructor;m=Reflect.construct(p,arguments,v)}else m=p.apply(this,arguments);return ct(this,m)}}function ct(g,c){return c&&(A(c)==="object"||typeof c=="function")?c:ut(g)}function ut(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function ft(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function D(g){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},D(g)}function Y(g,c){var a="data-clipboard-".concat(g);if(c.hasAttribute(a))return c.getAttribute(a)}var lt=function(g){at(a,g);var c=st(a);function a(p,m){var v;return H(this,a),v=c.call(this),v.resolveOptions(m),v.listenClick(p),v}return I(a,[{key:"resolveOptions",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof m.action=="function"?m.action:this.defaultAction,this.target=typeof m.target=="function"?m.target:this.defaultTarget,this.text=typeof m.text=="function"?m.text:this.defaultText,this.container=A(m.container)==="object"?m.container:document.body}},{key:"listenClick",value:function(m){var v=this;this.listener=n()(m,"click",function(_){return v.onClick(_)})}},{key:"onClick",value:function(m){var v=m.delegateTarget||m.currentTarget,_=this.action(v)||"copy",k=W({action:_,container:this.container,target:this.target(v),text:this.text(v)});this.emit(k?"success":"error",{action:_,text:k,trigger:v,clearSelection:function(){v&&v.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(m){return Y("action",m)}},{key:"defaultTarget",value:function(m){var v=Y("target",m);if(v)return document.querySelector(v)}},{key:"defaultText",value:function(m){return Y("text",m)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(m){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return T(m,v)}},{key:"cut",value:function(m){return y(m)}},{key:"isSupported",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],v=typeof m=="string"?[m]:m,_=!!document.queryCommandSupported;return v.forEach(function(k){_=_&&!!document.queryCommandSupported(k)}),_}}]),a}(f()),dt=lt},828:function(o){var s=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function u(f,d){for(;f&&f.nodeType!==s;){if(typeof f.matches=="function"&&f.matches(d))return f;f=f.parentNode}}o.exports=u},438:function(o,s,t){var u=t(828);function f(b,E,h,r,y){var w=n.apply(this,arguments);return b.addEventListener(h,w,y),{destroy:function(){b.removeEventListener(h,w,y)}}}function d(b,E,h,r,y){return typeof b.addEventListener=="function"?f.apply(null,arguments):typeof h=="function"?f.bind(null,document).apply(null,arguments):(typeof b=="string"&&(b=document.querySelectorAll(b)),Array.prototype.map.call(b,function(w){return f(w,E,h,r,y)}))}function n(b,E,h,r){return function(y){y.delegateTarget=u(y.target,E),y.delegateTarget&&r.call(b,y)}}o.exports=d},879:function(o,s){s.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},s.nodeList=function(t){var u=Object.prototype.toString.call(t);return t!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in t&&(t.length===0||s.node(t[0]))},s.string=function(t){return typeof t=="string"||t instanceof String},s.fn=function(t){var u=Object.prototype.toString.call(t);return u==="[object Function]"}},370:function(o,s,t){var u=t(879),f=t(438);function d(h,r,y){if(!h&&!r&&!y)throw new Error("Missing required arguments");if(!u.string(r))throw new TypeError("Second argument must be a String");if(!u.fn(y))throw new TypeError("Third argument must be a Function");if(u.node(h))return n(h,r,y);if(u.nodeList(h))return b(h,r,y);if(u.string(h))return E(h,r,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function n(h,r,y){return h.addEventListener(r,y),{destroy:function(){h.removeEventListener(r,y)}}}function b(h,r,y){return Array.prototype.forEach.call(h,function(w){w.addEventListener(r,y)}),{destroy:function(){Array.prototype.forEach.call(h,function(w){w.removeEventListener(r,y)})}}}function E(h,r,y){return f(document.body,h,r,y)}o.exports=d},817:function(o){function s(t){var u;if(t.nodeName==="SELECT")t.focus(),u=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var f=t.hasAttribute("readonly");f||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),f||t.removeAttribute("readonly"),u=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var d=window.getSelection(),n=document.createRange();n.selectNodeContents(t),d.removeAllRanges(),d.addRange(n),u=d.toString()}return u}o.exports=s},279:function(o){function s(){}s.prototype={on:function(t,u,f){var d=this.e||(this.e={});return(d[t]||(d[t]=[])).push({fn:u,ctx:f}),this},once:function(t,u,f){var d=this;function n(){d.off(t,n),u.apply(f,arguments)}return n._=u,this.on(t,n,f)},emit:function(t){var u=[].slice.call(arguments,1),f=((this.e||(this.e={}))[t]||[]).slice(),d=0,n=f.length;for(d;d<n;d++)f[d].fn.apply(f[d].ctx,u);return this},off:function(t,u){var f=this.e||(this.e={}),d=f[t],n=[];if(d&&u)for(var b=0,E=d.length;b<E;b++)d[b].fn!==u&&d[b].fn._!==u&&n.push(d[b]);return n.length?f[t]=n:delete f[t],this}},o.exports=s,o.exports.TinyEmitter=s}},e={};function l(o){if(e[o])return e[o].exports;var s=e[o]={exports:{}};return i[o](s,s.exports,l),s.exports}return function(){l.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return l.d(s,{a:s}),s}}(),function(){l.d=function(o,s){for(var t in s)l.o(s,t)&&!l.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:s[t]})}}(),function(){l.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)}}(),l(686)}().default})});var tt=(n=>(n[n.All=1]="All",n[n.Title=2]="Title",n[n.Desc=3]="Desc",n[n.Url=4]="Url",n[n.Current=5]="Current",n[n.Quick=6]="Quick",n[n.Id=7]="Id",n[n.Tag=8]="Tag",n[n.Class=9]="Class",n))(tt||{});var rt=Q(mt(),1),ot=Q(et(),1);function gt(i){return Math.floor(Math.random()*i)}function At(i,e){if(!e.trim())return[];e=e.toLowerCase();let{type:l,id:o}=V(),{oneIndex:s,twoIndex:t}=it(o),u=Number(l)||1,f=[],d=[{nav:f,id:-1,title:U("_searchRes"),icon:""}],n=new Map;u===9&&(d=[]);function b(E){E=E||i;t:for(let h=0;h<E.length;h++){let r=E[h];if(u===9){r.title&&(r.title.toLowerCase().includes(e)||r.id==e)&&d.push(r),Array.isArray(r.nav)&&b(r.nav);continue}if(Array.isArray(r.nav)&&b(r.nav),r.name){r.name=nt(r.name),r.desc=nt(r.desc);let y=r.name.toLowerCase(),w=r.desc.toLowerCase(),P=r.url.toLowerCase();if(w[0]===K)continue;let T=()=>{if(y.includes(e)){let x=r,I=new RegExp(`(${e})`,"i");if(x.__name__=x.name,x.name=x.name.replace(I,"<b>$1</b>"),!n.has(x.id))return n.set(x.id,!0),f.push(x),!0}return!1},C=()=>{if(P.includes(e)&&!n.has(r.id)||r.tags.some(I=>I.url?.includes(e))&&!n.has(r.id))return n.set(r.id,!0),f.push(r),!0},M=()=>{if(w.includes(e)){let x=r,I=new RegExp(`(${e})`,"i");if(x.__desc__=x.desc,x.desc=x.desc.replace(I,"<b>$1</b>"),!n.has(x.id))return n.set(x.id,!0),f.push(x),!0}return!1},W=()=>{if(r.top&&y.includes(e)){let x=r,I=new RegExp(`(${e})`,"i");if(x.__name__=x.name,x.name=x.name.replace(I,"<b>$1</b>"),!n.has(x.id))return n.set(x.id,!0),f.push(x),!0}return!1},A=()=>r.tags.forEach(x=>{Z[x.id]?.name?.toLowerCase()===e&&(n.has(r.id)||(n.set(r.id,!0),f.push(r)))}),H=()=>r.id==e?(f.push(r),!0):!1;try{switch(u){case 4:C();break;case 2:T();break;case 3:M();break;case 6:W();break;case 8:A();break;case 7:if(H())break t;break;default:T(),M(),C()}}catch(x){console.error(x)}}}}return u===5?b(i[s].nav[t].nav):b(),u!==9&&f.length<=0?[]:d}function $(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`}var N;function St(){N&&clearInterval(N);let i="random-light-bg",e=document.getElementById(i)||document.createElement("div"),l=gt(360);e.id=i,e.className="dark-bg",e.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -3;
    transition: 1s linear;
  `,e.style.backgroundImage=`linear-gradient(${l}deg, ${$()} 0%, ${$()} 100%)`,document.body.appendChild(e),N=setInterval(()=>{let s=`linear-gradient(${l}deg, ${$()} 0%, ${$()} 100%)`;e.style.opacity="0.3",setTimeout(()=>{e.style.backgroundImage=s,e.style.opacity="1"},1e3)},1e4)}function Tt(){N&&(clearInterval(N),N=null);let i=document.getElementById("random-light-bg");i&&i.parentNode?.removeChild(i)}function V(){let{href:i}=location,e=i.split("?")[1]||"",l=rt.default.parse(e),o=l.id;if(l.id==null)try{let s=localStorage.getItem(L.LOCATION);s&&(o=JSON.parse(s).id)}catch{}return G(B({},l),{type:l.type,q:l.q||"",id:o})}function Lt(){let{id:i}=V();window.localStorage.setItem(L.LOCATION,JSON.stringify({id:i}))}function Nt(){let i=z[0]||{};try{let e=window.localStorage.getItem(L.SEARCH_ENGINE);if(e){let l=JSON.parse(e),o=z.find(s=>s.name===l.name);o&&(i=o)}}catch{}return i}function Ot(i){window.localStorage.setItem(L.SEARCH_ENGINE,JSON.stringify(i))}function Pt(){let i=window.localStorage.getItem(L.IS_DARK),e=window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches;return!i&&e?e:!!Number(i)}function Mt(i,e){let l=i.target,o=`copy-${Date.now()}`;return l.id=o,l.setAttribute("data-clipboard-text",e),new Promise(s=>{let t=new ot.default(`#${o}`);t.on("success",function(){t.destroy(),s(!0)}),t.on("error",function(){t.destroy(),s(!1)})})}function nt(i=""){return i?i.replace(/<b>|<\/b>/g,""):""}function Dt(){let{id:i}=V(),{oneIndex:e,twoIndex:l}=it(i),o=[];try{S[e]&&S[e]?.nav?.length>0&&(X||!S[e].nav[l].ownVisible)?o=S[e].nav[l].nav:o=[]}catch{o=[]}return o}function j(i){return String(i).padStart(2,"0")}function kt(i){let e=document.querySelectorAll(i),l=Number.MAX_SAFE_INTEGER;if(e.length<=0)return l;let s=e[0].parentNode.clientWidth,t=0;for(let u=0;u<e.length;u++){let f=e[u];if(t+=f.clientWidth,t>s){l=u-1;break}}return l}function ht(){return"ontouchstart"in window}function Rt(){let i=new Date,e=new Date(i.getFullYear(),0,0),l=i-e,o=1e3*60*60*24;return Math.floor(l/o)}function $t(){let i=U("_weeks"),e=new Date,l=e.getFullYear(),o=j(e.getHours()),s=j(e.getMinutes()),t=j(e.getSeconds()),u=e.getMonth()+1,f=e.getDate(),d=e.getDay(),n=j(f);return{year:l,hours:o,minutes:s,seconds:t,month:u,date:f,zeroDate:n,dayText:i[d]}}function jt(){let i=ht()?R.appTheme:R.theme;return i==="Current"?R.theme:i}function it(i,e=0,l=!1){i=Number(i);let o=e,s=e,t=e,u=-1,f=[];t:for(let d=0;d<S.length;d++){let n=S[d];if(n.id===i){o=d,f.push(n.title);break}if(Array.isArray(n.nav))for(let b=0;b<n.nav.length;b++){let E=n.nav[b];if(E.id===i){u=n.id,o=d,s=b,f.push(n.title,E.title);break t}if(Array.isArray(E.nav))for(let h=0;h<E.nav.length;h++){let r=E.nav[h];if(r.id===i){u=E.id,o=d,s=b,t=h,f.push(n.title,E.title,r.title);break t}if(l&&Array.isArray(r.nav)){for(let y=0;y<r.nav.length;y++)if(r.nav[y].id===i){u=r.id,o=d,s=b,t=h,f.push(n.title,E.title,r.title);break t}}}}}return{parentId:u,oneIndex:o,twoIndex:s,threeIndex:t,breadcrumb:f}}function Wt(i,e,l){let o=i.offsetWidth,s=e.offsetWidth,u=e.offsetLeft-(o-s)/2;i.scrollTo(B({left:u,behavior:"smooth"},l))}export{tt as a,gt as b,At as c,$ as d,St as e,Tt as f,V as g,Lt as h,Nt as i,Ot as j,Pt as k,Mt as l,nt as m,Dt as n,kt as o,ht as p,Rt as q,$t as r,jt as s,it as t,Wt as u};
