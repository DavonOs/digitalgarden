---
{"dg-publish":true,"dg-permalink":"books/27055712/08","permalink":"/books/27055712/08/","metatags":{"description":"","og:site_name":"DavonOs","og:title":"第8章 SQL高级处理","og:type":"article","og:url":"https://zuji.eu.org/books/27055712/08","og:image":"https://file.ituring.com.cn/LargeCover/1712477631b07b9f5895","og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"dgShowInlineTitle":true,"created":"2025-09-10 15:08","updated":"2025-09-11 08:25"}
---

# 窗口函数

# 学习重点

学习重点- 窗口函数可以进行排序、生成序列号等一般的聚合函数无法实现的高级操作。- 理解 PARTITION BY 和 ORDER BY 这两个关键字的含义十分重要。

# 什么是窗口函数

# KEYWORD

$\bullet$  窗口函数 $\bullet$  OLAP 函数

# 注①

注①在 Oracle 和 SQL Server 中称为分析函数。

# KEYWORD

OLAP

# 注②

注②目前 MySQL 还不支持窗口函数。详细信息请参考专栏“窗口函数的支持情况”。

窗口函数也称为 OLAP 函数。为了让大家快速形成直观印象，才起了这样一个容易理解的名称（“窗口”的含义我们将在随后进行说明）。

OLAP 是 OnLineAnalyticalProcessing 的简称，意思是对数据库数据进行实时分析处理。例如，市场分析、创建财务报表、创建计划等日常性商务工作。

窗口函数就是为了实现 OLAP 而添加的标准 SQL 功能

# 专栏

# 窗口函数的支持情况

很多数据库相关工作者过去都会有这样的想法：“好不容易将业务数据插入到了数据库中，如果能够使用 SQL 对其进行实时分析的话，一定会很方便吧。”但是关系数据库提供支持 OLAP 用途的功能仅仅只有 10 年左右的时间。

其中的理由有很多，这里我们就不一一介绍了。大家需要注意的是，还有一部分 DBMS 并不支持这样的新功能。

# 注③

注③随着时间推移，标准 SQL 终将能够在所有的 DBMS 中进行使用。

本节将要介绍的窗口函数也是其中之一，截至 2016 年 5 月，Oracle、SQL Server、DB 2、PostgreSQL 的最新版本都已经支持了该功能，但是 MySQL 的最新版本 5.7 还是不支持该功能。

通过前面的学习，我们已经知道各个 DBMS 都有自己支持的特定语法和不支持的语法。标准 SQL 添加新功能的时候也会遇到同样的问题。

# 窗口函数的语法

接下来，就让我们通过示例来学习窗口函数吧。窗口函数的语法有些复杂。

# 语法 8-1 窗口函数

<窗口函数>OVER（[PARTITION BY <列清单  $>$  ORDER BY <排序用列清单  $>$  ）

※[]中的内容可以省略。

其中重要的关键字是 PARTITIONBY 和 ORDERBY，理解这两个关键字的作用是帮助我们理解窗口函数的关键。

# 能够作为窗口函数使用的函数

在学习 PARTITIONBY 和 ORDERBY 之前，我们先来列举一下能够作为窗口函数使用的函数。窗口函数大体可以分为以下两种。

$①$  能够作为窗口函数的聚合函数（SUM、AVG、COUNT、MAX、MIN） $(2)$  RANK、DENSE_RANK、ROW_NUMBER 等专用窗口函数

$(2)$  中的函数是标准 SQL 定义的 OLAP 专用函数，本书将其统称为“专用窗口函数”。从这些函数的名称可以很容易看出其 OLAP 的用途。

其中  $①$  的部分是我们在第 3 章中学过的聚合函数。将聚合函数书写在“语法 8- 1”的“  $<$  窗口函数  $>$  ”中，就能够当作窗口函数来使用了。总之，聚合函数根据使用语法的不同，可以在聚合函数和窗口函数之间进行转换。

# 语法的基本使用方法使用 RANK 函数

# KEYWORD

RANK 函数

首先让我们通过专用窗口函数 RANK 来理解一下窗口函数的语法吧正如其名称所示，RANK 是用来计算记录排序的函数。

例如，对于之前使用过的 Product 表中的 8 件商品，让我们根据不同的商品种类（product_type），按照销售单价（sale_price）从低到高的顺序排序，结果如下所示。

执行结果  

<table><tr><td>product_name</td><td>product_type</td><td>sale_price</td><td>ranking</td></tr><tr><td>又子</td><td>厨房用具</td><td>500</td><td>1</td></tr><tr><td>擦菜板</td><td>厨房用具</td><td>880</td><td>2</td></tr><tr><td>菜刀</td><td>厨房用具</td><td>3000</td><td>3</td></tr><tr><td>高压锅</td><td>厨房用具</td><td>6800</td><td>4</td></tr><tr><td>T 恤衫</td><td>衣服</td><td>1000</td><td>1</td></tr><tr><td>运动 T 恤</td><td>衣服</td><td>4000</td><td>2</td></tr><tr><td>圆珠笔</td><td>办公用品</td><td>100</td><td>1</td></tr><tr><td>打孔器</td><td>办公用品</td><td>500</td><td>2</td></tr></table>

以厨房用具为例，销售单价最便宜的“叉子”排在第 1 位，最贵的“高压锅”排在第 4 位，确实按照我们的要求进行了排序。

能够得到上述结果的 SELECT 语句请参考代码清单 8- 1。

代码清单 8- 1 根据不同的商品种类，按照销售单价从低到高的顺序创建排序表

Oracle SQL Server 1992 PostgreSQL SELECT product_name, product_type, sale_price, RANK () OVER (PARTITION BY product_type ORDER BY sale_price) AS ranking FROM Product;

# KEYWORD

PARTITION BY 子句 ORDER BY 子句

PARTITION BY 能够设定排序的对象范围。本例中，为了按照商品种类进行排序，我们指定了 product_type。

ORDER BY 能够指定按照哪一列、何种顺序进行排序。为了按照销售单价的升序进行排列，我们指定了 sale_price。此外，窗口函数中的 ORDER BY 与 SELECT 语句末尾的 ORDER BY 一样，可以通过关键字 ASC/DESC 来指定升序和降序。省略该关键字时会默认按照 ASC，也就是升序进行排序。本例中就省略了上述关键字。

# 注 1

其所要遵循的规则与 SELECT 语句末尾的 ORDER BY 子句完全相同。

通过图 8- 1，我们就很容易理解 PARTITION BY 和 ORDER BY 的作用了。如图所示，PARTITION BY 在横向上对表进行分组，而 ORDER BY 决定了纵向排序的规则。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/a886cb5b7e7b1349f0f50f078832bcc0f7cc0c7bef2ce92a65306ca7201eab42.jpg)  
图 8-1 PARTITION BY 和 ORDER BY 的作用

窗口函数兼具之前我们学过的 GROUP BY 子句的分组功能以及 ORDER BY 子句的排序功能。但是，PARTITION BY 子句并不具备 GROUP BY 子句的汇总功能。因此，使用 RANK 函数并不会减少原表中记录的行数，结果中仍然包含 8 行数据。

# 法则 8-1

窗口函数兼具分组和排序两种功能。

# KEYWORD

窗口

通过 PARTITION BY 分组后的记录集合称为窗口。此处的窗口并非“窗户”的意思，而是代表范围。这也是“窗口函数”名称的由来。

# 注 1

从词语意思的角度考虑，可能“组”比“窗口”更合适一些，但是在 SQL 中，“组”更多的是用来特指使用 GROUP BY 分割后的记录集合，因此，为了避免混淆，使用 PARTITION BY 时称为窗口。

# 法则 8-2

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/0158a6a57a0a0ab36a2a8df3c962a7f382319a563221e1a4162e3fdd7da5b5f5.jpg)

通过 PARTITION BY 分组后的记录集合称为“窗口”。

此外，各个窗口在定义上绝对不会包含共通的部分。就像刀切蛋糕一样，干净利落。这与通过 GROUP BY 子句分割后的集合具有相同的特征。

# 无需指定 PARTITIONBY

使用窗口函数时起到关键作用的是 PARTITIONBY 和 GROUPBY。其中，PARTITIONBY 并不是必需的，即使不指定也可以正常使用窗口函数。

那么就让我们来确认一下不指定 PARTITIONBY 会得到什么样的结果吧。这和使用没有 GROUPBY 的聚合函数时的效果一样，也就是将整个表作为一个大的窗口来使用。

事实胜于雄辩，下面就让我们删除代码清单 8- 1 中 SELECT 语句的 PARTITIONBY 试试看吧（代码清单 8- 2）。

# 代码清单 8-2 不指定 PARTITIONBY

Oracle SQL Server DB 2 PostgreSQL SELECT product_name, product_type, sale_price, RANK () OVER (ORDER BY sale_price) AS ranking FROM Product;

上述 SELECT 语句的结果如下所示

执行结果  

<table><tr><td>product_name</td><td>product_type</td><td>sale_price</td><td>ranking</td></tr><tr><td>圆珠笔</td><td>办公用品</td><td>100</td><td>1</td></tr><tr><td>叉子</td><td>厨房用具</td><td>500</td><td>2</td></tr><tr><td>打孔器</td><td>办公用品</td><td>500</td><td>2</td></tr><tr><td>擦菜板</td><td>厨房用具</td><td>880</td><td>4</td></tr><tr><td>T 恤衫</td><td>衣服</td><td>1000</td><td>5</td></tr><tr><td>菜刀</td><td>厨房用具</td><td>3000</td><td>6</td></tr><tr><td>运动 T 恤</td><td>衣服</td><td>4000</td><td>7</td></tr><tr><td>高压锅</td><td>厨房用具</td><td>6800</td><td>8</td></tr></table>

之前我们得到的是按照商品种类分组后的排序，而这次变成了全部商品的排序。像这样，当希望先将表中的数据分为多个部分（窗口），再使用窗口函数时，可以使用 PARTITIONBY 选项。

# 专用窗口函数的种类

从上述结果中我们可以看到，“打孔器”和“叉子”都排在第 2 位，而之后的“擦菜板”跳过了第 3 位，直接排到了第 4 位，这也是通常的排序方法，但某些情况下可能并不希望跳过某个位次来进行排序。

这时可以使用 RANK 函数之外的函数来实现。下面就让我们来总结一下具有代表性的专用窗口函数吧。

# KEYWORD

●RANK 函数●DENSE_RANK 函数●ROW_NUMBER 函数

# RANK 函数

●RANK 函数计算排序时，如果存在相同位次的记录，则会跳过之后的位次。例）有 3 条记录排在第 1 位时：1 位、1 位、1 位、4 位……

# DENSERANK 函数

同样是计算排序，即使存在相同位次的记录，也不会跳过之后的位次。例）有 3 条记录排在第 1 位时：1 位、1 位、1 位、2 位……

# ROWNUMBER 函数

赋予唯一的连续位次。例）有 3 条记录排在第 1 位时：1 位、2 位、3 位、4 位……

除此之外，各 DBMS 还提供了各自特有的窗口函数。上述 3 个函数（对于支持窗口函数的 DBMS 来说）在所有的 DBMS 中都能够使用。下面就让我们来比较一下使用这 3 个函数所得到的结果吧（代码清单 8- 3）。

# 代码清单 8-3 比较 RANK、DENSE_RANK、ROW_NUMBER 的结果

Oracle 产品 server DB 2 PosignedSELECT product_name, product_type, sale_price, RANK () OVER (ORDER BY sale_price) AS ranking, DENSE RANK () OVER (ORDER BY sale_price) AS dense_ranking, ROW_NUMBER () OVER (ORDER BY sale_price) AS row_num FROM Product;

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/40ec4e061184b5986f79e6fbb1ca95df22ebacd282e64dc5e842fb4b3a4989e1.jpg)

将结果中的 ranking 列和 dense_ranking 列进行比较可以发现，dense_ranking 列中有连续 2 个第 2 位，这和 ranking 列的情况相同。但是接下来的“擦菜板”的位次并不是第 4 而是第 3。这就是使用 DENSE_RANK 函数的效果了。

此外，我们可以看到，在 row_num 列中，不管销售单价（sale_price）是否相同，每件商品都会按照销售单价从低到高的顺序得到一个连续的位次。销售单价相同时，DBMS 会根据适当的顺序对记录进行排列。想为记录赋予唯一的连续位次时，就可以像这样使用 ROW_NUMBER 来实现。

使用 RANK 或 ROW_NUMBER 时无需任何参数，只需要像 RANK（）或者 ROW_NUMBER（）这样保持括号中为空就可以了。这也是专用窗口函数通常的使用方式，请大家牢记。这一点与作为窗口函数使用的聚合函数有很大的不同，之后我们将会详细介绍。

# 法则 8-3

由于专用窗口函数无需参数，因此通常括号中都是空的。

# 窗口函数的适用范围

目前为止我们学过的函数大部分都没有使用位置的限制，最多也就是在 WHERE 子句中使用聚合函数时会有些注意事项。但是，使用窗口函数的位置却有非常大的限制。更确切地说，窗口函数只能书写在一个特定的位置。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/b73c3308e9595f5d88931898c3e93fc28854e751f06a3622dc9a910f1194f40a.jpg)

语法上，除了 SELECT 子句，ORDER BY 子句或者 UPDATE 语句的 SET 子句中也可以使用。但因为几乎没有实际的业务示例，所以开始的时候大家只要记得只能在 SELECT 子句中使用就可以了。

这个位置就是 SELECT 子句之中。反过来说，就是这类函数不能在 WHERE 子句或者 GROUP BY 子句中使用。

# 法则 8-4

原则上窗口函数只能在 SELECT 子句中使用。

虽然我们可以把它当作一种规则死记硬背下来，但是为什么窗口函数只能在 SELECT 子句中使用呢（也就是不能在 WHERE 子句或者 GROUP BY 子句中使用）？下面我们就来简单说明一下其中的理由。

其理由就是，在 DBMS 内部，窗口函数是对 WHERE 子句或者 GROUP BY 子句处理后的“结果”进行的操作。大家仔细想一想就会明白，在得到用户想要的结果之前，即使进行了排序处理，结果也是错误的。在得到排序结果之后，如果通过 WHERE 子句中的条件除去了某些记录，或者使用 GROUP BY 子句进行了汇总处理，那好不容易得到的排序结果也无法使用了。

# 注②

反之，之所以在 ORDER BY 子句中能够使用窗口函数，是因为 ORDER BY 子句会在 SELECT 子句之后执行，并且记录保证不会减少。

正是由于这样的原因，在 SELECT 子句之外“使用窗口函数是没有意义的”，所以在语法上才会有这样的限制。

# 作为窗口函数使用的聚合函数

前面给大家介绍了使用专用窗口函数的示例，下面我们再来看一看把之前学过的 SUM 或者 AVG 等聚合函数作为窗口函数使用的方法。

所有的聚合函数都能用作窗口函数，其语法和专用窗口函数完全相同。但大家可能对所能得到的结果还没有一个直观的印象，所以我们还是通过具体的示例来学习。下面我们先来看一个将 SUM 函数作为窗口函数使用的例子（代码清单 8- 4）。

# 代码清单 8-4 将 SUM 函数作为窗口函数使用

Oracle SQL Server DB 2 PostgreSQL SELECT product_id, product_name, sale_price, SUM (sale_price) OVER (ORDER BY product_id) AS current_sum FROM Product;

执行结果  

<table><tr><td colspan="5">product_id | product_name | sale_price | current_sum</td></tr><tr><td>0001</td><td>| T 恤衫</td><td>| 1000</td><td>| 1000</td><td>←1000</td></tr><tr><td>0002</td><td>| 打孔器</td><td>| 500</td><td>| 1500</td><td>←1000+500</td></tr><tr><td>0003</td><td>| 运动 T 恤</td><td>| 4000</td><td>| 5500</td><td>←1000+500+4000</td></tr><tr><td>0004</td><td>| 菜刀</td><td>| 3000</td><td>| 8500</td><td>←1000+500+4000+3000</td></tr><tr><td>0005</td><td>| 高压锅</td><td>| 6800</td><td>| 15300</td><td></td></tr><tr><td>0006</td><td>| 叉子</td><td>| 500</td><td>| 15800</td><td></td></tr><tr><td>0007</td><td>| 橡菜板</td><td>| 880</td><td>| 16680</td><td></td></tr><tr><td>0008</td><td>| 圆珠笔</td><td>| 100</td><td>| 16780</td><td></td></tr></table>

使用 SUM 函数时，并不像 RANK 或者 ROW_NUMBER 那样括号中的内容为空，而是和之前我们学过的一样，需要在括号内指定作为汇总对象的列。本例中我们计算出了销售单价（sale_price）的合计值（current_sum）。

但是我们得到的并不仅仅是合计值，而是按照 ORDER BY 子句指定的 product_id 的升序进行排列，计算出商品编号“小于自己”的商品的销售单价的合计值。因此，计算该合计值的逻辑就像金字塔堆积那样，一行一行逐渐添加计算对象。在按照时间序列的顺序，计算各个时间的销售额总额等的时候，通常都会使用这种称为累计的统计方法。

使用其他聚合函数时的操作逻辑也和本例相同。例如，使用 AVG 来代替 SELECT 语句中的 SUM（代码清单 8- 5）。

# 代码清单 8-5 将 AVG 函数作为窗口函数使用

Oracle SQL Server DB 2 PostgreSQL SELECT product_id, product_name, sale_price, AVG (sale_price) OVER (ORDER BY product_id) AS current_avg FROM Product;

# 执行结果

<table><tr><td colspan="5">product_id | product_name | sale_price | current_avg</td><td></td></tr><tr><td>0001</td><td>| T 恤衫</td><td>|</td><td>1000</td><td>| 1000.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000</td><td>0001</td></tr><tr><td>0002</td><td>| 打孔器</td><td>|</td><td>500</td><td>| 750.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000</td><td>-</td></tr><tr><td>0003</td><td>| 运动 T 恤</td><td>|</td><td>4000</td><td>| 1833.3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333</td><td>0004</td></tr><tr><td>0005</td><td>| 高压锅</td><td>|</td><td>6800</td><td>| 3060.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000</td><td></td></tr><tr><td>0006</td><td>| 叉子</td><td>|</td><td>500</td><td>| 2633.333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333</td><td>3</td></tr><tr><td>0007</td><td>| 橡菜板</td><td>|</td><td>880</td><td>| 2382.8571428571428571</td><td></td></tr><tr><td>0008</td><td>| 圆珠笔</td><td>|</td><td>100</td><td>| 2097.5000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000</td><td></td></tr></table>

从结果中我们可以看到，current_avg 的计算方法确实是计算平均值的方法，但作为统计对象的却只是“排在自己之上”的记录。像这样以“自身记录（当前记录）”作为基准进行统计，就是将聚合函数当作窗口函数使用时的最大特征。

- 当前记录

# 计算移动平均

KEYWORD 框架

窗口函数就是将表以窗口为单位进行分割，并在其中进行排序的函数。其实其中还包含在窗口中指定更加详细的汇总范围的备选功能，该备选功能中的汇总范围称为框架。

其语法如代码清单 8- 6 所示，需要在 ORDER BY 子句之后使用指定范围的关键字。

代码清单 8-6 指定“最靠近的 3 行”作为汇总对象  

<table><tr><td>Oracle</td><td>SQL</td><td>Server</td><td>DB 2</td><td>PostgreSQL</td><td></td></tr><tr><td>SELECT</td><td colspan="5">product_id, product_name, sale_price, 
AVG (sale_price) OVER (ORDER BY product_id
ROWS 2 PRECEDING AS moving_avg
FROM Product;</td></tr></table>

执行结果（在 DB 2 中执行）  

<table><tr><td>product_id</td><td>product_name</td><td>sale_price</td><td>moving_avg</td><td></td></tr><tr><td>0001</td><td>T 恤衫</td><td>1000</td><td>1000</td><td>←(1000)/1</td></tr><tr><td>0002</td><td>打孔器</td><td>500</td><td>750</td><td>←(1000+500)/2</td></tr><tr><td>0003</td><td>运动 T 恤</td><td>4000</td><td>1833</td><td>←(1000+500+4000)/3</td></tr><tr><td>0004</td><td>菜刀</td><td>3000</td><td>2500</td><td>←(500+4000+3000)/3</td></tr><tr><td>0005</td><td>高压锅</td><td>6800</td><td>4600</td><td>←(4000+500+6800)/3</td></tr><tr><td>0006</td><td>叉子</td><td>500</td><td>3433</td><td>.</td></tr><tr><td>0007</td><td>擦菜板</td><td>880</td><td>2726</td><td>.</td></tr><tr><td>0008</td><td>圆珠笔</td><td>100</td><td>493</td><td>.</td></tr></table>

# KEYWORD

- ROWS 关键字- PRECEDING 关键字

# 指定框架（汇总范围）

我们将上述结果与之前的结果进行比较，可以发现商品编号为“0004”的“菜刀”以下的记录和窗口函数的计算结果并不相同。这是因为我们指定了框架，将汇总对象限定为了“最靠近的 3 行”。

这里我们使用了 ROWS（“行”）和 PRECEDING（“之前”）两个关键字，将框架指定为“截止到之前～行”，因此“ROWS 2 PRECEDING”

就是将框架指定为“截止到之前 2 行”，也就是将作为汇总对象的记录限定为如下的“最靠近的 3 行”。

- 自身（当前记录）- 之前 1 行的记录- 之前 2 行的记录

也就是说，由于框架是根据当前记录来确定的，因此和固定的窗口不同，其范围会随着当前记录的变化而变化。

# 图 8-2 将框架指定为截止到当前记录之前 2 行（最靠近的 3 行）

ROWS 2 PRECEDING  

<table><tr><td>product_id
(商品编号)</td><td>product_name
(商品名称)</td><td>sale_price
(销售单价)</td></tr><tr><td>0001</td><td>T 恤衫</td><td>1000</td></tr><tr><td>0002</td><td>打孔器</td><td>500</td></tr><tr><td>0003</td><td>运动 T 恤</td><td>4000</td></tr><tr><td>0004</td><td>菜刀</td><td>3000</td></tr><tr><td>0005</td><td>高压锅</td><td>6800</td></tr><tr><td>0006</td><td>叉子</td><td>500</td></tr><tr><td>0007</td><td>擦菜板</td><td>880</td></tr><tr><td>0008</td><td>圆珠笔</td><td>100</td></tr></table>

如果将条件中的数字变为“ROWS 5 PRECEDING”，就是“截止到之前 5 行”（最靠近的 6 行）的意思。

# KEYWORD

- 移动平均- FOLLOWING 关键字

这样的统计方法称为移动平均（moving average）。由于这种方法在希望实时把握“最近状态”时非常方便，因此常常会应用在对股市趋势的实时跟踪当中。

使用关键字 FOLLOWING（“之后”）替换 PRECEDING，就可以指定“截止到之后～行”作为框架了（图 8- 3）。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/b11951e8e043d76e87d6e242993cad294c49b6d7e389fde70869427daafa596b.jpg)  
图 8-3 将框架指定为截止到当前记录之后 2 行（最靠近的 3 行）

# 将当前记录的前后行作为汇总对象

如果希望将当前记录的前后行作为汇总对象时，就可以像代码清单 8- 7 那样，同时使用 PRECEDING（“之前”）和 FOLLOWING（“之后”）关键字来实现。

# 代码清单 8-7 将当前记录的前后行作为汇总对象

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/24b49190180b365975a9423567c1ed88ff0e0c83e95882450c5af2f11dae86ba.jpg)

执行结果（在 DB 2 中执行）  

<table><tr><td>product_id</td><td>product_name</td><td>sale_price</td><td>moving_avg</td><td></td></tr><tr><td>0001</td><td>T 恤衫</td><td>1000</td><td>750</td><td>←(1000+500)/2</td></tr><tr><td>0002</td><td>打扎裤</td><td>500</td><td>1833</td><td>←(1000+500+4000)/3</td></tr><tr><td>0003</td><td>运动 T 恤</td><td>4000</td><td>2500</td><td>←(500+4000+3000)/3</td></tr><tr><td>0004</td><td>菜刀</td><td>3000</td><td>4600</td><td>←(4000+3000+6800)/3</td></tr><tr><td>0005</td><td>高压锅</td><td>6800</td><td>3433</td><td>.</td></tr><tr><td>0006</td><td>叉子</td><td>500</td><td>2726</td><td>.</td></tr><tr><td>0007</td><td>擦菜板</td><td>880</td><td>493</td><td>.</td></tr><tr><td>0008</td><td>圆珠笔</td><td>100</td><td>490</td><td>.</td></tr></table>

在上述代码中，我们通过指定框架，将“1 PRECEDING”（之前 1 行）和“1 FOLLOWING”（之后 1 行）的区间作为汇总对象。具体来说，就是

将如下 3 行作为汇总对象来进行计算（图 8- 4）。

- 之前 1 行的记录- 自身（当前记录）- 之后 1 行的记录

如果能够熟练掌握框架功能，就可以称为窗口函数高手了。

图 8-4 将框架指定为当前记录及其前后 1 行  

<table><tr><td colspan="3">ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING</td></tr><tr><td>product_id
(商品编号)</td><td>product_name
(商品名称)</td><td>sale_price
(销售单价)</td></tr><tr><td>0001</td><td>T 恤衫</td><td>1000</td></tr><tr><td>0002</td><td>打孔器</td><td>500</td></tr><tr><td>0003</td><td>运动 T 恤</td><td>4000</td></tr><tr><td>0004</td><td>菜刀</td><td>3000</td></tr><tr><td>0005</td><td>高压锅</td><td>6800</td></tr><tr><td>0006</td><td>叉子</td><td>500</td></tr><tr><td>0007</td><td>擦菜板</td><td>880</td></tr><tr><td>0008</td><td>圆珠笔</td><td>100</td></tr></table>

# 两个 ORDER BY

最后我们来介绍一下使用窗口函数时与结果形式相关的注意事项，那就是记录的排列顺序。因为使用窗口函数时必须要在 OVER 子句中使用 ORDER BY，所以可能有读者乍一看会觉得结果中的记录不会按照该 ORDER BY 指定的顺序进行排序。

但其实这只是一种错觉。OVER 子句中的 ORDER BY 只是用来决定窗口函数按照什么样的顺序进行计算的，对结果的排列顺序并没有影响。因此也有可能像代码清单 8- 8 那样，得到一个记录的排列顺序比较混乱的结果。有些 DBMS 也可以按照窗口函数的 ORDER BY 子句所指定的顺序对结果进行排序，但那也仅仅是个例而已。

# 代码清单 8-8 无法保证如下 SELECT 语句的结果的排列顺序

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/01bd3b13046605800f567ce4605ee1237c7f695fb4490cfab9a77b21d0ecb77a.jpg)

# 有可能会得到下面这样的结果

<table><tr><td>product_name</td><td>product_type</td><td>sale_price</td><td>ranking</td></tr><tr><td>菜刀</td><td>厨房用具</td><td>3000</td><td>6</td></tr><tr><td>打孔器</td><td>办公用品</td><td>500</td><td>2</td></tr><tr><td>运动 T 恤</td><td>衣服</td><td>4000</td><td>7</td></tr><tr><td>T 恤衫</td><td>衣服</td><td>1000</td><td>5</td></tr><tr><td>高压锅</td><td>厨房用具</td><td>6800</td><td>8</td></tr><tr><td>叉子</td><td>厨房用具</td><td>500</td><td>2</td></tr><tr><td>擦菜板</td><td>厨房用具</td><td>880</td><td>4</td></tr><tr><td>圆珠笔</td><td>办公用品</td><td>100</td><td>1</td></tr></table>

那么，如何才能让记录切实按照 ranking 列的升序进行排列呢？

答案非常简单。那就是在 SELECT 语句的最后，使用 ORDER BY 子句进行指定（代码清单 8- 9）。这样就能保证 SELECT 语句的结果中记录的排列顺序了，除此之外也没有其他办法了。

# 代码清单 8-9 在语句末尾使用 ORDER BY 子句对结果进行排序

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/7b17597386aa22b3485f8ad96ba7169f7b785909c582b778e630b73de47c0a8f.jpg)

也许大家会觉得在一条 SELECT 语句中使用两次 ORDER BY 会有点别扭，但是尽管这两个 ORDER BY 看上去是相同的，但其实它们的功能却完全不同。

# 法则 8-5

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/9c9bb56c15b7174d6072ea0271bfb3a1a418dbfb2cece9315820c84290cbb03f.jpg)

将聚合函数作为窗口函数使用时，会以当前记录为基准来决定汇总对象的记录。

# 8-2

# 第 8 章 SQL 高级处理

# GROUPING 运算符

# 学习重点

学习重点- 只使用 GROUP BY 子句和聚合函数是无法同时得出小计和合计的。如果想要同时得到，可以使用 GROUPING 运算符。- 理解 GROUPING 运算符中 CUBE 的关键在于形成“积木搭建出的立方体”的印象。- 虽然 GROUPING 运算符是标准 SQL 的功能，但还是有些 DBMS 尚未支持这一功能。

# 同时得到合计行

我们在 3- 2 节中学习了 GROUP BY 子句和聚合函数的使用方法，可能有些读者会想，是否有办法能够通过 GROUP BY 子句得到表 8- 1 那样的结果呢？

表 8-1 添加合计行  

<table><tr><td>合计</td><td>16780</td><td>←存在合计行</td></tr><tr><td>厨房用具</td><td>11180</td><td></td></tr><tr><td>衣服</td><td>5000</td><td></td></tr><tr><td>办公用品</td><td>600</td><td></td></tr></table>

虽然这是按照商品种类计算销售单价的总额时得到的结果，但问题在于最上面多出了 1 行合计行。使用代码清单 8- 10 中的 GROUP BY 子句的语法无法得到这一行。

# 代码清单 8-10 使用 GROUPBY 无法得到合计行

SELECT product_type, SUM (sale_price) FROM Product GROUP BY product_type;

# 执行结果

product_type sum 衣服 5000 办公用品 600 厨房用具 11180

因为 GROUP BY 子句是用来指定聚合键的场所，所以只会根据这里指定的键分割数据，当然不会出现合计行。而合计行是不指定聚合键时得到的汇总结果，因此与下面的 3 行通过聚合键得到的结果并不相同。按照通常的思路，想一次得到这两种结果是不可能的。

# KEYWORD

UNION ALL

# 注①

虽然也可以使用 UNION 来代替 UNION ALL，但由于两条 SELECT 语句的聚合键不同，一定不会出现重复行，因此可以使用 UNION ALL。UNION ALL 和 UNION 的不同之处在于它不会对结果进行排序，因此比 UNION 的性能更好。

如果想要获得那样的结果，通常的做法是分别计算出合计行和按照商品种类进行汇总的结果，然后通过 UNION ALL 连接在一起（代码清单 8- 11）。

# 代码清单 8-11 分别计算出合计行和汇总结果再通过 UNION ALL 进行连接

SELECT '合计' AS product_type, SUM (sale_price)  FROM Product  UNION ALL  SELECT product_type, SUM (sale_price)  FROM Product  GROUP BY product_type;

# 执行结果

<table><tr><td>product_type | sum</td><td></td></tr><tr><td>合计</td><td>16780</td></tr><tr><td>衣服</td><td>5000</td></tr><tr><td>办公用品</td><td>600</td></tr><tr><td>厨房用具</td><td>11180</td></tr></table>

这样一来，为了得到想要的结果，需要执行两次几乎相同的 SELECT 语句，再将其结果进行连接，不但看上去十分繁琐，而且 DBMS 内部的处理成本也非常高，难道没有更合适的实现方法了吗？

# KEYWORD

GROUPING 运算符

# 注①

目前 PostgreSQL 和 MySQL 并不支持 GROUPING 运算符（MySQL 支持 ROLLUP）。具体内容请参考专栏“GROUPING 运算符的支持状况”。

# ROLLUP——同时得出合计和小计

为了满足用户的需求，标准 SQL 引入了 GROUPING 运算符，我们将在本节中着重介绍。使用该运算符就能通过非常简单的 SQL 得到之前那样的汇总单位不同的汇总结果了。

GROUPING 运算符包含以下 3 种

- ROLLUP  - CUBE  - GROUPING SETS

# ROLLUP 的使用方法

# KEYWORD

ROLLUP 运算符

我们先从 ROLLUP 开始学习吧。使用 ROLLUP 就可以通过非常简单的 SELECT 语句同时计算出合计行了（代码清单 8- 12）。

# 代码清单 8-12 使用 ROLLUP 同时得出合计和小计

Oracle SQL Server DB 2 SQL SELECT product_type, SUM (sale_price) AS sum_price FROM Product GROUP BY ROLLUP (product_type);

# 特定的 SQL

在 MySQL 中执行代码清单 8- 12 时，请将  $①$  中的 GROUPBY 子句改写为“GROUP BY product_type WITH ROLLUP;"。

# 执行结果（在 DB 2 中执行）

<table><tr><td>product_type</td><td>sum_price</td></tr><tr><td></td><td>16780</td></tr><tr><td>厨房用具</td><td>11180</td></tr><tr><td>办公用品</td><td>600</td></tr><tr><td>衣服</td><td>5000</td></tr></table>

从语法上来说，就是将 GROUPBY 子句中的聚合键清单像 ROLLUP（<列  $1 > ,<$  列  $2>$  ，...）这样使用。该运算符的作用，一言以蔽之，就是“一次计算出不同聚合键组合的结果”。例如，在本例中就是一次计算出了如下两种组合的汇总结果。

$①$  GROUP BY ()  $②$  GROUP BY (product_type)

$①$  中的 GROUP BY（）表示没有聚合键，也就相当于没有 GROUP BY 子句（这时会得到全部数据的合计行的记录），该合计行记录称为超级分组记录（super group row）。虽然名字听上去很炫，但还是希望大家把它当作未使用 GROUP BY 的合计行来理解。超级分组记录的 product_type 列的键值（对 DBMS 来说）并不明确，因此会默认使用 NULL。之后会为大家讲解在此处插入恰当的字符串的方法。

# 法则 8-6

法则 8- 6 超级分组记录默认使用 NULL 作为聚合键。

# 将“登记日期”添加到聚合键当中

将“登记日期”添加到聚合键当中仅仅通过刚才一个例子大家的印象可能不够深刻，下面让我们再添加一个聚合键“登记日期（regist_date）”试试看吧。首先从不使用 ROLLUP 开始（代码清单 8- 13）。

# 代码清单 8-13 在 GROUPBY 中添加“登记日期”（不使用 ROLLUP）

SELECT product_type, regist_date,SUM (sale_price) AS sum_price FROM Product GROUP BY product_type, regist_date;

执行结果（在 DB 2 中执行）  

<table><tr><td>product_type</td><td>regist_date</td><td>sum_price</td></tr><tr><td>厨房用具</td><td>2008-04-28</td><td>880</td></tr><tr><td>厨房用具</td><td>2009-01-15</td><td>6800</td></tr><tr><td>厨房用具</td><td>2009-09-20</td><td>3500</td></tr><tr><td>办公用品</td><td>2009-09-11</td><td>500</td></tr><tr><td>办公用品</td><td>2009-11-11</td><td>100</td></tr><tr><td>衣服</td><td>2009-09-20</td><td>1000</td></tr><tr><td>衣服</td><td></td><td>4000</td></tr></table>

在上述 GROUPBY 子句中使用 ROLLUP 之后，结果会发生什么变化呢（代码清单 8- 14）？

# 代码清单 8-14 在 GROUPBY 中添加“登记日期”（使用 ROLLUP）

Oracle SQL Server DB 2 RPostgreSQLSELECT product_type, regist_date,SUM (sale_price) AS sum_price FROM Product GROUP BY ROLLUP (product_type, regist_date);

# 特定的 SQL

特定的 SQL 在 MySQL 中执行代码清单 8- 14 时，请将①中的 GROUP BY 子句改写为“GROUP BY product_type, regist_date WITH ROLLUP;”。

执行结果（在 DB 2 中执行）  

<table><tr><td>product_type</td><td>regist_date</td><td>sum_price</td><td></td></tr><tr><td></td><td></td><td>16780</td><td>←合计</td></tr><tr><td>厨房用具</td><td></td><td>11180</td><td>←小计（厨房用具）</td></tr><tr><td>厨房用具</td><td>2008-04-28</td><td>880</td><td></td></tr><tr><td>厨房用具</td><td>2009-01-15</td><td>6800</td><td></td></tr><tr><td>厨房用具</td><td>2009-09-20</td><td>3500</td><td></td></tr><tr><td>办公用品</td><td></td><td>600</td><td>←小计（办公用品）</td></tr><tr><td>办公用品</td><td>2009-09-11</td><td>500</td><td></td></tr><tr><td>办公用品</td><td>2009-11-11</td><td>100</td><td></td></tr><tr><td>衣服</td><td></td><td>5000</td><td>←小计（衣服）</td></tr><tr><td>衣服</td><td>2009-09-20</td><td>1000</td><td></td></tr><tr><td>衣服</td><td></td><td>4000</td><td></td></tr></table>

将上述两个结果进行比较后我们发现，使用 ROLLUP 时多出了最上方的合计行以及 3 条不同商品种类的小计行（也就是未使用登记日期作为聚合键的记录），这 4 行就是我们所说的超级分组记录。也就是说，该 SELECT 语句的结果相当于使用 UNION 对如下 3 种模式的聚合级的不同结果进行连接（图 8- 5）。

$①$  GROUP BY ()  $②$  GROUP BY (product_type)  $(3)$  GROUP BY (product_type, regist_date)

图 8-53 种模式的聚合级  

<table><tr><td>product_type</td><td>regist_date</td><td>sum_price</td><td></td></tr><tr><td></td><td></td><td>16780</td><td>模块①</td></tr><tr><td>厨房用具</td><td></td><td>11180</td><td></td></tr><tr><td>办公用品</td><td></td><td>600</td><td>模块②</td></tr><tr><td>衣服</td><td></td><td>5000</td><td></td></tr><tr><td>办公用品</td><td>2009-09-11</td><td>500</td><td></td></tr><tr><td>办公用品</td><td>2009-11-11</td><td>100</td><td></td></tr><tr><td>厨房用具</td><td>2008-04-28</td><td>880</td><td></td></tr><tr><td>厨房用具</td><td>2009-01-15</td><td>6800</td><td>模块③</td></tr><tr><td>厨房用具</td><td>2009-09-20</td><td>3500</td><td></td></tr><tr><td>衣服</td><td>2009-09-20</td><td>1000</td><td></td></tr><tr><td>衣服</td><td></td><td>4000</td><td></td></tr></table>

如果大家觉得上述结果不容易理解的话，可以参考表 8- 2 中按照聚合级添加缩进和说明后的内容，理解起来就很容易了。

表 8-2 根据聚合级添加缩进后的结果  

<table><tr><td colspan="2">合计</td><td>16780</td></tr><tr><td>厨房用具</td><td>小计</td><td>11180</td></tr><tr><td>厨房用具</td><td>2008-04-28</td><td>880</td></tr><tr><td>厨房用具</td><td>2009-01-15</td><td>6800</td></tr><tr><td>厨房用具</td><td>2009-09-20</td><td>3500</td></tr><tr><td>办公用品</td><td>小计</td><td>600</td></tr><tr><td>办公用品</td><td>2009-09-11</td><td>500</td></tr><tr><td>办公用品</td><td>2009-11-11</td><td>100</td></tr><tr><td>衣服</td><td>小计</td><td>5000</td></tr><tr><td>衣服</td><td>2009-09-20</td><td>1000</td></tr><tr><td>衣服</td><td></td><td>4000</td></tr></table>

ROLLUP 是“卷起”的意思，比如卷起百叶窗、窗帘卷，等等。其名称也形象地说明了该操作能够得到像从小计到合计这样，从最小的聚合级开始，聚合单位逐渐扩大的结果。

# 法则 8-7

ROLLUP 可以同时得出合计和小计，是非常方便的工具。

# 专栏

# GROUPING 运算符的支持情况

本节介绍的 GROUPING 运算符与 8- 1 节介绍的窗口函数都是为了实现 OLAP 用途而添加的功能，是比较新的功能（是 SQL：1999 的标准 SQL 中添加的新功能）。因此，还有一些 DBMS 尚未支持这些功能。截止到 2016 年 5 月，Oracle、SQL Server、DB 2、PostgreSQL 的最新版本都已经支持这些功能了，但 MySQL 的最新版本 5.7 还是不支持这些功能。

想要在不支持 GROUPING 运算符的 DBMS 中获得包含合计和小计的结果时，只能像本章一开始介绍的那样，使用 UNION 将多条 SELECT 语句连接起来。

此外，使用 MySQL 时的情况更加复杂一些，只有一个不会规则的 ROLLUP 能够使用。这里所说的“不合规则”指的是需要使用特定的语法。

- -MySQL 专用

SELECT product_type, regist_date, SUM (sale_price) AS sum_price FROM Product GROUP BY product_type, regist_date WITH ROLLUP;

遗憾的是，MySQL 5.7 并不支持 CUBE 和 GROUPING SETS。希望之后的版本能够提供对它们的支持。

# GROUPING 函数——让 NULL 更加容易分辨

可能有些读者会注意到，之前使用 ROLLUP 所得到的结果（代码清单 8- 14 的执行结果）有些跷跷，问题就出在“衣服”的分组之中，有两条记录的 regist_date 列为 NULL，但其原因却并不相同。

sum_price 为 4000 日元的记录，因为商品表中运动 T 恤的注册日期为 NULL，所以就把 NULL 作为聚合键了，这在之前的示例中我们也曾见到过。

相反，sum_price 为 5000 日元的记录，毫无疑问就是超级分组记录的 NULL 了（具体为 1000 日元  $+4000$  日元  $= 5000$  日元）。但两者看上去都是“NULL”，实在是难以分辨。

<table><tr><td>product_type</td><td>regist_date</td><td>sum_price</td></tr><tr><td>衣服</td><td rowspan="3">2009-09-20</td><td>5000</td></tr><tr><td>衣服</td><td>1000</td></tr><tr><td>衣服</td><td>4000</td></tr></table>

为了避免混淆，SQL 提供了一个用来判断超级分组记录的 NULL 的特定函数——GROUPING 函数。该函数在其参数列的值为超级分组记录所产生的 NULL 时返回 1，其他情况返回 0（代码清单 8- 15）。

# 代码清单 8-15 使用 GROUPING 函数来判断 NULL

Oracle SQL Server DB 2 PostgreSQL SELECT GROUPING (product_type) AS product_type, GROUPING (regist_date) AS regist_date, SUM (sale_price) AS sum_price FROM Product GROUP BY ROLLUP (product_type, regist_date);

执行结果（在 DB 2 中执行）  

<table><tr><td>product_type</td><td>regist_date</td><td>sum_price</td></tr><tr><td>1</td><td>1</td><td>16780</td></tr><tr><td>0</td><td>1</td><td>11180</td></tr><tr><td>0</td><td>0</td><td>880</td></tr><tr><td>0</td><td>0</td><td>6800</td></tr><tr><td>0</td><td>0</td><td>3500</td></tr><tr><td>0</td><td>1</td><td>600</td></tr><tr><td>0</td><td>0</td><td>500</td></tr><tr><td>0</td><td>0</td><td>100</td></tr><tr><td>0</td><td>1</td><td>5000</td></tr><tr><td>0</td><td>0</td><td>1000</td></tr><tr><td>0</td><td>0</td><td>4000</td></tr></table>

这样就能分辨超级分组记录中的 NULL 和原始数据本身的 NULL 了。使用 GROUPING 函数还能在超级分组记录的键值中插入字符串。也就是说，当 GROUPING 函数的返回值为 1 时，指定“合计”或者“小计”等字符串，其他情况返回通常的列的值（代码清单 8- 16）。

# 代码清单 8-16 在超级分组记录的键值中插入恰当的字符串

<table><tr><td>Oracle</td><td>SQL Server</td><td>DB 2</td><td>PostgreSQL</td></tr><tr><td colspan="4">SELECT CASE WHEN GROUPING (product_type) = 1 THEN & #x27 ; 商品种类合计& #x27 ; ELSE product_type END AS product_type, CASE WHEN GROUPING (regist_date) = 1 THEN & #x27 ; 登记日期合计& #x27 ; ELSE CAST (regist_date AS VARCHAR (16)) END AS regist_date, SUM (sale_price) AS sum_price FROM Product GROUP BY ROLLUP (product_type, regist_date);</td></tr></table>

执行结果（在 DB 2 中执行）  

<table><tr><td>product_type</td><td>regist_date</td><td>sum_price</td><td></td></tr><tr><td>商品种类合计</td><td>登记日期合计</td><td>16780</td><td></td></tr><tr><td>厨房用具</td><td>登记日期合计</td><td>11180</td><td></td></tr><tr><td>厨房用具</td><td>2008-04-28</td><td>880</td><td></td></tr><tr><td>厨房用具</td><td>2009-01-15</td><td>6800</td><td></td></tr><tr><td>厨房用具</td><td>2009-09-20</td><td>3500</td><td></td></tr><tr><td>办公用品</td><td>登记日期合计</td><td>600</td><td></td></tr><tr><td>办公用品</td><td>2009-09-11</td><td>500</td><td></td></tr><tr><td>办公用品</td><td>2009-11-11</td><td>100</td><td></td></tr><tr><td>衣服</td><td>登记日期合计</td><td>5000</td><td rowspan="2">将超级分组记录中的 NULL 替换为“登记日期合计”</td></tr><tr><td>衣服</td><td>2009-09-20</td><td>1000</td></tr><tr><td>衣服</td><td></td><td>4000</td><td>原始数据中的 NULL 保持不变</td></tr></table>

在实际业务中需要获取包含合计或者小计的汇总结果（这种情况是最多的）时，就可以使用 ROLLUP 和 GROUPING 函数来实现了。

CAST (regist_date AS VARCHAR (16))

那为什么还要将 SELECT 子句中的 regist_date 列转换为 CAST (regist_date AS VARCHAR (16)) 形式的字符串呢？这是为了满足 CASE 表达式所有分支的返回值必须一致的条件。如果不这样的话，那么各个分支会分别返回日期类型和字符串类型的值，执行时就会发生语法错误。

# 法则 8-8

使用 GROUPING 函数能够简单地分辨出原始数据中的 NULL 和超级分组记录中的 NULL。

# CUBE——用数据来搭积木

# KEYWORD

CUBE 运算符

ROLLUP 之后我们来介绍另一个常用的 GROUPING 运算符—CUBE。CUBE 是“立方体”的意思，这个名字和 ROLLUP 一样，都能形象地说明函数的动作。那么究竟是什么样的动作呢？还是让我们通过一个列子来看一看吧。

CUBE 的语法和 ROLLUP 相同，只需要将 ROLLUP 替换为 CUBE 就可以了。下面我们就把代码清单 8- 16 中的 SELECT 语句替换为 CUBE 试试看吧（代码清单 8- 17）。

代码清单 8-17 使用 CUBE 取得全部组合的结果  

<table><tr><td>Oracle</td><td>SQL Server</td><td>DB 2</td><td>PostgreSQL</td></tr><tr><td colspan="4">SELECT CASE WHEN GROUPING (product_type) = 1
THEN & #x27 ; 商品种类合计& #x27 ;
ELSE product_type END AS product_type,
CASE WHEN GROUPING (regist_date) = 1
THEN & #x27 ; 登记日期合计& #x27 ;
ELSE CAST (regist_date AS VARCHAR (16)) END AS regist_date,
SUM (sale_price) AS sum_price
FROM Product
GROUP BY CUBE (product_type, regist_date);</td></tr></table>

执行结果（在 DB 2 中执行）  

<table><tr><td>product_type</td><td>regist_date</td><td>sum_price</td><td></td></tr><tr><td>商品种类</td><td>合计</td><td>登记日期</td><td>16780</td></tr><tr><td>商品种类</td><td>合计</td><td>2008-04-28</td><td>880</td></tr><tr><td>商品种类</td><td>合计</td><td>2009-01-15</td><td>6800</td></tr><tr><td>商品种类</td><td>合计</td><td>2009-09-11</td><td>500</td></tr><tr><td>商品种类</td><td>合计</td><td>2009-09-20</td><td>4500</td></tr><tr><td>商品种类</td><td>合计</td><td>2009-11-11</td><td>100</td></tr><tr><td>商品种类</td><td>合计</td><td>4000</td><td>←追加</td></tr><tr><td>厨房用具</td><td>登记日期</td><td>合计</td><td>11180</td></tr><tr><td>厨房用具</td><td>2008-04-28</td><td>880</td><td></td></tr><tr><td>厨房用具</td><td>2009-01-15</td><td>6800</td><td></td></tr><tr><td>厨房用具</td><td>2009-09-20</td><td>3500</td><td></td></tr><tr><td>办公用品</td><td>登记日期</td><td>合计</td><td>600</td></tr><tr><td>办公用品</td><td>2009-09-11</td><td>500</td><td></td></tr><tr><td>办公用品</td><td>2009-11-11</td><td>100</td><td></td></tr><tr><td>衣服</td><td>登记日期</td><td>合计</td><td>5000</td></tr><tr><td>衣服</td><td>2009-09-20</td><td>1000</td><td></td></tr><tr><td>衣服</td><td></td><td>4000</td><td></td></tr></table>

与 ROLLUP 的结果相比，CUBE 的结果中多出了几行记录。大家看一下应该就明白了，多出来的记录就是只把 regist_date 作为聚合键

所得到的汇总结果。

$(1)$  GROUP BY () $(2)$  GROUP BY (product_type) $(3)$  GROUP BY (regist_date)  $\leftarrow$  添加的组合 $(4)$  GROUP BY (product_type, regist_date)

# 注①

使用 ROLLUP 时组合的个数是 $n + 1$ 。随着组合个数的增加，结果的行数也会增加，因此如果使用 CUBE 时不加以注意的话，往往会得到意想不到的巨大结果。顺带说一下，ROLLUP 的结果一定包含在 CUBE 的结果之中。

所谓 CUBE，就是将 GROUP BY 子句中聚合键的“所有可能的组合”的汇总结果集中到一个结果中。因此，组合的个数就是  $2^{n}$  (  $n$  是聚合键的个数)。本例中聚合键有 2 个，所以  $2^{2} = 4$  。如果再添加 1 个变为 3 个聚合键的话，就是  $2^{3} = 8^{\bullet}$

读到这里，可能很多读者都会觉得奇怪，究竟 CUBE 运算符和立方体有什么关系呢？

众所周知，立方体由长、宽、高 3 个轴构成。对于 CUBE 来说，一个聚合键就相当于其中的一个轴，而结果就是将数据像积木那样堆积起来（图 8- 6）。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/8754b7841d03cac00edbfee9e9290e7aa5ed171b08627f09831e01dc83ffac41.jpg)  
图 8-6 CUBE 的执行图示

由于本例中只有商品种类（product_type）和登记日期（regist_date）2 个轴，所以我们看到的其实是一个正方形，请大家把它看作缺了 1 个轴的立方体。通过 CUBE 当然也可以指定 4 个以上的轴，但那已经属于 4 维空间的范畴了，是无法用图形来表示的。

# 法则 8-9

可以把 CUBE 理解为将使用聚合键进行切割的模块堆积成一个立方体。

# GROUPING SETS——取得期望的积木

# KEYWORD

GROUPING SETS 运算符

最后要介绍给大家的 GROUPING 运算符是 GROUPING SETS。该运算符可以用于从 ROLLUP 或者 CUBE 的结果中取出部分记录。

例如，之前的 CUBE 的结果就是根据聚合键的所有可能的组合计算而来的。如果希望从中选取出将“商品种类”和“登记日期”各自作为聚合键的结果，或者不想得到“合计记录和使用 2 个聚合键的记录”时，可以使用 GROUPING SETS（代码清单 8- 18）。

代码清单 8-18 使用 GROUPING SETS 取得部分组合的结果  

<table><tr><td>Oracle</td><td>SQL Server</td><td>DB 2</td><td>PostgreSQL</td></tr><tr><td rowspan="9">SELECT</td><td rowspan="7">CASE</td><td>WHEN</td><td>GROUPIING (product_type) = 1</td></tr><tr><td>THEN & #x27 ; 商品种类合计& #x27 ;</td><td></td></tr><tr><td>ELSE product_type END AS product_type,</td><td></td></tr><tr><td>CASE WHEN GROUPIING (regist_date) = 1</td><td></td></tr><tr><td>THEN & #x27 ; 登记日期合计& #x27 ;</td><td></td></tr><tr><td>ELSE CAST (regist_date AS VARCHAR (16)) END AS regist_date,</td><td></td></tr><tr><td>SUM (sale_price) AS sum_price</td><td></td></tr><tr><td>FROM</td><td>Product</td><td></td></tr><tr><td>GROUP</td><td>BY GROUPIING SETS (product_type, regist_date);</td><td></td></tr></table>

执行结果（在 DB 2 中执行）  

<table><tr><td>product_type</td><td>regist_date</td><td>sum_price</td></tr><tr><td>商品种类合计</td><td>2008-04-28</td><td>880</td></tr><tr><td>商品种类合计</td><td>2009-01-15</td><td>6800</td></tr><tr><td>商品种类合计</td><td>2009-09-11</td><td>500</td></tr><tr><td>商品种类合计</td><td>2009-09-20</td><td>4500</td></tr><tr><td>商品种类合计</td><td>2009-11-11</td><td>100</td></tr><tr><td>商品种类合计</td><td></td><td>4000</td></tr><tr><td>厨房用具</td><td>登记日期合计</td><td>11180</td></tr><tr><td>办公用品</td><td>登记日期合计</td><td>600</td></tr><tr><td>衣服</td><td>登记日期合计</td><td>5000</td></tr></table>

上述结果中也没有全体的合计行（16780 日元）。与 ROLLUP 或者 CUBE 能够得到规定的结果相对，GROUPING SETS 用于从中取出个别条件对应的不固定的结果。然而，由于期望获得不固定结果的情况少之又少，因此与 ROLLUP 或者 CUBE 比起来，使用 GROUPING SETS 的机会也就很少了。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/d686742065454e3ca732fd5eea5e618d48bb3142627a0efcbc02a4f5583f400c.jpg)
