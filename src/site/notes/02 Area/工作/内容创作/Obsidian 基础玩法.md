---
{"dg-publish":true,"dg-permalink":"obsidianbasic","permalink":"/obsidianbasic/","metatags":{"description":"这里是 Obsidian 从0到1的新手入门指南","og:site_name":"DavonOs","og:title":"obsidian基础","og:type":"article","og:url":"https://zuji.eu.org/obsidianbasic","og:image":null,"og:image:width":"400","og:image:alt":"articlecover","og:locale":"zh_cn"},"tags":["obsidian"]}
---


[Obsidian Help - Home ](https://help.obsidian.md/Home)
<p><span>已使用 <em>Obsidian</em> 752 天，共创建 264 篇文档、185 个标签、11 个待办。 <br><br></span></p>
## 写在前面

开箱即用的库
- [cumany 非常多奇技淫巧，可以将其作为大而全的词典，借鉴用法和代码，不推荐全盘照搬](https://github.com/cumany/Blue-topaz-examples)

- [Rainbell129 dataview运用的很娴熟，可以作为dataview的实践教材。](https://github.com/Rainbell129/Obsidian-Homepage)

- [给Obsidian新手科研人的开箱即用库：BCS’s Vault for Researchers V1.1](https://forum-zh.obsidian.md/t/topic/8114)

- [一个简单的Obsidian 库，关注文本和内容本身，值得学习](https://github.com/juestchaos/Obsidian-Plug-and-Play)

- [科研向的库，拒绝花里胡哨](https://github.com/sheldonxxd/obsidian_vault_template_for_researcher)
- [主打目标管理+dailynote+知识管理+回顾系统。配有各种丰富的模板。](https://github.com/laozhou-in-germany/Chens_LMS_Public)

[「回归 Obsidian 的纯与真，写给普通人的入门指南」](https://sspai.com/post/72697)

## 文件结构

资料库：

obsidian每个资料库是独立的，不同资料库里的信息无法互相连接，创建时需要想好这个资料库的定位是什么，要如何去使用这个资料库，不宜分太多，大类相同就放在一个库。

库内的.obsidian文件夹：

存放配置文件的文件夹，设置、主题、插件都是存放于此，创建新的库是没有这些配置的，可以把.obsidian文件夹直接复制到新库内，就可以直接使用。

## 认识界面

**一、最左侧称为功能区：**

快速切换：快速搜索笔记，创建切换笔记（常用，建议后期为此功能分配快捷键）

关系图谱：以图谱的形式展示所有笔记之间的链接关系

命令面板：让obsidian快速的去执行一些特定的命令


切换资料库
帮助：
设置：常用，内有各种设置，默认快捷键Ctrl+逗号

**二、笔记列表区：**

展示所有的文件夹和笔记

功能：新建文件、新建文件夹、排序

搜索功能（后期讲搜索技巧）

注意事项：库内笔记修改尽量在obsidian中进行

**三、展示区：**

查看、编辑笔记

**四、面板区：**

功能需要自定义设置

## 基础设置

语言：设置-关于-语言；

外观：背景颜色、字体大小、快速调整字体大小功能（Ctrl+鼠标滚轮）、主题（建议用默认）

编辑器：默认编辑模式（建议设置为实时预览）、其他功能较多，也比较常用

文件与链接（重要）：

删除时确认删除提示：建议设置为需要提示确认删除

删除文件设置：建议设置为软件自带的回收站文件夹（.trash）

新建笔记的存放位置：推荐在根目录新建一个“00 inbox”文件夹作为新笔记的存放位置

附件默认存放路径：推荐在根目录新建一个“asset”文件夹作为附件的存放位置

快捷键：暂不涉及

核心插件（重要，是自带的插件，功能很多，但是需要自己手动开启）
	建议打开的插件：
	标签列表：显示打标签的笔记的信息
	日记（后面详细讲）
	模板（后面详细讲）
	星标：标记重点笔记
	大纲：目录功能
	幻灯片：精简PPT的功能 
	录音：录制音频保存到附件
	工作区：打开多个窗口，保存设置好的工作区布局

标签

内联标签

笔记有一个内联标签 #learn  ，而 frontmatter 中没有标签 

## 双链

入链（反向链接）与出链

双链的意义在于，将所有的知识编织、串联起来，形成一个网络，每个信息都不是独立的，从一个信息点就可以链接到很多很多的信息点。

线性笔记（各个独立笔记之间缺乏关联） vs 知识网络

管理知识片段

链接 -> 关联思维
片段 -> 整合思维

- 双向链接：链接到文章，输入两个中括号<kbd>[[]]</kbd>即可生成链接。`[[Note Name]]`
- 话题引用：链接到文章内某个标题，在链接内的文章名尾部输入<kbd>#</kbd>即可选择标题，`[[Note Name #header]]`
- 别名引用：为链接的内容起一个别名，在链接内的文章名尾部输入<kbd>|</kbd>即可自定义链接别名，`[[Note Name |alias]]`
- 块引用：链接到文章内的段落，指向具体的块：选中链接的文本块后输入<kbd>^</kbd>会自动生成随机的链接代码，可以自定义修改；在链接内的文章内容块尾部输入<kbd>^</kbd>即可选择文本块，`[[Note Name ^]]`
- 嵌入引用：将链接到的内容直接嵌入显示在当前文章中，在链接的开头的方括号前方加上<kbd>!</kbd>，`！[[Note Name]]`

 <kbd>#</kbd>、 <kbd>^</kbd>、 <kbd>|</kbd>三者可以组合使用

查看链接内容

按住<kbd>Ctrl</kbd>鼠标放到链接上，预览链接内容，如果无法预览，打开设置-核心插件-页面预览，即可。

打开链接面板

核心插件->反向链接&出链，可关闭开启。

关系图谱

## 使用建议

单个的符号后面都最好空一格

不同段落之间空一行

进度条
<progress value=20 max=100></progress>

[PKMer_Dataview 实战 - 进度条](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/dataview/dataview%E7%A4%BE%E5%8C%BA%E5%AE%9E%E8%B7%B5%E7%BB%8F%E9%AA%8C/dataview%E5%AE%9E%E6%88%98-%E8%BF%9B%E5%BA%A6%E6%9D%A1/)

汉字注音
```html
<ruby>咖<rp>(</rp><rt>ka</rt><rp>)</rp> 啡<rp>(</rp><rt>fei</rt><rp>)</rp> 豆<rp>(</rp><rt>dou</rt><rp>)</rp> 的<rp>(</rp><rt>de</rt><rp>)</rp> 拼<rp>(</rp><rt>pin</rt><rp>)</rp> 音<rp>(</rp><rt>yin</rt><rp>)</rp> 注<rp>(</rp><rt>zhu</rt><rp>)</rp> 解<rp>(</rp><rt>jie</rt><rp>)</rp> 小<rp>(</rp><rt>xiao</rt><rp>)</rp> 程<rp>(</rp><rt>cheng</rt><rp>)</rp> 序<rp>(</rp><rt>xu</rt><rp>)</rp> </ruby>
```

<ruby>咖<rp>(</rp><rt>ka</rt><rp>)</rp> 啡<rp>(</rp><rt>fei</rt><rp>)</rp> 豆<rp>(</rp><rt>dou</rt><rp>)</rp> 的<rp>(</rp><rt>de</rt><rp>)</rp> 拼<rp>(</rp><rt>pin</rt><rp>)</rp> 音<rp>(</rp><rt>yin</rt><rp>)</rp> 注<rp>(</rp><rt>zhu</rt><rp>)</rp> 解<rp>(</rp><rt>jie</rt><rp>)</rp> 小<rp>(</rp><rt>xiao</rt><rp>)</rp> 程<rp>(</rp><rt>cheng</rt><rp>)</rp> 序<rp>(</rp><rt>xu</rt><rp>)</rp> </ruby>

简单批注
```html
我们<u title="游戏狂">咖啡豆</u>喜欢的obsidian
```

我们<u title="游戏狂">咖啡豆</u>喜欢的obsidian

<mark style="background: transparent; color: yellow">黄色字体</mark>

图片链接按钮

[<img style="float:left" src="https://user-images.githubusercontent.com/14358394/115450238-f39e8100-a21b-11eb-89d0-fa4b82cdbce8.png" width="200">](https://buymeacoffee.com/)



## 白板
信息的可视化、逻辑化，更直观的解决信息筛选过滤，理清问题背后的逻辑关系。

## 模板
根据不同的应用场景创建结构相同而内容不同的读书笔记、会议记录、日记......

模板作为核心插件存在，以日记为例

1. 新建一个文件夹用来存放所有模板
2. 在其中创建需要的模板，如日记、会议记录
3. 在设置-核心插件-模板，指定模板文件夹的位置


### 使用模板的方法

1. 新建笔记
2. 点击左侧工具栏“插入模板”图标


### 占位符

官方文档详细教程：ob界面左下角，小问号，第一个选项，点进去有中文的

## obsidian命令面板（尽量使用英文版）

快捷键：<kbd>Ctrl</kbd>+<kbd>P</kbd>，集合了各种功能方便使用



### Obsidian快捷键

设置 - 快捷键，内可以设置各种快捷键功能

分配常用的功能

建议：为你设置的快捷键列出清单

<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>←</kbd>/<kbd>→</kbd>方向键代表前进后退



# 搜索和查询

搜索：针对笔记内容的查找，条件单一无需保存结果

搜索当前文档：<kbd>Ctrl</kbd>+<kbd>F</kbd>

搜索整个资料库：<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd>（需要先切换成英文）

搜索面板

搜索技巧：

直接搜索关键词

搜索包含多个关键词的文档（空格间隔，与）

搜索包含某一个关键词的文档（OR，或）

关键词之间介入-表示非的关系，包含前者但是不含后面的关键词

指定搜索范围：
```
文件名——file:word
文本内容——content:word
标签——tag:word
同一行中的多个关键词——line:word1 word2
同一章节中的多个关键词——section:word1 word2
同一段落（块）中的多个关键词——block:word1 word2

搜索任务
task：“”
task-todo：“”——未完成的任务
task-done：“”——已完成的任务
﻿
```

通过代码保存查询结果

搜索这项技能，概率小但一定会用到，对于“知道自己不知道”的知识进行妥善保存，当你需要时，知道在哪里能够找到。

借助 VScode 实现批量替换 Obsidian 库中的字符

可将OB库添加到 VScode 工作区中，点击搜索进行批量查找和替换。
# 插件

社区插件搜索下载&复制到plugins文件夹

使用插件的提醒：本身的功能定位最重要

不推荐的插件：改变OB自身定位、改变数据结构

插件类型：提供个性化功能；界面增强；展现增强；数据格式增强

推荐插件
## DataView

示例一 最近创建的文件
| File | 创建日期 |
| ---- | ---- |

{ .block-language-dataview}

把满足今天的日期减去创建文件的日期小于等于三天的文件，按照倒序排列，以表格的形式展示满足条件的文件的创建日期。

示例二 时间计算

今天已经过了 16.95 小时，占比 70.62%；还剩 7.05 小时，剩余：29.38%；
本周已经过了 16.95 小时，占比 10.09%；还剩 6.29 天，也就是 151.05 小时，剩余 89.91%；
12 月已经过了 760.95 小时，占比 96.08%；还剩 1.29 天，也就是 31.05 小时，剩余 3.92%；
今年已经过了366.71 天，占比 100.47%；还剩 1.29 天，也就是 31.05 小时，剩余：0.35%；


```
dataviewjs
// 最高文件夹级别tag列表
for (let group of dv.pages("").filter(p => p.file.folder != "").groupBy(p => p.file.folder.split("/")[0])) {
  dv.paragraph(`## ${group.key}`);
  dv.paragraph(
    dv.pages(`"${group.key}"`).file.tags.distinct().map(t => {return `[${t}](${t})`}).array().sort().join(" | "));
}
```

```
dataviewjs
// 主页最近创建文件示例
let now = moment();
dv.list(
	dv.pages()
		.filter(p => p["dg-publish"] === true) // 添加这一行来检查 dg-publish 元数据
		.sort(p => p.file.cday, 'desc') // 按文件创建日期降序排列
		.filter(p => moment(Number(p.file.cday)).isBetween(now.clone().subtract(7, 'days'), now, null, '[]')) // 筛选为最近七天
		.map(p => moment(Number(p.file.cday)).format('yyyy-MM-DD') + ' — ' + p.file.link) // 设置输出格式
		.limit(5)
)
```



[PKMer_Obsidian 插件：Dataview](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/dataview/dataview/)

[unable redener inline dataviewquery](https://github.com/oleeskild/digitalgarden/issues/141)

[Dataview 示例文件库](https://s-blu.github.io/obsidian_dataview_example_vault/)

[Dataview](https://blacksmithgu.github.io/obsidian-dataview/)

[DataviewJS 小白手册](https://forum-zh.obsidian.md/t/topic/27370)

[Dataviewjs的奇技淫巧](https://forum-zh.obsidian.md/t/topic/5954)

Excalidraw：流程图设计

CSS 多栏布局

参考MCL CSS：[MCL Multi Column—通过 CSS 和Callout实现分栏样式](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/css-%E7%89%87%E6%AE%B5/obsidian%E6%A0%B7%E5%BC%8F-mcl-multi-column/)



