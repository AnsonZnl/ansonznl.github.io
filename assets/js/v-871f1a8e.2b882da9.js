"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5595],{7040:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-871f1a8e",path:"/articles/Node/%E4%BD%BF%E7%94%A8Node.js%E5%86%99%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84api%E6%8E%A5%E5%8F%A3.html",title:"使用 NodeJS 写一个简单的 api 接口",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"引入 Http 模块",slug:"引入-http-模块",children:[]},{level:2,title:"Hello world",slug:"hello-world",children:[]},{level:2,title:"路由",slug:"路由",children:[]},{level:2,title:"实现简单的 API 接口",slug:"实现简单的-api-接口",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"articles/Node/使用Node.js写一个简单的api接口.md",git:{}}},8469:(n,s,a)=>{a.r(s),a.d(s,{default:()=>P});var p=a(6252);const t=(0,p._)("h1",{id:"使用-nodejs-写一个简单的-api-接口",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#使用-nodejs-写一个简单的-api-接口","aria-hidden":"true"},"#"),(0,p.Uk)(" 使用 NodeJS 写一个简单的 api 接口")],-1),e=(0,p._)("h2",{id:"引入-http-模块",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#引入-http-模块","aria-hidden":"true"},"#"),(0,p.Uk)(" 引入 Http 模块")],-1),o=(0,p.Uk)("默认你已经安装了"),c={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("Node.js"),u=(0,p.Uk)(" Node 当中内置了 Http 模块； 可以使用"),r=(0,p.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>引入 http 模块；</p><h2 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello world</h2><p>用 Node.js 实现一个 HTTP 服务器程序非常简单。我们实现一个最简单的 Web 程序， 它对于所有请求，都返回 Hello world!，新建一个文件夹<code>apiDemo</code> 在里面新建一个<code>server.js</code>写入：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 导入http模块:</span>\n<span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 创建http server，并传入回调函数:</span>\n<span class="token keyword">var</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 回调函数接收request和response对象,</span>\n  <span class="token comment">// 获得HTTP请求的method和url:</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>method <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 将HTTP响应200写入response, 同时设置Content-Type: text/html:</span>\n  response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text/html&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 将HTTP响应的HTML内容写入response:</span>\n  response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;Hello world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 让服务器监听8080端口:</span>\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Server is running at http://127.0.0.1:8080/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>然后在当前目录命令提示符下(cmd 等)运行， 输入：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>node server.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后打开浏览器输入：<code>http://127.0.0.1:8080/</code> 就可以看到： <img src="https://gitee.com/zhangningle/imgs/raw/master/blog/Node/nodejs-2.png" alt="nodejs-2"></p><p>同时可以看到命令行中有打印的信息：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET: /\nGET: /favicon.ico\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>主要需要了解的是：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http.createServer(function(request, response){})\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',12),i=(0,p.Uk)("它的作用是创建一个 http 服务，里面传一个回调函数，函数中包含两个参数分别是（request，response）。 其中 request 是请求对象，response 是响应对象。 可以根据"),k=(0,p._)("code",null,"request",-1),d=(0,p.Uk)("对象拿到请求头的一些信息，如: "),b=(0,p._)("code",null,"request.url",-1),m=(0,p.Uk)("--返回请求路径 响应成功后： "),g=(0,p._)("code",null,"response.writeHead()",-1),h=(0,p.Uk)("————发送一个响应头给请求 "),v=(0,p._)("code",null,"response.end('xxx')",-1),f=(0,p.Uk)("————响应成功 返回 xxx "),q={href:"http://nodejs.cn/api/http.html",target:"_blank",rel:"noopener noreferrer"},w=(0,p.Uk)("参考 Nodez 中文网-HTTP"),j=(0,p.uE)('<h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><p>我们是想当访问<code>http://127.0.0.1:8080/</code>的时候返回当前目录的 index.html。 也就是说当<code>request.url === &#39;/&#39;</code>是<code>true</code>时就可以确定当前请求的是根目录了，</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> url <span class="token operator">=</span> request<span class="token punctuation">.</span>url<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// &#39;/&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>我们能创建一个服务，并且能使用<code>response.end(&#39;Hello world!&#39;);</code>返回“Hello world!”。如果想返回一个文件则需要用到 Node.js 的一个模块了——<strong>fs 文件系统</strong>。 它是 Node 当中处理文件的模块，首先引入：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>可以使用<code>fs.readFile()</code>来读取文件</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;./index.html&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// &lt;Buffer 3c 21 44 4f 4...&gt;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>回调函数 有两个参数 (err, data)，其中 data 是文件的内容，以二进制形式返回。</p><p>然后我们就可以编写代码了，当访问根目录时，返回 index.html 文件</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> url <span class="token operator">=</span> request<span class="token punctuation">.</span>url<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>url <span class="token operator">===</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;./index.html&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text/html;charset=UTF-8&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> err<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>然后在当前目录下新建<code>index.html</code>，在这里我们可以写一个 ajax 请求，一会我们点击按钮来实现 ajax 请求一组数据：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;box&quot;</span><span class="token operator">&gt;</span>看不到看不到<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>button onclick<span class="token operator">=</span><span class="token string">&quot;success()&quot;</span><span class="token operator">&gt;</span>我是按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n    <span class="token keyword">function</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">var</span> http<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        http<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span><span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> http<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">var</span> msg<span class="token operator">=</span> http<span class="token punctuation">.</span>responseText<span class="token punctuation">;</span>\n                <span class="token keyword">var</span> box<span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                box<span class="token punctuation">.</span>innerHTML<span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">//发送请求</span>\n        http<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        http<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>这段代码是点击按钮的时候 会向<code>/data</code>发起一个 ajsx 请求,</p><h2 id="实现简单的-api-接口" tabindex="-1"><a class="header-anchor" href="#实现简单的-api-接口" aria-hidden="true">#</a> 实现简单的 API 接口</h2><p>既然能访问根目录时可以返回 html 文件，那我们可以自己设定一个 url，当请求这个 url 是我们就给它返回一组 json 数据。正常来讲这些数据应该是从数据库读取的，在这里只模拟一组 json 数据，在当前目录新建一个<code>data.json</code>：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;尼古拉丁 * 赵四&quot;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>所以当前的目录结构是： <img src="https://gitee.com/zhangningle/imgs/raw/master/blog/Node/nodejs-3.png" alt="nodejs-3"></p><p>然后我们可以在 server.js 中判断一下，当请求的 url 是<code>/data</code>时，则返回 data.json：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>url <span class="token operator">===</span> <span class="token string">&quot;/data&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;./data.json&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> err<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>然后打开浏览器 <code>http://127.0.0.1:8080</code> 后，就会出现 index.html 页面，点击出现的按钮就会触发一个对 <code>/data</code>的 ajax 请求，当 server.js 接受到请求后，就会判断<code>url === &#39;/data&#39;</code>，然后它就会吧 <code>data.json</code>返回给我们。</p>',20),x=(0,p.Uk)("最后的实现是点击按钮出现"),y=(0,p._)("strong",null,"尼古拉丁 * 赵四",-1),E=(0,p.Uk)("，"),_=(0,p._)("br",null,null,-1),H=(0,p.Uk)(" GItHub 源码："),T={href:"https://github.com/AnsonZnl/StudyNodeJS/tree/master/%E8%AF%BE%E7%A8%8B%E8%AF%BE%E4%BB%B6%E5%8F%8A%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/apiDemo",target:"_blank",rel:"noopener noreferrer"},U=(0,p.Uk)("node-apiDemo"),A=(0,p._)("h2",{id:"参考",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),(0,p.Uk)(" 参考")],-1),B={href:"https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014345015296018cac40c198b543fead5c549865b9bd4a000",target:"_blank",rel:"noopener noreferrer"},N=(0,p.Uk)("廖雪峰-http 详解"),S={href:"http://nodejs.cn/api/fs.html",target:"_blank",rel:"noopener noreferrer"},F=(0,p.Uk)("Node-fs"),P={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,e,(0,p._)("p",null,[o,(0,p._)("a",c,[l,(0,p.Wm)(a)]),u]),r,(0,p._)("p",null,[i,k,d,b,m,g,h,v,f,(0,p._)("a",q,[w,(0,p.Wm)(a)])]),j,(0,p._)("p",null,[x,y,E,_,H,(0,p._)("a",T,[U,(0,p.Wm)(a)])]),A,(0,p._)("ul",null,[(0,p._)("li",null,[(0,p._)("a",B,[N,(0,p.Wm)(a)])]),(0,p._)("li",null,[(0,p._)("a",S,[F,(0,p.Wm)(a)])])])],64)}}}}]);