(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"3b4e":function(e,t,r){"use strict";r("7d8d")},"55c7":function(e,t,r){},"7d8d":function(e,t,r){},8706:function(e,t,r){"use strict";r("55c7")},f820:function(e,t,r){"use strict";r.r(t);var c=r("7a23"),a=Object(c["withScopeId"])("data-v-a81e7f00");Object(c["pushScopeId"])("data-v-a81e7f00");var i={class:"section about"},n={class:"container"},o=Object(c["createVNode"])("div",{class:"section__info"},[Object(c["createVNode"])("div",{class:"section__info-titles-container"},[Object(c["createVNode"])("h2",{class:"section__title color-primary"},"Client Stories"),Object(c["createVNode"])("p",{class:"section__subtitle"},"Etiam rhoncus. Maecenas tempus")])],-1),s={class:"trainer__list"};Object(c["popScopeId"])();var l=a((function(e,t,r,a,l,d){var b=Object(c["resolveComponent"])("TrainersMiniProfile");return Object(c["openBlock"])(),Object(c["createBlock"])("section",i,[Object(c["createVNode"])("div",n,[o,Object(c["createVNode"])("div",s,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.trainers,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(b,{key:e.id,trainer:e},null,8,["trainer"])})),128))])])])})),d=(r("96cf"),r("1da1")),b=r("5530"),p=r("5502"),u=(r("b0c0"),Object(c["withScopeId"])("data-v-d840302a"));Object(c["pushScopeId"])("data-v-d840302a");var f={class:"trainer-mini-profile"},j={class:"trainer-mini-profile__info"},O={class:"trainer-mini-profile__info-description"},k={class:"trainer-mini-profile__info-description-username"},m={class:"trainer-mini-profile__socials"},_=Object(c["createVNode"])("i",{class:"fab fa-facebook-f trainer-mini-profile__socials-icon","aria-hidden":"true"},[Object(c["createVNode"])("span",{class:"visuallyhidden"},"Facebook")],-1),h=Object(c["createVNode"])("i",{class:"fab fa-twitter trainer-mini-profile__socials-icon","aria-hidden":"true"},[Object(c["createVNode"])("span",{class:"visuallyhidden"},"Twitter")],-1),v=Object(c["createVNode"])("i",{class:"fab fa-instagram trainer-mini-profile__socials-icon","aria-hidden":"true"},[Object(c["createVNode"])("span",{class:"visuallyhidden"},"Instagram")],-1);Object(c["popScopeId"])();var B=u((function(e,t,r,a,i,n){return Object(c["openBlock"])(),Object(c["createBlock"])("div",f,[Object(c["createVNode"])("figure",j,[Object(c["createVNode"])("img",{src:"http://localhost:1337".concat(r.trainer.avatar.url),alt:"",class:"trainer-mini-profile__info-image image"},null,8,["src"]),Object(c["createVNode"])("figcaption",O,[Object(c["createVNode"])("p",k,Object(c["toDisplayString"])(r.trainer.username),1),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.trainer.classes,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("p",{class:"trainer-mini-profile__info-description-class",key:e.id},Object(c["toDisplayString"])(e.name),1)})),128))])]),Object(c["createVNode"])("div",m,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.trainer.socials,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("a",{key:e.id,href:"".concat(e.facebook),class:"href trainer-mini-profile__socials-link"},[_],8,["href"])})),128)),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.trainer.socials,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("a",{key:e.id,href:"".concat(e.twitter),class:"href trainer-mini-profile__socials-link"},[h],8,["href"])})),128)),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.trainer.socials,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("a",{key:e.id,href:"".concat(e.instagram),class:"href trainer-mini-profile__socials-link"},[v],8,["href"])})),128))])])})),g={name:"TrainerMiniProfile",components:{},props:{trainer:{type:Object,required:!0}}};r("8706");g.render=B,g.__scopeId="data-v-d840302a";var N=g,V={name:"About",components:{TrainersMiniProfile:N},computed:Object(b["a"])({},Object(p["b"])(["loadingStatus","errorStatus","trainers"])),mounted:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.trainers&&e.trainers.length>0)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,e.$store.dispatch("fetchTrainers");case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](2),e.errorStatus=t.t0;case 10:case"end":return t.stop()}}),t,null,[[2,7]])})))()}};r("3b4e");V.render=l,V.__scopeId="data-v-a81e7f00";t["default"]=V}}]);
//# sourceMappingURL=about.feb535d1.js.map