"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5664],{2340:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-3610e0da",path:"/articles/Node/MongoDB%E4%B8%AD%E5%B8%B8%E7%94%A8%E8%AF%AD%E5%8F%A5.html",title:"MongoDB 中常用语句",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"MOngoDB 删除语句",slug:"mongodb-删除语句",children:[]},{level:2,title:"数据库假删除",slug:"数据库假删除",children:[]},{level:2,title:"批量数据的操作和修改",slug:"批量数据的操作和修改",children:[]},{level:2,title:"集合中文档关系",slug:"集合中文档关系",children:[{level:3,title:"一对一",slug:"一对一",children:[]},{level:3,title:"一对多",slug:"一对多",children:[]},{level:3,title:"多对多的关系",slug:"多对多的关系",children:[]}]},{level:2,title:"排序和索引",slug:"排序和索引",children:[{level:3,title:"排序：",slug:"排序",children:[]},{level:3,title:"索引：",slug:"索引",children:[]}]}],filePathRelative:"articles/Node/MongoDB中常用语句.md",git:{}}},8418:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="mongodb-中常用语句" tabindex="-1"><a class="header-anchor" href="#mongodb-中常用语句" aria-hidden="true">#</a> MongoDB 中常用语句</h1><h2 id="mongodb-删除语句" tabindex="-1"><a class="header-anchor" href="#mongodb-删除语句" aria-hidden="true">#</a> MOngoDB 删除语句</h2><p><strong>delete()删除</strong></p><ol><li>删除一个集合 <code>db.collection.deleteOne()</code></li><li>删除多个集合 <code>db.collection.deletMany();</code></li></ol><p><strong>remove()删除</strong></p><ol><li>删除所有的 name：李四的数据 <code>db.student.remove({name:&quot;李四&quot;});</code></li><li>只删除一条 sex:男的数据 仅删除一条 <code>db.student.remove({sex:&quot;男&quot;},true);</code></li><li>删除全部 <code>db.student.remove({});</code></li></ol><h2 id="数据库假删除" tabindex="-1"><a class="header-anchor" href="#数据库假删除" aria-hidden="true">#</a> 数据库假删除</h2><p>有时候用户删除操作的时候，需求是这样的，仅是隐藏这条数据，并不是真的从数据库中删除。 这时候就用到假删除了， 比如这个是张三发的两篇微博：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>student<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&quot;今天心情好&quot;</span><span class="token punctuation">,</span> isDel<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&quot;今天心情一般&quot;</span><span class="token punctuation">,</span> isDel<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="https://gitee.com/zhangningle/imgs/raw/master/blog/Node/mongo-6.png" alt="mongo-6"></p><p>用户增加两条数据，但只保留后一条，删除前一条，这时候用到假删除 ，在添加数据时加上一个字段<code>isDel:0</code><br> 所以当用户删除数据时候 执行的不是 remove 方法而是 update 方法</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>student<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>\n  <span class="token punctuation">{</span> _id<span class="token operator">:</span> <span class="token function">ObjectId</span><span class="token punctuation">(</span><span class="token string">&quot;5bd6a46f1eb7a22fa07cb382&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    $set<span class="token operator">:</span> <span class="token punctuation">{</span>\n      isDel<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="https://gitee.com/zhangningle/imgs/raw/master/blog/Node/mongo-7.png" alt="mongo-7"></p><p>当<code>isDel:0</code>是表示用户没有删除 为 1 是表示用户已经删除</p><p>所以在查询的时候要筛选 name 和 isDel 条件即可</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>student<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> isDel<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>查询到用户没有删除的数据:</p><p><img src="https://gitee.com/zhangningle/imgs/raw/master/blog/Node/mongo-8.png" alt="mongo-8"></p><p>然后就可以实现假删除了。</p><h2 id="批量数据的操作和修改" tabindex="-1"><a class="header-anchor" href="#批量数据的操作和修改" aria-hidden="true">#</a> 批量数据的操作和修改</h2><ol><li>向集合中插入 10000 个文档</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> counter<span class="token operator">:</span> i <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\ndb<span class="token punctuation">.</span>demos<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>\ndb<span class="token punctuation">.</span>demos<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2"><li>查询 demos 中 counter 为 666 的文档 <code>db.demos.find({counter:666});</code></li><li>查询 demos 中 counter 小于 66 的文档 <code>db.demos.find({counter:{$lt:666}});</code></li><li>查询 demos 中 counter 大 T666 的文档 <code>db.demos.find({counter:{$gt:666}});</code></li><li>查询 demos 中 counter 大于 66 小于 666 的文档 1120 查吉 demos 集合中的前 10 余数据 <code>db.demos.find({counter:{$gt:66, $lt:666}});</code></li><li>查石 demos 集合中的第 1 字到 20 条数据 <code>db.demos.find().limit(10);</code></li><li>查春 demos 集合中的第 2 1 条到 30 条数据 分页功能 skip 从多少条开始 limit 每次查询多少条</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>demos\n  <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//第一页 从0条开始 每查询10条</span>\ndb<span class="token punctuation">.</span>demos\n  <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//第二页 从10条开始 每查询10条</span>\ndb<span class="token punctuation">.</span>demos\n  <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//第三页 从20条开始 每查询10条</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="集合中文档关系" tabindex="-1"><a class="header-anchor" href="#集合中文档关系" aria-hidden="true">#</a> 集合中文档关系</h2><ol><li>一对一（noe to noe）: 比如：人和身份证 老公和老婆</li><li>一对多（noe to many）: 比如：父母和孩子 用户和物品</li><li>多对多（many to many）: 比如：老师和学生</li></ol><h3 id="一对一" tabindex="-1"><a class="header-anchor" href="#一对一" aria-hidden="true">#</a> 一对一</h3><p>以内嵌文档的形式体现，</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//一对一</span>\ndb<span class="token punctuation">.</span>aAndb<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;杨过&quot;</span><span class="token punctuation">,</span> wife<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;小龙女&quot;</span><span class="token punctuation">,</span> sex<span class="token operator">:</span> <span class="token string">&quot;女&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> sex<span class="token operator">:</span> <span class="token string">&quot;男&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;杨过&quot;</span><span class="token punctuation">,</span> wife<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;小龙女&quot;</span><span class="token punctuation">,</span> sex<span class="token operator">:</span> <span class="token string">&quot;女&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> sex<span class="token operator">:</span> <span class="token string">&quot;男&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ndb<span class="token punctuation">.</span>aAndb<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="一对多" tabindex="-1"><a class="header-anchor" href="#一对多" aria-hidden="true">#</a> 一对多</h3><p>通过内嵌文档的形式实现或者通过集合的形式实现</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//一对多  比如  微博 和 微博评论</span>\n<span class="token comment">//添加微博</span>\ndb<span class="token punctuation">.</span>weibo<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> weibo<span class="token operator">:</span> <span class="token string">&quot;世界这么大，我想去看看&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> weibo<span class="token operator">:</span> <span class="token string">&quot;我要做一名web开发者！！！&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ndb<span class="token punctuation">.</span>weibo<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>添加评论</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>comments<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    weibo_id<span class="token operator">:</span> <span class="token function">ObjectId</span><span class="token punctuation">(</span><span class="token string">&quot;5bdd89e06a5e78f4cfc2b9c8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;那你有钱吗&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;一个人吗？？去呢啊？？&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;加油！！&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    weibo_id<span class="token operator">:</span> <span class="token function">ObjectId</span><span class="token punctuation">(</span><span class="token string">&quot;5bdd89e06a5e78f4cfc2b9c9&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;那你要学习HTML&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;那还要你要学习css&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;加油！！&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ndb<span class="token punctuation">.</span>comments<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>查询一对多</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> weibo_id <span class="token operator">=</span> db<span class="token punctuation">.</span>weibo<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> weibo<span class="token operator">:</span> <span class="token string">&quot;世界这么大，我想去看看&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>_id<span class="token punctuation">;</span>\ndb<span class="token punctuation">.</span>comments<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> weibo_id<span class="token operator">:</span> weibo_id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="多对多的关系" tabindex="-1"><a class="header-anchor" href="#多对多的关系" aria-hidden="true">#</a> 多对多的关系</h3><p>比如：学生和老师 可以通过多文档关联，</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//多对多  老师《------》学生</span>\n\n<span class="token comment">//插入老师集合</span>\ndb<span class="token punctuation">.</span>teachers<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&quot;语文老师&quot;</span><span class="token punctuation">,</span>\n    teacher_id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    student_id<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1001</span><span class="token punctuation">,</span> <span class="token number">1002</span><span class="token punctuation">,</span> <span class="token number">1003</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&quot;数学老师&quot;</span><span class="token punctuation">,</span>\n    teacher_id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    student_id<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1001</span><span class="token punctuation">,</span> <span class="token number">1002</span><span class="token punctuation">,</span> <span class="token number">1003</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&quot;英语老师&quot;</span><span class="token punctuation">,</span>\n    teacher_id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n    student_id<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1001</span><span class="token punctuation">,</span> <span class="token number">1002</span><span class="token punctuation">,</span> <span class="token number">1003</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ndb<span class="token punctuation">.</span>teachers<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//插入学生集合</span>\ndb<span class="token punctuation">.</span>students<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>\n    student_id<span class="token operator">:</span> <span class="token number">1001</span><span class="token punctuation">,</span>\n    teacher_id<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&quot;小红&quot;</span><span class="token punctuation">,</span>\n    student_id<span class="token operator">:</span> <span class="token number">1002</span><span class="token punctuation">,</span>\n    teacher_id<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&quot;小刚&quot;</span><span class="token punctuation">,</span>\n    student_id<span class="token operator">:</span> <span class="token number">1003</span><span class="token punctuation">,</span>\n    teacher_id<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ndb<span class="token punctuation">.</span>students<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ndb<span class="token punctuation">.</span>teachers<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="排序和索引" tabindex="-1"><a class="header-anchor" href="#排序和索引" aria-hidden="true">#</a> 排序和索引</h2><h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序：</h3><p>查询文档时，默认是按照_id 的值进行排序的（升序） sort() 可以用来指定文档的排序规则，sort() 内部需要传递一个对象来指定文档的排序规则 ，其中 1 表示升序 ，-1 表示降序 limit skip sort 的顺序可以任意改变 ，运行时会自动调整。 不希望它默认按照 id 排序 希望它按照工资来排序</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//按照工资升序排列</span>\n\ndb<span class="token punctuation">.</span>section<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">{</span> wages<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//优先按照工资升序排列  如果遇到相同的就在  按照id升序排列</span>\ndb<span class="token punctuation">.</span>section<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">{</span> wages<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> _id<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引：</h3><p>展示字段中 部分内容 或者是提取这个字段内的部分内容 在查询时 ，可以在第二个参数来设置查询的结果投影</p><blockquote><p>索引： find({ 查询条件 }, { 检索范围（1 显示 0 隐藏）}) 注意： <code>_id</code>如果不设置默认是 1（显示） 可手动隐藏</p></blockquote><p><code>db.section.find({}, {name: 1});</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//只显示name和wages字段</span>\n<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">db.section.find({}, {name: 1, _id: 0, wages: 1});</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://gitee.com/zhangningle/imgs/raw/master/blog/Node/mongo-9.png" alt="mongo-9"></p>',49),t={render:function(n,s){return p}}}}]);