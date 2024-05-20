"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4604],{2010:(e,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-57cf7c9d",path:"/articles/Next/%E4%BD%BF%E7%94%A8PM2%E9%83%A8%E7%BD%B2Next%E6%9C%8D%E5%8A%A1.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"使用 PM2 部署 Next 服务",slug:"使用-pm2-部署-next-服务",children:[]},{level:2,title:"准备",slug:"准备",children:[]},{level:2,title:"安装 Node、PM2",slug:"安装-node、pm2",children:[]},{level:2,title:"部署 Next 服务",slug:"部署-next-服务",children:[]},{level:2,title:"常用命令",slug:"常用命令",children:[{level:3,title:"登陆登出",slug:"登陆登出",children:[]},{level:3,title:"查询端口并关闭：",slug:"查询端口并关闭",children:[]},{level:3,title:"PM2 常用命令",slug:"pm2-常用命令",children:[]}]}],filePathRelative:"articles/Next/使用PM2部署Next服务.md",git:{}}},561:(e,n,a)=>{a.r(n),a.d(n,{default:()=>g});var l=a(6252);const s=(0,l._)("h2",{id:"使用-pm2-部署-next-服务",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#使用-pm2-部署-next-服务","aria-hidden":"true"},"#"),(0,l.Uk)(" 使用 PM2 部署 Next 服务")],-1),t=(0,l._)("p",null,"最近阿里云 99 服务器比较火，我也买了一个玩玩，感觉不错，自用足矣，平常写点东西，部署一些服务，用着也挺舒服。",-1),i=(0,l._)("p",null,"最近学习的 Next 框架，感觉挺好用，就打算部署一个人博客，但是部署到服务器上。",-1),r=(0,l._)("p",null,"部署的的时候发现，对比 Vercel，服务器的部署方式有点麻烦，需要安装 Node、然后还要安装 PM2 管理进程，于是就打算写一篇文章记录一下。",-1),d=(0,l._)("h2",{id:"准备",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#准备","aria-hidden":"true"},"#"),(0,l.Uk)(" 准备")],-1),p=(0,l.Uk)("首先，你需要准备一台服务器，我这里使用的是阿里云服务器，如果你需要购买的话，我还是推荐"),c={href:"https://www.aliyun.com/minisite/goods?userCode=wd4lg1fn",target:"_blank",rel:"noopener noreferrer"},u=(0,l.Uk)("阿里云 99 一年，可续 4 年"),m=(0,l.Uk)("。"),o=(0,l.uE)('<p>服务器是安装的 CentOS, 购买后直接设置密码，然后使用 Xshell 连接服务器。</p><h2 id="安装-node、pm2" tabindex="-1"><a class="header-anchor" href="#安装-node、pm2" aria-hidden="true">#</a> 安装 Node、PM2</h2><p>首先登陆到服务器：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ssh username@ip\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>回车输入密码即可，然后安装 Node</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt-get update\nsudo apt-get install nodejs\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>安装成功后，使用命令查看版本：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>node -v\nnpm -v\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>版本号显示出来，说明安装成功。</p><p>PM2 是一个轻量级的、开源的管理工具，可用于快速、安全地启动和管理 Node.js 应用程序。安装 PM2 很简单，你可以使用以下命令来安装：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo npm install pm2 -g\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后使用命令查看版本：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pm2 -version\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>版本号显示出来，说明安装成功。</p><h2 id="部署-next-服务" tabindex="-1"><a class="header-anchor" href="#部署-next-服务" aria-hidden="true">#</a> 部署 Next 服务</h2><p>首先使用 FTP 工具，将项目上传到服务器，我这里使用的是 FileZilla，上传成功后，使用命令进入项目目录：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /home/www/next-blog\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>运行打包命令：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install\nnpm run build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>启动 Next 服务</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pm2 start --name yourappname npm -- start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>也可以指定端口启动：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pm2 start npm --name &quot;yourappname&quot; -- start -- -p 8000\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>启动成功后，使用命令查看服务状态：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pm2 status\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果看到类似下面的信息，说明启动成功： <img src="https://s2.loli.net/2023/12/15/n68FDr3gkLPUzvl.png" alt="image.png"></p><p>然后就可以通过 ip:port 访问了，比如我的 ip 是 123.123.123.123，端口是 3000，那么访问地址就是： http://123.123.123.123:3000， run 起来后，会自动打开浏览器，然后就可以看到页面了。</p><p>如果看不到，那可能是安全组没看，需要到服务设置里查询一下安全组，放开之后就可以正常访问了。</p><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="登陆登出" tabindex="-1"><a class="header-anchor" href="#登陆登出" aria-hidden="true">#</a> 登陆登出</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ssh username@ip\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>exit\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="查询端口并关闭" tabindex="-1"><a class="header-anchor" href="#查询端口并关闭" aria-hidden="true">#</a> 查询端口并关闭：</h3><p>查找占用目标端口的进程可以使用</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo lsof -i :端口号\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>命令来查找占用目标端口的进程，其中端口号是你想要关闭的端口的实际数字。该命令会列出占用该端口的进程的详细信息，包括进程 ID（PID）和进程名称。</p><p>关闭占用端口的进程可以使用</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo kill -9 进程ID\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>命令来关闭占用端口的进程，其中进程 ID 是上一步中找到的占用端口的进程的 ID。该命令会强制终止该进程，释放端口。</p><p>确认端口已关闭 为了确认端口已经成功关闭，可以再次使用</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo lsof -i :端口号\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>命令来查找该端口的占用情况。如果没有输出结果，说明该端口已经成功关闭。</p><h3 id="pm2-常用命令" tabindex="-1"><a class="header-anchor" href="#pm2-常用命令" aria-hidden="true">#</a> PM2 常用命令</h3><p>PM2 是一个流行的进程管理器，它可以帮助你管理和维护在服务器上运行的应用程序。 以下是一些常用的 PM2 命令：</p><ul><li>pm2 start &lt;app_name&gt;：启动一个应用程序。</li><li>pm2 restart &lt;app_name&gt;：重启一个应用程序。</li><li>pm2 stop &lt;app_name&gt;：停止一个应用程序。</li><li>pm2 delete &lt;app_name&gt;：删除一个应用程序。</li><li>pm2 show &lt;app_name&gt;：展示一个应用程序的详情。</li><li>pm2 list：列出所有正在运行的应用程序。</li><li>pm2 monit：监视所有应用程序的 CPU 和内存使用情况。</li><li>pm2 logs：显示所有应用程序的日志。</li><li>pm2 flush：清空所有应用程序的日志。</li><li>pm2 save：保存当前应用程序列表。</li><li>pm2 resurrect：重新加载保存的应用程序列表。</li><li>pm2 update：保存当前进程，杀死 PM2，并恢复进程。</li></ul>',45),g={render:function(e,n){const a=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[s,t,i,r,d,(0,l._)("p",null,[p,(0,l._)("a",c,[u,(0,l.Wm)(a)]),m]),o],64)}}}}]);