---
{"dg-publish":true,"dg-permalink":"books/36632126/Appendix-B—More-on-the-IPython-System","permalink":"/books/36632126/Appendix-B—More-on-the-IPython-System/","metatags":{"description":"本书第 1 版出版于 2012 年，彼时基于 Python 的开源数据分析库（例如 pandas）仍然是一个发展迅速的新事物，本书也成为该领域排名 No 1 的经典畅销书，前两版中文版累计销售近 30 万册。第 3 版针对 Python 3.10 和 pandas 1.4 进行了更新，并通过实操讲解和实际案例向读者展示了如何高效地解决一系列数据分析问题。读者将在阅读过程中学习新版本的 pandas、NumPy、IPython 和 Jupyter。本书作者 Wes McKinney 是 Python pandas 项目的创始人。本书对 Python 数据科学工具的介绍既贴近实战又内容新颖，非常适合刚开始学习 Python 的数据分析师或刚开始学习数据科学和科学计算的 Python 程序员阅读。","og:site_name":"DavonOs","og:title":"利用 Python 进行数据分析 (原书第3版)","og:type":"book","og:url":"https://zuji.eu.org/books/36632126/Appendix-B—More-on-the-IPython-System","og:image":"https://i-blog.csdnimg.cn/direct/a3631c7292b546cc8982429c96df4bb4.png","og:image:width":"50","og:image:alt":"bookcover"},"tags":["program/python"],"dgShowInlineTitle":true,"created":"2025-09-16 07:14","updated":"2025-09-21 18:10"}
---

# B.1 终端快捷键

Python 有许多用于导航提示（Emacs 文本编辑器或 UNIX bash 命令行的用户对此比较熟悉）以及查看 shell 的历史命令的快捷键。表 B- 1 总结了一些常用的快捷键。图 B- 1 展示了部分快捷键，比如移动光标。

▼表 B-1：标准 IPython 快捷键  

<table><tr><td>快捷键</td><td>说明</td></tr><tr><td>Ctrl+P 或向上箭头</td><td>用当前输入的文本搜索之前的命令</td></tr><tr><td>Ctrl+N 或向下箭头</td><td>用当前输入的文本搜索之后的命令</td></tr><tr><td>Ctrl+R</td><td>用按行读取方式做逆向历史搜索（部分匹配）</td></tr><tr><td>Ctrl+Shift+V</td><td>从剪贴板粘贴文本</td></tr><tr><td>Ctrl+C</td><td>中断正在执行的代码</td></tr><tr><td>Ctrl+A</td><td>将光标移动到本行的起始位置</td></tr><tr><td>Ctrl+E</td><td>将光标移动到本行的结束位置</td></tr><tr><td>Ctrl+K</td><td>删除光标到行尾的文本</td></tr><tr><td>Ctrl+U</td><td>删除当前行的所有文本</td></tr><tr><td>Ctrl+F</td><td>光标向前移动一个字符</td></tr><tr><td>Ctrl+B</td><td>光标向后移动一个字符</td></tr><tr><td>Ctrl+L</td><td>清空屏幕</td></tr></table>

![](https://wesmckinney.com/book/images/pda3_b001.png)
图 B- 1：IPython 命令行中部分快捷键的说明

Jupyter notebook 有另外一套用于导航和编辑的庞大快捷键体系。因为它的快捷键比 IPython 的快捷键变动更快，建议读者参阅在 Jupyter notebook 菜单中集成的帮助文档。

# B.2 魔术命令

IPython 中的特殊命令（Python 中没有内置）称作“魔术”命令。这些命令可以使普通任务更便捷，且更容易控制 IPython 系统。魔术命令是在指令前添加百分号%前缀的命令。例如，可以用%timeit 检测任何 Python 语句（比如矩阵乘法）的执行时间：

a = np. random. standard_normal ((100, 100))  %timeit np.dot (a, a)  92.5 µs ± 3.43 µs per loop (mean ± std. dev. of 7 runs, 10000 loops each)

魔术命令可以看作 IPython 系统中运行的命令行程序。许多魔术命令都有“命令行”选项，可以通过？查看：

%debug?  Docstring:  ::

%debug [- - breakpoint FILE: LINE] [statement [statement ...]]

Activate the interactive debugger.

This magic command support two ways of activating debugger.  One is to activate debugger before executing code. This way, you can set a break point, to step through the code from the point. You can use this mode by giving statements to execute and optionally a breakpoint.

The other one is to activate debugger in post- mortem mode. You can activate this mode simply running %debug without any argument. If an exception has just occurred, this lets you inspect its stack frames interactively. Note that this will always work only on the last traceback that occurred, so you must call this quickly after an exception that you wish to inspect has fired, because if another one occurs, it clobbers the previous one.

If you want IPython to automatically do this on every exception, see

the %pdb magic for more details.

.. versionchanged:: 7.3  When running code, user variables are no longer expanded, the magic line is always left unmodified.

positional arguments:  statement Code to run in debugger. You can omit this in cell magic mode.

optional arguments:  - - breakpoint <FILE:LINE>, - b <FILE:LINE>  Set break point at LINE in FILE.

默认条件下，只要没有定义与魔术函数同名的变量，不用百分号就可以使用魔术函数。这个功能被称为“自动魔术”，可以通过%automagic 打开或关闭。

一些魔术函数与 Python 函数的用法很像，它们的结果可以赋值给一个变量：

In[22]:%pwd Out[22]：'/home/wesm/code/pydata- book' In[23]:foo=%pwd In[24]: foo Out[24]：'/home/wesm/code/pydata- book'

IPython 文档可以在系统内打开访问，我建议读者用%quickref 或%magic 学习所有可用的特殊命令。表 B- 2 列出了部分最重要的命令，可以提高在 IPython 中进行交互式计算和 Python 开发的效率。

表 B-2：一些常用的 IPython 魔术命令  

<table><tr><td>命令</td><td>说明</td></tr><tr><td>%quickref</td><td>展示 IPython 的快速参考</td></tr><tr><td>%magic</td><td>展示所有可用魔术命令的详细文档</td></tr><tr><td>%debug</td><td>在最后一个异常回溯的底部进入交互式调试器</td></tr><tr><td>%hist</td><td>打印命令的输入（可以选择输出）历史</td></tr><tr><td>%pdb</td><td>出现任意异常时自动进入调试器</td></tr><tr><td>%paste</td><td>执行剪贴板中已经预先格式化的代码</td></tr><tr><td>%cpaste</td><td>开启一个特殊提示符，手动粘贴待执行的代码</td></tr><tr><td>%reset</td><td>删除所有命名空间中的变量和名称</td></tr><tr><td>%page OBJECT</td><td>通过分页器以美观格式打印对象</td></tr><tr><td>%run script. py</td><td>在 IPython 中运行 Python 脚本</td></tr><tr><td>%prun statement</td><td>使用 CProfile 执行 statement，并报告分析器输出</td></tr><tr><td>命令</td><td>说明</td></tr><tr><td>%time statement</td><td>报告单条语句的执行时间</td></tr><tr><td>%timeit statement</td><td>多次运行一条语句，计算平均执行时间。适合分析执行时间极短的代码</td></tr><tr><td>%who、%who ls、%whos</td><td>不同的信息/详细程度层级，展示交互式命名空间中的变量</td></tr><tr><td>%xdel variable</td><td>删除一个变量，并清空 IPython 中对它的所有引用</td></tr></table>

# B.2.1 %run 命令

在 IPython 环境中，你可以用%run 命令将任意文件当作 Python 程序来执行。假设有如下这个简单脚本，存储于 script. py:

def f (x, y, z): return  $(x + y) / z$ $a = 5$ $b = 6$ $c = 7.5$  result  $= f(a,b,c)$

将文件名传递给%run，就可以执行了：

%run script. py

这段脚本运行在空白命名空间中（没有任何导入和其他定义的变量），因此代码的执行过程应该与在命令行中通过 python script. py 运行程序相同。文件中定义的所有变量（导入对象、函数和全局变量，以及可能抛出的异常）都可以在 IPython shell 中访问：

c7.5 resultOut[16]: 1.4666666666666666

如果 Python 脚本需要命令行参数（通过 sys. argv 获得），可以放置在文件路径之后，就像在命令行中运行一样。

如果想让脚本访问 IPython 交互式命名空间中已经定义的变量，可以使用%run- i 替换%run。

在 Jupyter notebook 中，你也可以使用魔术函数%load，它可以将脚本导入代码框中：

%load script. pydef f (x, y, z):    return (x + y) / za = 5 b = 6 c = 7.5 result = f (a, b, c)

# 中断运行中的代码

代码运行时按 Ctrl+C，无论是通过%run 运行的命令还是长时间运行命令，都会导致 KeyboardInterrupt。这会导致几乎所有 Python 程序立即停止，除非一些特殊情况。

当 Python 代码调用了一些编译的扩展模块时，按 Ctrl+C 不一定会将执行的程序立即停止。在这种情况下，你必须等待，直到控制权返回 Python 解释器，或者在更糟糕的情况下强制终止 Python 进程（例如，在 Windows 上使用任务管理器，或者在 Linux 上使用 Kill 命令）。

# B.2.2 从剪贴板执行代码

如果使用 Jupyter notebook，你可以复制代码并粘贴到任意代码框中并执行。在 IPython shell 中也可以从剪贴板执行代码。假设你在其他应用中拥有如下代码：

$x = 5$ $y = 7$  if  $x > 5$ $\times + = 1$ $y = 8$

最简单的方法是使用%paste 和%cpaste 这两个魔术函数（注意，这两个函数无法在 Jupyter 中使用，因为在 Jupyter 中用户可以复制并粘贴代码到代码框中）。%paste 可以接收剪贴板中的任意文本，并将这段文本当作一个独立的代码块来执行：

%paste  $\begin{array}{l}{\mathbb{X} = \mathbb{5}}\\ {\mathbb{Y} = \mathbb{7}}\\ {\mathbb{if}\mathbb{X} > \mathbb{5}:}\\ {\mathbb{X} + = \mathbb{1}} \end{array}$ $\texttt{y} = \texttt{8}$  ## - - End pasted text - -

%c paste 拥有类似的功能，不同之处是它会给出一个特殊提示符，用于粘贴代码：

%cpaste Pasting code; enter '-' - ' alone on the line to stop or use Ctrl- D.  $\begin{array}{l}{\mathbb{X} = \mathbb{5}}\\ {\mathbb{Y} = \mathbb{7}}\\ {\mathbb{if}\mathbb{X} > \mathbb{5}:}\\ {\mathbb{:}\quad \mathbb{X} + = \mathbb{1}}\\ {\mathbb{:}}\\ {\mathbb{:}\quad \mathbb{Y} = \mathbb{8}}\\ {\mathbb{:} - - } \end{array}$

使用%c paste，你可以在执行之前粘贴任意数量的代码。你可能想在运行前先使用%c paste 查看代码。如果无意粘贴了错误的代码，可以按快捷键 Ctrl+C 中断%c paste 提示符。

# B.3 使用命令历史记录

IPython 维护了一个位于磁盘的小型数据库，用于保存执行的每条指令。它有多种用途：

·只用最少的输入，就能搜索、补全和执行先前运行过的指令。

·在不同会话间保存命令历史。

·将输入/输出历史记录到文件中。

这些功能在 shell 中要比在 notebook 中更有用，因为 notebook 从设计上就是将输入和输出的代码放到每个代码框中。

# B.3.1 搜索和复用命令历史记录

IPython 可以让你搜索和执行之前的代码或其他命令。这个功能非常有用，因为你可能需要重复执行同样的命令，例如%run 命令或其他代码片段。假设你执行过下面的代码：

In[7]: %run first/second/third/data_script. py

然后检查该脚本的结果（假设它成功运行），结果发现计算有错。找出问题并修改文件 data_script. py 之后，你就可以输入一些%run 命令字符，然后按快捷键 Ctrl+P（或向上箭头键）。这样就可以搜索历史命令中匹配输入字符的命令。多次按 Ctrl+P（或向上箭头键）会继续搜索历史命令。如果你错过了想要执行的命令，不用担心，可以按快捷键 Ctrl+N（或向下箭头键）向前移动历史命令。试几次后，你就可以熟练应用这些快捷键了！

使用 Ctrl+R 可以提供如同 Unix 风格 shell（比如 bash shell）中 readline 的部分增量搜索功能。在 Windows 上，IPython 借鉴了 readline 功能。要使用这个功能，先按 Ctrl+R，然后输入要搜索的输入行中包含的若干字符：

a_command  $=$  foo (x，y，z)

(reverse- t- search) com': a_command  $=$  foo (x，y，z)

按 Ctrl+R 会循环查看与输入字符相匹配的每行历史记录。

# B.3.2 输入变量和输出变量

B.3.2 输入变量和输出变量忘记将函数调用的结果赋值给变量是非常恼人的。IPython 会话会在一个特殊变量中存储对输入命令和输出 Python 对象的引用。前面两个输出会分别存储在（单下划线）和（双下划线）变量中：

'input 1' Out[18]: 'input 1' 'input 2' Out[19]: 'input 2' Out[20]: 'input 1' 'input 3' Out[21]: 'input 3' Out[22]: 'input 3'

输入变量存储在变量_iX 中，其中 X 是输入行的编号。对于每个输入变量，都有一个对应的输出变量_X。因此在输入第 27 行之后，会生成两个新变量_27（用于输出）和_i 27（用于输入）：

foo = 'bar'  foo  Out[27]: 'bar'  _i 27  Out[28]: u'foo'  _27  Out[29]: 'bar'

输入变量是字符串，可以用 Python 的 eval 关键字再次执行输入变量：

eval (_i 27)  Out[30]: 'bar'

这里，_i 27 代表在 In[27]中输入的代码。

有几个魔术函数可以让你利用输入和输出历史。%hist 可以打印所有或部分输入历史（包括或不包括行号）。%reset 可以清空交互式命名空间，也可以清空输入和输出缓存。%xdel 魔术函数可以删除 IPython 中对某个特定对象的所有引用。关于这些魔术方法的更多内容，请查看文档。

当处理大型数据集时，要记住 IPython 的输入和输出的历史会造成被引用的对象不会被垃圾回收（释放内存），即使你使用 del 关键字从交互式命名空间删除变量也是如此。在这种情况下，谨慎使用%xdel 和%reset 可以帮助你避免陷入内存问题。

# B.4 与操作系统交互

IPython 的另一个功能是支持访问文件系统和操作系统。这意味着，除了特殊情况，无须退出 IPython，就可以像 Windows 或 UNIX（Linux、macOS）中那样执行大多数标准的命令行操作。其中包括 shell 命令、更改路径、用 Python 对象（列表或字符串）存储命令结果。此外，还有命令别名和路径书签功能。

表 B- 3 总结了调用 shell 命令的魔术函数和语法。我会在下面几节介绍这些功能。

表 B-3：IPython 系统相关命令  

<table><tr><td>命令</td><td>说明</td></tr><tr><td>! cmd</td><td>在系统命令行中执行 cmd</td></tr><tr><td>output = !cmd args</td><td>执行 cmd 并在 output 中存储 stdout</td></tr><tr><td>%alias alias_name cmd</td><td>为一个系统（命令行）命令定义别名</td></tr><tr><td>%bookmark</td><td>使用 IPython 的路径书签系统</td></tr><tr><td>%cd directory</td><td>更改系统的工作路径为传入的路径</td></tr><tr><td>%pwd</td><td>返回当前的系统工作路径</td></tr><tr><td>%pushd directory</td><td>将当前路径放在堆栈上，并切换到目标路径</td></tr><tr><td>%popd</td><td>切换到从堆栈顶部弹出的路径</td></tr><tr><td>%dirs</td><td>返回包含当前路径堆栈的列表</td></tr><tr><td>%dhist</td><td>打印访问过的路径历史</td></tr><tr><td>%env</td><td>以字典形式返回系统的环境变量</td></tr><tr><td>%matplotlib</td><td>配置 matplotlib 集成选项</td></tr></table>

# B.4.1 shell 命令及其别名

在 IPython 中用感叹号！或 bang 开始一行，可以让 IPython 在系统 shell 中执行感叹号后面的所有内容。这意味着你可以删除文件（取决于操作系统，用 rm 或 del）、改变路径或执行任意其他进程。

通过将以！转义的表达式赋值给变量，你可以在变量中存储命令的控制台输出。例如，在我的基于 Linux 的联网主机上，我可以用 Python 变量的形式获得我的 IP 地址：

ip_info = !ifconfig wlan 0 | grep "inet"  ip_info[0]. strip ()  Out[2]: 'inet addr: 10.0.0.11 Bcast: 10.0.0.255 Mask: 255.255.255.0'

返回的 Python 对象 ip_info 实际上是一个自定义的列表类型，它包含多种版本的控制台输出。

当使用！时，IPython 还可以替换当前环境中定义的 Python 值。要这么做，可以在变量名前面加上符号$：

foo = 'test'  !ls $foo  test 4. py test. py test. xml

魔术函数%alias 可以自定义 shell 命令的快捷方式。来看一个例子：

%alias ll ls - l

ll /usr  total 332

drwxr- xr- x 2 root root 69632 2012- 01- 29 20:36 bin/  drwxr- xr- x 2 root root 4096 2010- 08- 23 12:05 games/  drwxr- xr- x 123 root root 20480 2011- 12- 26 18:08 include/  drwxr- xr- x 265 root root 126976 2012- 01- 29 20:36 lib/  drwxr- xr- x 44 root root 69632 2011- 12- 26 18:08 lib 32/  lrwxrwxrwx 1 root root 3 2010- 08- 23 16:02 lib 64 - > lib/  drwxr- xr- x 15 root root 4096 2011- 10- 13 19:03 local/  drwxr- xr- x 2 root root 12288 2012- 01- 12 09:32 sbin/  drwxr- xr- x 387 root root 12288 2011- 11- 04 22:53 share/  drwxrwsr- x 24 root src 4096 2011- 07- 17 18:38 src/

只需用分号隔开，就可以像在命令行中一样执行多个命令：

%alias test_alias (cd examples; ls; cd ..)

test_alias  macrodata. csv spx. csv tips. csv

注意，一旦会话结束，自定义的别名就会失效。要创建持久的别名，需要对系统进行配置。

# B.4.2 路径书签系统

IPython 带有一个路径书签系统，可以让用户保存常用路径的别名，这样在切换路径的时候会非常方便。例如，假设你想创建一个指向本书补充内容的书签：

%bookmark py 4 da /home/wesm/code/pydata- book

完成上面这步之后，使用魔术命令%cd 就可以使用定义过的任意书签了：

cd py 4 da  (bookmark: py 4 da) - > /home/wesm/code/pydata- book  /home/wesm/code/pydata- book

如果书签名与当前工作路径中的某个路径重名，可以使用标志- b 进行覆盖并使用书签的位置。使用%bookmark- l，可以列出所有书签：

%bookmark - l  Current bookmarks:  py 4 da - > /home/wesm/code/pydata- book- source

书签和别名不同，在 IPython 会话之间是自动保存的。

# B.5 软件开发工具

除了作为交互式计算和数据探索的舒适环境，IPython 也是有效的 Python 软件开发通用工具。在数据分析任务中，最重要的是要有正确的代码。幸运的是，IPython 紧密集成并强化了 Python 内置的 pdb 调试器。其次，你希望你的代码运行更快。对于这点，IPython 集成了方便进行代码计时和分析的工具。我会详细介绍这些工具。

# B.5.1 交互式调试器

IPython 的调试器用 tab 补全、语法增强、逐行上下文异常回溯强化了 pdb。调试代码的最佳时机就是错误刚刚发生之后。异常发生之后就输入命令%debug，会启动“事后分析”的调试器，并进入抛出异常的栈帧：

run examples/ipython_bug. py  AssertionError Traceback (most recent call last)  /home/wesm/code/pydata- book/examples/ipython_bug. py in <module>()  13 throws_an_exception ()  14  - - - > 15 calling_things ()  /home/wesm/code/pydata- book/examples/ipython_bug. py in calling_things ()  11 def calling_things ():  12 works_fine ()  - - - > 13 throws_an_exception ()  14

15 calling_things ()

/home/wesm/code/pydata- book/examples/ipython_bug. py in throws_an_exception () 7 a = 5 8 b = 6 - - - - > 9 assert (a + b == 10) 10 11 def calling_things ():

AssertionError:

%debug > /home/wesm/code/pydata- book/examples/ipython_bug.py (9) throws_an_exception () 8 b = 6 - - - - > 9 assert (a + b == 10) 10

ipdb>

一旦进入调试器，就可以执行任意的 Python 代码，并能在每个栈帧中探索所有的对象和数据（解释器会将其保持为“运行状态”）。默认是从发生异常的最底层开始。通过键入 u（up）和 d（down），你可以在堆栈回溯的不同等级间切换：

ipdb> u > /home/wesm/code/pydata- book/examples/ipython_bug.py (13) calling_things () 12 works_find () - - - > 13 throws_an_exception () 14

执行%pdb 命令，可以在发生任何异常时让 IPython 自动启动调试器，许多用户会发现这个功能非常好用。

还可以使用调试器协助代码开发，尤其是用于设置断点，或者单步执行函数和脚本以检查每个执行步骤的状态。有多种方式可以实现。第一种是使用%run 和标志- d，它会在执行传入脚本的任何代码之前启动调试器。你必须马上批 s（步骤）键以进入脚本：

run - d examples/ipython_bug. py Breakpoint I at /home/wesm/code/pydata- book/examples/ipython_bug. py: 1 NOTE: Enter 'c' at the ipdb> prompt to start your script. > <string>(1)<module>() ipdb> s - - Call- - > /home/wesm/code/pydata- book/examples/ipython_bug.py (1)<module>() 1- - - > 1 def works_find (): 2 a = 5 3 b = 6

然后，你就可以决定如何处理文件了。例如，对于前面的异常，我们可以在调用 works_fine 函数的前面设置断点，然后运行脚本直到按 c（继续）键到达断点：

ipdb> b 12 ipdb> c> /home/wesm/code/pydata- book/examples/ipython_bug.py (12) calling_things () 11 def calling_things (): 2- - > 12 works_fine (13 throws_an_exception ()

此时，你可以 step 进入 works_fine ()，或者通过按 n（下一行）键执行 works_fine () 以进入下一行：

ipdb> n> /home/wesm/code/pydata- book/examples/ipython_bug.py (13) calling_things () 2 12 works_fine () 13 throws_an_exception () 14

然后，我们可以步进到 throws_an_exception，到达发生异常的那行，并检查范围内的变量。注意，调试器的命令优先于变量名。在变量名前面加感叹号！查看其内容：

ipdb> s - - Call- - > /home/wesm/code/pydata- book/examples/ipython_bug.py (6) throws_an_exception () 5 - - - - > 6 def throws_an_exception (): 7 a=5 ipdb> n > /home/wesm/code/pydata- book/examples/ipython_bug.py (7) throws_an_exception () 6 def throws_an_exception (): - - - - > 7 a=5 8 b=6 ipdb> n > /home/wesm/code/pydata- book/examples/ipython_bug.py (8) throws_an_exception () 7 a=5 - - - - > 8 b=6 9 assert (a  $+\texttt{b} = = 10$  ipdb> n > /home/wesm/code/pydata- book/examples/ipython_bug.py (9) throws_an_exception () 8 b=6 - - - - > 9 assert (a  $+\texttt{b} = = 10$  10 ipdb> !a 5 ipdb> !b 6

根据我的经验，熟练掌握交互式调试器需要一定的时间和练习。表 B- 4 列出了所有调试器命令。如果你习惯使用 IDE，一开始可能会觉得终端调试器不顺手，但会觉得越来越好用。一些 Python 的 IDE 拥有出色的 GUI 调试器，读者选择自己顺手的工具就好。

表 B-4：IPython 调试器命令  

<table><tr><td>命令</td><td>动作</td></tr><tr><td>h (elp)</td><td>展示命令列表</td></tr><tr><td>help command</td><td>展示 command 文档</td></tr><tr><td>c (ontinue)</td><td>继续执行程序</td></tr><tr><td>q (uit)</td><td>退出调试器，不再执行更多代码</td></tr><tr><td>b (reak) number</td><td>在当前文件的第 number 行设置断点</td></tr><tr><td>b path/to/file. py: number</td><td>在指定文件的第 number 行设置断点</td></tr><tr><td>s (tep)</td><td>进入函数调用</td></tr><tr><td>n (ext)</td><td>执行当前行，并前进到同级的下一行</td></tr><tr><td>u (p)/d (won)</td><td>在函数调用栈向上或向下移动</td></tr><tr><td>a (rgs)</td><td>展示当前函数的参数</td></tr><tr><td>debug statement</td><td>在新的（递归）调试器中执行 statement</td></tr><tr><td>l (ist) statement</td><td>展示当前位置和当前栈级别的上下文</td></tr><tr><td>w (here)</td><td>打印完整的堆栈回溯和当前位置的上下文</td></tr></table>

# 调试器的其他用途

还有一些其他工作可以用到调试器。第一个是使用特殊的 set_trace 函数（以 pdb. set_trace 命名），这是一个“简装的断点”。还有两种可能派上用场的用法（可以像我一样，将其添加到 IPython 的配置文件中）：

from IPython. core. debugger import Pdbdef set_trace ():    Pdb (. set_trace (sys._getframe (). f_back)    def debug (f, *args, **kwargs):        pdb = Pdb ()        return pdb.runcall (f, *args, **kwargs)

第一个函数 set_trace 可以方便地在代码中的任意位置添加断点。你可以在暂时想停下来的任意代码块中使用 set_trace，以仔细检查代码（比如，在代码发生异常之前的位置）：

run examples/ipython_bug. py> /home/wesm/code/pydata- book/examples/ipython_bug.py (16) calling_things ()    15 set_trace ()    ...> 16 throws_an_exception ()    17

按 c（继续）键可以让代码继续正常执行。

函数 debug 可以让你方便地在调用任何函数时启动交互式调试器。假设我们编写了如下函数，并想逐步分析它的逻辑：

def  $f (x, y, z = 1)$  tmp  $= x + y$  return tmp / z

函数 f 的一般使用形式是 f（1，2，  $z = 3$  ）。而要想进入 f，需要将 f 作为第一个参数传递给 debug，再将原本递给 f 的位置和关键字参数传递给 debug：

debug (f, 1, 2, z=3)  > <ipython- input>(2) f ()  1 def f (x, y, z):  - - - - > 2 tmp = x + y  3 return tmp / z

ipdb>

多年以来，这两个用法为我节省了大量时间。

最后，可以将调试器和%run 结合使用。通过%run- d 运行脚本，就可以直接进入调试器，并可以随意设置断点并启动脚本：

%run - d examples/ipython_bug. py  Breakpoint 1 at /home/wesm/code/pydata- book/examples/ipython_bug. py: 1  NOTE: Enter 'c' at the ipdb> prompt to start your script.  > <string>(1)<module>()  ipdb>

添加- b 和行号，就能启动已经设置好断点的调试器：

%run - d - b 2 examples/ipython_bug. py  Breakpoint 1 at /home/wesm/code/pydata- book/examples/ipython_bug. py: 2  NOTE: Enter 'c' at the ipdb> prompt to start your script.  > <string>(1)<module>()  ipdb> c  > /home/wesm/code/pydata- book/examples/ipython_bug.py (2) works_fine ()  1 def works_fine ():  1 - - - - > 2 a = 5  3 b = 6  ipdb>

# B.5.2 代码计时：%time 和%timeit

对于大型和长时间运行的数据分析应用，你可能希望测量各个组件、单条语句、函数调用的执行时间。在复杂进程中，你可能想知道哪个函数花费的时间最长。幸运的是，IPython 可以让你在开发和测试代码时，很容易地获得这些信息。

因为必须要编写无趣又模板化的代码，所以手动用 time 模块及其函数 time. clock、time. time 给代码计时，通常既单调又重复：

import time start  $=$  time.time () for i in range（iterations): #需要运行的代码 elapsed_per  $=$  （time. time（）- start）/iterations

这是一个很常规的操作，IPython 专门提供了两个魔术函数%time 和%timeit，可以自动化计时。

%time 会将语句运行一遍，报告总的执行时间。假设我们有一个很大的字符串列表，想比较所有以特定前缀开头的字符串的不同方法。下面是一个包含 600000 个字符串的列表，以及两个用于选出以'foo'开头的字符串的方法：

一个很大的字符串列表 strings = ['foo', 'foobar', 'baz', 'qux', 'python', 'Guido Van Rossum'] * 100000 method 1 = [x for x in strings if x.startswith ('foo')]method 2 = [x for x in strings if x[: 3] == 'foo']

它们的性能看起来应该差不多，但事实呢？我们用%time 进行验证：

%time method 1 = [x for x in strings if x.startswith ('foo')]CPU times: user 52.5 ms, sys: 0 ns, total: 52.5 msWall time: 52.1 ms

%time method 2 = [x for x in strings if x[: 3] == 'foo']CPU times: user 65.3 ms, sys: 0 ns, total: 65.3 msWall time: 64.8 ms

这里主要关注 Wall time（“壁钟时间”的简写）。根据计时信息，我们能断定这两个方法确实存在性能差异，但这种测量并不准确。如果用%time 对这两个方法多次计时，你会发现结果是波动的。要想让计时更准确，可以使用魔术函数%timeit。对于任意语句，它能多次运行这条语句，以得到更准确的平均时间（每个人的系统不同，结果也会不同）：

%timeit [x for x in strings if x.startswith ('foo')]10 loops, best of 3: 159 ms per loop

%timeit [x for x in strings if x[: 3] == 'foo']10 loops, best of 3: 59.3 ms per loop

这个看似普通的例子表明，了解 Python 标准库、NumPy、pandas 和本书中用到的其他库的性能特性是很有价值的。在大型数据分析任务中，这些毫秒级的时间差距就会积少成多！

%timeit 特别适合分析执行时间极短（即使是微秒或纳秒）的语句和函数。这些时间可能看起来毫不重要，但是一个 20 微秒的函数执行 100 万次就比一个 5 微秒的函数长 15 秒。在上一个例子中，我们可以直接比较这两个字符串操作，以明确它们的性能差异：

x = 'foobar'  y = 'foo'  %timeit x.startswith (y)  1000000 loops, best of 3: 267 ns per loop  %timeit x[: 3] == y  10000000 loops, best of 3: 147 ns per loop

# B.5.3 基础分析：%prun 和%run-p

代码分析与代码计时关系很紧密，但前者关注的是时间开销的位置。Python 主要的分析工具是 cProfile 模块，它并不局限于 IPython。cProfile 会执行一段程序或任意代码块，执行的同时会跟踪每个函数执行的时间。

cProfile 的通常用法是在命令行中运行一整段程序，并输出每个函数的累计时间。假设我们有一个在循环中进行线性代数运算的脚本（计算一系列 100×100 矩阵的最大绝对特征值）：

import numpy as np from numpy. linalg import eigvals def run_experiment (niter  $= 100$  一  $\texttt{K} = 100$  results  $\equiv$  [] for _ in range (niter): mat  $=$  np. random. standard_normal ((K, K)) max_eigenvalue  $=$  np.abs (eigvals (mat)). max () results.append (max_eigenvalue) return results some_results  $=$  run_experiment () print ('Largest one we saw: {0}'.format (np.max (some_results)))

你可以在命令行中使用 cProfile 运行这个脚本：

python - m cProfile cprof_example. py

试运行之后，你会发现输出是按函数名排序的。这样不容易看出哪个函数耗费时间最多，最好用标志- s 指定排序：

$ python - m cProfile - s cumulative cprof_example. py  Largest one we saw: 11.923204422  15116 function calls (14927 primitive calls) in 0.720 seconds

Ordered by: cumulative time

ncalls tottime percall cumtime percall filename: lineno (function) 1 0.001 0.001 0.721 0.721 cprof_example.py: 1 (<module>) 100 0.003 0.000 0.586 0.006 linalg.py: 702 (eigvals) 200 0.572 0.003 0.572 0.003 {numpy. linalg. lapack_lite. dgeev} 1 0.002 0.002 0.075 0.075 init_. py: 106 (<module>) 100 0.059 0.001 0.059 0.001 {method 'randn') 1 0.000 0.000 0.044 0.044 add_newdocs.py: 9 (<module>) 2 0.001 0.001 0.037 0.019 init_. py: 1 (<module>) 2 0.003 0.002 0.030 0.015 init_. py: 2 (<module>) 1 0.000 0.000 0.030 0.030 type_check.py: 3 (<module>) 1 0.001 0.001 0.021 0.021 init_. py: 15 (<module>) 1 0.013 0.013 0.013 0.013 numeric.py: 1 (<module>) 1 0.000 0.000 0.009 0.009 init_. py: 6 (<module>) 1 0.001 0.001 0.008 0.008 init_. py: 45 (<module>) 262 0.005 0.000 0.007 0.000 function_base.py: 3178 (add_newdoc) 100 0.003 0.000 0.005 0.000 linalg.py: 162 (_assertFinite)

只显示前 15 行输出。扫描 cumtime 列，可以很容易看出每个函数花费了多少时间。注意，如果一个函数调用了其他函数，并不会停止计时。cProfile 会记录每个函数调用的起始时间和结束时间，并使用它们进行计时。

除了在命令行中使用，也可以在程序中使用 cProfile 来分析任意代码块，而无须运行新进程。IPython 有实现该功能的便捷接口，即%prun 命令和%run 的选项- p。%prun 采用与 cProfile 相同的命令行选项，可以分析任意 Python 语句，而非整个. py 文件：

%prun - l 7 - s cumulative run_experiment ()  4203 function calls in 0.643 seconds

Ordered by: cumulative time  List reduced from 32 to 7 due to restriction <7>

ncalls tottime percall cumtime percall filename: lineno (function) 1 0.000 0.000 0.643 0.643 <string>: 1 (<module>) 1 0.001 0.001 0.643 0.643 cprof_example.py: 4 (run experimenting) 100 0.003 0.000 0.583 0.006 linalg.py: 702 (eigvals) 200 0.569 0.003 0.569 0.003 {numpy. linalg. lapack_lite. dgeev} 100 0.058 0.001 0.058 0.001 {method 'randn'} 100 0.003 0.000 0.005 0.000 linalg.py: 162 (_assertFinite) 200 0.002 0.000 0.002 0.000 {method 'all' of 'numpy. ndarray'}

相似地，调用%run- p- s cumulative cprof_example. py 的作用和命令行方式相同，只是你不用离开 IPython。

在 Jupyter notebook 中，你可以使用魔术方法%%prun（两个%）来分析一整段代码。这会弹出一个带有分析输出的独立窗口。这便于快速回答一些问题，比如“为什么这段代码块运行了这么长时间？”

使用 IPython 或 Jupyter 时，还有另外一些工具可以让分析工作更易于理解。其中之一是 SnakeViz（https://github.com/jiffyclub/snakeviz/），它能使用 D 3. js 生成包含分析结果的交互式可视化界面。

# B.5.4 逐行分析函数

在有些场景下，用%prun（或其他基于 cProfile 的分析方法）得到的信息不能获得函数执行时间的整个过程，或者结果过于复杂。以至于按函数名聚合的结果难以解读。对于这种情况，可使用一个叫作 line_profiler 的小型库（可以通过 PyPI 或包管理工具获得）。它包含 IPython 扩展，可以启用一个新的魔术函数%lprun，能对一个函数或多个函数进行逐行分析。你可以通过修改 IPython 配置（查看 IPython 文档或本章后面的配置小节）加入下面这行，启用这个扩展：

IPython 扩展需要载人的模块名称列表c.InteractiveShellApp. extensions=['line_profiler']

你还可以运行如下命令：

%load_ext line_profiler

line_profiler 也可以在程序中使用（查看完整文档），但也许在 IPython 中使用它才是最有效的。假设你有一个模块 prof_mod，该模块包含以下进行 NumPy 数组运算的代码（如果你想复现这个示例，可以将代码存入一个新文件 prof_mod. py）：

from numpy. random import randn def add_and_sum (x, y): added  $= x + y$  summed  $=$  added.sum (axis  $= 1$  return summed def call_function ():  $\texttt{x} =$  randn (1000,1000)  $\texttt{y} =$  randn (1000,1000) return add_and_sum (x, y)

如果想了解函数 add_and_sum 的性能，%prun 可以给出如下结果：

%run prof_modx = randn (3000, 3000) y = randn (3000, 3000)

%prun add_and_sum (x, y) 4 function calls in 0.049 seconds Ordered by: internal time ncalls tottime percall cumtime percall filename: lineno (function) 1 0.036 0.036 0.046 0.046 prof_mod.py: 3 (add_and_sum) 1 0.009 0.009 0.009 0.009 [method 'sum' of 'numpy. ndarray'] 1 0.003 0.003 0.049 0.049 <string>: 1 (<module>)

这样的结果不太容易理解。激活 IPython line_profiler 扩展后，就能使用新命令%lprun 了。使用中的唯一不同点是我们必须告诉%lprun 分析哪个函数。通用语法如下所示：

%lprun - f func 1 - f func 2 statement_to_profile

我们想分析 add_and_sum，因此运行以下代码：

%lprun - f add_and_sum add_and_sum (x, y) Timer unit: 1 e- 06 s File: prof_mod. py Function: add_and_sum at line 3 Total time: 0.045936 s Line # Hits Time Per Hit % Time Line Contents 3 def add_and_sum (x, y): 4 1 36510 36510.0 79.5 added = x + y 5 1 9425 9425.0 20.5 summed = added.sum (axis=1) 6 1 1 1.0 0.0 return summed

这样的结果就容易解释了。在这个示例中，我们分析了和代码语句中一样的函数。查看之前的模块代码，我们可以调用并分析 call_function 以及 add_and_sum，从而全面了解代码的性能：

%lprun - f add_and_sum - f call_function call_function () Timer unit: 1 e- 06 s File: prof_mod. py Function: add_and_sum at line 3 Total time: 0.005526 s Line # Hits Time Per Hit % Time Line Contents 3 def add_and_sum (x, y): 4 1 4375 4375.0 79.2 added = x + y 5 1 1149 1149.0 20.8 summed = added.sum (axis=1) 6 1 2 2.0 0.0 return summed File: prof_mod. py Function: call_function at line 8

Total time: 0.121016 s

Line # Hits Time Per Hit % Time Line Contents

8 def call_function (): 9 1 57169 57169.0 47.2 x = randn (1000, 1000) 10 1 58304 58304.0 48.2 y = randn (1000, 1000) 11 1 5543 5543.0 4.6 return add_and_sum (x, y)

作为首要的准则，我倾向于使用%prun（cProfile）进行“宏观”分析，以及使用%lprun（line_profiler）进行“微观”分析。请熟练掌握这两个工具。

使用%lprun 时必须要指明函数名，这是因为“回溯”每行执行时间的开销很大。回溯无用的函数会显著地改变分析结果。

# B.6 使用 IPython 进行高效开发的技巧

方便快捷地进行开发、调试以及最终的使用，这是许多用户追求的编程范式。除了代码风格，代码重载等流程细节可能需要一些调整，此外还要考虑编码风格。

因此，本节介绍的大部分策略更像是艺术而不是科学，还需要你不断地尝试，以找到真正适合自己的编码方式。最终，你就能用方便快捷且乐于反复使用的编码方式来构建自己的代码，尽可能省时省力地探索程序或函数的结果。相比于仅用作独立命令行应用程序的代码，我发现用 IPython 设计的软件更易于使用。尤其是当发生错误时，你需要检查自己或别人代码中的错误，而这份代码是数月或数年前编写的。

# B.6.1 重载模块依赖项

在 Python 中，当你输入 import some_lib，就会执行 some_lib 中的代码，并且所有定义的变量、函数和导入都会存入新创建的 some_lib 模块命名空间中。当下一次使用 some_lib 时，就会得到对已存在的模块命名空间的引用。交互式 IPython 代码开发中的一个潜在问题，是当你运行一个依赖于另一个模块的脚本，而你对这个模块做过修改，就会导致问题。假设我在 rest_script. py 中有如下代码：

import some_lib  $\times = 5$ $y = [1,2,3,4]$  result  $=$  some_lib. get_answer (x, y)

由于可以在特定程序的许多不同位置导入模块或包，因此 Python 会在第一次导入模块时缓存模块的代码，而不是每次都执行模块中的代码。否则，模块化和良好的代码组织会导致应用程序效率低下。

如果你要执行%run test_script. py，然后修改了 some_lib. py，当你再次执行%run test_script. py，还是会得到旧版的 some_lib. py，这是因为 Python 模块系统采用了“一次加载”机制。这一点区别于其他数据分析环境，比如 MATLAB，它会自动传播代码修改。有多种方法解决这个问题。第一种是使用标准库中的 importlib 模块中的函数 reload：

import some_lib import importlib importlib. reload（some_lib）

你可以保证每次运行 test_script. py 时可以得到全新的 some_lib. py 副本（但在有些场景下没有副本）。很明显，如果依赖项更深，在各处都使用 reload 是非常麻烦的。对于这个问题，IPython 有一个特殊的函数 dreload（它不是魔术函数）用于模块的“深层”（递归）重载。如果我要运行 some_lib. py，接着使用 dreload（some_lib），它会尝试重载 some_lib 及其所有依赖。不过，这个方法不适用于所有场景，但比重启 IPython 强多了。

# B.6.2 代码设计技巧

代码设计不存在简单的对策，但是有一些原则很好用。

# 保持相关对象和数据活跃

为命令行编写如下示例中的程序并不罕见：

from my_functions import g def f (x, y): return  $g (x + y)$  def main ():  $x = 6$ $y = 7.5$  result  $= x + y$  if _name_  $= =$  main_ main ()

如果在 IPython 中运行该程序，你能发现可能出现的问题吗？代码运行之后，任何定义在 main 函数中的结果和对象都不能在 IPython 中访问到。更好的方法是将 main 中的代码直接在模块的全局命名空间中执行（如果你希望这个模块是可导入的，还可以放在 if_name_=='_main_：代码块中）。当你以这种方式运行代码时，就可以查看所有定义在 main 中的变量了。这等价于在 Jupyter notebook 的代码框中定义一个顶级变量。

# 扁平优于嵌套

深层嵌套的代码总让我联想到洋葱皮。当测试或调试函数时，你需要剥多少层洋葱皮才能到达目标代码呢？“扁平优于嵌套”是 Python 之禅的一部分，它也适用于交互式代码开发。尽量将函数和类解耦和模块化有利于进行交互式测试（如果你在编写单元测试）、调试和使用。

# 克服对长文件的恐惧

如果你之前接触过 Java（或者其他类似的语言），可能已经知道要让文件尽量简短。在多数语言中，这都是合理的建议，代码太长会让人觉得是坏代码，有必要对代码进行重构和重组。但是，在用 IPython 开发时，处理 10 个相关联的小文件（比如小于 100 行）比处理两个或三个长文件更让人头疼。更少的文件意味着重载模块更少，以及编写代码时在各文件间跳转更少。我发现维护大模块，每个模块都是高内聚的（所有代码都用于解决同类问题），会更实用且符合 Python 的风格。当然，经过方案迭代，有时会将大文件分解成小文件。

不过，我不建议极端化地实践这条建议，否则就是将所有代码放到一个单独的怪异文件中。为了组装大型代码库而寻找合理且直观的模块和包，往往需要不少工作，最好以团队合作的方式进行。每个模块都应该是内聚的，并且应该能直观地找到负责每个功能的函数和类。

# B.7 高阶 IPython 特性

要充分利用 IPython 系统，需要用另一种稍微不同的方式来编写代码或者深入研究 IPython 配置。

# 文件和配置

通过扩展配置系统，IPython 和 Jupyter 的大部分外观（颜色、提示符、行间距等）和特性都是可以配置的。通过配置，你可以做到：

·更改颜色主题。

·更改输入和输出提示符的外观，或删除 Out 之后、下一个 In 之前的空行。

·执行任意 Python 语句列表（例如，导入总是要使用的库或者每次启动 IPython 都要运行的内容）。

·始终启用 IPython 扩展，比如 line_profiler 中的魔术函数%lprun。

·启用 Jupyter 扩展。

·定义自己的魔术函数或系统别名。

IPython 的配置位于特殊的文件 ipython_config. py 中，它通常是在用户主路径的. ipython/文件夹中。配置是基于一个特殊文件 profile 执行的。当你正常启动 IPython，就会默认加载这个存储在 profile_default 路径下的默认文件。因此，在我的 Linux 系统中，IPython 默认配置文件的完整路径是：

/home/wesm/. ipython/profile_default/ipython_config. py

要在系统中初始化这个文件，需要在终端运行如下命令：

ipython profile create default

抱款我无法对该文件中的所有细节进行讲解。但这个文件有详细的注释，解释了每个配置选项的用途，所以就留给读者自行探索吧。另一个实用的功能是可以有多个配置文件。假设你想专门为特定应用或项目定制另一个 IPython 配置文件，可以创建新的配置文件：

ipython profile create secret_project

完成之后，在新创建的 profile_secret_project 路径下编辑配置文件，然后如下启动 IPython：

$ ipython - - profile=secret_project  Python 3.8.0 | packaged by conda- forge | (default, Nov 22 2019, 19:11:19)  Type 'copyright', 'credits' or 'license' for more information  IPython 7.22.0 - - An enhanced Interactive Python. Type '?'. for help.

IPython profile: secret_project

与之前一样，IPython 线上文档是学习配置文件和配置的优质资源。

配置 Jupyter 略有不同，因为在 notebook 中可以使用 Python 以外的编程语言。要创建类似的 Jupyter 配置文件，运行如下命令：

jupyter notebook - - generate- config

这样就在主路径的. jupyter/jupyter_notebook_config. py 创建了配置文件。按照需求编辑配置文件后，可以将其重命名为另一个文件：

$ mv ~/. jupyter/jupyter_notebook_config. py ~/. jupyter/my_custom_config. py

启动 Jupyter 时，可以添加参数- - config：

jupyter notebook - - config= ~/. jupyter/my_custom_config. py

# B.8 总结

通过学习书中的代码案例，想必你的 Python 技能得到了一定的提升，我建议读者持续学习 IPython 和 Jupyter 生态。因为这两个项目的设计初衷是辅助用户提高工作效率的，比起单纯使用 Python 语言及其计算库，你可能还会发现一些更利于工作的工具。

你可以在 nbviewer 网站（https://nbviewer.jupyter.org）上找到许多有趣的 Jupyter notebook。