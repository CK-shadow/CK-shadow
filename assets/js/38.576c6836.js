(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{480:function(t,i,r){t.exports=r.p+"assets/img/90a6479c.81be8da3.png"},481:function(t,i,r){t.exports=r.p+"assets/img/3f319465.c9a3efb7.png"},482:function(t,i,r){t.exports=r.p+"assets/img/f73fc444.fb00c306.png"},604:function(t,i,r){"use strict";r.r(i);var p=r(0),o=Object(p.a)({},(function(){var t=this,i=t.$createElement,p=t._self._c||i;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("h3",{attrs:{id:"springboot配置流程"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#springboot配置流程"}},[t._v("#")]),t._v(" SpringBoot配置流程")]),t._v(" "),p("p",[t._v("SpringBoot框架是一个将整合框架的整合代码都写好了的框架，所以我们要知道它的工作原理才能找到各种整合框架可以配置的属性，以及属性对应的属性名")]),t._v(" "),p("p",[p("strong",[t._v("配置流程说明")])]),t._v(" "),p("ol",[p("li",[p("p",[t._v("SpringBoot的autoconfigure相关jar包中编写了所有内置支持框架的自动整合代码")])]),t._v(" "),p("li",[p("p",[t._v("所以支持的框架根据功能来划分包，每个包都有一个XxxAutoConfiguration配置类，都是一个基于纯注解的配置类，是各种框架整合的框架代码\n"),p("img",{attrs:{src:r(480),alt:""}})])]),t._v(" "),p("li",[p("p",[t._v("如果配置的框架有默认的配置参数，都放在一个名为XxxProperties的类里\n"),p("img",{attrs:{src:r(481),alt:""}})])]),t._v(" "),p("li",[p("p",[t._v("通过项目resource目录下的application.properties文件可以修改每个整合框架的默认属性，从而实现快速整合的目的")])])]),t._v(" "),p("p",[p("strong",[t._v("配置流程")])]),t._v(" "),p("ol",[p("li",[t._v("配置一个内置整合框架的参数，现在autoconfigure相关jar包中找到对应的模块")]),t._v(" "),p("li",[t._v("如果该框架有可以配置的参数，那么对应的整合模块中一定有一个XxxProperties类，在里面可以找到能够设置的参数")]),t._v(" "),p("li",[t._v("在resource源目录下的application.properties文件里面可以修改XxxProperties类中的默认属性\n"),p("img",{attrs:{src:r(482),alt:""}})])]),t._v(" "),p("p",[p("strong",[t._v("配置文件")]),p("br"),t._v("\nSpringBoot的参数配置文件支持两种格式，分别为application.properties和application.yml")]),t._v(" "),p("ul",[p("li",[t._v("application.properties是键值对风格")]),t._v(" "),p("li",[t._v("application.yml是层级键值对风格")])]),t._v(" "),p("p",[p("strong",[t._v("多配置文件支持")])]),t._v(" "),p("ol",[p("li",[t._v("在跟配置文件application.properties里添加子配置文件的名字\n"),p("ul",[p("li",[t._v("spring.profiles.active=database,mvc,freemarker")])])]),t._v(" "),p("li",[t._v("创建响应的子配置文件\n"),p("ul",[p("li",[t._v("application-databaseproperties")]),t._v(" "),p("li",[t._v("application-mvc.properties")]),t._v(" "),p("li",[t._v("application-freemarker.properties")])])])]),t._v(" "),p("div",{staticClass:"custom-block tip"},[p("p",[t._v("注意：最后key的字段与值之间的冒号（:）后面一定要有一个空格")])])])}),[],!1,null,null,null);i.default=o.exports}}]);