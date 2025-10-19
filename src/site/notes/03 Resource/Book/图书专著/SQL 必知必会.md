---
{"dg-publish":true,"dg-permalink":"books/35167240","permalink":"/books/35167240/","title":"SQL必知必会","metatags":{"description":"SQL 是使用最为广泛的数据库语言，几乎所有重要的 DBMS 都支持 SQL。本书是麻省理工学院、伊利诺伊大学等众多大学的参考教材，由浅入深地讲解了 SQL 的基本概念和语法，涉及数据的排序、过滤和分组，以及表、视图、联结、子查询、游标、存储过程和触发器等内容，实例丰富，便于查阅。与其他同类图书不同，本书没有过多阐述数据库基础理论，而是专门针对一线软件开发人员，直接从 SQLSELECT 开始，讲述实际工作环境中最常用和最必需的 SQL 知识，实用性极强。新版对书中的案例进行了全面的更新，并增加了章后挑战题，便于读者巩固所学知识。","og:site_name":"DavonOs","og:title":"SQL必知必会（第5版）","og:type":"book","og:url":"https://zuji.eu.org/books/35167240","og:image":"https://wfqqreader-1252317822.image.myqcloud.com/cover/685/34336685/t6_34336685.jpg","og:image:width":"50","og:image:alt":"bookcover"}}
---


<span><span></span></span><div class="book-info-container" style="display: flex; gap: 25px; align-items: flex-start;padding: 20px; border-radius: 12px;"><span></span><div class="cover-col" style="flex: 0 0 180px; position: relative;"><span></span><img src="https://wfqqreader-1252317822.image.myqcloud.com/cover/685/34336685/t6_34336685.jpg" style="width: 100%; border-radius: 6px;box-shadow: 0 8px 15px rgba(0,0,0,0.4);" alt="SQL必知必会"><div style="position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%);background: #ff9800;color: #fff; padding: 4px 12px;border-radius: 20px; font-size: 0.8em; font-weight: bold;white-space: nowrap; box-shadow: 0 2px 8px rgba(0,0,0,0.5); z-index: 1;text-shadow: 0 1px 1px rgba(0,0,0,0.3);"><span>📖 在读</span></div></div><div class="info-col" style="flex: 1; min-width: 0;"><span></span><div style="margin-bottom: 15px;"><span></span><h1 style="font-size: 1.8rem; font-weight: 800;margin: 0 0 5px 0;color: #e0e0e0;"><span></span><a href="https://weread.qq.com/web/bookDetail/f7632a30720befadf7636bb" target="_blank" style="color: #4da6ff; text-decoration: none;border-bottom: 2px solid #4da6ff;"><span>SQL必知必会</span></a></h1><div style="font-size: 1.1rem;color: #a0a0a0;font-weight: 500;line-height: 1.4;margin-top: 0;"><span>5th Edition</span></div></div><div style="width: 100%;margin-top: 15px;display: flex;flex-direction: column;gap: 8px;"><span></span><div class="info-row" style="display: flex;align-items: flex-start;"><span></span><div style="width: 30%;color: #a0a0a0;font-weight: 500;font-size: 0.92em;"><span>✍️ 作者</span></div><div style="flex: 1;font-weight: 500;color: #e0e0e0;"><span>美/Ben·Forta</span></div></div><div class="info-row" style="display: flex;align-items: flex-start;"><span></span><div style="width: 30%;color: #a0a0a0;font-weight: 500;font-size: 0.92em;"><span>📅 出版日期</span></div><div style="flex: 1;font-weight: 500;color: #e0e0e0;">2020-7-30</div></div><div class="info-row" style="display: flex;align-items: flex-start;"><span></span><div style="width: 30%;color: #a0a0a0;font-weight: 500;font-size: 0.92em;"><span>🌐 语言</span></div><div style="flex: 1;font-weight: 500;color: #e0e0e0;"><span>zh-Hans</span></div></div><div class="info-row" style="display: flex;align-items: flex-start;"><span></span><div style="width: 30%;color: #a0a0a0;font-weight: 500;font-size: 0.92em;"><span>🔢 ISBN</span></div><div style="flex: 1;font-weight: 500;color: #e0e0e0;"><span>9787115539168</span></div></div><div class="info-row" style="display: flex;align-items: flex-start;"><span></span><div style="width: 30%;color: #a0a0a0;font-weight: 500;font-size: 0.92em;"><span>📚 分类</span></div><div style="flex: 1;font-weight: 500;color: #e0e0e0;"><span>T工业技术/TP自动化技术、计算机技术</span></div></div><div class="info-row" style="display: flex;align-items: flex-start;"><span></span><div style="width: 30%;color: #a0a0a0;font-weight: 500;font-size: 0.92em;"><span>⭐ 评分</span></div><div style="flex: 1;font-weight: 500;color: #e0e0e0;"><span>9.1 ★★★★☆</span></div></div></div></div></div>

本书介绍的 SQL 主要适用于以下系统（需要时会给出特殊说明和注释）：
- IBM DB2 （包括云上 DB2）
- Microsoft SQL Server （包括 Microsoft SQL Server Express）
- MariaDB
- MySQL
- Oracle （包括 Oracle Express）
- PostgreSQL
- SQLite

本书所有数据库示例（或者创建数据库示例的SQL脚本例子）对这些DBMS都适用，它们可以在[本书的网页](https://forta.com/books/0135182794)上获得。

## [[01 Project/SQL 必知必会（第五版）/第1课 了解SQL\|第1课 了解SQL]]

这一课介绍SQL究竟是什么，它能做什么事情。
这一课介绍了什么是 SQL，它为什么很有用。因为 SQL 是用来与数据库打交道的，所以，我们也复习了一些基本的数据库术语。 
## [[01 Project/SQL 必知必会（第五版）/第2课 检索数据\|第2课 检索数据]]

这一课介绍如何使用SELECT语句从表中检索一个或多个数据列。
这一课学习了如何使用SQL的SELECT语句来检索单个表列、多个表列 以及所有表列。你也学习了如何返回不同的值，如何注释代码。同时不 好的消息是，复杂的SQL语句往往不够通用。下一课将讲授如何对检索 出来的数据进行排序。
## [[01 Project/SQL 必知必会（第五版）/第3课 排序检索数据\|01 Project/SQL 必知必会（第五版）/第3课 排序检索数据]]

这一课讲授如何使用SELECT语句的ORDER BY子句，根据需要排序检索出的数据。

## [[01 Project/SQL 必知必会（第五版）/第4课 过滤数据\|01 Project/SQL 必知必会（第五版）/第4课 过滤数据]]
这一课将讲授如何使用SELECT语句的WHERE子句指定搜索条件。


## [[01 Project/SQL 必知必会（第五版）/第5课 高级数据过滤\|01 Project/SQL 必知必会（第五版）/第5课 高级数据过滤]]
这一课讲授如何组合WHERE子句以建立功能更强、更高级的搜索条件。 我们还将学习如何使用NOT和IN操作符。



## [[01 Project/SQL 必知必会（第五版）/第6课 用通配符进行过滤\|01 Project/SQL 必知必会（第五版）/第6课 用通配符进行过滤]]



## [[01 Project/SQL 必知必会（第五版）/第7课 创建计算字段\|01 Project/SQL 必知必会（第五版）/第7课 创建计算字段]]


## [[01 Project/SQL 必知必会（第五版）/第8课 使用函数处理数据\|01 Project/SQL 必知必会（第五版）/第8课 使用函数处理数据]]

这一课介绍什么是函数，DBMS支持何种函数，以及如何使用这些函数; 还将讲解为什么SQL函数的使用可能会带来问题。



## [[01 Project/SQL 必知必会（第五版）/第9课 汇总数据\|01 Project/SQL 必知必会（第五版）/第9课 汇总数据]]

这一课介绍什么是SQL的聚集函数，如何利用它们汇总表的数据。

## [[01 Project/SQL 必知必会（第五版）/第10课 分组数据\|01 Project/SQL 必知必会（第五版）/第10课 分组数据]]

这一课介绍如何分组数据，以便汇总表内容的子集。这涉及两个新 SELECT语句子句：GROUP BY子句和HAVING子句。


## [[01 Project/SQL 必知必会（第五版）/第11课 使用子查询\|01 Project/SQL 必知必会（第五版）/第11课 使用子查询]]

这一课介绍什么是子查询，如何使用它们。

## [[01 Project/SQL 必知必会（第五版）/第12课 联结表\|01 Project/SQL 必知必会（第五版）/第12课 联结表]]

这一课会介绍什么是联结，为什么使用联结，如何编写使用联结的 SELECT 语句。

## [[01 Project/SQL 必知必会（第五版）/第13课 创建高级联结\|01 Project/SQL 必知必会（第五版）/第13课 创建高级联结]]

本课讲解另外一些联结(包括它们的含义和使用方法)，介绍如何使用表别名，如何对被联结的表使用聚集函数。

## [[01 Project/SQL 必知必会（第五版）/第14课 组合查询\|01 Project/SQL 必知必会（第五版）/第14课 组合查询]]

本课讲述如何利用UNION操作符将多条SELECT语句组合成一个结果集。

## [[01 Project/SQL 必知必会（第五版）/第15课 插入数据\|01 Project/SQL 必知必会（第五版）/第15课 插入数据]]

这一课介绍如何利用SQL的INSERT语句将数据插入表中。


## [[01 Project/SQL 必知必会（第五版）/第16课 更新和删除数据\|01 Project/SQL 必知必会（第五版）/第16课 更新和删除数据]]

这一课介绍如何利用 UPDATE 和 DELETE 语句进一步操作表数据。

## [[01 Project/SQL 必知必会（第五版）/第17课 创建和操纵表\|01 Project/SQL 必知必会（第五版）/第17课 创建和操纵表]]

这一课讲授创建、更改和删除表的基本知识。

## [[01 Project/SQL 必知必会（第五版）/第18课 使用视图\|01 Project/SQL 必知必会（第五版）/第18课 使用视图]]

这一课将介绍什么是视图，它们怎样工作，何时使用它们；还将讲述如何利用视图简化前几课中执行的某些SQL操作。

## [[01 Project/SQL 必知必会（第五版）/第19课 使用存储过程\|01 Project/SQL 必知必会（第五版）/第19课 使用存储过程]]

这一课介绍什么是存储过程，为什么要使用存储过程，如何使用存储过程，以及创建和使用存储过程的基本语法。

## [[01 Project/SQL 必知必会（第五版）/第20课 管理事务处理\|01 Project/SQL 必知必会（第五版）/第20课 管理事务处理]]

这一课介绍什么是事务处理，如何利用COMMIT和ROLLBACK语句管理事务处理。

## [[01 Project/SQL 必知必会（第五版）/第21课 使用游标\|01 Project/SQL 必知必会（第五版）/第21课 使用游标]]

这一课将讲授什么是游标，如何使用游标。

## [[01 Project/SQL 必知必会（第五版）/第22课 高级SQL特性\|01 Project/SQL 必知必会（第五版）/第22课 高级SQL特性]]

这一课介绍SQL所涉及的几个高级数据处理特性：约束、索引和触发器。



## [[01 Project/SQL 必知必会（第五版）/附录A 样例表脚本\|01 Project/SQL 必知必会（第五版）/附录A 样例表脚本]]

## [[01 Project/SQL 必知必会（第五版）/附录B SQL语句的语法\|01 Project/SQL 必知必会（第五版）/附录B SQL语句的语法]]

## [[01 Project/SQL 必知必会（第五版）/附录C SQL数据类型\|01 Project/SQL 必知必会（第五版）/附录C SQL数据类型]]

## [[01 Project/SQL 必知必会（第五版）/附录D SQL保留字\|01 Project/SQL 必知必会（第五版）/附录D SQL保留字]]



