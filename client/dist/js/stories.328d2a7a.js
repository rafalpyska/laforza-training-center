(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stories"],{1572:function(e,t,c){"use strict";c("efa0")},"9e05":function(e,t,c){"use strict";c("b882")},b882:function(e,t,c){},dcfc:function(e,t,c){"use strict";c.r(t);var s=c("7a23");const a=Object(s["withScopeId"])("data-v-464be58c");Object(s["pushScopeId"])("data-v-464be58c");const i={class:"section stories"},o=Object(s["createStaticVNode"])('<div class="container" data-v-464be58c><div class="section__info" data-v-464be58c><div class="section__info-titles-container" data-v-464be58c><h2 class="section__title color-primary" data-v-464be58c>Client Stories</h2><p class="section__subtitle" data-v-464be58c>Etiam rhoncus. Maecenas tempus</p></div></div><div class="section__description" data-v-464be58c><p data-v-464be58c> Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. </p><p data-v-464be58c> Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. </p></div></div>',1),n=Object(s["createVNode"])("p",{class:"action-strip__name"},"Client Stories",-1),r=Object(s["createTextVNode"])(" Send story "),d={class:"stories__list-wrapper"},l={class:"stories__list container"};Object(s["popScopeId"])();const p=a((e,t,c,p,u,b)=>{const m=Object(s["resolveComponent"])("AppButton"),j=Object(s["resolveComponent"])("AppActionStrip"),v=Object(s["resolveComponent"])("AppLoadingSpinner"),O=Object(s["resolveComponent"])("ClientStory");return Object(s["openBlock"])(),Object(s["createBlock"])("section",i,[o,Object(s["createVNode"])(j,null,{"first-column":a(()=>[n]),"last-column":a(()=>[Object(s["createVNode"])(m,{btnType:"send-story"},{default:a(()=>[r]),_:1})]),_:1}),Object(s["createVNode"])("div",d,[Object(s["createVNode"])("div",l,[u.loading?(Object(s["openBlock"])(),Object(s["createBlock"])(v,{key:0})):(Object(s["openBlock"])(!0),Object(s["createBlock"])(s["Fragment"],{key:1},Object(s["renderList"])(u.stories,e=>(Object(s["openBlock"])(),Object(s["createBlock"])(O,{key:e.id,story:e},null,8,["story"]))),128))])])])});var u=c("dbe1"),b=c("e128");const m=Object(s["withScopeId"])("data-v-024e3bed");Object(s["pushScopeId"])("data-v-024e3bed");const j={class:"client-story"},v={class:"client-story__content"},O={cite:"client-id"},h={class:"client-story__paragraph"},_=Object(s["createVNode"])("div",{class:"client-story__quote-symbol","aria-hidden":"true"},[Object(s["createVNode"])("span",null,[Object(s["createVNode"])("i",{class:"fas fa-quote-right"})])],-1),y={class:"story__user"},f=Object(s["createVNode"])("img",{src:"http://dummyimage.com/40x40",class:"story__user-profile-image",alt:"user placeholder"},null,-1),g={class:"story__user-name"},N=Object(s["createVNode"])("span",{class:"story__user-name-description"},"Happy client",-1);Object(s["popScopeId"])();const S=m((e,t,c,a,i,o)=>(Object(s["openBlock"])(),Object(s["createBlock"])("div",j,[Object(s["createVNode"])("div",v,[Object(s["createVNode"])("blockquote",O,[Object(s["createVNode"])("p",h,Object(s["toDisplayString"])(c.story.opinion),1)]),_]),Object(s["createVNode"])("figure",y,[f,Object(s["createVNode"])("figcaption",g,[Object(s["createTextVNode"])(Object(s["toDisplayString"])(c.story.author.username)+" ",1),N])])])));var V={name:"ClientStory",props:{story:{type:Object,required:!0}}};c("1572");V.render=S,V.__scopeId="data-v-024e3bed";var k=V,q=c("e6f2"),B=c("45c2"),w={name:"Stories",components:{AppLoadingSpinner:u["a"],ClientStory:k,AppActionStrip:q["a"],AppButton:B["a"]},mixins:[b["a"]],data(){return{loading:!1,error:"",stories:null}},async mounted(){this.http("https://laforza-api.herokuapp.com/stories").then(e=>{this.stories=e,this.loading=!1})}};c("9e05");w.render=p,w.__scopeId="data-v-464be58c";t["default"]=w},e128:function(e,t,c){"use strict";t["a"]={methods:{async http(e,t="GET",c={"Content-Type":"application/json"}){this.error="",this.loading=!0;try{const s=await fetch(e,{method:t,headers:c});return await s.json()}catch(s){this.error=s}}}}},efa0:function(e,t,c){}}]);
//# sourceMappingURL=stories.328d2a7a.js.map