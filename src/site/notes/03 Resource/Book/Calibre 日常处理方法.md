---
{"dg-publish":true,"dg-permalink":"books/tool/calibre","permalink":"/books/tool/calibre/","metatags":{"description":"电子书阅读器 Calibre 的使用攻略","og:site_name":"DavonOs","og:title":"Calibre 日常处理方法","og:type":"article","og:url":"https://zuji.eu.org/books/tool/calibre","og:image":"https://calibre-ebook.com/resources/img/home-feature.jpg","og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"dg-note-properties":{"tags":null}}
---

![home-feature](https://calibre-ebook.com/resources/img/home-feature.jpg)
## 繁体竖排电子书转换

[天火藏书](http://ebook.cdict.info/)：如果只是把横版繁体转换成横版简体，这个在线就能搞定，简单快捷。（竖排的电子书虽然也能转横排，但是标点符号有问题）

[Calibre](https://calibre-ebook.com/download)：如果是竖排的电子书，请下载安装最新版

1. 安装 calibre 的『Chinese Text Conversion』插件，搜索「Chinese」即可：
2. 导入电子书到 calibre，编辑对应的书籍
3. 在菜单栏找到『插件』，点击我们刚安装的『Chinese Text Conversion』插件，根据自己需求修改参数设置，然后点确定就可以了。
4. 保存之后点「阅读」就可以看效果了。如果繁体转简体成功，但是排版还是竖版的话，需要继续编辑书，改动改一下代码。
5. 检查css文件，如果找到 `vertical-rl` 改为 `horizontal-tb` 即可。改完保存退出编辑模式，使用阅读预览效果。

[Calibre 用户手册](https://manual.calibre-ebook.com/zh_CN/)

[Calibre 基础美化](https://blog.amamiyayuuko.com/p/theme-for-calibre/)

