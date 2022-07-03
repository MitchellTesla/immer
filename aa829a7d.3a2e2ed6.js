(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(98)),i={id:"freezing",title:"Auto freezing"},c={unversionedId:"freezing",id:"freezing",isDocsHomePage:!1,title:"Auto freezing",description:"<div",source:"@site/docs/freezing.mdx",slug:"/freezing",permalink:"/immer/freezing",editUrl:"https://github.com/immerjs/immer/edit/master/website/docs/freezing.mdx",version:"current",sidebar:"Immer",previous:{title:"Patches",permalink:"/immer/patches"},next:{title:"Returning new data from producers",permalink:"/immer/return"}},s=[],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("center",null,Object(o.b)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",className:"horizontal bordered"}))," ",Object(o.b)("details",null,Object(o.b)("summary",{className:"egghead-summary"},"egghead.io lesson 7: Immer automatically freezes data"),Object(o.b)("br",null),Object(o.b)("div",null,Object(o.b)("iframe",{width:"760",height:"427",scrolling:"no",src:"https://egghead.io/lessons/javascript-produces-immutable-data-and-avoid-unnecessary-creation-of-new-data-trees-with-immer/embed"})),Object(o.b)("a",{className:"egghead-link",href:"https://egghead.io/lessons/javascript-produces-immutable-data-and-avoid-unnecessary-creation-of-new-data-trees-with-immer"},"Hosted on egghead.io")),Object(o.b)("p",null,"Immer automatically freezes any state trees that are modified using ",Object(o.b)("inlineCode",{parentName:"p"},"produce"),". This protects against accidental modifications of the state tree outside of a producer. In most cases this provides the most optimal behavior, but ",Object(o.b)("inlineCode",{parentName:"p"},"setAutoFreeze(true / false)")," can be used to explicitly turn this feature on or off."),Object(o.b)("p",null,"Immer will never freeze (the contents of) non-enumerable, non-own or symbolic properties, unless their content was drafted."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"\u26a0\ufe0f Immer freezes everything recursively, for large data objects that won't be changed in the future this might be over-kill, in that case it can be more efficient to shallowly pre-freeze data using the ",Object(o.b)("inlineCode",{parentName:"em"},"freeze")," utility.\u26a0\ufe0f")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"\u26a0\ufe0f If auto freezing is enabled, recipes are not entirely side-effect free: Any plain object or array that ends up in the produced result, will be frozen, even when these objects were not frozen before the start of the producer! \u26a0\ufe0f")))}u.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);