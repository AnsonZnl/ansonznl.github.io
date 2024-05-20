"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9650],{6042:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-60f4d138",path:"/articles/Vue/%E8%99%9A%E6%8B%9FDOM%E4%B9%8BDiff%E7%AE%97%E6%B3%95.html",title:"虚拟 DOM 之 Diff 算法",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Diff 逻辑",slug:"diff-逻辑",children:[{level:3,title:"比较规则",slug:"比较规则",children:[]}]},{level:2,title:"Patch 逻辑",slug:"patch-逻辑",children:[]},{level:2,title:"总结",slug:"总结",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"articles/Vue/虚拟DOM之Diff算法.md",git:{}}},7805:(n,s,a)=>{a.r(s),a.d(s,{default:()=>M});var p=a(6252);const t=(0,p.uE)('<h1 id="虚拟-dom-之-diff-算法" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-之-diff-算法" aria-hidden="true">#</a> 虚拟 DOM 之 Diff 算法</h1><p>上一节讲了<a href="./%E4%B8%80%E6%AC%A1%E6%90%9E%E6%87%82-Vue%E4%B9%8B%E8%99%9A%E6%8B%9FDOM">虚拟 DOM</a>，但是虚拟 DOM 是如何更新的？新旧节点的 path 又是如何进行的？这都需要一个 Diff 来完成。</p><p>给定任意两颗数，采用<strong>先序深度优先遍历</strong>的算法，找到最少的转换步骤。</p><p>DOM-diff 比较两个虚拟 DOM 的区别，也就是在比较两个对象的区别。</p><p>作用：<strong>根据两个虚拟 DOM 对象创建出补丁，然后打补丁、更新 DOM。</strong></p><h2 id="diff-逻辑" tabindex="-1"><a class="header-anchor" href="#diff-逻辑" aria-hidden="true">#</a> Diff 逻辑</h2><p>diff 的作用也了解了，他就是通过对比新老 Node，从而得到最后的 Patch</p><p>接受两个参数 newNode 和 oldNode</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// diff.js</span>\n<span class="token keyword">function</span> <span class="token function">diff</span><span class="token punctuation">(</span><span class="token parameter">odlTree<span class="token punctuation">,</span> newTree</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 声明变量 patches 用来存放补丁的对象</span>\n  <span class="token keyword">let</span> patches <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token comment">// 第一次比较的 应该是树的第0个索引</span>\n  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token comment">// 递归树</span>\n  <span class="token function">walk</span><span class="token punctuation">(</span>odlTree<span class="token punctuation">,</span> newTree<span class="token punctuation">,</span> index<span class="token punctuation">,</span> patches<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> patches<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">walk</span><span class="token punctuation">(</span><span class="token parameter">oldNode<span class="token punctuation">,</span> newNode<span class="token punctuation">,</span> index<span class="token punctuation">,</span> patches</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 每一个元素都有一个补丁</span>\n  <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>newNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ----规则 1 新节点不存在----</span>\n    current<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token operator">:</span> <span class="token string">&quot;REMOVE&quot;</span><span class="token punctuation">,</span>\n      index<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isString</span><span class="token punctuation">(</span>oldNode<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isString</span><span class="token punctuation">(</span>newNode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 是文本节点</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldNode <span class="token operator">!==</span> newNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 文本发生了变化</span>\n      current<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        type<span class="token operator">:</span> <span class="token string">&quot;TEXT&quot;</span><span class="token punctuation">,</span>\n        text<span class="token operator">:</span> newNode<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldNode<span class="token punctuation">.</span>type <span class="token operator">===</span> newNode<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 比较属性变化</span>\n    <span class="token keyword">let</span> attr <span class="token operator">=</span> <span class="token function">diffAttr</span><span class="token punctuation">(</span>oldNode<span class="token punctuation">.</span>props<span class="token punctuation">,</span> newNode<span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span>keys<span class="token punctuation">[</span>attr<span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 有更新的属性</span>\n      current<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        type<span class="token operator">:</span> <span class="token string">&quot;ATTR&quot;</span><span class="token punctuation">,</span>\n        attr<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 如果有子节点，递归子节点</span>\n    <span class="token function">diffChildren</span><span class="token punctuation">(</span>oldNode<span class="token punctuation">.</span>children<span class="token punctuation">,</span> newNode<span class="token punctuation">.</span>children<span class="token punctuation">,</span> patches<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 都没有 说明节点被替换了</span>\n    current<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token operator">:</span> <span class="token string">&quot;REPLACE&quot;</span><span class="token punctuation">,</span>\n      newNode<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 当前节点有补丁</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    patches<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> current<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 比较是否是 文本 类型</span>\n<span class="token keyword">function</span> <span class="token function">isString</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">typeof</span> node <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 比较属性的差异</span>\n<span class="token keyword">function</span> <span class="token function">diffAttr</span><span class="token punctuation">(</span><span class="token parameter">oldProps<span class="token punctuation">,</span> newProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> patch <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token comment">// 1. 改变的属性</span>\n  <span class="token comment">// 判断新老属性的变更，把最后的变更放在patch中</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> oldProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> newProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 以新属性为准，因为新属性是最后的变更</span>\n      patch<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 2. 新增的属性</span>\n  <span class="token comment">// 判断 假如新的属性，在老属性中没有，也添加patch</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> newProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>oldProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      patch<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> patch<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 基于一个num序号来实现的</span>\n<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token comment">// 递归子节点</span>\n<span class="token keyword">function</span> <span class="token function">diffChildren</span><span class="token punctuation">(</span><span class="token parameter">oldChildren<span class="token punctuation">,</span> newChildren<span class="token punctuation">,</span> patches</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 比较老的第一个和新的第一个</span>\n  oldChildren<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">walk</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">++</span>num<span class="token punctuation">,</span> patches<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// https://www.cnblogs.com/wind-lanyan/p/9061684.html</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br></div></div><h3 id="比较规则" tabindex="-1"><a class="header-anchor" href="#比较规则" aria-hidden="true">#</a> 比较规则</h3><ol><li>新 Node 节点不存在时：REMOVE</li><li>文本的变化：TEXT</li><li>节点类型相同，属性不同时：ATTR</li><li>接点类型不同，使用替换：REPLACE</li></ol><h2 id="patch-逻辑" tabindex="-1"><a class="header-anchor" href="#patch-逻辑" aria-hidden="true">#</a> Patch 逻辑</h2><p>其实就是元素去打补丁，通过 type 然后执行不同的操作如新增、删除、移动、修改等...</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// patch</span>\n\n<span class="token keyword">let</span> allPatches<span class="token punctuation">;</span>\n<span class="token keyword">let</span> index2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> patches</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  allPatches <span class="token operator">=</span> patches<span class="token punctuation">;</span>\n  <span class="token comment">// 打补丁</span>\n  <span class="token function">walk2</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">walk2</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> current <span class="token operator">=</span> allPatches<span class="token punctuation">[</span>index2<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> childNodes <span class="token operator">=</span> node<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>\n  <span class="token comment">// 先序遍历 继续遍历递归子节点</span>\n  childNodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">walk2</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// debugger</span>\n    <span class="token function">doPatch</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> current<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//打补丁</span>\n<span class="token keyword">function</span> <span class="token function">doPatch</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> patches</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 遍历所有打过的补丁</span>\n  patches<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">patch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">switch</span> <span class="token punctuation">(</span>patch<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">case</span> <span class="token string">&quot;ATTR&quot;</span><span class="token operator">:</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> patch<span class="token punctuation">.</span>attr<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">let</span> value <span class="token operator">=</span> patch<span class="token punctuation">.</span>attr<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">setAttr</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            node<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n      <span class="token keyword">case</span> <span class="token string">&quot;TEXT&quot;</span><span class="token operator">:</span>\n        node<span class="token punctuation">.</span>textContent <span class="token operator">=</span> patch<span class="token punctuation">.</span>text<span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n      <span class="token keyword">case</span> <span class="token string">&quot;REPLACE&quot;</span><span class="token operator">:</span>\n        <span class="token keyword">let</span> newNode <span class="token operator">=</span> patch<span class="token punctuation">.</span>newNode<span class="token punctuation">;</span>\n        newNode <span class="token operator">=</span>\n          newNode <span class="token keyword">instanceof</span> <span class="token class-name">Element</span>\n            <span class="token operator">?</span> <span class="token function">render</span><span class="token punctuation">(</span>newNode<span class="token punctuation">)</span>\n            <span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>newNode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        node<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">replaceChild</span><span class="token punctuation">(</span>newNode<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n      <span class="token keyword">case</span> <span class="token string">&quot;REMOVE&quot;</span><span class="token operator">:</span>\n        node<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n      <span class="token keyword">default</span><span class="token operator">:</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div>',14),e=(0,p.Uk)("为了便于理解，只是罗列出了一小部分，Vue 的 patch 更复杂，可以参考："),o={href:"https://ustbhuangyi.github.io/vue-analysis/v2/components/patch.html",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("vue 技术揭秘"),l=(0,p.Uk)("和"),u={href:"https://github1s.com/vuejs/vue/blob/HEAD/src/core/vdom/patch.js",target:"_blank",rel:"noopener noreferrer"},r=(0,p.Uk)("vuejs/src/core/vdom/patch"),i=(0,p._)("h2",{id:"总结",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),(0,p.Uk)(" 总结")],-1),k=(0,p.Uk)("代码地址："),b={href:"https://github.com/AnsonZnl/virtual-dom-study",target:"_blank",rel:"noopener noreferrer"},m=(0,p.Uk)("virtual-dom-study"),d=(0,p.uE)("<p><strong>捋一下主要方法的作用：</strong></p><ul><li>Element：创建虚拟 DOM 元素的类 <ul><li>createElement：创建虚拟 DOM 并返回</li></ul></li><li>render：将虚拟 DOM 渲染成真实的 DOM</li><li>diff：对比新老虚拟 DOM，然后返回变更</li><li>patch：将 diff 的变更更新到真实的 DOM 上</li></ul><p><strong>梳理一下整个 DOM-diff 的过程：</strong></p><ul><li>用 JS 对象模拟 DOM（虚拟 DOM）</li><li>把虚拟 DOM 转化成真实的 DOM 并插入到页面中</li><li>如果有事件改变了虚拟 DOM，就比较两个虚拟 DOM 树的差异，得到差异对象（diff)</li><li>最后把差异对象（变化）更新到真实的 DOM 树上（patch）</li></ul>",4),f=(0,p.Uk)("这并不是 Vue，所使用的 diff 方法，只是一个简单的 diff 过程，Vue 的 diff 可以参考："),h={href:"https://github.com/ascoders/weekly/blob/v2/190.%E7%B2%BE%E8%AF%BB%E3%80%8ADOM%20diff%20%E5%8E%9F%E7%90%86%E8%AF%A6%E8%A7%A3%E3%80%8B.md",target:"_blank",rel:"noopener noreferrer"},w=(0,p.Uk)("精读《DOM diff 原理详解》"),y=(0,p.Uk)("和"),E={href:"https://github.com/ascoders/weekly/blob/v2/192.%E7%B2%BE%E8%AF%BB%E3%80%8ADOM%20diff%20%E6%9C%80%E9%95%BF%E4%B8%8A%E5%8D%87%E5%AD%90%E5%BA%8F%E5%88%97%E3%80%8B.md",target:"_blank",rel:"noopener noreferrer"},g=(0,p.Uk)("精读《DOM diff 最长上升子序列》"),D=(0,p._)("h2",{id:"参考",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),(0,p.Uk)(" 参考")],-1),v={href:"https://juejin.cn/post/6844903806132568072#heading-8",target:"_blank",rel:"noopener noreferrer"},O=(0,p.Uk)("学习虚拟 DOM"),M={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("p",null,[e,(0,p._)("a",o,[c,(0,p.Wm)(a)]),l,(0,p._)("a",u,[r,(0,p.Wm)(a)])]),i,(0,p._)("p",null,[k,(0,p._)("a",b,[m,(0,p.Wm)(a)])]),d,(0,p._)("p",null,[f,(0,p._)("a",h,[w,(0,p.Wm)(a)]),y,(0,p._)("a",E,[g,(0,p.Wm)(a)])]),D,(0,p._)("ul",null,[(0,p._)("li",null,[(0,p._)("a",v,[O,(0,p.Wm)(a)])])])],64)}}}}]);