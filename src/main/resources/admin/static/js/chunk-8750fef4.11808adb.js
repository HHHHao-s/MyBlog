(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8750fef4"],{5905:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-log-list",{attrs:{"log-list":t.logList}})},c=[],o=(e("d3b7"),e("3ca3"),e("ddb0"),e("8916")),i={name:"Log",components:{"v-log-list":function(){return e.e("chunk-52cf8418").then(e.bind(null,"5a39"))}},data:function(){return{logList:[],searchParams:{current:1,pageSize:5}}},created:function(){this.getLogList()},methods:{getLogList:function(){var t=this;Object(o["b"])(this.searchParams).then((function(n){t.logList=n.data.list}))}}},r=i,s=e("2877"),u=Object(s["a"])(r,a,c,!1,null,"30e2ef03",null);n["default"]=u.exports},8916:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return i}));var a=e("b775"),c="/api/admin/log";function o(t){return Object(a["a"])({url:"".concat(c,"/list"),method:"post",data:t})}function i(t){return Object(a["a"])({url:"".concat(c,"/delete"),method:"delete",data:t})}}}]);