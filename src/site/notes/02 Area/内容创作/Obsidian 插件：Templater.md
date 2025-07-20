---
{"dg-publish":true,"dg-permalink":"Obsidian/Templater","permalink":"/Obsidian/Templater/","metatags":{"description":"","og:site_name":"DavonOs","og:title":"Obsidian 插件：Templater","og:type":"article","og:url":"https://zuji.eu.org/Obsidian/Templater","og:image":null,"og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"dgShowInlineTitle":true,"created":"2025-07-13 19:37","updated":"2025-07-17 12:56"}
---


[Templater](https://github.com/SilentVoid13/Templater) 是一种模板语言，允许你将**变量**和**函数**结果插入到你的笔记中。它还可以让你执行 JavaScript 代码来操作这些变量和函数。

参照 [Templater 文档](https://silentvoid13.github.io/Templater/)，你将能够创建强大的模板来自动化手动任务。

快速示例

使用 Templater 语法的以下模板文件：

```markdown
---
creation date: <% tp.file.creation_date() %>
modification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
---
<< [[<% tp.date.now("YYYY-MM-DD", -1) %>]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>]] >>

# <% tp.file.title %>

<% tp.web.daily_quote() %>
```

插入后将生成以下结果：

```markdown
---
creation date: 2021-01-07 17:20
modification date: Thursday 7th January 2021 17:20:43
---

<< [[2021-04-08]] | [[2021-04-10]] >>

# Test Test

> Do the best you can until you know better. Then when you know better, do better.
> &mdash; <cite>Maya Angelou</cite>
```

## 术语

要了解 Templater 的工作原理，让我们定义几个术语：

- **模板**是一个包含命令的文件。
- 一个以开启标签 <\% 开头，以关闭标签 %\>结尾的文本片段，我们将称之为**命令**。
- 一个**函数**是一个我们可以在命令中调用并返回值（替换字符串）的对象

有两种类型的函数可以使用：

- 内部函数。它们是插件内置的预定义函数。例如， tp.date.now 是一个内部函数，它将返回当前日期。

- 用户函数。用户可以定义自己的函数。它们是系统命令或用户脚本。

示例

以下模板包含 2 个命令，调用 2 个不同的内部函数：
```
Yesterday: <% tp.date.yesterday("YYYY-MM-DD") %>
Tomorrow: <% tp.date.tomorrow("YYYY-MM-DD") %>
```

在下一部分，我们将看到编写某些命令所需的语法。

## 语法

Templater 使用自定义模板引擎（[rusty_engine](https://github.com/SilentVoid13/rusty_engine)）的语法来声明命令。你可能需要一点时间来适应它，但一旦你理解了它的概念，语法并不难。

Templater 的所有功能都是 JavaScript 对象，它们通过**命令**来调用。

### 命令语法

一个命令必须同时具有一个开始标签 <\% 和一个结束标签 %\> 。

使用 `tp.date.now` 内部函数的完整命令将是： `<% tp.date.now() %>`

### 函数语法

#### 对象层级 Objects hierarchy 
  
Templater 的所有函数，无论是内部函数还是用户函数，都可在 `tp` 对象下使用。可以说我们所有的函数都是 `tp` 对象的子对象。要访问对象的“子对象”，我们必须使用点表示法 `.`

这意味着一个 Templater 函数调用将始终以 `tp.<something>` 开始
#### 函数调用 Function invocation

要调用一个函数，我们需要使用特定于函数调用的语法：在函数名后添加一个开括号和一个闭括号。

例如，我们会使用 `tp.date.now()` 来调用 `tp.date.now` 内部函数。

函数可以有参数和可选参数。它们位于括号之间，如下所示：

`tp.date.now(arg1_value, arg2_value, arg3_value, ...)`

所有参数必须按正确顺序传递。

函数的参数可以有不同的**类型**。以下是一些可能的函数类型，但不详尽：

- 一个 `string` 类型意味着值必须放置在单引号或双引号（ `"value"` 或 `'value'` ）中
- 一个 `number` 类型表示值必须是整数（ `15` ， `-5` ， ...）
- 一个 `boolean` 类型表示值必须是 `true` 或 `false` （全部小写），不能是其他任何值。

调用函数时必须尊重参数的类型，否则它将无法工作。

#### 函数文档语法

Templater 内部函数的文档使用以下语法：

`tp.<my_function>(arg1_name: type, arg2_name?: type, arg3_name: type = <default_value>, arg4_name: type1|type2, ...)`

位置：

- `arg_name` 代表参数的**符号**名称，用于理解其含义。
- `type` 代表参数的预期类型。在调用内部函数时，必须遵守此类型，否则将抛出错误。

如果参数是可选的，它将以问号 `?` 结尾，例如 `arg2_name?: type`

如果一个参数有默认值，将使用等号 = 来指定，例如 `arg3_name: type = <default_value>` 。

如果一个参数可以有不同的类型，将使用管道 | 来指定，例如 `arg4_name: type1|type2`

>[!warning]+
>请注意，这种语法仅用于文档目的，以便理解函数期望的参数。
>
>你不应该在调用函数时指定参数的名称、类型或默认值，只需要提供参数的值。

以 `tp.date.now` 内部函数文档为例：

`tp.date.now(format?: string = "YYYY-MM-DD", offset?: number|string, reference?: string, reference_format?: string)`

这个内部函数有 4 个可选参数：

-  一个类型为 `string` 的格式，默认值为 `"YYYY-MM-DD"` 。
- 类型为 `number` 或类型为 `string` 的偏移量。
- 类型为 `string` 的引用。
- 类型为 `string` 的引用格式。

这意味着对此内部函数的有效调用是：

- `<% tp.date.now() %>`
- `<% tp.date.now("YYYY-MM-DD", 7) %>`
- `<% tp.date.now("YYYY-MM-DD", 7, "2021-04-09", "YYYY-MM-DD") %>`
- `<% tp.date.now("dddd, MMMM Do YYYY", 0, tp.file.title, "YYYY-MM-DD") %>` 
- `<% tp.date.now("dddd, MMMM Do YYYY", 0, tp.file.title, "YYYY-MM-DD") %>

另一方面，无效的调用是：
- `tp.date.now(format: string = "YYYY-MM-DD")`
- `tp.date.now(format: string = "YYYY-MM-DD", offset?: 0)`

## 设置

通用设置

- `Template folder location` ：此文件夹中的文件将可用作模板。
- `Syntax Highlighting on Desktop` 在编辑模式下为 Templater 命令添加语法高亮。
- `Syntax Highlighting on Mobile` 在移动端编辑模式下为 Templater 命令添加语法高亮。谨慎使用：这可能会在移动平台上破坏实时预览。”
- `Automatic jump to cursor` 在插入模板后自动触发 `tp.file.cursor` 。您还可以设置热键来手动触发 `tp.file.cursor` 。
- `Trigger Templater on new file creation` : Templater 将监听新文件创建事件，如果符合您设置的规则，将替换新文件内容中的所有命令。这使得 Templater 与其他插件（如每日笔记核心插件、日历插件、回顾插件、笔记重构插件等）兼容。
- 请确保在下方“文件夹模板”或“文件正则模板”中设置规则。
- 警告：如果您在创建时添加了未知/不安全内容的新文件，这可能会带来危险。确保每个新文件在创建时的内容都是安全的。”

模板快捷键

模板快捷键允许您将模板绑定到快捷键。

文件夹模板

>[!note]+
>此设置默认隐藏。要查看它，请首先启用 `Trigger Template on new file creation` 设置。并且由于它与文件正则模板互斥，启用其中一个将禁用另一个。

您可以使用 `Folder Templates` 功能指定一个模板，该模板将自动应用于选定文件夹及其子文件夹。将使用最深的匹配项，因此规则的顺序无关紧要。

如果您需要通配符，请为 " `/` " 添加一条规则。

文件正则模板

>[!note]+
>此设置默认隐藏。要查看它，首先需要启用 `Trigger Template on new file creation` 设置。由于它与文件夹模板互斥，启用其中一个将禁用另一个。

您可以指定正则表达式声明，用于测试新文件路径。如果正则表达式匹配，则将自动使用关联的模板。规则将按从上到下的顺序进行测试，第一个匹配项将被使用。

如果您需要通配符，请以规则 " `.*` " 结尾。

使用 [Regex101](https://regex101.com/) 等工具来验证您的正则表达式。

启动模板

启动模板是在 Templater 启动时执行一次的模板。这些模板不会输出任何内容。这可以用于设置模板，例如向 Obsidian 事件添加钩子。

用户脚本函数

All JavaScript files in this folder will be loaded as CommonJS modules, to import custom [user functions](https://silentvoid13.github.io/Templater/user-functions/overview.html).  
本文件夹中的所有 JavaScript 文件将作为 CommonJS 模块加载，以导入自定义用户函数。

The folder needs to be accessible from the vault.  
该文件夹需要可以从保险库访问。

请查阅[文档](https://silentvoid13.github.io/Templater/user-functions/script-user-functions.html)获取更多信息。

用户系统命令函数

Allows you to create [user functions](https://silentvoid13.github.io/Templater/user-functions/overview.html) linked to system commands.  
允许您创建与系统命令关联的用户函数。

Check the [documentation](https://silentvoid13.github.io/Templater/user-functions/system-user-functions.html) for more information.  
查阅文档获取更多信息。

**Warning:** It can be dangerous to execute arbitrary system commands from untrusted sources. Only run system commands that you understand, from trusted sources.  
警告：从不可信来源执行任意系统命令可能很危险。仅从可信来源运行您理解的系统命令。

## 常见问题


[在 Windows 上 Unicode 字符（表情符号、...）无法工作吗？](https://silentvoid13.github.io/Templater/faq.html#unicode-characters-emojis--are-not-working-on-windows-)

在 Windows 上 `cmd.exe` 和 `powershell` 已知与 Unicode 字符存在问题。

您可以查看 https://github.com/SilentVoid13/Templater/issues/15#issuecomment-824067020 获取解决方案。

Another good solution (probably the best) is to use and set it as the default shell in Templater's setting.  
另一个不错的解决方案（可能是最好的）是使用 [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701) 并将其设置为 Templater 设置中的默认 shell。

另一个可能对你有用的解决方案资源：[https://stackoverflow.com/questions/49476326/displaying-unicode-in-powershell](https://stackoverflow.com/questions/49476326/displaying-unicode-in-powershell)  


# 内部函数

Templater 提供的不同内部变量和函数分布在不同的**模块**下，以便分类。现有的**内部模块**有：

- [App module](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/app-module.html): `tp.app`
- [Config module](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/config-module.html): `tp.config`
- [Date module](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html): `tp.date`
- [File module](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html): `tp.file`
- [Frontmatter module](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/frontmatter-module.html): `tp.frontmatter`
- [Hooks module](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/hooks-module.html): `tp.hooks`
- [Obsidian module](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/obsidian-module.html): `tp.obsidian`
- [System module](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html): `tp.system`
- [Web module](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html): `tp.web`

如果你正确理解了[[02 Area/内容创作/Obsidian 插件：Templater#对象层级 Objects hierarchy\|对象层次结构]]，这意味着一个典型的内部函数调用看起来是这样的： `<% tp.<module_name>.<internal_function_name> %>`

贡献
我邀请大家通过添加新的内部函数来为这个插件开发做出贡献。更多信息请查看[这里](https://silentvoid13.github.io/Templater/internal-functions/contribute.html)。

App 模块

该模块暴露了应用实例。建议优先使用该模块而不是全局应用实例。

在编写脚本时，这主要是有用的。

有关更多信息，请参阅 Obsidian [开发者文档](https://docs.obsidian.md/Reference/TypeScript+API/App)。

示例
```templater
// Get all folders
<%
 tp.app.vault.getAllLoadedFiles() 
 .filter(x => x instanceof tp.obsidian.TFolder)
 .map(x => x.name)
%>

// Update frontmatter of existing file
<%*
const file = tp.file.find_tfile("path/to/file");
await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {   frontmatter["key"] = "value"; });
%>
```

# [Config Module  配置模块](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/config-module.html#config-module)

This module exposes Templater's running configuration.  
该模块暴露了 Templater 的运行配置。

This is mostly useful when writing scripts requiring some context information.  
这主要在编写需要一些上下文信息的脚本时有用。

- [Documentation  文档](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/config-module.html#documentation)
    - [`tp.config.active_file?`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/config-module.html#tpconfigactive_file)
    - [`tp.config.run_mode`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/config-module.html#tpconfigrun_mode)
    - [`tp.config.target_file`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/config-module.html#tpconfigtarget_file)
    - [`tp.config.template_file`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/config-module.html#tpconfigtemplate_file)

## [Documentation  文档](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/config-module.html#documentation)

### [`tp.config.active_file?`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/config-module.html#tpconfigactive_file)

The active file (if existing) when launching Templater.  
启动 Templater 时，活动文件（如果存在）。

### [`tp.config.run_mode`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/config-module.html#tpconfigrun_mode)

The `RunMode`, representing the way Templater was launched (Create new from template, Append to active file, ...).  
`RunMode` ，代表 Templater 的启动方式（从模板创建新文件、附加到活动文件等）。

### [`tp.config.target_file`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/config-module.html#tpconfigtarget_file)

The `TFile` object representing the target file where the template will be inserted.  
代表模板将被插入的目标文件的对象 `TFile` 。

### [`tp.config.template_file`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/config-module.html#tpconfigtemplate_file)

The `TFile` object representing the template file.  
代表模板文件的对象 `TFile` 。

# [Date Module  日期模块](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#date-module)

This module contains every internal function related to dates.  
该模块包含所有与日期相关的内部函数。

- [Documentation  文档](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#documentation)
    - [`tp.date.now(format: string = "YYYY-MM-DD", offset?: number⎮string, reference?: string, reference_format?: string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#tpdatenowformat-string--yyyy-mm-dd-offset-numberstring-reference-string-reference_format-string)
    - [`tp.date.tomorrow(format: string = "YYYY-MM-DD")`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#tpdatetomorrowformat-string--yyyy-mm-dd)
    - [`tp.date.weekday(format: string = "YYYY-MM-DD", weekday: number, reference?: string, reference_format?: string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#tpdateweekdayformat-string--yyyy-mm-dd-weekday-number-reference-string-reference_format-string)
    - [`tp.date.yesterday(format: string = "YYYY-MM-DD")`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#tpdateyesterdayformat-string--yyyy-mm-dd)
- [Moment.js](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#momentjs)
- [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#examples-5)

## [Documentation  文档](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#documentation)

Function documentation is using a specific syntax. More information [here](https://silentvoid13.github.io/Templater/syntax.html#function-documentation-syntax).  
函数文档使用特定的语法。更多信息在这里。

### [`tp.date.now(format: string = "YYYY-MM-DD", offset?: number⎮string, reference?: string, reference_format?: string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#tpdatenowformat-string--yyyy-mm-dd-offset-numberstring-reference-string-reference_format-string)

Retrieves the date.  获取日期。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#arguments)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).  
    `format` : 日期的格式。默认为 `"YYYY-MM-DD"` 。参考格式说明。
    
- `offset`: Duration to offset the date from. If a number is provided, duration will be added to the date in days. You can also specify the offset as a string using the ISO 8601 format.  
    `offset` : 从日期偏移的时间长度。如果提供数字，时间长度将以天为单位加到日期上。你也可以使用 ISO 8601 格式的字符串来指定偏移量。
    
- `reference`: The date referential, e.g. set this to the note's title.  
    `reference` : 日期参考，例如设置为笔记的标题。
    
- `reference_format`: The format for the reference date. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).  
    `reference_format` : 参考日期的格式。参考格式说明。
    

##### [Examples   示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#examples)

`// Date now <% tp.date.now() %> // Date now with format <% tp.date.now("Do MMMM YYYY") %> // Last week <% tp.date.now("YYYY-MM-DD", -7) %> // Next week <% tp.date.now("YYYY-MM-DD", 7) %> // Last month <% tp.date.now("YYYY-MM-DD", "P-1M") %> // Next year <% tp.date.now("YYYY-MM-DD", "P1Y") %> // File's title date + 1 day (tomorrow) <% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %> // File's title date - 1 day (yesterday) <% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>`

### [`tp.date.tomorrow(format: string = "YYYY-MM-DD")`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#tpdatetomorrowformat-string--yyyy-mm-dd)

Retrieves tomorrow's date.  
获取明天的日期。

##### [Arguments   参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#arguments-1)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).  
    `format` : 日期的格式。默认为 `"YYYY-MM-DD"` 。参考格式说明。

##### [Examples   示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#examples-1)

`// Date tomorrow <% tp.date.tomorrow() %> // Date tomorrow with format <% tp.date.tomorrow("Do MMMM YYYY") %>`

### [`tp.date.weekday(format: string = "YYYY-MM-DD", weekday: number, reference?: string, reference_format?: string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#tpdateweekdayformat-string--yyyy-mm-dd-weekday-number-reference-string-reference_format-string)

##### [Arguments   参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#arguments-2)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).  
    `format` : 日期的格式。默认为 `"YYYY-MM-DD"` 。参考格式说明。
    
- `weekday`: Week day number. If the locale assigns Monday as the first day of the week, `0` will be Monday, `-7` will be last week's day.  
    `weekday` : 星期几的数字。如果区域设置将星期一视为一周的第一天， `0` 将是星期一， `-7` 将是上周的星期几。
    
- `reference`: The date referential, e.g. set this to the note's title.  
    `reference` : 日期参照，例如将其设置为笔记的标题。
    
- `reference_format`: The format for the reference date. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).  
    `reference_format` : 参照日期的格式。参考格式说明。
    

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#examples-2)

`// This week's Monday <% tp.date.weekday("YYYY-MM-DD", 0) %> // Next Monday <% tp.date.weekday("YYYY-MM-DD", 7) %> // File's title Monday <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> // File's title previous Monday <% tp.date.weekday("YYYY-MM-DD", -7, tp.file.title, "YYYY-MM-DD") %>`

### [`tp.date.yesterday(format: string = "YYYY-MM-DD")`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#tpdateyesterdayformat-string--yyyy-mm-dd)

Retrieves yesterday's date.  
获取昨天的日期。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#arguments-3)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).  
    `format` : 日期的格式。默认为 `"YYYY-MM-DD"` 。参考格式说明。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#examples-3)

`// Date yesterday <% tp.date.yesterday() %> // Date yesterday with format <% tp.date.yesterday("Do MMMM YYYY") %>`

## [Moment.js](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#momentjs)

Templater gives you access to the `moment` object, with all of its functionalities.  
Templater 提供了对 `moment` 对象的访问，以及其所有功能。

More information on moment.js [here](https://momentjs.com/docs/#/displaying/).  
有关 moment.js 的更多信息，请查看此处。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#examples-4)

`// Date now <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %> // Get start of month from note title <% moment(tp.file.title, "YYYY-MM-DD").startOf("month").format("YYYY-MM-DD") %> // Get end of month from note title <% moment(tp.file.title, "YYYY-MM-DD").endOf("month").format("YYYY-MM-DD") %>`

## [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html#examples-5)

`// Date now <% tp.date.now() %> // Date now with format <% tp.date.now("Do MMMM YYYY") %> // Last week <% tp.date.now("YYYY-MM-DD", -7) %> // Next week <% tp.date.now("YYYY-MM-DD", 7) %> // Last month <% tp.date.now("YYYY-MM-DD", "P-1M") %> // Next year <% tp.date.now("YYYY-MM-DD", "P1Y") %> // File's title date + 1 day (tomorrow) <% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %> // File's title date - 1 day (yesterday) <% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>  // Date tomorrow <% tp.date.tomorrow() %> // Date tomorrow with format <% tp.date.tomorrow("Do MMMM YYYY") %>  // This week's Monday <% tp.date.weekday("YYYY-MM-DD", 0) %> // Next Monday <% tp.date.weekday("YYYY-MM-DD", 7) %> // File's title Monday <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> // File's title previous Monday <% tp.date.weekday("YYYY-MM-DD", -7, tp.file.title, "YYYY-MM-DD") %>  // Date yesterday <% tp.date.yesterday() %> // Date yesterday with format <% tp.date.yesterday("Do MMMM YYYY") %>`


# [File Module  文件模块](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#file-module)

This module contains every internal function related to files.  
该模块包含所有与文件相关的内部函数。

- [Documentation  文档](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#documentation)
    - [`tp.file.content`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilecontent)
    - [`tp.file.create_new(template: TFile ⎮ string, filename?: string, open_new: boolean = false, folder?: TFolder | string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilecreate_newtemplate-tfile--string-filename-string-open_new-boolean--false-folder-tfolder--string)
    - [`tp.file.creation_date(format: string = "YYYY-MM-DD HH:mm")`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilecreation_dateformat-string--yyyy-mm-dd-hhmm)
    - [`tp.file.cursor(order?: number)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilecursororder-number)
    - [`tp.file.cursor_append(content: string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilecursor_appendcontent-string)
    - [`tp.file.exists(filepath: string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfileexistsfilepath-string)
    - [`tp.file.find_tfile(filename: string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilefind_tfilefilename-string)
    - [`tp.file.folder(absolute: boolean = false)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilefolderabsolute-boolean--false)
    - [`tp.file.include(include_link: string ⎮ TFile)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfileincludeinclude_link-string--tfile)
    - [`tp.file.last_modified_date(format: string = "YYYY-MM-DD HH:mm")`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilelast_modified_dateformat-string--yyyy-mm-dd-hhmm)
    - [`tp.file.move(new_path: string, file_to_move?: TFile)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilemovenew_path-string-file_to_move-tfile)
    - [`tp.file.path(relative: boolean = false)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilepathrelative-boolean--false)
    - [`tp.file.rename(new_title: string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilerenamenew_title-string)
    - [`tp.file.selection()`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfileselection)
    - [`tp.file.tags`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfiletags)
    - [`tp.file.title`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfiletitle)
- [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-16)

## [Documentation  文档](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#documentation)

Function documentation is using a specific syntax. More information [here](https://silentvoid13.github.io/Templater/syntax.html#function-documentation-syntax).  
函数文档使用特定的语法。更多信息请参考此处。

### [`tp.file.content`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilecontent)

The string contents of the file at the time that Templater was executed. Manipulating this string will _not_ update the current file.  
Templater 执行时该文件的内容字符串。修改这个字符串不会更新当前文件。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples)

`// Retrieve file content <% tp.file.content %>`

### [`tp.file.create_new(template: TFile ⎮ string, filename?: string, open_new: boolean = false, folder?: TFolder | string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilecreate_newtemplate-tfile--string-filename-string-open_new-boolean--false-folder-tfolder--string)

Creates a new file using a specified template or with a specified content.  
使用指定的模板或指定内容创建新文件。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#arguments)

- `template`: Either the template used for the new file content, or the file content as a string. If it is the template to use, you retrieve it with `tp.file.find_tfile(TEMPLATENAME)`.  
    `template` : 新文件内容的模板，或作为字符串的文件内容。如果是要使用的模板，你可以用 `tp.file.find_tfile(TEMPLATENAME)` 获取它。
    
- `filename`: The filename of the new file, defaults to "Untitled".  
    `filename` : 新文件的文件名，默认为"未命名"。
    
- `open_new`: Whether to open or not the newly created file. Warning: if you use this option, since commands are executed asynchronously, the file can be opened first and then other commands are appended to that new file and not the previous file.  
    `open_new` : 是否打开新创建的文件。警告：如果你使用这个选项，由于命令是异步执行的，文件可能会先被打开，然后其他命令会被追加到这个新文件中，而不是之前的文件。
    
- `folder`: The folder to put the new file in, defaults to Obsidian's default location. If you want the file to appear in a different folder, specify it with `"PATH/TO/FOLDERNAME"` or `tp.app.vault.getAbstractFileByPath("PATH/TO/FOLDERNAME")`.  
    `folder` : 新文件存放的文件夹，默认为 Obsidian 的默认位置。如果你希望文件出现在不同的文件夹中，可以使用 `"PATH/TO/FOLDERNAME"` 或 `tp.app.vault.getAbstractFileByPath("PATH/TO/FOLDERNAME")` 指定。
    

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-1)

`// File creation <%* await tp.file.create_new("MyFileContent", "MyFilename") %> // File creation with template <%* await tp.file.create_new(tp.file.find_tfile("MyTemplate"), "MyFilename") %> // File creation and open created note <%* await tp.file.create_new("MyFileContent", "MyFilename", true) %> // File creation in current folder <%* await tp.file.create_new("MyFileContent", "MyFilename", false, tp.file.folder(true)) %> // File creation in specified folder with string path <%* await tp.file.create_new("MyFileContent", "MyFilename", false, "Path/To/MyFolder") %> // File creation in specified folder with TFolder <%* await tp.file.create_new("MyFileContent", "MyFilename", false, tp.app.vault.getAbstractFileByPath("MyFolder")) %> // File creation and append link to current note [[<% (await tp.file.create_new("MyFileContent", "MyFilename")).basename %>]]`

### [`tp.file.creation_date(format: string = "YYYY-MM-DD HH:mm")`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilecreation_dateformat-string--yyyy-mm-dd-hhmm)

Retrieves the file's creation date.  
获取文件的创建日期。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#arguments-1)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD HH:mm"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).  
    `format` : 日期的格式。默认为 `"YYYY-MM-DD HH:mm"` 。参考格式说明。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-2)

`// File creation date <% tp.file.creation_date() %> // File creation date with format <% tp.file.creation_date("dddd Do MMMM YYYY HH:mm") %>`

### [`tp.file.cursor(order?: number)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilecursororder-number)

Sets the cursor to this location after the template has been inserted.  
在模板插入后，将光标设置到此位置。

You can navigate between the different cursors using the configured hotkey in Obsidian settings.  
您可以使用 Obsidian 设置中的配置热键在不同光标之间导航。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#arguments-2)

- `order`: The order of the different cursors jump, e.g. it will jump from 1 to 2 to 3, and so on. If you specify multiple tp.file.cursor with the same order, the editor will switch to multi-cursor.  
    `order` : 不同光标跳转的顺序，例如它会从 1 跳转到 2，再跳转到 3，以此类推。如果您指定多个 tp.file.cursor 并使用相同的顺序，编辑器将切换到多光标模式。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-3)

`// File cursor <% tp.file.cursor() %> // File multi-cursor <% tp.file.cursor(1) %>Content<% tp.file.cursor(1) %>`

### [`tp.file.cursor_append(content: string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilecursor_appendcontent-string)

Appends some content after the active cursor in the file.  
在文件中当前光标之后追加一些内容。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#arguments-3)

- `content`: The content to append after the active cursor.  
    `content` : 在活动光标后追加的内容。

##### [Examples   示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-4)

`// File cursor append <% tp.file.cursor_append("Some text") %>`

### [`tp.file.exists(filepath: string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfileexistsfilepath-string)

Check to see if a file exists by it's file path. The full path to the file, relative to the Vault and containing the extension, must be provided.  
通过文件路径检查文件是否存在。必须提供相对于 Vault 的完整文件路径，包括扩展名。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#arguments-4)

- `filepath`: The full file path of the file we want to check existence for.  
    `filepath` : 我们想要检查其存在性的文件的完整文件路径。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-5)

`// File existence <% await tp.file.exists("MyFolder/MyFile.md") %> // File existence of current file <% await tp.file.exists(tp.file.folder(true) + "/" + tp.file.title + ".md") %>`

### [`tp.file.find_tfile(filename: string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilefind_tfilefilename-string)

Search for a file and returns its `TFile` instance.  
搜索文件并返回其 `TFile` 实例。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#arguments-5)

- `filename`: The filename we want to search and resolve as a `TFile`.  
    `filename` : 我们想要搜索并解析为 `TFile` 的文件名。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-6)

`// File find TFile <% tp.file.find_tfile("MyFile").basename %>`

### [`tp.file.folder(absolute: boolean = false)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilefolderabsolute-boolean--false)

Retrieves the file's folder name.  
获取文件的文件夹名称。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#arguments-6)

- `absolute`: If set to `true`, returns the vault-absolute path of the folder. If `false`, only returns the basename of the folder (the last part). Defaults to `false`.  
    `absolute` : 如果设置为 `true` ，则返回文件夹的库绝对路径。如果为 `false` ，则只返回文件夹的基本名称（最后一部分）。默认为 `false` 。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-7)

`// File folder (Folder) <% tp.file.folder() %> // File folder with vault-absolute path (Path/To/Folder) <% tp.file.folder(true) %>`

### [`tp.file.include(include_link: string ⎮ TFile)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfileincludeinclude_link-string--tfile)

Includes the file's link content. Templates in the included content will be resolved.  
包含文件的链接内容。包含内容中的模板将被解析。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#arguments-7)

- `include_link`: The link to the file to include, e.g. `"[[MyFile]]"`, or a TFile object. Also supports sections or blocks inclusions.  
    `include_link` : 要包含的文件链接，例如 `"[[MyFile]]"` ，或 TFile 对象。也支持部分或块包含。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-8)

`// File include <% await tp.file.include("[[Template1]]") %> // File include TFile <% await tp.file.include(tp.file.find_tfile("MyFile")) %> // File include section <% await tp.file.include("[[MyFile#Section1]]") %> // File include block <% await tp.file.include("[[MyFile#^block1]]") %>`

### [`tp.file.last_modified_date(format: string = "YYYY-MM-DD HH:mm")`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilelast_modified_dateformat-string--yyyy-mm-dd-hhmm)

Retrieves the file's last modification date.  
获取文件的最后修改日期。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#arguments-8)

- `format`: The format for the date. Defaults to `"YYYY-MM-DD HH:mm"`. Refer to [format reference](https://momentjs.com/docs/#/displaying/format/).  
    `format` : 日期的格式。默认为 `"YYYY-MM-DD HH:mm"` 。参考格式说明。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-9)

`// File last modified date <% tp.file.last_modified_date() %> // File last modified date with format <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm") %>`

### [`tp.file.move(new_path: string, file_to_move?: TFile)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilemovenew_path-string-file_to_move-tfile)

Moves the file to the desired vault location.  
将文件移动到目标保险库位置。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#arguments-9)

- `new_path`: The new vault relative path of the file, without the file extension. Note: the new path needs to include the folder and the filename, e.g. `"/Notes/MyNote"`.  
    `new_path` : 文件的新相对路径，不包含文件扩展名。注意：新路径需要包含文件夹和文件名，例如 `"/Notes/MyNote"` 。
    
- `file_to_move`: The file to move, defaults to the current file.  
    `file_to_move` : 要移动的文件，默认为当前文件。
    

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-10)

`// File move <%* await tp.file.move("/A/B/" + tp.file.title) %> // File move and rename <%* await tp.file.move("/A/B/NewTitle") %>`

### [`tp.file.path(relative: boolean = false)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilepathrelative-boolean--false)

Retrieves the file's absolute path on the system.  
获取系统上文件的绝对路径。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#arguments-10)

- `relative`: If set to `true`, only retrieves the vault's relative path.  
    `relative` : 如果设置为 `true` ，则只检索保险库的相对路径。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-11)

`// File path <% tp.file.path() %> // File relative path (relative to vault root) <% tp.file.path(true) %>`

### [`tp.file.rename(new_title: string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilerenamenew_title-string)

Renames the file (keeps the same file extension).  
重命名文件（保留相同的文件扩展名）。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#arguments-11)

- `new_title`: The new file title.  
    `new_title` : 新文件标题。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-12)

`// File rename <%* await tp.file.rename("MyNewName") %> // File append a 2 to the file name <%* await tp.file.rename(tp.file.title + "2") %>`

### [`tp.file.selection()`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfileselection)

Retrieves the active file's text selection.  
获取当前活动文件的文本选择。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-13)

`// File selection <% tp.file.selection() %>`

### [`tp.file.tags`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfiletags)

Retrieves the file's tags (array of string).  
获取文件的标签（字符串数组）。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-14)

`// File tags <% tp.file.tags %>`

### [`tp.file.title`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfiletitle)

Retrieves the file's title.  
获取文件标题。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-15)

`// File title <% tp.file.title %> // Strip the Zettelkasten ID of title (if space separated) <% tp.file.title.split(" ")[1] %>`

## [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#examples-16)

`// Retrieve file content <% tp.file.content %>  // File creation <%* await tp.file.create_new("MyFileContent", "MyFilename") %> // File creation with template <%* await tp.file.create_new(tp.file.find_tfile("MyTemplate"), "MyFilename") %> // File creation and open created note <%* await tp.file.create_new("MyFileContent", "MyFilename", true) %> // File creation in current folder <%* await tp.file.create_new("MyFileContent", "MyFilename", false, tp.file.folder(true)) %> // File creation in specified folder with string path <%* await tp.file.create_new("MyFileContent", "MyFilename", false, "Path/To/MyFolder") %> // File creation in specified folder with TFolder <%* await tp.file.create_new("MyFileContent", "MyFilename", false, tp.app.vault.getAbstractFileByPath("MyFolder")) %> // File creation and append link to current note [[<% (await tp.file.create_new("MyFileContent", "MyFilename")).basename %>]]  // File creation date <% tp.file.creation_date() %> // File creation date with format <% tp.file.creation_date("dddd Do MMMM YYYY HH:mm") %>  // File cursor <% tp.file.cursor() %> // File multi-cursor <% tp.file.cursor(1) %>Content<% tp.file.cursor(1) %>  // File cursor append <% tp.file.cursor_append("Some text") %>  // File existence <% await tp.file.exists("MyFolder/MyFile.md") %> // File existence of current file <% await tp.file.exists(tp.file.folder(true) + "/" + tp.file.title + ".md") %>  // File find TFile <% tp.file.find_tfile("MyFile").basename %>  // File folder (Folder) <% tp.file.folder() %> // File folder with vault-absolute path (Path/To/Folder) <% tp.file.folder(true) %>  // File include <% await tp.file.include("[[Template1]]") %> // File include TFile <% await tp.file.include(tp.file.find_tfile("MyFile")) %> // File include section <% await tp.file.include("[[MyFile#Section1]]") %> // File include block <% await tp.file.include("[[MyFile#^block1]]") %>  // File last modified date <% tp.file.last_modified_date() %> // File last modified date with format <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm") %>  // File move <%* await tp.file.move("/A/B/" + tp.file.title) %> // File move and rename <%* await tp.file.move("/A/B/NewTitle") %>  // File path <% tp.file.path() %> // File relative path (relative to vault root) <% tp.file.path(true) %>  // File rename <%* await tp.file.rename("MyNewName") %> // File append a 2 to the file name <%* await tp.file.rename(tp.file.title + "2") %>  // File selection <% tp.file.selection() %>  // File tags <% tp.file.tags %>  // File title <% tp.file.title %> // Strip the Zettelkasten ID of title (if space separated) <% tp.file.title.split(" ")[1] %>`

# [Frontmatter Module  Frontmatter 模块](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/frontmatter-module.html#frontmatter-module)

This modules exposes all the frontmatter variables of a file as variables.  
该模块将文件的所有 frontmatter 变量暴露为变量。

- [Documentation  文档](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/frontmatter-module.html#documentation)
    - [`tp.frontmatter.<frontmatter_variable_name>`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/frontmatter-module.html#tpfrontmatterfrontmatter_variable_name)
- [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/frontmatter-module.html#examples)

## [Documentation  文档](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/frontmatter-module.html#documentation)

### [`tp.frontmatter.<frontmatter_variable_name>`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/frontmatter-module.html#tpfrontmatterfrontmatter_variable_name)

Retrieves the file's frontmatter variable value.  
获取文件的 frontmatter 变量值。

If your frontmatter variable name contains spaces, you can reference it using the bracket notation like so:  
如果你的 frontmatter 变量名包含空格，你可以使用方括号表示法来引用它，例如：

`<% tp.frontmatter["variable name with spaces"] %>`

## [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/frontmatter-module.html#examples)

Let's say you have the following file:  
假设你有一个如下文件：

`--- alias: myfile note type: seedling ---  file content`

Then you can use the following template:  
那么你可以使用如下模板：

`File's metadata alias: <% tp.frontmatter.alias %> Note's type: <% tp.frontmatter["note type"] %>`

For lists in frontmatter, you can use JavaScript array prototype methods to manipulate how the data is displayed.  
对于 frontmatter 中的列表，你可以使用 JavaScript 数组原型方法来操作数据的显示方式。

`--- categories:   - book   - movie ---`

``<% tp.frontmatter.categories.map(prop => `  - "${prop}"`).join("\n") %>``

# [Hooks Module  钩子模块](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/hooks-module.html#hooks-module)

This module exposes hooks that allow you to execute code when a Templater event occurs.  
该模块提供了钩子，允许您在 Templater 事件发生时执行代码。

- [Documentation  文档](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/hooks-module.html#documentation)
    - [`tp.hooks.on_all_templates_executed(callback_function: () => any)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/hooks-module.html#tphookson_all_templates_executedcallback_function---any)
- [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/hooks-module.html#examples)

## [Documentation  文档](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/hooks-module.html#documentation)

Function documentation is using a specific syntax. More information [here](https://silentvoid13.github.io/Templater/syntax.html#function-documentation-syntax).  
函数文档使用特定的语法。更多信息请查看此处。

### [`tp.hooks.on_all_templates_executed(callback_function: () => any)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/hooks-module.html#tphookson_all_templates_executedcallback_function---any)

Hooks into when all actively running templates have finished executing. Most of the time this will be a single template, unless you are using `tp.file.include` or `tp.file.create_new`.  
钩子用于在所有正在运行的模板都执行完毕时触发。通常情况下这将是一个模板，除非您正在使用 `tp.file.include` 或 `tp.file.create_new` 。

Multiple invokations of this method will have their callback functions run in parallel.  
这个方法多次调用时，它们的回调函数将并行运行。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/hooks-module.html#arguments)

- `callback_function`: Callback function that will be executed when all actively running templates have finished executing.  
    `callback_function` : 当所有正在运行的模板都执行完毕时将执行的回调函数。

## [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/hooks-module.html#examples)

`// Update frontmatter after template finishes executing <%* tp.hooks.on_all_templates_executed(async () => {   const file = tp.file.find_tfile(tp.file.path(true));   await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {     frontmatter["key"] = "value";   }); }); %> // Run a command from another plugin that modifies the current file, after Templater has updated the file <%* tp.hooks.on_all_templates_executed(() => {   tp.app.commands.executeCommandById("obsidian-linter:lint-file"); }); -%>`

# [Obsidian Module  Obsidian 模块](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/obsidian-module.html#obsidian-module)

This module exposes all the functions and classes from the Obsidian API.  
该模块公开了 Obsidian API 的所有函数和类。

This is mostly useful when writing scripts.  
这主要在编写脚本时有用。

Refer to the Obsidian API [declaration file](https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts) for more information.  
有关更多信息，请参阅 Obsidian API 声明文件。

## [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/obsidian-module.html#examples)

`// Get all folders <% tp.app.vault.getAllLoadedFiles()   .filter(x => x instanceof tp.obsidian.TFolder)   .map(x => x.name) %>  // Normalize path <% tp.obsidian.normalizePath("Path/to/file.md") %>  // Html to markdown <% tp.obsidian.htmlToMarkdown("\<h1>Heading\</h1>\<p>Paragraph\</p>") %>  // HTTP request <%* const response = await tp.obsidian.requestUrl("https://jsonplaceholder.typicode.com/todos/1"); tR += response.json.title; %>`

# [System Module  系统模块](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#system-module)

This module contains system related functions.  
该模块包含与系统相关的函数。

- [Documentation  文档](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#documentation)
    - [`tp.system.clipboard()`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#tpsystemclipboard)
    - [`tp.system.prompt(prompt_text?: string, default_value?: string, throw_on_cancel: boolean = false, multiline?: boolean = false)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#tpsystempromptprompt_text-string-default_value-string-throw_on_cancel-boolean--false-multiline-boolean--false)
    - [`tp.system.suggester(text_items: string[] ⎮ ((item: T) => string), items: T[], throw_on_cancel: boolean = false, placeholder: string = "", limit?: number = undefined)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#tpsystemsuggestertext_items-string--item-t--string-items-t-throw_on_cancel-boolean--false-placeholder-string---limit-number--undefined)
- [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#examples-3)

## [Documentation  文档](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#documentation)

Function documentation is using a specific syntax. More information [here](https://silentvoid13.github.io/Templater/syntax.html#function-documentation-syntax).  
函数文档使用特定的语法。更多信息请查看此处。

### [`tp.system.clipboard()`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#tpsystemclipboard)

Retrieves the clipboard's content.  
获取剪贴板内容。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#examples)

`// Clipboard <% tp.system.clipboard() %>`

### [`tp.system.prompt(prompt_text?: string, default_value?: string, throw_on_cancel: boolean = false, multiline?: boolean = false)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#tpsystempromptprompt_text-string-default_value-string-throw_on_cancel-boolean--false-multiline-boolean--false)

Spawns a prompt modal and returns the user's input.  
生成一个提示模态框并返回用户的输入。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#arguments)

- `prompt_text`: Text placed above the input field.  
    `prompt_text` : 放置在输入框上方的文本。
    
- `default_value`: A default value for the input field.  
    `default_value` : 输入框的默认值。
    
- `throw_on_cancel`: Throws an error if the prompt is canceled, instead of returning a `null` value.  
    `throw_on_cancel` : 如果提示被取消，则抛出错误，而不是返回 `null` 值。
    
- `multiline`: If set to `true`, the input field will be a multiline textarea. Defaults to `false`.  
    `multiline` : 如果设置为 `true` ，输入字段将是一个多行文本区域。默认为 `false` 。
    

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#examples-1)

`// Prompt <% await tp.system.prompt("Please enter a value") %> // Prompt with default value <% await tp.system.prompt("What is your mood today?", "happy") %> // Multiline prompt <% await tp.system.prompt("What is your mood today?", null, false, true) %> // Reuse output from prompt <%* let value = await tp.system.prompt("Please enter a value"); %> # <% value %> selected value: <% value %>`

### [`tp.system.suggester(text_items: string[] ⎮ ((item: T) => string), items: T[], throw_on_cancel: boolean = false, placeholder: string = "", limit?: number = undefined)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#tpsystemsuggestertext_items-string--item-t--string-items-t-throw_on_cancel-boolean--false-placeholder-string---limit-number--undefined)

Spawns a suggester prompt and returns the user's chosen item.  
生成一个建议提示，并返回用户选择的项目。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#arguments-1)

- `text_items`: Array of strings representing the text that will be displayed for each item in the suggester prompt. This can also be a function that maps an item to its text representation.  
    `text_items` : 字符串数组，表示在建议提示中为每个项目显示的文本。这也可以是一个将项目映射到其文本表示的函数。
    
- `items`: Array containing the values of each item in the correct order.  
    `items` : 包含每个项目值的数组，顺序正确。
    
- `throw_on_cancel`: Throws an error if the prompt is canceled, instead of returning a `null` value.  
    `throw_on_cancel` : 如果提示被取消，则抛出错误，而不是返回 `null` 值。
    
- `placeholder`: Placeholder string of the prompt.  
    `placeholder` : 提示的占位符字符串。
    
- `limit`: Limit the number of items rendered at once (useful to improve performance when displaying large lists).  
    `limit` : 限制一次渲染的项目数量（在显示大型列表时有助于提高性能）。
    

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#examples-2)

`// Suggester <% await tp.system.suggester(["Happy", "Sad", "Confused"], ["Happy", "Sad", "Confused"]) %> // Suggester with mapping function (same as above example) <% await tp.system.suggester((item) => item, ["Happy", "Sad", "Confused"]) %> // Suggester for files [[<% (await tp.system.suggester((item) => item.basename, tp.app.vault.getMarkdownFiles())).basename %>]] // Suggester for tags <% await tp.system.suggester(item => item, Object.keys(tp.app.metadataCache.getTags()).map(x => x.replace("#", ""))) %> // Reuse value from suggester <%* let selectedValue = await tp.system.suggester(["Happy", "Sad", "Confused"], ["Happy", "Sad", "Confused"]); %> # <% selectedValue %> selected value: <% selectedValue %>`

## [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html#examples-3)

`// Clipboard <% tp.system.clipboard() %>  // Prompt <% await tp.system.prompt("Please enter a value") %> // Prompt with default value <% await tp.system.prompt("What is your mood today?", "happy") %> // Multiline prompt <% await tp.system.prompt("What is your mood today?", null, false, true) %> // Reuse output from prompt <%* let value = await tp.system.prompt("Please enter a value"); %> # <% value %> selected value: <% value %>  // Suggester <% await tp.system.suggester(["Happy", "Sad", "Confused"], ["Happy", "Sad", "Confused"]) %> // Suggester with mapping function (same as above example) <% await tp.system.suggester((item) => item, ["Happy", "Sad", "Confused"]) %> // Suggester for files [[<% (await tp.system.suggester((item) => item.basename, tp.app.vault.getMarkdownFiles())).basename %>]] // Suggester for tags <% await tp.system.suggester(item => item, Object.keys(tp.app.metadataCache.getTags()).map(x => x.replace("#", ""))) %> // Reuse value from suggester <%* let selectedValue = await tp.system.suggester(["Happy", "Sad", "Confused"], ["Happy", "Sad", "Confused"]); %> # <% selectedValue %> selected value: <% selectedValue %>`

# [Web Module  Web 模块](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#web-module)

This modules contains every internal function related to the web (making web requests).  
该模块包含所有与网络相关的内部功能（如发起网络请求）。

- [Documentation  文档](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#documentation)
    - [`tp.web.daily_quote()`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#tpwebdaily_quote)
    - [`tp.web.random_picture(size?: string, query?: string, include_size?: boolean)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#tpwebrandom_picturesize-string-query-string-include_size-boolean)
    - [`tp.web.request(url: string, path?: string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#tpwebrequesturl-string-path-string)
- [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#examples-3)

## [Documentation  文档](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#documentation)

Function documentation is using a specific syntax. More information [here](https://silentvoid13.github.io/Templater/syntax.html#function-documentation-syntax).  
函数文档使用特定的语法。更多信息请查看此处。

### [`tp.web.daily_quote()`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#tpwebdaily_quote)

Retrieves and parses the daily quote from `https://github.com/Zachatoo/quotes-database` as a callout.  
从 `https://github.com/Zachatoo/quotes-database` 获取并解析每日名言，以引用形式显示。

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#examples)

`// Daily quote <% await tp.web.daily_quote() %>`

### [`tp.web.random_picture(size?: string, query?: string, include_size?: boolean)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#tpwebrandom_picturesize-string-query-string-include_size-boolean)

Gets a random image from `https://unsplash.com/`.  
从 `https://unsplash.com/` 获取随机图片。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#arguments)

- `size`: Image size in the format `<width>x<height>`.  
    `size` : 图片尺寸格式为 `<width>x<height>` 。
    
- `query`: Limits selection to photos matching a search term. Multiple search terms can be passed separated by a comma.  
    `query` : 限制选择与搜索词匹配的照片。多个搜索词可以由逗号分隔传递。
    
- `include_size`: Optional argument to include the specified size in the image link markdown. Defaults to false.  
    `include_size` : 可选参数，用于在图像链接的 markdown 中包含指定的尺寸。默认为 false。
    

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#examples-1)

`// Random picture <% await tp.web.random_picture() %> // Random picture with size <% await tp.web.random_picture("200x200") %> // Random picture with size and query <% await tp.web.random_picture("200x200", "landscape,water") %>`

### [`tp.web.request(url: string, path?: string)`](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#tpwebrequesturl-string-path-string)

Makes a HTTP request to the specified URL. Optionally, you can specify a path to extract specific data from the response.  
向指定的 URL 发起 HTTP 请求。可选地，您可以指定路径以从响应中提取特定数据。

##### [Arguments  参数](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#arguments-1)

- `url`: The URL to which the HTTP request will be made.  
    `url` : 将进行 HTTP 请求的 URL。
    
- `path`: A path within the response JSON to extract specific data.  
    `path` : 响应 JSON 中的路径，用于提取特定数据。
    

##### [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#examples-2)

`// Simple request <% await tp.web.request("https://jsonplaceholder.typicode.com/todos/1") %> // Request with path <% await tp.web.request("https://jsonplaceholder.typicode.com/todos", "0.title") %>`

## [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html#examples-3)

`// Daily quote <% await tp.web.daily_quote() %>  // Random picture <% await tp.web.random_picture() %> // Random picture with size <% await tp.web.random_picture("200x200") %> // Random picture with size and query <% await tp.web.random_picture("200x200", "landscape,water") %>  // Simple request <% await tp.web.request("https://jsonplaceholder.typicode.com/todos/1") %> // Request with path <% await tp.web.request("https://jsonplaceholder.typicode.com/todos", "0.title") %>`

# [Contributing  贡献](https://silentvoid13.github.io/Templater/internal-functions/contribute.html#contributing)

You can contribute to [Templater](https://github.com/SilentVoid13/Templater) by developing a new internal function / variable.  
你可以通过开发一个新的内部函数/变量来为 Templater 做出贡献。

The process to develop a new one is really easy.  
开发新功能的过程非常简单。

Keep in mind that only pertinent submissions will be accepted, don't submit a very specific internal variable / function that you'll be the only one using.  
请记住，只有相关的提交才会被接受，不要提交一个非常特定的内部变量/函数，只有你会使用它。

## [Layout  布局](https://silentvoid13.github.io/Templater/internal-functions/contribute.html#layout)

Internal variables / functions are sorted by modules. Each module has a dedicated folder under [src/InternalTemplates](https://github.com/SilentVoid13/Templater/tree/master/src/InternalTemplates).  
内部变量/函数按模块分类。每个模块在 src/InternalTemplates 下都有一个专门的文件夹。

Let's take the [date module](https://github.com/SilentVoid13/Templater/tree/master/src/InternalTemplates/date) as an example.  
以日期模块为例。

It contains an [InternalModuleDate](https://github.com/SilentVoid13/Templater/blob/master/src/core/functions/internal_functions/date/InternalModuleDate.ts) file where all our internal date's related variables and functions are defined and registered:  
它包含一个 InternalModuleDate 文件，其中定义并注册了我们所有与内部日期相关的变量和函数：

`export class InternalModuleDate extends InternalModule {     name = "date";      async createStaticTemplates() {         this.static_templates.set("now", this.generate_now());         this.static_templates.set("tomorrow", this.generate_tomorrow());         this.static_templates.set("yesterday", this.generate_yesterday());     }      async updateTemplates() {}      generate_now() {         return (format: string = "YYYY-MM-DD", offset?: number, reference?: string, reference_format?: string) => {             if (reference && !window.moment(reference, reference_format).isValid()) {                 throw new Error("Invalid title date format, try specifying one with the argument 'reference'");             }             return get_date_string(format, offset, reference, reference_format);         }     }      generate_tomorrow() {         return (format: string = "YYYY-MM-DD") => {             return get_date_string(format, 1);         }     }      generate_yesterday() {         return (format: string = "YYYY-MM-DD") => {             return get_date_string(format, -1);         }     } }`

Every module extends the [InternalModule](https://github.com/SilentVoid13/Templater/blob/master/src/core/functions/internal_functions/InternalModule.ts) abstract class, which means they contain the following attributes and methods:  
每个模块都扩展了 InternalModule 抽象类，这意味着它们包含以下属性和方法：

- `this.app` attribute: the Obsidian API `App` object.  
    `this.app` 属性：Obsidian API `App` 对象。
- `this.file` attribute: The destination file where the template will be inserted.  
    `this.file` 属性：模板将被插入的目标文件。
- `this.plugin` attribute: The Templater plugin object.  
    `this.plugin` 属性：Templater 插件对象。
- `this.static_templates` attribute: A map containing all (name; variable/function) that are static. A static variable / function means that it doesn't depend on the file when executed. These type of variables / functions won't be updated each time we insert a new template, to save some overhead.  
    `this.static_templates` 属性：一个包含所有静态（名称；变量/函数）的映射。静态变量/函数意味着在执行时不依赖于文件。这种类型的变量/函数不会在每次插入新模板时更新，以节省一些开销。
- `this.dynamic_templates` attribute: Same as `static_templates` except that it contains variables / functions dependent on the file when executed.  
    `this.dynamic_templates` 属性：与 `static_templates` 相同，但它包含在执行时依赖于文件的变量/函数。
- `this.createStaticTemplates()` method: Registers all static internal variable / function for that module.  
    `this.createStaticTemplates()` 方法：为该模块注册所有静态内部变量/函数。
- `this.updateTemplates()` method: Registers every dynamic internal variable / function for that module.  
    `this.updateTemplates()` 方法：为该模块注册所有动态内部变量/函数。

You can use these attributes in your new internal variable / function if you need them.  
如果您需要，可以在新的内部变量/函数中使用这些属性。

## [Registering a new internal variable / function  
注册新的内部变量/函数](https://silentvoid13.github.io/Templater/internal-functions/contribute.html#registering-a-new-internal-variable--function)

Here are the different steps you need to follow, in order to register a new internal variable / function in a module.  
以下是注册模块中新的内部变量/函数所需的步骤：

**1st step:** Create a method inside the module called `generate_<internal_variable_or_function_name>()` that will generate your internal variable / function, that means it will return either a lambda function (representing the internal function) or directly the internal variable you want to expose.  
第一步：在模块中创建一个名为 `generate_<internal_variable_or_function_name>()` 的方法，该方法将生成你的内部变量/函数，这意味着它将返回一个 lambda 函数（代表内部函数）或直接返回你想暴露的内部变量。

All generation methods are ordered by alphabetical order based on the internal variable / function name.  
所有生成方法都根据内部变量/函数的名称按字母顺序排列。

Try to give a good, self-explanatory name for your variable / function.  
给你的变量/函数取一个良好、有解释性的名称。

**2nd step:** Register your internal variable / function in the `static_templates` or `dynamic_templates` map depending on whether your internal variable / function on the file when executed. The registration happens either in `createStaticTemplates` or `updateTemplates`.  
第二步：根据你的内部变量/函数在文件执行时是否已存在，将其注册到 `static_templates` 或 `dynamic_templates` 映射中。注册过程发生在 `createStaticTemplates` 或 `updateTemplates` 。

To register your variable / function, use your `this.generate_<internal_variable_or_function_name>()` method you defined earlier:  
要注册你的变量/函数，使用你之前定义的 `this.generate_<internal_variable_or_function_name>()` 方法：

`this.static_templates.set(<internal_variable_or_function_name>, this.generate_<internal_variable_or_function_name>()); OR this.dynamic_templates.set(<internal_variable_or_function_name>, this.generate_<internal_variable_or_function_name>());`

Internal variable / function registrations are also ordered by alphabetical order based on the variable / function name.  
内部变量/函数的注册也是根据变量/函数名称的字母顺序排列的。

**3rd step:** Add your internal variable / function documentation to Templater's [documentation](https://github.com/SilentVoid13/Templater/tree/master/docs/docs/internal-variables-functions/internal-modules).  
第三步：将你的内部变量/函数文档添加到 Templater 的文档中。

And you are done ! Thanks for contributing to [Templater](https://github.com/SilentVoid13/Templater) !  
你完成了！感谢你为 Templater 做出贡献！

Now, just submit a [pull request](https://github.com/SilentVoid13/Templater/pulls) on Github, I'll try to be as reactive as possible.  
现在，只需在 Github 上提交一个 pull request，我会尽量尽快响应。

# [User Functions  用户函数](https://silentvoid13.github.io/Templater/user-functions/overview.html#user-functions)

You can define your own functions in Templater.  
您可以在 Templater 中定义自己的函数。

There are two types of user functions you can use:  
您可以使用两种类型的用户函数：

- [Script User Functions  脚本用户函数](https://silentvoid13.github.io/Templater/user-functions/script-user-functions.html)
- [System Command User Functions  
    系统命令 用户函数](https://silentvoid13.github.io/Templater/user-functions/system-user-functions.html)

## [Invoking User Functions  调用用户函数](https://silentvoid13.github.io/Templater/user-functions/overview.html#invoking-user-functions)

You can call a user function using the usual function call syntax: `tp.user.<user_function_name>()`, where `<user_function_name>` is the function name you defined.  
您可以使用常规函数调用语法调用用户函数： `tp.user.<user_function_name>()` ，其中 `<user_function_name>` 是您定义的函数名。

For example, if you defined a system command user function named `echo`, a complete command invocation would look like this:  
例如，如果您定义了一个名为 `echo` 的系统命令用户函数，一个完整的命令调用将如下所示：

`<% tp.user.echo() %>`

## [No mobile support  不支持移动设备](https://silentvoid13.github.io/Templater/user-functions/overview.html#no-mobile-support)

Currently user functions are unavailable on Obsidian for mobile.  
目前用户函数在移动端的 Obsidian 上不可用。

# [Script User Functions  脚本用户函数](https://silentvoid13.github.io/Templater/user-functions/script-user-functions.html#script-user-functions)

This type of user functions allows you to call JavaScript functions from JavaScript files and retrieve their output.  
这种用户函数允许你从 JavaScript 文件中调用 JavaScript 函数并获取它们的输出。

To use script user functions, you need to specify a script folder in Templater's settings. This folder needs to be accessible from your vault.  
要使用脚本用户函数，你需要在 Templater 的设置中指定一个脚本文件夹。这个文件夹需要可以从你的保险库访问。

## [Define a Script User Function  
定义一个脚本用户函数](https://silentvoid13.github.io/Templater/user-functions/script-user-functions.html#define-a-script-user-function)

Let's say you specified the `Scripts` folder as your script folder in Templater's settings.  
假设你在 Templater 的设置中指定了 `Scripts` 文件夹作为你的脚本文件夹。

Templater will load all JavaScript (`.js` files) scripts in the `Scripts` folder.  
Templater 将加载 `Scripts` 文件夹中的所有 JavaScript（ `.js` 文件）脚本。

You can then create your script named `Scripts/my_script.js` (the `.js` extension is required) for example. You will likely have to create the file outside of Obsidian, as Obsidian only creates markdown files.  
然后你可以创建一个名为 `Scripts/my_script.js` 的脚本（必须使用 `.js` 扩展名），例如。你可能需要将文件创建在 Obsidian 外部，因为 Obsidian 只创建 markdown 文件。

You will then be able to call your scripts as user functions. The function name corresponds to the script file name.  
然后你将能够将你的脚本作为用户函数调用。函数名称对应于脚本文件名。

Scripts should follow the [CommonJS module specification](https://flaviocopes.com/commonjs/), and export a single function.  
脚本应遵循 CommonJS 模块规范，并导出一个单一函数。

``function my_function (msg) {     return `Message from my script: ${msg}`; } module.exports = my_function;``

In this example, a complete command invocation would look like this:  
在这个例子中，一个完整的命令调用看起来是这样的：

`<% tp.user.my_script("Hello World!") %>`

Which would output `Message from my script: Hello World!`.  
这将输出 `Message from my script: Hello World!` 。

## [Global namespace  全局命名空间](https://silentvoid13.github.io/Templater/user-functions/script-user-functions.html#global-namespace)

In script user functions, you can still access global namespace variables like `app` or `moment`.  
在脚本用户函数中，你仍然可以访问全局命名空间变量，如 `app` 或 `moment` 。

However, you can't access the template engine scoped variables like `tp` or `tR`. If you want to use them, you must pass them as arguments for your function.  
然而，你不能访问模板引擎作用域的变量，如 `tp` 或 `tR` 。如果你想要使用它们，你必须将它们作为参数传递给你的函数。

## [Functions Arguments  函数参数](https://silentvoid13.github.io/Templater/user-functions/script-user-functions.html#functions-arguments)

You can pass as many arguments as you want to your function, depending on how you defined it.  
你可以根据你如何定义它，传递任意数量的参数给你的函数。

You can for example pass the `tp` object to your function, to be able to use all of the [internal variables / functions](https://silentvoid13.github.io/Templater/internal-variables-functions/overview.html) of Templater: `<% tp.user.<user_function_name>(tp) %>`  
你可以例如将 `tp` 对象传递给你的函数，以便使用 Templater 的所有内部变量/函数： `<% tp.user.<user_function_name>(tp) %>`

## [User Script Documentation  
用户脚本文档](https://silentvoid13.github.io/Templater/user-functions/script-user-functions.html#user-script-documentation)

Optionally you can document what a script does using the [TSDoc Standard](https://tsdoc.org/) at the **top** of your method file. If provided, this will provide an intellisense-like experience for your user scripts similar to the experience of the other templater functions.  
你可以选择使用 TSDoc 标准在方法文件顶部记录脚本的作用。如果提供，这将为你的用户脚本提供类似智能感知的体验，类似于其他 Templater 函数的体验。

### [Example of User Script with Documentation  
带文档的用户脚本示例](https://silentvoid13.github.io/Templater/user-functions/script-user-functions.html#example-of-user-script-with-documentation)

`/**  * This does something cool  */ function doSomething() {     console.log('Something was done') }  module.exports = doSomething;`

# [System Command User Functions  
系统命令 用户函数](https://silentvoid13.github.io/Templater/user-functions/system-user-functions.html#system-command-user-functions)

This type of user functions allows you to execute system commands and retrieve their output.  
这种用户函数允许你执行系统命令并获取其输出。

System command user functions need to be enabled in Templater's settings.  
系统命令用户函数需要在 Templater 的设置中启用。

## [Define a System Command User Function  
定义系统命令用户函数](https://silentvoid13.github.io/Templater/user-functions/system-user-functions.html#define-a-system-command-user-function)

To define a new system command user function, you need to define a **function name**, associated with a **system command**.  
要定义一个新的系统命令用户函数，你需要定义一个函数名，并将其与一个系统命令关联。

To do that, go to the plugin's settings and click `Add User Function`.  
要完成这个操作，请前往插件的设置并点击 `Add User Function` 。

Once this is done, [Templater](https://github.com/SilentVoid13/Templater) will create a user function named after what you defined, that will execute your system command and return its output.  
完成这些步骤后，Templater 将创建一个以您定义的名称命名的用户函数，该函数将执行您的系统命令并返回其输出。

Just like internal functions, user functions are available under the `tp` JavaScript object, and more specifically under the `tp.user` object.  
与内部函数一样，用户函数可以在 `tp` JavaScript 对象下找到，更具体地说是在 `tp.user` 对象下。

![user_templates](https://silentvoid13.github.io/Templater/imgs/templater_user_templates.png)

## [Functions Arguments  函数 参数](https://silentvoid13.github.io/Templater/user-functions/system-user-functions.html#functions-arguments)

You can pass optional arguments to user functions. They must be passed as a single JavaScript object containing properties and their corresponding values: `{arg1: value1, arg2: value2, ...}`.  
你可以向用户函数传递可选参数。这些参数必须作为一个包含属性及其对应值的 JavaScript 对象传递： `{arg1: value1, arg2: value2, ...}` 。

These arguments will be made available for your programs / scripts in the form of [environment variables](https://en.wikipedia.org/wiki/Environment_variable).  
这些参数将以环境变量的形式提供给你的程序/脚本。

In our previous example, this would give the following command declaration: `<% tp.user.echo({a: "value 1", b: "value 2"})`.  
在我们的前一个示例中，这将给出以下命令声明： `<% tp.user.echo({a: "value 1", b: "value 2"})` 。

If our system command was calling a bash script, we would be able to access variables `a` and `b` using `$a` and `$b`.  
如果我们的系统命令调用的是一个 bash 脚本，我们将能够使用 `$a` 和 `$b` 访问变量 `a` 和 `b` 。

## [Internal functions in system commands  
系统命令中的内部函数](https://silentvoid13.github.io/Templater/user-functions/system-user-functions.html#internal-functions-in-system-commands)

You can use internal functions inside your system command. The internal functions will be replaced before your system command gets executed.  
您可以在系统命令中使用内部函数。在系统命令执行之前，内部函数将被替换。

For example, if you configured the system command `cat <% tp.file.path() %>`, it would be replaced with `cat /path/to/file` before the system command gets executed.  
例如，如果您配置了系统命令 `cat <% tp.file.path() %>` ，在系统命令执行之前，它将被替换为 `cat /path/to/file` 。

# [Commands  命令](https://silentvoid13.github.io/Templater/commands/overview.html#commands)

## [Command Types  命令类型](https://silentvoid13.github.io/Templater/commands/overview.html#command-types)

[Templater](https://github.com/SilentVoid13/Templater) defines 2 types of opening tags, that defines 2 types of **commands**:  
Templater 定义了 2 种类型的开启标签，定义了 2 种类型的命令：

- `<%`: Interpolation command. It will output the result of the expression that's inside.  
    `<%` : 插值命令。它将输出表达式内部的结果。
- `<%*`: [JavaScript execution command](https://silentvoid13.github.io/Templater/commands/execution-command.html). It will execute the JavaScript code that's inside. It does not output anything by default.  
    `<%*` : JavaScript 执行命令。它会执行命令内部包含的 JavaScript 代码。默认情况下不会输出任何内容。

The closing tag for a command is always the same: `%>`  
命令的结束标签始终相同： `%>`

## [Command utilities  命令工具](https://silentvoid13.github.io/Templater/commands/overview.html#command-utilities)

In addition to the different types of commands, you can also use command utilities. They are also declared in the opening tag of the command. All command utilities work with all command types. The available command utilities are:  
除了不同类型的命令，您还可以使用命令工具。它们也在命令的起始标签中声明。所有命令工具适用于所有命令类型。可用的命令工具包括：

- [Whitespace Control  空白字符控制](https://silentvoid13.github.io/Templater/commands/whitespace-control.html)
- [Dynamic Commands  动态命令](https://silentvoid13.github.io/Templater/commands/dynamic-command.html)

# [Dynamic Commands  动态命令](https://silentvoid13.github.io/Templater/commands/dynamic-command.html#dynamic-commands)

With this command utility, you can declare a command as "dynamic", which means that this command will be resolved when entering preview mode.  
使用这个命令工具，你可以将命令声明为"动态"，这意味着该命令将在进入预览模式时被解析。

To declare a dynamic command add a plus `+` sign after the command opening tag: `<%+`  
要声明一个动态命令，在命令开启标签后添加一个加号 `+` 符号： `<%+`

That's it, your command will now be executed only in preview mode.  
就这样，你的命令现在只在预览模式下执行。

This is useful for internal functions like `tp.file.last_modified_date` for example:  
这对于内部功能很有用，比如 `tp.file.last_modified_date` ：

`Last modified date: <%+ tp.file.last_modified_date() %>`

**Note**: Dynamic commands have known issues, and will likely not be maintained going forward (see [this issue](https://github.com/SilentVoid13/Templater/issues/913) for more details). In most cases the [Dataview](https://github.com/blacksmithgu/obsidian-dataview) plugin is the suggested alternative.  
注意：动态命令存在已知问题，未来可能不会继续维护（有关更多详细信息，请参阅此问题）。在大多数情况下，建议使用 Dataview 插件。

## [Refresh problems  刷新问题](https://silentvoid13.github.io/Templater/commands/dynamic-command.html#refresh-problems)

One "downside" of the preview mode is that it puts the rendered note in cache, to speed things up.  
预览模式的一个“缺点”是它会将渲染的笔记放入缓存，以加快速度。

This means that your dynamic command will be rendered only once, when you open the note, but won't be refreshed after.  
这意味着您的动态命令仅在您打开笔记时渲染一次，之后不会刷新。

If you want to refresh it, you must close the note to clear the cache and open it again.  
如果您想刷新它，您必须关闭笔记以清除缓存，然后再次打开。

# [Javascript Execution Command  JavaScript 执行命令](https://silentvoid13.github.io/Templater/commands/execution-command.html#javascript-execution-command)

This type of command allows us to execute JavaScript code.  
这种命令允许我们执行 JavaScript 代码。

With a JavaScript Execution command, we can pretty much do everything that JavaScript allows us to do. Some examples are given below.  
通过 JavaScript 执行命令，我们可以做几乎所有 JavaScript 允许我们做的事情。以下是一些例子。

We can still access the `tp` object and all the internal variables / functions from this type of command.  
我们仍然可以从此类命令中访问 `tp` 对象以及所有内部变量/函数。

JavaScript Execution commands let you access global namespace variables. This means you can access things like `app` or `moment`.  
JavaScript 执行命令让你可以访问全局命名空间变量。这意味着你可以访问像 `app` 或 `moment` 这样的内容。

## [Asynchronous functions  异步函数](https://silentvoid13.github.io/Templater/commands/execution-command.html#asynchronous-functions)

Some internal functions are asynchronous. When calling such functions inside a JavaScript execution command, don't forget to use the `await` keyword if necessary.  
一些内部函数是异步的。在 JavaScript 执行命令中调用这些函数时，如果需要，别忘了使用 `await` 关键字。

## [How to output a value from a JavaScript Execution Command ?  
如何从 JavaScript 执行命令中输出一个值？](https://silentvoid13.github.io/Templater/commands/execution-command.html#how-to-output-a-value-from-a-javascript-execution-command-)

Sometimes, you may want to output something when using a JS execution command.  
有时，在使用 JS 执行命令时，您可能希望输出某些内容。

When our templating engine generates a replacement string using all of our commands results, it is stored in a variable named `tR`. This is the string that will contain the processed file content. You are allowed to access that variable from a JS execution command.  
当我们的模板引擎使用所有命令的结果生成替换字符串时，它会被存储在一个名为 `tR` 的变量中。这是包含处理后的文件内容的字符串。您可以从 JS 执行命令中访问该变量。

This means that, to output something from a JS execution command, you just need to append what you want to output to that `tR` string variable.  
这意味着，要从 JS 执行命令中输出内容，您只需要将希望输出的内容追加到 `tR` 字符串变量中。

For example, the following command: `<%* tR += "test" %>` will output `test`.  
例如，以下命令： `<%* tR += "test" %>` 将输出 `test` 。

You can also overwrite `tR` to ignore everything our templating engine has generated up to that point. This can be useful if you want to have frontmatter or other information in your template that you don't want to be inserted when your template is applied.  
你也可以覆盖 `tR` 来忽略模板引擎到此为止生成的所有内容。如果你想在模板中包含 frontmatter 或其他信息，而这些信息在你应用模板时不想被插入，这会很有用。

For example, the following template:  
例如，以下模板：

`--- type: template --- This is a person template.  <%* tR = "" -%> --- type: person --- # <% tp.file.cursor() %>`

will output:  将输出：

`--- type: person --- #` 

### [Suggesters and Prompts](https://silentvoid13.github.io/Templater/commands/execution-command.html#suggesters-and-prompts)

It is important to note that the `tp.system.prompt()` and `tp.system.suggester()` both require a `await` statement to save the value to a variable  
需要注意的是， `tp.system.prompt()` 和 `tp.system.suggester()` 都需要一个 `await` 语句来将值保存到变量中

## [Examples  示例](https://silentvoid13.github.io/Templater/commands/execution-command.html#examples)

Here are some examples of things you can do using JavaScript Execution Commands:  
这里有一些使用 JavaScript 执行命令可以完成的事情的例子：

`<%* if (tp.file.title.startsWith("Hello")) { %> This is a hello file ! <%* } else { %> This is a normal file ! <%* } %>      <%* if (tp.frontmatter.type === "seedling") { %> This is a seedling file ! <%* } else { %> This is a normal file ! <%* } %>      <%* if (tp.file.tags.contains("#todo")) { %> This is a todo file ! <%* } else { %> This is a finished file ! <%* } %>  <%* function log(msg) {     console.log(msg); } %> <%* log("Title: " + tp.file.title) %>      <%* tR += tp.file.content.replace(/stuff/, "things"); %>`

# [Whitespace Control  空白控制](https://silentvoid13.github.io/Templater/commands/whitespace-control.html#whitespace-control)

By default, **commands** in Templater are not removing any newlines. Commands are replaced with their values and that's it.  
默认情况下，Templater 中的命令不会删除任何换行符。命令会被替换为其值，仅此而已。

It can sometimes be useful to have some whitespace control after commands are inserted, which is exactly what this command utility offers.  
有时在插入命令后进行一些空白控制会很有用，这正是这个命令工具提供的功能。

Let's have an example. The following template:  
让我们举个例子。以下模板：

`<%* if (tp.file.title == "MyFile" ) { %> This is my file! <%* } else { %> This isn't my file! <%* } %> Some content ...`

Will produce the following output if the condition is false (the same happens when it's true), notice the blank lines:  
如果条件为假（为真时情况相同），将产生以下输出（注意空行）：

`This isn't my file!  Some content ...`

You may want to remove the blank lines produced by the **execution commands**, that do not produce any output.  
您可能想要删除执行命令产生的空行，这些命令不会产生任何输出。

A specific syntax exists for whitespace control:  
存在特定的空白控制语法：

- An underscore `_` at the **beginning** of a tag (`<%_`) will trim **all** whitespace **before** the command  
    在标签（ `<%_` ）开头使用下划线 `_` 将会删除命令前的所有空白
- An underscore `_` at the **end** of a tag (`_%>`) will trim **all** whitespace **after** the command  
    标签末尾的 `_` 下划线（ `_%>` ）将删除命令后的所有空白字符
- A dash `-` at the **beginning** of a tag (`<%-`) will trim **one** newline **before** the command  
    标签开头的 `-` 短横线（ `<%-` ）将删除命令前的换行符
- A dash `-` at the **end** of a tag (`-%>`) will trim **one** newline **after** the command.  
    标签末尾的 `-` 短横线（ `-%>` ）将删除命令后的换行符。

In our example, to fix our template to remove the blank lines, we would use the following template (notice the dashes `-` at the end of the tags), to remove the blank newlines **after** the execution commands:  
在我们的示例中，为了修复模板以删除空白行，我们会使用以下模板（注意标签末尾的 `-` 短横线），以删除执行命令后的空白换行符：

`<%* if (tp.file.title == "MyFile" ) { -%> This is my file! <%* } else { -%> This isn't my file! <%* } -%> Some content ...`

Which would produce the following output:  
哪个将产生以下输出：

`This isn't my file! Some content ...`