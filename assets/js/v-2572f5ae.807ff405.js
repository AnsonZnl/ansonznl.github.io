"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8856],{9050:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-2572f5ae",path:"/articles/WeApp/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BDswiper%E6%97%B6%E4%B8%8D%E6%98%BE%E7%A4%BA%E7%9A%84%E9%97%AE%E9%A2%98%EF%BC%88%E7%88%AC%E5%9D%91%EF%BC%89.html",title:"微信小程序 动态加载swiper时不显示的问题（爬坑）",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"问题一",slug:"问题一",children:[]},{level:2,title:"问题二",slug:"问题二",children:[]},{level:2,title:"参考：",slug:"参考",children:[]}],filePathRelative:"articles/WeApp/微信小程序动态加载swiper时不显示的问题（爬坑）.md",git:{}}},8850:(n,a,s)=>{s.r(a),s.d(a,{default:()=>h});var e=s(6252);const t=(0,e.uE)('<h1 id="微信小程序-动态加载swiper时不显示的问题-爬坑" tabindex="-1"><a class="header-anchor" href="#微信小程序-动态加载swiper时不显示的问题-爬坑" aria-hidden="true">#</a> 微信小程序 动态加载swiper时不显示的问题（爬坑）</h1><h2 id="问题一" tabindex="-1"><a class="header-anchor" href="#问题一" aria-hidden="true">#</a> 问题一</h2><p>报错信息</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>TypeError: Cannot read property &#39;$$&#39; of undefined\n    at HTMLElement._attached.wx.getPlatform._touchstartHandlerForDevtools\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>解决方法：因为小程序会保留上一次滑动swiper时候的current，所以会出现上次滑动到的current在这次的数据中不存在问题，所以，每次动态加载swiper-item前，需要设置swiper的current属性为0</p><h2 id="问题二" tabindex="-1"><a class="header-anchor" href="#问题二" aria-hidden="true">#</a> 问题二</h2><p>swiper 的current每次设置了0，但是还是不显示 swiper，检查元素是存在的，并且current = -1</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper</span> <span class="token attr-name">current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>-1<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解决方法，动态设置swiper-item的数据时，还需设置current = 0， 并且current和swiperList不能在一个this.setData中设置， 要先setData swiperList 然后在setData current 我是这样写的：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  swiperItem<span class="token operator">:</span> list\n<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    current<span class="token operator">:</span> <span class="token number">0</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">//在每次给swiper赋值之后在它的回调中在赋值current</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>之后没有问题成功解决，希望对你有所帮助。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考：</h2>',12),p={href:"https://blog.csdn.net/m0_37270964/article/details/103719778",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("https://blog.csdn.net/m0_37270964/article/details/103719778"),l={href:"https://www.aiyingli.com/50779.html",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("https://www.aiyingli.com/50779.html"),i={href:"https://developers.weixin.qq.com/community/develop/doc/000cae89c0cc485873a77891056400",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("https://developers.weixin.qq.com/community/develop/doc/000cae89c0cc485873a77891056400"),u={href:"http://html52.com/archives/11174.html",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("http://html52.com/archives/11174.html"),h={render:function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("ol",null,[(0,e._)("li",null,[(0,e._)("p",null,[(0,e._)("a",p,[r,(0,e.Wm)(s)])])]),(0,e._)("li",null,[(0,e._)("p",null,[(0,e._)("a",l,[c,(0,e.Wm)(s)])])]),(0,e._)("li",null,[(0,e._)("p",null,[(0,e._)("a",i,[o,(0,e.Wm)(s)])])]),(0,e._)("li",null,[(0,e._)("p",null,[(0,e._)("a",u,[d,(0,e.Wm)(s)])])])])],64)}}}}]);