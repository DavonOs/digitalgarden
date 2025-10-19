---
{"dg-publish":true,"dg-permalink":"books/35799208/06","permalink":"/books/35799208/06/","metatags":{"description":"本章涉及了 pandas 中用于分析数据集的一些新的概念和工具。我们学习了如何读取 CSV 文件，如何处理缺失或重复的数据，如何利用描述性统计量，也见识到了将 DataFrame 转化为交互式图表有多简单。虽然你可能需要一些时间来消化这些知识，但是应该很快就能体会到 pandas 带来的强大力量。本章对 pandas 和 Excel 的 AutoFilter 功能、VLOOKUP 公式、数据透视表、PowerQuery 进行了对比。","og:site_name":"DavonOs","og:title":"Excel Python","og:type":"book","og:url":"https://zuji.eu.org/books/35799208/06","og:image":"https://file.ituring.com.cn/LargeCover/22038dc37469788a2ed5","og:image:width":"50","og:image:alt":"bookcover"},"created":"2025-09-24 14:45","updated":"2025-09-26 16:41"}
---

# 6.1 DatetimeIndex

本节会学习如何构造 DatetimeIndex，如何筛选属于特定时间范围的索引，以及如何处理时区。

# 6.1.1 创建 DatetimeIndex

pandas 为构造 DatetimeIndex 提供了 date_range 函数。它会接受一个开始日期、一个频率参数，以及周期数或者结束日期：

In[1]： #首先导入本章中会用到的包 ， #并将绘图后端设置为Plotly import pandas as pd import numpy as np pd. options. plotting. backend  $=$  "plotly" In[2]： #通过起始时间戳 、周期数和频率 #（"D"  $\equiv$  daily）创建 DatetimeIndex daily_index  $=$  pd. date_range ("2020- 02- 28"，periods  $\equiv 4$  ，freq  $\equiv$  "D") daily_index Out[2]: DatetimeIndex (['2020- 02- 28'，'2020- 02- 29'，'2020- 03- 01'，'2020- 03- 02'], dtype  $\equiv$  'datetime 64[ns]，freq  $\equiv$  'D') In[3]： #通过起始/结束时间戳创建DatetimeIndex #将频率设置为每周星期日 （"W- SUN"） weekly_index  $=$  pd. date_range ("2020- 01- 01"，"2020- 01- 31"，freq  $\equiv$  "W- SUN") weekly_index Out[3]: DatetimeIndex (['2020- 01- 05'，'2020- 01- 12'，'2020- 01- 19'，'2020- 01- 26'], dtype  $\equiv$  'datetime 64[ns]，freq  $\equiv$  'W- SUN') In[4]: #通过weekly_index构造DatetimeIndex #可以作为只在星期日开放的博物馆的游客人数 pd.DataFrame (data=[21，15，33，34]， columns  $\equiv$  ["visitors"]，index  $\equiv$  weekly_index) Out[4]: visitors 2020- 01- 05 21 2020- 01- 12 15 2020- 01- 19 33 2020- 01- 26 34

现在回到第 5 章中微软股价的时序。如果仔细观察列的数据类型，你会注意到 Date 列是 object 类型，也就是说 pandas 会将时间戳作为字符串来解释：

In[5]: mstt  $=$  pd. read_csv ("csv/MSFT. csv") In[6]: mstt.info () <class'pandas.core.frame.DataFrame'> RangeIndex: 8622 entries, 0 to 8621 Data columns (total 7 columns):

Column Non- Null Count Dtype 0 Date 8622 non- null object 1 Open 8622 non- null float 64 2 High 8622 non- null float 64 3 Low 8622 non- null float 64 4 Close 8622 non- null float 64 5 Adj Close 8622 non- null float 64 6 Volume 8622 non- null int 64 dtypes: float 64 (5), int 64 (1), object (1) memory usage: 471.6+ KB

有两种方法可以修复这个问题并将其转换为 datetime 数据类型。一种方法是在该列上执行 to_datetime 函数。如果你想直接对原本的 DataFrame 进行修改，那么一定要记得将修改后的列赋值给原本的 DataFrame：

In[7]: msft. loc[：，"Date"]  $=$  pd. to_datetime (msft["Date"]) In[8]: msft. dtypes Out[8]: Date datetime 64[ns] Open float 64 High float 64 Low float 64 Close float 64 Adj Close float 64 Volume int 64 dtype:object

另一种方法是通过 parse_dates 参数告诉 read_csv 这一列包含时间戳。parse_dates 会接受一个列名列表或者索引作为参数。另外，你可能总是需要将时间戳转换为 DataFrame 的索引，因为我们马上会看到，以时间戳为索引可以让筛选数据更加简单。在 index_col 参数中提供想要用作索引的列名或索引可以省去一次 set_index 调用：

In[9]: msft  $=$  pd. read_csv ("csv/MSFT. csv", index_col  $=$  "Date", parse_dates  $=$  ["Date"]) In[10]: msft.info () <class "pandas.core.frame.DataFrame'> Datetimelndex: 8622 entries, 1986- 03- 13 to 2020- 05- 27 Data columns (total 6 columns): # Columns Non- Null Count dtype Open 8622 non- null float 64 1 High 8622 non- null float 64 2 Low 8622 non- null float 64 3 Close 8622 non- null float 64 4 Adj Close 8622 non- null float 64 5 Volume 8622 non- null int 64 dtypes: float 64 (5), int 64 (1) memory usage: 471.5KB

注意，第二次调用 info 输出的内容发生了变化，第二行的内容从 RangeIndex：8622 entries，0 to 8621 变为 DatetimeIndex：8622 entries，1986- 03- 13 to 2020- 05- 27。这就表明你现在正在处理一个包含 DatetimeIndex 的 DataFrame。如果想转换其他的数据类型（比

如想将 Volume 从 int 转换为 float)，你也有两种选择：要么为 read_csv 函数提供参数 dtype=\{"Volume": float\}；要么像下面这样使用 astype 方法。

In [11]: msft. loc[:, "Volume"] = msft["Volume"]. astype ("float")  msft["Volume"]. dtype  Out[11]: dtype ('float 64')

处理时序时，在开始分析之前最好确保索引井然有序：

In [12]: msft = msft. sort_index ()

如果只需要访问 Datetimex 的一部分，比如只需要访问日期部分而不需要访问时间，那么可以像下面这样访问它的 date 属性：

In [13]: msft. index. date  Out[13]: array ([datetime.date (1986, 3, 13), datetime.date (1986, 3, 14), datetime.date (1986, 3, 17), ..., datetime.date (2020, 5, 22), datetime.date (2020, 5, 26), datetime.date (2020, 5, 27)], dtype=object)

除了 date，也可以访问 year、month、day 等属性。要在 datetime 类型的列上使用同样的功能，可以使用 df 属性，比如 df["column_name"]. dt. date。

对 Datetimex 完成排序之后，下面来看看如何通过特定的周期来筛选 DataFrame。

# 6.1.2 筛选 Datetimex

如果你的 DataFrame 包含 Datetimex，为 loc 传递 YYYY- MM- DD HH:MM: SS 格式的字符串作为参数可以轻松选取属于特定时间周期的行。pandas 会将这个字符串转换为一个包含整个时间周期的切片。如果要选取属于 2019 年的所有行，则需要传递一个字符串，而不是数字：

In [14]: msft. loc["2019", "Adj Close"]  Out[14]: Date  2019- 01- 02 99.099190  2019- 01- 03 95.453529  2019- 01- 04 99.893005  2019- 01- 07 100.020401  2019- 01- 08 100.745613  2019- 12- 24 156.515396  2019- 12- 26 157.798309  2019- 12- 27 158.086731  2019- 12- 30 156.724243  2019- 12- 31 156.833633  Name: Adj Close, Length: 252, dtype: float 64

现在更进一步，为 2019 年 6 月和 2020 年 5 月之间的数据绘制一张图像（参见图 6- 1）。

In [15]: msft. loc["2019- 06": "2020- 05", "Adj Close"]. plot ()

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/b5c828f54f01071ffea9d3459060563c28686f7f357d1d6a13814255281e11d8.jpg)  
图 6-1：MSFT 的调整收盘价

将鼠标指针悬停在图表上可以显示一条有关该值的提示信息，用鼠标在图上画一个矩形可以进行缩放。双击图表可以返回默认视图。

在下一节中我们会利用调整收盘价来学习如何处理时区。

# 6.1.3 处理时区

微软在纳斯达克上市，纳斯达克位于纽约，每天下午 4 点闭市。要将这些额外的信息添加到 DataFrame 的索引中，首先要通过 DateOffset 添加闭市时间，然后通过 tz_localize 为时间戳添加正确的时区。由于闭市时间只对收盘价有用，因此需要创建一个新的 DataFrame：

In[16]: #将时间信息添加到日期中 msft_close = msft_loc[:, ["Adj Close"]]. copy () msft_close. index = msft_close. index + pd.DateOffset (hours=16) msft_close.head (2) Out[16]: Adj Close Date 1986- 03- 13 16:00:00 0.062205 1986- 03- 14 16:00:00 0.064427 In[17]: #令时间戳包含时区信息 msft_close = msft_close. tz_localize ("America/New_York") msft_close.head (2) Out[17]: Adj Close Date 1986- 03- 13 16:00:00- 05:00 0.062205 1986- 03- 14 16:00:00- 05:00 0.064427

如果你想将时间戳转换为 UTC 时区，可以使用 DataFrame 的 tz_convert 方法。UTC 代表协调世界时（Coordinated Universal Time），它是格林尼治标准时间（GMT）的后继者。要注意 UTC 闭市时间的变化依赖于纽约夏令时（daylight saving time，DST）的生效情况：

In [18]: msft_close = msft_close. tz_convert ("UTC") msft_close. loc["2020- 01- 02", "Adj Close"] # 21:00，不启用 DST Out[18]: Date 2020- 01- 02 21:00:00+00:00 159.737595 Name: Adj Close, dtype: float 64 In [19]: msft_close. loc["2020- 05- 01", "Adj Close"] # 20:00，启用 DST Out[19]: Date 2020- 05- 01 20:00:00+00:00 174.685175 Name: Adj Close, dtype: float 64

像这样处理时序之后可以让你比较位于不同时区的股票交易所的收盘价，即使数据中缺少这样的信息或者数据是以当地时间表示的也没有关系。

现在你已经知道什么是 DatetimeIndex 了，在下一节中，我们会通过计算和比较股价来尝试一些常见的时序操作。

# 6.2 常见时序操作

本节会展示如何执行常见的时序分析任务，比如计算股票收益、绘制各种股票的表现，以及在热度图中对其收益的相关性进行可视化。本节还会介绍如何更改时序的频率以及如何计算滚动统计信息。

# 6.2.1 移动和百分比变化率

在金融领域，通常假定股票的对数收益率（log return）服从正态分布。这里的对数收益率指的是当前股价和之前的股价之比的对数。为了体会每日对数收益率的分布情况，我们来绘制一个直方图。不过首先需要算出对数收益率。在 Excel 中，如图 6- 2 所示，通常需要用到一个涉及两行数据的公式。

<table><tr><td></td><td>A</td><td>B</td><td>C</td></tr><tr><td>1</td><td>Date</td><td>Adj Close</td><td></td></tr><tr><td>2</td><td>3/13/1986</td><td>0.062205</td><td></td></tr><tr><td>3</td><td>3/14/1986</td><td>0.0644777</td><td>=LN (B 3/B 2)</td></tr><tr><td>4</td><td>3/17/1986</td><td>0.065537</td><td>0.017082</td></tr></table>

# 图 6-2：在 Excel 中计算对数收益率

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/9edd6f69ddb32618ba428c2b284f86b644b6be93ae7bfc26249288920f6c62b5.jpg)

# Excel 和 Python 中的对数

Excel 用 LN 表示自然对数，用 LOG 表示以 10 为底的对数。而在 Python 的 math 模块和 NumPy 中，自然对数用 log 表示，以 10 为底的对数用 log 10 表示。

在 pandas 中没有这样的公式，你需要使用 shift 方法将值下移一行。这个方法允许你在单行上进行操作，因此可以利用向量化。shift 会接受一个正整数或负整数作为参数，如果

参数为正，就下移对应行；如果参数为负，则上移对应行。先来看看 shift 如何工作：

In[20]: msft_close.head () Out[20]: Adj Close Date 1986- 03- 1321:00:00+00:00 0.062205 1986- 03- 1421:00:00+00:00 0.064427 1986- 03- 1721:00:00+00:00 0.065537 1986- 03- 1821:00:00+00:00 0.063871 1986- 03- 1921:00:00+00:00 0.062760 In[21]: msft_close.shift (1). head () Out[21]: Adj Close Date 1986- 03- 1321:00:00+00:00 NaN 1986- 03- 1421:00:00+00:00 0.062205 1986- 03- 1721:00:00+00:00 0.064427 1986- 03- 1821:00:00+00:00 0.065537 1986- 03- 1921:00:00+00:00 0.063871

现在你可以编写易于阅读和理解的基于向量的公式了。NumPy 的 log ufunc 会被应用到每一个元素上以求出其自然对数。然后就可以绘制出这个直方图了（参见图 6- 3）。

In[22]: returns  $=$  np. log（msft_close/msft_close. shift（1)) returns  $=$  returns.rename (columns  $=$  {"AdjClose"："returns"}) returns.head () Out[22]: returns Date 1986- 03- 1321:00:00+00:00 NaN 1986- 03- 1421:00:00+00:00 0.035097 1986- 03- 1721:00:00+00:00 0.017082 1986- 03- 1821:00:00+00:00 - 0.025749 1986- 03- 1921:00:00+00:00 - 0.017547 In[23]: #绘制每日对数收益率的直方图 returns.plot.hist()

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/1103d57f6550b6f5fbdce1fcf75aa6a92196e9f203658fca8c513d8b5ab81d86.jpg)  
图 6-3：直方图

要获得简单收益率（simple return），可以使用 pandas 内置的 pct_change 方法。在默认情况下，它会计算相对于前一行数据的百分比变化率，这也正是简单收益率的定义：

In [24]: simple_rets = msft_close. pct_change ()    simple_rets = simple_rets.rename (columns=\{"Adj Close": "simple_rets"\})    simple_rets.head () Out[24]:    simple_retsDate    1986- 03- 13 21:00:00+00:00    NaN    1986- 03- 14 21:00:00+00:00    0.035721    1986- 03- 17 21:00:00+00:00    0.017229    1986- 03- 18 21:00:00+00:00    - 0.025421    1986- 03- 19 21:00:00+00:00    - 0.017394

到目前为止我们只关注了微软的股价。在下一节中，我们会读取更多的时序数据，以便对其他需要时序参数的 DataFrame 方法进行研究。

# 6.2.2 基数的更改和相关性

当处理多个时序时，事情就变得更加有趣了。下面来读取一些其他公司的调整收盘价，这些数据来自亚马逊（AMZN）、谷歌（GOOGL）和 Apple（AAPL），它们也是从雅虎财经上下载下来的：

In[25]: parts  $\equiv$  [] #保存各个DataFrame的列表 for ticker in["AAPL"，"AMZN"，"GOOGL"，"MSFT"]： #usecols参数可以让我们只读取Date列和AdjClose列 adj_close  $\equiv$  pd. read_csv (f"csv/{ticker}. csv", index, col  $\equiv$  "Date"，parse_dates  $\equiv$  ["Date"], usecols  $\equiv$  ["Date"，"Adj Close"]) #将列重命名为股票代码 adj_close  $\equiv$  adj_close.rename (columns  $\equiv$  {"Adj Close": ticker}) #将股价DataFrame添加到parts列表中 parts.append (adj_close) In[26]: #将4个DataFrame组合成单个DataFrame adj_close  $\equiv$  pd.concat (parts, axis  $= 1$  adj_close Out[26]: AAPL AMZN GOOGL MSFT Date 1980- 12- 12 0.405683 NaN NaN NaN 1980- 12- 15 0.384517 NaN NaN NaN 1980- 12- 16 0.356296 NaN NaN 1980- 12- 17 0.365115 NaN NaN NaN 1980- 12- 18 0.375698 NaN NaN NaN 2020- 05- 22 318.890015 2436.879883 1413.239990 183.509995 2020- 05- 26 316.730011 2421.869107 1421.369995 181.570007 2020- 05- 27 318.109985 2410.389893 1420.280029 181.809998 2020- 05- 28 318.250000 2401.100098 1418.239990 NaN 2020- 05- 29 317.940002 2442.379117 1433.520020 NaN

[9950 rows x 4 columns]

见识到 concat 的威力了吗？pandas 将每个时序都沿日期进行了自动对齐。这就是为什么那些历史没有 Apple 您久的公司股价会包含 NaN。由于 MSFT 在最近的两天中也包含 NaN，因此你可能已经猜到了 MSFT. csv 是两天前下载的。将时序沿日期对齐是一种很典型的操

作，但是在 Excel 中很难实现，因而也很容易出错。丢弃所有包含缺失值的行可以保证所有股价都有同样的数据点：

In [27]: adj_close = adj_close.dropna ()  adj_close.info ()  <class 'pandas.core.frame.DataFrame'>  DatetimexIndex: 3970 entries, 2004- 08- 19 to 2020- 05- 27  Data columns (total 4 columns):  # Column Non- Null Count Dtype  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ... 0 AAPL 3970 non- null float 64  1 AMZN 3970 non- null float 64  2 GOOGL 3970 non- null float 64  3 MSFT 3970 non- null float 64  dtypes: float 64 (4)  memory usage: 155.1 KB

现在更改股价的基数让所有的时序都从 100 开始。这样做可以在图表中对它们的相关表现进行比较，如图 6- 4 所示。要更改时序的基数，首先应将每个值除以起始值，然后再乘以新的基数 100。如果在 Excel 中做过同样的事，那么你一般会写一个结合了绝对值和相对单元格引用的公式，然后把这个公式复制并粘贴到每一行和每一个时序。多亏了向量化和广播技术，在 pandas 中，你只需写一个公式即可。

In [28]: # 使用一个从 2019 年 6 月到 2020 年 5 月的样本  adj_close_sample = adj_close_loc["2019- 06","2020- 05", :]  rebased_prices = adj_close_sample / adj_close_sample. iloc[0, :] * 100  rebased_prices.head (2)

Out[28]:

AAPL AMZN GOOGL MSFT Date 2019- 06- 03 100.000000 100.000000 100.000000 100.000000 2019- 06- 04 103.658406 102.178197 101.51626 102.770372

In [29]: rebased_prices.plot ()

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/98dd7e74ca497e64ffc121a673015d288be6126d0b4edbc7940ba63ff2e06516.jpg)  
图 6-4：更改基数后的时序

通过 corr 方法获取数据的相关性，可以了解到不同公司股价之间的独立性。不幸的是，由于 pandas 没有提供内置的图像类型来将相关性矩阵可视化为热度图，因此需要直接使用 Plotly 的 plotly. express 接口（参见图 6- 5）。

In[30]: #每日对数收益率的相关性 returns  $=$  np.log (adj_close/adj_close.shift (1)) returns.corr () Out[30]: AAPL AMZN GOOGL MSFT AAPL 1.000000 0.424910 0.503497 0.486065 AMZN 0.424910 1.000000 0.486690 0.485725 GOOGL 0.503497 0.486690 1.000000 0.525645 MSFT 0.486605 0.485725 0.525645 1.000000 In[31]: import plotly. express as px In[32]: fig  $=$  px. imshow（returns. corr（）， x=adj_close. columns, y=adj_close. columns, color. continuous_scale=list ( reversed (px. colors. sequential. RdBu)), xmin=- 1, zmax=1) fig.show()

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/ebf6a1c760ad9c138cb34e56b3eb349cc4989b1cd1584287cefa42a91aaf903b.jpg)  
图 6-5：相关性热度图

如果想理解 imsbow 的原理，可以看一下 PlotlyExpressAPI 的文档。

现在我们已经学习了关于时序的不少知识：如何组合、清理时序，如何计算收益率和相关性。但如果你发现每日收益率对于你的分析任务来说并不是一个好的选择，你想要改成每月收益率，那该怎么办呢？下一节的主题便是如何更改时序数据的频率。

# 6.2.3 重新采样

向上/向下采样（up and down sampling）是处理时序时的一项常见任务。向上采样指的是将时序的频率提高，而向下采样指的是将时序的频率降低。例如，在财务概况介绍中，你通常需要展示出月度或季度的状况。要将每日时序转换为每月时序，可以使用 resample 方

法，该方法接受字符串形式的频率参数，比如 M 代表日历月底（end- of- calendar- month），BM 代表经营月底（end- of- business- month）。你可以在 pandas 文档中找到所有频率字符串的列表。和 groupby 类似，可以紧接着调用一个方法指定如何重采样。这里使用了 last 来获得当月最后几个观察值：

In [33]: end_of_month  $=$  adj_close.resample ("M"). last () end_of_month.head () Out[33]: AAPL AMZN G 00 GL MSFT Date 2004- 08- 31 2.132708 38.139999 51.236237 17.673630 2004- 09- 30 2.396127 40.860001 64.864868 17.900215 2004- 10- 31 3.240182 34.130001 95.415413 18.107374 2004- 11- 30 4.146072 39.680000 91.081078 19.344421 2004- 12- 31 3.982207 44.290001 96.491493 19.279480

除了 last，你也可以选择任何能够在 groupby 上使用的方法，比如 sum 或者 mean。还有一个 ohlc 方法，它可以方便地获得周期内的开盘价、最高价、最低价和收盘价。这些数据可以用作股价分析中常用的 K 线图的数据来源。

如果只有月底时序而你想要从中生成每周时序，则必须对时序进行向上采样。asfreq 不会让 pandas 应用任何转换，因此你会看到大部分的值变成了 NaN。如果想向前填充（forward- fill）最后的已知值，那么可以使用 ffill 方法：

In [34]: end_of_month.resample ("D"). asfreq (). head () # 无转换 Out[34]: AAPL AMZN G 00 GL MSFT Date 2004- 08- 31 2.132708 38.139999 51.236237 17.673630 2004- 09- 01 NaN NaN NaN NaN 2004- 09- 02 NaN NaN NaN NaN 2004- 09- 03 NaN NaN NaN NaN 2004- 09- 04 NaN NaN NaN NaN In [35]: end_of_month.resample ("W- FRI"). ffill (). head () # 向前填充 Out[35]: AAPL AMZN G 00 GL MSFT Date 2004- 09- 03 2.132708 38.139999 51.236237 17.673630 2004- 09- 10 2.132708 38.139999 51.236237 17.673630 2004- 09- 17 2.132708 38.139999 51.236237 17.673630 2004- 09- 24 2.132708 38.139999 51.236237 17.673630 2004- 10- 01 2.396127 40.860001 64.864868 17.900215

向下采样是平滑时序的方式之一，而利用滚动窗口计算统计量是另一种方式，下一节会对此进行介绍。

# 6.2.4 滚动窗口

在计算时序的统计量时，你通常想要算出滚动统计量，比如移动平均值（moving average）。移动平均值会关注时序（比如 25 天）的一个子集，先算出这个子集的均值，然后再将窗

口向前移动一天。这样就可以产生一个更平滑的新时序，且不容易产生异常值。如果你是做算法交易的，那么你可以关注股价移动平均值发生重叠的地方，然后以此（或是它的某种变体）作为交易的信号。DataFrame 有一个 rolling 方法，该方法会接受观测数量作为参数。你可以在 rolling 后面链式调用所需的统计量方法——对于移动平均值来说就是在 rolling 后面调用 mean。观察图 6- 6，你可以轻松地将原本的时序和平滑的移动平均值进行对比。

In[36]: #用2019年的数据为MSFT绘制移动平均值msft19  $=$  mfsft. loc["2019"，["AdjClose"]]. copy（) #将25天的移动平均值作为一个新列添加到DataFrame中msft19 . loc[：，"25 day average"]  $=$  msft 19["Adj Close"]. rolling (25). mean（) msft 19. plot()

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/a4c920f19ca6aaa31bced1225e3b9a437bdd9d623f58e482f9a3639bb3514611.jpg)  
图 6-6：移动平均值的图像

除了 mean，还可以使用很多其他的统计量方法，其中包括 count、sum、median、min、max、std（标准差）和 var（方差）。

现在我们已经见识到了 pandas 最重要的功能。不过理解 pandas 的局限性也同样重要，虽然我们还远未达到它的极限。

# 6.3 pandas 的局限性

在你的 DataFrame 不断增长的过程中，应当注意到 DataFrame 的容量上限。Excel 每张工作表能保存的数据有严格的限制，最多只能保存大概 1000000 行 12000 列。而 pandas 只有一个不那么严格的限制：所有的数据必须能够被设备的可用内存装下。如果实际情况并不允许，那么也有一些简单的解决方案：只加载数据集中你需要的部分，或是删去中间结果来释放一些内存。如果还是解决不了内存不足的问题，那么还有不少可以处理大型数据

的项目，它们都是 pandas 用户的“老熟人”。构建在 NumPy 和 pandas 之上的 Dask 就是其中之一，它会将大型数据集分割成多个 pandas DataFrame，将工作负载分布到多个 CPU 核心或多台设备上，从而让你可以处理大型数据集。还有一些其他的大数据项目也可以在某些 DataFrame 中使用，比如 Modin、Koalas、Vaex、PyShark、cuDF、Ibis 和 PyArrow。第 7 章会涉及 Modin 的一些知识，但除此之外的其他包都不在本书的讨论范围之内。

# 6.4 小结

我认为时序分析是 Excel 最落后的一块，读完本章后，你可能就明白了为什么 pandas 在依赖时序的金融领域取得了巨大的成功。我们已经见识到了 pandas 处理时区、重采样时序、生成相关性矩阵有多么容易，这些功能在 Excel 中要么无法得到支持，要么需要一些麻烦的解决办法。

知道如何使用 pandas 并不意味着你必须抛弃 Excel，因为两者可以密切协作。下一部分的内容会讲到如何完全脱离 Excel 应用程序来读写 Excel 文件。我们会看到，pandas 的 DataFrame 可以作为一种优秀的数据传输方式。这是非常有用的特性，因为这样一来你就可以在任何支持 Python 的操作系统（包括 Linux）中用 Python 操作 Excel 文件。第 7 章会向你展示如何用 pandas 来自动化烦琐的人工操作，比如将 Excel 文件汇总成总结报表。