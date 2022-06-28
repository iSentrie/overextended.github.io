"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4431],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6236:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(5443),a=n(3010),l=(n(9496),n(9613)),o=["components"],i={title:"Alert Dialog"},c=void 0,p={unversionedId:"ox_lib/Interface/Client/alert",id:"ox_lib/Interface/Client/alert",title:"Alert Dialog",description:"Simple alert dialog that can display a message to the player.",source:"@site/docs/ox_lib/Interface/Client/alert.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/alert",permalink:"/docs/ox_lib/Interface/Client/alert",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/alert.md",tags:[],version:"current",frontMatter:{title:"Alert Dialog"},sidebar:"docs",previous:{title:"Client",permalink:"/docs/ox_lib/DisableControls/Client"},next:{title:"Clipboard",permalink:"/docs/ox_lib/Interface/Client/clipboard"}},u={},s=[],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Simple alert dialog that can display a message to the player.",(0,l.kt)("br",{parentName:"p"}),"\n","Returns whether the player pressed the confirm button or canceled the dialog."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- data: table\n    -- header: string\n    -- content: string\n    -- centered: boolean (optional)\n    -- cancel: boolean (optional)\n\nlib.alertDialog(data)\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"header")," - Dialog title.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"content")," - Dialog body content, supports markdown.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"centered")," - Centers the dialog vertically and horizontally.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"cancel")," - Displays a cancel button (ESC is still available if this is not defined).  "),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"confirm")," if the player pressed the confirm button, otherwise if the player pressed the cancel button\nor has exited the dialog with ESC the return will be ",(0,l.kt)("inlineCode",{parentName:"p"},"cancel"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local alert = lib.alertDialog({\n    header = 'Hello there',\n    content = 'General Kenobi  \\n Markdown support!',\n    centered = true,\n    cancel = true\n})\n\nprint(alert)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/TnUT3S1.png",alt:"alert_dialog"})))}f.isMDXComponent=!0}}]);