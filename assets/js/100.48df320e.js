(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{342:function(s,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"与类相关的函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#与类相关的函数"}},[s._v("#")]),s._v(" 与类相关的函数")]),s._v(" "),n("p",[s._v("issubclass(cls, cls or tuple)"),n("br"),s._v("\n 判断一个类是否继承自其他类，如果此cls是class或tuple中的一个派生子类，则返回True，否则返回False")]),s._v(" "),n("h3",{attrs:{id:"封装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#封装"}},[s._v("#")]),s._v(" 封装")]),s._v(" "),n("p",[s._v("封装是指隐藏类的实现细节，让使用者不关心这些细节"),n("br"),s._v("\n封装的目的是让使用者通过尽可能少的方法（或属性）操作对象")]),s._v(" "),n("p",[n("strong",[s._v("私有属性和方法")]),n("br"),s._v('\npython类中以双下划线（"_"）开头，不以双下划线结尾的标识符为私有成员，私有成员只能用类内的方法进行访问和修改')]),s._v(" "),n("ul",[n("li",[s._v("以_为开头的实例变量为私有属性")]),s._v(" "),n("li",[s._v("以_开头的方法为私有方法")])]),s._v(" "),n("h3",{attrs:{id:"多态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多态"}},[s._v("#")]),s._v(" 多态")]),s._v(" "),n("p",[s._v("多态是指在继承/派生关系的类中，调用基类对象的方法，实现能调用子类的覆盖方法的现象称为多态"),n("br"),s._v("\n状态：")]),s._v(" "),n("ul",[n("li",[s._v("静态（编译时状态）")]),s._v(" "),n("li",[s._v("动态（运行时状态）\n说明：")]),s._v(" "),n("li",[s._v("多态调用方法与对象相关，与类无关")]),s._v(" "),n("li",[s._v("python的全部对象都只有运行时状态，没有C++语言中的编译时状态")])]),s._v(" "),n("h3",{attrs:{id:"多继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多继承"}},[s._v("#")]),s._v(" 多继承")]),s._v(" "),n("p",[s._v("多继承是指一个子类继承两个或两个以上的基类"),n("br"),s._v("\n语法：")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" 类名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("基类名"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 基类名"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("说明:"),n("br"),s._v("\n 1.一个子类同时继承自多个父类，父类中的方法可以同时被继承下来"),n("br"),s._v("\n 2.如果两个父类中有同名的方法，而在子类中又没有覆盖此方法时，调用结果难以确定"),n("br"),s._v("\nMRO问题："),n("br"),s._v("\n 类的_mro_属性"),n("br"),s._v("\n 此属性用来记录类方法的查找顺序")]),s._v(" "),n("p",[n("strong",[s._v("函数重写")]),n("br"),s._v("\n在自定义类内添加相应的方法，让自定义类创建的实例一样进行内建函数操作")]),s._v(" "),n("p",[n("strong",[s._v("对象转字符串函数")]),s._v("\nrepr(obj) 返回一个能代表此对象的表达式字符串"),n("br"),s._v("\nstr(obj) 通过给定的对象返回一个字符串")]),s._v(" "),n("p",[n("strong",[s._v("对象转字符串的重写方法")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("repr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    函数的重写方法\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("_repr_")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    函数的重写方法\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("_str_")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("说明："),n("br"),s._v("\n 1.str(obj)函数先查找obj."),n("em",[s._v("str")]),s._v("()方法，调用此方法并返回结果"),n("br"),s._v("\n 2.如果obj."),n("em",[s._v("str")]),s._v("()方法不存在，则调用obj."),n("em",[s._v("repr")]),s._v("()方法并返回结果"),n("br"),s._v("\n 3.如果obj."),n("em",[s._v("repr")]),s._v("()方法不存在，则调用object类的实例方法并返回地址信息的字符串")]),s._v(" "),n("h3",{attrs:{id:"迭代器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#迭代器"}},[s._v("#")]),s._v(" 迭代器")]),s._v(" "),n("p",[s._v("可以通过next()函数取值的对象就是迭代器"),n("br"),s._v("\n迭代器协议"),n("br"),s._v("\n 迭代器协议是指对象能够使用next函数获取下一项数据，在没有下一项数据时触发一个StopIteration异常来终止迭代的继续\n迭代器协议实现方法"),n("br"),s._v(" "),n("em",[s._v("next")]),s._v("(self)方法来实现迭代器协议"),n("br"),s._v("\n语法形式")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyIterator")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("_next_")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        迭代器协议\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" 数据\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("可迭代对象"),n("br"),s._v("\n 指能用iter(obj)函数返回迭代器的对象（实例）"),n("br"),s._v("\n 可迭代对象内部需要定义_iter_(self)方法返回迭代器对象")])])}),[],!1,null,null,null);t.default=r.exports}}]);