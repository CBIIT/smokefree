!function(a){a.fn.camera=function(e,t){function i(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))return!0}function r(){var e=a(T).width();a("li",T).removeClass("camera_visThumb"),a("li",T).each(function(){var t=a(this).position(),i=a("ul",T).outerWidth(),r=a("ul",T).offset().left,o=a("> div",T).offset().left-r;o>0?a(".camera_prevThumbs",X).removeClass("hideNav"):a(".camera_prevThumbs",X).addClass("hideNav"),i-o>e?a(".camera_nextThumbs",X).removeClass("hideNav"):a(".camera_nextThumbs",X).addClass("hideNav");var s=t.left;t.left+a(this).width()-o<=e&&s-o>=0&&a(this).addClass("camera_visThumb")})}function o(){function t(){if(E=h.width(),-1!=e.height.indexOf("%")){var t=Math.round(E/(100/parseFloat(e.height)));z=""!=e.minHeight&&t<parseFloat(e.minHeight)?parseFloat(e.minHeight):t,h.css({height:z})}else"auto"==e.height?z=h.height():(z=parseFloat(e.height),h.css({height:z}));a(".camerarelative",v).css({width:E,height:z}),a(".imgLoaded",v).each(function(){var t,i,r=a(this),o=r.attr("width"),s=r.attr("height"),n=(r.index(),r.attr("data-alignment")),c=r.attr("data-portrait");if(void 0!==n&&!1!==n&&""!==n||(n=e.alignment),void 0!==c&&!1!==c&&""!==c||(c=e.portrait),0==c||"false"==c)if(o/s<E/z){var l=E/o,m=.5*Math.abs(z-s*l);switch(n){case"topLeft":case"topCenter":case"topRight":t=0;break;case"centerLeft":case"center":case"centerRight":t="-"+m+"px";break;case"bottomLeft":case"bottomCenter":case"bottomRight":t="-"+2*m+"px"}r.css({height:s*l,"margin-left":0,"margin-top":t,position:"absolute",visibility:"visible",width:E})}else{var l=z/s,m=.5*Math.abs(E-o*l);switch(n){case"topLeft":i=0;break;case"topCenter":i="-"+m+"px";break;case"topRight":i="-"+2*m+"px";break;case"centerLeft":i=0;break;case"center":i="-"+m+"px";break;case"centerRight":i="-"+2*m+"px";break;case"bottomLeft":i=0;break;case"bottomCenter":i="-"+m+"px";break;case"bottomRight":i="-"+2*m+"px"}r.css({height:z,"margin-left":i,"margin-top":0,position:"absolute",visibility:"visible",width:o*l})}else if(o/s<E/z){var l=z/s,m=.5*Math.abs(E-o*l);switch(n){case"topLeft":i=0;break;case"topCenter":i=m+"px";break;case"topRight":i=2*m+"px";break;case"centerLeft":i=0;break;case"center":i=m+"px";break;case"centerRight":i=2*m+"px";break;case"bottomLeft":i=0;break;case"bottomCenter":i=m+"px";break;case"bottomRight":i=2*m+"px"}r.css({height:z,"margin-left":i,"margin-top":0,position:"absolute",visibility:"visible",width:o*l})}else{var l=E/o,m=.5*Math.abs(z-s*l);switch(n){case"topLeft":case"topCenter":case"topRight":t=0;break;case"centerLeft":case"center":case"centerRight":t=m+"px";break;case"bottomLeft":case"bottomCenter":case"bottomRight":t=2*m+"px"}r.css({height:s*l,"margin-left":0,"margin-top":t,position:"absolute",visibility:"visible",width:E})}})}var i;1==W?(clearTimeout(i),i=setTimeout(t,200)):t(),W=!0}function s(a){for(var e,t,i=a.length;i;e=parseInt(Math.random()*i),t=a[--i],a[i]=a[e],a[e]=t);return a}function n(){if(a(T).length&&!a(k).length){var e,t=a(T).outerWidth(),i=(a("ul > li",T).outerWidth(),a("li.cameracurrent",T).length?a("li.cameracurrent",T).position():""),o=a("ul > li",T).length*a("ul > li",T).outerWidth(),s=a("ul",T).offset().left,n=a("> div",T).offset().left;e=s<0?"-"+(n-s):n-s,1==ia&&(a("ul",T).width(a("ul > li",T).length*a("ul > li",T).outerWidth()),a(T).length&&!a(k).lenght&&h.css({marginBottom:a(T).outerHeight()}),r(),a("ul",T).width(a("ul > li",T).length*a("ul > li",T).outerWidth()),a(T).length&&!a(k).lenght&&h.css({marginBottom:a(T).outerHeight()})),ia=!1;var c=a("li.cameracurrent",T).length?i.left:"",l=a("li.cameracurrent",T).length?i.left+a("li.cameracurrent",T).outerWidth():"";c<a("li.cameracurrent",T).outerWidth()&&(c=0),l-e>t?c+t<o?a("ul",T).animate({"margin-left":"-"+c+"px"},500,r):a("ul",T).animate({"margin-left":"-"+(a("ul",T).outerWidth()-t)+"px"},500,r):c-e<0?a("ul",T).animate({"margin-left":"-"+c+"px"},500,r):(a("ul",T).css({"margin-left":"auto","margin-right":"auto"}),setTimeout(r,100))}}function c(){$=0;var t=a(".camera_bar_cont",X).width(),i=a(".camera_bar_cont",X).height();if("pie"!=f)switch(V){case"leftToRight":a("#"+g).css({right:t});break;case"rightToLeft":a("#"+g).css({left:t});break;case"topToBottom":a("#"+g).css({bottom:i});break;case"bottomToTop":a("#"+g).css({top:i})}else ea.clearRect(0,0,e.pieDiameter,e.pieDiameter)}function l(t){u.addClass("camerasliding"),K=!1;var r=parseFloat(a("div.cameraSlide.cameracurrent",v).index());if(t>0)d=t-1;else if(r==O-1)d=0;else var d=r+1;var b=a(".cameraSlide:eq("+d+")",v),_=a(".cameraSlide:eq("+(d+1)+")",v).addClass("cameranext");if(r!=d+1&&_.hide(),a(".cameraContent",p).fadeOut(600),a(".camera_caption",p).show(),a(".camerarelative",b).append(a("> div ",u).eq(d).find("> div.camera_effected")),a(".camera_target_content .cameraContent:eq("+d+")",h).append(a("> div ",u).eq(d).find("> div")),a(".imgLoaded",b).length){if(L.length>d+1&&!a(".imgLoaded",_).length){var y=L[d+1],w=new Image;w.src=y+"?"+(new Date).getTime(),_.prepend(a(w).attr("class","imgLoaded").css("visibility","hidden")),w.onload=function(){_a=w.naturalWidth,ya=w.naturalHeight,a(w).attr("data-alignment",B[d+1]).attr("data-portrait",S[d+1]),a(w).attr("width",_a),a(w).attr("height",ya),o()}}e.onLoaded.call(this),a(".camera_loader",h).is(":visible")?a(".camera_loader",h).fadeOut(400):(a(".camera_loader",h).css({visibility:"hidden"}),a(".camera_loader",h).fadeOut(400,function(){a(".camera_loader",h).css({visibility:"visible"})}));var C,x,R,F,M,q=e.rows,I=e.cols,H=1,P=0,W=new Array("simpleFade","curtainTopLeft","curtainTopRight","curtainBottomLeft","curtainBottomRight","curtainSliceLeft","curtainSliceRight","blindCurtainTopLeft","blindCurtainTopRight","blindCurtainBottomLeft","blindCurtainBottomRight","blindCurtainSliceBottom","blindCurtainSliceTop","stampede","mosaic","mosaicReverse","mosaicRandom","mosaicSpiral","mosaicSpiralReverse","topLeftBottomRight","bottomRightTopLeft","bottomLeftTopRight","topRightBottomLeft","scrollLeft","scrollRight","scrollTop","scrollBottom","scrollHorz");marginLeft=0,marginTop=0,opacityOnGrid=0,1==e.opacityOnGrid?opacityOnGrid=0:opacityOnGrid=1;var D=a(" > div",u).eq(d).attr("data-fx");if(F=i()&&""!=e.mobileFx&&"default"!=e.mobileFx?e.mobileFx:void 0!==D&&!1!==D&&"default"!==D?D:e.fx,"random"==F?(F=s(W),F=F[0]):(F=F).indexOf(",")>0&&(F=F.replace(/ /g,""),F=F.split(","),F=s(F),F=F[0]),dataEasing=a(" > div",u).eq(d).attr("data-easing"),mobileEasing=a(" > div",u).eq(d).attr("data-mobileEasing"),M=i()&&""!=e.mobileEasing&&"default"!=e.mobileEasing?"undefined"!=typeof mobileEasing&&!1!==mobileEasing&&"default"!==mobileEasing?mobileEasing:e.mobileEasing:"undefined"!=typeof dataEasing&&!1!==dataEasing&&"default"!==dataEasing?dataEasing:e.easing,void 0!==(C=a(" > div",u).eq(d).attr("data-slideOn"))&&!1!==C)j=C;else if("random"==e.slideOn){var j=new Array("next","prev");j=s(j),j=j[0]}else j=e.slideOn;var Q=a(" > div",u).eq(d).attr("data-time");x=void 0!==Q&&!1!==Q&&""!==Q?parseFloat(Q):e.time;var J=a(" > div",u).eq(d).attr("data-transPeriod");switch(R=void 0!==J&&!1!==J&&""!==J?parseFloat(J):e.transPeriod,a(u).hasClass("camerastarted")||(F="simpleFade",j="next",M="",R=400,a(u).addClass("camerastarted")),F){case"simpleFade":I=1,q=1;break;case"curtainTopLeft":case"curtainTopRight":case"curtainBottomLeft":case"curtainBottomRight":case"curtainSliceLeft":case"curtainSliceRight":I=0==e.slicedCols?e.cols:e.slicedCols,q=1;break;case"blindCurtainTopLeft":case"blindCurtainTopRight":case"blindCurtainBottomLeft":case"blindCurtainBottomRight":case"blindCurtainSliceTop":case"blindCurtainSliceBottom":q=0==e.slicedRows?e.rows:e.slicedRows,I=1;break;case"stampede":P="-"+R;break;case"mosaic":case"mosaicReverse":P=e.gridDifference;break;case"mosaicRandom":break;case"mosaicSpiral":case"mosaicSpiralReverse":P=e.gridDifference,H=1.7;break;case"topLeftBottomRight":case"bottomRightTopLeft":case"bottomLeftTopRight":case"topRightBottomLeft":P=e.gridDifference,H=6;break;case"scrollLeft":case"scrollRight":case"scrollTop":case"scrollBottom":case"scrollHorz":I=1,q=1}for(var Y,Z,ta=0,ia=q*I,ra=E-Math.floor(E/I)*I,oa=z-Math.floor(z/q)*q,sa=0,na=0,ca=new Array,la=new Array,ma=new Array;ta<ia;){ca.push(ta),la.push(ta),A.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');var da=a(".cameraappended:eq("+ta+")",v);"scrollLeft"==F||"scrollRight"==F||"scrollTop"==F||"scrollBottom"==F||"scrollHorz"==F?U.eq(d).clone().show().appendTo(da):"next"==j?U.eq(d).clone().show().appendTo(da):U.eq(r).clone().show().appendTo(da),Y=ta%I<ra?1:0,ta%I==0&&(sa=0),Z=Math.floor(ta/I)<oa?1:0,da.css({height:Math.floor(z/q+Z+1),left:sa,top:na,width:Math.floor(E/I+Y+1)}),a("> .cameraSlide",da).css({height:z,"margin-left":"-"+sa+"px","margin-top":"-"+na+"px",width:E}),sa=sa+da.width()-1,ta%I==I-1&&(na=na+da.height()-1),ta++}switch(F){case"curtainTopLeft":case"curtainBottomLeft":case"curtainSliceLeft":break;case"curtainTopRight":case"curtainBottomRight":case"curtainSliceRight":ca=ca.reverse();break;case"blindCurtainTopLeft":break;case"blindCurtainBottomLeft":ca=ca.reverse();break;case"blindCurtainSliceTop":case"blindCurtainTopRight":break;case"blindCurtainBottomRight":case"blindCurtainSliceBottom":ca=ca.reverse();break;case"stampede":ca=s(ca);break;case"mosaic":break;case"mosaicReverse":ca=ca.reverse();break;case"mosaicRandom":ca=s(ca);break;case"mosaicSpiral":var ha=q/2,pa=0;for(fa=0;fa<ha;fa++){for(ga=fa,ua=fa;ua<I-fa-1;ua++)ma[pa++]=ga*I+ua;for(ua=I-fa-1,ga=fa;ga<q-fa-1;ga++)ma[pa++]=ga*I+ua;for(ga=q-fa-1,ua=I-fa-1;ua>fa;ua--)ma[pa++]=ga*I+ua;for(ua=fa,ga=q-fa-1;ga>fa;ga--)ma[pa++]=ga*I+ua}ca=ma;break;case"mosaicSpiralReverse":var fa,ha=q/2,pa=ia-1;for(fa=0;fa<ha;fa++){for(ga=fa,ua=fa;ua<I-fa-1;ua++)ma[pa--]=ga*I+ua;for(ua=I-fa-1,ga=fa;ga<q-fa-1;ga++)ma[pa--]=ga*I+ua;for(ga=q-fa-1,ua=I-fa-1;ua>fa;ua--)ma[pa--]=ga*I+ua;for(ua=fa,ga=q-fa-1;ga>fa;ga--)ma[pa--]=ga*I+ua}ca=ma;break;case"topLeftBottomRight":for(ga=0;ga<q;ga++)for(ua=0;ua<I;ua++)ma.push(ua+ga);la=ma;break;case"bottomRightTopLeft":for(ga=0;ga<q;ga++)for(ua=0;ua<I;ua++)ma.push(ua+ga);la=ma.reverse();break;case"bottomLeftTopRight":for(ga=q;ga>0;ga--)for(ua=0;ua<I;ua++)ma.push(ua+ga);la=ma;break;case"topRightBottomLeft":for(var ga=0;ga<q;ga++)for(var ua=I;ua>0;ua--)ma.push(ua+ga);la=ma}a.each(ca,function(t,i){function o(){if(a(this).addClass("cameraeased"),a(".cameraeased",v).length>=0&&a(T).css({visibility:"visible"}),a(".cameraeased",v).length==ia){n(),a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",p).each(function(){a(this).css("visibility","hidden")}),U.eq(d).show().css("z-index","999").removeClass("cameranext").addClass("cameracurrent"),U.eq(r).css("z-index","1").removeClass("cameracurrent"),a(".cameraContent",p).eq(d).addClass("cameracurrent"),r>=0&&a(".cameraContent",p).eq(r).removeClass("cameracurrent"),e.onEndTransition.call(this),"hide"!=a("> div",u).eq(d).attr("data-video")&&a(".cameraContent.cameracurrent .imgFake",p).length&&a(".cameraContent.cameracurrent .imgFake",p).click();var t=U.eq(d).find(".fadeIn").length,i=a(".cameraContent",p).eq(d).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;0!=t&&a(".cameraSlide.cameracurrent .fadeIn",p).each(function(){if(""!=a(this).attr("data-easing"))e=a(this).attr("data-easing");else var e=M;var i=a(this);if(void 0===i.attr("data-outerWidth")||!1===i.attr("data-outerWidth")||""===i.attr("data-outerWidth")){r=i.outerWidth();i.attr("data-outerWidth",r)}else var r=i.attr("data-outerWidth");if(void 0===i.attr("data-outerHeight")||!1===i.attr("data-outerHeight")||""===i.attr("data-outerHeight")){o=i.outerHeight();i.attr("data-outerHeight",o)}else var o=i.attr("data-outerHeight");var s=i.position(),n=(s.left,s.top,i.attr("class")),c=i.index();i.parents(".camerarelative").outerHeight(),i.parents(".camerarelative").outerWidth();-1!=n.indexOf("fadeIn")?i.animate({opacity:0},0).css("visibility","visible").delay(x/t*.1*(c-1)).animate({opacity:1},x/t*.15,e):i.css("visibility","visible")}),a(".cameraContent.cameracurrent",p).show(),0!=i&&a(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom",p).each(function(){if(""!=a(this).attr("data-easing"))e=a(this).attr("data-easing");else var e=M;var t=a(this),r=t.position(),o=(r.left,r.top,t.attr("class")),s=t.index(),n=t.outerHeight();-1!=o.indexOf("moveFromLeft")?(t.css({left:"-"+E+"px",right:"auto"}),t.css("visibility","visible").delay(x/i*.1*(s-1)).animate({left:r.left},x/i*.15,e)):-1!=o.indexOf("moveFromRight")?(t.css({left:E+"px",right:"auto"}),t.css("visibility","visible").delay(x/i*.1*(s-1)).animate({left:r.left},x/i*.15,e)):-1!=o.indexOf("moveFromTop")?(t.css({top:"-"+z+"px",bottom:"auto"}),t.css("visibility","visible").delay(x/i*.1*(s-1)).animate({top:r.top},x/i*.15,e,function(){t.css({top:"auto",bottom:0})})):-1!=o.indexOf("moveFromBottom")?(t.css({top:z+"px",bottom:"auto"}),t.css("visibility","visible").delay(x/i*.1*(s-1)).animate({top:r.top},x/i*.15,e)):-1!=o.indexOf("fadeFromLeft")?(t.animate({opacity:0},0).css({left:"-"+E+"px",right:"auto"}),t.css("visibility","visible").delay(x/i*.1*(s-1)).animate({left:r.left,opacity:1},x/i*.15,e)):-1!=o.indexOf("fadeFromRight")?(t.animate({opacity:0},0).css({left:E+"px",right:"auto"}),t.css("visibility","visible").delay(x/i*.1*(s-1)).animate({left:r.left,opacity:1},x/i*.15,e)):-1!=o.indexOf("fadeFromTop")?(t.animate({opacity:0},0).css({top:"-"+z+"px",bottom:"auto"}),t.css("visibility","visible").delay(x/i*.1*(s-1)).animate({top:r.top,opacity:1},x/i*.15,e,function(){t.css({top:"auto",bottom:0})})):-1!=o.indexOf("fadeFromBottom")?(t.animate({opacity:0},0).css({bottom:"-"+n+"px"}),t.css("visibility","visible").delay(x/i*.1*(s-1)).animate({bottom:"0",opacity:1},x/i*.15,e)):-1!=o.indexOf("fadeIn")?t.animate({opacity:0},0).css("visibility","visible").delay(x/i*.1*(s-1)).animate({opacity:1},x/i*.15,e):t.css("visibility","visible")}),a(".cameraappended",v).remove(),u.removeClass("camerasliding"),U.eq(r).hide();var o,s=a(".camera_bar_cont",X).width(),h=a(".camera_bar_cont",X).height();o="pie"!=f?.05:.005,a("#"+g).animate({opacity:e.loaderOpacity},200),N=setInterval(function(){if(u.hasClass("stopped")&&clearInterval(N),"pie"!=f)switch($<=1.002&&!u.hasClass("stopped")&&!u.hasClass("paused")&&!u.hasClass("hovered")?$+=o:$<=1&&(u.hasClass("stopped")||u.hasClass("paused")||u.hasClass("stopped")||u.hasClass("hovered"))?$=$:u.hasClass("stopped")||u.hasClass("paused")||u.hasClass("hovered")||(clearInterval(N),m(),a("#"+g).animate({opacity:0},200,function(){clearTimeout(G),G=setTimeout(c,b),l(),e.onStartLoading.call(this)})),V){case"leftToRight":a("#"+g).animate({right:s-s*$},x*o,"linear");break;case"rightToLeft":a("#"+g).animate({left:s-s*$},x*o,"linear");break;case"topToBottom":case"bottomToTop":a("#"+g).animate({bottom:h-h*$},x*o,"linear")}else aa=$,ea.clearRect(0,0,e.pieDiameter,e.pieDiameter),ea.globalCompositeOperation="destination-over",ea.beginPath(),ea.arc(e.pieDiameter/2,e.pieDiameter/2,e.pieDiameter/2-e.loaderStroke,0,2*Math.PI,!1),ea.lineWidth=e.loaderStroke,ea.strokeStyle=e.loaderBgColor,ea.stroke(),ea.closePath(),ea.globalCompositeOperation="source-over",ea.beginPath(),ea.arc(e.pieDiameter/2,e.pieDiameter/2,e.pieDiameter/2-e.loaderStroke,0,2*Math.PI*aa,!1),ea.lineWidth=e.loaderStroke-2*e.loaderPadding,ea.strokeStyle=e.loaderColor,ea.stroke(),ea.closePath(),$<=1.002&&!u.hasClass("stopped")&&!u.hasClass("paused")&&!u.hasClass("hovered")?$+=o:$<=1&&(u.hasClass("stopped")||u.hasClass("paused")||u.hasClass("hovered"))?$=$:u.hasClass("stopped")||u.hasClass("paused")||u.hasClass("hovered")||(clearInterval(N),m(),a("#"+g+", .camera_canvas_wrap",X).animate({opacity:0},200,function(){clearTimeout(G),G=setTimeout(c,b),l(),e.onStartLoading.call(this)}))},x*o)}}switch(Y=i%I<ra?1:0,i%I==0&&(sa=0),Z=Math.floor(i/I)<oa?1:0,F){case"simpleFade":height=z,width=E,opacityOnGrid=0;break;case"curtainTopLeft":case"curtainTopRight":height=0,width=Math.floor(E/I+Y+1),marginTop="-"+Math.floor(z/q+Z+1)+"px";break;case"curtainBottomLeft":case"curtainBottomRight":height=0,width=Math.floor(E/I+Y+1),marginTop=Math.floor(z/q+Z+1)+"px";break;case"curtainSliceLeft":case"curtainSliceRight":height=0,width=Math.floor(E/I+Y+1),marginTop=i%2==0?Math.floor(z/q+Z+1)+"px":"-"+Math.floor(z/q+Z+1)+"px";break;case"blindCurtainTopLeft":height=Math.floor(z/q+Z+1),width=0,marginLeft="-"+Math.floor(E/I+Y+1)+"px";break;case"blindCurtainTopRight":height=Math.floor(z/q+Z+1),width=0,marginLeft=Math.floor(E/I+Y+1)+"px";break;case"blindCurtainBottomLeft":height=Math.floor(z/q+Z+1),width=0,marginLeft="-"+Math.floor(E/I+Y+1)+"px";break;case"blindCurtainBottomRight":height=Math.floor(z/q+Z+1),width=0,marginLeft=Math.floor(E/I+Y+1)+"px";break;case"blindCurtainSliceBottom":case"blindCurtainSliceTop":height=Math.floor(z/q+Z+1),width=0,marginLeft=i%2==0?"-"+Math.floor(E/I+Y+1)+"px":Math.floor(E/I+Y+1)+"px";break;case"stampede":height=0,width=0,marginLeft=.2*E*(t%I-(I-Math.floor(I/2)))+"px",marginTop=.2*z*(Math.floor(t/I)+1-(q-Math.floor(q/2)))+"px";break;case"mosaic":height=0,width=0;break;case"mosaicReverse":height=0,width=0,marginLeft=Math.floor(E/I+Y+1)+"px",marginTop=Math.floor(z/q+Z+1)+"px";break;case"mosaicRandom":case"mosaicSpiral":case"mosaicSpiralReverse":height=0,width=0,marginLeft=.5*Math.floor(E/I+Y+1)+"px",marginTop=.5*Math.floor(z/q+Z+1)+"px";break;case"topLeftBottomRight":height=0,width=0;break;case"bottomRightTopLeft":height=0,width=0,marginLeft=Math.floor(E/I+Y+1)+"px",marginTop=Math.floor(z/q+Z+1)+"px";break;case"bottomLeftTopRight":height=0,width=0,marginLeft=0,marginTop=Math.floor(z/q+Z+1)+"px";break;case"topRightBottomLeft":height=0,width=0,marginLeft=Math.floor(E/I+Y+1)+"px",marginTop=0;break;case"scrollRight":height=z,width=E,marginLeft=-E;break;case"scrollLeft":height=z,width=E,marginLeft=E;break;case"scrollTop":height=z,width=E,marginTop=z;break;case"scrollBottom":height=z,width=E,marginTop=-z;break;case"scrollHorz":height=z,width=E,marginLeft=0==r&&d==O-1?-E:r<d||r==O-1&&0==d?E:-E}var s=a(".cameraappended:eq("+i+")",v);void 0!==N&&(clearInterval(N),clearTimeout(G),G=setTimeout(c,R+P)),a(k).length&&(a(".camera_pag li",h).removeClass("cameracurrent"),a(".camera_pag li",h).eq(d).addClass("cameracurrent")),a(T).length&&(a("li",T).removeClass("cameracurrent"),a("li",T).eq(d).addClass("cameracurrent"),a("li",T).not(".cameracurrent").find("img").animate({opacity:.5},0),a("li.cameracurrent img",T).animate({opacity:1},0),a("li",T).hover(function(){a("img",this).stop(!0,!1).animate({opacity:1},150)},function(){a(this).hasClass("cameracurrent")||a("img",this).stop(!0,!1).animate({opacity:.5},150)}));var b=parseFloat(R)+parseFloat(P);"scrollLeft"==F||"scrollRight"==F||"scrollTop"==F||"scrollBottom"==F||"scrollHorz"==F?(e.onStartTransition.call(this),b=0,s.delay((R+P)/ia*la[t]*H*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width}).animate({height:Math.floor(z/q+Z+1),"margin-top":0,"margin-left":0,width:Math.floor(E/I+Y+1)},R-P,M,o),U.eq(r).delay((R+P)/ia*la[t]*H*.5).animate({"margin-left":-1*marginLeft,"margin-top":-1*marginTop},R-P,M,function(){a(this).css({"margin-top":0,"margin-left":0})})):(e.onStartTransition.call(this),b=parseFloat(R)+parseFloat(P),"next"==j?s.delay((R+P)/ia*la[t]*H*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid}).animate({height:Math.floor(z/q+Z+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(E/I+Y+1)},R-P,M,o):(U.eq(d).show().css("z-index","999").addClass("cameracurrent"),U.eq(r).css("z-index","1").removeClass("cameracurrent"),a(".cameraContent",p).eq(d).addClass("cameracurrent"),a(".cameraContent",p).eq(r).removeClass("cameracurrent"),s.delay((R+P)/ia*la[t]*H*.5).css({display:"block",height:Math.floor(z/q+Z+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(E/I+Y+1)}).animate({height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid},R-P,M,o)))})}else{var va=L[d],ba=new Image;ba.src=va+"?"+(new Date).getTime(),b.css("visibility","hidden"),b.prepend(a(ba).attr("class","imgLoaded").css("visibility","hidden"));var _a,ya;a(ba).get(0).complete&&"0"!=_a&&"0"!=ya&&void 0!==_a&&!1!==_a&&void 0!==ya&&!1!==ya||(a(".camera_loader",h).delay(500).fadeIn(400),ba.onload=function(){_a=ba.naturalWidth,ya=ba.naturalHeight,a(ba).attr("data-alignment",B[d]).attr("data-portrait",S[d]),a(ba).attr("width",_a),a(ba).attr("height",ya),v.find(".cameraSlide_"+d).hide().css("visibility","visible"),o(),l(d+1)})}}function m(){a("iframe",p).each(function(){a(".camera_caption",p).show();var t=a(this),i=t.attr("data-src");t.attr("src",i);var r=e.imagePath+"blank.gif",o=new Image;if(o.src=r,-1!=e.height.indexOf("%")){var s=Math.round(E/(100/parseFloat(e.height)));z=""!=e.minHeight&&s<parseFloat(e.minHeight)?parseFloat(e.minHeight):s}else z="auto"==e.height?h.height():parseFloat(e.height);t.after(a(o).attr({class:"imgFake",width:E,height:z}));var n=t.clone();t.remove(),a(o).bind("click",function(){"absolute"==a(this).css("position")?(a(this).remove(),-1!=i.indexOf("vimeo")||-1!=i.indexOf("youtube")?-1!=i.indexOf("?")?autoplay="&autoplay=1":autoplay="?autoplay=1":-1!=i.indexOf("dailymotion")&&(-1!=i.indexOf("?")?autoplay="&autoPlay=1":autoplay="?autoPlay=1"),n.attr("src",i+autoplay),K=!0):(a(this).css({position:"absolute",top:0,left:0,zIndex:10}).after(n),n.css({position:"absolute",top:0,left:0,zIndex:9}))})})}var d={alignment:"center",autoAdvance:!0,mobileAutoAdvance:!0,barDirection:"leftToRight",barPosition:"bottom",cols:6,easing:"easeInOutExpo",mobileEasing:"",fx:"random",mobileFx:"",gridDifference:250,height:"50%",imagePath:"images/",hover:!0,loader:"pie",loaderColor:"#eeeeee",loaderBgColor:"#222222",loaderOpacity:.8,loaderPadding:2,loaderStroke:7,minHeight:"200px",navigation:!0,navigationHover:!0,mobileNavHover:!0,opacityOnGrid:!1,overlayer:!0,pagination:!0,playPause:!0,pauseOnClick:!0,pieDiameter:38,piePosition:"rightTop",portrait:!1,rows:4,slicedCols:12,slicedRows:8,slideOn:"random",thumbnails:!1,time:7e3,transPeriod:1500,onEndTransition:function(){},onLoaded:function(){},onStartLoading:function(){},onStartTransition:function(){}},e=a.extend({},d,e),h=a(this).addClass("camera_wrap");h.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');var p=a(".camera_fakehover",h);p.append('<div class="camera_target"></div>'),1==e.overlayer&&p.append('<div class="camera_overlayer"></div>'),p.append('<div class="camera_target_content"></div>');var f;"pie"==(f="pie"==e.loader&&a.browser.msie&&a.browser.version<9?"bar":e.loader)?p.append('<div class="camera_pie"></div>'):"bar"==f?p.append('<div class="camera_bar"></div>'):p.append('<div class="camera_bar" style="display:none"></div>'),1==e.playPause&&p.append('<div class="camera_commands"></div>'),1==e.navigation&&p.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>'),1==e.thumbnails&&h.append('<div class="camera_thumbs_cont" />'),1==e.thumbnails&&1!=e.pagination&&a(".camera_thumbs_cont",h).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />'),1==e.pagination&&h.append('<div class="camera_pag"></div>'),h.append('<div class="camera_loader"></div>'),a(".camera_caption",h).each(function(){a(this).wrapInner("<div />")});var g="pie_"+h.index(),u=a(".camera_src",h),v=a(".camera_target",h),b=a(".camera_target_content",h),_=a(".camera_pie",h),y=a(".camera_bar",h),w=a(".camera_prev",h),C=a(".camera_next",h),x=a(".camera_commands",h),k=a(".camera_pag",h),T=a(".camera_thumbs_cont",h),L=new Array;a("> div",u).each(function(){L.push(a(this).attr("data-src"))});var R=new Array;a("> div",u).each(function(){a(this).attr("data-link")?R.push(a(this).attr("data-link")):R.push("")});var F=new Array;a("> div",u).each(function(){a(this).attr("data-target")?F.push(a(this).attr("data-target")):F.push("")});var S=new Array;a("> div",u).each(function(){a(this).attr("data-portrait")?S.push(a(this).attr("data-portrait")):S.push("")});var B=new Array;a("> div",u).each(function(){a(this).attr("data-alignment")?B.push(a(this).attr("data-alignment")):B.push("")});var M=new Array;a("> div",u).each(function(){a(this).attr("data-thumb")?M.push(a(this).attr("data-thumb")):M.push("")});var O=L.length;a(b).append('<div class="cameraContents" />');var q;for(q=0;q<O;q++)if(a(".cameraContents",b).append('<div class="cameraContent" />'),""!=R[q]){var I=a("> div ",u).eq(q).attr("data-box");I=void 0!==I&&!1!==I&&""!=I?'data-box="'+a("> div ",u).eq(q).attr("data-box")+'"':"",a(".camera_target_content .cameraContent:eq("+q+")",h).append('<a class="camera_link" href="'+R[q]+'" '+I+' target="'+F[q]+'"></a>')}a(".camera_caption",h).each(function(){var e=a(this).parent().index(),t=h.find(".cameraContent").eq(e);a(this).appendTo(t)}),v.append('<div class="cameraCont" />');var H,A=a(".cameraCont",h);for(H=0;H<O;H++){A.append('<div class="cameraSlide cameraSlide_'+H+'" />');var P=a("> div:eq("+H+")",u);v.find(".cameraSlide_"+H).clone(P)}a(window).bind("load resize pageshow",function(){n(),r()}),A.append('<div class="cameraSlide cameraSlide_'+H+'" />');var W;h.show();var D,E=v.width(),z=v.height();a(window).bind("resize pageshow",function(){1==W&&o(),a("ul",T).animate({"margin-top":0},0,n),u.hasClass("paused")||(u.addClass("paused"),a(".camera_stop",X).length?(a(".camera_stop",X).hide(),a(".camera_play",X).show(),"none"!=f&&a("#"+g).hide()):"none"!=f&&a("#"+g).hide(),clearTimeout(D),D=setTimeout(function(){u.removeClass("paused"),a(".camera_play",X).length?(a(".camera_play",X).hide(),a(".camera_stop",X).show(),"none"!=f&&a("#"+g).fadeIn()):"none"!=f&&a("#"+g).fadeIn()},1500))});var N,G,j,Q,J,K;if(0==(j=i()&&""!=e.mobileAutoAdvance?e.mobileAutoAdvance:e.autoAdvance)&&u.addClass("paused"),Q=i()&&""!=e.mobileNavHover?e.mobileNavHover:e.navigationHover,0!=u.length){var U=a(".cameraSlide",v);U.wrapInner('<div class="camerarelative" />');var V=e.barDirection,X=h;a("iframe",p).each(function(){var e=a(this),t=e.attr("src");e.attr("data-src",t);var i=e.parent().index(".camera_src > div");a(".camera_target_content .cameraContent:eq("+i+")",h).append(e)}),m(),1==e.hover&&(i()||p.hover(function(){u.addClass("hovered")},function(){u.removeClass("hovered")})),1==Q&&(a(w,h).animate({opacity:0},0),a(C,h).animate({opacity:0},0),a(x,h).animate({opacity:0},0),i()?(p.live("vmouseover",function(){a(w,h).animate({opacity:1},200),a(C,h).animate({opacity:1},200),a(x,h).animate({opacity:1},200)}),p.live("vmouseout",function(){a(w,h).delay(500).animate({opacity:0},200),a(C,h).delay(500).animate({opacity:0},200),a(x,h).delay(500).animate({opacity:0},200)})):p.hover(function(){a(w,h).animate({opacity:1},200),a(C,h).animate({opacity:1},200),a(x,h).animate({opacity:1},200)},function(){a(w,h).animate({opacity:0},200),a(C,h).animate({opacity:0},200),a(x,h).animate({opacity:0},200)})),a(".camera_stop",X).live("click",function(){j=!1,u.addClass("paused"),a(".camera_stop",X).length?(a(".camera_stop",X).hide(),a(".camera_play",X).show(),"none"!=f&&a("#"+g).hide()):"none"!=f&&a("#"+g).hide()}),a(".camera_play",X).live("click",function(){j=!0,u.removeClass("paused"),a(".camera_play",X).length?(a(".camera_play",X).hide(),a(".camera_stop",X).show(),"none"!=f&&a("#"+g).show()):"none"!=f&&a("#"+g).show()}),1==e.pauseOnClick&&a(".camera_target_content",p).mouseup(function(){j=!1,u.addClass("paused"),a(".camera_stop",X).hide(),a(".camera_play",X).show(),a("#"+g).hide()}),a(".cameraContent, .imgFake",p).hover(function(){J=!0},function(){J=!1}),a(".cameraContent, .imgFake",p).bind("click",function(){1==K&&1==J&&(j=!1,a(".camera_caption",p).hide(),u.addClass("paused"),a(".camera_stop",X).hide(),a(".camera_play",X).show(),a("#"+g).hide())})}if("pie"!=f){switch(y.append('<span class="camera_bar_cont" />'),a(".camera_bar_cont",y).animate({opacity:e.loaderOpacity},0).css({position:"absolute",left:0,right:0,top:0,bottom:0,"background-color":e.loaderBgColor}).append('<span id="'+g+'" />'),a("#"+g).animate({opacity:0},0),(Y=a("#"+g)).css({position:"absolute","background-color":e.loaderColor}),e.barPosition){case"left":y.css({right:"auto",width:e.loaderStroke});break;case"right":y.css({left:"auto",width:e.loaderStroke});break;case"top":y.css({bottom:"auto",height:e.loaderStroke});break;case"bottom":y.css({top:"auto",height:e.loaderStroke})}switch(V){case"leftToRight":case"rightToLeft":Y.css({left:0,right:0,top:e.loaderPadding,bottom:e.loaderPadding});break;case"topToBottom":case"bottomToTop":Y.css({left:e.loaderPadding,right:e.loaderPadding,top:0,bottom:0})}}else{_.append('<canvas id="'+g+'"></canvas>');var Y=document.getElementById(g);Y.setAttribute("width",e.pieDiameter),Y.setAttribute("height",e.pieDiameter);var Z;switch(e.piePosition){case"leftTop":Z="left:0; top:0;";break;case"rightTop":Z="right:0; top:0;";break;case"leftBottom":Z="left:0; bottom:0;";break;case"rightBottom":Z="right:0; bottom:0;"}Y.setAttribute("style","position:absolute; z-index:1002; "+Z);var $,aa;if(Y&&Y.getContext){var ea=Y.getContext("2d");ea.rotate(1.5*Math.PI),ea.translate(-e.pieDiameter,0)}}if("none"!=f&&0!=j||(a("#"+g).hide(),a(".camera_canvas_wrap",X).hide()),a(k).length){a(k).append('<ul class="camera_pag_ul" />');var ta;for(ta=0;ta<O;ta++)a(".camera_pag_ul",h).append('<li class="pag_nav_'+ta+'" style="position:relative; z-index:1002"><span><span>'+ta+"</span></span></li>");a(".camera_pag_ul li",h).hover(function(){if(a(this).addClass("camera_hover"),a(".camera_thumb",this).length){var e=a(".camera_thumb",this).outerWidth(),t=a(".camera_thumb",this).outerHeight(),i=a(this).outerWidth();a(".camera_thumb",this).show().css({top:"-"+t+"px",left:"-"+(e-i)/2+"px"}).animate({opacity:1,"margin-top":"-3px"},200),a(".thumb_arrow",this).show().animate({opacity:1,"margin-top":"-3px"},200)}},function(){a(this).removeClass("camera_hover"),a(".camera_thumb",this).animate({"margin-top":"-20px",opacity:0},200,function(){a(this).css({marginTop:"5px"}).hide()}),a(".thumb_arrow",this).animate({"margin-top":"-20px",opacity:0},200,function(){a(this).css({marginTop:"5px"}).hide()})})}if(a(T).length){a(k).length?(a.each(M,function(e,t){if(""!=a("> div",u).eq(e).attr("data-thumb")){var i=a("> div",u).eq(e).attr("data-thumb"),r=new Image;r.src=i,a("li.pag_nav_"+e,k).append(a(r).attr("class","camera_thumb").css({position:"absolute"}).animate({opacity:0},0)),a("li.pag_nav_"+e+" > img",k).after('<div class="thumb_arrow" />'),a("li.pag_nav_"+e+" > .thumb_arrow",k).animate({opacity:0},0)}}),h.css({marginBottom:a(k).outerHeight()})):(a(T).append("<div />"),a(T).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>'),a("> div",T).append("<ul />"),a.each(M,function(e,t){if(""!=a("> div",u).eq(e).attr("data-thumb")){var i=a("> div",u).eq(e).attr("data-thumb"),r=new Image;r.src=i,a("ul",T).append('<li class="pix_thumb pix_thumb_'+e+'" />'),a("li.pix_thumb_"+e,T).append(a(r).attr("class","camera_thumb"))}}))}else!a(T).length&&a(k).length&&h.css({marginBottom:a(k).outerHeight()});var ia=!0;a(x).length&&(a(x).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>'),1==j?(a(".camera_play",X).hide(),a(".camera_stop",X).show()):(a(".camera_stop",X).hide(),a(".camera_play",X).show())),c(),a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",p).each(function(){a(this).css("visibility","hidden")}),e.onStartLoading.call(this),l(),a(w).length&&a(w).click(function(){if(!u.hasClass("camerasliding")){var t=parseFloat(a(".cameraSlide.cameracurrent",v).index());clearInterval(N),m(),a("#"+g+", .camera_canvas_wrap",h).animate({opacity:0},0),c(),l(0!=t?t:O),e.onStartLoading.call(this)}}),a(C).length&&a(C).click(function(){if(!u.hasClass("camerasliding")){var t=parseFloat(a(".cameraSlide.cameracurrent",v).index());clearInterval(N),m(),a("#"+g+", .camera_canvas_wrap",X).animate({opacity:0},0),c(),l(t==O-1?1:t+2),e.onStartLoading.call(this)}}),i()&&(p.bind("swipeleft",function(t){if(!u.hasClass("camerasliding")){var i=parseFloat(a(".cameraSlide.cameracurrent",v).index());clearInterval(N),m(),a("#"+g+", .camera_canvas_wrap",X).animate({opacity:0},0),c(),l(i==O-1?1:i+2),e.onStartLoading.call(this)}}),p.bind("swiperight",function(t){if(!u.hasClass("camerasliding")){var i=parseFloat(a(".cameraSlide.cameracurrent",v).index());clearInterval(N),m(),a("#"+g+", .camera_canvas_wrap",X).animate({opacity:0},0),c(),l(0!=i?i:O),e.onStartLoading.call(this)}})),a(k).length&&a(".camera_pag li",h).click(function(){if(!u.hasClass("camerasliding")){var t=parseFloat(a(this).index());t!=parseFloat(a(".cameraSlide.cameracurrent",v).index())&&(clearInterval(N),m(),a("#"+g+", .camera_canvas_wrap",X).animate({opacity:0},0),c(),l(t+1),e.onStartLoading.call(this))}}),a(T).length&&(a(".pix_thumb img",T).click(function(){if(!u.hasClass("camerasliding")){var t=parseFloat(a(this).parents("li").index());t!=parseFloat(a(".cameracurrent",v).index())&&(clearInterval(N),m(),a("#"+g+", .camera_canvas_wrap",X).animate({opacity:0},0),a(".pix_thumb",T).removeClass("cameracurrent"),a(this).parents("li").addClass("cameracurrent"),c(),l(t+1),n(),e.onStartLoading.call(this))}}),a(".camera_thumbs_cont .camera_prevThumbs",X).hover(function(){a(this).stop(!0,!1).animate({opacity:1},250)},function(){a(this).stop(!0,!1).animate({opacity:.7},250)}),a(".camera_prevThumbs",X).click(function(){var e=0,t=(a(T).outerWidth(),a("ul",T).offset().left),i=a("> div",T).offset().left-t;a(".camera_visThumb",T).each(function(){var t=a(this).outerWidth();e+=t}),i-e>0?a("ul",T).animate({"margin-left":"-"+(i-e)+"px"},500,r):a("ul",T).animate({"margin-left":0},500,r)}),a(".camera_thumbs_cont .camera_nextThumbs",X).hover(function(){a(this).stop(!0,!1).animate({opacity:1},250)},function(){a(this).stop(!0,!1).animate({opacity:.7},250)}),a(".camera_nextThumbs",X).click(function(){var e=0,t=a(T).outerWidth(),i=a("ul",T).outerWidth(),o=a("ul",T).offset().left,s=a("> div",T).offset().left-o;a(".camera_visThumb",T).each(function(){var t=a(this).outerWidth();e+=t}),s+e+e<i?a("ul",T).animate({"margin-left":"-"+(s+e)+"px"},500,r):a("ul",T).animate({"margin-left":"-"+(i-t)+"px"},500,r)}))}}(jQuery),function(a){a.fn.cameraStop=function(){var e=a(this),t=a(".camera_src",e);e.index();if(t.addClass("stopped"),a(".camera_showcommands").length)a(".camera_thumbs_wrap",e);else;}}(jQuery),function(a){a.fn.cameraPause=function(){var e=a(this);a(".camera_src",e).addClass("paused")}}(jQuery),function(a){a.fn.cameraResume=function(){var e=a(this),t=a(".camera_src",e);"undefined"!=typeof autoAdv&&!0===autoAdv||t.removeClass("paused")}}(jQuery);