---
{"dg-publish":true,"dg-permalink":"program/quarto","permalink":"/program/quarto/","metatags":{"description":"An open source technical publishing system for creating beautiful articles, websites, blogs, books, slides, and more. Supports Python, R, Julia, and JavaScript.","og:site_name":"DavonOs","og:title":"Quarto","og:type":"article","og:url":"https://zuji.eu.org/program/quarto","og:image":null,"og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"dgShowInlineTitle":true,"dg-note-properties":{"tags":null}}
---

## 1. Quarto 简介

[Quarto](https://quarto.org/) 是一个开源的技术出版系统，用于创建精美的文章、网站、博客、书籍、幻灯片等。支持 Python、R、Julia 和 JavaScript 等多种编程语言。

## 2. 安装与配置

### 2.1 基础安装

#### Windows 安装步骤：
1. 访问 [Quarto 官网下载页](https://quarto.org/docs/get-started/)
2. 下载对应系统的 `.msi` 安装包（32/64 位，建议 64 位）
3. 双击安装，勾选「Add Quarto to PATH」
4. 验证安装：打开 cmd，输入 `quarto --version`，显示版本号即安装成功

### 2.2 VS Code 配置问题解决

在 VS Code 中已安装 Quarto 插件但仍提示 `"Quarto 未安装"`，通常是因为 VS Code 未正确识别系统中的 Quarto 路径。解决方法：

#### 1. 重启 VS Code
最直接的方法，完全关闭 VS Code（包括所有窗口），重新启动后再尝试新建 Quarto 项目。

#### 2. 手动指定 Quarto 路径
1. 打开 VS Code，点击左侧「扩展」图标（或按 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>）
2. 找到已安装的「Quarto」插件，点击「设置」（齿轮图标）
3. 在插件设置中，找到「Quarto: Path」选项，添加配置：
   ```
   "D:\\quarto\\bin\\quarto.exe"
   ```
   （注意 Windows 路径需用双反斜杠 `\\`，或单斜杠 `/`）
4. 保存设置后，重启 VS Code 生效。

#### 3. 检查 VS Code 的运行权限
若 Quarto 安装在非系统盘（如 `D:` 盘），可能存在权限问题：
- 右键 VS Code 快捷方式，选择「以管理员身份运行」
- 再测试是否能识别 Quarto

## 3. Quarto SQL 笔记本（Windows 完整实现）

### 3.1 核心前提

Quarto 的 SQL 支持源于 `knitr` 引擎（继承自 R Markdown），而 Python 的 Jupyter 引擎暂不支持 SQL 代码块。因此，Windows 下需以 R 为宿主环境，搭配轻量级数据库 `duckdb`（开源、高效、无需服务端），实现 SQL 交互式运行与文档生成。

### 3.2 环境准备

#### 3.2.1 安装 R 与 RStudio
1. 安装 R：
   - 访问 [R 官网下载页](https://cran.r-project.org/bin/windows/base/)
   - 下载最新版 `.exe` 安装包
   - 双击安装，默认路径即可，勾选「Add R to PATH」
2. 安装 RStudio（推荐）：
   - 访问 [RStudio 官网下载页](https://posit.co/download/rstudio-desktop/)
   - 下载 Windows 版免费版
   - 双击安装，默认路径即可

#### 3.2.2 安装 duckdb 数据库
1. 访问 [duckdb 官网下载页](https://duckdb.org/docs/installation/index.html#windows)
2. 下载 Windows 版压缩包
3. 解压到自定义路径（如 `D:\duckdb`）
4. 将该路径添加到 Windows 环境变量「PATH」
5. 验证：打开 cmd，输入 `duckdb --version`，显示版本号即安装成功

#### 3.2.3 安装 R 依赖包
在 RStudio 控制台执行：
```r
# 安装核心包
install.packages(c("DBI", "duckdb", "dbplyr", "nycflights13", "dplyr"))

# 加载包（验证安装）
library(DBI)
library(duckdb)
library(dbplyr)
library(nycflights13)
library(dplyr)
```

### 3.3 数据准备

#### 3.3.1 创建数据文件夹
新建文件夹（如 `D:\Quarto-SQL-Notebook`），在该文件夹内创建 `data` 子文件夹。

#### 3.3.2 导入纽约航班数据（nycflights13）
在 RStudio 控制台执行：
```r
# 连接（或创建）flights.db 数据库
con_flights <- DBI::dbConnect(
  drv = duckdb::duckdb(),
  dbdir = "D:/Quarto-SQL-Notebook/data/flights.db",
  read_only = FALSE
)

# 将 nycflights13 包的表写入 duckdb
dbWriteTable(con_flights, "flights", nycflights13::flights)
dbWriteTable(con_flights, "airlines", nycflights13::airlines)
dbWriteTable(con_flights, "airports", nycflights13::airports)
dbWriteTable(con_flights, "planes", nycflights13::planes)
dbWriteTable(con_flights, "weather", nycflights13::weather)

# 关闭连接
DBI::dbDisconnect(con_flights)
```

#### 3.3.3 导入超级英雄数据
1. 下载数据集：访问 [https://github.com/danielroelfs/superhero-db](https://github.com/danielroelfs/superhero-db)，下载 ZIP 并解压
2. 在 RStudio 控制台执行：
```r
# 连接（或创建）superheroes.db 数据库
con_superheroes <- DBI::dbConnect(
  drv = duckdb::duckdb(),
  dbdir = "D:/Quarto-SQL-Notebook/data/superheroes.db",
  read_only = FALSE
)

# 读取并写入数据库
superheroes_data <- read.csv("D:/Quarto-SQL-Notebook/data/superheroes.csv", stringsAsFactors = FALSE)
dbWriteTable(con_superheroes, "superhero", superheroes_data)

# 关闭连接
DBI::dbDisconnect(con_superheroes)
```

### 3.4 编写 Quarto 文档

#### 3.4.1 创建 Quarto 文档
1. 打开 RStudio：「File」→「New File」→「Quarto Document」
2. 选择「Blank」模板，设置文件名（如 `sql-notebook.qmd`）
3. 保存到 `D:\Quarto-SQL-Notebook` 路径下

#### 3.4.2 Quarto 文档示例
```markdown
---
title: "SQL Notebook with Quarto (Windows)"
author: "Your Name"
date: "YYYY-MM-DD"
format: html
---

## 初始化数据库连接
```{r}
#| label: setup-db-connection
#| include: false
library(DBI)
library(duckdb)

# 连接 flights.db
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
```

## SQL 示例 1：查看航空公司列表
```sql
#| label: query-airlines
#| connection: con_flights
#| echo: true
#| title: 航空公司列表（前10条）

SELECT name, carrier FROM airlines LIMIT 10;
```

## SQL 示例 2：查看超级英雄数据库的所有表
```sql
#| label: query-superhero-tables
#| connection: con_superheroes
#| echo: false
#| title: 超级英雄数据库的所有表

SHOW TABLES;
```

## SQL 示例 3：计算航班平均延误时间
```sql
#| label: query-flight-delay
#| connection: con_flights
#| title: 各航空公司航班平均延误时间

SELECT
  airlines.name AS 航空公司,
  ROUND(MEAN(flights.dep_delay), 2) AS 平均延误分钟,
  ROUND(STDDEV(flights.dep_delay) / SQRT(COUNT(1)), 2) AS 延误标准误
FROM flights
INNER JOIN airlines ON flights.carrier = airlines.carrier
GROUP BY airlines.name
ORDER BY 平均延误分钟 DESC;
```

## SQL 示例 4：超级英雄性别比例
```sql
#| label: query-superhero-gender
#| connection: con_superheroes
#| title: Marvel/DC 超级英雄性别比例

WITH pub_count AS (
  SELECT
    publisher_id,
    COUNT(publisher_id) AS total_sh
  FROM superhero
  GROUP BY publisher_id
),
gender_count AS (
  SELECT
    publisher_id,
    gender_id,
    COUNT(gender_id) AS number
  FROM superhero
  GROUP BY publisher_id, gender_id
)

SELECT
  pub.publisher_name AS 出版社,
  gen.gender AS 性别,
  gc.number AS 数量,
  ROUND(100 * gc.number / pc.total_sh, 2) AS 占比(%)
FROM gender_count AS gc
INNER JOIN pub_count AS pc ON gc.publisher_id = pc.publisher_id
INNER JOIN publisher AS pub ON gc.publisher_id = pub.id
INNER JOIN gender AS gen ON gc.gender_id = gen.id
WHERE pub.publisher_name IN ('Marvel Comics', 'DC Comics')
ORDER BY 出版社, 性别;
```

## 关闭数据库连接
```{r}
#| label: close-connection
#| include: false

DBI::dbDisconnect(con_flights)
DBI::dbDisconnect(con_superheroes)
```

### 3.5 运行与渲染

1. 在 RStudio 中打开 `sql-notebook.qmd`
2. 点击右上角「Render」按钮（或按 `Ctrl+Shift+K`）
3. RStudio 会自动执行所有代码块，生成 HTML 文档
4. 在 `D:\Quarto-SQL-Notebook` 路径下会生成 `sql-notebook.html` 文件

### 3.6 关键注意事项

1. **路径问题**：Windows 下路径需用 `/` 或 `\\`，避免直接用 `D:\data\db.db`（转义字符冲突）
2. **SQL 代码块限制**：
   - 必须指定 `connection` 参数
   - 单个代码块内多个 SQL 查询（用分号分隔），仅最后一个查询的结果会显示
   - 不支持 `duckdb` 的「点命令」（如 `.tables`，需用 `SHOW TABLES` 替代）
3. **多连接管理**：可同时连接多个数据库，但每个 SQL 代码块仅能关联一个连接
4. **数据只读**：首次导入数据后，将 `read_only` 设为 `TRUE`，避免误删/改数据
5. **包版本兼容**：确保 `duckdb` 包版本 ≥1.0.0

### 3.7 扩展：使用其他数据库

| 数据库       | R 驱动包       | 连接代码示例 |
|--------------|----------------|--------------|
| MySQL        | `RMySQL`       | `con <- DBI::dbConnect(RMySQL::MySQL(), dbname="mydb", host="localhost", user="root", password="123456")` |
| PostgreSQL   | `RPostgres`    | `con <- DBI::dbConnect(RPostgres::Postgres(), dbname="mydb", host="localhost", user="postgres", password="123456")` |
| SQL Server   | `odbc`         | `con <- DBI::dbConnect(odbc::odbc(), dsn="my-sqlserver-dsn")` |

## 4. 从 DigitalGarden 迁移到 Quarto

### 4.1 YAML 适配转换

#### 版本 1：最简版（推荐新手 / 批量快速转换）
```yaml
---
# 🔹 Quarto 基础必填（可自定义）
title: "利用 Python 进行数据分析 (原书第3版)"
date: "2025-09-15"
modified: "2025-09-17"
tags: [program/python]

# 🔹 保留 DigitalGarden 原自定义链接
permalink: books/36632126/Preliminaries

# 🔹 保留原SEO描述
description: "本书第 1 版出版于 2012 年...非常适合刚开始学习 Python 的数据分析师..."

# 🔹 输出格式（html/pdf/docx 任选）
format: html
---
```

#### 版本 2：完整网站版（保留所有 OG / 封面图）
```yaml
---
title: "利用 Python 进行数据分析 (原书第3版)"
date: "2025-09-15 16:42"
modified: "2025-09-17 15:19"
tags: [program/python]
permalink: books/36632126/Preliminaries
description: "本书第 1 版出版于 2012 年...非常适合刚开始学习 Python 的数据分析师..."

# 🔹 社交分享配置
opengraph:
  site_name: DavonOs
  type: book
  image: https://i-blog.csdnimg.cn/direct/a36631c7292b546cc8982429c96df4bb4.png
  image_alt: bookcover

# 🔹 网页格式配置
format:
  html:
    toc: true
---
```

#### 版本 3：书籍 / PDF / 文档版
```yaml
---
title: "利用 Python 进行数据分析 (原书第3版)"
author: "Wes McKinney"
date: "2025-09-15"
tags: [program/python]
description: "Python 数据分析经典书籍笔记"

# 输出为 PDF / Word
format:
  pdf:
    toc: true
    number-sections: true
---
```

### 4.2 批量处理方案

#### 方法 1：VS Code 正则替换
1. 用 VS Code 打开 Obsidian 笔记文件夹
2. 按 `Ctrl+Shift+H` 打开全局替换
3. 批量删除无用的 dg 字段：
   - **查找**：`dg-publish: true|dg-show-inline-title: true|dg-metatags:\n|og:.*`
   - **替换为**：（空）
4. 批量替换时间：
   - `dg-created:` → `date:`
   - `dg-updated:` → `modified:`

#### 方法 2：Python 批量脚本
```python
import re
from pathlib import Path

# 👉 配置你的笔记文件夹路径
OBSIDIAN_FOLDER = Path("/你的Obsidian仓库路径")

# 要删除的 dg 字段
REMOVE_FIELDS = [
    r"dg-publish:.*",
    r"dg-show-inline-title:.*",
    r"dg-metatags:",
    r"og:.*"
]
remove_pattern = re.compile("|".join(REMOVE_FIELDS), re.MULTILINE)

# 批量处理所有 md/qmd 文件
for file in OBSIDIAN_FOLDER.rglob("*.md") + OBSIDIAN_FOLDER.rglob("*.qmd"):
    content = file.read_text(encoding="utf-8")
    
    # 1. 删除无用字段
    content = remove_pattern.sub("", content)
    # 2. 替换时间字段
    content = content.replace("dg-created:", "date:")
    content = content.replace("dg-updated:", "modified:")
    # 3. 清理空行
    content = re.sub(r"\n{3,}", "\n\n", content)
    
    file.write_text(content, encoding="utf-8")
    print(f"已处理: {file.name}")
```

### 4.3 关键补充说明

1. **文件后缀**：把 `.md` 重命名为 `.qmd` 即可（Quarto 原生支持）
2. **冗余字段问题**：哪怕保留 `dg-*` 字段，Quarto 也会直接忽略，完全不影响渲染
3. **全局配置**：把通用配置（如 `format: html`）写在项目根目录 `_quarto.yml`，所有文档无需重复写

## 5. Quarto 网站项目高级配置

### 5.1 自定义 URL 路径

#### 结论速览
Quarto 核心网页项目目前**不支持直接通过 `slug` 参数**自定义 URL 路径；但可通过**文件 / 目录命名**、** `aliases` 别名配置**实现类似效果，且**Quarto Pub 站点**支持修改整体 slug。

#### 官方支持状态
1. **普通网页项目**：尚未实现原生 `slug` 参数支持（截至 2026 年 4 月）
2. **Quarto Pub 站点**：支持修改整个站点的 slug（URL 路径）

### 5.2 自定义 URL 路径的替代方案

#### 方案 1：文件与目录结构命名（最直接）

| 文件结构 | 生成 URL | 说明 |
|---------|---------|------|
| `about.qmd` | `/about.html` | 基础文件生成对应 HTML 文件 URL |
| `about/index.qmd` | `/about/` | 目录 + index.qmd 生成 "漂亮 URL"（无.html 后缀） |
| `posts/2026-04-10-my-post.qmd` | `/posts/2026-04-10-my-post.html` | 博客文章常见命名方式 |

**操作步骤**：
1. 按所需 URL 结构组织文件和目录
2. 目录内使用 `index.qmd` 作为入口文件
3. 运行 `quarto render` 自动生成对应 URL 结构

#### 方案 2：`aliases` 别名配置（灵活重定向）

**配置方式（文档前置元数据）**：
```yaml
---
title: "我的自定义页面"
aliases:
  - /custom-slug/  # 主自定义 URL
  - /old-page-url.html  # 旧 URL 重定向
---
```

**配置方式（`_quarto.yml` 全局设置）**：
```yaml
website:
  pages:
    - href: about.qmd
      aliases: [/about-us/, /company-info/]
```

**工作原理**：
- 访问别名 URL 会自动重定向到原页面
- 原页面 URL 依然有效
- 适合 URL 重构、SEO 优化和保持旧链接有效性

#### 方案 3：Quarto Pub 站点 slug 修改
```bash
# 发布到 Quarto Pub 后
quarto pub list  # 查看已发布站点
# 访问 https://quartopub.com 管理界面修改 slug
```

### 5.3 最佳实践建议

1. **新项目规划**：优先使用 "目录 + index.qmd" 结构，直接控制 URL 路径
2. **URL 重构**：使用 `aliases` 保留旧 URL，避免 404 错误，提升 SEO 表现
3. **Quarto Pub 站点**：发布后通过管理界面设置简洁 slug，提升 URL 可读性
4. **SEO 优化**：确保 `_quarto.yml` 中 `site-url` 与自定义域名一致
   ```yaml
   website:
     site-url: https://yourcustomdomain.com
   ```

### 5.4 权威资料来源

| 功能 | 官方文档链接 | 核心说明 |
|------|------------|---------|
| URL 结构与导航 | [https://quarto.org/docs/websites/website-navigation.html](https://quarto.org/docs/websites/website-navigation.html) | 解释 URL 生成规则和 `aliases` 用法 |
| `aliases` 参数 | [https://quarto.org/docs/reference/formats/html.html](https://quarto.org/docs/reference/formats/html.html) | HTML 格式中 `aliases` 的官方定义 |
| Quarto Pub 管理 | [https://quarto.org/docs/publishing/quarto-pub](https://quarto.org/docs/publishing/quarto-pub) | 站点 slug 修改和管理说明 |
| slug 功能请求 | [https://github.com/quarto-dev/quarto-cli/issues/6422](https://github.com/quarto-dev/quarto-cli/issues/6422) | 官方确认此功能尚未实现 |
| URL 美化讨论 | [https://github.com/quarto-dev/quarto-cli/issues/2065](https://github.com/quarto-dev/quarto-cli/issues/2065) | 官方推荐目录 + index.qmd 方案 |