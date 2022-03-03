"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7008],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return y}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),y=a,d=p["".concat(l,".").concat(y)]||p[y]||m[y]||o;return r?t.createElement(d,i(i({ref:n},c),{},{components:r})):t.createElement(d,i({ref:n},c))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7782:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return m},default:function(){return y}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},l="Benchmark",u={unversionedId:"oxmysql/Getting Started/benchmark",id:"oxmysql/Getting Started/benchmark",title:"Benchmark",description:"Internal benchmark",source:"@site/docs/oxmysql/Getting Started/benchmark.md",sourceDirName:"oxmysql/Getting Started",slug:"/oxmysql/Getting Started/benchmark",permalink:"/docs/oxmysql/Getting Started/benchmark",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Getting Started/benchmark.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/oxmysql/Getting Started/"},next:{title:"Common Issues",permalink:"/docs/oxmysql/Getting Started/issues"}},c={},m=[{value:"Lua (5.4)",id:"lua-54",level:4},{value:"JavaScript",id:"javascript",level:4}],p={toc:m};function y(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"benchmark"},"Benchmark"),(0,o.kt)("p",null,"Internal benchmark"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Low: 0.1222ms | Avg: 0.14188357ms | Total: 1418.8357ms (10000 queries)\n")),(0,o.kt)("p",null,"Round-trip-time for exports"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Low: 0.1997ms | Avg: 0.25898800ms | Total: 2589.8800ms (10000 queries)\n")),(0,o.kt)("h4",{id:"lua-54"},"Lua (5.4)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local val = 10000\nRegisterCommand('luasync', function()\n    local queryTimesLocal = {}\n    local result\n    MySQL.prepare.await('SELECT identifier from users WHERE lastname = ?', {'Linden'})\n\n    for i=1, val do\n        local time = os.nanotime()\n        local r = MySQL.prepare.await('SELECT identifier from users WHERE lastname = ?', {'Linden'})\n        queryTimesLocal[#queryTimesLocal+1] = (os.nanotime() - time) / 1000000\n        if i==1 then result = r end\n    end\n\n    local queryMsLow, queryMsSum = 1000, 0\n\n    for _, v in pairs(queryTimesLocal) do queryMsSum = queryMsSum + v end\n    for _, v in pairs(queryTimesLocal) do\n        if v < queryMsLow then queryMsLow = v end\n    end\n\n    local averageQueryTime = queryMsSum / #queryTimesLocal\n    print(json.encode(result))\n    print('Low: '.. queryMsLow ..'ms | Avg: '..averageQueryTime..'ms | Total: '..queryMsSum..'ms ('..#queryTimesLocal..' queries)')\nend)\n")),(0,o.kt)("h4",{id:"javascript"},"JavaScript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const val = 10000\nRegisterCommand('jssync', async() => {\n  const queryTimesLocal = [];\n  let result\n  await exports.oxmysql.prepare_async('SELECT identifier from users WHERE lastname = ?', ['Linden'])\n\n  for(let i=0; i < val; i++) {\n    const startTime = process.hrtime()\n    const r = await exports.oxmysql.prepare_async('SELECT identifier from users WHERE lastname = ?', ['Linden'])\n    queryTimesLocal.push(process.hrtime(startTime)[1] / 1000000)\n    if (i === 0) result = r\n  }\n\n  const queryMsSum = queryTimesLocal.reduce((a, b) => a + b, 0)\n  const queryMsLow = queryTimesLocal.sort((a, b) => a - b)[0]\n  const averageQueryTime = queryMsSum / queryTimesLocal.length\n\n  console.log(result)\n  console.log('Low: '+ queryMsLow +'ms | Avg: '+averageQueryTime+'ms | Total: '+queryMsSum+'ms ('+queryTimesLocal.length+' queries)')\n})\n")))}y.isMDXComponent=!0}}]);