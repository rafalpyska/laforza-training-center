(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stories"],{1572:function(e,t,n){"use strict";n("efa0")},"1e28":function(e,t,n){"use strict";n("9e91")},"9e91":function(e,t,n){},dcfc:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=Object(c["withScopeId"])("data-v-4f1799b6");Object(c["pushScopeId"])("data-v-4f1799b6");var r={class:"section stories"},i=Object(c["createStaticVNode"])('<div class="container" data-v-4f1799b6><div class="section__info" data-v-4f1799b6><div class="section__info-titles-container" data-v-4f1799b6><h2 class="section__title color-primary" data-v-4f1799b6>Client Stories</h2><p class="section__subtitle" data-v-4f1799b6>Etiam rhoncus. Maecenas tempus</p></div></div><div class="section__description" data-v-4f1799b6><p data-v-4f1799b6> Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. </p><p data-v-4f1799b6> Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. </p></div></div>',1),o=Object(c["createVNode"])("p",{class:"action-strip__name"},"Client Stories",-1),s=Object(c["createTextVNode"])(" Send story "),u={class:"stories__list-wrapper"},d={class:"stories__list container"};Object(c["popScopeId"])();var l=a((function(e,t,n,l,p,b){var m=Object(c["resolveComponent"])("AppButton"),v=Object(c["resolveComponent"])("AppActionStrip"),f=Object(c["resolveComponent"])("AppLoadingSpinner"),j=Object(c["resolveComponent"])("ClientStory");return Object(c["openBlock"])(),Object(c["createBlock"])("section",r,[i,Object(c["createVNode"])(v,null,{"first-column":a((function(){return[o]})),"last-column":a((function(){return[Object(c["createVNode"])(m,{btnType:"send-story"},{default:a((function(){return[s]})),_:1})]})),_:1}),Object(c["createVNode"])("div",u,[Object(c["createVNode"])("div",d,[p.loading?(Object(c["openBlock"])(),Object(c["createBlock"])(f,{key:0})):(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],{key:1},Object(c["renderList"])(p.stories,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(j,{key:e.id,story:e},null,8,["story"])})),128))])])])})),p=(n("96cf"),n("1da1")),b=n("dbe1"),m=n("e128"),v=Object(c["withScopeId"])("data-v-024e3bed");Object(c["pushScopeId"])("data-v-024e3bed");var f={class:"client-story"},j={class:"client-story__content"},O={cite:"client-id"},h={class:"client-story__paragraph"},_=Object(c["createVNode"])("div",{class:"client-story__quote-symbol","aria-hidden":"true"},[Object(c["createVNode"])("span",null,[Object(c["createVNode"])("i",{class:"fas fa-quote-right"})])],-1),g={class:"story__user"},y=Object(c["createVNode"])("img",{src:"http://dummyimage.com/40x40",class:"story__user-profile-image",alt:"user placeholder"},null,-1),N={class:"story__user-name"},S=Object(c["createVNode"])("span",{class:"story__user-name-description"},"Happy client",-1);Object(c["popScopeId"])();var k=v((function(e,t,n,a,r,i){return Object(c["openBlock"])(),Object(c["createBlock"])("div",f,[Object(c["createVNode"])("div",j,[Object(c["createVNode"])("blockquote",O,[Object(c["createVNode"])("p",h,Object(c["toDisplayString"])(n.story.opinion),1)]),_]),Object(c["createVNode"])("figure",g,[y,Object(c["createVNode"])("figcaption",N,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(n.story.author.username)+" ",1),S])])])})),V={name:"ClientStory",props:{story:{type:Object,required:!0}}};n("1572");V.render=k,V.__scopeId="data-v-024e3bed";var w=V,q=n("e6f2"),B=n("45c2"),C={name:"Stories",components:{AppLoadingSpinner:b["a"],ClientStory:w,AppActionStrip:q["a"],AppButton:B["a"]},mixins:[m["a"]],data:function(){return{loading:!1,error:"",stories:null}},mounted:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.http("http://localhost:1337/stories").then((function(t){e.stories=t,e.loading=!1}));case 1:case"end":return t.stop()}}),t)})))()}};n("1e28");C.render=l,C.__scopeId="data-v-4f1799b6";t["default"]=C},e128:function(e,t,n){"use strict";n("d3b7"),n("96cf");var c=n("1da1");t["a"]={methods:{http:function(e){var t=arguments,n=this;return Object(c["a"])(regeneratorRuntime.mark((function c(){var a,r,i;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return a=t.length>1&&void 0!==t[1]?t[1]:"GET",r=t.length>2&&void 0!==t[2]?t[2]:{"Content-Type":"application/json"},n.error="",n.loading=!0,c.prev=4,c.next=7,fetch(e,{method:a,headers:r});case 7:return i=c.sent,c.next=10,i.json();case 10:return c.abrupt("return",c.sent);case 13:c.prev=13,c.t0=c["catch"](4),n.error=c.t0;case 16:case"end":return c.stop()}}),c,null,[[4,13]])})))()}}}},efa0:function(e,t,n){}}]);
//# sourceMappingURL=stories.e4a5c1bf.js.map