"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[347],{3981:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-031c792e",path:"/computer-base/LeetCode/%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E6%95%B0%E5%AD%97.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"描述",slug:"描述",children:[]},{level:2,title:"思路",slug:"思路",children:[]},{level:2,title:"解法",slug:"解法",children:[{level:3,title:"indexOf 和 lastIndexOf",slug:"indexof-和-lastindexof",children:[]},{level:3,title:"位运算",slug:"位运算",children:[]}]}],filePathRelative:"computer-base/LeetCode/只出现一次的数字.md",git:{}}},7280:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var e=a(6252);const p=(0,e.uE)('<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。</p><p>说明：</p><p>你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？</p><p>示例 1:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>输入: [2,2,1]\n输出: 1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>示例  2:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>输入: [4,1,2,1,2]\n输出: 4\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',8),t=(0,e.Uk)("链接："),l={href:"https://leetcode-cn.com/problems/single-number",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("只出现一次的数字"),o=(0,e.uE)('<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>常见的思路，其实很简单，使用数组循环遍历元素，然后逐一判断是否还有其他的相同的元素即可。</p><h2 id="解法" tabindex="-1"><a class="header-anchor" href="#解法" aria-hidden="true">#</a> 解法</h2><h3 id="indexof-和-lastindexof" tabindex="-1"><a class="header-anchor" href="#indexof-和-lastindexof" aria-hidden="true">#</a> indexOf 和 lastIndexOf</h3><p>假如有一个数组，从前面搜素和从后面搜索的索引地址都是一样的话，则说明是一个仅为出现一次的数组。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">singleNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> item <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">===</span> nums<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> item<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h3><p>除此之外还可以使用位运算来解决。</p><p>涉及到二进制的运算</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>\n * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">singleNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        ans <span class="token operator">^=</span> num<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>参考：https://leetcode-cn.com/problems/single-number/solution/hua-jie-suan-fa-136-zhi-chu-xian-yi-ci-de-shu-zi-b/</p>',11),u={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[t,(0,e._)("a",l,[c,(0,e.Wm)(a)])]),o],64)}}}}]);