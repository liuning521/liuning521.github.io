(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{572:function(a,t,s){"use strict";s.r(t);var r=s(17),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"创建uniapp-工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建uniapp-工程"}},[a._v("#")]),a._v(" 创建uniapp 工程")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("使用HbuilderX直接创建")])]),a._v(" "),s("li",[s("p",[a._v("使用vue-cli创建")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("vue create -p dcloudio/uni-preset-vue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("project-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])])])]),a._v(" "),s("h2",{attrs:{id:"界面配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#界面配置"}},[a._v("#")]),a._v(" 界面配置")]),a._v(" "),s("ul",[s("li",[a._v("界面配置在pages文件目录下")]),a._v(" "),s("li",[a._v("如果想要实现跳转要在 page.json中配置")]),a._v(" "),s("li",[a._v("跳转菜单在page.json中的tabBar属性中配置（菜单最多5个，最少2两个）")])]),a._v(" "),s("h2",{attrs:{id:"uniapp语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uniapp语法"}},[a._v("#")]),a._v(" uniapp语法")]),a._v(" "),s("h3",{attrs:{id:"基础组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础组件"}},[a._v("#")]),a._v(" 基础组件")]),a._v(" "),s("ul",[s("li",[a._v("view 对应 div")]),a._v(" "),s("li",[a._v("text 对应 span")]),a._v(" "),s("li",[a._v("image 对应 img")]),a._v(" "),s("li",[a._v("navigator 对应 a")])]),a._v(" "),s("h3",{attrs:{id:"应用生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用生命周期"}},[a._v("#")]),a._v(" 应用生命周期")]),a._v(" "),s("ul",[s("li",[a._v("onLauch 应用初始化完成触发,全局只会触发一次")]),a._v(" "),s("li",[a._v("onShow 应用启动，或从后台进入前台触发")]),a._v(" "),s("li",[a._v("onHide 应用从前台进入到后台触发")]),a._v(" "),s("li",[a._v("onError 应用报错时触发")])]),a._v(" "),s("h3",{attrs:{id:"页面生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面生命周期"}},[a._v("#")]),a._v(" 页面生命周期")]),a._v(" "),s("ul",[s("li",[a._v("onLoad 监听页面加载，接受上个页面传递的参数 类似created")]),a._v(" "),s("li",[a._v("onShow 监听页面显示，只要页面出现就会触发")]),a._v(" "),s("li",[a._v("onReady 监听页面初次渲染完成 类似mounted")]),a._v(" "),s("li",[a._v("onHide 监听页面隐藏")]),a._v(" "),s("li",[a._v("onUnLoad 监听页面卸载")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[a._v("注意点： onUnLoad的钩子的触发时机为从A界面通过动态路由跳转的方式跳转到B界面时A界面触发 onHide 钩子，当从B界面点击返回按钮返回到A界面的时候B界面触发onUnLoad 钩子")]),a._v(" "),s("p",[a._v("从B返回到A界面的时候 A界面只会触发onShow钩子")])]),s("p",[s("strong",[a._v("uniapp完整的支持vue的生命周期")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("beforeCreate "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" onLoad "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" onShow "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" created "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" beforeMount "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" onReady "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" mounted\n")])])]),s("h3",{attrs:{id:"路由跳转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由跳转"}},[a._v("#")]),a._v(" 路由跳转")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("通过组件跳转")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("navigator")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("url")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("组件路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("组件跳转"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("navigator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("通过路由API进行跳转")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("参照官网 https"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("uniapp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dcloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("api"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("html\n")])])])])]),a._v(" "),s("h3",{attrs:{id:"布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[a._v("#")]),a._v(" 布局")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("px")])]),a._v(" "),s("li",[s("p",[a._v("rpx")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 换算")]),a._v("\n\n设计稿 1px "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 设计稿基准宽度 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 框架样式 1rpx "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 750rpx \n\n元素实际宽度（rpx） "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("750")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" 元素在设计稿中的宽度 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 设计稿基准宽度\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[a._v("rpx不支持横竖屏的动态计算")])])])]),a._v(" "),s("h3",{attrs:{id:"样式导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式导入"}},[a._v("#")]),a._v(" 样式导入")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("@"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"外部样式地址"')]),a._v("\n")])])]),s("h3",{attrs:{id:"标准js和浏览器js的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准js和浏览器js的区别"}},[a._v("#")]),a._v(" 标准js和浏览器js的区别")]),a._v(" "),s("ul",[s("li",[a._v("非H5端不支持window、document等浏览器的js API")]),a._v(" "),s("li",[a._v("所有平台都支持标准js")])])])}),[],!1,null,null,null);t.default=e.exports}}]);