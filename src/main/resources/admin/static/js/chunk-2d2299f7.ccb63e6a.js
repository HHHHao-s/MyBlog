(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2299f7"],{ddde:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-form",{ref:"profileForm",attrs:{"label-position":"top",model:e.user,size:"small"}},[s("el-form-item",{attrs:{label:"用户名：",prop:"username"}},[s("el-input",{model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),s("el-form-item",{attrs:{label:"昵称：",prop:"nickname"}},[s("el-input",{model:{value:e.user.nickname,callback:function(t){e.$set(e.user,"nickname",t)},expression:"user.nickname"}})],1),s("el-form-item",{attrs:{label:"邮箱：",prop:"email"}},[s("el-input",{attrs:{type:"email"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),s("el-form-item",{attrs:{label:"个人描述：",prop:"description"}},[s("el-input",{attrs:{rows:5,type:"textarea"},model:{value:e.user.description,callback:function(t){e.$set(e.user,"description",t)},expression:"user.description"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.updateProfile}},[e._v("保 存")])],1)],1)],1)},a=[],n=s("5530"),l=s("c24f"),i=s("ed08"),o={name:"RProfile",data:function(){return{user:{}}},created:function(){this.user=Object(i["a"])(this.$store.getters.user)},methods:{updateProfile:function(){var e=this,t=Object(n["a"])({},this.user);delete t.avatar,Object(l["f"])(t).then((function(t){e.$message.success(t.message),e.$store.dispatch("user/setInfo",t.data)}))}}},u=o,c=s("2877"),m=Object(c["a"])(u,r,a,!1,null,null,null);t["default"]=m.exports}}]);