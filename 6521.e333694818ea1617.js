"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6521],{6521:(b,a,r)=>{r.r(a),r.d(a,{ion_input_password_toggle:()=>n});var i=r(4261),d=r(4929),c=r(333),u=r(3992),p=r(9483);const n=(()=>{let l=class{constructor(s){(0,i.r)(this,s),this.togglePasswordVisibility=()=>{const{inputElRef:e}=this;e&&(e.type="text"===e.type?"password":"text")},this.color=void 0,this.showIcon=void 0,this.hideIcon=void 0,this.type="password"}onTypeChange(s){"text"===s||"password"===s||(0,d.p)(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${s}" is not compatible.`,this.el)}connectedCallback(){const{el:s}=this,e=this.inputElRef=s.closest("ion-input");e?this.type=e.type:(0,d.p)("No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.",s)}disconnectedCallback(){this.inputElRef=null}render(){var s,e;const{color:f,type:P}=this,g=(0,p.b)(this),E=null!==(s=this.showIcon)&&void 0!==s?s:u.x,I=null!==(e=this.hideIcon)&&void 0!==e?e:u.y,y="text"===P;return(0,i.h)(i.f,{key:"d9811e25bfeb2aa197352bb9be852e9e420739d5",class:(0,c.c)(f,{[g]:!0})},(0,i.h)("ion-button",{key:"1eaea1442b248fb2b8d61538b27274e647a07804",mode:g,color:f,fill:"clear",shape:"round","aria-checked":y?"true":"false","aria-label":"show password",role:"switch",type:"button",onPointerDown:C=>{C.preventDefault()},onClick:this.togglePasswordVisibility},(0,i.h)("ion-icon",{key:"9c88de8f4631d9bde222ce2edf6950d639e04773",slot:"icon-only","aria-hidden":"true",icon:y?I:E})))}get el(){return(0,i.i)(this)}static get watchers(){return{type:["onTypeChange"]}}};return l.style={ios:"",md:""},l})()},333:(b,a,r)=>{r.d(a,{c:()=>c,g:()=>p,h:()=>d,o:()=>_});var i=r(467);const d=(o,t)=>null!==t.closest(o),c=(o,t)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},t):t,p=o=>{const t={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(o).forEach(n=>t[n]=!0),t},h=/^[a-z][a-z0-9+\-.]*:/,_=function(){var o=(0,i.A)(function*(t,n,l,s){if(null!=t&&"#"!==t[0]&&!h.test(t)){const e=document.querySelector("ion-router");if(e)return null!=n&&n.preventDefault(),e.push(t,l,s)}return!1});return function(n,l,s,e){return o.apply(this,arguments)}}()}}]);