(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cart"],{"3ba5":function(t,s,a){},b789:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section cart"},[a("div",{staticClass:"container"},[t._m(0),t._l(t.cart,(function(s){return a("div",{key:s.id,staticClass:"cart__item"},[a("h3",{staticClass:"mini-cart__product-title"},[a("span",{staticClass:"color-primary text-uppercase"},[t._v(t._s(s.course.name))]),t._v(" with "),a("span",{staticClass:"color-primary text-uppercase"},[t._v(t._s(s.trainer))])]),a("p",[t._v("Quantity: "+t._s(s.quantity))]),a("p",[t._v("Price: $"+t._s(s.course.price))]),a("button",{staticClass:"cart__remove",on:{click:function(a){return t.removeCourseFromCart(s.course)}}},[a("span",{staticClass:"visuallyhidden"},[t._v('Remove from cart"')]),a("i",{staticClass:"far fa-trash-alt"})])])})),t.cart.length>0?a("BaseDivider"):t._e(),t.cart.length>0?a("p",[t._v("Total: $"+t._s(t.cartTotalItemPrice))]):t._e()],2)])},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"section__info"},[a("div",{staticClass:"section__info-titles-container"},[a("h2",{staticClass:"section__title color-primary"},[t._v("Shopping cart")]),a("p",{staticClass:"section__subtitle"},[t._v("Etiam rhoncus. Maecenas tempus")])])])}],r=a("5530"),i=a("2f62"),n={name:"Cart",props:{},computed:Object(r["a"])({},Object(i["b"])(["cart","cartTotalItemPrice"])),methods:{removeCourseFromCart:function(t){this.$store.dispatch("removeCourseFromCart",t)}}},o=n,l=(a("c825"),a("2877")),_=Object(l["a"])(o,e,c,!1,null,"515aefc5",null);s["default"]=_.exports},c825:function(t,s,a){"use strict";a("3ba5")}}]);
//# sourceMappingURL=cart.b5161323.js.map