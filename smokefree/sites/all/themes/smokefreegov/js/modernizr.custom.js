window.Modernizr=function(e,t,n){function r(e){d.cssText=e}function o(e,t){return typeof e===t}var i,a,c={},l=t.documentElement,s="modernizr",u=t.createElement(s),d=u.style,f=" -webkit- -moz- -o- -ms- ".split(" "),p={},h=[],m=h.slice,v=function(e,n,r,o){var i,a,c,u,d=t.createElement("div"),f=t.body,p=f||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:s+(r+1),d.appendChild(c);return i=["&#173;",'<style id="s',s,'">',e,"</style>"].join(""),d.id=s,(f?d:p).innerHTML+=i,p.appendChild(d),f||(p.style.background="",p.style.overflow="hidden",u=l.style.overflow,l.style.overflow="hidden",l.appendChild(p)),a=n(d,e),f?d.parentNode.removeChild(d):(p.parentNode.removeChild(p),l.style.overflow=u),!!a},y={}.hasOwnProperty;a=o(y,"undefined")||o(y.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return y.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=m.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(m.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(m.call(arguments)))};return r}),p.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:v(["@media (",f.join("touch-enabled),("),s,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n};for(var g in p)a(p,g)&&(i=g.toLowerCase(),c[i]=p[g](),h.push((c[i]?"":"no-")+i));return c.addTest=function(e,t){if("object"==typeof e)for(var r in e)a(e,r)&&c.addTest(r,e[r]);else{if(e=e.toLowerCase(),c[e]!==n)return c;t="function"==typeof t?t():t,l.className+=" "+(t?"":"no-")+e,c[e]=t}return c},r(""),u=null,function(e,t){function n(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=p[e[d]];return t||(t={},f++,e[d]=f,p[f]=t),t}function o(e,n,o){if(n||(n=t),c)return n.createElement(e);o||(o=r(n));var i;return(i=o.cache[e]?o.cache[e].cloneNode():u.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e)).canHaveChildren&&!s.test(e)?o.frag.appendChild(i):i}function i(e){e||(e=t);var i=r(e);return h.shivCSS&&!a&&!i.hasCSS&&(i.hasCSS=!!function(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),c||(l=e,s=i,s.cache||(s.cache={},s.createElem=l.createElement,s.createFrag=l.createDocumentFragment,s.frag=s.createFrag()),l.createElement=function(e){return h.shivMethods?o(e,l,s):s.createElem(e)},l.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(e){return s.createElem(e),s.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,s.frag)),e;var l,s}var a,c,l=e.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,u=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,d="_html5shiv",f=0,p={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",a="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){a=!0,c=!0}}();var h={elements:l.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==l.shivCSS,supportsUnknownElements:c,shivMethods:!1!==l.shivMethods,type:"default",shivDocument:i,createElement:o,createDocumentFragment:function(e,o){if(e||(e=t),c)return e.createDocumentFragment();for(var i=(o=o||r(e)).frag.cloneNode(),a=0,l=n(),s=l.length;a<s;a++)i.createElement(l[a]);return i}};e.html5=h,i(t)}(this,t),c._version="2.6.2",c._prefixes=f,c.testStyles=v,l.className=l.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+h.join(" "),c}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==m.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();y=1,e?e.t?p(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function l(e,n,r,i,l){return y=0,n=n||"j",o(e)?function(e,n,r,o,i,l,s){function u(t){if(!m&&a(f.readyState)&&(j.r=m=1,!y&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&p(function(){E.removeChild(f)},50);for(var r in N[n])N[n].hasOwnProperty(r)&&N[n][r].onload()}}s=s||d.errorTimeout;var f=t.createElement(e),m=0,g=0,j={t:r,s:n,e:i,a:l,x:s};1===N[n]&&(g=1,N[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,j),"img"!=e&&(g||2===N[n]?(E.insertBefore(f,b?null:h),p(u,s)):N[n].push(f))}("c"==n?C:j,e,n,this.i++,r,i,l):(v.splice(this.i++,0,e),1==v.length&&c()),this}function s(){var e=d;return e.loader={load:l,i:0},e}var u,d,f=t.documentElement,p=e.setTimeout,h=t.getElementsByTagName("script")[0],m={}.toString,v=[],y=0,g="MozAppearance"in f.style,b=g&&!!t.createRange().compareNode,E=b?f:h.parentNode,j=(f=e.opera&&"[object Opera]"==m.call(e.opera),f=!!t.attachEvent&&!f,g?"object":f?"script":"img"),C=f?"script":j,w=Array.isArray||function(e){return"[object Array]"==m.call(e)},S=[],N={},T={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};(d=function(e){function t(e,t,o,i,a){var c=function(e){e=e.split("!");var t,n,r,o=S.length,i=e.pop(),a=e.length;for(i={url:i,origUrl:i,prefixes:e},n=0;n<a;n++)r=e[n].split("="),(t=T[r.shift()])&&(i=t(i,r));for(n=0;n<o;n++)i=S[n](i);return i}(e),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(t&&(t=r(t)?t:t[e]||t[i]||t[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,t,o,i,a):(N[c.url]?c.noexec=!0:N[c.url]=1,o.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(t)||r(l))&&o.load(function(){s(),t&&t(c.origUrl,a,i),l&&l(c.origUrl,a,i),N[c.url]=2})))}function a(e,n){function a(e,i){if(e){if(o(e))i||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),t(e,d,n,0,s);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!i&&!--c&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[l]=(a=f[l],function(){var e=[].slice.call(arguments);a&&a.apply(this,e),p()})),t(e[l],d,n,l,s))}else!i&&p();var a}var c,l,s=!!e.test,u=e.load||e.both,d=e.callback||i,f=d,p=e.complete||i;a(s?e.yep:e.nope,!!u),u&&a(u)}var c,l,u=this.yepnope.loader;if(o(e))t(e,0,u,0);else if(w(e))for(c=0;c<e.length;c++)l=e[c],o(l)?t(l,0,u,0):w(l)?d(l):Object(l)===l&&a(l,u);else Object(e)===e&&a(e,u)}).addPrefix=function(e,t){T[e]=t},d.addFilter=function(e){S.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",u=function(){t.removeEventListener("DOMContentLoaded",u,0),t.readyState="complete"},0)),e.yepnope=s(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,s){var u,f,m=t.createElement("script");o=o||d.errorTimeout;m.src=e;for(f in r)m.setAttribute(f,r[f]);n=s?c:n||i,m.onreadystatechange=m.onload=function(){!u&&a(m.readyState)&&(u=1,n(),m.onload=m.onreadystatechange=null)},p(function(){u||(u=1,n(1))},o),l?m.onload():h.parentNode.insertBefore(m,h)},e.yepnope.injectCss=function(e,n,r,o,a,l){var s;o=t.createElement("link"),n=l?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(s in r)o.setAttribute(s,r[s]);a||(h.parentNode.insertBefore(o,h),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};