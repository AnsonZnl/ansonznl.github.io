"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3399],{3316:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-59a4ba57",path:"/articles/Next/%E4%B8%BA%E4%BA%86%E6%96%B9%E4%BE%BF%E5%86%99%E6%96%87%E7%AB%A0%EF%BC%8C%E6%88%91%E5%BC%80%E5%8F%91%E4%BA%86%E4%B8%80%E4%B8%AA%E7%9B%AE%E5%BD%95%E6%A0%91%F0%9F%8C%B2%E7%94%9F%E6%88%90%E5%99%A8.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Next.js",slug:"next-js",children:[]},{level:2,title:"webkitdirectory",slug:"webkitdirectory",children:[]},{level:2,title:"数据转换",slug:"数据转换",children:[]},{level:2,title:"最终效果",slug:"最终效果",children:[]}],filePathRelative:"articles/Next/为了方便写文章，我开发了一个目录树🌲生成器.md",git:{}}},5164:(n,s,a)=>{a.r(s),a.d(s,{default:()=>M});var p=a(6252);const t=(0,p._)("p",null,"这个工具主要是为了方便在写文章的时候，展示自己的项目的目录结构，或者在 README 文件中介绍项目使用的，上传文件夹后可以生成目录结构，支持一键复制。",-1),e=(0,p._)("p",null,[(0,p._)("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/acd66e5e5d734e6d95faa58e6e9b223e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1057&h=795&s=50355&e=png&b=ffffff",alt:"image.png"})],-1),o=(0,p.Uk)("您可以通过以下链接访问："),l={href:"https://www.zhangningle.top/dir-tree/",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("目录树生成器 - 在线使用"),r=(0,p._)("h2",{id:"next-js",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#next-js","aria-hidden":"true"},"#"),(0,p.Uk)(" Next.js")],-1),u=(0,p._)("p",null,"是一个 React 全栈框架，它不仅可以用于构建服务器端渲染（SSR），也支持支持静态渲染。",-1),i=(0,p._)("h2",{id:"webkitdirectory",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#webkitdirectory","aria-hidden":"true"},"#"),(0,p.Uk)(" webkitdirectory")],-1),k=(0,p._)("strong",null,[(0,p._)("code",null,"HTMLInputElement.webkitdirectory")],-1),b=(0,p.Uk)("  是一个反应了 HTML 属性  "),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/file#webkitdirectory",target:"_blank",rel:"noopener noreferrer"},g=(0,p._)("code",null,"webkitdirectory",-1),q=(0,p.Uk)("  的属性，其指示  "),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input",target:"_blank",rel:"noopener noreferrer"},f=(0,p._)("code",null,"<input>",-1),h=(0,p.Uk)("  元素应该让用户选择文件目录而非文件。在选择文件目录后，该目录及其整个内容层次结构将包含在所选项目集内。可以使用  "),y={href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitEntries",title:"Currently only available in English (US)",target:"_blank",rel:"noopener noreferrer"},v=(0,p._)("code",null,"webkitEntries",-1),j=(0,p.Uk)(" (en-US)"),E=(0,p.Uk)("  属性获取选定的文件系统条目。"),_=(0,p._)("br",null,null,-1),w=(0,p.Uk)(" ———————MDN"),x=(0,p._)("p",null,"简而言之 利用这属性，我们可以在浏览器中上传文件夹，并获取到文件的目录结构。",-1),U=(0,p.Uk)("可以看一个简单的栗子 🌰 "),B={href:"https://code.juejin.cn/pen/7292981964927074341",target:"_blank",rel:"noopener noreferrer"},W=(0,p.Uk)("jcode"),A=(0,p.uE)('<p>这个功能，也有一个兼容问题，具体参考这个：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8610c63c53fa4ff9bdf08882562288f5~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=824&amp;h=454&amp;s=52447&amp;e=png&amp;b=fefefe" alt="image.png"></p><p>有一些老版本的浏览器和安卓端火狐浏览器不支持的无法使用该功能。</p><h2 id="数据转换" tabindex="-1"><a class="header-anchor" href="#数据转换" aria-hidden="true">#</a> 数据转换</h2><p>我们要将原数据转换一下</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-   Java/main/main.java\n-   Java/main/main.class\n-   Java/hello/HelloWorld.class\n-   Java/hello/HelloWorld.java\n-   Java/OOP/xx.js\n-   Java/OOP/Person.class\n-   Java/OOP/oop.class\n-   Java/OOP/oop.java\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>转换为：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;folder&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;contents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;folder&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;contents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main.java&quot;</span><span class="token punctuation">,</span>\n                    <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main.class&quot;</span><span class="token punctuation">,</span>\n                    <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;folder&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;contents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HelloWorld.class&quot;</span><span class="token punctuation">,</span>\n                    <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HelloWorld.java&quot;</span><span class="token punctuation">,</span>\n                    <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OOP&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;folder&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;contents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xx.js&quot;</span><span class="token punctuation">,</span>\n                    <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Person.class&quot;</span><span class="token punctuation">,</span>\n                    <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;oop.class&quot;</span><span class="token punctuation">,</span>\n                    <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;oop.java&quot;</span><span class="token punctuation">,</span>\n                    <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><p>将路径结构转化为对象结构，方便我们的后续逻辑处理，转化方法是：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">convertToDirectoryStructure</span><span class="token punctuation">(</span><span class="token parameter">fileList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> directory <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>\n    type<span class="token operator">:</span> <span class="token string">&quot;folder&quot;</span><span class="token punctuation">,</span>\n    contents<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> fileList<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> pathSegments <span class="token operator">=</span> fileList<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>webkitRelativePath<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> currentDirectory <span class="token operator">=</span> directory<span class="token punctuation">;</span>\n\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> pathSegments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> segment <span class="token operator">=</span> pathSegments<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> isDirectory <span class="token operator">=</span> j <span class="token operator">&lt;</span> pathSegments<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">let</span> existingEntry <span class="token operator">=</span> currentDirectory<span class="token punctuation">.</span>contents<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> entry<span class="token punctuation">.</span>name <span class="token operator">===</span> segment<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>existingEntry<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        existingEntry <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> segment <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>isDirectory<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          existingEntry<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;folder&quot;</span><span class="token punctuation">;</span>\n          existingEntry<span class="token punctuation">.</span>contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n          existingEntry<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        currentDirectory<span class="token punctuation">.</span>contents<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>existingEntry<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      currentDirectory <span class="token operator">=</span> existingEntry<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> directory<span class="token punctuation">.</span>contents<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="最终效果" tabindex="-1"><a class="header-anchor" href="#最终效果" aria-hidden="true">#</a> 最终效果</h2><p>最后我们再加上一个一键复制的功能，就完成了。</p>',12),H={href:"https://code.juejin.cn/pen/7292993189483380745",target:"_blank",rel:"noopener noreferrer"},P=(0,p.Uk)("jcode"),D=(0,p.Uk)("最后我是将功能优化后部署到了 GitHub Pagas 上，如何将 Next.js 部署到 GitHub Pages，可以看看我的这篇 "),O={href:"https://juejin.cn/post/7291842185787424780",target:"_blank",rel:"noopener noreferrer"},S=(0,p.Uk)("如何将 Next.js 部署到 Github Pages"),C=(0,p.Uk)("。"),J=(0,p.Uk)("最后希望大家多多使用，给个 star，GitHub 地址："),L={href:"https://github.com/AnsonZnl/dir-tree",target:"_blank",rel:"noopener noreferrer"},N=(0,p.Uk)("dir-tree"),M={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,e,(0,p._)("p",null,[o,(0,p._)("a",l,[c,(0,p.Wm)(a)])]),r,u,i,(0,p._)("blockquote",null,[(0,p._)("p",null,[k,b,(0,p._)("a",m,[g,(0,p.Wm)(a)]),q,(0,p._)("a",d,[f,(0,p.Wm)(a)]),h,(0,p._)("a",y,[v,j,(0,p.Wm)(a)]),E,_,w])]),x,(0,p._)("p",null,[U,(0,p._)("a",B,[W,(0,p.Wm)(a)])]),A,(0,p._)("p",null,[(0,p._)("a",H,[P,(0,p.Wm)(a)])]),(0,p._)("p",null,[D,(0,p._)("a",O,[S,(0,p.Wm)(a)]),C]),(0,p._)("p",null,[J,(0,p._)("a",L,[N,(0,p.Wm)(a)])])],64)}}}}]);