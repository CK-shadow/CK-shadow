(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{778:function(a,s,e){"use strict";e.r(s);var n=e(0),r=Object(n.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"聚合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聚合"}},[a._v("#")]),a._v(" 聚合")]),a._v(" "),e("h4",{attrs:{id:"聚合-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聚合-2"}},[a._v("#")]),a._v(" 聚合")]),a._v(" "),e("p",[a._v("聚合(aggregate)主要用于计算数据，类似于sql的sum()、avg()")]),a._v(" "),e("p",[a._v("db.集合名称.aggregate([{管道 : {表达式}}])")]),a._v(" "),e("h4",{attrs:{id:"管道"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#管道"}},[a._v("#")]),a._v(" 管道")]),a._v(" "),e("p",[a._v("管道在Unix和Linux中一般用于将当前命令的输出结果作为下一个命令的输入，在MongoDB中，管道具有同样的作用，文档处理完毕之后，通过管道进行下一次处理")]),a._v(" "),e("p",[e("strong",[a._v("常用管道")]),e("br"),a._v("\n$group : 将集合中的文档进行分组，用于统计结果"),e("br"),a._v("\n$match : 过滤数据，只输出符合条件的文档"),e("br"),a._v("\n$project : 修改输入文档的结构，如重命名，增加，删除字段，创建计算结果"),e("br"),a._v("\n$sort : 将输入文档排序后输出"),e("br"),a._v("\n$limit : 限制聚合管道返回的文档数"),e("br"),a._v("\n$skip : 跳过指定文档的数量，并返回余下的文档"),e("br"),a._v("\n$unwind : 将数组类型的字段进行拆分")]),a._v(" "),e("h4",{attrs:{id:"表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表达式"}},[a._v("#")]),a._v(" 表达式")]),a._v(" "),e("p",[a._v("处理输入文档并输出")]),a._v(" "),e("p",[e("strong",[a._v("常用表达式")]),e("br"),a._v("\n$sum：计算总和，$sum : 1同count表示计数"),e("br"),a._v("\n$avg：计算平均值"),e("br"),a._v("\n$min：获取最小值"),e("br"),a._v("\n$max：获取最大值"),e("br"),a._v("\n$push：在结果文档中插入值到一个数组中"),e("br"),a._v("\n$first：根据资源文档的排序获取第一个文档数据"),e("br"),a._v("\n$last：根据资源文档的排序获取最后一个文档数据")]),a._v(" "),e("h4",{attrs:{id:"group"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#group"}},[a._v("#")]),a._v(" group")]),a._v(" "),e("p",[a._v("将集合中的文档分组，可用于统计结果"),e("br"),a._v('\n_id表示分组的依据，使用某个字段的格式为"$字段"')]),a._v(" "),e("p",[a._v("例1.统计男生和女生的总人数")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('db.example.aggregate([\n    {$group:\n        {\n            id : "$gender",\n            counter : {$sum : 1}        \n        }\n    }\n])\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("h4",{attrs:{id:"group-by-null"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#group-by-null"}},[a._v("#")]),a._v(" group by null")]),a._v(" "),e("p",[a._v("将集合中的所有文档分为一组")]),a._v(" "),e("p",[a._v("例1.求学生的总人数，平均年龄")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('db.exqmple.aggregate([\n    {$group :\n        {\n            _id : null,\n            counter : {$sum : 1},\n            avgAge : {$avg : "$age"}\n        }\n    }\n])\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("h4",{attrs:{id:"透视数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#透视数据"}},[a._v("#")]),a._v(" 透视数据")]),a._v(" "),e("p",[a._v("使用$$ROOT可以将文档内容加入到结果集的数组中")]),a._v(" "),e("p",[a._v("例1.根据性别分组统计学生信息")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('db.example.aggregate([\n    {$group :\n        {\n            _id : "$gender",\n            name : {$push : "$$ROOT"}\n        }            \n    }\n])\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("h4",{attrs:{id:"match"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#match"}},[a._v("#")]),a._v(" $match")]),a._v(" "),e("p",[a._v("用于过滤数据，只输出符合条件的文档"),e("br"),a._v("\n使用MongoDB标准查询操作")]),a._v(" "),e("p",[a._v("例1.查询年龄大于20的学生")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("db.example.aggregate([\n    {$match : {age : {$gt : 20}}}\n])\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("例2.查询年龄大于20的男生，女生人数")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('db.example.aggregate([\n    {$match : {age : {$gt : 20}}},\n    {$group : {_id : "$gender", counter : {$sum : 1}}}\n])\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h4",{attrs:{id:"project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project"}},[a._v("#")]),a._v(" $project")]),a._v(" "),e("p",[a._v("修改输入文档的结构，如重命名，添加，删除字段创建计算结果")]),a._v(" "),e("p",[a._v("例1.查询学生的姓名，年龄")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("db.example.aggregate([\n    {$project : {_id : 0, name : 1, age : 1}}\n])\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("例2.查询男生，女生人数，输出人数")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('db.example.aggregate([\n    {$group : {_id : "$gender", counter : {$sum : 1}}},\n    {$project : {_id : 0, counter : 1}}\n])\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h4",{attrs:{id:"sort"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[a._v("#")]),a._v(" $sort")]),a._v(" "),e("p",[a._v("将输入文档排序后输出, 1是升序，-1是降序")]),a._v(" "),e("p",[a._v("例1.查询男女生人数，降序输出")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('db.example.aggregate([\n    {$group : {_id : "$gender", counter : {$sum : 1}}},\n    {$sort : {counter : -1}}            \n])\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h4",{attrs:{id:"limit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limit"}},[a._v("#")]),a._v(" $limit")]),a._v(" "),e("p",[a._v("限制聚合管道返回的文档数")]),a._v(" "),e("p",[a._v("例1.查询两条学生的信息")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("db.example.aggregate([{$limit : 2}])\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"skip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#skip"}},[a._v("#")]),a._v(" $skip")]),a._v(" "),e("p",[a._v("跳过指定数量的文档，并返回余下的文档")]),a._v(" "),e("p",[a._v("例1.查询从第3条开始的学生信息")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("db.example.aggregate([{$skip : 2}])\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("例2.统计男女生人数，降序输出，取第二条数据")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('db.example.aggregate([\n    {$group : {_id : "$gender", counter : {$sum : 1}}},\n    {$sort : {counter : -1}},\n    {$skip : 1},\n    {$limit : 1}\n])\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("p",[a._v("注意：先写skip，再写limit")]),a._v(" "),e("h4",{attrs:{id:"unwind"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unwind"}},[a._v("#")]),a._v(" $unwind")]),a._v(" "),e("p",[a._v("将文档中的某一个数组类型字段拆分成多条，每条包含数组中的一个值")]),a._v(" "),e("p",[a._v("语法1.对某字段值进行拆分"),e("br"),a._v('\ndb.集合名称.aggregate([{$unwind : "$字段名称"}])')]),a._v(" "),e("p",[a._v("语法2.对某字段值进行拆分"),e("br"),a._v("\n处理非数组，空数组，无字段，null值情况"),e("br"),a._v("\n默认参数值为false，不输出不满足数组条件数据，改为true则依旧输出")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('db.example.aggregate([\n    $unwind : {\n        path : "$字段名称",\n        preserveNullAndEmptyArrays : <boolean>\n    }\n])\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h2",{attrs:{id:"索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[a._v("#")]),a._v(" 索引")]),a._v(" "),e("ul",[e("li",[a._v("建立索引\n"),e("ul",[e("li",[a._v("1表示升序，2表示降序")]),a._v(" "),e("li",[a._v("db.集合名称.ensureIndex({属性 : 1})")])])]),a._v(" "),e("li",[a._v("建立唯一索引,实现唯一约束的功能\n"),e("ul",[e("li",[a._v('db.example.ensureIndex({"name" : 1}, {"unique" : true})')])])]),a._v(" "),e("li",[a._v("联合索引，对多个属性值建立一个索引，按照find()出现的顺序\n"),e("ul",[e("li",[a._v("db.example.ensureIndex({name : 1, age : 1})")])])]),a._v(" "),e("li",[a._v("查看文档的所有索引\n"),e("ul",[e("li",[a._v("db.example.getIndexes();")])])]),a._v(" "),e("li",[a._v("删除所有\n"),e("ul",[e("li",[a._v('db.example.dropIndexes("索引名称")')])])])]),a._v(" "),e("h2",{attrs:{id:"安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[a._v("#")]),a._v(" 安全")]),a._v(" "),e("p",[a._v("为了更安全的访问mongodb，需要访问者提供用户名和密码，于是需要在mongodb中创建用户"),e("br"),a._v("\n采用了角色-用户-数据库的安全管理方式")]),a._v(" "),e("p",[e("strong",[a._v("常用的系统角色如下：")]),e("br"),a._v("\nroot : 只在admin数据库中可用，超级账号，超级权限\nRead : 允许用户读取指定数据库\nreadWrite : 允许用户读写指定数据库")]),a._v(" "),e("p",[e("strong",[a._v("创建超级管理员用户")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('db.createUser({\n    user : "admin",\n    pwd : "123",\n    roles : [{role : "root", db : "admin"}]\n})\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[e("strong",[a._v("启用安全认证")]),e("br"),a._v("\n修改配置文件"),e("br"),a._v("\nsudo vi /etc/mongodb.conf")]),a._v(" "),e("ul",[e("li",[a._v("启用身份验证")]),a._v(" "),e("li",[a._v("注意keys 和values之间要加空格，否则解析会报错")])]),a._v(" "),e("h2",{attrs:{id:"复制-副本集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制-副本集"}},[a._v("#")]),a._v(" 复制(副本集)")]),a._v(" "),e("h4",{attrs:{id:"什么是复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是复制"}},[a._v("#")]),a._v(" 什么是复制")]),a._v(" "),e("p",[a._v("复制提供了数据的冗余备份，并在多个服务器上存储数据副本，提高了数据可用性，并可以保证数据的安全性"),e("br"),a._v("\n复制还允许从硬件故障和服务中断中恢复数据")]),a._v(" "),e("h4",{attrs:{id:"为什么要复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要复制"}},[a._v("#")]),a._v(" 为什么要复制")]),a._v(" "),e("ul",[e("li",[a._v("数据备份")]),a._v(" "),e("li",[a._v("数据灾难恢复")]),a._v(" "),e("li",[a._v("读写分离")]),a._v(" "),e("li",[a._v("高数据可用性")]),a._v(" "),e("li",[a._v("无宕机维护")]),a._v(" "),e("li",[a._v("副本集对应用程序是透明")])]),a._v(" "),e("h4",{attrs:{id:"复制的工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制的工作原理"}},[a._v("#")]),a._v(" 复制的工作原理")]),a._v(" "),e("p",[a._v("复制至少需要两个节点A，B..."),e("br"),a._v("\nA是主节点，负责处理客户端请求"),e("br"),a._v("\n其余的都是从节点，负责复制主节点上的数据"),e("br"),a._v("\n节点常见的搭配方式是:一主一从，一主多从"),e("br"),a._v("\n主节点记录再其上的所有操作，从节点定期轮询主节点获取这些操作，然后对自己数据副本执行这些操作，保证数据统一"),e("br"),a._v("\n主节点和从节点进行数据交互保障数据的一致性")]),a._v(" "),e("h4",{attrs:{id:"复制的特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制的特点"}},[a._v("#")]),a._v(" 复制的特点")]),a._v(" "),e("p",[a._v("N个节点的集群"),e("br"),a._v("\n任何节点可作为主节点"),e("br"),a._v("\n所有的写入操作都在主节点上"),e("br"),a._v("\n自动故障转移"),e("br"),a._v("\n自动备份")])])}),[],!1,null,null,null);s.default=r.exports}}]);