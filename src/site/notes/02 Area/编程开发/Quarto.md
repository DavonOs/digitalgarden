---
{"dg-publish":true,"dg-permalink":"program/quarto","permalink":"/program/quarto/","metatags":{"description":"An open source technical publishing system for creating beautiful articles, websites, blogs, books, slides, and more. Supports Python, R, Julia, and JavaScript.","og:site_name":"DavonOs","og:title":"Quarto","og:type":"article","og:url":"https://zuji.eu.org/program/quarto","og:image":null,"og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"dgShowInlineTitle":true,"created":"2025-09-17 11:19","updated":"2025-09-30 09:35"}
---

[Quarto](https://quarto.org/)
## 基础安装与配置

在 VS Code 中已安装 Quarto 插件但仍提示 “Quarto 未安装”，通常是因为 VS Code 未正确识别系统中的 Quarto 路径（即使系统环境变量已配置）。可按以下步骤解决：

### 1. **重启 VS Code（最直接的方法）**

VS Code 启动时会读取系统环境变量，若你是在配置完环境变量后才打开的 VS Code，可能导致变量未生效。  
**操作**：完全关闭 VS Code（包括所有窗口），重新启动后再尝试新建 Quarto 项目。

### 2. **手动指定 Quarto 路径（插件设置）**

若重启后仍无效，可在 VS Code 的 Quarto 插件中手动指定安装路径：

1. 打开 VS Code，点击左侧「扩展」图标（或按 `Ctrl+Shift+X`）
2. 找到已安装的「Quarto」插件，点击「设置」（齿轮图标）
3. 在插件设置中，找到「Quarto: Path」选项，添加以下配置（替换为你的实际路径）：

```
"D:\\quarto\\bin\\quarto.exe"
```
（注意 Windows 路径需用双反斜杠 `\\`，或单斜杠 `/`）

4. 保存设置后，重启 VS Code 生效。

### 3. **检查 VS Code 的运行权限**

若 Quarto 安装在非系统盘（如你的`D:`盘），可能存在权限问题：

右键 VS Code 快捷方式，选择「以管理员身份运行」，再测试是否能识别 Quarto。


[使用 quarto 的 sql 笔记本 | 丹尼尔·罗尔夫斯 --- sql notebooks with quarto | daniel roelfs](https://danielroelfs.com/posts/sql-notebooks-with-quarto/)

# Windows 下用 Quarto 运行 SQL 的完整实现方法

参考网页核心思路（Quarto 依赖 `knitr` 引擎支持 SQL，需通过 R 环境 +`DBI` 包 +`duckdb` 数据库实现，暂不支持 Python 环境），结合 Windows 系统特性，以下是分步可复现的操作指南，包含环境搭建、数据准备、SQL 执行与渲染全流程。

## 一、核心前提

网页明确指出：Quarto 的 SQL 支持源于 `knitr` 引擎（继承自 R Markdown），而 Python 的 Jupyter 引擎暂不支持 SQL 代码块。因此，**Windows 下需以 R 为宿主环境**，搭配轻量级数据库 `duckdb`（网页推荐，开源、高效、无需服务端），实现 SQL 交互式运行与文档生成。

## 二、第一步：环境准备（Windows 专属安装步骤）

需依次安装 **Quarto**、**R 与 RStudio**（便于管理 R 包和 Quarto 文档）、**duckdb 数据库**，确保各工具适配 Windows 系统。

### 1. 安装 Quarto

Windows 无 Homebrew，需从官网下载安装包：

1. 访问 Quarto 官网下载页：[https://quarto.org/docs/get-started/installation.html#windows](https://quarto.org/docs/get-started/installation.html#windows)
2. 下载对应系统的 `.msi` 安装包（32/64 位，建议 64 位）；
3. 双击安装，勾选「Add Quarto to PATH」（便于后续命令行调用，若未勾选需手动添加环境变量）；
4. 验证：打开 cmd，输入 `quarto --version`，显示版本号即安装成功（如 `Quarto 1.5.55`）。

### 2. 安装 R 与 RStudio

R 是运行 SQL 连接的核心，RStudio 提供友好的 Quarto 编辑环境：

1. 安装 R：
    
    - 访问 R 官网下载页：[https://cran.r-project.org/bin/windows/base/](https://cran.r-project.org/bin/windows/base/)
    - 下载最新版 `.exe` 安装包（如 `R-4.4.1-win.exe`）；
    - 双击安装，默认路径即可（如 `C:\Program Files\R\R-4.4.1`），同样勾选「Add R to PATH」。
2. 安装 RStudio（可选但推荐）：
    
    - 访问 RStudio 官网下载页：[https://posit.co/download/rstudio-desktop/](https://posit.co/download/rstudio-desktop/)
    - 下载 Windows 版免费版（`RStudio-2024.04.2-764.exe`）；
    - 双击安装，默认路径即可，启动后会自动关联已安装的 R。

### 3. 安装 duckdb 数据库

`duckdb` 是轻量级嵌入式数据库（无需启动服务），网页推荐用于小项目 SQL 分析：

1. 访问 duckdb 官网下载页：[https://duckdb.org/docs/installation/index.html#windows](https://duckdb.org/docs/installation/index.html#windows)
2. 下载 Windows 版压缩包（如 `duckdb-windows-amd64.zip`）；
3. 解压到自定义路径（如 `D:\duckdb`），并将该路径添加到 Windows 环境变量「PATH」（便于后续命令行调用）；
4. 验证：打开 cmd，输入 `duckdb --version`，显示版本号即安装成功（如 `v1.0.0`）。

## 三、第二步：安装 R 依赖包

需通过 R/RStudio 安装网页提到的核心包：`DBI`（数据库连接）、`duckdb`（duckdb 驱动）、`dbplyr`（辅助数据导入）、`nycflights13`（示例数据集）。

1. 打开 RStudio，在底部「Console」控制台输入以下命令，按回车执行（需联网，首次安装需等待依赖下载）：

```r
# 安装核心包：DBI（连接）、duckdb（驱动）、dbplyr（数据处理）、nycflights13（示例数据）
install.packages(c("DBI", "duckdb", "dbplyr", "nycflights13", "dplyr"))

# 加载包（验证安装，无报错即成功）
library(DBI)
library(duckdb)
library(dbplyr)
library(nycflights13)
library(dplyr)
```

2. 若安装失败（如网络问题），可切换 R 镜像源：
    - RStudio 菜单栏：「Tools」→「Global Options」→「Packages」→「Change」；
    - 选择国内镜像（如「China (Beijing 2) [https] - Tsinghua University」），点击「OK」后重新执行安装命令。

## 四、第三步：准备示例数据（匹配网页案例）

网页使用两个数据集：**超级英雄数据（superheroes）** 和 **纽约航班数据（nycflights13）**，需将其导入 `duckdb` 数据库文件（Windows 下路径需规范）。

### 1. 创建数据文件夹

在电脑中新建文件夹（如 `D:\Quarto-SQL-Notebook`），在该文件夹内创建 `data` 子文件夹（用于存放 duckdb 数据库文件）。

### 2. 导入纽约航班数据（nycflights13）

`nycflights13` 是 R 包自带数据集（包含 2013 年纽约航班数据），需将其写入 `flights.db`：在 RStudio 控制台执行以下代码：

```r
# 1. 连接（或创建）flights.db 数据库（路径为 Windows 格式，需与后续 Quarto 文档一致）
con_flights <- DBI::dbConnect(
  drv = duckdb::duckdb(),
  dbdir = "D:/Quarto-SQL-Notebook/data/flights.db",  # Windows 路径用 / 或 \\
  read_only = FALSE  # 首次导入需可写，后续可改为 TRUE
)

# 2. 将 nycflights13 包的 5 个表（flights, airlines, airports, planes, weather）写入 duckdb
dbWriteTable(con_flights, "flights", nycflights13::flights)
dbWriteTable(con_flights, "airlines", nycflights13::airlines)
dbWriteTable(con_flights, "airports", nycflights13::airports)
dbWriteTable(con_flights, "planes", nycflights13::planes)
dbWriteTable(con_flights, "weather", nycflights13::weather)

# 3. 关闭连接（避免占用资源）
DBI::dbDisconnect(con_flights)
```

### 3. 导入超级英雄数据（superheroes）

网页使用 GitHub 上的虚构超级英雄数据集，需先下载数据并导入 `superheroes.db`：

1. 下载数据集：访问 [https://github.com/danielroelfs/superhero-db](https://github.com/danielroelfs/superhero-db)，点击「Code」→「Download ZIP」，解压后获取 `superheroes.csv` 等文件（或直接用网页作者已处理的 db 文件，若有链接可直接下载）；
2. 在 RStudio 控制台执行以下代码，将 CSV 数据写入 `superheroes.db`：


```r
# 1. 连接（或创建）superheroes.db 数据库
con_superheroes <- DBI::dbConnect(
  drv = duckdb::duckdb(),
  dbdir = "D:/Quarto-SQL-Notebook/data/superheroes.db",
  read_only = FALSE
)

# 2. 假设已将 superheroes.csv 解压到 D:/Quarto-SQL-Notebook/data 下，读取并写入数据库
# （若数据分多个表，需按网页示例创建对应表，此处简化为单表示例）
superheroes_data <- read.csv("D:/Quarto-SQL-Notebook/data/superheroes.csv", stringsAsFactors = FALSE)
dbWriteTable(con_superheroes, "superhero", superheroes_data)  # 表名与网页一致

# 3. 关闭连接
DBI::dbDisconnect(con_superheroes)
```

## 五、第四步：编写 Quarto 文档（运行 SQL 代码块）

在 RStudio 中创建 Quarto 文档（`.qmd`），通过 `DBI` 建立数据库连接，用 SQL 代码块执行查询，核心参数与网页保持一致（如 `connection` 指定连接对象、`label` 标记代码块、`echo` 控制代码显示）。

### 1. 创建 Quarto 文档

1. 打开 RStudio：「File」→「New File」→「Quarto Document」；
2. 选择「Blank」模板，设置文件名（如 `sql-notebook.qmd`），保存到 `D:\Quarto-SQL-Notebook` 路径下；
3. 删除默认内容，按以下结构编写文档。

### 2. Quarto 文档完整代码（含网页示例）

````markdown
---
title: "SQL Notebook with Quarto (Windows)"
author: "Your Name"
date: "YYYY-MM-DD"
format: html  # 推荐 HTML 格式（保留表格样式，支持渲染）
---

## 1. 初始化数据库连接
先建立与 `flights.db` 和 `superheroes.db` 的只读连接（避免误改数据），连接对象将用于后续 SQL 代码块。

```{r}
#| label: setup-db-connection
#| include: false  # 隐藏该代码块（仅执行连接，不显示在最终文档）
library(DBI)
library(duckdb)

# 连接 flights.db（路径需与数据准备步骤一致）
con_flights <- DBI::dbConnect(
  drv = duckdb::duckdb(),
  dbdir = "D:/Quarto-SQL-Notebook/data/flights.db",
  read_only = TRUE
)

# 连接 superheroes.db
con_superheroes <- DBI::dbConnect(
  drv = duckdb::duckdb(),
  dbdir = "D:/Quarto-SQL-Notebook/data/superheroes.db",
  read_only = TRUE
)
````

## 2. SQL 示例 1：查看航空公司列表

查询 `flights.db` 的 `airlines` 表，显示前 10 条记录（网页示例 1）。

{sql}

```{sql}
#| label: query-airlines
#| connection: con_flights  # 关键：指定使用的数据库连接
#| echo: true  # 显示 SQL 代码（默认 true，可改为 false 隐藏）
#| title: 航空公司列表（前10条）

SELECT name, carrier FROM airlines LIMIT 10;  # 分号非必需，但为好习惯
```

## 3. SQL 示例 2：查看超级英雄数据库的所有表

隐藏 SQL 代码，仅显示 `superheroes.db` 的表名（网页示例 2）。

{sql}

```{sql}
#| label: query-superhero-tables
#| connection: con_superheroes
#| echo: false  # 隐藏代码，仅显示输出
#| title: 超级英雄数据库的所有表

SHOW TABLES;  # duckdb 命令：查看数据库内所有表
```

## 4. SQL 示例 3：计算航班平均延误时间

关联 `flights` 和 `airlines` 表，按航空公司分组计算平均起飞延误时间（网页探索性分析示例）。

{sql}

```{sql}
#| label: query-flight-delay
#| connection: con_flights
#| title: 各航空公司航班平均延误时间（按延误降序）

SELECT
  airlines.name AS 航空公司,
  ROUND(MEAN(flights.dep_delay), 2) AS 平均延误分钟,
  ROUND(STDDEV(flights.dep_delay) / SQRT(COUNT(1)), 2) AS 延误标准误
FROM flights
INNER JOIN airlines ON flights.carrier = airlines.carrier  # 关联航空公司表
GROUP BY airlines.name
ORDER BY 平均延误分钟 DESC;  # 按延误时间降序
```

## 5. SQL 示例 4：超级英雄性别比例（CTE 查询）

用 CTE（公共表表达式）计算 Marvel 和 DC 漫画的超级英雄性别分布及占比（网页 CTE 示例）。


```{sql}
#| label: query-superhero-gender
#| connection: con_superheroes
#| title: Marvel/DC 超级英雄性别比例

WITH pub_count AS (
  -- 子查询1：计算每个出版社的超级英雄总数
  SELECT
    publisher_id,
    COUNT(publisher_id) AS total_sh
  FROM superhero
  GROUP BY publisher_id
),
gender_count AS (
  -- 子查询2：计算每个出版社的各性别英雄数量
  SELECT
    publisher_id,
    gender_id,
    COUNT(gender_id) AS number
  FROM superhero
  GROUP BY publisher_id, gender_id
)

-- 主查询：关联表，计算占比
SELECT
  pub.publisher_name AS 出版社,
  gen.gender AS 性别,
  gc.number AS 数量,
  ROUND(100 * gc.number / pc.total_sh, 2) AS 占比(%)
FROM gender_count AS gc
INNER JOIN pub_count AS pc ON gc.publisher_id = pc.publisher_id
INNER JOIN publisher AS pub ON gc.publisher_id = pub.id
INNER JOIN gender AS gen ON gc.gender_id = gen.id
WHERE pub.publisher_name IN ('Marvel Comics', 'DC Comics')  # 筛选两大出版社
ORDER BY 出版社, 性别;
```

## 6. 关闭数据库连接

文档末尾关闭连接（释放资源，可选但推荐）。

```{r}
#| label: close-connection
#| include: false

DBI::dbDisconnect(con_flights)
DBI::dbDisconnect(con_superheroes)
```

## 六、第五步：运行与渲染 Quarto 文档
在 RStudio 中执行文档，生成包含 SQL 结果的 HTML 页面（支持查看表格、代码注释）。

### 1. 实时预览
1. 在 RStudio 中打开 `sql-notebook.qmd`；
2. 点击右上角「Render」按钮（或按 `Ctrl+Shift+K`）；
3. RStudio 会自动执行所有代码块，生成 HTML 文档，并在右侧预览窗口显示结果（如航空公司列表表格、航班延误统计等）。


### 2. 查看最终输出
渲染完成后，在 `D:\Quarto-SQL-Notebook` 路径下会生成：
- `sql-notebook.html`：最终文档（用浏览器打开可查看完整样式，表格会继承网页 CSS 风格）；
- 若选择 `format: pdf`，需安装 LaTeX（如 TinyTeX），会生成 PDF 文档（表格为 LaTeX 格式）。


## 七、关键注意事项（基于网页补充 Windows 细节）
1. **路径问题**：Windows 下路径需用 `/` 或 `\\`（如 `D:/data/db.db` 或 `D:\\data\\db.db`），避免直接用 `D:\data\db.db`（转义字符冲突）；
2. **SQL 代码块限制**：
   - 必须指定 `connection` 参数（否则无法执行）；
   - 单个代码块内多个 SQL 查询（用分号分隔），仅最后一个查询的结果会显示；
   - 不支持 `duckdb` 的「点命令」（如 `.tables`，需用 `SHOW TABLES` 替代）；
3. **多连接管理**：可同时连接多个数据库（如 `con_flights` 和 `con_superheroes`），但每个 SQL 代码块仅能关联一个连接；
4. **数据只读**：首次导入数据后，将 `read_only` 设为 `TRUE`，避免误删/改数据（网页推荐做法）；
5. **包版本兼容**：确保 `duckdb` 包版本 ≥1.0.0（网页提到 2024 年 6 月发布 1.0.0，可通过 `packageVersion("duckdb")` 查看，旧版本需用 `update.packages("duckdb")` 更新）。


## 八、扩展：若需用其他数据库（非 duckdb）
网页以 `duckdb` 为例，Windows 下支持其他数据库（如 MySQL、PostgreSQL），只需替换「数据库驱动」和「连接代码」：

| 数据库       | R 驱动包       | 连接代码示例（替换 duckdb 部分）                                                                 |
|--------------|----------------|--------------------------------------------------------------------------------------------------|
| MySQL        | `RMySQL`       | `con <- DBI::dbConnect(RMySQL::MySQL(), dbname="mydb", host="localhost", user="root", password="123456")` |
| PostgreSQL   | `RPostgres`    | `con <- DBI::dbConnect(RPostgres::Postgres(), dbname="mydb", host="localhost", user="postgres", password="123456")` |
| SQL Server   | `odbc`         | 需先配置 ODBC 数据源，再用 `con <- DBI::dbConnect(odbc::odbc(), dsn="my-sqlserver-dsn")`         |

安装对应驱动包（如 `install.packages("RMySQL")`）后，即可复用上述 Quarto 文档结构，仅需修改 `setup-db-connection` 代码块的连接逻辑。

[GitHub -interactive-sql: 一个用于交互式运行 SQL 示例的 Quarto 扩展](https://github.com/shafayetShafee/interactive-sql)

使用 `interactive-sql` 扩展是 Quarto 中运行交互式 SQL 更简便的方式 —— 它无需依赖 R/Python 作为宿主环境，也无需手动编写数据库连接代码，仅通过 **Quarto 扩展配置** + **SQL 代码块** 即可实现，且支持浏览器端实时编辑、运行 SQL 并查看结果，完全贴合示例网页（[https://shafayetshafee.github.io/interactive-sql/example.html](https://shafayetshafee.github.io/interactive-sql/example.html)）的交互体验。

以下是基于该扩展的 **Windows/macOS/Linux 通用操作指南**，步骤极简，核心是 “安装扩展→配置文档→写 SQL” 三步。

## 一、核心优势：为什么它更简便？

对比之前依赖 R/Python + `DBI`/`SQLAlchemy` 的方式，`interactive-sql` 扩展的简化点在于：

1. **无宿主语言依赖**：无需安装 R/Python 或相关数据库包（如 `DBI`、`pandas`）；
2. **配置极简**：仅需在 Quarto 文档的 YAML 中声明数据库和扩展，无需写连接代码；
3. **原生交互**：代码块自带 “运行” 按钮，支持实时编辑 SQL（或锁定不可编辑），结果即时以表格显示；
4. **支持远程 / 本地数据库**：可直接引用远程 SQL 脚本（如示例中的 HR 数据库）或本地 SQLite 文件。

## 二、第一步：安装 `interactive-sql` 扩展

Quarto 扩展安装仅需 1 条命令，所有系统通用：

1. 打开终端（Windows 用 cmd 或 PowerShell，macOS/Linux 用终端）；
2. 输入以下命令，按回车执行（自动下载扩展到当前目录的 `_extensions` 文件夹）： 

```bash
quarto add shafayetShafee/interactive-sql
```

3. 执行过程中会提示 “是否确认安装”，输入 `y` 即可。

## 三、第二步：编写 Quarto 文档（核心配置 + SQL 代码块）

创建一个 `.qmd` 文件（如 `interactive-sql-demo.qmd`），核心包含 **YAML 配置** 和 **交互式 SQL 代码块**，直接参考示例网页的 HR 数据库案例。

### 1. 完整文档代码（可直接复制使用）

````markdown
---
title: "Quarto 交互式 SQL 示例（用 interactive-sql 扩展）"
author: "Your Name"
date: last-modified
format: html  # 仅支持 HTML 格式（交互功能依赖网页）
code-tools: true  # 显示“查看源代码”按钮（如示例网页）
filters:
  - interactive-sql  # 启用扩展（必须添加）
databases:
  # 配置数据库1：可编辑的 HR 数据库（引用远程 SQL 脚本）
  - name: hr  # 数据库名称（后续代码块需用这个名字）
    path: "https://raw.githubusercontent.com/shafayetShafee/interactive-sql/main/hr.sql"  # 远程 SQL 脚本路径（自动创建 SQLite 数据库）
    editable: true  # 允许编辑 SQL 代码块（默认 true，可省略）
  
  # 配置数据库2：不可编辑的 HR 数据库（同个脚本，仅权限不同）
  - name: hr-not-editable  # 另一个数据库名称（区分可编辑/不可编辑）
    path: "https://raw.githubusercontent.com/shafayetShafee/interactive-sql/main/hr.sql"  # 复用同一个 SQL 脚本
    editable: false  # 禁止编辑 SQL 代码块（只能运行）
---

## 1. HR 数据库说明
使用示例网页中的 **HR 样本数据库**（管理小企业人力资源数据），数据库结构如图：
![HR 数据库 ER 图](https://raw.githubusercontent.com/shafayetShafee/interactive-sql/main/hr-SQL-Sample-Database-Schema.png){width=80%}

## 2. 可编辑 SQL 示例
代码块可修改（如改表名、加筛选条件），点击「Run」按钮实时查看结果：
```{.sql .interactive .hr}
-- 查看 regions 表所有数据（可修改此 SQL，比如改为 SELECT * FROM countries;）
select * from regions;
````

## 3. 不可编辑 SQL 示例

代码块锁定（无法修改），仅支持点击「Run」按钮执行预设查询：

```{.sql}
-- 查看 employees 表前 5 行数据（无法编辑，只能运行）
select * from employees limit 5;
```

## 4. 进阶查询示例（自定义）

基于 HR 数据库的关联查询，可编辑并运行：

```{.sql
-- 关联 departments 和 locations 表，查看部门名称及所在城市
select d.department_name, l.city 
from departments d
join locations l on d.location_id = l.location_id
order by d.department_name;
```
### 2. 关键配置说明（YAML 部分）
| 配置项          | 作用                                                                 |
|-----------------|----------------------------------------------------------------------|
| `filters: - interactive-sql` | 启用扩展，必须添加，否则交互式功能无效                               |
| `databases`     | 配置数据库列表，支持多个数据库                                       |
| `name`          | 数据库唯一标识（自定义），后续 SQL 代码块需通过类名 `.name` 关联     |
| `path`          | SQL 脚本路径（本地文件或远程 URL）：<br>- 远程：直接引用 URL（如示例的 HR 脚本）；<br>- 本地：写相对路径（如 `./data/hr.sql`，需提前准备 SQLite 脚本或二进制文件） |
| `editable`      | 控制 SQL 代码块是否可编辑：`true`（默认，可改）/ `false`（仅运行）  |


### 3. SQL 代码块规则
每个交互式 SQL 代码块必须满足 3 个条件：
1. 语言声明：`{.sql}`（指定代码块为 SQL 类型）；
2. 交互类：`.interactive`（启用扩展的交互功能）；
3. 数据库关联：`.数据库名`（如 `.hr` 或 `.hr-not-editable`，对应 YAML 中 `databases` 的 `name`）。


## 四、第三步：运行与预览
1. 保存 `.qmd` 文件（如 `interactive-sql-demo.qmd`）；
2. 打开终端，进入文件所在目录，执行渲染命令：
```bash
quarto render interactive-sql-demo.qmd --to html
```

3. 渲染完成后，会生成 `interactive-sql-demo.html` 文件，用浏览器打开即可看到：
    - 可编辑代码块：有「Run」按钮，可修改 SQL 后重新运行；
    - 不可编辑代码块：仅「Run」按钮可用，代码无法修改；
    - 结果表格：运行后自动显示查询结果，支持分页（如示例网页）。

## 五、常见场景扩展

### 1. 使用本地 SQLite 数据库

如果不想用远程脚本，可直接关联本地 SQLite 文件（`.db`）：

1. 准备本地 SQLite 文件（如 `./data/mydb.db`）；
2. 在 YAML 中配置：
 ```yaml
 databases:
    - name: my-local-db
    path: "./data/mydb.db"  # 本地 SQLite 二进制文件路径
    editable: true
 ```
    
3. 编写代码块：

```{.sql .interactive .my-local-db}
    select * from 你的表名 limit 10;
```
    

### 2. 多个数据库切换

在 YAML 中配置多个数据库，代码块分别关联即可：

```yaml
databases:
  - name: hr  # 第一个数据库
    path: "https://xxx/hr.sql"
  - name: sales  # 第二个数据库
    path: "./data/sales.db"
```


```
# 关联 hr 数据库
{.sql.interactive.hr}
select * from regions;

# 关联 sales 数据库
{.sql .interactive .sales}
select * from orders;
```

## 六、注意事项（避坑指南）

1. **仅支持 HTML 格式**：扩展的交互功能依赖网页技术，无法渲染为 PDF、Docx（这些格式会显示静态 SQL，无交互）；
2. **禁止 `embed-resources` 选项**：如果在 YAML 中添加 `embed-resources: true`（嵌入资源到 HTML），会导致 SQL 无法运行（扩展官方明确说明的局限性）；
3. **数据库类型限制**：仅支持 SQLite 数据库（扩展基于 `sqlime` 实现，`sqlime` 仅支持 SQLite），不支持 MySQL、PostgreSQL 等；
4. **网络依赖（远程脚本）**：如果 `path` 用远程 URL，渲染和运行时需联网（首次加载会下载 SQL 脚本）。

## 七、对比：`interactive-sql` 扩展 vs 传统方式

| 维度      | `interactive-sql` 扩展 | 传统方式（R/Python + DBI/SQLAlchemy） |
| ------- | -------------------- | ------------------------------- |
| 依赖环境    | 仅 Quarto             | Quarto + R/Python + 数据库包        |
| 配置复杂度   | 极简（YAML 3-5 行）       | 需写连接代码（10+ 行）                   |
| 交互性     | 浏览器原生支持（编辑 / 运行按钮）   | 需开启 `#interactive: true` + 配置控件 |
| 支持数据库类型 | 仅 SQLite             | 支持 MySQL、PostgreSQL、SQLite 等    |
| 适用场景    | 快速演示、轻量分析、教学         | 复杂数据分析（需联动 R/Python 绘图）         |

如果你的需求是 **快速实现交互式 SQL 演示 / 查询**，`interactive-sql` 扩展是最优解；如果需要 **复杂数据处理（如 SQL 结果联动绘图）**，则仍需用传统的 R/Python 宿主环境方式。