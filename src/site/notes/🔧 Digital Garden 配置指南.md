---
{"dg-publish":true,"permalink":"/digital-garden/","tags":["digitalgarden"]}
---


# 与其他解决方案的比较

## 优点

这个插件与其他流行的数字花园之间的主要区别之一是它通过插件与黑曜石集成。忽略初始设置，您永远不必接触 [[03 Resource/Program/NotionNext项目学Git\|Git]]。（除非你愿意。发布新笔记就像使用 [publish single note 命令](https://dg-docs.ole.dev/getting-started/02-commands/#publish-single-note)一样简单。）

这也使得只发布_一些_笔记变得更加容易，而不是将整个保险库发布到您的数字花园。

与黑曜石紧密集成的其他好处是，我们可以利用来自 Obsidian 社区的令人难以置信的插件和主题。到目前为止，此插件支持黑曜石特定功能，如 Dataview 查询、Excalidraw 和 Obisidian 主题。

由于有各种自定义选项，您还可以将其用作简单的笔记共享解决方案，创建指向您的笔记的链接，以便轻松与朋友和同事分享。如果您不需要它们，则无需启用所有花里胡哨的功能，例如反向链接、搜索和图表。

## 缺点

当然，这种与 Obsidian 紧密耦合的缺点是，这个花园不像其他一些花园那样容易与其他书写工具整合，而不是像 Obsidian 那样容易。

但是，如果您决定切换到另一个工具，您的所有文件仍然可以以纯文本形式使用，因此切换应该不会太难。

## 初始配置

![Note Settings|500](https://dg-docs.ole.dev/img/user/img/CleanShot%202022-11-09%20at%2021.38.15@2x.png)

Show home link
显示主页链接：默认开启。如果启用此功能，则导航栏将显示在每个笔记的顶部。站点名称将显示为标题，并且可以单击。单击它将带用户返回到主页笔记。默认情况下，站点名称为“Digital Garden”。这可以通过 04 外观设置#站点名称设置进行更改。

Show local graph for notes
显示笔记的本地图形：默认关闭。打开后，本地图形（如黑曜石中的图形）将显示在右侧。它将显示指向当前注释的传出和传入链接。它是交互式的，可以四处移动。单击其中一个节点将带您到相应的注释。
在桌面上，它显示在右侧。在移动设备上，它显示在底部。

Show a table of content
显示注释的目录：默认关闭。启用后，笔记中所有标题的列表将显示在右侧。单击其中一个标题将滚动到注释中的相应标题。
在桌面上，它显示在右侧。在移动设备上，它是隐藏的。

Show backlinks for notes
显示笔记的反向链接
默认关闭。启用后，您发布的笔记将显示一个链接到它的笔记列表。它只会显示已发布的注释。
在桌面和更大的屏幕上，它将被放置在右侧。在移动设备和较小的屏幕上，它被放在页面的底部。

显示内联标题
默认情况下处于关闭状态。启用后，文件名将显示在页面顶部。类似于 Obsidian v1.0 中引入的“显示内联标题”设置。

显示文件树侧边栏
默认情况下处于关闭状态。打开后，右侧将显示一个侧边栏，所有已发布的笔记都显示在 Obsidian 中放置的文件夹层次结构中。在较小的屏幕上，它会消失，但可以通过单击左上角的“汉堡包”菜单来查看。

链接预览
默认情况下处于关闭状态。启用后，当您将鼠标悬停在它们上面时，所有链接都会显示笔记内容的预览。

启用搜索
默认情况下处于关闭状态。启用后，用户可以选择轻松搜索所有已发布的笔记。可以通过单击右上角显示的搜索框来查看搜索框，如果启用了此功能，则还可以单击文件树侧边栏顶部的搜索框。也可以在 Windows/Linux 上按 CTRL+K 或在 MacOS 上按 CMD+K 来触发。
将弹出一个对话框。可以使用键盘的向上和向下箭头键来导航结果。按回车键将带您进入笔记。按 ESC 键将关闭搜索框。

启用搜索后，您还可以构建显示搜索和结果的 URL。这是通过在 URL 中指定“q”查询参数来完成的。
例如，对于此网站：https://dg-docs.ole.dev/?q=Commands

显示标签
默认情况下处于关闭状态。启用后，备忘录封面中的所有标签都会显示在页面顶部的备忘录标题下方。
如果启用了搜索功能，单击标签将弹出搜索框并显示带有该标签的所有注释。

让所有前线物质通过
默认情况下处于关闭状态。大多数用户都希望关闭此功能。这是一个主要针对高级用户的设置，他们修改了他们的模板，并希望完全控制传递给模板的 frontmatter 内容。默认情况下，插件无法识别的所有 frontmatter 属性在发布之前都会被剥离。这是为了防止如果静态站点生成器无法识别 frontmatter 中的数据，则 Netlify 中的构建会失败。（有关详细信息，请参见 11ty Front Matter Data）。如果您的站点突然停止工作，并且此功能已启用，那么尝试再次禁用它是值得的。

添加自定义组件

内容定制

自定义图像宽度：`![imagetext|200](https://image.url)`

![image text|200](https://imgur.la/images/2024/08/08/image.png)

嵌入的文档不需要`dg-publish`属性

嵌入标题：`![[Some Other Note|Heading]]`

指定标题级别：`![[Some Other Note|###Heading]]`

标题等于嵌入文档的标题：`![[Obsidian使用手册|{{title}}]]`

`![[Obsidian使用手册|This is a{{title}}]]`


如果您在笔记中编写任何 HTML，它们将在花园中呈现。这意味着您可以在网站上创建自定义的“类似网站”组件。例如，在 [Digital Garden - Publish Obsidian Notes For Free#Sites people have created](https://dg-docs.ole.dev/#sites-people-have-created) 中呈现的网格是使用 divs 和图像标签以及一些自定义内联样式创建的。

> [!warning]+
> HTML 的开始和结束标记之间不能有任何空换行符，否则将被打印而不是渲染出来

<div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center;"> <div style="display: flex; flex-direction: column; justify-content: center;align-items:center;"> <img style="padding: 10px" src="https://res.cloudinary.com/dix4ngy25/image/upload/c_scale,r_8,w_300/v1668068263/dgdocs/CleanShot_2022-11-10_at_09.17.28_2x.png"/> <a href="https://notes.thatother.dev/">That Other Dev</a> </div> <div style="display: flex; flex-direction: column; justify-content: center;align-items: center"> <img style="padding: 10px" src="https://res.cloudinary.com/dix4ngy25/image/upload/c_scale,r_8,w_300/v1668068103/dgdocs/CleanShot_2022-11-10_at_09.14.47_2x.png"/> <a href="https://syleria.netlify.app/">Syleria</a> </div> </div>

## Dataview queries

插件支持发布 dataview 查询结果。只需发布包含查询的页面即可。该插件将按发布时的原样呈现结果。如果结果发生变化，您将需要重新发布该注释。

它支持所有查询类型：dataview、dataviewjs、内联 dataview 和内联 dataviewjs。

由于插件“冻结”结果并发布它，您实际上甚至会将 dataview 查询中的链接视为反向链接。

您需要安装 dataview 插件的 0.5.39 或更高版本才能正常工作。