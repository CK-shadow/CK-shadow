(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{723:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"对象的属性管理函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象的属性管理函数"}},[t._v("#")]),t._v(" 对象的属性管理函数")]),t._v(" "),s("p",[t._v("getattr(obj, name[, default])")]),t._v(" "),s("ul",[s("li",[t._v("从一个对象得到对象的属性，getattr(x, 'y')等同于x.y，当属性不存在时，如果给出default参数则返回default，如果没有给出default，则产生一个AttributeError异常\nhasattr(obj, name)")]),t._v(" "),s("li",[t._v("用给定的name返回对象obj是否有此属性，此种做法可以避免在getattr(obj, name)时产生异常\nsetattr(obj, name, value)")]),t._v(" "),s("li",[t._v("给对象obj名为name的属性设值为value\ndelattr(obj, name)")]),t._v(" "),s("li",[t._v("删除对象obj的那么属性")])]),t._v(" "),s("h3",{attrs:{id:"with语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#with语句"}},[t._v("#")]),t._v(" with语句")]),t._v(" "),s("p",[t._v("语法")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" 表达式"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" 变量"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 表达式"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" 变量"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    语句块\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ul",[s("li",[t._v("作用\n"),s("ul",[s("li",[t._v("使用于对资源进行访问的场合，确保使用过程中不管是否发生异常都会执行必要的'清理操作'，并释放资源")])])]),t._v(" "),s("li",[t._v("说明\n"),s("ul",[s("li",[t._v("执行表达式 as子句中的变量绑定生成的对象，with语句并不改变异常的状态")])])])]),t._v(" "),s("p",[s("strong",[t._v("环境管理器")]),s("br"),t._v("\n类内有_enter_和_exit_实例方法的类被称为环境管理器，能够用with进行管理的对象必须是环境管理器"),s("br"),t._v("\n说明：")]),t._v(" "),s("ul",[s("li",[t._v("_enter_在进入with语句时被调用并返回由as变量绑定的对象")]),t._v(" "),s("li",[t._v("_exit_将在离开with语句时被调用，且可以用参数来判断在离开with语句时是否有异常发生并作出响应的处理")])]),t._v(" "),s("h3",{attrs:{id:"运算符重载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运算符重载"}},[t._v("#")]),t._v(" 运算符重载")]),t._v(" "),s("p",[t._v("让自定义类生成的对象（实例）能够使用运算符进行操作"),s("br"),t._v("\n作用："),s("br"),t._v("\n 1.让自定义类的实例能够进行运算符操作"),s("br"),t._v("\n 2.让程序简洁易读"),s("br"),t._v("\n 3.让自定义对象将运算符赋以新的运算规则"),s("br"),t._v("\n说明："),s("br"),t._v("\n 运算符重载方法的参数已有固定的含义，不建议改变原有的意义")]),t._v(" "),s("p",[t._v("反向运算符的重载")]),t._v(" "),s("ul",[s("li",[t._v("当运算符的左侧为内建类型，右侧为自定义类型的对象进行算术运算符运算时，会出现TypeError错误，因无法修改内建类的代码，此时需要反向运算符重载")])])])}),[],!1,null,null,null);a.default=e.exports}}]);