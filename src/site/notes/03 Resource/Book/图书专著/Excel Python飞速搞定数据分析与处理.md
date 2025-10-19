---
{"dg-publish":true,"dg-permalink":"books/35799208","permalink":"/books/35799208/","title":"Excel Python","metatags":{"description":"xlwings创始人教你如何让Excel飞起来！* 告别烦琐公式和VBA代码* 办公人士零压力学Python* 流行Python库xlwings创始人亲授每当花上几小时手动更新Excel工作簿时，或者每当Excel工作簿因保存了太多数据而崩溃时，你都应该停下来，思考自己是否应该换个工作方式。本书将展示为什么在Excel中引入Python是明智之举——你将能够轻松突破Excel的瓶颈，避免人为错误，把更多宝贵的时间花在能产生更大价值的任务上。在微软运营的在线用户反馈论坛上，大量用户提出希望“将Python作为Excel的脚本语言”。相比Excel现有的VBA语言，Python究竟有何优势，又该如何发挥这些优势？开源Python库xlwings的诞生很好地回答了这些问题，它让Excel和Python珠联璧合。作为xlwings的创始人，本书作者将展示如何借用Python的力量，让Excel快得飞起来！费利克斯·朱姆斯坦（Felix Zumstein）是流行开源Python库xlwings的创始人。xlwings帮助Excel用户利用Python脚本将任务自动化，从而实现效率飞跃。费利克斯在工作中接触了大量Excel用户，这使他对Excel在各行各业中的使用瓶颈和解决思路拥有深刻的见解。","og:site_name":"DavonOs","og:title":"Excel Python","og:type":"book","og:url":"https://zuji.eu.org/books/35799208","og:image":"https://file.ituring.com.cn/LargeCover/22038dc37469788a2ed5","og:image:width":"50","og:image:alt":"bookcover"}}
---


<span><span></span></span><div class="book-info-container" style="display: flex; gap: 25px; align-items: flex-start;padding: 20px; border-radius: 12px;"><span></span><div class="cover-col" style="flex: 0 0 180px; position: relative;"><span></span><img src="https://file.ituring.com.cn/LargeCover/22038dc37469788a2ed5" style="width: 100%; border-radius: 6px;box-shadow: 0 8px 15px rgba(0,0,0,0.4);" alt="Excel Python"></div><div class="info-col" style="flex: 1; min-width: 0;"><span></span><div style="margin-bottom: 15px;"><span></span><h1 style="font-size: 1.8rem; font-weight: 800;margin: 0 0 5px 0;color: #e0e0e0;"><span></span><a href="https://book.douban.com/subject/35799208/" target="_blank" style="color: #4da6ff; text-decoration: none;border-bottom: 2px solid #4da6ff;"><span>Excel Python</span></a></h1><div style="font-size: 1.1rem;color: #a0a0a0;font-weight: 500;line-height: 1.4;margin-top: 0;"><span>飞速搞定数据分析与处理</span></div></div><div style="width: 100%;margin-top: 15px;display: flex;flex-direction: column;gap: 8px;"><span></span><div class="info-row" style="display: flex;align-items: flex-start;"><span></span><div style="width: 30%;color: #a0a0a0;font-weight: 500;font-size: 0.92em;"><span>✍️ 作者</span></div><div style="flex: 1;font-weight: 500;color: #e0e0e0;"><span>瑞士/Felix·Zumstein</span></div></div><div class="info-row" style="display: flex;align-items: flex-start;"><span></span><div style="width: 30%;color: #a0a0a0;font-weight: 500;font-size: 0.92em;"><span>📅 出版日期</span></div><div style="flex: 1;font-weight: 500;color: #e0e0e0;">2022-4-01</div></div><div class="info-row" style="display: flex;align-items: flex-start;"><span></span><div style="width: 30%;color: #a0a0a0;font-weight: 500;font-size: 0.92em;"><span>📄 页数</span></div><div style="flex: 1;font-weight: 500;color: #e0e0e0;"><span>280页</span></div></div><div class="info-row" style="display: flex;align-items: flex-start;"><span></span><div style="width: 30%;color: #a0a0a0;font-weight: 500;font-size: 0.92em;"><span>🔢 ISBN</span></div><div style="flex: 1;font-weight: 500;color: #e0e0e0;"><span>9787115586766</span></div></div><div class="info-row" style="display: flex;align-items: flex-start;"><span></span><div style="width: 30%;color: #a0a0a0;font-weight: 500;font-size: 0.92em;"><span>📚 分类</span></div><div style="flex: 1;font-weight: 500;color: #e0e0e0;"><span>①TP391.13 ②TP274  ③TP311.561</span></div></div><div class="info-row" style="display: flex;align-items: flex-start;"><span></span><div style="width: 30%;color: #a0a0a0;font-weight: 500;font-size: 0.92em;"><span>⭐ 评分</span></div><div style="flex: 1;font-weight: 500;color: #e0e0e0;"><span>7.7 ★★★☆☆</span></div></div></div></div></div>

Python for Excel


Python 和 Excel 的版本

本书内容基于 Python 3.8。在撰写本书时，这是最新版本的 Anaconda Python 发行版所用的版本。如果你想用更新版本的 Python，请参照[本书主页](https://xlwings.org/book)上的说明。不过，千万不要使用低于 3.8 的版本。如果有些东西在 Python 3.9 上不一样，我会适时指出。

本书还需要你使用比较新的 Excel 版本，在 Windows 中至少需要 Excel 2007，对于 macOS 则是 Excel 2016 以上的版本。



## 第一部分 Python 入门

在介绍本书要用到的工具之前，我们首先会看看为什么 Python 能成为 Excel 的好搭档。随后，第一部分会介绍 Anaconda Python 发行版、Visual Studio Code 和 Jupyter 笔记本。在这一部分中，我会教给你足够的 Python 知识，以便你掌握本书的剩余部分。

### [[03 Resource/Book/图书专著/05 Python for Excel/第1章 为什么要用 Python 为 Excel 编程\|第1章 为什么要用 Python 为 Excel 编程]]

每当工作表工具碰到瓶颈，Excel 用户就会开始质疑这些工具。当 Excel 工作簿保存了太多的数据和公式时，它们就会变得越来越慢甚至崩溃，这样的事屡见不鲜。不过在事态变得严重之前，或许应该先思考一下你的工作方式。比如你处理的是十分重要的工作簿——一旦发生错误便会造成经济损失或名誉损失；又或者你每天都要花上几小时来手动更新 Excel 工作簿。如果碰到上述情形，那么你就应该学习一下如何用一门编程语言来自动化这些操作。自动化能够避免人为错误的发生，并且能够让你把更多的时间花在更具生产力的任务上——而不是花大量时间把数据复制并粘贴到 Excel 工作表中。

在本章中，我会告诉你为什么把 Python 用到 Excel 上是明智之举，它和 Excel 内置的自动化语言 VBA 相比又有什么优势。在简要介绍 Excel 如何作为编程语言及其特殊性之后，我会指出 Python 究竟比 VBA 强在哪儿。不过，作为开场白，先来看看两位主角的背景故事吧。

作为两种计算机技术来说，Excel 和 Python 都有悠久的历史。微软在 1985 年发布了 Excel，不过令很多人吃惊的是，它当时只支持 Apple Macintosh。一直到 1987 年，Excel 2.0 才登上微软的 Windows 平台。不过微软并非表格软件市场的第一位玩家，VisiCorp 在 1979 年发布了 VisiCalc，随后 Lotus Software 在 1983 年发布了 Lotus 1- 2- 3。而且，Excel 也不是微软的第一款表格软件，1982 年微软推出了用于 MS- DOS 的表格软件 Multiplan，但没有 Windows 版本。

在 Excel 诞生 6 年后的 1991 年，Python 横空出世。但是直到被用于 Web 开发和系统管理的时候，Python 才成为一门热门语言。而那时，Excel 早已成为流行的表格软件。2005 年，

用于数组运算和线性代数的软件包 NumPy 发布，这使得 Python 逐渐成为科学计算的可选语言之一。NumPy 将过去的两个软件包合二为一，提高了科学计算相关项目的开发效率。如今 NumPy 成了无数科学计算软件包的基石，这其中就包括 pandas。pandas 于 2008 年面世，2010 年之后 Python 在数据科学和金融领域的广泛运用，很大程度上要归功于 pandas。多亏了 pandas，Python 和 R 才能成为处理数据科学任务（比如数据分析、统计和机器学习）时最常用的语言。

历史悠久并非 Python 和 Excel 的唯一共同点，还有一点就是，它们都是编程语言。你可能会有这样的疑问：Python 自然是编程语言，不过 Excel 怎么会是编程语言呢？且听我慢慢道来。

### [[03 Resource/Book/图书专著/05 Python for Excel/第2章 开发环境\|第2章 开发环境]]

你可能迫不及待想要学习 Python 的基础知识了，不过在此之前，需要对计算机进行相应的配置。如果是写 VBA 代码或者 Power Query，那么点开 Excel 然后打开 VBA 或者 Power Query 编辑器就可以了。不过对于 Python 来说，还要做些准备工作。

本章在开头会先安装好 Anaconda Python 发行版。除了安装 Python，Anaconda 还会安装 Anaconda Prompt 和 Jupyter 笔记本。它们是贯穿本书的两种关键工具。

Anaconda Prompt 是一种特殊的命令提示符（用 Windows 的话来说）或者终端（用 macOS 的话来说），我们可以通过它来运行 Python 脚本和一些本书中会用到的命令行工具。

Jupyter 笔记本让我们可以交互地处理数据、代码和图表，可以说它是 Excel 工作簿的强力竞争者。在体验了 Jupyter 笔记本之后，我们会安装一个强大的文本编辑器——Visual Studio Code（VS Code）。VS Code 内置了集成终端，用它来编写、执行和调试 Python 代码非常方便。图 2-1 总结了 Anaconda 和 VS Code 所包含的内容。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/f68d48f553cc81caa568a743c0433715b73133a4a5e2f4fcb4117ab06f31f67c.jpg)  
图 2-1：开发环境

本书是一本讲 Excel 的书，本章重点关注 Windows 和 macOS。不过第三部分（包括第三部分）之前的内容也可以在 Linux 中运行。下面先来安装 Anaconda。

### [[03 Resource/Book/图书专著/05 Python for Excel/第3章 Python入门\|第3章 Python入门]]

装好 Anaconda 和 Jupyter 笔记本之后，就算是准备好入门 Python 所需要的一切了。虽然本章只会讲基础知识，但是也包含了很多内容。如果你才刚开始编程，那么这部分内容需要慢慢消化。要是一开始有些东西理解不了，完全不用担心，一旦你在后续章节中实际运用了本章的知识，就会理解得更透彻。我会指出 Python 和 VBA 大相径庭的一些地方，从而让你可以平稳地从 VBA 过渡到 Python，并且能够察觉到那些明显的陷阱。如果没写过 VBA，你也可以直接跳过这些部分。

本章首先会介绍 Python 的基本数据类型，比如整型和字符串。然后会介绍 Python 的核心概念——索引和切片，使你可以访问一个序列的指定元素。接下来会讲到列表和字典等数据结构，它们可以保存多个对象。之后会介绍 Python 中的控制流：if 语句、for 循环和 while 循环。紧接着是函数和模块的相关知识，它们可以用来组织和架构你的代码。最后会展示应该如何正确格式化 Python 代码。你可能已经猜到了，本章内容充满了技术性。你可以在 Jupyter 笔记本中运行本章的示例代码，交互式的环境可以让学习过程更有趣一些。你也可以自己动手输入示例代码，或者直接运行本书配套代码库中的笔记本。


## 第二部分 pandas 入门

pandas 是值得信赖的 Python 数据分析库。我们会了解如何利用 Jupyter 笔记本和 pandas 来替代 Excel 工作簿。pandas 的代码通常更易于维护，并且效率比 Excel 工作簿更高。不仅如此，你还可以用它来操作一张工作表放不下的数据集。和 Excel 不同，pandas 让你的代码可以在任何环境中运行，包括云端。

### [[03 Resource/Book/图书专著/05 Python for Excel/第4章 NumPy基础\|第4章 NumPy基础]]

如第 1 章所述，NumPy 是 Python 科学计算的关键包，为数组运算和线性代数运算提供了支持。因为 pandas 是在 NumPy 之上建立起来的，所以本章会先介绍 NumPy 的基础知识。在解释了什么是 NumPy 数组之后，我们会学习向量化和广播这两个重要概念。利用向量化和广播，我们可以写出简洁的数学运算代码，并且它们在 pandas 中也有广泛运用。之后，我们会了解为什么 NumPy 会提供叫作“全局函数”的特殊函数。最后，通过解释 NumPy 视图和副本之间的区别，我们会学习如何存取 NumPy 数组的值。虽然本书几乎不会直接使用 NumPy，但是如果知道 NumPy 的基础知识，则在第 5 章学习 pandas 的时候会更加轻松。

### [[03 Resource/Book/图书专著/05 Python for Excel/第5章 使用 pandas 进行数据分析\|第5章 使用 pandas 进行数据分析]]

本章会向你介绍 pandas，即 Python 数据分析库（Python data analysis library），我更喜欢叫它“基于 Python 的超能力工作表”。pandas 可以让 Excel 中的老大难问题得到更方便、高效且稳健的解决。从外部数据源获取大型数据集、处理统计数据、时序和交互式图表等工作都属于 Excel 的痛点所在。pandas 最主要的超能力就是向量化和数据对齐。正如第 4 章所介绍的，NumPy 数组和向量化可以让你写出更简洁的数组运算代码，而数据对齐可以确保在你同时处理多个数据源时不会发生数据不匹配的问题。

本章是一场完整的数据分析之旅：首先会介绍如何清理和准备数据，然后你会了解到如何通过聚合、描述性统计量和可视化让大型数据集更易于理解。本章在结尾部分会介绍如何用 pandas 导入和导出数据。不过首先，让我们来了解一下 pandas 最主要的数据结构：DataFrame 和 Series。

### [[03 Resource/Book/图书专著/05 Python for Excel/第6章 使用 pandas 进行时序分析\|第6章 使用 pandas 进行时序分析]]

时序（time series）是时间轴上的一系列数据点，它们在很多场景中扮演着重要角色：交易员用历史股价计算风险；天气预报基于测量温度、湿度和气压的传感器生成的时序来预测天气；数字市场部依靠网页生成的时序（比如每小时访问量）来得出营销活动所需的结论。

时序分析方面的需求使得数据科学家和分析师开始寻找更优秀的技术来替代 Excel。他们的动机概括起来有以下几点：

- 大型数据集

时序的快速增长可能会使得数据量超过每张 Excel 数据表的容量上限——大约 1000000 行。如果要在报价数据层面上处理盘中股价，那么你通常需要处理成千上万条记录，因为每天、每只股票都会产生一条记录。

- 日期和时间

正如第 3 章所介绍的那样，Excel 在处理时序的基石，即日期和时间时有很多限制。举例来说，Excel 缺少对时区和毫秒时间格式的支持。而 pandas 支持时区，且使用了 NumPy 的 `datetime 64[ns]`数据类型，这种数据类型的时间精度可以精确到纳秒。

- 缺少功能

Excel 甚至缺少处理时序数据的基本工具，例如，将每日时序转换为每月时序本来是一项十分常见的工作，但是在 Excel 中并没有一种方便的方法来完成。

利用 DataFrame 可以处理多种基于时间的索引，DatetimeIndex 是最常见的一种，表示带有时间戳的索引。其他的索引类型，比如 PeriodIndex，是基于时间间隔（比如每小时、每月）的索引。本章只会研究 DatetimeIndex。

## 第三部分在 Excel 之外读写 Excel 文件

这一部分讲的是如何运用 Python 包来操作 Excel 文件，比如 pandas、OpenPyXL、XlsxWriter、pyxlsb、xlrd 和 xlwt。这些包能够代替 Excel 直接读写磁盘上的 Excel 工作簿，也就是说，你不需要实际安装 Excel 就能进行这些操作。这些包可以在任何支持 Python 的平台上工作，包括 Windows、macOS 和 Linux。

对于读取 Excel 文件的包来说，一个典型用例就是每天早上你用它读取从其他公司或者外部系统发来的 Excel 文件中的数据，然后将这些数据存储在数据库中。而对于写入 Excel 文件的包来说，你在各种应用程序中都能看到的“导出为 Excel 文件”按钮，背后就是它的功劳。

### [[03 Resource/Book/图书专著/05 Python for Excel/第7章 使用 pandas 操作 Excel 文件\|第7章 使用 pandas 操作 Excel 文件]]

前面 6 章花了大量篇幅来介绍各种工具、Python 和 pandas，现在稍事休息，接下来我们就要开始实践案例研究了。

在这个案例中你可以充分利用新学到的各种技能：只需要 10 行 pandas 代码，就可以将几十个 Excel 文件汇总成一份 Excel 报表，并且随时都可以发给你的主管。

在案例研究之后，我会对 pandas 提供的 Excel 工具进行更深入的介绍：读取 Excel 文件的 read_excel 函数和 ExcelFile 类；写入 Excel 文件的 to_excel 方法和 ExcelWriter 类。pandas 不依赖于 Excel 应用程序来读写 Excel 文件，也就是说本章所有示例代码能在任何支持 Python 的环境中运行，自然也就包括 Linux。

### [[03 Resource/Book/图书专著/05 Python for Excel/第8章 使用读写包操作 Excel 文件\|第8章 使用读写包操作 Excel 文件]]

本章会向你介绍 OpenPyXL、XlsxWriter、pyxlsh、xlrd 和 xlwt：它们都是可以用来读写 Excel 文件的包，在调用 pandas 的 read_excel 函数和 to_excel 函数时，这些包就在背后完成相应的工作。我们可以利用这些读写包来创建更加复杂的 Excel 报表，也可以对文件读取过程进行优化。另外，如果你参与的项目中只需要读写 Excel 文件而不需要 pandas 的其他功能，那么安装整个 NumPy/pandas 技术栈完全就是“杀鸡用牛刀”。

本章首先会介绍应当如何从诸多读写包中做出选择，其语法又是怎样的。然后再对一些高级主题进行研究，其中包括如何处理大型 Excel 文件，以及如何将 pandas 和各种读写包相结合以改进 DataFrame 的样式。最后会回到第 7 章开头的案例研究，通过调整表格的格式并添加图表来改进这份报表。和第 7 章一样，本章也不需要安装 Excel，也就意味着所有的示例代码在 Windows、macOS 和 Linux 中都可以工作。

## 第四部分 使用 xlwings 对 Excel 应用程序进行编程

在这一部分中，我们会看到如何使用 Python 和 xlwings 来自动化 Excel，而不是直接读写磁盘上的 Excel 文件。因此，这部分内容需要你在本地安装好 Excel。我们会学习如何打开 Excel 工作簿并实际操作它们。除了通过 Excel 读写文件，我们还会构建一些交互式 Excel 工具，从而可以一键让 Python 执行一些过去你通过 VBA 宏来完成的工作（比如运算量极大的计算）。另外，我们还将学习如何在 Python 中而不是在 VBA 中编写用户定义函数 (user-defined function, UDF)。

理解读写 Excel“文件”（第三部分）和对 Excel“应用程序”进行编程（第四部分）之间的基本区别非常重要。它们的关系如图 P-1 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/c5d8b20ae87beb6458d49721d3ca39dd0a7ec22f84a07227385bd254e0494a39.jpg)  
图 P-1：读写 Excel 文件（第三部分）和对 Excel 应用程序进行编程（第四部分）

学习第三部分无须安装 Excel，所有的程序都可以在支持 Python 的平台（主要是 Windows、macOS 和 Linux）上运行。不过由于第四部分中的程序依赖于本地安装的 Microsoft Excel，因此这些代码只能在支持 Microsoft Excel 的平台（Windows 和 macOS）上运行。

### [[03 Resource/Book/图书专著/05 Python for Excel/第9章 Excel 自动化\|第9章 Excel 自动化]]

到目前为止，我们已经学习了如何用 pandas 代替 Excel 处理典型的 Excel 任务（第二部分），也学习了如何使用 Excel 文件作为数据源和报表的文件格式（第三部分）。作为第四部分的第一章，本章不再通过读写包操作 Excel 文件，而是开始利用 xlwings 自动化 Excel 应用程序。

xlwings 的主要用途是构建以 Excel 工作表为用户界面的交互式应用程序，你可以通过点击按钮调用 Python 代码或用户定义函数，而这类功能是读写包无法提供的。不过这并不是说 xlwings 无法用来读写文件——只要你在 macOS 或者 Windows 中安装了 Excel 就行。xlwings 的一个优势是它能够真正地编辑各种格式的 Excel 文件，且不会修改或者丢失任何现有的内容或者格式；另一个优势是你可以从 Excel 工作簿中读取单元格的值而无须先保存这个工作簿。当再一次回到第 7 章的案例研究时，你会发现将 Excel 文件的读写包和 xlwings 相结合也是非常合理的。

在本章的开头，我会向你介绍 Excel 对象模型和 xlwings：首先学习一些基础知识，比如连接工作簿或者读写单元格的值，然后深入学习如何利用转换器和各种选项来处理 pandas DataFrame 和 NumPy 数组。你也会看到如何与图表、图片和自定义名称进行互动。最后，我会解释 xlwings 的工作原理，有了这些知识之后，你就知道如何才能让脚本更加好用以及如何处理一些缺少的功能。

### [[03 Resource/Book/图书专著/05 Python for Excel/第10章 Python 驱动的 Excel 工具\|第10章 Python 驱动的 Excel 工具]]

第 9 章介绍了如何编写脚本来自动化 Microsoft Excel。

虽然这些脚本很强大，但它们需要用户能够熟练使用 Anaconda Prompt 或者像 VS Code 这样的编辑器来运行脚本。如果你的工具是给商业用户使用的，那么这样的要求可能就不太现实。对于这样的用户，你会想要将 Python 隐藏起来，从而让这些 Excel 工具感觉像是普通的带有宏的工作簿那样，而如何使用 xlwings 达到这样的效果便是本章的主题。

本章首先会向你展示如何用最简单的方法在 Excel 中执行 Python 代码。然后会挑战一下部署 xlwings 工具，在这个过程中我们会对 xlwings 提供的各种选项有一个更细致的了解。

### [[03 Resource/Book/图书专著/05 Python for Excel/第11章 Python包追踪器\|第11章 Python包追踪器]]

本章会构建一个典型的商业应用程序，它可以从互联网上下载数据并存储到数据库中，然后再将数据在 Excel 中进行可视化。在此过程中你会认识到 xlwings 在这样的应用程序开发过程中扮演着怎样的角色，也能看到将 Python 连接至外部系统有多容易。在尝试构建一个十分接近真实情况且简单易懂的项目的过程中，我想到了 Python 包追踪器。这个 Excel 工具可以显示某个 Python 包每年发布的次数。虽然这只是一个案例研究，但是实际上你可能会发现这个工具可以用来了解一个 Python 包是否处于积极开发的状态。

在对这个应用程序有了一个大致的了解后，为了能够理解它的代码，首先需要研究如下问题：如何才能从互联网上下载数据以及如何与数据库交互。然后再学习 Python 中的异常处理。当我们涉足应用程序开发时，异常处理是一个很重要的概念。学完这些基础知识之后，我们会研究 Python 包追踪器的各个组件，了解它们是如何相互协作的。本章在最后会研究如何调试 xlwings 代码。和前两章一样，本章也需要在 Windows 或 macOS 中安装 MicrosoftExcel。首先来试用一下 Python 包追踪器。
### [[03 Resource/Book/图书专著/05 Python for Excel/第12章 用户定义函数\|第12章 用户定义函数]]

前面 3 章展示了如何使用 Python 脚本自动化 Excel，以及如何在 Excel 中一键执行这样的脚本。

本章会介绍另一种利用 xlwings 在 Excel 中调用 Python 代码的方法，即用户定义函数（user-defined function，UDF）。UDF 是可以用在 Excel 单元格中的 Python 函数，就像使用内置的 SUM 函数和 AVERAGE 函数一样。

和第 11 章一样，我们首先从 quickstart 命令开始，尝试创建第一个 UDF。然后进入案例研究，学习如何从 Google Trends 上获取和处理数据，以便处理一些更复杂的 UDF：学习如何处理 pandas DataFrame 和图表，以及如何调试 UDF。最后本章会以性能优化为中心深入了解一些高级主题。不幸的是，xlwings 在 macOS 中不支持 UDF，所以本章需要你在 Windows 中运行示例代码。

macOS 和 Linux 用户须知

即使使用的不是 Windows，你可能也想看一下 Google Trends 的案例研究，因为你可以轻松地将在 macOS 中进行 RunPython 调用学到的知识运用起来。还可以使用第 8 章中的写入库来生成报表，这在 Linux 中也是可用的。

### [[03 Resource/Book/图书专著/05 Python for Excel/附录 A Conda 环境\|附录 A Conda 环境]]

本书第 2 章介绍过 Conda 环境。当时是这样解释 Anaconda Prompt 每行开头的（base）的：它表示当前活动的 Conda 环境，名称为 base。

Anaconda 总是需要你在一个被激活的环境中工作，不过当你启动 Windows 的 Anaconda Prompt 或者 macOS 中的终端时，base 环境会被自动激活。

在 Conda 环境中工作可以让你正确地隔离各个项目之间的依赖：如果想在不修改 base 环境的前提下尝试更新版本的包（如 pandas），那么可以创建一个单独的 Conda 环境。

本附录的第一部分会介绍创建 Conda 环境的流程。我们会创建一个叫作 x 138 的环境，然后在其中安装所有我在撰写本书时所用到的包，且版本和当时的最新版本一致。这样即使一些包已经发布了引入重大改变的新版本，你也可以直接运行本书中的所有示例代码。

本附录的第二部分会展示如果你不喜欢默认自动激活 base 环境的话，应该如何禁用该选项。
### [[03 Resource/Book/图书专著/05 Python for Excel/附录 B 高级 VS Code 功能\|附录 B 高级 VS Code 功能]]

展示 VS Code 中的调试器的工作方式以及如何直接在 VS Code 中运行 Jupyter 笔记本。这两个主题是相互独立的，可以以任意顺序阅读。

### [[03 Resource/Book/图书专著/05 Python for Excel/附录 C 高级 Python 概念\|附录 C 高级 Python 概念]]

本附录会更细致地研究以下 3 个主题：类和对象、带时区的 datetime 对象，以及可变与不可变对象。这些主题相互独立，可以以任意顺序阅读。



[补充材料（如代码、练习等）](https://github.com/fzumstein/python-for-excel)。