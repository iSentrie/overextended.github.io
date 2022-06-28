"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1884],{9613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(t),m=l,d=f["".concat(o,".").concat(m)]||f[m]||p[m]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1527:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(5443),l=t(3010),a=(t(9496),t(9613)),i=["components"],s={},o="Single",c={unversionedId:"oxmysql/Usage/single",id:"oxmysql/Usage/single",title:"Single",description:"Returns the columns for a single row.",source:"@site/docs/oxmysql/Usage/single.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/single",permalink:"/docs/oxmysql/Usage/single",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/single.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Scalar",permalink:"/docs/oxmysql/Usage/scalar"},next:{title:"Transaction",permalink:"/docs/oxmysql/Usage/transaction"}},u={},p=[{value:"Lua",id:"lua",level:2},{value:"Callback",id:"callback",level:3},{value:"Promise",id:"promise",level:3},{value:"JavaScript",id:"javascript",level:2},{value:"Callback",id:"callback-1",level:3},{value:"Promise",id:"promise-1",level:3}],f={toc:p};function m(e){var n=e.components,t=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"single"},"Single"),(0,a.kt)("p",null,"Returns the columns for a single row."),(0,a.kt)("h2",{id:"lua"},"Lua"),(0,a.kt)("h3",{id:"callback"},"Callback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- Alias: exports.oxmysql:single\n-- Alias: MySQL.Async.fetchSingle\n\nMySQL.single('SELECT * FROM users WHERE identifier = ?', {playerIdentifier}, function(result)\n    if result then\n        print(result.identifier, result.firstname, result.lastname)\n    end\nend)\n")),(0,a.kt)("h3",{id:"promise"},"Promise"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- Alias: exports.oxmysql:single_async\n-- Alias: MySQL.Sync.fetchSingle\n\nCreateThread(function()\n    local result = MySQL.single.await('SELECT * FROM users WHERE identifier = ?', {playerIdentifier})\n    if result then\n        print(result.identifier, result.firstname, result.lastname)\n    end\nend)\n")),(0,a.kt)("h2",{id:"javascript"},"JavaScript"),(0,a.kt)("h3",{id:"callback-1"},"Callback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"exports.oxmysql.single('SELECT * FROM users WHERE identifier = ?', [playerIdentifier], function(result) {\n  if (result)\n    console.log(result.identifier, result.firstname, result.lastname)\n})\n")),(0,a.kt)("h3",{id:"promise-1"},"Promise"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"setImmediate(async () => {\n  const result = await exports.oxmysql.single_async('SELECT * FROM users WHERE identifier = ?', [playerIdentifier]) {\n  if (result)\n    console.log(result.identifier, result.firstname, result.lastname)\n})\n")))}m.isMDXComponent=!0}}]);