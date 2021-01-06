(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["trainer"],{"02d9":function(e,t,a){"use strict";a("b103")},"585a":function(e,t,a){},9090:function(e,t,a){"use strict";a("585a")},b103:function(e,t,a){},ccf2:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const r={class:"section trainer"},s={class:"container"},i=Object(c["createVNode"])("div",{class:"section__info"},[Object(c["createVNode"])("div",{class:"section__info-titles-container"},[Object(c["createVNode"])("h2",{class:"section__title color-primary"},"Trainers"),Object(c["createVNode"])("p",{class:"section__subtitle"},"Etiam rhoncus. Maecenas tempus")])],-1);function o(e,t,a,o,n,l){const d=Object(c["resolveComponent"])("AppLoadingSpinner"),b=Object(c["resolveComponent"])("TrainersList");return Object(c["openBlock"])(),Object(c["createBlock"])("section",r,[Object(c["createVNode"])("div",s,[i,e.loadingStatus?(Object(c["openBlock"])(),Object(c["createBlock"])(d,{key:0})):(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],{key:1},Object(c["renderList"])(e.trainers,e=>(Object(c["openBlock"])(),Object(c["createBlock"])(b,{key:e.id,trainer:e},null,8,["trainer"]))),128)),Object(c["createVNode"])("button",{onClick:t[1]||(t[1]=()=>this.$router.push({path:"/trainers",query:{page:1}})),class:"btn btn__load-more"}," Load more ")])])}var n=a("5502"),l=a("dbe1");const d=Object(c["withScopeId"])("data-v-36e66135");Object(c["pushScopeId"])("data-v-36e66135");const b={class:"trainer"},p={class:"trainer__image-container"},u={class:"trainer__info"},j={class:"trainer__heading"},O={class:"trainer__socials"},h=Object(c["createVNode"])("i",{class:"fab fa-facebook-f trainer__socials-icon","aria-hidden":"true"},[Object(c["createVNode"])("span",{class:"visuallyhidden"},"Facebook")],-1),_=Object(c["createVNode"])("i",{class:"fab fa-twitter trainer__socials-icon","aria-hidden":"true"},[Object(c["createVNode"])("span",{class:"visuallyhidden"},"Twitter")],-1),f=Object(c["createVNode"])("i",{class:"fab fa-instagram trainer__socials-icon","aria-hidden":"true"},[Object(c["createVNode"])("span",{class:"visuallyhidden"},"Instagram")],-1),k={class:"trainer__general-info"},m=Object(c["createStaticVNode"])('<h3 class="trainer__heading" data-v-36e66135>Schedule</h3><span class="visuallyhidden" data-v-36e66135>Facebook</span><ul class="trainer__schedule-list" data-v-36e66135><li class="trainer__schedule-item" data-v-36e66135><i class="far fa-star trainer__schedule-icon" aria-hidden="true" data-v-36e66135></i>Gain confidence </li><li class="trainer__schedule-item" data-v-36e66135><i class="far fa-star trainer__schedule-icon" aria-hidden="true" data-v-36e66135></i>Strength development </li><li class="trainer__schedule-item" data-v-36e66135><i class="far fa-star trainer__schedule-icon" aria-hidden="true" data-v-36e66135></i>Development speed </li><li class="trainer__schedule-item" data-v-36e66135><i class="far fa-star trainer__schedule-icon" aria-hidden="true" data-v-36e66135></i>Increase dexterity </li><li class="trainer__schedule-item" data-v-36e66135><i class="far fa-star trainer__schedule-icon" aria-hidden="true" data-v-36e66135></i>Increase stamina </li><li class="trainer__schedule-item" data-v-36e66135><i class="far fa-star trainer__schedule-icon" aria-hidden="true" data-v-36e66135></i>An athletic body </li></ul>',3),v=Object(c["createTextVNode"])(" Enroll ");Object(c["popScopeId"])();const B=d((e,t,a,r,s,i)=>{const o=Object(c["resolveComponent"])("ImageItem"),n=Object(c["resolveComponent"])("AppButton"),l=Object(c["resolveComponent"])("AppModal");return Object(c["openBlock"])(),Object(c["createBlock"])("div",b,[Object(c["createVNode"])("div",p,[Object(c["createVNode"])(o,{source:""+a.trainer.avatar.url,alt:""+a.trainer.avatar.alternativeText},null,8,["source","alt"])]),Object(c["createVNode"])("div",u,[Object(c["createVNode"])("h3",j,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(a.trainer.username)+" ",1),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.trainer.classes,e=>(Object(c["openBlock"])(),Object(c["createBlock"])("span",{key:e.id,class:"trainer__class"},Object(c["toDisplayString"])(e.name),1))),128))]),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.trainer.shortInfo,e=>(Object(c["openBlock"])(),Object(c["createBlock"])("p",{key:e.id,class:"trainer__description"},Object(c["toDisplayString"])(e.shortInfo),1))),128)),Object(c["createVNode"])("div",O,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.trainer.socials,e=>(Object(c["openBlock"])(),Object(c["createBlock"])("a",{key:e.id,href:""+e.facebook,class:"href trainer__socials-link"},[h],8,["href"]))),128)),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.trainer.socials,e=>(Object(c["openBlock"])(),Object(c["createBlock"])("a",{key:e.id,href:""+e.twitter,class:"href trainer__socials-link"},[_],8,["href"]))),128)),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.trainer.socials,e=>(Object(c["openBlock"])(),Object(c["createBlock"])("a",{key:e.id,href:""+e.instagram,class:"href trainer__socials-link"},[f],8,["href"]))),128))])]),Object(c["createVNode"])("div",k,[m,Object(c["createVNode"])(n,{btnType:"schedule",onClick:t[1]||(t[1]=e=>i.addToCart())},{default:d(()=>[v]),_:1}),(Object(c["openBlock"])(),Object(c["createBlock"])(c["Teleport"],{to:"#modal"},[Object(c["createVNode"])(l,{ref:"popup",title:a.trainer.classes[0].name,subtitle:a.trainer.username},null,8,["title","subtitle"])]))])])});var g=a("d543"),N=a("45c2");const V=Object(c["withScopeId"])("data-v-0b50a512");Object(c["pushScopeId"])("data-v-0b50a512");const y={class:"modal"},S={class:"modal__header"},w=Object(c["createVNode"])("i",{class:"fas fa-times"},null,-1),I=Object(c["createVNode"])("i",{class:"far fa-check-circle modal-success-icon"},null,-1),T=Object(c["createVNode"])("h2",{class:"modal__heading"},"Great!",-1),C={class:"modal__content"};Object(c["popScopeId"])();const L=V((e,t,a,r,s,i)=>(Object(c["openBlock"])(),Object(c["createBlock"])("div",{id:"modal-open",class:{show:s.show,"modal-wrapper":!0}},[Object(c["createVNode"])("div",y,[Object(c["createVNode"])("div",S,[Object(c["createVNode"])("span",{onClick:t[1]||(t[1]=e=>s.show=!1),title:"Close",class:"modal-close","aria-label":"close"},[w]),I,T]),Object(c["createVNode"])("div",C,[Object(c["renderSlot"])(e.$slots,"default",{},()=>[Object(c["createTextVNode"])("You have successfully added '"+Object(c["toDisplayString"])(a.title)+"' course, with "+Object(c["toDisplayString"])(a.subtitle)+", to your cart! Check our other courses!",1)])])])],2)));var F={props:{title:{type:String,required:!0},subtitle:{type:String,required:!0}},data(){return{show:!1}}};a("9090");F.render=L,F.__scopeId="data-v-0b50a512";var A=F,D={name:"TrainersList",components:{ImageItem:g["a"],AppButton:N["a"],AppModal:A},props:{trainer:{type:Object,required:!0}},data(){return{show:!1}},methods:{addToCart(){this.$store.dispatch("addCourseToCart",{course:this.trainer.classes[0],quantity:1,trainer:this.trainer.username}),this.$refs.popup.show=!this.$refs.popup.show}}};a("02d9");D.render=B,D.__scopeId="data-v-36e66135";var $=D,q={name:"Trainers",components:{AppLoadingSpinner:l["a"],TrainersList:$},data(){return{}},computed:{...Object(n["b"])(["loadingStatus","errorStatus","trainers"])},async created(){if(!(this.trainers&&this.trainers.length>0))try{await this.$store.dispatch("fetchTrainers")}catch(e){this.errorStatus=e}},mounted(){let e=this.trainers;console.log(e)}};q.render=o;t["default"]=q}}]);
//# sourceMappingURL=trainer.b4d86d42.js.map