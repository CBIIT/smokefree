!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var n=/\+/g;function o(e){return r.raw?e:decodeURIComponent(e.replace(n," "))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")),e=o(e);try{return r.json?JSON.parse(e):e}catch(e){}}var r=e.cookie=function(n,t,a){if(void 0!==t){if("number"==typeof(a=e.extend({},r.defaults,a)).expires){var c=a.expires,d=a.expires=new Date;d.setDate(d.getDate()+c)}return t=r.json?JSON.stringify(t):String(t),document.cookie=[r.raw?n:encodeURIComponent(n),"=",r.raw?t:encodeURIComponent(t),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}for(var f=document.cookie.split("; "),p=n?void 0:{},u=0,s=f.length;u<s;u++){var m=f[u].split("="),x=o(m.shift()),l=m.join("=");if(n&&n===x){p=i(l);break}n||(p[x]=i(l))}return p};r.defaults={},e.removeCookie=function(n,o){return void 0!==e.cookie(n)&&(e.cookie(n,"",e.extend({},o,{expires:-1})),!0)}});