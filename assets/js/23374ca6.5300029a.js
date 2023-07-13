"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[8421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"Cosmos SDK Documentation",sidebar_position:0},i=void 0,s={unversionedId:"README",id:"README",title:"Cosmos SDK Documentation",description:"Cosmos SDK is the world\u2019s most popular framework for building application-specific blockchains.",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/main/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Cosmos SDK Documentation",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"High-level Overview",permalink:"/main/intro/overview"}},l={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Explore the SDK",id:"explore-the-sdk",level:2},{value:"Explore the Stack",id:"explore-the-stack",level:2},{value:"Help &amp; Support",id:"help--support",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cosmos SDK is the world\u2019s most popular framework for building application-specific blockchains."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Read all about the SDK or dive straight into the code with tutorials."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/intro/overview"},(0,n.kt)("strong",{parentName:"a"},"Introductions to the Cosmos SDK"))," - Learn about all the parts of the Cosmos SDK."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tutorials.cosmos.network"},(0,n.kt)("strong",{parentName:"a"},"SDK Tutorials"))," - Build a complete blockchain application from scratch.")),(0,n.kt)("h2",{id:"explore-the-sdk"},"Explore the SDK"),(0,n.kt)("p",null,"Get familiar with the SDK and explore its main concepts."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/intro/overview"},(0,n.kt)("strong",{parentName:"a"},"Introduction"))," - High-level overview of the Cosmos SDK."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/basics/app-anatomy"},(0,n.kt)("strong",{parentName:"a"},"Basics"))," - Anatomy of a blockchain, transaction lifecycle, accounts and more."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/core/baseapp"},(0,n.kt)("strong",{parentName:"a"},"Core Concepts"))," -  Read about the core concepts like baseapp, the store, or the server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/building-modules/intro"},(0,n.kt)("strong",{parentName:"a"},"Building Modules"))," -  Discover how to build modules for the Cosmos SDK."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/run-node/keyring"},(0,n.kt)("strong",{parentName:"a"},"Running a Node"))," - Running and interacting with nodes using the CLI and API."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/modules"},(0,n.kt)("strong",{parentName:"a"},"Modules"))," - Explore existing modules to build your application with.")),(0,n.kt)("h2",{id:"explore-the-stack"},"Explore the Stack"),(0,n.kt)("p",null,"Check out the docs for the various parts of the Cosmos stack."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hub.cosmos.network"},(0,n.kt)("strong",{parentName:"a"},"Cosmos Hub"))," - The first of thousands of interconnected blockchains on the Cosmos Network."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.cometbft.com"},(0,n.kt)("strong",{parentName:"a"},"CometBFT"))," - The leading BFT engine for building blockchains, powering Cosmos SDK.")),(0,n.kt)("h2",{id:"help--support"},"Help & Support"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/orgs/cosmos/discussions"},(0,n.kt)("strong",{parentName:"a"},"GitHub Discussions"))," - Ask questions and discuss SDK development on GitHub."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/cosmosnetwork"},(0,n.kt)("strong",{parentName:"a"},"Discord"))," - Chat with Cosmos developers on Discord."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/edit/main/docs/docs/README.md"},(0,n.kt)("strong",{parentName:"a"},"Found an issue?"))," - Help us improve this page by suggesting edits on GitHub.")))}u.isMDXComponent=!0}}]);