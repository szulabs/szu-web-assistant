SZU Web Assistant
=================

This is a Chrome/Chromium extension which hopes to solve the compatibility
problems happened on web applications of Shenzhen University.


Features
--------

You are able to enjoy with those features in any Chromium based browser after
installed this extension:

* Watching online TV if you are using the internal network of SZU
* Signing in sites which using legacy authentation protocol without ActiveX
* Finding back the broken features of the SZU public board and WebCC (the
  legacy homework platform)
* Viewing many platforms of public affairs normally

and so on.


Installation
------------

The latest build is always able to be downloaded from [here][0].

The new release Chrome/Chromium will deny you to install from URLs outside of
Chrome Store. So you may need to install by **drag it into extensions
management page**. You can find more detail on [here][1].


Packaging
---------

If you are a developer, you could build this extension by youself too. For do
that, you need to prepare the [nodejs][2] and global-installed
[coffee-script][3] compiler.

    $ npm install  # install dependencies
    $ cake package  # package the extension

The private key `.szu-web-assistant.pem` will located at your home directory by
default. You should "keep it secret" and "keep it safe" as Gandalf told.


Contributes
-----------

If you like you can fork this project and send pull request to us.

If you found bugs or wish for more features, you could create issues [here][4].

This project is developed and supported by [SZU Labs][5], the unofficial
community of the [StuCampus][6].



[0]: http://szulabs.github.io/szu-web-assistant/downloads/szu-web-assistant.crx
[1]: http://stackoverflow.com/a/11879334/718453
[2]: http://nodejs.org/
[3]: http://coffeescript.org/
[4]: https://github.com/szulabs/szu-web-assistant/issues
[5]: http://szulabs.org
[6]: http://stu.szu.edu.cn
