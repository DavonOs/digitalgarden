---
{"dg-publish":true,"dg-permalink":"books/36632126/Python-Language-Basics-IPython-and-Jupyter-Notebooks","permalink":"/books/36632126/Python-Language-Basics-IPython-and-Jupyter-Notebooks/","metatags":{"description":"本章简要介绍了 Python 的基础语法概念，以及 IPython 和 Jupyter 编程环境。下一章中，我会介绍许多内置的数据类型、函数、输入-输出方法，这些内容将贯穿本书的剩余章节。","og:site_name":"DavonOs","og:title":"利用 Python 进行数据分析 (原书第3版)","og:type":"book","og:url":"https://zuji.eu.org/books/36632126/Python-Language-Basics-IPython-and-Jupyter-Notebooks","og:image":"https://i-blog.csdnimg.cn/direct/a3631c7292b546cc8982429c96df4bb4.png","og:image:width":"50","og:image:alt":"bookcover"},"tags":["program/python"],"dgShowInlineTitle":true,"created":"2025-09-15 16:44","updated":"2025-09-21 18:10"}
---

## 2.1 Python 解释器

Python 是解释型语言。Python 解释器要运行程序，同一时间只能运行一条语句。标准的交互式 Python 解释器可以在命令行中通过输入 python 命令打开：

```python
$ python
Python 3.10.4 | packaged by conda- forge | (main, Mar 24 2022, 17:38:57) [GCC 10.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> a = 5
>>> print(a)
5
```

在`>>>`提示符之后输入代码。要退出 Python 解释器，可以输入 `exit()` 或按组合键 <kbd>Ctrl</kbd>+<kbd>D</kbd>（只适用于 Linux 和 macOS 系统）。

运行 Python 程序很简单，只需调用 python 命令的同时，使用一个 `.py` 文件作为该命令的第一个参数。假设我们创建了一个 `hello_world.py` 文件，它的内容是：

```python
print ("Hello world")
```

可以用下面的命令运行该文件（`hello_world.py` 文件必须位于当前终端的路径下）：

```python
$ python hello_world.py
Hello world
```

一些 Python 程序员总是这样执行 Python 代码，但从事数据分析和科学计算的人则会使用 IPython 或 Jupyter notebook。IPython 是一个强化的 Python 解释器，Jupyter notebook 是一个基于网页的代码 notebook，它原先也是起源于 IPython 项目。在本章中，我介绍了如何使用 IPython 和 Jupyter，在[[03 Resource/Book/图书专著/02 利用 Python 进行数据分析/附录A 高阶 NumPy\|附录 A]] 中有对 IPython 功能更深入的介绍。当你使用 `%run` 命令时，IPython 会在同一进程内执行指定文件中的代码，代码运行结束之后，还可以查看结果：

```python
$ ipython
Python 3.10.4 | packaged by conda- forge | (main, Mar 24 2022, 17:38:57)
Type 'copyright', 'credits' or 'license' for more information IPython 7.31.1 - - An enhanced Interactive Python. Type '?' for help.

%run hello_world.py
Hello world

In [2]:
```

IPython 默认采用有序号的格式 `in[2]:` 作为提示符，区别于标准的 `>>>` 提示符。

## 2.2 IPython 基础

在本节中，我会带你运行 IPython 命令行和 Jupyter notebook，并介绍一些基本概念。

### 运行 IPython 命令行

就像打开普通的 Python 解释器一样，你可以在终端启动 IPython 命令行，只不过要用的命令是 `ipython`:

```python
$ ipython
Python 3.10.4 | packaged by conda- forge | (main, Mar 24 2022, 17:38:57)
Type 'copyright', 'credits' or 'license' for more informationIPython 7.31.1 - - An enhanced Interactive Python. Type '?' for help.

a = 5

a
Out[2]: 5
```

通过输入代码并按回车键（Return 或 Enter 键），可以运行任意 Python 语句。当你只输入一个变量时，会输出表示该对象的字符串：

```python
import numpy as np
data = [np. random. standard_normal () for i in range (7)]
data
Out[7]:
[-0.20470765948471295,
0.47894333805754824,
-0.5194387150567381,
-0.55573030434749,
1.9657805725027142,
1.3934058329729904,
0.09290787674371767]
```

前两行是 Python 的代码语句。第二条语句创建一个名为 data 的变量，它引用一个新创建的 Python 字典。最后一行在控制台打印 data 的值。

与普通的 print 输出不同，IPython 中大多数 Python 对象都格式化为更易读、更美观的样式。如果在标准 Python 解释器中打印上述 data 变量，则可读性会降低：

```python
>>> import numpy as np
>>> data = [np.random.standard_normal() for i in range(7)]
>>> print (data)
>>> data
[-0.5767699931966723, -0.1010317773535111, -1.7841005313329152, -1.524392126408841, 0.22191374220117385, -1.9835710588082562, -1.6081963964963528]
```

IPython 还支持执行任意代码块（通过复制- 粘贴方法）和整段 Python 脚本的功能。你也可以使用 Jupyter notebook 运行大代码块，接下来就会看到。

### 运行 Jupyternotebook

notebook 是 Jupyter 项目的重要组件之一，它是一个可编写代码、文本（包括 Markdown）、数据可视化以及其他输出的交互式文档。Jupyter notebook 需要与内核互动，内核是 Jupyter 与其他不同编程语言的交互式计算协议。Python 的 Jupyter 内核使用 IPython。

要启动 Jupyter，在终端中运行 jupyter notebook 命令：
  
```
$ jupyter notebook
[I 15:20:52.739 NotebookApp] Serving notebooks from local directory:
/home/wesm/code/pydata-book
[I 15:20:52.739 NotebookApp] 0 active kernels
[I 15:20:52.739 NotebookApp] The Jupyter Notebook is running at:
http://localhost:8888/?token=0a77b52fefe52ab83e3c35dff8de121e4bb443a63f2d...
[I 15:20:52.740 NotebookApp] Use Control-C to stop this server and shut down
all kernels (twice to skip confirmation).
Created new window in existing browser session.
    To access the notebook, open this file in a browser:
        file:///home/wesm/.local/share/jupyter/runtime/nbserver-185259-open.html
    Or copy and paste one of these URLs:
        http://localhost:8888/?token=0a77b52fefe52ab83e3c35dff8de121e4...
     or http://127.0.0.1:8888/?token=0a77b52fefe52ab83e3c35dff8de121e4...
```


在多数平台上，Jupyter 会自动打开默认的浏览器（除非用参数`--no-browser` 指定不打开浏览器）。或者，可以在启动 notebook 之后手动打开网页，对于上面的例子，地址是`http://localhost:8888/?token=0a77b52fefe52ab83e3c35dff8de121e4bb443a63f2d3055`。图 2- 1 展示了 Google Chrome 中的 Jupyter notebook 效果。

> [!note]
>  许多人使用 Jupyter 作为本地的计算环境，但它也可以部署到服务器上远程访问。这里不做介绍，如果需要的话，读者可以自行到网上学习。

![](https://wesmckinney.com/book/images/pda3_0201.png)  
图 2-1: Jupyter notebook 启动页面

单击 New 按钮，选择“Python 3”选项，即可新建一个 notebook，然后就应该看到如图 2-2 所示的内容。如果是首次新建 notebook，请尝试单击空的代码“框”，并输入一行 Python 代码。然后按组合键 <kbd>Shift</kbd>+<kbd>Enter</kbd> 执行。

![](https://wesmckinney.com/book/images/pda3_0202.png)  
图 2-2: Jupyter 新建 notebook 页面

当保存 notebook 时（查看 File 菜单下的“Save and Checkpoint”选项），会创建一个后缀名为`.ipynb` 的文件。这种文件格式包含了当前 notebook 中的所有内容（包括所有代码输出）。其他 Jupyter 用户可以加载、编辑这些 notebook。

要重命名一个打开的 notebook，单击页面上方的 notebook 标题，输入新标题，再按下回车键就可以了。

要加载已存在的 notebook，把它放到启动 Jupyter notebook 进程的相同路径下，再从启动页面打开 notebook 就可以了。读者可用本书 GitHub 仓库的示例 notebook 进行练习，如图 2-3 所示。

![](https://wesmckinney.com/book/images/pda3_0203.png)
图 2-3：用 Jupyter 打开已经存在的 notebook

如果想关闭 notebook，单击 File 菜单下的“Close and Halt”选项。如果只是关闭浏览器的标签页，和 notebook 关联的 Python 进程会在后台持续运行。

虽然 Jupyter notebook 的使用体验和 IPython 命令行不同，但本章中几乎所有的命令和工具都可以在二者通用。

### Tab 补全

从外表上看，IPython 和标准 Python 解释器（通过 python 命令启动）只是看起来不同。相对于后者，IPython 的进步之一是具备其他 IDE 和交互式计算分析环境都有的 Tab 补全功能。在命令行中输入表达式，按下 <kbd>Tab</kbd> 键，通过与之前输入的字符进行匹配，即可搜索任意变量（对象、函数等）的命名空间，搜索结果会便捷地展示在下拉菜单中：

```python
an_apple = 27  
an_example = 42  
an<Tab>
an_apple an_example any
```

在这个例子中，注意 IPython 列出了两个定义过的变量和 Python 的内置函数 `any`。当然，在输入英文的句号之后，你也可以补全任意对象的方法和属性：

```python
b = [1, 2, 3]
b.<Tab>
append() count() insert() reverse()
clear() extend() pop() sort()
copy() index() remove()
```

对于模块也可以通过相同的方式补全：

```python
import datetime  
datetime.<Tab>
date MAXYEAR tinedelta
datetime MINYEAR tinezone
datetime_CAPI time tzinfo
```

> [!note]
>  注意，在默认情况下，IPython 会隐藏以下划线开头的方法和属性，比如魔术方法和内部的“私有”方法和属性，以避免混乱显示（迷惑新人）。这些也可以 Tab 补全，但是你必须首先键入一个下划线才能看到它们。如果你喜欢在 Tab 补全中总是看到这样的方法，可以在 IPython 配置中进行设置。可以在 [IPython 文档](https://ipython.readthedocs.io)中查找方法。

除了搜索交互式命名空间、补齐对象和模块的属性，Tab 补全还适用于其他场景。当输入类似文件路径的字符串（即使是 Python 字符串）时，按下 Tab 键可以补全计算机文件系统匹配输入字符串的完整路径。

结合使用 `%run` 命令（参见[[03 Resource/Book/图书专著/02 利用 Python 进行数据分析/附录B 更多关于IPython的内容#B.2.1 %run 命令\|附录B.2.1]]），Tab 补全可以节省许多键盘操作。

Tab 补全的另一个能节省时间的用途是补全函数的关键字参数（包括等于号=），如图 2- 4 所示。

![](https://wesmckinney.com/book/images/pda3_0204.png)  
图 2-4：在 Jupyter notebook 中自动补全函数关键字

后面会进一步学习函数。

### 自省

在变量前后使用问号（`?`）可以显示对象的信息：

```python
b = [1,2,3]

b?
Type:        list
String form: [1,2,3]
Length:      3
Docstring:
Built-in mutable sequence.

If no argument is given, the constructor creates a new empty list.
The argument must be an iterable if specified.

print?
Docstring:
print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)

Prints the values to a stream, or to sys.stdout by default.
Optional keyword arguments:
file:  a file-like object (stream); defaults to the current sys.stdout.
sep:   string inserted between values, default a space.
end:   string appended after the last value, default a newline.
flush: whether to forcibly flush the stream.
Type:      builtin_function_or_method
```

这就是对象自省。如果对象是函数、实例方法，还定义了文档字符串，也会展示出来。假设我们编写了一个如下的函数（可以在 Python 或 Jupyter notebook 复现）：

```python
def add_numbers(a, b):
    """
    Add two numbers together

    Returns
    -------
    the_sum : type of arguments
    """
    return a + b
```

使用 `?` 就可以显示如下的文档字符串：

```python
add_numbers? 
Signature: add_numbers (a,b)
Docstring: Add two numbers together
Returns
------
the_sum : type of arguments
File:     <ipython- input- 9- 6a548a216e27>
Type:     function
```

`?` 还有一个终极用途，就是像标准 Unix 或 Windows 命令行那样搜索 Python 的命名空间。字符与通配符（`*`）结合可以匹配所有通配符表达式的命名。例如，我们可以获得所有包含 load 的顶级 NumPy 命名空间：

```python
import numpy as np
np.*load*?
np.__loader__
np.load
np.loads
np.loadtext
```

## 2.3 Python 语法基础

在本节中，我将概述基本的 Python 概念和语法机制。在下一章，我将详细介绍 Python 的数据结构、函数和其他内置工具。

### 语法的语义

Python 语言设计强调的是可读性、简洁和清晰。因此，有人称 Python 为“可执行的伪代码”。

#### 使用缩进，而不是括号

Python 使用空白字符（tab 或空格）来组织代码，而不是像其他语言（比如 R、C++、Java 和 Perl）那样使用括号。来看一个排序算法的 for 循环：

```python
for x in array:
    if x < pivot:
        less.append (x)
    else:
        greater.append (x)
```

冒号标志着缩进代码块的开始，冒号之后的所有代码的缩进量必须相同，直到代码块结束。

不管你是否喜欢这种形式，使用空白符是 Python 程序员开发的一部分。

> [!note] 
> 我强烈建议使用 4 个空格作为默认的缩进，并将 tab 替换为 4 个空格。许多文本编辑器的设置里用制表位替代空格（建议这么做！）。IPython 和 Jupyter notebook 会在冒号后的新行自动插入 4 个空格，并将 tab 替换为 4 个空格。

你应该已经看到，Python 语句不需要用分号结尾。但是，分号却可以用来给同在一行的语句进行切分：
`a = 5; b = 6; c = 7`

Python 不建议将多条语句放到一行，这会降低代码的可读性。

#### 万物皆对象

Python 语言的一个重要特性就是对象模型的一致性。Python 解释器中的每个数字、字符串、数据结构、函数、类、模块等，都在它的自有“盒子”内，这就是 Python 对象。每个对象都有关联的类型（例如字符串或函数）和内部数据。在实际中，这可以让语言非常灵活，因为函数也可以作为对象使用。

#### 注释

任何前面带有井号 `#` 的文本都会被Python解释器忽略。这通常用来添加注释或者屏蔽部分代码块，而不是删除。一个简便的方法就是将其注释掉：

```python
results = []
for line in file_handle:
    # keep the empty lines for now
    # if len (line) == 0:
        # continue
    results.append (line.replace ("foo", "bar"))
```

也可以在要执行的代码行后面添加注释。一些程序员习惯于在特定的一行先写代码后写注释，比如：
```python
print ("Reached this line") # Simple status report
```

#### 函数和对象方法调用

你可以用圆括号调用函数，传入零个或若干参数，可以选择将返回值赋值给一个变量，也可以不赋值：

```python
result =f(x,y,z)
g()
```

Python 中几乎每个对象都有内部函数，称作方法，可以用来访问对象内部的内容。可以用下面的语句调用：

```
obj.some_method(x,y,z)
```

函数可以使用位置参数和关键字参数：

`result = f(a,b,c, d=5, e="foo")`

后面会介绍更多函数的知识。

#### 变量和参数传递

当在 Python 中为变量（或命名）赋值时，可以在等号右边创建对这个变量的引用。在使用中，考虑一个整数列表：
```
a = [1, 2, 3]
```

假设将 a 赋值给一个新变量 b：

```
b = a

b
Out[10]: [1, 2, 3]
```

在有些语言中，赋值给 b 会将数据[1,2,3]也一并复制。在 Python 中，a 和 b 实际上是引用了同一个对象，即原有列表[1,2,3]（如图 2-5 所示的引用模型）。为了验证，可以先在 a 中添加一个元素，然后检查 b：
```
a.append(4)

b
Out[12]: [1, 2, 3, 4]
```

![](https://wesmckinney.com/book/images/pda3_0205.png)
图 2-5：对同一对象的双重引用

理解 Python 引用的语义机制（即数据是何时、如何、为何复制的）是非常重要的。尤其是当你用 Python 处理大数据集时。

> [!note]
> 赋值也称作绑定，这是因为我们把一个命名绑定给了一个对象。经过赋值的变量名有时称为绑定变量。

当你将对象作为参数传递给函数时，新的局部变量创建了对原始对象的引用，而不是复制。如果在函数里将一个新对象绑定到一个变量，这个操作不会影响到该函数（即函数圆括号以内的部分）以外“范围”的同名变量。因此，可以修改可变参数的内部值。假设有以下函数：

```python
def append_element (some_list, element):
   ...:      some_list.append (element)
```
然后有：

```python
data = [1, 2, 3]
append_element(data, 4)
data
Out[16]: [1, 2, 3, 4]
```

#### 动态引用，强类型

在 Java 等语言中，当声明变量时，同时需要声明变量的类型，称其为变量的固有类型。

Python 中的对象不涉及固有类型，通过引用，变量可以引用不同类型的对象。下面的代码是没有问题的：

```python
a = 5
type (a)
Out[18]: int

a = 'foo'

type(a)
Out[20]: str
```

变量是在特殊命名空间中的对象名，类型信息保存在对象自身中。一些人可能急于总结 Python 不是“类型化语言”。这是不正确的，看下面的例子：

```
In[21]："5"+5
-------------
TypeError Traceback (most recent call last)  <ipython- input- 21- 7fe5aa79f268> in <module>  - - - - > 1 "5" + 5
TypeError: can only concatenate str (not "int") to str
```

在某些语言中，字符串 `"5"` 可能被隐式转换（或投射）为整数，因此输出结果为 10。在其他语言中，整数 5 会投射为字符串，输出结果是连起来的字符串 `"5"`。在 Python 中不允许此类隐式转换。从这个角度讲，我们认为 Python 是强类型语言，这意味着每个对象都有显式指定的类型（或类），隐式转换只在特定的情况下发生，例如：

```python
In[22]: a=4.5

In[23]: b=2

# 字符串格式化，用于后面访问

In[24]: print (f"a is {type (a)}, b is {type (b)})" a is <class 'float'>，b is <class 'int'>

In[25]: a/b
Out[25]: 2.25
```

这里，即使 b 是整数，但却隐式转换为浮点数以进行除法。

知道对象的类型很重要，最好能让函数可以处理多种类型的输入。使用 `isinstance` 函数可以检查对象是否为特定类型的实例：

```python
In[26]: a=5
In[27]: isinstance(a,int)
Out[27]: True
```

`isinstance` 可以接收包含类型的元组作为参数，检查对象类型是否在类型元组中：

```python
In[28]: a = 5; b = 4.5
In[29]: isinstance(a, (int,float))
Out[29]: True

In[30]: isinstance(b, (int, float))
Out[30]:True
```

#### 属性和方法

Python 的对象通常都有属性（存储在对象“内部”的其他 Python 对象）和方法（与对象关联的函数，可以访问对象的内部数据）。二者可以通过 `<obj.attribute_name>` 访问：

```
a = "foo"

a.<Press Tab>
capitalize() index()        isspace()      removesuffix()  startswith()
casefold()   isprintable()  istitle()      replace()       strip()
center()     isalnum()      isupper()      rfind()         swapcase()
count()      isalpha()      join()         rindex()        title()
encode()     isascii()      ljust()        rjust()         translate()
endswith()   isdecimal()    lower()        rpartition()
expandtabs() isdigit()      lstrip()       rsplit()
find()       isidentifier() maketrans()    rstrip()
format()     islower()      partition()    split()
format_map() isnumeric()    removeprefix() splitlines()
```

也可以用 `getattr` 函数，通过名字访问属性和方法：

```
getattr (a,"split")
Out[32]: <function str.split(sep=None,maxsplit=- 1)>
```

虽然本书中不会大量使用 `getattr` 函数以及相关的函数 `hasattr` 和 `setattr`，但使用它们可以高效编写原生、可复用的代码。

#### 鸭子类型

通常情况下，你可能不关心对象的类型，只关心对象是否具有某些方法或特性。这通常称为鸭子类型，源自“走起来像鸭子，叫起来像鸭子，那么它就是鸭子”的说法。例如，可以通过验证对象是否遵循迭代器协议，验证它是不是可迭代的。对于许多对象，这意味着该对象有一个 `__iter__` 魔术方法，但使用 `iter` 函数来验证是更好的办法：

```
def isiterable(obj):
   ....:     try:
   ....:         iter(obj)
   ....:         return True
   ....:     except TypeError: # not iterable
   ....:         return False
```

对于字符串以及大多数 Python 集合类型，该函数会返回 True：

```python
isiterable("a string")
Out[34]: True

isiterable([1, 2, 3])
Out[35]: True

isiterable(5)
Out[36]: False
```

#### 导入

在 Python 中，模块就是具有 `.py` 扩展名且包含 Python 代码的文件。假设有以下模块：

```python
# some_module.py
PI = 3.14159

def f(x):
    return x + 2

def g(a, b):
    return a + b
```

如果想从同路径下的另一个文件访问 `some_module.py` 中定义的变量和函数，可以：

```python
import some_module
result = some_module.f(5)
pi = some_module.PI
```

或者：

```python
from some_module import g, PI
result = g(5, PI)
```

使用 `as` 关键字，可以给导入的模块起不同的变量名：

```python
import some_module as sm
from some_module import PI as pi, g as gf

r1 = sm.f(pi)
r2 = gf(6, pi)
```
#### 二元运算符和比较运算符

Python 中大部分二元数学运算和比较运算跟其他编程语言的数学语法很相似：

```
5 - 7
Out[37]: -2

12 + 21.5
Out[38]: 33.5

5 <= 2
Out[39]: False
```

表 2-1 列出了所有可用的二元运算符。

表 2-1：二元运算符

| 运算              | 说明                                            |
| --------------- | --------------------------------------------- |
| `a + b`         | a 加 b                                         |
| `a - b`         | a 减 b                                         |
| `a * b`         | a 乘 b                                         |
| `a / b`         | a 除以 b                                        |
| `a // b`        | a 整除以 b，结果只取整数部分，丢弃小数部分                       |
| `a ** b`        | a 的 b 次幂                                      |
| `a & b`         | a 或 b 都为 True，则结果为 True；对于整数，逐位做与运算           |
| `a \| b`        | a 或 b 中有一个为 True，则结果为 True；对于整数，逐位做或运算        |
| `a ^ b`         | 对于布尔值，a 或 b 中有一个为 True，则结果为 True；对于整数，逐位做异或运算 |
| `a == b`        | a 等于 b，则为 True                                |
| `a != b`        | a 不等于 b，则为 True                               |
| `a < b`, a <= b | a 小于（或小于等于）b，则为 True                          |
| `a > b`, a >= b | a 大于（或大于等于）b，则为 True                          |
| `a is b`        | a 和 b 引用同一个 Python 对象，则为 True                 |
| `a is not b`    | a 和 b 引用不同的 Python 对象，则为 True                 |


要判断两个变量是否引用同一个对象，可以使用 `is` 关键字。`is` `not` 可以判断两个对象是不同的：

```python
a = [1, 2, 3]

b = a

c = list(a)

a is b
Out[43]: True

a is not c
Out[44]: True
```

因为 list 函数总是创建一个新的 Python 列表（即复制），我们可以断定 c 不同于 a。`is` 关键字与  ==  运算符不同，如下所示：

```
In[45]: a == c
Out[45]: True
```

is 和 is not 常用来判断变量是否为 None，因为 None 的实例是唯一的：

```
In[46]: a = None
In[47]: a is None
Out[47]:True
```

#### 可变与不可变对象

Python 中的许多对象，例如列表、字典、NumPy 数组，以及用户定义的类型（类），都是可变对象。这意味着可以修改这些对象或其包含的值：

```
a_list = ["foo", 2, [4, 5]]

a_list[2] = (3, 4)

a_list
Out[50]: ['foo', 2, (3, 4)]
```

字符串和元组是不可变对象，不能修改其内部数据：

```
a_tuple = (3, 5, (4, 5))

a_tuple[1] = "four"
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-52-cd2a018a7529> in <module>
----> 1 a_tuple[1] = "four"
TypeError: 'tuple' object does not support item assignment
```

请牢记，可以修改对象并不意味着必须修改它。修改通常会带来副作用。例如，当编写函数时，为了明确告知使用者副作用，应该在函数的文档或注释中写明。如果可能的话，即使不可变对象中可能包含可变对象，我还是推荐使用不可变对象，以避免副作用。

### 标量类型

Python 有为数不多的内置类型，用于处理数值数据、字符串、布尔值（True 或 False），以及日期时间。这些“单值”类型有时称为标量类型，本书中称其为标量。表 2- 2 列出了主要的标量。日期和时间处理会单独讨论，因为它们是标准库的 datetime 模块提供的。

表 2-2：标准 Python 标量类型

| 类型    | 说明                                |
| ----- | --------------------------------- |
| None  | Python 的“null”值（只存在一个 None 对象的实例） |
| str   | 字符串类型，存有 Unicode（UTF-8 编码）字符串     |
| bytes | 原生 ASCII 字节（或 Unicode 编码字节）       |
| float | 双精度（64 位）浮点数（注意，没有独立的 double 类型）  |
| bool  | True 或 False                      |
| int   | 任意精度整数                            |
#### 数值类型

Python 的主要数值类型是 int 和 float。int 可以存储任意大小的数：

```
ival = 17239871

ival ** 6

Out[54]: 26254519291092456596965462913230729701102721
```

浮点数使用 Python 的 float 类型表示。每个浮点数底层都是双精度（64 位）的值。浮点数也可以用科学计数法表示：

```
fval = 7.243

fval 2 = 6.78 e- 5
```

整数除法如果不能得到完整的整数，会自动将结果转换为浮点数：

```
3 / 2 Out[57]: 1.5
```

要使用 C 语言风格的整除（即如果不是完整的整数，则删除小数部分），可以使用地板除（即向下取整数）运算符//：

```
3 // 2 Out[58]: 1
```

#### 字符串

许多人是因为 Python 内建有强大且灵活的字符串处理功能而使用 Python 的。可以用单引号'或双引号"来创建字符串常量：

```python
a = 'one way of writing a string'
b = "another way"
```

Python 字符串的类型是 str。

对于换行的多行字符串，可以使用三引号，`'''` 或 `"""`都行：

```python
c = """
This is a longer string that
spans multiple lines
"""
```

字符串 c 实际包含 4 行文本，`"""` 后和 `lines` 后的换行符都是包含在字符串中的。可以用 `count` 方法计算 c 中的换行符：
```
c.count("\n")
Out[60]: 3
```

Python 的字符串是不可变的，不能修改字符串：

```
a = "this is a string"

a[10] = "f"
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-62-3b2d95f10db4> in <module>
----> 1 a[10] = "f"
TypeError: 'str' object does not support item assignment
```

要解释上面的错误信息，我们从底向上看。我们尝试用字母"f"替换下标为 10 的字符（"当前数组索引的对象"），但是字符串对象不支持这样的替换。如果我们需要修改字符串，则必须用函数或方法创建一个新的字符串，例如使用字符串的 replace 方法：
```
b = a.replace("string", "longer string")

b
Out[64]: 'this is a longer string'
```

经过此次操作，变量 a 并没有被修改：

```
a
Out[65]: 'this is a string'
```

使用 str 函数，许多 Python 对象可以转化为字符串：

```
a = 5.6

s = str(a)

print(s)
5.6
```

字符串是 Unicode 字符的序列，因此可以像其他序列一样处理，比如列表和元组：

```
s = "python"

list(s)
Out[70]: ['p', 'y', 't', 'h', 'o', 'n']

s[:3]
Out[71]: 'pyt'
```

语法`s[:3]`称作切片，适用于多种 Python 序列。后面会更详细地介绍切片。

反斜杠 `\` 是转义字符，用来表示特殊字符，比如换行符 `\n` 或 Unicode 字符。要写一个包含反斜杠的字符串，需要进行转义：

```
s = "12\\34"

print(s)
12\34
```

如果字符串中包含许多反斜杠，但没有特殊字符，做起来就很麻烦。幸好，可以在字符串前面加一个前缀字符 r，表明该字符串是原生字符串：

```
s = r"this\has\no\special\characters"

s
Out[75]: 'this\\has\\no\\special\\characters'
```
`r` 表示原生（raw）。将两个字符串合并，会产生一个新的字符串：

```
a = "this is the first half "

b = "and this is the second half"

a + b
Out[78]: 'this is the first half and this is the second half'
```

字符串的模板化或格式化是另一个重要的主题。Python 3 拓展了此类方法，这里只介绍一种主要方法。字符串对象有 format 方法，可以将格式化参数替换为字符串，生成一个新字符串：

```
template = "{0:.2f} {1:s} are worth US${2:d}"
```

在这个字符串中：
- `{0:.2f}` 表示第一个参数格式化为带有两位小数的浮点数。
- `{1:s}` 表示第二个参数格式化为字符串。
- `{2:d}` 表示第三个参数格式化为一个整数。

要将参数替换为这些格式化的参数，给 format 方法传递一个参数序列：

```
template.format(88.46, "Argentine Pesos", 1)
Out[80]: '88.46 Argentine Pesos are worth US$1'
```

Python 3.6 中导入了一个新功能，即 f- 字符串（f- string，即 formatted string（格式化字符串）的缩写），用其创建格式化字符串更为简单。要创建 f- 字符串，就在字符串的前方加上字符 f。在字符串中，Python 表达式需要放在尖括号中，用于将表达式替换为格式化字符串。

```
amount = 10

rate = 88.46

currency = "Pesos"

result = f"{amount} {currency} is worth US${amount / rate}"
```

可以在每个表达式的后面添加格式说明符，语法和之前的字符串模板相同：

```
f"{amount} {currency} is worth US${amount / rate:.2f}"
Out[85]: '10 Pesos is worth US$0.11'
```
字符串格式化是一个很深的主题，有多种方法和大量的选项用于控制字符串中的值是如何格式化的。如果想要学习更多内容，推荐参阅 [Python 官方文档](https://docs.python.org/3/library/string.html)。

#### 字节和 Unicode

在当前的 Python 中（例如，Python 3.0 及以上版本），Unicode 成为一级字符串类型，可以更兼容地处理 ASCII 和非 ASCII 文本。在早期的 Python 版本中，字符串都是字节，不使用 Unicode 编码。假如知道字符的编码，可以将其转化为 Unicode。看一个例子：

```
val = "español"

val
Out[87]: 'español'
```

可以用 encode 方法将这个 Unicode 字符串转换为 UTF- 8 字节：

```
val_utf8 = val.encode("utf-8")

val_utf8
Out[89]: b'espa\xc3\xb1ol'

type(val_utf8)
Out[90]: bytes
```

假如你知道一个字节对象的 Unicode 编码，用 decode 方法可以解码：

```
val_utf8 = val.encode("utf-8")

val_utf8
Out[89]: b'espa\xc3\xb1ol'

type(val_utf8)
Out[90]: bytes
```

虽然 UTF-8 编码已经变成主流，但因为历史原因，仍然可能碰到不同编码的数据：

```
val.encode("latin1")
Out[92]: b'espa\xf1ol'

val.encode("utf-16")
Out[93]: b'\xff\xfee\x00s\x00p\x00a\x00\xf1\x00o\x00l\x00'

val.encode("utf-16le")
Out[94]: b'e\x00s\x00p\x00a\x00\xf1\x00o\x00l\x00'
```

工作中碰到的文件很多都是字节对象，盲目地将所有数据编码为 Unicode 是不可取的。

#### 布尔值

Python 中的两个布尔值写作 True 和 False。比较运算和其他条件表达式的结果为 True 和 False。布尔值可以与 and 和 or 关键字结合使用：

```
True and True
Out[95]: True

False or True
Out[96]: True
```

布尔值转换为数字时，False 变为 0，True 变为 1：

```
int(False)
Out[97]: 0

int(True)
Out[98]: 1
```

关键字 not 会翻转布尔值，即 True 变为 Flase，反之亦然：

```
a = True

b = False

not a
Out[101]: False

not b
Out[102]: True
```
#### 类型转换

str、bool、int 和 float 类型同时也是函数，可以将其他数据转换为对应的类型：

```
s = "3.14159"

fval = float(s)

type(fval)
Out[105]: float

int(fval)
Out[106]: 3

bool(fval)
Out[107]: True

bool(0)
Out[108]: False
```
请注意，大多数非零值在转换为布尔值时变为True。
#### None

None 是 Python 的空值类型：

```
a = None

a is None
Out[110]: True

b = 5

b is not None
Out[112]: True
```

None 也常常作为函数参数的默认值：

```python
def add_and_maybe_multiply(a, b, c=None):
    result = a + b

    if c is not None:
        result = result * c

    return result
```

#### 日期和时间

Python 内置的 datetime 模块提供了 datetime、date 和 time 类型。datetime 类型结合了 date 和 time 二者存储的信息，是最常使用的：

```
from datetime import datetime, date, time

dt = datetime(2011, 10, 29, 20, 30, 21)

dt.day
Out[115]: 29

dt.minute
Out[116]: 30
```

对于 datetime 实例，可以用 date 和 time 方法分别提取 date 和 time 对象：

```
dt.date()
Out[117]: datetime.date(2011, 10, 29)

dt.time()
Out[118]: datetime.time(20, 30, 21)
```

strftime 方法可以将 datetime 格式化为字符串：

```
dt.strftime("%Y-%m-%d %H:%M")
Out[119]: '2011-10-29 20:30'
```

strftime 函数可以将字符串转换（解析）成 datetime 对象：

```
datetime.strptime("20091031", "%Y%m%d")
Out[120]: datetime.datetime(2009, 10, 31, 0, 0)
```

表 11-2 列出了所有的格式说明。

当对时间序列数据聚类或进行分组时，替换 datetime 序列的时间字段有时会很有用。例如，用 0 替换 minute 和 second 字段：

```
dt_hour = dt.replace(minute=0, second=0)

dt_hour
Out[122]: datetime.datetime(2011, 10, 29, 20, 0)
```

由于 `datetime.datetime` 是不可变类型，上面的方法会产生新的对象。因此在前面的例子中，replace 没有修改 dt：

```
dt
Out[123]: datetime.datetime(2011, 10, 29, 20, 30, 21)
```

两个 datetime 对象相减会产生 datetime. timedelta 类型的对象：

```python
dt2 = datetime(2011, 11, 15, 22, 30)

delta = dt2 - dt

delta
Out[126]: datetime.timedelta(days=17, seconds=7179)

type(delta)
Out[127]: datetime.timedelta
```
输出结果 timedelta（17，7179）指明 timedelta 编码的时间偏移量为 17 天、7179 秒。

将 timedelta 和 datetime 相加会新建一个变动过的 datetime：

```python
dt
Out[128]: datetime.datetime(2011, 10, 29, 20, 30, 21)

dt + delta
Out[129]: datetime.datetime(2011, 11, 15, 22, 30)
```

### 控制流

与其他编程语言一样，Python 有若干内置的关键字进行条件逻辑、循环和其他控制流操作。

#### if、elif 和 else

if 语句是最广为人知的控制流语句之一。它检查一个条件，如果为 True，则执行后面的语句：

```python
x = -5
if x < 0:
    print("It's negative")
```

if 语句后面可以跟一个或多个 elif 代码块，如果所有条件都是 False，还可以添加一个 else 代码块：

```python
if x < 0:
    print("It's negative")
elif x == 0:
    print("Equal to zero")
elif 0 < x < 5:
    print("Positive but smaller than 5")
else:
    print("Positive and larger than or equal to 5")
```
如果某个条件为 True，后面的 elif 代码块就不会执行。当使用 and 和 or 时，复合条件语句是从左到右执行的，并且会发生“短路”：

```python
a = 5; b = 7

c = 8; d = 4

if a < b or c > d:
   .....:     print("Made it")
Made it
```

在这个例子中，不会执行  `c > d`，因为第一个比较结果是 True。

也可以进行链式比较：

```python
4 > 3 > 2 > 1
Out[133]: True
```

#### for 循环

for 循环在集合（例如列表或元组）或迭代器中进行迭代。for 循环的标准语法是：

```python
for value in collection:
    # do something with value
```

可以用 continue 使 for 循环提前进入下一次迭代，跳过剩下的部分。看下面这个例子，将列表中的整数相加，跳过 None 值：

```python
sequence = [1, 2, None, 4, None, 5]
total = 0
for value in sequence:
    if value is None:
        continue
    total += value
```

可以用 break 关键字跳出 for 循环。下面的代码将列表中各元素相加，直到遇到 5：

```python
sequence = [1, 2, 0, 4, 6, 5, 2, 1]
total_until_5 = 0
for value in sequence:
    if value == 5:
        break
    total_until_5 += value
```

break 关键字只是中断最内层的 for 循环，外部其余的 for 循环仍会执行：

```python
for i in range(4):
   .....:     for j in range(4):
   .....:         if j > i:
   .....:             break
   .....:         print((i, j))
   .....:
(0, 0)
(1, 0)
(1, 1)
(2, 0)
(2, 1)
(2, 2)
(3, 0)
(3, 1)
(3, 2)
(3, 3)
```

更详细地，如果集合或迭代器中的元素是序列（元组或列表），在 for 循环中可以将其方便地拆包成变量：

```python
for a, b, c in iterator:
    # do something
```

#### while 循环

while 循环指定了条件和代码快，当条件为 False 或用 break 退出循环时，代码才会退出：

```python
x = 256
total = 0
while x > 0:
    if total > 500:
        break
    total += x
    x = x // 2
```
#### pass

pass 是 Python 中的“无操作”（或“什么都不做”）语句。它用于不执行任何操作的代码块（或作为未完成代码的占位符）。之所以需要它，是因为 Python 使用缩进界定代码块：

```python
if x < 0:
    print("negative!")
elif x == 0:
    # TODO: put something smart here
    pass
else:
    print("positive!")
```

#### range

range 函数生成一个均匀分布的整数序列：

```python
range(10)
Out[135]: range(0, 10)

list(range(10))
Out[136]: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

range 的三个参数是起点、终点、步进，其中步进值可以是负数：

```python
list(range(0, 20, 2))
Out[137]: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

list(range(5, 0, -1))
Out[138]: [5, 4, 3, 2, 1]
```

可以看到，range 产生的整数不包括终点。range 的常见用法是用索引迭代序列：

```python
seq = [1, 2, 3, 4]

for i in range(len(seq)):
   .....:     print(f"element {i}: {seq[i]}")
element 0: 1
element 1: 2
element 2: 3
element 3: 4
```

尽管可以用函数，比如用 list 将 range 生成的所有整数存储在其他数据结构中，但通常默认的迭代器形式就是你想要的。下面的代码对 0～99999 中所有是 3 或 5 倍数的数求和：

```python
total = 0

for i in range(100_000):
   .....:     # % is the modulo operator
   .....:     if i % 3 == 0 or i % 5 == 0:
   .....:         total += i

print(total)
2333316668
```

虽然 range 可以生成任意大的序列，但它在任意时刻耗用的内存却很小。