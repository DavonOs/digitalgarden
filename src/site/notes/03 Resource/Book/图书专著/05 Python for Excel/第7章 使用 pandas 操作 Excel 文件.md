---
{"dg-publish":true,"dg-permalink":"books/35799208/07","permalink":"/books/35799208/07/","metatags":{"description":"pandas 的好处在于它为处理所有受支持的 Excel 文件格式提供了统一的接口，无论是 xlsx、xlsm 和 xlsx 之中的哪一种格式。这让我们在读取包含 Excel 文件的目录、聚合数据和总结数据生成 Excel 报表都更加容易，而且只需要 10 行代码。不过 pandas 并非独自承受其重。在底层，pandas 会选择某个读写包来完成工作。","og:site_name":"DavonOs","og:title":"Excel Python","og:type":"book","og:url":"https://zuji.eu.org/books/35799208/07","og:image":"https://file.ituring.com.cn/LargeCover/22038dc37469788a2ed5","og:image:width":"50","og:image:alt":"bookcover"},"created":"2025-09-24 14:48","updated":"2025-09-26 16:56"}
---

## 7.1 案例研究：Excel 报表

这里的案例研究受到我几年前参与的一些真实的报表项目的启发。虽然这些项目来自完全不同的行业（比如电信、数字营销、金融等行业），但它们又出奇地相似：通常都从一个装有各种 Excel 文件的文件夹开始，这些文件需要被整合到 Excel 报表中。这样的整合操作通常需要每月、每周、每天进行。

在配套代码库的 sales_data 目录中，你会找到一些 Excel 文件，它们包含了虚构的电信运营商在全美各营业厅的套餐（金、银、铜）销售情况。每个月有两个文件，子文件夹 new 中的是新用户，子文件夹 existing 中的是老用户。由于这些报表来自不同的系统，因而它们的格式也不相同：新用户的数据以 xlsx 文件格式交付，老用户的数据则以旧的 xls 格式交付，每个文件最多包含了 10000 次交易。

我们的目标是生成一张 Excel 报表，在报表中展示每个营业厅每月的总体销售情况。先来看一下子文件夹 new 中的 January.xlsx 文件，如图 7-1 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/fba51225d1d89b81ec34a6381390f3f93b980f9b3152bac4adb5604f0e4d5615.jpg)  
图 7-1：January.xlsx 的前几行

子文件夹 existing 中的 Excel 文件看起来是一模一样的，只不过它们没有 status 列并且是以旧的 xls 格式保存的。作为第一步，先来用 pandas 的 read_excel 函数读取一月的交易记录。

```python
import pandas as pd
df = pd.read_excel("sales_data/new/January.xlsx")
df.info()
>>> 
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 9493 entries, 0 to 9492
Data columns (total 7 columns):
# Column Non- Null Count Dtype 0 transaction_id 9493 non- null object 1 store 9493 non- null object 2 status 9493 non- null object 3 transaction_date 9493 non- null datetime 64[ns] 4 plan 9493 non- null object 5 contract_type 9493 non- null object 6 amount 9493 non- null float 64
dtypes: datetime 64 [ns](1)，float64(1)，object(5)
memory usage: 519.3 KB
```

> 在 Python 3.9 中使用 read_excel 函数
> 在这里做出和第 5 章中相同的警告：如果你在 Python 3.9 或更高版本中使用 pd. read_excel 函数，那么要确保使用的至少是 pandas 1.2 版本，否则会在读取 xlsx 文件时出现错误。

如你所见，pandas 准确识别了包括 transaction_date 在内的所有列的数据类型。这让我们在使用数据时无须额外的准备。由于这个例子特意设计得很简单，因此用不着创建一个如例 7- 1 的 sales_report_pandas. py 小脚本。这个脚本会从两个目录中读取 Excel 文件、汇总数据，最后将总结表写入一个新的 Excel 文件。你可以在 VS Code 中自己编写这个脚本，也可以直接从配套代码库中打开。要想温习如何创建脚本或是在 VS Code 中打开文件，可以回顾一下第 2 章。如果你想自己创建这个脚本，那么一定要将它和 sales_data 文件夹放到一起，这样就可以直接运行脚本而不用修改文件路径了。

例 7-1 sales_report_pandas. py
```
from pathlib import Path

import pandas as pd

# 文件的目录
this_dir = Path(__file__).resolve().parent

# 从 sales_data 的所有子文件夹中读取 Excel 文件
parts = []
for path in (this_dir / "sales_data").rglob("*.xls*"):
    print(f'reading {path.name}')
    part = pd.read_excel(path, index_col = "transaction_id")
    parts.append(part)

# 将从 Excel 文件生成的 DataFrame 结合成单个 DataFrame，
# pandas会负责对列进行对齐
df = pd.concat(parts)

# 对每个营业厅进行数据透视，将同一天产生的交易全部加起来
pivot = pd.pivot_table(df, index = "transaction_date", columns = "store", values = "amount", aggfunc = "sum")

# 按月重采样，并赋予一个索引名称
summary = pivot.resample("M").sum()
summary.index.name = "North"

# 将总结报表写入 Excel 文件summary.to_excel(this_dir/"sales_report_pandas.xlsx")
```


在前面的章节中，我一直是通过字符串来指定文件路径的。而通过标准库 pathlib 模块中的 Path 类，你可以使用多种强大的工具：路径对象可以让你轻松地通过斜杠连接路径的分量来构造路径，就像在 this_dir / "sales_data"及其下面 4 行代码中所展示的那样。这些路径对象是可以跨平台工作的，你也可以使用 rglob 之类的过滤器（下一点中会解释）。`_file_` 表示源代码文件运行时所在路径——因此 parent 返回的是文件所在的目录。在 parent 前面调用的 resolve 方法会将路径转换为绝对路径。如果你想在 Jupyter 笔记本中运行这段脚本，那么需要将这行代码替换成 this_dir = Path ("."). resolve ()，用点来表示当前目录。在大部分时候，接受字符串形式的路径作为参数的函数和类也可以接受一个路径对象。

②读取某个目录中所有 Excel 文件的最简单办法就是使用路径对象的 rglob 方法。glob 是 globbing 的缩写，指的是通过通配符来展开路径名。？通配符表示某单个字符，而\*表示任意多个字符（包括 0 个）。rglob 中的 r 表示 recursive（递归）globbing，也就是说 rglob 会对所有子目录也进行匹配——相对的，glob 会忽略子目录。将\*. xls\*作为 globbing 表达式可以确保新旧两种格式的 Excel 文件都能被发现，因为这个表达式可以匹配. xls 和. xlsx 两者中的任意一种。还可以稍微改进一下这个表达式，把它写成 `[!~$]*.xls*$`  。这样就可以忽略临时的 Excel 文件（文件名以 `～s`  开头）。有关如何在 Python 中进行 globbing，请参见 Python 文档。

现在运行脚本，你可以直接点击 VS Code 右上方的运行文件按钮。脚本会执行一段时间，在完成之后，名为 sales_report_pandas.xlsx 的 Excel 工作簿就会出现在脚本所在的目录。工作表 1 的内容应当类似于图 7- 2 中的样子。虽然需要调整一下第一列的宽度才能看见日期，但是只用 10 行代码就达到了这样的效果还是令人印象深刻。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/cc212af68ae1779b96314365d332ed1f1ff5edea1d2d161293f894a931b72880.jpg)  
图 7-2：sales_report_pandas. xlsx（未调整列宽）

对于像这样简单的案例来说，pandas 为处理 Excel 文件提供了一种相当简单的解决方案。不过还可以更进一步，毕竟像设置标题、进行一些格式调整（包括列宽和定长位数的小数）、画个图，这些都不难。第 8 章会直接使用 pandas 的写入库来完成这些工作。不过在那之前，再仔细了解一下如何用 pandas 读写 Excel 文件。

## 7.2 使用 pandas 读写 Excel 文件

为了使代码更简单，前面的案例研究使用了 read_excel 和 to_excel 及其默认参数。本节会向你展示在使用 pandas 读写 Excel 文件时最常用的参数和选项。我们先从 read_excel 函数和 ExcelFile 类开始，然后再研究 to_excel 方法和 ExcelWriter 类。在这个过程中，我还会向你介绍 Python 的 with 语句。

###   7.2.1 read_excel 函数和 ExcelFile 类

在案例研究所用到的 Excel 工作簿中，数据是从第一张工作表的 A 1 单元格开始的。这确

实很方便，但在实际场景中，你的 Excel 文件可能并没有这么规整。在这种情况下，panda 提供了一些参数来优化读取过程。接下来的几个例子会用到配套代码库的 xl 文件夹中的 stores. xlsx 文件，其中第一张工作表如图 7- 3 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/b6b38505cde65f3fe9b2b7972bd52e058a9e931c8c5110b93345fdd9534837bd.jpg)  
图 7-3：stores. xlsx 的第一张工作表

通过 sheet_name、skiprows 和 usecols 这些参数，可以告诉 pandas 关于我们想要读取的列的详细信息。一般来说，可以通过执行 info 方法来了解生成的 DataFrame 的数据类型：

```
In [3]: df = pd. read_excel ("xl/stores. xlsx", sheet_name="2019", skiprows=1, usecols="B: F")

df

Out[3]: Store Employees Manager Since Flagship 0 New York 10 Sarah 2018- 07- 20 False 1 San Francisco 12 Neriah 2019- 11- 02 MISSING 2 Chicago 4 Katelin 2020- 01- 31 NaN 3 Boston 5 Georgiana 2017- 04- 01 True 4 Washington DC 3 Evan NaT False 5 Las Vegas 11 Paul 2020- 01- 06 False

In [4]: df.info ()

<class 'pandas.core.frame.DataFrame'> RangeIndex: 6 entries, 0 to 5 Data columns (total 5 columns): # Column Non- Null Count dtype 0 Store 6 non- null object 1 Employees 6 non- null int 64 2 Manager 6 non- null object 3 Since 5 non- null datetime 64[ns] 4 Flagship 5 non- null object dtypes: datetime 64 [ns](1), int 64 (1), object (3) memory usage: 368.0+ bytes
```

除了 Flagship 这一列，其他列看起来都还不错。Flagship 的数据类型应该是 bool 而不是 object。要修正这一问题，需要提供一个转换函数来处理某列中发生冲突的单元格。（除了编写 fix_missing 函数，也可以提供一个 lambda 表达式。）

```
In [5]: def fix_missing (x): return False if x in ["", "MISSING"] else xIn [6]: df = pd. read_excel ("xl/stores. xlsx", sheet_name="2019", skiprows=1, usecols="B: F", converters="\{ "flagship": fix_missing\}) dfOut[6]: Store Employees Manager Since Flagship 0 New York 10 Sarah 2018- 07- 20 False 1 San Francisco 12 Nerlab 2019- 11- 02 False 2 Chicago 4 Katelin 2020- 01- 31 False 3 Boston 5 Georgiana 2017- 04- 01 True 4 Washington DC 3 Evan NaT False 5 Las Vegas 11 Paul 2020- 01- 06 FalseIn [7]: # Flagship 列的数据类型现在变成了"bool" df.info ()

In[7]: #Flagship列的数据类型现在变成了 "bool" df.info ()

<class 'pandas.core.frame.DataFrame'> RangeIndex: 6 entries, 0 to 5 Data columns (total 5 columns): # Column Non- Null Count Dtype 0 Store 6 non- null object 1 Employees 6 non- null int 64 2 Manager 6 non- null object 3 Since 5 non- null datetime 64[ns] 4 Flagship 6 non- null bool dtypes: bool (1), datetime 64 [ns](1), int 64 (1), object (2) memory usage: 326.0+ bytes
```
read_excel 函数也可以接受一个工作表名称列表。在这种情况下，它返回的是以 DataFrame 为值、工作表名称为键的一个字典。要读入所有的工作表，你需要传递参数 sheet_name=None。另外，注意这里使用了 usecols 的一种变体，传递了表的列名作为参数：

```
In [8]: sheets = pd. read_excel ("xl/stores. xlsx", sheet_name=["2019", "2020"], skiprows=1, usecols=["Store", "Employees"]) sheets["2019"]. head (2) Out[8]: Store Employees 0 New York 10 1 San Francisco 12
```

如果源文件并没有列标题，则设置参数 header=None 并通过 names 参数提供对应的列名。注意 sheet_name 也接受工作表切片：

```
In [9]: df = pd. read_excel ("xl/stores. xlsx", sheet_name=0, skiprows=2, skipfooter=3, usecols="B:C=", header=None, names=["Branch", "Employee_Count", "Is_Flagship"]) dfOut[9]: Branch Employee_Count Is_Flagship 0 New York 10 False 1 San Francisco 12 MISSING 2 Chicago 4 NaN
```

为了处理 NaN，可以把 na_values 和 keep_default_na 结合起来。在下一个例子中，我们会

告诉 pandas 只将含有 MISSING 的单元格解释为 NaN，除此之外的情况什么都不做：

```
In[10]: df  =  pd. read_excel ("xl/stores. xlsx"，sheet_name  =  "2019" skiprows  $= \exists$  ，usecols  =  "B, C, F"，skipfooter  $= 2$  na_values  =  "MISSING"，keep_default_na  $\equiv$  False) df Out[10]: Store Employees flagship 0 New York 10 False 1 San Francisco 12 NaN 2 Chicago 4 3 Boston 5 True
```

pandas 还提供了一种读取 Excel 文件的方法，那就是使用 ExcelFile 类。如果你想从旧式的 xls 文件中读取多张工作表，ExcelFile 就会发挥作用。在这种情况下，ExcelFile 可以防止 pandas 多次读取整个文件，从而获得较快的速度。由于 ExcelFile 可以被用作上下文管理器（参见“上下文管理器和 with 语句")，因而文件可以被正确关闭。

上下文管理器和 with 语句

首先，Python 中的 with 语句和 VBA 中的 With 语句没有任何关系：在 VBA 中，With 语句被用于在同一对象上执行一系列语句；而 Python 中的 with 语句被用于管理文件或数据连接之类的资源。如果你想加载最新的销售数据以便对其进行分析，就必须打开一个文件或者建立一个数据库连接。在数据读取完成后，最好尽快关闭文件或者数据库连接。否则，你可能会无法打开其他文件或者建立新的数据库连接——因为文件句柄和数据库连接都是有限资源。手动打开和关闭文本文件的代码如下所示（w 表示将文件以 write 模式打开，如果文件已存在则会替换现有文件）：

```
f = open("output.txt", "w") 
f.write("Sometext")
f.close()
```

执行这段代码会在笔记本的工作目录中创建一个叫作 `output.txt` 的文件，并将“Some text”写入文件。要读取一个文件，你需要使用 ` r ` 模式而不是 ` w ` 模式；要在文件末尾追加内容，则需要使用 ` a ` 模式。由于文件还可以被其他程序操作，因此这些操作可能会失败。你可以通过 try/except 机制来处理这类问题，第 11 章会对这种机制进行介绍。由于文件的打开和关闭是一种相当常见的操作，因此 Python 提供了 with 语句来简化这类代码：

```
with open ("output. txt"，"w") as f: f.write ("Some text")
```
当代码的执行过程离开 with 语句的主体时，无论是否发生异常，文件都会被自动关闭，从而可以保证资源总是能够得到清理。支持 with 语句的对象被称作上下文管理器 (context manager)，本章中的 ExcelFile 对象和 ExcelWriter 对象，以及第 11 章中的数据库连接对象都是上下文管理器。

先来实际了解一下 ExcelFile 类：

```
with pd.ExcelFile("xl/stores.xls") as f:
    df1 = pd.read_excel(f,"2019",skiprows = 1, usecols="B:F", nrows = 2)
    df2 = pd.read_excel(f,"2020",skiprows = 1，usecols="B:F", nrows = 2)
  df1
>>> 
Store Employees Manager Since Flagship 0 New York 10 Sarah 2018- 07- 20 False 1 San Francisco 12 Neriah 2019- 11- 02 MISSING
```

也可以通过 ExcelFile 访问所有工作表的名称：

```python
stores = pd.ExcelFile("xl/stores.xlsx")
stores.sheet_names
>>> 
['2019','2020','2019-2020']
```

最后，pandas 还可以让你通过 URL 读取 Excel 文件，这和我们在第 5 章中读取 CSV 文件是类似的。下面直接从配套代码库中读取该文件。

```
url = ("https://raw.githubusercontent.com/fzumstein/"
   "python-for-excel/1st-edition/xl/stores.xlsx")
   pd.read_excel(url,skiprows=1，usecols ="B: E"，nrows= 2)
   
>>> 
          Store Employees Manager      Since
0      New York        10   Sarah 2018-07-20
1 San Francisco        12  Neriah 2019-11-02
```

> 通过 pandas 读取 xlsb 文件
> 
> 如果你使用的是低于 1.3 版本的 pandas，那么在使用 read_excel 函数或 ExcelFile 类读取 xlsb 文件时就需要显式地指定引擎：
> 
> `pd.read_excel("xl/stores.xlsb"，engine = "pyxlsb")`
> 
> pyxlsb 包不是 Anaconda 的一部分，需要单独安装。第 8 章会介绍 pyxlsb 及其他引擎。

表 7- 1 总结了最常用的 read_excel 参数。你可以在官方文档中找到完整的列表。

表 7-1：部分 read_excel 参数  

| 参数                | 描述                                                                                                                                                                                                                         |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sheet\_name       | 除了提供工作表名称，你也可以提供工作表的索引（从 0 开始），比如 `sheet_name=0`。如果将参数设置为 ` sheet_name=None `，则 pandas 会读取整个工作簿并以 `{"sheetname": df}` 的形式返回一个字典。要读取指定的多张工作表，可以传递一个工作表名称或索引的列表                                                              |
| skiprows          | 你可以借此跳过指定数量的行                                                                                                                                                                                                              |
| usecols           | 如果 Excel 文件包含列标题，就通过传递列标题列表选择指定列，比如 `["Store", "Employees"]`。另外，也可以传递列的索引列表，比如 `[1, 2]`。或者 Excel 列名的字符串（不是列表）也可以包含列区域，比如 `"B:D, G"`。你还可以传递一个函数：如果想只包含以 Manager 开始的列，则可以将参数设置为 `usecols=lambda x: x.startwith (" Manager")` |
| nrows             | 想要读取的行数                                                                                                                                                                                                                    |
| index\_col        | 指定将作为索引的列接受列名或列索引，比如 `index_col=0`。如果提供了包含多列的列表，则会创建层次索引                                                                                                                                                                   |
| header            | 如果设置为 header=None，而未通过 names 参数提供列名，则会使用默认的整数列标题。如果提供的是索引的列表，则会创建层次列标题                                                                                                                                                     |
| names             | 提供列名称列表                                                                                                                                                                                                                    |
| na\_values        | 在默认情况下，pandas 会将这些值解释为 NaN（第 5 章中介绍过）：空单元格、 `#NA` 、`NA`、`null`、`#N/A`、`N/A`、`NaN`、`n/a`、`-NaN`、`1.#IND` 、`nan`、`#N/A N/A`、`-1.#QANAN`、`-nan` `NULL`、`-1.#IND`、`<na>` 和 `1.#QANAN` 。如果需要在这些值中添加一个或多个值，则可以通过 `na_values` 来提供 |
| keep\_default\_na | 如果希望忽略 pandas 默认解释为 NaN 的值，则可以将参数设置为 `keep_default_na=False`                                                                                                                                                               |
| convert\_float    | 在默认情况下，Excel 会在内部将所有数字都以浮点型保存，pandas 会将带有无意义的小数点的数字转换为整数。如果想改变这种行为，则可以将参数设置为 `convert_float=False`（可能会获得少许性能提升）                                                                                                            |
| converters        | 可以为各列提供一个函数来转换其中的值。如果要将某一列中的文本转换为大写，则可以将参数设置为：`converters= {{ "column_name": lambda x: x.upper() }}`                                                                                                                       |


讲了这么多用 pandas 读取 Excel 文件的内容，接下来了解一下如何写入 Excel 文件。

### 7.2.2 to_excel 方法和 ExcelWriter 类

用 pandas 写入 Excel 文件的最简单的方法是使用 DataFrame 的 to_excel 方法。你可以用它来指定要将 DataFrame 写入哪些工作表的哪些单元格，以及是否需要包含列标题和 DataFrame 索引。对于 np. nan 和 np. inf 这类在 Excel 中没有等价表达方式的值，你也可以用这个方法来告诉 pandas 如何处理。下面先来创建一个涉及不同数据类型的 DataFrame，然后调用它的 to_excel 方法：

```python
import pandas as pd
import numpy as np 
import datetime as dt
data=[[dt.datetime(2020,1,1, 10,13), 2.222, 1, True],
      [dt.datetime(2020,1,2), np.nan, 2, False],
      [dt.datetime(2020,1,2), np.inf, 3, True]]
df = pd.DataFrame(data=data, columns =["dates","floats","integers","booleans"])
df.index.name = "index"
df
```

执行 to_excel 命令后会生成图 7- 4 所示的 Excel 文件（需要将 C 列加宽才能看清楚日期）。

|     | A   | B     | C                   | D       | E        | F        |
| --- | --- | ----- | ------------------- | ------- | -------- | -------- |
| 1   |     |       |                     |         |          |          |
| 2   |     | index | Dates               | Floats  | Integers | Booleans |
| 3   |     | 0     | 2020-01-01 10:13:00 | 2.222   | 1        | TRUE     |
| 4   |     | 1     | 2020-01-02 00:00:00 | `<NA>`  | 2        | FALSE    |
| 5   |     | 2     | 2020-01-02 00:00:00 | `<INF>` | 3        | TRUE     |
图 7-4：written_with_pandas. xlsx

如果想将多个 DataFrame 写入同一张或多张工作表，则需要使用 ExcelClass 类。下面的例子分 3 次将同一个 DataFrame 写入工作表，前两次写入了工作表 1 的两个位置，第三次写入了工作表 2：

```python
with pd.ExcelWriter ("written_with_pandas 2. xlsx") as writer:
    df.to_excel(writer, sheet_name="Sheet 1", startrow=1, startcol=1)
    df.to_excel(writer, sheet_name="Sheet 1", startrow=10, startcol=1)
    df.to_excel(writer, sheet_name="Sheet 2")
```

由于将 ExcelClass 用作了上下文管理器，因此当文件离开上下文管理器时（也就是离开由缩进定义的代码块时）会被自动写入磁盘。如果不像这样写的话，则必须显式地调用 writer.save ()。表 7- 2 总结了 to_excel 方法最常用的参数。你可以在官方文档中找到完整的参数列表。

表 7-2：部分 to_excel 参数

| 参数                  | 描述                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| sheet\_name         | 要写入的工作表名称                                                                                                                |
| startrow 和 startcol | startrow 是 DataFrame 中会被写入的第一行，而 startcol 是第一列。这里的索引是从 0 开始的，如果想要将 DataFrame 写入单元格 B 3，则需要将参数设置为 startrow=2 和 startcol=1 |
| index 和 header      | 如果想隐藏索引和/或标题，则需要将参数设置为 index=False 和 header=False                                                                        |
| na\_rep 和 inf\_rep  | 在默认情况下，np.nan 会被转换为空单元格，而 NumPy 用来表示无穷的 np. inf 会被转换为字符串 inf。利用这两个参数可以修改默认行为                                             |
| freeze\_panes       | 通过提供一个元组来冻结前几行和前几列，比如 (2, 1) 会冻结前两行和第一列                                                                                  |
如你所见，使用 pandas 来读写简单的 Excel 文件没有什么问题。不过它也有局限性，来看看具体有哪些。

### 7.3 使用 pandas 处理 Excel 文件的局限性

- 将 DataFrame 写入文件时，无法将标题或图表也写入文件。
- 无法修改 Excel 中标题和索引的默认格式。
- 读取文件时，pandas 会自动转换错误单元格（比如将 `#REF!` 或 `#NUM!` 转换为 NaN），从而使你无法在工作表中查找特定的错误。
- 处理大型 Excel 文件时可能需要额外的设置，这种情况下直接使用读写包更容易操作，第 8 章会对此进行介绍。
