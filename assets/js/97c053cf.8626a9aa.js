(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),r=(n(0),n(117)),i={id:"validation",title:"Field Validations",sidebar_label:"Field Validations",slug:"/entity/validation"},o={unversionedId:"entity/validation",id:"entity/validation",isDocsHomePage:!1,title:"Field Validations",description:"// TODO - Change suma to gotu entity examples",source:"@site/docs/entity/validation.md",slug:"/entity/validation",permalink:"/docs/entity/validation",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/entity/validation.md",version:"current",sidebar_label:"Field Validations",sidebar:"sidebar",previous:{title:"Features",permalink:"/docs/entity/features"},next:{title:"What's a entity?",permalink:"/docs/entity"}},s=[{value:"Type",id:"type",children:[]},{value:"Presence",id:"presence",children:[]},{value:"Allow Null",id:"allow-null",children:[]},{value:"Presence vs allowNull",id:"presence-vs-allownull",children:[]},{value:"Contains",id:"contains",children:[]},{value:"Length",id:"length",children:[]},{value:"Numericality",id:"numericality",children:[]},{value:"Datetime",id:"datetime",children:[]},{value:"E-mail",id:"e-mail",children:[]},{value:"Format",id:"format",children:[]},{value:"URL",id:"url",children:[]},{value:"Null Values",id:"null-values",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"// TODO - Change suma to gotu entity examples"),Object(r.b)("h2",{id:"type"},"Type"),Object(r.b)("p",null,"Type validator ensures a value is of the correct JavaScript type or a custom type."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"type")," - A valid native JavaScript type, a custom type or a array with type"),Object(r.b)("p",null,"Native JavaScript types:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Number")," - double-precision 64-bit binary format IEEE 754 value"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"String")," - a UTF\u201016 character sequence"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Boolean")," - true or false"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Date")," - represents a single moment in time in a platform-independent format. "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Object")," - the Object class represents one of JavaScript's data types."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Array")," - the Array class is a object that is used in the construction of arrays. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const value = '2001'\nconst validations = { type: Date }\nconst result = validate(value, validations)\n/* {\n    value: '2001',\n    errors:[{ wrongType: 'Date' }]\n} */\n\n")),Object(r.b)("p",null,"Custom types:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"\nclass User { ... }\n\nconst value = 'Admin'\nconst validations = { type: User }\nconst result = validate(value, validations)\n/* {\n    value: 'Admin',\n    errors:[{ wrongType: 'User' }]\n} */\n\n")),Object(r.b)("p",null,"Lists - Array with types:"),Object(r.b)("p",null,"It is possible to validate the type of elements of an array. Just use ",Object(r.b)("inlineCode",{parentName:"p"},"[type]"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const value = ['2']\nconst validations = { type: [Number] }\nconst result = validate(value, validations)\n/* {\n    value: ['2'],\n    errors:[{ wrongType: ['Number'] }]\n} */\n")),Object(r.b)("h2",{id:"presence"},"Presence"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"presence")," (boolean) - Validates that the specified value is not empty."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const value = ''\nconst validations = { presence: true }\nconst result = validate(value, validations) \n/* {\n    value: '',\n    errors: [{ cantBeEmpty: true }]\n} */\n")),Object(r.b)("h2",{id:"allow-null"},"Allow Null"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"allowNull")," (boolean) - Validates that the specified value is not ",Object(r.b)("inlineCode",{parentName:"p"},"null")," or ",Object(r.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const value = null\nconst validations = { allowNull: false }\nconst result = validate(value, validations) \n/* {\n    value: null,\n    errors: [{ cantBeNull: true }]\n} */\n")),Object(r.b)("h2",{id:"presence-vs-allownull"},"Presence vs allowNull"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null},"presence: true"),Object(r.b)("th",{parentName:"tr",align:null},"allowNull: false"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"'Text'"),Object(r.b)("td",{parentName:"tr",align:null},"Valid"),Object(r.b)("td",{parentName:"tr",align:null},"Valid")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"123"),Object(r.b)("td",{parentName:"tr",align:null},"Valid"),Object(r.b)("td",{parentName:"tr",align:null},"Valid")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"0"),Object(r.b)("td",{parentName:"tr",align:null},"Valid"),Object(r.b)("td",{parentName:"tr",align:null},"Valid")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"' '"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"Valid")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"''"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"Valid")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"[]"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"Valid")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"{}"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"Valid")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"null"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"undefined"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null})))),Object(r.b)("h2",{id:"contains"},"Contains"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"contains")," -  The contains validator is useful for validating allowance or restriction in certain values.\nIt checks that the given value exists in the target given by the ",Object(r.b)("strong",{parentName:"p"},"allowed")," or  ",Object(r.b)("strong",{parentName:"p"},"notAllowed")," option."),Object(r.b)("p",null,"You can specify the validator as a list, string or as an object (in which case the keys of the object are used)."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"allowed option examples:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'\nconst value = \'xlarge\'\nconst validations = { contains: { allowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations) \n/* {\n    value: \'xlarge\',\n    errors: [{ notContains: ["small", "medium", "large"] }]\n} */\n\nconst value = \'hello\'\nconst validations = { contains: { allowed: "lorem ipsum dolor" } }\nconst result = validate(value, validations) \n/* {\n    value: \'hello\',\n    errors: [{ notContains: "lorem ipsum dolor" }]\n} */\n\n\nconst attr = \'price\'\nconst validations = { contains: { allowed: {type:"Fiat", model:"500", color:"white"} } }\nconst result = validate(attr, validations) \n/* {\n    value: \'price\',\n     errors: [{ notContains: {type:"Fiat", model:"500", color:"white"} }]\n} */\n\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"notAllowed option examples:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'\nconst value = \'small\'\nconst validations = { contains: { notAllowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations) \n/* {\n    value: \'small\',\n    errors: [{ contains: ["small", "medium", "large"] }]\n} */\n\n\nconst value = \'hello\'\nconst validations = { contains: { notAllowed: "hello world" } }\nconst result = validate(value, validations) \n/* {\n    value: \'hello\',\n    errors: [{ contains: "hello world" }]\n} */\n\n\nconst attr = \'type\'\nconst validations = { contains: { notAllowed: {type:"Fiat", model:"500", color:"white"} } }\nconst result = validate(attr, validations) \n/* {\n     value: \'type\',\n     errors: [{ contains: {type:"Fiat", model:"500", color:"white"} }]\n} */\n\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"using both options examples:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'\nconst value = \'regular\'\nconst validations = { contains: { notAllowed: ["xlarge", "xxlarge", "tiny"], allowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations) \n/* {\n    value: \'regular\',\n    errors: [{ notContains: ["small", "medium", "large"] }]\n} */\n\nconst value = \'xlarge\'\nconst validations = { contains: { notAllowed: ["xlarge", "xxlarge", "tiny"], allowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations) \n/* {\n    value: \'xlarge\',\n    errors: [\n             { notContains: ["small", "medium", "large"] },\n             { contains: ["xlarge", "xxlarge", "tiny"] }\n            ]\n} */\n\n\n')),Object(r.b)("h2",{id:"length"},"Length"),Object(r.b)("p",null,"Validates the length of the value. "),Object(r.b)("p",null,"It is possible to specify length constraints in different ways:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"minimum")," (number) - The value cannot have less than the specified length"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"maximum")," (number) - The value cannot have more than the specified length"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"is")," (number) - The value length must be equal to the given length"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const value = 'john'\nconst validations = { length: { minimum: 5, maximum: 3, is: 1 } }\nconst result = validate(value, validations) \n/* {\n    value: 'john',\n    errors: [\n        { isTooShort: 5 },\n        { isTooLong: 3 },\n        { wrongLength: 1 }\n    ]\n} */\n")),Object(r.b)("h2",{id:"numericality"},"Numericality"),Object(r.b)("p",null,"Validates constraints to acceptable numeric values."),Object(r.b)("p",null,"It must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"Number")," JS object. Use ",Object(r.b)("inlineCode",{parentName:"p"},"{ type: Number }")," to validate if the value is a valid JS ",Object(r.b)("inlineCode",{parentName:"p"},"Number")," object."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"equalTo")," (number) - Specifies the value must be equal to the supplied value. "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"greaterThan")," (number) - Specifies the value must be greater than the supplied value. "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"greaterThanOrEqualTo")," (number) - Specifies the value must be greater than or equal to the supplied value."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"lessThan")," (number) - Specifies the value must be less than the supplied value."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"lessThanOrEqualTo")," (number) - Specifies the value must be less than or equal to the supplied value. "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"onlyInteger")," (boolean) - To specify that only integral numbers are allowed."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const value = 123.4\nconst validations = {\n    numericality: {\n        equalTo: 123,\n        greaterThan: 200,\n        greaterThanOrEqualTo: 123,\n        lessThan: 0,\n        lessThanOrEqualTo: 123,\n        onlyInteger: true\n    }\n}\nconst result = validate(value, validations) \n/* {\n    value: 123.4,\n    errors: [\n        { notEqualTo: 123 },\n        { notGreaterThan: 200 },\n        { notLessThan: 0 },\n        { notLessThanOrEqualTo: 123 },\n        { notAnInteger: true }\n    ]\n} */\n")),Object(r.b)("h2",{id:"datetime"},"Datetime"),Object(r.b)("p",null,"Validates constraints to acceptable date and time values."),Object(r.b)("p",null,"It must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"Date")," time JS object. Use ",Object(r.b)("inlineCode",{parentName:"p"},"{ type: Date }")," to validate if the value is a valid JS ",Object(r.b)("inlineCode",{parentName:"p"},"Date")," object."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"before")," (date) - A date must be before this value to be valid "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"after")," (date) - A date must be after this value to be valid "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"isAt")," (date) - A date must be equal to value to be valid "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const value = new Date('2001-01-02')\nconst validations = {\n    datetime : {\n            before: new Date('2001-01-01'),\n            after: new Date('2001-01-03'),\n            isAt: new Date('2001-02-02')\n        }\n}\nconst result = validate(value, validations) \n/* {\n    value: '2001-01-02T00:00:00.000Z',\n    errors: [\n        { tooLate: '2001-01-01T00:00:00.000Z' },\n        { tooEarly: '2001-01-03T00:00:00.000Z') },\n        { notAt: '2001-02-02T00:00:00.000Z') }\n    ]\n} */\n")),Object(r.b)("h2",{id:"e-mail"},"E-mail"),Object(r.b)("p",null,"The email validator attempts to make sure the input is a valid email.\nValidating emails is tricky business due to the complex rules of email address formatting."),Object(r.b)("p",null,"For example ",Object(r.b)("strong",{parentName:"p"},"john.doe@gmail")," is a perfectly valid email but it's most likely just the case that John has forgotten to write .com at the end."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const value = 'just\\\"not\\\"right@example.com'\nconst validations = { email: true }\nconst result = validate(value, validations) \n/* {\n    value: 'just\\\"not\\\"right@example.com'\n    errors: [{ invalidEmail: true }]\n} */\n")),Object(r.b)("h2",{id:"format"},"Format"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"format")," (regex) -The format validator will validate a value against a regular expression of your chosing."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"\nconst pattern = /^[0-9]{8}$/ // or you can use new RegExp('^[0-9]{8}$')\nconst value = '05547-022'\nconst validations = { format: pattern }\nconst result = validate(value, validations) \n/* {\n    value: '05547-022',\n    errors: [{ invalidFormat: true }]\n} */\n\n\n")),Object(r.b)("h2",{id:"url"},"URL"),Object(r.b)("p",null," The URL validator ensures that the input is a valid URL. Validating URLs are pretty tricky but this validator is inspired on a gist that can be found ",Object(r.b)("a",{parentName:"p",href:"https://gist.github.com/dperini/729294"},Object(r.b)("inlineCode",{parentName:"a"},"here")),". "),Object(r.b)("p",null," The following options are supported: "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"schemes")," - (array of string) A list of schemes to allow. If you want to support any scheme you can use a regexp here (for example ",Object(r.b)("strong",{parentName:"p"},'[".+"]'),"). The default value is ",Object(r.b)("strong",{parentName:"p"},'["http", "https"]'),". "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"allowLocal")," (boolean) - A boolean that if true allows local hostnames such as ",Object(r.b)("strong",{parentName:"p"},"10.0.1.1")," or localhost. The default is ",Object(r.b)("strong",{parentName:"p"},"false"),". "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"allowDataUrl")," (boolean) - A boolean that if true allows data URLs as defined in ",Object(r.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc2397"},Object(r.b)("inlineCode",{parentName:"a"},"RFC 2397")),". The default is ",Object(r.b)("strong",{parentName:"p"},"false")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const value = \"google.com\"\nconst validations = { url: true }\nconst result = validate(value, validations) \n/* {\n    value: 'google.com',\n    errors: [{ invalidURL: true }]\n} */\n\nconst value = \"http://localhost\"\nconst validations = { url: {allowLocal: true} }\nconst result = validate(value, validations) \n/* {\n    value: 'http://localhost',\n    errors: []\n} */\n\nconst options = {schemes: ['ftp']}\nconst value = \"ftp://google.com\"\nconst validations = { url: options }\nconst result = validate(value, validations) \n/* {\n    value: 'ftp://google.com',\n    errors: []\n} */\n")),Object(r.b)("h2",{id:"null-values"},"Null Values"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"type"),", ",Object(r.b)("inlineCode",{parentName:"p"},"length"),", ",Object(r.b)("inlineCode",{parentName:"p"},"numericality"),", ",Object(r.b)("inlineCode",{parentName:"p"},"format")," and ",Object(r.b)("inlineCode",{parentName:"p"},"datetime")," validators won't validate a value if it's ",Object(r.b)("inlineCode",{parentName:"p"},"null")," or ",Object(r.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(r.b)("p",null,"To ensure your your value is not null, use ",Object(r.b)("inlineCode",{parentName:"p"},"allowNull: false")," or ",Object(r.b)("inlineCode",{parentName:"p"},"presence: true"),"."))}b.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),b=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||r;return n?l.a.createElement(m,o(o({ref:t},c),{},{components:n})):l.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);