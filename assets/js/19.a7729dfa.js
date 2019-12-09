(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{272:function(s,t,v){s.exports=v.p+"assets/img/16dcdd11.46bd3bfb.png"},273:function(s,t,v){s.exports=v.p+"assets/img/95868477.70c3b772.png"},274:function(s,t,v){s.exports=v.p+"assets/img/dcb3d577.b6beed0a.png"},420:function(s,t,v){"use strict";v.r(t);var _=v(0),a=Object(_.a)({},(function(){var s=this,t=s.$createElement,_=s._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("h2",{attrs:{id:"何为认证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#何为认证"}},[s._v("#")]),s._v(" 何为认证")]),s._v(" "),_("p",[s._v("核对的信息通常有：")]),s._v(" "),_("ul",[_("li",[s._v("密码：只有本人才会知道的字符串信息")]),s._v(" "),_("li",[s._v("动态令牌：仅限本人持有的设备内显示的一次性密码")]),s._v(" "),_("li",[s._v("数字证书：仅限本人（终端）持有的信息")]),s._v(" "),_("li",[s._v("生物认证：指纹和虹膜等本人生理信息")]),s._v(" "),_("li",[s._v("IC卡等：仅限本人持有的信息")])]),s._v(" "),_("p",[s._v("HTTP/1.1使用的认证方式有：")]),s._v(" "),_("ul",[_("li",[s._v("BASIC认证（基本认证）")]),s._v(" "),_("li",[s._v("DIGEST认证（摘要认证）")]),s._v(" "),_("li",[s._v("SSL客户端认证")]),s._v(" "),_("li",[s._v("FormBase认证（基于表单认证）\n还有Windows同一认证（Keberos认证、NTLM认证）等")])]),s._v(" "),_("hr"),s._v(" "),_("h2",{attrs:{id:"basic认证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#basic认证"}},[s._v("#")]),s._v(" BASIC认证")]),s._v(" "),_("p",[s._v("BASIC认证（基本认证）是从HTTP/1.0就定义的认证方式，即便是现在仍有一部分客户端会使用这种认证方式，是\nWeb服务器与通信客户端之间的认证方式")]),s._v(" "),_("p",[_("img",{attrs:{src:v(272),alt:""}})]),s._v(" "),_("p",[s._v("BASIC认证虽然采用Base64编码方式，但这不是加密处理，不需要任何附加信息即可对其解码，换言之，由于明文\n解码之后就是ID和密码，在HTTP等非加密通信线路上进行BASIC认证的过程中，如果被窃听，被盗的可能性极高。\n另外，除此之外想再进行一次BASIC认证时，一般的浏览器却无法实现注销操作，这也是问题之一。BASIC认证使\n用上不够便捷灵活，且达不到多数Web网站期望的安全性等级，因此并不常用")]),s._v(" "),_("hr"),s._v(" "),_("h2",{attrs:{id:"digest认证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#digest认证"}},[s._v("#")]),s._v(" DIGEST认证")]),s._v(" "),_("p",[s._v("DIGEST认证同样使用质询/响应的方式，但不会像BASIC那样直接发送明文密码。所谓质询方式是指，一开始一方\n会先发送认证要求给另一方，接着使用从另一方那儿接收到的质询码计算生成响应码，最后将响应码返回给对方进\n行认证的方式")]),s._v(" "),_("p",[_("img",{attrs:{src:v(273),alt:""}})]),s._v(" "),_("p",[s._v("DIGEST认证提供了高于BASIC认证的安全等级，但是和HTTPS的客户端认证相比仍旧很弱。DIGEST认证提供防\n止密码被窃听的保护机制，但并不存在防止用户伪装的保护机制。DIGEST认证和BASIC认证一样，使用上不那么\n便捷灵活，且仍达不到多数Web网站对高度安全等级追求的标准。因此它的适用范围也有限")]),s._v(" "),_("hr"),s._v(" "),_("h2",{attrs:{id:"ssl客户端认证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ssl客户端认证"}},[s._v("#")]),s._v(" SSL客户端认证")]),s._v(" "),_("p",[s._v("从使用用户ID和密码的认证角度来讲，只要二者的内容正确，即可认证是本人的行为，但如果用户ID和密码被盗，\n就很有可能被第三者冒充。利用SSL客户端认证可避免该情况的发生。SSL客户端认证是借由HTTPS的客户端证\n书完成的认证方式，凭借客户端证书认证，服务器可确认访问是否自己登录的客户端")]),s._v(" "),_("h4",{attrs:{id:"ssl客户端认证的认证步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ssl客户端认证的认证步骤"}},[s._v("#")]),s._v(" SSL客户端认证的认证步骤")]),s._v(" "),_("p",[s._v("为达到SSL客户端认证的目的，需要事先将客户端证书分发给客户端，且客户端必须安装此证书")]),s._v(" "),_("ol",[_("li",[s._v("接收到需要认证资源的请求，服务器会发送Certificate Request报文，要求客户端提供客户端证书")]),s._v(" "),_("li",[s._v("用户选择将发送的客户端证书后，客户端会把客户端证书信息以Client Certificate报文方式发送给服务器")]),s._v(" "),_("li",[s._v("服务器验证客户端证书验证通过后方可领取证书内客户端的公开密钥，然后开始HTTPS加密通信")])]),s._v(" "),_("h4",{attrs:{id:"ssl客户端认证采用双因素认证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ssl客户端认证采用双因素认证"}},[s._v("#")]),s._v(" SSL客户端认证采用双因素认证")]),s._v(" "),_("p",[s._v("在多数情况下，SSL客户端认证不会仅依靠证书来完成认证，一般会和基于表单认证组合形成一种双因素认证来\n使用。所谓双因素认证是指，认证过程中不仅需要密码这一个因素，还需要申请认证者提供其他持有信息，从而\n作为另一个因素，与其组合使用的认证方式。换言之，第一个认证因素的SSL客户端证书用来认证客户端计算机，\n另一个认证因素的密码则用来确定这是用户本人的行为")]),s._v(" "),_("hr"),s._v(" "),_("h2",{attrs:{id:"基于表单认证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基于表单认证"}},[s._v("#")]),s._v(" 基于表单认证")]),s._v(" "),_("h4",{attrs:{id:"session管理及cookie应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#session管理及cookie应用"}},[s._v("#")]),s._v(" Session管理及Cookie应用")]),s._v(" "),_("p",[s._v("基于表单认证本身是通过服务器端的Web应用，将客户端发送过来的用户ID和密码与之前登录过的信息做匹配来\n进行认证的。但鉴于HTTP是无状态协议，之前已认证成功的用户状态无法通过协议层面保存下来。于是我们会\n使用Cookie来管理Session，以弥补HTTP协议中不存在的状态管理功能")]),s._v(" "),_("p",[_("img",{attrs:{src:v(274),alt:""}})]),s._v(" "),_("ol",[_("li",[s._v("客户端把用户ID和密码等登录信息放入报文的实体部分，通常是以POST方法把请求发送给服务器。而这\n时，会使用HTTPS通信来进行HTML表单画面的显示和用户输入数据的发送")]),s._v(" "),_("li",[s._v("服务器会发送用以识别用户的SessionID，通过验证从客户端发送过来的登录信息进行身份识别，然后把\n用户的认证状态与SessionID绑定后记录在服务器端。另外，为减轻跨站脚本攻击（XXS）造成的损失，建议\n事先在Cookie内加上httponly属性")]),s._v(" "),_("li",[s._v("客户端接收到从服务端发送过来的SessionID后，会将其作为Cookie保存在本地。下次向服务器发送请求\n时，浏览器会自动发送Cookie，所以SessionID会随之发送到服务器。服务器可通过验证接收到的SessionID\n识别用户和其认证状态")])])])}),[],!1,null,null,null);t.default=a.exports}}]);