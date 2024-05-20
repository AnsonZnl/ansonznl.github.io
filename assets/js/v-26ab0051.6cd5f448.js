"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[239],{5659:(e,r,t)=>{t.r(r),t.d(r,{data:()=>l});const l={key:"v-26ab0051",path:"/articles/Vue/Vue-Router%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90.html",title:"Vue-router 原理解析",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"两种模式：hash 模式和 history 模式",slug:"两种模式-hash-模式和-history-模式",children:[]},{level:2,title:"路由注册",slug:"路由注册",children:[]},{level:2,title:"VueRouter 对象",slug:"vuerouter-对象",children:[]},{level:2,title:"总结：",slug:"总结",children:[]}],filePathRelative:"articles/Vue/Vue-Router原理解析.md",git:{}}},9011:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var l=t(6252);const i=(0,l.uE)('<h1 id="vue-router-原理解析" tabindex="-1"><a class="header-anchor" href="#vue-router-原理解析" aria-hidden="true">#</a> Vue-router 原理解析</h1><p>参考：</p><ul><li>Vue-Router 官网：https://router.vuejs.org/zh/</li><li>Vue 技术揭秘/Vue-Router：https://ustbhuangyi.github.io/vue-analysis/v2/vue-router/</li></ul><p>插件机制：实现一个 install 方法，接受一个 Vue 实例。</p><h2 id="两种模式-hash-模式和-history-模式" tabindex="-1"><a class="header-anchor" href="#两种模式-hash-模式和-history-模式" aria-hidden="true">#</a> 两种模式：hash 模式和 history 模式</h2><p><strong>hash 模式</strong></p><ol><li>url 后带#的字符，请求时候不会被包含在 http 请求中，每次改变 hash 也不会加载页面</li><li>hash 改变会触发 hashchange 事件</li><li>hash 的变化会浏览器记录，浏览器的前进后退都能用。</li><li>能兼容到 IE8</li></ol><p><strong>history 模式</strong></p>',8),a=(0,l._)("li",null,"路径上会带上整个链接，但是需要后台做处理，不然会返回 404",-1),o=(0,l._)("li",null,"通过监听 window.history.pushState()和.replaceState()改变 url，渲染相对应的组件",-1),u=(0,l._)("li",null,"兼容到 IE10",-1),h=(0,l.Uk)("无惧前进和后退，就怕 F5 刷新，可能会出现 404，所以需要后端配合，使用 Koa 的中间件 connect-history-api-fallback——"),s={href:"https://www.codeprj.com/blog/ab14d31.html",target:"_blank",rel:"noopener noreferrer"},n=(0,l.Uk)("参考链接"),d=(0,l.Uk)("，可以配置 nginx 返回一个 index.html。"),p=(0,l.uE)('<p><strong>abstract</strong> 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式。</p><h2 id="路由注册" tabindex="-1"><a class="header-anchor" href="#路由注册" aria-hidden="true">#</a> 路由注册</h2><p>通过 Vue.use 的方式执行 vue-router 的 install 方方法，并将 Vue 实例传入进去。</p><p>通过 mixin 的方式，在 beforeCreate 和 destroy 中将逻辑混入在每一个组件上</p><p>监听路由改变使用的是 Vue 的双向绑定 然后给 Vue 原型上设置<code>$router</code>和<code>$route</code>两个属性，方便访问。</p><p>接着又通过 Vue.component 定义全局的<code>&lt;router-link&gt;</code>和<code>&lt;router-view&gt;</code>组件 <code>this.$router</code>和<code>this.$route</code>的区别</p><p>this.$router 相当于一个全局的路由器对象，包含了很多属性和对象（比如 history 对象），任何页面都可以调用其 push(), replace(), go() 等方法。</p><p>this.$route 表示当前路由对象，每一个路由都会有一个 route 对象，是一个局部的对象，可以获取对应的 name, path, params, query 等属性。</p><h2 id="vuerouter-对象" tabindex="-1"><a class="header-anchor" href="#vuerouter-对象" aria-hidden="true">#</a> VueRouter 对象</h2><p>在 beforeCreate 是进行 init</p><p>Mathcer 方法 将组件的名字和对应 url 一一匹配</p><p>路径切换 通过 URL 匹配对应的组件</p><p>完整的导航解析流程</p><ul><li>导航被触发。</li><li>在失活的组件里调用 beforeRouteLeave 守卫。</li><li>调用全局的 beforeEach 守卫。</li><li>在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。</li><li>在路由配置里调用 beforeEnter。</li><li>解析异步路由组件。</li><li>在被激活的组件里调用 beforeRouteEnter。</li><li>调用全局的 beforeResolve 守卫 (2.5+)。</li><li>导航被确认。</li><li>调用全局的 afterEach 钩子。</li><li>触发 DOM 更新。</li><li>调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结：</h2><p>路径变化是路由中最重要的功能，我们要记住以下内容：路由始终会维护当前的线路，路由切换的时候会把当前线路切换到目标线路，切换过程中会执行一系列的导航守卫钩子函数，会更改 url，同样也会渲染对应的组件，切换完毕后会把目标线路更新替换当前线路，这样就会作为下一次的路径切换的依据。</p><p><img src="https://user-gold-cdn.xitu.io/2018/10/18/16684f162d3090eb?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="Vue-Router 流程图"></p>',17),c={render:function(e,r){const t=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[i,(0,l._)("ol",null,[a,o,u,(0,l._)("li",null,[h,(0,l._)("a",s,[n,(0,l.Wm)(t)]),d])]),p],64)}}}}]);