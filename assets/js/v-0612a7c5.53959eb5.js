"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4080],{5411:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-0612a7c5",path:"/articles/Vue/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3Vue%E7%9A%84%E6%8C%87%E4%BB%A4%E7%B3%BB%E7%BB%9F.html",title:"深入理解 Vue 的指令系统",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"指令是如何工作的？",slug:"指令是如何工作的",children:[]},{level:2,title:"自定义指令",slug:"自定义指令",children:[{level:3,title:"自定义全局指令",slug:"自定义全局指令",children:[]},{level:3,title:"自定义局部指令",slug:"自定义局部指令",children:[]}]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"articles/Vue/深入理解Vue的指令系统.md",git:{}}},12:(n,s,a)=>{a.r(s),a.d(s,{default:()=>h});var t=a(6252);const p=(0,t.uE)('<h1 id="深入理解-vue-的指令系统" tabindex="-1"><a class="header-anchor" href="#深入理解-vue-的指令系统" aria-hidden="true">#</a> 深入理解 Vue 的指令系统</h1><p>Vue 作为一款 MVVM 框架，其双向绑定实际上是：<code>JS 数据变化=》DOM 变化</code>，这快的变化大家都知道了，主要是通过劫持对象属性的<code>Object.defindProprotys</code>（Vue3 中改为 Proxy）。 那从 <code>DOM 变化=》JS 数据变化</code>的过程是怎么样的呢？这就是今天研究的内容————<strong>Vue 的指令系统</strong>。</p><h2 id="指令是如何工作的" tabindex="-1"><a class="header-anchor" href="#指令是如何工作的" aria-hidden="true">#</a> 指令是如何工作的？</h2>',3),e=(0,t.Uk)("比如常见的 v-modal、v-bind、v-on、v-if、v-for 等。不同的指令有不同的效果，具体可以去官网查看"),o={href:"https://cn.vuejs.org/v2/guide/syntax.html#%E6%8C%87%E4%BB%A4",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("Vue 指令"),l=(0,t.Uk)("从"),u=(0,t.Uk)("Vue2.x 的双向绑定原理及实现"),i=(0,t.Uk)("中可以知道，其实是获取每个元素的属性，然后找出带有"),r=(0,t._)("code",null,"v-",-1),k=(0,t.Uk)("标示的指令进行解析，将对应的属性或方法设置上去。"),d=(0,t.uE)('<p>对应到代码，其实也很简单。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>\n    let app = document.getElementById(&#39;app&#39;);\n    let child = app.children;\n    [...child].forEach(el =&gt; {\n        el.style.color = el.attributes[&#39;v-color&#39;].value\n    });\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a> 自定义指令</h2><p>Vue 除了提供内置指令外，为了更大的扩展性，还提供了自定义指令的功能，让使用这根据实际需要开发自己需要的指令。</p><p>当然也分全局指令和局部指令，但是他们所需传递的参数是一样的。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> Opt <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 指令被绑定到元素时调用</span>\n  <span class="token function-variable function">bind</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 元素插入父节点时调用</span>\n  <span class="token function-variable function">inserted</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// VNode 更新时（前）调用</span>\n  <span class="token function-variable function">update</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// VNode 更新后调用</span>\n  <span class="token function-variable function">componentUpdated</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 指令和元素解绑时调用</span>\n  <span class="token function-variable function">unbind</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>参数</p><ul><li>el：指令所绑定的元素</li><li>binding <ul><li><code>name</code>：指令名，不包括 <code>v-</code> 前缀。</li><li><code>value</code>：指令的绑定值，例如：<code>v-my-directive=&quot;1 + 1&quot;</code> 中，绑定值为 <code>2</code>。</li><li><code>oldValue</code>：指令绑定的前一个值，仅在 <code>update</code> 和 <code>componentUpdated</code> 钩子中可用。无论值是否改变都可用。</li><li><code>expression</code>：字符串形式的指令表达式。例如 <code>v-my-directive=&quot;1 + 1&quot;</code> 中，表达式为 <code>&quot;1 + 1&quot;</code>。</li><li><code>arg</code>：传给指令的参数，可选。例如 <code>v-my-directive:foo</code> 中，参数为 <code>&quot;foo&quot;</code>。</li><li><code>modifiers</code>：一个包含修饰符的对象。例如：<code>v-my-directive.foo.bar</code> 中，修饰符对象为 <code>{ foo: true, bar: true }</code>。</li></ul></li><li>Vnode：Vue 的虚拟节点</li></ul><h3 id="自定义全局指令" tabindex="-1"><a class="header-anchor" href="#自定义全局指令" aria-hidden="true">#</a> 自定义全局指令</h3><p>定义全局指令的话，范围是全局可用的。</p><p>比如最官方的示例：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 注册一个全局自定义指令 `v-focus`</span>\nVue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&quot;focus&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 当被绑定的元素插入到 DOM 中时……</span>\n  <span class="token function-variable function">inserted</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 聚焦元素</span>\n    el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="自定义局部指令" tabindex="-1"><a class="header-anchor" href="#自定义局部指令" aria-hidden="true">#</a> 自定义局部指令</h3><p>实现一个<code>v-blink</code>指令，使用在元素上就会有一闪一闪的效果.</p><p>HTML：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-blink</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>700<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello Wrold<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>JavaScript：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    directives<span class="token operator">:</span> <span class="token punctuation">{</span>\n        blink<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n                el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>visibility <span class="token operator">=</span> el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>visibility <span class="token operator">===</span> <span class="token string">&#39;inherit&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;hidden&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;inherit&#39;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> binding<span class="token punctuation">.</span>expression<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',19),b={href:"https://segmentfault.com/a/1190000018767046",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("vue 自定义指令--directive"),v={href:"https://cn.vuejs.org/v2/guide/custom-directive.html",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Uk)("Vue自定义指令"),h={render:function(n,s){const a=(0,t.up)("OutboundLink"),h=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[e,(0,t._)("a",o,[c,(0,t.Wm)(a)])]),(0,t._)("p",null,[l,(0,t.Wm)(h,{to:"/articles/Vue/Vue2.x%E7%9A%84%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E5%8E%9F%E7%90%86%E5%8F%8A%E5%AE%9E%E7%8E%B0.html"},{default:(0,t.w5)((()=>[u])),_:1}),i,r,k]),d,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",b,[m,(0,t.Wm)(a)])]),(0,t._)("li",null,[(0,t._)("a",v,[g,(0,t.Wm)(a)])])])],64)}}}}]);