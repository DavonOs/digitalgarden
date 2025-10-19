---
{"dg-publish":true,"dg-permalink":"books/35799208/10","permalink":"/books/35799208/10/","metatags":{"description":"本章涉及了 pandas 中用于分析数据集的一些新的概念和工具。我们学习了如何读取 CSV 文件，如何处理缺失或重复的数据，如何利用描述性统计量，也见识到了将 DataFrame 转化为交互式图表有多简单。虽然你可能需要一些时间来消化这些知识，但是应该很快就能体会到 pandas 带来的强大力量。本章对 pandas 和 Excel 的 AutoFilter 功能、VLOOKUP 公式、数据透视表、PowerQuery 进行了对比。","og:site_name":"DavonOs","og:title":"Excel Python","og:type":"book","og:url":"https://zuji.eu.org/books/35799208/10","og:image":"https://file.ituring.com.cn/LargeCover/22038dc37469788a2ed5","og:image:width":"50","og:image:alt":"bookcover"},"created":"2025-09-24 14:51","updated":"2025-09-26 16:46"}
---

# 10.1 利用 xlwings 将 Excel 用作前端

前端（frontend）指的是应用程序中用户可以看见且可以与之互动的那一部分。前端通常也被称为图形用户界面（graphical user interface，GUI）或者简单地说成用户界面（user interface，UI）。每当我询问 xlwings 用户为什么选择创建 Excel 工具而不是构建一个现代的 Web 应用程序时，通常都会得到这样的答案：“Excel 才是我们的用户更熟悉的界面。”工作表可以让用户更快、更直观地输入数据，与不完善的 Web 界面相比，Excel 的界面生产力反而更高。本节首先会介绍 xlwings 的 Excel 插件以及 xlwings 的 CLI（command line interface，命令行接口）。然后会通过 quickstart 命令创建我们的第一个项目。最后会展示从 Excel 中调用 Python 代码的两种方法，点击插件中的运行按钮以及使用 VBA 中的 RunPython 函数。下面先来安装 xlwings 的 Excel 插件。
# 10.1.1 Excel 插件

由于 xlwings 已经包含在 Anaconda 发行版中，因此在第 9 章中我们是可以直接在 Python 中执行 xlwings 命令的。但如果你想在 Excel 中调用 Python 脚本，那么就需要安装 Excel 插件或者在独立模式中配置工作簿。10.2 节会介绍独立模式，而本节会向你展示如何使用这个插件。要安装这个插件，需要在 AnacondaPrompt 中执行下列命令：

(base)>xlwings addin install

每次更新 xlwings 时，都需要保持 Python 包的版本和 Excel 插件的版本一致。因此在更新 xlwings 时需要执行两条命令：一条用于 Python 包，另一条用于 Excel 插件。使用不同的包管理器时，更新 xlwings 的方式也不一样，下面分别是使用 Conda 和 pip 时所需执行的命令。

Conda（搭配 AnacondaPython 发行版使用）

(base)>conda update xlwings (base)>xlwings addin install

pip（搭配其他 Python 发行版使用）(base)>pip install - - upgrade xlwings (base)>xlwings addin install

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/25d8186c2031f4390e2922960460a63d35bb7ea64e7cdd4ac330f3ae7adec75b.jpg)

# 杀毒软件

不幸的是，xlwings 有时候会被杀毒软件标记成恶意插件，特别是当你使用的是最新版本的 xlwings 时。如果你在自己的计算机上碰到了这种情况，那么可以进入杀毒软件的设置，在这里应该能够将 xlwings 标记为可以安全运行的软件。一般来说，你也可以通过杀毒软件的主页来报告这样的误报。

在 AnacondaPrompt 中输入 xlwings 时，你使用的是 xlwingsCLI。除了可以让 xlwings 插件的安装更方便，它还提供了一些其他的命令：我会在需要使用这些命令的时候对其进行介绍，但你随时可以在 AnacondaPrompt 中输入 xlwings 然后按回车键来打印可用选项。现在来仔细看看 xlwings addin install 都干了些什么。

安装

插件的实际安装是将 xlwings. xlam 从 Python 包的目录复制到 Excel 的 XLSTART 文件夹中。这是一个特殊文件夹，Excel 会在每次启动时打开其中的所有文件。当你在 AnacondaPrompt 中执行 xlwings addin status 命令时，它会打印 XLSTART 目录在系统中的位置以及是否已安装了插件。

配置

在第一次安装插件时，插件会将环境配置为执行 install 指令时所用的 Python 解释器或者 Conda 环境。如图 10- 1 所示，Conda Path 和 Conda Env 的值是由 xlwings CLI 自

动填写的。这些值被保存在 home 目录的 .xlwings 文件夹的 xlwings. conf 文件中。在 Windows 中，一般保存在 C:\Users\<username>\. xlwings\xlwings. conf 中；在 macOS 中，一般保存在 /Users\<username>\. xlwings\xlwings. conf 中。在 macOS 中，在默认情况下，名称前面有一个点的文件夹和文件会被隐藏。在访达中按下键盘快捷键 Command- Shift- . 可以切换隐藏文件的可见性。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/778261502a6c6cafe0cef466b715d2aa8cbd12d63c074bc66457e555edf2d63f.jpg)  
图 10-1：执行安装命令后的 xlwings 功能区插件

在执行完安装命令后，必须重启 Excel 才能在功能区中看到图 10- 1 所示的 xlwings 标签页。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/f2207c4849321b0c04f68b676c3d4a0daa82e2f0471e3ec8db0a4ded977408c5.jpg)

# macOS 中的功能区插件

在 macOS 中，功能区看起来会有点儿不一样，因为它并没有关于用户定义函数和 Conda 的部分：这是由于 macOS 不支持用户定义函数，而 Conda 环境也不需要特殊对待，也就是说它是在 Python 分组下在解释器选项中配置的。

现在你已经装好了 xlwings 插件，我们需要一个工作簿和一些 Python 代码来测试一下。最快的办法是使用 quickstart 命令，下一节会展示这一命令的用法。

# 10.1.2 quickstart 命令

为了让你的首个 xlwings 工具的开发过程尽可能地方便，xlwingsCLI 提供了 quickstart 命令。在 AnacondaPrompt 中，使用 cd 命令切换至你想要创建的第一个项目的目录（如 cdDesktop），然后执行下列命令创建名为 first_project 的项目：

(base)>xlwingsquickstartfirst_project

项目名称必须是合法的 Python 模块名称：可以包含字母、数字和下划线，但不能包含空白或者横线，也不能以数字开头。10.1.4 节会介绍如何将 Excel 文件的名称修改为无须遵循这种规则的名称。执行 quickstart 命令将会在当前目录中创建一个叫作 first_project 的文件夹。在 Windows 的文件资源管理器或是 macOS 的访达中打开该文件夹时，你会看到两个文件：first_project. xlsm 和 first_project. py。在 Excel 中打开 Excel 文件，在 VS Code 中打开 Python 文件。从 Excel 执行 Python 代码的最简单的方法是点击插件中的 Run main 按钮。下面来看看怎么做。

# 10.1.3 Run main

10.1.3 Run main 等一下再更细致地研究 first_project. py。现在首先保持 first_project. xlsm 为活动的文件，然后在 xlwings 插件的最左边点击 Run main 按钮，“Hello xlwings!”会被写入第一张工作表的 A 1 单元格中。再次点击按钮，单元格内容会变成“Bye xlwings!”。祝贺你，你刚刚在 Excel 中运行了你的第一个 Python 函数！不管怎么说，这并没有比编写 VBA 宏难到哪里去，对吧？下面来看看例 10- 1 中的 first_project. py。

# 例 10-1 first_project. py

import xlwings as xw

def main ()： wb  $=$  xw.Book.caller () sheet  $=$  wb. sheets[0] if sheet["A 1"]. value  $= =$  "Hello xlwings!": sheet["A 1"]. value  $=$  "Bye xlwings!" else: sheet["A 1"]. value  $=$  "Hello xlwings!"

@xw. func 2 def hello (name): return f"Hello {name}!"

if name  $= =$  main.：@xw. Book（"first_project. xlsm"). set_mock_caller () main ()

①xw.Book.caller () 是一个 xlwings book 对象，它引用的是在点击 Run main 按钮时活动的 Excel 工作簿。在本例中，它就对应着 xw.Book ("first_project. xlsm")。xw.Book.caller () 可以让你对文件系统中的 Excel 文件进行重命名和移动位置，且不会破坏文件之间的引用关系。当你在多个 Excel 实例中打开同一个 Excel 文件时，它还可以保证你操作的是正确的工作簿。

$②$  本章会忽略 hello 函数，第 12 章会讲到它。如果你在 macOS 中执行 quickstart 命令，则无论如何都看不见 hello 函数，因为只有 Windows 才支持用户定义函数。

$⑥$  第 11 章在介绍调试时会解释最后 3 行代码。对于本章来说，你可以直接忽略这几行，甚至可以直接删掉第一个函数之后的所有内容。

Excel 插件中的 Run main 按钮是一个方便的功能：它可以调用与 Excel 文件同名的 Python 模块中的名为 main 的函数，并且不需要事先在工作簿中添加按钮。即使你将工作簿保存为无宏的 xlsx 格式，这个按钮依然可以正常工作。不过，如果你想调用一个甚至多个不叫 main 的 Python 函数，或者它们并不在与工作簿同名的模块之中，就需要使用 VBA 中的 RunPython 函数。下一节会详细介绍这个函数。

# 10.1.4 RunPython 函数

如果需要对 Python 代码有更高的控制权，那么可以使用 VBA 函数 RunPython，因此 RunPython 需要将工作簿保存为启用了宏的工作簿。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/0dd2f989adbc560bc3126e9ef4c6beb11da84b1b23204b2b97e1639164fb7894.jpg)

# 启用宏

当你打开一个启用了宏的工作簿（扩展名为 xlsm，比如 quickstart 命令生成的工作簿）时，需要点击启用内容（Windows 系统）或者启用宏（macOS 系统）。当你在 Windows 中使用配套代码库的 xlsm 文件时，还需要点击启用编辑，否则 Excel 无法正常打开从互联网上下载的文件。

RunPython 能够接受字符串形式的 Python 代码：最常见的情况是，你导入一个 Python 模块，然后运行其中的一个函数。当你按下快捷键 Alt+F 11（Windows 系统）或者 Option- F 11（macOS 系统）打开 VBA 编辑器时，会看到 quickstart 命令在名为“Module 1”的 VBA 模块中添加了一个叫作 SampleCall 的宏（参见图 10- 2）。如果没有看到 SampleCall，则可以双击左边 VBA 项目树中的 Module 1。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/e2573e92c9458504fcaa8060386c4c1a59e3a61bdf55a2b2830e6d8c5bd13dbc.jpg)  
图 10-2：显示 Module 1 的 VBA 编辑器

这些代码看起来有一点儿复杂，但这只是为了在项目命名为任何名称时 quickstart 命令都能动态地工作。由于我们的 Python 模块叫作 first_project，因此你可以把里面的代码替换成等效但更易懂的版本：

Sub SampleCall ()  RunPython "import first_project; first_project.main ()"  End Sub

由于在 VBA 中编写多行字符串非常麻烦，因此这里使用了 Python 可以接受的分号而不是换行。有几种方法可以运行这段代码，比如可以在 VBA 编辑器中将光标放到 SampleCall 宏的任意一行上，然后按下 F 5 键。不过，一般来说你可以在 Excel 工作表中而不是 VBA 编辑器中执行代码。因此可以关闭 VBA 编辑器，回到工作簿中。按下快捷键 Alt+F 8（Windows 系统）或者 Option- F 8（macOS 系统）可以打开宏菜单：选择 SampleCall 然后点击运行按钮。或者，为了使其对用户更加友好，可以在 Excel 工作簿中添加一个按钮并

将其连接至 SampleCall：首先确保开发者标签页已显示在功能区中。如果没有，则可以进入“文件  $\gimel$  选项  $\gimel$  自定义功能区”菜单项中勾选开发者旁边的复选框。（在 macOS 中，该选项位于“Excel>偏好设置  $\gimel$  功能区和工具栏”。）要插入一个按钮，可以进入开发者标签页，在控件分组中，点击“插入  $\gimel$  按钮”（在窗体控件下)。在 macOS 中，你需要先进入插入菜单才能看见按钮。当点击按钮图标时，你的鼠标指针就变成了一个小十字：按住鼠标左键绘制出一个矩形区域以生成按钮。一旦放开鼠标左键，你就会看到一个附加宏菜单，选择 SampleCall 然后点击 OK。点击你刚刚创建的按钮（对我来说是叫作“Button 1”的按钮），它会再次运行我们的 main 函数，如图 10- 3 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/567c8433f55aa5ba7b686dba3f5da93f8f75a51f63bcf3cda3cf9d55d0943008.jpg)  
图 10-3：在工作表中绘制一个按钮

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/45f8d976e63adf93bd56cff5825d40b34edee79f501e8b3ba8892727b7c6165c.jpg)

# 窗体控件和 ActiveX 控件

在 Windows 中有两种控件类型：窗体控件和 ActiveX 控件。虽然两种类型的按钮都可以连接 SampleCall 宏，但是只有窗体控件可以在 macOS 中工作。在第 11 章中，我们会使用矩形作为按钮让它看起来更现代化一些。

现在来看看如何修改 quickstart 命令赋予的默认名称：返回 Python 文件并将其名称从 first_project. py 改为 hello. py。同时将 main 函数重命名为 hello_world。一定要保存文件，然后再次打开 VBA 编辑器，按下快捷键 Alt+F 11（Windows 系统）或者 Option- F 11（macOS 系统），依照下面的代码编辑 SampleCall 以反映更改：

Sub SampleCall () RunPython "import hello; hello. hello_world ()" End Sub

回到工作表中，点击“Button 1”以确认一切照常工作。最后，你可能还想将 Python 脚本和 Excel 文件保存在不同的目录中。为了理解其中暗含的一些问题，先来讲一下有

关 Python 的模块搜索路径（module search path）：如果你在代码中导入了一个模块，那么 Python 就会在多个目录中寻找这个模块。首先，Python 会检查是否存在以此为名的内置模块，如果没有找到，则继续查看当前工作目录，然后在所谓的 PYTHONPATH 中查找。xlwings 会自动将工作簿目录添加到 PYTHONPATH 中，这样你就可以通过插件添加额外的路径。为了尝试一下这一特性，可以将名为 hello. py 的 Python 脚本移动到 home 目录下新建的 pyscripts 文件夹中：对于我来说，在 Windows 中就是 C:\Users\felix\pyscripts，在 macOS 中则是 /Users/felix/pyscripts。当你再次点击按钮时，会得到如下错误：

Traceback (most recent call last): File "<string>", line 1, in <module> ModuleNotFoundError: No module named 'first_project'

要修复这个错误，只需将 pyscripts 目录添加到 xlwings 功能区的 PYTHONPATH 设置中即可，如图 10- 4 所示。当你再次点击按钮时，它又可以正常工作了。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/cbf268cc9b04cb6a540ee1a5f9832ec7903114bc74e97cf489da9a5162c597d2.jpg)  
图 10-4：PYTHONPATH 设置

本书还没有讲到 Excel 工作簿的名称：只要你在调用 RunPython 函数时使用的是显式的模块名称（如 first_project）而不是由 quickstart 添加的代码，就可以随意重命名 Excel 工作簿的任何内容。

如果你要创建一个新的 xlwings 项目，那么使用 quickstart 命名是最简单的方法。然而如果你有一个既存的工作簿，则可能更喜欢手动配置。下面来看看如何手动配置。

# 不通过 quickstart 命令执行 RunPython 函数

如果想在并非由 quickstart 命令创建的现有的工作簿上使用 RunPython 函数，那么你需要手动完成 quickstart 命令为你完成的工作。注意，下面的步骤只在你需要调用 RunPython 函数时执行，如果只是想使用 Runmain 按钮则不需要这样做。

1. 首先，确保将工作簿以启用宏的格式保存，扩展名为 xlsm 或 xlsb。

2. 添加一个 VBA 模块。通过快捷键 Alt+F 11（Windows 系统）或 Option-F 11（macOS 系统）打开 VBA 编辑器，确保在左边的树状视图中选定了你的工作簿的 VBA Project。单击右键，选择 “Insert（插入）>Module（模块）”，如图 10-5 所示。这会插入一个空 VBA 模块，你可以在其中编写含有 RunPython 调用的 VBA 宏。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/2997a9f33422991ee0c2484a10fc04b6051fd2afd131f6af6ae03b2cc7ebf28f.jpg)  
图 10-5：添加 VBA 模块

3. 添加对 xlwings 的引用：RunPython 函数是 xlwings 插件的一部分。要使用 RunPython 函数，需要确保在 VBA Project 中添加了对 xlwings 的引用。再次在 VBA 编辑器左边的树状视图中选定正确的工作簿，然后进入“工具  $>$  引用”菜单，勾选 xlwings 的复选框，如图 10-6 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/d803fff7ddd434463cec1453211935176f7cfabeb5806d568a703493788c4fbd.jpg)  
图 10-6：RunPython 需要引用 xlwings

现在你的工作簿又可以调用 RunPython 了。一旦所有的代码在你的计算机上可以正常工作，一般来说下一步就是让它在你同事的计算机上也能正常工作。下面来了解一些可以让这个过程更简单的选项。

# 10.2 部署

10.2 部署在软件开发领域，部署（deployment）这一术语指的是分发并安装软件，从而让终端用户能够使用该软件。对于 xlwings 工具来说，这个过程可以帮助我们了解到存在哪些依赖项，哪些设置可以让部署过程更方便。本节会从最重要的依赖项（也就是 Python）讲起。随后会研究处于独立模式下的工作簿，在独立模式下这些工作簿不再需要 xlwings 的 Excel 插件。本节在最后会详细研究如何配置 xlwings。

# 10.2.1 Python 依赖

为了能够运行 xlwings 工具，你的终端用户必须安装 Python。但未安装 Python 并不意味着没有可以简化安装过程的方法。下面有一些方法可供选择。

Anaconda 或 WinPython

Anaconda 或 WinPython 指导你的用户下载并安装 Anaconda 发行版。为安全起见，你需要指定特定版本的 Anaconda 以确保你的用户所使用的包的版本和你一样。如果你使用的都是包含在 Anaconda 中的包，那么这是一种好办法。WinPython 基于 MIT 开源许可分发，并且也预装了 xlwings，用它来代替 Anaconda 也不错。正如其名字所示，WinPython 只能在 Windows 中使用。

# 共享驱动器

共享驱动器如果可以访问一个相对较快的共享驱动器，那么你可以直接在上面安装 Python，这样每个人都可以使用这些工具而无须在本地安装 Python。

冻结可执行文件

冻结可执行文件在 Windows 中，xlwings 可以让你创建冻结可执行文件（frozen executable）。冻结可执行文件以 exe 为扩展名，其中包含了 Python 以及所有依赖项。PyInstaller 是一个可以生成冻结可执行文件的流行包。冻结可执行文件的优势在于它们可以将程序所需要的所有东西打包成单个文件，这样分发起来就更方便了。有关如何使用冻结可执行文件的更多细节，可以参看 xlwings 的文档。注意，如果你把 xlwings 用到了用户定义函数（第 12 章会介绍）上，那么冻结可执行文件就无法工作了。

虽然 Python 是硬性需求，但是 xlwings 插件并不是，下面就会讲到。

# 10.2.2 独立工作簿：脱离 xlwings 插件

10.2.2 独立工作簿：脱离 xlwings 插件在本章中，无论是点击 Run main 按钮还是使用 RunPython 函数，我们总是依赖于 xlwings 插件来调用 Python 代码。即使利用 xlwings CLI 安装插件很简单，但是对于对技术不那么了解的用户来说，Anaconda Prompt 用起来也不是很简单。另外，由于 xlwings 插件和 xlwings 的 Python 包的版本需要保持一致，因此如果你的用户已经安装了 xlwings，但是版

本和你的工具所需的版本不一致，这就可能会造成冲突。不过也有一种简单的解决方案：xlwings 并不一定要安装 Excel 插件，它可以被设置为独立工作簿（standalone workbook）。在这种情况下，插件的 VBA 代码会被直接保存在工作簿中。和往常一样，进行这一系列配置的最简单的方法就是使用 quickstart 命令，这次要用到 - - standalone 标志：

(base)> xlwings quickstart second_project - - standalone

当你在 Excel 中打开命令生成的 second_project. xlsm 工作簿并按下快捷键 Alt+F 11（Windows 系统）或 Option- F 11（macOS 系统）时，可以看到 xlwings 模块和 Dictionary 类模块取代了插件。最重要的一点是，独立项目不能再引用 xlwings。虽然这些都可以通过 - - standalone 标志自动配置，但是值得注意的是，如果你想将一个现有的工作簿转换为独立工作簿，就需要在引用中移除 xlwings：进入 VBA 编辑器的“工具 > 引用”菜单中，取消勾选 xlwings 的复选框。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/7beed0ebe1fb144167d532638854cc7427e1b069aee5efc49a45471e265a1699.jpg)

# 构建自定义插件

虽然本节展示的是如何脱离对 xlwings 插件的依赖，但是有时候你可能想要在部署过程中构建自己的插件。如果你想在大量不同的工作簿中使用同样的宏，那么这样做是理所当然的。你可以在 xlwings 的文档中找到关于构建自定义插件的说明。

介绍完 Python 和插件之后，现在来深入了解一下 xlwings 的配置是如何工作的。

# 10.2.3 配置的层次关系

正如本章开头提到的那样，功能区将配置保存在用户的 home 目录的 .xlwings\xlwings. conf 中。配置包含了独立的设置，就像我们在本章开头看到过的 PYTHONPATH 那样。插件的设置可以在目录级别和工作簿级别上进行覆盖。xlwings 按照如下位置和顺序查找设置。

工作簿配置

首先，xlwings 会查找一张叫作 xlwings. conf 的工作表。这是在部署时配置工作簿的推荐方法，因为你不需要处理额外的配置文件。当你执行 quickstart 命令时，它会在一张叫作“_xlwings. conf”的工作表上创建示例配置：删除开头的下划线就可以启用配置。如果不想使用这个配置，则可以随意删除这张工作表。

目录配置

接下来，xlwings 会在你的 Excel 工作簿所在目录查找一个叫作 xlwings. conf 的文件。

用户配置

最后，xlwings 会在用户的 home 目录的 .xlwings 文件夹中查找一个叫作 xlwings. conf 的文件。通常，你不会直接编辑这个文件，也就是说，每当你修改设置时这个文件都会被插件创建和编辑。

如果 xlwings 在这 3 个位置中都找不到任何设置，则它会后退使用默认值。

当你通过 Excel 插件编辑设置时，插件会自动编辑 xlwings. conf 文件。如果你想直接编辑这个文件，那么可以在 xlwings 文档中查询具体的格式和可用的设置。不过后面在讲解部署时我会指出最有用的设置。

# 10.2.4 设置

最关键的设置自然是 Python 解释器的设置，也就是说，如果你的 Excel 工具找不到正确的 Python 解释器，那么它便无法发挥任何作用。PYTHONPATH 设置使你能够控制放置 Python 源文件的位置。在 Windows 中启用“Use UDF Server”（使用 UDF 服务器）设置可以在每次调用过程中保持 Python 解释器一直运行，这样可以极大地提升性能。

# Python 解释器

xlwings 依赖于本地安装的 Python。然而这并不一定就意味着你的 xlwings 用户在能够使用工具之前必须进行一番设置。正如前面提到的那样，你可以告诉他们使用默认设置安装 Anaconda 发行版，该发行版会被安装在用户的 home 目录中。如果你在配置中使用了环境变量，那么 xlwings 将找到 Python 解释器的正确路径。环境变量是在用户计算机上设置的一种变量，它们可以让程序查询该环境中的各种信息，比如当前用户 home 文件夹的名称。举例来说，在 Windows 中，将 Conda Path 设置为%USERPROFILE%\anaconda 3，在 macOS 中，将 Interpreter_Mac 设置为$HOME/opt/anaconda 3/bin/python。这些路径会被动态地解析为 Anaconda 的默认安装路径。

# PYTHONPATH

在默认情况下，xlwings 会在 Excel 文件所在目录中查找 Python 源文件。如果你的用户并不熟悉 Python，那么当他们在移动 Excel 文件时可能会忘记一并移动 Python 源文件，这个时候利用 xlwings 的默认设置就不太好了。此时你可以将 Python 源文件放到一个专门的文件夹中（可能是一个共享驱动器上的位置），然后将这个文件夹添加到 PYTHONPATH 设置中。另外，你也可以将源文件放到一个已经是 Python 模块搜索路径的一部分的文件夹中。实现这一行为的方法之一是以 Python 包的形式分发你的源代码，也就是说，Python 包在安装时会被放到 Python 的 site- packages 目录中，Python 会在这里找到你的代码。有关构建 Python 包的更多信息，参见 Python Packaging User Guide。

RunPython：Use UDF Sever（仅限 Windows 系统）

你可能注意到了，RunPython 调用会相当慢。这是因为 xlwings 会启动一个 Python 解释器，然后运行 Python 代码，最后再关闭解释器。在开发过程中这个问题可能没那么严重，因为这个过程可以保证每次调用 RunPython 时都能够重新加载所有模块。不过，一旦代码稳定下来了，你可能就想勾选“RunPython: Use UDF Server”选项（仅限 Windows 系统）。该选项会使用与用户定义函数相同的 Python 服务器（这是第 12 章的

主题），并且在每次调用之间保持 Python 会话持续运行，这会让调用过程变快不少。不过要注意的是，你需要在修改代码后点击功能区的“Restart UDF Server”（重启 UDF 服务器）按钮。

# xlwings PRO

虽然本书仅使用免费、开源版本的 xlwings，但除此之外还有一个用于支持开源包持续维护和开发的 PRO 付费版。xlwings PRO 提供的额外功能如下。

- 可以将 Python 代码嵌入 Excel，从而脱离外部源文件。- 报表包可以将工作簿转换为带有占位符的模板。这使非技术用户可以在不更改 Python 代码的情况下编辑模板。- 可以轻松构建安装程序以减少部署中遇到的问题：终端用户可以一键安装包括 Python 在内的所有依赖，他们会觉得像是在处理一般的 Excel 工作簿一样，无须手动配置任何东西。

如需了解有关 xlwings PRO 以及申请试用许可证的更多信息，请参见 xlwings 的主页。

# 10.3 小结

本章首先展示了从 Excel 中调用 Python 代码有多简单：安装好 Anaconda 之后，只需执行 xlwing addin install 命令，然后再执行 xlwings quickstart myproject，接下来就可以点击 xlwings 插件中的 Run main 按钮或者使用 VBA 中的 RunPython 函数了。然后本章介绍了一些可以简化 xlwings 工具部署过程的设置。事实上，由于 Anaconda 预装了 xlwings，因此新用户面临的门槛也就大大降低了。

在本章中，我们仅通过 Hello World 这个例子就学习了各种工具的工作原理。第 11 章会利用这些基础知识来构建一个像模像样的商业应用，即 Python 包跟踪器。