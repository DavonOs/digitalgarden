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

`cmd.exe` and `powershell` on Windows are known to have problems with unicode characters.  
在 Windows 上 `cmd.exe` 和 `powershell` 已知与 Unicode 字符存在问题。

You can check https://github.com/SilentVoid13/Templater/issues/15#issuecomment-824067020 for a solution.  
您可以查看 https://github.com/SilentVoid13/Templater/issues/15#issuecomment-824067020 获取解决方案。

Another good solution (probably the best) is to use [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701) and set it as the default shell in Templater's setting.  
另一个不错的解决方案（可能是最好的）是使用 Windows Terminal 并将其设置为 Templater 设置中的默认 shell。

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

This module exposes the app instance. Prefer to use this over the global app instance.  
该模块暴露了应用实例。建议优先使用该模块而不是全局应用实例。

This is mostly useful when writing scripts.  
在编写脚本时，这主要是有用的。

有关更多信息，请参阅 Obsidian [开发者文档](https://docs.obsidian.md/Reference/TypeScript+API/App)。

## [Examples  示例](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/app-module.html#examples)

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


