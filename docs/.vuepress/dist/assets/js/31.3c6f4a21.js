(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{408:function(v,_,e){"use strict";e.r(_);var o=e(43),t=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"vue知识总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue知识总结"}},[v._v("#")]),v._v(" Vue知识总结")]),v._v(" "),e("h2",{attrs:{id:"基础知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[v._v("#")]),v._v(" 基础知识")]),v._v(" "),e("ul",[e("li",[v._v("vue的生命周期： "),e("code",[v._v("beforeCreate/created")]),v._v("、"),e("code",[v._v("beforeMount/mounted")]),v._v("、"),e("code",[v._v("beforeUpdate/updated")]),v._v("、"),e("code",[v._v("beforeDestory/destoryed")])]),v._v(" "),e("li",[v._v("vue常用指令： "),e("code",[v._v("v-for")]),v._v("、"),e("code",[v._v("v-bind")]),v._v("（缩写形式"),e("code",[v._v(":prop")]),v._v("）、"),e("code",[v._v("v-on")]),v._v("(缩写形式"),e("code",[v._v("@click=’sss'")]),v._v(")、"),e("code",[v._v("v-if/v-else/v-else-if")]),v._v("、"),e("code",[v._v("v-model")]),v._v("、"),e("code",[v._v("v-once")]),v._v("、"),e("code",[v._v("v-html")]),v._v("、"),e("code",[v._v("v-show")]),v._v("...")]),v._v(" "),e("li",[v._v("vue自定义组件："),e("code",[v._v("Vue.component(‘componentName',{ props:[‘p1’,’p2’], template: ‘<li>"+v._s(v.p1)+"</li>' })")])]),v._v(" "),e("li",[v._v("vue常用实例方法和属性: "),e("code",[v._v("data/$data")]),v._v("、"),e("code",[v._v("methods/$methods")]),v._v("、"),e("code",[v._v("$el")]),v._v("、"),e("code",[v._v("computed")]),v._v("(计算属性)、"),e("code",[v._v("$watch")]),v._v("、"),e("code",[v._v("$set")]),v._v("、"),e("code",[v._v("$event")]),v._v("、"),e("code",[v._v("$emit")]),v._v("...")]),v._v(" "),e("li",[v._v("如果需要更新的属性需要缓存，则使用计算属性的方式，否则可以使用"),e("code",[v._v("methods")]),v._v("里的方法来更新属性（"),e("code",[v._v("methods")]),v._v("里的方法每次重新渲染都会执行）")]),v._v(" "),e("li",[v._v("计算属性默认提供了"),e("code",[v._v("getter")]),v._v("，你还可以给它设置"),e("code",[v._v("setter")])]),v._v(" "),e("li",[v._v("当你数据变化是异步或者开销较大时，可以使用"),e("code",[v._v("watch")]),v._v("侦听器来响应数据的变化")]),v._v(" "),e("li",[e("code",[v._v("v-bind:class")]),v._v("的值可以是一个对象，可实现类似"),e("code",[v._v("react")]),v._v("中"),e("code",[v._v("classnames")]),v._v("模块的功能")]),v._v(" "),e("li",[v._v("自定义组件上的"),e("code",[v._v("class")]),v._v("会被渲染拼接到"),e("code",[v._v("template")]),v._v("的根节点的"),e("code",[v._v("class")]),v._v("属性上（自定义组件上可使用"),e("code",[v._v("v-bind:class")]),v._v("来做class的判断显示逻辑）")]),v._v(" "),e("li",[e("code",[v._v("v-bind:style")]),v._v("可以用来绑定内联样式，这个内联样式的值可以由一个对象来定义（类似css in js的模式）,且可以被定义为数组(多个样式对象)")]),v._v(" "),e("li",[e("code",[v._v("v-bind:style")]),v._v("可以使用多重值的形式："),e("code",[v._v("<div :style=“display:[‘-webkit-box’,’-ms-flexbox’, ‘flex']\"></div>")])]),v._v(" "),e("li",[e("code",[v._v("v-if/v-else/v-else-if")]),v._v("的时候，可以用key来管理可复用的元素")]),v._v(" "),e("li",[e("code",[v._v("v-if")]),v._v("是’真正’的渲染，它会确保在切换条件过程中条件块内的元素的事件监听器和子组件适时的销毁和重建")]),v._v(" "),e("li",[e("code",[v._v("v-if")]),v._v("是惰性的，初始为假，什么也不做，直到为真的时候才渲染元素")]),v._v(" "),e("li",[e("code",[v._v("v-show")]),v._v("总是渲染元素，只是简单的进行切换")]),v._v(" "),e("li",[e("code",[v._v("v-if")]),v._v("的切换开销大，"),e("code",[v._v("v-show")]),v._v("则是初始渲染开销大，频繁切换使用"),e("code",[v._v("v-show")]),v._v("，运行时经常改变则使用"),e("code",[v._v("v-if")])]),v._v(" "),e("li",[e("code",[v._v("v-if")]),v._v("和"),e("code",[v._v("v-for")]),v._v("一起使用时，"),e("code",[v._v("v-for")]),v._v("的优先级更高")]),v._v(" "),e("li",[e("code",[v._v("v-for")]),v._v("可遍历数组，第二个参数是索引")]),v._v(" "),e("li",[e("code",[v._v("v-for")]),v._v("可遍历对象，第二个参数是"),e("code",[v._v("key")]),v._v("，第三个参数是索引")]),v._v(" "),e("li",[e("code",[v._v("v-for")]),v._v("和"),e("code",[v._v("<template>")]),v._v("搭配可减少渲染次数")]),v._v(" "),e("li",[e("code",[v._v("v-for")]),v._v("和自定义组件使用时，需要使用"),e("code",[v._v("props")]),v._v("来传递值")]),v._v(" "),e("li",[v._v("尽可能的为遍历子元素加上"),e("code",[v._v("key")]),v._v("，获得渲染优化")]),v._v(" "),e("li",[v._v("数组变异方法："),e("code",[v._v("push/pop/unshift/shift/splice/sort/reverse")]),v._v("改变原始数组")]),v._v(" "),e("li",[v._v("数组非变异方法："),e("code",[v._v("filter/concat/slice")]),v._v(" 不改变原始数组，总是返回新数组")]),v._v(" "),e("li",[v._v("Vue不能检测到数组索引赋值（使用"),e("code",[v._v("vm.$set")]),v._v("解决）和修改"),e("code",[v._v("length")]),v._v("长度赋值(使用"),e("code",[v._v("splice")]),v._v("解决)的情况")]),v._v(" "),e("li",[v._v("Vue不能检测对象属性的添加和删除(使用"),e("code",[v._v("vm.$set")]),v._v("或"),e("code",[v._v("Object.assign")]),v._v(")")]),v._v(" "),e("li",[e("code",[v._v("is=“todo-item”")]),v._v("这种属性的写法比较适合DOM模板")]),v._v(" "),e("li",[v._v("事件修饰符，它们可串联使用："),e("code",[v._v(".stop")]),v._v("、"),e("code",[v._v(".prevent")]),v._v("、"),e("code",[v._v(".capture")]),v._v("、"),e("code",[v._v(".self")]),v._v("、"),e("code",[v._v(".once")]),v._v("、"),e("code",[v._v(".passive")]),v._v("(尤其适合移动端)")]),v._v(" "),e("li",[e("code",[v._v(".passive")]),v._v("不用同时和"),e("code",[v._v(".prevent")]),v._v("使用，后者会被忽略")]),v._v(" "),e("li",[v._v("按键修饰符: "),e("code",[v._v(".enter")]),v._v("、"),e("code",[v._v(".tab")]),v._v("、"),e("code",[v._v(".delete")]),v._v("、"),e("code",[v._v(".esc")]),v._v("、"),e("code",[v._v(".space")]),v._v("、"),e("code",[v._v(".up")]),v._v("、"),e("code",[v._v(".down")]),v._v("、"),e("code",[v._v(".left")]),v._v("、"),e("code",[v._v(".right")])]),v._v(" "),e("li",[v._v("系统按键修饰符:"),e("code",[v._v(".ctrl")]),v._v("、"),e("code",[v._v(".alt")]),v._v("、"),e("code",[v._v(".shift")]),v._v("、"),e("code",[v._v(".meta(⌘|⊞|◆)")]),v._v("、"),e("code",[v._v(".exact")]),v._v("(允许精确控制系统修饰符组合键触发)")]),v._v(" "),e("li",[v._v("鼠标修饰符： "),e("code",[v._v(".left")]),v._v("、"),e("code",[v._v(".right")]),v._v("、"),e("code",[v._v(".middle")])]),v._v(" "),e("li",[e("code",[v._v("v-model")]),v._v("会忽略表单元素的"),e("code",[v._v("value")]),v._v("、"),e("code",[v._v("checked")]),v._v("、"),e("code",[v._v("selected")]),v._v("，仅仅使用实例中的数据作为数据源")]),v._v(" "),e("li",[v._v("表单事件修饰符："),e("code",[v._v(".lazy")]),v._v("、"),e("code",[v._v(".number")]),v._v("、"),e("code",[v._v(".trim")])]),v._v(" "),e("li",[v._v("组件是可复用的vue实例，具有vue实例大多数属性和方法")]),v._v(" "),e("li",[v._v("组件可复用，每个组件有独立的空间")]),v._v(" "),e("li",[v._v("组件上的data必须是一个函数，这样做避免影响了其他组件")]),v._v(" "),e("li",[v._v("通过"),e("code",[v._v("Vue.component()")]),v._v("全局注册的组件可在其被注册后的任何通过"),e("code",[v._v("new Vue()")]),v._v("创建的实例所使用，包含其组件树中的所有组件")]),v._v(" "),e("li",[v._v("通过插槽"),e("code",[v._v("<slot>")]),v._v("分发内容(其实就是类似于react的children)")]),v._v(" "),e("li",[v._v("动态组件"),e("code",[v._v("<component>")]),v._v("配合属性"),e("code",[v._v("is")]),v._v("来实现")]),v._v(" "),e("li",[v._v("解析DOM模板时需要注意下可能会有不生效的情况，需要使用is来传递组件")])]),v._v(" "),e("h2",{attrs:{id:"vue组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue组件"}},[v._v("#")]),v._v(" Vue组件")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("全局注册/局部注册")])]),v._v(" "),e("li",[e("p",[v._v("局部注册组件在子组件中不可用")])]),v._v(" "),e("li",[e("p",[v._v("全局注册的行为必须在根Vue实例创建之前发生")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("camelCase")]),v._v("的属性可以在组件中使用"),e("code",[v._v("kebab-case")])])]),v._v(" "),e("li",[e("p",[v._v("可以以对象的模式指定每一个"),e("code",[v._v("props")]),v._v("属性的类型")])]),v._v(" "),e("li",[e("p",[v._v("父级"),e("code",[v._v("props")]),v._v("的更新会向下流动，反之则不行")])]),v._v(" "),e("li",[e("p",[v._v("由于JavaScript对象和数组是引用传入的，所以当子组件对props的改变将会影响到父组件")])]),v._v(" "),e("li",[e("p",[v._v("props类型校验可以是原生构造对象的中的任意一个，也可以自定义检验类型，通过"),e("code",[v._v("instanceof")]),v._v("检查")])]),v._v(" "),e("li",[e("p",[v._v("对于绝大多数特性来说，外部传入的值会替换掉组件内部设置好的值，如input的type属性，但有的属性则是会进行合并，如class")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("inhertAttrs:false")]),v._v("设置不希望根元素继承特性，可以使用"),e("code",[v._v("$attrs")]),v._v("属性来设置继承的目标元素")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("v-on")]),v._v("在设置事件监听器时，会把事件名全部转换成小写，推荐始终使用"),e("code",[v._v("kebab-case")]),v._v("的事件名")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("v-model")]),v._v("可以使用自定义组件中的"),e("code",[v._v("model")]),v._v("属性自定义")])]),v._v(" "),e("li",[e("p",[v._v("父组件模板的所有东西都会在父级作用域内编译，子组件的所有内容都会在子组件作用域内编译")])]),v._v(" "),e("li",[e("p",[v._v("插槽("),e("code",[v._v("<slot></slot>")]),v._v(")/具名插槽("),e("code",[v._v('<slot name=“header"></slot>')]),v._v(")/作用域插槽("),e("code",[v._v("slot/slot-scope")]),v._v(")")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("<keep-alive>")]),v._v("组件可用来缓存被切换后隐藏的组件的状态")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("$root")]),v._v("访问根实例，"),e("code",[v._v("$parent")]),v._v("访问父组件实例(不推荐)")])]),v._v(" "),e("li",[e("p",[v._v("父组件访问子组件，使用"),e("code",[v._v("$refs")]),v._v("属性来获取设置了"),e("code",[v._v("ref")]),v._v("属性的子组件")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("provide")]),v._v("属性允许我们指定要分享给后代组件使用的方法，然后后代组件使用"),e("code",[v._v("inject")]),v._v("属性来获得祖先组件分享的方法(依赖注入)")])]),v._v(" "),e("li",[e("p",[v._v("事件侦听器（"),e("code",[v._v("$emit")]),v._v("派发的事件）")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("v-on")]),v._v(" 指令侦听")]),v._v(" "),e("li",[e("code",[v._v("$on")]),v._v(" 侦听一个事件")]),v._v(" "),e("li",[e("code",[v._v("$once")]),v._v(" 一次性侦听一个事件")]),v._v(" "),e("li",[e("code",[v._v("$off")]),v._v(" 停止侦听一个事件")])])]),v._v(" "),e("li",[e("p",[v._v("慎用递归组件")])]),v._v(" "),e("li",[e("p",[v._v("尽量避免组件的循环引用")])]),v._v(" "),e("li",[e("p",[v._v("优先使用"),e("code",[v._v("template")]),v._v("来定义模板，而不是"),e("code",[v._v("inline-template")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("$forceUpdate")]),v._v("来强制更新view")])]),v._v(" "),e("li",[e("p",[v._v("组件包含大量静态内容时，可使用"),e("code",[v._v("v-once")]),v._v("来标记，缓存静态内容")])])]),v._v(" "),e("h2",{attrs:{id:"过渡-动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过渡-动画"}},[v._v("#")]),v._v(" 过渡 & 动画")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("transition")]),v._v("组件控制过渡动画，可以给任何元素和组件添加进入/离开过渡")])]),v._v(" "),e("li",[e("p",[v._v("当插入或删除"),e("code",[v._v("transition")]),v._v("中的元素时，vue会做如下处理")]),v._v(" "),e("ul",[e("li",[v._v("自动嗅探元素是否使用了css过渡和动画，适当时机添加/删除类名")]),v._v(" "),e("li",[v._v("元素的钩子函数会在适当时机被调用")]),v._v(" "),e("li",[v._v("元素既没有钩子函数也没有css动画，插入和删除操作在下一帧立即执行（浏览器逐帧动画机制）")])])]),v._v(" "),e("li",[e("p",[v._v("过渡的类名")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("v-enter/v-enter-active/v-enter-to")])]),v._v(" "),e("li",[e("code",[v._v("v-leave/v-leave-active/v-leave-to")])])])]),v._v(" "),e("li",[e("p",[v._v("css动画用法同css过渡，区别是类名"),e("code",[v._v("v-enter")]),v._v("不会在DOM插入后立即删除，而是在"),e("code",[v._v("animationend")]),v._v("事件触发时删除")])]),v._v(" "),e("li",[e("p",[v._v("自定义过渡类名，使用以下属性指定:")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("enter-class/enter-active-class/enter-to-class")])]),v._v(" "),e("li",[e("code",[v._v("leave-class/leave-active-class/leave-to-class")])]),v._v(" "),e("li",[v._v("自定义类名优先级高于普通的类名")])])]),v._v(" "),e("li",[e("p",[v._v("使用"),e("code",[v._v("typ")]),v._v("e属性设置"),e("code",[v._v("transition")]),v._v("或"),e("code",[v._v("animation")]),v._v("来申明vue使用的动画类型")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("transition")]),v._v("组件上使用"),e("code",[v._v("duration")]),v._v("来设置动画执行的时间")])]),v._v(" "),e("li",[e("p",[v._v("可以使用钩子函数")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("beforeEnter/enter/afterEnter/enterCancelled")])]),v._v(" "),e("li",[e("code",[v._v("beforeLeave/leave/afterLeave/leaveCancelled")])]),v._v(" "),e("li",[v._v("钩子函数使用"),e("code",[v._v("v-on")]),v._v("指令绑定")]),v._v(" "),e("li",[v._v("钩子和结合过渡和动画使用，也可以单独使用")]),v._v(" "),e("li",[v._v("在"),e("code",[v._v("enter/leave")]),v._v("中，必须使用"),e("code",[v._v("done()")]),v._v("来进行回调，否则会同步调用，过渡或动画会立即完成")]),v._v(" "),e("li",[v._v("对于纯使用JavaScript来进行的动画，推荐使用"),e("code",[v._v("v-bind:css=“false”")]),v._v("来取消css的检测，减少css的影响")])])]),v._v(" "),e("li",[e("p",[v._v("可使用"),e("code",[v._v("apear")]),v._v("设置初始渲染的过渡")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("apear/apear-active/apear-to")])]),v._v(" "),e("li",[e("code",[v._v("beforeApear/apear/afterApear/apearCancelled")])])])]),v._v(" "),e("li",[e("p",[v._v("多元素过渡，设置唯一"),e("code",[v._v("key")])])]),v._v(" "),e("li",[e("p",[v._v("过渡模式:")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("In-out")]),v._v(" 新元素先过渡，完成后当前元素过渡离开")]),v._v(" "),e("li",[e("code",[v._v("out-in")]),v._v(" 当前元素先过渡，完成后新元素过渡进入")]),v._v(" "),e("li",[e("code",[v._v("默认行为")]),v._v("：进入和离开同时发生")])])]),v._v(" "),e("li",[e("p",[v._v("多个组件过渡使用动态组件实现")])]),v._v(" "),e("li",[e("p",[v._v("列表过渡 "),e("code",[v._v("<transition-group>")])]),v._v(" "),e("ul",[e("li",[v._v("以真实元素呈现，默认为"),e("code",[v._v("<span>")]),v._v("，可使用tag更改呈现标签")]),v._v(" "),e("li",[v._v("过渡模式不可用")]),v._v(" "),e("li",[v._v("内部需要唯一"),e("code",[v._v("key")])])])]),v._v(" "),e("li",[e("p",[v._v("列表排序过渡，使用的是"),e("code",[v._v("FLIP")]),v._v("动画，使用类名"),e("code",[v._v("v-move")]),v._v("来定义class")])])]),v._v(" "),e("h2",{attrs:{id:"可复用性-组合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可复用性-组合"}},[v._v("#")]),v._v(" 可复用性 & 组合")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("mixins")]),v._v("混入属性发生冲突时，以组件数据优先（一层属性深度浅合并）")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("mixins")]),v._v("混入方法发生冲突时，会将函数合并为一个数组，优先执行混入方法，其次执行组件方法")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("Vue.extend")]),v._v("策略和"),e("code",[v._v("mixins")]),v._v("相同")])]),v._v(" "),e("li",[e("p",[v._v("慎用全局混入")])]),v._v(" "),e("li",[e("p",[v._v("合并策略可以自定义（参考"),e("code",[v._v("vuex")]),v._v("的具体实现："),e("code",[v._v("Vue.config.optionMergeStrategies")]),v._v("）")])]),v._v(" "),e("li",[e("p",[v._v("全局自定义指令："),e("code",[v._v("Vue.directive()")])])]),v._v(" "),e("li",[e("p",[v._v("局部自定义指令：属性"),e("code",[v._v("directives")]),v._v("，类型为"),e("code",[v._v("Object")])])]),v._v(" "),e("li",[e("p",[v._v("钩子函数")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("bind")]),v._v(" 指令第一次绑定到元素时调用，只执行一次，可用于一次性初始化设置")]),v._v(" "),e("li",[e("strong",[v._v("inserted")]),v._v(" 元素插入父节点时调用")]),v._v(" "),e("li",[e("strong",[v._v("update")]),v._v(" 所有VNode更新时调用，可能发生在子"),e("em",[v._v("VNode")]),v._v("之前")]),v._v(" "),e("li",[e("strong",[v._v("componentUpdated")]),v._v(" 指令所在组件在"),e("em",[v._v("VNode")]),v._v("和其子"),e("em",[v._v("VNode")]),v._v("更新后调用")]),v._v(" "),e("li",[e("strong",[v._v("unbind")]),v._v(" 指令与元素解绑时调用")])])]),v._v(" "),e("li",[e("p",[v._v("钩子函数都会被传入以下参数：")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("el")]),v._v(" 指令绑定元素，可操作DOM")]),v._v(" "),e("li",[e("strong",[v._v("binding")]),v._v(" 指令描述对象")]),v._v(" "),e("li",[e("strong",[v._v("vnode")]),v._v(" Vue生成的虚拟节点")]),v._v(" "),e("li",[e("strong",[v._v("oldVnode")]),v._v(" 上一个"),e("code",[v._v("Vnode")]),v._v("，仅在"),e("code",[v._v("update")]),v._v("和"),e("code",[v._v("componentUpdated")]),v._v("中使用")])])]),v._v(" "),e("li",[e("p",[v._v("指令接受所有合法的JavaScript表达式")])])]),v._v(" "),e("h2",{attrs:{id:"渲染函数-jsx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染函数-jsx"}},[v._v("#")]),v._v(" 渲染函数 & JSX")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("render")]),v._v("函数接受"),e("code",[v._v("createElement")]),v._v("方法作为参数")]),v._v(" "),e("li",[e("code",[v._v("createElement")]),v._v("方法的作用是创建一个虚拟节点(VNode)")]),v._v(" "),e("li",[e("code",[v._v("createElement")]),v._v("参数比较复杂，参照官网：参数")]),v._v(" "),e("li",[v._v("组件树中的"),e("code",[v._v("VNodes")]),v._v("必须唯一")]),v._v(" "),e("li",[v._v("render中的"),e("code",[v._v("v-if/v-for")]),v._v("可以使用"),e("code",[v._v("if/else")]),v._v("和"),e("code",[v._v("map")]),v._v("重写")]),v._v(" "),e("li",[v._v("插槽使用"),e("code",[v._v("this.$slot.default")]),v._v("访问，作用域插槽使用"),e("code",[v._v("this.$scopeSlots.default")]),v._v("访问和设置")]),v._v(" "),e("li",[v._v("可以使用插件"),e("code",[v._v("babel-plugin-transform-vue-jsx")]),v._v("支持JSX语法")]),v._v(" "),e("li",[v._v("将h作为"),e("code",[v._v("createElement")]),v._v("的别名是Vue生态的一个惯例，也是JSX要求的")]),v._v(" "),e("li",[v._v("函数式组件 关键词：functional")]),v._v(" "),e("li",[v._v("函数式组件渲染开销低，但相应的，它不会出现在Vue devtools的组件树里边")]),v._v(" "),e("li",[v._v("函数式组件要求你自己实现同名特性的替换与智能合并")]),v._v(" "),e("li",[v._v("Vue的模板实际编译成了"),e("code",[v._v("render")]),v._v("方法实现的"),e("code",[v._v("VNode")]),v._v("，可以使用"),e("code",[v._v("Vue.compile()")]),v._v("方法来输出编译结果")])]),v._v(" "),e("h2",{attrs:{id:"插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[v._v("#")]),v._v(" 插件")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("插件会为vue提供全局的功能，包括但不限于以下几种：")]),v._v(" "),e("ul",[e("li",[v._v("添加全局的属性或方法，如"),e("a",{attrs:{href:"https://github.com/karol-f/vue-custom-element",target:"_blank",rel:"noopener noreferrer"}},[v._v("vue-custom-element"),e("OutboundLink")],1)]),v._v(" "),e("li",[v._v("添加全局的资源（指令、过滤器、过渡等），如："),e("a",{attrs:{href:"https://github.com/vuejs/vue-touch",target:"_blank",rel:"noopener noreferrer"}},[v._v("vue-touch"),e("OutboundLink")],1)]),v._v(" "),e("li",[v._v("通过全局"),e("code",[v._v("mixins")]),v._v("添加一些组件选项，如："),e("a",{attrs:{href:"https://github.com/vuejs/vue-touch",target:"_blank",rel:"noopener noreferrer"}},[v._v("vue-router"),e("OutboundLink")],1)]),v._v(" "),e("li",[v._v("添加Vue实例方法，通过添加到"),e("code",[v._v("Vue.prototype")]),v._v("上实现")]),v._v(" "),e("li",[v._v("一个独立的库，同时有自己的API，又实现以上部分功能，如："),e("a",{attrs:{href:"https://github.com/vuejs/vue-touch",target:"_blank",rel:"noopener noreferrer"}},[v._v("vue-router"),e("OutboundLink")],1)])])]),v._v(" "),e("li",[e("p",[v._v("Vue插件有一个公开的方法"),e("code",[v._v("install")]),v._v("，第一个参数是Vue构造器，第二个参数是一个可选对象。")])]),v._v(" "),e("li",[e("p",[v._v("插件的使用通过全局方法"),e("code",[v._v("Vue.use(MyPlugin)")]),v._v("使用，只会注册一次插件")])]),v._v(" "),e("li",[e("p",[v._v("在CommonJS中，应该始终显式的调用"),e("code",[v._v("Vue.use")]),v._v("方法")])]),v._v(" "),e("li",[e("p",[v._v("社区插件列表"),e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue#components--libraries",target:"_blank",rel:"noopener noreferrer"}},[v._v("awesome-vue"),e("OutboundLink")],1)])])]),v._v(" "),e("h2",{attrs:{id:"过滤器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过滤器"}},[v._v("#")]),v._v(" 过滤器")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v('{{ msg | filter }}\n<div v-bind=“msg | filter"></div>\n')])])]),e("ul",[e("li",[v._v("全局过滤器使用Vue.filter()创建")]),v._v(" "),e("li",[v._v("局部过滤器使用对象属性filters创建")]),v._v(" "),e("li",[v._v("过滤器函数总是接收表达式的值作为第一个参数，过滤器可以有多个，值依次向后传递")]),v._v(" "),e("li",[v._v("过滤器可以接收额外的参数")])]),v._v(" "),e("h2",{attrs:{id:"构建-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建-部署"}},[v._v("#")]),v._v(" 构建 & 部署")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("<script>")]),v._v("标签引入"),e("code",[v._v("[vue.min.js](https://vuejs.org/js/vue.min.js)")])])]),v._v(" "),e("li",[e("p",[v._v("使用"),e("code",[v._v("vue-cli")])]),v._v(" "),e("ul",[e("li",[v._v("webpack + vue-loader")]),v._v(" "),e("li",[v._v("browserify + vueify")]),v._v(" "),e("li",[v._v("rollup + rollup-plugin-vue")])])]),v._v(" "),e("li",[e("p",[v._v("利用钩子函数"),e("code",[v._v("Vue.config.errorHandler")]),v._v("定义配置来跟踪运行时错误，可以搭配"),e("code",[v._v("[Sentry](https://sentry.io/)")]),v._v("使用（"),e("a",{attrs:{href:"https://sentry.io/for/vue/",target:"_blank",rel:"noopener noreferrer"}},[v._v("集成配置"),e("OutboundLink")],1),v._v("）")])]),v._v(" "),e("li",[e("p",[v._v("单文件组件（"),e("code",[v._v(".vue")]),v._v("文件）")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);