(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),b=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,y=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return n?i.a.createElement(y,s(s({ref:t},o),{},{components:n})):i.a.createElement(y,s({ref:t},o))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<r;o++)l[o]=n[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(117)),l={id:"features",title:"Features",sidebar_label:"Features",slug:"/entity/features"},s={unversionedId:"entity/features",id:"entity/features",isDocsHomePage:!1,title:"Features",description:"// TODO",source:"@site/docs/entity/features.md",slug:"/entity/features",permalink:"/docs/entity/features",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/entity/features.md",version:"current",sidebar_label:"Features",sidebar:"sidebar",previous:{title:"Getting started",permalink:"/docs/entity/getting-started"},next:{title:"Field Validations",permalink:"/docs/entity/validation"}},c=[{value:"Validation",id:"validation",children:[{value:"Type Validation",id:"type-validation",children:[]},{value:"Custom Validation",id:"custom-validation",children:[]}]},{value:"Serialization",id:"serialization",children:[{value:"fromJSON(value)",id:"fromjsonvalue",children:[]},{value:"JSON.stringify(entity)",id:"jsonstringifyentity",children:[]}]},{value:"Field definition",id:"field-definition",children:[{value:"Scalar types",id:"scalar-types",children:[]},{value:"Entity type",id:"entity-type",children:[]},{value:"List of Entity type",id:"list-of-entity-type",children:[]},{value:"Default value",id:"default-value",children:[]}]},{value:"Method definition",id:"method-definition",children:[]},{value:"Instance Type Check - Entity.isParentOf",id:"instance-type-check---entityisparentof",children:[]},{value:"Entity Type Check - entity.isEntity",id:"entity-type-check---entityisentity",children:[]}],o={toc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"// TODO"),Object(r.b)("h2",{id:"validation"},"Validation"),Object(r.b)("p",null,"A value of an field can be validated against the field type or its custom validation."),Object(r.b)("h3",{id:"type-validation"},"Type Validation"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"\nconst Plan = \n    entity('Plan', {\n        ...\n        monthlyCost: field(Number),\n    })\n\nconst User = \n    entity('User', {\n        name: field(String),\n        plan: field(Plan)\n    })\n\nconst user = new User()\nuser.name = 42\nuser.plan.monthlyCost = true\nuser.validate() \nuser.errors // { name: [ wrongType: 'String' ], plan: { monthlyCost: [ wrongType: 'Number' ] } }\nuser.isValid() // false\n")),Object(r.b)("p",null,"You can also simplify you validation method using ",Object(r.b)("inlineCode",{parentName:"p"},"isValid()")," method that execute validate for you entity and return true/false in a single execution."),Object(r.b)("h3",{id:"custom-validation"},"Custom Validation"),Object(r.b)("p",null,"For custom validation Gotu uses Herbs JS ",Object(r.b)("a",{parentName:"p",href:"https://github.com/herbsjs/suma"},"Suma")," library under the hood. It has no message defined, only error codes."),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"{ validation: ... }")," to specify a valid Suma validation (sorry) on the field definition."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        ...\n        password: field(String, validation: { \n            presence: true, \n            length: { minimum: 6 }\n        })\n    })\n\nconst user = new User()\nuser.password = '1234'\nuser.validate() \nuser.errors // { password: [ { isTooShort: 6 } ] }\nuser.isValid // false\n")),Object(r.b)("h2",{id:"serialization"},"Serialization"),Object(r.b)("h3",{id:"fromjsonvalue"},"fromJSON(value)"),Object(r.b)("p",null,"Returns a new instance of a entity"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        name: field(String)\n    })\n\n// from object\nconst user = User.fromJSON({ name: 'Beth'})\n// or string\nconst user = User.fromJSON(`{ \"name\": \"Beth\"}`)\n")),Object(r.b)("p",null,"By default ",Object(r.b)("inlineCode",{parentName:"p"},"fromJSON")," serializes only keys that have been defined in the entity. If you want to add other keys during serialization, use ",Object(r.b)("inlineCode",{parentName:"p"},".fromJSON(data, { allowExtraKeys: true })"),"."),Object(r.b)("h3",{id:"jsonstringifyentity"},"JSON.stringify(entity)"),Object(r.b)("p",null,"To serialize an entity to JSON string use ",Object(r.b)("inlineCode",{parentName:"p"},"JSON.stringify")," or ",Object(r.b)("inlineCode",{parentName:"p"},"entity.toJSON")," function."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'const json = JSON.stringify(user) // { "name": "Beth" }\n')),Object(r.b)("p",null,"By default ",Object(r.b)("inlineCode",{parentName:"p"},"toJSON")," serializes only keys that have been defined in the entity. If you want to add other keys during serialization, use ",Object(r.b)("inlineCode",{parentName:"p"},"entity.toJSON({ allowExtraKeys: true })"),"."),Object(r.b)("h2",{id:"field-definition"},"Field definition"),Object(r.b)("p",null,"A entity field type has a name, type, default value, validation and more."),Object(r.b)("h3",{id:"scalar-types"},"Scalar types"),Object(r.b)("p",null,"A field in an entity can be of basic types, the same as those used by JavaScript:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Number"),": double-precision 64-bit binary format IEEE 754 value"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"String"),": a UTF\u201016 character sequence"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Boolean"),": true or false"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Date"),": represents a single moment in time in a platform-independent format."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        name: field(String),\n        lastAccess: field(Date),\n        accessCount: field(Number),\n        hasAccess: field(Boolean)\n    })\n")),Object(r.b)("h3",{id:"entity-type"},"Entity type"),Object(r.b)("p",null,"For complex types, with deep relationship between entities, a field can be of entity type:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const Plan = \n    entity('Plan', {\n        ...\n        monthlyCost: field(Number),\n    })\n\nconst User = \n    entity('User', {\n        ...\n        plan: field(Plan)\n    })\n")),Object(r.b)("h3",{id:"list-of-entity-type"},"List of Entity type"),Object(r.b)("p",null,"For complex types, with deep relationship between entities, a field can contain a list of entity type:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const Plan = \n    entity('Plan', {\n        ...\n        monthlyCost: field(Number),\n    })\n\nconst User = \n    entity('User', {\n        ...\n        plan: field([Plan])\n    })\n")),Object(r.b)("h3",{id:"default-value"},"Default value"),Object(r.b)("p",null,"It is possible to define a default value when an entity instance is initiate."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        ...\n        hasAccess: field(Boolean, { default: false })\n    })\n\n\nconst user = new User()\nuser.hasAccess // false\n")),Object(r.b)("p",null,"If the default value is a ",Object(r.b)("inlineCode",{parentName:"p"},"function")," it will call the function and return the value as default value:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        ...\n        hasAccess: field(Boolean, { default: () => false })\n    })\n\n\nconst user = new User()\nuser.hasAccess // false\n")),Object(r.b)("p",null,"For scalar types a default value is assumed if a default value is not given:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Number")),Object(r.b)("td",{parentName:"tr",align:null},"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"String")),Object(r.b)("td",{parentName:"tr",align:null},'""')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Boolean")),Object(r.b)("td",{parentName:"tr",align:null},"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Date")),Object(r.b)("td",{parentName:"tr",align:null},"null")))),Object(r.b)("p",null,"For entity types the default value is a new instance of that type. It is possible to use ",Object(r.b)("inlineCode",{parentName:"p"},"null")," as default:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        ...\n        plan: field(Plan, { default: null })\n    })\n\nconst user = new User()\nuser.plan // null\n")),Object(r.b)("h2",{id:"method-definition"},"Method definition"),Object(r.b)("p",null,"A method can be defined to create custom behaviour in an entity:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        ...\n        role: field(String),\n        hasAccess() { return this.role === \"admin\" },\n    })\n\nconst user = new User()\nconst access = user.hasAccess()\n")),Object(r.b)("h2",{id:"instance-type-check---entityisparentof"},"Instance Type Check - Entity.isParentOf"),Object(r.b)("p",null,"Check if a instance is the same type from its parent entity class (similar to ",Object(r.b)("inlineCode",{parentName:"p"},"instanceOf"),")"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"        const AnEntity = entity('A entity', {})\n        const AnSecondEntity = entity('A second entity', {})\n\n        const instance1 = new AnEntity()\n        const instance2 = new AnSecondEntity()\n        \n        AnEntity.isParentOf(instance1) // true\n        AnEntity.isParentOf(instance2) // false\n")),Object(r.b)("h2",{id:"entity-type-check---entityisentity"},"Entity Type Check - entity.isEntity"),Object(r.b)("p",null,"Check if an object is a Gotu Entity class"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"        const AnEntity = entity('A entity', {})\n\n        const instance1 = new AnEntity()\n        \n        entity.isEntity(AnEntity) // true\n        entity.isEntity(Object) // false\n")))}b.isMDXComponent=!0}}]);