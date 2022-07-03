(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),c=(r(0),r(98)),i={id:"async",title:"\u5f02\u6b65 producers & createDraft / finishDraft",sidebar_label:"\u5f02\u6b65 produce / createDraft"},o={unversionedId:"async",id:"async",isDocsHomePage:!1,title:"\u5f02\u6b65 producers & createDraft / finishDraft",description:"<div",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/async.mdx",slug:"/async",permalink:"/immer/zh-CN/async",editUrl:"https://github.com/immerjs/immer/edit/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/async.mdx",version:"current",sidebar_label:"\u5f02\u6b65 produce / createDraft",sidebar:"Immer",previous:{title:"\u4ece producers \u8fd4\u56de\u65b0\u6570\u636e",permalink:"/immer/zh-CN/return"},next:{title:"Using TypeScript or Flow",permalink:"/immer/zh-CN/typescript"}},s=[{value:"<code>createDraft</code> and <code>finishDraft</code>",id:"createdraft-and-finishdraft",children:[]}],p={toc:s};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("center",null,Object(c.b)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",className:"horizontal bordered"}))," ",Object(c.b)("details",null,Object(c.b)("summary",{className:"egghead-summary"},"egghead.io \u7b2c11\u8bfe: \u521b\u5efa",Object(c.b)("b",null,"\u5f02\u6b65")," producers\uff08\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u4e0d\u5e94\u8be5\u8fd9\u6837\u505a\uff09"),Object(c.b)("br",null),Object(c.b)("div",null,Object(c.b)("iframe",{width:"760",height:"427",scrolling:"no",src:"https://egghead.io/lessons/react-write-asynchronous-producers-in-immer-and-why-you-shouldn-t/embed"})),Object(c.b)("a",{className:"egghead-link",href:"https://egghead.io/lessons/react-write-asynchronous-producers-in-immer-and-why-you-shouldn-t"},"Hosted on egghead.io")),Object(c.b)("p",null,"\u5141\u8bb8\u4ece recipe \u8fd4\u56de Promise \u5bf9\u8c61\u3002\u6216\u8005\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"async / await"),"\u3002\u8fd9\u5bf9\u4e8e\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u8fdb\u7a0b\u975e\u5e38\u6709\u7528\uff0c\u53ea\u6709\u5728 Promise \u94fe\u89e3\u6790\u540e\u624d\u751f\u6210\u65b0\u5bf9\u8c61\u3002\u8bf7\u6ce8\u610f\uff0c\u5982\u679c producer \u662f\u5f02\u6b65\u7684\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"produce")," \u672c\u8eab\uff08\u5373\u4f7f\u662f\u67ef\u91cc\u5316\u5f62\u5f0f\uff09\u4e5f\u4f1a\u8fd4\u56de\u4e00\u4e2a promise\u3002\u4f8b\u5b50:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'import produce from "immer"\n\nconst user = {\n    name: "michel",\n    todos: []\n}\n\nconst loadedUser = await produce(user, async function(draft) {\n    draft.todos = await (await window.fetch("http://host/" + draft.name)).json()\n})\n')),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"\u8b66\u544a\uff1a\u8bf7\u6ce8\u610f\uff0cdraft \u4e0d\u5e94\u4ece\u5f02\u6b65\u7a0b\u5e8f\u4e2d\u201c\u6cc4\u9732\u201d\u5e76\u5b58\u50a8\u5728\u5176\u4ed6\u5730\u65b9\u3002\u5f02\u6b65\u8fc7\u7a0b\u5b8c\u6210\u540e\uff0cdraft \u4ecd\u5c06\u88ab\u91ca\u653e")),Object(c.b)("h2",{id:"createdraft-and-finishdraft"},Object(c.b)("inlineCode",{parentName:"h2"},"createDraft")," and ",Object(c.b)("inlineCode",{parentName:"h2"},"finishDraft")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"createDraft")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"finishDraft")," \u662f\u4e24\u4e2a\u5e95\u5c42\u51fd\u6570\uff0c\u5b83\u4eec\u5bf9\u4e8e\u5728 immer \u4e4b\u4e0a\u6784\u5efa\u62bd\u8c61\u7684\u5e93\u975e\u5e38\u6709\u7528\u3002\u5b83\u907f\u514d\u4e86\u4e3a\u4e86\u4f7f\u7528 draft \u59cb\u7ec8\u521b\u5efa\u51fd\u6570\u3002\u76f8\u53cd\uff0c\u4eba\u4eec\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a draft\uff0c\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\uff0c\u5e76\u5728\u672a\u6765\u7684\u67d0\u4e2a\u65f6\u95f4\u5b8c\u6210\u8be5 draft\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5c06\u4ea7\u751f\u4e0b\u4e00\u4e2a\u4e0d\u53ef\u53d8\u72b6\u6001\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u4e0a\u9762\u7684\u793a\u4f8b\u91cd\u5199\u4e3a\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'import {createDraft, finishDraft} from "immer"\n\nconst user = {\n    name: "michel",\n    todos: []\n}\n\nconst draft = createDraft(user)\ndraft.todos = await (await window.fetch("http://host/" + draft.name)).json()\nconst loadedUser = finishDraft(draft)\n')),Object(c.b)("p",null,"\u6ce8\u610f\uff1a",Object(c.b)("inlineCode",{parentName:"p"},"finishDraft")," \u4ee5\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"patchListener")," \u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u7528\u6765\u8bb0\u5f55 patches\uff0c\u7c7b\u4f3c\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"produce")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"\u8b66\u544a\uff1a\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"em"},"producer")," \u800c\u4e0d\u662f ",Object(c.b)("inlineCode",{parentName:"em"},"createDraft / finishDraft")," \u7ec4\u5408\uff0c",Object(c.b)("inlineCode",{parentName:"em"},"produce")," \u5728\u4f7f\u7528\u4e2d\u4e0d\u6613\u51fa\u9519\uff0c\u5e76\u4e14\u5728\u4ee3\u7801\u4e2d\u66f4\u6e05\u695a\u5730\u533a\u5206\u4e86\u53ef\u53d8\u6027\u548c\u4e0d\u53d8\u6027\u7684\u6982\u5ff5\u3002")))}d.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(r),b=n,m=l["".concat(i,".").concat(b)]||l[b]||u[b]||c;return r?a.a.createElement(m,o(o({ref:t},p),{},{components:r})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<c;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);