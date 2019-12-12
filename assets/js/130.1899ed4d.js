(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{657:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"爬虫的概念、工具和http"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#爬虫的概念、工具和http"}},[s._v("#")]),s._v(" 爬虫的概念、工具和HTTP")]),s._v(" "),n("p",[s._v("什么是爬虫"),n("br"),s._v("\n 爬虫就是模拟客户端（浏览器）发送网络请求，获取响应，按照规则提取数据的程序")]),s._v(" "),n("h3",{attrs:{id:"requests模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requests模块"}},[s._v("#")]),s._v(" requests模块")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("模块安装\npip install requests\n        \n发送get、post请求，获取响应\n    response "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发送get请求")]),s._v("\n    response "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("请求体的字典"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发送post请求")]),s._v("\n        \nresponse的方法\n    response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text\n        该方式往往会出现乱码，出现乱码使用response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encoding "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),s._v("\n    response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        把响应的二进制字节流转换为"),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v("类型\n            \n获取的网页源码通过以下三种方式一定能够正确打开\n    response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GBK"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text\n        \nheader\n    如果响应无法获取具体内容，可考虑带上header中的其它参数\n        \n使用超时参数\n    request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" timeout"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3秒内必须返回相应，否则会报错")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h3",{attrs:{id:"retrying模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#retrying模块"}},[s._v("#")]),s._v(" retrying模块")]),s._v(" "),n("p",[s._v("模块安装")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("pip install retrying\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"处理cookie相关的请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#处理cookie相关的请求"}},[s._v("#")]),s._v(" 处理cookie相关的请求")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('直接携带cookie请求url地址\n    1.cookie放在header中\n        headers = {"User-Agent":"...", "Cookie":"cookie字符串"}\n    2.cookie字典传给cookie参数\n        request.get(url, Cookies=cookie_dict)\n            \n发送post请求，获取cookie，带上cookie请求登录后的页面\n    1.session = requests.session() # session具有的方法和requests一样\n    2.session.post(url, data, headers) # 服务器设置在本地的cookie会存在session\n    3.session.get(url) # 带上之前保存在session中的cookie，就能访问成功\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"数据处理方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据处理方法"}},[s._v("#")]),s._v(" 数据处理方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("json.loads(json字符串)\n    把json字符串转换为python类型\njson.dumps\n    把python类型转换为json类型\n    json.dumps(ret1, ensure_ascii=False, indent=2)\n    ensure_ascii：让中文显示成中文\n    indent：能够让下一行在上一行的基础上空格\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);