"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2657],{417:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-c50d72b4",path:"/articles/WeApp/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%8E%88%E6%9D%83%E7%99%BB%E5%BD%95%E5%BC%B9%E6%A1%86%E7%BB%84%E4%BB%B6.html",title:"微信授权组件",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"微信小程序授权登录弹框",slug:"微信小程序授权登录弹框",children:[]},{level:2,title:"图片示例",slug:"图片示例",children:[]}],filePathRelative:"articles/WeApp/微信小程序授权登录弹框组件.md",git:{}}},8554:(n,a,s)=>{s.r(a),s.d(a,{default:()=>r});var e=s(6252);const p=(0,e.uE)('<h1 id="微信授权组件" tabindex="-1"><a class="header-anchor" href="#微信授权组件" aria-hidden="true">#</a> 微信授权组件</h1><p>因为需要做一个小程序的授权弹框，所以就在github上找到一个类似的组件，clone下来之后发现了一些问题，已经修复，之后提交了合并请求，但是没有回应. Github地址：<a href="%5Bhttps://github.com/AnsonZnl/wxlogin%5D(https://github.com/AnsonZnl/wxlogin)">小程序登录组件</a></p><h2 id="微信小程序授权登录弹框" tabindex="-1"><a class="header-anchor" href="#微信小程序授权登录弹框" aria-hidden="true">#</a> 微信小程序授权登录弹框</h2><p>微信小程序登录框 1.安装方法：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/BkHumor/wxlogin.git\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>2.使用方法：</p><p>（1）在所需页面的JSON文件中引入登录框组件：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;component&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;wxc-dialog&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/components/dialog/dialog&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>（2）修改登录提示信息。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>loginInfo<span class="token operator">:</span><span class="token punctuation">{</span>\n      title<span class="token operator">:</span><span class="token string">&#39;微信授权&#39;</span><span class="token punctuation">,</span>\n      content<span class="token operator">:</span><span class="token string">&#39;获得您的公开信息(昵称、头像等)&#39;</span><span class="token punctuation">,</span>\n      logName<span class="token operator">:</span><span class="token string">&#39;Gayhub&#39;</span><span class="token punctuation">,</span>\n      logImage<span class="token operator">:</span><span class="token string">&#39;../../images/logo.jpg&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',10),t=(0,e.Uk)("可以参考"),l={href:"https://github.com/AnsonZnl/wxlogin",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("example"),i=(0,e.uE)('<h2 id="图片示例" tabindex="-1"><a class="header-anchor" href="#图片示例" aria-hidden="true">#</a> 图片示例</h2><p><img src="https://upload-images.jianshu.io/upload_images/7072486-70ad5a236b2de8c1.png" alt=""></p><p><img src="https://upload-images.jianshu.io/upload_images/7072486-b4ae4977f0f1806e?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="image"></p><p><img src="https://upload-images.jianshu.io/upload_images/7072486-fd68e9bffaadb33d?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="image"></p>',4),r={render:function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[t,(0,e._)("a",l,[o,(0,e.Wm)(s)])]),i],64)}}}}]);