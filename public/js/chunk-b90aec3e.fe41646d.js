(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b90aec3e"],{2303:function(e,t,r){"use strict";var a=r("1da1");function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}r("96cf");var o=r("bc3a"),u=r.n(o),c=function(){function e(){n(this,e)}return i(e,[{key:"signIn",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",u()({method:"post",url:"users/login",data:{email:t,password:r}}));case 1:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"signUp",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",u()({method:"post",url:"users/register",data:{name:t,email:r,password:a}}));case 1:case"end":return e.stop()}}),e)})));function t(t,r,a){return e.apply(this,arguments)}return t}()}]),e}();t["a"]=new c},"54e2":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),r("div",{staticClass:"form-label-group mb-2"},[r("label",{attrs:{for:"email"}},[e._v("信箱 email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("div",{staticClass:"form-label-group mb-3"},[r("label",{attrs:{for:"password"}},[e._v("密碼 Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" 提交 Submit ")]),r("div",{staticClass:"text-center mb-3"},[r("p",[e._v(" 沒有帳號? "),r("router-link",{attrs:{to:"/signup"}},[e._v(" 註冊 Register ")])],1),r("p",[e._v("以訪客身分使用 "),r("router-link",{attrs:{to:"/"}},[e._v(" 開始使用 ")])],1)])])])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center mb-4"},[r("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v(" 登入 Log In ")])])}],s=r("1da1"),i=(r("96cf"),r("2303")),o=r("2fa3"),u={data:function(){return{isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.email&&e.password){t.next=4;break}return o["a"].fire({icon:"warning",title:"請輸入帳號&密碼!"}),t.abrupt("return");case 4:return e.isProcessing=!0,t.next=7,i["a"].signIn(e.email,e.password);case 7:if(r=t.sent,a=r.data,"success"===a.status){t.next=14;break}throw o["a"].fire({icon:"warning",title:"帳號/密碼錯誤!"}),new Error(a.message);case 14:localStorage.removeItem("token"),localStorage.setItem("token",a.token),e.$store.commit("setCurrentUser",a.user),e.isProcessing=!1,e.$router.push("/");case 19:t.next=26;break;case 21:t.prev=21,t.t0=t["catch"](0),o["a"].fire({icon:"warning",title:"帳號/密碼錯誤!"}),e.password="",e.isProcessing=!1;case 26:case"end":return t.stop()}}),t,null,[[0,21]])})))()}}},c=u,l=r("2877"),p=Object(l["a"])(c,a,n,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-b90aec3e.fe41646d.js.map