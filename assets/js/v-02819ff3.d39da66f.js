"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8378],{7225:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-02819ff3",path:"/articles/WeApp/%E5%B0%8F%E7%A8%8B%E5%BA%8F-%E5%AE%9E%E7%8E%B0%E8%92%99%E7%89%88%E5%BC%B9%E5%87%BA%E7%AA%97.html",title:"小程序-蒙版弹出窗",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"articles/WeApp/小程序-实现蒙版弹出窗.md",git:{}}},4696:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="小程序-蒙版弹出窗" tabindex="-1"><a class="header-anchor" href="#小程序-蒙版弹出窗" aria-hidden="true">#</a> 小程序-蒙版弹出窗</h1><p><img src="https://i.loli.net/2021/07/30/K6g2dXNhziE3yHG.gif" alt="7072486-2d3ed1a6fc6ce8da.gif"></p><p>话不多说 上代码。 wxml:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showMask<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>弹出<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>\n    <span class="token attr-name">catchtouchmove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preventTouchMove<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert-mask<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{showModal}}<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modalDlg<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{showModal}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelTitle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modeContent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span>\n      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hide-btn<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hideMask<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./../images/tripDetailAlertHide.png<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>wxss:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* 弹窗蒙版 start */</span>\n<span class="token selector">.alert-mask</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> 9000<span class="token punctuation">;</span>\n  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.7<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.modalDlg</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 55%<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 45%<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> -1%<span class="token punctuation">;</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> 9999<span class="token punctuation">;</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 25rpx<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> -370rpx 85rpx<span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> 18rpx<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.modelTitle</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 38rpx<span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.hide-btn</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>\n  <span class="token property">right</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 50rpx<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 50rpx<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/* 弹窗蒙版 end*/</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>js:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  data<span class="token operator">:</span> <span class="token punctuation">{</span>\n    showModal<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">showMask</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      showModal<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">hideMask</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      showModal<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',8),t={render:function(n,s){return p}}}}]);