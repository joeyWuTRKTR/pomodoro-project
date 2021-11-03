(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d338e"],{"5c9c":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("NavTabs"),a("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.registerSubmit.apply(null,arguments)}}},[e._m(0),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"name",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"new-password",required:"",pattern:"^([a-zA-Z]+\\d+|\\d+[a-zA-Z]+)[a-zA-Z0-9]*$",minlength:"8",maxlength:"12",title:"請最少輸入8-12位英文與數字"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password-check"}},[e._v("Password Check")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{id:"password-check",name:"passwordCheck",type:"password",placeholder:"Password",autocomplete:"new-password",required:"",pattern:"^([a-zA-Z]+\\d+|\\d+[a-zA-Z]+)[a-zA-Z0-9]*$",minlength:"8",maxlength:"12",title:"請最少輸入8-12位英文與數字"},domProps:{value:e.passwordCheck},on:{input:function(t){t.target.composing||(e.passwordCheck=t.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" Submit ")]),a("div",{staticClass:"text-center mb-3"},[a("p",[a("router-link",{attrs:{to:"/signin"}},[e._v(" Sign In ")])],1)]),a("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v(" © 2017-2018 ")])])],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center mb-4"},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v(" Sign Up ")])])}],o=a("1da1"),n=(a("96cf"),a("b0c0"),a("498a"),a("8bb1")),i=a("2fa3"),l=a("bc3a"),c=a.n(l),m={components:{NavTabs:n["a"]},data:function(){return{name:"",email:"",password:"",passwordCheck:"",isProcessing:!1}},methods:{registerSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.isProcessing=!0,console.log("Register submit button clicked!"),console.log("name",e.name),console.log("email",e.email),console.log("password",e.password),console.log("password check",e.passwordCheck),e.name.trim()&&e.email&&e.password&&e.passwordCheck){t.next=11;break}return i["a"].fire({icon:"warning",title:"有欄位未輸入"}),e.isProcessing=!1,t.abrupt("return");case 11:if(c()({method:"post",url:"http://localhost:3000/apis/users/",data:{email:e.email}}).then((function(e){if(console.log(e),e.data.user)return i["a"].fire({icon:"warning",title:"此信箱已註冊!"}),void(this.isProcessing=!1)})),e.password===e.passwordCheck){t.next=16;break}return i["a"].fire({icon:"warning",title:"密碼與確認密碼不符!"}),e.isProcessing=!1,t.abrupt("return");case 16:c()({method:"post",url:"http://localhost:3000/apis/users/register",data:{name:e.name,email:e.email,password:e.password}}).then((function(t){return console.log(t),localStorage.setItem("token",t.token),localStorage.setItem("username",e.name),e.$bus.$emit("logged","User logged"),e.$router.push("/"),console.log(t)})),e.isProcessing=!1,t.next=23;break;case 20:t.prev=20,t.t0=t["catch"](0),console.log(t.t0);case 23:case"end":return t.stop()}}),t,null,[[0,20]])})))()}}},p=m,u=a("2877"),d=Object(u["a"])(p,s,r,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d338e.d4380cd7.js.map