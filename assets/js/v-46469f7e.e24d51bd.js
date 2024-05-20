"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6744],{6481:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-46469f7e",path:"/articles/Node/koa%E7%B3%BB%E5%88%97%EF%BC%885%EF%BC%89-%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"知识讲解",slug:"知识讲解",children:[]},{level:2,title:"代码实现",slug:"代码实现",children:[]},{level:2,title:"前端代码",slug:"前端代码",children:[]},{level:2,title:"最后总结",slug:"最后总结",children:[]}],filePathRelative:"articles/Node/koa系列（5）-上传文件.md",git:{}}},1172:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h2 id="知识讲解" tabindex="-1"><a class="header-anchor" href="#知识讲解" aria-hidden="true">#</a> 知识讲解</h2><p>koa2框架是一个基于中间件的框架，也就是说，需要使用到的功能，比如路由（koa-router），日志（koa-logger），都可以找到相应的中间件库，即npm包，然后通过app.use(…)引进来。<br> 本文的主题：实现文件上传就是通过引用相应的中间来实现的。 我查了一下资料，发现可以实现文件上传的中间件有3个，选择其中一个就可以了：</p><ol><li>koa-body</li><li>busboy</li><li>koa-multer</li></ol><p>关于以上三种中间件的差异可以自行网上查资料，这里我选择比较顺眼的koa-body，实用简单。</p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><p>步骤一：下载koa-body npm包</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install koa<span class="token operator">-</span>body <span class="token operator">--</span>save\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>步骤二：在koa项目中引用koa-body中间件</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> koaBody <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">koaBody</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    multipart<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    formidable<span class="token operator">:</span> <span class="token punctuation">{</span>\n        maxFileSize<span class="token operator">:</span> <span class="token number">20010241024</span>    <span class="token comment">// 设置上传文件大小最大限制，默认2M</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>步骤三：使用koa-body中间件后，即可通过ctx.request.files获取上传的文件<br> 提醒：<br> 新版本的koa-body通过ctx.request.files获取上传的文件<br> 旧版本的koa-body通过ctx.request.body.files获取上传的文件<br> 朋友们千万不要入坑哈，本人就入坑过半天。</p><p>步骤四：获取到文件之后，通过fs将文件保存到服务器的指定目录 上传单个文件：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/uploadfile&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 上传单个文件</span>\n  <span class="token keyword">const</span> file <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>files<span class="token punctuation">.</span>file<span class="token punctuation">;</span> <span class="token comment">// 获取上传文件</span>\n  <span class="token comment">// 创建可读流</span>\n  <span class="token keyword">const</span> reader <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;public/upload/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token operator">/</span>$<span class="token punctuation">{</span>file<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token comment">// 创建可写流</span>\n  <span class="token keyword">const</span> upStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 可读流通过管道写入可写流</span>\n  reader<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>upStream<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&quot;上传成功！&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>上传多个文件:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/uploadfiles&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 上传多个文件</span>\n  <span class="token keyword">const</span> files <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>files<span class="token punctuation">.</span>file<span class="token punctuation">;</span> <span class="token comment">// 获取上传文件</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> file <span class="token keyword">of</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 创建可读流</span>\n    <span class="token keyword">const</span> reader <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 获取上传文件扩展名</span>\n    <span class="token keyword">let</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;public/upload/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token operator">/</span>$<span class="token punctuation">{</span>file<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token comment">// 创建可写流</span>\n    <span class="token keyword">const</span> upStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 可读流通过管道写入可写流</span>\n    reader<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>upStream<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n <span class="token keyword">return</span> ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&quot;上传成功！&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="前端代码" tabindex="-1"><a class="header-anchor" href="#前端代码" aria-hidden="true">#</a> 前端代码</h2><p>顺便把前端的代码也附上，前端通过提交表单，把文件发送到你的服务器</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\n <span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">&quot;http://localhost:8080/api/upload&quot;</span> method<span class="token operator">=</span><span class="token string">&quot;post&quot;</span> enctype<span class="token operator">=</span><span class="token string">&quot;multipart/form-data&quot;</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;file&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;file&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;file&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;&quot;</span> multiple<span class="token operator">=</span><span class="token string">&quot;multiple&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;提交&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="最后总结" tabindex="-1"><a class="header-anchor" href="#最后总结" aria-hidden="true">#</a> 最后总结</h2><p>今天在项目中实现文件上传的时候，也一不小心入了一下坑，为什么呢？（请看以上步骤三）<br> 在网上找的大部分资料都是通过ctx.request.body.files来获取上传的文件，这个是旧版本的koa-body的获取文件方法，为了安全考虑，新版本的koa-body采用ctx.request.files来获取文件。<br> 总结原因，以后要学会找官方文档，以官方文档为主，其他文档为辅，这样才对。</p>',19),t={render:function(n,s){return p}}}}]);