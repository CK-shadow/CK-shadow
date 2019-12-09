(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{403:function(e,t,n){"use strict";n.r(t);var l=n(0),u=Object(l.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("strong",[e._v("插入  db.集合名称.insert(document)")]),n("br"),e._v("\n插入文档时，如果不指定_id参数，MongoDB会为文档分配一个唯一的ObjectId")]),e._v(" "),n("ul",[n("li",[e._v('例1.db.example.insert({name:"Simon", age:23})')])]),e._v(" "),n("p",[n("strong",[e._v("简单查询 db.集合名称.find()")])]),e._v(" "),n("p",[n("strong",[e._v("更新 db.集合名称.update([query], [update], {multi : [boolean]})")])]),e._v(" "),n("ul",[n("li",[e._v("参数query：查询条件，类似于sql语句中的where部分被")]),e._v(" "),n("li",[e._v("参数update：更新操作符，类似于sql语句中的set部分")]),e._v(" "),n("li",[e._v("参数multi：默认值为false表示只更新查询到的第一条数据，true表示全文档更新\n"),n("ul",[n("li",[e._v("例1.   全文档更新\n"),n("ul",[n("li",[e._v('db.example.update({name : "Simon", name : "CK"})')])])]),e._v(" "),n("li",[e._v("例2.   指定属性更新通过操作符$set\n"),n("ul",[n("li",[e._v('db.example.insert({name : "TY", age : 23})')]),e._v(" "),n("li",[e._v('db.example.update({name : "TY"}, {$set:{name : "LL"}})')])])]),e._v(" "),n("li",[e._v("例3.   修改多条匹配到的数据\n"),n("ul",[n("li",[e._v('db.example.update({age : 23}, {$set : {address : "HG"}}, {multi : true})')])])])])])]),e._v(" "),n("p",[n("strong",[e._v("保存 db.集合名称.save(document)")]),n("br"),e._v("\n如果文档的_id已经存在则修改，如果文档的_id不存在则是添加")]),e._v(" "),n("p",[n("strong",[e._v("删除 db.集合名称.remove([query], {justOne : [boolean})")]),n("br"),e._v("\n参数query可选，删除的文档的条件"),n("br"),e._v("\n参数justOne可选，如果设为true或者1，则只删除一条，默认是false删除多条")])])}),[],!1,null,null,null);t.default=u.exports}}]);