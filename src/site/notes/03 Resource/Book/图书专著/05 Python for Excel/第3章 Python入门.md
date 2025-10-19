---
{"dg-publish":true,"dg-permalink":"books/35799208/03","permalink":"/books/35799208/03/","metatags":{"description":"本章介绍了 Python 中大部分构造，包括数据结构、函数和模块；也了解了 Python 的一些特点，比如有特殊含义的空白；最后还介绍了称作 PEP8 的 Python 代码风格指南。作为初学者，只需知道列表，字典，索引，切片，以及如何使用函数、模块、for 循环和 if 语句，就足以完成很多工作了。和 VBA 相比，Python 有更强的一致性，既强大又易学。","og:site_name":"DavonOs","og:title":"Excel Python","og:type":"book","og:url":"https://zuji.eu.org/books/35799208/03","og:image":"https://file.ituring.com.cn/LargeCover/22038dc37469788a2ed5","og:image:width":"50","og:image:alt":"bookcover"},"created":"2025-09-24 13:25","updated":"2025-09-26 15:27"}
---

## 3.1 数据类型

和其他编程语言一样，Python 会区别对待数字、文本、布尔值等数据。Python 的做法是为它们赋予不同的数据类型（data type）。最常用的数据类型有整型、浮点型、布尔值和字符串。本节会通过一些例子对它们进行逐一介绍。要理解什么是数据类型，需要先解释一下什么是对象。

### 3.1.1 对象

在 Python 中，一切皆对象（object）。数字、字符串、函数，以及我们会在本章中见到的其他所有东西，它们都是对象。通过提供一系列变量和函数，对象可以让复杂的东西简单化。先来看看变量和函数。

#### 变量

在 Python 中，变量（variable）是通过等号给对象赋予的一个名字。下面的第一行代码中，对象 3 被赋予了 a 这个名字：

```python
a = 3
b = 4
a + b
>>> 
7
```

这种操作对于所有对象来说都一样有效，与 VBA 相比，它更简单。在 VBA 中，你需要对数字和字符串使用等号，而工作簿或者工作表对象需要使用 Set 语句。在 Python 中，可以通过给变量赋值一个新的对象来改变变量的类型。这种行为被称作动态类型：

```python
a = 1
print(a)
a = "one"
print(a)
>>> 
1
one
```

和 VBA 不同，Python 是区分大小写的，因此 a 和 A 是不同的变量。变量名必须遵守下列规则：

·必须以字母或下划线开头；
·只能由字母、数字和下划线组成。

简单介绍变量之后，来看看如何调用函数。

#### 函数

本章后面会更加详细地介绍函数。现在你只需知道如何调用内置的函数，比如前面的示例中用到的 print 函数。要调用一个函数，需要在函数名后跟上一对圆括号，并在圆括号中提供参数，和数学记法几乎一模一样：

function_name (argument 1, argument 2, ...)

现在来看看在对象的上下文中，变量和函数又是如何工作的。

#### 属性和方法

在谈到对象时，变量被称作**属性**（attribute），函数被称作**方法**（method）。你可以通过属性来访问对象的数据，而方法可以用来执行某种操作。你可以通过点号来访问属性和方法，比如 `myobject.attribute` 和 `myobject.method()`。

再说得具体一些。如果写一个赛车游戏，很可能需要表示车的对象。car 对象应该有一个 speed 属性，这样就可以通过 `car.speed` 来获取车辆的当前速度。或许还可以通过调用加速方法 `car.acc.accelerate(10)` 来让车辆加速，即让车速增加到每小时 10 英里。

对象的类型及其行为是由类（class）定义的，因此在前面的例子中，你可能需要编写一个 Car 类。从 Car 类构造 car 对象的过程叫作实例化（instantiation）。要实例化一个对象，需要像调用函数那样去调用类：`car = Car()`。在本书中，我们不会编写自己的类。如果你对编写类感兴趣，可以看看[[03 Resource/Book/图书专著/05 Python for Excel/附录 C 高级 Python 概念\|附录C]]。

在下一节中，我们会首次用到对象的方法。这个方法可以让字符串中的字符全部大写。本章在结尾部分会再次谈到对象和类，讲一讲有关 datetime 对象的内容。不过现在先来研究一下保存数值数据的对象。

# 3.1.2 数值类型

int 和 float 分别表示整数（integer）和浮点数（floating- point number）。通过内置的 type 函数可以获得指定对象的类型：

```
In[3]: type(4)
Out[3]: int
In[4]: type(4.4)
Out[4]: float
```

如果你想强制让一个数字成为 float 类型而不是 int 类型，可以在后面加一个小数点，或者使用 float 构造器：

```
In[5]: type(4.)
Out[5]: float
In[6]: float(4)
Out[6]: 4.0
```

上面的例子对于整型也是一样的，int 构造器可以将一个 float 值转换为 int。如果小数部分不为零，那么转换时会直接舍去。

```
In[7]: int(4.9)
Out[7]: 4
```

> Excel 单元格永远保存的是浮点数
> 当你从 Excel 单元格读取数字的时候，可能需要先把 float 转换为 int，然后才能把它传给一个需要整型参数的函数。原因是即使 Excel 显示的是整数，但在背后它总是以浮点数形式存储。

Python 中还有一些本书不会涉及的数值类型，即 decimal、fraction 和 complex。如果浮点型的精度不够，可以使用 decimal 类型以获得精确结果。不过这种情况很少见。简而言之，如果 Excel 的精度都够用，那么使用 float 就行了。

浮点数的精度

在默认情况下，Excel 在单元格中显示的是取整之后的数字。如果在单元格中输入 `=1.125-1.1`，那么你得到的结果是 0.025。可能这正是你想要的结果，但在 Excel 内部，实际情况并非如此。如果你把格式改成至少 16 位小数，它就会变成 0.02499999999999999999999999999 中，它只会对 0 和 1 进行运算。像 0.1 这样的小数并不能以有限二进制浮点数的形式存储，这也就造成了前面例子中的问题。在 Python 中，你同样会遇到这种问题，但是 Python 不会把它隐藏起来。

```
In[8]: 1.125 - 1.1
Out[8]: 0.024999999999999991
```

# 算术运算符

对数字进行运算需要用到像加号和减号这类算术运算符。除了求幂运算符，其他运算符都和 Excel 是类似的。

```
In[9]: 3- 4 #加 Out[9]: 7 In[10]: 3- 4 #减 Out[10]:- 1 In[11]: 3/4 #除 Out[11]: 0.75 In[12]: 3\*4 #乘 Out[12]: 12 In[13]: 3\*4 #求幂 （Excel 用的是  $3\wedge 4$  的形式） Out[13]: 81 In[14]: 3\*  $(3 + 4)$  #使用圆括号 Out[14]:21
```

# 注释

在前面的例子中，我在注释（如 #加 ）中简单描述了示例中的运算。注释（comment）可以帮助他人以及写下代码几周后的你自己理解这段代码是什么意思。在注释时，应当只注释那些光凭阅读代码无法理解其意图的部分。如果不确定该不该写注释，那么比起留下一些不合时宜且和代码相互矛盾的注释，还不如不写。在 Python 中，任何以井号（#）开头的内容都会被视作注释，在运行时会被解释器忽略：

In[15]： #这是一个之前看过的例子 #每段注释都以 #开头 $3 + 4$  Out[15]: 7 In[16]:  $3 + 4$  #这是一段行内注释Out [16]:7

大部分编辑器有注释/取消注释的快捷键。在 Jupyter 笔记本和 VSCode 中，对应的快捷键是 Ctrl+/(Windows 系统）和 Command- /（macOS 系统）。注意，Jupyter 笔记本中的 Markdown 单元格不接受注释。如果一行以 #开头 ，则 Markdown 会将其解释为标题。

了解了整型和浮点型之后，接下来学习布尔值。

# 3.1.3 布尔值

在 Python 中，布尔类型只有 True 和 False 两种取值，这和 VBA 是一样的。和 VBA 不一样的是，Python 中的布尔运算符 and、or 和 not 全是小写形式。除了相等和不等运算符，布尔表达式的行为和 Excel 中的类似：

In[17]:  $3 = = 4$  #相等 （Excel 中是  $3 = 4$  Out[17]: FalseIn[18]:  $3! = 4$  #不相等 （Excel 中是  $3< >4$  Out[18]: TrueIn[19]:  $3< 4$  #小于 ，用>表示大于 Out[19]: TrueIn[20]:  $3< = 4$  #小于等于 ，用  $> =$  表示大于等于 Out[20]: TrueIn[21]: #可以把逻辑表达式串联起来 ， #等价于VBA中的  $10< 12$  和  $12< 17$  #以及Excel公式中的  $= \mathrm{AND}(10< 12,12< 17)$ $10< 12< 17$  Out[21]: TrueIn[22]:notTrue#“非”运算符 Out[22]: FalseIn[23]: False and True#“与”运算符 Out[23]: FalseIn[24]: False or True#“或”运算符 Out[24]:True

每个 Python 对象都可以被视作 True 或 False。大部分的对象会被视作 True，但 None（参见“None”）、False、0 或空数据类型[比如空字符串（下一节中会讲到字符串）]会被视作 False。

# None

None 是一个内置的常量，按照官方文档的说法，它代表“没有值”（the absence of a value）。如果一个函数没有显式地返回值，那么它实际上返回的就是 None。在第三部分和第四部分中我们会看到，None 可以用来表示 Excel 中的空单元格。

以防万一，可以用 bool 构造器来检查一个对象是 True 还是 False：

In[25]: bool (2) Out[25]: True In[26]: bool (0) Out[26]: False In[27]: bool ("some text") #稍后会讲到字符串 Out[27]: True In[28]: bool ("") Out[28]: False In[29]: bool (None) Out[29]:False

学了布尔类型之后，就剩下一个基本数据类型了：文本数据，通常称为字符串（string）。

# 3.1.4 字符串

如果在 VBA 中处理过不止一行且带有变量和字面量引用的字符串，那么你可能希望字符串的处理能方便一些。幸运的是，Python 在字符串处理方面很强大。Python 中的字符串既可以用双引号（"）来表示，也可以用单引号（'）来表示。唯一的要求是字符串的首尾必须是同一种引号。你可以用+来拼接字符串，或者用\*来重复字符串的内容。在第 2 章尝试 Python REPL 的过程中我已经向你展示了如何重复字符串，这里放上一个使用加号的例子：

In[30]："A double quote string." + 'A single quote string.' Out[30]: 'A double quote string. A single quote string.'

使用单引号或者双引号（取决于你想写入的内容）可以让你轻松地按照原样打印各种引号，而不需要转义。如果发现字符串的内容还是需要转义，可以用反斜杠来转义字符：

In[31]: print ("Don't wait!" + 'Learn how to "speak" Python.') Don't wait! Learn how to "speak" Python. In[32]: print ("It's easy to\"escape\" characters with a leading \\.") It's easy to "escape" characters with a leading \.

当字符串中包含变量的值时，通常可以使用 f 字符串（f- string，格式化字符串字面量，

formatted string literal 的缩写）来处理。只需在字符串前加上一个 f，然后在字符串中用花括号引用变量：

In[33]： #注意Python如何在一行中为多个变量赋予多个值 first_adjecTive, second_adjecTive  $=$  "free"，"opensource" f"Python is {first_adjecTive] and {second_adjecTive}." Out[33]：'Python is free and open source.'

正如本节开始时提到的，字符串和其他所有东西一样，也是对象，它们也有执行相关操作的方法（如函数)。比如，你可以像下面这样转换大小写。

In[34]："PYTHON".lower () Out[34]：'python' In[35]："python".upper () Out[35]：'PYTHON'

# 获取帮助

获取帮助如何才能知道字符串之类的对象提供了哪些属性以及它们的方法会接受哪些参数呢？不同的工具给出了不同的答案。在 Jupyter 笔记本中，敲入对象后面的点之后按 Tab 键，比如 `"python".<Tab>`。画面上会出现一个下拉菜单，其中包含了这个对象提供的所有属性和方法。如果你的光标停在一个方法上，比如停在 "python".upper () 的括号中，按下快捷键 Shift+Tab 就可以获得这个函数的描述信息。VS Code 会以提示的形式自动显示这些信息。如果你在 Anaconda Prompt 中运行 Python REPL，使用 dir ("python") 可以获得可用的属性，而使用 help ("python", upper) 可以打印 upper 方法的描述信息。除此之外，也应该经常看一下 Python 的在线文档。如果你在找 pandas 之类的第三方包的文档，可以在 PyPI（Python 包索引）中搜索对应的包，在这里可以找到这些包的主页和文档的链接。

处理字符串时，一个常见的任务就是选取字符串的一部分，比如，你可能想从 EURUSD 中提取 USD。下一节会讲到 Python 强大的索引和切片机制，这种机制可以用来完成字符串内容的选取。

# 3.2 索引和切片

3.2 索引和切片索引和切片让你可以访问一个序列的指定元素。字符串是字符的序列，我们可以通过字符串来学习这种机制。下一节还会介绍其他支持索引和切片的序列，比如列表和元组。

# 3.2.1 索引

3.2.1 索引图 3- 1 介绍了索引（indexing）的概念。Python 的索引从 0 开始，意思就是说序列的第一个元素通过 @ 来引用。负索引从 - 1 开始，你可以用负索引从序列末端引用元素。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/72464e734ffb10d477db54ae33c7af1726884d6b6905c7fa6d7b34c73babfd4c.jpg)  
图 3-1：从序列的首尾进行索引

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/b4496e9bac34c37207642d9c7a6cdd483831b40084288a57d5f359727f31b86d.jpg)

# VBA 开发者遇到的常见陷阱

Python 的索引对于 VBA 开发者来说是一个常见的陷阱。VBA 中包括工作表（如 Sheets（1)）在内的大部分集合，索引是从 1 开始的。但数组的索引（如 MyArray（0)）是从 0 开始的。不过可以修改这种默认行为。还有一个区别是，VBA 的索引用的是圆括号，而 Python 的索引用的是方括号。

索引的语法如下：

sequence[index]

访问字符串的指定元素也是同样的道理：

In[36]: language  $=$  "PYTHON" In[37]: language[0] Out[37]：'P' In[38]: language[1] Out[38]：'V' In[39]: language[- 1] Out[39]：'M' In[40]: language[- 2] Out[40]：'0'

很多时候你会想要提取多个字符。这个时候就该切片上场了。

# 3.2.2 切片

如果你想从一个序列中获取一个以上的元素，就要用到切片（slicing）语法，像下面这样：

sequence[start:stop: step]

Python 使用的是左闭右开区间，意思是切片区间包含 start，但不包含 stop。如果省略了 start 或者 stop，则切片会分别包含从头开始或者从末尾开始的所有元素。stop 决定了切片的方向和步长。如果令步长为 2，那么切片就会从左到右每两个元素取一个值；如果令步长为- 3，则切片会从右到左每 3 个元素取一个值。默认步长为 1：

In[41]: language[: 3] #同language [0:3] Out[41]：'PYT' In[42]: language[1:3] Out[42]：'VT'

In[43]: language[- 3:] #同language [- 3:6] Out[43]：'HON' In[44]: language[- 3:- 1] Out[44]：'HO' In[45]: language[:: 2] #每两个元素取一个 Out[45]：'PT 0' In[46]: language[- 1:- 4:- 1] #负步长从右到左 Out[46]：'HOH'

到目前为止我们看到的都是单次索引和切片操作，不过 Python 也可以将多次索引和切片操作串联起来。如果你想获得最后 3 个字符中的第二个，可以像下面这样做：

In[47]: language[- 3:][1] Out[47]：'0'

在这个例子中，上述代码和 language[- 2]是等价的，连续索引并不会简单到哪儿去。但是在索引和切片列表的时候，连续索引会显得更有条理一些。下一节会讲到包括列表在内的各种数据结构。

# 3.3 数据结构

Python 提供了强大的数据结构以便于处理对象集合。本节会介绍列表、字典、元组和集合。虽然每种数据结构有各自的特点，但它们有一个共同特点，即都能存储多个对象。在 VBA 中，你可能用过集合或者数组来保存多个值。VBA 也提供了一种名为字典的数据结构，这和 Python 中的字典是一样的，不过还是只能用在 Windows 中。现在先来学习最常用的数据结构——列表。

# 3.3.1 列表

列表（list）可以存储不同数据类型的多个对象。列表用途广泛，你可以随时使用它。创建列表的语法如下：

[element 1, element 2, ...]

下面是两个列表，一个保存了一些 Excel 文件的名称，另一个保存了几个数字：

In[48]: file_names = ["one. xlsx", "two. xlsx", "three. xlsx"] numbers = [1, 2, 3]

和字符串一样，列表也可以用加号进行拼接。下面的代码还体现了列表的一个特性，那就是它可以保存不同类型的对象：

In[49]: file_names + numbers Out[49]: ['one. xlsx', 'two. xlsx', 'three. xlsx', 1, 2, 3]

列表也是对象，也可以包含其他列表作为元素。我称之为嵌套列表（nested list）：

In[50]: nested_list  $=$  [[1,2,3],[4,5,6],[7,8,9\|1,2,3],[4,5,6],[7,8,9]]

如果把这种嵌套列表写成多行，你就会发现列表可以很好地表示矩阵和工作表单元格。注意，这些方括号会隐式地让代码跨行（参见“跨行”）。通过索引和切片，你可以获得想要的任何元素。

In[51]:cells=[[1,2,3], [4,5,6], [7,8,9\|1,2,3], [4,5,6], [7,8,9]] In[52]: cells[1] #第二行 Out[52]:[4,5,6] In[53]: cells[1][1:] #第二行的第二列和第三列 Out[53]:[5,6]

# 跨行

在代码过长的时候，可能需要把它分成两行甚至多行才能保持其可读性。从技术上来说，可以用圆括号或者反斜杠来把它分成几行：

In[54]:a=(1+2 +3) In[55]:a=1+2\ +3

然而 Python 的代码风格指南更希望你尽可能使用隐式跨行（implicit line break）。在你使用包含圆括号、方括号或花括号的表达式的时候，这些括号都可以进行隐式跨行而无须添加其他字符。本章末尾会更详细地介绍 Python 的代码风格指南。

你可以更改列表中的元素：

In[56]: users  $=$  ["Linda"，"Brian"]In[57]: users. append（"Jennifer"） #最常用的操作是向列表末尾追加元素usersOut [57]:["Linda'，'Brian'，'Jennifer']In[58]: users. insert（0，"Kim"） #在索引0处插入 "Kim"usersOut[58]:["Kim'，'Linda'，'Brian'，'Jennifer']

要删除一个元素，可以使用 pop 或者 del。pop 是一个方法，而 del 是一种 Python 语句：

In[59]: users. pop（） #在默认情况下 ，移除并返回最后一个元素 Out[59]：'Jennifer'In[60]: usersOut[60]：["Kim'，'Linda'，'Brian']In[61]: delusers[0] #del会移除指定索引处的元素

还可以对列表进行以下操作：

还可以对列表进行以下操作：In [62]: len (users) # 长度 Out[62]: 2 In [63]: "Linda" in users # 检查 users 是否包含"Linda"Out[63]: TrueIn [64]: print (sorted (users)) # 返回新的排好序的列表 print (users) # 原列表保持不变['Brian', 'Linda']['Linda', 'Brian']In [65]: users.sort () # 对原列表进行排序 usersOut[65]: ['Brian', 'Linda']

注意，也可以把 len 和 in 用在字符串上：

In [66]: len ("Python") Out[66]: 6 In [67]: "free" in "Python is free and open source."Out[67]: True

要访问列表中的元素，可以通过元素的位置（索引）来引用一个元素——但并非任何时候都能知道元素的位置。下一节的主题是字典，字典可以让你通过键（很多时候键是一个名称）来访问元素。

# 3.3.2 字典

字典（dictionary）是键到值的映射。你会经常遇到键－值对。创建字典最简单的方法如下：

{key 1: value 1, key 2: value 2, ...}

列表可以通过索引（如位置）来访问元素，字典则是通过键来访问元素。和索引一样，键也被放在方括号中。下面的代码中，一对货币（键）映射到了汇率（值）：

In [68]: exchange_rates = {"EURUSD": 1.1152, "GBPUSD": 1.2454, "AUDUSD": 0.6161}In [69]: exchange_rates["EURUSD"] # 访问 EURUSD 的汇率 Out[69]: 1.1152

下面的代码展示了如何修改既存的值以及添加新的键－值对：

下面的代码展示了如何修改既存的值以及添加新的键－值对：In [70]: exchange_rates["EURUSD"] = 1.2 # 修改已经存在的值 exchange_ratesOut[70]: {'EURUSD': 1.2, 'GBPUSD': 1.2454, 'AUDUSD': 0.6161}In [71]: exchange_rates["CADUSD"] = 0.714 # 添加新的键- 值对 exchange_ratesOut[71]: {'EURUSD': 1.2, 'GBPUSD': 1.2454, 'AUDUSD': 0.6161, 'CADUSD': 0.714}

合并两个或多个字典的最简单的办法是将字典解包（unpack）后再合并到一个新的字典中。在字典前加上两个星号就可以进行解包。如果第二个字典包含第一个字典中的键，那么第一个字典中对应的值会被覆盖。通过观察 GBPUSD 汇率的变化，可以了解到发生了什么：

In [72]: {"\*exchange_rates, \*\*{"SGDUSD": 0.7004,"GBPUSD": 1.2222}} Out[72]:{"EURUSD': 1.2, "GBPUSD': 1.2222, "AUDUSD': 0.6161, "CADUSD': 0.714, "SGDUSD': 0.7004}

Python 3.9 引入了管道符号作为专门的字典合并运算符。上面的表达式可以简化成如下代码：

exchange_rates | {"SGDUSD": 0.7004, "GBPUSD": 1.2222}

很多对象可以用作键，下面就是用整数作为键的例子：

In [73]: currencies = {1: "EUR", 2: "USD", 3: "AUD"}  In [74]: currencies[1]  Out[74]: 'EUR'

get 方法可以在键不存在时返回一个默认值：

In [75]: # currencies[100]会引发异常  # 除了 100，还可以尝试任何不存在的键  currencies.get (100, "N/A")  Out[75]: 'N/A'

你在 VBA 中使用 Case 语句的地方都可以在 Python 中换成字典。前面的例子用 VBA 可以像下面这样写：

Select Case x  Case 1  Debug. Print "EUR"  Case 2  Debug. Print "USD"  Case 3  Debug. Print "AUD"  Case Else  Debug. Print "N/A"  End Select

现在你已经知道了如何使用字典，接下来学习下一种数据结构：元组。元组和列表类似，但是二者有一个重大区别，下一节中会讲述。

# 3.3.3 元组

元组（tuple）和列表类似，只不过它们是不可变的（immutable）：一旦被创建，它们的元素就无法被修改。虽然很多时候元组和列表可以互换使用，但对于那些在整个程序中都不会发生改变的集合来说，元组是不二之选。元组是通过多个被逗号分隔的值创建的：

mytuple  $=$  element 1, element 2，...

使用圆括号通常更易于阅读：

In[76]: currencies  $=$  ("EUR"，"GBP"，"AUD")

可以使用访问数组的方法来访问元组，只是不能修改元组的元素。拼接元组会在“暗地里”创建一个新的元组，然后再把新元组绑定到你的变量上：

In[77]: currencies[0] #访问第一个元素Out [77]：'EUR'In[78]： #拼接元组会返回一个新元组currencies  $^+$  ("SGD"，) Out[78]：（'EUR'，'GBP'，'AUD'，'SGD')

附录 C 中会解释可变对象和不可变对象之间的区别。现在先来看本节的最后一个数据结构：集合。

# 3.3.4 集合

集合（set）是一种没有重复元素的集合（collection）。你自然可以把集合用于集合论的运算中，但在实践中它们经常被用于列表去重或者元组去重。使用花括号创建集合：

{element 1, element 2，...}

要对列表或者元组进行去重，可以像下面这样使用 set 构造器：

In[79]:set（["USD"，"USD"，"SGD"，"EUR"，"USD"，"EUR"]） Out[79]:{EUR'，'SGD'，'USD'}

除此之外，还可以进行像交集和并集之类的集合论运算：

In[80]: portfolio 1  $=$  {"USD"，"EUR"，"SGD"，"CHF"} portfolio 2  $=$  {"EUR"，"SGD"，"CAD"} In[81]: #同portfolio2 . union (portfolio 1) portfolio 1. union (portfolio 2) Out[81]:{'CAD'，'CHF'，'EUR'，'SGD'，'USD'} In[82]: #同portfolio2 . intersection (portfolio 1) portfolio 1. intersection (portfolio2)

Out[82]:{'EUR','SGD'}

现在来快速回顾一下刚刚认识的 4 种数据结构。表 3- 1 展示了这 4 种数据结构的创建方法，我使用了前面用过的字面量（literal）记法。另外，我还列出了它们的构造器。和字面量一样，构造器可以创建对应的数据结构，并且通常用于数据结构之间的相互转换。例如，要把元组转换为列表，可以执行以下操作。

In[83]: currencies  $=$  "USD"，"EUR"，"CHF" currencies Out[83]：{'USD'，'EUR'，'CHF'） In[84]: List (currencies) Out[84]：['USD'，'EUR'，'CHF']

表 3-1：数据结构  

<table><tr><td>数据结构</td><td>字面量</td><td>构造器</td></tr><tr><td>列表</td><td>[1, 2, 3]</td><td>list ((1, 2, 3))</td></tr><tr><td>字典</td><td>&quot; a&quot;: 1, &quot; b&quot;: 2</td><td>dict (a=1, b=2)</td></tr><tr><td>元组</td><td>(1, 2, 3)</td><td>tuple ([1, 2, 3])</td></tr><tr><td>集合</td><td>[1, 2, 3]</td><td>set ((1, 2, 3))</td></tr></table>

到目前为止，你已经了解了所有关键的数据类型，既有像浮点型和字符串这样的基本类型，也有像列表和字典这样的数据结构。下一节会介绍控制流。

# 3.4 控制流

本节会介绍 if 语句、for 循环和 while 循环。if 只会在满足特定条件时执行特定的代码，for 循环和 while 循环会反复执行代码块中的代码。在本节末尾，我还会介绍列表推导式，它可以代替 for 循环完成列表的构造。本节首先会介绍代码块的定义，同时还会介绍 Python 最值得注意的特点：有特殊含义的空白。

# 3.4.1 代码块和 pass 语句

代码块（code block）界定了一段源代码，这段代码会用于一些特定的目的。例如，可以使用代码块来界定循环的主体部分，它也构成了一个函数的定义。在 Python 中，代码块通过缩进来体现，而不像包括 VBA 在内的大部分编程语言那样——使用花括号。这就是所谓的有特殊含义的空白（significant white space）。Python 社区坚持使用 4 个空格作为缩进，不过你通常只需要敲一次 Tab 键就行了。Jupyter 笔记本和 VS Code 都会自动将 Tab 键转换为 4 个空格。下面我会通过 if 语句来展示一个代码块是如何界定的：

if condition: pass #Do nothing

代码块的前一行总是会以冒号结尾。一旦某一行没有被缩进，代码块就自然结束了。因此你需要使用 pass 语句来创建一个什么都不做的假代码块。在 VBA 中，对应的代码是这样的：

If condition Then 'Do nothing End If

现在你已经知道了如何定义代码块，下一节会对其进行实际运用，届时我会介绍 if 语句。

# 3.4.2 if 语句和条件表达式

为了介绍 if 语句，下面来重现一下 1.2.1 节中的例子。不过这次用 Python 来写：

In[85]:i=20 ifi<5: print ("i is smaller than 5") elifi  $\epsilon = 10$  . print ("i is between 5 and 10") else: print ("i is bigger than 10") i is bigger than 10

如果像第 1 章那样把 if 语句和 else 语句缩进了，你就会得到一个 SyntaxError 异常。Python 不允许代码文本和逻辑不在同一缩进级别上。不像 VBA 中的 ElseIf，Python 中对应的 elif 是全小写的。if 语句很容易暴露出一个程序员是不是新手，以及他是否应用了更 Python（Pythonic）的编程风格。在 Python 中，if 语句本身不需要任何的圆括号。要检查一个值是否为 True，并不需要显式地写这样一个表达式。也就是说，可以像下面这样写：

In[86]: is_important  $=$  True if is_important: print ("This is important.") else: print ("This is not important.") This is_important.

也可以像下面这样来检查列表之类的序列是否为空：

In[87]:values=[] if values: print ("The following values were provided:{values}") else: print ("There were no values provided.") There were no values provided.

从其他语言转过来的程序员可能会写出像 if (is_import = == True) 或者 if len (values) > 0 这样的代码。

条件表达式（conditional expression）或者三元运算符（ternary operator）可以让你以一种更紧凑的形式编写 if/else 语句：

In [88]: is_Important = Falseprint ("important") if is_important else print ("not important") not important

学习了 if 语句和条件表达式之后，在下一节中让我们把注意力转向 for 循环和 while 循环。

# 3.4.3 for 循环和 while 循环

如果需要重复执行某些任务，比如打印 10 个不同的变量，那么还是不要复制粘贴 10 条 print 语句为妙。这时应该使用一个 for 循环。for 循环会对一个序列 [比如列表、元组、字符串（记住，字符串就是字符的序列）] 进行迭代。作为例子，我们来写一个会获取 currencies 列表的每个元素的 for 循环，然后将其赋值给变量 currency，再打印出来。一个接一个地进行同样的操作，直到列表中没有更多的元素为止：

In [89]: currencies = ["USD", "GBP", "AUD"]for currency in currencies:    print (currency) USDGBPAUD

额外提一句，VBA 的 For Each 语句和 Python 的 for 循环是类似的。前面的例子用 VBA 可以这样写：

Dim currencies As VariantDim curr As Variant 'currency is a reserved word in VBAcurrencies = Array ("USD", "GBP", "AUD") For Each curr In currencies    Debug. Print currNext

在 Python 中，如果你在 for 循环中需要一个计数器变量，那么可以用内置的 range 函数和 enumerate 函数。先来看看 range，它会提供一连串的数字。你可以只提供一个 stop 参数，也可以同时提供 start 参数和 stop 参数，还可以提供一个可选的 step 参数。和切片类似，range 产生的区间包含 start，但不包含 stop，step 决定了步长，默认为 1：

range (stop) range (start, stop, step)

range 会延迟求值，意思就是说只要你不明确要求求值，它就不会产生指定的序列：

In [90]: range (5)  Out[90]: range (0, 5)

将 range 转换为列表可以解决这个问题：

In [91]: list (range (5)) # stop 参数  Out[91]: [0, 1, 2, 3, 4]  In [92]: list (range (2, 5, 2)) # start、stop 和 step 3 个参数  Out[92]: [2, 4]

不过大部分时候没必要把 range 包装成一个列表：

In [93]: for i in range (3):      print (i)  0  1  2

如果在迭代序列时需要一个计数器变量，那么可以使用 enumerate。它会返回一系列 (index, element) 元组。在默认情况下，索引从 0 开始，每次循环加 1。在循环中可以这样使用 enumerate:

In [94]: for i, currency in enumerate (currencies):      print (i, currency)  0 USD  1 GBP  2 AUD

在元组和集合中进行循环与在列表中类似。在字典中进行循环时，Python 会按照键进行循环：

In [95]: exchange_rates = {"EURUSD": 1.1152,      "GBPUSD": 1.2454,      "AUDUSD": 0.6161}  for currency_pair in exchange_rates:      print (currency_pair)  EURUSD  GBPUSD  AUDUSD

items 方法可以以元组的形式同时获得键和对应的值：

In [96]: for currency_pair, exchange_rate in exchange_rates.items ():      print (currency_pair, exchange_rate)  EURUSD 1.1152  GBPUSD 1.2454  AUDUSD 0.6161

break 语句可以跳出循环：

In [97]: for i in range (15): if  $i = =2$  . break else: print (i) 0 1

可以使用 continue 语句跳过本轮循环的剩余部分。也就是说，程序会使用下一个元素进入下一轮迭代：

In [98]: for i in range (4): if  $i = =2$  . continue else: print (i) 0 1 3

VBA 中的循环和 Python 中的循环有一个微妙的区别。在 VBA 中，当循环完成时，计数器变量的最终值会超过你设置的上限：

For  $\texttt{i} = \texttt{1}$  To 3 Debug. Print i Next i Debug. Print i

最终会输出如下内容：

1 2 3 4

在 Python 中，你可能更希望它像下面这样工作，而不会越过序列的边界。

In [99]: for i in range (1,4): print (i) print (i) 1 2 3 3

你也可以使用 while 循环，循环会在条件不满足时停止。

In [100]: n = 0 while n <= 2: print (n) n += 1

1 2

增强赋值

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/9f519a33e7d4f28b6a6cbed848cac82ce0aac92f787cbd5a528959d062afd0d8.jpg)

增强赋值上一个例子中使用了增强赋值（augmented assignment）的写法： $\textsf{n} + = 1$ 。这和  $\textsf{n} = \textsf{n} + 1$  是一样的。前面介绍过的其他算术运算符也可以采用同样的写法，比如，可以写成  $\textsf{n} - = 1$ 。

# 3.4.4 列表、字典和集合推导式

列表、字典和集合推导式在技术上是一种创建对应数据结构的方法，不过很多时候人们用它们来代替 for 循环——这也是为什么我要在这里介绍推导式。假设有如下的货币名称对，你想把美元在后面的元素挑出来。你可能会写下面这样一个 for 循环：

In [101]: currency_pairs  $=$  ["USDJPY"，"USDGBP"，"USDCHF"， "USDCAD"，"AUDUSD"，"NZDUSD"] In [102]: usd_quote  $\equiv$  [] for pair in currency_pairs: if pair[3:]  $= =$  "USD": usd_quote. append（pair[: 3]) usd_quote Out[102]:['AUD'，'NZD']

这种情况用列表推导式（list comprehension）会更简单。列表推导式是一种更简洁的列表创建方法。你可以通过下面的例子体会它的语法，这行代码和前面的 for 循环完全等效：

In [103]: [pair[: 3] for pair in currency_pairs if pair[3:]  $= =$  "USD"] Out[103]:['AUD'，'NZD']

如果没有限制条件，则可以直接省略 if 部分。如果要交换前后两种货币，那么可以这样做：

In [104]: [pair[3:]  $^+$  pair[: 3] for pair in currency_pairs] Out[104]:['JPYUSD'，'GBPUSD'，'CHFUSD'，'CADUSD'，'USDAUD'，'USDNZD']

字典也有字典推导式：

In [105]: exchange_rates  $=$  {"EURUSD": 1.1152, "GBPUSD": 1.2454, "AUDUSD": 0.6161} {k: v\*100 for（k，v）in exchange_rates. items（）} Out[105]:{'EURUSD': 111.52，'GBPUSD': 124.54，'AUDUSD': 61.61}

集合也有集合推导式：

In [106]: {s + "USD" for s in ["EUR", "GBP", "EUR", "NZD", "NZD"]} Out[106]: {'EURUSD', 'GBPUSD', 'NZDUSD'}

到目前为止，你已经了解了 Python 的大部分基础构造，已经能够写一些简单的脚本了。在下一节中，你会了解到当脚本越来越复杂时，应该如何组织代码以保持可维护性。

# 3.5 组织代码

在本节中我们会了解到如何让代码形成可维护的结构：首先会介绍函数的核心知识，然后会教你如何将代码分成不同的 Python 模块。在本节末尾，我们会运用所学知识研究标准库中的 datetime 模块。

# 3.5.1 函数

即使只是用 Python 来写一些简单的脚本，你仍然会经常编写函数。函数是所有编程语言中最重要的构造，它们可以让你在程序的任何地方重用同样的代码。在了解如何调用函数之前，先来看一下如何定义函数。

# 1. 定义函数

在 Python 中，需要使用 def 关键字来自定义函数，def 代表函数定义。和 VBA 不同，Python 不区分单纯的函数和子程序（sub procedure）。在 Python 中和子程序对应的就是一个没有返回值的函数。Python 中的函数遵循和代码块同样的语法，也就是说，函数定义的第一行以冒号结束，函数的主体需要缩进。

def function_name (required_argument, optional_argument=default_value, ...):    return value 1, value 2, ...

必需参数

必需参数（required argument）没有默认值。参数之间用逗号隔开。

可选参数

为参数提供默认值之后，它就成了可选参数（optional argument）。如果没有有意义的默认值，则通常用 None 作为可选参数的默认值。

返回值

return 语句定义了函数的返回值。如果省略了返回值，那么函数就会自动返回 None。Python 允许你返回以逗号隔开的多个返回值，这很方便。

下面来定义一个函数练习一下，这个函数可以将华氏度或者开氏度转换为摄氏度：

In [107]: def convert_to_celsius (degrees, source="fahrenheit"):    if source.lower () == "fahrenheit":        return (degrees - 32) * (5/9)    elif source.lower () == "kelvin":        return degrees - 273.15    else:        return f"Don't know how to convert from {source}"

字符串的 lower 方法可以将给定字符串转换为小写，这样就可以在保持比较字符串的代码照常工作的前提下，接受任何大小写形式的 source 字符串了。完成 convert_to_celsius 的定义后，来看看如何调用它。

# 2. 调用函数

本章开头简单提到过，要调用一个函数，可以在函数名后加上一对圆括号，并在其中给出参数。

value 1, value 2, ... = function_name (positional_arg, arg_name=value, ...)

位置参数

如果将一个值作为位置参数（positional argument，即上面的 positional_arg）传递，那么这个值会被传递给对应位置上的参数。

关键字参数

以 arg_name=value 这种形式传递的参数，就是关键字参数（keyword argument）。关键字参数的好处是可以以任意顺序传递参数，并且对于读者来说更加直观易懂。如果函数被定义成  $f(a, b)$ ，则可以像这样调用：  $f(b = 1, a = 2)$  。VBA 中也有这样的概念，像这样调用函数可以使用关键字参数：  $f(b \coloneqq 1, e \coloneqq 1)$  。

下面来尝试一下 convert_to_celsius 函数，看看它是如何工作的：

In [108]: convert_to_celsius (100, "fahrenheit") # 位置参数  Out[108]: 37.77777777777778  In [109]: convert_to_celsius (50) # 使用默认值（fahrenheit）  Out[109]: 10.0  In [110]: convert_to_celsius (source="kelvin", degrees=0) # 关键字参数  Out[110]: - 273.15

现在你已经知道了如何定义和调用函数，来看看如何使用模块来更好地组织函数。

# 3.5.2 模块和 import 语句

当你为大型项目编写代码时，在一定的时候会需要将代码分成不同的文件，从而保持一种可维护的结构。正如第 2 章所展示的那样，Python 文件的扩展名为 .py，通常我们会把主要的文件称作脚本（script）。如果你想让你的主脚本获得来自其他文件的概念，则需要先导入（import）那个功能。在这种情况下，Python 源文件被称为模块（module）。为了更好地理解模块如何工作以及都有哪些导入选项，来看一看配套代码库中的 temperature. py。用 VS Code 打开它（参见例 3- 1），如果需要温习一下如何在 VS Code 中打开文件，请回顾第 2 章。

# 例 3-1 temperature. py

TEMPERATURc_SCALES  $=$  ("fahrenheit"，"kelvin"，"celsius") def convert_to_celsius (degrees, source  $\equiv$  "fahrenheit"): if source.lower ()  $= =$  "fahrenheit": return (degrees- 32)\*（5/9) elif source.lower ()  $= =$  "kelvin": return degrees - 273.15 else: return f"Don't know how to convert from {source}" print ("This is the temperature module.")

如果要从 Jupyter 笔记本中导入 temperature 模块，那么需要 Jupyter 笔记本和 temperature 模块在同一目录下一—因为它是放在配套代码库中的。要导入一个模块，只需要模块的名字，不需要末尾的. py。运行 import 语句之后，就可以通过点号访问模块中的所有对象了。例如，使用 temperature. convert_to_celsius（）来进行转换：

In [111]: import temperature This is the temperature module. In [112]: temperature. TEMPERATURE_SCALES Out[112]:（'fahrenheit'，'kelvin'，'celsius'） In [113]: temperature. convert_to_celsius (120，"fahrenheit") Out[113]: 48.8888888888889

注意，TEMPERATURE_SCALES 使用了全大写字母来表示它是一个常量。本章结尾部分会详细介绍常量。当你运行 import temperature 这个单元格的时候，Python 会从上至下运行 temperature. py——文件末尾 print 函数的输出就是证明。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/157988aeaa66da32a2369897fd839bfc578da4c5f62b0f87485cda804a78dfd9.jpg)

# 模块只会被导入一次

如果再一次运行 import temperature 单元格，你会注意到 print 函数不会输出任何内容。这是因为 Python 模块在每个会话中只会被导入一次。如果你要导入的模块发生了更改，则需要重启 Python 解释器才能让更改体现出来。在 Jupyter 笔记本中，需要点击“内核  $>$  重启”。

实际上你一般不会在模块中输出任何东西。这里只是为了展示多次导入模块会发生什么才这么写的。更多的时候，你会把函数和类放到模块中（参见附录 C 了解关于类的内容）。如果不想在使用温度模块中的对象时多写一个 temperature，那么可以把 import 语句改成下面这样：

In [114]: import temperature as tp In [115]: tp. TEMPERATURE_SCALES Out[115]:（'fahrenheit'，'kelvin'，'celsius'）

给这个模块取一个简短的别名 tp，这样用起来会更方便，同时依然可以识别出某个对象来自哪个模块。许多第三方包会建议在使用别名时遵循某种惯例，比如 pandas 用的是 import pandas as pd。如下所示，在导入其他包的对象时，还有一种选项。

In [116]: from temperature import TEMPERATURE_SCALES, convert_to_celsius  In [117]: TEMPERATURE_SCALES  Out[117]: ('fahrenheit', 'kelvin', 'celsius')

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/13cffa254957644871ca7cf90c628107e2ca267703025396f965106195526d19.jpg)

# pycache__文件夹

当你导入 temperature 模块时，会发现 Python 创建了一个名为 __pycache__ 的文件夹，里面有一些扩展名为 .pyc 的文件。当你导入一个模块时，Python 解释器会创建这些编译为字节码的文件。可以直接忽略这个文件夹，这是 Python 执行代码时涉及的一个技术细节。

在使用 import x from y 这样的语法时，你只导入了指定的对象。这些对象被直接导入主脚本的命名空间（namespace）中，也就是说，如果不看这些 import 语句，你就说不清被导入的对象是在你的 Python 脚本（或者 Jupyter 笔记本）中还是在另一个模块中定义的。这可能会造成冲突：如果你的主脚本中有一个名为 convert_to_celsius 的函数，那么它可能会覆盖你从 temperature 模块中导入的那个。如果你无论如何都要使用这两个函数，那么它们也可以以 convert_to_celsius 和 temperature. convert_to_celsius 形式并存。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/f5b1e9c003ff40415fde989bff286fc0d82f32d2614ed693da50b33c32824bc9.jpg)

# 不要让你的脚本和既存的包重名

一个常见的错误根源是给你的 Python 文件取一个和既存的包同样的名字。如果你要创建一个测试 pandas 功能的文件，那么不要将其命名为 pandas. py，因为这会造成冲突。

现在你知道了导入机制如何运作，下面来导入 datetime 模块实际运用一下。这个过程中你还会了解到更多关于对象和类的知识。

# 3.5.3 datetime 类

在 Excel 中，处理日期和时间是很常见的操作，但是有一定的限制。例如，Excel 单元格的时间格式不支持小于毫秒的单位，并且根本不支持时区。Excel 中的日期和时间会以一种称为日期序列号（date serial number）的浮点数形式存储，Excel 单元格会将其显示为时间或者日期，抑或同时显示。例如，1900 年 1 月 1 日对应的日期序列号是 1，意思就是说这是 Excel 能处理的最早的日期。时间会被转换为浮点数的小数部分，比如，01/01/1900 10:10:00 会用 1.4236111111 表示。

要在 Python 中处理日期和时间，可以导入标准库中的 datetime 模块。这个模块包含了一个也叫 datetime 的类，可用于创建 datetime 对象。由于这个类和它所在的模块同名，可

能会造成混淆，因此在本书中我会遵循这样的导入规则：import datetime as dt。这样可以更容易区分模块（dt）和类（datetime）。

到目前为止，我们大部分时候是用字面量（literal）来创建列表和字典之类的对象。字面量指的是一种会被 Python 识别为特定类型对象的语法。对于列表来说就是像[1，2，3]这种写法。然而，大部分的对象需要调用对应的类来创建——这个过程被称为实例化 (instantiation)，因此对象也被称作类实例 (class instance)。和调用函数一样，调用类也需要在类名后跟上一对圆括号，并在圆括号中提供参数。要实例化 datetime 对象，需要像下面这样调用对应的类：

import datetime as dt dt.datetime (year，month，day，hour，minute，second，microsecond，timezone)

下面通过几个例子来了解一下如何在 Python 中使用 datetime 对象。由于只是简单介绍，这里就不使用带时区的 datetime 对象了：

In[118]: #将datetime模块导入为dtimport datetime as dtIn[119]: #调用timestamp以创建datetime对象timestamp  $=$  dt.datetime (2020,1,31,14,30) timestampOut[119]: datetime.datetime (2020,1,31,14,30) In[120]: #datetime对象提供了多种属性 ，比如，想要知道它是几号 timestamp. dayOut[120]: 31 In[121]: #两个datetime对象求差会返回一个timedelta对象timestamp- dt.datetime (2020,1,14,12,0) Out[121]: datetime.timedelta (days  $= 17$  ，seconds  $= 9000$  In[122]: #也可以对timedelta进行同样的操作timestamp  $^+$  dt.timedelta (days  $= 1$  ，hours  $= 4$  ,minutes  $= 11$  Out[122]: datetime.datetime (2020,2,1,18,41)

要将 datetime 对象格式化（format）成字符串，可以使用 strftime 方法；要解析（parse）字符串并将其转换为 datetime 对象，可以使用 strptime 函数（可以在 datetime 的文档中找到可接受格式的概览）：

In[123]: #以特定方式格式化datetime对象 #也可以使用f字符串 ：f"{timestamp:%d/%m/%Y %H:%M}"timestamp.strftime ("%d/%m/%Y %H:%M") Out[123]:- 31/01/2020 14:30In[124]: #将字符串解析为datetime对象dt . datetime.strftime ("12.1.2020", "%d.%m.%Y") Out[124]: datetime.datetime (2020,1,12,0,0)

介绍完 datetime 模块之后，下面进入本章最后一个主题，关于如何正确格式化你的代码。

# 3.6 PEP 8：Python 风格指南

3.6 PEP 8: Python 风格指南你可能很好奇为什么我有时候在变量名中加下划线，有时候又会把变量名全部大写。在本节中，我会一边介绍 Python 官方的风格指南，一边解释我在格式化方面的选择。Python 使用所谓的 Python 改进提案（Python Enhancement Proposals，PEP）来讨论新语言特性的引入。Python 代码的风格指南就是其中之一。这些提案一般用数字来表示，代码风格指南就被称作 PEP 8。PEP 8 是一系列提供给 Python 社区的风格建议。如果使用相同代码的所有人都遵循相同的代码风格，那么写出的代码可读性就会更高。在开源的世界中，会有很多互不相识的程序员开发同一个项目，此时遵循相同的代码风格会显得尤为重要。例 3- 2 中这个简短的 Python 文件展示了最重要的编程惯例。

# 例 3-2 pep 8_sample. py

""这个脚本展示了一些 PEP 8 的规则 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 import datetime as dt 2

TEMPERATURE_SCALES  $=$  ("fahrenheit","kelvin", "celsius") ③ 4

class TemperatureConverter: 5 pass #暂时不做任何事  $⑥$

def convert_to_celsius (degrees，source  $\coloneqq$  "fahrenheit"): 7"""这个函数将华氏度或开氏度转化为摄氏度  $⑧$  if source.lower ()  $= =$  "fahrenheit" 9 return（degrees- 32)\*（5/9) 0 elif source.lower ()  $= =$  "kelvin": return degrees - 273.15 else: return f"Don't know how to convert from {source}"

celsius  $=$  convert_to_celsius (44，source  $\coloneqq$  "fahrenheit") 1 non_celsius_scales  $=$  TEMPERATURE_SCALIS[- 1] ②

print ("current time: " + dt.datetime.now (). tsoformat ()) print (f"The temperature in Celsius is: {celsius}")

① 在文件顶部用文档字符串（docstring）解释这个脚本或者模块做了些什么。文档字符串是一种特殊的字符串，它用 3 个引号引用。除了作为代码的文档，它还可以用来编写跨越多行的字符串。如果你的字符串中有很多双引号或单引号，那么也可以用文档字符串来避免转义。我们会在第 11 章中看到，编写跨越多行的 SQL 查询时，文档字符串也很好用。

② 所有的导入语句都应该放在文件顶部，一行一个导入。从标准库导入的内容放在前面，然后是第三方包，最后是自己编写的模块。不过这个例子中只用到了标准库。

③ 用大写字母和下划线表示常量。每行的长度不超过 79 个字符。尽可能地利用圆括号、方括号或花括号隐式跨行。

④ 类、函数和其他代码之间用两个空行隔开。

⑤ 尽管很多类像 datetime 一样使用小写字母命名，但是你自己编写的类也应该使用首字母大写的名称（CapitalizedWords）。有关类的更多内容请参见附录 C。

⑥ 行内注释应该和代码间隔至少两个空格。代码块应该用 4 个空格缩进。

⑦ 在能够提高可读性的情况下，函数和参数应该使用小写字母和下划线命名。不要在参数名和默认值之间使用空格。

⑧ 函数的文档字符串应当列出函数参数并解释其意义。为了让例子更简短我并没有这么做，但我们会在第 8 章配套代码库中看到，excel. py 具有完整的文档字符串。

⑨ 冒号前后不要使用空格。

⑩ 可以在算术运算符前后使用空格。如果同时使用了优先级不同的运算符，则应当考虑在优先级最低的运算符前后添加空格。在本例中，由于乘号的优先级最低，因此它的前后被添加了空格。

⑪ 变量名称使用小写字母。在可以提升可读性的前提下使用下划线。为变量赋值时，在等号前后添加空格。不过在调用函数时，不要在关键字参数前后使用空格。

⑫ 在进行索引和切片时，不要在方括号前后使用空格。

这只是对 PEP 8 的一个简单介绍，在你开始认真使用 Python 之后，应该看一下 PEP 8 的原文。PEP 8 明确指出，这些规则只是建议，应当优先考虑你自己的编程风格。毕竟统一性才是最重要的。如果你对其他公开的编程风格指前感兴趣，也可以看一下谷歌的 Python 风格指南，它和 PEP 8 比较接近。实际上大部分 Python 程序员并未严格遵循 PEP 8，最常见的错误是每行超过了 79 个字符。

在编写代码时，要保持格式规整可能很难，不过你可以利用工具让它自动检查代码是否遵循了某种编程风格。下一节会教你如何使用 VSCode 进行自动格式化。

# 3.6.1 PEP 8 和 VSCode

在使用 VSCode 时，确保代码严格遵循 PEP 8 的最简单方法是使用代码检查器（linter）。代码检查器会检查源代码中的语法和风格错误。打开命令面板（在 Windows 中，使用快捷

键 Ctrl+Shift+P；在 macOS 中，使用快捷键 Command- Shift- P），搜索“Python：选择代码检查器”。flake 8 是流行的代码检查器之一，Anaconda 中已经安装了这个包。一旦代码检查器被启用，在每次保存文件的时候，VS Code 就会在有问题的地方打上波浪线。将鼠标悬停在波浪线上面，你就会在提示中看到相关说明。如果要关闭代码检查器，可以在命令面板中搜索“Python：选择代码检查器”，然后选择“关闭代码检查”。如果你愿意的话，也可以在 Anaconda Prompt 中运行 flake 8 来打印报告。（只有当代码中有违背 PEP 8 的地方时，这个命令才会打印出一些内容。所以如果你在 pep 8_sample. py 中执行这个命令，它不会打印出任何内容，除非你自己引入了一些违反 PEP 8 的内容。）

(base)> cd C:\Users\username\python- for- excel  (base)> flake 8 pep 8_sample. py

Python 在最近的版本中通过引入类型提示（type hint）进一步增强了静态分析的能力。下一节会介绍类型提示是如何工作的。

# 3.6.2 类型提示

在 VBA 中，我们经常会看到在变量前面有代表数据类型的缩写，比如 strEmployeeName 和 wbWorkbookName。在 Python 中也可以这么做，只不过不那么常见。在 Python 中，你也找不到像 VBA 中的 Option Explicit 或 Dim 那样的定义语句。不过 Python 3.5 引入了一个叫作类型提示（type hint）的特性。类型提示也被称为类型标注（type annotation），它允许你声明变量的数据类型。类型提示并不是强制性的，它也不会影响 Python 解释器执行代码（不过也有像 pydantic 这种在运行时强制使用类型提示的第三方包）。类型提示的主要目的是让 VS Code 之类的文本编辑器可以在代码执行前捕获更多错误，不过它也可以增强编辑器的自动补全功能。mypy 是用于有类型标注的 Python 代码的最受欢迎的类型检查器，是 VS Code 提供的一种代码检查器。要理解类型标注如何工作，先来看下面这段没有类型提示的代码：

$\times = 1$  def hello (name): return f"Hello {name}!"

现在加上类型提示：

x: int = 1  def hello (name: str) - > str:  return f"Hello {name}!"

一般来说，类型提示在较大的项目中才会更有用，所以我不会在本书的剩余部分中使用类型提示。

# 3.7 小结


