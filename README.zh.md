SZU Web Assistant
=================

这是一个 Chrome/Chromium 浏览器扩展，用来提示深圳大学校园网产品使用体验，解决多种浏览器兼容性问题。


特性
----

安装本扩展后，可以在 Chrome/Chromium 浏览器中体验如下特性：

* 观看深圳大学内部网的网络电视（而不用打开 IE）
* 登录使用旧的认证方法（密码控件）的网页应用
* 修复并正常使用公文通和 WebCC（旧的在线作业提交系统）因浏览器兼容性问题而无法使用的功能
* 以正常尺寸和页面布局查看教务部网页

等等……


安装
------------

最新版始终可以在[这里][0]下载到。

新版的 Chrome/Chromium 会拒绝安装 Chrome Store 以外的扩展，所以你可能需要自己**将本扩展拖拽到扩展管理页面**。具体如何操作，可以参考[这里][1]。


打包
----

如果你是一名开发者，你也可以自己构建和打包这个扩展。在这么做之前，你需要准备 [nodejs][2] 和安装在系统全局的 [coffee-script][3] 编译器作为构建环境。

    $ npm install  # install dependencies
    $ cake package  # package the extension

私钥文件 `.szu-web-assistant.pem` 默认放在用户目录下。你应该保管好它，并不要泄漏给他人。


贡献
----

如果你愿意，你可以 fork 这个项目并通过 pull request 向我们贡献代码。

如果你发现了 Bug 或者期待某项功能，你可以在 [Issue 列表][4] 中创建新的 Issue。

本项目由 [学子网实验室][5] 开发和维护, 这是由 [深圳大学学子天地][6] 成员组成的非官方社群。


[0]: http://szulabs.github.io/szu-web-assistant/downloads/szu-web-assistant.crx
[1]: http://www.geekpark.net/read/view/161039
[2]: http://nodejs.org/
[3]: http://coffeescript.org/
[4]: https://github.com/szulabs/szu-web-assistant/issues
[5]: http://szulabs.org
[6]: http://stu.szu.edu.cn
