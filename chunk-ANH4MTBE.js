import{a as $}from"./chunk-JN5YHBQG.js";import{b as L}from"./chunk-725TSIMH.js";import{a as D}from"./chunk-T7NGPSUK.js";import{a as A,b as M}from"./chunk-VTQD56ID.js";import{Mb as E,Nb as _,Pb as w,Qb as B,ic as I,ja as J,xa as C}from"./chunk-3RWY3PT4.js";import{Cb as l,Ib as u,Ob as m,Ud as S,ac as d,bc as k,cc as y,f as p,g as c,jc as b,oe as x,qb as s,qd as N,re as h,vb as f,xc as z,yd as g,zc as v}from"./chunk-EFFDRVQG.js";var P=p($(),1);var T=p(J(),1);function F(n,r){n&1&&y(0,"nz-spin",3)}var a=class n{constructor(r){this.notification=r}$t=h;websiteList=x;submitting=!1;bookmarksExport(){return c(this,null,function*(){if(!S())return this.notification.error("Error","Bad credentials");if(this.submitting)return;let r=JSON.parse(JSON.stringify(this.websiteList));function i(o){Array.isArray(o)&&o.forEach(t=>{if(t.title)for(let e in t)["title","nav"].includes(e)||delete t[e];if(t.url)for(let e in t)["url","icon","name"].includes(e)||delete t[e];Array.isArray(t.nav)&&i(t.nav)})}i(r),this.submitting=!0,C({data:T.default.compress(JSON.stringify(r))}).then(o=>{let t="bookmarks.html",e=new Blob([o.data.data],{type:"text/html;charset=utf-8"});(0,P.saveAs)(e,t),this.notification.success("OK",t,{nzDuration:0})}).finally(()=>{this.submitting=!1})})}static \u0275fac=function(i){return new(i||n)(f(D))};static \u0275cmp=l({type:n,selectors:[["system-bookmark-export"]],decls:4,vars:3,consts:[["nzSimple","","nzSize","large","class","text-center",4,"ngIf"],[1,"book-wrapper","mt-10"],["nz-button","","nzType","primary",3,"click","nzLoading"],["nzSimple","","nzSize","large",1,"text-center"]],template:function(i,o){i&1&&(u(0,F,1,0,"nz-spin",0),d(1,"div",1)(2,"button",2),b("click",function(){return o.bookmarksExport()}),z(3),k()()),i&2&&(m("ngIf",o.submitting),s(2),m("nzLoading",o.submitting),s(),v(" ",o.$t("_clickExport")," "))},dependencies:[g,N,L,M,A,I,B,w,E,_],encapsulation:2})};export{a as default};
