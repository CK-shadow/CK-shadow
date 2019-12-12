(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{659:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"基于poll方法的io多路复用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于poll方法的io多路复用"}},[s._v("#")]),s._v(" 基于poll方法的IO多路复用")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" select"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("poll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    功能：创建poll对象\n    返回值：poll对象\n\np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("register"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    功能：注册关注的IO\n    参数：fd 要关注的IO    event 关注IO的事件类型\n    常用事件：POLLIN 读IO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rlist"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    POLLOUT 写IO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("wlist"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    POLLERR 异常IO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xlist"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n              POLLHUP 断开连接\n\np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("unregister"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    功能：取消对IO的关注\n    参数：IO对象或者IO对象的fileno\n\nevents "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("poll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    功能：阻塞等待监控的IO事件发生\n    返回值：就续的IO事件\n    events格式："),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fileno"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h3",{attrs:{id:"epoll实现io多路复用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#epoll实现io多路复用"}},[s._v("#")]),s._v(" epoll实现IO多路复用")]),s._v(" "),n("p",[n("strong",[s._v("使用方法")])]),s._v(" "),n("ul",[n("li",[s._v("基本与poll相同")]),s._v(" "),n("li",[s._v("生成对象改为epoll")]),s._v(" "),n("li",[s._v("所有事件类型改为EPOLL")])]),s._v(" "),n("p",[n("strong",[s._v("epoll特点")])]),s._v(" "),n("ul",[n("li",[s._v("epoll效率比select poll高")]),s._v(" "),n("li",[s._v("epoll可以同时监控的IO数量比select poll多")]),s._v(" "),n("li",[s._v("epoll的触发方式更多（EPOLLET边缘触发）")])]),s._v(" "),n("h3",{attrs:{id:"struct模块使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#struct模块使用"}},[s._v("#")]),s._v(" struct模块使用")]),s._v(" "),n("p",[s._v("原理:将一组数据进行打包，转换为bytes格式发送，或者将一组bytes个数数据转换为python数据类型")]),s._v(" "),n("p",[n("strong",[s._v("接口使用")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("st = Struct(fmt)\n    功能：生成结构化对象\n    参数：fmt定制的数据结构\n\nst.pack(v1, ...)\n    功能：将一组数据按指定格式打包转换\n    参数：要打包的数据\n    返回值：bytes字节串\n\nst.unpack(bytes_data)\n    功能：将bytes字节串按格式解析\n    参数：bytes字节串\n    返回值：解析后的数据元组\n\nstruct.pack(fmt, v1, ...)\n\nstruct.unpack(fmt, bytes_data)\n    可以使用struct模块直接调用pack，unpack，第一个参数直接传入fmt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h3",{attrs:{id:"本地套接字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地套接字"}},[s._v("#")]),s._v(" 本地套接字")]),s._v(" "),n("p",[s._v("功能：本地两个程序之间的数据交换"),n("br"),s._v("\n通信原理：对一个内存对象进行读写操作，完成两个程序间的数据交互")]),s._v(" "),n("p",[n("strong",[s._v("创建本地套接字")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("创建本地套接字\n    sockfd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AF_UNIX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("SOCK_STREAM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n绑定套接字文件\n    sockfd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n监听、连接、收发消息\n    listen  accept    recv"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("send\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"多任务并发编程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多任务并发编程"}},[s._v("#")]),s._v(" 多任务并发编程")]),s._v(" "),n("p",[s._v("意义：充分利用计算机资源，同时处理多个任务，提高程序的运行效率")]),s._v(" "),n("p",[s._v("并行和并发")]),s._v(" "),n("ul",[n("li",[s._v("并行：多个任务利用计算机多核资源在同时执行，此时多个任务间是并行关系")]),s._v(" "),n("li",[s._v("并发：同时处理多个任务，内核在任务间不断地切换达到很多任务都被同时处理的效果，实际每时每刻只有一个在执行")])]),s._v(" "),n("p",[s._v("实现方法"),n("br"),s._v("\n 多进程，多线程")])])}),[],!1,null,null,null);t.default=e.exports}}]);