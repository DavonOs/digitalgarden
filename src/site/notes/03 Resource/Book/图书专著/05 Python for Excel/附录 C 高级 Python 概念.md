---
{"dg-publish":true,"dg-permalink":"books/35799208/appendix-c","permalink":"/books/35799208/appendix-c/","metatags":{"description":"本章涉及了 pandas 中用于分析数据集的一些新的概念和工具。我们学习了如何读取 CSV 文件，如何处理缺失或重复的数据，如何利用描述性统计量，也见识到了将 DataFrame 转化为交互式图表有多简单。虽然你可能需要一些时间来消化这些知识，但是应该很快就能体会到 pandas 带来的强大力量。本章对 pandas 和 Excel 的 AutoFilter 功能、VLOOKUP 公式、数据透视表、PowerQuery 进行了对比。","og:site_name":"DavonOs","og:title":"Excel Python","og:type":"book","og:url":"https://zuji.eu.org/books/35799208/appendix-c","og:image":"https://file.ituring.com.cn/LargeCover/22038dc37469788a2ed5","og:image:width":"50","og:image:alt":"bookcover"},"created":"2025-09-24 14:59","updated":"2025-09-26 16:51"}
---

# C.1 类和对象

本节我们会编写自己的类，以便更好地理解类和对象之间的关系。类定义了一类新的对象：一个类就像是你用来烤蛋糕（比如巧克力蛋糕或者起司蛋糕）的模具。用模具（类）制作蛋糕（对象）的过程就叫作实例化。这就是为什么对象也被称为类实例（class instance）。无论是巧克力蛋糕还是起司蛋糕，它们都是一类（type）蛋糕：类（class）可以让你定义新的数据类型，这些类型将数据（属性）和函数（方法）放在了一起，因而可以帮助你架构和组织代码。现在回到第 3 章中赛车游戏的例子，定义我们自己的类：

In [1]: class Car: def _init_(self, color, speed=0): self. color  $=$  color self. speed  $=$  speed def accelerate (self, mph): self. speed  $+ =$  mph

这是一个简单的汽车类，其中包含了两个方法。方法是在类定义中定义的函数，该类有一个叫作 accelerate 的普通方法。该方法会更改类实例的数据（speed)。它还有一个叫作__init__的特殊方法，方法名首尾有两个下划线。当对象被实例化之后，Python 会调用这个方法为对象附加一些初始数据。每个方法的第一个参数表示的是类实例，依照惯例会

被命名为 self。在看到如何使用 Car 类之后，你就会明白其中的道理。我们首先来实例化两辆汽车。这个过程和调用函数是一样的：在类名后面加上圆括号以调用类，同时提供__init__方法的参数。你不需要为 self 提供实参，因为 Python 会负责这项工作。在本例中，self 分别是 car 1 和 car 2：

In[2]： #来实例化两个汽车对象car1  $=$  Car ("red") car 2  $=$  Car (color  $\equiv$  "blue")

当你调用一个类时，实际上调用的是__init__函数，这就是为什么所有对于函数参数有效的东西也可以应用到这里：对于 car 1，我们以位置参数形式提供实参，而对于 car 2，我们使用的是关键字参数形式。从 Car 类实例化两个汽车对象之后，来看一下它们的属性并调用其方法。我们会看到，在加速 car 1 之后，car 1 的速度会发生变化，car 2 则保持不变，原因是两个对象是相互独立的：

In[3]： #在默认情况下会打印出对象的内存位置car1Out [3]:<- _main_.Car at 0x7fea812e3890>In[4]： #通过属性可以访问对象的数据car1 . colorOut[4]: 'red'In[5]: car 1. speedOut[5]: 0 In[6]: #在car1上调用accelerate方法car1 . accelerate (20) In[7]: #car1的speed属性发生了改变car1 . speedOut[7]: 20 In[8]: #car2的speed属性保持不变car2 . speedOut[8]:0

Python 也允许直接修改属性而无须使用方法：

In[9]: car 1. color  $=$  "green" In[10]: car 1. color Out[10]：'green' In[11]: car 2. color #不变 Out[11]：'blue'

总结一下：类定义了对象的属性和方法。类将函数（“方法”）和数据（“属性”）组合到一起，从而使你可以方便地利用点语法访问：myobject. attribute 或 myobject. method ()。

# C.2 使用带时区的 datetime 对象

本书第 3 章简单介绍过不带时区的 datetime 对象。如果需要考虑时区，那么你通常都会在 UTC 时区下进行工作，只有在显示时间时才将其转换为当地时区。在使用 Excel 和 Python

时，你可能想要将 Excel 产生的不带时区的时间戳转换为带时区的 datetime 对象。对于 Python 中的时区支持，你可以使用 dateutil 包，虽然它不是标准库的一部分，但是已经在 Anaconda 中预装。下面的示例展示了在处理 datetime 和时区时的一些常见操作。

In [12]: import datetime as dt from dateutil import tz In[13]： #不带时区的datetime对象 timestamp  $=$  dt. datetime (2020,1,31,14,30) timestamp. isofomat () Out[13]: '2020- 01- 31 T14:30:00' In[14]： #带时区的datetime对象 timestamp_eastern  $=$  dt. datetime (2020,1,31,14,30, tzinfo  $\equiv$  tz. gettz ("US/Easterm")) #以isoformat格式打印可以 #更清楚地看出和UTC的差距 timestamp_eastern. isoformat () Out[14]：'2020- 01- 31 T14:30:00- 05:00' In[15]： #为不带时区的datetime对象赋予时区 timestamp_eastern  $=$  timestamp. replace (tzinfo  $\equiv$  tz. gettz ("US/Easterm")) timestamp_eastern. isoformat () Out[15]：'2020- 01- 31 T14:30:00- 05:00' In[16]： #转换时区 #由于UTC时区很常用 ， #因此可以简写为tz . UTC timestamp_utc  $=$  timestamp_eastern. estirezone (tz. UTC) timestamp_utc. isoformat () Out[16]：'2020- 01- 31 T19:30:00+00:00' In[17]： #带时区转换为不带时区 timestamp_eastern. replace (tzinfo=None) Out[17]: datetime. datetime (2020,1,31,14,30) In[18]： #不带时区的当前时间 dt. datetime. now () Out[18]: datetime. datetime (2021,1,3,11,18,37,172170) In[19]： #UTC时区中的当前时间 dt. datetime. now (tz. UTC) Out[19]: datetime. datetime (2021,1,3,10,18,37,176299, tzinfo=tzutc ())

# Python 3.9 中的时区处理

Python 3.9 通过 timezone 模块为标准库添加了对时区的完全支持。可以用它来代替 dateutil 的 tz. gettz 调用。

from zoneinfo import ZoneInfo timestamp_eastern  $=$  dt. datetime (2020,1,31,14,30, tzinfo  $\equiv$  ZoneInfo ("US/Easterm"))

# C.3 可变和不可变的 Python 对象

在 Python 中，可以修改其值的对象称为可变的（mutable），而不能修改的就称为不可变的（immutable）。表 C- 1 展示了各个数据类型属于哪一类。

表 C-1：可变和不可变的数据类型  

<table><tr><td>可变性</td><td>数据类型</td></tr><tr><td>可变</td><td>列表、字典、集合</td></tr><tr><td>不可变</td><td>整数、浮点数、布尔值、字符串、日期时间、元组</td></tr></table>

了解两者之间的差别是很重要的，因为可变对象可能和你在其他语言（包括 VBA）中习以为常的东西有不一样的行为。来看看下面这段 VBA 代码：

Dim a As Variant, b As Variant  $\texttt{a} =$  Array (1,2,3)  $\texttt{b} = \texttt{a}$ $a (1) = 22$  Debug. Print a (0)&"，"&a (1)&"，"&a (2) Debug. Print b (0)&"，"&b (1)&"，"&b (2)

上述代码打印出了如下内容：

1,22,3 1,2,3

现在在 Python 中用列表完成同样的操作：

In[20]:a=[1,2,3]  $\mathtt{b} = \mathtt{a}$ $\mathsf{a}[1] = 22$  print (a) print (b) [1,22,3] [1,22,3]

这里发生了什么？在 Python 中，变量是你“赋予”对象的名称。  $\texttt{b} = \texttt{a}$  将两个名称赋予了同一个对象，即 list[1，2，3]。因此所有指向该对象的变量都会体现出列表的变化。不过这只对可变对象有用：如果你将列表替换成不可变对象，比如元组，那么修改 a 并不会影响 b。如果想让可变对象 b 不受 a 的改变的影响，则必须显式地复制列表：

In[21]:a=[1,2,3]  $\texttt{b} = \texttt{a}$  .copy () In[22]: a Out[22]:[1,2,3] In[23]: b Out[23]:[1,2,3]

In[24]: a[1]  $= 22$  #修改aIn [25]: aOut[25]:[1，22，3]In[26]:b#. 不影响 bOut[26]:[1，2，3]

列表的 copy 方法创建的是一份浅复制（shallowcopy）：你确实会得到一份列表的副本，但是如果列表中包含可变元素，那么这些元素仍然是共享的。如果你想递归复制所有的元素，则需要利用标准库中的 copy 模块来进行深复制（deepcopy）：

In[27]: import copy  $\texttt{b} =$  copy. deepcopy (a)

下面来看看当你使用可变对象作为函数参数时会发生什么。

# C.3.1 以可变对象为参数调用函数

如果你是从 VBA 转到 Python 的，那么可能已经习惯于将函数参数标记为按引用传递 (ByRef）或按值传递（ByVal）：当你将一个变量作为参数传递给函数时，函数要么拥有改变这个变量的能力 (ByRef)，要么就是在处理值的副本（ByVal)，因此原变量不会发生变化。VBA 中默认按引用传递参数（ByRef)。考虑如下 VBA 函数：

Function increment (ByRef x As Integer） As Integer  $\texttt{x} = \texttt{x} +\texttt{1}$  increment  $= x$  End Function

然后像下面这样调用这个函数：

Sub call_increment () Dim a As Integer  $\texttt{a} = 1$  Debug. Print increment (a) Debug. Print a End Sub

上述代码会打印如下内容：

2 2

然而，如果你将 increment 函数中的 ByRef 改成 ByVal，则会打印出如下内容：

2 1

那么在 Python 中又是怎样呢？当你把变量四处传递时，实际上传递的是指向对象的名

称。也就是说，具体行为取决于对象是可变的还是不可变的。先使用一个不可变对象来进行测试：

In [28]: def increment (x):  $\texttt{x} = \texttt{x} +\texttt{1}$  return x In [29]: a = 1 print (increment (a)) print (a) 2 1

然后使用可变对象重复上面的例子：

In [28]: def increment (x):  $\times [0] = \times [0] + 1$  return x In [29]: a = [1] print (increment (a)) print (a) [2] [2]

如果对象是可变的，而你想要原对象保持不变，那么就需要传递对象的副本：

In [32]: a = [1] print (increment (a.copy ())) print (a) [2] [1]

还有一种情况值得注意，那就是定义函数时默认参数中对可变对象的使用。下面来看看为什么值得注意。

# C.3.2 使用可变对象作为默认参数的函数

在编写函数时，一般来说不应该使用可变对象作为默认参数。这是因为默认参数的值是函数定义的一部分，它只会被求值一次，而不会在每次调用函数时求值。因此，使用可变对象作为默认参数会导致出人意料的行为：

In [33]: # 不要这么做：def add_one (x=[]): x.append (1) return x In [34]: add_one () Out[34]: [1] In [35]: add_one () Out[35]: [1, 1]

如果你想将空列表作为默认参数，则应该像下面这样做。

In [36]: def add_one (x=None):    if x is None:        x = []        x.append (1)    return xIn [37]: add_one () Out[37]: [1]In [38]: add_one () Out[38]: [1]