(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{654:function(e,a,s){"use strict";s.r(a);var r=s(0),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h3",{attrs:{id:"rememberme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rememberme"}},[e._v("#")]),e._v(" RememberMe")]),e._v(" "),s("p",[e._v("Shiro提供了RememberMe功能，基本流程如下：")]),e._v(" "),s("ol",[s("li",[e._v("首先在登录页面选择RememberMe然后登录成功，如果是浏览器登录，一般会把RememberMe的Cookie写到客户端然后保存下来")]),e._v(" "),s("li",[e._v("关闭浏览器再重新打开，会发现浏览器还是记住你的")]),e._v(" "),s("li",[e._v("能够访问一般的网页，并显示已登录")]),e._v(" "),s("li",[e._v("访问某些特定的网页或功能，还是需要再次进行身份验证")])]),e._v(" "),s("h3",{attrs:{id:"rememberme配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rememberme配置"}},[e._v("#")]),e._v(" RememberMe配置")]),e._v(" "),s("p",[s("strong",[e._v("web.xml配置")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<bean id="sessionIdCookie" class="org.apache.shiro.web.servlet.SimpleCookie">\n    <constructor-arg value="sid"/>\n    <property name="httpOnly" value="true"/>\n    <property name="maxAge" value="-1"/>\n</bean>\n<bean id="rememberMeCookie" class="org.apache.shiro.web.servlet.SimpleCookie">\n    <constructor-arg value="rememberMe"/>\n    <property name="httpOnly" value="true"/>\n    <property name="maxAge" value="2592000"/>\x3c!-- 30天 --\x3e\n</bean>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("ul",[s("li",[e._v("sessionIdCookie：maxAge=-1，表示浏览器关闭时失效此Cookie")]),e._v(" "),s("li",[e._v("rememberMeCookie：即记住我的Cookie，保存时长30天")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<bean id="rememberMeManager" \n    class="org.apache.shiro.web.mgt.CookieRememberMeManager">\n    <property name="cipherKey" value="\\#{T(org.apache.shiro.codec.Base64).decode(\'4AvVhmFLUs0KTA3Kprsdag==\')}"/>\n    <property name="cookie" ref="rememberMeCookie"/>\n</bean>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[s("strong",[e._v("rememberMeManager：RememberMe管理器，cipherKey是rememberMe Cookie的密钥，默认是AES算法")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<bean id="securityManager" class="org.apache.shiro.web.mgt.DefaultWebSecurityManager">\n    ……\n    <property name="rememberMeManager" ref="rememberMeManager"/>\n </bean>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[s("strong",[e._v("安全管理器：设置securityManager安全管理器的rememberMeManager")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<bean id="formAuthenticationFilter" \n    class="org.apache.shiro.web.filter.authc.FormAuthenticationFilter">\n    ……\n    <property name="rememberMeParam" value="rememberMe"/>\n</bean>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[s("strong",[e._v("rememberMeParam：即RememberMe请求参数名，请求参数是boolean类型，true表示RememberMe")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<bean id="shiroFilter" class="org.apache.shiro.spring.web.ShiroFilterFactoryBean">\n    ……\n    <property name="filterChainDefinitions">\n    <value>\n        /login.jsp = authc\n        /logout = logout\n        /authenticated.jsp = authc\n        /** = user\n    </value>\n    </property>\n</bean>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("“/authenticated.jsp = authc” 表示访问该地址用户必须身份验证通过（Subject. isAuthenticated()==true）；而 /** = user” 表示访问该地址的用户是身份验证通过或 RememberMe 登录的都可以")])])}),[],!1,null,null,null);a.default=n.exports}}]);