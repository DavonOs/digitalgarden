---
{"dg-publish":true,"dg-permalink":"books/36632126/Built-In-Data-Structures-Functions-and-Files","permalink":"/books/36632126/Built-In-Data-Structures-Functions-and-Files/","metatags":{"description":"本书第 1 版出版于 2012 年，彼时基于 Python 的开源数据分析库（例如 pandas）仍然是一个发展迅速的新事物，本书也成为该领域排名 No 1 的经典畅销书，前两版中文版累计销售近 30 万册。第 3 版针对 Python 3.10 和 pandas 1.4 进行了更新，并通过实操讲解和实际案例向读者展示了如何高效地解决一系列数据分析问题。读者将在阅读过程中学习新版本的 pandas、NumPy、IPython 和 Jupyter。本书作者 Wes McKinney 是 Python pandas 项目的创始人。本书对 Python 数据科学工具的介绍既贴近实战又内容新颖，非常适合刚开始学习 Python 的数据分析师或刚开始学习数据科学和科学计算的 Python 程序员阅读。","og:site_name":"DavonOs","og:title":"利用 Python 进行数据分析 (原书第3版)","og:type":"book","og:url":"https://zuji.eu.org/books/36632126/Built-In-Data-Structures-Functions-and-Files","og:image":"https://i-blog.csdnimg.cn/direct/a3631c7292b546cc8982429c96df4bb4.png","og:image:width":"50","og:image:alt":"bookcover"},"tags":["program/python"],"dgShowInlineTitle":true,"created":"2025-09-15 17:46","updated":"2025-09-17 22:11"}
---

## 3.1 数据结构和序列

Python 的数据结构简单而强大，通晓它们才能成为熟练的 Python 程序员。我们从元组、列表、字典开始，它们是最常用的序列类型。

### 元组

元组是一个长度固定且不可变的 Python 序列对象，一旦赋值就不能修改。创建元组最简单的方式是用逗号分隔序列值：

```python
In [2]: tup = (4, 5, 6)

In [3]: tup
Out[3]: (4, 5, 6)
```

在许多情况下，可以省略括号：

```python
In [4]: tup = 4, 5, 6

In [5]: tup
Out[5]: (4, 5, 6)
```

用 tuple 方法可以将任意序列或迭代器转换成元组：

```python
In [6]: tuple([4, 0, 2])
Out[6]: (4, 0, 2)

In [7]: tup = tuple('string')

In [8]: tup
Out[8]: ('s', 't', 'r', 'i', 'n', 'g')
```

与其他序列类型一样，可以用方括号`[]`访问元组中的元素。类似 C、C++、Java 等语言，序列索引是从 0 开始的：

```python
In [9]: tup[0]
Out[9]: 's'
```

如果用更复杂的表达式定义元组，经常需要用括号将值括起来，就像下面创建元组的元组的例子：

```python
In [10]: nested_tup = (4, 5, 6), (7, 8)

In [11]: nested_tup
Out[11]: ((4, 5, 6), (7, 8))

In [12]: nested_tup[0]
Out[12]: (4, 5, 6)

In [13]: nested_tup[1]
Out[13]: (7, 8)
```

元组中存储的对象可能是可变对象。一旦创建了元组，元组中的对象就不能修改了：

```
In [14]: tup = tuple(['foo', [1, 2], True])

In [15]: tup[2] = False
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-15-b89d0c4ae599> in <module>
----> 1 tup[2] = False
TypeError: 'tuple' object does not support item assignment
```

如果元组中的某个对象是可变的，比如列表，可以就地进行修改：

```python
In [16]: tup[1].append(3)

In [17]: tup
Out[17]: ('foo', [1, 2, 3], True)
```

可以用加号将元组串联起来，形成更长的元组：

```python
In [18]: (4, None, 'foo') + (6, 0) + ('bar',)
Out[18]: (4, None, 'foo', 6, 0, 'bar')
```

与列表一样，元组乘以一个整数会将几个元组复制并串联起来：

```python
In [19]: ('foo', 'bar') * 4
Out[19]: ('foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar')
```

注意，并没有复制对象本身，只是引用了它。

#### 元组拆包

如果想给类似元组的变量表达式赋值，Python 会试图对等号右边的值拆包：

```
In [20]: tup = (4, 5, 6)

In [21]: a, b, c = tup

In [22]: b
Out[22]: 5
```

即使是含有嵌套元组的序列也会被拆包：

```
In [23]: tup = 4, 5, (6, 7)

In [24]: a, b, (c, d) = tup

In [25]: d
Out[25]: 7
```

使用这个功能可以很容易交换变量名，对于其他语言可能是这样：

```
tmp = a
a = b
b = tmp
```


但是在 Python 中，交换可以这样做：

```
In [26]: a, b = 1, 2

In [27]: a
Out[27]: 1

In [28]: b
Out[28]: 2

In [29]: b, a = a, b

In [30]: a
Out[30]: 2

In [31]: b
Out[31]: 1
```

变量拆包常用来迭代元组或列表的序列：

```
In [32]: seq = [(1, 2, 3), (4, 5, 6), (7, 8, 9)]

In [33]: for a, b, c in seq:
   ....:     print(f'a={a}, b={b}, c={c}')
a=1, b=2, c=3
a=4, b=5, c=6
a=7, b=8, c=9
```

另一个常见用法是从函数返回多个值，后面会详解。

在某些情况下，你可能想从元组的开头“摘取”几个元素。使用特殊的语法  $\star$  rest 可以实现该功能，它也用在函数签名中以获取任意长度的位置参数列表：

```python
In [34]: values = 1, 2, 3, 4, 5

In [35]: a, b, *rest = values

In [36]: a
Out[36]: 1

In [37]: b
Out[37]: 2

In [38]: rest
Out[38]: [3, 4, 5]
```

rest 的部分是想要舍弃的数据，rest 的名字不重要。作为惯用写法，许多 Python 程序员会使用下划线（`_`）表示不需要的变量：

```
In [39]: a, b, *_ = values
```

#### 元组方法

因为不能修改元组的大小和内容，所以它的实例方法都很轻量。其中一个很有用的方法是 count（也适用于列表），用于统计某个值出现的频次：

```
In [40]: a = (1, 2, 2, 2, 3, 4, 2)

In [41]: a.count(2)
Out[41]: 4
```

### 列表

与元组相比，列表是可变对象。长度可变，内容可以就地修改。可以用方括号 `[]` 或 list 类型函数定义列表：

```
In [42]: a_list = [2, 3, 7, None]

In [43]: tup = ("foo", "bar", "baz")

In [44]: b_list = list(tup)

In [45]: b_list
Out[45]: ['foo', 'bar', 'baz']

In [46]: b_list[1] = "peekaboo"

In [47]: b_list
Out[47]: ['foo', 'peekaboo', 'baz']
```

列表和元组的语法接近（但元组不可被修改），在许多函数中可以互换使用。

内置的 list 函数常用来在数据处理中将迭代器或生成器转换为列表：

```
In [48]: gen = range(10)

In [49]: gen
Out[49]: range(0, 10)

In [50]: list(gen)
Out[50]: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### 添加和删除元素

可以使用 append 方法在列表末尾添加元素：

```
In [51]: b_list.append("dwarf")

In [52]: b_list
Out[52]: ['foo', 'peekaboo', 'baz', 'dwarf']
```

可以使用 insert 方法在列表的特定位置插入元素：

```
In [53]: b_list.insert(1, "red")

In [54]: b_list
Out[54]: ['foo', 'red', 'peekaboo', 'baz', 'dwarf']
```

插入的索引必须在 0 和列表长度之间，含 0 和列表长度两个值。

> [!warning]
> 与 append 相比，insert 耗费的计算量更大，因为对后续元素的引用必须在内部迁移，以便为新元素提供空间。如果要在序列的头部和尾部插入元素，可能需要使用 `collections.deque`，这是一个双端队列，是 Python 标准库中专门为此目的而优化实现的库。

insert 的逆运算是 pop，它移除并返回指定索引位置的元素：

```
In [55]: b_list.pop(2)
Out[55]: 'peekaboo'

In [56]: b_list
Out[56]: ['foo', 'red', 'baz', 'dwarf']
```

可以用 remove 去除某个值，remove 会寻找首先出现的值并去除它：

```
In [57]: b_list.append("foo")

In [58]: b_list
Out[58]: ['foo', 'red', 'baz', 'dwarf', 'foo']

In [59]: b_list.remove("foo")

In [60]: b_list
Out[60]: ['red', 'baz', 'dwarf', 'foo']
```

如果不考虑性能，使用 append 和 remove，可以把 Python 列表当作“集合”数据结构（尽管 Python 确实有集合对象，后文会讲到）。

用 in 关键字可以检查列表是否包含某个值：

```
In [61]: "dwarf" in b_list
Out[61]: True
```

关键字 not 可用于否定 in：

```
In [62]: "dwarf" not in b_list
Out[62]: False
```

在列表中检查是否存在某个值远比在字典和集合（马上就讲解）中检查速度慢，因为 Python 是线性扫描列表中的值，但在字典和集合中，在同样的时间内还可以检查其他项（基于散列表）。

#### 串联和组合列表

与元组类似，可以用加号将两个列表串联起来：

```
In [63]: [4, None, "foo"] + [7, 8, (2, 3)]
Out[63]: [4, None, 'foo', 7, 8, (2, 3)]
```

如果有一个已经定义了的列表，用 extend 方法可以追加多个元素：

```
In [64]: x = [4, None, "foo"]

In [65]: x.extend([7, 8, (2, 3)])

In [66]: x
Out[66]: [4, None, 'foo', 7, 8, (2, 3)]
```

通过加法串联列表的计算量较大，这是由于要新建一个列表，并且要复制对象。用 extend 追加元素，尤其是创建大列表时，更为可取。因此：

```
everything = []
for chunk in list_of_lists:
    everything.extend(chunk)
```

要比串联方法更快：

```
everything = []
for chunk in list_of_lists:
    everything = everything + chunk
```

#### 排序

可以调用列表的 sort 函数对其进行排序（无须创建新的对象）：

```
In [67]: a = [7, 2, 5, 1, 3]

In [68]: a.sort()

In [69]: a
Out[69]: [1, 2, 3, 5, 7]
```

sort 有一些选项，有时会很好用。其中之一是传递一个二级排序键（sort key），即一个用于生成排序值的函数。例如，可以按长度对字符串进行排序：

```
In [70]: b = ["saw", "small", "He", "foxes", "six"]

In [71]: b.sort(key=len)

In [72]: b
Out[72]: ['He', 'saw', 'six', 'small', 'foxes']
```

稍后我们会学习 sorted 函数，它可以创建一个排好序的序列副本。

#### 切片

用切片可以选取大多数序列类型的子集，切片的基本形式是在方括号（`[]`）中使用 `start: stop` 参数：

```
In [70]: b = ["saw", "small", "He", "foxes", "six"]

In [71]: b.sort(key=len)

In [72]: b
Out[72]: ['He', 'saw', 'six', 'small', 'foxes']
```

序列也可以对切片赋值：

```
In [75]: seq[3:5] = [6, 3]

In [76]: seq
Out[76]: [7, 2, 3, 6, 3, 6, 0, 1]
```

切片包含 start 索引的元素，但不包含 end 索引的元素。因此，切片结果中包含的元素个数是 stop-start。

start 或 stop 索引都可以省略，省略之后，分别默认为序列的开头和结尾：

```
In [77]: seq[:5]
Out[77]: [7, 2, 3, 6, 3]

In [78]: seq[3:]
Out[78]: [6, 3, 6, 0, 1]
```

负数索引表明从后向前切片：

```
In [79]: seq[-4:]
Out[79]: [3, 6, 0, 1]

In [80]: seq[-6:-2]
Out[80]: [3, 6, 3, 6]
```

你需要一段时间来熟悉切片的用法，尤其是当你之前学的是 R 或 MATLAB 时。图 3- 1 展示了正整数和负整数的切片。在图中，索引标示在边缘以表明正索引切片和负索引切片是在哪里开始和哪里结束的。

![](https://wesmckinney.com/book/images/pda3_0301.png)  
图 3-1：Python 切片示意图

在第二个冒号后面使用步进值 step，可以间隔若干元素取一个元素：

```
In [81]: seq[::2]
Out[81]: [7, 3, 3, 0]
```

如果要将列表或元组翻转过来，一个聪明的方法是使用- 1 作为步进值：

```
In [82]: seq[::-1]
Out[82]: [1, 0, 6, 3, 6, 3, 2, 7]
```
### 字典

字典（dict）可能是 Python 最为重要的内置数据结构。在其他编程语言中，字典可能称为散列表（hashmap）或关联数组（associativearray）。字典是键-值（key-value）对集合，键和值都是 Python 对象。每个键都和一个值关联，这样对于特定的键，就很容易获取、插入、修改、删除对应的值。创建字典的方法之一是使用尖括号，用冒号分隔键和值：

```
In [83]: empty_dict = {}

In [84]: d1 = {"a": "some value", "b": [1, 2, 3, 4]}

In [85]: d1
Out[85]: {'a': 'some value', 'b': [1, 2, 3, 4]}
```

可以像存取列表或元组中的元素一样访问、插入或设置字典中的元素：

```
In [86]: d1[7] = "an integer"

In [87]: d1
Out[87]: {'a': 'some value', 'b': [1, 2, 3, 4], 7: 'an integer'}

In [88]: d1["b"]
Out[88]: [1, 2, 3, 4]
```

可以用检查列表和元组是否包含某个值的方法，检查字典中是否包含某个键：

```
In [89]: "b" in d1
Out[89]: True
```

可以用 del 关键字或 pop 方法（返回值的同时删除键）删除值：

```
In [90]: d1[5] = "some value"

In [91]: d1
Out[91]: 
{'a': 'some value',
 'b': [1, 2, 3, 4],
 7: 'an integer',
 5: 'some value'}

In [92]: d1["dummy"] = "another value"

In [93]: d1
Out[93]: 
{'a': 'some value',
 'b': [1, 2, 3, 4],
 7: 'an integer',
 5: 'some value',
 'dummy': 'another value'}

In [94]: del d1[5]

In [95]: d1
Out[95]: 
{'a': 'some value',
 'b': [1, 2, 3, 4],
 7: 'an integer',
 'dummy': 'another value'}

In [96]: ret = d1.pop("dummy")

In [97]: ret
Out[97]: 'another value'

In [98]: d1
Out[98]: {'a': 'some value', 'b': [1, 2, 3, 4], 7: 'an integer'}
```

keys 和 values 方法分别提供了字典的键和值的迭代器。键的顺序取决于插入的顺序，这两个函数用相同的顺序输出键和值：

```
In [99]: list(d1.keys())
Out[99]: ['a', 'b', 7]

In [100]: list(d1.values())
Out[100]: ['some value', [1, 2, 3, 4], 'an integer']
```

可以使用 items 方法同时迭代键和值，输出键和值的二元组：

```
In [101]: list(d1.items())
Out[101]: [('a', 'some value'), ('b', [1, 2, 3, 4]), (7, 'an integer')]
```

可以用 update 方法将一个字典与另一个字典合并：

```
In [102]: d1.update({"b": "foo", "c": 12})

In [103]: d1
Out[103]: {'a': 'some value', 'b': 'foo', 7: 'an integer', 'c': 12}
```

update 方法是就地修改字典，因此任何传递给 update 的键的旧值都会被舍弃。

#### 用序列创建字典

你可能想将两个序列按元素配对，组合成字典。起初，可能会按如下方式编写代码：

```
mapping = {}
for key, value in zip(key_list, value_list):
    mapping[key] = value
```

因为字典本质上是二元组的集合，dict 函数可以接收二元组的列表：

```
In [104]: tuples = zip(range(5), reversed(range(5)))

In [105]: tuples
Out[105]: <zip at 0x17d604d00>

In [106]: mapping = dict(tuples)

In [107]: mapping
Out[107]: {0: 4, 1: 3, 2: 2, 3: 1, 4: 0}
```

后面会讲到另一种构建字典的方式：字典推导式。

#### 默认值

下面的逻辑很常见：

```
if key in some_dict:
    value = some_dict[key]
else:
    value = default_value
```

不过字典方法 get 和 pop 可以获取并返回默认值，上面的 if-else 代码块可以简写为：

```
value = some_dict.get(key, default_value)
```

如果不存在键，get 默认会返回 None，而 pop 会抛出异常。一个可能的场景是字典中的值经过设置成为另一种集合，比如列表。例如，将一个单词列表按照单词的首字母分类，成为包含列表的字典：

```
In [108]: words = ["apple", "bat", "bar", "atom", "book"]

In [109]: by_letter = {}

In [110]: for word in words:
   .....:     letter = word[0]
   .....:     if letter not in by_letter:
   .....:         by_letter[letter] = [word]
   .....:     else:
   .....:         by_letter[letter].append(word)
   .....:

In [111]: by_letter
Out[111]: {'a': ['apple', 'atom'], 'b': ['bat', 'bar', 'book']}
```

setdefault 字典方法可用于简化上面的流程。一开始的 for 循环可以改写为：

```
In [112]: by_letter = {}

In [113]: for word in words:
   .....:     letter = word[0]
   .....:     by_letter.setdefault(letter, []).append(word)
   .....:

In [114]: by_letter
Out[114]: {'a': ['apple', 'atom'], 'b': ['bat', 'bar', 'book']}
```

内置的 collections 模块有一个很有用的类 defaultdict，可以进一步简化上面的操作。要生成字典，可以向 defaultdict 中传入类型或函数以生成每个位置的默认值：

```
In [115]: from collections import defaultdict

In [116]: by_letter = defaultdict(list)

In [117]: for word in words:
   .....:     by_letter[word[0]].append(word)
```

#### 有效的字典键类型

字典的值可以是任意 Python 对象，而键通常是不可变对象，例如标量类型（整型、浮点型、字符串）或元组（元组中的对象也必须是不可变的）。用术语表达就是可散列性（hashability）。可以用 hash 函数检查对象是不是可散列化的（即可用作字典的键）：

```
In [118]: hash("string")
Out[118]: 4022908869268713487

In [119]: hash((1, 2, (2, 3)))
Out[119]: -9209053662355515447

In [120]: hash((1, 2, [2, 3])) # fails because lists are mutable
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-120-473c35a62c0b> in <module>
----> 1 hash((1, 2, [2, 3])) # fails because lists are mutable
TypeError: unhashable type: 'list'
```
可以看到，使用 hash 函数时，散列值取决于所用的 Python 版本。

要用列表当作键，一种方法是将列表转化为元组，只要元组内部的元素可以散列化，它就可以散列化：

```
In [121]: d = {}

In [122]: d[tuple([1, 2, 3])] = 5

In [123]: d
Out[123]: {(1, 2, 3): 5}
```

### 集合

集合是唯一元素的无序集合。可以用两种方式创建集合：通过 set 函数或使用尖括号的集合字面量 (set literal)：

```
In [124]: set([2, 2, 2, 1, 3, 3])
Out[124]: {1, 2, 3}

In [125]: {2, 2, 2, 1, 3, 3}
Out[125]: {1, 2, 3}
```

集合支持并集、交集、差集和对称差集等数学集合运算。考虑两个集合的示例：

```
In [126]: a = {1, 2, 3, 4, 5}

In [127]: b = {3, 4, 5, 6, 7, 8}
```

并集是取两个集合中不重复的元素。可以用 union 方法或者二元运算符：

```
In [128]: a.union(b)
Out[128]: {1, 2, 3, 4, 5, 6, 7, 8}

In [129]: a | b
Out[129]: {1, 2, 3, 4, 5, 6, 7, 8}
```

交集包含的元素出现在两个集合中，可以用&运算符或 intersection 方法：

```
In [130]: a.intersection(b)
Out[130]: {3, 4, 5}

In [131]: a & b
Out[131]: {3, 4, 5}
```

表 3-1：Python 常用的集合操作  

| 函数                           | 替代语法  | 说明                                   |
| ---------------------------- | ----- | ------------------------------------ |
| a.add (x)                    | N/A   | 将元素 x 加入集合 a                         |
| a.clear ()                   | N/A   | 将集合重置为空，清空所有元素                       |
| a.remove (x)                 | N/A   | 将元素 x 从集合 a 中移除                      |
| a.pop ()                     | N/A   | 从集合 a 中移除任意元素，如果集合为空，则抛出 KeyError 异常 |
| a.union (b)                  | a\|b  | 集合 a 和 b 中的所有唯一的元素                   |
| a.update (b)                 | a\|=b | 设定集合 a 中的元素为 a 与 b 的并集               |
| a.intersection (b)           | a&b   | 集合 a 和 b 中都包含的元素                     |
| a.intersection\_update (b)   | a&=b  | 设定集合 a 中的元素为 a 与 b 的交集               |
| a.difference (b)             | a-b   | 存在于集合 a 但不存在于集合 b 的元素                |
| a.difference\_update (b)     | a-=b  | 设定集合 a 中的元素为 a 与 b 的差集               |
| a.symmetric\_difference (b)  | a^b   | 所有在集合 a 或 b 中，但不同时在 a、b 中的元素         |
| a.symmetric\_difference\_a^b | a^=b  | 集合 a 中的元素为只在 a 中或只在 b 中的元素           |
| a.issubset (b)               | ＜＝    | 如果集合 a 中的元素全部属于 b，则为 True            |
| a.issuperset (b)             | ＞=    | 如果集合 b 中的元素全部属于 a，则为 True            |
| a.isdisjoint (b)             | N/A   | 如果集合 a 和 b 无共同元素，则为 True             |

输入指表 3-1 中的集合 b。

> [!note]
> 如果将不是集合的输入传递给 union 和 intersection 等方法，则 Python 会在执行操作之前将输入转换为集合。如果使用的是二元运算符，运算符前后的两个对象都必须是集合。

所有逻辑集合运算都有对应的实现方法，可以直接用结果替代等号左边的集合。对于非常大的集合，这样做效率更高：

```
In [132]: c = a.copy()

In [133]: c |= b

In [134]: c
Out[134]: {1, 2, 3, 4, 5, 6, 7, 8}

In [135]: d = a.copy()

In [136]: d &= b

In [137]: d
Out[137]: {3, 4, 5}
```

与字典类似，集合元素通常都是不可变的，必须是可散列的，即对值调用 hash 方法不抛出异常。要想在集合中存储列表型的元素（或其他可变序列），必须先转换成元组：

```
In [138]: my_data = [1, 2, 3, 4]

In [139]: my_set = {tuple(my_data)}

In [140]: my_set
Out[140]: {(1, 2, 3, 4)}
```

还可以检查一个集合是不是另一个集合的子集（包含于）或父集（包含）：

```
In [141]: a_set = {1, 2, 3, 4, 5}

In [142]: {1, 2, 3}.issubset(a_set)
Out[142]: True

In [143]: a_set.issuperset({1, 2, 3})
Out[143]: True
```
只有当集合的内容相同时，两个集合才相等：

```
In [144]: {1, 2, 3} == {3, 2, 1}
Out[144]: True
```

### 内置的序列函数

Python 提供了一些有用的序列函数，最好加以掌握并用于实践。

#### enumerate 函数

在迭代一个序列时，可能想跟踪当前项的索引。手动方法可能是：

```python
index = 0
for value in collection: 
    #使用值做某事 
    index += 1
```

由于这么做很常见，Python 内置了一个 enumerate 函数，可以返回（i，value）元组序列：

```python
for index, value in enumerate (collection):
 #使用值做某事
```

#### sorted 函数

sorted 函数可以从任意序列的元素返回一个新建且排好序的列表：

```
In [145]: sorted ([7, 1, 2, 6, 0, 3, 2])  
Out[145]: [0, 1, 2, 2, 3, 6, 7]  

In [146]: sorted ("horse race")  
Out[146]: [' ', 'a', 'c', 'e', 'e', 'h', 'o', 'r', 's']
```

sorted 函数接收与列表的 sort 方法相同的参数。

#### zip 函数

zip 可以将多个列表、元组或其他序列“配对”组合成一个元组列表：

```
In [147]: seq1 = ["foo", "bar", "baz"]

In [148]: seq2 = ["one", "two", "three"]

In [149]: zipped = zip(seq1, seq2)

In [150]: list(zipped)
Out[150]: [('foo', 'one'), ('bar', 'two'), ('baz', 'three')]
```

zip 可以处理任意多个序列，生成的列表的元素个数取决于最短的序列：
```
In [151]: seq3 = [False, True]

In [152]: list(zip(seq1, seq2, seq3))
Out[152]: [('foo', 'one', False), ('bar', 'two', True)]
```

zip 的常见用法是同时迭代多个序列，有时会和 enumerate 同时使用：

```
In [153]: for index, (a, b) in enumerate(zip(seq1, seq2)):
   .....:     print(f"{index}: {a}, {b}")
   .....:
0: foo, one
1: bar, two
2: baz, three
```

#### reversed 函数

reversed 可以逆序迭代序列中的元素：

```
In [154]: list(reversed(range(10)))
Out[154]: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

要记住，reversed 是一个生成器（后面详细介绍），只有实例化（例如使用 list 函数或 for 循环）之后才能创建倒序的序列。

### 列表推导式、集合推导式和字典推导式

列表推导式是一种便捷且应用广泛的 Python 语言特性。用户可以方便地从一个集合中过滤元素，用简明的表达式转换传递给过滤器的元素，从而生成新列表。列表推导式的基本形式如下：

`[expr for value in collection if condition]`

这个表达式等同于如下的 for 循环：

```python
result = []
for value in collection:
    if condition:
        result.append(expr)
```

可以忽略过滤器条件，只保留表达式。例如，给定一个字符串列表，可以过滤长度在 2 及以下的字符串，并将其转换成大写：

```
In [155]: strings = ["a", "as", "bat", "car", "dove", "python"]

In [156]: [x.upper() for x in strings if len(x) > 2]
Out[156]: ['BAT', 'CAR', 'DOVE', 'PYTHON']
```

加以拓展，还可以得到集合推导式和字典推导式，用相似的语法生成集合和字典。

字典推导式如下所示：

```
dict_comp = {key-expr: value-expr for value in collection
             if condition}
```
集合推导式与列表推导式很像，只不过用的是尖括号：

```
set_comp = {expr for value in collection if condition}
```

与列表推导式类似，集合推导式与字典推导式也很方便，而且使代码易于编写和阅读。来看前面的字符串列表。假如我们想得到一个集合，其中包含各字符串的长度，用集合推导式的方法非常方便：

```
In [157]: unique_lengths = {len(x) for x in strings}

In [158]: unique_lengths
Out[158]: {1, 2, 3, 4, 6}
```

使用 map 函数可以更加函数化，进一步简化：

```
In [159]: set(map(len, strings))
Out[159]: {1, 2, 3, 4, 6}
```

作为一个简单的字典推导式的例子，我们可以创建一个字符串的查找映射表以确定它在列表中的位置：

```
In [160]: loc_mapping = {value: index for index, value in enumerate(strings)}

In [161]: loc_mapping
Out[161]: {'a': 0, 'as': 1, 'bat': 2, 'car': 3, 'dove': 4, 'python': 5}
```

#### 嵌套列表推导式

假设我们有一个包含列表的列表，其中有一些英文名和西班牙名：

```
In [162]: all_data = [["John", "Emily", "Michael", "Mary", "Steven"],
   .....:             ["Maria", "Juan", "Javier", "Natalia", "Pilar"]]
```

假设我们想用一个列表包含所有的名字，这些名字中包含两个或更多的 a。可以用 for 循环来完成：

```
In [166]: result = [name for names in all_data for name in names
   .....:           if name.count("a") >= 2]

In [167]: result
Out[167]: ['Maria', 'Natalia']
```

所有这些操作可以用一个嵌套列表推导式完成，如下所示：

In [166]: result = [name for names in all_data for name in names if name.count ("a") >= 2]

In [167]: resultOut[167]: ['Maria', 'Natalia']

起初，嵌套列表推导式看起来有些复杂。列表推导式的 for 循环部分根据嵌套的顺序排列，过滤条件跟之前一样还是放在最后。下面是另一个例子，我们将一个整数元组的列表“扁平化”，生成一个整数列表：

```
In [168]: some_tuples = [(1, 2, 3), (4, 5, 6), (7, 8, 9)]

In [169]: flattened = [x for tup in some_tuples for x in tup]

In [170]: flattened
Out[170]: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

记住，for 表达式的顺序与嵌套 for 循环的顺序（而不是列表推导式的顺序）一样：

```python
flattened = []

for tup in some_tuples:
    for x in tup:
        flattened.append(x)
```

可以有任意多级的嵌套，但是如果有两三级以上的嵌套，就应该从代码可读性的角度考虑一下了。嵌套列表推导式要和列表推导式中的列表推导式区分开，后者也是非常有效的：

```
In [172]: [[x for x in tup] for tup in some_tuples]
Out[172]: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

这段代码生成了一个列表的列表，而不是扁平化的只包含内部元素的列表。

## 3.2 函数

函数是 Python 中最主要也是最重要的代码组织和复用手段。作为最重要的原则，如果你要重复使用相同或非常类似的代码，就需要写一个函数。通过给一组 Python 语句起一个函数名，还可以提高代码的可读性。

使用 def 关键字声明函数。函数包含一段代码，用 return 关键字返回值，也可以不返回值：

In [173]: def my_function (x, y):    return x + y

当代码运行到 return 语句时，return 后面表达式的值就会发送给调用函数的对象，例如：

In [174]: my_function (1, 2)  Out[174]: 3  In [175]: result = my_function (1, 2)  In [176]: result  Out[176]: 3

函数中可以同时拥有多条 return 语句。如果 Python 到达函数末尾时没有遇到任何一条 return 语句，则自动返回 None，如下所示：

In [177]: def function_without_return (x): print (x)  In [178]: result = function_without_return ("hello!")  hello!  In [179]: print (result)  None

每个函数都可以有位置（position）参数和关键字（keyword）参数。关键字参数通常用于指定默认值或可选参数。下面定义的函数的参数 z 是可选的，默认值为 1.5：

def my_function 2 (x, y, z=1.5): if  $z > 1$  . return z \* (x + y) else: return z / (x + y)

关键字参数是可选的，而在调用函数时要指定所有的位置参数。

将值传递给 z 时，可以有关键字也可以没有关键字，但推荐使用关键字：

In [181]: my_function 2 (5, 6, z=0.7)  Out[181]: 0.063636363636363  In [182]: my_function 2 (3.14, 7, 3.5)  Out[182]: 35.49  In [183]: my_function 2 (10, 20)  Out[183]: 45.0

函数参数的主要限制在于，关键字参数必须位于位置参数（如果有的话）之后。关键字参数的顺序可以任意指定。这样就不用死记硬背函数参数的顺序，只需记住参数名就可以了。

### 3.2.1 命名空间、作用域和局部函数

函数可以访问函数内部的变量，也可以访问函数更外一层的外部变量，甚至访问全局变量。Python 还有一种更贴切的用于描述变量作用域的名称，即命名空间。任何在函数中赋值的变量，默认都是分配到局部命名空间中。局部命名空间是在函数被调用时创建的，函数参数会立即填入该命名空间。在函数执行完毕之后，局部命名空间就会被销毁（存在一些例外情况，本章没有涉及）。来看下面这个函数：

def func (): a = [] for i in range (5): a.append (i)

调用 func () 之后，首先创建空列表 a，然后向其中添加 5 个元素，最后 a 会在该函数退出的时候销毁。假如我们像下面这样定义 a：

In [184]: a = []  In [185]: def func ():  ...: for i in range (5):  ...: a.append (i)

每次调用 func 都会修改列表 a：

In [186]: func ()  In [187]: a  Out[187]: [0, 1, 2, 3, 4]  In [188]: func ()  In [189]: a  Out[189]: [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]

虽然可以对函数作用域之外的变量进行赋值，但是这些变量必须用 global 或 nonlocal 关键字声明才行：

In [190]: a = None  In [191]: def bind_a_variable ():  ...: global a  ...: a = []  ...: bind_a_variable ()  ...:  In [192]: print (a)  []

nonlocal 可以让函数修改在高级作用域中定义的非全局变量，它的使用比较复杂，本书中没有用到。读者感兴趣的话，可以从 Python 官方文档学习。

通常不建议频繁使用 global 关键字，因为全局变量一般用于存放系统的某些状态。如果你发现自己用了很多 global 关键字，那就说明可能需要使用面向对象编程了（即使用类）。

### 3.2.2 返回多个值

习惯 Java 和  $\mathtt{C + + }$  编程之后，当我第一次用 Python 编程时，我最喜欢的一个功能是只用简单的语法就可以返回多个值。例如：

def f ():  $\begin{array}{l}{\sf a} = 5\\ {\sf b} = 6\\ {\sf c} = 7 \end{array}$  return a, b, c a, b,  $\mathsf{c} = \mathsf{f}()$

在数据分析和其他科学应用中，经常需要返回多个值。在上面的例子中，该函数其实只返回了一个对象，也就是一个元组，该元组又被拆包到各个结果变量中。上面的例子还可以这样写：

return_value = f ()

这里的 return_value 是一个含有三个返回值的三元组。此外，还有一种非常具有吸引力的多值返回方式，即返回字典：

def f ():  $\begin{array}{l}{\sf a} = 5\\ {\sf b} = 6\\ {\sf c} = 7 \end{array}$  return{"a": a,"b": b,"c": c}

这种方法可能对你很有用。

### 3.2.3 函数即对象

由于 Python 函数都是对象，因此在其他语言中较难表达的构造在 Python 中就简单很多了。假设我们有下面这样一个字符串数组，希望对其进行数据清洗并执行一些转换：

In [193]: states = [" Alabama ", "Georgia!", "Georgia", "georgia", "Florida", "south carolina##", "West virginia?"]

你只要处理过用户提交的调查数据，就见过这种凌乱的数据。为了得到一组能用于分析工作的格式统一的字符串，需要做很多事情：去除空格、删除标点符号、调整为正确的大小写格式。一种做法是使用内置的字符串方法和正则表达式的 re 标准库模块：

```
import re

def clean_strings (strings): result  $\equiv$  [] for value in strings: value  $\equiv$  value.strip () value  $\equiv$  re.sub ("[!#?] ", value) value  $\equiv$  value.title () result.append (value) return result
# 结果如下所示：

In [195]: clean_strings (states) Out[195]: ['Alabama', 'Georgia', 'Georgia', 'Georgia', 'Florida', 'South Carolina', 'West Virginia']
```

还有一个不错的方法，即将需要在给定字符串上执行的所有操作做成一个列表：

```
def remove_punctuation（value): return re.sub ("[!#?] ", "", value) clean_ops  $\equiv$  [str. strip, remove_punctuation, str. title] def clean_strings (strings, ops): result  $\equiv$  [] for value in strings: for func in ops: value  $\equiv$  func（value) result. append（value) return result

# 然后得到：

In [197]: clean_strings (states, clean_ops) Out[197]: ['Alabama', 'Georgia', 'Georgia', 'Georgia', 'Florida', 'South Carolina', 'West Virginia']
```

这种更加函数化的模式使你能在更高的层次轻松修改字符串的转换方式。此时的函数 clean_strings 也更具可复用性和通用性。

还可以将函数用作其他函数的参数，比如内置的 map 函数可以将函数应用到序列上：

```
In [198]: for x in map (remove_punctuation, states):    ...    print (x) AlabamaGeorgiaGeorgiageorgiaFloridasouth carolinaWest virginia
```

map 还可以用作不带过滤器的列表推导式。

### 匿名（lambda）函数

Python 支持所谓的匿名（anonymous）或 lambda 函数。匿名函数仅由单条语句组成，其结果就是返回值。它是通过 lambda 关键字定义的，这个关键字仅仅是为了表达“正在声明匿名函数”：

In [199]: def short_function (x):    ...    return x * 2 In [200]: equiv_anon = lambda x: x * 2

本书其余部分一般将其称为 lambda 函数。它在数据分析工作中非常方便，因为很多数据转换函数都是以函数作为参数的。直接传入 lambda 函数比编写完整的函数简洁得多（也更清晰），甚至比将 lambda 函数赋值给局部变量还简洁。来看下面的例子：

In [201]: def apply_to_list (some_list, f):    ...    return [f (x) for x in some_list]In [202]: ints = [4, 0, 1, 5, 6]In [203]: apply_to_list (ints, lambda x: x * 2) Out[203]: [8, 0, 2, 10, 12]

虽然可以写作[x * 2 for x in ints]，但这里也可以简洁地给 apply_to_list 函数传入一个自定义运算符。

再看另外一个例子。假设有一组字符串，想根据各字符串含有不同字母的数量对其进行排序：

In [204]: strings = ["foo", "card", "bar", "aaaa", "abab"]

这里，我们可以给列表的 sort 方法传入 lambda 函数：

In [205]: strings.sort (key=lambda x: len (set (x)))

In [206]: stringsOut[206]: ['aaaa', 'foo', 'abab', 'bar', 'card']

### 生成器

Python 中的许多对象都支持迭代，比如列表中的对象或文件中的行。这是通过迭代器协议实现的，迭代器协议是一种令对象可迭代的通用方式。例如，对字典进行迭代，获得其所有的键：

In [207]: some_dict = {"a": 1, "b": 2, "c": 3}In [208]: for key in some_dict:    ...    print (key) a    b    c

当你编写 for key in some_dict 时，Python 解释器首先会尝试从 some_dict 创建一个迭代器：

In [209]: dict_iterator = iter (some_dict) In [210]: dict_iteratorOut[210]: <dict_keyiterator at @x7fefe45465c0>

迭代器也是对象，它可以在诸如 for 循环的场景中为 Python 解释器生成对象。大部分能接收诸如列表对象的方法，也都可以接收任意可迭代对象，包括 min、max、sum 等内置方法以及 list、tuple 等类型构造器：

In [211]: list (dict_iterator) Out[211]: ['a', 'b', 'c']

生成器是一种构造新的可迭代对象的简单方式，类似于编写函数。一般的函数执行之后只会返回单个值，而生成器则是以延迟的方式返回一个多值序列，即每返回一个值之后暂停，直到请求下一个值时再继续。要创建生成器，只需将函数中的 return 替换为 yeild 关键字即可：

def squares (n=10):    print (f"Generating squares from 1 to {n ** 2}")    for i in range (1, n + 1):        yield i ** 2

调用该生成器时，不会立即执行任何代码：

In[213]: gen  $\equiv$  squares ()

In[214]: gen Out[214]:<generator object squares at 0x7fefe437d620>

直到你从该生成器请求元素时，生成器才会执行代码：

In[215]: for x in gen: print（x, end="") Generating squares from 1 to 100 149162536496481100

因为生成器每次只输出一个元素，而不是一次性输出整个列表，所以生成器可以让程序占用更少的内存。

### 生成器表达式

另一种构造生成器的更简洁的方法是使用生成器表达式，类似于列表推导式、字典推导式、集合推导式。其创建方式是把列表推导式两端的方括号改成圆括号：

```
In[216]: gen  $\equiv$  （x\*\*2 for x in range（100)) In[217]: gen Out[217]:<generator object <genexpr> at 0 x 7 fefe 437 d 000>
```

它与下面这个长的生成器完全等价：

```
def _make_gen (): for x in range (100): yieldx\*\*2 gen  $\equiv$  _make_gen ()
```

生成器表达式也可以代替列表推导式作为函数参数：

In[218]:sum（x\*\*2 for x in range（100)) Out[218]: 328350 In[219]:dict（（i，i\*\*2）for i in range（5)) Out[219]:{0:0,1:1,2:4,3:9,4:16}

生成器版本有时明显更快，这取决于推导式表达式生成的元素的数量。

### itertools 模块

itertools 模块标准库 itertools 模块中有一组用于许多常见数据算法的生成器。例如，groupby 可以接收任意序列和一个函数，并根据函数的返回值对序列中的连续元素进行分组。例如：

```
In [220]: import itertoolsIn [221]: def first_letter (x):    ...: return x[0]

In [222]: names = ["Alan", "Adam", "Wes", "Will", "Albert", "Steven"]

In [223]: for letter, names in itertools.groupby (names, first_letter):    ...: print (letter, list (names)) # names 是生成器 A ['Alan', 'Adam']W ['Wes', 'Will']A ['Albert']S ['Steven']
```

表 3- 2 中列出了一些常用的 itertools 函数。建议读者参阅 Python 官方文档（https://docs.python.org/3/library/itertools.html）进一步学习。

表 3-2：常用的 itertools 函数  

<table><tr><td>函数</td><td>说明</td></tr><tr><td>chain (*iterables)</td><td>生成一个由多个 iterable 串联组成的序列。一旦第一个迭代器中的元素用完，就会返回下一个迭代器中的元素，以此类推</td></tr><tr><td>combinations (iterable, k)</td><td>根据 iterable 中的元素，生成所有可能包含 k 元组的序列，忽略顺序，不进行替换（需要替换请参考函数 combinations_with Replacement）</td></tr><tr><td>permutations (iterable, k)</td><td>根据 iterable 中的元素顺序，生成所有可能的 k 元元组的序列</td></tr><tr><td>groupby (iterable[, keyfunc])</td><td>为每个唯一键生成（key，sub-iterator）</td></tr><tr><td>product (*iterables, repeat=1)</td><td>生成输入 iterable 的笛卡儿积，结果为元组，类似于嵌套 for 循环</td></tr></table>

### 错误和异常处理

优雅地处理 Python 的错误和异常是构建健壮程序的重要部分。在数据分析中，许多函数只对部分类型的输入有效。例如，Python 的 float 函数可以将字符串转换成浮点数，但输入有误时，会产生 ValueError 错误：

```
In [224]: float ("1.2345")  Out[224]: 1.2345

In [225]: float ("something")

ValueError Traceback (most recent call last)  <ipython- input- 225- 5cffe07933f4> in <module>  - - - - > 1 float ("something")  ValueError: could not convert string to float: 'something'
```

假如想优雅地处理 float 的失败错误，让它返回输入值，我们可以写一个函数，在 try/except 代码块中调用 float:

```
def attempt_float (x):      try:          return float (x)      except:          return x
```

只有当 float（x）抛出异常时，才会执行 except 部分的代码块：

```
In [227]: attempt_float ("1.2345")  Out[227]: 1.2345

In [228]: attempt_float ("something")  Out[228]: 'something'
```

你可能注意到，float 抛出的异常不仅仅是 ValueError:

```
In [229]: float ((1, 2))  TypeError Traceback (most recent call last)  <ipython- input- 229- 82f777b0e564> in <module>  - - - - > 1 float ((1, 2))  TypeError: float () argument must be a string or a real number, not 'tuple'
```

你可能只想处理 ValueError，因为 TypeError（输入不是字符串或数值）可能是程序中合理的错误。可以在 except 之后写一个异常类型：

```
def attempt_float (x):      try:          return float (x)      except ValueError:          return x
```

然后得到：

```
In [231]: attempt_float ((1, 2))

TypeError Traceback (most recent call last) <ipython- input- 231- 8b0026e9e6b7> in <module> - - - - > 1 attempt_float ((1, 2)) <ipython- input- 230- 6209ddecd2b5> in attempt_float (x) 1 def attempt_float (x): 2 try: - - - - > 3 return float (x) 4 except ValueError: 5 return x TypeError: float () argument must be a string or a real number, not 'tuple'
```

可以用异常类型元组同时捕获多个异常（必须使用圆括号）：

def attempt_float (x): try: return float (x) except (TypeError, ValueError): return x

某些情况下，你可能想处理异常，但是希望无论 try 代码块是否报错，都执行一段代码。此时可以使用 finally:

f = open (path, mode="w")  try:      write_to_file (f)  finally:      f.close ()

这样做，文件对象 f 就总能关闭。类似地，可以用 else 让只在 try 代码块成功的情况下才执行代码：

```
f = open (path, mode="w")  try:      write_to_file (f)  except:          print ("Failed")  else:          print ("Succeeded")  finally:          f.close ()
```

#### IPython 中的异常

如果是在运行脚本或执行语句时抛出异常，IPython 默认会打印完整的调用栈轨迹（Traceback），在栈的每个错误点都会附带打印几行上下文：



```
In [10]: %run examples/ipython_bug. py
AssertionError Traceback (most recent call last) /home/wesm/code/pydata- book/examples/ipython_bug. py in <module>() 13 throws_an_exception () 14 - - - > 15 calling_things () /home/wesm/code/pydata- book/examples/ipython_bug. py in calling_things () 11 def calling_things (): 12 works_fine () - - - > 13 throws_an_exception () 14 15 calling_things () /home/wesm/code/pydata- book/examples/ipython_bug. py in throws_an_exception () 7 a = 5 8 b = 6 - - - - > 9 assert (a + b == 10) 10 11 def calling_things ():
```

AssertionError:

自身拥有额外的上下文是 IPython 相对于 Python 标准解释器的极大优势（后者不附带任何上下文）。用魔术命令%xmode 可以控制上下文显示的数量，能从 Plain（与 Python 标准解释器相同）调节到 Verbose（带有函数的参数值和更多信息）。在附录 B 中将可以看到，发生错误之后，使用魔术命令%debug 或%pdb 可以进入调用栈进行交互式的事后调试。

## 3.3 文件和操作系统

本书的代码示例大多使用诸如 pandas. read_csv 之类的高级工具将磁盘上的数据文件读入 Python 数据结构。但我们还是需要了解一些有关 Python 文件处理的基础知识。好在它本来就很简单，这也是 Python 在文本和文件处理领域如此流行的原因之一。

为了打开一个文件以便读写，可以使用内置的 open 函数以及相对或绝对的文件路径，可以指定文件编码也可以不指定：

In [233]: path = "examples/segismundo. txt"  In [234]: f = open (path, encoding="utf- 8")

这里最好传入 `encoding=="utf-8"`，因为对于不同的平台，读取文件时默认的 Unicode 编码不同。默认情况下，文件是以只读模式"r"打开的。然后，我们就可以像处理列表那样来处理这个文件对象 f 了，比如对行进行迭代：

for line in f:    print (line)

从文件中取出的行都带有完整的行终止符（End- Of- Line，EOL），因此你常会看到使用代码得到一组没有 EOL 的行的列表：

In [235]: lines = [x.rstrip () for x in open (path, encoding="utf- 8")]

In [236]: linesOut[236]:['sueña el rico en su riqueza,', 'que más cuidados le ofrece,', 'sueña el pobre que padece',

'sueña el que a medrar empieza,' 'sueña el que afana y pretende,' 'sueña el que agravia y ofende,' 'y en el mundo, en conclusión,' 'todos sueñan lo que son,' 'aunque ninguno lo entiende.', '']

如果使用 open 创建文件对象，使用完毕后一定要用 close 关闭它。关闭文件可以将占用的资源返回操作系统：

In [237]: f.close ()

用 with 语句可以更容易地清理打开的文件：

In [238]: with open (path, encoding="utf- 8") as f:    lines = [x.rstrip () for x in f]

这样可以在退出 with 代码块时自动关闭文件 f。若没有关闭文件，在小型程序或脚本中不会引发问题。但如果程序与大量文件交互，就会导致问题。

如果输入 f=open（path,"w"），就会在 examples/segismundo. txt 中创建一个新文件（请小心！），并覆盖掉该位置原来的任何文件。另外有一个"x"文件模式，它可以创建可写文件，但是如果文件路径存在，就无法创建。表 3- 3 列出了所有的文件模式。

表 3- 3：Python 的文件模式

### 模式说明

模式说明 r 只读模式 w 只写模式，创建新文件（删除同名的任意文件数据）x 只写模式，创建新文件，但存在同名路径时会创建失败 a 追加到现有文件（如果不存在文件则创建一个）中 r+ 读写模式 b 二进制文件模式，添加到其他模式（比如"rb"或"wb"）中 t 文件的文本模式（自动将字节解码为 Unicode）。如果未指明模式，则采取此模式

对于可读文件，最常用的方法是 read、seek 和 tell。read 会从文件中返回一定量的字符。字符的内容是由文件的编码决定的，如果文件以二进制模式打开，则仅由原始字节决定：

In[239]:  $\mathsf{f 1} = \mathsf{open}(\mathsf{path})$  In[240]: f 1. read (10) Out[240]：'Sueñaelr In[241]:  $\mathsf{f 2} = \mathsf{open}(\mathsf{path},\mathsf{mode} = "\mathsf{rb}")$  #二进制模式 In[242]: f 2. read (10) Out[242]: b'Sue\xc 3\xb 1 a el'

read 方法通过读取的字节数推进文件对象的位置。tell 可以给出当前的位置：

In[243]: f 1. tell () Out[243]: 11 In[244]: f 2. tell () Out[244]:10

尽管我们从文件 f 1 读取了 10 个字符，位置却是 11，这是因为使用默认的编码需要这么多字节才能解码 10 个字符。可以用 sys 模块检查默认的编码：

In[245]: import sys In[246]: sys.getdefaultencoding () Out[246]：'utf- 8'

为了维持跨平台统一性，最好在打开文件时传入编码（例如使用最广泛的 encoding="utf- 8"）。seek 将文件位置更改为文件中的指定字节：

In [247]: f 1. seek (3) Out[247]: 3

In [248]: f 1. read (1) Out[248]: 'n'

In [249]: f 1. tell () Out[249]: 5

最后，记住要关闭文件：

In [250]: f 1. close () In [251]: f 2. close ()

向文件中写入文本，可以使用文件的 write 或 writelines 方法。例如，我们可以创建一个没有空行的文件 examples/segismundo. txt:

In [252]: path Out[252]: 'examples/segismundo. txt' In [253]: with open ("tmp. txt", mode="w") as handle: handle.writelines (x for x in open (path) (f len (x) > 1) In [254]: with open ("tmp. txt") as f: lines  $=$  f.readlines () In [255]: lines Out[255]: ['Sueña el rico en su riqueza,\n', 'que más cuidados le ofrece;\n', 'sueña el pobre que padece\n', 'su miseria y su pobreza;\n', 'sueña el que a medrar empieza,\n', 'sueña el que afana y pretende,\n', 'sueña el que agraria y ofende,\n', 'y en el mundo, en conclusión,\n', 'todos sueñan lo que son,\n', 'aunque ningún lo entiende.\n']

表 3- 4 列出了一些常用的文件方法。

表 3- 4：Python 重要的文件方法或属性及其说明

<table><tr><td>方法</td><td>说明</td></tr><tr><td>read ([size])</td><td>根据文件模式，以字节或字符串形式返回数据，可选的 size 参数用于说明读取的字节数或字符数</td></tr><tr><td>readable ()</td><td>如果文件支持 read 操作，则返回 True</td></tr><tr><td>readlines ([size])</td><td>返回文件中的行列表，有可选参数 size</td></tr><tr><td>write (string)</td><td>将字符串写入文件</td></tr><tr><td>writable ()</td><td>如果文件支持 write 操作，则返回 True</td></tr><tr><td>close ()</td><td>关闭文件对象</td></tr><tr><td>flush ()</td><td>将内部 I/O 缓冲区内容刷新到硬盘</td></tr><tr><td>seek (pos)</td><td>移动到指定的文件位置（整数）</td></tr><tr><td>seekable ()</td><td>如果文件对象支持 seek 操作访问任意位置，则返回 True（某些类似文件的对象不支持）</td></tr><tr><td>tell ()</td><td>以整数形式返回当前文件的位置</td></tr><tr><td>closed</td><td>如果文件已关闭，则返回 True</td></tr><tr><td>encoding</td><td>用于将文件字节码转换为 Unicode（通常为 UTF-8）的编码</td></tr></table>

### 文件的字节和 Unicode

Python 文件（可读或可写）操作默认是用文本模式，也就是说，需要处理 Python 的字符串（例如 Unicode）。文本模式与二进制模式不同，在文件模式中加一个 b 就是二进制模式。来看上一节的文件（包含 UTF- 8 编码的非 ASCII 字符）：

In [258]: with open (path) as f:  ...  ...: chars = f.read (10)

In [259]: chars  Out[259]: 'Sueña el r'  In [260]: len (chars)  Out[260]: 10

UTF- 8 是长度可变的 Unicode 编码，所以从文件中请求一定数量的字符时，Python 会从文件中读取足够多（少则 10 字节，多则 40 字节）的字节进行解码。如果以"rb"模式打开文件，则 read 请求会得到确切的字节数：

In [261]: with open (path, mode="rb") as f:  ...  ...: data = f.read (10)  In [262]: data  Out[262]: b'Sue\xc 3\xba el'

根据文本的编码，可以将字节解码为 str 对象，但只有当每个已编码的 Unicode 字符都完整时才能这么做：

```
In [263]: data.decode ("utf- 8") Out[263]: 'Sueña el '

In [264]: data[: 4]. decode ("utf- 8")

UnicodeDecodeError Traceback (most recent call last) <python- input- 264- 846a5c2fed34> in <module> - - - - > 1 data[: 4]. decode ("utf- 8") UnicodeDecodeError: 'utf- 8' codec can't decode byte 0 xc 3 in position 3: unexpected end of data
```

文本模式结合了 open 的 encoding 选项，提供了一种更方便的方法将 Unicode 转换为另一种编码：

In [265]: sink_path = "sink. txt"

In [266]: with open (path) as source: with open (sink_path, "x", encoding="iso- 8859- 1") as sink: sink.write (source.read ())

In [267]: with open (sink_path, encoding="iso- 8859- 1") as f: print (f.read (10)) Sueña el r

注意，不要在二进制模式中使用 seek。如果文件位于字节的中间位置，字节又定义了 Unicode 字符，则随后的读取会产生错误：

```
In [269]: f = open (path, encoding='utf- 8') In [270]: f.read (5) Out[270]: 'Sueña' In [271]: f.seek (4) Out[271]: 4 In [272]: f.read (1) UnicodeDecodeError Traceback (most recent call last) <python- input- 272- 5a354f952aa4> in <module> - - - - > 1 f.read (1) /miniconda/envs/book- env/lib/python 3.10/codecs. py in decode (self, input, final) 320 # decode input (taking the buffer into account) 321 data = self. buffer + input - - - > 322 (result, consumed) = self._buffer_decode (data, self. errors, final ) 323 # keep undecoded input until the next call 324 self. buffer = data[consumed:] UnicodeDecodeError: 'utf- 8' codec can't decode byte 0 xb 1 in position 0: invalid start byte
```

In [273]: f.close ()

如果你经常对非 ASCII 字符文本进行数据分析，则通晓 Python 的 Unicode 功能是非常重要的。更多内容可参阅 Python 官方文档（https://docs.python.org）。

# 3.4 总结

在掌握了 Python 的环境和语法基础后，接下来学习 Python 中的 NumPy 和面向数组的计算。