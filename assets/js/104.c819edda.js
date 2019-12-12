(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{586:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"映射路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#映射路径"}},[s._v("#")]),s._v(" 映射路径")]),s._v(" "),e("p",[s._v("用于匹配请求路径，让请求找到对应方法的路径称之为映射路径")]),s._v(" "),e("p",[e("strong",[s._v("标准映射路径")]),e("br"),s._v("\n所谓标准映射路径，就是指映射路径的完整格式")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@RequestMapping(value="/index.do")\npublic String(){\n    return "index"\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",[s._v('注：映射路径可以不用前缀"/"，也可以不要后缀".do"')])]),s._v(" "),e("p",[e("strong",[s._v("通配符映射路径")]),e("br"),s._v("\n? 匹配一个字符，如果请求路径在对应的位置放任何一个字符都可以找到这个映射路径"),e("br"),s._v("\n✳ 匹配多个字符，如果请求路径在对应的位置放1-N个字符都可以找到这个映射路径"),e("br"),s._v('\n✳✳ 匹配多级路径，如果匹配多级目录，相对路径就不是根目录了，返回的页面名前要加上"/"')]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[s._v("注：通配符优先级：? > * > **")])]),s._v(" "),e("p",[e("strong",[s._v("有路径变量映射路径")]),e("br"),s._v("\nSpringMVC支持获得路径上任何一级的值，这个值称为路径变量"),e("br"),s._v("\n获取方式：")]),s._v(" "),e("ol",[e("li",[s._v("在请求路径对应的位置设置{变量名}")]),s._v(" "),e("li",[s._v("通过一个注解@PathVariable获得\n作用：可将参数放在路径里面，实现伪静态（看起来是个静态页面，实际上是动态页面）")])]),s._v(" "),e("p",[e("strong",[s._v("限制请求类型")]),e("br"),s._v("\nmethod=RequestMethod.请求类型"),e("br"),s._v("\n限制请求类型，如果请求类型不匹配就不能执行该方法")]),s._v(" "),e("p",[e("strong",[s._v("参数的限制")]),e("br"),s._v("\n作用：安全的考虑，如果参数不匹配，就不让访问"),e("br"),s._v("\n指定参数的某些情况")]),s._v(" "),e("ol",[e("li",[s._v("必须包含某些参数，才能访问方法")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('params = {参数1, 参数2, ...}\nRequestMapping(value="/index", params={"id", "name"})\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("必须不包含某些参数，才能访问方法")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('params = {参数1, !参数2, ...}\nRequestMapping(value="/index", params={"id", "!name"})\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("参数不能是某个值")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('params = {参数1, 参数!=值, ...}\nRequestMapping(value="/index", params={"id!=1", "name"})\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("命名空间")]),e("br"),s._v("\n作用：解决了不同类的方法重名问题，区分不同类里面方法的映射路径，RequestMapping注解在类上声明时，就是个命名空间")])])}),[],!1,null,null,null);a.default=t.exports}}]);