"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7992],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),y=s(t),v=o,d=y["".concat(l,".").concat(v)]||y[v]||p[v]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7689:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(6600),o=(t(9496),t(9613));const i={},a=void 0,c={unversionedId:"ox_inventory/Functions/Server/Inventory/Inventory",id:"ox_inventory/Functions/Server/Inventory/Inventory",title:"Inventory",description:"Returns the inventory associated with the ID (and owner if defined). Otherwise returns null",source:"@site/docs/ox_inventory/Functions/Server/Inventory/Inventory.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/",permalink:"/docs/ox_inventory/Functions/Server/Inventory/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/Inventory.md",tags:[],version:"current",lastUpdatedAt:1667024966,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"useSlot",permalink:"/docs/ox_inventory/Functions/Client/useSlot"},next:{title:"AddItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/AddItem"}},l={},s=[],u={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns the inventory associated with the ID (and owner if defined). Otherwise returns null"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"---@param id number | table\n---@param owner string | boolean (optional)\nexports.ox_inventory:Inventory(id, owner)\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local inventory = exports.ox_inventory:Inventory(\'example_stash\', false)\nprint(json.encode(inventory, {indent = true}))\n--[[\n    {\n      "id": "example_stash,\n      "label": "Police Stash",\n      "type": "stash,\n      "slots": 50,\n      "weight": 0,\n      "maxWeight": 100000,\n      "owner": false,\n      ...\n    }\n]]\n')))}p.isMDXComponent=!0}}]);