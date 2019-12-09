(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{352:function(t,s,n){"use strict";n.r(s);var a=n(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"元组tuple"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#元组tuple"}},[t._v("#")]),t._v(" 元组tuple")]),t._v(" "),n("p",[t._v("元组是不可变的序列，同list一样，元组可以存放任意数据类型的容器")]),t._v(" "),n("p",[n("strong",[t._v("元组的表示方法")]),n("br"),t._v("\n用小括号()括起来，单个元素括起来后加逗号(,)，区分单个对象还是元组")]),t._v(" "),n("p",[n("strong",[t._v("创建空元组的字面值")]),n("br"),t._v("\nt = ()  空元组")]),t._v(" "),n("p",[n("strong",[t._v("元组的构造函数")]),n("br"),t._v("\ntuple()  生成一个空元组，等同于()"),n("br"),t._v("\ntuple(iterable)  用可迭代对象生成一个元组")]),t._v(" "),n("p",[n("strong",[t._v("元组的运算：")]),n("br"),t._v("\n+   +=   *   *="),n("br"),t._v("\n+  用于拼接元组"),n("br"),t._v("\n*  用于生成重复的元组")]),t._v(" "),n("p",[n("strong",[t._v("元组的比较运算：")]),n("br"),t._v("\n规则与列表的比较规则完全相同")]),t._v(" "),n("p",[n("strong",[t._v("in/not in运算符")]),n("br"),t._v("\n规则与列表的规则完全相同")]),t._v(" "),n("p",[n("strong",[t._v("索引和切片")]),n("br"),t._v("\n索引取值和切片取值的规则与列表完全相同"),n("br"),t._v("\n元组不支持索引赋值和切片赋值（因为元组不可被改变）")]),t._v(" "),n("p",[n("strong",[t._v("元组的方法")]),n("br"),t._v("\ntuple.index(v[, begin[, end]])  返回对应元素的索引下标"),n("br"),t._v("\ntouple.count(x)  返回元组中对应元素的个数")]),t._v(" "),n("h3",{attrs:{id:"容器小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#容器小结"}},[t._v("#")]),t._v(" 容器小结")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("字符串 "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不可变序列，只能存放字符")]),t._v("\n列表 "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可变的序列，可以存放任意数据")]),t._v("\n元组 "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("tuple")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不可变序列，可以存放任意数据")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("h3",{attrs:{id:"字典"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字典"}},[t._v("#")]),t._v(" 字典")]),t._v(" "),n("ol",[n("li",[t._v("字典是一种可变的容器，可以存储任意类型的数据")]),t._v(" "),n("li",[t._v("字典中的每个数据都是用'键'（key）进行索引，而不像序列可以用整数下标来进行索引")]),t._v(" "),n("li",[t._v("字典中的数据没有先后关系，字典的存储是无序的")]),t._v(" "),n("li",[t._v("字典中的顺序以键值对的形式进行映射存储")]),t._v(" "),n("li",[t._v("字典的键不能重复，且只能用不可变类型作为字典的键")])]),t._v(" "),n("p",[t._v("字典的字面值表示方法：\n    字典的表示方式是以{}括起来，以冒号(:)分割键值对，各键值对之间用-分开")]),t._v(" "),n("p",[n("strong",[t._v("创建空字典的字面值：")])]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# d绑定空字典")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[n("strong",[t._v("字典的构造函数dict")])]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    生成一个新的字典，等同于"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    用可迭代对象初始化一个字典\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    用关键字传参形式创建一个字典\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[n("strong",[t._v("添加/修改字典的元素")]),n("br"),t._v("\n语法：字典[键] = 值"),n("br"),t._v("\n说明：键不存在时，创建键，并绑定对应的关系，当键存在时，修改键绑定的值")]),t._v(" "),n("p",[n("strong",[t._v("字典的成员资格判断in运算符")]),n("br"),t._v("\n可以用in运算符判断一个键是否存在于字典中，如果存在则返回True，否则返回False"),n("br"),t._v("\nnot in 与 in结果相反")]),t._v(" "),n("p",[n("strong",[t._v("字典的迭代访问")]),n("br"),t._v("\n字典是可迭代对象，字典只能对键进行迭代访问")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("示例：d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Simon'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'对应的值是'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[n("strong",[t._v("字典 VS 列表")]),n("br"),t._v("\n1.都是可变对象"),n("br"),t._v("\n2.索引方式不同，列表用整数索引，字典用键索引"),n("br"),t._v("\n3.字典的插入、删除、修改数据的速度可能会快于列表"),n("br"),t._v("\n4.列表的存储是有序的，字典的存储是无序的")])])}),[],!1,null,null,null);s.default=r.exports}}]);