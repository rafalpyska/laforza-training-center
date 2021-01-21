(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["classes"],{"76be":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"section classes container"},[e._m(0),e.classesLoadingStatus?t("BaseLoadingSpinner"):e._l(e.classes,(function(e){return t("ClassesList",{key:e.id,attrs:{course:e}})}))],2)},r=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"section__info"},[t("div",{staticClass:"section__info-titles-container"},[t("h2",{staticClass:"section__title color-primary"},[e._v("Classes")]),t("p",{staticClass:"section__subtitle"},[e._v("Etiam rhoncus. Maecenas tempus")])])])}],n=(t("96cf"),t("1da1")),i=t("5530"),c=t("2f62"),l=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"class"},[t("div",{staticClass:"class__image-container"},[t("ImageItem",{attrs:{source:""+e.course.image.url,alt:""+e.course.image.alternativeText}})],1),t("div",{staticClass:"class__info"},[t("h3",{staticClass:"class__heading"},[e._v(" "+e._s(e.course.name)+" "),e._l(e.course.trainers,(function(s,a){return[t("span",{key:s.id,staticClass:"class__trainer"},[e._v(e._s(s.username)+" "),a!==e.course.trainers.length-1?[e._v(" / ")]:e._e()],2)]}))],2),t("p",{staticClass:"class__description"},[e._v(e._s(e.course.description))]),t("SelectTrainer",{attrs:{course:e.course},on:{selectedTrainer:e.setSelectedTrainer}}),t("div",{staticClass:"class__description-controls"},[t("BaseButton",{attrs:{btnType:"enroll",disabled:""===e.selectedTrainer},nativeOn:{click:function(s){return e.addToCart()}}},[e._v(" Enroll ")]),t("span",{staticClass:"class__description-price"},[e._v(" $"+e._s(e.course.price)+" / month ")])],1)],1),t("div",{staticClass:"class__general-info"},[t("div",{staticClass:"class__complexity"},[t("h3",{staticClass:"class__general-info-heading"},[e._v("The complexity")]),t("ul",{staticClass:"class__complexity-list"},[t("classes-complexity-indicator",{attrs:{rating:""+parseInt(e.course.complexity,10),max:5}})],1)]),t("div",{staticClass:"class__persons-allowed"},[t("h3",{staticClass:"class__general-info-heading"},[e._v("Number of persons")]),t("div",{staticClass:"class__persons-allowed-number"},[t("p",[e._v(e._s(e.course.maxGroupSize))])])]),t("div",{staticClass:"class__occupation"},[t("h3",{staticClass:"class__general-info-heading"},[e._v("The Occupation")]),t("div",{staticClass:"class__occupation-time"},[t("p",[e._v(e._s(e.course.duration)+" min")])])])])])},o=[],u=t("d543"),_=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"select-trainer__container"},[t("label",{staticClass:"bold",attrs:{for:"select-trainer"}},[e._v("Select trainer:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedTrainer,expression:"selectedTrainer"}],staticClass:"select-trainer",attrs:{name:"select-trainer"},on:{change:[function(s){var t=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(e){var s="_value"in e?e._value:e.value;return s}));e.selectedTrainer=s.target.multiple?t:t[0]},e.emitSelectedTrainer]}},[t("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("Choose")]),e._l(e.course.trainers,(function(s){return t("option",{key:s.id},[e._v(" "+e._s(s.username)+" ")])}))],2)])},d=[],p={name:"SelectTrainer",props:{course:{type:Object,required:!0}},data:function(){return{selectedTrainer:""}},methods:{emitSelectedTrainer:function(){this.$emit("selectedTrainer",this.selectedTrainer)}}},m=p,f=(t("d76b"),t("2877")),v=Object(f["a"])(m,_,d,!1,null,"02ba11ee",null),C=v.exports,h=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("li",{staticClass:"class__complexity-item"},[e._l(e.max,(function(s,a){return[t("i",{key:a,class:e.rating>=s?"fas fa-star":e.rating>s-1?"fas fa-star-half":"far fa-star"})]}))],2)},b=[],g=(t("a9e3"),{name:"ClassesComplexityIndicator",props:{rating:{type:[Number,String],default:0},max:{type:[Number,String],default:5}}}),T=g,x=Object(f["a"])(T,h,b,!1,null,"8ba41bb4",null),y=x.exports,S={name:"ClassesList",components:{ImageItem:u["a"],SelectTrainer:C,ClassesComplexityIndicator:y},props:{course:{type:Object,required:!0}},data:function(){return{selectedTrainer:""}},methods:{addToCart:function(){this.$store.dispatch("addCourseToCart",{course:this.course,quantity:1,trainer:this.selectedTrainer})},setSelectedTrainer:function(e){this.selectedTrainer=e}}},w=S,O=(t("7b81"),Object(f["a"])(w,l,o,!1,null,"823dc6b0",null)),j=O.exports,k={name:"Classes",components:{ClassesList:j},computed:Object(i["a"])({},Object(c["b"])(["classesLoadingStatus","classesErrorStatus","classes"])),created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!(e.classes&&e.classes.length>0)){s.next=2;break}return s.abrupt("return");case 2:return s.next=4,e.$store.dispatch("fetchClasses");case 4:case"end":return s.stop()}}),s)})))()}},$=k,E=Object(f["a"])($,a,r,!1,null,"5a2729c7",null);s["default"]=E.exports},"7b81":function(e,s,t){"use strict";t("800a")},"800a":function(e,s,t){},a174:function(e,s,t){},d76b:function(e,s,t){"use strict";t("a174")}}]);
//# sourceMappingURL=classes.c98829e0.js.map