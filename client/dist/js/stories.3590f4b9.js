(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stories"],{"138f":function(e,t,n){},1572:function(e,t,n){"use strict";n("efa0")},c769:function(e,t,n){"use strict";n("138f")},dcfc:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=Object(a["withScopeId"])("data-v-fb30058e");Object(a["pushScopeId"])("data-v-fb30058e");var r={class:"section stories"},i=Object(a["createStaticVNode"])('<div class="container" data-v-fb30058e><div class="section__description" data-v-fb30058e><div class="section__description-info" data-v-fb30058e><h2 class="color-primary" data-v-fb30058e>Client Stories</h2><p data-v-fb30058e>Etiam rhoncus. Maecenas tempus</p></div></div><div class="stories__info" data-v-fb30058e><p data-v-fb30058e> Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. </p><p data-v-fb30058e> Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. </p></div></div>',1),s=Object(a["createVNode"])("p",{class:"action-strip__name"},"Client Stories",-1),o=Object(a["createTextVNode"])(" Send story "),u={class:"stories__list-wrapper"},d={class:"stories__list container"};Object(a["popScopeId"])();var l=c((function(e,t,n,l,p,b){var m=Object(a["resolveComponent"])("app-button"),f=Object(a["resolveComponent"])("app-action-strip"),v=Object(a["resolveComponent"])("app-loading-spinner"),j=Object(a["resolveComponent"])("client-story");return Object(a["openBlock"])(),Object(a["createBlock"])("section",r,[i,Object(a["createVNode"])(f,null,{"first-column":c((function(){return[s]})),"last-column":c((function(){return[Object(a["createVNode"])(m,{type:"send-story"},{default:c((function(){return[o]})),_:1})]})),_:1}),Object(a["createVNode"])("div",u,[Object(a["createVNode"])("div",d,[p.loading?(Object(a["openBlock"])(),Object(a["createBlock"])(v,{key:0})):(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],{key:1},Object(a["renderList"])(p.stories,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(j,{key:e.id,story:e},null,8,["story"])})),128))])])])})),p=(n("96cf"),n("1da1")),b=n("dbe1"),m=n("e128"),f=Object(a["withScopeId"])("data-v-024e3bed");Object(a["pushScopeId"])("data-v-024e3bed");var v={class:"client-story"},j={class:"client-story__content"},O={cite:"client-id"},h={class:"client-story__paragraph"},_=Object(a["createVNode"])("div",{class:"client-story__quote-symbol","aria-hidden":"true"},[Object(a["createVNode"])("span",null,[Object(a["createVNode"])("i",{class:"fas fa-quote-right"})])],-1),g={class:"story__user"},y=Object(a["createVNode"])("img",{src:"http://dummyimage.com/40x40",class:"story__user-profile-image",alt:"user placeholder"},null,-1),N={class:"story__user-name"},S=Object(a["createVNode"])("span",{class:"story__user-name-description"},"Happy client",-1);Object(a["popScopeId"])();var k=f((function(e,t,n,c,r,i){return Object(a["openBlock"])(),Object(a["createBlock"])("div",v,[Object(a["createVNode"])("div",j,[Object(a["createVNode"])("blockquote",O,[Object(a["createVNode"])("p",h,Object(a["toDisplayString"])(n.story.opinion),1)]),_]),Object(a["createVNode"])("figure",g,[y,Object(a["createVNode"])("figcaption",N,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.story.author.username)+" ",1),S])])])})),V={name:"ClientStory",props:{story:{type:Object,required:!0}}};n("1572");V.render=k,V.__scopeId="data-v-024e3bed";var w=V,q=n("e6f2"),B=n("45c2"),C={name:"Stories",components:{AppLoadingSpinner:b["a"],ClientStory:w,AppActionStrip:q["a"],AppButton:B["a"]},mixins:[m["a"]],data:function(){return{loading:!1,error:"",stories:null}},mounted:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.http("http://localhost:1337/stories").then((function(t){e.stories=t,e.loading=!1}));case 1:case"end":return t.stop()}}),t)})))()}};n("c769");C.render=l,C.__scopeId="data-v-fb30058e";t["default"]=C},e128:function(e,t,n){"use strict";n("d3b7"),n("96cf");var a=n("1da1");t["a"]={methods:{http:function(e){var t=arguments,n=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var c,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return c=t.length>1&&void 0!==t[1]?t[1]:"GET",r=t.length>2&&void 0!==t[2]?t[2]:{"Content-Type":"application/json"},n.error="",n.loading=!0,a.prev=4,a.next=7,fetch(e,{method:c,headers:r});case 7:return i=a.sent,a.next=10,i.json();case 10:return a.abrupt("return",a.sent);case 13:a.prev=13,a.t0=a["catch"](4),n.error=a.t0;case 16:case"end":return a.stop()}}),a,null,[[4,13]])})))()}}}},efa0:function(e,t,n){}}]);
//# sourceMappingURL=stories.3590f4b9.js.map