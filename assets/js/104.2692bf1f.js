(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{385:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"进程的运行特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程的运行特征"}},[s._v("#")]),s._v(" 进程的运行特征")]),s._v(" "),a("ol",[a("li",[s._v("进程可以使用计算机的多核资源")]),s._v(" "),a("li",[s._v("进程是计算机资源分配的最小单元")]),s._v(" "),a("li",[s._v("进程之间的运行互不影响，相互独立")]),s._v(" "),a("li",[s._v("每个进程拥有各自独立的空间，各自使用各自的空间内容")])]),s._v(" "),a("h3",{attrs:{id:"基于fork的进程创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于fork的进程创建"}},[s._v("#")]),s._v(" 基于fork的进程创建")]),s._v(" "),a("p",[s._v("pid = os.fork()"),a("br"),s._v("\n功能：创建新的进程"),a("br"),s._v("\n返回值：整数，如果创建失败则会返回一个负数，如果成功，新进程得到0，原进程得到新进程的PID号"),a("br"),s._v("\n总结：")]),s._v(" "),a("ul",[a("li",[s._v("子进程会复制父进程的全部内存空间，从fork的下一句开始执行")]),s._v(" "),a("li",[s._v("父子进程各自运行互不影响，顺序不确定")]),s._v(" "),a("li",[s._v("利用父子进程中fork返回值的差异，配合if语句让父子进程执行不同内容几乎是固定搭配")]),s._v(" "),a("li",[s._v("父进程fork之前开辟的空间，子进程也会拥有，父子进程在各自空间内操作互不影响")]),s._v(" "),a("li",[s._v("父子进程有各自特有内容，PID，PCB，...")])]),s._v(" "),a("h3",{attrs:{id:"进程相关函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程相关函数"}},[s._v("#")]),s._v(" 进程相关函数")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getpid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    功能：获取一个进程的PID值\n    返回值：返回当前进程的PID值\n\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getppid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    功能：返回父进程的PID号\n    返回值：父进程PID值\n\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    功能：结束一个进程\n    参数：进程结束状态，整数\n\nsys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    功能：结束一个进程\n    参数：默认为"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("，整数表示退出状态，字符串表示退出时打印内容\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"孤儿和僵尸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#孤儿和僵尸"}},[s._v("#")]),s._v(" 孤儿和僵尸")]),s._v(" "),a("p",[s._v("孤儿进程：父进程先于子进程退出，此时子进程成为孤儿进程"),a("br"),s._v("\n特点：孤儿进程会被系统进程收养，此时系统进程会成为孤儿进程新的父进程，孤儿进程退出时，系统进程会处理退出行为")]),s._v(" "),a("p",[s._v("僵尸进程：子进程先于父进程退出，父进程没有处理子进程退出行为，此时子进程就会成为僵尸进程"),a("br"),s._v("\n特点：僵尸进程虽然已经结束，但是会存留部分进程信息在内存中，大量的僵尸进程会浪费系统内存")]),s._v(" "),a("p",[a("strong",[s._v("僵尸进程处理")])]),s._v(" "),a("ol",[a("li",[s._v("使用wait()函数处理子进程退出")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    功能：阻塞等待子进程退出\n    返回值：pid 退出的子进程pid值    status 子进程的退出状态\n            \npid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("waitpid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    功能： 阻塞等待子进程退出\n    参数： pid   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 等待任意子进程退出\n            \t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 表示等待指定子进程\n           option  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  表示阻塞   \n                    os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WNOHANG 表示非阻塞\n    返回值： pid  退出的子进程PID\n            status 子进程的退出状态\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[s._v("创建二级子进程")]),s._v(" "),a("ul",[a("li",[s._v("父进程创建子进程wait等待回收")]),s._v(" "),a("li",[s._v("子进程创建二级子进程后退出")]),s._v(" "),a("li",[s._v("二级子进程成为孤儿，和父进程一起完成事件")])])]),s._v(" "),a("li",[a("p",[s._v("信号处理")]),s._v(" "),a("ul",[a("li",[s._v("原理：子进程退出会发送信号给父进程，如果父进程忽略子进程信号，则系统会自动处理子进程退出")]),s._v(" "),a("li",[s._v("方法：signal.signal(signal.SIGCHLD,signal.SIG_IGN)")]),s._v(" "),a("li",[s._v("特点：非阻塞，使用该方法，可以处理所有子进程退出")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);