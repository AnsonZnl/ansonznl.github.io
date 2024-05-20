"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5370],{337:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-33c7c570",path:"/articles/Node/%E4%BD%BF%E7%94%A8Node.js%E6%90%AD%E5%BB%BA%E9%9D%99%E6%80%81%E6%9C%8D%E5%8A%A1%E5%99%A8.html",title:"使用NodeJS 搭建静态服务器",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"参考：",slug:"参考",children:[]}],filePathRelative:"articles/Node/使用Node.js搭建静态服务器.md",git:{}}},456:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var p=a(6252);const t=(0,p.uE)('<h1 id="使用nodejs-搭建静态服务器" tabindex="-1"><a class="header-anchor" href="#使用nodejs-搭建静态服务器" aria-hidden="true">#</a> 使用NodeJS 搭建静态服务器</h1><blockquote><p>我们可以使用Node设定一个目录，然后让Web程序变成一个文件服务器。要实现这一点，我们只需要解析request.url中的路径，然后在本地找到对应的文件，把文件内容发送出去就可以了。</p></blockquote><p>解析URL需要用到Node.js提供的url模块，它使用起来非常简单，通过parse()将一个字符串解析为一个Url对象：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> url<span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;http://user:pass@host.com:8080/path/to/file?query=string#hash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>解析之后是：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    Url <span class="token punctuation">{</span>\n        protocol<span class="token operator">:</span> <span class="token string">&#39;http:&#39;</span><span class="token punctuation">,</span>\n        slashes<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        auth<span class="token operator">:</span> <span class="token string">&#39;user:pass&#39;</span><span class="token punctuation">,</span>\n        host<span class="token operator">:</span> <span class="token string">&#39;host.com:8080&#39;</span><span class="token punctuation">,</span>\n        port<span class="token operator">:</span> <span class="token string">&#39;8080&#39;</span><span class="token punctuation">,</span>\n        hostname<span class="token operator">:</span> <span class="token string">&#39;host.com&#39;</span><span class="token punctuation">,</span>\n        hash<span class="token operator">:</span> <span class="token string">&#39;#hash&#39;</span><span class="token punctuation">,</span>\n        search<span class="token operator">:</span> <span class="token string">&#39;?query=string&#39;</span><span class="token punctuation">,</span>\n        query<span class="token operator">:</span> <span class="token string">&#39;query=string&#39;</span><span class="token punctuation">,</span>\n        pathname<span class="token operator">:</span> <span class="token string">&#39;/path/to/file&#39;</span><span class="token punctuation">,</span>\n        path<span class="token operator">:</span> <span class="token string">&#39;/path/to/file?query=string&#39;</span><span class="token punctuation">,</span>\n        href<span class="token operator">:</span>\n         <span class="token string">&#39;http://user:pass@host.com:8080/path/to/file?query=string#hash&#39;</span> \n        <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>处理本地文件目录需要使用Node.js提供的path模块，它可以方便地构造目录：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 解析当前目录:</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">path</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//__dirname 表示当前所在目录  &#39;/Users&#39;</span>\n\n<span class="token comment">// 组合完整的文件路径:当前目录+&#39;pub&#39;+&#39;index.html&#39;:</span>\n<span class="token keyword">var</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;fileServer&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// &#39;/Users/fileServer/index.html&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>使用path模块可以正确处理操作系统相关的文件路径。在Windows系统下，返回的路径类似于<code>C:\\Users\\fileServer\\index.html</code>，这样，我们就不关心怎么拼接路径了。</p><p>最后，我们实现一个文件服务器file_server.js：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> \n    http<span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    fs<span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    url<span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    path<span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n<span class="token comment">// 从命令行参数获取root目录，默认是当前目录:</span>\n<span class="token keyword">var</span> root<span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//创建服务器</span>\n<span class="token keyword">var</span> server<span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">//获得ur的path 类似&#39;/css/index.css&#39;</span>\n    <span class="token keyword">var</span> pathName<span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>pathname<span class="token punctuation">;</span>\n    <span class="token comment">//获得对应的本地文件路径 类似’static/css/index.css‘</span>\n    <span class="token keyword">var</span> filePath<span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//获取文件状态</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    fs<span class="token punctuation">.</span><span class="token function">stat</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> stats</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err <span class="token operator">&amp;&amp;</span> stats<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 没有出错并且文件存在:</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;200 &#39;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">// 发送200响应:</span>\n            response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">// 将文件流导向response:</span>\n            fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 出错了或者文件不存在:</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;404 &#39;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">// 发送404响应:</span>\n            response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;404 Not Found&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Server is running at http://127.0.0.1:8080/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>当你的html文件是这样的时候：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Road<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css/index.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/images/bg.jpeg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>11<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>书山有路勤为径,学海无涯苦做舟。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>然后请求<code>http://127.0.0.1:8080/index.html</code>就会打印出： <img src="https://gitee.com/zhangningle/imgs/raw/master/blog/Node/nodejs-1.png" alt="nodejs-1"></p><p>当然他只能发起请求，想要请求到并且正确返回还需要设置文件的ContentType属性。 我们可以使用<code>path.extname</code>获取请求文件的后缀：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> extname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">&#39;css/index.css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// .css</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>我们获取到后缀之后就可以根据后缀来设置它的ContentType，这里需要用到一个mime.json文件，然后使用一个函数去匹配:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//mime 读取mime.json 里面存储了常见的文件的ContentType 为请求的对应的文件设置对应的 ContentType 属性</span>\n<span class="token keyword">function</span> <span class="token function">getContentType</span><span class="token punctuation">(</span><span class="token parameter">extName<span class="token punctuation">,</span> callBack</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token comment">//      文件后缀   回调函数</span>\n    <span class="token comment">//读取mime.json</span>\n    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;./mime.json&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">//读取失败 抛出错误</span>\n            <span class="token keyword">throw</span> err<span class="token punctuation">;</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// 读取成功</span>\n        <span class="token keyword">let</span> mimeJson <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//转码 将json字符串转化成对象</span>\n        <span class="token keyword">let</span> contentType <span class="token operator">=</span> mimeJson<span class="token punctuation">[</span>extName<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">;</span>\n        <span class="token comment">//取出对应json中 对应的 请求的后缀的相匹配的 ContentType 属性</span>\n        <span class="token function">callBack</span><span class="token punctuation">(</span>contentType<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//执行这个回调函数 并传参contentType</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>搭建静态服务器的步骤应该是：</p><ol><li>先拿到请求文件的后缀名(extname)</li><li>引入mime.json 文件并读取-&gt;转码</li><li>匹配和后缀对应的ContentType</li><li>使用回调函数 所有请求的文件 都会拿到后缀 然后自动匹配相应的ContentType</li><li>执行getContentType函数</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>            <span class="token function">getContentType</span><span class="token punctuation">(</span>extname<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">contentType</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n                res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;Content-Type&quot;</span><span class="token operator">:</span> contentType <span class="token operator">+</span> <span class="token string">&#39;;charset=UTF-8&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n                res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考：</h2>',22),e={href:"https://blog.csdn.net/kuangshp128/article/details/75207984",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("常见文件的mime类型"),c={href:"https://github.com/AnsonZnl/StudyNodeJS/blob/master/%E8%AF%BE%E7%A8%8B%E7%AC%94%E8%AE%B0/%E8%AF%BE%E6%97%B666-%E8%AF%BE%E6%97%B671%E7%AC%94%E8%AE%B0.md",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("GitHub-Node 学习笔记"),u={href:"https://www.cnblogs.com/xxchi/p/6382892.html",target:"_blank",rel:"noopener noreferrer"},i=(0,p.Uk)("参考-Node path模块相关方法"),r={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("ul",null,[(0,p._)("li",null,[(0,p._)("p",null,[(0,p._)("a",e,[o,(0,p.Wm)(a)])])]),(0,p._)("li",null,[(0,p._)("p",null,[(0,p._)("a",c,[l,(0,p.Wm)(a)])])]),(0,p._)("li",null,[(0,p._)("p",null,[(0,p._)("a",u,[i,(0,p.Wm)(a)])])])])],64)}}}}]);