(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52cf8418"],{"09f2":function(t,n,e){"use strict";e("22d6")},"22d6":function(t,n,e){},"5a39":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[0===t.logList.length?e("v-empty-data",{staticStyle:{width:"20%"}}):t._e(),t._l(t.logList,(function(n){return e("div",{key:n.id,staticClass:"item"},[e("div",{staticClass:"info clearfix"},[e("span",{staticClass:"left"},[e("i",{staticClass:"el-icon-s-operation"}),t._v(" "+t._s(t.getType(n.type))+" ")]),e("span",{staticClass:"center"},[e("el-popover",{attrs:{placement:"top",trigger:"click",content:t.ipLocation||n.ipAddress,width:"300"},on:{show:function(e){return t.getIpLocation(n.ipAddress)}}},[e("span",{attrs:{slot:"reference"},slot:"reference"},[e("i",{staticClass:"el-icon-location-outline"}),t._v(" "+t._s(n.ipAddress)+" ")])])],1),e("span",{staticClass:"right"},[e("i",{staticClass:"el-icon-date"}),t._v(" "+t._s(n.createTime)+" ")])]),e("div",{staticClass:"content"},[e("el-popover",{attrs:{placement:"top-start",trigger:"hover",content:n.content,width:"420"}},[e("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(n.content))])])],1)])}))],2)},i=[],o=(e("d3b7"),e("3ca3"),e("ddb0"),e("99af"),e("b775"));function c(t){var n="http://ip-api.com/json/".concat(t);return o["a"].jsonp(n,{lang:"zh-CN"})}var a={name:"LogList",components:{"v-empty-data":function(){return e.e("chunk-2752c4d3").then(e.bind(null,"4388"))}},props:{logList:{type:Array,required:!0}},data:function(){return{logTypes:{COMMON:"普通操作",LOGGED_IN:"用户登入",LOGGED_OUT:"用户登出",LOGIN_FAILED:"登入失败",PASSWORD_UPDATED:"密码更新",PROFILE_UPDATED:"资料更新",BLOG_PUBLISHED:"文章发表",BLOG_EDITED:"文章编辑",BLOG_DELETED:"文章删除",OPTION_UPDATE:"设置更新"},ipLocation:""}},methods:{setData:function(t){this.logList=t},getType:function(t){return this.logTypes[t]||this.logTypes.COMMON},getIpLocation:function(t){var n=this;c(t).then((function(e){"fail"===e.status?n.ipLocation=t:n.ipLocation="".concat(e.country," ").concat(e.regionName," ").concat(e.city," ").concat(e.isp)})).catch((function(t){console.error(t)}))}}},r=a,l=(e("e684"),e("09f2"),e("2877")),p=Object(l["a"])(r,s,i,!1,null,"27ba0e3d",null);n["default"]=p.exports},e684:function(t,n,e){"use strict";e("f341")},f341:function(t,n,e){}}]);