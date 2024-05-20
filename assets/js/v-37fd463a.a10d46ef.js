"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8836],{9539:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-37fd463a",path:"/articles/JavaScript/%E4%B8%80%E6%AC%A1%E6%90%9E%E6%87%82-JS%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E4%B9%8B%E5%AE%8F%E4%BB%BB%E5%8A%A1%E5%92%8C%E5%BE%AE%E4%BB%BB%E5%8A%A1.html",title:"一次搞懂 EventLoop",lang:"en-US",frontmatter:{0:"s",1:"i",2:"d",3:"e",4:"b",5:"a",6:"r",7:"D",8:"e",9:"p",10:"t",11:"h",12:"：",13:" ",14:"3"},excerpt:"",headers:[{level:2,title:"产生原因",slug:"产生原因",children:[{level:3,title:"GUI 与事件",slug:"gui-与事件",children:[]}]},{level:2,title:"任务队列（Event Queue）",slug:"任务队列-event-queue",children:[]},{level:2,title:"理解微任务和宏任务的执行执行过程",slug:"理解微任务和宏任务的执行执行过程",children:[]},{level:2,title:"Promise 的执行",slug:"promise-的执行",children:[]},{level:2,title:"async/await 的执行",slug:"async-await-的执行",children:[]},{level:2,title:"setTimerout 并不准确",slug:"settimerout-并不准确",children:[]},{level:2,title:"总结",slug:"总结",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"articles/JavaScript/一次搞懂-JS事件循环之宏任务和微任务.md",git:{}}},3041:(n,s,a)=>{a.r(s),a.d(s,{default:()=>y});var t=a(6252);const p=(0,t.uE)('<h1 id="一次搞懂-eventloop" tabindex="-1"><a class="header-anchor" href="#一次搞懂-eventloop" aria-hidden="true">#</a> 一次搞懂 EventLoop</h1><p>众所周知，JS 是一门单线程语言，可是浏览器又能很好的处理异步请求，那么到底是为什么呢？</p><p>JS 的执行环境一般是浏览器和 Node.js，两者稍有不同，这里只讨论浏览器环境下的情况。</p><p>JS 执行过程中会产生两种任务，分别是：同步任务和异步任务。</p><ul><li>同步任务：比如声明语句、for、赋值等，读取后依据从上到下从左到右，立即执行。</li><li>异步任务：比如 ajax 网络请求，setTimeout 定时函数等都属于异步任务。异步任务会通过任务队列(Event Queue)的机制（先进先出的机制）来进行协调。</li></ul><h2 id="产生原因" tabindex="-1"><a class="header-anchor" href="#产生原因" aria-hidden="true">#</a> 产生原因</h2><p>偶然在阅读一篇博客时发现的，觉得写的很清楚，就拿过来：</p>',7),e=(0,t.Uk)("以下内容来自"),o={href:"https://godbasin.github.io/vue-ebook/vue-ebook/9.html#_9-1-%E7%BC%96%E7%A0%81%E6%80%9D%E7%BB%B4%E8%BD%AC%E5%8F%98",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("《深入理解Vue.js实战-编码思维转变》"),l=(0,t.uE)('<h3 id="gui-与事件" tabindex="-1"><a class="header-anchor" href="#gui-与事件" aria-hidden="true">#</a> GUI 与事件</h3><p>GUI（图形用户界面）与事件驱动的渊源可谓不浅。GUI 应用程序的特点是注重与用户的交互，因此程序的执行取决于与用户的实时交互情况，大部分的程序执行需要等到用户的交互动作发生之后。由于用户的输入频率并不高，若不停轮询获取用户输入（点像 ajax 轮询），这样的方式存在以下问题： (1) 资源利用率低。 (2) 不能真正做到及时同步。</p><p>由于 GUI 程序的执行流程由用户控制，并且不可预期，为了适应这种特点，我们通常采用事件驱动的编程方法。程序对事件的响应，其实就是调用预先编制好的代码来对事件进行处理。</p><p>如果 Javascript 完全使用同步的单线程方式来执行，我们就无法对多个事件进行监听。除此之外，我们的页面交互就会变得很慢，还会有很大一部分的等待时间，造成很多资源浪费。所以 Javascript 是异步的，支持多个事件的并发，而 JavaScript 的并发模型基于“事件循环”。在 Javascript 中，主线程从&quot;任务队列&quot;中读取事件，这个过程是循环不断的，整个的这种运行机制又称为 <strong>Event Loop（事件循环）</strong>。</p><h2 id="任务队列-event-queue" tabindex="-1"><a class="header-anchor" href="#任务队列-event-queue" aria-hidden="true">#</a> 任务队列（Event Queue）</h2><p>任务队列中的任务也分为两种，分别是：宏任务（Macro-take）和微任务（Micro-take）</p><ul><li>宏任务主要包括：scrip(JS 整体代码)、setTimeout、setInterval、setImmediate、I/O、UI 交互</li><li>微任务主要包括：Promise(重点关注)、process.nextTick(Node.js)、MutaionObserver</li></ul><p>任务队列的执行过程是：<strong>先执行一个宏任务</strong>，执行过程中如果产出新的宏/微任务，就将他们推入相应的任务队列，<strong>之后在执行一队微任务</strong>，之后再执行宏任务，如此循环。<strong>以上不断重复的过程就叫做 Event Loop(事件循环)</strong>。</p><p>每一次的循环操作被称为<strong>tick</strong>。</p><p><img src="//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52bec546cf0748f9b89f5ca537d77baa~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>使用一段代码来演示整个过程：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>macroTask <span class="token keyword">of</span> macroTaskQueue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 1. Handle current MACRO-TASK</span>\n  <span class="token function">handleMacroTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 2. Handle all MICRO-TASK</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span>microTask <span class="token keyword">of</span> microTaskQueue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">handleMicroTask</span><span class="token punctuation">(</span>microTask<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="理解微任务和宏任务的执行执行过程" tabindex="-1"><a class="header-anchor" href="#理解微任务和宏任务的执行执行过程" aria-hidden="true">#</a> 理解微任务和宏任务的执行执行过程</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;setTimeout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>按照上面的内容，分析执行步骤：</p><ol><li>宏任务：执行整体代码（相当于<code>&lt;script&gt;</code>中的代码）： <ol><li>输出: <code>script start</code></li><li>遇到 setTimeout，加入宏任务队列，当前宏任务队列(setTimeout)</li><li>遇到 promise，加入微任务，当前微任务队列(promise1)</li><li>输出：<code>script end</code></li></ol></li><li>微任务：执行微任务队列（promise1） <ol><li>输出：<code>promise1</code>，then 之后产生一个微任务，加入微任务队列，当前微任务队列（promise2）</li><li>执行 then，输出<code>promise2</code></li></ol></li><li>执行渲染操作，更新界面（敲黑板划重点）。</li><li>宏任务：执行 setTimeout <ol><li>输出：<code>setTimeout</code></li></ol></li></ol><h2 id="promise-的执行" tabindex="-1"><a class="header-anchor" href="#promise-的执行" aria-hidden="true">#</a> Promise 的执行</h2><p><code>new Promise(..)</code>中的代码，也是同步代码，会立即执行。只有<code>then</code>之后的代码，才是异步执行的代码，是一个微任务。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;timeout1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;timeout2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;then1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>步骤解析：</strong></p><ul><li>当前任务队列：微任务: [], 宏任务：[<code>&lt;script&gt;</code>]</li></ul><ol><li>宏任务： <ol><li>输出: <code>script start</code></li><li>遇到 timeout1，加入宏任务</li><li>遇到 Promise，输出<code>promise1</code>，直接 resolve，将 then 加入微任务，遇到 timeout2，加入宏任务。</li><li>输出<code>script end</code></li><li>宏任务第一个执行结束</li></ol></li></ol><ul><li>当前任务队列：微任务[then1]，宏任务[timeou1, timeout2]</li></ul><ol><li>微任务： <ol><li>执行 then1，输出<code>then1</code></li><li>微任务队列清空</li></ol></li></ol><ul><li>当前任务队列：微任务[]，宏任务[timeou1, timeout2]</li></ul><ol><li>宏任务： <ol><li>输出<code>timeout1</code></li><li>输出<code>timeout2</code></li></ol></li></ol><ul><li>当前任务队列：微任务[]，宏任务[timeou2]</li></ul><ol start="4"><li>微任务： <ol><li>为空跳过</li></ol></li></ol><ul><li>当前任务队列：微任务[]，宏任务[timeou2]</li></ul><ol start="5"><li>宏任务： <ol><li>输出<code>timeout2</code></li></ol></li></ol><h2 id="async-await-的执行" tabindex="-1"><a class="header-anchor" href="#async-await-的执行" aria-hidden="true">#</a> async/await 的执行</h2><p>async 和 await 其实就是 Generator 和 Promise 的语法糖。</p><p>async 函数和普通 函数没有什么不同，他只是表示这个函数里有异步操作的方法，并返回一个 Promise 对象</p><p>翻译过来其实就是：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// async/await 写法</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async1 start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async1 end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// Promise 写法</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async1 start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async1 end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>看例子：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async1 start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async1 end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;timeout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>步骤解析：</strong></p><ul><li>当前任务队列：宏任务：[<code>&lt;script&gt;</code>]，微任务: []</li></ul><ol><li>宏任务： <ol><li><strong>输出：</strong><code>async1 start</code></li><li>遇到 async2，<strong>输出：</strong><code>async2</code>，并将 then（async1 end）加入微任务</li><li>遇到 setTimeout，加入宏任务。</li><li>遇到 Promise，<strong>输出：</strong><code>promise1</code>，直接 resolve，将 then(promise2)加入微任务</li><li><strong>输出：</strong><code>script end</code></li></ol></li></ol><ul><li>当前任务队列：微任务[promise2, async1 end]，宏任务[timeout]</li></ul><ol start="2"><li>微任务： <ol><li><strong>输出：</strong><code>promise2</code></li><li>promise2 出队</li><li><strong>输出：</strong><code>async1 end</code></li><li>async1 end 出队</li><li>微任务队列清空</li></ol></li></ol><ul><li>当前任务队列：微任务[]，宏任务[timeout]</li></ul><ol start="3"><li>宏任务： <ol><li><strong>输出：</strong><code>timeout</code></li><li>timeout 出队，宏任务清空</li></ol></li></ol><p><strong>&quot;任务队列&quot;是一个事件的队列（也可以理解成消息的队列），IO 设备完成一项任务，就在&quot;任务队列&quot;中添加一个事件，表示相关的异步任务可以进入&quot;执行栈&quot;了</strong>。主线程读取&quot;任务队列&quot;，就是读取里面有哪些事件。</p><p>&quot;任务队列&quot;中的事件，除了 IO 设备的事件以外，还包括一些用户产生的事件（比如鼠标点击、页面滚动等等）。只要指定过回调函数，这些事件发生时就会进入&quot;任务队列&quot;，等待主线程读取。</p><p>所谓&quot;回调函数&quot;（callback），就是那些会被主线程挂起来的代码。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。</p><p>&quot;任务队列&quot;是一个先进先出的数据结构，排在前面的事件，优先被主线程读取。主线程的读取过程基本上是自动的，只要执行栈一清空，&quot;任务队列&quot;上第一位的事件就自动进入主线程。但是，由于存在后文提到的&quot;定时器&quot;功能，主线程首先要检查一下执行时间，某些事件只有到了规定的时间，才能返回主线程。</p><p>----JavaScript 中没有任何代码时立即执行的，都是进程空闲时尽快执行</p><h2 id="settimerout-并不准确" tabindex="-1"><a class="header-anchor" href="#settimerout-并不准确" aria-hidden="true">#</a> setTimerout 并不准确</h2><p>由上我们已经知道了 setTimeout 是一个宏任务，会被添加到宏任务队列当中去，按顺序执行，如果前面有。</p><p><strong>setTimeout() 的第二个参数是为了告诉 JavaScript 再过多长时间把当前任务添加到队列中。</strong></p><p>如果队列是空的，那么添加的代码会立即执行；如果队列不是空的，那么它就要等前面的代码执行完了以后再执行。</p><p>看代码：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;then1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> s <span class="token operator">&gt;=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;while&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;timeout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>因为 then 是一个微任务，会先于 setTimeout 执行，所以，虽然 setTimeout 是在两秒后加入的宏任务，但是因为 then 中的在 while 操作被延迟了 4s，所以一直推迟到了 4s 秒后才执行的 setTimeout。</p><p>所以输出的顺序是：script start、promise、script end、then1。 四秒后输出：while、timeout</p><p>注意：关于 setTimeout 要补充的是，即便主线程为空，0 毫秒实际上也是达不到的。根据 HTML 的标准，最低是 4 毫秒。有兴趣的同学可以自行了解。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>有个小 tip：从规范来看，microtask 优先于 task 执行，所以如果有需要优先执行的逻辑，放入 microtask 队列会比 task 更早的被执行。</p><p>最后的最后，记住，JavaScript 是一门单线程语言，异步操作都是放到事件循环队列里面，等待主执行栈来执行的，并没有专门的异步执行线程。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',62),u={href:"https://zhuanlan.zhihu.com/p/87684858",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("知乎-【JS】深入理解事件循环,这一篇就够了!(必看)"),r={href:"https://juejin.im/book/6844733750048210957/section/6844733750115303432",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("掘金小册-前端性能优化-Event Loop 与异步更新策略"),b={href:"https://segmentfault.com/a/1190000014940904",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("Segmentfault-译文：JS 事件循环机制（event loop）之宏任务、微任务"),m={href:"https://mp.weixin.qq.com/s?__biz=MzA4Nzg0MDM5Nw==&mid=2247486568&idx=1&sn=91f3fde0aa78c134a16c4b0054ebc058&chksm=90320f8aa745869c19f2b0beb1fc886e160eacf0cc14b719c653ff456a0bb467c6e44e5c09c1&mpshare=1&scene=1&srcid=0910nzUOwvfbNR5EuDA5jkIs&sharer_sharetime=1599700920750&sharer_shareid=68eb5b2b3e4592fb6bbcbd3555f71d06&key=6664ac14267ba668dd7a9b3568fb19fc1a9d077d8bf208be893b1f93a7ed6f92a9a65754ef98a7eceafae90d0c9cee233bdfb783029046af129e7ea6bca7c67c7b7784173f389412ef9eec2dc302f904bcde9474621957b8673b576ff5096afcfe087afe60ab7b10a6e88f3898b8c9d47bfd7fa2de7bc3e80a353ab2011c0b1a&ascene=1&uin=MjY5MTk2ODkxOQ%3D%3D&devicetype=Windows+10+x64&version=62090529&lang=zh_CN&exportkey=A1QngDpbd7oBvzKd78v7Ikk%3D&pass_ticket=CyghTbXdqVMYt3zerRhF2HxsE7Eo4g3TxIWpRfYzWvvAtCpvyt6Ex0D4718Fhi%2FR&wx_header=0",target:"_blank",rel:"noopener noreferrer"},f=(0,t.Uk)("这一次，彻底弄懂 JavaScript 执行机制"),g={href:"https://mp.weixin.qq.com/s?__biz=MzA4ODUzNTE2Nw==&mid=2451049376&idx=1&sn=2ab8d83f92b710bd6bf5da0c64cf3e21&chksm=87c412b0b0b39ba6d0ab06f0b26b1ced5cb35dd7c44bb4309aa05bafc0b4e354ed41997eff7f&mpshare=1&scene=1&srcid=09103ic17JhVKBc8J44uJvZB&sharer_sharetime=1599699680888&sharer_shareid=68eb5b2b3e4592fb6bbcbd3555f71d06&key=82003248020682faeafe66402d47658ff652fa14a8cbd6e827e9cd96549ae65bb893329ffeac5b794e0819eec65acc440d922288d5f72a3b3875cc3cd8eaeae9862d98cfcc056321f4acf4a3130b42bedb166d95d5e136673958adeadf0e6870638e90bdc968428e0151acc9aa91f31c7b482b8a6215cae8edf475f408faf435&ascene=1&uin=MjY5MTk2ODkxOQ%3D%3D&devicetype=Windows+10+x64&version=62090529&lang=zh_CN&exportkey=A2iEX7bxzZv29Cbl2TuTJFw%3D&pass_ticket=CyghTbXdqVMYt3zerRhF2HxsE7Eo4g3TxIWpRfYzWvvAtCpvyt6Ex0D4718Fhi%2FR&wx_header=0",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("面试一定会问到的-js 事件循环"),v={href:"https://juejin.cn/post/6969028296893792286",target:"_blank",rel:"noopener noreferrer"},q=(0,t.Uk)("掘金-动图学习 EventLoop"),y={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[e,(0,t._)("a",o,[c,(0,t.Wm)(a)])]),l,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",u,[i,(0,t.Wm)(a)])]),(0,t._)("li",null,[(0,t._)("a",r,[k,(0,t.Wm)(a)])]),(0,t._)("li",null,[(0,t._)("a",b,[d,(0,t.Wm)(a)])]),(0,t._)("li",null,[(0,t._)("a",m,[f,(0,t.Wm)(a)])]),(0,t._)("li",null,[(0,t._)("a",g,[h,(0,t.Wm)(a)])]),(0,t._)("li",null,[(0,t._)("a",v,[q,(0,t.Wm)(a)])])])],64)}}}}]);