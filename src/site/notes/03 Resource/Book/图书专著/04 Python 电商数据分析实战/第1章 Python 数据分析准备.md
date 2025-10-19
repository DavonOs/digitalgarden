---
{"dg-publish":true,"dg-permalink":"books/36667204/01","permalink":"/books/36667204/01/","metatags":{"description":"围绕 Python 数据分析相关的基础知识展开，主要回答什么是数据分析、选择 Python 的原因、Pandas 和 Python 的关系、学习 Pandas 需要避免的误区、如何高效学习 Pandas 以及 Python 数据分析环境搭建等入门阶段的重要问题。","og:site_name":"DavonOs","og:title":"第1章 Python 数据分析准备","og:type":"article","og:url":"https://zuji.eu.org/books/36667204/01","og:image":"https://www.manongbook.com/d/file/python/443a2b6d4941d5d585d6de383da2155d0.jpg","og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"tags":["program/python"],"dgShowInlineTitle":true,"created":"2025-09-04 11:17","updated":"2025-09-22 08:25"}
---


> [!summary]+ 本章小结
> 数据分析流程分为 6 个阶段，分别是明确分析目标、数据获取、数据清洗、数据分析、结论输出和追踪验证。Python 凭借其丰富而强大的库和便捷、灵活的特性，成为数据分析领域的热门语言，而 Pandas 则是 Python 数据分析领域的“超级跑车”。
> 
> 初学者在学习 Pandas 时很容易陷入细节而迷失方向，依据二八法则，花 20% 的时间明确学习目标和常用场景，再花 80% 的时间把目标场景相关的核心操作反复练习，能够让 Pandas 的学习事半功倍。
> 
> Pandas 的学习可遵循有数可用、认识数据、操作数据以及高效灵活地处理数据这一主线，再结合实战案例，不断巩固和强化知识。
> 
> Anaconda 为我们免去了 Python 环境的配置问题，其配套的 Jupyter Notebook 则是编写和运行代码的“主战场”。
## 1.1 Python 数据分析基础

什么是数据分析？
做数据分析为什么选 Python？
Pandas 之于 Python 意味着什么？

### 数据分析的基本概念

数据分析是指通过工具处理和分析，从数据中得到有价值的洞察，给出建议并持续追踪的过程。整个过程可以分为 6 个阶段：

1. 明确分析目标
在展开分析之前，明确分析目标非常重要，甚至决定了分析的整体走向。最原始的需求方是谁？想解决什么问题？他描述的需求能否解决本质问题？如果不能，需求应该做怎样的调整？只有先和需求方多沟通，用一系列灵魂拷问找到最本质的分析目标，才能让分析有的放矢。

2. 数据获取
从内外部获取数据，内部可以直接从数据库或留存的文件中获取，外部一般依赖于爬虫或付费购买。

3. 数据清洗
原始数据经常会有各种问题，例如存在缺失值、重复值、格式错误、极端异常值等。我们需要清洗数据来解决这些问题，保证数据的“干净整洁”。

4. 数据分析
利用合适的工具对数据做进一步处理和分析，包括建立模型、进行描述性分析、进行探索性分析等。需要注意的是，一切分析都要始终围绕分析目标进行。

5. 结论输出
整理并汇总上一步数据分析的结果，用可视化的方式来呈现，并提炼出最关键的结论和建议。在结论输出的过程中，和需求方多轮沟通，适当引入业务的视角，避免就数论数。

6. 追踪验证
给出建议并不是最后一步，数据分析师需要追踪建议的执行结果。建议被采纳了多少？执行效果具体怎样？有哪些经验或者问题可以总结？在复盘中验证和进步。

基于数据分析，我们可以量化决策、诊断现状、挖掘原因、预测未来，真正做到点“数”成金。

### 为什么选 Python

很多读者在学习数据分析的过程中，都纠结过“到底应该学什么数据分析工具”这个问题。市面上数据处理、分析、可视化相关的工具非常多，比如 Excel、R 语言、SQL 和 Python 等。这些工具各有各的优势和应用场景，而 Python 凭借极其丰富的、导入即用的数据分析库以及极强的拓展性，成为数据分析领域非常流行的工具之一。

基于 Python，我们可以爬取数据，可以根据需求轻松地对大量数据进行处理和分析，可以绘制炫酷的图表，还可以把分析好的数据结果做成报表并自动用邮件发送给相关的同事，功能强大又便利。

### Pandas 和 Python 的关系

Python 的强大之处在于非常灵活，而且有丰富的工具包（Python 中常叫作库）。做个类比，如果把 Python 当作一种万能的材料，有大神已经用 Python 打造出很多工具，例如汽车、空调、电脑。当我们要开车的时候，不用再花时间了解汽车的构造与组装原理，更不用自己重新制造汽车，只需要明确目的地，启动后控制好方向盘、油门和制动系统就好。

Pandas 就是基于 Python 打造的专门用来做数据处理和分析的“超级跑车”，它把数据处理的底层原理和复杂的实现过程已经封装好了，我们导入直接调用就好。所以，Pandas 学习的重点在于掌握驾驶这辆“跑车”的核心技术。



## 1.3 Python 所需的环境搭建

Python 的使用需要配置对应的环境，本节将介绍 Python 环境的选择和相关环境的安装、配置。已经配置好 Python 编程环境的读者可以直接跳过本节。

### Python 环境的选择

对于刚上手的新手来说，Python 的安装、环境配置和各种库的安装烦琐且容易出错。在这种情况下，Anaconda 是个不错的选择。它是一个 Python 的集成环境管理器，包含大部分数据分析中常用的库，如 NumPy、Pandas、scikit-learn 等。

简单地说，我们要用 Python 来做数据分析，Anaconda 就是一个贴心的管家，它已经准备好了绝大多数的东西，我们可以一键安装，直接“拎包入住”。

### Anaconda 的下载和安装

1. 下载

Anaconda 是开源的，可以直接从[官网](https://www.anaconda.com)下载。在如图 1-1 所示的界面中选择合适的操作系统。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/26807a7f32cf71bab63968971580f6c5236417a84a7ca1e12fe6e03b41453922.jpg)  
图 1-1 Anaconda 官网下载页面

跳转之后，根据自己的操作系统和版本选择对应的地址，写作本书时默认是适配 Python 3.9 的版本，单击之后会自动开始下载。

2. 安装

下载好了之后，双击打开安装包，先后单击 Next 和 I Agree 按钮，如图 1- 2 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/e563add263d0b655511db7e259c6b284718a0c42aa84523ef3cf2239cb1300d4.jpg)  
图 1-2 初始安装选择

在安装页面可以默认选择 All Users 选项，如图 1- 3 所示。因为我们一般都是用自己的计算机，所以选择 Just Me 还是 All Users 差别不大。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/da53a294b37b907722628932722500cba0009a3ab6d9962835d8ab511fb7e4fc.jpg)  
图 1-3 安装用户选择

接下来一步的选择比较重要，我们只勾选下面的那个选项，上面的不勾选，如图 1-4 所示，否则可能会出现问题。

等待安装完毕，中间几步操作单击 Next 按钮即可。

最后有两个关于帮助和资源的选项（实际没什么用），不选，然后单击 Finish 按钮，如图 1- 5 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/433042797c7e3bda7ff95e616ea2335e4c30914aaec6564fc6d2a00bc0f5ad7e.jpg)  
图 1-4 安装的进阶选项

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/74bd212e493951a9e962189a585c49dbcdab7984f9ae64a4e0f869a4574f323d.jpg)  
图 1-5 安装完成页面的选择

### 运行代码

1. 什么是 Jupyter Notebook

安装 Anaconda 的时候，安装程序默认帮我们安装了 Jupyter Notebook。

Jupyter Notebook 是一个轻量级的程序（IDLE），它以网页的形式打开，让我们可以直接在网页中编写、导入及运行代码。它的交互性很强，分小模块运行代码可以马上在网页中反馈结果，非常方便。其轻便和易用的特点很好地契合了数据分析的使用场景，本书中所有的代码实践都是基于 Jupyter Notebook 进行的。

2. 启动 Jupyter Notebook

由于我们刚安装好 Anaconda，单击计算机左下角（这里以 Windows 10 为例），“最近添加”模块显示了 Anaconda 相关的内容，如图 1- 6 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/351702113e9c8cf367c65b36f6b33cfb93dd3b5ea229ec7554451c09c51b8723.jpg)  
图 1-6 Windows 10 的“最近添加”模块

也可以直接在搜索栏中搜索 Jupyter Notebook，打出前几个字母就会模糊匹配到，如图 1- 7 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/36718b88b7c29051132ff18740d0a455e729c105db949db523d40a075434d482.jpg)  
图 1-7 在 Windows 10 的搜索栏中搜索 Jupyter Notebook

单击 Jupyter Notebook 图标，正常情况下页面会自动跳转到如图 1- 8 所示的页面，中间还会弹出一个小黑框的后台程序，不要管它，将其最小化即可。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/ea900f7d966123b8865e6a68b6f54a09698d208cd62238c7ea92a173e363fe66.jpg)  
图 1-8 Jupyter Notebook 初始页面

3. 创建一个文件

Jupyter Notebook 的功能和技巧有很多，我按照最主要的路径带大家熟悉一下。

在实际操作中，我们会产生很多的代码和文档，因此第一步是创建文件夹，以方便对代码进行分类。Jupyter Notebook 中创建文件夹（Folder）的按钮在右上角，如图 1- 9 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/6802c4db3690ba26672491d5e3945d320a8a0c2cd553d05df8343e7aec59daff.jpg)  
图 1-9 在 Jupyter Notebook 中创建文件夹

文件夹默认是未命名的，可以在选中文件夹之后单击 Rename 按钮来重命名，如图 1- 10 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/1ff8f548f3512e248d927e4ed8e0d4f8d01219e30df8c7563270a3d8eccb329c.jpg)  
图 1-10 Jupyter Notebook 文件重命名

然后进入文件夹，创建一个 Python 文件，如图 1- 11 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/2c1de06255d0fd803d7fa6dcb536d85e692d089596da88ef45b9b64d1763529c.jpg)  
图 1-11 在 Jupyter Notebook 中创建 Python 文件

在打开 Python 文件的界面中有几个区域：最上面是文件名，单击即可重命名；中间是文件编辑区，不太常用，因为几乎都有对应的快捷操作来替代；下面的长条框就是我们编写和运行代码的“主战场”，如图 1- 12 所示。

4. 运行代码

我们可以在代码编辑区直接输入代码 `print（'Talk is cheap，show me the code'）`，然后按<kbd>Ctrl</kbd> + <kbd>Enter</kbd> 来运行代码，如图 1- 13 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/9eb41a6327e250194eb3db81e112312d88e2aca982aef9e24f981f880f788016.jpg)  
图 1-12 Jupyter Notebook 代码编辑页面

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/d2421b4b716420045f6327473c9bdb050144e4c83a11fa66bcf8b196c43638d0.jpg)  
图 1-13 运行代码的效果

代码成功运行并反馈打印结果。一般情况下，我们运行完一个小模块的代码之后，还会在新增的代码框中继续编写。如果我们编写完上面的代码，按  <kbd>Alt</kbd> + <kbd>Enter</kbd> 组合键来运行，则会在运行代码的同时新增代码框，方便后续代码的编写，如图 1- 14 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/05852177c33401fcd6f7b2a62e7874cd1ca0a1bbabeb650fafcf0efac8fc8332.jpg)  
图 1-14 运行代码的效果

5. 导入外部代码

除了自己编写代码，另一个常用的场景就是导入外部的代码。这本书所有的代码我已经整理并打包好了，大家可以通过前言中提供的方式直接下载。将下载后的代码导入 Jupyter Notebook 即可运行。

在 Jupyter Notebook 文件夹下，单击右上角的 Upload 按钮，如图 1- 15 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/c31ff55b6f1eb2fb4ec47d165483e3eee4951eba3fbdf650df2a62c1fed2380a.jpg)  
图 1-15 导入文件的入口

再选择对应的路径和代码文件，如图 1- 16 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/5d66c8ae84a50c0f2ae14184c993b30fa12df1acafe272aa081d687ffea33b7b.jpg)  
图 1-16 导入路径及文件选择

之后数据清洗. ipynb 文件被自动导入 Jupyter 中，此时只需单击“上传”按钮即可，如图 1- 17 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/9d1997336be93df12b4ab24bf6f2c78082d0d6305237771301032d73860761a0.jpg)  
图 1-17 最终上传选项

6. 快捷操作一览

Jupyter Notebook 的快捷操作分为命令模式和编辑模式两种。

当我们单击代码区块左边的区域，或者在编辑之后按<kbd>Esc</kbd>键时，区块左侧边框是蓝色的，代表命令模式，如图 1- 18 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/fcd66291c8550871491188bfc42ec29b02e3feb073c4aa614cba36e31913b3c5.jpg)  
图 1-18 命令模式效果

编辑模式则是我们单击区块编辑代码的模式，这时左侧边框呈现绿色，代码框里有光标闪烁，如图 1- 19 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/ea20f0326bff5c4832113fd3f8ac5c504cdeaeb43409a35ac1fa003f30dbb9b7.jpg)  
图 1-19 编辑模式效果

两种模式下的快捷键 Jupyter Notebook 已经整理好，分别如图 1- 20 和图 1- 21 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/2ba8f5e1cd3610edd8f0b787380b045329fdd007dcdfb391e3523be49cf28dc1.jpg)  
图 1-20 命令模式快捷键

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-04/4e9d3456-c4c4-446b-8bbe-de35fe55fbe4/fae99f998eeee8ac03834161395ebebe91a4dc6365a6dfd40394a6fae1127b1e.jpg)  
图 1-21 编辑模式快捷键

