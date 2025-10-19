---
{"dg-publish":true,"dg-permalink":"books/35799208/09","permalink":"/books/35799208/09/","metatags":{"description":"本章涉及了 pandas 中用于分析数据集的一些新的概念和工具。我们学习了如何读取 CSV 文件，如何处理缺失或重复的数据，如何利用描述性统计量，也见识到了将 DataFrame 转化为交互式图表有多简单。虽然你可能需要一些时间来消化这些知识，但是应该很快就能体会到 pandas 带来的强大力量。本章对 pandas 和 Excel 的 AutoFilter 功能、VLOOKUP 公式、数据透视表、PowerQuery 进行了对比。","og:site_name":"DavonOs","og:title":"Excel Python","og:type":"book","og:url":"https://zuji.eu.org/books/35799208/09","og:image":"https://file.ituring.com.cn/LargeCover/22038dc37469788a2ed5","og:image:width":"50","og:image:alt":"bookcover"},"created":"2025-09-24 14:50","updated":"2025-09-26 16:49"}
---


# 9.1 开始使用 xlwings

xlwings 的目标之一是成为 VBA 的替代品，它让你能够在 Windows 或 macOS 中通过 Python 与 Excel 进行互动。由于 Excel 的网格是显示 Python 数据结构（比如嵌套列表、NumPy 数组和 pandas DataFrame）的绝佳布局，因此 xlwings 的核心功能就是让读写 Excel 文件尽可能简单。本节首先会介绍如何将 Excel 用作数据查看器——当你在 Jupyter 笔记本中与 DataFrame 进行互动时，这是非常实用的功能。然后会介绍 Excel 对象模型，之后我们会利用 xlwings 边做边学。本节在最后会向你展示如何调用那些可能仍然存在于旧式工作簿中的 VBA 代码。由于 xlwings 是 Anaconda 的一部分，因此无须在这里手动安装。

# 9.1.1 将 Excel 用作数据查看器

你可能在第 8 章中已经注意到了，在默认情况下，Jupyter 笔记本会将大型 DataFrame 的大部分数据隐藏，只显示前几行（列）和最后几行（列）。要获得对数据的直观感受，一种方法是绘制图像，因为图像可以让你发现异常的数据。然而在某些时候，真正有用的是直接浏览数据表。在读完第 7 章之后，你已经知道如何在 DataFrame 中使用 to_excel 方法。虽然本章也可以这样做，但还是有点儿麻烦：需要给 Excel 文件取一个名字，在文件系统中找到它，打开它，在对 DataFrame 进行修改后，需要关闭 Excel 文件然后再重新执行这个过程。一种更好的方法是执行 df. to clipboard ()，其可以将 DataFrame df 复制到剪贴板，这样你就可以把它粘贴到 Excel。不过还有一种更简单的方法，即使用 xlwings 中的 view 函数：

In[1]: #首先 ，导入本章会用到的包 import datetime as dt import xlwings as xw import pandas as pd import numpy as np In[2]: #创建一个基于伪随机数的DataFrame ， #它有足够多的行使得只有首尾几行会被显示 df  $=$  pd. DataFrame（data=np. random. randn（100，5), columns  $\equiv$  [f"Trial{）"fori in range (1，6)]) df Out[2]: Trial 1 Trial 2 Trial 3 Trial 4 Trial 5 0 - 1.313877 1.164258 - 1.306419 - 0.529533 - 0.524978 1 - 0.854415 0.022859 - 0.246443 - 0.229146 - 0.005493 2 - 0.327510 - 0.492201 - 1.353566 - 1.229236 0.024385 3 - 0.728083 - 0.080525 0.628288 - 0.382586 - 0.590157 4 - 1.227684 0.498541 - 0.266466 0.297261 - 1.297985 95 - 0.903446 1.103650 0.033915 0.336871 0.345999 96 - 1.354898 - 1.290954 - 0.738396 - 1.102659 0.115076 97 - 0.070092 - 0.416991 - 0.203445 - 0.686915 - 1.163205 98 - 1.201963 0.471854 - 0.458501 - 0.357171 1.954585 99 1.863610 0.214047 - 1.426806 0.751906 - 2.338352

[100 rows x 5 columns] In [3]: # 在 Excel 中查看 DataFrame  xw.view (df)

view 函数可以接受所有常见的 Python 对象，包括数字、字符串、列表、字典、元组、NumPy 数组和 pandas DataFrame。在默认情况下，它会打开一个新的工作簿，然后将对象粘贴到第一张工作表的 A 1 单元格。它甚至会通过 Excel 的自动适应功能来调整列宽。不必每次都打开一个新的工作簿，你也可以通过为 view 函数提供一个 xlwings sheet 对象作为第二个参数来重复利用同一个工作簿文件：xw.view (df，mysheet)。接下来我会解释如何才能访问这个 sheet 对象，以及它是如何与 Excel 对象模型协作的。²

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/538af52b9ec87d112fab007f13033f8a34aeab56126081414b6824e44e7e29f7.jpg)

# macOS：权限与偏好设置

如第 2 章所述，在 macOS 中，一定要从 Anaconda Prompt（比如通过终端）运行 Jupyter 笔记本和 VS Code。这样可以确保在第一次使用 xlwings 时看到那两个弹出式对话框：第一个是“终端想要控制 System Events”，第二个是“终端想要控制 Microsoft Excel”。你需要对这两个对话框进行确认，以允许 Python 自动化 Excel。理论上来说，这些对话框会被任何使用了 xlwings 代码的应用程序触发，不过实际上很多时候可能并不会看到它们，所以通过终端执行这些代码可以让你避免这类问题。另外，你需要打开 Excel 的偏好设置并取消勾选通用分类下的“打开 Excel 时显示工作簿库”。这样一来就可以在使用 xlwingds 打开新的 Excel 示例时直接打开一个空的工作簿，而不是先打开工作簿库。

# 9.1.2 Excel 对象模型

当利用程序控制 Excel 时，你会和它的各种组件（比如工作簿或工作表）进行交互。这些组件以 Excel 对象模型的形式进行组织。Excel 对象模型是一种表示 Excel 图形用户界面（参见图 9- 1）的层次结构。微软在其官方支持的所有编程语言中大量使用了这种对象模型。无论是 VBA、Office Scripts（Web 中用于 Excel 的 JavaScript 接口）和 C#，它们使用的都是同样的对象模型。与第 8 章中的读写包相比，xlwings 相当严格地遵循了 Excel 的对象模型，但也有一点不同，比如，xlwings 使用 app 而不使用 application，使用 book 而不使用 workbook。

app 包含 book 的集合。book 包含 sheet 的集合。通过 sheet 可以访问 range 对象和 charts 等集合。range 包含一个或多个连续的单元格作为其元素。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/8a516f58994648feb585bde3469addabb98355da7b9d38f20e8c6a0e6c4fb3e0.jpg)  
图 9-1：xlwings 实现的 Excel 对象模型（部分）

虚线框表示集合，其中包含一个或多个相同类型的对象。app 对应着一个 Excel 实例，即作为独立进程运行的 Excel 应用程序。高级用户有时候会并行使用多个 Excel 实例并打开同一个工作簿两次，比如要并行计算具有不同输入的工作簿的值时就需要这样做。在较新版本的 Excel 中，微软让手动打开多个 Excel 示例变复杂了：启动 Excel，在 Windows 工具栏的图标上单击右键。在出现的菜单中，按住 Alt 键的同时左键单击 Excel 项目（一定要在松开鼠标按键之前一直按住 Alt 键），此时会弹出一个对话框询问你是否想要启动新的 Excel 实例。而在 macOS 中，并没有手动启动一个程序的多个实例的方法，不过就像稍后我们会看到的那样，你可以通过 xlwings 程序化地启动多个 Excel 实例。总的来说，一个 Excel 实例就是一个沙箱化的环境，也就是说一个实例无法同另一个实例进行通信。sheet 对象让你可以访问各种集合，比如图表、图片和自定义名称，9.2 节会对这些主题进行深入研究。

# 语言和区域设置

本书基于美国一英语版本的 Excel 撰写。我时不时会引用“Book 1”或者“Sheet 1”这样的默认名称，如果你使用的是其他语言版本的 Excel，这些名称可能会不一样。例如，“Sheet 1”在法语版中是“Feuil 1”，在西班牙语版中则是“Hojal”。另外，Excel 用在单元格公式中的列表分隔符（list separator）也会随设置改变：我用的是逗号，但是你的版本可能需要使用分号或者其他字符。例如，在区域设置为德国的计算机上，你需要写成=SUMME (A 1; A 2)，而不是=SUM (A 1, A 2)。

在 Windows 中，如果你想将列表分隔符从分号改成逗号，则需要在 Excel 之外通过 Windows 设置进行修改：点击 Windows 开始按钮，搜索设置（或者点击齿轮图标），然后进入“时间和语言  $\gimel$  区域和语言  $\gimel$  其他日期、时间和区域设置”，最后点击“区域  $\gimel$  更改位置”4。在“列表分隔符”中，可以将其从分号修改为逗号。要记住，只有在你的“小数点”（在同一菜单中）并非也是逗号的情况下才有效。要修改整个系统中的小数点和数字分组符号（而非列表分隔符），需要在 Excel 中进入“选项  $\gimel$  高级”，你可以在其中的“编辑选项”中找到对应的设置。

在 macOS 中，除了不能直接修改列表分隔符，其他操作都是类似的：在 macOS（而不是 Excel）的系统偏好设置中，选择语言和区域。在这里设置全局的区域（在通用标签页中）或单独为 Excel 设置区域（在应用程序标签页中）。

为了体会 Excel 对象模型，最好的方法依然是以交互方式实际操作一下。先从 Book 类开始：它让你可以新建工作簿并连接至现有的工作簿，参见表 9- 1 的总结。

表 9-1：处理 EXCel 工作簿  

<table><tr><td>命令</td><td>描述</td></tr><tr><td>xw.Book ()</td><td>返回代表活动的 Excel 实例中新的 Excel 工作簿的 book 对象。如果没有活动的 Excel 实例，则会启动一个</td></tr><tr><td>xw.Book (&quot; Book 1&quot;)</td><td>返回表示未保存的名为 Book 1（名称中不含文件扩展名）的工作簿的 book 对象</td></tr><tr><td>xw.Book (&quot; Book 1. xlsx&quot;)</td><td>返回代表之前保存过的名为 Book 1. xlsx（名称中包含文件扩展名）的工作簿的对象。该文件必须是已打开的，或者位于当前的工作目录</td></tr><tr><td>xw.Book (r&quot; C:\path\Book 1. xlsx&quot;)</td><td>返回代表之前保存过的工作簿（完整文件路径）的对象。该文件可以是打开的也可以是关闭的。路径字符串开头的 r 会将字符串转化为原始字符串，以使路径中的反斜杠（\）在 Windows 中按照字面进行解释（第 5 章中介绍过）。在 macOS 中，r 不是必需的，因为 macOS 的文件路径使用的是斜杠而不是反斜杠</td></tr><tr><td>xw. books. active</td><td>返回代表活动的 Excel 实例中活动的工作簿的 book 对象</td></tr></table>

下面来看看如何从 book 对象开始沿着 Excel 对象模型的层次结构一路向下到 range 对象：

In[4]： #创建一个新的空工作簿并打印其名称 #我们会用这个工作簿运行本章中的所有代码示例book = xw.Book () book. nameOut[4]: #Book2 'In[5]: #访问工作表集合book . sheets

注 4：新版本的 Windows 10 菜单发生了变化。在设置中找到“时间和语言  $\gimel$  区域  $\gimel$  其他日期、时间和区域设置  $\gimel$  区域  $\gimel$  其他设置”，在这里可以找到列表分隔符。不过中文版的列表分隔符本身就是半角逗号。——译者注

Out[5]: Sheets（[<Sheet[Book2]Sheet1>]) In[6]: #通过索引或名称获取工作表对象 #如果你的工作表不叫 "Sheet 1"，则需要做出一些调整 sheet 1  $=$  book. sheets[0]sheet 1  $=$  book. sheets["Sheet 1"]In[7]: sheet 1. range ("A 1") Out[7]: <Range[Book2]Sheet1!\$A\$1>

有了 range 对象之后，就到达了 Excel 对象模型的最底层。在尖括号之间打印的字符串向你提供了该对象的一些有用的信息，但要真正利用它们完成一些工作，通常需要访问它们的属性，就像下面的示例这样：

In[8]: #最常见的任务 ：写入值…… sheet 1. range ("A 1"). value = [[1, 2], [3, 4\|1, 2], [3, 4]] sheet 1. range ("A 4"). value = "Hello!"In[9]: #……和读取值 sheet 1. range ("A 1: B 2"). valueOut[9]: [[1.0, 2.0], [3.0, 4.0\|1.0, 2.0], [3.0, 4.0]]In[10]: sheet 1. range ("A 4"). valueOut[10]: 'Hello!'

如你所见，在默认情况下，xlwings 的 range 对象在接受单个单元格作为参数时，其 value 属性返回的是一个标量；在接受二维区域作为参数时，返回的是一个嵌套列表。到目前为止，我们用到的所有功能的代码几乎和 VBA 代码一模一样：假设 book 是一个 VBA 或 xlwings 的工作簿对象，下面分别是 VBA 和 xlwings 访问 A 1 到 B 2 的单元格的值的代码。

book. Sheets（1). Range ("A 1: B 2"). Value #VBA book. sheets[0]. range ("A 1: B 2"). value #xlwings

两行代码有以下区别。

属性

Python 使用的是小写字母，还可能包含第 3 章讲过的 Python 编程风格指南，即 PEP 8 建议的下划线。

索引

Python 使用方括号和从 0 开始的索引来访问 sheets 集合中的元素。

表 9- 2 是对 xlwings 的 range 可接受的字符串格式总结。

表 9-2：以 A 1 表示法定义区域的字符串  

<table><tr><td>引用</td><td>描述</td></tr><tr><td>&quot; A 1&quot;</td><td>单个单元格</td></tr><tr><td>&quot; A 1: B 2&quot;</td><td>从 A 1 到 B 2 的单元格区域</td></tr><tr><td>&quot; A:A&quot;</td><td>A 列</td></tr></table>

(续)

<table><tr><td>引用</td><td>描述</td></tr><tr><td>&quot; A:B&quot;</td><td>A 列到 B 列</td></tr><tr><td>&quot;1:1&quot;</td><td>1 行</td></tr><tr><td>&quot;1:2&quot;</td><td>1 行到 2 行</td></tr></table>

也可以对 xlwings 的 range 对象进行索引和切片，通过观察尖括号之间的地址（打印出来的字符串表示）来确认你最终会得到怎样的单元格区域：

In[11]: #索引 sheet 1. range ("A 1: B 2")[0,0] Out[11]:<Range[Book 2]Sheet 1! $A$ 1> In[12]: #切片 sheet 1. range ("A 1: B 2")[:, 1] Out[12]:<Range[Book 2]Sheet 1! $B$ 1: $B$ 2>

索引对应着 VBA 中的 Cells 属性：

book.sheets (1). Range ("A 1: B 2"). Cells (1,1)# VBA book. sheets[0]. range ("A 1: B 2")[0,0] # xlwings

除了显式地使用 sheet 对象的 range 属性，也可以通过对 sheet 对象进行索引和切片来获得一个 range 对象。利用 A 1 表示法可以让你少敲些字，而使用整数切片可以让 Excel 工作表看起来像 NumPy 数组：

In[13]: #单个单元格 ：A 1 表示法 sheet 1["A 1"] Out[13]:<Range[Book 2]Sheet 1! $A$ 1> In[14]: #多个单元格 ：A 1 表示法 sheet 1["A 1: B 2"] Out[14]:<Range[Book 2]Sheet 1! $A$ 1: $B$ 2> In[15]: #单个单元格 ：索引 sheet 1[0,0] Out[15]:<Range[Book 2]Sheet 1! $A$ 1> In[16]: #多个单元格 ：切片 sheet 1[: 2,: 2] Out[16]:<Range[Book 2]Sheet 1! $A$ 1: $B$ 2>

不过，有时候通过引用区域左上角和右下角的元素来定义一个区域可能更直观。下面的示例分别引用的是 D 10 和 D 10: F 11，以使你能够理解对 sheet 对象进行索引/切片和使用 range 对象之间的区别：

In[17]: #通过sheet索引访问D10 sheet 1[9,3] Out[17]:<Range[Book 2]Sheet 1! $D$ 10> In[18]: #通过range对象访问D10 sheet 1. range ((10,4)) Out[18]:<Range[Book 2]Sheet 1! $D$ 10>

In[19]: #通过sheet切片访问D10 : F 11 sheet 1[9:11,3:6] Out[19]:<range[Book 2]Sheet 1! $D$ 10: $F$ 11> In[20]: #通过range对象访问D10 : F 11 sheet 1. range ((10,4)，(11,6)) Out[20]:<range[Book 2]Sheet 1! $D$ 10: $F$ 11>

通过元组定义 range 对象与 VBA 中 Cells 属性的工作原理类似，下面的对比体现了这一点。这里依然假定 book 是 VBA 工作簿对象或 xlwings 的 book 对象。先来看 VBA 版本：

With book.sheets (1) myrange  $=$  .Range (. Cells (10,4),.Cells (11,6)) End With

这和下面的 xlwings 表达式是等价的。

myrange  $=$  book. sheets[0]. range ((10,4)，(11,6))

# 从 0 开始的索引和从 1 开始的索引

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/042ac8b7b6a3d9029efbc7ed1e27729fcca59769cbc0d4239c3460b0233fb714.jpg)

作为一个 Python 包，只要你通过 Python 的索引或切片语法（通过方括号）访问元素，xlwings 就始终使用从 0 开始的索引。不过 xlwings 的 range 对象使用的是和 Excel 一样从 1 开始的行列索引。和 Excel 的用户接口采用同样的行列索引在某些时候是有利的。如果你更喜欢使用 Python 的从 0 开始的索引，那么可以直接使用 sheet[row_selection，column_selection]语法。

下面的示例展示了如何从一个 range 对象（sheet["A 1"]）自底向上得到 app 对象。要记住 app 对象代表的是 Excel 实例（尖括号之间的输出代表的是 Excel 的进程 ID，因此在你的计算机中这串数字可能会不一样）：

In[21]: sheet 1["A 1"]. sheet. book. app Out[21]:<Excel App 9092>

现在我们到达了 Excel 对象模型的顶层，是时候看看可以如何利用多个 Excel 实例了。如果你想在多个 Excel 实例中打开同一个工作簿，或是出于性能方面的原因想要将多个工作簿分发给多个实例，那么就需要显式地使用 app 对象。app 对象的另一个常见用例是在隐藏的 Excel 实例中打开工作簿：这样你就可以在后台运行 xlwings 脚本且同时在 Excel 中完成其他工作。

In[22]: #从打开的工作簿中获取app对象 ， #并创建一个额外的隐藏的app实例visible_app  $=$  sheet 1. book. appinvisible_app  $=$  xw.App (visible=False) In[23]: #通过列表推导式列出各实例中打开的工作簿名称 [book. name for book in visible_app. books]Out[23]:[Book 1'，'Book 2']In[24]:[book. name for book in invisible_app. books]

Out[24]: ['Book 3']  In [25]: # app 的键代表进程 ID（PID）  xw.apps.keys ()  Out[25]: [5996, 9092]  In [26]: # 也可以通过 pid 属性访问  xw. apps. active. pid  Out[26]: 5996  In [27]: # 处理隐藏的 Excel 实例中的工作簿  invisible_book = invisible_app. books[0]  invisible_book. sheets[0]["A 1"]. value = "Created by an invisible app."  In [28]: # 将这个 Excel 工作簿保存在 xl 目录中  thvctbte_book.save ("xt/thvctbte. xlsx")  In [29]: # 退出隐藏的 Excel 实例  invisible_app.quit ()

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/bd3acc46633e09f2267f3a74275f483bd3c58e213d895849a8e70837e75a9c2c.jpg)

# macOS：程序化地访问文件系统

如果在 macOS 中执行 save 命令，你就会在 Excel 中看到一个获取文件访问权限的弹出窗口，你需要在点击“获得权限”之前点击“选择”按钮进行确认。在 macOS 中，Excel 是沙盒化的，也就是说通过在这个弹出窗口确认，你的程序才能访问 Excel 应用程序外部的文件和文件夹。确认之后，Excel 会记住这个位置，当再次执行这个脚本时，它便不会再打扰你。

如果你在两个 Excel 实例中打开了同一个工作簿，或者想要指定某个 Excel 实例打开某个工作簿，就不能再使用 xw. book 了。此时需要使用表 9- 3 中列出的 books 集合。注意，myapp 代表一个 xlwings app 对象。如果将 myapp. books 替换成 xw. books，则 xlwings 会使用活动的 app。

表 9-3：使用工作簿集合  

<table><tr><td>命令</td><td>描述</td></tr><tr><td>myapp.books.add ()</td><td>在 myapp 引用的 Excel 实例中创建一个新的 Excel 工作簿并返回对应的 book 对象</td></tr><tr><td>myapp.books.open (r&quot; C:\path\Book. xlsx&quot;)</td><td>如果对应的 book 对象已打开就直接返回该对象，否则应该首先在 myapp 引用的 Excel 实例中打开该工作簿。记住，字符串开头的 r 会将文件路径转化为原始字符串，从而可以按字面意思解释反斜杠</td></tr><tr><td>myapp. books[&quot; Book 1. xlsx&quot;]</td><td>如果对应的工作簿已打开就直接返回该 book 对象。如果尚未打开则会引发 KeyError 错误。一定要使用文件名而非完整路径。如果你想知道一个工作簿是否已经在 Excel 中打开，就可以使用该命令</td></tr></table>

在深入了解 xlwings 如何取代 VBA 宏之前，先来看看 xlwings 如何与现有的 VBA 代码交互：如果你有大量的过时代码且没有时间把它们迁移到 Python 的话，这一特性会帮你的忙。

# 9.1.3 运行 VBA 代码

如果你手上有一些包含大量 VBA 代码的旧式 Excel 项目，那么要将所有东西都迁移到 Python 并非易事。在这种情况下，可以通过 Python 来运行 VBA 宏。下面的示例使用了配套代码库的 xl 文件夹中的 vba. xlsm 文件。在 Module 1 中有如下代码：

Function MySum (x As Double, y As Double) As Double MySum  $= x + y$  End Function Sub ShowMsgBox（msq As String) MsgBox msg End Sub

要通过 Python 调用这些函数，首先需要实例化一个随后会被调用的 xlwings macro 对象，使其用起来就像一个原生的 Python 函数一样。

In[30]: vba_book  $=$  xw.Book ("xl/vba. xlsm") In[31]： #用该VBA函数实例化一个macro对象mysum  $=$  vba_book.macro ("Modulel. MySum") #调用VBA函数mysum (5,4) Out[31]: 9.0 In[32]： #与VBA子程序进行同样的工作show_msgbox  $=$  vba_book.macro ("Modulel. ShowMsgBox") show_msgbox ("Hello xlwings!") In[33]： #关闭book对象 （一定要先关闭对话框）vba_book.close()

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/0b98a5abbe22652c46c9d270db4c69716a3cefc2445c66a41a3bf7c16ddeb880.jpg)

# 不要在 Sheet 模块和 ThisWorkbook 模块中保存 VBA 函数

如果将 VBA 函数 MySum 保存在工作簿的 ThisWorkbook 模块或者工作表模块（如 Sheet 1）中，就必须通过 ThisWorkbook. MySum 或 Sheet 1. MySum 来引用这些函数。但是，这样你就不能在 Python 中访问这些函数的返回值了，所以一定要将 VBA 函数保存在标准的 VBA 代码模块中，即在 VBA 编辑器中右键单击模块文件夹来插入 VBA 函数。

现在你已经知道了如何与现有的 VBA 代码交互，我们可以继续 xlwings 探索之旅了。接下来你会看到如何用 xlwings 来操作 DataFrame，NumPy 数组，以及图表、图片、已定义名称等集合。

# 9.2 转换器、选项和集合

9.2 转换器、选项和集合本章在开头的代码示例中已经通过 xlwings range 对象的 value 属性从 Excel 中读取和写入了字符串和嵌套列表。本节首先会向你展示如何在 pandas DataFrame 中完成这些任务。然后我们会进一步了解 options 方法，它可以影响 xlwings 读写值的方式。随后我们再转向

通过 sheet 对象访问的图表、图片、已定义名称和集合。学习了这些 xlwings 基础知识之后，我们会再次回到第 7 章的报表案例研究。

# 9.2.1 处理 DataFrame

将 DataFrame 写入 Excel 与将标量或嵌套列表写入 Excel 并无二致：只需将 DataFrame 赋值给 Excel 区域的左上角单元格即可。

In[34]:data=[[“Mark"，55，"Italy"，4.5，"Europe"]， ["John"，33，"USA"，6.7，"America"\|“Mark"，55，"Italy"，4.5，"Europe"]， ["John"，33，"USA"，6.7，"America"]] df  $=$  pd.DataFrame (data=data, columns  $=$  ["name"，"age"，"country" "score"，"continent"], index=[1001，1000]) df. index. name  $=$  "user_id" df Out[34]: name age country score continent user_id 1001 Mark 55 Italy 4.5 Europe 1000 John 33 USA 6.7 America In[35]: sheet 1["A 6"]. value  $=$  df

如果你想去掉列标题或索引（也可以同时去掉两者），那么可以像下面这样使用 options 方法：

In[36]: sheet 1["B 10"]. options (header=False, index=False). value = df

要将 Excel 区域以 DataFrame 的形式读取，需要将 DataFrame 类传递给 options 方法的 convert 参数。在默认情况下，你的数据必须同时具备标题和索引，但是你可以通过 index 参数和 header 参数来改变这种行为。除了使用转换器，还可以将这些值读取为嵌套列表，然后手动构造 DataFrame。不过使用转换器可以更方便地处理索引和标题。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/83e06d4a8fca80be350510eb41c4dbc44a304fde115bf7788196ccb521eeb5c9.jpg)

# expand 方法

在下面的代码示例中，我引入了 expand 方法，该方法可以方便地读取一块连续的单元格，这和你在 Excel 中按下快捷键 Shift+Ctrl+ 下箭头 + 右箭头选中的区域是一样的，只不过 expand 会跳过左上角的空单元格。

In[37]: df 2  $=$  sheet 1["A 6"]. expand (). options (pd. DataFrame). value df 2 Out[37]: name age country score continent user_id 1001.0 Mark 55.0 Italy 4.5 Europe 1000.0 John 33.0 USA 6.7 America In[38]: #如果你需要整数索引 ， #那么可以修改其数据类型 df 2. index  $=$  df 2. index.astype (int) df2

Out[38]: name age country score continent 1001 Mark 55.0 Italy 4.5 Europe 1000 John 33.0 USA 6.7 America In[39]: #通过设置index =False，Excel 文件中的所有值都会 #被保存到DataFrame的数据部分且使用默认索引 sheet 1["A 6"]. expand (). options (pd. DataFrame，index=False). value Out[39]: user_id name age country score continent 0 1001.0 Mark 55.0 Italy 4.5 Europe 1 1000.0 John 33.0 USA 6.7 America

读写 DataFrame 只体现了转换器的一部分功能。下一节会介绍如何规范地定义转换器，以及如何用转换器来处理其他数据结构。

# 9.2.2 转换器和选项

如前所述，xlwings range 对象的 options 方法修改的是读写 Excel 文件时处理值的方式。也就是说，只有在你调用 range 对象的 value 属性时，options 才会进行求值。它的语法如下（其中 myrange 是一个 xlwings range 对象）：

myrange.options (convert=None, option 1=value 1, option 2=value 2, ...). value

表 9- 4 展示了内置的转换器，即 convert 参数可以接受的值。这些转换器之所以被称为内置的，是因为 xlwings 还提供了编写自定义转化器的方法。如果你在写入值之前或读取值之后一次又一次地进行了额外的转换工作，那么能够自己编写转换器是不错的。要想了解如何编写自定义转换器，可以看一下 xlwings 的文档。

表 9-4：内置转换器  

<table><tr><td>转换器</td><td>描述</td></tr><tr><td>dict</td><td>未发生嵌套的简单字典，即{key 1: value 1, key 2: value 2, ...}的形式</td></tr><tr><td>np. array</td><td>NumPy 数组，需要 import numpy as np</td></tr><tr><td>pd. Series</td><td>pandas Series，需要 import pandas as pd</td></tr><tr><td>pd. DataFrame</td><td>pandas DataFrame，需要 import pandas as pd</td></tr></table>

我们已经在 DataFrame 的示例中用过 index 选项和 header 选项，不过除此之外还有更多的选项，如表 9- 5 所示。

表 9-5：内置选项  

<table><tr><td>选项</td><td>描述</td></tr><tr><td>empty</td><td>在默认情况下，空单元格会被读取为 None。为 empty 参数提供一个值以改变默认值</td></tr><tr><td>date</td><td>接受一个函数，该函数会应用到来自按日期格式化的单元格的值</td></tr><tr><td>numbers</td><td>接受一个函数，该函数会应用到数值</td></tr><tr><td>ndim</td><td>维数：ndim 可以强制一个区域的值达到某个维度。只能取 None、1 和 2 中的一个值。仅在以列表或 NumPy 数组形式读取值时可用</td></tr></table>

(续)

<table><tr><td>选项</td><td>描述</td></tr><tr><td>transpose</td><td>将值转置，即把行和列对换</td></tr><tr><td>index</td><td>用于 pandas DataFrame 和 pandas Series：在读取时用来定义 Excel 区域是否包含该索引。可以为 True/False 或整数。整数定义了有多少列会被转化为 MultiIndex。例如，2 会使用最左边的两列作为索引。在写入时，你可以通过将 index 设置为 True 或 False 来决定是否要写入索引</td></tr><tr><td>header</td><td>类似于 index，应用于列标题</td></tr></table>

来仔细看一下 ndim：在默认情况下，从 Excel 中读取单个单元格时，你会得到一个标量（比如浮点数或字符串）；当读取一行或一列时，你得到的是一个简单列表；当读取一个二维区域时，你得到的是一个嵌套（二维）列表。这样的行为是自洽的，并且和第 4 章中讲到的 NumPy 数组切片的行为也是一致的。但一维的情况很特殊：有时候一列可能只是二维区域的特殊情况，在这种情况下，可以用 ndim=2 来强制区域的维度为 2：

In[40]： #水平区域 （一维） sheet 1["A 1: B 1"]. value Out[40]：[1.0，2.0] In[41]： #垂直区域 （一维） sheet 1["A 1: A 2"]. value Out[41]：[1.0，3.0] In[42]： #水平区域 （二维） sheet 1["A 1: B 1"]. options (ndim=2). value Out[42]：[1.0，2.0] In[43]： #垂直区域 （二维） sheet 1["A 1: A 2"]. options (ndim=2). value Out[43]：[1.0]，[3.0]] In[44]： #使用NumPy数组转换器也是一样的效果 ： #垂直区域会产生一维数组 sheet 1["A 1: A 2"]. options (np. array). value Out[44]:array（[1.，3. ]） In[45]： #保持列的方向不变 sheet 1["A 1: A 2"]. options (np. array，ndim=2). value Out[45]:array（[[1. ]， [3. ]） In[46]： #如果需要垂直写入列表 ， #那么此时可以使用transpose选项 sheet 1["D 1"]. options (transpose=True).value = [100，200]

ndim=1 会强制让读到的单个单元格的值生成列表而非标量。在使用 pandas 时无须使用 ndim 参数，因为 DataFrame 都是二维的，而 Series 都是一维的。下面还有一些示例，它们展示了 empty、date 和 number 是如何工作的：

In[47]： #写入一些示例数据 sheet 1["A 13"]. value = [dt.datetime (2020, 1, 1), None, 1.0] In[48]： #使用默认选项读取 sheet 1["A 13: C 13"]. value Out[48]: [datetime.datetime (2020, 1, 1, 0, 0), None, 1.0] In[49]： #使用非默认选项读取

sheet 1["A 13: C 13"]. options (empty="NA", dates=dt. date, numbers=int). valueOut[49]: [datetime.date (2020, 1, 1), 'NA', 1]

到目前为止，我们已经用过了 book、sheet 和 range 这 3 种对象。接下来学习如何通过 sheet 对象处理图表一类的集合。

# 9.2.3 图表、图片和已定义名称

本节会向你展示如何通过 sheet 对象或 book 对象来处理这 3 种集合，即图表、图片和已定义名称。xlwings 只支持最基本的图表功能，不过由于你可以操作模板，因此它提供的功能还是够用的。不过 xlwings 可以让你将 Matplotlib 的图表作为图片嵌入 Excel 文件。第 5 章讲过 Matplotlib 是 pandas 默认的绘图后端，这项功能一定程度上弥补了在图表操作方面的不足。先来创建第一张 Excel 图表吧。

# 1. Excel 图表

使用 charts 集合的 add 方法来添加一张新的图表并为其设置图表类型和源数据：

In[50]: sheet 1["A 15"]. value = [[None, "North", "South"], ["Last Year", 2, 5], ["This Year", 3, 6\|None, "North", "South"], ["Last Year", 2, 5], ["This Year", 3, 6]]In[51]: chart = sheet 1. charts.add (top=sheet 1["A 19"]. top, left=sheet 1["A 19"]. left) chart. chart_type = "column_clustered"chart. set_source_data (sheet 1["A 15"]. expand ())

上面的代码会生成图 9- 2 中左边的图表。在 xlwings 的文档中可以查到所有可用的图表类型。如果比起 Excel 图表你更喜欢 pandas 的图表，或是想使用一种 Excel 中没有的图表类型，则 xlwings 也能帮到你。下面来看看怎么做。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/f1bdbe75efabae8ffc24579b3a6da4db5c4feaa5a1ce0c48a728578722d3b55f.jpg)  
图 9-2：Excel 图表（左）和 Matplotlib 图像（右）

# 2. 图片：Matplotlib 图像

2. 图片：Matplotlib 图像当你使用 pandas 的默认绘图后端时，你创建的是一张 Matplotlib 的图像。要将这样的图像放进 Excel 中，首先要获取它的 figure 对象，然后将其作为参数传递给 pictures. add, pictures. add 会将 Matplotlib 图像转换为图片然后发送至 Excel:

In[52]: #将图表数据读取为DataFrame df  $=$  sheet 1["A 15"]. expand (). options (pd. DataFrame). value df Out[52]: North South LastYear 2.0 5.0 This Year 3.0 6.0 In[53]: #通过笔记本的魔法命令启用Matplotlib #并切换至 "seaborn"样式 %matplotlib inline import matplotlib. pyplot as plt plt.style.use ("seaborn") In[54]: #pandas的plot方法会返回一个axis对象 ， #你可以从中获得图片 。T 会将 #DataFrame转置以调整图像方向 ax  $=$  df.T.plot.bar () fig  $=$  ax. get_figure () In[55]: #将图像发送至Excel plot  $=$  sheet 1. pictures.add (fig, name  $\equiv$  "SalesPlot", top=sheet 1["H 19"]. top, left=sheet 1["H 19"]. left) #将图像缩小为  $70\%$  大小 plot. width, plot. height  $=$  plot. width \* 0.7, plot. height \* 0.7

要想使用新的图像来更新图片，只需调用 update 方法并传递另一个 figure 对象即可。虽然这样做会替换 Excel 中的图片，但会保留位置、尺寸、名称等属性：

In[56]: ax  $=$  (df + 1).T.plot.bar () plot  $=$  plot.update (ax. get_figure ())

图 9- 2 展示了调用 update 后 Excel 图表和 Matplotlib 图像之间的区别。

# 确保已安装 Pillow

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/dc66cd165e9a9cc2a2dc5712769aa2b1aca31f68cdbd643f8a413cc11e92bd3e.jpg)

在处理图片时，一定要确保安装了 Pillow，它是 Python 中常用的图片处理库。Pillow 能够保证图片在 Excel 中有正确的尺寸和比例。Anaconda 中包含了 Pillow，所以如果你用的是其他发行版，则需要通过 conda installpillow 或者 pip installpillow 进行安装。注意，除了接受 Matplotlib 图像，pictures. add 也可以接受磁盘上的图片路径。

图表集合和图片集合都可以通过 sheet 对象访问，而接下来要讲到的已定义名称集合除了通过 sheet 对象访问之外，还可以通过 book 对象访问。下面来看看两种访问方式有何区别。

# 3. 已定义名称

3. 已定义名称在 Excel 中，我们通过为区域、公式和常量<sup>6</sup>赋予名称来创建已定义名称。为一个区域命名可能是最常见的情况，这种区域被称作具名区域。利用具名区域，你可以在公式和代码中使用描述性名称而不是抽象地址（A 1: B 2）来引用一个 Excel 区域。在 xlwings 中使用这些名称可以让你的代码更加灵活且更加稳定：利用具名区域读写值可以在不调整 Python 代码的情况下重新组织工作簿。这是极具灵活性的做法，比如，即使插入新行导致了单元格的移动，但对应的名称仍然引用的是原来的单元格。自定义名称可以在全局工作簿作用域或局部工作表作用域中设置。工作表作用域的优势是在复制工作表时不用担心重复的具名区域发生冲突。在 Excel 中，你可以在“公式 > 定义名称”菜单项中添加自定义名称。也可以选择一个区域，然后将想要的名称写到名称框（公式栏左边的文本框）中，你可以在这里看到默认的单元格地址。下面的代码展示了使用 xlwings 管理自定义名称的方法：

In[57]： #默认作用域是工作簿作用域 sheet 1["A 1: B 2"]. name  $=$  "matrix 1" In[58]： #对于工作表作用域 ，需要在工作表名称前加上一个感叹号 sheet 1["B 10: E 11"]. name  $=$  "Sheet 1! matrix 2" In[59]： #现在你可以通过名称访问区域了 sheet 1["matrix 1"] Out[59]:<Range[Book 2]Sheet 1! $A$ 1: $B$ 2> In[60]： #如果通过sheet1对象访问名称集合 ， #则其中只包含工作表作用域的名称 sheet 1. names Out[60]:[<Name 'Sheet1!matrix2': =Sheet1! $B$ 10: $E$ 11>] In[61]: #如果通过book对象访问名称集合 ， #则其中包含了工作簿和工作表作用域的所有名称 book. names Out[61]:[<Name 'matrix1': =Sheet1! $A$ 1: $B$ 2>,<Name 'Sheet1!matrix2': =Sheet1! $B$ 10: $E$ 11>] In[62]: #名称有多种方法和属性 ， #例如 ，你可以获取对应的 range 对象 book. names["matrix 1"]. refers_to_range Out[62]:<Range[Book 2]Sheet 1! $A$ 1: $B$ 2> In[63]: #如果你想为常量或公式取名 ，可以使用 add 方法 book.names.add ("EURUSD", "=1.1151") Out[63]:<Name 'EURUSD': =1.1151>

可以通过“公式 > 名称管理器”（参见图 9- 3）菜单项打开名称管理器来查看在 Excel 中生成的自定义名称。注意，macOS 中并没有名称管理器，但在“公式 > 定义名称”菜单项中，你可以看到既存的名称。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/a991471b9310b2bad25f1f17fb9ef0401fe274d3dfb64b20e9d997c0a37182ba.jpg)  
图 9-3：通过 xlwings 添加自定义名称后的 Excel 名称管理器

现在你知道了如何处理 Excel 工作簿中最常用的各种组件。这就意味着我们可以再一次回到第 7 章的案例研究，来看看在使用 xlwings 时会发生哪些变化。

# 9.2.4 案例研究（再次回顾）：Excel 报表

xlwings 能够真正地编辑 Excel 文件，无论这些模板有多复杂、无论它们以什么格式保存，我们都可以在保证不修改模板文件的情况下使用模板。例如你可以轻松地编辑 xlsx 文件，而第 8 章中的任何读写包目前都不支持这种格式。在配套代码库的 sales_report_openpyxl. py 中可以看到，在 summary 这个 DataFrame 准备完成后，如果使用 OpenPyXL，就必须编写近 40 行代码来创建图表并调整 DataFrame 的样式。但是，如果使用 xlwings，则只需要 6 行代码就可以达成同样的目标，如例 9- 1 所示。能够在 Excel 模板中调整格式可以省去大量的工作，不过这也是有代价的：xlwings 需要启动已安装的 Excel 应用程序。也就是说，如果你在自己的计算机上创建这些报表，那么一般来说这没什么问题，但如果你尝试在服务器上创建报表并将其作为 Web 应用程序的一部分，那么这种方案就不那么理想了。

# 例 9-1 sales_report_xlwings. py（仅列出第二部分）

打开模板，粘贴数据，自动调整列并调整# 图表源，然后将其保存为不同名称的文件 template = xw.Book (this_dir / "xl" / "sales_report_template. xlsx") sheet = template. sheets["Sheet 1"]sheet["B 3"]. value = summarysheet["B 3"]. expand (). columns.autofit () sheet. charts["Chart 1"]. set_source_data (sheet["B 3"]. expand ():- 1, :- 1) template.save (this_dir / "sales_report_xlwings. xlsx")

首先，需要确认你的 Microsoft Office 许可证支持在服务器上安装。其次，Excel 并非天生就适合无人值守自动化，也就是说你可能会遇到稳定性问题，特别是需要在短时间内生成

多份报表时。话虽如此，但我也见过多位客户成功完成了这样的自动化任务。所以，无论出于什么原因，如果你无法使用读写包，那么在服务器上运行 xlwings 可能就是一种值得尝试的方法。不过你一定要通过 app = xw.App () 在新的 Excel 实例中运行一下各个脚本，这样就可以避免各种典型的错误了。

你可以在配套代码库的 sales_report_xlwings. py（前半部分和使用 OpenPyXL 以及 XlsxWriter 的版本是相同的）中看到完整的 xlwings 脚本。这也是读取包和 xlwings 搭配使用的绝佳例子：尽管 pandas（通过 OpenPyXL 和 xlrd）可以更快地从磁盘中读取大量文件，但 xlwings 可以更加方便地填充预先格式化的模板。

在 macOS 中刚开始执行这段脚本时（比如在 VS Code 中打开它然后点击了运行文件按钮），你需要再一次在弹出的窗口中授权访问文件系统，本章在前面内容中提到过这一点。

利用已经格式化的 Excel 模板，你可以非常快速地构建精美的 Excel 报表。你还可以使用 autofit 之类的方法调整格式，不过，由于这类方法依赖于 Excel 应用程序完成的运算，因此用于写入文件的包并不能提供这些功能。autofit 可以根据内容对单元格宽度和高度进行适当的调整。图 9- 4 展示了由 xlwings 生成的销售报表的上半部分，其中包含了自定义的表头和应用了 autofit 方法的列。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/0ef9497e2ac09ab8301c0c06b4c8f9b9b137093dcd0a87c5689a29d821194be9.jpg)  
图 9-4：基于预先格式化的模板生成的销售报表

当你开始将 xlwings 用于填写模板之外的更多场景时，应该对其内部原理有一定的了解。下一节会解释 xlwings 究竟是如何工作的。

# 9.3 高级 xlwings 主题

本节会展示如何让 xlwings 代码具有更高的效率以及如何弥补 xlwings 缺少的功能。不过要理解这些主题，首先需要谈一谈 xlwings 和 Excel 是如何通信的。

# 9.3.1 xlwings 的基础

xlwings 依赖于其他 Python 包来和各个操作系统中的自动化机制通信。

Windows

在 Windows 中，xlwings 依赖于 COM 技术。COM 是 Component Object Model（组件对象模型）的缩写。它是一个可以让两个进程相互通信的标准，而对于我们来说，这两个进程就是 Excel 和 Python。xlwings 使用 pywin 32 包来处理 COM 调用。

macOS

在 macOS 中，xlwings 依赖于 AppleScript。AppleScript 是 Apple 用于自动化支持脚本的应用程序的一种脚本语言，幸运的是，Excel 就是这样一种支持脚本的应用程序。为了执行 AppleScript 命令，xlwings 使用了 appscript 包。

# Windows：如何防止僵尸进程

当你在 Windows 中尝试 xlwings 时，有时候会注意到 Excel 看起来像是被完全关闭了，但当你打开任务管理器（在 Windows 任务栏上单击右键，然后选择任务管理器）时，会在进程标签页下的后台进程中发现 MicrosoftExcel。如果你看不见标签页，则可以先点击“更多细节”。另外，在“详细标签页”中，你也可以看见 Excel 以“EXCEL. EXE”的名称列出。要终止僵尸进程，可以在对应的行上单击右键，然后选择“结束任务”强制关闭 Excel。

由于这些进程处于僵死状态而没有被正常终止，因此它们通常都被称为僵尸进程 (zombie process)。如果弃之不顾，则它们会持续消耗资源且可能导致意外的行为，比如，文件可能会被阻塞，打开新的 Excel 实例时插件无法正常加载。之所以有时候 Excel 无法正常关闭，是因为只有不再存在 COM 引用（比如一个 xlwings 的 app 对象）时进程才能被关闭。大部分时候，当你强制关闭 Python 解释器时会产生一个 Excel 僵尸进程，因为这样的做法会使得 COM 引用无法被正常清理。考虑下面这个 Anaconda Prompt 中的例子：

(base)>python >>> import xlwings as xw >>> app =xw.App ()

一旦新的 Excel 实例开始运行，立即通过 Excel 的用户界面将其关闭：虽然 Excel 关闭了，但任务管理器中的 Excel 进程会持续运行。如果你通过执行 quit () 或按快捷键 $\mathrm{Ctrl} + \mathrm{Z}$  正常关闭了 Python 会话，那么 Excel 进程最终也会被关闭。但如果直接点击窗口右上角的“×”关闭了 AnacondaPrompt，你会注意到这个 Excel 进程会继续作为一个僵尸进程存在。如果你在关闭 Excel 之前关闭了 AnacondaPrompt，或是在运行 Jupyter 服务器且在笔记本单元格中保留了 xlwings 的 app 对象时关闭了 AnacondaPrompt，则也会发生这种现象。为了尽可能地减少 Excel 僵尸进程的出现，这里有几条建议。

- 从 Python 代码中执行 app.quit () 而不是手动关闭 Excel。这样可以确保 COM 引用被正确清理。- 不要在使用 xlwings 时关闭交互式 Python 会话，如果你在 AnacondaPrompt 中运行 Python REPL，那么通过执行 quit () 或按快捷键 $\mathrm{Ctrl} + \mathrm{Z}$ 来正确关闭 Python 解释器。在使用 Jupyter 笔记本时，在 Web 界面上点击退出按钮关闭服务器。- 使用交互式 Python 会话时，应该避免直接使用 app 对象，比如使用 xw.Book () 而不是 myapp.books.add ()。当 Python 进程被终止时，Excel 也应该被正常终止。

现在你已经了解了 xlwings 的背景知识，接下来看看如何让较慢的脚本运行得更快。

# 9.3.2 提升性能

要想让 xlwings 脚本有良好的性能，有以下几种策略：最重要的一种是尽可能减少跨应用程序调用；使用原始值是另一种策略；正确设置 app 的属性也可能有一定的帮助。下面来逐个了解这些选项。

# 1. 尽可能减少跨应用程序调用

要知道 Python 到 Excel 的跨应用程序调用是十分“昂贵”的，也就是说非常慢。因此应该尽可能地减少这种调用。最简单的办法是读取和写入整个 Excel 区域而不是遍历各个单元格。在下面的例子中，我们读写了 150 个单元格，第一种方法是遍历单元格，第二种方法是在一次调用中处理整个区域。

In[64]： #添加新的工作表 ，写入 150 个值以便有事可做 sheet 2  $=$  book.sheets.add () sheet 2["A 1"]. value  $=$  np.arange (150). reshape (30,5) In[65]:%time #这段代码进行了150次跨应用程序调用 for cell in sheet 2["A 1: E 30"]: cell. value  $+ = 1$  Wall time: 909 ms In[66]:%time #这里只进行了两次跨应用程序调用 values  $=$  sheet 2["A 1: E 30"]. options (np. array). value sheet 2["A 1: E 30"]. value  $=$  values  $^+$  1 Wall time: 97.2ms

这些数字在 macOS 中会显得更加极端，第二种方法在我的计算机上要比第一种快 50 倍。

# 2. 原始值

xlwings 的主要设计目标是更方便而不是更快。然而，如果你要处理庞大的单元格区域，那么在这种情况下可能需要跳过 xlwings 的数据清理阶段来节省时间：在续写数据时，xlwings 会遍历每个值，比如为了将 Windows 和 macOS 的数据类型进行统一时它就会这样做。在 options 方法中使用字符串 raw 作为转换器可以跳过这一阶段。虽然这样可以让各种操作更快一些，但如果不是在 Windows 中写入大型数组，则速度上的差距并不明显。然而，使用原始值就意味着你不能再直接使用 DataFrame，此时需要以嵌套列表或元组的形式提供值。另外，你也必须提供想要写入的区域的完整地址，因为只提供左上角的单元格地址是不够的。

In [67]: # 使用原始值时必须提供完整的目标区域，# sheet["A 35"]就不再可用了 sheet 1["A 35: B 36"]. options ("raw"). value = [[1, 2], [3, 4\|1, 2], [3, 4]]

# 3. app 对象的属性

根据工作簿内容的不同，修改 app 对象的某些属性可能会让代码运行得更快。一般来说，你会对如下属性（myapp 指的是一个 xlwings app 对象）感兴趣。

- myapp. screen_updating = False- myapp Calculation = "Manual"- myapp. display_alerts = False

在脚本的最后，一定要将 app 对象的属性还原。如果在 Windows 中，则通过 xw. App (visible=False) 在隐藏 Excel 实例中运行脚本也可以获得轻微的性能提升。

现在你已经知道如何控制代码的性能，下面来研究一下如何扩展 xlwings 的功能。

# 9.3.3 如何弥补缺失的功能

xlwings 为大部分常用的 Excel 命令提供了十分符合 Python 风格的接口，并且可以同时在 Windows 和 macOS 中工作。不过仍然有很多 Excel 对象模型的方法和属性没有在 xlwings 中得到原生的实现。不要灰心！通过在所有的对象上提供 api 属性，xlwings 在 Windows 中提供了访问底层 pywin 32 对象的接口，在 macOS 中提供了访问 appscript 对象的接口。这样你就可以访问整个 Excel 对象模型了，但相应的，你会失去跨平台兼容性。如果你想清除单元格的格式，那么可以遵循如下步骤来完成。

- 检查 xlwings 的 range 对象上是否有对应的方法可用，比如，在 Jupyter 笔记本中，在输入 range 对象后面的点之后按下 Tab 键，或是执行 dir (sheet["A 1"])，抑或搜索 xlwings 的 API 参考文档。在 VS Code 上，可用方法会自动显示在提示信息中。

- 如果找不到所需功能，则可以使用 api 属性获得底层对象：在 Windows 中，sheet["A 1"]. api 会返回一个 pywin 32 对象；在 macOS 中返回的是 appscript 对象。- 在 Excel VBA 参考文档中查看 Excel 对象模型。要清除区域的格式，可以使用 Range. ClearFormats。- 在 Windows 中，大部分时候可以直接在 api 对象上使用 VBA 方法或属性。如果要使用方法，那么一定要在 Python 代码中加上圆括号：sheet["A 1"]. api.ClearFormats ()。如果在 macOS 中操作，则事情会变得复杂一些，因为 appscript 的语法难以捉摸。最好的办法是查看作为 xlwings 源代码一部分的开发者指南。不过，清除单元格格式的做法还是很简单的：只需将 Python 的语法规则套用到方法名上，使用带下划线的小写字符即可，即 sheet["A 1"]. api. clear_formats ()。

如果需要确认 ClearFormats 是否能在这两个平台上工作，那么可以像下面这样做（darwin 是 macOS 的内核，sys. platform 中使用的就是这个名称）：

import sys if sys.platform.startswith ("darwin"): sheet["A 10"]. api. clear_formats () elif sys.platform.startswith ("win"): sheet["A 10"]. api.ClearFormats ()

无论何时你都可以在 xlwings 的 GitHub 仓库中创建 issue，以便在未来的版本中加入目前没有的功能。

# 9.4 小结

本章介绍了 Excel 自动化的相关概念：通过 xlwings 可以使用 Python 来完成那些通常用 VBA 完成的任务。我们学习了有关 Excel 对象模型的知识，了解了 xlwings 如何让你和 Excel 对象模型的组件（比如 sheet 对象和 range 对象）进行交互。有了这些知识之后，我们回到了第 7 章的案例研究，使用 xlwings 来填充预先格式化的报表模板。在这个过程中你了解到了同时使用读取包和 xlwings 的场景。我们还研究了 xlwings 在底层使用的库，进而知道了如何去优化性能以及弥补缺失的功能。我最喜欢的 xlwings 特性是它在 macOS 和 Windows 中都能工作。更令人激动的一点在于 macOS 中的 Power Query 尚未实现 Windows 版的所有功能，但无论少了什么功能，你都应该能够使用 pandas 和 xlwings 直接替代它。

现在你已经具备了 xlwings 的基础知识，接下来就可以进入第 10 章了。第 10 章会从 Excel 中调用 xlwings 即本，从而构建由 Python 驱动的 Excel 工具。