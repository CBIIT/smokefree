window.Modernizr=function(e,f,i){function t(e){u.cssText=e}function a(e,t){return typeof e===t}function c(e,t){for(var n in e){var r=e[n];if(!~(""+r).indexOf("-")&&u[r]!==i)return"pfx"!=t||r}return!1}function r(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+v.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):function(e,t,n){for(var r in e){var o=t[e[r]];if(o!==i)return!1===n?e[r]:a(o,"function")?o.bind(n||t):o}return!1}(o=(e+" "+y.join(r+" ")+r).split(" "),t,n)}var n,o,l={},d=f.documentElement,p="modernizr",s=f.createElement(p),u=s.style,h=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",v=m.split(" "),y=m.toLowerCase().split(" "),g={},b=[],E=b.slice,C=function(e,t,n,r){var o,i,a,c,l=f.createElement("div"),s=f.body,u=s||f.createElement("body");if(parseInt(n,10))for(;n--;)(a=f.createElement("div")).id=r?r[n]:p+(n+1),l.appendChild(a);return o=["&#173;",'<style id="s',p,'">',e,"</style>"].join(""),l.id=p,(s?l:u).innerHTML+=o,u.appendChild(l),s||(u.style.background="",u.style.overflow="hidden",c=d.style.overflow,d.style.overflow="hidden",d.appendChild(u)),i=t(l,e),s?l.parentNode.removeChild(l):(u.parentNode.removeChild(u),d.style.overflow=c),!!i},w={}.hasOwnProperty;for(var j in o=a(w,"undefined")||a(w.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return w.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(r){var o=this;if("function"!=typeof o)throw new TypeError;var i=E.call(arguments,1),a=function(){if(this instanceof a){var e=function(){};e.prototype=o.prototype;var t=new e,n=o.apply(t,i.concat(E.call(arguments)));return Object(n)===n?n:t}return o.apply(r,i.concat(E.call(arguments)))};return a}),g.csstransforms3d=function(){var n=!!r("perspective");return n&&"webkitPerspective"in d.style&&C("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e,t){n=9===e.offsetLeft&&3===e.offsetHeight}),n},g)o(g,j)&&(n=j.toLowerCase(),l[n]=g[j](),b.push((l[n]?"":"no-")+n));return l.addTest=function(e,t){if("object"==typeof e)for(var n in e)o(e,n)&&l.addTest(n,e[n]);else{if(e=e.toLowerCase(),l[e]!==i)return l;t="function"==typeof t?t():t,d.className+=" "+(t?"":"no-")+e,l[e]=t}return l},t(""),s=null,function(e,l){function s(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function u(e){var t=c[e[r]];return t||(t={},a++,e[r]=a,c[a]=t),t}function f(e,t,n){return t||(t=l),p?t.createElement(e):(n||(n=u(t)),(r=n.cache[e]?n.cache[e].cloneNode():i.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren&&!o.test(e)?n.frag.appendChild(r):r);var r}function t(e){e||(e=l);var t,n,r,o,i,a,c=u(e);return h.shivCSS&&!d&&!c.hasCSS&&(c.hasCSS=(o="article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}",i=(r=e).createElement("p"),a=r.getElementsByTagName("head")[0]||r.documentElement,i.innerHTML="x<style>"+o+"</style>",!!a.insertBefore(i.lastChild,a.firstChild))),p||(t=e,(n=c).cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return h.shivMethods?f(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+s().join().replace(/\w+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,n.frag)),e}var d,p,n=e.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,r="_html5shiv",a=0,c={};!function(){try{var e=l.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,p=1==e.childNodes.length||function(){l.createElement("a");var e=l.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){p=d=!0}}();var h={elements:n.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==n.shivCSS,supportsUnknownElements:p,shivMethods:!1!==n.shivMethods,type:"default",shivDocument:t,createElement:f,createDocumentFragment:function(e,t){if(e||(e=l),p)return e.createDocumentFragment();for(var n=(t=t||u(e)).frag.cloneNode(),r=0,o=s(),i=o.length;r<i;r++)n.createElement(o[r]);return n}};e.html5=h,t(l)}(this,f),l._version="2.6.2",l._prefixes=h,l._domPrefixes=y,l._cssomPrefixes=v,l.testProp=function(e){return c([e])},l.testAllProps=r,l.testStyles=C,d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+b.join(" "),l}(0,this.document),function(e,d,t){function f(e){return"[object Function]"==i.call(e)}function p(e){return"string"==typeof e}function h(){}function m(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function v(){var e=E.shift();C=1,e?e.t?g(function(){("c"==e.t?y.injectCss:y.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),v()):C=0}function n(e,t,n,r,o){return C=0,t=t||"j",p(e)?function(n,r,e,t,o,i,a){function c(e){if(!s&&m(l.readyState)&&(f.r=s=1,!C&&v(),l.onload=l.onreadystatechange=null,e))for(var t in"img"!=n&&g(function(){j.removeChild(l)},50),N[r])N[r].hasOwnProperty(t)&&N[r][t].onload()}a=a||y.errorTimeout;var l=d.createElement(n),s=0,u=0,f={t:e,s:r,e:o,a:i,x:a};1===N[r]&&(u=1,N[r]=[]),"object"==n?l.data=r:(l.src=r,l.type=n),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){c.call(this,u)},E.splice(t,0,f),"img"!=n&&(u||2===N[r]?(j.insertBefore(l,w?null:b),g(c,a)):N[r].push(l))}("c"==t?s:l,e,t,this.i++,n,r,o):(E.splice(this.i++,0,e),1==E.length&&v()),this}function c(){var e=y;return e.loader={load:n,i:0},e}var r,y,o=d.documentElement,g=e.setTimeout,b=d.getElementsByTagName("script")[0],i={}.toString,E=[],C=0,a="MozAppearance"in o.style,w=a&&!!d.createRange().compareNode,j=w?o:b.parentNode,l=(o=e.opera&&"[object Opera]"==i.call(e.opera),o=!!d.attachEvent&&!o,a?"object":o?"script":"img"),s=o?"script":l,S=Array.isArray||function(e){return"[object Array]"==i.call(e)},x=[],N={},F={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};(y=function(e){function u(e,t,n,r,o){var i=function(e){e=e.split("!");var t,n,r,o=x.length,i=e.pop(),a=e.length;for(i={url:i,origUrl:i,prefixes:e},n=0;n<a;n++)r=e[n].split("="),(t=F[r.shift()])&&(i=t(i,r));for(n=0;n<o;n++)i=x[n](i);return i}(e),a=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(t&&(t=f(t)?t:t[e]||t[r]||t[e.split("/").pop().split("?")[0]]),i.instead?i.instead(e,t,n,r,o):(N[i.url]?i.noexec=!0:N[i.url]=1,n.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":void 0,i.noexec,i.attrs,i.timeout),(f(t)||f(a))&&n.load(function(){c(),t&&t(i.origUrl,o,r),a&&a(i.origUrl,o,r),N[i.url]=2})))}function t(e,t){function n(n,e){if(n){if(p(n))e||(c=function(){var e=[].slice.call(arguments);l.apply(this,e),s()}),u(n,c,t,0,i);else if(Object(n)===n)for(o in r=function(){var e,t=0;for(e in n)n.hasOwnProperty(e)&&t++;return t}(),n)n.hasOwnProperty(o)&&(!e&&!--r&&(f(c)?c=function(){var e=[].slice.call(arguments);l.apply(this,e),s()}:c[o]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),s()}}(l[o])),u(n[o],c,t,o,i))}else!e&&s()}var r,o,i=!!e.test,a=e.load||e.both,c=e.callback||h,l=c,s=e.complete||h;n(i?e.yep:e.nope,!!a),a&&n(a)}var n,r,o=this.yepnope.loader;if(p(e))u(e,0,o,0);else if(S(e))for(n=0;n<e.length;n++)p(r=e[n])?u(r,0,o,0):S(r)?y(r):Object(r)===r&&t(r,o);else Object(e)===e&&t(e,o)}).addPrefix=function(e,t){F[e]=t},y.addFilter=function(e){x.push(e)},y.errorTimeout=1e4,null==d.readyState&&d.addEventListener&&(d.readyState="loading",d.addEventListener("DOMContentLoaded",r=function(){d.removeEventListener("DOMContentLoaded",r,0),d.readyState="complete"},0)),e.yepnope=c(),e.yepnope.executeStack=v,e.yepnope.injectJs=function(e,t,n,r,o,i){var a,c,l=d.createElement("script");r=r||y.errorTimeout;for(c in l.src=e,n)l.setAttribute(c,n[c]);t=i?v:t||h,l.onreadystatechange=l.onload=function(){!a&&m(l.readyState)&&(a=1,t(),l.onload=l.onreadystatechange=null)},g(function(){a||t(a=1)},r),o?l.onload():b.parentNode.insertBefore(l,b)},e.yepnope.injectCss=function(e,t,n,r,o,i){var a;r=d.createElement("link"),t=i?v:t||h;for(a in r.href=e,r.rel="stylesheet",r.type="text/css",n)r.setAttribute(a,n[a]);o||(b.parentNode.insertBefore(r,b),g(t,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};