---
{"dg-publish":true,"dg-permalink":"books/35799208/08","permalink":"/books/35799208/08/","metatags":{"description":"本章涉及了 pandas 中用于分析数据集的一些新的概念和工具。我们学习了如何读取 CSV 文件，如何处理缺失或重复的数据，如何利用描述性统计量，也见识到了将 DataFrame 转化为交互式图表有多简单。虽然你可能需要一些时间来消化这些知识，但是应该很快就能体会到 pandas 带来的强大力量。本章对 pandas 和 Excel 的 AutoFilter 功能、VLOOKUP 公式、数据透视表、PowerQuery 进行了对比。","og:site_name":"DavonOs","og:title":"Excel Python","og:type":"book","og:url":"https://zuji.eu.org/books/35799208/08","og:image":"https://file.ituring.com.cn/LargeCover/22038dc37469788a2ed5","og:image:width":"50","og:image:alt":"bookcover"},"created":"2025-09-24 14:51","updated":"2025-09-26 16:46"}
---

## 8.1 读写包

这部分内容可能有点儿让人喘不过气：本节会介绍至少 6 个包，因为几乎每种 Excel 文件都需要不同的包。事实上每个包都使用了各自的语法，并且都和原本的 Excel 对象模型（第 9 章会详细介绍 Excel 对象模型的相关内容）大相径庭，因而进一步增加了学习难度。这就意味着即便你是 VBA 熟手，也可能需要查询大量的命令的用法。本节首先会解释你在何时需要用到哪一种读写包，然后会介绍一个辅助模块，该模块可以让这些包用起来更加方便。之后我会将各个包以菜谱的形式展示出来，这样你就可以查询到大部分常用命令是如何工作的。

### 8.1.1 何时使用何种包

本节会介绍下列用于读、写和编辑 Excel 文件的 6 个包。

- OpenPyXL
- XlsxWriter
- pyxlsx
- xlrd
- xlywt
- xlutils

为了理解各个包的功能，请参见表 8-1。例如，要读取 xlsx 格式文件，就必须使用 OpenPyXL包。

表 8-1：用于读、写和编辑 Excel 文件的包  

| Excel 文件格式   | 读        | 写                    | 编辑       |
| ------------ | -------- | -------------------- | -------- |
| xlsx         | OpenPyXL | OpenPyXL, XlsxWriter | OpenPyXL |
| x lsm        | OpenPyXL | OpenPyXL, XlsxWriter | OpenPyXL |
| x ltx, x ltm | OpenPyXL | OpenPyXL             | OpenPyXL |
| x lsb        | pyxlsb   | -                    | -        |
| x ls, x lt   | x lrd    | x lwt                | xlutils  |


如果想写入 xlsx 或者 xlsm 文件，就需要在 OpenPyXL 和 XlsxWriter 中做出选择。这两个包有相似的功能，但是各自又有一些对方所没有的特性。由于这两个包都在积极开发中，因此功能会随时间不断变化。下面是对两者区别的一个概述。

- OpenPyXL 可以读、写和编辑 Excel 文件，而 XlsxWriter 只能读。
- OpenPyXL 处理包含 VBA 宏的 Excel 文件时更加方便。
- XlsxWriter 的文档更优秀。
- XlsxWriter 通常比 OpenPyXL 更快，不过具体速度取决于你要写入的工作簿的大小，有时候差异并不明显。

那 xlwings 呢？

如果你在想为什么表 8- 1 中没有 xlwings，那么答案是哪里都没有或者到处都有，这取决于你的具体用例；和本章中的其他包都不同，xlwings 依赖于 Excel 应用程序本身，然而 Excel 并不总是可用的，比如，你可能想在 Linux 中执行脚本。另外，如果可以在 Windows 或者 macOS（这些系统中可以安装 Excel）中执行脚本，那么 xlwings 就可以替代本章中的所有包。由于对 Excel 应用程序的依赖造成了 xlwings 和其他 Excel 包之间的本质区别，因此本书会在第四部分的开头部分，也就是第 9 章再介绍 xlwings。

pandas 会使用它可以找到的读取包，如果同时安装了 OpenPyXL 和 XlsxWriter，那么 pandas 默认使用 XlsxWriter。如果你想亲自选择 pandas 所使用的包，则可以在 read_excel 或 to_excel，以及 ExcelFile 或 ExcelWriter 的 engine 参数中指定所选包。engine（引擎）是小写的包名，因此如果要用 OpenPyXL 而不是 XlsxWriter 来写文件，则需要执行如下代码：

`df.to_excel ("filename. xlsx", engine="openpyxl")`

在知道了需要使用的包之后，你还面临着第二道挑战：大部分的包需要用一些代码来读写单元格区域，而每个包所使用的又是不同的语法。为了让你的工作更轻松，接下来我会介绍我编写的一个辅助模块。

### 8.1.2 excel.py 模块

由我开发的 excel. py 模块会让你在使用读写包时更加方便，该模块负责处理以下问题。

包切换

切换读写包是一种很常见的场景。例如，Excel 文件会随着时间不断增大，很多用户会尽可能地将文件格式从 xlsx 切换到 xlsx，因为 xlsx 格式可以大幅削减文件大小。在这种情况下，你不得不从 OpenPyXL 切换到 pyxlsb。因此也就必须将使用 OpenPyXL 的代码改写成 pyxlsb 的语法。

数据类型转换

这一点和前一点密切相关：在切换包时，你不仅需要对代码的语法进行调整，还需要注意不同包返回同一单元格内容时所用的不同数据类型。例如，OpenPyXL 会为空单元格返回 None，而 xlrd 返回的是空字符串。

单元格循环

读写包是低级包：这就意味着它们并未提供一些方便的函数来处理常见任务。例如，大部分包会要求你通过循环来操作每一个需要读或写的单元格。

可以在配套代码库中找到 excel. py 模块，接下来的内容中会用到它。不过作为预览，这里给出了读写值的语法：

import excel values = excel. read（sheet_object，first_cell = "A 1"，last_cell=None) excel. write（sheet_object，values，first_cell = "A 1")

read 函数接受以下任一种包的 sheet 对象：xlrd、OpenPyXL 或 pyxlsb。它也接受可选参数 first_cell 和 last_cell。这两个参数可以以 A 1 这样的字符串形式提供，也可以通过行列元组的形式提供（遵循 Excel 从 1 开始的索引规则）：（1，1）。first_cell 的默认值是 A 1，而 last_cell 的默认值是所用区域的右下角。因此如果你只提供了 sheet 对象作为

参数，那么它就会读取整张工作表。与 read 函数的工作方式类似，write 函数接受 xlwt、OpenPyXL 或 XlsxWriter 的 sheet 对象，以及以嵌套列表和可选的 first_cell 表示的值。可选参数 first_cell 代表待写入区域左上角的单元格，嵌套列表将从这里开始写入。如表 8- 2 所示，excel. py 模块还可以让数据类型转换更加顺畅。

表 8-2：数据类型转换  

<table><tr><td>Excel 表示</td><td>Python 数据类型</td></tr><tr><td>空单元格</td><td>None</td></tr><tr><td>包含日期格式的单元格</td><td>datetime. datetime（除了 pyxlsb）</td></tr><tr><td>包含布尔值的单元格</td><td>bool</td></tr><tr><td>包含错误的单元格</td><td>str（错误信息）</td></tr><tr><td>字符串</td><td>str</td></tr><tr><td>Float</td><td>float 或 int</td></tr></table>

有了 excel. py 模块，现在可以深入了解这些包了：接下来的内容中会讲到 OpenPyXL、XlsxWriter、pyxlsb 和 xlrd/xlwt/xlutils。这些内容可以让你快速上手这些包。比起依次阅读这些内容，我更推荐根据表 8- 1 选择你所需要的包，然后直接跳到对应的位置。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/c509733481ed18797c5f08ba04a7a5e693dd3a58a2073792949f6b636caca28c.jpg)

with 语句

本章在很多情况下会用到 with 语句。如果你需要复习一下，请参见 7.2.1 节中的“上下文管理器和 with 语句”。

### 8.1.3 OpenPyXL

OpenPyXL 是本节中唯一既可以读也可以写 Excel 文件的包。你甚至可以用它来编辑 Excel 文件——不过只能编辑一些简单的文件。先来看看如何读取 Excel 文件。

#### 读取文件

下面的示例代码展示了在使用 OpenPyXL 时如何执行一些读取 Excel 文件时的常见任务。要获得单元格的值，需要使用 data_only=True 参数来打开工作簿，其默认值是 False，此时会返回单元格的公式而不是值：

```
In [1]: import pandas as pdimport openpyxlimport excelimport datetime as dt
In [2]: # 打开工作簿来读取单元格的值# 在加载数据之后文件会自动关闭
book = openpyxl. load_workbook ("xl/stores. xlsx", data_only=True)
In [3]: # 通过名称或索引（从 0 开始）获取工作表对象 sheet = book["2019"]sheet = book. worksheets[0]

In[4]: #获取所有工作表名称的列表 book.sheetnames
Out[4]:['2019','2020','2019- 2020']
In[5]: #遍历所有工作表对象 #openpyxl使用的是title而不是namefor i in book.worksheets: print (i.title) 201920202019- 2020
In[6]: #获取维度 ，以工作表 #所选区域为例sheet . max_row, sheet. max_columnOut[6]:（8，6）
In[7]: #读取单个单元格的值 ，分别使用的是 A 1 这种 #表示法 ，以及单元格索引（从 1 开始）sheet["B 6"]. valuesheet.cell (row=6, column=2). valueOut[7]: 'Boston'
In[8]: #使用excel模块来读取一个单元格区域的值data = excel.read (book["2019"], (2, 2), (8, 6)) data[2] #打印前两行
Out [8]:[['Store', 'Employees', 'Manager', 'Since', 'Flagship'], [New York', 10, 'Sarah', datetime.datetime (2018, 7, 20, 0, 0), False]]
```

#### 写入文件

OpenPyXL 会在内存中构建 Excel 文件，当你调用 save 方法时会将其写入文件。下面的代码生成了图 8- 1 中的文件。

```
In[9]: import openpyxlfrom openpyxl. drawing. image import Imagefrom openpyxl. chart import BarChart, Referencefrom openpyxl. styles import Font, colorsfrom openpyxl. styles. borders import Border, Sidefrom openpyxl. styles. alignment import Alignmentfrom openpyxl. styles. fill import PatternFillimport excel

In[10]: #实例化工作簿book = openpyxl.Workbook ()
```

获取第一张工作表并赋予它一个名称 sheet = book. active sheet. title = "Sheet 1"

使用 A 1 表示法和单元格索引#（从 1 开始）写入各个单元格 sheet["A 1"]. value = "Hello 1"sheet.cell (row=2, column=1, value="Hello 2")

格式化：填充颜色、对齐、边框和字体 font_format = Font (color="FF 0000", bold=True) thin = Side (border_style="thin", color="FF 0000") sheet["A 3"]. value = "Hello 3"sheet["A 3"]. font = font_formatsheet["A 3"]. border = Border (top=thin, left=thin, right=thin, bottom=thin) sheet["A 3"]. alignment = Alignment (horizontal="center") sheet["A 3"]. fill = PatternFill (fgColor="FFFF 00", fill_type="solid")

数字格式化（使用 Excel 的格式化字符串）sheet["A 4"]. value = 3.3333 sheet["A 4"]. number_format = "0.00"

日期格式化（使用 Excel 的格式化字符串）sheet["A 5"]. value = dt.date (2016, 10, 13) sheet["A 5"]. number_format = "mm/dd/yy"

公式：必须使用以逗号分隔的英文公式名称 sheet["A 6"]. value = "=SUM (A 4, 2)"

图片 sheet. add_image (Image ("images/python. png"), "C 1")

二维列表（使用 excel 模块）data = [[None, "North", "South"], ["Last Year", 2, 5], ["This Year", 3, 6\|None, "North", "South"], ["Last Year", 2, 5], ["This Year", 3, 6]]excel.write (sheet, data, "A 10")

图表

chart  $\equiv$  BarChart () chart. type = "col" chart. title = "Sales Per Region" chart. x_axis. title = "Regions" chart. y_axis. title = "Sales" chart_data  $\equiv$  Reference (sheet, min_row  $= 11$  ，min_col  $= 1$  max_row  $= 12$  ，max_col  $= 3$  chart_categories  $\equiv$  Reference (sheet, min_row  $= 10$  ，min_col  $= 2$  max_row  $= 10$  ，max_col  $= 3$  #from_rows就像你手动在Excel中 #添加图表那样解释数据chart . add_data (charr_data, titles_from_data = True, from_rows  $\equiv$  True) chart. set_categories (charr_categories) sheet. add_chart (charr,"A 15")

保存工作簿会在磁盘上创建文件 book.save ("openpyxl. xlsx")

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/85093ecf9201e422d24124bbb35df89ba8196562dd410ddeda832fa907e5b5ec.jpg)  
图 8-1：通过 OpenPyXL 写入的文件（openpyxl. xlsx）

如果想写入为 Excel 模板文件，那么需要在保存前设置 template 属性为 True：

In [11]: book = openpyxl.Workbook ()  sheet = book. active  sheet["A 1"]. value = "This is a template"  book. template = True  book.save ("template. xltx")

正如你在代码中看到的那样，OpenPyXL 通过类似于 FF 0000 这样的字符串来设置颜色。这样的值由 3 个 hex 值（FF、00 和 00）组成，分别对应所需颜色的红、绿、蓝分量。hex 代表 hexadecimal（十六进制），十六进制以 16 为基数来表示数字，而不像标准十进制那样以 10 为基数。

查找颜色的 hex 值

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/6c4750d9f88f5e68736fea3118a83388c6e895ce92add2e9e38080056836b44f.jpg)

要在 Excel 中查找所需颜色的 hex 值，可以在想要修改填充颜色的单元格上点击颜色下拉菜单，选择更多颜色，然后选择所需颜色，并在菜单中读出其 hex 值。

#### 编辑文件

并不存在真正可以编辑 Excel 文件的读写包：实际上 OpenPyXL 首先会读取所有它可以理解的数据，然后再将文件数据从头到尾写回去，其间你做出的所有更改也会包含其中。对于一些主要包含已格式化的单元格以及数据和公式的简单 Excel 文件来说，它的功能已经非常强大了。但如果你的工作表中包含图表或者其他高级内容，那么 OpenPyXL 的功能就显得非常有限了，这些内容要么会被修改，要么会被直接丢弃。例如，在 OpenPyXLv 3.0.5 版本中，图表会被重命名且标题会被丢弃。下面是编辑 Excel 文件的示例：

```
In[12]： #读取stores . xlsx 文件，修改一个单元格， #并将其以新的名称保存到新的位置book = openpyxl. load_workbook ("xl/stores. xlsx") book["2019"]["A 1"]. value = "modified"book.save ("stores_edited. xlsx")
```

如果想写人为 xlsm 文件，那么 OpenPyXL 就必须处理一个已经存在的文件，并且在加载时需要将 keep_vba 参数设置为 True：

```
In[13]: book = openpyxl. load_workbook ("xl/macro. xlsm"，keep_vba  $\equiv$  True) book["Sheet 1"]["A 1"]. value = "click the button!" book.save ("macro_openpyxl. xlsm")
```

示例文件中的按键会调用一个显示对话框的宏。OpenPyXL 远不止本节提到的这些功能，详细信息请参考官方文档。本章末尾还会回顾在第 7 章的案例研究中看到的关于它的更多功能。

### 8.1.4 XlsxWriter

顾名思义，XlsxWriter 只能写入 Excel 文件。下面的代码会和前面使用 OpenPyXL 时生成同样的工作簿，也就是图 8- 1 中的文件。注意，XlsxWriter 使用的是从 0 开始的单元格索引，而 OpenPyXL 使用的是从 1 开始的单元格索引，一定要在切换两个包时考虑到这一点：

In[14]: import datetime as dtimport xlsxwriterimport excelIn[15]: #实例化工作簿book = xlsxwriter.workbook ("xlsxwriter. xlsx") #添加工作表并为其命名sheet = book. add_worksheet ("Sheet1")

使用 A 1 表示法和单元格索引（从 0 开始）写入各个单元格 sheet.write ("A 1", "Hello 1") sheet.write (1, 0, "Hello 2")

格式化：填充颜色、对齐、边框和字体 formatting = book. add_format ({"font_color": " #FF0000 ", "bg_color": " #FFFFFF00 ", "bold": True, "align": "center", "border": 1, "border_color": " #FF0000 "}) sheet.write ("A 3", "Hello 3", formatting)

数字格式化（使用 Excel 的格式化字符串）number_format = book. add_format ({"num_format": "0.00"}) sheet.write ("A 4", 3.3333, number_format)

日期格式化（使用 Excel 的格式化字符串）date_format = book. add_format ({"num_format": "mm/dd/yy"}) sheet.write ("A 5", dt.date (2016, 10, 13), date_format)

公式：必须使用以逗号分隔的公式的英文名称 sheet.write ("A 6", "=SUM (A 4, 2)")

图片 sheet. insert_image (0, 2, "images/python. png")

二维列表（使用 excel 模块）data = ["None, "North", "South"], ["Last Year", 2, 5], ["This Year", 3, 6]]excel.write (sheet, data, "A 10")

图表：参见配套代码库中的文件 sales_report_xlsxwriter. py， #以了解如何使用索引而不是单元格地址chart = book. add_chart ({"type": "column"}) chart. set_title ({"name": "Sales per Region"}) chart. add_series ({"name": "=Sheet 1! A 11", "categories": "=Sheet 1! B 10: C 10", "values": "=Sheet 1! B 11: C 11"}) chart. add_series ({"name": "=Sheet 1! A 12", "categories": "=Sheet 1! B 10: C 10", "values": "=Sheet 1! B 12: C 12"}) chart. set_x_axis ({"name": "Regions"}) chart. set_y_axis ({"name": "Sales"}) sheet. insert_chart ("A 15", chart)

关闭工作簿并在磁盘上创建文件 book.close ()

和 OpenPyXL 相比，XlsxWriter 在写入 xlsm 文件时必须采用一种更复杂的方法。首先，你需要在 Anaconda Prompt 中从既存的 Excel 文件中提取宏代码。（示例中使用的是 macro. xlsm 文件，你可以在配套代码库的 xl 文件夹中找到。）

Windows

首先切换至 xl 目录，找到 vba_extract. py 的路径，这是一个和 XlsxWriter 一起使用的脚本：

(base)> cd C:\Users\username\python- for- excel\xl (base)> where vba_extract. py C:\Users\username\Anaconda 3\Scripts\vba_extract. py

然后在下面的命令中使用该路径。

(base)> python C:\...\Anaconda 3\Scripts\vba_extract. py macro. xlsm

macOS

在 macOS 中，该命令可以用作可执行脚本，可以像下面这样执行这段脚本：

(base)> cd /Users/username/python- for- excel/xl (base)> vba_extract. py macro. xlsm

该命令会将 vbaProject. bin 保存在执行命令时所在的目录。我将提取出来的文件也放在了配套代码库的 xl 文件夹中。以下示例会用这个文件来写入一个带有宏按钮的工作簿。

In [16]: book = xlsxwriter.Workbook ("macro_xlsxwriter. xlsm") sheet = book. add_worksheet ("Sheet 1") sheet.write ("A 1", "Click the button!") book. add_vba_project ("xt/vbaProject. bth") sheet. insert_button ("A 3", {"macro": "Hello", "caption": "Button 1", "width": 130, "height": 35}) book.close ()

### 8.1.5 pyxlsx

和其他读取库相比，pyxlsx 提供的功能不多，但是如果你要读取二进制的 xlsb 格式的 Excel 文件，那么 pyxlsx 就成了唯一选择。pyxlsx 不是 Anaconda 的一部分，如果你还没有安装过它，则需要先安装。目前无法通过 Conda 来安装 pyxlsx，需要使用 pip：

(base)> ptp install pyxlsx

像下面这样读取工作簿和单元格的值：

In [17]: import pyxlsximport excelIn [18]: # 遍历工作表。在 pyxlsx 中，工作簿和 sheet 对象# 都可以被用作上下文管理器。book. sheets# 返回的是工作表名称列表，而不是对象！# 要获取工作表对象，需要使用 get_sheet () with pyxlsx. open_workbook ("xl/stores. xlsx") as book:    for sheet_name in book. sheets:        with book. get_sheet (sheet_name) as sheet:

dim  $\equiv$  sheet. dimension print（f"Sheet'{sheet_name}'has" f"{dim. h}rows and {dim. w}cols") Sheet'2019'has 7 rows and 5 cols Sheet'2020'has 7 rows and 5 cols Sheet'2019- 2020'has 20 rows and 5 cols In[19]： #利用excel模块读取一个区间中单元格的值 #除了 "2019"，也可以使用它的索引（从 1 开始） with pyxlsb. open_workbook ("xl/stores. xlsb") as book: with book. get_sheet ("2019") as sheet: data  $\equiv$  excel. read（sheet,"B 2") data[2] #打印前两行 Out[19]：['Store'，'Employees'，'Manager'，'Since'，'Flagship']， ['New York'，10.0，'Sarah'，43301.0, False]

pyxlsb 目前无法识别包含日期的单元格，所以必须手动将以日期为格式的单元格中的值转换为 datetime 对象，就像下面这样：

In[20]: from pyxlsb import convert_date convert_date (data[1][3]) Out[20]: datetime.datetime (2018，7，20，0，0)

记住，在使用版本低于 1.3 的 pandas 读取 xlsb 格式的文件时，需要显式地指定引擎。

In[21]: df  $\equiv$  pd. read_excel ("xl/stores. xlsb"，engine  $\equiv$  "pyxlsb")

### 8.1.6 xlrd、xlwt 和 xlutils

OpenPyXL 可以为 xlsx 格式提供读、写和编辑的功能。如果将 xlrd、xlwt 和 xlutils 结合起来，它们也可以为旧式 xls 格式的文件提供类似的功能：xlrd 读、xlwt 写和 xlutils 编辑 xls 文件。虽然这些包不再积极开发，但只要 xls 文件还存在，它们就依然有用武之地。xlutils 不是 Anaconda 的一部分，如果你还没有安装，则需要先安装：

```
(base)>conda install xlutils
```

先从读取文件部分开始。

#### 1. 使用 xlrd 读取文件

下面的示例代码展示了如何使用 xlrd 从 Excel 工作簿中读取单元格的值。

```
In[22]: import xlrd import xlwt from xlwt. Utilss import cell_to_rowcol 2 import xlutils import excel In[23]： #打开工作簿来读取单元格的值 #在加载数据后文件会自动关闭 book  $\equiv$  xlrd. open_workbook ("xl/stores. xls")

In [24]: # 获取所有工作表的名称  book. sheet_names ()  Out[24]: ['2019', '2020', '2019- 2020']  In [25]: # 遍历所有工作表对象  for sheet in book.sheets ():      print (sheet. name)  2019  2020  2019- 2020  In [26]: # 通过名称或者索引（从 0 开始）获取工作表对象  sheet = book. sheet_by_index (0)  sheet = book. sheet_by_name ("2019")  In [27]: # 维度  sheet. nrows, sheet. ncols  Out[27]: (8, 6)  In [28]: # 使用 A 1 表示法或者单元格索引  #（从 0 开始）读取各个单元格的值。  # *会解包 cell_to_rowcol 2 返回的  # 元组以生成各个参数  sheet.cell (*cell_to_rowcol 2 ("B 3")). value  sheet.cell (2, 1). value  Out[28]: 'New York'  In [29]: # 使用 excel 模块读取一个区间中单元格的值  data = excel.read (sheet, "B 2")  data[: 2] # 打印前两行  Out[29]: ['Store', 'Employees', 'Manager', 'Since', 'Flagship'], ['New York', 10.0, 'Sarah', datetime.datetime (2018, 7, 20, 0, 0), False]]
```

使用区域

与 OpenPyXL 和 pyxlsb 不同，在使用 sheet. nrows 和 sheet. ncols 时，xlrd 会以值的形式而不是工作表的使用区域（usedrange）返回单元格的维度。Excel 以使用区域的形式返回的值通常包含区域底部和右侧的空行和空列。例如，当你（通过 Delete 键）删除行的内容，而不是（单击右键，选择删除）删除行本身时，就可能发生这种情况。

#### 2. 使用 xlwt 写入文件

下面的代码重现了之前用 OpenPyXL 和 XlsxWriter 生成的图 8- 1 中的文件。不过 xlwt 并不能生成图表，并且只支持 bmp 格式的图片。

In [30]: import xlwt  from xlwt. Util import cell_to_rowcol 2  import datetime as dt  import excel  In [31]: # 实例化工作簿  book = xlwt.Workbook ()  # 添加工作表并为其命名  sheet = book. add_sheet ("Sheet 1")

使用 A 1 表示法和单元格索引#（从 0 开始）写入各个单元格 sheet.write (\*cell_to_rowcol 2 ("A 1"),"Hello 1") sheet.write (r=1,  $\mathbb{C} = \Theta$  ，label = "Hello 2")

格式化：填充颜色、对齐、边框和字体 formatting = xlwt.easyxf ("font: bold on, color red;" "align: horiz center;" "borders: top_color red, bottom_color red," "right_color red, left_color red," "left thin, right thin," "top thigh, bottom thigh; "pattern: pattern solid, fore_color yellow;") sheet.write (r=2,  $\mathbb{C} = \Theta$  ，label = "Hello 3"，style  $\equiv$  formatting)

数字格式化（使用 Excel 的格式化字符串）number_format = xlwt.easyxf (num_format_str = "0.00") sheet.write (3,0,3.3333，number_format)

日期格式化（使用 Excel 的格式化字符串）date_format = xlwt.easyxf (num_format_str = "mm/dd/yyyy") sheet.write (4,0,dt.datetime (2012,2,3)，date_format)

公式：必须使用以逗号分隔的公式的英文名称 sheet. write（5，0，xlwt.Formula ("SUM (A 4，2)"))

二维列表（使用 excel 模块）data = ["None,"North","South"]，["Last Year"，2，5]，["This Year"，3，6]]excel.write (sheet, data,"A 10")

图片（只支持添加 bmp 格式的图片）sheet. insert_bitmap（"images/python. bmp"，0，2)

将文件写入磁盘 book.save ("xlwt. xls")

#### 3. 使用 xlutils 编辑文件

xlutils 可以作为 xlrd 和 xlwt 之间的桥梁。这也表明了实际上这不是真正的编辑操作：工作表通过 xlrd 读取包含格式在内的文件内容（将 formatting_info 的参数设置为 True），然后再通过 xlwt 将其间做出的更改写入文件：

In [32]: import xlutils. copyIn [33]: book = xlrd. open_workbook ("xl/stores. xls"，formatting_info=True) book = xlutils.copy.copy (book) book. get_sheet (0). write (0,0,"changed!") book.save ("stores_edited. xls")

现在你已经知道如何读写特定格式的 Excel 工作簿。下一节将开始学习一些高级主题，其中包括大型 Excel 文件的处理，以及将 pandas 和各种读写包结合使用。

## 8.2 读写包的高级主题

如果你的文件比我们例子中的 Excel 文件更大且更复杂，默认的设置可能就不够好了。因此本节首先研究如何处理大型文件。然后学习如何将 pandas 和这些读写包结合使用：这样你就可以随心所欲地调整 pandas DataFrame 的样式。在本节末尾，我们会运用本章中学到的所有知识来让第 7 章案例研究中的报表看起来更加专业。

### 8.2.1 处理大型 Excel 文件

处理大型 Excel 文件时可能会遇到两个问题：一是读写的过程可能很慢；二是你的计算机可能会耗尽内存。内存不足通常是一个大问题，因为它会导致程序崩溃。一个文件大不大总是取决于你的系统资源以及你对慢的定义。

本节会展示各个包提供的一些优化技巧，这些技巧可以让你尽可能地处理更庞大的 Excel 文件。我会先研究写入库提供的选项，然后再研究读取库提供的选项。在本节末尾，我会向你展示如何并行读取工作簿的工作表以减少处理时间。

#### 1. 使用 OpenPyXL 写入文件

在使用 OpenPyXL 写入大型文件时，一定要安装好 lxml 包，因为 lxml 可以让写入过程更迅速。Anaconda 中已经包含了这个包，所以无须再进行额外的操作。然而，最关键的选项是 write_only=True 标志，它可以让内存消耗保持在较低的水平。不过，这个参数会通过 append 方法强制逐行写入，并且不再允许写入单个单元格。

In[34]: book = openpyxl.Workbook (write_only=True) #设置write_only  $\equiv$  True 参数后 book. active 就不可用了 sheet = book. create_sheet () #生成一张包含1000x200个单元格的工作表 for row in range (1000): sheet. append（list（range（200））） book.save ("openpyxl_optimized. xlsx")

#### 2. 使用 XlsxWriter 写入文件

XlsxWriter 有一个和 OpenPyXL 类似的选项叫作 constant_memory。它也会强制逐行写入。你需要像下面这样以字典的形式来传递 options 参数。

In[35]: book = xlsxwriter.workbook ("xlsxwriter_optimized. xlsx", options  $\equiv$  {"constant_memory": True}) sheet = book. add_worksheet () #生成一张包含1000x200个单元格的工作表 for row in range (1000): sheet. write_row（row, 0, list（range（200))) book.close()

#### 3. 使用 xlrd 读取文件

在读取旧式的 xls 格式的大型文件时，xlrd 可以按需加载工作表，就像下面这样：

In [36]: with xlrd. open_workbook ("xl/stores. xls", on_demand=True) as book: sheet = book. sheet_by_index (0) # 只加载第一张工作表

如果不想像这里的代码这样将工作簿用作上下文管理器，则需要手动调用 book. release_resources () 来正确关闭工作簿。要搭配 pandas 在上下文管理器模式下使用 xlrd，可以像下面这样编写代码。

In [37]: with xlrd. open_workbook ("xl/stores. xls", on_demand=True) as book: with pd.ExcelFile (book, engine="xlrd") as f: df = pd. read_excel (f, sheet_name=0)

#### 4. 使用 OpenPyXL 读取文件

要在使用 OpenPyXL 读取大型 Excel 文件时控制内存，应该使用 read_only=True 参数来加载工作簿。由于 OpenPyXL 并不支持 with 语句，因此需要确保在工作完成时关闭文件。如果你的文件包含指向外部工作簿的链接，那么可能还需要使用 keep_links=False 参数来加速读取过程。keep_links 可以确保对外部工作簿的引用不会丢失，因而如果你只对读取某个工作簿的值感兴趣，那么将这个参数设置为 True 可能会造成不必要的性能损失。

In [38]: book = openpyxl. load_workbook ("xl/big. xlsx", data_only=True, read_only=True, keep_links=False) # 在这里执行所需读取操作 book.close () # 需设置参数 read_only=True

#### 5. 并行读取工作表

在使用 pandas 的 read_excel 函数读取大型工作簿的多张工作表时，你会发现这个过程会花很长时间（马上会看到一个具体的例子）。这是因为 pandas 会逐张读取工作表。要想让这个过程更快，可以并行读取这些工作表。虽然由于文件的内部结构，并不存在一种简单的方法让工作簿写入过程并行化，但并行读取多张工作表还是非常简单的。不过，由于并行化是一个高级主题，因此我在 Python 入门部分略过了这个主题，将其放在了这里进行详细介绍。

在 Python 中，如果想充分利用现代计算机都具备的多核处理器，就需要使用标准库中的多线程包。多线程包会生成多个并行执行任务的 Python 解释器（通常一个 CPU 核心一个解释器）。此时不再是逐张处理工作表，而是一个 Python 解释器处理第一张工作表，与此同时另一个 Python 解释器处理第二张工作表，以此类推。然而，每个额外的 Python 解释器都需要一定时间启动且需要占用额外的内存，所以如果你的文件很小，那么并行读取反而可能会更慢。对于包含多个大型工作簿的大型文件的情况，多线程可以显著加快读取过程，不过这是在假定你的系统有足够的内存处理工作负载的情况下。如果像第 2 章所讲的那样在 Binder 中运行 Jupyter 笔记本，那么你就没有足够的内存，因此并行化的版本会运行得更慢。在配套代码库中，你可以找到 parallel_pandas. py，这是使用 OpenPyXL 并行读取工作表的一种简单实现方式。这个模块用起来很简单，无须对多线程有任何了解：

import parallel_pandasparallel_pandas. read_excel (filename, sheet_name=None)

在默认情况下，它会读取所有工作表，不过你可以提供一个想要处理的工作表名称的列表。和 pandas 类似，这个函数会返回如下形式的字典：{"sheetname": df}，即以工作表名称为键、DataFrame 为值。

魔法指令%time

在下面的例子中，我会发动%time 单元格魔法。第 5 章通过 Matplotlib 介绍过魔法指令。%time 是一个可以用来优化性能的实用单元格魔法，它可以轻松地对比不同代码片段的执行时间。真实时间（walltime）是程序（在这里是单元格）从头到尾经过的时间。如果你使用的是 macOS 或 Linux，则不仅会得到真实时间，还会得到一行 CPU 时间：

CPU times: user 49.4 s, sys: 108 ms, total: 49.5 s

CPU 时间测量的是程序在 CPU 上花费的时间，这个时间可能比真实时间短（如果程序必须等待 CPU 可用的话），也可能比真实时间长（如果程序在多核处理器上并行执行的话）。为了更准确地测量时间，需要使用%timeit 而不是%time，%timeit 会运行单元格多次并取平均时间。%time 和%timeit 都是单元格魔法，也就是说它们必须出现在单元格的第一行，并且测量的是整个单元格的执行时间。如果你只想测量一行的执行时间，则可以在行首使用%time 或%timeit。

下面来见识一下并行读取 big. xlsx（你可以在配套代码库的 xl 文件夹中找到）的代码有多快：

In [39]: %time data = pd. read_excel ("xl/big. xlsx", sheet_name=None, engine="openpyxl") Wall time: 49.5 s In [40]: %time import parallel_pandas data = parallel_pandas. read_excel ("xl/big. xlsx", sheet_name=None) Wall time: 12.1 s

要获得代表 Sheet 1 的 DataFrame，在两种情况下都是使用 data["Sheet 1"]。注意两个示例的真实时间，我在我的六核笔记本上处理这个工作簿时，并行版本比 pd. read_excel 快了几倍。如果你还想更快，则可以直接将 OpenPyXL 并行化：在配套代码库中也可以找到对应的实现（parallel_openpyxl. py），同时还有一个用于 xlrd 并行读取旧式 xls 格式文件的实现（parallel_xlrd. py）。通过底层的包而不是 panda 让你能够跳过 DataFrame 的转换过程，也可以应用所需的清理过程。这很可能可以帮助你提升代码的运行速度——如果这对你很重要的话。

使用 Modin 并行读取工作表

如果只需读取单张大型工作表，那么值得了解一下 Modin。Modin 项目可以作为 pandas 的替代品。它会并行处理单张工作表的读取过程，并实现显著的速度提升。由于 Modin 需要指定版本的 pandas，因此你在安装 Modin 时可能会导致 Anaconda 附带的 pandas 被降级。如果想尝试一下，那么我建议你为此创建一个单独的 Conda 环境，确保你的 base 环境不会被弄乱。参见附录 A 详细了解如何创建 Conda 环境：

(base)> conda create - - name modin python  $= 3$  .8 - y (base)> conda activate modin (modin)> conda install - c conda- forge modin - y

在我的计算机上对 big. xlsx 文件执行如下代码大约花了 5 秒时间，而 pandas 需要 12 秒。

import modin. pandas data = modin. pandas. read_excel ("xl/big. xlsx" sheet_name  $= \Theta$  ，engine = "openpyxl")

知道了如何处理大型文件之后，接下来看看在将 DataFrame 数据写到 Excel 时如何将 pandas 和低级读写包结合起来以改进其默认格式。

### 8.2.2 调整 DataFrame 在 Excel 中的格式

要想按照需求调整 DataFrame 在 Excel 中的格式，可以编写将 pandas 与 OpenPyXL 或 XlsxWriter 结合使用的代码。首先用它们来为导出的 DataFrame 添加一个标题。然后对 DataFrame 的标题和索引进行格式化。最后再格式化 DataFrame 的数据部分。在读取文件的过程中将 pandas 和 OpenPyXL 搭配使用在有些时候相当强大，所以从这里开始：

```
In [41]: with pd.ExcelFile ("xl/stores. xlsx"，engine = "openpyxl") as xlfile: #读取DataFrame df = pd. read_excelxlfile, sheet_name = "2020") #获取0penPyXL工作簿对象 book = xlfile. book #OpenPyXL代码从这里开始 sheet = book["2019"] value = sheet["B 3"]. value #读取单个值
```
在写入工作簿时，其工作方式是类似的，我们可以方便地为 DataFrame 报表添加一个标题：

```
In [42]: with pd.Excelwriter ("pandas_and_openpyxl. xlsx" engine = "openpyxl") as writer: df = pd. DataFrame（{"col 1":[1，2，3，4]，"col 2":[5，6，7，8]}） #写入DataFrame df. to_excel (writer，"Sheet 1"，startrow  $= 4$  ，startcol  $= 2$
```
获取 OpenPyXL 工作簿和工作表对象 book = writer. booksheet = writer. sheets["Sheet 1"]

OpenPyXL 的代码从这里开始 sheet["A 1"]. value = "This is a Title" # 写入单个单元格的值

这些示例中使用了 OpenPyXL，但是对于其他包来说在概念上也是一样的。接下来了解一下应该如何调整 DataFrame 的索引和标题。

# 1. 调整 DataFrame 索引和标题的格式

要想获得对索引和列标题的格式的完全控制，最简单的方式是亲自编写相应的代码。下面的示例分别展示了如何利用 OpenPyXL 和 XlsxWriter 达到这一目的。先从创建 DataFrame 开始：

In [43]: df = pd.DataFrame ({"col 1": [1, - 2], "col 2": [- 3, 4]}, index=["row 1", "row 2"]) df. index. name = "ix"dfOut[43]: col 1 col 2 ixrow 1 1 - 3 row 2 - 2 4

要用 OpenPyXL 格式化索引和标题，可以像下面这样做：

In [44]: from openpyxl. styles import PatternFillIn [45]: with pd.ExcelWriter ("formatting_openpyxl. xlsx", engine="openpyxl") as writer:# 将整个 df 以默认格式从 A 1 处写入 df. to_excel (writer, startrow=0, startcol=0)# 将整个 df 以默认自定义索引/标题格式从 A 6 处写入 startrow, startcol = 0, 5# 1. 写入 DataFrame 的数据部分 df. to_excel (writer, header=False, index=False, startrow=startrow + 1, startcol=startcol + 1)

获取工作表对象并创建样式对象 sheet = writer. sheets["Sheet 1"]style = PatternFill (fgColor="D 9 D 9 D 9", fill_type="solid")

2. 写入带样式的列标题 for i, col in enumerate (df. columns):    sheet.cell (row=startrow + 1, column=i + startcol + 2, value=col). fill = style

3. 写入带样式的索引 index = [df. index. name if df. index. name else None] + list (df. index) for i, row in enumerate (index):    sheet.cell (row=i + startrow + 1, column=startcol + 1, value=row). fill = style

如果想使用 XlsxWriter 对索引和标题进行格式化，那么需要对代码进行一些微调：

In[46]： #使用xlswriter对索引/标题进行格式化 with pd.Excelwriter ("formatting_xlsxwriter. xlsx", engine="xlswwriter") as writer: #将整个df以默认格式从A1处写入 df. to_excel (writer, startrow=0, startcol=0) #将整个df以默认自定义索引/标题格式从A6处写入 startrow, startcol  $= 0$  ，5 #1 . 写入 DataFrame 的数据部分 df. to_excel (writer, header = False, index = False, startrow = startrow  $^+$  1, startcol = startcol  $^+$  1) #获取工作簿对象和工作表对象并创建样式对象 book = writer. book sheet = writer. sheets["Sheet 1"] style = book. add_format ({"bg_color": " #D9D9D9 "}) #2 . 写入带样式的标题 for i, col in enumerate (df. columns): sheet.write (startrow, startcol  $^+$  i+1, col, style) #3 . 写入带样式的索引 index = [df. index. name if df. index. name else None]  $^+$  list (df. index) for i, row in enumerate (index): sheet.write (startrow  $^+$  i, startcol, row,style)

可以在图 8- 2 中看到示例代码的输出。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/9916a68cf31e8aa2d787cc9fda71e9be2b28ef49d78a08dc20cdfc7842a98417.jpg)  
图 8-2：带有默认格式的 DataFrame（左）和带有自定义格式的 DataFrame（右）

在对索引和标题进行格式化后，现在来看看如何对数据部分进行样式调整。

# 2. 格式化 DataFrame 的数据部分

数据部分的格式化能达到何种程度取决于你所使用的是哪种包：如果你使用的是 pandas 的 to_excel 方法，那么 OpenPyXL 可以为每一个单元格应用一种格式，而 XlsxWriter 只能对行或列应用格式。如果要设置单元格的数字格式为 3 位小数并居中内容（参见图 8- 3），那么可以使用 OpenPyXL 编写如下代码。

In [47]: from openpyxl. styles import Alignment  In [48]: with pd.ExcelWriter ("data_format_openpyxl. xlsx", engine="openpyxl") as writer:      # 写入 DataFrame      df. to_excel (writer)

获取工作簿对象和工作表对象  book = writer. book  sheet = writer. sheets["Sheet 1"]  # 格式化每一个单元格  nrows, ncols = df. shape  for row in range (nrows):      for col in range (ncols):          # 考虑到标题/索引，这里加 1          # 因为 OpenPyXL 的索引是从 1 开始的，所以还要加 1          cell = sheet.cell (row=row + 2, column=col + 2)          cell. number_format = "0.000"          cell. alignment = Alignment (horizontal="center")

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/3faa371bc2eb4c7ba0dc8e19a3171e52096f5d9b6693c3521c36857d9e9133dd.jpg)  
图 8-3：数据部分已被格式化的 DataFrame

对于 XlsxWriter，将代码进行如下调整：

In [49]: with pd.ExcelWriter ("data_format_xlsxwriter. xlsx", engine="xlsxwriter") as writer:  # 写入 DataFrame  df. to_excel (writer)  # 获取工作簿对象和工作表对象  book = writer. book  sheet = writer. sheets["Sheet 1"]  # 格式化各列（无法格式化单个单元格）  number_format = book. add_format ({"num_format": "0.000", "align": "center"})  sheet. set_column (first_col=1, last_col=2, cell_format=number_format)

pandas 在 DataFrame 上提供了实验性的 style 属性作为一种替代品。“实验性”意味着其语法随时可能发生改变。由于样式属性是为了将 DataFrame 格式化为 HTML 而引入的，因此它们使用的是 CSS 语法。CSS 代表 cascading stylesheet（层叠样式表），它是用来定义 HTML 元素的样式的。要应用与前面示例中相同的格式（3 位小数和居中对齐），需要通过 applymap 对象对象的每个元素应用一个函数。通过 df. style 属性可以获得 Styler 对象：

In [50]: df.style.applymap (lambda x: 'number- format: 0.000, text- align: center')\\ .to_excel ("styled. xlsx")

代码的结果和图 8- 3 是一样的。如果想了解有关 DataFrame 样式的更多细节，请直接参考样式文档。

在不依赖样式属性的情况下，pandas 还提供了对日期和时间的格式化支持，如图 8- 4 所示。

In [51]: df = pd.DataFrame ({"Date": [dt.date (2020, 1, 1)], "Datetime": [dt.datetime (2020, 1, 1, 10)]]}) with pd.ExcelWriter ("date. xlsx", date_format="yyyy- mm- dd", datetime_format="yyyy- mm- dd hh:mm: ss") as writer: df. to_excel (writer)

<table><tr><td></td><td>A</td><td>B</td><td>C</td></tr><tr><td>1</td><td></td><td>Date</td><td>Datetime</td></tr><tr><td>2</td><td>0</td><td>2020-01-01</td><td>2020-01-01 10:00:00</td></tr></table>

图 8-4：包含格式化日期的 DataFrame

# 其他读写包

除了本章中展示的这些包，还有一些包对于特定的用例可能值得一试。

pyexcel

pyexcel 为读写不同的 Excel 包以及其他文件格式（包括 CSV 文件和 OpenOffice 文件）提供了一种通用的语法。

PyExcelerate

PyExcelerate 的目标是以尽可能快的速度写入 Excel 文件。

pylightxl

pylightxl 可以读取 xlsx 文件和 xlsx 文件，可以写入 xlsx 文件。

styleframe

styleframe 将 pandas 和 OpenPyXL 相结合以从格式规整的 DataFrame 生成 Excel 文件。

oletools

oletools 并非一个经典的读写包，但它可以分析 Microsoft Office 文档（比如分析恶意软件）。它提供了一种便捷的方法来提取 Excel 工作簿中的 VBA 代码。

现在你已经知道了如何将 DataFrame 以 Excel 的格式进行格式化，是时候再次回到第 7 章的案例研究来看一看是否能利用本章中的知识来改进这份 Excel 报表。

# 8.2.3 案例研究（复习）：Excel 报表

8.2.3 案例研究（复习）：Excel 报表本章已接近尾声，你也学习了足够的知识，现在回到第 7 章案例研究中的 Excel 报表，我们来让它在视觉上更引人注目。如果你愿意的话，可以回到配套代码库中的 sales_report_pandas. py 并尝试将其变成图 8- 5 的样子。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/add78dc6aefd9f11eb03d5a1ec6ce3403935930c397008749911761843e7df39.jpg)  
图 8-5：由 sales_report_openpyxl. py 生成的新的销售报表

浅色的数字表示低于 20000 的销售额。本章并没有讲到格式化的所有方面（比如如何应用条件格式），所以你必须利用你所选的包的文档。为了可以和你自己的解决方案进行对比，我将两个可以生成这张报表的脚本也放到了配套代码库中。一个版本基于 OpenPyXL (sales_report_openpyxl. py)，另一个版本基于 XlsxWriter (sales_report_xlsxwriter. py)。对两个脚本进行对比或许可以让你在为下一个写入任务选择写入包时做出更成熟的决定。第 9 章还会再次回到这个案例研究，届时我们会依靠安装好的 Microsoft Excel 来处理报表模板。

# 8.3 小结

本章首先介绍了 pandas 在底层使用的各种读写包。无须安装 pandas，直接使用这些读写包就能够读写 Excel 工作簿。不过，将它们和 pandas 结合起来则可以通过添加标题、图表、格式等方式来改进 Excel DataFrame 报表。虽然目前的读写包已经非常强大，但我还是希望在某一天出现一个“NumPy 时刻”将所有开发者的努力都汇聚到同一个项目中。如果不需要查表就能知道什么时候该用什么包，也不需要为不同的 Excel 文件使用不同的语法，那就再好不过了。因此，一开始可以尽可能地使用 pandas 来解决这类问题，只在 pandas 没有提供你所需要的功能时才用到读写包。

不过，Excel 远非一个简单的数据文件，也不仅仅是一张简单的报表。Excel 应用程序拥有非常直观的用户界面，用户只需输入几个数字就可以让其显示所需信息。不直接读写 Excel 文件，而是对 Excel 应用程序进行自动化可以让我们进入一个全新的领域，这就是本书第四部分将要探索的内容。第 9 章会展示如何用 Python 远程控制 Excel，这就是 Excel 自动化之旅的起点站。
