(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{509:function(s,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"字符串-str"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串-str"}},[s._v("#")]),s._v(" 字符串 str")]),s._v(" "),n("p",[s._v("作用：用来记录文本（文字）信息")]),s._v(" "),n("p",[s._v("字符串的表示方式："),n("br"),s._v("\n    在非注释中，凡是用括号括起来的部分都是字符串"),n("br"),s._v("\n    ' 单引号 ------- 'hello world'"),n("br"),s._v('\n    " 双引号 ------ "hello world"'),n("br"),s._v("\n    ''' 三单引号 ------- '''hello world'''"),n("br"),s._v('\n    """ 三双引号 --------- """hello world"""')]),s._v(" "),n("p",[s._v("双引号和单引号的区别："),n("br"),s._v("\n    单引号内的双引号不算结束符，同理，双引号内的单引号也不算结束符\n三引号的作用："),n("br"),s._v("\n    三引号字符串中的换行符会自动转换为换行符，同时，三引号内也可以包含单引号和双引号")]),s._v(" "),n("p",[s._v("反斜杠转义字符表："),n("br"),s._v("\n    '    单引号（'）"),n("br"),s._v("\n    ''   双引号（\"）"),n("br"),s._v("\n    \\    一个反斜杠（\\）"),n("br"),s._v("\n    \\n    换行"),n("br"),s._v("\n    \\r    返回光标至行首"),n("br"),s._v("\n    \\t    水平制表符"),n("br"),s._v("\n    \\v    垂直制表符"),n("br"),s._v("\n    \\f    换页"),n("br"),s._v("\n    \\b    倒退"),n("br"),s._v("\n    \\0    空字符，字符值为0")]),s._v(" "),n("p",[n("strong",[s._v("序列：字符串即是序列")]),n("br"),s._v("\n求序列长度的函数：len(x)"),n("br"),s._v("\n    作用：返回字符串的长度"),n("br"),s._v('\n返回原始字符串：r"字符串内容"'),n("br"),s._v("\n    作用：让转义字符\\无效")]),s._v(" "),n("p",[n("strong",[s._v("字符串的运算")]),n("br"),s._v("\n+     加号运算符用于拼接字符串"),n("br"),s._v("\n*     用于生成重复的字符串"),n("br"),s._v("\n示例：")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"456"')]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   s = "123456"')]),s._v("\ns "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# s = "123123123"')]),s._v("\n注：字符串只能与整数相乘\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v("，"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*=")]),s._v("运算符，与其它复合赋值运算符规则相同\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("字符串的比较运算")]),n("br"),s._v("\n运算符："),n("br"),s._v("\n    >   >=   <   <=   ==    !="),n("br"),s._v("\n规则："),n("br"),s._v("\n    依次按编码值进行比较，直到最短的字符串结束为止"),n("br"),s._v("\n示例：")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'B'")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# True")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ABC'")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ABB'")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  True")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ABC'")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ACB'")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  False")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'AB'")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ABC'")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  True")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ABC'")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  True")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ABC'")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abc'")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  False")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ABCD'")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DCBA'")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  True")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("字符串的索引操作"),n("br"),s._v("\n    Python的字符串是不可改变的字符序列")]),s._v(" "),n("h3",{attrs:{id:"索引-index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#索引-index"}},[s._v("#")]),s._v(" 索引 index")]),s._v(" "),n("p",[s._v("语法：\n    字符串[整数表达式]\n说明：\n    Python序列都可以用索引来访问序列中的对象"),n("br"),s._v("\n    Python序列的正向索引是从0开始的，第二个索引为1，最后一个索引为len(s)-1"),n("br"),s._v("\n    Python序列的反向索引是从-1开始的，-1代表最后一个，-2代表倒数第二个，以此类推，最后一个是-len(s)"),n("br"),s._v("\n示例：")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("S "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ABCDE"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  A")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  D")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  E")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  C")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"切片-slice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#切片-slice"}},[s._v("#")]),s._v(" 切片 slice")]),s._v(" "),n("p",[s._v("作用：从一个字符串序列中取出相应的元素重新组成一个字符串序列"),n("br"),s._v("\n语法：字符串序列[(开始索引b) : (结束索引e)(:(步长s))]")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),n("p",[s._v("注：小括号()括起的部分可以省略")])]),s._v(" "),n("p",[s._v("说明：")]),s._v(" "),n("ol",[n("li",[s._v("开始索引是切片开始切下的位置，0代表第一个元素，1代表第二个元素，-1代表最后一个")]),s._v(" "),n("li",[s._v("结束索引是切片的终止索引（但不包含终止点）")]),s._v(" "),n("li",[s._v("步长是切片每次获取完当前元素后移动的方向和偏移量\n"),n("ol",[n("li",[s._v("没有步长，相当于取值完成后向右移动一个索引的位置（默认为1）")]),s._v(" "),n("li",[s._v("当步长为正时，取正向切片，步长默认为1，开始索引默认为0，结束索引默认为len(s)，步长代表下一次索引取值的增长值")]),s._v(" "),n("li",[s._v("当步长为负整数时，取反向切片，默认起始位置是最后一个元素，终止位置是第一个元素的前一个位置\n"),n("ul",[n("li",[s._v("反转字符串的方法：reverse = S[::-1]")])])])])])]),s._v(" "),n("p",[s._v("Python3中常用于序列的函数："),n("br"),s._v("\n    len(x) 返回序列的长度"),n("br"),s._v("\n    max(x) 返回序列的最大值元素"),n("br"),s._v("\n    min(x) 返回序列的最小值元素")]),s._v(" "),n("p",[s._v("字符串编码转换函数："),n("br"),s._v("\n    ord(c) 返回一个自读Unicode值"),n("br"),s._v("\n    chr(i) 返回i这个整数值所对应的字符")]),s._v(" "),n("p",[s._v("整数转字符串函数"),n("br"),s._v("\n    bin(i) 将整数转为二进制字符串"),n("br"),s._v("\n    oct(i) 将整数转为八进制字符串"),n("br"),s._v("\n    hex(i) 将整数转为十六进制字符串")]),s._v(" "),n("p",[s._v("字符串的构造函数"),n("br"),s._v('\n    str(obj = "")  将对象转为字符串\n示意：')]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("456")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 出错，不合法")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'True'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'None'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# '3.14'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("Python3字符串常用方法："),n("br"),s._v("\n    in方法：判断内容是否在字符串中"),n("br"),s._v("\n    is方法：判断字符串内存地址是否相同"),n("br"),s._v("\n    endswith()方法：判断字符串是否以指定内容结尾"),n("br"),s._v("\n    startswith()方法：判断字符串是否以指定内容开始"),n("br"),s._v("\n    isalnum()方法：判断字符串是否包含数字和字母"),n("br"),s._v("\n    isalpha()方法：判断输入的字符串是否是英文字母"),n("br"),s._v("\n    isdigit()：判断输入的字符串是否是数字"),n("br"),s._v("\n    lstrip()：默认去掉字符串左边的空格和换行"),n("br"),s._v("\n    rstrip()：默认去掉字符串右边的空格和换行"),n("br"),s._v("\n    strip()：默认去掉字符串两边的空格和换行"),n("br"),s._v('\n    strip("")：去掉指定的字符串'),n("br"),s._v('\n    replace("", "")：将前一个字符串替换为后一个字符串'),n("br"),s._v('\n    replace("", "", num)：将前一个字符串替换为后一个字符串，并指定替换次数'),n("br"),s._v('\n    find("")：查找字符串的索引'),n("br"),s._v('\n    find("", num, num)：可指定查找字符串的范围'),n("br"),s._v('\n    rfind("")：从后往前查找字符串'),n("br"),s._v('\n    index("")：按索引值查找字符串内容'),n("br"),s._v("\n    split()：分割字符串"),n("br"),s._v("\n    splitlines()：按换行符分割字符串"),n("br"),s._v('\n    count("")：字符产出现的次数')])])}),[],!1,null,null,null);t.default=r.exports}}]);