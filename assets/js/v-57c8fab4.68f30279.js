"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7215],{4590:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-57c8fab4",path:"/articles/Node/%E6%99%AE%E9%80%9A%E4%B8%AD%E9%97%B4%E4%BB%B6HTTP%E6%9C%8D%E5%8A%A1.html",title:"普通中间件式HTTP服务实现",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"前言",slug:"前言",children:[]},{level:2,title:"必要条件",slug:"必要条件",children:[]},{level:2,title:"最简实现",slug:"最简实现",children:[]}],filePathRelative:"articles/Node/普通中间件HTTP服务.md",git:{}}},8889:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var p=a(6252);const t=(0,p.uE)('<h1 id="普通中间件式http服务实现" tabindex="-1"><a class="header-anchor" href="#普通中间件式http服务实现" aria-hidden="true">#</a> 普通中间件式HTTP服务实现</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>用过<code>Express.js</code>和<code>Koa.js</code>的人会发现使用方式很类似，也是基于<code>中间件</code>的理念去实现Web服务。</p><p>直接以<code>Express.js</code>回调式的中间件服务比较容易理解。再基于回调式的中间件服务接入<code>Koa.js</code>的中间件引擎去处理回调嵌套的处理。</p><p>这一章主要以原生的Node.js实现纯回调的中间件HTTP服务。</p><h2 id="必要条件" tabindex="-1"><a class="header-anchor" href="#必要条件" aria-hidden="true">#</a> 必要条件</h2><ul><li>内置中间件队列</li><li>中间件遍历机制</li><li>异常处理机制</li></ul><h2 id="最简实现" tabindex="-1"><a class="header-anchor" href="#最简实现" aria-hidden="true">#</a> 最简实现</h2><ul><li>demo源码</li></ul>',9),e={href:"https://github.com/chenshenhai/koajs-design-note/tree/master/demo/chapter-01-06",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("https://github.com/chenshenhai/koajs-design-note/tree/master/demo/chapter-01-06"),o=(0,p.uE)('<ul><li>服务类封装</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> Emitter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;events&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">WebServer</span> <span class="token keyword">extends</span> <span class="token class-name">Emitter</span> <span class="token punctuation">{</span>\n  \n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>middleware <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 服务事件监听\n   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">args</span> \n   */</span>\n  <span class="token function">listen</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 注册使用中间件\n   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span> \n   */</span>\n  <span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> fn <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>middleware<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 中间件总回调方法\n   */</span>\n  <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">listeners</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onerror<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">const</span> <span class="token function-variable function">handleRequest</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> context <span class="token operator">=</span> that<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>middleware<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cb<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">try</span> <span class="token punctuation">{</span>\n          <span class="token function">cb</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          that<span class="token punctuation">.</span><span class="token function">onerror</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>idx <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>middleware<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> res<span class="token punctuation">.</span>end <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> handleRequest<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 异常处理监听\n   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>EndOfStreamError<span class="token punctuation">}</span></span> <span class="token parameter">err</span> \n   */</span>\n  <span class="token function">onerror</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/**\n   * 创建通用上下文\n   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">req</span> \n   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">res</span> \n   */</span>\n  <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> context <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    context<span class="token punctuation">.</span>req <span class="token operator">=</span> req<span class="token punctuation">;</span>\n    context<span class="token punctuation">.</span>res <span class="token operator">=</span> res<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> context<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> WebServer<span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br></div></div><ul><li>服务使用</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> WebServer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3001</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">ctx</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  ctx<span class="token punctuation">.</span>res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;p&gt;line 1&lt;/p&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">ctx</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  ctx<span class="token punctuation">.</span>res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;p&gt;line 2&lt;/p&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">ctx</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  ctx<span class="token punctuation">.</span>res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;p&gt;line 3&lt;/p&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">the web server is starting at port </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>',4),l={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("p",null,[(0,p._)("a",e,[c,(0,p.Wm)(a)])]),o],64)}}}}]);