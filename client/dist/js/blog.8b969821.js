(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blog"],{"0a17":function(t,e,s){"use strict";s("e8c3")},"2c0c":function(t,e,s){},5369:function(t,e,s){"use strict";s("2c0c")},"6ba9":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"blog__post-date"},[s("p",{staticClass:"blog__post-date-day"},[t._v(t._s(t.day))]),s("p",{staticClass:"blog__post-date-month"},[t._v(t._s(t.monthName(t.month)))])])},r=[],o=(s("ac1f"),s("1276"),{name:"BlogPostDate",props:{post:{type:Object,required:!0}},data:function(){return{day:this.post.publishedAt.split("-")[2],month:this.post.publishedAt.split("-")[1]}},methods:{monthName:function(t){return["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][t-1]}}}),n=o,i=(s("0a17"),s("2877")),u=Object(i["a"])(n,a,r,!1,null,"2d5a9c2c",null);e["a"]=u.exports},"824f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t.postsLoadingStatus?s("BaseLoadingSpinner"):t._l(t.posts,(function(e){return s("div",{key:e.id,staticClass:"blog__post-list"},[s("div",{staticClass:"blog__post-list-image-container"},[s("ImageItem",{attrs:{source:""+e.image.formats.large.url,alt:""+e.image.alternativeText}}),s("BlogPostDate",{attrs:{post:e}})],1),s("div",{staticClass:"blog__post-list-shortened"},[s("h2",{staticClass:"blog__post-list-heading"},[t._v(t._s(e.title))]),s("p",{staticClass:"blog__post-list-paragraph"},[t._v(t._s(e.summary))]),s("div",{staticClass:"blog__post-list-controls"},[s("BaseButton",{attrs:{btnType:"load-more",to:{name:"BlogPost",params:{slug:e.slug}}}},[t._v(" Read More ")]),t._l(e.authors,(function(e){return s("p",{key:e.id,staticClass:"blog__post-list-posted-by"},[t._v(" "+t._s(e.username)+" ")])}))],2)]),s("router-view")],1)}))],2)},r=[],o=(s("96cf"),s("1da1")),n=s("5530"),i=s("2f62"),u=s("e128"),c=s("d543"),l=s("6ba9"),p={name:"BlogPostsList",components:{ImageItem:c["a"],BlogPostDate:l["a"]},mixins:[u["a"]],data:function(){return{startPostsFrom:0,numberOfPosts:50}},computed:Object(n["a"])({},Object(i["b"])(["postsLoadingStatus","postsErrorStatus","posts"])),created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchBlogPosts",{start:t.startPostsFrom,limit:t.numberOfPosts});case 2:case"end":return e.stop()}}),e)})))()}},d=p,m=(s("5369"),s("2877")),_=Object(m["a"])(d,a,r,!1,null,"49bcba31",null);e["default"]=_.exports},"845c":function(t,e,s){"use strict";s("e36c")},c559:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t.singlePostLoadingStatus?s("BaseLoadingSpinner"):t._e(),s("div",{staticClass:"blog__post-wrapper"},[s("article",{staticClass:"blog__post"},[s("div",{staticClass:"blog__post-image-container"},[s("ImageItem",{attrs:{source:""+t.post[0].image.formats.large.url,alt:""+t.post[0].image.alternativeText}}),s("BlogPostDate",{attrs:{post:t.post[0]}})],1),s("div",{staticClass:"blog__post-content"},[s("h2",{staticClass:"blog__post-heading"},[t._v(t._s(t.post[0].title))]),t._l(t.post[0].authors,(function(e){return s("p",{key:e.id,staticClass:"blog__post-posted-by"},[t._v(" Published by: "+t._s(e.username)+" ")])})),s("p",{staticClass:"blog__post-paragraph"},[t._v(" "+t._s(t.post[0].content)+" ")])],2),t._l(t.post[0].authors,(function(e){return s("div",{key:e.id,staticClass:"blog__post-author-info"},[s("figure",{staticClass:"blog__post-author-avatar-container"},[s("img",{staticClass:"blog__post-author-avatar",attrs:{src:e.avatar.formats.thumbnail.url,alt:e.avatar.alternativeText}})]),s("div",{staticClass:"blog__post-author-credentials"},[s("div",{staticClass:"blog__post-author-credentials-header"},[s("p",{staticClass:"text-uppercase"},[t._v(t._s(e.username))]),s("p",{staticClass:"text-uppercase"},[t._v(t._s(e.occupation))])]),t._m(0,!0)])])}))],2),s("aside",{staticClass:"blog__post-sidebar"},[s("BaseWidget",{scopedSlots:t._u([{key:"heading",fn:function(){return[t._v(" Categories ")]},proxy:!0},{key:"content",fn:function(){return[s("ul",{staticClass:"blos__post-category-list"},t._l(t.post[0].categories,(function(e){return s("li",{key:e.id,staticClass:"blog__post-category-item"},[t._v(" #"+t._s(e.name)+" ")])})),0)]},proxy:!0}])}),s("BaseWidget",{scopedSlots:t._u([{key:"heading",fn:function(){return[t._v(" Sample widget based on slots ")]},proxy:!0},{key:"content",fn:function(){return[s("p",[t._v(" Esllentesque lacus.Vivamus lorem arcu semperd duiac. Cras ornare arcu avamus nda leo. Etiam ind arcu. Morbi justo mauris tempus pharetrad interd um at congue semper purus. Lorem ipsum dolor sit amet sed consectetura. ")])]},proxy:!0}])}),s("BaseWidget",{scopedSlots:t._u([{key:"heading",fn:function(){return[t._v(" Sample widget based on slots ")]},proxy:!0},{key:"content",fn:function(){return[s("p",[t._v(" Esllentesque lacus.Vivamus lorem arcu semperd duiac. Cras ornare arcu avamus nda leo. Etiam ind arcu. Morbi justo mauris tempus pharetrad interd um at congue semper purus. Lorem ipsum dolor sit amet sed consectetura. ")])]},proxy:!0}])}),s("BaseWidget",{scopedSlots:t._u([{key:"heading",fn:function(){return[t._v(" Sample widget based on slots ")]},proxy:!0},{key:"content",fn:function(){return[s("p",[t._v(" Esllentesque lacus.Vivamus lorem arcu semperd duiac. Cras ornare arcu avamus nda leo. Etiam ind arcu. Morbi justo mauris tempus pharetrad interd um at congue semper purus. Lorem ipsum dolor sit amet sed consectetura. ")])]},proxy:!0}])})],1)])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"blog__post-author-credentials-content"},[s("p",[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore esse ut cupiditate nemo in earum atque numquam minus ab illo. ")])])}],o=(s("96cf"),s("1da1")),n=s("5530"),i=s("2f62"),u=s("d543"),c=s("6ba9"),l={name:"BlogPost",components:{ImageItem:u["a"],BlogPostDate:c["a"]},props:{slug:{type:String,required:!0}},computed:Object(n["a"])({},Object(i["b"])(["singlePostLoadingStatus","singlePostErrorStatus","post"])),created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchSingleBlogPost",t.slug);case 2:case"end":return e.stop()}}),e)})))()}},p=l,d=(s("845c"),s("2877")),m=Object(d["a"])(p,a,r,!1,null,"7aa40070",null);e["default"]=m.exports},e128:function(t,e,s){"use strict";s("d3b7"),s("96cf");var a=s("1da1");e["a"]={methods:{http:function(t){var e=arguments,s=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var r,o,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.length>1&&void 0!==e[1]?e[1]:"GET",o=e.length>2&&void 0!==e[2]?e[2]:{"Content-Type":"application/json"},s.error="",s.loading=!0,a.prev=4,a.next=7,fetch(t,{method:r,headers:o});case 7:return n=a.sent,a.next=10,n.json();case 10:return a.abrupt("return",a.sent);case 13:a.prev=13,a.t0=a["catch"](4),s.error=a.t0;case 16:case"end":return a.stop()}}),a,null,[[4,13]])})))()}}}},e36c:function(t,e,s){},e8c3:function(t,e,s){},fd3f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section blog"},[s("router-view")],1)},r=[],o={name:"Blog"},n=o,i=s("2877"),u=Object(i["a"])(n,a,r,!1,null,"7cb034d0",null);e["default"]=u.exports}}]);
//# sourceMappingURL=blog.8b969821.js.map