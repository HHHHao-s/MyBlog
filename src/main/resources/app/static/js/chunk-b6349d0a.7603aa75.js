(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6349d0a"],{"260c":function(t,e,n){},"3ed7":function(t,e,n){},"504d":function(t,e,n){"use strict";n("260c")},"864d":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return m}));var o=n("b775"),c=n("ed08");const s="/api/app";function i(t){return Object(o["a"])({url:s+"/blog/list",method:"post",data:t})}function r(){return Object(o["a"])({url:s+"/blog/list/achievement",method:"get"})}function l(t){return Object(o["a"])({url:`${s}/blog/content/${t}`,method:"get"})}function a(t){return Object(o["a"])({url:s+"/comment/listr",method:"post",headers:{"Content-Type":"multipart/form-data"},data:Object(c["b"])(t)})}function m(t){return Object(o["a"])({url:s+"/comment/publish",method:"post",data:t})}},c3ff:function(t,e,n){"use strict";n("3ed7")},fd3f:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[e("el-row",{attrs:{type:"flex",justify:"center"}},[e("el-col",{attrs:{sm:13,xs:22}},[e("div",{staticClass:"blog",attrs:{id:"blog"}},[e("div",{staticClass:"summary",domProps:{innerHTML:t._s(t.blog.summary)}}),e("div",{staticClass:"content",attrs:{id:"post-content"},domProps:{innerHTML:t._s(t.blog.formatContent)}}),e("div",{attrs:{id:"post-img-viewer"}},[e("el-image",{staticStyle:{display:"none"},attrs:{src:t.curImg,"preview-src-list":t.imgList}})],1),e("el-divider",{attrs:{"content-position":"center"}},[t._v("END")]),"UNALLOWED"!==t.blog.allowComment?e("div",[e("v-comment",{ref:"comment",attrs:{"blog-id":t.blog.id,"comment-num":t.commentAll,"comment-list":t.commentList},on:{"update:blogId":function(e){return t.$set(t.blog,"id",e)},"update:blog-id":function(e){return t.$set(t.blog,"id",e)},"update:commentNum":function(e){t.commentAll=e},"update:comment-num":function(e){t.commentAll=e},"update:commentList":function(e){t.commentList=e},"update:comment-list":function(e){t.commentList=e},doSend:t.publishComment}}),e("div",{staticStyle:{"text-align":"center"}},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.commentTotal,"page-size":7,"current-page":t.commentCurrentPage},on:{"update:currentPage":function(e){t.commentCurrentPage=e},"update:current-page":function(e){t.commentCurrentPage=e},"current-change":function(e){return t.listComments(!0)}}})],1)],1):t._e()],1)]),e("el-col",{staticClass:"hidden-sm-and-down",attrs:{sm:5}},[e("el-tabs",{class:["profile",t.profileSticky?"sticky":""],attrs:{stretch:!0}},[e("el-tab-pane",{attrs:{label:"文章目录"}},[e("div",{attrs:{id:"post-toc"}})]),e("el-tab-pane",{attrs:{label:"站点概览"}},[e("v-profile")],1)],1)],1)],1),e("el-backtop")],1)},c=[],s=(n("14d9"),n("864d")),i=n("ed08"),r={name:"Blog",components:{"v-profile":()=>n.e("chunk-435ea24a").then(n.bind(null,"d918")),"v-comment":()=>n.e("chunk-7171646c").then(n.bind(null,"c9a5"))},data(){return{contentTop:window.screenTop,profileSticky:!1,blog:{},imgList:[],curImg:"",isViewImg:!1,currentSelectedToc:void 0,isScrollChangeToc:!1,commentList:[],commentTotal:0,commentCurrentPage:1,commentAll:0,scrollEventToBind:[]}},computed:{categoryName:function(){return this.blog&&this.blog.category&&this.blog.category.name?this.blog.category.name:"未分类"}},created(){this.getBlog(this.$route.params.url)},mounted:function(){this.$nextTick(()=>{const t=this;function e(){const e=document.documentElement.scrollTop||document.body.scrollTop;t.profileSticky=e>=t.contentTop}this.scrollEventToBind.push(e),document.addEventListener("scroll",e)})},updated(){this.contentTop=this.$getContentTop()},destroyed(){for(const t of this.scrollEventToBind)document.removeEventListener("scroll",t);this.$parent.$refs.slidey&&this.$parent.$refs.slidey.setBlogData(null)},methods:{getCategoryName(t){return t?t.name:"未分类"},getBlog(t){Object(s["a"])(t).then(t=>{this.blog=t.data,this.$nextTick((function(){this.isViewImg=!0,this.initImgViewer(),this.generateToc(),this.$highlightCode(),"UNALLOWED"!==this.blog.allowComment&&this.listComments(),this.$parent.$refs.slidey&&this.$parent.$refs.slidey.setBlogData(this.blog)}))})},initImgViewer(){const t=document.querySelectorAll("#blog .content p img");if(0===t.length)return;const e=document.querySelector("#post-img-viewer .el-image");for(const n of t.values())this.imgList.push(n.src),n.onclick=function(t){this.curImg=n.src;const o=e.querySelector("img");o&&o.click()}.bind(this)},generateToc(){const t=document.getElementById("post-toc"),e=document.querySelectorAll("#post-content > *");let n=0;const o=[];for(const i of e){const e=(i.nodeName||"").toLocaleLowerCase();if(!/h[1-9]/i.test(e))continue;const c=i.cloneNode(!0),s=c.querySelector("a");o.push(s.id),c.setAttribute("data-id",s.id),c.className="toc-item",0===n&&(this.currentSelectedToc=c,c.className="toc-item selected"),c.onclick=()=>{this.isScrollChangeToc=!0,document.getElementById(s.id).scrollIntoView({behavior:"smooth"}),this.currentSelectedToc.className="toc-item",this.currentSelectedToc=c,this.currentSelectedToc.className="toc-item selected",setTimeout(()=>{this.isScrollChangeToc=!1},300)},c.removeChild(s),t.appendChild(c),n++}const c=this;function s(){c.isScrollChangeToc||(c.isScrollChangeToc=!0,setTimeout(()=>{try{for(let t=0;t<o.length;t++)if(document.getElementById(o[t]).getBoundingClientRect().top>=1){const e=t>0?t-1:0,n=document.querySelector(`#post-toc > .toc-item[data-id="${o[e]}"]`);c.currentSelectedToc.className="toc-item",c.currentSelectedToc=n,c.currentSelectedToc.className="toc-item selected";break}}finally{c.isScrollChangeToc=!1}},300))}n>0?(this.scrollEventToBind.push(s),document.addEventListener("scroll",s)):t.parentNode.innerHTML="<div>暂无数据</div>"},publishComment(t){t.author?t.email&&/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(t.email)?t.content?Object(s["e"])(t).then(e=>{this.$refs.comment.doSendSucceed(),this.$refs.comment.clearReply(t.parentId),this.$message.success(e.message),this.listComments()}):this.$message.warning("请输入评论内容"):this.$message.warning("请输入有效的邮箱地址"):this.$message.warning("请输入昵称")},covertCommentData(t,e,n,o){if(e&&0!==e.length)for(const c of e){const e=Object(i["a"])(c);delete e.children;const s=Object(i["a"])(e);1===n?(e.childrenList=[],o.push(e)):(e.parent=t,o[o.length-1].childrenList.push(e)),this.covertCommentData(s,c.children,n+1,o)}},listComments(t=!1){const e={bid:this.blog.id,cur:this.commentCurrentPage};Object(s["d"])(e).then(e=>{const n=[];try{this.covertCommentData({},e.data.list,1,n)}catch(o){console.error(o)}this.commentList=n,this.commentTotal=e.data.total,this.commentAll=e.data.all,t&&this.$refs.comment.moveToHead()})}}},l=r,a=(n("504d"),n("c3ff"),n("2877")),m=Object(a["a"])(l,o,c,!1,null,"77692d06",null);e["default"]=m.exports}}]);