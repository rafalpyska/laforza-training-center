(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BlogPost"],{"0904":function(e,t,o){"use strict";o("d007")},"6ba9":function(e,t,o){"use strict";var c=o("7a23");const a=Object(c["withScopeId"])("data-v-0f4c4d36");Object(c["pushScopeId"])("data-v-0f4c4d36");const s={class:"blog__post-date"},r={class:"blog__post-date-day"},l={class:"blog__post-date-month"};Object(c["popScopeId"])();const n=a((e,t,o,a,n,p)=>(Object(c["openBlock"])(),Object(c["createBlock"])("div",s,[Object(c["createVNode"])("p",r,Object(c["toDisplayString"])(n.day),1),Object(c["createVNode"])("p",l,Object(c["toDisplayString"])(p.monthName(n.month)),1)])));var p={name:"BlogPostDate",props:{post:{type:Object,required:!0}},data(){return{day:this.post.publishedAt.split("-")[2],month:this.post.publishedAt.split("-")[1]}},methods:{monthName(e){return["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][e-1]}}};o("b0a2");p.render=n,p.__scopeId="data-v-0f4c4d36";t["a"]=p},8118:function(e,t,o){},b0a2:function(e,t,o){"use strict";o("8118")},c559:function(e,t,o){"use strict";o.r(t);var c=o("7a23");const a=Object(c["withScopeId"])("data-v-1148317c");Object(c["pushScopeId"])("data-v-1148317c");const s={class:"container"},r={key:1,class:"section blog"},l={class:"container"},n={class:"blog__post-wrapper"},p={class:"blog__post"},b={class:"blog__post-image-container"},d={class:"blog__post-shortened"},i={class:"blog__post-heading"},g={class:"blog__post-paragraph"},O={class:"blog__post-sidebar"},j={class:"blog__post-category"},u=Object(c["createVNode"])("h2",{class:"blog__post-category-heading"},"Categories",-1),_={class:"blog__post-category-list"};Object(c["popScopeId"])();const h=a((e,t,o,a,h,m)=>{const y=Object(c["resolveComponent"])("AppLoadingSpinner"),k=Object(c["resolveComponent"])("ImageItem"),v=Object(c["resolveComponent"])("BlogPostDate");return Object(c["openBlock"])(),Object(c["createBlock"])("div",s,[e.loadingStatus?(Object(c["openBlock"])(),Object(c["createBlock"])(y,{key:0})):(Object(c["openBlock"])(),Object(c["createBlock"])("section",r,[Object(c["createVNode"])("div",l,[Object(c["createVNode"])("div",n,[Object(c["createVNode"])("article",p,[Object(c["createVNode"])("div",b,[Object(c["createVNode"])(k,{source:""+e.post[0].image.formats.large.url,alt:""+e.post[0].image.alternativeText},null,8,["source","alt"]),Object(c["createVNode"])(v,{post:e.post[0]},null,8,["post"])]),Object(c["createVNode"])("div",d,[Object(c["createVNode"])("h2",i,Object(c["toDisplayString"])(e.post[0].title),1),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.post[0].authors,e=>(Object(c["openBlock"])(),Object(c["createBlock"])("p",{class:"blog__post-posted-by",key:e.id}," Published by: "+Object(c["toDisplayString"])(e.username),1))),128)),Object(c["createVNode"])("p",g,Object(c["toDisplayString"])(e.post[0].content),1)])]),Object(c["createVNode"])("aside",O,[Object(c["createVNode"])("div",j,[u,Object(c["createVNode"])("ul",_,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.post[0].categories,e=>(Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:"blog__post-category-item",key:e.id}," #"+Object(c["toDisplayString"])(e.name),1))),128))])])])])])]))])});var m=o("5502"),y=o("dbe1"),k=o("d543"),v=o("6ba9"),B={name:"BlogPost",components:{AppLoadingSpinner:y["a"],ImageItem:k["a"],BlogPostDate:v["a"]},props:{slug:{type:String,required:!0}},computed:{...Object(m["b"])(["loadingStatus","errorStatus","post"])},async created(){try{await this.$store.dispatch("fetchOneBlogPost",this.slug)}catch(e){this.errorStatus=e}}};o("0904");B.render=h,B.__scopeId="data-v-1148317c";t["default"]=B},d007:function(e,t,o){}}]);
//# sourceMappingURL=BlogPost.dd1712d5.js.map