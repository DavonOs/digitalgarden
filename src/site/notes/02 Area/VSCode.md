---
{"dg-publish":true,"dg-permalink":"program/VSCode","permalink":"/program/VSCode/","metatags":{"description":"VSCode常用快捷键和配置指南","og:site_name":"DavonOs","og:title":"VSCode","og:type":"article","og:url":"https://zuji.eu.org/program/vscode","og:image":null,"og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"created":"2025-03-14T11:34:44.946+08:00","updated":"2025-07-03T09:49:17.254+08:00"}
---


## 常用快捷键

- <kbd>Ctrl</kbd>+<kbd>P</kbd>：命令面板的精妙之处在于仅用键盘操控所有功能
	- + <kbd>></kbd>：几乎运行任何命令
	- + <kbd>@</kbd>：列出代码中的所有符号，方便快速导航。<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd>
- <kbd>Ctrl</kbd>+<kbd>Y</kbd>：前进
- <kbd>Ctrl</kbd>+<kbd>D</kbd>：选择相同元素的下一个
- <kbd>Alt</kbd>+鼠标左键：产生光标操作
- <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>↑</kbd> 或<kbd>↓</kbd>：添加多个光标
- <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>L</kbd>：选择相同元素
- <kbd>Shift</kbd> +<kbd>End</kbd>：从头选中一行
- <kbd>Shift</kbd> +<kbd>Home</kbd>：从尾部选中一行
- <kbd>Shift</kbd> +<kbd>←</kbd>或<kbd>→</kbd>：左右移动选中内容
- <kbd>Ctrl</kbd> +<kbd>←</kbd>或<kbd>→</kbd>：逐词移动选中内容
- <kbd>Alt</kbd> +<kbd>↓</kbd>或<kbd>↑</kbd>：快速移动该行内容
- <kbd>Shift</kbd> +<kbd>Alt</kbd>+<kbd>↓</kbd>或<kbd>↑</kbd>：快速复制该行
- <kbd>Alt</kbd> +<kbd>←</kbd>或<kbd>→</kbd>：左右快速切换光标位置
- <kbd>Tab</kbd> + <kbd>Shift</kbd>：向前缩进
- <kbd>Ctrl</kbd>+ <kbd>G</kbd>：查找跳转到具体行
- <kbd>Ctrl</kbd> + <kbd>`</kbd> ：命令行终端

## 让终端默认在当前文件路径启动

经常使用VSCode运行调试文件，又不想每次都手动cd目录的话，可以通过修改设置让终端默认在当前文件的路径启动。

1. 只改变当前工作区的设置
如果只想改变当前工作区的设置，可以通过在vscode界面依次点击“文件”→“首选项”→“设置”→“工作区”→“功能”→“终端”，找到Integrated:Cwd选项，将其值修改为“${fileDirname}”，即可在当前工作区内实现终端默认在当前文件的路径启动。

![Integrated:Cwd](https://i-blog.csdnimg.cn/blog_migrate/b9dd5089e62b74f16bd35679ac3792fb.png)
也可以通过修改当前目录的.vscode文件夹下settings.json文件进行更改，具体为在settings.json文件中添加以下内容：

​`"terminal.integrated.cwd":"${fileDirname}"`

需要注意的是，设置文件中的不同项是以逗号分隔的，如果上一行的结尾没有逗号，一定要记得添加，否则设置修改会无效。

![注意逗号](https://i-blog.csdnimg.cn/blog_migrate/094a3aa265272f7a7d8a43073bb43ede.png)

2. 改变所有打开工程的设置
与上面的修改类似，通过在vscode界面依次点击“文件”→“首选项”→“设置”→“用户”→“功能”→“终端”，找到Integrated：Cwd选项，将其值修改为”${fileDirname}“，即可在所有打开的工程内实现终端默认在当前文件的路径启动。

当然也可以通过修settings.json文件进行更改，用户配置文件的默认保存位置为：

Windows系统：`%APPDATA%\Code\User\settings.json`
Linux系统：`$HOME/.config/Code/User/settings.json`

在 settings.json文件中添加：`"terminal.integrated.cwd":"${fileDirname}"`即可，同样需要注意逗号的问题。

## 单击打开新文件窗口，不覆盖前一个窗口

方法一：双击文件名

最简单的方法是双击文件名，而不是单击。双击文件名会在新的编辑器窗口中打开文件，而不会覆盖之前的文件。

方法二：禁用预览模式

打开 `文件-->首选项-->设置` 窗口

如下图，在 `编辑管理` 选项卡下拉找到 `Enable Preview` ，**去掉这个选项的勾**。
![Enable Preview](https://i-blog.csdnimg.cn/blog_migrate/41b2213c3e404d44ffba1cc38bbda861.png)
或者<kbd>Ctrl</kbd>+<kbd>shift</kbd>+<kbd>p</kbd>，输入setting，在设置文件中添加以下内容：
`{ "workbench.editor.enablePreview": false }`保存文件后，预览模式将被禁用。