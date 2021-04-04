(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),s=(n(0),n(117)),i={id:"gettingStarted",title:"Getting started",sidebar_label:"Getting started",slug:"/usecase/getting-started"},c={unversionedId:"usecase/gettingStarted",id:"usecase/gettingStarted",isDocsHomePage:!1,title:"Getting started",description:"Installing",source:"@site/docs/usecase/getting-started.md",slug:"/usecase/getting-started",permalink:"/docs/usecase/getting-started",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/usecase/getting-started.md",version:"current",sidebar_label:"Getting started",sidebar:"sidebar",previous:{title:"8. Security and Auditing",permalink:"/docs/tutotial/security"},next:{title:"Features",permalink:"/docs/usecase/features"}},o=[{value:"Installing",id:"installing",children:[]},{value:"Using",id:"using",children:[]},{value:"Running",id:"running",children:[]}],u={toc:o};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"installing"},"Installing"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"$ npm install buchu")),Object(s.b)("h2",{id:"using"},"Using"),Object(s.b)("p",null,"This is an example of how to set up a use case for creating a list (entity):"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"usecases/list/createList.js"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"const { usecase, step, Ok, Err } = require('buchu')\n\nmodule.exports.createList = injection =>\n  usecase('Create List', {\n    // Input/Request metadata and validation \n    request: { name: String },\n\n    // Output/Response metadata\n    response: TodoList,\n\n    // Pre-run setup\n    setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),\n\n    // Authorization with Audit\n    authorize: user => (user.canCreateList ? Ok() : Err()),\n\n    // Step description and function\n    'Check if the List is valid': step(ctx => {\n      const list = ctx.list = new TodoList()\n      list.id = Math.floor(Math.random() * 100000)\n      list.name = ctx.req.name\n\n      if (!list.isValid()) return Err(list.errors)\n      return Ok() // returning Ok continues to the next step. Err stops the use case execution.\n    }),\n\n    'Save the List': step(async ctx => {\n      const repo = new ctx.di.ListRepository(injection)\n      return (ctx.ret = await repo.insert(ctx.list)) // ctx.ret is the Use Case return\n    }),\n  })\n")),Object(s.b)("h2",{id:"running"},"Running"),Object(s.b)("p",null,"Use cases are likely to be called and audited indirectly by a ",Object(s.b)("a",{parentName:"p",href:"/docs/glues"},"Glue"),". But for didactic purposes or advanced scenarios, this is how to run and audit a use case:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Check if the user has authorization to run this use case")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"/* Authorization */\nconst hasAccess = usecase.authorize(user)\nif (hasAccess === false) {\n    console.info(usecase.auditTrail)\n    throw new ForbiddenError() // Or any other behavior for a unauthorized user\n}\n")),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},"Prepare your request object and call the ",Object(s.b)("inlineCode",{parentName:"li"},".run()")," function.")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"\n/* Execution */\nconst request = { name: 'The best list' }\nconst response = await usecase.run(request)\n\n")),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},"Audit the execution ")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"\n/* Audit */\nconsole.info(usecase.auditTrail)\n/*\n{\n    type: 'use case',\n    description: 'Create List',\n    authorized: true,\n    steps: (2) [{\u2026}, {\u2026}],\n    transactionId: '2bbc60d6-7843-4667-8732-341c22bae42e',\n    elapsedTime: 172811500n,\n    return: {Ok: {\u2026}},\n    user: { canCreateList: true }\n}\n*/\n\n")),Object(s.b)("ol",{start:4},Object(s.b)("li",{parentName:"ol"},"Check if the use case execution returned an error or success")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"\n/* Response */\nif (response.isErr)\n    throw new ResponseError(null, { invalidArgs: response.err }) \n    // Or any other behavior for error response\nreturn response.ok // response.ok has the returned value\n")))}l.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,g=p["".concat(i,".").concat(b)]||p[b]||d[b]||s;return n?a.a.createElement(g,c(c({ref:t},u),{},{components:n})):a.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<s;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);