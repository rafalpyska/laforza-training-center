(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{5229:function(e,t,c){"use strict";c("5d30")},"5d30":function(e,t,c){},cb23:function(e,t,c){"use strict";c("fcaa")},f820:function(e,t,c){"use strict";c.r(t);var r=c("7a23"),a=Object(r["withScopeId"])("data-v-58dc81b4");Object(r["pushScopeId"])("data-v-58dc81b4");var i={class:"section about"},n={class:"container"},o=Object(r["createVNode"])("div",{class:"section__info"},[Object(r["createVNode"])("div",{class:"section__info-titles-container"},[Object(r["createVNode"])("h2",{class:"section__title color-primary"},"Client Stories"),Object(r["createVNode"])("p",{class:"section__subtitle"},"Etiam rhoncus. Maecenas tempus")])],-1),s={key:1,class:"trainer__list"};Object(r["popScopeId"])();var l=a((function(e,t,c,a,l,b){var d=Object(r["resolveComponent"])("BaseLoadingSpinner"),p=Object(r["resolveComponent"])("TrainersMiniProfile");return Object(r["openBlock"])(),Object(r["createBlock"])("section",i,[Object(r["createVNode"])("div",n,[o,e.trainersLoadingStatus?(Object(r["openBlock"])(),Object(r["createBlock"])(d,{key:0})):(Object(r["openBlock"])(),Object(r["createBlock"])("div",s,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(e.trainers,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(p,{key:e.id,trainer:e},null,8,["trainer"])})),128))]))])])})),b=(c("96cf"),c("1da1")),d=c("5530"),p=c("5502"),u=(c("b0c0"),Object(r["withScopeId"])("data-v-0e056c64"));Object(r["pushScopeId"])("data-v-0e056c64");var f={class:"trainer-mini-profile"},j={class:"trainer-mini-profile__info"},O={class:"trainer-mini-profile__info-description"},k={class:"trainer-mini-profile__info-description-username"},m={class:"trainer-mini-profile__socials"},_=Object(r["createVNode"])("i",{class:"fab fa-facebook-f trainer-mini-profile__socials-icon","aria-hidden":"true"},[Object(r["createVNode"])("span",{class:"visuallyhidden"},"Facebook")],-1),v=Object(r["createVNode"])("i",{class:"fab fa-twitter trainer-mini-profile__socials-icon","aria-hidden":"true"},[Object(r["createVNode"])("span",{class:"visuallyhidden"},"Twitter")],-1),B=Object(r["createVNode"])("i",{class:"fab fa-instagram trainer-mini-profile__socials-icon","aria-hidden":"true"},[Object(r["createVNode"])("span",{class:"visuallyhidden"},"Instagram")],-1);Object(r["popScopeId"])();var h=u((function(e,t,c,a,i,n){return Object(r["openBlock"])(),Object(r["createBlock"])("div",f,[Object(r["createVNode"])("figure",j,[Object(r["createVNode"])("img",{src:"".concat(c.trainer.avatar.url),alt:"".concat(c.trainer.avatar.alternativeText),class:"trainer-mini-profile__info-image image"},null,8,["src","alt"]),Object(r["createVNode"])("figcaption",O,[Object(r["createVNode"])("p",k,Object(r["toDisplayString"])(c.trainer.username),1),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(c.trainer.classes,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("p",{class:"trainer-mini-profile__info-description-class",key:e.id},Object(r["toDisplayString"])(e.name),1)})),128))])]),Object(r["createVNode"])("div",m,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(c.trainer.socials,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("a",{key:e.id,href:"".concat(e.facebook),class:"href trainer-mini-profile__socials-link"},[_],8,["href"])})),128)),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(c.trainer.socials,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("a",{key:e.id,href:"".concat(e.twitter),class:"href trainer-mini-profile__socials-link"},[v],8,["href"])})),128)),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(c.trainer.socials,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("a",{key:e.id,href:"".concat(e.instagram),class:"href trainer-mini-profile__socials-link"},[B],8,["href"])})),128))])])})),g={name:"TrainerMiniProfile",components:{},props:{trainer:{type:Object,required:!0}}};c("cb23");g.render=h,g.__scopeId="data-v-0e056c64";var N=g,V={name:"About",components:{TrainersMiniProfile:N},data:function(){return{limit:50}},computed:Object(d["a"])({},Object(p["b"])(["trainersLoadingStatus","trainersErrorStatus","trainers"])),mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchTrainers",e.limit);case 2:case"end":return t.stop()}}),t)})))()}};c("5229");V.render=l,V.__scopeId="data-v-58dc81b4";t["default"]=V},fcaa:function(e,t,c){}}]);
//# sourceMappingURL=about.40cc771e.js.map