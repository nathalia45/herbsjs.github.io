(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{117:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),O=n,d=p["".concat(i,".").concat(O)]||p[O]||b[O]||s;return r?a.a.createElement(d,l(l({ref:t},c),{},{components:r})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),s=(r(0),r(117)),i={id:"result",title:"Result",sidebar_label:"Result",slug:"/usecase/result"},l={unversionedId:"usecase/result",id:"usecase/result",isDocsHomePage:!1,title:"Result",description:"Result",source:"@site/docs/usecase/result.md",slug:"/usecase/result",permalink:"/docs/usecase/result",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/usecase/result.md",version:"current",sidebar_label:"Result",sidebar:"sidebar",previous:{title:"Steps",permalink:"/docs/usecase/steps"},next:{title:"What's a Use Case?",permalink:"/docs/usecase"}},o=[{value:"Result",id:"result",children:[]},{value:"Ok",id:"ok",children:[]},{value:"Err",id:"err",children:[]}],c={toc:o};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"result"},"Result"),Object(s.b)("p",null,"The result instances indicate whether the execution of a function was successful or not. ",Object(s.b)("inlineCode",{parentName:"p"},"Ok(value)")," representing success and containing a ",Object(s.b)("inlineCode",{parentName:"p"},"value"),", and ",Object(s.b)("inlineCode",{parentName:"p"},"Err(error)"),", representing error and containing an ",Object(s.b)("inlineCode",{parentName:"p"},"error")," value."),Object(s.b)("p",null,"For exemple:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"const createList = usecase('Create List', {\n\n    'Check if the List is valid': step(ctx => {\n        ...\n        if (!list.isValid()) return Err(list.errors)\n        return Ok()\n    }),\n")),Object(s.b)("p",null,"To consume the information:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"/* Execution */\nconst request = { ... }\nconst response = await createList.run(request)\n\n/* Response */\nif (response.isErr)\n    throw new ResponseError(null, { invalidArgs: response.err }) \n    // Or any other behavior for error response\n    \nreturn response.ok // response.ok has the returned value\n")),Object(s.b)("p",null,"Results are a important run-time metadata to inform Glues about the execution of a use case."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"result.isOk"),": returns if the result is ",Object(s.b)("inlineCode",{parentName:"p"},"Ok"),"."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"result.isErr"),": returns if the result is ",Object(s.b)("inlineCode",{parentName:"p"},"Err"),"."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"result.toString()"),": returns the string representation of the result."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"result.toJSON()"),": returns the JSON representation of the result."),Object(s.b)("h2",{id:"ok"},"Ok"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Ok(value)"),", where:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"value"),": success value.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"return: ",Object(s.b)("inlineCode",{parentName:"p"},"Ok")," instance."))),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"result.ok"),": returns the success value."),Object(s.b)("h2",{id:"err"},"Err"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Err(error)"),", where:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"error"),": error value.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"return: ",Object(s.b)("inlineCode",{parentName:"p"},"Err")," instance."))),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"result.err"),": returns the error value."))}u.isMDXComponent=!0}}]);