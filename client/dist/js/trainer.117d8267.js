(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["trainer"],{"35e3":function(t,a,e){"use strict";e("8e6a")},"3c4f":function(t,a,e){"use strict";e("93f0")},"8e6a":function(t,a,e){},"93f0":function(t,a,e){},ccf2:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"section trainer"},[e("div",{staticClass:"container"},[t._m(0),t.trainersLoadingStatus?e("BaseLoadingSpinner"):[t._l(t.trainers,(function(t){return e("TrainersList",{key:t.id,attrs:{trainer:t}})})),e("BasePagination",{attrs:{pagination:t.pagination,next:"paginationLoadMore",previous:"paginationPrevious"}}),e("router-view",{key:t.$route.fullPath})]],2)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section__info"},[e("div",{staticClass:"section__info-titles-container"},[e("h2",{staticClass:"section__title color-primary"},[t._v("Trainers")]),e("p",{staticClass:"section__subtitle"},[t._v("Etiam rhoncus. Maecenas tempus")])])])}],r=(e("a9e3"),e("96cf"),e("1da1")),n=e("5530"),c=e("2f62"),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"trainer"},[e("div",{staticClass:"trainer__image-container"},[e("ImageItem",{attrs:{source:""+t.trainer.avatar.url,alt:""+t.trainer.avatar.alternativeText}})],1),e("div",{staticClass:"trainer__info"},[e("h3",{staticClass:"trainer__heading"},[t._v(" "+t._s(t.trainer.username)+" "),t._l(t.trainer.classes,(function(a){return e("span",{key:a.id,staticClass:"trainer__class"},[t._v(t._s(a.name))])}))],2),t._l(t.trainer.shortInfo,(function(a){return e("p",{key:a.id,staticClass:"trainer__description"},[t._v(" "+t._s(a.shortInfo)+" ")])})),e("div",{staticClass:"trainer__socials"},t._l(t.trainer.socialMedia,(function(a){return e("a",{key:a.id,staticClass:"trainer__socials-link",attrs:{href:""+a.url}},["Facebook"===a.name?e("i",{staticClass:"fab fa-facebook-f trainer__socials-link",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"visuallyhidden"},[t._v(t._s(a.name))])]):t._e(),"Twitter"===a.name?e("i",{staticClass:"fab fa-twitter trainer__socials-link",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"visuallyhidden"},[t._v(t._s(a.name))])]):t._e(),"Instagram"===a.name?e("i",{staticClass:"fab fa-instagram trainer__socials-link",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"visuallyhidden"},[t._v(t._s(a.name))])]):t._e()])})),0)],2),e("div",{staticClass:"trainer__general-info"},[e("h3",{staticClass:"trainer__heading"},[t._v("Schedule")]),t._m(0),e("BaseButton",{attrs:{btnType:"schedule"},nativeOn:{click:function(a){return t.addToCart()}}},[t._v(" Enroll ")])],1)])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"trainer__schedule-list"},[e("li",{staticClass:"trainer__schedule-item"},[e("i",{staticClass:"far fa-star trainer__schedule-icon",attrs:{"aria-hidden":"true"}}),t._v("Gain confidence ")]),e("li",{staticClass:"trainer__schedule-item"},[e("i",{staticClass:"far fa-star trainer__schedule-icon",attrs:{"aria-hidden":"true"}}),t._v("Strength development ")]),e("li",{staticClass:"trainer__schedule-item"},[e("i",{staticClass:"far fa-star trainer__schedule-icon",attrs:{"aria-hidden":"true"}}),t._v("Development speed ")]),e("li",{staticClass:"trainer__schedule-item"},[e("i",{staticClass:"far fa-star trainer__schedule-icon",attrs:{"aria-hidden":"true"}}),t._v("Increase dexterity ")]),e("li",{staticClass:"trainer__schedule-item"},[e("i",{staticClass:"far fa-star trainer__schedule-icon",attrs:{"aria-hidden":"true"}}),t._v("Increase stamina ")]),e("li",{staticClass:"trainer__schedule-item"},[e("i",{staticClass:"far fa-star trainer__schedule-icon",attrs:{"aria-hidden":"true"}}),t._v("An athletic body ")])])}],u=e("d543"),_={name:"TrainersList",components:{ImageItem:u["a"]},props:{trainer:{type:Object,required:!0}},data:function(){return{show:!1}},methods:{addToCart:function(){this.$store.dispatch("addCourseToCart",{course:this.trainer.classes[0],quantity:1,trainer:this.trainer.username})}}},d=_,f=(e("3c4f"),e("2877")),h=Object(f["a"])(d,l,o,!1,null,"4c512a5a",null),m=h.exports,p={name:"Trainers",components:{TrainersList:m},data:function(){return{meta:{start:0,limit:3,currentPage:1,pageCount:0}}},computed:Object(n["a"])({},Object(c["b"])(["trainersLoadingStatus","trainersErrorStatus","trainers","pagination","pageNumber","pagesTotal"])),created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$store.dispatch("fetchTrainers",{limit:t.pagination.limit,start:(Number(t.$route.params.page)-1)*t.pagination.limit,page:Number(t.$route.params.page)});case 2:case"end":return a.stop()}}),a)})))()}},v=p,C=(e("35e3"),Object(f["a"])(v,i,s,!1,null,"f507494e",null));a["default"]=C.exports}}]);
//# sourceMappingURL=trainer.117d8267.js.map