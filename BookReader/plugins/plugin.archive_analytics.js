"use strict";(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[810],{2815:function(e,n,t){var a;t(4916),t(4723),t(3609).extend(BookReader.defaultOptions,{enableArchiveAnalytics:!0,debugArchiveAnaltyics:!1}),BookReader.prototype.init=(a=BookReader.prototype.init,function(){var e=this;a.call(this),this.options.enableArchiveAnalytics&&this.bind(BookReader.eventNames.fragmentChange,(function(){return e.archiveAnalyticsSendFragmentChange()}))}),BookReader.prototype.archiveAnalyticsSendFragmentChange=function(){if(window.archive_analytics){var e=this.archiveAnalyticsSendFragmentChange.prevFragment,n=this.paramsFromCurrent(),t=this.fragmentFromParams(n);if(e!=t){var a={bookreader:"user_changed_view",itemid:this.bookId,cache_bust:Math.random(),offsite:1,details:0};try{a.offsite=window.top.location.hostname.match(/\.archive.org$/)?0:1,a.details=!a.offsite&&window.top.location.pathname.match(/^\/details\//)?1:0}catch(e){}archive_analytics.send_ping(a,null,"augment_for_ao_site");var i=this.options.lendingInfo&&this.options.lendingInfo.loanId?{loanId:this.options.lendingInfo.loanId}:{};archive_analytics.send_event("BookReader","UserChangedView",window.location.pathname,i),this.archiveAnalyticsSendFragmentChange.prevFragment=t}}},BookReader.prototype.archiveAnalyticsSendEvent=function(e,n,t,a){this.options.enableArchiveAnalytics&&(this.options.debugArchiveAnaltyics&&console.log("archiveAnalyticsSendEvent",arguments,window.archive_analytics),window.archive_analytics&&(a=a||{},"number"==typeof t&&(a.ev=t),window.archive_analytics.send_event(e,n,null,a)))}},4723:function(e,n,t){var a=t(6916),i=t(7007),o=t(9670),r=t(7466),s=t(1340),c=t(4488),h=t(8173),l=t(1530),d=t(7651);i("match",(function(e,n,t){return[function(n){var t=c(this),i=null==n?void 0:h(n,e);return i?a(i,n,t):new RegExp(n)[e](s(t))},function(e){var a=o(this),i=s(e),c=t(n,a,i);if(c.done)return c.value;if(!a.global)return d(a,i);var h=a.unicode;a.lastIndex=0;for(var v,u=[],f=0;null!==(v=d(a,i));){var p=s(v[0]);u[f]=p,""===p&&(a.lastIndex=l(i,r(a.lastIndex),h)),f++}return 0===f?null:u}]}))}},function(e){e(e.s=2815)}]);
//# sourceMappingURL=plugin.archive_analytics.js.map