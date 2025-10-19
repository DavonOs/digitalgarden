---
{"dg-publish":true,"dg-permalink":"books/35799208/appendix-a","permalink":"/books/35799208/appendix-a/","metatags":{"description":"本章涉及了 pandas 中用于分析数据集的一些新的概念和工具。我们学习了如何读取 CSV 文件，如何处理缺失或重复的数据，如何利用描述性统计量，也见识到了将 DataFrame 转化为交互式图表有多简单。虽然你可能需要一些时间来消化这些知识，但是应该很快就能体会到 pandas 带来的强大力量。本章对 pandas 和 Excel 的 AutoFilter 功能、VLOOKUP 公式、数据透视表、PowerQuery 进行了对比。","og:site_name":"DavonOs","og:title":"Excel Python","og:type":"book","og:url":"https://zuji.eu.org/books/35799208/appendix-a","og:image":"https://file.ituring.com.cn/LargeCover/22038dc37469788a2ed5","og:image:width":"50","og:image:alt":"bookcover"},"created":"2025-09-24 14:51","updated":"2025-09-26 16:46"}
---


# A.1 创建新的 Conda 环境

在 Anaconda Prompt 中执行下列命令以创建一个名为 x 138 的新环境，该环境使用了 Python 3.8：

(base)>conda create - - name xl 38 python=3.8

按下回车键之后，Conda 会打印将安装到新环境中的内容，并请求你的确认：

Proceed ([y]/n)?

按下回车键确认，如果想要取消则输入 n。安装完成之后，像下面这样激活新的环境：

(base)>conda activate xl 38 (xl 38)>

环境名称已从 base 变更为 xl 38。现在你可以使用 Conda 或者 pip 在新环境中安装各种包，且不会影响任何其他的环境。（提醒一句：只有在 Conda 中找不到想要的包时才使用 pip。）下面来安装本书中用到的所有包，版本为我写作时所用的版本。首先，再次确认你处于 xl 38 环境中，即 Anaconda Prompt 显示的是（xl 38），然后像下面这样安装 Conda 包（下列命令应当在同一行中输入，换行只是出于排版原因）：

（xl 38）> conda install lxml=4.6.1 matplotlib=3.3.2 notebook=6.1.4 openpyxl=3.0.5 pandas=1.1.3 pillow=8.0.1 plotly=4.14.1 flake 8=3.8.4 python- dateutil=2.8.1 requests=2.24.0 sqlalchemy=1.3.20 xlrd=1.2.0 xlsxwriter=1.3.7 xlutils=2.0.0 xlwings=0.20.8 xlwt=1.3.0

确认安装计划之后，最后再来使用 pip 安装剩下的两个包。

（xl 38）> pip install pyxlsb=1.0.7 pytrends==4.7.3 (xl 38)>

# 如何使用 xl 38 环境

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/97b401de9fa7e4428eac910fbd4550e24de584ea400c527013880d10830492cb.jpg)

如果不想使用 base 环境而想使用 xl 38 环境来运行本书中的所有示例代码，那么每次启动 Anaconda Prompt 时一定要执行如下命令来激活 xl 38 环境：

（base）> conda activate xl 38

也就是说，每当本书代码中的 Anaconda Prompt 显示为（base）> 时，你看到的应该是（xl 38）>。

要停用环境并回到 base 环境，可以输入如下命令：

（xl 38）> conda deactivate (base)>

如果想彻底删除环境，可以运行以下命令：

（base）> conda env remove - - name xl 38

除了按照上面的步骤手动创建 xl 38 环境，也可以利用本书配套代码库的 conda 文件夹中的 xl 38. yml 环境文件。执行下面的命令就可以完成所有工作：

（base）> cd C:\Users\username\python- for- excel\conda (base）> conda env create - f xl 38. yml (base）> conda activate xl 38 (xl 38)>

在默认情况下，Anaconda 会在你每次打开 macOS 中的终端或者 Windows 中的 Anaconda Prompt 时激活 base 环境。如果你不喜欢这样的默认设置，我会在下一节中介绍如何禁用自动激活。

# A.2 禁用自动激活

A.2 禁用自动激活如果不希望在每次启动 Anaconda Prompt 时自动激活 base 环境，你可以禁用它：这样你就需要在命令提示符（Windows 系统）或终端（macOS 系统）中手动输入 conda activate base 才能使用 Python。

Windows

Windows 在 Windows 中，你需要使用一般的命令提示符而不是 Anaconda Prompt。下面的步骤可以在普通的命令提示符中启用 conda 命令。一定要将第一行中的路径替换成你的计算机上的 Anaconda 安装目录：

> cd C:\Users\username\Anaconda 3\condabin  > conda init cmd. exe

现在你的普通命令提示符已经配置好 Conda，接下来就可以像下面这样激活 base 环境了。

> conda activate base (base)>

macOS

在 macOS 中，只需要在终端中执行下面的命令就可以禁用自动激活：

(base)> conda config - - set auto_activate_base false

如果想要撤销禁用操作，那么只需要执行同样的命令，并将 false 改成 true。在重启终端后更改就会生效。接下来，在能够使用 python 命令之前，需要像下面这样激活 base 环境。

> conda activate base (base)>
