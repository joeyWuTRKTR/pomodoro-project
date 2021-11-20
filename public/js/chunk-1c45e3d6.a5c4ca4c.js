(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c45e3d6"],{2303:function(e,t,a){"use strict";var r=a("1da1");function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,a){return t&&s(e.prototype,t),a&&s(e,a),e}a("96cf");var i=a("bc3a"),c=a.n(i),l=function(){function e(){n(this,e)}return o(e,[{key:"signIn",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",c()({method:"post",url:"users/login",data:{email:t,password:a}}));case 1:case"end":return e.stop()}}),e)})));function t(t,a){return e.apply(this,arguments)}return t}()},{key:"signUp",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,a,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",c()({method:"post",url:"users/register",data:{name:t,email:a,password:r}}));case 1:case"end":return e.stop()}}),e)})));function t(t,a,r){return e.apply(this,arguments)}return t}()}]),e}();t["a"]=new l},"5c9c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.registerSubmit.apply(null,arguments)}}},[e._m(0),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"name"}},[e._v("姓名 Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"name",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"email"}},[e._v("信箱 Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password"}},[e._v("密碼 Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"new-password",required:"",pattern:"^([a-zA-Z]+\\d+|\\d+[a-zA-Z]+)[a-zA-Z0-9]*$",minlength:"8",maxlength:"12",title:"請最少輸入8-12位英文與數字"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password-check"}},[e._v("確認密碼 Password Check")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{id:"password-check",name:"passwordCheck",type:"password",placeholder:"Password",autocomplete:"new-password",required:"",pattern:"^([a-zA-Z]+\\d+|\\d+[a-zA-Z]+)[a-zA-Z0-9]*$",minlength:"8",maxlength:"12",title:"請最少輸入8-12位英文與數字"},domProps:{value:e.passwordCheck},on:{input:function(t){t.target.composing||(e.passwordCheck=t.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" 提交 Submit ")]),a("div",{staticClass:"text-center mb-3"},[a("p",[e._v(" 已有帳號? "),a("router-link",{attrs:{to:"/signin"}},[e._v(" 登入 Sign In ")])],1)])])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center mb-4"},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v(" 註冊 Sign Up ")])])}],s=a("1da1"),o=(a("96cf"),a("498a"),a("b0c0"),a("2fa3")),i=a("bc3a"),c=a.n(i),l=a("2303"),u={data:function(){return{name:"",password:"",passwordCheck:"",isProcessing:!1}},methods:{registerSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.isProcessing=!0,e.name.trim()&&e.email&&e.password&&e.passwordCheck){t.next=6;break}return o["a"].fire({icon:"warning",title:"有欄位未輸入"}),e.isProcessing=!1,t.abrupt("return");case 6:return t.next=8,c()({method:"post",url:"users",data:{email:e.email}});case 8:if(a=t.sent,!a.data.email){t.next=13;break}return e.isProcessing=!1,o["a"].fire({icon:"warning",title:"此信箱已註冊!"}),t.abrupt("return");case 13:if(e.password===e.passwordCheck){t.next=17;break}return e.isProcessing=!1,o["a"].fire({icon:"warning",title:"密碼與確認密碼不符!"}),t.abrupt("return");case 17:return t.next=19,l["a"].signUp(e.name,e.email,e.password);case 19:if(r=t.sent,!r.data.user){t.next=28;break}return localStorage.removeItem("token"),localStorage.setItem("token",r.data.token),e.$store.commit("setCurrentUser",r.data.user),e.$router.push("/"),o["a"].fire({icon:"success",title:"Registered successfully!"}),e.isProcessing=!1,t.abrupt("return");case 28:r.data.message&&o["a"].fire({icon:"warning",title:r.data.message}),t.next=34;break;case 31:t.prev=31,t.t0=t["catch"](0),console.log(t.t0);case 34:case"end":return t.stop()}}),t,null,[[0,31]])})))()}}},m=u,p=a("2877"),d=Object(p["a"])(m,r,n,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-1c45e3d6.a5c4ca4c.js.map