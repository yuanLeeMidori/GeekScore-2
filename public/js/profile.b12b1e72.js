(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"74dc":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("the-title",{attrs:{title:"Profile",icon:"account-details"}}),t.isUsername?e("div",{staticClass:"d-flex"},[e("span",{staticClass:"mr-3"},[t._v("Username:")]),e("span",[t._v(t._s(t.user.username))])]):t._e(),e("div",{staticClass:"mb-7"},[e("h3",{staticClass:"mb-3"},[t._v("Win rates")]),e("ol",{staticClass:"columns"},t._l(t.winRates,(function(s,n){return e("li",{key:n},[e("span",{staticClass:"mr-3"},[t._v(t._s(n)+":")]),e("span",[t._v(t._s(s))])])})),0)]),e("v-btn",{attrs:{color:"secondary"},on:{click:t.onLogout}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-logout")]),t._v(" Logout ")],1)],1)},a=[],o=e("f3f3"),i=e("882a"),c=e("2f62"),l={name:"ProfileDetails",components:{TheTitle:i["a"]},computed:Object(o["a"])(Object(o["a"])({},Object(c["d"])("user",["user","winRates"])),{},{isUsername:function(){return this.user&&this.user.username}}),created:function(){this.loadWinRates()},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])("user",["logout","loadWinRates"])),{},{onLogout:function(){this.logout()}})},r=l,u=e("2877"),d=e("6544"),f=e.n(d),m=e("8336"),_=e("132d"),b=Object(u["a"])(r,n,a,!1,null,null,null);s["default"]=b.exports;f()(b,{VBtn:m["a"],VIcon:_["a"]})}}]);
//# sourceMappingURL=profile.b12b1e72.js.map