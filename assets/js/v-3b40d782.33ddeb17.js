"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1812],{9327:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-3b40d782",path:"/computer-base/LeetCode/%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"描述",slug:"描述",children:[]},{level:2,title:"解法",slug:"解法",children:[{level:3,title:"递归",slug:"递归",children:[]},{level:3,title:"迭代",slug:"迭代",children:[]}]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"computer-base/LeetCode/反转链表.md",git:{}}},7238:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。</p><p><strong>示例 1：</strong></p><p>输入：head = [1,2,3,4,5] 输出：[5,4,3,2,1]</p><p><strong>示例 2：</strong></p><p>输入：head = [1,2] 输出：[2,1]</p><p><strong>示例 3：</strong></p><p>输入：head = [] 输出：[]</p><p>进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？</p><h2 id="解法" tabindex="-1"><a class="header-anchor" href="#解法" aria-hidden="true">#</a> 解法</h2><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h3><p>首先想到的是递归，将大问题缩小大小问题，然后在逐步解决。 以[1,2]=&gt;[2,1]为例：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> node1 <span class="token operator">=</span> <span class="token punctuation">{</span> val<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> next<span class="token operator">:</span> node2 <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> node2 <span class="token operator">=</span> <span class="token punctuation">{</span> val<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> next<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// 将 [1,2]反转为[2,1]</span>\n<span class="token keyword">let</span> node1 <span class="token operator">=</span> <span class="token punctuation">{</span> val<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> next<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> node2 <span class="token operator">=</span> <span class="token punctuation">{</span> val<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> next<span class="token operator">:</span> node1 <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这一步中，进行的操作是：</p><ol><li>node2(node1.next).next = node1;</li><li>node1.next = null;</li></ol><p>边界条件是：当 node 本身 或者 node.next 为 null 时，其实就是最后一个，就不必再进行下一步操作了。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 判断边界条件</span>\n    <span class="token keyword">return</span> head<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 拿到下一个的递归node</span>\n  <span class="token keyword">const</span> newHead <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 重复赋值和断开操作</span>\n  head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>\n  head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token comment">// 返回操作后的值</span>\n  <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h3><p>迭代的思路是一样的，先赋值，然后在断开与上一个的链接。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// let node = {val: 1,next: {val: 2,next: null}}</span>\n<span class="token keyword">function</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> current <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">// 当前节点</span>\n  <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 当前节点的前一个节点prev</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 保存当前节点的next</span>\n    <span class="token keyword">let</span> temp <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n    <span class="token comment">// 将当前节点的next指向前一个节点</span>\n    current<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">;</span> \n    <span class="token comment">// 更新上一个节点</span>\n    prev <span class="token operator">=</span> current<span class="token punctuation">;</span> \n    <span class="token comment">// 更新current</span>\n    current <span class="token operator">=</span> temp<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> prev<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>https://juejin.cn/post/6844904184941117448</li></ul>',22),p={render:function(n,s){return e}}}}]);