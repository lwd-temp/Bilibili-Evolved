!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["utils/subscribe-time-show"]=e():t["utils/subscribe-time-show"]=e()}(globalThis,(()=>(()=>{var t,e,n={679:(t,e,n)=>{var o=n(218)((function(t){return t[1]}));o.push([t.id,'@charset "UTF-8";\n/* 上移原名称 */\n#page-follows .list-item .content .title {\n  margin-top: -9px;\n}\n\n/* 上移原简介/官方认证 */\n#page-follows .list-item .content p {\n  margin-top: -1px;\n}\n\n/* 修复关注时间元素的高度带来的布局影响 */\n.subscribe-time-fix {\n  margin-bottom: -10px;\n}',""]),t.exports=o},218:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var s=this[i][0];null!=s&&(r[s]=!0)}for(var c=0;c<t.length;c++){var a=[].concat(t[c]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),e.push(a))}},e}},970:(t,e,n)=>{var o=n(679);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},356:t=>{"use strict";t.exports=coreApis.style}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var s={};t=t||[null,e({}),e([]),e(e)];for(var c=2&o&&n;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((t=>s[t]=()=>n[t]));return s.default=()=>n,r.d(i,s),i},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>c});const t=coreApis.componentApis.define,e=coreApis.observer,n=coreApis.spinQuery;let o,s;const c=(0,t.defineComponentMetadata)({name:"subscribeTimeShow",author:{name:"Light_Quanta",link:"https://github.com/LightQuanta"},displayName:"关注时间显示",tags:[componentsTags.utils],urlInclude:[/^https:\/\/space\.bilibili\.com/],entry:async()=>{const t=await(0,n.select)(".s-space");(0,e.childList)(t,(async()=>{document.URL.match(/^https:\/\/space\.bilibili\.com\/\d+\/fans/)&&(o=await(0,n.select)(".relation-list"),(async t=>{const[n]=(0,e.childList)(t,(()=>{
// eslint-disable-next-line no-underscore-dangle
const t=o.parentElement.parentElement.parentElement.parentElement.__vue__.relationList.map((t=>t.mtime));o.querySelectorAll(".list-item>.content").forEach(((e,n)=>{if(null===e.querySelector(".subscribe-time-fix")){const o=t[n];void 0!==o&&e.querySelector("p").insertAdjacentHTML("afterend",`<div class="desc subscribe-time-fix">关注时间:${new Date(1e3*o).toLocaleString()}</div>`)}}))}));s?.disconnect(),s=n;const{addImportantStyle:i}=await Promise.resolve().then(r.t.bind(r,356,23)),{default:c}=await Promise.resolve().then(r.t.bind(r,970,23));i(c,"subscribe-time-style")})(o))}))},description:{"zh-CN":"在粉丝/关注列表显示关注的具体时间"},commitHash:"1f59cbe33053667065b14d7fa758407631f37577",coreVersion:"2.8.11"})})(),i=i.component})()));