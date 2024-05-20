"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8210],{8162:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-07594448",path:"/articles/Browser/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%88%AA%E5%B1%8F%E6%96%B9%E6%A1%88%E5%88%86%E6%9E%90.html",title:"浏览器截图方案分析",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"html2canvas",slug:"html2canvas",children:[]},{level:2,title:"dom-to-image",slug:"dom-to-image",children:[]},{level:2,title:"webRTC",slug:"webrtc",children:[]},{level:2,title:"截图后上传",slug:"截图后上传",children:[]},{level:2,title:"示例",slug:"示例",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"articles/Browser/浏览器截屏方案分析.md",git:{}}},1149:(n,s,a)=>{a.r(s),a.d(s,{default:()=>D});var p=a(6252);const t=(0,p.uE)('<h1 id="浏览器截图方案分析" tabindex="-1"><a class="header-anchor" href="#浏览器截图方案分析" aria-hidden="true">#</a> 浏览器截图方案分析</h1><p><strong>页面截屏</strong>是前端经常遇到的需求，比如页面生成海报，弹窗图片分享等。</p><p>以下是我整理三种截图方案：</p><ol><li>html2canvas</li><li>dom-to-image</li><li>webRTC</li></ol><h2 id="html2canvas" tabindex="-1"><a class="header-anchor" href="#html2canvas" aria-hidden="true">#</a> html2canvas</h2>',5),e={href:"http://html2canvas.hertzen.com/",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("html2canvas"),c=(0,p.Uk)(" 用的比较广泛的前端截图方案，先将 DOM 一个个 转为 Canvas 然后导出图片（使用 canvas 自带的 toDataUrl、toBobl）即可。使用起来应该是兼容性比较好的方案了，能解决大部分的需求，但是也有一写小问题，如："),l=(0,p.uE)('<ol><li>图片跨域，开启</li><li>CSS 属性错乱</li><li>遇到 canvas 元素导出后为透明色。</li></ol><p>大部分问题还是可以通过配置和百度解决的</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getDomImg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">eleId</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">html2canvas</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>eleId<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        <span class="token comment">//superMap整个页面的节点</span>\n        backgroundColor<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">//画出来的图片有白色的边框,不要可设置背景为透明色（null）</span>\n        allowTaint<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        useCORS<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//支持图片跨域</span>\n        scale<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//设置放大的倍数</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">canvas</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token comment">//截图用img元素承装，显示在页面的上</span>\n            <span class="token keyword">let</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            img<span class="token punctuation">.</span>src <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&quot;image/jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// toDataURL :图片格式转成 base64</span>\n            <span class="token comment">// 直接下载</span>\n            <span class="token keyword">let</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            a<span class="token punctuation">.</span>href <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&quot;image/jpeg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            a<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">;</span>\n            a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;html2canvas err&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="dom-to-image" tabindex="-1"><a class="header-anchor" href="#dom-to-image" aria-hidden="true">#</a> dom-to-image</h2><p>使用 svg，通过 createObjectURL 或 encodeURIComponent 处理 svg 得到图像资源，可以把 svg 绘制到 canvas。</p>',5),u={href:"https://www.npmjs.com/package/dom-to-image-more",target:"_blank",rel:"noopener noreferrer"},i=(0,p.Uk)("dom-to-image-more"),r=(0,p.Uk)(" 是"),k={href:"https://github.com/tsayen/dom-to-image",target:"_blank",rel:"noopener noreferrer"},b=(0,p.Uk)("dom-to-image"),m=(0,p.Uk)("的升级版 将 HTMl 放到 SVG 里，然后创建一个以 SVG 作为源的 Image 元素"),d=(0,p.uE)('<p>但是也有一些问题如： svg 中不允许外部资源（js，css，img 的 url 等），svg 中不支持执行 js，需要经过处理，也不能完全还原</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getDomImg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">eleId</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    domtoimage\n        <span class="token punctuation">.</span><span class="token function">toPng</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>eleId<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dataUrl</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            a<span class="token punctuation">.</span>href <span class="token operator">=</span> dataUrl<span class="token punctuation">;</span>\n            a<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">;</span>\n            a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;生成失败&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="webrtc" tabindex="-1"><a class="header-anchor" href="#webrtc" aria-hidden="true">#</a> webRTC</h2>',3),g=(0,p.Uk)("使用浏览器原生 API——"),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API",target:"_blank",rel:"noopener noreferrer"},f=(0,p.Uk)("webERT"),v=(0,p.Uk)("中的"),w={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getDisplayMedia",target:"_blank",rel:"noopener noreferrer"},y=(0,p.Uk)("getDisplayMedia"),q=(0,p.Uk)("可以将窗口中的资源以录屏方式从其中拿出一帧，但是需要用户授权和做一些窗口选择，相比于前两种方案做不到默认截图。"),E=(0,p.uE)('<p>但是优势也很明显，就是不会有什么样式错乱、图片跨域等问题。因为使用的浏览器原生方法，基本上用户看到是什么样子，截图出来就是什么样子，1: 1 还原。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getDomImg</span><span class="token punctuation">(</span><span class="token parameter">videoId<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> videoElem<span class="token operator">:</span> any <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>videoId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> displayMediaOptions <span class="token operator">=</span> <span class="token punctuation">{</span>\n        audio<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        video<span class="token operator">:</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width<span class="token punctuation">,</span> height<span class="token operator">:</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// cursor: &quot;always&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    navigator<span class="token punctuation">.</span>mediaDevices\n        <span class="token punctuation">.</span><span class="token function">getDisplayMedia</span><span class="token punctuation">(</span>displayMediaOptions<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">stream</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            videoElem<span class="token punctuation">.</span>srcObject <span class="token operator">=</span> stream<span class="token punctuation">;</span>\n            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> videoElem<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>\n                canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> videoElem<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>\n                canvas\n                    <span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>\n                        videoElem<span class="token punctuation">,</span>\n                        <span class="token number">0</span><span class="token punctuation">,</span>\n                        <span class="token number">0</span><span class="token punctuation">,</span>\n                        window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width<span class="token punctuation">,</span>\n                        window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height<span class="token punctuation">,</span>\n                        <span class="token number">0</span><span class="token punctuation">,</span>\n                        <span class="token number">0</span><span class="token punctuation">,</span>\n                        canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span>\n                        canvas<span class="token punctuation">.</span>height\n                    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">var</span> dataURL <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&quot;image/webp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">let</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                a<span class="token punctuation">.</span>href <span class="token operator">=</span> dataURL<span class="token punctuation">;</span>\n                a<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">;</span>\n                a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">let</span> tracks <span class="token operator">=</span> videoElem<span class="token punctuation">.</span>srcObject<span class="token punctuation">.</span><span class="token function">getTracks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                tracks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">track</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> track<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                videoElem<span class="token punctuation">.</span>srcObject <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>需要在代码中放入一个 Video 标签</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="截图后上传" tabindex="-1"><a class="header-anchor" href="#截图后上传" aria-hidden="true">#</a> 截图后上传</h2><p>如果有将截图上传的需求，可以转换一个格式在上传。</p><p>canvas 导出的 base64 是不可以直接上传到服务器的，所以需要转一下格式，我这边找了转换 Blob 和 file 两种格式的方法。我用的将图片转为 Blob后上传的。</p><ol><li>base64转化为Blob对象</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// </span>\n<span class="token keyword">function</span> <span class="token function">convertBase64ToBlob</span><span class="token punctuation">(</span><span class="token parameter">imageEditorBase64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> base64Arr <span class="token operator">=</span> imageEditorBase64<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> imgtype <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> base64String <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>base64Arr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//如果是图片base64，去掉头信息</span>\n        base64String <span class="token operator">=</span> base64Arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        imgtype <span class="token operator">=</span> base64Arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>\n            base64Arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>\n            base64Arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;;&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 将base64解码</span>\n    <span class="token keyword">var</span> bytes <span class="token operator">=</span> <span class="token function">atob</span><span class="token punctuation">(</span>base64String<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//var bytes = base64;</span>\n    <span class="token keyword">var</span> bytesCode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span>bytes<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 转换为类型化数组</span>\n    <span class="token keyword">var</span> byteArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>bytesCode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 将base64转换为ascii码</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> bytes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        byteArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> bytes<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 生成Blob对象（文件对象）</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>bytesCode<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> imgtype <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><ol start="2"><li>base64 转 formData</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\n<span class="token keyword">function</span> <span class="token function">base64ToFile</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> fileName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> dataArr <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> byteString <span class="token operator">=</span> <span class="token function">atob</span><span class="token punctuation">(</span>dataArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> options<span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">{</span>\n        type<span class="token operator">:</span> <span class="token string">&quot;image/jpeg&quot;</span><span class="token punctuation">,</span>\n        endings<span class="token operator">:</span> <span class="token string">&quot;native&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> u8Arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>byteString<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> byteString<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        u8Arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> byteString<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">let</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> fileOfBlob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">[</span>u8Arr<span class="token punctuation">]</span><span class="token punctuation">,</span> fileName <span class="token operator">+</span> <span class="token string">&quot;.jpg&quot;</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回文件流</span>\n    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span> fileOfBlob<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span> formData<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">debugger</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> formData<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>GitHub：https://github.com/AnsonZnl/web-screenshot</p><p>代码基于 Create React App 演示三种截图方法的基本使用方式。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',15),j={href:"https://juejin.cn/post/6917133503297486861",target:"_blank",rel:"noopener noreferrer"},A=(0,p.Uk)("史上最详细浏览器端网页截图方案解析"),U={href:"https://juejin.cn/post/6844903632958144520#comment",target:"_blank",rel:"noopener noreferrer"},B=(0,p.Uk)("一款实用的前端截图工具"),D={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("p",null,[(0,p._)("a",e,[o,(0,p.Wm)(a)]),c]),l,(0,p._)("p",null,[(0,p._)("a",u,[i,(0,p.Wm)(a)]),r,(0,p._)("a",k,[b,(0,p.Wm)(a)]),m]),d,(0,p._)("p",null,[g,(0,p._)("a",h,[f,(0,p.Wm)(a)]),v,(0,p._)("a",w,[y,(0,p.Wm)(a)]),q]),E,(0,p._)("ul",null,[(0,p._)("li",null,[(0,p._)("a",j,[A,(0,p.Wm)(a)])]),(0,p._)("li",null,[(0,p._)("a",U,[B,(0,p.Wm)(a)])])])],64)}}}}]);