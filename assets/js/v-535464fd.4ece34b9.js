"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8694],{4213:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-535464fd",path:"/articles/JavaScript/JavaScript%E5%AF%B9%E8%B1%A1%E5%8E%9F%E5%9E%8B%E9%93%BE.html",title:"JavaScript 对象/原型链",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"对象的原型是什么？",slug:"对象的原型是什么",children:[]},{level:2,title:"用构造函数创建对象",slug:"用构造函数创建对象",children:[]}],filePathRelative:"articles/JavaScript/JavaScript对象原型链.md",git:{}}},1489:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var p=a(6252);const e=(0,p.uE)('<h1 id="javascript-对象-原型链" tabindex="-1"><a class="header-anchor" href="#javascript-对象-原型链" aria-hidden="true">#</a> JavaScript 对象/原型链</h1><h2 id="对象的原型是什么" tabindex="-1"><a class="header-anchor" href="#对象的原型是什么" aria-hidden="true">#</a> 对象的原型是什么？</h2><p>Object 是引用类型，包括：Object 、Array 、Function 、Data 等。 <strong>JavaScript 对每个创建的对象都会设置一个原型，指向它的原型对象。</strong></p><p>当我们用 obj.xxx 访问一个对象的属性时，JavaScript 引擎先在当前（this）对象上查找该属性，如果没有找到，就到其原型对象上找(数组是 Array.prototype,function 是 function。prototype)，如果还没有找到，就一直上溯到 Object.prototype 对象，最后，如果还没有找到，就只能返回 undefined。</p><p>比如创建了一个 Array 对象：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>其原型链是：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>arr<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Array.prototype 定义了 indexOf()、shift()等方法，因此你可以在所有的 Array 对象上直接调用这些方法。甚至你都可以在 Array.prototype 自定义方法，但是没有必要最后不要这样做。</p><p>当我们创建一个函数时：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>函数也是一个对象 ，他的原型链是：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>foo<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>由于 Function.prototype 定义了 apply()等方法，因此，所有函数都可以调用 apply()方法。</p><h2 id="用构造函数创建对象" tabindex="-1"><a class="header-anchor" href="#用构造函数创建对象" aria-hidden="true">#</a> 用构造函数创建对象</h2><p>用函数来创建对象比直接用 <code>var = {...}</code> 创建对象要方面的多，它就是构造函数。 构造函数的首字母都应该大写 首先先创建一个构造函数：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>可以用关键字 new 来调用这个函数，并返回一个对象：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> xiaoming <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nxiaoming<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;小明&#39;</span>\nxiaoming<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello, 小明!</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>注意，如果不写 new，这就是一个普通函数，它返回 undefined。但是，如果写了 new，它就变成了一个构造函数，它绑定的 this 指向新创建的对象，并默认返回 this，也就是说，不需要在最后写 return this;。</p><p>新创建的 xiaoming 的原型链是：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xiaoming<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>也就是说，xiaoming 的原型指向函数 Student 的原型。如果你又创建了 xiaohong、xiaojun，那么这些对象的原型与 xiaoming 是一样的：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xiaoming ↘\nxiaohong <span class="token operator">-</span>→ <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span> <span class="token keyword">null</span>\nxiaojun  ↗\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>用 new Student()创建的对象还从原型上获得了一个 constructor 属性，它指向函数 Student 本身：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Student<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>我们可以用 instanceof 来检测对象类型；</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xiaohong <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xiaohong <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xiaoming <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xiaoming <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这个例子中所创建的对象即是 Object 的实例 也是 Student 的实例，因为所有的对象都继承自 Object</p><p>参考：</p>',30),t=(0,p._)("li",null,"《JS 高程》第六章",-1),o={href:"https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014344997235247b53be560ab041a7b10360a567422a78000",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("廖雪峰的博客-创建对象"),l={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[e,(0,p._)("ul",null,[t,(0,p._)("li",null,[(0,p._)("a",o,[c,(0,p.Wm)(a)])])])],64)}}}}]);