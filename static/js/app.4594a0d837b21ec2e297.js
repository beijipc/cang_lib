!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],d=t[3]||[],s=0,u=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(C,o)&&C[o]&&u.push(C[o][0]),C[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(q&&q(t),N.push.apply(N,d);u.length;)u.shift()();return H.push.apply(H,c||[]),n()}function n(){for(var e,t=0;t<H.length;t++){for(var n=H[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==C[a]&&(r=!1)}r&&(H.splice(t--,1),e=T(T.s=n[0]))}return 0===H.length&&(N.forEach(function(e){if(void 0===C[e]){C[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",T.nc&&t.setAttribute("nonce",T.nc),t.rel="prefetch",t.as="script",t.href=S(e),document.head.appendChild(t)}}),N.length=0),e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!x[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0===--y&&0===b&&k()}(e,t),r&&r(e,t)};var o,a=!0,i="4594a0d837b21ec2e297",c=1e4,d={},s=[],u=[];function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"===typeof e)t._selfAccepted=e;else if("object"===typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"===typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:j,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:d[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var m,g,v,y=0,b=0,w={},E={},x={};function O(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=T.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(a){return n(a)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(a){return void n(a)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;E={},w={},x=e.c,v=e.h,h("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var n in g={},C)_(n);return"prepare"===f&&0===b&&0===y&&k(),t});var t}function _(e){x[e]?(E[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=T.p+""+e+"."+i+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):w[e]=!0}function k(){h("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then(function(){return P(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(O(n));e.resolve(t)}}function P(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function u(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=D[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<a.parents.length;d++){var s=a.parents[d],u=D[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),l(n[s],[i])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},m=[],y={},b=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var w in g)if(Object.prototype.hasOwnProperty.call(g,w)){var E;c=O(w);var j=!1,_=!1,k=!1,P="";switch((E=g[w]?u(c):{type:"disposed",moduleId:w}).chain&&(P="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(j=new Error("Aborted because of self decline: "+E.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(j=new Error("Aborted because "+c+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(E),_=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),k=!0;break;default:throw new Error("Unexception type "+E.type)}if(j)return h("abort"),Promise.reject(j);if(_)for(c in y[c]=g[c],l(m,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,c)&&(p[c]||(p[c]=[]),l(p[c],E.outdatedDependencies[c]));k&&(l(m,[E.moduleId]),y[c]=b)}var A,H=[];for(r=0;r<m.length;r++)c=m[r],D[c]&&D[c].hot._selfAccepted&&y[c]!==b&&H.push({module:c,errorHandler:D[c].hot._selfAccepted});h("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete C[e]}(e)});for(var N,S,B=m.slice();B.length>0;)if(c=B.pop(),a=D[c]){var I={},M=a.hot._disposeHandlers;for(o=0;o<M.length;o++)(n=M[o])(I);for(d[c]=I,a.hot.active=!1,delete D[c],delete p[c],o=0;o<a.children.length;o++){var q=D[a.children[o]];q&&((A=q.parents.indexOf(c))>=0&&q.parents.splice(A,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=D[c]))for(S=p[c],o=0;o<S.length;o++)N=S[o],(A=a.children.indexOf(N))>=0&&a.children.splice(A,1);for(c in h("apply"),i=v,y)Object.prototype.hasOwnProperty.call(y,c)&&(e[c]=y[c]);var L=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=D[c])){S=p[c];var U=[];for(r=0;r<S.length;r++)if(N=S[r],n=a.hot._acceptedDependencies[N]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(S)}catch(R){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:S[r],error:R}),t.ignoreErrored||L||(L=R)}}}for(r=0;r<H.length;r++){var z=H[r];c=z.module,s=[c];try{T(c)}catch(R){if("function"===typeof z.errorHandler)try{z.errorHandler(R)}catch(J){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:J,originalError:R}),t.ignoreErrored||L||(L=J),L||(L=R)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:R}),t.ignoreErrored||L||(L=R)}}return L?(h("fail"),Promise.reject(L)):(h("idle"),new Promise(function(e){e(m)}))}var D={},A={1:0},C=(A={1:0},A={1:0},A={1:0},{1:0}),H=[],N=[];function S(e){return T.p+"static/js/"+({2:"src-index"}[e]||e)+"."+{2:"6eeae5ab"}[e]+".js"}function T(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:l(t),parents:(u=s,s=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=D[e];if(!t)return T;var n=function(n){return t.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(s=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),T(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return T[e]},set:function(t){T[e]=t}}};for(var a in T)Object.prototype.hasOwnProperty.call(T,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&h("prepare"),b++,T.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(w[e]||_(e),0===b&&0===y&&k())}},n.t=function(e,t){return 1&t&&(e=n(e)),T.t(e,-2&t)},n}(t)),n.l=!0,n.exports}T.e=function(e){var t=[],n={2:1};A[e]?t.push(A[e]):0!==A[e]&&n[e]&&t.push(A[e]=new Promise(function(t,n){for(var r="static/css/"+({2:"src-index"}[e]||e)+"."+i+".css",o=T.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var d=(u=a[c]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var u;if((d=(u=s[c]).getAttribute("data-href"))===r||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,delete A[e],l.parentNode.removeChild(l),n(a)},l.href=o,document.getElementsByTagName("head")[0].appendChild(l)}).then(function(){A[e]=0}));n={2:1};A[e]?t.push(A[e]):0!==A[e]&&n[e]&&t.push(A[e]=new Promise(function(t,n){for(var r="static/css/"+({2:"src-index"}[e]||e)+"."+i+".css",o=T.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var d=(u=a[c]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var u;if((d=(u=s[c]).getAttribute("data-href"))===r||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,delete A[e],l.parentNode.removeChild(l),n(a)},l.href=o,document.getElementsByTagName("head")[0].appendChild(l)}).then(function(){A[e]=0}));n={2:1};A[e]?t.push(A[e]):0!==A[e]&&n[e]&&t.push(A[e]=new Promise(function(t,n){for(var r="static/css/"+({2:"src-index"}[e]||e)+"."+i+".css",o=T.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var d=(u=a[c]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var u;if((d=(u=s[c]).getAttribute("data-href"))===r||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,delete A[e],l.parentNode.removeChild(l),n(a)},l.href=o,document.getElementsByTagName("head")[0].appendChild(l)}).then(function(){A[e]=0}));n={2:1};A[e]?t.push(A[e]):0!==A[e]&&n[e]&&t.push(A[e]=new Promise(function(t,n){for(var r="static/css/"+({2:"src-index"}[e]||e)+"."+i+".css",o=T.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var d=(u=a[c]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var u;if((d=(u=s[c]).getAttribute("data-href"))===r||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,delete A[e],l.parentNode.removeChild(l),n(a)},l.href=o,document.getElementsByTagName("head")[0].appendChild(l)}).then(function(){A[e]=0}));var r=C[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=C[e]=[t,n]});t.push(r[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,T.nc&&c.setAttribute("nonce",T.nc),c.src=S(e),0!==c.src.indexOf(window.location.origin+"/")&&(c.crossOrigin="anonymous");var d=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=C[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}C[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},T.m=e,T.c=D,T.d=function(e,t,n){T.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},T.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},T.t=function(e,t){if(1&t&&(e=T(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(T.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)T.d(n,r,function(t){return e[t]}.bind(null,r));return n},T.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return T.d(t,"a",t),t},T.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},T.p="/",T.oe=function(e){throw console.error(e),e},T.h=function(){return i};var B=window.webpackJsonp=window.webpackJsonp||[],I=B.push.bind(B);B.push=t,B=B.slice();for(var M=0;M<B.length;M++)t(B[M]);var q=I,L=(H.push([0,0]),n());t([[],{},0,[0,2]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"Cang Lib","description":"\u534e\u590f\u6536\u85cf\u57fa\u7840\u5e93","menu":[],"version":"0.0.1","repository":false,"native":false,"codeSandbox":true,"themeConfig":{},"separator":"-","typescript":false,"theme":"/Users/jianglinghua/Dropbox/workspaces/huaxia/project/cang_lib/node_modules/docz-theme-umi/es/index.js","plugins":[{},{},{},{},{}]},"props":[],"entries":[{"key":"src/index.mdx","value":{"name":"Home","route":"/","order":-1,"sidebar":true,"id":"6576455a124f9aaefd860597f03a8fe4","filepath":"src/index.mdx","link":"","slug":"src-index","menu":"","headings":[{"slug":"button-component","depth":1,"value":"Button Component"},{"slug":"normal-button","depth":2,"value":"Normal Button"},{"slug":"large-button","depth":2,"value":"Large Button"}]}}]}')},"./.docz/app/index.jsx":function(e,t,n){"use strict";n.r(t);var r=n("react"),o=n.n(r),a=n("react-dom"),i=n.n(a),c=n("./node_modules/docz/dist/index.esm.js"),d=n("./node_modules/docz-theme-umi/es/index.js"),s={"src/index.mdx":function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"./src/index.mdx"))}},u=n("./.docz/app/db.json"),l=function(){return o.a.createElement(d.a,{linkComponent:c.b,db:u},o.a.createElement(c.c,{imports:s}))},p=[],f=[],h=function(){return p.forEach(function(e){return e&&e()})},m=function(){return f.forEach(function(e){return e&&e()})},g=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;h(),i.a.render(o.a.createElement(e,null),g,m)}(l)},0:function(e,t,n){e.exports=n("./.docz/app/index.jsx")},react:function(e,t){e.exports=window.React},"react-dom":function(e,t){e.exports=window.ReactDOM}});