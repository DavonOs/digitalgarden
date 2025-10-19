---
{"dg-publish":true,"dg-permalink":"books/27055712/06","permalink":"/books/27055712/06/","metatags":{"description":"","og:site_name":"DavonOs","og:title":"第6章 函数、谓词、CASE表达式","og:type":"article","og:url":"https://zuji.eu.org/books/27055712/06","og:image":"https://file.ituring.com.cn/LargeCover/1712477631b07b9f5895","og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"dgShowInlineTitle":true,"created":"2025-09-10 14:49","updated":"2025-09-11 08:25"}
---


# 各种各样的函数

# 学习重点

- 根据用途，函数可以大致分为算术函数、字符串函数、日期函数、转换函数和聚合函数。- 函数的种类很多，无需全都记住，只需要记住具有代表性的函数就可以了，其他的可以在使用时再进行查询。

# 函数的种类

# KEYWORD

函数- 参数（parameter）- 返回值

前几章和大家一起学习了 SQL 的语法结构等必须要遵守的规则。本章将会进行一点改变，来学习一些 SQL 自带的便利工具——函数。

我们在 3- 1 节中已经学习了函数的概念，这里再回顾一下。所谓函数，就是输入某一值得到相应输出结果的功能，输入值称为参数（parameter），输出值称为返回值。

函数大致可以分为以下几种。

# KEYWORD

算术函数- 字符串函数- 日期函数- 转换函数- 聚合函数

- 算术函数（用来进行数值计算的函数）- 字符串函数（用来进行字符串操作的函数）- 日期函数（用来进行日期操作的函数）- 转换函数（用来转换数据类型和值的函数）- 聚合函数（用来进行数据聚合的函数）

我们已经在第 3 章中学习了聚合函数的相关内容，大家应该对函数有初步的了解了吧。聚合函数基本上只包含 COUNT、SUM、AVG、MAX、MIN 这 5 种，而其他种类的函数总数则超过 200 种。可能大家会觉得怎么会有那么多函数啊，但其实并不需要担心，虽然数量众多，但常用函数只有  $30\sim 50$  个。不熟悉的函数大家可以查阅参考文档（词典）来了解。

# 注 1

参考文档是 DBMS 手册的一部分。大家也可以从介绍各种函数的书籍以及 Web 网站上获取相关信息。

本节我们将学习一些具有代表性的函数。大家并不需要一次全部记住，只需要知道有这样的函数就可以了，实际应用时可以查阅参考文档。

接下来，让我们来详细地看一看这些函数。

# 算术函数

# KEYWORD

算术函数

算术函数是最基本的函数，其实之前我们已经学习过了，可能有些读者已经想起来了。没错，就是 2- 2 节介绍的加减乘除四则运算。

# KEYWORD

$\bullet +$  运算符 $\bullet -$  运算符 $\bullet \star$  运算符/运算符

$\bullet +$  （加法）- （减法） $\bullet \star$  （乘法）/（除法）

由于这些算术运算符具有“根据输入值返回相应输出结果”的功能，因此它们是出色的算术函数。在此我们将会给大家介绍除此之外的具有代表性的函数。

为了学习算术函数，我们首先根据代码清单 6- 1 创建一张示例用表（SampleMath）。

NUMERIC 是大多数 DBMS 都支持的一种数据类型，通过 NUMERIC（全体位数，小数位数）的形式来指定数值的大小。接下来，将会给大家介绍常用的算术函数——ROUND 函数，由于 PostgreSQL 中的 ROUND 函数只能使用 NUMERIC 类型的数据，因此我们在示例中也使用了该数据类型。

# 代码清单 6-1 创建 SampleMath 表

DDL：创建表 CREATE TABLE SampleMath (M NUMERIC (10,3), n INTEGER, p INTEGER);

SQL Server PostgreSQL - - DML：插入数据 BEGIN TRANSACTION;

INSERT INTO SampleMath (m, n, p) VALUES (500, 0, NULL); INSERT INTO SampleMath (m, n, p) VALUES (- 180, 0, NULL); INSERT INTO SampleMath (m, n, p) VALUES (NULL, NULL, NULL); INSERT INTO SampleMath (m, n, p) VALUES (NULL, 7, 3);

INSERT INTO SampleMath (m, n, p) VALUES (NULL, 5, 2);  INSERT INTO SampleMath (m, n, p) VALUES (NULL, 4, NULL);  INSERT INTO SampleMath (m, n, p) VALUES (8, NULL, 3);  INSERT INTO SampleMath (m, n, p) VALUES (2.27, 1, NULL);  INSERT INTO SampleMath (m, n, p) VALUES (5.555, 2, NULL);  INSERT INTO SampleMath (m, n, p) VALUES (NULL, 1, NULL);  INSERT INTO SampleMath (m, n, p) VALUES (8.76, NULL, NULL);

COMMIT;

# 特定的 SQL

不同的 DBMS 事务处理的语法也不尽相同。代码清单 6- 1 中的 DML 语句在 MySQL 中执行时，需要将①部分更改为“START TRANSACTION;”，在 Oracle 和 DB 2 中执行时，无需用到①的部分（请删除）。

详细内容请大家参考 4- 4 节中的“创建事务”。

下面让我们来确认一下创建好的表中的内容，其中应该包含了 m、n、p 三列。

SELECT * FROM SampleMath;

# 执行结果

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/48c81cc35a65e36ab010ba80e5995fdf037f5e11abc39681c156e94b38589ef2.jpg)

# ABS——绝对值

# 语法 6-1 ABS 函数

# KEYWORD

ABS 函数

绝对值

ABS（数值）

ABS 是计算绝对值的函数。绝对值（absolute value）不考虑数值的符号，表示一个数到原点的距离。简单来讲，绝对值的计算方法就是：0 和正数的绝对值就是其本身，负数的绝对值就是去掉符号后的结果。

# 代码清单 6-2 计算数值的绝对值

SELECT m, ABS (m) AS abs_col FROM SampleMath;

# 执行结果

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/42a584e4adf71d85b8e86dac371b1fbf8a0516c563b70611778fea9e3cacedd2.jpg)

右侧的 abs_col 列就是通过 ABS 函数计算出的 m 列的绝对值。请大家注意，- 180 的绝对值就是去掉符号后的结果 180。

通过上述结果我们可以发现，ABS 函数的参数为 NULL 时，结果也是 NULL。并非只有 ABS 函数如此，其实绝大多数函数对于 NULL 都返回 NULL。

# 注①

但是转换函数中的 COALESCE 函数除外。

# MOD——求余

# 语法 6-2 MOD 函数

MOD（被除数，除数）

# KEYWORD

MOD 函数

MOD 是计算除法余数（求余）的函数，是 modulo 的缩写。例如，7／3 的余数是 1，因此 MOD（7，3）的结果也是 1（代码清单 6- 3）。因为小数计算中并没有余数的概念，所以只能对整数类型的列使用 MOD 函数。

# 代码清单 6-3 计算除法  $(\mathbf{n} + \mathbf{p})$  的余数

Oracle DB 2 PostgreSQL MySQL SELECT n, p, MOD (n, p) AS mod_col FROM SampleMath;

# 执行结果

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/2dc165bc3b5174ece149cc131b2bed618bc44fd8049d77e2a16a2e536bfe9fd9.jpg)

这里有一点需要大家注意：主流的 DBMS 都支持 MOD 函数，只有 SQL Server 不支持该函数。

# KEYWORD

$\bullet$  运算符（SQL Server）

# 特定的 SQL

SQL Server 使用特殊的运算符（函数）“%”来计算余数，使用如下的专用语法可以得到与代码清单 6- 3 相同的结果。需要使用 SQL Server 的读者需要特别注意。

# SQL Server

SELECT n, p, n % p AS mod_col FROM SampleMath;

# ROUND——四舍五入

# 语法 6-3 ROUND 函数

ROUND（对象数值，保留小数两位数）

# KEYWORD

ROUND 函数

ROUND 函数用来进行四舍五入操作。四舍五入在英语中称为 round。如果指定四舍五入的位数为 1，那么就会对小数点第 2 位进行四舍五入处理。如果指定位数为 2，那么就会对第 3 位进行四舍五入处理（代码清单 6- 4）。

# 代码清单 6-4 对 m 列的数值进行 n 列位数的四舍五入处理

SELECT m, n, ROUND (m, n) AS round_col FROM SampleMath;

# 执行结果

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/946a5259c7063010dff60f4cae64b9f6d30874df97509cce5c9cfd18cb999d25.jpg)

# 字符串函数

截至目前，我们介绍的函数都是主要针对数值的算术函数，但其实算术函数只是 SQL（其他编程语言通常也是如此）自带的函数中的一部分。虽然算术函数是我们经常使用的函数，但是字符串函数也同样经常被使用。

在日常生活中，我们经常会像使用数字那样，对字符串进行替换、截取、简化等操作，因此 SQL 也为我们提供了很多操作字符串的功能。

为了学习字符串函数，我们再来创建一张表（SampleStr），参见代码清单 6- 5。

# 代码清单 6-5 创建 SampleStr 表

DDL：创建表 CREATE TABLE SampleStr (str 1 VARCHAR (40), str 2 VARCHAR (40), str 3 VARCHAR (40);

# SQL Server PostgreSQL

DML：插入数据 BEGIN TRANSACTION;

INSERT INTO SampleStr (str 1, str 2, str 3) VALUES ('opx', 'rt', NULL); INSERT INTO SampleStr (str 1, str 2, str 3) VALUES ('abc', 'def', NULL); INSERT INTO SampleStr (str 1, str 2, str 3) VALUES ('山田', '太郎', '是我');

INSERT INTO SampleStr (strl, str 2, str 3) VALUES（'aaa' NULL ,NULL); INSERT INTO SampleStr (strl, str 2, str 3) VALUES (NULL xyz', NULL); INSERT INTO SampleStr (strl, str 2, str 3) VALUES（'u!#$ NULL ,NULL); INSERT INTO SampleStr (strl, str 2, str 3) VALUES（'ABC' NULL ,NULL); INSERT INTO SampleStr (strl, str 2, str 3) VALUES（'ABC' NULL ,NULL); INSERT INTO SampleStr (strl, str 2, str 3) VALUES（'abc 太郎' 'abc'，'ABC'); INSERT INTO SampleStr (strl, str 2, str 3) VALUES（'abcdefabc' 'abc'，'ABC'); INSERT INTO SampleStr (strl, str 2, str 3) VALUES（'micmic' 'i' 'I');

COMMIT;

表示下一行接续本行，只是由于版面所限而换行。

# 特定的 SQL

不同的 DBMS 事务处理的语法也不尽相同。代码清单 6- 5 中的 DML 语句在 MySQL 中执行时，需要将  $(1)$  部分更改为“START TRANSACTION;”。在 Oracle 和 DB 2 中执行时，无需用到  $(1)$  的部分（请删除）。详细内容请大家参考 4- 4 节中的“创建事务”。

下面让我们来确认一下创建好的表中的内容，其中应该包含了 str 1、str 2、str 3 三列。

SELECT * FROM SampleStr;

# 执行结果

<table><tr><td>str 1</td><td>| str 2</td><td>str 3</td></tr><tr><td>opx</td><td>| rt</td><td></td></tr><tr><td>abc</td><td>| def</td><td></td></tr><tr><td>山田</td><td>| 太郎</td><td>是我</td></tr><tr><td>aaa</td><td>| xyz</td><td></td></tr><tr><td>@!</td><td>$</td><td></td></tr><tr><td>ABC</td><td>|</td><td></td></tr><tr><td>abc</td><td>|</td><td></td></tr><tr><td>abc 太郎</td><td>| abc</td><td>ABC</td></tr><tr><td>abcdefabc</td><td>| abc</td><td>ABC</td></tr><tr><td>micmic</td><td>| i</td><td>I</td></tr></table>

# 一一拼接

# 语法 6-4 | | 函数

字符串 1 | 字符串 2

在实际业务中，我们经常会碰到  $\mathtt{abc + de = abcde}$  这样希望将字符串进行拼接的情况。在 SQL 中，可以通过由两条并列的竖线变换而成的“||”函数来实现（代码清单 6- 6）。

# 代码清单 6-6 拼接两个字符串（str 1+str 2）

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/bfe21d1ff9df1dc5c6b8ee952db6c0e5488efca48d04e7b2fc94774d0d4d948d.jpg)

# 执行结果

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/1938fc7e8bd13756105c0469ac081f4f8aa9cff9dca5ebb11bb03e8a6fca894b.jpg)

进行字符串拼接时，如果其中包含 NULL，那么得到的结果也是 NULL。这是因为“||”也是变了形的函数。当然，三个以上的字符串也可以进行拼接（代码清单 6- 7）。

# 代码清单 6-7 拼接三个字符串（str 1+str 2+str 3）

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/711a5259dc6ec0f9698bd5364163b03ea5b4cc3404425a86ed73098f5a59a296.jpg)

# 执行结果

str 1 | str 2 | str 3 | str_concat 山田 | 太郎 | 是我 | 山田太郎是我

凡例 str_concat：str 1 | str 2 | str 3 的返回值（拼接结果）

这里也有一点需要大家注意，||函数在 SQL Server 和 MySQL 中无法使用。

# KEYWORD

$\bullet +$  运算符（SQL Server）- CONCAT 函数（MySQL）

# 注①

由于这和 Java 中连接字符串的方法相同，估计有些读者已经比较熟悉了。

# 特定的 SQL

SQL Server 使用“+”运算符（函数）来连接字符串 A。MySQL 使用 CONCAT 函数来完成字符串的拼接。使用如下 SQL Server/MySQL 的专用语法能够得到与代码清单 6- 7 相同的结果。另外，在 SQL Server 2012 及其之后的版本中也可以使用 CONCAT 函数。

# SQL Server

SELECT str 1, str 2, str 3, str 1 + str 2 + str 3 AS str_concat FROM SampleStr;

# MySQL SQL Server 2012 及之后

SELECT str 1, str 2, str 3, CONCAT (str 1, str 2, str 3) AS str_concat FROM SampleStr;

# LENGTH——字符串长度

# 语法 6-5 LENGTH 函数

LENGTH（字符串）

# KEYWORD

$\bullet$  LENGTH 函数

想要知道字符串中包含多少个字符时，可以使用 LENGTH（长度）函数（代码清单 6- 8）。

# 代码清单 6-8 计算字符串长度

<table><tr><td>Oracle</td><td>DB 2</td><td>PostgreSQL</td><td>MySQL</td></tr><tr><td colspan="4">SELECT str 1,
    LENGTH (str 1) AS len_str
FROM SampleStr;</td></tr></table>

# 执行结果

<table><tr><td>str 1</td><td>len_str</td></tr><tr><td>opx</td><td>3</td></tr><tr><td>abc</td><td>3</td></tr><tr><td>山田</td><td>2</td></tr><tr><td>aaa</td><td>3</td></tr><tr><td></td><td></td></tr><tr><td>@!#$%</td><td>5</td></tr><tr><td>ABC</td><td>3</td></tr><tr><td>aBC</td><td>3</td></tr><tr><td>abc 太郎</td><td>5</td></tr><tr><td>abcdefabc</td><td>9</td></tr><tr><td>micmic</td><td>6</td></tr></table>

# 几例

len_str：LENGTH（str 1）的返回值（str 1 的字符长度）

需要注意的是，该函数也无法在 SQL Server 中使用。

# KEYWORD

- LEN 函数（SQL Server）

# 特定的 SQL

SQL Server 使用 LEN 函数来计算字符串的长度。使用如下 SQL Server 的专用语法能够得到与代码清单 6- 8 相同的结果。

# SETServer

SELECT str 1, LEN (str 1) AS len_str FROM SampleStr;

# KEYWORD

字节

# 多字节字符

字节（byte）是计算机中用来表述数据大小的基本单位。如本书所述，通常情况下“1 字符=1 字节”，单位字节（KB）是字节的 1024 倍，单位兆字节（MB）是千字节的 1024 倍，单位千兆字节（GB）是兆字节的 1024 倍。表示硬盘容量时经常会使用的“100 GB”“250 GB”，其中 100 GB 指的是可以存储 $1024\times 1024\times 1024\times 100 =$ 107,374,182,400 个半角英文字母。

# 注①

MySQL 中还存在计算字符串长度的自有函数 CHAR_LENGTH。

# KEYWORD

- LENGTH 函数（MySQL）- CHAR_LENGTH 函数（MySQL）

# KEYWORD

- LOWER 函数

# 专栏

# 对 1 个字符使用 LENGTH 函数有可能得到 2 字节以上的结果

LENGTH 函数中，还有一点需要大家特别注意，那就是该函数究竟以什么为单位来计算字符串的长度。这部分是初级以上阶段才会学习到的内容，在此先简单介绍一下。

可能有些读者已经有所了解，与半角英文字母占用 1 字节不同，汉字这样的全角字符会占用 2 个以上的字节（称为多字节字符）。因此，使用 MySQL 中的 LENGTH 这样以字节为单位的函数进行计算时，“LENGTH（山田）”的返回结果是 4。同样是 LENGTH 函数，不同 DBMS 的执行结果也不尽相同。虽然有些混乱，但这正是我希望大家能够牢记的。

# LOWER——小写转换

# 语法 6-6 LOWER 函数

LOWER（字符串）

LOWER 函数只能针对英文字母使用，它会将参数中的字符串全都转换为小写（代码清单 6- 9）。因此，该函数并不适用于英文字母以外的场合。此外，该函数并不影响原本就是小写的字符。

# 代码清单 6-9 大写转换为小写

SELECT str 1, LOWER (str 1) AS low_str

FROM SampleStr WHERE str 1 IN ('ABC', 'aBC', 'abc', '山田');

# 执行结果

str 1 | low_str abc abc abc abc abc

凡例 low_str：LOWER（str 1）的返回值

既然存在小写转换函数，那么肯定也有大写转换函数，UPPER 就是大写转换函数。

# REPLACE 字符串的替换

# 语法 6-7 REPLACE 函数

REPLACE（对象字符串，替换前的字符串，替换后的字符串）

# KEYWORD

REPLACE 函数

使用 REPLACE 函数，可以将字符串的一部分替换为其他的字符串（代码清单 6- 10）。

# 代码清单 6-10 替换字符串的一部分

SELECT str 1, str 2, str 3, REPLACE (str 1, str 2, str 3) AS rep_str FROM SampleStr;

# 执行结果

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/f8e7f6d67a00733e18fd90b470ade6ae683de6d5715e7c1d6b384b0679d16f05.jpg)

# SUBSTRING 字符串的截取

语法 6- 8 SUBSTRING 函数（PostgreSQL/MySQL 专用语法）

SUBSTRING（对象字符串 FROM 截取的起始位置 FOR 截取的字符数）

# KEYWORD

●SUBSTRING 函数

# 注 1

需要大家注意的是，该函数也存在和 LENGTH 函数同样的多字节字符的问题。详细内容请大家参考专栏“对 1 个字符使用 LENGTH 函数有可能得到 2 字节以上的结果”。

使用 SUBSTRING 函数可以截取出字符串中的一部分字符串（代码清单 6- 11）。截取的起始位置从字符串最左侧开始计算。

# 代码清单 6-11 截取出字符串中第 3 位和第 4 位的字符

# PostgreSQL MySQL

SELECT str 1, SUBSTRING (str 1 FROM 3 FOR 2) AS sub_str FROM SampleStr;

# 执行结果

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/e026a82551ab48d3dc8b2c32973f6f0dbc4fa2d09200f0aac491d37a4d626ccb.jpg)

虽然上述 SUBSTRING 函数的语法是标准 SQL 承认的正式语法，但是现在只有 PostgreSQL 和 MySQL 支持该语法。

# 特定的 SQL

SQLServer 将语法 6- 8 a 中的内容进行了简化（语法 6- 8 b）。

语法 6- 8 a SUBSTRING 函数（SQLServer 专用语法）

SUBSTRING（对象字符串，截取的起始位置，截取的字符数）

Oracle 和 DB 2 将该语法进一步简化，得到了如下结果。

语法 6- 8 b SUBSTR 函数（Oracle/DB 2 专用语法）

SUBSTR（对象字符串，截取的起始位置，截取的字符数）

SQL 有这么多特定的语法，真是有些让人头疼啊。各 DBMS 中能够得到与代码清单 6- 11 相同结果的专用语法如下所示。

# SQL Server

SELECT str 1, SUBSTRING (str 1, 3, 2) AS sub_str FROM SampleStr;

# Oracle

SELECT str 1, SUBSTRING (str 1, 3, 2) AS sub_str FROM SampleStr;

# UPPER——大写转换

# 语法 6-9 UPPER 函数

UPPER（字符串）

KEYWORDUPPER 函数

UPPER 函数只能针对英文字母使用，它会将参数中的字符串全都转换为大写（代码清单 6- 12）。因此，该函数并不适用于英文字母以外的情况。此外，该函数并不影响原本就是大写的字符。

# 代码清单 6-12 将小写转换为大写

SELECT str 1, UPPER (str 1) AS up_str FROM SampleStr WHERE str 1 IN ('ABC', 'aBC', 'abc', '山田');

# 执行结果

str 1 | up_strabc | ABC 山田 | 山田 ABC | ABCaBC | ABC

# 凡例

up_str UPPER (str 1) 的返回值

与之相对，进行小写转换的是 LOWER 函数。

# 日期函数

# KEYWORD

- 日期函数

如果想要了解日期函数的详细内容，目前只能查阅各个 DBMS 的手册。

虽然 SQL 中有很多日期函数，但是其中大部分都依存于各自的 DBMS，因此无法统一说明。本节将会介绍那些被标准 SQL 承认的可以应用于绝大多数 DBMS 的函数。

# CURRENT DATE——当前日期

语法 6- 10 CURRENT DATE 函数

CURRENT DATE

# KEYWORD

- CURRENT DATE 函数

CURRENT DATE 函数能够返回 SQL 执行的日期，也就是该函数执行时的日期。由于没有参数，因此无需使用括号。

执行日期不同，CURRENT DATE 函数的返回值也不同。如果在 2009 年 12 月 13 日执行该函数，会得到返回值“2009- 12- 13”。如果在 2010 年 1 月 1 日执行，就会得到返回值“2010- 01- 01”（代码清单 6- 13）。

# 代码清单 6-13 获得当前日期

PostgreSQL MySQL SELECT CURRENT DATE;

# 执行结果

date 2016- 05- 25

该函数无法在 SQL Server 中执行。此外，Oracle 和 DB 2 中的语法略有不同。

# 特定的 SQL

SQL Server 使用如下的 CURRENT_TIMESTAMP（后述）函数来获得当前日期。

# SQL Server

- 使用 CAST（后述）函数将 CURRENT_TIMESTAMP 转换为日期类型 SELECT CAST (CURRENT_TIMESTAMP AS DATE) AS CUR_DATE;

# 执行结果

CUR DATE 2010- 05- 25

在 Oracle 中使用该函数时，需要在 FROM 子句中指定临时表（DUAL）。而在 DB 2 中使用时，需要在 CROUENT 和 DATE 之间添加半用空格，并且还需要指定临时表 SYSIBM. SYSDUMMY 1（相当于 Oracle 中的 DUAL）。这些容易混淆的地方请大家多加注意。

# Oracle

SELECT CURRENT DATE FROM dual;

# DB 2

SELECT CURRENT DATE FROM SYSIBM. SYSDUMMY 1;

# CURRENT_TIME——当前时间

语法 6- 11 CURRENT_TIME 函数

CURRENT_TIME

# KEYWORD

CURRENT_TIME 函数

CURRENT_TIME 函数能够取得 SQL 执行的时间，也就是该函数执行时的时间（代码清单 6- 14）。由于该函数也没有参数，因此同样无需使用括号。

# 代码清单 6-14 取得当前时间

PostgreSQL MySQL SELECT CURRENT TIME;

# 执行结果

timetz 17:26:50.995+09

该函数同样无法在 SQL Server 中执行，在 Oracle 和 DB 2 中的语法同样略有不同。

# 特定的 SQL

SQL Server 使用如下的 CURRENT_TIMESTAMP 函数（后述）来获得当前日期。

- - 使用 CAST 函数（后述）将 CURRENT_TIMESTAMP 转换为时间类型 SELECT CAST (CURRENT_TIMESTAMP AS TIME) AS CUR_TIME;

# 执行结果

CUR_TIME 21:33:59.3400000

在 Oracle 和 DB 2 中使用时的语法如下所示。需要注意的地方和 CURRENT_DATE 函数相同。在 Oracle 中使用时所得到的结果还包含日期。

# Oracle

Oracle- 指定临时表（DUAL）SELECT CURRENT_TIMESTAMPFROM dual;

# DB 2

/* CURRENT 和 TIME 之间使用了半角空格，指定临时表 SYSIBM. SYSDUMMY 1 */SELECT CURRENT TIMEFROM SYSIBM. SYSDUMMY 1;

# CURRENT_TIMESTAMP——当前日期和时间

# 语法 6-12 CURRENT_TIMESTAMP 函数

CURRENT_TIMESTAMP

# KEYWORD

CURRENT_TIMESTAMP 函数

CURRENT_TIMESTAMP 函数具有 CURRENT_DATE + CURRENT_TIME 的功能。使用该函数可以同时得到当前的日期和时间，当然也可以从结果中截取日期或者时间。

# 代码清单 6-15 取得当前日期和时间

SQL Server PostgreSQL MySQL SELECT CURRENT_TIMESTAMP;

# 执行结果

now 2016- 04- 25 18:31:03.704+09

# 注①

之前我们已经介绍过，在 SQL Server 中无法使用 CURRENT_DATE 和 CURRENT_TIME 函数。可能是因为在 SQL Server 中，CURRENT_TIMESTAMP 已经涵盖了这两者的功能吧。

该函数可以在 SQL Server 等各个主要的 DBMS 中使用。但是，与之前的 CURRENT_DATE 和 CURRENT_TIME 一样，在 Oracle 和 DB 2 中该函数的语法略有不同。

# 特定的 SQL

Oracle 和 DB 2 使用如下写法可以得到与代码清单 6- 15 相同的结果。其中需要注意的地方与 CURRENT_DATE 时完全相同。

# Oracle

Oracle- 指定临时表（DUAL）SELECT CURRENT_TIMESTAMPFROM dual;

# DB 2

DB 2/*CURRENT 和 TIMME 之间使用了半角空格，指定临时表 SYSIBM. SYSDUMMY 1 */SELECT CURRENT_TIMESTAMPFROM SYSIBM. SYSDUMMY 1;

# EXTRACT——截取日期元素

# 语法 6-13 EXTRACT 函数

EXTRACT（日期元素 FROM 日期）

# KEYWORD

EXTRACT 函数

使用 EXTRACT 函数可以截取出日期数据中的一部分，例如“年”“月”，或者“小时”“秒”等（代码清单 6- 16）。该函数的返回值并不是日期类型而是数值类型。

# 代码清单 6-16 截取日期元素

代码清单 6- 16 截取日期元素 PostgreSQL MySQLSELECT CURRENT_TIMESTAMP,    EXTRACT (YEAR FROM CURRENT_TIMESTAMP) AS year,    EXTRACT (NEXTS FROM CURRENT_TIMESTAMP) AS month,    EXTRACT (DAY FROM CURRENT_TIMESTAMP) AS day,    EXTRACT (HOUR FROM CURRENT_TIMESTAMP) AS hour,    EXTRACT (MINUTE FROM CURRENT_TIMESTAMP) AS minute,    EXTRACT (SECOND FROM CURRENT_TIMESTAMP) AS second;

# 执行结果

now | year | month | day | hour | minute | second 2010- 04- 25 19:07:33.987+09| 2010 | 4 | 25 | 19 | 7 | 33.987

# 需要注意的是 SQL Server 也无法使用该函数。

# KEYWORD

DATEPART 函数（SQL Server）

# 特定的 SQL

SQL Server 使用如下的 DATEPART 函数会得到与代码清单 6- 16 相同的结果。

# SQL Server

SELECT CURRENT_TIMESTAMP, DATEPART (YEAR CURRENT_TIMESTAMP) AS year, DATEPART (MONTH CURRENT_TIMESTAMP) AS month, DATEPART (DAY CURRENT_TIMESTAMP) AS day, DATEPART (HOUR CURRENT_TIMESTAMP) AS hour, DATEPART (MINUTE CURRENT_TIMESTAMP) AS minute, DATEPART (SECOND CURRENT_TIMESTAMP) AS second;

Oracle 和 DB 2 想要得到相同结果的话，需要进行如下改变。注意事项与 CURRENT_DATE 时完全相同。

# Oracle

- - 在 FROM 子句中指定临时表（DUAL）

SELECT CURRENT_TIMESTAMP,

EXTRACT (YEAR FROM CURRENT_TIMESTAMP) AS year, EXTRACT (MONTH FROM CURRENT_TIMESTAMP) AS month, EXTRACT (DAY FROM CURRENT_TIMESTAMP) AS day, EXTRACT (HOUR FROM CURRENT_TIMESTAMP) AS hour, EXTRACT (MINUTE FROM CURRENT_TIMESTAMP) AS minute, EXTRACT (SECOND FROM CURRENT_TIMESTAMP) AS second

FROM DUAL;

# DB 2

/\*CURRENT 和 TIME 之间使用了半角空格，指定临时表 SYSIBM. SYSDUMMY 1\*/SELECT CURRENTTIMESTAMP,

EXTRACT (YEAR FROM CURRENTTIMESTAMP) AS year, EXTRACT (MONTH FROM CURRENTTIMESTAMP) AS month, EXTRACT (DAY FROM CURRENTTIMESTAMP) AS day, EXTRACT (HOUR FROM CURRENTTIMESTAMP) AS hour, EXTRACT (MINUTE FROM CURRENTTIMESTAMP) AS minute, EXTRACT (SECOND FROM CURRENTTIMESTAMP) AS second

FROM SYSIBM. SYSDUMMY 1;

# 转换函数

# KEYWORD

# $\bullet$  转换函数

最后将要给大家介绍一类比较特殊的函数——转换函数。虽说有些特殊，但是由于这些函数的语法和之前介绍的函数类似，数量也比较少，因此很容易记忆。

# KEYWORD

类型转换 cast

“转换”这个词的含义非常广泛，在 SQL 中主要有两层意思：一是数据类型的转换，简称为类型转换，在英语中称为 cast；另一层意思是值的转换。

# CAST——类型转换

# 注①

类型转换在一般的编程语言中也会使用，因此并不是 SQL 特有的功能。

# 语法 6-14 CAST 函数

CAST（转换前的值 AS 想要转换的数据类型）

# KEYWORD

CAST 函数

进行类型转换需要使用 CAST 函数。

之所以需要进行类型转换，是因为可能会插入与表中数据类型不匹配的数据，或者在进行运算时由于数据类型不一致发生了错误，又或者是进行自动类型转换会造成处理速度低下。这些时候都需要事前进行数据类型转换（代码清单 6- 17、代码清单 6- 18）。

# 代码清单 6-17 将字符串类型转换为数值类型

# SQL Server PostgresSQL

SELECT CAST ('0001' AS INTEGER) AS int_col;

# MySQL

SELECT CAST ('0001' AS SIGNED INTEGER) AS int_col;

# Oracle

SELECT CAST ('0001' AS INTEGER) AS int_col FROM DUAL;

# DB 2

SELECT CAST ('0001' AS INTEGER) AS int_col FROM SYSIBM. SYSDUMMY 1;

# 执行结果

int_col 1

# 代码清单 6-18 将字符串类型转换为日期类型

SQL Server PostgresSQL MySQL SELECT CAST ('2009- 12- 14' AS DATE) AS date_col;

# Oracle

SELECT CAST ('2009- 12- 14' AS DATE) AS date_col FROM DUAL;

# DB 2

SELECT CAST ('2009- 12- 14', AS DATE) AS date_col FROM SYSIBM. SYSDUMMY 1;

# 执行结果

date_col

2009- 12- 14

从上述结果可以看到，将字符串类型转换为整数类型时，前面的“000”消失了，能够切实感到发生了转换。但是，将字符串转换为日期类型时，从结果上并不能看出数据发生了什么变化，理解起来也比较困难。从这一点我们也可以看出，类型转换其实并不是为了方便用户使用而开发的功能，而是为了方便 DBMS 内部处理而开发的功能。

# COALESCE——将 NULL 转换为其他值

# 语法 6-15 COALESCE 函数

COALESCE（数据 1，数据 2，数据 3. ..）

# KEYWORD

COALESCE 函数

# 注①

参数的个数并不固定，可以自由设定个数的参数。

COALESCE 是 SQL 特有的函数。该函数会返回可变参数中左侧开始第 1 个不是 NULL 的值。参数个数是可变的，因此可以根据需要无限增加。

其实转换函数的使用还是非常频繁的。在 SQL 语句中将 NULL 转换为其他值时就会用到转换函数（代码清单 6- 19、代码清单 6- 20）。就像之前我们学习的那样，运算或者函数中含有 NULL 时，结果全都会变为 NULL。能够避免这种结果的函数就是 COALESCE。

# 代码清单 6-19 将 NULL 转换为其他值

SQL Server PostgreSQL MysqSelect COALESCE (NULL, 1) AS col_1, COALESCE (NULL, 'test', NULL) AS col_2, COALESCE (NULL, NULL, '2009- 11- 01') AS col_3;

# Oracle

SELECT COALESCE (NULL, 1) AS col_1, COALESCE (NULL, 'test', NULL) AS col_2, COALESCE (NULL, NULL, '2009- 11- 01') AS col_3 FROM DUAL;

DB 2 SELECT COALESCE (NULL, 1) AS col_1, COALESCE (NULL, 'test', NULL) AS col_2, COALESCE (NULL, NULL, '2009- 11- 01') AS col_3 FROM SYSIBM. SYSDIMMY 1;

# 执行结果

col_1 | col_2 | col_31 | test | 2009- 11- 01

# 代码清单 6-20 使用 SampleStr 表中的列作为例子

SELECT COALESCE (str 2, 'NULL') FROM SampleStr;

# 执行结果

coalesce- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - coalesce- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - rt- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - def 太郎'NULL'aaa'NULL' 'NULL' 'NULL'abc- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - i

这样，即使包含 NULL 的列，也可以通过 COALESCE 函数转换为其他值之后再应用到函数或者运算当中，这样结果就不再是 NULL 了。

此外，多数 DBMS 中都提供了特有的 COALESCE 的简化版函数（如 Oracle 中的 NVL 等），但由于这些函数都依存于各自的 DBMS，因此还是推荐大家使用通用的 COALESCE 函数。

# 6-2

# 第 6 章函数、谓词、CASE 表达式

# 谓词

# 学习重点

- 谓词就是返回值为真值的函数。- 掌握 LIKE 的三种使用方法（前方一致、中间一致、后方一致）。- 需要注意 BETWEEN 包含三个参数。- 想要取得 NULL 数据时必须使用 IS NULL。- 可以将子查询作为 IN 和 EXISTS 的参数。

# 什么是谓词

# KEYWORD

# ●谓词

本节将会和大家一起学习 SQL 的抽出条件中不可或缺的工具——谓词（predicate）。虽然之前我们没有提及谓词这个该念，但其实大家已经使用过了。例如，  $= ,< , > ,< >$  等比较运算符，其正式的名称就是比较谓词。

通俗来讲谓词就是 6- 1 节中介绍的函数中的一种，是需要满足特定条件的函数，该条件就是返回值是真值。对通常的函数来说，返回值有可能是数字、字符串或者日期等，但是谓词的返回值全都是真值（TRUE/ FALSE/UNKNOWN）。这也是谓词和函数的最大区别。

本节将会介绍以下谓词。

- LIKE- BETWEEN- IS NULL、IS NOT NULL- IN- EXISTS

# LIKE 谓词——字符串的部分一致查询

# KEYWORD

●LIKE 谓词

截至目前，我们使用字符串作为查询条件的例子中使用的都是  $=$  。这里的  $=$  只有在字符串完全一致时才为真。与之相反，LIKE 谓词更加模糊

一些，当需要进行字符串的部分一致查询时需要使用该谓词。

部分一致大体可以分为前方一致、中间一致和后方一致三种类型。接下来就让我们来看一看具体示例吧。

首先我们来创建一张表 6- 1 那样的只有 1 列的表。

表 6-1 SampleLike 表  

<table><tr><td>strcol (字符串)</td></tr><tr><td>abcddd</td></tr><tr><td>dddabc</td></tr><tr><td>abdddcc</td></tr><tr><td>abcdd</td></tr><tr><td>ddabc</td></tr><tr><td>abdddcc</td></tr></table>

创建上表以及向其中插入数据的 SQL 语句请参考代码清单 6- 21。

# 代码清单 6-21 创建 SampleLike 表

- -DDL：创建表 CREATE TABLE SampleLike (strcol VARCHAR (6) NOT NULL, PRIMARY KEY (strcol));

# SQL Server PostgreSQL

- -DML：插入数据 BEGIN TRANSACTION;

INSERT INTO SampleLike (strcol) VALUES ('abcddd'); INSERT INTO SampleLike (strcol) VALUES ('dddabc'); INSERT INTO SampleLike (strcol) VALUES ('abdddcc'); INSERT INTO SampleLike (strcol) VALUES ('ddabc'); INSERT INTO SampleLike (strcol) VALUES ('ddabc'); INSERT INTO SampleLike (strcol) VALUES ('abdcc');

COMMIT;

# 特定的 SQL

不同的 DBMS 事务处理的语法也不尽相同。代码清单 6- 21 中的 DML 语句在 MySQL 中执行时，需要将①部分更改为“START TRANSACTION;”，在 Oracle 和 DB 2 中执行时，无需用到①的部分（请删除）。

详细内容请大家参考 4- 4 节中的“创建事务”。

想要从该表中读取出包含字符串“ddd”的记录时，可能会得到前方

一致、中间一致和后方一致等不同的结果。

# 前方一致：选取出“dddabc”

# KEYWORD

●前方一致●中间一致●后方一致

所谓前方一致，就是选取出作为查询条件的字符串（这里是“ddd”）与查询对象字符串起始部分相同的记录的查询方法。

# 中间一致：选取出“abdddd”“dddabc”“abddddc”

所谓中间一致，就是选取出查询对象字符串中含有作为查询条件的字符串（这里是“ddd”）的记录的查询方法。无论该字符串出现在对象字符串的最后还是中间都没有关系。

# 后方一致：选取出“abdddd”

后方一致与前方一致相反，也就是选取出作为查询条件的字符串（这里是“ddd”）与查询对象字符串的末尾部分相同的记录的查询方法。

从本例中我们可以看出，查询条件最宽松，也就是能够取得最多记录的是中间一致。这是因为它同时包含前方一致和后方一致的查询结果。

像这样不使用“=”来指定条件字符串，而以字符串中是否包含该条件（本例中是“包含 ddd”的规则为基础的查询称为模式匹配，其中的模式也就是前面提到的“规则”。

# KEYWORD

●模式匹配

●模式

# 前方一致查询

下面让我们来实际操作一下，对 SampleLike 表进行前方一致查询（代码清单 6- 22）。

# 代码清单 6-22 使用 LIKE 进行前方一致查询

SELECT * FROM SampleLike WHERE strcol LIKE 'ddd';

# 执行结果

strcol dddabc

其中的%是代表“0 字符以上的任意字符串”的特殊符号，本例中代表“以 ddd 开头的所有字符串”。

这样我们就可以使用 LIKE 和模式匹配来进行查询了。

# 中间一致查询

接下来让我们看一个中间一致查询的例子，查询出色字符串“ddd”的记录（代码清单 6- 23）。

# 代码清单 6-23 使用 LIKE 进行中间一致查询

SELECT * FROM SampleLike WHERE strcol LIKE '%ddd';

# 执行结果

<table><tr><td>strcol</td></tr><tr><td>abddd</td></tr><tr><td>dddabc</td></tr><tr><td>abddd</td></tr></table>

在字符串的起始和结束位置加上%，就能取出“包含 ddd 的字符串”了。

# 后方一致查询

最后我们来看一下后方一致查询，选取出以字符串“ddd”结尾的记录（代码清单 6- 24）。

# 代码清单 6-24 使用 LIKE 进行后方一致查询

SELECT * FROM SampleLike WHERE strcol LIKE '%ddd';

# 执行结果

<table><tr><td>strcol</td></tr><tr><td>abddd</td></tr></table>

大家可以看到上述结果与前方一致正好相反。

此外，我们还可以使用（下划线）来代替%，与%不同的是，它代表了“任意 1 个字符”。下面就让我们来尝试一下吧。

使用代码清单 6- 25 选取出 strcol 列的值为“abc+任意 2 个字符”的记录。

# 代码清单 6-25 使用 LIKE 和（下划线）进行后方一致查询

SELECT * FROM SampleLike WHERE strcol LIKE 'abc_';

# 执行结果

strcol abddd

“abcddd”也是以“abc”开头的字符串，但是其中“ddd”是 3 个字符，所以不满足__所指定的 2 个字符的条件，因此该字符串并不在查询结果之中。相反，代码清单 6- 26 中的 SQL 语句就只能取出“abcddd”这个结果。

# 代码清单 6-26 查询“abc+任意 3 个字符”的字符串

SELECT * FROM SampleLike WHERE strcol LIKE 'abc_;

# 执行结果

strcol abddd

# BETWEEN 谓词——范围查询

# KEYWORD

●BETWEEN 谓词 ●范围查询

使用 BETWEEN 可以进行范围查询。该谓词与其他谓词或者函数的不同之处在于它使用了 3 个参数。例如，从 product（商品）表中读取出销售单价（sale_price）为 100 日元到 1000 日元之间的商品时，可以使用代码清单 6- 27 中的 SQL 语句。

# 代码清单 6-27 选取销售单价为  $100\sim 1000$  日元的商品

SELECT product_name, sale_price FROM Product WHERE sale_price BETWEEN 100 AND 1000;

# 执行结果

<table><tr><td>product_name</td><td>sale_price</td></tr><tr><td>T 恤衫</td><td>1000</td></tr><tr><td>打孔器</td><td>500</td></tr><tr><td>叉子</td><td>500</td></tr><tr><td>擦菜板</td><td>880</td></tr><tr><td>圆珠笔</td><td>100</td></tr></table>

# KEYWORD

<< >

BETWEEN 的特点就是结果中会包含 100 和 1000 这两个临界值。如果不想让结果中包含临界值，那就必须使用  $<$  和  $>$  （代码清单 6- 28）。

# 代码清单 6-28 选取出销售单价为  $101\sim 999$  日元的商品

SELECT product_name, sale_price  FROM Product  WHERE sale_price > 100  AND sale_price < 1000;

# 执行结果

<table><tr><td>product_name</td><td>sale_price</td></tr><tr><td>打孔器</td><td>500</td></tr><tr><td>叉子</td><td>500</td></tr><tr><td>擦菜板</td><td>880</td></tr></table>

执行结果中不再包含 1000 日元和 100 日元的记录。

# IS NULL、IS NOT NULL——判断是否为 NULL

# KEYWORD

●IS NULL 谓词

为了选取出某些值为 NULL 的列的数据，不能使用  $=$  ，而只能使用特定的谓词 IS NULL（代码清单 6- 29）。

代码清单 6- 29 选取出进货单价（purchase_price）为 NULL 的商品

SELECT product_name, purchase_price  FROM Product  WHERE purchase_price IS NULL;

# 执行结果

product_name| purchase_price  叉子圆珠笔

与此相反，想要选取 NULL 以外的数据时，需要使用 IS NOT NULL（代码清单 6- 30）。

# KEYWORD

●IS NOT NULL 谓词

代码清单 6- 30 选取进货单价（purchase_price）不为 NULL 的商品

SELECT product_name, purchase_price FROM Product WHERE purchase_price IS NOT NULL;

# 执行结果

<table><tr><td>product_name</td><td>purchase_price</td><td></td></tr><tr><td>T 恤衫</td><td>500</td><td></td></tr><tr><td>打孔器</td><td>320</td><td></td></tr><tr><td>运动 T 恤</td><td>2800</td><td></td></tr><tr><td>菜刀</td><td>2800</td><td></td></tr><tr><td>高压锅</td><td>5000</td><td></td></tr><tr><td>擦菜板</td><td>790</td><td></td></tr></table>

# IN 谓词——OR 的简便用法

接下来让我们思考一下如何选取出进货单价（purchase_price）为 320 日元、500 日元、5000 日元的商品。这里使用之前学过的 OR 的 SQL 语句，请参考代码清单 6- 31。

# 代码清单 6-31 通过 OR 指定多个进货单价进行查询

SELECT product_name, purchase_price FROM Product WHERE purchase_price = 320 OR purchase_price = 500 OR purchase_price = 5000;

# 执行结果

<table><tr><td>product_name</td><td>purchase_price</td><td></td></tr><tr><td>T 恤衫</td><td>500</td><td></td></tr><tr><td>打孔器</td><td>320</td><td></td></tr><tr><td>高压锅</td><td>5000</td><td></td></tr></table>

虽然上述方法没有问题，但还是存在一点不足之处，那就是随着希望选取的对象越来越多，SQL 语句也会越来越长，阅读起来也会越来越困难。这时，我们就可以使用代码清单 6- 32 中的 IN 谓词“IN（值，……）”来替换上述 SQL 语句。

# 代码清单 6-32 通过 IN 来指定多个进货单价进行查询

SELECT product_name, purchase_price FROM Product WHERE purchase_price IN (320, 500, 5000);

# KEYWORD

●NOT IN 谓词

反之，希望选取出“进货单价不是 320 日元、500 日元、5000 日元”的商品时，可以使用否定形式 NOT IN 来实现（代码清单 6- 33）。

代码清单 6- 33 使用 NOT IN 进行查询时指定多个排除的进货单价进行查询

SELECT product_name, purchase_price FROM Product WHERE purchase_price NOT IN (320, 500, 5000);

# 执行结果

<table><tr><td>product_name</td><td>purchase_price</td></tr><tr><td>运动 T 恤</td><td>2800</td></tr><tr><td>菜刀</td><td>2800</td></tr><tr><td>擦菜板</td><td>790</td></tr></table>

但需要注意的是，在使用 IN 和 NOT IN 时是无法选取出 NULL 数据的。实际结果也是如此，上述两组结果中都不包含进货单价为 NULL 的叉子和圆珠笔。NULL 终究还是需要使用 IS NULL 和 IS NOT NULL 来进行判断。

# 使用子查询作为 IN 谓词的参数

# IN 和子查询

IN 谓词（NOT IN 谓词）具有其他谓词所没有的用法，那就是可以使用子查询作为其参数。我们已经在 5- 2 节中学习过了，子查询就是 SQL 内部生成的表，因此也可以说“能够将表作为 IN 的参数”。同理，我们还可以说“能够将视图作为 IN 的参数”。

为了掌握详细的使用方法，让我们再添加一张新表。之前我们使用的全都是显示商品库存清单的 Product（商品）表，但现实中这些商品可能只在个别的商店中进行销售。下面我们来创建表 6- 2 ShopProduct（商店商品），显示出哪些商店销售哪些商品。

表 6-2 ShopProduct（商店商品）表  

<table><tr><td>shop_id
(商店)</td><td>shop_name
(商店名称)</td><td>product_id
(商品编号)</td><td>quantity
(数量)</td></tr><tr><td>000 A</td><td>东京</td><td>0001</td><td>30</td></tr><tr><td>000 A</td><td>东京</td><td>0002</td><td>50</td></tr><tr><td>000 A</td><td>东京</td><td>0003</td><td>15</td></tr><tr><td>000 B</td><td>名古屋</td><td>0002</td><td>30</td></tr><tr><td>000 B</td><td>名古屋</td><td>0003</td><td>120</td></tr><tr><td>000 B</td><td>名古屋</td><td>0004</td><td>20</td></tr><tr><td>000 B</td><td>名古屋</td><td>0006</td><td>10</td></tr><tr><td>000 B</td><td>名古屋</td><td>0007</td><td>40</td></tr><tr><td>000 C</td><td>大阪</td><td>0003</td><td>20</td></tr><tr><td>000 C</td><td>大阪</td><td>0004</td><td>50</td></tr><tr><td>000 C</td><td>大阪</td><td>0006</td><td>90</td></tr><tr><td>000 C</td><td>大阪</td><td>0007</td><td>70</td></tr><tr><td>000 D</td><td>福冈</td><td>0001</td><td>100</td></tr></table>

商店和商品组合成为一条记录。例如，该表显示出东京店销售的商品有 0001（T 恤衫）、0002（打孔器）、0003（运动 T 恤）三种。

创建该表的 SQL 语句请参考代码清单 6- 34。

# 代码清单 6-34 创建 ShopProduct（商店商品）表的 CREATE TABLE 语句

CREATE TABLE ShopProduct (shop_id CHAR (4) NOT NULL, shop_name VARCHAR (200) NOT NULL, product_id CHAR (4) NOT NULL, quantity INTEGER NOT NULL, PRIMARY KEY (shop_id, product_id));

该 CREATE TABLE 语句的特点是指定了 2 列作为主键（primary key）。这样做当然还是为了区分表中每一行数据，由于单独使用商店编号（shop_id）或者商品编号（product_id）不能满足要求，因此需要对商店和商品进行组合。

实际上如果只使用商店编号进行区分，那么指定“000 A”作为条件能够查询出 3 行数据。而单独使用商品编号进行区分的话，“0001”也会查询出 2 行数据，都无法恰当区分每行数据。

下面让我们来看一下向 ShopProduct 表中插入数据的 INSERT 语句（代码清单 6- 35）。

# 代码清单 6-35 向 ShopProduct 表中插入数据的 INSERT 语句

SQL Server PostgreSQL BEGIN TRANSACTION;

INSERT INTO ShopProduct (shop_id, shop_name, product_id, quantity) VALUES ('000 A', '东京', '0001', 30); INSERT INTO ShopProduct (shop_id, shop_name, product_id, quantity) VALUES ('000 A', '东京', '0002', 50); INSERT INTO ShopProduct (shop_id, shop_name, product_id, quantity) VALUES ('000 A', '东京', '0003', 15); INSERT INTO ShopProduct (shop_id, shop_name, product_id, quantity) VALUES ('000 B', '名古屋', '0002', 30); INSERT INTO ShopProduct (shop_id, shop_name, product_id, quantity) VALUES ('000 B', '名古屋', '0003', 120); INSERT INTO ShopProduct (shop_id, shop_name, product_id, quantity) VALUES ('000 B', '名古屋', '0004', 20); INSERT INTO ShopProduct (shop_id, shop_name, product_id, quantity) VALUES ('000 B', '名古屋', '0006', 10); INSERT INTO ShopProduct (shop_id, shop_name, product_id, quantity) VALUES ('000 B', '名古屋', '0007', 40); INSERT INTO ShopProduct (shop_id, shop_name, product_id, quantity) VALUES ('000 C', '大阪', '0003', 20); INSERT INTO ShopProduct (shop_id, shop_name, product_id, quantity) VALUES ('000 C', '大阪', '0004', 50); INSERT INTO ShopProduct (shop_id, shop_name, product_id, quantity) VALUES ('000 C', '大阪', '0006', 90); INSERT INTO ShopProduct (shop_id, shop_name, product_id, quantity) VALUES ('000 C', '大阪', '0007', 70); INSERT INTO ShopProduct (shop_id, shop_name, product_id, quantity) VALUES ('000 D', '福冈', '0001', 100);

COMMIT;

# 特定的 SQL

不同的 DBMS 事务处理的语法也不尽相同。代码清单 6- 35 在 MySQL 中执行时，需要将①部分更改为“START TRANSACTION;”，在 Oracle 和 DB 2 中执行时，无需用到①的部分（请删除）。

详细内容请大家参考 4- 4 节中的“创建事务”。

这样我们就完成了全部准备工作，下面就让我们来看一看在 IN 谓词中使用子查询的 SQL 的写法吧。

首先读取出“大阪店（000 C）在售商品（product_id）的销售单价（sale_price）”。

ShopProduct（商店商品）表中大阪店的在售商品很容易就能找出，有如下 4 种。

- 运动 T 恤（商品编号：0003）- 菜刀（商品编号：0004）- 叉子（商品编号：0006）- 擦菜板（商品编号：0007）

结果自然也应该是下面这样。

<table><tr><td>product_name</td><td>sale_price</td></tr><tr><td>运动 T 恤</td><td>4000</td></tr><tr><td>菜刀</td><td>3000</td></tr><tr><td>叉子</td><td>500</td></tr><tr><td>擦菜板</td><td>880</td></tr></table>

得到上述结果时，我们应该已经完成了如下两个步骤。

1. 从 ShopProduct 表中选取出在大阪店（shop_id = '000 C'）中销售的商品（product_id）2. 从 Product 表中选取出上一步得到的商品（product_id）的销售单价（sale_price）

SQL 也是如此，同样要分两步来完成。首先，第一步如下所示。

SELECT product_id FROM ShopProduct WHERE shop_id = '000 C';

# 注①

虽然使用“shop_name='大阪'”作为条件可以得到同样的结果，但是通常情况下，指定数据库中的商店或者商品时，并不会直接使用商品名称。这是因为与编号比起来，名称更有可能发生改变。

因为大阪店的商店编号（shop_id）是“000 C”，所以我们可以将其作为条件写在 WHERE 子句中。接下来，我们就可以把上述 SELECT 语句作为第二步中的条件来使用了。最终得到的 SELECT 语句请参考代码清单 6- 36。

# 代码清单 6-36 使用子查询作为 IN 的参数

- - 取得“在大阪店销售的商品的销售单价”SELECT product_name, sale_priceFROM ProductWHERE product_id IN (SELECT product_id FROM ShopProductWHERE shop_id = '000 C');

# 执行结果

<table><tr><td>product_name</td><td>sale_price</td></tr><tr><td>叉子</td><td>500</td></tr><tr><td>运动 T 恤</td><td>4000</td></tr><tr><td>菜刀</td><td>3000</td></tr><tr><td>擦菜板</td><td>880</td></tr></table>

如第 5 章的“法则 5- 6”（5- 2 节）所述，子查询是从内层开始执行的。因此，该 SELECT 语句也是从内层的子查询开始执行，然后像下面这样展开。

- - 子查询展开后的结果 SELECT product_name, sale_priceFROM ProductWHERE product_id IN ('0003', '0004', '0006', '0007');

这样就转换成了之前我们学习过的 IN 的使用方法了吧。可能有些读者会产生这样的疑问：“既然子查询展开后得到的结果同样是（'0003', '0004', '0006', '0007'），为什么一定要使用子查询呢？”

这是因为 ShopProduct（商店商品）表并不是一成不变的。实际上由于各个商店销售的商品都在不断发生变化，因此 ShopProduct 表内大阪店销售的商品也会发生变化。如果 SELECT 语句中没有使用子查询的话，一旦商品发生了改变，那么 SELECT 语句也不得不进行修改，而且这样的修改工作会变得没完没了。

反之，如果在 SELECT 语句中使用了子查询，那么即使数据发生了变更，还可以继续使用同样的 SELECT 语句。这样也就减少了我们的常规作业（单纯的重复操作）。

像这样可以完美应对数据变更的程序称为“易维护程序”，或者“免维护程序”。这也是系统开发中需要重点考虑的部分。希望大家在开始学习编程时，就能够有意识地编写易于维护的代码。

# NOT IN 和子查询

IN 的否定形式 NOT IN 同样可以使用子查询作为参数，其语法也和 IN 完全一样。请大家参考代码清单 6- 37 中的例文。

# 代码清单 6-37 使用子查询作为 NOT IN 的参数

SELECT product_name, sale_priceFROM ProductWHERE product_id NOT IN (SELECT product_idFROM ShopProductWHERE shop_id = '000 A');

本例中的 SQL 语句是要选取出“在东京店（000 A）以外销售的商品（product_id）的销售单价（sale_price）”，“NOT IN”代表了“以

外”这样的否定含义。

我们也像之前那样来看一下该 SQL 的执行步骤。因为还是首先执行子查询，所以会得到如下结果。

- -执行子查询 SELECT product_name, sale_priceFROM ProductWHERE product_id NOT IN ('0001', '0002', '0003');

之后就很简单了，上述语句应该会返回  $0001\sim 0003$  “以外”的结果。

# 执行结果

<table><tr><td>product_name</td><td>|sale_price</td></tr><tr><td>菜刀</td><td>3000</td></tr><tr><td>高压锅</td><td>6800</td></tr><tr><td>叉子</td><td>500</td></tr><tr><td>擦菜板</td><td>880</td></tr><tr><td>圆珠笔</td><td>100</td></tr></table>

# EXIST 谓词

# KEYWORD

EXIST 谓词

本节最后将要给大家介绍的是 EXIST 谓词。将它放到最后进行学习的原因有以下 3 点。

$①$  EXIST 的使用方法与之前的都不相同

$(2)$  语法理解起来比较困难

$(3)$  实际上即使不使用 EXIST，基本上也都可以使用 IN（或者 NOTIN）来代替

理由  $(1)$  和  $(2)$  都说明 EXIST 是使用方法特殊而难以理解的谓词。特别是使用否定形式 NOTEXIST 的 SELECT 语句，即使是 DB 工程师也常常无法迅速理解。此外，如理由  $(3)$  所述，使用 IN 作为替代的情况非常多（尽管不能完全替代让人有些伤脑筋），很多读者虽然记住了使用方法但还是不能实际运用。

但是一旦能够熟练使用 EXIST 谓词，就能体会到它极大的便利性。因此，非常希望大家能够在达到 SQL 中级水平时掌握此工具。本书只简

# 注①

希望了解 EXIST 谓词详细内容的读者，可以参考拙著《達人 IC 学 SQL 徹底指南書》（朔泳社）中 1- 8 节的内容。

单介绍其基本使用方法

接下来就让我们赶快看一看 EXIST 吧

# EXIST 谓词的使用方法

一言以蔽之，谓词的作用就是“判断是否存在满足某种条件的记录”。如果存在这样的记录就返回真（TRUE），如果不存在就返回假（FALSE）。EXIST（存在）谓词的主语是“记录”。

我们继续使用前一节“IN 和子查询”中的示例，使用 EXIST 选取出“大阪店（000 C）在售商品（product_id）的销售单价（sale_price）”。

SELECT 语句请参考代码清单 6- 38。

# 代码清单 6-38 使用 EXIST 选取出“大阪店在售商品的销售单价”

<table><tr><td>SQL Server</td><td>DB 2</td><td>PostgreSQL</td><td>MySQL</td></tr><tr><td colspan="4">SELECT product_name, sale_price</td></tr><tr><td colspan="4">FROM Product AS P</td></tr><tr><td colspan="4">WHERE EXISTS (SELECT *</td></tr><tr><td colspan="4">FROM ShopProduct AS SP</td></tr><tr><td colspan="4">WHERE SP. shop_id = & #x27 ; 000 C& #x27 ;</td></tr><tr><td colspan="4">AND SP. product_id = P.product_id);</td></tr></table>

# 特定的 SQL

Oracle 的 FROM 子句中不能使用 AS（会发生错误）。因此，在 Oracle 中执行代码清单 6- 38 时，请将  $①$  的部分修改为“FROMProductP”，将  $②$  的部分修改为“FROMShopProductSP”（删除 FROM 子句中的 AS）。

# 执行结果

<table><tr><td>product_name</td><td>sale_price</td><td></td></tr><tr><td>叉子</td><td>500</td><td></td></tr><tr><td>运动 T 恤</td><td>4000</td><td></td></tr><tr><td>菜刀</td><td>3000</td><td></td></tr><tr><td>擦菜板</td><td>880</td><td></td></tr></table>

# EXIST 的参数

之前我们学过的谓词，基本上都是像“列 LIKE 字符串”或者“列 BETWEEN 值 1 AND 值 2”这样需要指定 2 个以上的参数，而 EXIST 的左侧并没有任何参数。很奇妙吧？这是因为 EXIST 是只有 1 个参数的谓词。EXIST 只需要在右侧书写 1 个参数，该参数通常都会是一个子查询。

(SELECT * FROM ShopProduct AS SP WHERE SP. shop_id = '000 C' AND SP. product_id = P.product_id)

上面这样的子查询就是唯一的参数。确切地说，由于通过条件“SP. product_id = P.product_id”将 Product 表和 ShopProduct 表进行了联接，因此作为参数的是关联子查询。EXIST 通常都会使用关联子查询作为参数。

# 注①

虽然严格来说语法上也可以使用非关联子查询作为参数，但实际应用中几乎没有这样的情况。

# 法则 6-1

通常指定关联子查询作为 EXIST 的参数。

子查询中的 SELECT  $\star$

可能大家会觉得子查询中的 SELECT  $\star$  稍微有些不同，就像我们之前学到的那样，由于 EXIST 只关心记录是否存在，因此返回哪些列都没有关系。EXIST 只会判断是否存在满足子查询中 WHERE 子句指定的条件“商店编号（shop_id）为'000 C'，商品（Product）表和商店商品（ShopProduct）表中商品编号（product_id）相同”的记录，只有存在这样的记录时才返回真（TRUE）。

因此，即使写成代码清单 6- 39 那样，结果也不会发生改变。

# 代码清单 6-39 这样的写法也能得到与代码清单 6-38 相同的结果

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/17664ed9da5aad9dfdd7722a574b9486682d98853369b66cbbb718d81388aa41.jpg)

# 特定的 SQL

在 Oracle 中执行代码清单 6- 39 时，请将  $①$  的部分修改为“FROM Product P”，将  $②$  的部分修改为“FROM ShopProduct SP”（删除 FROM 子句中的 AS）。

大家可以把在 EXIST 的子查询中书写 SELECT  $\star$  当作 SQL 的一种习惯。

# 法则 6-2

作为 EXIST 参数的子查询中经常会使用 SELECT *。

# KEYWORD

●NOT EXIST 谓词

●使用 NOT EXIST 替换 NOT IN

就像 EXIST 可以用来替换 IN 一样，NOT IN 也可以用 NOT EXIST 来替换。下面就让我们使用 NOT EXIST 来编写一条 SELECT 语句，读取出“东京店（000 A）在售之外的商品（product_id）的销售单价（sale_price）”（代码清单 6- 40）。

代码清单 6- 40 使用 NOT EXIST 读取出“东京店在售之外的商品的销售单价”

SQL Server DB 2 PostgreSQL MySQL SELECT product_name, sale_price FROM Product AS P WHERE NOT EXISTS (SELECT * FROM ShopProduct AS SP WHERE SP. shop_id = '000 A' AND SP. product_id = P.product_id);

# 特定的 SQL

在 Oracle 中执行代码清单 6- 40 时，请将①的部分修改为“FROM Product P”，将②的部分修改为“FROM ShopProduct SP”（删除 FROM 子句中的 AS）。

# 执行结果

<table><tr><td>product_name</td><td>sale_price</td></tr><tr><td>菜刀</td><td>3000</td></tr><tr><td>高压锅</td><td>6800</td></tr><tr><td>叉子</td><td>500</td></tr><tr><td>擦菜板</td><td>880</td></tr><tr><td>圆珠笔</td><td>100</td></tr></table>

NOT EXIST 与 EXIST 相反，当“不存在”满足子查询中指定条件的记录时返回真（TRUE）。

将 IN（代码清单 6- 36）和 EXIST（代码清单 6- 38）的 SELECT 语句进行比较，会得到怎样的结果呢？可能大多数读者会觉得 IN 理解起来要容易一些，笔者也认为没有必要勉强使用 EXIST。因为 EXIST 拥有 IN 所不具有的便利性，严格来说两者并不相同，所以希望大家能够在中级篇中掌握这两种谓词的使用方法。

# 6-3

# 第 6 章函数、谓词、CASE 表达式

# CASE 表达式

# 学习重点

学习重点- CASE 表达式分为简单 CASE 表达式和搜索 CASE 表达式两种。搜索 CASE 表达式包含简单 CASE 表达式的全部功能。- 虽然 CASE 表达式中的 ELSE 子句可以省略，但为了让 SQL 语句更加容易理解，还是希望大家不要省略。- CASE 表达式中的 END 不能省略。- 使用 CASE 表达式能够将 SELECT 语句的结果进行组合。- 虽然有些 DBMS 提供了各自特有的 CASE 表达式的简化函数，例如 Oracle 中的 DECODE 和 MySQL 中的 IF，等等，但由于它们并非通用的函数，功能上也有些限制，因此有些场合无法使用。

# KEYWORD

CASE 表达式分支（条件分支）

# 注①

注①在 C 语言和 Java 等流行的编程语言中，通常都会使用 IF 语句或者 CASE 语句。CASE 表达式就是这些语句的 SQL 版本。

# KEYWORD

KEYWORD- 简单 CASE 表达式- 搜索 CASE 表达式

# 什么是 CASE 表达式

本节将要学习的 CASE 表达式，和“1+1”或者“120／4”这样的表达式一样，是一种进行运算的功能。这就意味着 CASE 表达式也是函数的一种。它是 SQL 中数一数二的重要功能，希望大家能够在这里好好学习掌握。

CASE 表达式是在区分情况时使用的，这种情况的区分在编程中通常称为（条件）分支

# CASE 表达式的语法

CASE 表达式的语法 CASE 表达式的语法分为简单 CASE 表达式和搜索 CASE 表达式两种。但是，由于搜索 CASE 表达式包含了简单 CASE 表达式的全部功能，因此本节只会介绍搜索 CASE 表达式。想要了解简单 CASE 表达式语法的读者，可以参考本节末尾的“简单 CASE 表达式”专栏。

下面就让我们赶快来学习一下搜索 CASE 表达式的语法吧

# 语法 6-16 搜索 CASE 表达式

CASE WHEN  $<$  求值表达式  $>$  THEN  $<$  表达式  $>$  WHEN  $<$  求值表达式  $>$  THEN  $<$  表达式  $>$  WHEN  $<$  求值表达式  $>$  THEN  $<$  表达式  $>$  ELSE  $<$  表达式  $>$  END

# KEYWORD

●WHEN 子句 ●求值 ●THEN 子句 ●ELSE

WHEN 子句中的“  $<$  求值表达式  $>$  ”就是类似“列  $=$  值”这样，返回值为真值（TRUE/FALSE/UNKNOWN）的表达式。我们也可以将其看作使用  $=$  、  $! =$  或者 LIKE、BETWEEN 等谓词编写出来的表达式。

CASE 表达式会从对最初的 WHEN 子句中的“  $<$  求值表达式  $>$  ”进行求值开始执行。所谓求值，就是要调查该表达式的真值是什么。如果结果为真（TRUE），那么就返回 THEN 子句中的表达式，CASE 表达式的执行到此为止。如果结果不为真，那么就跳转到下一条 WHEN 子句的求值之中。如果直到最后的 WHEN 子句为止返回结果都不为真，那么就会返回 ELSE 中的表达式，执行终止。

从 CASE 表达式名称中的“表达式”我们也能看出来，上述这些整体构成了一个表达式。并且由于表达式最终会返回一个值，因此 CASE 表达式在 SQL 语句执行时，也会转化为一个值。虽然使用分支众多的 CASE 表达式编写几十行代码的情况也并不少见，但是无论多么庞大的 CASE 表达式，最后也只会返回类似“1”或者“渡边先生！”这样简单的值。

# CASE 表达式的使用方法

CASE 表达式的使用方法那么就让我们来学习一下 CASE 表达式的具体使用方法吧。例如我们来考虑这样一种情况，现在 Product（商品）表中包含衣服、办公用品和厨房用具 3 种商品类型，请大家考虑一下怎样才能够得到如下结果。

A：衣服 B：办公用品 C：厨房用具

因为表中的记录并不包含“A：”或者“B：”这样的字符串，所以需

要在 SQL 中进行添加。我们可以使用 6- 1 节中学过的字符串连接函数“||”来完成这项工作。

剩下的问题就是怎样正确地将“A：”“B：”“C：”与记录结合起来。这时就可以使用 CASE 表达式来实现了（代码清单 6- 41）。

# 代码清单 6-41 通过 CASE 表达式将 A～C 的字符串加入到商品种类当中

SELECT product_name, CASE WHEN product_type = '衣服' THEN 'A: ' || product_type WHEN product_type = '办公用品' THEN 'B: ' || product_type WHEN product_type = '厨房用具' THEN 'C: ' || product_type ELSE NULL END AS abc_product_type FROM Product;

# 执行结果

<table><tr><td>product_name</td><td>| abc_product_type</td></tr><tr><td>恤衫</td><td>| A: 衣服</td></tr><tr><td>打孔器</td><td>| B: 办公用品</td></tr><tr><td>运动 T 恤</td><td>| A: 衣服</td></tr><tr><td>菜刀</td><td>| C: 厨房用具</td></tr><tr><td>高压锅</td><td>| C: 厨房用具</td></tr><tr><td>叉子</td><td>| C: 厨房用具</td></tr><tr><td>擦菜板</td><td>| C: 厨房用具</td></tr><tr><td>圆珠笔</td><td>| B: 办公用品</td></tr></table>

# KEYWORD

ELSE NULL

6 行 CASE 表达式代码最后只相当于 1 列（abc_product_type）而已，大家也许有点吃惊吧！与商品种类（product_type）的名称相对应，CASE 表达式中包含了 3 条 WHEN 子句分支。最后的 ELSE NULL 是“上述情况之外时返回 NULL”的意思。ELSE 子句指定了应该如何处理不满足 WHEN 子句中的条件的记录，NULL 之外的其他值或者表达式也都可以写在 ELSE 子句之中。但由于现在表中包含的商品种类只有 3 种，因此实际上有没有 ELSE 子句都是一样的。

ELSE 子句也可以省略不写，这时会被默认为 ELSE NULL。但为了防止有人漏读，还是希望大家能够显示地写出 ELSE 子句。

# 法则 6-3

法则 6- 3 虽然 CASE 表达式中的 ELSE 子句可以省略，但还是希望大家不要省略。

此外，CASE 表达式最后的“END”是不能省略的，请大家特别注意不要遗漏。忘记书写 END 会发生语法错误，这也是初学时最容易犯的错误。

# 法则 6-4

CASE 表达式中的 END 不能省略。

# CASE 表达式的书写位置

CASE 表达式的书写位置 CASE 表达式的便利之处就在于它是一个表达式。之所以这么说，是因为表达式可以书写在任意位置，也就是像“1 + 1”这样写在什么位置都可以的意思。例如，我们可以利用 CASE 表达式将下述 SELECT 语句结果中的行和列进行互换。

# 执行结果

sum_price_clothes | sum_price_kitchen | sum_price_office 5000 | 11180 | 600

上述结果是根据商品种类计算出的销售单价的合计值，通常我们将商品种类列作为 GROUP BY 子句的聚合键来使用，但是这样得到的结果会以“行”的形式输出，而无法以列的形式进行排列（代码清单 6- 42）。

# 代码清单 6-42 通常使用 GROUP BY 也无法实现行列转换

SELECT product_type, SUM (sale_price) AS sum_price FROM Product GROUP BY product_type;

# 执行结果

product_type|sum_price 衣服 5000 办公用品 600 厨房用具 11180

我们可以像代码清单 6- 43 那样在 SUM 函数中使用 CASE 表达式来获得一个 3 列的结果。

# 代码清单 6-43 使用 CASE 表达式进行行列转换

- - 对按照商品种类计算出的销售单价合计值进行行列转换 SELECT SUM (CASE WHEN product_type = '衣服' THEN sale_price ELSE 0 END) AS sum_price_clothes, SUM (CASE WHEN product_type = '厨房用具' THEN sale_price ELSE 0 END) AS sum_price_kitchen, SUM (CASE WHEN product_type = '办公用品' THEN sale_price ELSE 0 END) AS sum_price_office FROM Product;

在满足商品种类（product_type）为“衣服”或者“办公用品”等特定值时，上述 CASE 表达式输出该商品的销售单价（sale_price），不满足时输出 0。对该结果进行汇总处理，就能够得到特定商品种类的销售单价合计值了。

在对 SELECT 语句的结果进行编辑时，CASE 表达式能够发挥较大作用。

# 专栏

# 简单 CASE 表达式

CASE 表达式分为两种，一种是本节学习的“搜索 CASE 表达式”，另一种就是其简化形式——“简单 CASE 表达式”。

简单 CASE 表达式比搜索 CASE 表达式简单，但是会受到条件的约束，因此通常情况下都会使用搜索 CASE 表达式。在此我们简单介绍一下其语法结构。

简单 CASE 表达式的语法如下所示。

# 语法 6-A 简单 CASE 表达式

CASE <表达式>WHEN <表达式> THEN <表达式>WHEN <表达式> THEN <表达式>WHEN <表达式> THEN <表达式>ELSE <表达式>END

与搜索 CASE 表达式一样，简单 CASE 表达式也是从最初的 WHEN 子句开始进行，逐一判断每个 WHEN 子句直到返回真值为止。此外，没有能够返回真值的 WHEN 子句时，也会返回 ELSE 子句指定的表达式。两者的不同之处在于，简单 CASE 表达式最初的“CASE<表达式>”也会作为求值的对象。

下面就让我们来看一看搜索 CASE 表达式和简单 CASE 表达式是如何实现相同含义的 SQL 语句的。将代码清单 6- 41 中的搜索 CASE 表达式的 SQL 改写为简单 CASE 表达式，结果如下所示（代码清单 6- A）。

# 代码清单 6-A 使用 CASE 表达式将字符串 A ~ C 添加到商品种类中

使用搜索 CASE 表达式的情况（重写代码清单 6- 41）SELECT product_name, CASE WHEN product_type = '衣服' THEN 'A: ' || product_type = '办公用品' THEN 'B: ' || product_type = '厨房用具' THEN 'C: ' || product_type ELSE NULL END AS abc_product_type FROM Product;

# 使用简单 CASE 表达式的情况

SELECT product_name, CASE product_type THEN 'A: ' || product_type THEN '办公用品' THEN 'B: ' || product_type THEN '厨房用具' THEN 'C: ' || product_type ELSE NULL END AS abc_product_type FROM Product;

像“CASE product_type”这样，简单 CASE 表达式在将想要求值的表达式（这里是列）书写过一次之后，就无需在之后的 WHEN 子句中重复书写“product_type”了。虽然看上去简化了书写，但是想要在 WHEN 子句中指定不同列时，简单 CASE 表达式就无能为力了。

# 专栏

# KEYWORD

- DECODE 函数（Oracle）- IF 函数（MySQL）

# 特定的 CASE 表达式

由于 CASE 表达式是标准 SQL 所承认的功能，因此在任何 DBMS 中都可以执行。但是，有些 DBMS 还提供了一些特有的 CASE 表达式的简化函数，例如 Oracle 中的 DECODE、MySQL 中的 IF 等。

使用 Oracle 中的 DECODE 和 MySQL 中的 IF 将字符串 A～C 添加到商品种类（product_type）中的 SQL 语句请参考代码清单 6- B。

# 代码清单 6-B 使用 CASE 表达式的特定语句将字符串 A～C 添加到商品种类中

# Oracle

Oracle- Oracle 中使用 DECODE 代替 CASE 表达式

SELECT product_name,

DECODE（product_type,

A: product_type,

B: product_type,

'厨房用具'，'C: product_type,

NULL) AS abc_product_type

FROM Product;

# MySQL

MySQL- MySQL 中使用 IF 代替 CASE 表达式

SELECT product_name,

IF（IF（IF（product_type  $=$  '衣服'，CONCAT（A:，product_type），NULL)

IS NULL AND product_type  $=$  '办公用品'，

CONCAT（'B:，product_type），

IF（product_type  $=$  '衣服'，

CONCAT（'A:，product_type），NULL)

IS NULL AND product_type  $=$  '厨房用具'，CONCAT（'C:，product_type），

IF（IF（product_type  $=$  '衣服'，CONCAT（'A:，product_type），NULL)

IS NULL AND product_type  $=$  '办公用品'，

CONCAT（'B:，product_type），

IF（product_type  $=$  '衣服'，

CONCAT（'A:，product_type），

NULL)）AS abc_product_type

FROM Product;

但上述函数只能在特定的 DBMS 中使用，并且能够使用的条件也没有 CASE 表达式那么丰富，因此并没有什么优势。希望大家尽量不要使用这些特定的 SQL 语句。

# 练习题

6.1 对本章中使用的 Product（商品）表执行如下 2 条 SELECT 语句，能够得到什么样的结果呢？

$\mathrm{\widehat{U}}$

SELECT product_name, purchase_price FROM Product WHERE purchase_price NOT IN (500, 2800, 5000);

$\mathcal{Q}$

SELECT product_name, purchase_price FROM Product WHERE purchase_price NOT IN (500, 2800, 5000, NULL);

6.2 按照销售单价（sale_price）对练习 6.1 中的 Product（商品）表中的商品进行如下分类。

·低档商品：销售单价在 1000 日元以下（T 恤衫、办公用品、叉子、擦菜板、圆珠笔）·中档商品：销售单价在 1001 日元以上 3000 日元以下（菜刀）·高档商品：销售单价在 3001 日元以上（运动 T 恤、高压锅）

请编写出统计上述商品种类中所包含的商品数量的 SELECT 语句，结果如下所示。

# 执行结果

low_pricemid_pricehigh_price 5 1 2

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/e8348ab761cfdaf742f2df8605fe876d97483306afd0f198c05bc751080e9d8a.jpg)