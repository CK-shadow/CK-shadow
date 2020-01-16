(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{696:function(v,n,a){"use strict";a.r(n);var _=a(0),e=Object(_.a)({},(function(){var v=this,n=v.$createElement,a=v._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h3",{attrs:{id:"maven仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven仓库"}},[v._v("#")]),v._v(" Maven仓库")]),v._v(" "),a("p",[v._v("Maven仓库是项目中依赖的第三方库，这个库所在的位置叫做仓库"),a("br"),v._v("\n在Maven中，任何一个依赖、插件或者项目构建的输出，都可以称之为构件"),a("br"),v._v("\nMaven仓库能帮助我们管理构件（主要是jar），它就是放置所有jar文件（war、zip、pom等等）的地方")]),v._v(" "),a("p",[v._v("Maven仓库有三种类型：\n 本地\n 中央\n 远程")]),v._v(" "),a("p",[a("strong",[v._v("本地仓库")]),a("br"),v._v("\nMaven的本地仓库，在安装Maven后并不会创建，它是在第一次执行Maven命令时才会被创建")]),v._v(" "),a("p",[v._v("运行Maven的时候，Maven所需要的任何构件都是直接从本地仓库获取的。如果本地仓库没有，它会首先尝试从远程仓库下载构件至本地仓库，然后再使用本地仓库的构件")]),v._v(" "),a("p",[v._v("默认情况下，不管是Linux还是Windows，每个用户在自己的用户目录下都有一个路径名为.m2/respository/的仓库目录")]),v._v(" "),a("p",[v._v("Maven的本地仓库默认创建在%USER_HOME%目录下，要修改默认位置，在%M2_HOME%\\conf目录中的Maven的settings.xml文件中定义另一个路径")]),v._v(" "),a("p",[a("strong",[v._v("中央仓库")]),a("br"),v._v("\nMaven中央仓库是由Maven社区提供的仓库，其中包含了大量常用的库")]),v._v(" "),a("p",[v._v("中央仓库包含了绝大多数流行的开源Java构件，以及源码、作者信息、SCM、信息、许可证信息等，一般来说，简单的Java项目依赖的构件都可以在这里下载到")]),v._v(" "),a("p",[v._v("中央仓库的关键概念："),a("br"),v._v("\n 这个仓库由Maven社区管理"),a("br"),v._v("\n 不需要配置"),a("br"),v._v("\n 需要通过网络才能访问")]),v._v(" "),a("p",[a("strong",[v._v("远程仓库")]),a("br"),v._v("\n如果Maven在中央仓库中也找不到依赖的文件，它会停止构建过程并输出错误信息到控制台，为避免这种情况，Maven提供了远程仓库的概念，它是开发人员的定制仓库，包含了所需要的代码库或者其它工程中用到的jar文件")]),v._v(" "),a("p",[a("strong",[v._v("Maven依赖搜索顺序")])]),v._v(" "),a("ol",[a("li",[v._v("在本地仓库中搜索，如果搜不到，执行步骤2，如果找到了则执行其它操作")]),v._v(" "),a("li",[v._v("在中央仓库中搜索，如果找不到，并且有一个或多个远程仓库已经设置，则执行步骤4，如果找到了则下载至本地仓库中以备将来引用")]),v._v(" "),a("li",[v._v("如果远程仓库没有被设置，Maven将停止处理并抛出错误（无法找到依赖的文件）")]),v._v(" "),a("li",[v._v("在一个或多个远程仓库中搜索依赖的文件，如果找到则下载至本地仓库以备将来引用，否则Maven将停止处理并抛出错误（无法找到依赖的文件）")])])])}),[],!1,null,null,null);n.default=e.exports}}]);