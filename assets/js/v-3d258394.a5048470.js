"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6076],{2218:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-3d258394",path:"/articles/Node/NodeJS%E4%B8%ADHttp%E6%A8%A1%E5%9D%97.html",title:"Node.js原生http模块",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"前言",slug:"前言",children:[]},{level:2,title:"http模块使用",slug:"http模块使用",children:[]},{level:2,title:"http服务构成",slug:"http服务构成",children:[{level:3,title:"服务容器",slug:"服务容器",children:[]},{level:3,title:"服务回调 (内容)",slug:"服务回调-内容",children:[]},{level:3,title:"请求 req",slug:"请求-req",children:[]},{level:3,title:"响应 res",slug:"响应-res",children:[]}]},{level:2,title:"后续",slug:"后续",children:[]}],filePathRelative:"articles/Node/NodeJS中Http模块.md",git:{}}},8388:(n,s,a)=>{a.r(s),a.d(s,{default:()=>f});var t=a(6252);const p=(0,t.uE)('<h1 id="node-js原生http模块" tabindex="-1"><a class="header-anchor" href="#node-js原生http模块" aria-hidden="true">#</a> Node.js原生http模块</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>Koa.js 是基于中间件模式的HTTP服务框架，底层原理是离不开Node.js的<code>http</code> 原生模块。</p><h2 id="http模块使用" tabindex="-1"><a class="header-anchor" href="#http模块使用" aria-hidden="true">#</a> http模块使用</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3001</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">router</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">this page url = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">the server is started at port </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="http服务构成" tabindex="-1"><a class="header-anchor" href="#http服务构成" aria-hidden="true">#</a> http服务构成</h2><h3 id="服务容器" tabindex="-1"><a class="header-anchor" href="#服务容器" aria-hidden="true">#</a> 服务容器</h3><p>这里的服务容器，是整个HTTP服务的基石，跟<code>apache</code>和<code>nginx</code>提供的能力是一致的。</p><ul><li>建立了通信连接</li><li>指定了通信端口</li><li>提供了可自定内容服务容器，也就是服务的回调函数的容器</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3001</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// TODO 容器内容</span>\n    <span class="token comment">// TODO 服务回调内容</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">the server is started at port </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="服务回调-内容" tabindex="-1"><a class="header-anchor" href="#服务回调-内容" aria-hidden="true">#</a> 服务回调 (内容)</h3><p>服务回调，可以理解成服务内容，主要提供服务的功能。</p><ul><li>解析服务的请求 <code>req</code></li><li>对请求内容作出响应 <code>res</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">router</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">this page url = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="请求-req" tabindex="-1"><a class="header-anchor" href="#请求-req" aria-hidden="true">#</a> 请求 req</h3><p>是服务回调中的第一个参数，主要是提供了HTTP请求<code>request</code>的内容和操作内容的方法。</p><p>更多操作建议查看 Node.js官方文档</p>',17),e={href:"https://nodejs.org/dist/latest-v8.x/docs/api/http.html",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("https://nodejs.org/dist/latest-v8.x/docs/api/http.html"),c={href:"https://nodejs.org/dist/latest-v10.x/docs/api/http.html",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("https://nodejs.org/dist/latest-v10.x/docs/api/http.html"),u=(0,t._)("h3",{id:"响应-res",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#响应-res","aria-hidden":"true"},"#"),(0,t.Uk)(" 响应 res")],-1),r=(0,t._)("p",null,[(0,t.Uk)("是服务回调中的第二个参数，主要是提供了HTTP响应"),(0,t._)("code",null,"response"),(0,t.Uk)("的内容和操作内容的方法。")],-1),i=(0,t._)("p",null,[(0,t.Uk)("注意：如果请求结束，一定要执行响应 "),(0,t._)("code",null,"res.end()"),(0,t.Uk)("，要不然请求会一直等待阻塞，直至连接断掉页面崩溃。")],-1),k=(0,t._)("p",null,"更多操作建议查看 Node.js官方文档",-1),d={href:"https://nodejs.org/dist/latest-v8.x/docs/api/http.html",target:"_blank",rel:"noopener noreferrer"},b=(0,t.Uk)("https://nodejs.org/dist/latest-v8.x/docs/api/http.html"),h={href:"https://nodejs.org/dist/latest-v10.x/docs/api/http.html",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("https://nodejs.org/dist/latest-v10.x/docs/api/http.html"),g=(0,t.uE)('<h2 id="后续" tabindex="-1"><a class="header-anchor" href="#后续" aria-hidden="true">#</a> 后续</h2><p>通过以上的描述，主要HTTP服务内容是在 “<code>服务回调</code>” 中处理的，那我们来根据不同连接拆分一下，就形成了路由<code>router</code>，根据路由内容的拆分，就形成了控制器 <code>controller</code>。参考代码如下。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3001</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 控制器</span>\n<span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">index</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;This is index page&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">home</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;This is home page&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">_404</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;404 Not Found&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 路由器</span>\n<span class="token keyword">const</span> <span class="token function-variable function">router</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span> req<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    controller<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> req<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    controller<span class="token punctuation">.</span><span class="token function">home</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    controller<span class="token punctuation">.</span><span class="token function">_404</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 服务</span>\n<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">the server is started at port </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>',3),f={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[(0,t._)("a",e,[o,(0,t.Wm)(a)])]),(0,t._)("p",null,[(0,t._)("a",c,[l,(0,t.Wm)(a)])]),u,r,i,k,(0,t._)("p",null,[(0,t._)("a",d,[b,(0,t.Wm)(a)])]),(0,t._)("p",null,[(0,t._)("a",h,[m,(0,t.Wm)(a)])]),g],64)}}}}]);