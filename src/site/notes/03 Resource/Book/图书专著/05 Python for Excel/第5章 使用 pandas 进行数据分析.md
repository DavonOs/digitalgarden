---
{"dg-publish":true,"dg-permalink":"books/35799208/05","permalink":"/books/35799208/05/","metatags":{"description":"本章涉及了 pandas 中用于分析数据集的一些新的概念和工具。我们学习了如何读取 CSV 文件，如何处理缺失或重复的数据，如何利用描述性统计量，也见识到了将 DataFrame 转化为交互式图表有多简单。虽然你可能需要一些时间来消化这些知识，但是应该很快就能体会到 pandas 带来的强大力量。本章对 pandas 和 Excel 的 AutoFilter 功能、VLOOKUP 公式、数据透视表、PowerQuery 进行了对比。","og:site_name":"DavonOs","og:title":"Excel Python","og:type":"book","og:url":"https://zuji.eu.org/books/35799208/05","og:image":"https://file.ituring.com.cn/LargeCover/22038dc37469788a2ed5","og:image:width":"50","og:image:alt":"bookcover"},"created":"2025-09-24 14:43","updated":"2025-09-26 19:26"}
---

## 5.1 DataFrame 和 Series

DataFrame（数据帧）和 Series（序列）是 pandas 的核心数据结构。本节会对 DataFrame 的主要组件——索引、列和数据逐一介绍。

DataFrame 和二维的 NumPy 数组类似，但是它的行和列有对应的标签，并且每一列都可以存储不同类型的数据。从 DataFrame 中提取一行或一列时，你会得到一个一维的 Series。类似地，Series 相当于带标签的一维 NumPy 数组。

请看图 5-1 中的 DataFrame 的结构，你立马就会发现 DataFrame 可以被当作基于 Python 的工作表。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/e02df92cb0a38c2449ade388ba088e8f9f0551122ed2067a64ff03e2f9ed2aea.jpg)  
图 5-1：pandas 中的 Series 和 DataFrame

从工作表到 DataFrame 的过渡非常简单，请看图 5-2 中的 Excel 表格，表格中展示了网课学员的基本信息及其分数。你可以在配套代码库的 xl 文件夹中找到对应的 course_participants.xlsx 文件。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/029577bef8ba85b4bea7ee145753d2fea76108f3339724819c0f6b9dc93b7d47.jpg)  
图 5-2：course_participants. xlsx

为了能在 Python 中使用这个 Excel 表格，首先要导入 pandas，然后使用 read_excel 函数通过 Excel 文件构造一个 DataFrame。

```python
import pandas as pd
pd.read_excel("xl/course_participants.xlsx")
>>> 
    user_id   name age country score continent
0      1001   Mark  55   Italy   4.5    Europe
1      1000   John  33     USA   6.7   America
2      1002    Tim  41     USA   3.9   America
3      1003  Jenny  12 Germany   9.0    Europe
```

> 在 Python 3.9 中使用 `read_excel` 函数
> 如果你在 Python 3.9 或者更高版本中使用 `pd.read_excel` 函数，那么一定要确保 pandas 版本在 1.2 以上，否则会在读取 xlsx 文件时发生错误[^1]。

[^1]:运行 pandas 1.2 以上的版本需要 Python 的版本在 3.7.1 以上。不过即使你使用的是 pandas 1.2 以上的版本也大概率会遇到错误。pandas 可能会提示你缺少依赖项 xlrd，而安装 xlrd 的最新版本后它又会报错。由于 xlrd 在 2.0 版本之后出于安全原因不再支持加载 xlsx 文件，仅支持 xlsx 文件，因此这里的代码还是会发生错误。有两种选择，一种是安装 xlrd 时指定安装 2.0 以下的版本（1.2.0 是最高的支持 xlsx 文件的版本），另一种是安装 openpyxl 库（支持 xlsx），然后在调用 read_excel 函数时指定关键字参数 `engine='openpyxl'`，即 `pd.read_excel("xl/course_participants.xlsx", engine='openpyxl')`。另外，由于版本和使用的库的不同，部分内容的输出“可能”和书中不同，不过各种方法和函数进行的工作是一样的，反映的结果也应该是一样的。——译者注

如果你在 Jupyter 笔记本中执行上面的代码，则 DataFrame 会被规整地格式化成 HTML 表格，这样看起来就更像 Excel 表格了。整个第 7 章我都会讲怎么用 pandas 读写 Excel 文件，这里的例子只是为了向你表明一点：工作表和 DataFrame 是如此相似。

下面我们不从 Excel 读取数据，而是从头创建一个 DataFrame。创建 DataFrame 的方法之一是利用嵌套列表来提供数据，除了数据本身，还需要提供 columns 参数和 index 参数：

```
data = [["Mark", 55, "Italy", 4.5, "Europe"], 
	   ["John", 33, "USA", 6.7, "America"], 
	   ["Tim", 41, "USA", 3.9, "America"], 
	   ["Jenny", 12, "Germany", 9.0, "Europe"]] 
df = pd.DataFrame(data=data, 
                 columns=["name", "age", "country", "score", "continent"], 
                         index=[1001, 1000, 1002, 1003]) 
df
>>> 
	    name	age	country	score	continent
1001	Mark	55	Italy	4.5	       Europe
1000	John	33	USA	    6.7	      America
1002	Tim	    41	USA	    3.9	      America
1003	Jenny	12	Germany	9.0	       Europe
```

调用 info 方法可以获得 DataFrame 的一些基本信息，其中最重要的是数据点数量和每一列的数据类型：

```
df.info()
```
如果只对列的数据类型感兴趣，那么可以执行 `df.dtypes`。如果列含有字符串或者混合了不同数据类型，那么它的数据类型就是 `object`。现在来仔细研究一下 DataFrame 的索引和列。

### 5.1.1 索引

DataFrame 的行标签被称为索引 (index)。如果你找不到一个有意义的索引，那么在构造 DataFrame 时可以直接省略，pandas 会自动创建一个从 0 开始的整数索引。在前面从 Excel 文件创建 DataFrame 的例子中我们已经见识到了这种情况。索引可以让 pandas 更快地查询数据，并且对很多常见的操作（比如将两个 DataFrame 组合在一起）来说，索引是必不可少的。可以像下面这样获取索引对象：

```
In [5]: df.index
Out[5]: Int 64 Index ([1001, 1000, 1002, 1003], dtype='int 64')
```

如果可以的话，应该给索引取一个名字。根据 Excel 表格对应的列名，我们给索引取名为 `user_id`:

```
In [6]: df. index. name = "user_id"
df
Out[6]: name age country score continent  user_id  1001 Mark 55 Italy 4.5 Europe  1000 John 33 USA 6.7 America  1002 Tim 41 USA 3.9 America  1003 Jenny 12 Germany 9.0 Europe
```

和数据库中的主键不同，DataFrame 的索引可以重复，但是这种情况下查询速度可能会变慢。要将索引还原成普通的列，可以使用 reset_index，而 set_index 可以设置一个新的索引。如果在设置新索引时不想丢掉原本的索引，那么一定要先重置索引：

```
In [7]: # reset_index 会将索引还原为普通列，同时用默认索引替换当前索引
# 最终结果就和刚从 Excel 文件中得到的 DataFrame 一样
df.reset_index()

Out[7]: user_id name age country score continent 0 1001 Mark 55 Italy 4.5 Europe 1 1000 John 33 USA 6.7 America 2 1002 Tim 41 USA 3.9 America 3 1003 Jenny 12 Germany 9.0 Europe

In [8]: # reset_index 会将 user_id 还原成普通列  # set_index 会将 "name" 列设置为索引  df. reset_index (). set_index ("name")  Out[8]: user_id age country score continent  name  Mark 1001 55 Italy 4.5 Europe  John 1000 33 USA 6.7 America  Tin 1002 41 USA 3.9 America  Jenny 1003 12 Germany 9.0 Europe
```

`df.reset_index().set_index("name")` 这种形式的代码被称为链式方法调用（method chaining）：reset_index () 会返回一个 DataFrame，你可以直接在这个 DataFrame 上调用另一个方法而无须写出中间值。

DataFrame 的方法返回的是副本

每当以 df. method_name（）的形式调用 DataFrame 的方法时，你都会得到一个应用了该方法的 DataFrame 副本，而原来的 DataFrame 没有任何变化。刚刚调用的 df_reset_index（）就是这样的。如果你想改变原来的 DataFrame，那么可以把返回值赋值给原来的变量：

```
df = df.reset_index()
```

我们并没有这么做，所以变量 df 仍然保存的是原本的数据。下一个例子也是调用的 DataFrame 上的方法，所以原本的 DataFrame 依旧不变。

用 reindex 方法更换索引：

In[9]: df.reindex ([999,1000,1001,1004]) Out[9]: name age country score continent user_id 999 NaN NaN NaN NaN NaN 1000 John 33.0 USA 6.7 America 1001 Mark 55.0 Italy 4.5 Europe 1004 NaN NaN NaN NaN NaN

这是实际工作中进行数据对齐的一个例子：reindex 会接管所有能够匹配新索引的行，而无法匹配的索引会引入含有空值（NaN）的行。被忽略的索引所对应的行会被直接丢弃。稍后本章会更详细地介绍 NaN。最后，使用 sort_index 可以按索引进行排序：

In[10]: df. sort_index () Out[10]: name age country score continent user_id 1000 John 33 USA 6.7 America 1001 Mark 55 Italy 4.5 Europe 1002 Tim 41 USA 3.9 America 1003 Jenny 12 Germany 9.0 Europe

如果你想按一列或多列进行排序，可以使用 sort_values：

```
In[11]: df. sort_values（["continent"，"age"）） Out[11]: name age country score continent user_id 1000 John 33 USA 6.7 America 1002 Tim 41 USA 3.9 America 1003 Jenny 12 Germany 9.0 Europe 1001 Mark 55 Italy 4.5 Europe
```

上面的例子展示了如何先按 continent 排序，再按 age 排序。如果只想按某一列进行排序，那么也可以用列名字符串作为参数：

```
df.sort_values("continent")
```

本节讲述了索引的基本原理。现在把注意力转向另一个方向——DataFrame 的列。

### 5.1.2 列

执行如下代码可以获得 DataFrame 列的信息：

```
In [12]: df. columnsOut[12]: Index (['name', 'age', 'country', 'score', 'continent'], dtype='object')
```

如果在构造 DataFrame 时没有提供列名，那么 pandas 会用从 0 开始的数字为列编号。不过在处理列的时候这并不是一个好主意，列代表着各种变量，要取个名字并非难事。为列命名与命名索引类似：

```
In [13]: df. columns. name = "properties"dfOut[13]: properties name age country score continentuser_id 1001 Mark 55 Italy 4.5 Europe 1000 John 33 USA 6.7 America 1002 Tim 41 USA 3.9 America 1003 Jenny 12 Germany 9.0 Europe
```

如果不喜欢某些列的列名，可以进行重命名：

```
In [14]: df.rename (columns={'name': "first Name", "age": "Age"}) Out[14]: properties First Name Age country score continentuser_id 1001 Mark 55 Italy 4.5 Europe 1000 John 33 USA 6.7 America 1002 Tim 41 USA 3.9 America 1003 Jenny 12 Germany 9.0 Europe
```

如果想删除某些列，可以使用如下语法（这个例子还体现了如何在删除列的同时删除索引）：

```
In [15]: df.drop (columns=['name', 'country'], index=[1000, 1003]) Out[15]: properties age score continentuser_id 1001 55 4.5 Europe 1002 41 3.9 America
```

DataFrame 的列和索引都是由 Index 对象表示的，通过转置（transpose）DataFrame 可以将行和列对调：

```
In [16]: df. T # df.transpose () 的简写 Out[16]: user_id 1001 1000 1002 1003 propertiesname Mark John Tim Jennyage 55 33 41 12 country Italy USA USA Germanyscore 4.5 6.7 3.9 9 continent Europe America America Europe
```

这里要记住的是，我们的 DataFrame df 仍然原封不动，因为并没有将方法返回的 DataFrame 赋值给原来的 df 变量。如果需要更改 DataFrame 列的顺序，那么也可以使用用在索引上的 reindex 方法，不过直接给出所需要的列顺序通常会更直观：

```
In[17]: df. loc[:, ["continent", "country", "name", "age", "score"]] Out[17]: properties continent country name age score user_id 1001 Europe Italy Mark 55 4.5 1000 America USA John 33 6.7 1002 America USA Tim 41 3.9 1003 Europe Germany Jenny 12 9.0
```

这个例子还需要一些解释，关于 loc 以及数据选取的内容会在下一节中讨论。

# 5.2 数据操作

真实世界的数据并非天上掉下来的，在使用数据之前，需要对其进行清理，使其更易于理解。在本节开头，先来看看如何从 DataFrame 中选取数据，如何修改数据，以及如何处理缺失和重复的数据。然后再对 DataFrame 进行一些运算，看看如何处理文本数据。在本节末尾，你会明白 pandas 什么时候会返回视图，什么时候又会返回数据的副本。本节中的很多概念和我们在第 4 章的 NumPy 数组中看到的是相关联的。

# 5.2.1 选取数据

在学习其他方法（比如用布尔值索引和用 MultiIndex 选取数据）之前，先来看看如何用标签和位置访问数据。

# 1. 使用标签选取数据

访问 DataFrame 数据的最常见方式是用它的标签来引用数据。使用 loc 属性（代表 location，位置）指定你想获取的行和列：

df. loc[row_selection, column_selection]

loc 支持切片语法，因此可以用冒号来选取所有的行或者列。你既可以提供保存标签的列表作为参数，也可以只提供单个行或者列的名称作为参数。表 5- 1 给出了一些从 df 这个 DataFrame 中选取部分数据的方法。

表 5-1：通过标签选取数据  

<table><tr><td>选择</td><td>返回的数据类型</td><td>示例</td></tr><tr><td>单个值</td><td>标量</td><td>df. loc[1000, &quot; country&quot;]</td></tr><tr><td>一列（一维）</td><td>Series</td><td>df. loc[:, &quot; country&quot;]</td></tr><tr><td>一列（二维）</td><td>DataFrame</td><td>df. loc[:, [&quot; country&quot;]]</td></tr><tr><td>多列</td><td>DataFrame</td><td>df. loc[:, [&quot; country&quot;, &quot; age&quot;]]</td></tr><tr><td>列区间</td><td>DataFrame</td><td>df. loc[:, &quot; name&quot;: &quot; country&quot;]</td></tr></table>

（续）

<table><tr><td>选择</td><td>返回的数据类型</td><td>示例</td></tr><tr><td>一行（一维）</td><td>Series</td><td>df. loc[1000, :]</td></tr><tr><td>一行（二维）</td><td>DataFrame</td><td>df. loc[[1000], :]</td></tr><tr><td>多行</td><td>DataFrame</td><td>df. loc[[1003, 1000], :]</td></tr><tr><td>行区间</td><td>DataFrame</td><td>df. loc[1000:1002, :]</td></tr></table>

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/5c90e19aff4d1823602941a30161061bfb1bcb5b6267b4eeeb3a9186be77fb36.jpg)

# 标签切片是闭区间

和 Python 内置的切片语法以及 pandas 的其他地方不同，在使用标签切片时，标签的区间包含区间首尾的两个标签。

运用表 5- 1 的知识，来用 loc 选取标量、Series 和 DataFrame：

In[18]： #行和列都使用标量来选择 ，返回值也是标量 df. loc[1001，"name"]Out[18]：'Mark'In[19]： #只用标量选择行或列 ，返回值是 Seriesdf. loc[[1001，1002]，"age"]Out[19]：user_id 1001 551002 41 Name: age，dtype: int 64 In[20]： #选取多行或多列 ，返回值是 DataFramedf. loc[: 1002，["name"，"country"\|1001，1002]，"age"]Out[19]：user_id 1001 551002 41 Name: age，dtype: int 64 In[20]： #选取多行或多列 ，返回值是 DataFramedf. loc[: 1002，["name"，"country"]]Out[20]：properties name countryuser_id 1001 Mark Italy 1000 John USA 1002 Tim USA

DataFrame（无论是一列还是多列）与 Series 之间是有区别的，理解这一点至关重要。即使只包含一列，DataFrame 也是二维的数据结构，而 Series 永远是一维的。DataFrame 和 Series 都有索引，但只有 DataFrame 有列标题。当你选取一列生成 Series 时，列标题就变成了 Series 的名称。很多函数对于 Series 和 DataFrame 是通用的，但是当你执行算术运算时，它们的行为就产生了差异。对于 DataFrame，pandas 会让数据和列标题对齐，稍后本章会对此进行详细解释。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/3164f6835deb4546c443e7162ec9d753fcb5d1d6c4ecb9751701ce77bbbfe7d3.jpg)

# 列选择的捷径

列的选择的捷径列的选取是十分常见的操作，pandas 为其提供了更简单的写法。除了这样写：

df. loc[:, column_selection]

也可以这样写：

df[column_selection]

例如，df["country"]会从我们的示例 DataFrame 中返回一个 Series，而 df["name"，"country"]]会返回一个包含两列的 DataFrame。

# 2. 通过位置选取数据

通过位置选取 DataFrame 的子集类似于本章开头在 NumPy 数组上进行的操作。不过对于 DataFrame 来说，你需要使用 iloc 属性，它的意思是整数位置（integerlocation）：

df. iloc[row_selection, column_selection]

在使用切片时，iloc 使用的是标准的半开半闭区间。和表 5- 1 一样，表 5- 2 也给出了不同情况下的返回值类型及其语法。

表 5-2：通过位置选取数据  

<table><tr><td>选择</td><td>返回的数据类型</td><td>示例</td></tr><tr><td>单个值</td><td>标量</td><td>df. iloc[1, 2]</td></tr><tr><td>一列（一维）</td><td>Series</td><td>df. iloc[:, 2]</td></tr><tr><td>一列（二维）</td><td>DataFrame</td><td>df. iloc[:, [2]]</td></tr><tr><td>多列</td><td>DataFrame</td><td>df. iloc[:, [2, 1]]</td></tr><tr><td>列区间</td><td>DataFrame</td><td>df. iloc[:, : 3]</td></tr><tr><td>一行（一维）</td><td>Series</td><td>df. iloc[1, :]</td></tr><tr><td>一行（二维）</td><td>DataFrame</td><td>df. iloc[1:], :]</td></tr><tr><td>多行</td><td>DataFrame</td><td>df. iloc[3, 1], :]</td></tr><tr><td>行区间</td><td>DataFrame</td><td>df. iloc[1:3, :]</td></tr></table>

和 loc 的示例类似，下面是 iloc 的用法示例：

In[21]: df. iloc[0,0] #返回标量 Out[21]：'Mark' In[22]: df. iloc[0，2]，1] #返回Series Out[22]: user_id 1001 55 1002 41 Name: age, dtype: int 64 In[23]: df. iloc[: 3，[0，2]] #返回DataFrame Out[23]: properties name country user_id 1001 Mark Italy 1000 John USA 1002 Tim USA

使用标签或者位置选取数据并非选取 DataFrame 子集的唯一方法，还有一种重要的方法是布尔索引，下面来看看布尔索引是如何工作的。

# 3. 使用布尔索引选取数据

布尔索引（boolean indexing）是借助只包含 True 或 False 的 Series 或 DataFrame 来选取一个 DataFrame 的子集。布尔 Series 可以用来选取 DataFrame 的特定列和行，布尔 DataFrame 则用来选取整个 DataFrame 中的某些值。布尔索引最常见的用例是用来筛选 DataFrame 的行。你可以将其视为 Excel 中的 AutoFilter 函数。例如，你可以像下面这样筛选 DataFrame

中的数据，使其只展示居住在美国且年龄在 40 岁以上的学员：

In[24]: tf  = （df["age"]  $>40$  ）&（df["country"]  $= =$  "USA") tf #这个Series中只有True和FalseOut [24]: user_id 1001 False 1000 False 1002 True 1003 Falsedtype: boolIn[25]: df. loc[tf,:]Out[25]: properties name age country score continentuser_id 1002 Tim 41 USA 3.9 America

这里有两点需要解释一下。第一，由于技术上的限制，你无法在 DataFrame 中使用第 3 章讲到的 Python 布尔运算符。你需要使用表 5- 3 中的这些符号。

表 5-3：布尔运算符  

<table><tr><td>Python 基本数据类型</td><td>DataFrame 和 Series</td></tr><tr><td>and</td><td>&amp; amp;</td></tr><tr><td>or</td><td>|</td></tr><tr><td>not</td><td>~</td></tr></table>

第二，如果你的筛选条件不止一条，那么一定要在每条布尔表达式之间加上圆括号，这样可以防止运算符优先级造成的问题：例如，&运算符的优先级比  $= =$  高。因此如果没有圆括号的话，上面例子中的表达式就会被解释成下面这样：

$$
\mathsf{df}[\mathrm{"age"}] > (40\& \mathsf{df}[\mathrm{"country"}]) = =\mathrm{"USA"}
$$

如果你想对索引进行筛选，那么可以用 df. index 来引用索引对象：

In[26]: df. loc[df. index  $>$  1001,:]Out[26]: properties name age country score continentuser_id 1002 Tim 41 USA 3.9 America 1003 Jenny 12 Germany 9.0 Europe

Python 的基本数据结构（如列表）可以使用 in 运算符判断是否包含某些对象，如果要在 Series 中进行类似的操作，就需要使用 isIn 方法。可以像下面这样筛选出所有来自意大利和德国的学员：

In[27]: df. loc[df["country"]. isin (["Italy","Germany"]）：]Out[27]: properties name age country score continentuser_id 1001 Mark 55 Italy 4.5 Europe 1003 Jenny 12 Germany 9.0 Europe

你可以为 loc 提供一个布尔 Series 作为参数，不过 DataFrame 还提供了一种特殊的语法，

可以在不使用 loc 的情况下传递一整个布尔 DataFrame 作为参数：

df[boolean_df]

在 DataFrame 只包含数字时这种语法特别有用。当提供这样一个布尔 DataFrame 作为参数时，返回的 DataFrame 会在原 DataFrame 的基础上，把对应着 False 的地方变成 NaN。有关 NaN 的详细讨论依然会放在后面。下面先来创建一个新的示例 DataFrame，命名为 rainfall，它只包含数字：

In[28]: #当作以毫米为单位的年降雨量 rainfall  = pd.DataFrame (data  = {"City 1":[300.1,100.2], "City 2":[400.3,300.4], "City 3":[1000.5,1100.6]}） rainfall Out[28]: City 1 City 2 City 3 0 300.1 400.3 1000.5 1 100.2 300.4 1100.6 In[29]: rainfall  $<$  400 Out[29]: City 1 City 2 City 3 0 True False False 1 True True False In[30]: rainfall[rainfall  $<$  400] Out[30]: City 1 City 2 City 3 0 300.1 NaN NaN 1 100.2 300.4 NaN

要注意在这个例子中，我使用了字典来构造一个新的 DataFrame。如果数据本身就是这种形式的话，这是很方便的。布尔值的这种用法经常被用来排除某些值，比如异常值。

在本节的最后，我要介绍一种名为 MultiIndex 的特殊索引。

# 4. 使用 MultiIndex 选取数据

MultiIndex 是一种多级索引。它可以将数据按层次分组，这样你就可以更方便地访问 DataFrame 的子集。如果将 continent 和 country 一起设置为 df 这个 DataFrame 的索引，那么你就可以轻松地通过某个大洲的名称来选取对应的所有行：

In[31]: #待排序的MultiIndex df_multi  = df. reset_index (). set_index (["continent","country"]) df_multi  = df_multi. sort_index () df_multi Out[31]: properties user_id name age score continent country America USA 1000 John 33 6.7 USA 1002 Tim 41 3.9 Europe Germany 1003 Jenny 12 9.0 Italy 1001 Mark 55 4.5 In[32]: df_multi. loc["Europe"，:] Out[32]: properties user_id name age score country Germany 1003 Jenny 12 9.0 Italy 1001 Mark 55 4.5

注意，pandas 对 MultiIndex 的输出进行了美化。它不会为每一行数据重复输出最左端的索引级别（大洲），只会在数据所在大洲发生改变时才进行输出。通过多级索引选取数据需要提供一个元组作为参数：

In[33]: df_multi. loc[("Europe","Italy")，:] Out[33]: properties user_id name age score continent country Europe Italy 1001 Mark 55 4.5

如果你想选择性地重置一部分 MultiIndex，那么可以为 reset_index 提供索引级别参数。索引级别从左至右从 0 开始：

In[34]: df_multi. reset_index（level=0） Out[34]: properties continent user_id name age score country USA America 1000 John 33 6.7 USA America 1002 Tim 41 3.9 Germany Europe 1003 Jenny 12 9.0 Italy Europe 1001 Mark 55 4.5

虽然在本书中我们不会手动创建 MultiIndex，但是像 groupby 之类的函数会让 pandas 返回一个带有 MultiIndex 的 DataFrame，还是很有必要知道这一点。本章在后面内容中会介绍 groupby。

现在你知道了选取数据的各种方法，是时候学习如何修改数据了。

# 5.2.2 设置数据

修改 DataFrame 数据的最简单的方法是通过 loc 和 iloc 属性为某些元素赋值，本节内容会从这里讲起。之后本节会介绍操作既存 DataFrame 的其他方式：替换值和添加新列。

# 1. 通过标签或位置设置值

正如前面提到的那样，当你以 df. reset_index（）的形式调用 DataFrame 的方法时，方法总是会被应用到一个副本上，而原本的 DataFrame 是原封不动的。然而通过 loc 属性和 iloc 属性赋值时，原本的 DataFrame 是会被修改的。由于不想修改 df 这个 DataFrame，因此在这里我创建了一个名为 df 2 的副本。如果你想修改某一个值，那么可以像下面这样做：

In[35]: #先复制DataFrame ，保持原本的 DataFrame 不变 df 2  = df.copy () In[36]: df 2. loc[1000，"name"]  = "JOHN"df 2 Out[36]: properties name age country score continentuser_id 1001 Mark 55 Italy 4.5 Europe 1000 JOHN 33 USA 6.7 America 1002 Tim 41 USA 3.9 America 1003 Jenny 12 Germany 9.0 Europe

也可以一次性修改多个值。下面是同时修改 ID 为 1000 和 1001 的两名用户分数的一种方法，这里使用了一个列表作为参数：

In[37]: df 2. loc[1000，1001]，"score"]=[3，4] df 2 Out[37]: properties name age country score continent user_id 1001 Mark 55 Italy 4.0 Europe 1000 JOHN 33 USA 3.0 America 1002 Tim 41 USA 3.9 America 1003 Jenny 12 Germany 9.0 Europe

利用 iloc 按位置修改数据也是一样的。现在来看看如何用布尔索引修改数据。

# 2. 通过布尔索引设置数据

用来筛选行的布尔索引也可以用来为 DataFrame 赋值。假设你需要将所有来自美国且年龄在 20 岁以下的学员匿名：

In[38]: tf  = （df 2["age"]  $< 20$  ）|（df 2["country"]  $= =$  "USA") df 2. loc[tf，"name"]  = "xxx" df 2 Out[38]: properties name age country score continent user_id 1001 Mark 55 Italy 4.0 Europe 1000 xxx 33 USA 3.0 America 1002 xxx 41 USA 3.9 America 1003 xxx 12 Germany 9.0 Europe

有时可能需要将整个数据集中的某个值完全替换，而不是只涉及特定的列。在这种情况下，可以再一次利用这种特殊语法，将一个布尔 DataFrame 作为参数（示例中再一次用到了 rainfall 这个 DataFrame）：

In[39]： #先复制DataFrame ，保持原本的 DataFrame 不变 rainfall 2  = rainfall.copy () rainfall 2 Out[39]: City 1 City 2 City 3 0 300.1 400.3 1000.5 1 100.2 300.4 1100.6 In[40]： #将小于400的值用0替换 rainfall 2[rainfall 2  $< 400] = 0$  rainfall 2 Out[40]: City 1 City 2 City 3 0 0.0 400.3 1000.5 1 0.0 0.0 1100.6

接下来你会看到，如果只想替换一个值，还有一种更简单的做法。

# 3. 通过替换值设置数据

如果想将整个 DataFrame（或者指定列）中的某个值全部替换成另一个值，那么可以使用 replace 方法：

In [41]: df 2. replace ("USA", "U.S.")  Out[41]: properties name age country score continent  user_id  1001 Mark 55 Italy 4.5 Europe  1000 xxx 33 U.S. 6.7 America  1002 xxx 41 U.S. 3.9 America  1003 xxx 12 Germany 9.0 Europe

如果只想在 country 列上进行操作，则可以用这种语法：

df 2. replace ({"country": {"USA": "U.S."}}}

在本例中，由于 USA 只会在 country 列中出现，因此结果和前一个例子是一样的。最后，来看看如何为 DataFrame 添加额外的列。

# 4. 通过添加新列设置数据

为一个新的列名赋值时会为 DataFrame 添加一个新列。例如，利用一个标量或者列表可以为 DataFrame 添加新列：

In [42]: df 2. loc[:, "discount"] = 0  df 2. loc[:, "price"] = [49.9, 49.9, 99.9, 99.9]  df 2  Out[42]: properties name age country score continent discount price  user_id  1001 Mark 55 Italy 4.0 Europe 0 49.9  1000 xxx 33 USA 3.0 America 0 49.9  1002 xxx 41 USA 3.9 America 0 99.9  1003 xxx 12 Germany 9.0 Europe 0 99.9

添加新列时经常涉及向量化运算：

In[43]: df 2  = df. copy（） #从一个新的副本开始 df 2. loc[：，"birth year"]  = 2021- df 2["age"] df 2 Out[43]: properties name age country score continent birth year user_id 1001 Mark 55 Italy 4.5 Europe 1966 1000 John 33 USA 6.7 America 1988 1002 Tim 41 USA 3.9 America 1980 1003 Jenny 12 Germany 9.0 Europe 2099

后面会更详细地介绍 DataFrame 运算，不过在那之前，还记得我们用过好几次的 NaN 吗？在下一节中你终于能够了解到有关缺失数据的更多知识了。

# 5.2.3 缺失数据

数据的缺失可能会对数据分析的结果造成影响，从而你得到的结论就不那么站得住脚了。然而，数据集中有空白是很常见的情况，并且你还不得不对其进行处理。在 Excel 中，你通常必须用空白单元格或者 #N/A错误进行处理 ，不过 pandas 使用 NumPy 的 np. nan 代表

缺失数据，显示为 NaN。NaN 是浮点数标准中的 Not- a- Number（非数字）。对于时间戳，则是使用 pd. NaT，而文本使用的是 None。可以使用 None 或者 np. nan 来表示缺失的值：

In[44]: df 2  = df. copy（） #从一个新的副本开始 df 2. loc[1000,"score"]  = None df 2. loc[1003，：]  = None df 2 Out[44]: properties name age country score continent user_id 1001 Mark 55.0 Italy 4.5 Europe 1000 John 33.0 USA NaN America 1002 Tim 41.0 USA 3.9 America 1003 None NaN None NaN None

在清理 DataFrame 时，你可能想要移除所有包含缺失数据的行。就这么简单：

In[45]: df 2. dropna () Out[45]: properties name age country score continent user_id 1001 Mark 55.0 Italy 4.5 Europe 1002 Tim 41.0 USA 3.9 America

如果只想移除所有值都缺失了的行，那么可以使用 how 参数：

In[46]: df 2. dropna (how="all") Out[46]: properties name age country score continent user_id 1001 Mark 55.0 Italy 4.5 Europe 1000 John 33.0 USA NaN America 1002 Tim 41.0 USA 3.9 America

要想获得一个反映对应位置上是否是 NaN 的布尔 DataFrame 或 Series，可以使用 isna 方法：

In[47]: df 2. isna () Out[47]: properties name age country score continent user_id 1001 False False False False False 1000 False False False True False 1002 False False False False False 1003 True True True True True

使用 fillna 来填补缺失的值。例如，将数据点数量列中的 NaN 替换为平均分（稍后我会介绍像 mean 这样的描述性统计量）：

In[48]: df 2. fillna ({"score": df 2["score"]. mean ()}) Out[48]: properties name age country score continent user_id 1001 Mark 55.0 Italy 4.5 Europe 1000 John 33.0 USA 4.2 America 1002 Tim 41.0 USA 3.9 America 1003 None NaN None 4.2 None

清理数据集时除了需要处理缺失数据，还需要处理重复数据。下面来看看如何清理重复数据。

# 5.2.4 重复数据

和缺失数据一样，重复数据也会对数据分析的可靠性造成负面影响。可以使用 drop_duplicates 方法来清理重复的行。也可以提供列的子集作为参数：

In[49]: df. drop_duplicates (["country","continent"]) Out[49]: properties name age country score continent user_id 1001 Mark 55 Italy 4.5 Europe 1000 John 33 USA 6.7 America 1003 Jenny 12 Germany 9.0 Europe

在默认情况下，第一次出现的数据会得以保留。is_unique 用于确认某一列是否包含重复数据，unique 则可以获得去重后的值。（如果想对索引进行此类操作，那么可以将 df["country"]换成 df. index。）

In[50]: df["country"]. is_unique Out[50]: False In[51]: df["country"]. unique () Out[51]: array (['Italy', 'USA', 'Germany'], dtype=object)

最后，通过 duplicated 方法可以知道哪些行是重复的，它的返回值是一个布尔 Series。keep 参数的默认值是"first"，意思是会保留第一次出现的数据，只将重复数据标记为 True。将 keep 设置为 False 时，所有的重复数据（包括第一次出现时）都会被标记为 True，这样就可以方便地得到一个包含所有重复行的 DataFrame。在下面的例子中，我们在找 country 列的重复数据，但在实际工作中，通常都是找重复的索引或者整行的重复数据。这个时候就要使用 df.index.duplicated () 或者 df.duplicated ()：

In[52]: #在默认情况下 ，只有重复的行会被标记为 True， #即数据第一次出现时不会被标记为Truedf ["country"]. duplicated () Out[52]: user_id 1001 False 1000 False 1002 True 1003 FalseName: country, dtype: boolIn[53]: #要找到所有 "country"发生重复的行， #可以将参数设置为keep =Falsedf. loc[df["country"]. duplicated (keep=False), :]Out[53]: properties name age country score continentuser_id 1000 John 33 USA 6.7 America 1002 Tim 41 USA 3.9 America

在清理了 DataFrame 中的缺失数据和重复数据之后，你可能想要进行一些算术运算。下一节会介绍如何对 DataFrame 进行算术运算。

# 5.2.5 算术运算

和 NumPy 数组一样，DataFrame 和 Series 也利用了向量化技术。例如，要为 rainfall 这个 DataFrame 中的每一个值加上一个数，只需像下面这样做：

In[54]: rainfall Out[54]: City 1 City 2 City 3 0 300.1 400.3 1000.5 1 100.2 300.4 1100.6 In[55]: rainfall + 100 Out[55]: City 1 City 2 City 3 0 400.1 500.3 1100.5 1 200.2 400.4 1200.6

不过 pandas 真正的强大之处是它的自动数据对齐（data alignment）机制：当你对多个 DataFrame 使用算术运算符时，pandas 会自动将它们按照列或行索引对齐。下面再创建一个和 rainfall 有相同行列标签的 DataFrame。然后求两者之和：

In[56]: more_rainfall  = pd.DataFrame (data=[[100，200]，[300，400\|100，200]，[300，400]]， index  $\coloneqq$  [1,2]， columns  $\coloneqq$  ["City 1"，"City 4"]) more_rainfall Out[56]: City 1 City 4 1 100 200 2 300 400 In[57]: rainfall  $^+$  more_rainfall Out[57]: City 1 City 2 City 3 City 4 0 NaN NaN NaN NaN 1 200.2 NaN NaN NaN 2 NaN NaN NaN NaN

结果 DataFrame 的索引和列是两个 DataFrame 的并集：两个 DataFrame 中都有的字段会被相加，而其他的部分会显示为 NaN。如果你是 Excel 开发者，那么可能需要花时间来习惯这种行为，因为 Excel 在执行算术运算时空单元格会被自动变成 0。要让 pandas 和 Excel 以同样的方式处理这个问题，可以使用 add 方法，并将 fill_value 参数设置为 0 以代替默认的 NaN：

In[58]: rainfall.add (more_rainfall, fill_value=0) Out[58]: City 1 City 2 City 3 City 4 0 300.1 400.3 1000.5 NaN 1 200.2 300.4 1100.6 200.0 2 300.0 NaN NaN 400.0

表 5- 4 中的其他算术运算符也有对应的方法，也是同样的工作方式。

表 5-4：算术运算符  

<table><tr><td>运算符</td><td>方法</td></tr><tr><td>*</td><td>null</td></tr><tr><td>+</td><td>add</td></tr><tr><td>-</td><td>sub</td></tr><tr><td>/</td><td>div</td></tr><tr><td>**</td><td>pow</td></tr></table>

当算式的操作数是一个 DataFrame 和一个 Series 时，默认情况下 Series 会按索引进行广播：

In[59]: #用一行数据生成一个Series rainfall. loc[1,:] Out[59]: City 1 100.2 City 2 300.4 City 3 1100.6 Name: 1, dtype: float 64 In[60]: rainfall  $^+$  rainfall. loc[1,:] Out[60]: City 1 City 2 City 3 0 400.3 700.7 2101.1 1 200.4 600.8 2201.2

如果要按列加上一个 Series，则需要在调用 add 方法时显式地提供 axis 参数：

In[61]: #用一列数据生成一个Series rainfall. loc[：,"City 2"] Out[61]: 0 400.3 1 300.4 Name: City 2, dtype: float 64 In[62]: rainfall.add (rainfall. loc[:,"City 2"], axis=0) Out[62]: City 1 City 2 City 3 0 700.4 800.6 1400.8 1 400.6 600.8 1401.0

本节内容主要是关于包含数字的 DataFrame 及其在算术运算中的行为，下一节会展示如何操作 DataFrame 中的文本数据。

# 5.2.6 处理文本列

在本章开头我们已经看到，含有文本数据的列和含有不同类型数据的列的数据类型是 object。要在含有文本字符串的列上执行相关操作，需要使用 str 属性。str 属性可以访问 Python 的字符串方法。虽然我们已经在第 3 章中见过一些字符串方法，但是也应该看一下 Python 文档中列出的所有可用方法。例如，要移除字符串首尾的空白，可以使用 strip 方法；要将首字母大写，可以使用 capitalize 方法。将这些方法组合起来之后，可以将人工输入的乱七八糟的数据清理干净：

In[63]: #来创建一个新的DataFrame users  = pd.DataFrame (data  = ["mArk","JOHN","Tim","jenny"],

columns  $\coloneqq$  ["name"]) users Out[63]: name 0 mArk 1 JOHN 2 Tim 3 jenny In [64]: users_cleaned  = users. loc[：,"name"]. str.strip (). str.capitalize () users_cleaned Out[64]: 0 Mark 1 John 2 1 th 3 Jenny Name: name, dtype: object

也可以像下面这样找到所有以“J”开头的名字：

In [65]: users_cleaned.str.startswith ("J") Out[65]: 0 False 1 True 2 False 3 True Name: name, dtype: bool

字符串方法很好用，但是有时候要对 DataFrame 进行的操作可能并没有在对应的内置函数上。在这种情况下，你可以创建自己的函数，再将其应用到 DataFrame 上，正如下一节所述。

# 5.2.7 应用函数

DataFrame 提供了 applymap 方法，它会将一个函数应用到每一个元素上，在 NumPy 没有提供所需的 ufunc 时，这是非常有用的。例如，NumPy 并没有提供字符串格式化的 ufunc，但可以像下面这样为 DataFrame 的每一个元素进行格式化：

In [66]: rainfall Out[66]: City 1 City 2 City 3 0 300.1 400.3 1000.5 1 100.2 300.4 1100.6 In [67]: def format_string (x): return f"{x:. 2 f}" In[68]: #注意 ，我们并没有调用作为参数的函数， #也就是说 ，这里写的是 format_string 而非 format_string ()! rainfall.applymap (format_string) Out[68]: City 1 City 2 City 3 0 300.10 400.30 1,000.50 1 100.20 300.40 1,100.60

一步步来看。这个 f 字符串会将 x 以字符串的形式返回：f"{x}"。要对其进行格式化，需要在变量后面加一个冒号，然后跟上具体的格式化字符串，这里使用的是，. 2 f。这个逗号是千位上的分隔符，而. 2 f 的意思是以浮点数格式显示，小数点后保留两位。请参考 Python 文档中的“格式指定迷你语言”了解更多有关字符串格式化的知识。

在这样的用例中会经常用到 lambda 表达式（参见“lambda 表达式"）。lambda 表达式可以让你在一行代码中编写一个函数，而不用单独去定义一个函数。通过 lambda 表达式，可以将前面的例子改写成下面这样。

In [69]: rainfall.applymap (lambda x: f"{x:. 2 f}") Out[69]: City 1 City 2 City 3 0 300.10 400.30 1,000.50 1 100.20 300.40 1,100.60

# lambda 表达式

在 Python 中，通过 lambda 表达式可以用一行代码完成函数定义。lambda 表达式是一种匿名函数，也就是一种没有名称的函数。假设有这样一个函数：

def function_name (arg 1, arg 2, ...):    return return_value

可以用 lambda 表达式重写这个函数：

lambda arg 1, arg 2, ...: return_value

简而言之，把 def 换成 lambda，省去 return 关键字，然后将函数的所有内容写到一行。正如我们在讲 applymap 方法时看到的那样，这个时候用 lambda 表达式会很方便，因为无须单独定义一个只会使用一次的函数了。

到目前为止，本书已经讲到了所有关键的数据操作方法，不过在继续之前，有必要理解什么时候 pandas 会使用 DataFrame 的视图，以及什么时候使用的是副本。

# 5.2.8 视图和副本

你可能还记得第 4 章中提到过，对 NumPy 数组进行切片时，返回的是视图。不幸的是，DataFrame 的情况要复杂一些。loc 和 iloc 返回的是视图还是副本难以预测，这让事情变得更难以捉摸了。由于修改视图和修改副本有着本质的区别，因此当 pandas 认为你在无意中修改数据时，它会发出警告：SettingWithCopyWarning。关于如何规避这个相当难以捉摸的警告，下面是一些建议。

- 在原本的 DataFrame 中设置值，而不是在切片生成的 DataFrame 中操作。- 如果你想在切片后获得一个单独的 DataFrame，则应该显式地调用 copy。

selection = df. loc[:, ["country", "continent"]]. copy ()

虽然 loc 和 iloc 的情况很复杂，但是要记得一点，诸如 df.dropna () 或 df. sort_value ("column_name") 这样的 DataFrame 方法总是返回副本。

到目前为止，我们大部分时候是一次操作一个 DataFrame。下一节会展示组合多个 DataFrame 的各种方法，pandas 为此提供了很多强大的工具。

# 5.3 组合 DataFrame

在 Excel 中组合不同的数据集是一件麻烦事，通常需要用到很多 VLOOKUP 公式。幸运的是，DataFrame 的组合是 pandas 的“撒手锏”，数据对齐机制也会让实现相关功能获得极大的便利，进而能够减少错误发生的可能性。组合和合并 DataFrame 的方法有很多，本节会涉及最常用的 concat、join 和 merge。虽然这些函数的功能有重叠的部分，但是每一个函数都可以让一类特定的工作更加轻松。我会先介绍 concat 函数，然后解释 join 函数的不同选项，最后介绍通用性最高的 merge 函数。

# 5.3.1 连接

如果只是需要将多个 DataFrame 粘合在一起，那么 concat 函数是最佳选择。“粘在一起”用专业术语来说叫作连接（concatenation）。在默认情况下，concat 会将 DataFrame 按行粘合在一起，同时会将各列自动对齐。在下面的例子中，我先创建了一个叫 more_users 的 DataFrame，然后将它追加到 df 的下方：

In[70]:data=[[15,"France"，4.1，"Becky"]， [44，"Canada"，6.1，"Leanne"\|15,"France"，4.1，"Becky"]， [44，"Canada"，6.1，"Leanne"]] more_users  = pd.DataFrame (data=data, columns  $\equiv$  ["age"，"country"，"score"，"name"], index=[1000，1011]) more_users Out[70]: age country score name 1000 15 France 4.1 Becky 1011 44 Canada 6.1 Leanne In[71]: pd.concat ([df, more_users]，axis  $= 0$  Out[71]: name age country score continent 1001 Mark 55 Italy 4.5 Europe 1000 John 33 USA 6.7 America 1002 Tim 41 USA 3.9 America 1003 Jenny 12 Germany 9.9 Europe 1000 Becky 15 France 4.1 NaN 1011 Leanne 44 Canada 6.1 NaN

注意，由于 concat 会沿给定的轴（行）粘合数据，而在另一个轴（列）的方向上只会将数据对齐，从而导致对应的列名自动对齐了（即使列名在两个 DataFrame 中的顺序不同），因此现在 DataFrame 中出现了重复的索引。如果想按列进行粘合，则需要将 axis 设置为 1：

In[72]:data=[[3,4], [5,6\|3,4], [5,6]] more_categories  = pd.DataFrame (data=data, columns  $\equiv$  ["quizzes"，"logins"],

<table><tr><td colspan="9">more_categories</td></tr><tr><td>Out[72]:</td><td>quizzes</td><td>logins</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>1000</td><td>3</td><td>4</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>2000</td><td>5</td><td>6</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>In [73]:</td><td colspan="8">pd.concat ([df, more_categories], axis=1)</td></tr><tr><td>Out[73]:</td><td>name</td><td>age</td><td>country</td><td>score</td><td>continent</td><td>quizzes</td><td>logins</td><td></td></tr><tr><td></td><td>1000</td><td>John</td><td>33.0</td><td>USA</td><td>6.7</td><td>America</td><td>3.0</td><td>4.0</td></tr><tr><td></td><td>1001</td><td>Mark</td><td>55.0</td><td>Italy</td><td>4.5</td><td>Europe</td><td>NaN</td><td>NaN</td></tr><tr><td></td><td>1002</td><td>Tim</td><td>41.0</td><td>USA</td><td>3.9</td><td>America</td><td>NaN</td><td>NaN</td></tr><tr><td></td><td>1003</td><td>Jenny</td><td>12.0</td><td>Germany</td><td>9.0</td><td>Europe</td><td>NaN</td><td>NaN</td></tr><tr><td></td><td>2000</td><td>NaN</td><td>NaN</td><td>NaN</td><td>NaN</td><td>NaN</td><td>5.0</td><td>6.0</td></tr></table>

concat 的一个既特别又有用的特性是，它可以接受两个以上的 DataFrame。在第 6 章中，我们会利用这一特性将多个 CSV 文件中的数据合并成一个 DataFrame：

pd.concat ([df 1, df 2, df 3, ...])

与之相对的，下一节中介绍的 join 和 merge 只能用于两个 DataFrame。

# 5.3.2 连接和合并

在连接（join）两个 DataFrame 时，这两个 DataFrame 的列会连接在一起，而行的行为会借助集合论的原理来确定。如果你用过关系数据库，这和 SQL 查询中的 JOIN 是同样概念。图 5- 3 利用 df 1 和 df 2 这两个 DataFrame 展示了 4 种连接（内连接、左连接、右连接和外连接）。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/072f3f50fa90e8b7ac7a3c55821d52bfb9975a3a4378a610edbe08c92dc111f4.jpg)  
图 5-3：连接的不同类型

pandas 在 join 函数中会利用两个 DataFrame 的索引将行对齐。内连接（inner join）的结果中只包含两个 DataFrame 共有的索引。左连接（left join）会保留左端 df 1 的所有行，然后用右端 df 2 中的行去匹配 df 1 的索引。如果某一索引在 df 2 中没有匹配的行，那么 pandas

就会将对应位置填上 NaN。左连接对应的是 Excel 中的 VLOOKUP。右连接（right join）会保留 df 2 中的所有行，然后用 df 1 的行去匹配索引。最后一种连接是外连接（outer join），其全称是完全外连接（full outer join）。外连接会保留两个 DataFrame 的所有索引，然后再将值进行匹配。表 5- 5 是与图 5- 3 等价的文字性描述。

表 5-5：连接的类型  

<table><tr><td>类型</td><td>描述</td></tr><tr><td>inner</td><td>只保留索引为两个 DataFrame 共有的行</td></tr><tr><td>left</td><td>左端 DataFrame 的所有行，用右端 DataFrame 中的行去匹配</td></tr><tr><td>right</td><td>右端 DataFrame 的所有行，用左端 DataFrame 中的行去匹配</td></tr><tr><td>outer</td><td>两个 DataFrame 行索引的并集</td></tr></table>

现在来看看图 5- 3 中的例子在实践中是如何工作的：

In[74]: df 1  = pd.DataFrame (data=[[1，2]，[3，4]，[5，6\|1，2]，[3，4]，[5，6]]，columns  = ["A"，"B"]) df 1 Out[74]: A B 012136256 In[75]: df 2  = pd.DataFrame (data=[[10，20]，[30，40\|10，20]，[30，40]]，columns  = ["C"，"D"]，index  $\coloneqq$  [1，3]) df 2 Out[75]: C D 1 10 203 30 40 In[76]: df 1. join（df 2，how  $\equiv$  "inner") Out[76]: A B C D 1 3 4 10 20 In[77]: df 1. join（df 2，how  $\equiv$  "left") Out[77]: A B C D 012 NaN NaN 1 3 4 10.0 20.02 5 6 NaN NaNIn[78]: df 1. join（df 2，how  $\equiv$  "right") Out[78]: A B C D 1 3.0 4.0 10 203 NaN NaN 30 40 In[79]: df 1. join（df 2，how  $\equiv$  "outer") Out[79]: A B C D 01.0 2.0 NaN NaN 1 3.0 4.0 10.0 20.02 5.0 6.0 NaN NaN 3 NaN NaN 30.0 40.0

如果想在不依赖于索引的情况下连接 DataFrame 中的一列或多列，那么应该使用 merge，而不是 join。merge 可以通过 on 参数提供的一列或多列作为连接条件（join condition）：这些列必须是两个 DataFrame 所共有的，它们会被用来和行进行匹配：

In[80]： #在两个DataFrame中添加一个 "category"列 df 1["category"  = ["a"，"b"，"c"]df 2["category"  = ["c"，"b"]In[81]: df 1 Out[81]: A B category 0 1 2 a 1 3 4 b 2 5 6 CIn[82]: df 2 Out[82]: C D category 1 10 20 C 3 30 40 bIn[83]: df 1. merge（df 2，how  $\coloneqq$  "inner"，on  $\coloneqq$  ["category"]) Out[83]: A B category C D 0 3 4 b 30 401 5 6 C 10 20 In[84]: df 1. merge（df 2，how  $\coloneqq$  "left"，on  $\coloneqq$  ["category"]) Out[84]: A B category C D 0 1 2 a NaN NaN 1 3 4 b 30.0 40.02 5 6 C 10.0 20.0

join 和 merge 提供了大量可选参数以适应更复杂的场景，建议参考官方文档以了解更多相关知识。

现在你已经知道如何操作一个或多个 DataFrame，是时候进入数据分析的下一步了：让数据更易于理解。

# 5.4 描述性统计量和数据聚合

5.4 描述性统计量和数据聚合让大型数据集更有条理的方法之一是计算整个数据集或者子集上的描述性统计量，比如总和或平均值。本节首先会介绍如何在 pandas 中计算这些统计量，然后会介绍将数据聚合到子集中的两种方式：groupby 方法和 pivot_table 函数。

# 5.4.1 描述性统计量

描述性统计量（descriptive statistics）通过量化数据来概括数据集。例如，数据的数据点数量就是一种简单的描述性统计量。平均数、中位数或众数是另一些常见的例子。DataFrame 和 Series 可以通过 sum、mean、count 等方法来获取各种描述性统计量。在本书中你会看到很多这样的方法，完整的描述性统计量方法列表可以在 pandas 的文档中找到。在默认情况下，这些方法会按 axis=0 返回一个 Series，也就是说你得到的是有关列的统计量：

In[85]: rainfallOut[85]: City 1 City 2 City 30 300.1 400.3 1000.51 100.2 300.4 1100.6 In[86]: rainfall.mean ()

Out[86]: City 1 200.15 City 2 350.35 City 3 1050.55 dtype: float 64

如果想计算行的统计量，那么需要提供 axis 参数：

In[87]: rainfall.mean (axis=1) Out[87]: 0 566.966667 1 500.400000 dtype: float 64

在默认情况下，缺失的值不会参与 sum 和 mean 的计算。这和 Excel 对待空单元格的方式是一样的，Excel 对一系列空单元格使用 AVERAGE 公式得到的结果和在 Series 上使用 mean 得到的结果相同。

获取所有行的统计量有时候并不够用，你可能需要更细化的信息，比如每个分类下的平均值。下面来看看应该怎么做。

# 5.4.2 分组

现在回到 df 这个 DataFrame，来计算每个大洲的学员的平均分。要完成这项任务，首先需要将各行按大洲分组，随后再应用 mean 方法，最终就算出了每组的平均值。所有包含非数值数据的列都会被自动排除：

In[88]: df.groupby (["continent']). mean () Out[88]: properties age score continent America 37.0 5.30 Europe 33.5 6.75

如果参数不止一列，那么结果 DataFrame 就会有分层索引，也就是前面见过的 MultiIndex：

In[89]: df.groupby (["continent", "country"]). mean () Out[89]: properties age score continent country America USA 37 5.3 Europe Germany 12 9.0 Italy 55 4.5

除了 mean，还可以使用 pandas 提供的大部分统计量函数。如果你想用自己的函数，则需要使用 agg 方法。例如，可以像下面这样计算每组最大值和最小值之差：

In[90]: df. loc[:, ["age", "score", "continent"]]. groupby (["continent']). agg (lambda x: x.max () - x.min ()) Out[90]: properties age score continent America 8 2.8 Europe 43 4.5

在 Excel 中还有一种获取各组数据的统计量的方法，即使用数据透视表。数据透视表引入了另一种维度，以便从各种角度观察你的数据。接下来你会看到，pandas 也提供了数据透视表的功能。

# 5.4.3 透视和熔化

如果你在 Excel 中用过数据透视表，那么在使用 pandas 的 pivot_table 函数时就不会遇到任何问题，两者的工作方式在很大程度上是相同的。下面的 DataFrame 中的数据按照类似于数据库记录的存储方式组织，每一行都表示某个区域中某种水果的销售记录：

In [91]: data = [["Oranges", "North", 12.30], ["Apples", "South", 10.55], ["Oranges", "South", 22.00], ["Bananas", "South", 5.90], ["Bananas", "North", 31.30], ["Oranges", "North", 13.10\|"Oranges", "North", 12.30], ["Apples", "South", 10.55], ["Oranges", "South", 22.00], ["Bananas", "South", 5.90], ["Bananas", "North", 31.30], ["Oranges", "North", 13.10]] sales = pd.DataFrame (data=data, columns=[ "Fruit", "Region", "Revenue"] sales Out[91]: Fruit Region Revenue 0 Oranges North 12.30 1 Apples South 10.55 2 Oranges South 22.00 3 Bananas South 5.90 4 Bananas North 31.30 5 Oranges North 13.10

要创建数据透视表，需要将 DataFrame 作为第一个参数传递给 pivot_table 函数。index 和 columns 分别指定了哪一列会成为数据透视表的行标签和列标签。values 会通过 aggfunc（以字符串或者 NumPy ufunc 的形式提供）被聚合到结果 DataFrame 中的数据部分。最后，margins 对应的是 Excel 中的 Grand Total，如果省略 margins 和 margins_name，则结果中不会出现 Total 列：

In [92]: pivot = pd. pivot_table (sales, index="Fruit", columns="Region", values="Revenue", aggfunc="sum", margins=True, margins_name="Total") pivot Out[92]: Region North South Total Fruit Apples NaN 10.55 10.55 Bananas 31.3 5.90 37.20 Oranges 25.4 22.00 47.40 Total 56.7 38.45 95.15

总之，透视数据意味着将一列（在本例中是 Region）中不重复的值转化为数据透视表中的列标题，然后再聚合另一列中的值。通过数据透视可以轻松获取感兴趣的维度的概要信

息。在我们的数据透视表中，你一眼就能看出在北部地区苹果根本没有卖出去，而在南部地区，大部分利润来自橘子。如果你想将列标题转换成列的值，以便从另一个角度透视数据，那么可以使用 melt。从这个意义上来说，melt 是 pivot_table 的反函数：

In [93]: pd.melt (pivot. iloc[::- 1,:- 1]. reset_index (), id_vars="Fruit", value_vars=["North", "South"], value_name="Revenue") Out[93]: Fruit Region Revenue 0 Apples North NaN 1 Bananas North 31.30 2 Oranges North 25.40 3 Apples South 10.55 4 Bananas South 5.90 5 Oranges South 22.00

这里我将数据透视表作为输入，不过用 iloc 排除了一些行和列，同时还重置了索引，从而使得表中所有信息都是一般的列。id_vars 参数指定了标识，而 value_vars 定义了我想“反透视”（unpivot）的列。如果你想将数据处理成数据库要求的格式，可以使用 melt。

聚合统计量可以帮助你理解数据，但是没人喜欢阅读满屏数字的页面。要想让数据更易于理解，可视化是最佳选择，这也是下一节要讲的内容。Excel 中叫作图表（chart），而 pandas 一般称其为图像（plot）。本书中会互换使用这两个术语。

# 5.5 绘图

绘图可以将数据分析的结果可视化，这可能是整个数据分析过程中最重要的一步。我们需要用到两个库来进行绘图，首先来看 pandas 默认的绘图库 Matplotlib，之后再着眼于另一个现代化的绘图库，即 Plotly，我们可以用它在 Jupyter 笔记本中获得更好的交互式体验。

# 5.5.1 Matplotlib

Matplotlib 是一个历史悠久的绘图包，Anaconda 发行版中也包含了它。你可以用它来绘制各种格式的图像，包括可用于高质量打印的矢量图。在 DataFrame 中调用 plot 方法时，pandas 在默认情况下会生成一张 Matplotlib 绘制的图像。

要在 Jupyter 笔记本中使用 Matplotlib，首先需要运行以下任意一条魔法指令（参见“魔法指令”）：%matplotlib inline 或者%matplotlib notebook。这两条指令可以对笔记本进行配置以便将图像显示在笔记本中。后一条指令会让图像更有交互性，使你可以修改图表的大小和缩放级别。下面先来用 pandas 和 Matplotlib 创建一张图像（参见图 5- 4）。

In [94]: import numpy as np  %matplotlib inline  #或 %matplotlib notebook  In [95]: data = pd.DataFrame (data=np.random.rand (4, 4) * 100000,

index  = ["01"，"Q 2"，"Q 3"，"Q 4"] columns  = ["East"，"West"，"North"，"South"]) data. index. name  = "Quarters" data. columns. name  = "Region" data Out[95]: Region East West North South Quarters Q 1 23254.220271 96398.399860 16845.951895 41671.684999 Q 2 87316.022433 45183.397951 15460.819455 50951.465770 Q 3 51458.760432 3821.139360 77793.393899 98915.952421 Q 4 64933.848496 7600.277035 55001.831706 86248.512650 In[96]: data. plot（） #data . plot（tthe（）的简写 Out[96]: <AxesSubplot：xlabel  $\equiv$  'Quarters'>

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/0be6d115ec6b1116639c5e31bb7fc0df8898182624cfea497d8ad8ee74d0b370.jpg)  
图 5-4：用 Matplotlib 绘制的图像

注意，在这个例子中，我用到了 NumPy 数组来构造 pandas 的 DataFrame。使用 NumPy 数组作为参数时，可以利用第 4 章讲过的 NumPy 数组构造器。在这里，我们用伪随机数构造了一个 NumPy 数组，然后又用它生成了一个 pandas DataFrame。因此在你每次运行这个例子的时候，会得到不同的值。

# 魔法指令

上面例子中用到的%matplotlib inline 指令让 Matplotlib 得以和 Jupyter 笔记本相互协作，这样的指令被称为魔法指令（magic command）。魔法指令是一系列可以让 Jupyter 笔记本单元格表现为某种形式，或者让一些麻烦的任务变得简单起来的简单指令，这就像是魔法一样。和 Python 代码一样，魔法指令也在单元格中编写，不过它们要么以开头，而只作用于一行的指令以%开头。

第 6 章会介绍更多的魔法指令。如果你想看看所有可用的指令列表，可以执行%lsmagic。要获得更详细的描述，可以执行%magic。

即使用上了 %magicplotlib notebook 这个魔法指令，你可能也会注意到 Matplotlib 原本是为静态图表设计的，因而没有提供 Web 页面上的交互式体验。所以接下来会介绍专为 Web 设计的 Plotly。

# 5.5.2 Plotly

Plotly 是一个基于 JavaScript 的库，自 4.8.0 版本起就可以被用作 pandas 的绘图后端。它有着极高的交互性，你可以轻松地放大图像，点击图例选择和取消选择分类，鼠标指针悬停在数据点上方时还可以通过提示信息获得数据的更多信息。Anaconda 中并未包含 Plotly，如果你没有安装过 Plotly，可以用下面的命令进行安装：

(base)>conda install plotly

执行下面的单元格之后，整个笔记本的绘图后端就会被设置为 Plotly。如果重新执行之前的单元格，那么前面的图像也会被渲染成 Plotly 图表。对于 Plotly，你只需在绘制图 5- 5 和图 5- 6 之前将后端设置为 Plotly，而不需要执行魔法指令。

In [97]: # 将绘图后端设置为 Plotly  plot. options. plotting. backend = "plotly"  In [98]: data.plot ()

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/6110e66703647bc0167ef46cf1157c9d9fcd948cc70791ec0f74c8a652213ce7.jpg)  
图 5-5：Plotly 折线图

In [99]: # 以柱状图显示同样的数据  data.plot.bar (barmode="group")

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/32651ca37645888b9e84084be33d1aff1ba95c733f9300822f873276ffcf6332.jpg)  
图 5-6：Plotly 柱状图

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/15dc914bc1da328c2e66530c4bece52e86de7f59e28cb8007ca350b0a240a9f0.jpg)

# 不同绘图后端的区别

如果使用 Plotly 作为后端，你需要在 Plotly 的文档中查看那些绘图方法所接受的参数。例如，你可以在 Plotly 的柱状图文档中了解一下 barmode=group 这个参数。

pandas 及其背后的绘图库提供了丰富的图表类型和选项，几乎可以随心所欲地格式化各种图表。也可以将多张图像组织成一系列子图。表 5- 6 展示了可用的图表类型。

表 5-6：pandas 图表类型  

<table><tr><td>类型</td><td>描述</td></tr><tr><td>line</td><td>折线图，使用 df.plot () 时的默认选项</td></tr><tr><td>bar</td><td>垂直柱状图</td></tr><tr><td>barh</td><td>水平柱状图</td></tr><tr><td>hist</td><td>矩形图</td></tr><tr><td>box</td><td>箱形图</td></tr><tr><td>kde</td><td>密度图，可通过 density 启用</td></tr><tr><td>area</td><td>面积图</td></tr><tr><td>scatter</td><td>散点图</td></tr><tr><td>hexbin</td><td>六边形图</td></tr><tr><td>pie</td><td>饼状图</td></tr></table>

除此之外，pandas 还提供了一些通过多个组件构成的高级绘图工具和技术。详细信息请参见 pandas 可视化文档。

# 其他绘图库

Python 科学可视化方面的开发活动十分活跃，除了 Matplotlib 和 Plotly，对于某些特定的情况，另一些库可能更合适。

Seaborn

Seaborn 建立在 Matplotlib 之上，它改进了默认的绘图风格，并且添加了像热度图之类的额外的图像类型，这些改进可以让你的工作更轻松：只需几行代码就可以创建高级统计学图表。

Bokeh

Bokeh 在技术上和功能上都类似于 Plotly：由于 Bokeh 使用 JavaScript 开发，因此很适合在 Jupyter 笔记本中创建交互式图表。Anaconda 自带 Bokeh。

Altair

Altair 是建立在 Vega 项目之上的一个统计学可视化库。Altair 也是用 JavaScript 开发的，提供了缩放之类的交互性操作。

HoloViews

HoloViews 是另一个基于 JavaScript 的包，HoloViews 致力于让数据分析和可视化更简单。只需要几行代码就可以实现复杂的统计学图表。

在第 6 章分析时序时我们会创建更多的图表，不过在本节的最后，来学习一下如何用 pandas 导入和导出数据。

# 5.6 导入和导出 DataFrame

到目前为止，我们用各种方式构造了 DataFrame：嵌套列表，字典和 NumPy 数组。知道这些技巧很有必要，但是很多时候我们的数据已经准备好了，你只需要将它录入 DataFrame。要做到这一点，pandas 为你提供了各种读取函数，但即便要访问一个专用的系统且 pandas 没有提供内置的读取器，你通常也有一个 Python 包来连接这个系统，一旦获得了数据，要把数据录入 DataFrame 也就很容易了。在 Excel 中，数据导入通常是 PowerQuery 的工作。

在分析和修改数据集之后，你可能想把结果推送回数据库或者导出到一个 CSV 文件中，又或者如本书书名所述，把它放到 Excel 工作簿中给你的上级看。要导出 pandasDataFrame，可以使用 DataFrame 提供的导出方法。表 5- 7 展示了最常用的导入和导出方法。

表 5-7：导入和导出 DataFrame  

<table><tr><td>数据格式/系统</td><td>导入：pandas（pd）函数</td><td>导出：DataFrame（df）方法</td></tr><tr><td>CSV 文件</td><td>pd. read_csv</td><td>df. to_csv</td></tr><tr><td>JSON</td><td>pd. read_json</td><td>df. to_json</td></tr><tr><td>HTML</td><td>pd. read_html</td><td>df. to_html</td></tr><tr><td>剪贴板</td><td>pd. read_clipboard</td><td>df. to_clipboard</td></tr><tr><td>Excel 文件</td><td>pd. read_excel</td><td>df. to_excel</td></tr><tr><td>SQL 数据库</td><td>pd. read_sql</td><td>df. to_sql</td></tr></table>

第 11 章会介绍 pd. read_sql 和 pd. to_sql，它们将被作为案例研究的一部分。由于整个第 7 章是专门讲用 pandas 读取和写入 Excel 文件的，因此本节主要着眼于导入和导出 CSV 文件。先来看看如何导出一个既存的 DataFrame。

# 5.6.1 导出 CSV 文件

如果你需要将 DataFrame 发给一个可能不会用 Python 和 pandas 的同事，那么以 CSV 文件的形式发给他是一个不错的选择，因为大部分程序知道如何导入 CSV 文件。要将示例中的 DataFramedf 导出为 CSV 文件，需要使用 to_csv 方法：

In[100]: df. to_csv ("course_participants. csv")

如果你想将文件保存到另一个目录下，那么可以以原始字符串的形式指定完整路径，比如 r"C:\path\to\desired\location\msft. csv"。

# 在 Windows 中使用原始字符串表示文件路径

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/819c2349ef0c5ee90015703e225670ab2254d2936146c874a26e0555a6a6c1de.jpg)

在字符串中，反斜杠会被用于转义某些字符。因此在 Windows 中你要么需要用两个反斜杠（C:\path\to\file. csv），要么需要在字符串前加上一个 r 让它变成原始字符串（raw string）。原始字符串会按字面意思解释字符。在 macOS 和 Linux 中不存在这样的问题，因为它们在路径中使用的是正向斜杠。

如果你像我一样只给出了文件名，那么 pandas 会在笔记本所在目录生成含有如下内容的 course_participants. csv 文件：

user_id, name, age, country, score, continent  1001, Mark, 55, Italy, 4.5, Europe  1000, John, 33, USA, 6.7, America  1002, Tim, 41, USA, 3.9, America  1003, Jenny, 12, Germany, 9.0, Europe

现在你已经知道如何使用 df. to_csv 方法，下面来看看如何导入 CSV 文件。

# 5.6.2 导入 CSV 文件

导入本地 CSV 文件只需要将文件路径传递给 read_csv 函数。MSFT. csv 是我从雅虎上下载的一个 CSV 文件，你可以在配套代码库的 csv 文件夹中找到，它包含了微软的历史股价：

In[101]: msft  = pd. read_csv ("csv/MSFT. csv")

通常，除了文件名之外还需要给 read_csv 传递一些其他的参数。例如，sep 可以告诉 pandasCSV 文件所使用的分隔符（如果它使用的不是默认的逗号)。在第 6 章中我们还会用到其他的参数，如果想整体了解一下各种参数，可以参考 pandas 的文档。

假设我们在处理一个有上千行数据的 DataFrame，通常要做的第一件事是执行 info 方法以对 DataFrame 有一个大致的了解。接下来，你可能想要使用 head 方法和 tail 方法看一下 DataFrame 的前几行或者最后几行。在默认情况下，head 会返回 DataFrame 的前 5 行，tail 会返回最后 5 行，不过可以通过参数指定返回的行数。还可以执行 describe 方法获取一些基本的统计数据：

In[102]: msft.info () <class 'pandas.core.frame.DataFrame'> RangeIndex: 8622 entries, 0 to 8621 Data columns (total 7 columns): # Column Non- Null Count dtype 0 Date 8622 non- null object 1 Open 8622 non- null float 64 2 High 8622 non- null float 64 3 Low 8622 non- null float 64 4 Close 8622 non- null float 64 5 Adj Close 8622 non- null float 64 6 Volume 8622 non- null int 64 dtypes: float 64 (5), int 64 (1), object (1) memory usage: 471.6+ KB In[103]: #由于空间有限我只选择了一部分列 ， #你也可以直接执行msft . head () msft. loc[:, ["Date", "Adj Close", "Volume"]. head () Out[103]: Date Adj Close Volume 0 1986- 03- 13 0.062205 1031788800 1 1986- 03- 14 0.064427 308160000 2 1986- 03- 17 0.065537 133171200 3 1986- 03- 18 0.063871 67766400 4 1986- 03- 19 0.062760 47894400 In[104]: msft. loc[:, ["Date", "Adj Close", "Volume"]. tail (2) Out[104]: Date Adj Close Volume 8620 2020- 05- 26 181.570007 36073600 8621 2020- 05- 27 181.809998 39492600 In[105]: msft. loc[:, ["Adj Close", "Volume"]. describe () Out[105]: Adj Close Volume count 8622.000000 8.622000 e+93 mean 24.921952 6.030722 e+97 std 31.838096 3.877805 e+97

<table><tr><td>min</td><td>0.057762</td><td>2.304000 e+06</td></tr><tr><td>25%</td><td>2.247503</td><td>3.651632 e+07</td></tr><tr><td>50%</td><td>18.454313</td><td>5.350380 e+07</td></tr><tr><td>75%</td><td>25.699224</td><td>7.397560 e+07</td></tr><tr><td>max</td><td>187.663330</td><td>1.031789 e+09</td></tr></table>

Adj Close 的意思是调整收盘价（adjusted close price），它根据公司的操作（比如股票分割）对股价进行修正。Volume 是被交易的股票的数量。在表 5- 8 中，我对本章中提到过的 DataFrame 发掘方法进行了总结。

表 5-8：DataFrame 发掘方法和属性  

<table><tr><td>DataFrame（df）的方法/属性</td><td>描述</td></tr><tr><td>df.info ()</td><td>提供数据点数量、索引类型、dtype 和内存占用信息</td></tr><tr><td>df.describe ()</td><td>提供基本的统计数据，包括总数、均值、标准差、最小值、最大值和百分位数</td></tr><tr><td>df.head (n=5)</td><td>返回 DataFrame 的前 n 行</td></tr><tr><td>df.tail (n=5)</td><td>返回 DataFrame 的最后 n 行</td></tr><tr><td>df. types</td><td>返回每一列的 dtype</td></tr></table>

除了本地 CSV 文件路径，read_csv 还可以接受一个 URL。你可以像下面这样直接从配套代码库中读取 CSV 文件：

In[106]: #这里的跨行只是为了让它能够在一页上显示完整url  = ("https://raw.githubusercontent.com/fzumstein/""python- for- excel/1 st- edition/csv/MSFT. csv") msft  = pd. read_csv (url) In[107]: msft. loc[:,["Date","Adj Close","Volume"]]. head (2) Out[107]: Date Adj Close Volume 0 1986- 03- 13 0.062205 10317888001 1986- 03- 14 0.064427 308160000

在第 6 章中，我们会继续使用这个数据集以及 read_csv 函数研究时序，届时会将 Date 列转换成 DatetimeIndex。

