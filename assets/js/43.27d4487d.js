(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{422:function(t,a,r){"use strict";r.r(a);var e=r(0),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"状态码告知从服务器端返回的请求结果"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#状态码告知从服务器端返回的请求结果"}},[t._v("#")]),t._v(" 状态码告知从服务器端返回的请求结果")]),t._v(" "),r("p",[t._v("状态码的职责是当客户端向服务器端发送请求时，描述返回的请求结果。借助状态码，用户可以知道服务端是正常处\n理了请求，还是出现了错误")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"_2xx成功"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2xx成功"}},[t._v("#")]),t._v(" 2XX成功")]),t._v(" "),r("h4",{attrs:{id:"_200-成功"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_200-成功"}},[t._v("#")]),t._v(" 200 成功")]),t._v(" "),r("p",[t._v("表示从客户端发来的请求在服务端被正常处理了。在响应报文内，随状态码返回的信息会因方法的不同发生改变。比\n如，使用GET方法时，对应请求资源的实体会作为响应返回；而使用HEAD方法时，对应请求资源的实体首部不随报\n文主体作为响应返回（即在响应中只返回首部，不会返回实体的主体部分）")]),t._v(" "),r("h4",{attrs:{id:"_204-no-content"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_204-no-content"}},[t._v("#")]),t._v(" 204 No Content")]),t._v(" "),r("p",[t._v("该状态码表示服务器接收的请求已成功处理，但在返回的响应报文中不含实体的主体部分。另外，也不允许返回任何实\n体的主体。比如，当从浏览器发出请求处理后，返回204响应，那么浏览器显示的页面不发生更新。一般只需要客户端\n往服务端发送信息，而对客户端不需要发送新信息内容的情况下使用")]),t._v(" "),r("h4",{attrs:{id:"_206-partial-content"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_206-partial-content"}},[t._v("#")]),t._v(" 206 Partial Content")]),t._v(" "),r("p",[t._v("该状态码表示客户端进行了范围请求，而服务器成功执行了这部分的GET请求，响应报文中包含由Content-Range指定\n范围的实体内容")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"_3xx重定向"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3xx重定向"}},[t._v("#")]),t._v(" 3XX重定向")]),t._v(" "),r("h4",{attrs:{id:"_301-moved-permanently"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_301-moved-permanently"}},[t._v("#")]),t._v(" 301 Moved Permanently")]),t._v(" "),r("p",[t._v("永久性重定向。该状态码表示请求的资源已被分配了新的URI，以后应使用资源现在所指的URI，也就是说，如果已\n经把资源对应的URi保存为书签了，这时应该按Location首部字段提示的URI重新保存")]),t._v(" "),r("h4",{attrs:{id:"_302-found"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_302-found"}},[t._v("#")]),t._v(" 302 Found")]),t._v(" "),r("p",[t._v("临时重定向，该状态码表示请求的资源已被分配了新的URI，希望用户（本次）能使用新的URI来访问。和\n301 Moved Permanently状态码相似，但302状态码代表的资源不是被永久移动，只是临时改变")]),t._v(" "),r("h4",{attrs:{id:"_303-see-other"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_303-see-other"}},[t._v("#")]),t._v(" 303 See Other")]),t._v(" "),r("p",[t._v("该状态码表示由于请求对应的资源存在着另一个URI，应使用GET方法定向获取请求的资源。303状态码和302 Found\n状态码有着相同的功能，但303状态码明确表示客户端应当采用GET方法获取资源，这点与302状态码有区别")]),t._v(" "),r("h4",{attrs:{id:"_304-not-modified"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_304-not-modified"}},[t._v("#")]),t._v(" 304 Not Modified")]),t._v(" "),r("p",[t._v("该状态码表示客户端发送附带条件的请求时，服务端允许请求访问资源，但未满足条件的情况。304状态码返回时，不\n包含任何响应的主体部分。304虽然被划分在3XX类别中，但是和重定向没有关系")]),t._v(" "),r("h4",{attrs:{id:"temporary-redirect"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#temporary-redirect"}},[t._v("#")]),t._v(" Temporary Redirect")]),t._v(" "),r("p",[t._v("临时重定向，该状态码与302 Found有着相同的含义。尽管302标准禁止POST变为GET，但实际使用时大家并不遵守，\n307会遵照浏览器标准，不会从POST变为GET。但是，对于处理响应时的行为，每种浏览器有可能出现不同的情况")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"_4xx客户端错误"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4xx客户端错误"}},[t._v("#")]),t._v(" 4XX客户端错误")]),t._v(" "),r("h4",{attrs:{id:"_400-bad-request"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_400-bad-request"}},[t._v("#")]),t._v(" 400 Bad Request")]),t._v(" "),r("p",[t._v("该状态码表示请求报文中存在语法错误。当错误发生时，需修改请求的内容后再次发送请求，另外，浏览器会像200\nOK一样对待该状态")]),t._v(" "),r("h4",{attrs:{id:"_401-unauthorized"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_401-unauthorized"}},[t._v("#")]),t._v(" 401 Unauthorized")]),t._v(" "),r("p",[t._v("该状态码表示发送的请求需要有通过HTTP认证（BASIC认证、DIGEST认证）的认证信息。另外若之前已进行过一次\n请求，则表示用户认证失败。返回含有401的响应必须包含一个适用于被请求资源的WWW-Authenticate首部用以质询\n用户信息。当浏览器初次接收到401响应，会弹出认证用的对话窗口")]),t._v(" "),r("h4",{attrs:{id:"_403-forbidden"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_403-forbidden"}},[t._v("#")]),t._v(" 403 Forbidden")]),t._v(" "),r("p",[t._v("该状态码表明对请求资源的访问被服务器拒绝了，服务器端没有必要给出详细的拒绝原因，但如果想做说明的话，可\n以在实体的主体部分对原因进行描述，这样就能让用户看到了。未获得文件系统的访问授权，访问权限出现某些问题\n（从未授权的发送源IP地址试图访问）等列举的情况都可能是403发生的原因")]),t._v(" "),r("h4",{attrs:{id:"_404-not-found"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_404-not-found"}},[t._v("#")]),t._v(" 404 Not Found")]),t._v(" "),r("p",[t._v("该状态码表明服务器端无法找到请求的资源，除此之外，也可以在服务器端拒绝请求且不想说明理由时使用")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"_5xx服务器端错误"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5xx服务器端错误"}},[t._v("#")]),t._v(" 5XX服务器端错误")]),t._v(" "),r("h4",{attrs:{id:"_500-internal-server-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_500-internal-server-error"}},[t._v("#")]),t._v(" 500 Internal Server Error")]),t._v(" "),r("p",[t._v("该状态码表明服务器端在执行请求时发生了错误，也有可能是Web应用存在的bug或临时存在的故障")]),t._v(" "),r("h4",{attrs:{id:"_503-service-unavailable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_503-service-unavailable"}},[t._v("#")]),t._v(" 503 Service Unavailable")]),t._v(" "),r("p",[t._v("该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。如果事先得知解除以上状况所需的时\n间，最好写入RetryAfter首部字段再返回给客户端")])])}),[],!1,null,null,null);a.default=_.exports}}]);