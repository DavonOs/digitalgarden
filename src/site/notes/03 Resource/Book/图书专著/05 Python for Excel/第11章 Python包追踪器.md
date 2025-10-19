---
{"dg-publish":true,"dg-permalink":"books/35799208/11","permalink":"/books/35799208/11/","metatags":{"description":"本章涉及了 pandas 中用于分析数据集的一些新的概念和工具。我们学习了如何读取 CSV 文件，如何处理缺失或重复的数据，如何利用描述性统计量，也见识到了将 DataFrame 转化为交互式图表有多简单。虽然你可能需要一些时间来消化这些知识，但是应该很快就能体会到 pandas 带来的强大力量。本章对 pandas 和 Excel 的 AutoFilter 功能、VLOOKUP 公式、数据透视表、PowerQuery 进行了对比。","og:site_name":"DavonOs","og:title":"Excel Python","og:type":"book","og:url":"https://zuji.eu.org/books/35799208/11","og:image":"https://file.ituring.com.cn/LargeCover/22038dc37469788a2ed5","og:image:width":"50","og:image:alt":"bookcover"},"created":"2025-09-24 14:43","updated":"2025-09-26 16:25"}
---

# 11.1 构建什么样的应用程序

进入配套代码库，你会找到 packagetracker 文件夹。文件夹中有几个文件，不过现在只需要打开叫作 packagetracker. xlsm 的 Excel 文件，然后进入 Database 工作表：首先需要往数据库中填充一些数据，这样才有事可做。如图 11- 1 所示，填写一个包名，比如“xlwings”，然后点击 Add Package（添加包）。你可以选择 Python Package Index（PyPI）上的任意一个包名。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/f4ec1a36f513dc71104c4aa06dfb3b0bbdb7de904499d4710810a0a3fe982c5b.jpg)  
图 11-1：Python 包追踪器（Database 工作表）

> macOS：确认文件夹的访问权限
> 当你在 macOS 中添加第一个包时，必须在弹出窗口中确认，以便该应用程序可以访问 packagetracker 文件夹。这和我们在第 9 章中见过的弹出窗口是一样的。

如果一切按计划进行，你就会在包名输入框的右边看到一条显示“Added xlwings successfully”（成功添加 xlwings）的消息。另外，你也可以在 Update Database 下面看到最后更新的时间戳，以及在 Log（日志）部分看到表示已经成功下载了 xlwings 的数据并将其保存到了数据库的消息。重复上述步骤，添加 pandas 包，这样就有更多的数据可以进行测试了。现在切换到 Tracker（跟踪器）工作表，然后在 B 5 单元格的下拉菜单中选择 xlwings，再点击 Show History（显示历史）。你的画面看起来应该类似于图 11- 2，其中显示了该包最新的发布版本，以及一张包含了全年发布次数的统计图。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/4e705f1587ee9a6e9ec81be9ebd5b8a540b321dd73e7a64db7f2cf63d9bd1cf4.jpg)  
图 11-2：Python 包追踪器（Tracker 工作表）

现在你可以返回 Database 工作表并添加额外的包。每当你想要从 PyPI 获取最新信息来更新数据库时，只需点击 Update Database（更新数据库）按钮：应用程序会利用 PyPI 上的最新数据同步数据库。

从用户角度了解了 Python 包跟踪器如何工作之后，我们来介绍一下它的核心功能。

# 11.2 核心功能

本节会介绍 Python 包跟踪器的核心功能：如何通过 Web API 获取数据以及如何查询数据库。我也会向你展示如何处理异常，这是在编写应用程序代码时无法避免的话题。先从 Web API 开始。

# 11.2.1 WebAPI

WebAPI 是应用程序从互联网上获取数据的最受欢迎的方法之一：API 代表 applicationprogramminginterface（应用程序编程接口），它定义了你如何通过编程与应用程序交互。因此 WebAPI 指的就是通过网络（通常是互联网）访问的 API。要理解 WebAPI 的工作原理，需要先后退一步，（通过简单的语言）了解一下当你在浏览器中打开一个 Web 页面时发生了什么：在地址栏中输入 URL 后，浏览器会向服务器发送了一个 GET 请求，请求获取你想要的 Web 页面。浏览器使用 HTTP 协议与服务器通信，GET 请求是 HTTP 协议的一种方法。当服务器接收到请求时，它会传回所请求的 HTML 文档进行响应，你的浏览器上会显示这个 HTML 文档中的内容：你的 Web 页面已成功加载。HTTP 协议还提供了一些其他的方法。除了 GET 请求，最常见的还有 POST 请求，我们用它来向服务器发送数据（比如在 Web 页面上填写联系人表单）。

为了与人类用户交互，服务器会传回精美的 HTML 页面。这没有什么问题，但是应用程序并不关心页面的设计，它们只对数据感兴趣。因此，发送给 WebAPI 的 GET 请求和请求一个 Web 页面是类似的，但是通常你都会得到 JSON 格式的数据而不是 HTML 格式的页面。JSON 代表 JavaScriptObjectNotation（JavaScript 对象记法），它是一种几乎可以被任何编程语言理解的数据结构。因此 JSON 是在不同系统之间交换数据的理想选择。虽然 JSON 使用的是 JavaScript 的语法，但是它和 Python 中的（嵌套）字典和列表非常接近。两者的区别如下。

JSON 只接受双引号字符串。JSON 使用 null，而 Python 使用 None。JSON 使用小写的 true 和 false，而 Python 使用的是首字母大写的版本。JSON 只接受字符串作为键，而 Python 的字典接受各种对象作为键。

标准库中的 json 模块可以将 Python 字典转换为 JSON 字符串，反之亦然：

In[1]: import jsonIn[2]: #Python字典user dict  $=$  {"name"："Jane Doe","age": 23,"married": False,"children": None,"hobbles":["htking","reading"]In[3]: #通过json . dumps 转换为 JSON 字符 #串 （"dumpstring"）。indent 参数是 #可选的 ，它可以美化打印格式 user_json  $=$  json.dumps (user_dict，indent  $= 4$  print (user_json){"name": "Jane Doe","age": 23,"married": false,"children": null,

"hobbies": [ "hiking", "reading"] } In[4]: # 将 JSON 字符串转换为原生 Python 数据结构 json.loads (user_json) Out[4]: {'name': 'Jane Doe', 'age': 23, 'married': False, 'children': None, 'hobbies': ['hiking', 'reading']}

REST API

除了 Web API，你还会经常看到 REST 或 RESTful API 这样的术语。REST 代表 representational state transfer（描述性状态迁移），它定义了一种遵循某些约束的 Web API。REST 的要义是以无状态资源的形式获取信息。无状态意味着每个发送给 REST API 的请求都完全独立于任何其他请求，并且每个请求必须始终提供所请求的完整信息集合。注意，REST API 这个术语常常被误用为指代任意的 Web API，哪怕它并不遵循 REST 的约束。

消费 WebAPI 通常都十分简单（马上就会看到如何在 Python 中消费），大多数服务会提供 WebAPI。如果你想下载你收藏的 Spotify 播放列表，那么可以发起如下的 GET 请求（参见 SpotifyWebAPI 参考文档）：

GET https://api.spotify.com/v1/players/playlist_id

如果你想获得最近的 Uber 行程的信息，则可以执行如下的 GET 请求（参见 UberRESTAPI）：

GET https://api.uber.com/v1.2/history

不过要使用这些 API，你需要通过认证，一般来说你需要一个账户以及一个与请求一起发出去的令牌（token）。对于 Python 包跟踪器来说，我们需要从 PyPI 上获取数据，进而获得指定包的发布信息。幸运的是，由于 PyPI 的 WebAPI 不需要任何认证，因此我们就少了一件需要担心的事。在 PyPIJSONAPI 文档中，你可以看到只存在两个端点（endpoint，指追加到常用基础 URL 后面的 URL 片段）：

GET /project_name/jsonGET /project_name/version/json

第二个端点返回了和第一个端点相同的信息，只不过是针对特定版本的。对于 Python 包跟踪器来说，我们使用第一个端点就可以获得关于包的发布情况的信息，接下来看看具体是如何工作的。在 Python 中，与 Web API 交互的最简单方法是使用 Anaconda 中预装的 Requests 包。执行如下命令从 PyPI 上获取有关 pandas 的数据：

In [5]: import requests  In [6]: response = requests.get ("https://pypi.org/pypi/pandas/json")  response. status_code  Out[6]: 200

每个响应都带有一个 HTTP 状态码，比如 200 表示 OK，而 404 表示 Not Found（未找到）。你可以在 Mozilla 的 Web 文档中找到 HTTP 状态码的完整列表。你可能对 404 很熟悉，每当你点开一个死链或是输入了不存在的地址，浏览器就会显示 404。类似地，如果你在 GET 请求中包含了一个 PyPI 上没有的包名，则也会得到 404。要查看响应的内容，最简单的方法就是调用响应对象的 json 方法，这个方法会把响应的 JSON 字符串转换成 Python 字符串：

In [7]: response.json ()

响应非常长，为了让你理解其结构，这里只打印出很短的一部分：

Out[7]: { 'info': { 'bugtrack_url': None, 'license': 'BSD', 'maintainer': 'The PyData Development Team', 'maintainer_email': ' pydata@googlegroups.com ', 'name': 'pandas' }, 'releases': { '0.1': [ { 'filename': 'pandas- 0.1. tar. gz', 'size': 238458, 'upload_time': '2009- 12- 25 T23:58:31' }, { 'filename': 'pandas- 0.1. win 32- py 2.5. exe', 'size': 313639, 'upload_time': '2009- 12- 26 T17:14:35' } ] } }

要获得 Python 包跟踪器所需的所有发布信息及其日期列表，可以执行如下代码以遍历 releases 字典：

In [8]: releases = []  for version, files in response.json ()['releases']. items ():      releases.append (f"{version}: {files[0]['upload_time']}")  releases[: 3]  # 显示列表的前 3 个元素  Out[8]: ['0.1: 2009- 12- 25 T23:58:31', '0.10.0: 2012- 12- 17 T16:52:06', '0.10.1: 2013- 01- 22 T05:22:09']

注意，这里任意挑选了列表中第一次出现的包的发布时间戳。特定的版本通常都有对应多个 Python 版本和操作系统的包。你可能还记得第 5 章中提到过，pandas 有一个可以从 JSON 字符串返回 DataFrame 的 read_json 方法。不过这个方法在这里帮不上忙，因为从 PyPI 上传回的响应的结构无法被直接转换为 DataFrame。

本节对 WebAPI 进行了简单的介绍，以便你理解它们在 Python 包跟踪器的代码库中所发挥的作用。现在来看看在我们的应用程序中如何与数据库以及其他会用到的外部系统进行通信。

# 11.2.2 数据库

为了在没有连接到互联网时也能使用来自 PyPI 的数据，你需要将下载的数据保存起来。虽然可以将 JSON 响应以文本文件形式保存到磁盘上，但还有一种更好的解决方案，那就是使用数据库。这样你就可以更加方便地查询数据了。Python 包跟踪器使用的是 SQLite，这是一个关系数据库（relational database）。关系数据库系统这个名字就来源于关系（relation），这里的关系指的是数据库表本身（并非数据表之间的关系，这是一种常见的错误认识）：它们的最终目标是保持数据完整性。为了实现这一目标，关系数据库将数据分割成不同的表[这是一个被称为规范化（normalization）的过程]并且应用约束以避免不一致和冗余的数据。关系数据库使用 SQL（structured query language，结构化查询语言）来执行数据库查询。最受欢迎的关系数据库系统有 SQL Server、Oracle、PostgreSQL 和 MySQL。作为 Excel 用户，你可能还对基于文件的 Microsoft Access 数据库比较熟悉。

# NoSQL 数据库

如今 NoSQL 数据库已然成了关系数据库的强力竞争者。NoSQL 数据库会保存冗余数据以实现下述优势。

无数据表连接

由于关系数据库将数据划分成了多张表，因此你常常需要通过连接操作来结合两张甚至更多张表的信息，有时候这样的操作会很慢。NoSQL 数据库不需要这样的操作，因此在执行某些类型的查询时可以获得更好的性能。

无数据库迁移

在使用关系数据库时，每当需要修改表结构时（比如添加新列或者新表），你都必须进行数据库迁移（migration）。迁移指的是一种将数据库转化为所需结构的脚本。这让新版本的应用程序的部署过程变得更加复杂，甚至有可能造成停工。使用 NoSQL 数据库更容易避免这种问题。

伸缩性强

NoSQL 数据库更易于分布到多台服务器上，因为其没有相互依赖的表。也就是说，使用 NoSQL 数据库的应用程序可以在用户基数急剧增长时得到更强的伸缩性。

NoSQL 数据库有很多风格。一些数据库以键- 值形式存储数据，也就是说类似于 Python 字典（如 Redis）；其他一些数据库可以保存（通常是 JSON 格式的）文档（如 MongoDB）。有些数据库设置可以将关系数据库与 NoSQL 数据库相结合：PostgreSQL 恰巧成了 Python 社区中最受欢迎的数据库，它在传统上是关系数据库，但是也允许将数据以 JSON 格式存储，兼具通过 SQL 执行查询的能力。

我们要使用的数据库是 SQLite。同 Microsoft Access 一样，SQLite 是基于文件的数据库。与只能在 Windows 中工作的 Microsoft Access 相比，SQLite 可以在任何支持 Python 的平台上工作。不过，SQLite 无法构建像 Microsoft Access 那样的用户界面，可以让 Excel 负责这一部分。

在了解如何使用 Python 连接数据库并构建 SQL 查询之前，先来看一看包跟踪器的数据库的结构。然后作为本节的总结，我们会了解一下 SQL 注入，这是数据库驱动的应用程序的常见漏洞。

# 1. 包跟踪器的数据库

Python 包跟踪器的数据库再简单不过了，因为它只有两张表：packages 表保存的是包名，而 package_versions 表保存的是版本字符串和上传日期。这两张表可以通过 package_id 进行连接：package_versions 表不会每行都保存 package_name，而是会将其规范化到 packages 表。这样可以避免数据余，比如，包名的修改只需要修改整个数据库中的一个字段就可以完成。为了更好地理解这个数据库在装入 xlwings 和 pandas 的数据后是什么样子，来看一下表 11- 1 和表 11- 2。

表 11-1：packages 表  

<table><tr><td>package_id</td><td>package_name</td></tr><tr><td>1</td><td>xlwings</td></tr><tr><td>2</td><td>pandas</td></tr></table>

表 11-2：packageversions 表（每个 package_id 的前 3 行数据）  

<table><tr><td>package_id</td><td>vesion_string</td><td>uploaded_at</td></tr><tr><td>1</td><td>0.1.0</td><td>2014-03-19 18:18:49.000000</td></tr><tr><td>1</td><td>0.1.1</td><td>2014-06-27 16:26:36.000000</td></tr><tr><td>1</td><td>0.2.0</td><td>2014-07-29 17:14:22.000000</td></tr><tr><td>...</td><td>...</td><td>...</td></tr></table>

（续）

<table><tr><td>package_id</td><td>vesion_string</td><td>uploaded_at</td></tr><tr><td>2</td><td>0.1</td><td>2009-12-25 23:58:31.000000</td></tr><tr><td>2</td><td>0.2 beta</td><td>2010-05-18 15:05:11.00000</td></tr><tr><td>2</td><td>0.2 b 1</td><td>2010-05-18 15:09:05.000000</td></tr><tr><td>...</td><td>...</td><td>...</td></tr></table>

图 11- 3 是从语义上展示两张表的数据库图。你可以读出表和列的名称，获得主键和外键的信息。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/cf7bb26a61c53d4d6c48171f35d4c53774534d3aa498572a1817f4914a6bae8a.jpg)  
图 11-3：数据库图（主键用粗体表示）

主键

关系数据库要求每张表必须有一个主键（primary key）。主键是可以唯一标识一行（行也被称作记录）的一列或多列。对于 packages 表来说，主键是 package_id；对于 package_versions 表来说，主键是所谓的复合键（composite key），即 package_id 和 version_string。

外键

package_versions 表中的 package_id 列对于 packages 表中的 package_id 列来说是一个外键（foreign key），图 11- 3 中是用连接两张表的线段表示的：外键是一种约束，对于我们来说，它能够确保 package_versions 表中的每一个 package_id 在 packages 表中也存在，这可以保证数据完整性。图 11- 3 中直线右端的分叉显示出了关系的性质：一个 package 可以有多个 package_version，这就叫作一对多（one- to- many）关系。

要查看数据库表的内容以及执行 SQL 查询，可以安装一个叫作 SQLite 的 VS Code 扩展（请参阅 SQLite 扩展的文档以了解更多细节），也可以使用专门的 SQLite 管理软件，这类软件非常多。不过，这里会使用 Python 来执行 SQL 查询。先来看看如何连接到数据库。

# 2. 数据库连接

要在 Python 中连接数据库，你需要一个驱动（driver），也就是知道如何与你所使用的数据库进行通信的 Python 包。每种数据库都需要不同的驱动，而每种驱动又使用了不同的语法。不过幸运的是有一个很强大的名为 SQLAlchemy 的包可以解决这个问题。SQLAlchemy 将不同数据库和驱动之间的大部分差异抽象了出来，很多时候我们将其用作对象关系映射程序（object relational mapper，ORM）。它会把数据库记录转化为 Python 对象。对于很多（虽然不是所有）开发者来说，ORM 使用起来更加自然。为了保持内容的

简洁，我会忽略 ORM 的功能，只使用 SQLAlchemy 来简化 SQL 查询。在使用 pandas 以 DataFrame 的形式读写数据库时，实际上 SQLAlchemy 也在幕后工作。利用 pandas 执行数据库查询涉及 3 个层次的包——pandas、SQLAlchemy 和数据库驱动，如图 11- 4 所示。在三层中的任意一层都可以执行数据库查询。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/098eb87deb5b5809444e70ab367578f976e8993b1cf69e068bda9be2eb5fb69e.jpg)  
图 11-4：在 Python 中访问数据库

表 11- 3 展示了在默认情况下 SQLAlchemy 对于不同数据库所使用的驱动（有些数据库可以通过多种驱动连接）。它也给出了各数据库的连接字符串的格式。我们会在实际执行 SQL 查询时用到连接字符串。

表 11-3：SQLAlchemy 的默认驱动及连接字符串  

<table><tr><td>数据库</td><td>默认驱动</td><td>连接字符串</td></tr><tr><td>SQLite</td><td>sqlite 3</td><td>sqlite:///filespath</td></tr><tr><td>PostgreSQL</td><td>psycopg 2</td><td>postgresql://username: password@host : port/database</td></tr><tr><td>MySQL</td><td>mysql-python</td><td>mysql://username: password@host : port/database</td></tr><tr><td>Oracle</td><td>CX_oracle</td><td>oracle://username: password@host : port/database</td></tr><tr><td>SQL Server</td><td>pyodbc</td><td>mssql+pyodbc://username: password@host : port/database</td></tr></table>

除 SQLite 以外的数据库在连接时都需要密码。由于连接字符串是 URL，因此如果密码中包含特殊字符，就必须对密码进行 URL 编码。可以像下面这样打印出 URL 编码后的密码：

In [9]: import urllib. parse  In [10]: urllib. parse. quote_plus ("pa$word")  Out[10]: 'pa%24%24 word'

前文介绍了连接数据库所需的 3 个不同层次的组件：pandas、SQLAlchemy 和数据库驱动。下面通过执行一些 SQL 查询来了解它们之间的区别。

# 3. SQL 查询

3. SQL 查询即使你刚接触 SQL，要理解我会在 Python 包跟踪器中用到的几条 SQL 查询应该也没什么问题。SQL 是一种声明式语言（declarative language），也就是说你会告诉数据库你想要什么而不是你想做什么。有些查询读起来就像普通的英语一样：

SELECT \* FROM packages

这条查询告诉数据库你想要从 packages 表中选择所有的列。在生产代码中，比起使用通配符  $\star$  选择所有列，你可能更愿意显式地指定每一列，因为这样会使查询出错率更低。

SELECT package_id, package_name FROM packages

# 数据库查询和 pandasDataFrame

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/5ac3b6fc1c5978c920e1cd5421903b641c483f428b17b4867add2aa0624f392d.jpg)

SQL 是基于集合的语言，这意味着你是在操作行的集合而不是遍历每一行。这和 pandasDataFrame 的工作方式是类似的。下面的 SQL 查询：

SELECT package_id, package_name FROM packages

对应着下面的 pandas 表达式（假设 packages 是一个 DataFrame）。

packages. loc[:,["package_id", "package_name"]]

下面的示例代码使用了 packagetracker. db 文件，你可以在配套代码库的 packagetracker 文件夹中找到。就像本章开头所展示的那样，这个例子假设你已经通过 Python 包跟踪器的 Excel 前段将 xlwings 和 pandas 添加到了数据库，不然的话则只会得到空白的结果。沿着图 11- 4 从下往上，首先通过驱动直接创建 SQL 查询，然后使用 SQLAlchemy，最后使用 pandas：

In[11]: #先从import开始import sqlite 3 from sqlalchemy import create_engineimport pandas as pdIn[12]: #我们的SQL查询 ：“从 packages 表中选择所有的列”sql  $=$  "SELECT \* FROM packages"In[13]: #选项1 ：数据库驱动（sqlite 3）是标准库的一部分） #将数据库连接用作上下文管理器可以自动提交事务 ， #发生错误时会进行回退with sqlite 3. connect ("packagetracker/packagetracker. db") as con: cursor  $=$  con. cursor（） #需要一个游标来执行SQL查询result  $=$  cursor.execute (sql). fetchall（） #返回所有记录resultOut [13]:[(1,'xlwings'），（2，'pandas')]In[14]: #选项2 ：SQLAlchemy #create_engine需要数据库的连接字符串作为参数 #在这里可以通过连接对象的方法执行查询engine  $=$  create_engine ("sqlite:///packagetracker/packagetracker. db") with engine.connect () as con: result  $=$  con.execute (sql).fetchall()result

Out[14]: [(1, 'xlwings'), (2, 'pandas')]In [15]: # 选项 3: pandas# 为 read_sql 提供表名以作为参数来读取整张表# pandas 需要一个在前面例子中用过的 SQLAlchemy 引擎 df = pd. read_sql ("packages", engine, index_col="package_id") dfOut[15]: package_namepackage_id 1 xlwings 2 pandasIn [16]: # read_sql 也接受 SQL 查询作为参数 pd. read_sql (sql, engine, index_col="package_id") Out[16]: package_namepackage_id 1 xlwings 2 pandasIn [17]: # DataFrame 方法 to_sql 会将 DataFrame 写入表中# if_exists 必须为 fail、append、replace 三者之一，# 它定义了在表已经存在的情况下会发生什么 df. to_sql ("packages 2", con=engine, if_exists="append") In [18]: # 前面的命令创建了一张名为"packages 2"的新表，# 并将 DataFrame df 中的记录插入表中，# 在后面可以进行验证 pd. read_sql ("packages 2", engine, index_col="package_id") Out[18]: package_namepackage_id 1 xlwings 2 pandasIn [19]: # 通过 SQLAlchemy 执行"drop table"命令再次删除这张表 with engine.connect () as con:    con.execute ("DROP TABLE packages 2")

是用数据库驱动、SQLAlchemy 还是 pandas 来执行查询很大程度上取决于你的偏好。我个人更喜欢 SQLAlchemy 带来的细粒度控制，并且还可以用同样的语法操作不同的数据库。不过，从另一方面来说，pandas 的 read_sql 在以 DataFrame 方式获取查询结果时更加方便。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/179a45f3a419c77b85fda96df49da0031227f8c377f4873521310cf6b92f03c0.jpg)

# SQLite 中的外键

有点儿令人诧异的是，SQLite 在执行查询时，默认不遵循外键约束。然而，如果你使用的是 SQLAlchemy，则可以轻松地强制执行外键约束，请参见 SQLAlchemy 的文档。在 pandas 中执行查询时这种方法也有效。你可以在配套代码库的 packagetracker 文件夹的 database. py 模块的顶部找到相应的代码。

现在你已经知道了如何执行简单的 SQL 查询，在本节的最后，再来了解一下 SQL 注入，这种恶意行为可能会对你的应用程序构成安全风险。

# 4. SQL 注入

如果你没有为 SQL 查询设置好安全措施，那么图谋不轨的用户可能就会通过向数据输入字段中注入 SQL 语句来执行各种 SQL 代码。比如，他们并没有在 Python 包管理器的下拉菜

单中选择 xlwings 之类的包名，而是发送了一条可能会修改查询本身的 SQL 代码。这可能会暴露敏感信息或者执行类似于删除表之类的破坏性操作。那么如何防止这类问题呢？首先来看一下下面的数据库查询，在你选择 xlwings 并点击 Show History（显示历史）时，包跟踪器会执行该查询：

SELECT v.unloaded_at, v.version_string FROM packages p INNER JOIN package_versions v ON p.package_id = v.package_id WHERE p.package_id = 1

这条查询将两张表连接在一起，只返回了 package_id 为 1 的行。为了帮助你理解这条查询，我们利用第 5 章中学到的知识来解释。如果 packages 和 package_versions 是 pandasDataFrame，那么你就可以写成下面这样：

df = packages.merge (package_versions, how="inner", on="package_id") df. loc[df["package_id"] == 1, ["uploaded_at", "version_string"]]

很显然，虽然这里将 package_id 硬编码为 1，但是为了能够根据所选的包返回对应的行，我们需要一个变量。有了第 3 章中关于 f 字符串的知识后，你可能会想到将 SQL 查询的最后一行改成下面这样：

f"WHERE p.package_id = {package_id}"

虽然从技术上来说这是可行的，但是绝不能这样做，因为这会为 SQL 注入开大门，比如某人可能会发送'1 OR TRUE'而不是一个表示 package_id 的整数。这样的查询会返回整张表的行而不是 package_id 为 1 的行。因此，应该只使用 SQLAlchemy 提供的占位符语法（以冒号开头）：

In[20]: #首先导入SQLAlchemy的text函数 from sqlalchemy. sql import text In[21]:#: package_id 是占位符 sql = "" SELECTvuploaded_at,v.version_string FROM packages p INNER JOIN package_versions v ON p.package_id = v.package_id WHERE p.package_id  $=$  : package_id ORDER BY vuploaded_at 111

In[22]: #使用SQLAlchemy with engine.connect () as con: result  $=$  con.execute (text (sql)，package_id=1). fetchall () result[: 3] #打印前3条记录 Out[22]:['2014- 03- 19 18:18:49.000000'，'0.1.0'), ('2014- 06- 27 16:26:36.000000'，'0.1.1'), ('2014- 07- 29 17:14:22.000000'，'0.2.0')]

In [23]: # 使用 pandaspd. read_sql (text (sql), engine, parse_dates=["uploaded_at"], params={"package_id": 1}, index_col=["uploaded_at"]). head (3) Out[23]: version_stringuploaded_at 2014- 03- 19 18:18:49 0.1.02014- 06- 27 16:26:36 0.1.12014- 07- 29 17:14:22 0.1.2

用 SQLAlchemy 的 text 函数包装 SQL 查询的好处在于你可以在不同的数据库中使用统一的占位符语法。否则，你就需要使用各个数据库驱动所用的占位符，比如 sqlite 3 会使用?，而 psycopg 2 会使用%s。

你可能不以为然，认为这并不是什么大问题，因为这个工具的用户能够直接使用 Python，从而也能够在数据库上执行任意的代码。但是如果某天你把你的 xlwings 原型转化成一个 Web 应用程序，那么这就是大问题了。所以最好还是在一开始就把这个问题处理妥当。

除了 WebAPI 和数据库，还有一个主题目前没有提及，但是它对于稳健的软件开发来说是必不可少的，那就是异常处理。下面来看看如何进行异常处理。

# 11.2.3 异常

第 1 章在举例说明 VBA 的 GoTo 机制已经落后时提到过异常处理。本节会向你展示 Python 如何使用 try/except 机制来处理程序中的错误。每当有些东西脱离你的控制时，错误就会（且一定会）发生。例如，在你尝试发送邮件时，邮件服务器可能停止运行了。或者在你的程序需要访问一个文件时文件不见了，而对 Python 包跟踪器来说，这可能是数据库文件。处理用户输入时，必须对用户输入的毫无意义的内容有所准备。我们来实践一下。如果下面的函数以 0 为参数进行调用，那么你会得到一个 ZeroDivisionError 异常：
```
In [24]: def print_reciprocal (number): result  $= 1$  /number print (f"The reciprocal is: {result}") In[25]:print_reciprocal（0） #此处会引发错误 ZeroDivisionError Traceback (most recent call last) <ipython- input- 25- 095f19ebb9e9>in<module> - - - >1 print_reciprocal（0） #此处会引发错误 <ipython- input- 24- 88fdfd8a4711> in print_reciprocal (number) 1 def print_reciprocal (number): - - - >2 result  $= 1$  /number 3 print (f"The reciprocal is: {result}") ZeroDivisionError: division by zero
```

为了让你的程序能够从容应对这样的错误，可以使用 try/except 语句（这和第 1 章中 VBA 的例子是等效的）：
```
In [26]: def print_reciprocal (number):    try:        result = 1 / number    except Exception as e:        # as e 令 Exception 对象为变量 e        # repr 代表对象的“printable representation”（可打印表示法），        # 它会返回代表错误信息的字符串        print (f "发生错误：{repr (e)}")        result = "N/A"    else:        print ("没有错误发生！")    finally:        print (f "倒数为：{result}")
```
每当 try 块中发生错误时，代码的执行位置就会移至 except 块，你可以在这里处理错误：可以为用户提供一些有用的反馈，或是将错误写入日志文件。else 分句只在 try 块中没有错误发生时执行，而 finally 块总是会执行，无论是否发生错误。通常，你只会写 try 和 except 这两个代码块。下面来看看输入不同值时函数的输出：

```
In [27]: print_reciprocal (10) 没有错误发生！倒数为：0.1 In [28]: print_reciprocal ("a") 发生错误：TypeError ("unsupported operand type (s) for /: 'int' and 'str'") 倒数为：N/AIn [29]: print_reciprocal (0) 发生错误：ZeroDivisionError ('division by zero') 倒数为：N/A
```
像这样使用 except 语句意味着 try 块中发生的任何异常都会导致代码转入 except 块继续执行。一般来说你并不想这样做，而是想要检查尽可能具体的错误是否发生，且只处理那些你预料到可能会发生的错误。你的程序可能会因为一些完全预料不到的事情发生错误，这类错误很难去调试。为了改进这一点，可以将函数重写成下面这样，只检查能够预料到的两类错误（省略了 else 语句和 finally 语句）：

In [30]: def print_reciprocal (number):    try:        result = 1 / number        print (f "倒数为：{result}")    except (TypeError, ZeroDivisionError):        print ("请输入 0 以外的任意数字。")

再次运行代码：

In[31]:print_reciprocal（"a") 请输入以外的任意数字。

如果你想针对异常情况进行不同的处理，那么可以像下面这样分别处理：

In[32]: def print_reciprocal（number): try: result  $\equiv$  1/number print（"倒数为：{result}”） except TypeError: print（“请输入数字。”） except ZeroDivisionError: print（“0 的倒数未定义。”） In[33]:print_reciprocal（"a") 请输入数字。 In[34]:print_reciprocal（0) 0 的倒数未定义。

现在你已经知道了如何进行错误处理，也了解了 WebAPI 和数据库，并且做好了进入下一节的准备。下一节会研究 Python 包跟踪器的各个组件。

# 11.3 应用程序架构

本节会通过研究 Python 包跟踪器的底层来理解其工作原理。我们首先会浏览这个应用程序的前端，也就是 Excel 文件；然后再研究它的后端，也就是 Python 代码；最后会介绍如何调试 xlwings 项目，对于与包跟踪器具有相同体量和复杂度的应用程序来说，这是很有用的技能。

在配套代码库的 packagetracker 目录中可以找到 4 个文件。你还记得第 1 章中讲到的关注点分离吗？现在我们可以像表 11- 4 这样将这些文件映射到不同的层。

表 11-4：关注点分离  

<table><tr><td>层</td><td>文件</td><td>描述</td></tr><tr><td>表示层</td><td>packagetracker. xlsm</td><td>该文件被用作前端，是终端用户用于交互的唯一文件</td></tr><tr><td>业务层</td><td>packagetracker. py</td><td>该模块负责从 Web API 上下载数据，并用 pandas 处理数据</td></tr><tr><td>数据层</td><td>database. py</td><td>该模块负责所有的数据库查询</td></tr><tr><td>数据库</td><td>packagetracker. db</td><td>SQLite 数据库文件</td></tr></table>

讲到这里有一点值得一提，那就是表示层，即这个 Excel 文件并不包含任何单元格公式，这使得这个工具更加容易审查和控制。

模型－视图－控制器（MVC）

关注点分离有多种实现方式，像表 11- 4 这样的划分方法只是其中之一。另一种不久之后你可能就会碰到的流行的设计模式叫作模型－视图－控制器（model- view- controller，MVC）。在 MVC 的世界中，应用程序的核心是模型，所有的数据和业务逻辑都由模型处理。而视图对应的是表示层。控制器位于模型和视图之间，它会确保模型和视图保持同步。为了保持内容的简单性，本书不会用到 MVC 模式。

现在你已经知道了每个文件负责的是哪一部分，接下来研究一下 Excel 前端是如何构成的。

# 11.3.1 前端

在构建 Web 应用程序时，你会将前端和后端加以区分。前端是在浏览器中运行的那一部分，而后端是在服务器上运行的代码。可以将同样的术语套用在 xlwings 工具上：前端是 Excel 文件，而后端是可以通过 RunPython 调用的 Python 代码。如果你想从头构建前端，那么可以先在 AnacondaPrompt 中执行如下命令（一定要先通过 cd 命令进入你选择的目录）：

(base)>xlwings quickstart packagetracker

进入 packagetracker 目录，打开 packagetracker. xlsm 文件。首先添加 3 个标签页：Tracker、Database 和 Dropdown，如图 11- 5 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/a39c040bd64867a038524ab3c77cfed94ba02e87a847bc8951c5b7af140588b5.jpg)  
图 11-5：构建用户界面

虽然你应该能够根据图 11- 5 完成文本的输入并调整格式，但是对于一些图中看不到的东西还有一些细节需要解释。

按钮

为了让这个工具看起来没那么像 Windows 3.1，我没有使用第 10 章中用过的标准宏按钮，而是通过“插入 > 形状”插入了一个圆角矩形。如果你想用标准按钮也可以，但是现在先不要为它添加宏。

命名区域

为了让这个工具维护起来更容易，我们会在 Python 代码中使用命名区域而不是单元格地址。根据表 11- 5 添加命名区域。

表 11-5：命名区域  

<table><tr><td>工作表</td><td>单元格</td><td>名称</td></tr><tr><td>Tracker</td><td>B 5</td><td>package_selection</td></tr><tr><td>Tracker</td><td>B 11</td><td>latest_release</td></tr><tr><td>Database</td><td>B 5</td><td>new_package</td></tr><tr><td>Database</td><td>B 13</td><td>update_at</td></tr><tr><td>Database</td><td>B 18</td><td>log</td></tr></table>

一种创建命名区域的方式是选择单元格，然后在名称框中输入名称，最后按下回车键确认，如图 11- 6 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/9564be7ed4e32c1d7d75c7b706327ae0e4a33e1e89cabf5355187ea58ed32afd.jpg)  
图 11-6：名称框

表

在 Dropdown 工作表中，首先在 A 1 单元格输入“packages”，然后在“插入 > 表”中确认已勾选“我的表有标题”。最后在选中表格的情况下，进入功能区的表格设计标签页（Windows 系统）或表格标签页（macOS 系统），将 Table 1 重命名为 dropdown_content，如图 11- 7 所示。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/a0442cc10a99ca328500b2844a8be658a74a29344a336283b10b754e65232143.jpg)  
图 11-7：重命名 Excel 表格

数据验证

我们使用数据验证来构造 Tracker 工作表 B 5 单元格中的下拉菜单。选中 B 5 单元格，进入“数据  $>$  数据验证”，在“允许”菜单项中，选择“列表”。将来源设置为如下公式：

=INDIRECT ("dropdown_content[packages]")

然后点击 OK 按钮确认。这只是对表格主体的引用，但是由于 Excel 无法直接接受表格引用，因此必须用 INDIRECT 公式进行包装，它会将表格解析为对应的地址。另外，利用表格可以在添加更多的包时自动调整下拉菜单显示的区域的大小。

条件格式化

在添加一个包时，我们希望将一些可能发生的错误展示给用户：字段可能为空，包可能已经在数据库中，可能在 PyPI 中找不到这个包。为了让错误消息以红色显示，而其他消息以黑色显示，这里会用到一种基于条件格式化的小技巧：每当消息包含“error”时，就设置成红色的字体。在 Database 工作表中，选择 C 5 单元格，我们会在这里输出消息。然后进入“主页  $>$  条件格式化  $>$  高亮单元格规则  $>$  包含文本”，输入 error，在下拉菜单中选择 Red Text，如图 11- 8 所示，最后点击 OK 按钮。为 Tracker 工作表中的 C 5 单元格应用相同的条件格式。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/10cb56e716b9c6bf307853a6e3e8f12fcbc42a052b9c3c360e569ef3f4cbe333.jpg)  
图 11-8：条件格式化在 Windows（左）和 macOS（右）系统中的窗口

网格线

网格线在 Tracker 工作表和 Database 工作表中，通过取消勾选“页面布局 > 网格线”中的“视图”选项来隐藏网格线。

此时，用户界面看起来应该类似于图 11- 5 那样。现在需要在 VBA 编辑器中添加 RunPython 调用，并将其连接到按钮。按下快捷键 Alt+F 11（Windows 系统）或 Option- F 11（macOS 系统）打开 VBA 编辑器，然后在 packagetracker. xlsm 的 VBA 项目下的模块窗口中双击模块 1 打开该模块。删除既存的 SamplCall 代码，替换成下面的宏：

Sub AddPackage () RunPython "import packagetracker; packagetracker. add_package ()" End Sub Sub ShowHistory () RunPython "import packagetracker; packagetracker. show_history ()" End Sub Sub UpdateDatabase () RunPython "import packagetracker; packagetracker. update_database ()" End Sub

接下来，在各个按钮上单击右键，选择“指定宏”并选择和按钮对应的宏。图 11- 9 展示的是 Show History 按钮，但是对于 Add Package 和 Update Database 按钮来说也是一样的。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/f1213f8067c908a33359abb0d525145555448fbd0a90cdd679e9a8a65ded5029.jpg)  
图 11-9：为 Show History 按钮指定 ShowHistory 宏

现在前端就算完成了，接下来开始编写 Python 后端。

# 11.3.2 后端

由于 packagetracker. py 和 database. py 这两个文件太长，这里就不做展示了。你需要在 VSCode 中打开配套代码库的这两个文件。不过本节会引用一些代码片段来解释几个关键概念。先来看看当你点击 Database 工作表中的 AddPackage 按钮时会发生什么。这个按钮被指定了下面的 VBA 宏：

Sub AddPackage () RunPython "import packagetracker; packagetracker. add_package ()"End Sub

如你所见，RunPython 函数调用了例 11- 1 展示的 pakcgatracker 模块中的 add_package 这一 Python 函数。

例 11-1 packagetracker. py 中的 add_package 函数（略去注释）

```
def add_package (): db_sheet  $=$  xw.Book.caller (). sheets["Database"] package_name  $=$  db_sheet["new_package"]. value feedback_cell  $=$  db_sheet["new_package"]. offset (column_offset  $= 1$  feedback_cell. clear_contents () if not package_name: feedback_cell. value  $=$  "Error: Please provide a name!" 0 return if requests. get（f"{BASE_URL}/{package_name}/json" timeout  $= 6$  ). status_code  $! = 200$  ：2 feedback_cell. value  $=$  "Error: Package not found!" return error  $=$  database. store_package (package_name) ③ db_sheet["new_package"]. clear_contents () if error: feedback_cell. value  $=$  f"Error:{error}" else: feedback_cell. value  $=$  f"Added {package_name} successfully." update_database () ④ refreshdropdown () ③
```

$⑨$  反馈信息中的“error”会通过条件格式化触发 Excel 中的红色字体。

② 在默认情况下，Requests 会一直等待响应，当 PyPI 出现问题响应缓慢时，这可能会导致应用程序“挂起”。这就是为什么在生产代码中，你总是应该显式地提供一个 timeout 参数。

③ 如果操作成功，那么 store_package 函数会返回 None；否则会返回带有错误信息的字符串。

④ 为了保持例子简单，在这里整个数据库都被更新了。在生产环境中，你只会添加新包的记录。

该函数会使用 packages 表的内容更新 Dropdown 工作表中的表格。同时还会更新已经在 Excel 中配置好的数据验证部分，这可以确保所有的包都会出现在 Tracker 工作表的下拉菜单中。如果允许在 Excel 文件外部为数据库填充数据，那么就需要为用户提供一种直接调用该函数的方法。如果你有多个用户在不同的文件中使用同一个数据库，那么就需要这样做。

并非生产代码

为了使读者更容易理解，本书中的应用程序会保持尽可能地简单，所以它并没有检查所有可能出问题的地方。在生产环境中，你可能想要让它的稳健性更高：如果找不到数据库文件，那么应该显示一个对用户友好的错误信息。

在注释的帮助下你应该能够理解 packagetracker. py 文件中的其他函数。现在将注意力转向 database. py 文件。例 11- 2 展示了该文件中的前几行。

例 11-2 database. py（带有相关 import 语句的片段）

from pathlib import Path

import sqlalchemy import pandas as pd

我们想要数据库文件和该文件在同一目录中在这里，将路径转换为绝对路径 this_dir  $=$  Path (__file__). resolve (). parent db_path  $=$  this_dir / "packagetracker. db"

数据库引擎 engine  $=$  sqlalchemy. create_engine (f"sqlite:///{{db_path}")

如果需要回顾一下这几行代码的作用，请参见第 7 章的开头，我在销售报告的代码中解释了这一点。

虽然这段代码负责的是拼接出数据库文件的路径，但是它也展示了在处理各种文件（无论是图片、CSV 文件，还是这里谈到的数据库文件）时如何避免常见的错误。在编写一些简单的 Python 脚本时，你可以像我在大部分 Jupyter 笔记本示例中所做的那样，只使用相对路径：

engine  $=$  sqlalchemy. create_engine ("sqlite:///packagetracker. db")

只要你的文件在工作目录中，这就没有问题。不过当你在 Excel 中通过 RunPython 执行这段代码时，工作目录可能就不一样了，也就是会造成 Python 在错误的文件夹中查找这个文件，即你会得到 File not found 错误。为了解决这样的问题，你可以提供一个绝对路径，或者像例 11- 2 那样创建一个 Path 对象。这样一来，即使在 Excel 中通过 RunPython 执行代码，也可以确保 Python 在源文件所在的目录查找文件。

如果想从头构建 Python 包跟踪器，则需要手动创建数据库：以脚本形式运行 database. py 文件，比如在 VS Code 中点击运行文件按钮。这个脚本会创建包含那两张表的数据库文件 packagetracker. db。你可以在 database. py 的底部找到创建数据库的代码：

if __name__ == "__main__":    create_db ()

最后一行调用了 create_db 函数，而前面的 if 会在下面的“提示”中解释。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/229695c768c3eb18080ad8c2568a03e628a6f2bc9969769cf8a762bb6af1c9e2.jpg)

if __name__ == "__main__"

你会在很多 Python 文件底部看到这种 if 语句。它可以确保只有在该文件以脚本形式（比如，在 Anaconda Prompt 中执行 python database. py，或者点击 VS Code 中的运行文件按钮）运行时才会执行这段代码。而在文件被当作模块导入（比如 import database）时，这段代码不会被触发。之所以能达到这样的效果，是因为当你直接以脚本形式执行文件时，Python 会将名称 __main__ 赋予该文件，而通过 import 语句导入时，Python 会使用模块名（database）进行调用。由于 Python 会使用一个叫作 __name__ 的变量来跟踪文件名，因此只有在以脚本形式执行文件时，if 语句才会得到 True 的结果，而从 packagetracker. py 中导入时则不会被触发。

database 模块的其他代码会分别通过 SQLAlchemy 和 pandas 的 to_sql 方法及 read_sql 方法执行 SQL 语句，你可以体会一下这两种方法。

迁移到 PostgreSQL

如果想把 SQLite 换成基于数据库的 PostgreSQL，那么只需要做几处改动。首先，需要执行 conda install psycopg 2（如果你使用的不是 Anaconda 发行版，则要执行 pip install psycopg 2- binary）安装 PostgreSQL 驱动。然后，在 database. py 中将 create_engine 函数中的连接字符串修改成表 11- 3 中的 PostgreSQL 版本。最后，在创建表时需要将 packages. package_id 的数据类型 INTEGER 修改成 PostgreSQL 中的 SERIAL。创建自增长主键的语法体现出了不同 SQL 方言的差异。

在构建 Python 包管理器这种复杂度的工具的过程中你可能会遇到一些问题，比如，你可能在 Excel 中重命名了一个命名区域，但是忘了在 Python 代码中也进行相应的更改。是时候了解一下如何进行调试了。

# 11.3.3 调试

要想方便地调试 xlwings 脚本，可以直接在 VS Code 中执行你的函数，而不用在 Excel 中点击相应按钮。packagetracker. py 文件底部的如下几行代码可以帮助你调试 add_package 函

数（在 quickstart 项目中也能找到这几行代码）：

if __name__ == "__main__": ①  xw.Book ("packagetracker. xlsm"). set_mock_caller ()  ②  add_package ()

①我们在研究 database. py 的代码时已经见识到了这种 if 语句所发挥的作用，参见前面的“提示”。

②由于只有当该文件以脚本形式被 Python 直接执行时，这段代码才会被执行，因此这里的 set_mock_caller () 命令只是用于调试目的：当你在 VS Code 或者 Anaconda Prompt 中运行文件时，它会将 xw.Book.caller () 设置为 xw.Book ("packagetracker. xlsm")。这样做的唯一目的是可以从 Python 和 Excel 任意一方运行这段脚本，而不需要在 add_package 函数中来回切换 xw.Book ("packagetracker. xlsm")（从 VS Code 调用时使用）和 xw.Book.caller ()（从 Excel 调用时使用）。

在 VSCode 中打开 packagetracker. py，点击 add_package 函数的任何一行代码行号左边的空白处设置一个断点。然后按下 F 5 键，在对话框中选择“Python 文件”以启动调试器，让代码在断点处暂停。一定要按 F 5 键而不是使用运行文件按钮，因为运行文件按钮会忽略断点。

# 使用 VSCode 和 Anaconda 进行调试

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-15/dd9a4891-4e25-48b7-8140-6cdacb8609b4/d24ca8eb0b1af408dc53de91ff2e02319777ed99c91e029dd961acfd686a8faf.jpg)

在 Windows 中，当第一次运行 VS Code 调试器，调试用到了 pandas 的代码时可能会碰到一条错误消息：“Exception has occurred: ImportError. Unable to import required dependencies: numpy.”（发生异常，ImportError，无法导入所需依赖项：numpy。）错误发生的原因是在 Conda 环境还没完全激活时调试器就已经启动并开始运行了。作为一种解决方法，可以点击停止图标停止调试器，然后再按 F 5 键。第二次运行就没问题了。

如果对 VSCode 的调试器并不熟悉，可以看一下附录 B，其中对相关的功能和按钮进行了解释。第 12 章还会再提到这个话题。如果你想调试其他的函数，则可以先停止当前的调试会话，然后再修改文件底部的函数名。例如，要调试 show_history 函数，可以将 packagetracker. py 的最后一行改成下面这样，然后再按 F 5 键：

if __name__ == "__main__":  xw.Book ("packagetracker. xlsm"). set_mock_caller ()  show_history ()

在 Windows 中也可以在 xlwings 插件中勾选 Show Console（显示控制台）选项，激活该选项后在 RunPython 调用执行时会同时显示一个命令提示符窗口。这样就可以打印额外的信

息来帮助你调试问题。例如，你可以打印变量的值，然后在命令提示符中进行检查。不过在代码执行完毕后，命令提示符就会立即关闭。如果需要让它多停留一会儿，这里有一个小技巧：将 input () 添加为函数中的最后一行。这样 Python 就会等待用户输入而不是立即关闭命令提示符。检查完输出之后，在命令提示符中按回车键关闭窗口。但是在取消勾选 Show Console 选项之前一定要记得移除 input () 这一行。

# 11.4 小结

本章揭示了一个道理：即使不费那么大的劲也可以构建出相对复杂的应用程序。利用强大的 Python 包（比如 Requests 和 SQLAlchemy），我的开发工作大为改观。相比之下，用 VBA 和外部系统沟通则要困难得多。如果有相似的用例，强烈建议你深入研究一下 Requests 和 SQLAlchemy——利用它们能够高效地和外部数据源进行沟通，这样就可以和复制/粘贴这样的操作说再见了。

比起按按钮，有些用户更喜欢通过单元格公式来创建 Excel 工具。第 12 章会展示如何利用 xlwings 在 Python 中编写用户定义函数，这样你就可以再次用到前面已经学习过的大部分 xlwings 概念。
