---
{"dg-publish":true,"dg-home":false,"permalink":"/01-project/obsidian/","dgPassFrontmatter":true}
---

# Chapter1 obsidian简介

obsidian不是什么？
- 不是信息收集工具
- 不是Word
- 不是时间管理工具

obsidian是什么？
- 码字工具
- 深度管理知识内容片段的工具
	- 内容为基础
	- 链接为核心

我要用obsidian做什么？
- 写作
- 建立深度知识库
	- 关联知识点
	- 发现新知识点
- 建立索引
- 写清单日记

学obsidian真正重要的事

运用markdown码字
运用双链建立知识网络
最终形成自己的知识管理系统


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

## 基础的设置

语言：设置-关于-语言；

外观：背景颜色、字体大小、快速调整字体大小功能（Ctrl+鼠标滚轮）、主题（建议用默认）

编辑器：默认编辑模式（建议设置为实时预览）、其他功能较多，也比较常用

文件与链接（重要）：

删除时确认删除提示：建议设置为需要提示确认删除

删除文件设置：建议设置为软件自带的回收站文件夹（.trash）

新建笔记的存放位置：推荐在根目录新建一个“00 inbox”文件夹作为新笔记的存放位置

附件默认存放路径：推荐在根目录新建一个“asset”文件夹作为附件的存放位置

快捷键：暂不涉及

6、核心插件（重要）（是自带的插件，功能很多，但是需要自己手动开启）：

建议打开的插件：

标签列表：显示打标签的笔记的信息

日记（后面详细讲）

模板（后面详细讲）

星标：标记重点笔记

大纲：目录功能

幻灯片：精简PPT的功能 

录音：录制音频保存到附件

工作区：打开多个窗口，保存设置好的工作区布局


慢速迁移，精细整理

标签
链接
metainfo
索引


# Chapter 2 Markdown

## 常用语法：

加粗：**左右各两个星号**

斜体：*左右各一个星号*

删除线：~~左右各两个波浪线~~：“~”

无序列表：星号+空格

引用：英文大于符号+空格

分割线：英文状态下三个“-”

链接：英文中括号[]+小括号（），大括号内放链接名，小括号内放网址链接

待办事项任务列表：- [ ] ，空框："-"+空格+[]+空格，快捷键：Ctrl+L
勾选事项任务列表：- [x] ，空框："-"+空格+[x]+空格，



## 高级用法

输出公式

绘制流程图

[在线编辑器](https://www.zybuluo.com/mdeditor)

## 使用建议

标题"#"后面空一格，单个的符号后面都最好空一格

不同段落之间空一行


# Chapter 3：双链

入链（反向链接）

出链

双链的意义就在于，将所有的知识编织、串联起来，形成一个网络，每个信息都不是独立的，从一个信息点就可以链接到很多很多的信息点。



## 如何运用双链

### 创建链接

链接到文章：输入两个中括号即可生成链接。 

[[01 Project/人民公仆手册\|人民公仆手册]]

链接到文章内某个标题：在链接内的文章名尾部输入“#”即可选择标题。

[[01 Project/人民公仆手册#判断推理篇\|人民公仆手册#判断推理篇]]

链接到文章内的段落，指向具体的块：选中链接的文本块后输入”^“会自动生成随机的链接代码，可以自定义修改：在链接内的文章内容块尾部输入“^”即可选择文本块。

[[01 Project/人民公仆手册#^ff7a6c\|人民公仆手册#^ff7a6c]]


为链接的内容起一个别名：在链接内的文章名尾部输入“|”即可自定义链接别名

[[01 Project/人民公仆手册#^56a40f\|自建块]]


 “ # ” “ ^ ” “ | ” 可以组合使用

将链接到的内容直接显示在当前文章中：在链接的开头，方括号前方加上“ ! ”


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/01-project//" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# 行测的思维

# 判断推理篇

判断推理是一种以图形、词汇和语句为载体来考查考生逻辑思维能力的题型。考查题型分为图形推理、定义判断、类比推理、逻辑判断四种，从2013年开始，判断推理题型在国考中的考查题量每年均为40道；在各地省考中的考查题量为20〜50道。 ^ff7a6c

自建块的编号 ^56a40f




</div></div>




### 查看链接

查看链接内容

核心插件->页面预览

按住Ctrl鼠标放到链接上，预览链接内容，如果无法预览，打开设置-核心插件-页面预览，打开即可。


打开链接面板

核心插件->反向链接&出链，可关闭开启。

关系图谱

### 双链的意义

线性笔记（各个独立笔记之间缺乏关联） vs 知识网络

管理知识片段

链接 ->关联思维
片段 -> 整合思维

# Chapter 4 模板

### 应用场景

结构相同而内容不同：读书笔记、会议记录、日记......

### 创建模板的方法

模板作为核心插件存在，以日记为例

1. 新建一个文件夹用来存放所有模板

2. 在其中创建需要的模板，如日记、会议记录

3. 在设置-核心插件-模板，指定模板文件夹的位置


### 使用模板的方法

1. 新建笔记

2. 点击左侧工具栏“插入模板”图标


### 占位符

{{date}}、{{time}}、{{title}}

官方文档详细教程：ob界面左下角，小问号，第一个选项，点进去有中文的


## obsidian命令面板（尽量使用英文版）

快捷键：Ctrl + P，集合了各种功能方便使用



### obsidian快捷键

设置 - 快捷键，内可以设置各种快捷键功能

分配常用的功能

建议：为你设置的快捷键列出清单

Ctrl+Alt+←/→方向键代表前进后退

# Chapter 5 插件

社区插件搜索下载&复制到plugins文件夹

使用插件的提醒：本身的功能定位最重要

不推荐的插件：改变OB自身定位、改变数据结构

插件类型：提供个性化功能；界面增强；展现增强；数据格式增强

推荐插件

File Explorer Note Count：文件数量

Recent File：最近文件

Pandoc：word转换

Minimal Theme Setting：主题设置

Mindmap：把内容转换成思维导图，但不能编辑

Calendar：方便日记/周记新建和查找

Tasks：Ctrl+P调用命令面板，搜索Tasks

Obsidian memos：灵感记录，会在日记中过滤标签

Excalidraw：流程图设计

Quick Explore

# 搜索和查询

搜索：针对笔记内容的查找，条件单一无需保存结果

搜索当前文档：Ctrl+F

搜索整个资料库：Ctrl+Shift+F（需要先切換成英文）

搜索面板

搜索技巧：

直接搜索关键词

搜索包含多个关键词的文档（空格间隔，与）

搜索包含某一个关键词的文档（OR，或）

关键词之间介入-表示非的关系，包含前者但是不含后面的关键词

指定搜索范围：

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
通过代码保存查询结果
﻿
代码 query
```query

file:obsidian

``` 

搜索这项技能，概率小但一定会用到，对于“知道自己不知道”的知识进行妥善保存，当你需要时，知道在哪里能够找到。

Dataview 查询

查询：针对所有笔记共同属性的展示，条件复杂，需要保存结果

Obsidian的资料库里含有海量的内容数据，因此Dataview是把obsidian视作数据库的查询工具。

查询依据：YAML数据/Metainfo

在笔记开头输入英文状态下，首尾输入三个-

Obsidian支持的YAML字段，注意冒号后的空格
tags
publish
cssclass
aliases

自定义字段
category
date
time
title
rating

行内标记
One Field:: Value
文档打分 [rating::5] 分

dataview 语法

dataview 可以查询不属于obsidian自带的，由YAML自定义的任何属性

list|table|task
from
where
sort：asc-升序、desc-降序

```dataview
[list|table|task]field1,field2 as my field,
from #tag or "folder" or [[link]] or outgoing([[link]])
where field [>|>=|<|<=|=|&|'|'][field2|literal value](and field2 ...)(or field3...)
sort field [ascending|descending|asc|desc](ascending is implied if not provided)
```

查询方式：文件夹、标签

Obsidian文件属性
file.name：文件标题（字符串）
file.floder：文件所属文件夹路径
file.path：文件路径
file.size：（in bytes）文件大小
file.ctime：文件创建的时间（包含日期和时间）
file.mtime：文件修改的日期
file.cday：文件创建的日期
file.mday：文件修改的日期
file.tags：笔记中所有标签数组
file.etags：除去子标签的数组
file.inlinks：指向此文件的所有传入链接的数组
file.outlinks：此文件所有出站的链接数组
file.aliases：文件别名数组
file.day：如果文件名中有日期，那么会以这个字段显示。比如文件名中包含yyyy-mm-dd（年-月-日），那么就会存在这个metadata。




任务属性：

Task会继承所在文件的所有字段，如Task所在页面中包含了rating信息，那么task也会有
completed：任务是否完成
fullyCompeleted：任务及所有子任务是否完成
text：任务名
line：task所在行
path：task所在路径
section：连接到任务所在区块
link：连接到距离任务最近的可连接的区块
subtasks：子任务
real：如果为true，是一个真正的任务，否则就是一个任务之前或之后的元素列表
completion：任务完成的日期
due：任务到期时间
created：创建日期
annotated：如果任务有自定义标记则为True，否则为False



使用建议：保存常用查询、生成文件夹索引

