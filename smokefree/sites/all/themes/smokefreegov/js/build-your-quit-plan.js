!function(e,t,n,i){"use strict";function a(t,n){this.element=t,this.settings=e.extend({},s,n),this._defaults=s,this._name=o,this.init()}var o="buildQuitPlan",s={propertyName:"value"},r={autoclose:!0,format:"mm-dd-yyyy"},d={},l={_24HoursDate:[],_48HoursDate:[],oneWeekDate:[],twoWeeksDate:[],oneMonthDate:[]},c=function(n){var i={category:"QuitPlan",action:void 0,label:void 0},a={};e.extend(a,i,n),t.ga&&t.ga("send","event",a.category,a.action,a.label)},u=function(t){var i=10;n.body.scrollTop>t.offset().top&&(i=-10),e("html, body").stop().animate({scrollTop:t.offset().top+i},250,"swing")},f=function(e,n){var i="https://addevent.com/dir/?client="+Drupal.settings.icfi_api_keys.addevent+"&service="+encodeURIComponent(e)+"&start="+encodeURIComponent(n.date.replace(new RegExp("-","g"),"/"))+"&end="+encodeURIComponent(n.date.replace(new RegExp("-","g"),"/"))+"&title="+encodeURIComponent(n.title)+"&date_format="+encodeURIComponent("MM/DD/YYYY")+"&timezone="+encodeURIComponent("America/Chicago")+"&all_day_event=true";t.open(i)},m=function(t){t.on("click",".trigger-scroll",function(t){t.preventDefault();var n=e(this.hash);u(n)})},p=function(t,n){var i;switch(t){case"errorQuitDay":i="#error-quit-day";break;case"errorTriggers":i="#error-triggers";break;case"errerReminders":i="#error-reminders"}e(i).collapse(n)},h=function(e){return/[0-9]{2}-[0-9]{2}-[0-9]{4}/.test(e)},v=function(t){var n=[];return t.find(".milestone-input").each(function(){var t=e(this).val();t.length>0&&n.push(t)}),n.join(",")},g={"valid-checklist":function(t){var i=t.find('input[type="checkbox"]:checked').length,a=t.eq(0).attr("id");return 0===i?e(n.getElementById("get."+a)).removeClass("in"):e(n.getElementById("get."+a)).addClass("in"),i>0},"valid-milestone":function(t){var i,a,o=0,s=t.find("#quit-day").eq(0).val().length,r=t.eq(0).attr("id");return e.each(l,function(t,n){var i=n.length;o+=i,i?e("#get\\.milestones\\."+t).addClass("in"):e("#get\\.milestones\\."+t).removeClass("in")}),i=l._48HoursDate.length+l.twoWeeksDate.length,a=l._24HoursDate.length+l.oneWeekDate.length+l.oneMonthDate.length,0===o?e(n.getElementById("get."+r)).removeClass("in"):e(n.getElementById("get."+r)).addClass("in"),0===i?e(n.getElementById("get.milestones.activites")).removeClass("in"):e(n.getElementById("get.milestones.activites")).addClass("in"),0===a?e(n.getElementById("get.milestones.rewards")).removeClass("in"):e(n.getElementById("get.milestones.rewards")).addClass("in"),s>0}},k=function(e){var t=!1,n=e.find(".milestone-date-picker").val(),i=v(e);return h(n)&&i.length>0&&(t=!0),t},D=function(e){var t=!1,n=e.find(".milestone-date-picker").val(),i=e.find(".milestone-input").eq(0).val();return h(n)&&i.length>0&&(t=!0),t},y=function(t,i){e(n.getElementById("get.milestones."+t)).find(".milestone-selections").append('<li><span class="plan-input date">{{date}}</span> <span class="plan-input title">{{title}}</span></li>'.replace("{{date}}",i.date).replace("{{title}}",i.title))},w=function(t){var i=t.find("#quit-day"),a=t.find("#milestones");i.datepicker(r).on("changeDate",function(){h(i.val())?(t.trigger("dateSet.quitPlan"),p("errorQuitDay","hide"),c({action:"QuitDate",label:i.val()})):p("errorQuitDay","show")}),i.on("blur",function(){h(i.val())?(t.trigger("dateSet.quitPlan"),p("errorQuitDay","hide")):p("errorQuitDay","show")}),t.one("dateSet.quitPlan",function(){a.addClass("in")}),e("#dropdown-add-calendar-quit-day button").on("click",function(n){n.preventDefault(),n.stopPropagation();var i=t.find("#quit-day").val(),a=e(this).attr("data-service");h(i)&&f(a,{date:i,title:"My quit day"})}),t.on("dateSet.quitPlan",function(){var t;e("#get-quit-day").text(i.val()),d.quitDate=i.datepicker("getDate"),t=d.quitDate.getDate(),d._24HoursDate=new Date(d.quitDate),d._24HoursDate.setDate(t+1),d._48HoursDate=new Date(d.quitDate),d._48HoursDate.setDate(t+2),d.oneWeekDate=new Date(d.quitDate),d.oneWeekDate.setDate(t+7),d.twoWeeksDate=new Date(d.quitDate),d.twoWeeksDate.setDate(t+14),d.oneMonthDate=new Date(d.quitDate),d.oneMonthDate.setMonth(d.quitDate.getMonth()+1),e(n.getElementById("milestones.24Hours.date")).datepicker("setDate",d._24HoursDate),e(n.getElementById("milestones.48Hours.date")).datepicker("setDate",d._48HoursDate),e(n.getElementById("milestones.oneWeek.date")).datepicker("setDate",d.oneWeekDate),e(n.getElementById("milestones.twoWeeks.date")).datepicker("setDate",d.twoWeeksDate),e(n.getElementById("milestones.oneMonth.date")).datepicker("setDate",d.oneMonthDate)})},b=function(e){e.find(".milestone-date-picker").datepicker(r)},q=function(t){t.on("click",".modal-reward .dropdown-menu button",function(t){t.preventDefault();var n,i=e(this).parents(".modal"),a=i.attr("data-milestone"),o=e(this).attr("data-service");k(i)?(i.find(".validation-error").removeClass("in"),i.find(".validation-success").addClass("in"),n={date:i.find(".milestone-date-picker").val(),title:v(i)},l[a].push(n),y(a,n),f(o,n),i.find(".milestone-input").val(""),i.find(".milestone-date-picker").datepicker("setDate",d[a])):(i.find(".validation-error").addClass("in"),i.find(".validation-success").removeClass("in"))})},C=function(t){t.on("click",".modal-activity .dropdown-menu button",function(t){t.preventDefault(),t.stopPropagation();var n,i=e(this).parents(".modal"),a=i.attr("data-milestone"),o=e(this).attr("data-service");D(i)?(i.find(".validation-error").removeClass("in"),i.find(".validation-success").addClass("in"),n={date:i.find(".milestone-date-picker").val(),title:i.find(".milestone-input").eq(0).val()},l[a].push(n),y(a,n),f(o,n),i.find(".milestone-input").val(""),i.find(".milestone-date-picker").datepicker("setDate",d[a])):(i.find(".validation-error").addClass("in"),i.find(".validation-success").removeClass("in"))})},I=function(t){var n=!0;return t.find("#build-your-quit-plan").children("section").each(function(){var t=!0,i=e(this),a=i.attr("data-validation"),o=void 0!==i.attr("data-required");void 0!==a&&(!(t=g[a](i))&&o&&(n=!1),o&&!t?i.find(".validation-error").addClass("in"):o&&t&&i.find(".validation-error").removeClass("in"))}),n},_=function(t){var n=[];return e.each(t,function(e,t){n.push(t.date+" "+t.title)}),n.join("<br />")},B=function(t){var n,i=t.find("#build-your-quit-plan"),a=t.find("#get-quit-plan"),o=a.find("#get-quit-plan-header");t.find("#get-my-quit-plan").on("click",function(){(n=I(t))?(i.attr("aria-hidden",!0).removeClass("in"),e("#progress_bar").hide(),a.attr("aria-hidden",!1).addClass("in"),o.focus(),u(e("#get-quit-plan"))):u(e(".section-error.in").eq(0)),c({action:"GetQuitPlan",label:n?"valid":"invalid"})}),t.find("#edit-my-quit-plan, #edit-my-quit-plan-bottom").on("click",function(){i.attr("aria-hidden",!1).addClass("in"),a.attr("aria-hidden",!0).removeClass("in")}),t.find("#generate-pdf, #generate-pdf-bottom").on("click",function(){t.find("#milestones\\.24hours").val(_(l._24HoursDate)),t.find("#milestones\\.48hours").val(_(l._48HoursDate)),t.find("#milestones\\.oneWeek").val(_(l.oneWeekDate)),t.find("#milestones\\.twoWeeks").val(_(l.twoWeeksDate)),t.find("#milestones\\.oneMonth").val(_(l.oneMonthDate)),t.find("#build-your-quit-plan").submit(),c({action:"GetPrintablePDF"})})},E=function(n){var i="smokefree-stage.icfwebservices.com"===t.location.host?"386167128241977":"117297181948684",a=(e(t).width()-575)/2,o=(e(t).height()-400)/2,s="smokefree-stage.icfwebservices.com"===t.location.host?"https://smokefree-stage.icfwebservices.com/veterans/how-to-quit/build-your-quit-plan":"https://www.smokefree.gov/veterans/how-to-quit/build-your-quit-plan",r="smokefree-stage.icfwebservices.com"===t.location.host?"https://smokefree-stage.icfwebservices.com/sites/all/themes/smokefreegov/quit-plan/facebook-thanks.html":"https://www.smokefree.gov/sites/all/themes/smokefreegov/quit-plan/facebook-thanks.html",d="I’m quitting smoking. Want to become #smokefree with me?",l="status=1,width=575,height=400,top="+o+",left="+a;"/build-your-quit-plan"==t.location.href.toString().split(t.location.host)[1]&&(s="smokefree-stage.icfwebservices.com"===t.location.host?"https://smokefree-stage.icfwebservices.com/build-your-quit-plan":"https://www.smokefree.gov/build-your-quit-plan"),n.find("#send-message").on("click",function(){c({action:"SendMessage"})}),n.find(".dropdown-invite-friend .btn-link, .dropdown-tell-friends-family .btn-link").on("click",function(n){var a,o=e(this).attr("data-service");switch(e(this).attr("data-sharetext")&&(d=e(this).attr("data-sharetext")),o){case"Twitter":a="https://twitter.com/share?url="+encodeURIComponent(s)+"&text="+encodeURIComponent(d),t.open(a,"share",l);break;case"Facebook":a="https://www.facebook.com/dialog/share?app_id="+i+"&display=popup&href="+encodeURIComponent(s)+"&redirect_uri="+encodeURIComponent(r),t.open(a,"share",l);break;case"skip":var u={backgroundColor:"#3C84A4",color:"#FFF"};e(this).hasClass("tell-friends-family-skip")?e(".dropdown-toggle.btn.tell-friends-family").closest("button").css(u):e(this).hasClass("invite-friend-skip")&&e(".dropdown-toggle.btn.btn-invite").closest(".dropdown-toggle").css(u)}c({action:"InviteQuitBuddy",label:o})})},W=function(t){var i;t.on("change",".bind-change",function(){var t=this.getAttribute("data-ga-action"),a=this.getAttribute("data-ga-label");i=e(n.getElementById("get."+this.id)),this.checked?(c({action:t,label:a}),i.addClass("in").attr("aria-hidden",!1)):i.removeClass("in").attr("aria-hidden",!0)})};e.extend(a.prototype,{init:function(){var t=e(this.element);m(t),w(t),b(t),q(t),C(t),B(t),E(t),W(t),e('input.fancy[type="checkbox"]:not(old)').click(function(e){e.stopPropagation()})}}),e.fn[o]=function(t){return this.each(function(){e.data(this,"plugin_"+o)||e.data(this,"plugin_"+o,new a(this,t))})}}(jQuery,window,document),jQuery("#quit-plan").buildQuitPlan();