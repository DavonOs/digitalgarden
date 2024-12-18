---
{"dg-publish":true,"dg-permalink":"book/tool/calibre","permalink":"/book/tool/calibre/","metatags":{"description":"电子阅读器Calibre的使用攻略","og:site_name":"DavonOs","og:title":"Calibre处理方法","og:type":"article","og:url":"https://zuji.eu.org/book/tool/calibre","og:image":null,"og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"}}
---

## 繁体竖排电子书转换

我现在有一本繁体竖排的电子书，竖排真的是没那么阅读习惯。繁体看着也累，于是想到了做个转换，网上资料大多是把简体横排转换成繁体竖排。

于是我只能自己摸索着如何把『电子书繁体竖排转换简体横排』，然后整理了成这篇文章。

准备工具

[天火藏书](http://ebook.cdict.info/)：如果只是把横版繁体转换成横版简体，这个在线就能搞定，简单快捷。（竖排的电子书虽然也能转横排，但是标点符号有问题）

[calibre](https://calibre-ebook.com/download)：如果你是竖排的电子书，请下载安装最新版

步骤

1. 安装 calibre 的『Chinese Text Conversion』插件，搜索「Chinese」即可：
2. 导入电子书到 calibre
3. 然后编辑对应的书籍
4. 在菜单栏找到『插件』，点击我们刚安装的『Chinese Text Conversion』插件，根据自己需求修改参数设置，然后点确定就可以了。
5. 保存之后点「阅读」就可以看效果了。如果繁体转简体成功，但是排版还是竖版的话，需要继续编辑书，改动改一下代码。
6. 检查css文件，如果找到 `vertical-rl` 改为 `horizontal-tb` 即可。改完保存退出编辑模式，使用阅读预览效果。

[calibre 用户手册](https://manual.calibre-ebook.com/zh_CN/)

[Calibre基础美化](https://blog.amamiyayuuko.com/p/theme-for-calibre/)

