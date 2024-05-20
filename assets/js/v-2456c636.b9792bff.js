"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4188],{4468:(s,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e={key:"v-2456c636",path:"/articles/Security/",title:"前端安全",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"XSS(Cross Site Scripting)跨站脚本攻击",slug:"xss-cross-site-scripting-跨站脚本攻击",children:[{level:3,title:"攻击方式",slug:"攻击方式",children:[]},{level:3,title:"防御方式",slug:"防御方式",children:[]}]},{level:2,title:"CSRF(Cross-site request forgery)跨站请求伪造",slug:"csrf-cross-site-request-forgery-跨站请求伪造",children:[{level:3,title:"攻击方式",slug:"攻击方式-1",children:[]},{level:3,title:"CSRF 的特点",slug:"csrf-的特点",children:[]},{level:3,title:"CSRF 的防御",slug:"csrf-的防御",children:[]}]},{level:2,title:"SQL 注入攻击",slug:"sql-注入攻击",children:[{level:3,title:"攻击流程",slug:"攻击流程",children:[]},{level:3,title:"预防方式如下",slug:"预防方式如下",children:[]}]},{level:2,title:"密码安全",slug:"密码安全",children:[{level:3,title:"加盐",slug:"加盐",children:[]}]}],filePathRelative:"articles/Security/README.md",git:{}}},722:(s,a,n)=>{n.r(a),n.d(a,{default:()=>i});var e=n(6252);const t=(0,e.uE)('<h1 id="前端安全" tabindex="-1"><a class="header-anchor" href="#前端安全" aria-hidden="true">#</a> 前端安全</h1><h2 id="xss-cross-site-scripting-跨站脚本攻击" tabindex="-1"><a class="header-anchor" href="#xss-cross-site-scripting-跨站脚本攻击" aria-hidden="true">#</a> XSS(Cross Site Scripting)跨站脚本攻击</h2><blockquote><p>跨网站指令码（英语：Cross-site scripting，通常简称为：XSS）是一种网站应用程式的安全漏洞攻击，是代码注入的一种。它允许恶意使用者将程式码注入到网页上，其他使用者在观看网页时就会受到影响。这类攻击通常包含了 HTML 以及使用者端脚本语言。</p></blockquote><p>XSS 分为三种：反射型，存储型和 DOM-based</p><h3 id="攻击方式" tabindex="-1"><a class="header-anchor" href="#攻击方式" aria-hidden="true">#</a> 攻击方式</h3><p>XSS 通过修改 HTML 节点或者执行 JS 代码来攻击网站。</p><p>例如：某个搜索功能，通过 URL 获取某些参数</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- http://www.domain.com?name=&lt;script&gt;alert(1)&lt;/script&gt; --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>当执行搜素操作时，URL 中的 JS 代码会被执行，这样，页面中就会凭空多出了一弹框。</p><p>那如果是获取 cookie 然后发给黑客服务器呢？是不是就有很大的安全隐患了。</p><p>根据攻击来源，XSS 攻击可以分为：</p><ul><li>存储型</li><li>反射型</li><li>DOM 型</li></ul><h4 id="储存型" tabindex="-1"><a class="header-anchor" href="#储存型" aria-hidden="true">#</a> 储存型</h4><p>储存型 XSS 的攻击步骤：</p><ol><li>攻击者将恶意代码提交到目标网站的数据库中</li><li>当用户打开目标网站时，网站服务端将恶意代码取出后，然后返回给浏览器。</li><li>浏览器执行恶意代码</li></ol><p>这种攻击常见于保存用户数据的网站，如论坛发帖，商品评论等。</p><h4 id="反射型" tabindex="-1"><a class="header-anchor" href="#反射型" aria-hidden="true">#</a> 反射型</h4><p>反射型 XSS 的攻击步骤：</p><ol><li>攻击者构造出特殊的 URL 请求，其中包含恶意代码。</li><li>用户打开带有恶意代码的 URL，浏览器执行恶意代码。</li></ol><p>反射型和储存型的区别：</p><ol><li>储存型 XSS 的恶意代码放在数据里，反射型 XSS 的恶意代码放在 URL 里。</li><li>反射型 XSS 漏洞常见于 URL 传递参数的功能，如搜索，跳转</li><li>储存型 XSS 常见于通过用户提交的内容，如论坛留言，评论等</li></ol><h4 id="dom-型-xss" tabindex="-1"><a class="header-anchor" href="#dom-型-xss" aria-hidden="true">#</a> DOM 型 XSS</h4><p>DOM 型 XSS 的攻击步骤:</p><ol><li>攻击者构造出特殊的 URL，其中包含恶意代码</li><li>用户打开带有恶意代码的 URL</li><li>用户浏览器接受到响应后解析执行，前端 JavaScript 去除 URL 中的恶意代码并执行</li><li>恶意代码窃取用户数据并且发送到攻击者的网站，或者冒充用户行为完成恶意操作。</li></ol><p>DOM 型 XSS 与前两种 XSS 的区别：</p><p>DOM 型 XSS 攻击中，取出和执行恶意代码都由浏览器端完成，是 JavaScript 自身的安全漏铜，而其他两种 XSS 都是服务端的漏铜。</p><h3 id="防御方式" tabindex="-1"><a class="header-anchor" href="#防御方式" aria-hidden="true">#</a> 防御方式</h3><p>通过前面的介绍，看到 XSS 攻击的两大因素：</p><ol><li>攻击者提交恶意代码</li><li>浏览器执行恶意代码</li></ol><p>针对第一个要素，在用户输入的内容时进行过滤掉恶意代码。</p><p>针对第二个，则应该是在后端写入数据库时，对数据进行过滤。</p><p>前端处理的方式可以使用字符串替换的方法，例如：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">escape</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&amp;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&amp;amp;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&amp;lt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&amp;gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&quot;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&amp;quto;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&#39;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&amp;#39;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">`</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&amp;#96;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&amp;#x2F;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> str<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>上面的函数就可以将恶意代码进行转译。</p>',34),p=(0,e.Uk)("也可以借助"),l={href:"https://github.com/leizongmin/js-xss",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("js-xss"),r=(0,e.Uk)("来实现。"),c=(0,e.uE)('<p>通过以上我们可以得出，用户输入不可信，所以使用一些 API 时需要各位的注意，比如.innerHTML、outerHTML、document.write，还有一些框架的 API，比如 Vue 的 v-html 等，使用时都需要谨慎一些。</p><h2 id="csrf-cross-site-request-forgery-跨站请求伪造" tabindex="-1"><a class="header-anchor" href="#csrf-cross-site-request-forgery-跨站请求伪造" aria-hidden="true">#</a> CSRF(Cross-site request forgery)跨站请求伪造</h2><blockquote><p>CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求</p></blockquote><p>简单来说，CSRF 就是利用用户的登录态发起恶意请求。</p><h3 id="攻击方式-1" tabindex="-1"><a class="header-anchor" href="#攻击方式-1" aria-hidden="true">#</a> 攻击方式</h3><p>CSRF 攻击流程：</p><ol><li>受害者登录 a.com，并保留了登录凭证（cookie）’</li><li>攻击者引诱受害者访问 b.com</li><li>b.com 向 a.com 发送一个请求：a.com?act=xx，会默认携带 a.com 的 cookie</li><li>a.com 收到请求后，会执行相应的操作。</li><li>攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让 a.com 执行了自己定义的操作。</li></ol><p><strong>POST 攻击</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">&quot;http://bank.example/withdraw&quot;</span> method<span class="token operator">=</span><span class="token constant">POST</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;hidden&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;account&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;xiaoming&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;hidden&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;amount&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;10000&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;hidden&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;for&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;hacker&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span> document<span class="token punctuation">.</span>forms<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>这是一个自动提交表单的 POST 请求，当用户访问该页面时，表单会自动提交，然后模拟用户完成一个 POST 操作。</p><p><strong>GET 攻击</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;http://test.com/csrf/withdraw.php?amount=1000&amp;for=hacker&quot;</span> taget<span class="token operator">=</span><span class="token string">&quot;_blank&quot;</span><span class="token operator">&gt;</span>\n    重磅消息！！\n<span class="token operator">&lt;</span>a<span class="token operator">/</span><span class="token operator">&gt;</span>\n<span class="token comment">// 也可以使用img的url</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这种需要用户点击某个链接，然后自动请求某个网站模拟用户的操作。</p><h3 id="csrf-的特点" tabindex="-1"><a class="header-anchor" href="#csrf-的特点" aria-hidden="true">#</a> CSRF 的特点</h3><ul><li>攻击一般发生在第三方网站，而不是被攻击的网站，被共计的网站无法防止攻击发生。</li><li>攻击利用受害者在被攻击网站的登录凭证（cookie），冒充受害者进行各种操作，而不是窃取数据。</li><li>整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”</li><li>跨站请求可以用各种方式：如图片 URL、超链接、CORS、Form 表单提交等。</li></ul><h3 id="csrf-的防御" tabindex="-1"><a class="header-anchor" href="#csrf-的防御" aria-hidden="true">#</a> CSRF 的防御</h3><p>CSRF 通常从第三方网站发起，被攻击的网站无法防止攻击发生，只能通过增强自己网站针对 CSRF 的防护能力来提升安全性。</p><p>防止 CSRF 的常用方式如下：</p><ul><li><p>阻止不明外域的访问</p><ul><li>同源检测：通过 Http header Referer 判断是否是第三方网站发起的请求</li></ul></li><li><p>SameSite：可以对 Cookie 设置 SameSite 属性，该设置 Cookie 不随着跨域请求发送，该属性可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。</p></li><li><p>token</p><ul><li>CSRF 攻击的基础是受害者在被攻击网站的登录态（coolie），而是用 token 可以防止这个问题，因为 token 不会自动携带，而是需要手动设置 header。</li></ul></li></ul><h2 id="sql-注入攻击" tabindex="-1"><a class="header-anchor" href="#sql-注入攻击" aria-hidden="true">#</a> SQL 注入攻击</h2><blockquote><p>Sql 注入攻击，是通过将恶意的 SQL 语句插入到应用的输入参数中，在后台的服务器将 SQL 服务器上解析并执行的攻击。</p></blockquote><h3 id="攻击流程" tabindex="-1"><a class="header-anchor" href="#攻击流程" aria-hidden="true">#</a> 攻击流程</h3><ul><li>找出 SQL 漏洞的注入点</li><li>判断数据库的类型和版本</li><li>猜解用户名和密码以及 web 后台管理入口</li><li>入侵和破坏</li></ul><h3 id="预防方式如下" tabindex="-1"><a class="header-anchor" href="#预防方式如下" aria-hidden="true">#</a> 预防方式如下</h3><ul><li>严格检查输入变量的类型和格式</li><li>将 SQL 语句进行转译和过滤处理</li><li>对访问数据库的应用采用防火墙</li></ul><h2 id="密码安全" tabindex="-1"><a class="header-anchor" href="#密码安全" aria-hidden="true">#</a> 密码安全</h2><p>对于需要储存密码的地方，需要对密码进行加密。</p><h3 id="加盐" tabindex="-1"><a class="header-anchor" href="#加盐" aria-hidden="true">#</a> 加盐</h3><p>对于密码储存来说，必然是不能使用明文密码储存在数据库中的。否则一旦泄露，会对用户造成极大的损失。</p><p>并且不建议只对密码单纯的通过加密算法加密，因为存在彩虹表的关系。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 加盐也就是给原密码添加字符串，增加原密码长度</span>\n<span class="token function">sha256</span><span class="token punctuation">(</span><span class="token function">sha1</span><span class="token punctuation">(</span><span class="token function">md5</span><span class="token punctuation">(</span>salt <span class="token operator">+</span> password <span class="token operator">+</span> salt<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>但是加盐也不能阻止被人盗号，只能确保不会暴露用户的真实密码，一旦攻击者得到用户的账号，就可以通过暴露方式破解密码。</p><p>对于暴力破解（穷举）这种情况，通常使用验证码、增加延迟验证时间、限制验证次数来制止。</p><p>并且一旦用户输入了错误的密码，也不能直接提示输错密码，而是提示账号或密码错误。</p>',34),i={render:function(s,a){const n=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[p,(0,e._)("a",l,[o,(0,e.Wm)(n)]),r]),c],64)}}}}]);