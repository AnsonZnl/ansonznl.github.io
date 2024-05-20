"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7028],{5386:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-8d6a9886",path:"/articles/JavaScript/%E5%89%8D%E7%AB%AF%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E7%9A%84%E6%AD%A3%E7%A1%AE%E6%89%93%E5%BC%80%E6%96%B9%E5%BC%8F.html",title:"前端文件下载的正确打开方式",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"a 标签",slug:"a-标签",children:[]},{level:2,title:"window.open",slug:"window-open",children:[]},{level:2,title:"location.href",slug:"location-href",children:[]},{level:2,title:"location.?其他属性",slug:"location-其他属性",children:[]},{level:2,title:"XMLHttpRequest",slug:"xmlhttprequest",children:[{level:3,title:"blob对象",slug:"blob对象",children:[]},{level:3,title:"URL.createObjectURL",slug:"url-createobjecturl",children:[]}]},{level:2,title:"总结",slug:"总结",children:[]}],filePathRelative:"articles/JavaScript/前端文件下载的正确打开方式.md",git:{}}},1694:(n,a,s)=>{s.r(a),s.d(a,{default:()=>u});var e=s(6252);const p=(0,e.uE)('<h1 id="前端文件下载的正确打开方式" tabindex="-1"><a class="header-anchor" href="#前端文件下载的正确打开方式" aria-hidden="true">#</a> 前端文件下载的正确打开方式</h1><h2 id="a-标签" tabindex="-1"><a class="header-anchor" href="#a-标签" aria-hidden="true">#</a> a 标签</h2><p>通过 <code>a</code> 标签的<code>download</code>属性来实现文件下载，这种方式是最简单的，也是我们比较常用的方式，先来看示例代码：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.baidu.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">download</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>baidu.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>下载<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>就上面的这个示例，我们点击下载，发现是跳转到了百度的首页，并没有真的下载文件。</p><p>因为<code>a</code>标签下载只能下载同源的文件，如果是跨域的文件，这里包括图片、音视频等媒体文件，都是预览，也无法下载。</p><p>上面的代码是直接通过书写<code>a</code>标签来实现文件下载，我们也可以通过<code>js</code>来实现，代码如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>\na<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com&#39;</span>\na<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">&#39;baidu.html&#39;</span>\na<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>效果和上面的一样，都是跳转到百度的首页，没有下载文件。</p><p>这里的重点是<code>a</code>标签的<code>download</code>属性，这个属性是HTML5新增的。</p><p>它的作用是指定下载的文件名，如果不指定，那么下载的文件名就会根据请求内容的<code>Content-Disposition</code>来确定，如果没有<code>Content-Disposition</code>，那么就会使用请求的URL的最后一部分作为文件名。</p><h2 id="window-open" tabindex="-1"><a class="header-anchor" href="#window-open" aria-hidden="true">#</a> window.open</h2><p>上面使用a标签的案例也可以通过<code>window.open</code>来实现，效果是一样的，代码如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_blank&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这里的<code>_blank</code>是指定打开的方式，如果不指定，那么就会在当前页面打开，这里指定<code>_blank</code>，就是在新的页面打开。</p><p>同样<code>a</code>标签的<code>download</code>属性也是可以使用的，代码如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_blank&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;download=baidu.html&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>当然这种方式也是有缺陷的，对比于<code>a</code>标签，这种方式不能下载.html、.htm、.xml、.xhtml等文件，因为这些文件会被当成<code>html</code>文件来处理，所以会直接在当前页面打开。</p><p>同样也不能下载跨域的文件，毕竟是<code>window.open</code>，不是<code>window.download</code>（<code>window.download</code>是假想）。</p><h2 id="location-href" tabindex="-1"><a class="header-anchor" href="#location-href" aria-hidden="true">#</a> location.href</h2><p>这种方式和window.open(url)是一样的，代码如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这种方式拥有<code>window.open</code>的所有缺陷，所以不推荐使用，这里只当作了解，所以不做过多的讲解。</p><h2 id="location-其他属性" tabindex="-1"><a class="header-anchor" href="#location-其他属性" aria-hidden="true">#</a> location.?其他属性</h2><p>这里的其他指代的都是能跳转页面的属性，比如<code>location.assign</code>、<code>location.replace</code>、<code>location.reload</code>等，这些属性都是可以实现文件下载的，代码如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>location<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">)</span>\nlocation<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">)</span>\nlocation<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这里的<code>location.reload</code>是有点特殊的，它的作用是重新加载当前页面，但是它也可以接受一个参数，这个参数就是要跳转的页面，所以也可以实现文件下载。</p><p>当然同<code>location.href</code>一样，这些方式的缺点都一样，同时还有属于每个属性自身的特性，这里只当拓展知识，不做过多的讲解。</p><h2 id="xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest" aria-hidden="true">#</a> XMLHttpRequest</h2><p>这种方式就是我们常说的<code>ajax</code>下载，包括<code>axios</code>、<code>fetch</code>等都是相同的，代码如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nxhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">)</span>\nxhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\nxhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;text/html&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>\n  a<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>\n  a<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">&#39;baidu.html&#39;</span>\n  a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>这里就不讲和<code>XMLHttpRequest</code>相关的知识了，只讲和文件下载相关的部分。</p><p>这里主要的逻辑是当我们的请求成功后，我们会拿到响应体的<code>response</code>，这个<code>response</code>就是我们要下载的内容，然后我们把它转换成<code>blob</code>对象，然后通过URL.<code>createObjectURL</code>来创建一个url，然后通过a标签的<code>download</code>属性来实现文件下载。</p><p>这里的知识点就有两个，一个是<code>blob</code>对象，一个是<code>URL.createObjectURL</code>。</p><h3 id="blob对象" tabindex="-1"><a class="header-anchor" href="#blob对象" aria-hidden="true">#</a> blob对象</h3><blockquote><p><code>Blob</code>对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 <code>ReadableStream</code> 来用于数据操作。 <code>Blob</code>表示的不一定是JavaScript原生格式的数据。<code>File</code> 接口基于 <code>Blob</code>，继承了<code>blob</code>的功能并将其扩展以支持用户系统上的文件。</p></blockquote><p><code>blob</code>对象是<code>html5</code>新增的对象，它的作用是用来存储二进制数据的，比如图片、视频、音频等，它的使用方法如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">array</span> 二进制数据\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">options</span> 配置项\n *      <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>type</span> 文件类型，它代表了将会被放入到 blob 中的数组内容的 MIME 类型。\n *      <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>endings</span> 用于指定包含行结束符\\n的字符串如何被写入。默认为transparent，表示不会修改行结束符。还可以指定为native，表示会将\\n转换为\\r\\n。\n */</span>\n<span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这里主要关注的是<code>type</code>属性，默认情况下，<code>blob</code>对象是没有<code>type</code>属性的，那么这个<code>Blob</code>就是一个无类型的<code>Blob</code>，文件不会损毁，但是无法被正常识别。</p><h3 id="url-createobjecturl" tabindex="-1"><a class="header-anchor" href="#url-createobjecturl" aria-hidden="true">#</a> URL.createObjectURL</h3><blockquote><p>URL.createObjectURL() 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的 URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的 URL 对象表示指定的 File 对象或 Blob 对象。</p></blockquote><p>这个方法是用来创建一个<code>url</code>的，它的作用是把一个<code>blob</code>对象转换成一个<code>url</code>，这个<code>url</code>可以用来下载文件，也可以用来预览文件，代码如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这里需要注意的是，这个<code>url</code>的生命周期和创建它的窗口中的<code>document</code>绑定，也就是说，当我们的<code>document</code>被销毁后，这个<code>url</code>就会失效，所以我们需要在合适的时机销毁它，代码如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>回到我们刚才下载的问题，我们是通过<code>blob</code>对象来解决，但是我们的<code>type</code>属性是写死的，如果在文件类型是确定的情况下是没问题的，但是如果这个接口就是下载文件的接口，文件可能是各种类型的，我们应该怎么处理？</p><p>这里的没有正确答案，第一个可以和接口提供者进行协商，协商方案是不确定的，第二就是通过<code>response</code>的<code>header</code>来获取文件的<code>type</code>，也是我们要讲的：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> type <span class="token operator">=</span> response<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">]</span>\n<span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>response<span class="token punctuation">.</span>data<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这里我们通过<code>response</code>的<code>header</code>来获取<code>type</code>，然后再创建<code>blob</code>对象，这样就可以正确的下载文件了。</p><p>其实<code>content-type</code>也可能是<code>application/octet-stream</code>，这个时候我们就需要通过<code>file-type</code>来获取文件的<code>type</code>了。</p><p>下面的代码是通过<code>file-type</code>来获取文件的<code>type</code>：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>fileTypeFromStream<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;file-type&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fileTypeFromStream</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>response<span class="token punctuation">.</span>data<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',52),t=(0,e.Uk)("参考："),o={href:"https://github.com/sindresorhus/file-type",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("file-type"),l=(0,e._)("h2",{id:"总结",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),(0,e.Uk)(" 总结")],-1),i=(0,e._)("p",null,[(0,e.Uk)("上面的方案这么多，其实最终还是落到"),(0,e._)("code",null,"a"),(0,e.Uk)("标签上，所以不管是通过浏览器的内置行为进行下载，还是通过"),(0,e._)("code",null,"ajax"),(0,e.Uk)("进行下载，文件下载的最终还是浏览器的行为。")],-1),u={render:function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[t,(0,e._)("a",o,[c,(0,e.Wm)(s)])]),l,i],64)}}}}]);