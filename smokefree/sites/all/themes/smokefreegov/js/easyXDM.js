!function(h,u,p,m,f,d){var s,l,g,v,y,w=this,b=Math.floor(1e4*Math.random()),k=Function.prototype,_=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,t=/[\-\w]+\/\.\.\//,o=/([^:])\/\//g,x="",O={},n=h.easyXDM,M="easyXDM_",T=!1;function S(e,n){var t=typeof e[n];return"function"==t||!("object"!=t||!e[n])||"unknown"==t}function E(){var e,n="Shockwave Flash",t="application/x-shockwave-flash";if(!D(navigator.plugins)&&"object"==typeof navigator.plugins[n]){var o=navigator.plugins[n].description;o&&!D(navigator.mimeTypes)&&navigator.mimeTypes[t]&&navigator.mimeTypes[t].enabledPlugin&&(l=o.match(/\d+/g))}if(!l)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),l=Array.prototype.slice.call(e.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1),e=null}catch(e){}if(!l)return!1;var a=parseInt(l[0],10),r=parseInt(l[1],10);return g=9<a&&0<r,!0}if(S(h,"addEventListener"))v=function(e,n,t){e.addEventListener(n,t,!1)},y=function(e,n,t){e.removeEventListener(n,t,!1)};else{if(!S(h,"attachEvent"))throw new Error("Browser not supported");v=function(e,n,t){e.attachEvent("on"+n,t)},y=function(e,n,t){e.detachEvent("on"+n,t)}}var e,a=!1,r=[];function i(){if(!a){a=!0;for(var e=0;e<r.length;e++)r[e]();r.length=0}}if("readyState"in u?(e=u.readyState,a="complete"==e||~navigator.userAgent.indexOf("AppleWebKit/")&&("loaded"==e||"interactive"==e)):a=!!u.body,!a){if(S(h,"addEventListener"))v(u,"DOMContentLoaded",i);else if(v(u,"readystatechange",function(){"complete"==u.readyState&&i()}),u.documentElement.doScroll&&h===top){var c=function(){if(!a){try{u.documentElement.doScroll("left")}catch(e){return void m(c,1)}i()}};c()}v(h,"load",i)}function R(e,n){a?e.call(n):r.push(function(){e.call(n)})}function F(e){return e.match(_)[3]}function N(e){var n=e.toLowerCase().match(_),t=n[2],o=n[3],a=n[4]||"";return("http:"==t&&":80"==a||"https:"==t&&":443"==a)&&(a=""),t+"//"+o+a}function C(e){if(!(e=e.replace(o,"$1/")).match(/^(http||https):\/\//)){var n="/"===e.substring(0,1)?"":p.pathname;"/"!==n.substring(n.length-1)&&(n=n.substring(0,n.lastIndexOf("/")+1)),e=p.protocol+"//"+p.host+n+e}for(;t.test(e);)e=e.replace(t,"");return e}function P(e,n){var t="",o=e.indexOf("#");-1!==o&&(t=e.substring(o),e=e.substring(0,o));var a=[];for(var r in n)n.hasOwnProperty(r)&&a.push(r+"="+d(n[r]));return e+(T?"#":-1==e.indexOf("?")?"?":"&")+a.join("&")+t}var H=function(e){for(var n,t={},o=(e=e.substring(1).split("&")).length;o--;)t[(n=e[o].split("="))[0]]=f(n[1]);return t}(/xdm_e=/.test(p.search)?p.search:p.hash);function D(e){return void 0===e}var j,B=function(){var e={},n={a:[1,2,3]},t='{"a":[1,2,3]}';return"undefined"!=typeof JSON&&"function"==typeof JSON.stringify&&JSON.stringify(n).replace(/\s/g,"")===t?JSON:(Object.toJSON&&Object.toJSON(n).replace(/\s/g,"")===t&&(e.stringify=Object.toJSON),"function"==typeof String.prototype.evalJSON&&(n=t.evalJSON()).a&&3===n.a.length&&3===n.a[2]&&(e.parse=function(e){return e.evalJSON()}),e.stringify&&e.parse?(B=function(){return e},e):null)};function L(e,n,t){var o;for(var a in n)n.hasOwnProperty(a)&&(a in e?"object"==typeof(o=n[a])?L(e[a],o,t):t||(e[a]=n[a]):e[a]=n[a]);return e}function J(e){var n,t,o;D(s)&&(n=u.body.appendChild(u.createElement("form")),(t=n.appendChild(u.createElement("input"))).name=M+"TEST"+b,s=t!==n.elements[t.name],u.body.removeChild(n)),s?o=u.createElement('<iframe name="'+e.props.name+'"/>'):(o=u.createElement("IFRAME")).name=e.props.name,o.id=o.name=e.props.name,delete e.props.name,"string"==typeof e.container&&(e.container=u.getElementById(e.container)),e.container||(L(o.style,{position:"absolute",top:"-2000px",left:"0px"}),e.container=u.body);var a=e.props.src;if(e.props.src="javascript:false",L(o,e.props),o.border=o.frameBorder=0,o.allowTransparency=!0,e.container.appendChild(o),e.onLoad&&v(o,"load",e.onLoad),e.usePost){var r,i=e.container.appendChild(u.createElement("form"));if(i.target=o.name,i.action=a,i.method="POST","object"==typeof e.usePost)for(var c in e.usePost)e.usePost.hasOwnProperty(c)&&(s?r=u.createElement('<input name="'+c+'"/>'):(r=u.createElement("INPUT")).name=c,r.value=e.usePost[c],i.appendChild(r));i.submit(),i.parentNode.removeChild(i)}else o.src=a;return e.props.src=a,o}function A(e){var n,t=e.protocol;if(e.isHost=e.isHost||D(H.xdm_p),T=e.hash||!1,e.props||(e.props={}),e.isHost)e.remote=C(e.remote),e.channel=e.channel||"default"+b++,e.secret=Math.random().toString(16).substring(2),D(t)&&(t=N(p.href)==N(e.remote)?"4":S(h,"postMessage")||S(u,"postMessage")?"1":e.swf&&S(h,"ActiveXObject")&&E()?"6":"Gecko"===navigator.product&&"frameElement"in h&&-1==navigator.userAgent.indexOf("WebKit")?"5":e.remoteHelper?"2":"0");else if(e.channel=H.xdm_c.replace(/["'<>\\]/g,""),e.secret=H.xdm_s,e.remote=H.xdm_e.replace(/["'<>\\]/g,""),t=H.xdm_p,e.acl&&!function(e,n){"string"==typeof e&&(e=[e]);for(var t,o=e.length;o--;)if(t=e[o],(t=new RegExp("^"==t.substr(0,1)?t:"^"+t.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$")).test(n))return!0;return!1}(e.acl,e.remote))throw new Error("Access denied for "+e.remote);switch(e.protocol=t){case"0":if(L(e,{interval:100,delay:2e3,useResize:!0,useParent:!1,usePolling:!1},!0),e.isHost){if(!e.local){for(var o,a=p.protocol+"//"+p.host,r=u.body.getElementsByTagName("img"),i=r.length;i--;)if((o=r[i]).src.substring(0,a.length)===a){e.local=o.src;break}e.local||(e.local=h)}var c={xdm_c:e.channel,xdm_p:0};e.local===h?(e.usePolling=!0,e.useParent=!0,e.local=p.protocol+"//"+p.host+p.pathname+p.search,c.xdm_e=e.local,c.xdm_pa=1):c.xdm_e=C(e.local),e.container&&(e.useResize=!1,c.xdm_po=1),e.remote=P(e.remote,c)}else L(e,{channel:H.xdm_c,remote:H.xdm_e,useParent:!D(H.xdm_pa),usePolling:!D(H.xdm_po),useResize:!e.useParent&&e.useResize});n=[new O.stack.HashTransport(e),new O.stack.ReliableBehavior({}),new O.stack.QueueBehavior({encode:!0,maxLength:4e3-e.remote.length}),new O.stack.VerifyBehavior({initiate:e.isHost})];break;case"1":n=[new O.stack.PostMessageTransport(e)];break;case"2":e.remoteHelper=C(e.remoteHelper),n=[new O.stack.NameTransport(e),new O.stack.QueueBehavior,new O.stack.VerifyBehavior({initiate:e.isHost})];break;case"3":n=[new O.stack.NixTransport(e)];break;case"4":n=[new O.stack.SameOriginTransport(e)];break;case"5":n=[new O.stack.FrameElementTransport(e)];break;case"6":l||E(),n=[new O.stack.FlashTransport(e)]}return n.push(new O.stack.QueueBehavior({lazy:e.lazy,remove:!0})),n}function I(e){for(var n,t={incoming:function(e,n){this.up.incoming(e,n)},outgoing:function(e,n){this.down.outgoing(e,n)},callback:function(e){this.up.callback(e)},init:function(){this.down.init()},destroy:function(){this.down.destroy()}},o=0,a=e.length;o<a;o++)L(n=e[o],t,!0),0!==o&&(n.down=e[o-1]),o!==a-1&&(n.up=e[o+1]);return n}L(O,{version:"2.4.17.1",query:H,stack:{},apply:L,getJSONObject:B,whenReady:R,noConflict:function(e){return h.easyXDM=n,(x=e)&&(M="easyXDM_"+x.replace(".","_")+"_"),O}}),O.DomHelper={on:v,un:y,requiresJSON:function(e){var n,t;"object"==typeof(n=h)[t="JSON"]&&n[t]||u.write('<script type="text/javascript" src="'+e+'"><\/script>')}},j={},O.Fn={set:function(e,n){j[e]=n},get:function(e,n){var t=j[e];return n&&delete j[e],t}},O.Socket=function(t){var n=I(A(t).concat([{incoming:function(e,n){t.onMessage(e,n)},callback:function(e){t.onReady&&t.onReady(e)}}])),o=N(t.remote);this.origin=N(t.remote),this.destroy=function(){n.destroy()},this.postMessage=function(e){n.outgoing(e,o)},n.init()},O.Rpc=function(n,e){if(e.local)for(var t in e.local)if(e.local.hasOwnProperty(t)){var o=e.local[t];"function"==typeof o&&(e.local[t]={method:o})}var a=I(A(n).concat([new O.stack.RpcBehavior(this,e),{callback:function(e){n.onReady&&n.onReady(e)}}]));this.origin=N(n.remote),this.destroy=function(){a.destroy()},a.init()},O.stack.SameOriginTransport=function(e){var n,t,o,a;return n={outgoing:function(e,n,t){o(e),t&&t()},destroy:function(){t&&(t.parentNode.removeChild(t),t=null)},onDOMReady:function(){a=N(e.remote),e.isHost?(L(e.props,{src:P(e.remote,{xdm_e:p.protocol+"//"+p.host+p.pathname,xdm_c:e.channel,xdm_p:4}),name:M+e.channel+"_provider"}),t=J(e),O.Fn.set(e.channel,function(e){return o=e,m(function(){n.up.callback(!0)},0),function(e){n.up.incoming(e,a)}})):(o=function(){var e=parent;if(""!==x)for(var n=0,t=x.split(".");n<t.length;n++)e=e[t[n]];return e.easyXDM}().Fn.get(e.channel,!0)(function(e){n.up.incoming(e,a)}),m(function(){n.up.callback(!0)},0))},init:function(){R(n.onDOMReady,n)}}},O.stack.FlashTransport=function(a){var t,o,r,i,c;function s(e,n){m(function(){t.up.incoming(e,r)},0)}function l(t){var e=a.swf+"?host="+a.isHost,n="easyXDM_swf_"+Math.floor(1e4*Math.random());O.Fn.set("flash_loaded"+t.replace(/[\-.]/g,"_"),function(){O.stack.FlashTransport[t].swf=i=c.firstChild;for(var e=O.stack.FlashTransport[t].queue,n=0;n<e.length;n++)e[n]();e.length=0}),a.swfContainer?c="string"==typeof a.swfContainer?u.getElementById(a.swfContainer):a.swfContainer:(L((c=u.createElement("div")).style,g&&a.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0}),u.body.appendChild(c));var o="callback=flash_loaded"+t.replace(/[\-.]/g,"_")+"&proto="+w.location.protocol+"&domain="+F(w.location.href)+"&port="+(w.location.href.match(_)[4]||"")+"&ns="+x;c.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+n+"' data='"+e+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+e+"'></param><param name='flashvars' value='"+o+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+o+"' allowScriptAccess='always' wmode='transparent' src='"+e+"' height='1' width='1'></embed></object>"}return t={outgoing:function(e,n,t){i.postMessage(a.channel,e.toString()),t&&t()},destroy:function(){try{i.destroyChannel(a.channel)}catch(e){}i=null,o&&(o.parentNode.removeChild(o),o=null)},onDOMReady:function(){r=a.remote,O.Fn.set("flash_"+a.channel+"_init",function(){m(function(){t.up.callback(!0)})}),O.Fn.set("flash_"+a.channel+"_onMessage",s),a.swf=C(a.swf);var e=F(a.swf),n=function(){O.stack.FlashTransport[e].init=!0,(i=O.stack.FlashTransport[e].swf).createChannel(a.channel,a.secret,N(a.remote),a.isHost),a.isHost&&(g&&a.swfNoThrottle&&L(a.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"}),L(a.props,{src:P(a.remote,{xdm_e:N(p.href),xdm_c:a.channel,xdm_p:6,xdm_s:a.secret}),name:M+a.channel+"_provider"}),o=J(a))};O.stack.FlashTransport[e]&&O.stack.FlashTransport[e].init?n():O.stack.FlashTransport[e]?O.stack.FlashTransport[e].queue.push(n):(O.stack.FlashTransport[e]={queue:[n]},l(e))},init:function(){R(t.onDOMReady,t)}}},O.stack.PostMessageTransport=function(o){var t,a,r,i;function c(e){var n=function(e){if(e.origin)return N(e.origin);if(e.uri)return N(e.uri);if(e.domain)return p.protocol+"//"+e.domain;throw"Unable to retrieve the origin of the event"}(e);n==i&&e.data.substring(0,o.channel.length+1)==o.channel+" "&&t.up.incoming(e.data.substring(o.channel.length+1),n)}return t={outgoing:function(e,n,t){r.postMessage(o.channel+" "+e,n||i),t&&t()},destroy:function(){y(h,"message",c),a&&(r=null,a.parentNode.removeChild(a),a=null)},onDOMReady:function(){if(i=N(o.remote),o.isHost){var n=function(e){e.data==o.channel+"-ready"&&(r="postMessage"in a.contentWindow?a.contentWindow:a.contentWindow.document,y(h,"message",n),v(h,"message",c),m(function(){t.up.callback(!0)},0))};v(h,"message",n),L(o.props,{src:P(o.remote,{xdm_e:N(p.href),xdm_c:o.channel,xdm_p:1}),name:M+o.channel+"_provider"}),a=J(o)}else v(h,"message",c),(r="postMessage"in h.parent?h.parent:h.parent.document).postMessage(o.channel+"-ready",i),m(function(){t.up.callback(!0)},0)},init:function(){R(t.onDOMReady,t)}}},O.stack.FrameElementTransport=function(e){var n,t,o,a;return n={outgoing:function(e,n,t){o.call(this,e),t&&t()},destroy:function(){t&&(t.parentNode.removeChild(t),t=null)},onDOMReady:function(){a=N(e.remote),e.isHost?(L(e.props,{src:P(e.remote,{xdm_e:N(p.href),xdm_c:e.channel,xdm_p:5}),name:M+e.channel+"_provider"}),(t=J(e)).fn=function(e){return delete t.fn,o=e,m(function(){n.up.callback(!0)},0),function(e){n.up.incoming(e,a)}}):(u.referrer&&N(u.referrer)!=H.xdm_e&&(h.top.location=H.xdm_e),o=h.frameElement.fn(function(e){n.up.incoming(e,a)}),n.up.callback(!0))},init:function(){R(n.onDOMReady,n)}}},O.stack.NameTransport=function(t){var n,o,a,r,i,c,s,l;function u(e){var n=t.remoteHelper+(o?"#_3":"#_2")+t.channel;a.contentWindow.sendMessage(e,n)}function p(){o?2!=++i&&o||n.up.callback(!0):(u("ready"),n.up.callback(!0))}function f(e){n.up.incoming(e,s)}function d(){c&&m(function(){c(!0)},0)}return n={outgoing:function(e,n,t){c=t,u(e)},destroy:function(){a.parentNode.removeChild(a),a=null,o&&(r.parentNode.removeChild(r),r=null)},onDOMReady:function(){o=t.isHost,i=0,s=N(t.remote),t.local=C(t.local),o?(O.Fn.set(t.channel,function(e){o&&"ready"===e&&(O.Fn.set(t.channel,f),p())}),l=P(t.remote,{xdm_e:t.local,xdm_c:t.channel,xdm_p:2}),L(t.props,{src:l+"#"+t.channel,name:M+t.channel+"_provider"}),r=J(t)):(t.remoteHelper=t.remote,O.Fn.set(t.channel,f));var e=function(){var n=a||this;y(n,"load",e),O.Fn.set(t.channel+"_load",d),function e(){"function"==typeof n.contentWindow.sendMessage?p():m(e,50)}()};a=J({props:{src:t.local+"#_4"+t.channel},onLoad:e})},init:function(){R(n.onDOMReady,n)}}},O.stack.HashTransport=function(o){var a,r,e,i,c,s,l,u,p,f;function n(){if(l){var e=l.location.href,n="",t=e.indexOf("#");-1!=t&&(n=e.substring(t)),n&&n!=c&&(c=n,a.up.incoming(c.substring(c.indexOf("_")+1),f))}}function d(){e=setInterval(n,i)}return a={outgoing:function(e,n){!function(e){if(u){var n=o.remote+"#"+s+++"_"+e;(r||!p?u.contentWindow:u).location=n}}(e)},destroy:function(){h.clearInterval(e),!r&&p||u.parentNode.removeChild(u),u=null},onDOMReady:function(){if(r=o.isHost,i=o.interval,c="#"+o.channel,s=0,p=o.useParent,f=N(o.remote),r){if(L(o.props,{src:o.remote,name:M+o.channel+"_provider"}),p)o.onLoad=function(){l=h,d(),a.up.callback(!0)};else{var n=0,t=o.delay/50;!function e(){if(++n>t)throw new Error("Unable to reference listenerwindow");try{l=u.contentWindow.frames[M+o.channel+"_consumer"]}catch(e){}l?(d(),a.up.callback(!0)):m(e,50)}()}u=J(o)}else l=h,d(),p?(u=parent,a.up.callback(!0)):(L(o,{props:{src:o.remote+"#"+o.channel+new Date,name:M+o.channel+"_consumer"},onLoad:function(){a.up.callback(!0)}}),u=J(o))},init:function(){R(a.onDOMReady,a)}}},O.stack.ReliableBehavior=function(e){var a,r,i=0,c=0,s="";return a={incoming:function(e,n){var t=e.indexOf("_"),o=e.substring(0,t).split(",");e=e.substring(t+1),o[0]==i&&(s="",r&&(r(!0),r=null)),0<e.length&&(a.down.outgoing(o[1]+","+i+"_"+s,n),c!=o[1]&&(c=o[1],a.up.incoming(e,n)))},outgoing:function(e,n,t){s=e,r=t,a.down.outgoing(c+","+ ++i+"_"+e,n)}}},O.stack.QueueBehavior=function(r){var i,t,c=[],o=!0,a="",s=0,l=!1,u=!1;function p(){if(r.remove&&0===c.length)return(e=i).up.down=e.down,e.down.up=e.up,void(e.up=e.down=null);var e;if(!o&&0!==c.length&&!t){o=!0;var n=c.shift();i.down.outgoing(n.data,n.origin,function(e){o=!1,n.callback&&m(function(){n.callback(e)},0),p()})}}return i={init:function(){D(r)&&(r={}),r.maxLength&&(s=r.maxLength,u=!0),r.lazy?l=!0:i.down.init()},callback:function(e){o=!1;var n=i.up;p(),n.callback(e)},incoming:function(e,n){if(u){var t=e.indexOf("_"),o=parseInt(e.substring(0,t),10);a+=e.substring(t+1),0===o&&(r.encode&&(a=f(a)),i.up.incoming(a,n),a="")}else i.up.incoming(e,n)},outgoing:function(e,n,t){r.encode&&(e=d(e));var o,a=[];if(u){for(;0!==e.length;)o=e.substring(0,s),e=e.substring(o.length),a.push(o);for(;o=a.shift();)c.push({data:a.length+"_"+o,origin:n,callback:0===a.length?t:null})}else c.push({data:e,origin:n,callback:t});l?i.down.init():p()},destroy:function(){t=!0,i.down.destroy()}}},O.stack.VerifyBehavior=function(o){var a,r,i;function c(){r=Math.random().toString(16).substring(2),a.down.outgoing(r)}return a={incoming:function(e,n){var t=e.indexOf("_");-1===t?e===r?a.up.callback(!0):i||(i=e,o.initiate||c(),a.down.outgoing(e)):e.substring(0,t)===i&&a.up.incoming(e.substring(t+1),n)},outgoing:function(e,n,t){a.down.outgoing(r+"_"+e,n,t)},callback:function(e){o.initiate&&c()}}},O.stack.RpcBehavior=function(n,a){var t,r=a.serializer||B(),i=0,c={};function s(e){e.jsonrpc="2.0",t.down.outgoing(r.stringify(e))}function o(o,a){var r=Array.prototype.slice;return function(){var e,n=arguments.length,t={method:a};0<n&&"function"==typeof arguments[n-1]?(1<n&&"function"==typeof arguments[n-2]?(e={success:arguments[n-2],error:arguments[n-1]},t.params=r.call(arguments,0,n-2)):(e={success:arguments[n-1]},t.params=r.call(arguments,0,n-1)),c[""+ ++i]=e,t.id=i):t.params=r.call(arguments,0),o.namedParams&&1===t.params.length&&(t.params=t.params[0]),s(t)}}function l(e,o,n,t){if(n){var a,r,i;o?(a=function(e){a=k,s({id:o,result:e})},r=function(e,n){r=k;var t={id:o,error:{code:-32099,message:e}};n&&(t.error.data=n),s(t)}):a=r=k,i=t,"[object Array]"!==Object.prototype.toString.call(i)&&(t=[t]);try{var c=n.method.apply(n.scope,t.concat([a,r]));D(c)||a(c)}catch(e){r(e.message)}}else o&&s({id:o,error:{code:-32601,message:"Procedure not found."}})}return t={incoming:function(e,n){var t=r.parse(e);if(t.method)a.handle?a.handle(t,s):l(t.method,t.id,a.local[t.method],t.params);else{var o=c[t.id];t.error?o.error&&o.error(t.error):o.success&&o.success(t.result),delete c[t.id]}},init:function(){if(a.remote)for(var e in a.remote)a.remote.hasOwnProperty(e)&&(n[e]=o(a.remote[e],e));t.down.init()},destroy:function(){for(var e in a.remote)a.remote.hasOwnProperty(e)&&n.hasOwnProperty(e)&&delete n[e];t.down.destroy()}}},w.easyXDM=O}(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent);