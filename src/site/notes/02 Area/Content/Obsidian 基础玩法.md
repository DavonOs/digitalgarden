---
{"dg-publish":true,"dg-permalink":"obsidianbasic","permalink":"/obsidianbasic/","metatags":{"description":"这里是 Obsidian 从0到1的新手入门指南","og:site_name":"DavonOs","og:title":"obsidian基础","og:type":"article","og:url":"https://zuji.eu.org/obsidianbasic","og:image":null,"og:image:width":"400","og:image:alt":"articlecover","og:locale":"zh_cn"},"tags":["obsidian"]}
---


[Obsidian Help - Home ](https://help.obsidian.md/Home)
<p><span>已使用 <em>Obsidian</em> 725 天，共创建 250 篇文档、231 个标签、11 个待办。 <br><br></span></p>
## 写在前面

开箱即用的库
- [GitHub - cumany/Blue-topaz-examples: Blue topaz themes example vault for Obsidian](https://github.com/cumany/Blue-topaz-examples)
    - 有非常多奇技淫巧，我个人建议可以将其作为大而全的词典，借鉴用法和代码，不推荐全盘照搬。
- [GitHub - Rainbell129/Obsidian-Homepage: A dashboard for your obsidian vault.](https://github.com/Rainbell129/Obsidian-Homepage)
    - 和cuman的库挺像，但功能收缩了很多，特色在于，dataview运用的很娴熟，可以作为dataview的实践教材。
- [给Obsidian新手科研人的开箱即用库：BCS’s Vault for Researchers V1.1](https://forum-zh.obsidian.md/t/topic/8114)
        - 这个库挺符合我的口味，对obsidian要用来做什么，不用来做什么有很清晰的定界。
- [GitHub - juestchaos/Obsidian-Plug-and-Play: 一个简单的Obsidian 库](https://github.com/juestchaos/Obsidian-Plug-and-Play)
        - 关注文本和内容本身，值得学习。
- [GitHub - sheldonxxd/obsidian_vault_template_for_researcher: This is an vault template for researchers using obsidian.](https://github.com/sheldonxxd/obsidian_vault_template_for_researcher)
        - 科研向的库，拒绝花里胡哨，符合我的胃口。
- [GitHub - laozhou-in-germany/Chens_LMS_Public: The LMS (Life Management System) is a free tool for personal knowledge management and goal management based on Obsidian.md.](https://github.com/laozhou-in-germany/Chens_LMS_Public)
        - 主打目标管理+dailynote+知识管理+回顾系统。配有各种丰富的模板。
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

# 双链

入链（反向链接）

出链

双链的意义就在于，将所有的知识编织、串联起来，形成一个网络，每个信息都不是独立的，从一个信息点就可以链接到很多很多的信息点。

## 如何运用双链

### 创建链接

链接到文章：输入两个中括号<kbd>[[]]</kbd>即可生成链接。 

[[01 Project/人民公仆/行测的思维\|行测的思维]]

链接到文章内某个标题：在链接内的文章名尾部输入<kbd>#</kbd>即可选择标题。

[[Easy Hugo#你的第一页 Your first page\|Easy Hugo#你的第一页 Your first page]]

链接到文章内的段落，指向具体的块：选中链接的文本块后输入<kbd>^</kbd>会自动生成随机的链接代码，可以自定义修改；在链接内的文章内容块尾部输入<kbd>^</kbd>即可选择文本块。

[[03 Resource/Book/图书专著/Python编程：从入门到实践（第 3 版）/第3章 列表简介#^3f2edd\|第3章 列表简介#^3f2edd]]

为链接的内容起一个别名：在链接内的文章名尾部输入<kbd>|</kbd>即可自定义链接别名

[[02 Area/沟通与表达#^4b541a\|个人特质]]

 “#” “^” “|” 可以组合使用

要将链接到的内容直接嵌入显示在当前文章中：在链接的开头，方括号前方加上<kbd>!</kbd>


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/archive/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





**归档** Archive：已完成或搁置的事情，来自其他三个类别的非活动项目

1. 已完成或取消的项目
2. 不再致力于维护的责任领域（例如关系结束或搬出公寓后）
3. 不再相关的资源（你失去兴趣的爱好或你不再关心的主题）

归档允许你将文件夹放在“冷藏库”中，不分散你的日常注意力，保持清晰的创作空间，同时永远妥善保留数字内容，以备不时之需。

无论你的笔记系统多么有条理、多么美观或令人印象深刻，都无关紧要。只有稳步完成实实在在的胜利，才能让你充满决心、动力和成就感。即使是最微小的突破也可以成为通往比你想象的更有创意、更有趣的未来的垫脚石。

[[02 Area/Content/Markdown 语法手册\|Markdown 语法手册]]
[[02 Area/Content/如何成长为一名合格的键盘侠\|如何成长为一名合格的键盘侠]]

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

# obsidian白板
信息的可视化、逻辑化，更直观的解决信息筛选过滤，理清问题背后的逻辑关系。

# 模板

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


官方文档详细教程：ob界面左下角，小问号，第一个选项，点进去有中文的


## obsidian命令面板（尽量使用英文版）

快捷键：Ctrl + P，集合了各种功能方便使用



### obsidian快捷键

设置 - 快捷键，内可以设置各种快捷键功能

分配常用的功能

建议：为你设置的快捷键列出清单

Ctrl+Alt+←/→方向键代表前进后退



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

借助VScode实现批量替换Obsidian库中的字符

可将OB库添加到VScode工作区中，点击搜索进行批量查找和替换。
# 插件

社区插件搜索下载&复制到plugins文件夹

使用插件的提醒：本身的功能定位最重要

不推荐的插件：改变OB自身定位、改变数据结构

插件类型：提供个性化功能；界面增强；展现增强；数据格式增强

推荐插件
DataView
Excalidraw：流程图设计



## DataView

示例一 最近创建的文件
| File | 创建日期 |
| ---- | ---- |

{ .block-language-dataview}

把满足今天的日期减去创建文件的日期小于等于三天的文件，按照倒序排列，以表格的形式展示满足条件的文件的创建日期。

示例二 时间计算

今天已经过了 9.5 小时，占比 39.58%；还剩 14.5 小时，剩余：60.42%；
本周已经过了 33.5 小时，占比 19.94%；还剩 5.6 天，也就是 134.5 小时，剩余 80.06%；
12 月已经过了 57.5 小时，占比 7.26%；还剩 30.6 天，也就是 734.5 小时，剩余 92.74%；
今年已经过了332.4 天，占比 91.07%；还剩 30.6 天，也就是 734.5 小时，剩余：8.38%；

```
<p><span><h2 data-heading="01 Project" dir="auto">01 Project</h2></span></p><p><span><a class="internal-link" data-href="#learn/git" href="#learn/git" target="_blank" rel="noopener"></a><a href="#learn/git" class="tag" target="_blank" rel="noopener">#learn/git</a> | <a class="internal-link" data-href="#learn" href="#learn" target="_blank" rel="noopener"></a><a href="#learn" class="tag" target="_blank" rel="noopener">#learn</a></span></p><p><span><h2 data-heading="02 Area" dir="auto">02 Area</h2></span></p><p><span><a class="internal-link" data-href="#excalidraw" href="#excalidraw" target="_blank" rel="noopener"></a><a href="#excalidraw" class="tag" target="_blank" rel="noopener">#excalidraw</a> | <a class="internal-link" data-href="#keyboard" href="#keyboard" target="_blank" rel="noopener"></a><a href="#keyboard" class="tag" target="_blank" rel="noopener">#keyboard</a> | <a class="internal-link" data-href="#learn" href="#learn" target="_blank" rel="noopener"></a><a href="#learn" class="tag" target="_blank" rel="noopener">#learn</a> | <a class="internal-link" data-href="#obsidian" href="#obsidian" target="_blank" rel="noopener"></a><a href="#obsidian" class="tag" target="_blank" rel="noopener">#obsidian</a></span></p><p><span><h2 data-heading="03 Resource" dir="auto">03 Resource</h2></span></p><p><span><a class="internal-link" data-href="#10到T间隔为-0" href="#10到T间隔为-0" target="_blank" rel="noopener"></a><a href="#10到T间隔为-0" class="tag" target="_blank" rel="noopener">#10到T间隔为-0</a> | <a class="internal-link" data-href="#200个随机正态数赋值到x" href="#200个随机正态数赋值到x" target="_blank" rel="noopener"></a><a href="#200个随机正态数赋值到x" class="tag" target="_blank" rel="noopener">#200个随机正态数赋值到x</a> | <a class="internal-link" data-href="#2乘2矩阵，对角线外的数目为分错的数目" href="#2乘2矩阵，对角线外的数目为分错的数目" target="_blank" rel="noopener"></a><a href="#2乘2矩阵，对角线外的数目为分错的数目" class="tag" target="_blank" rel="noopener">#2乘2矩阵，对角线外的数目为分错的数目</a> | <a class="internal-link" data-href="#5乘4矩阵" href="#5乘4矩阵" target="_blank" rel="noopener"></a><a href="#5乘4矩阵" class="tag" target="_blank" rel="noopener">#5乘4矩阵</a> | <a class="internal-link" data-href="#5维单位矩阵" href="#5维单位矩阵" target="_blank" rel="noopener"></a><a href="#5维单位矩阵" class="tag" target="_blank" rel="noopener">#5维单位矩阵</a> | <a class="internal-link" data-href="#MASS所带数据" href="#MASS所带数据" target="_blank" rel="noopener"></a><a href="#MASS所带数据" class="tag" target="_blank" rel="noopener">#MASS所带数据</a> | <a class="internal-link" data-href="#attach的逆运行" href="#attach的逆运行" target="_blank" rel="noopener"></a><a href="#attach的逆运行" class="tag" target="_blank" rel="noopener">#attach的逆运行</a> | <a class="internal-link" data-href="#books/A马列毛邓/A4毛著作" href="#books/A马列毛邓/A4毛著作" target="_blank" rel="noopener"></a><a href="#books/A马列毛邓/A4毛著作" class="tag" target="_blank" rel="noopener">#books/A马列毛邓/A4毛著作</a> | <a class="internal-link" data-href="#books/A马列毛邓" href="#books/A马列毛邓" target="_blank" rel="noopener"></a><a href="#books/A马列毛邓" class="tag" target="_blank" rel="noopener">#books/A马列毛邓</a> | <a class="internal-link" data-href="#books/B哲学宗教/B80思维科学" href="#books/B哲学宗教/B80思维科学" target="_blank" rel="noopener"></a><a href="#books/B哲学宗教/B80思维科学" class="tag" target="_blank" rel="noopener">#books/B哲学宗教/B80思维科学</a> | <a class="internal-link" data-href="#books/B哲学宗教/B84心理学" href="#books/B哲学宗教/B84心理学" target="_blank" rel="noopener"></a><a href="#books/B哲学宗教/B84心理学" class="tag" target="_blank" rel="noopener">#books/B哲学宗教/B84心理学</a> | <a class="internal-link" data-href="#books/B哲学宗教" href="#books/B哲学宗教" target="_blank" rel="noopener"></a><a href="#books/B哲学宗教" class="tag" target="_blank" rel="noopener">#books/B哲学宗教</a> | <a class="internal-link" data-href="#books/G科教文体/G4教育" href="#books/G科教文体/G4教育" target="_blank" rel="noopener"></a><a href="#books/G科教文体/G4教育" class="tag" target="_blank" rel="noopener">#books/G科教文体/G4教育</a> | <a class="internal-link" data-href="#books/G科教文体" href="#books/G科教文体" target="_blank" rel="noopener"></a><a href="#books/G科教文体" class="tag" target="_blank" rel="noopener">#books/G科教文体</a> | <a class="internal-link" data-href="#books/T工业技术/TP自动化技术、计算机技术" href="#books/T工业技术/TP自动化技术、计算机技术" target="_blank" rel="noopener"></a><a href="#books/T工业技术/TP自动化技术、计算机技术" class="tag" target="_blank" rel="noopener">#books/T工业技术/TP自动化技术、计算机技术</a> | <a class="internal-link" data-href="#books/T工业技术" href="#books/T工业技术" target="_blank" rel="noopener"></a><a href="#books/T工业技术" class="tag" target="_blank" rel="noopener">#books/T工业技术</a> | <a class="internal-link" data-href="#books" href="#books" target="_blank" rel="noopener"></a><a href="#books" class="tag" target="_blank" rel="noopener">#books</a> | <a class="internal-link" data-href="#carsBtl■些信息" href="#carsBtl■些信息" target="_blank" rel="noopener"></a><a href="#carsBtl■些信息" class="tag" target="_blank" rel="noopener">#carsBtl■些信息</a> | <a class="internal-link" data-href="#cars" href="#cars" target="_blank" rel="noopener"></a><a href="#cars" class="tag" target="_blank" rel="noopener">#cars</a> | <a class="internal-link" data-href="#cars数据的变量名字" href="#cars数据的变量名字" target="_blank" rel="noopener"></a><a href="#cars数据的变量名字" class="tag" target="_blank" rel="noopener">#cars数据的变量名字</a> | <a class="internal-link" data-href="#cars的type" href="#cars的type" target="_blank" rel="noopener"></a><a href="#cars的type" class="tag" target="_blank" rel="noopener">#cars的type</a> | <a class="internal-link" data-href="#cars的最后几行数据" href="#cars的最后几行数据" target="_blank" rel="noopener"></a><a href="#cars的最后几行数据" class="tag" target="_blank" rel="noopener">#cars的最后几行数据</a> | <a class="internal-link" data-href="#cars的维数" href="#cars的维数" target="_blank" rel="noopener"></a><a href="#cars的维数" class="tag" target="_blank" rel="noopener">#cars的维数</a> | <a class="internal-link" data-href="#cars的行歹U数" href="#cars的行歹U数" target="_blank" rel="noopener"></a><a href="#cars的行歹U数" class="tag" target="_blank" rel="noopener">#cars的行歹U数</a> | <a class="internal-link" data-href="#ffljscreeS" href="#ffljscreeS" target="_blank" rel="noopener"></a><a href="#ffljscreeS" class="tag" target="_blank" rel="noopener">#ffljscreeS</a> | <a class="internal-link" data-href="#learn/python" href="#learn/python" target="_blank" rel="noopener"></a><a href="#learn/python" class="tag" target="_blank" rel="noopener">#learn/python</a> | <a class="internal-link" data-href="#learn" href="#learn" target="_blank" rel="noopener"></a><a href="#learn" class="tag" target="_blank" rel="noopener">#learn</a> | <a class="internal-link" data-href="#listen" href="#listen" target="_blank" rel="noopener"></a><a href="#listen" class="tag" target="_blank" rel="noopener">#listen</a> | <a class="internal-link" data-href="#logistic回归在glm中属于binomial族" href="#logistic回归在glm中属于binomial族" target="_blank" rel="noopener"></a><a href="#logistic回归在glm中属于binomial族" class="tag" target="_blank" rel="noopener">#logistic回归在glm中属于binomial族</a> | <a class="internal-link" data-href="#mm" href="#mm" target="_blank" rel="noopener"></a><a href="#mm" class="tag" target="_blank" rel="noopener">#mm</a> | <a class="internal-link" data-href="#m为测试集下标集合" href="#m为测试集下标集合" target="_blank" rel="noopener"></a><a href="#m为测试集下标集合" class="tag" target="_blank" rel="noopener">#m为测试集下标集合</a> | <a class="internal-link" data-href="#pomodoro" href="#pomodoro" target="_blank" rel="noopener"></a><a href="#pomodoro" class="tag" target="_blank" rel="noopener">#pomodoro</a> | <a class="internal-link" data-href="#x" href="#x" target="_blank" rel="noopener"></a><a href="#x" class="tag" target="_blank" rel="noopener">#x</a> | <a class="internal-link" data-href="#x的对角线元素" href="#x的对角线元素" target="_blank" rel="noopener"></a><a href="#x的对角线元素" class="tag" target="_blank" rel="noopener">#x的对角线元素</a> | <a class="internal-link" data-href="#■" href="#■" target="_blank" rel="noopener"></a><a href="#■" class="tag" target="_blank" rel="noopener">#■</a> | <a class="internal-link" data-href="#三次重复" href="#三次重复" target="_blank" rel="noopener"></a><a href="#三次重复" class="tag" target="_blank" rel="noopener">#三次重复</a> | <a class="internal-link" data-href="#上面口为样本量" href="#上面口为样本量" target="_blank" rel="noopener"></a><a href="#上面口为样本量" class="tag" target="_blank" rel="noopener">#上面口为样本量</a> | <a class="internal-link" data-href="#下面是从该数据得到的各种表格" href="#下面是从该数据得到的各种表格" target="_blank" rel="noopener"></a><a href="#下面是从该数据得到的各种表格" class="tag" target="_blank" rel="noopener">#下面是从该数据得到的各种表格</a> | <a class="internal-link" data-href="#下面构造一个10维复向量，实部和虚部均为10个标准状态样本点：" href="#下面构造一个10维复向量，实部和虚部均为10个标准状态样本点：" target="_blank" rel="noopener"></a><a href="#下面构造一个10维复向量，实部和虚部均为10个标准状态样本点：" class="tag" target="_blank" rel="noopener">#下面构造一个10维复向量，实部和虚部均为10个标准状态样本点：</a> | <a class="internal-link" data-href="#下面每个kk" href="#下面每个kk" target="_blank" rel="noopener"></a><a href="#下面每个kk" class="tag" target="_blank" rel="noopener">#下面每个kk</a> | <a class="internal-link" data-href="#下面输出训练集及测试集的平均NMSE" href="#下面输出训练集及测试集的平均NMSE" target="_blank" rel="noopener"></a><a href="#下面输出训练集及测试集的平均NMSE" class="tag" target="_blank" rel="noopener">#下面输出训练集及测试集的平均NMSE</a> | <a class="internal-link" data-href="#不合题意的图" href="#不合题意的图" target="_blank" rel="noopener"></a><a href="#不合题意的图" class="tag" target="_blank" rel="noopener">#不合题意的图</a> | <a class="internal-link" data-href="#不断游走，直到列表达到指定的长度" href="#不断游走，直到列表达到指定的长度" target="_blank" rel="noopener"></a><a href="#不断游走，直到列表达到指定的长度" class="tag" target="_blank" rel="noopener">#不断游走，直到列表达到指定的长度</a> | <a class="internal-link" data-href="#不行！会给出警告" href="#不行！会给出警告" target="_blank" rel="noopener"></a><a href="#不行！会给出警告" class="tag" target="_blank" rel="noopener">#不行！会给出警告</a> | <a class="internal-link" data-href="#两个数据的交" href="#两个数据的交" target="_blank" rel="noopener"></a><a href="#两个数据的交" class="tag" target="_blank" rel="noopener">#两个数据的交</a> | <a class="internal-link" data-href="#两种不同的类型" href="#两种不同的类型" target="_blank" rel="noopener"></a><a href="#两种不同的类型" class="tag" target="_blank" rel="noopener">#两种不同的类型</a> | <a class="internal-link" data-href="#为得到下三角阵，用x" href="#为得到下三角阵，用x" target="_blank" rel="noopener"></a><a href="#为得到下三角阵，用x" class="tag" target="_blank" rel="noopener">#为得到下三角阵，用x</a> | <a class="internal-link" data-href="#义和2之间的不同元素一集合差" href="#义和2之间的不同元素一集合差" target="_blank" rel="noopener"></a><a href="#义和2之间的不同元素一集合差" class="tag" target="_blank" rel="noopener">#义和2之间的不同元素一集合差</a> | <a class="internal-link" data-href="#什么结果？注：NA为缺失值" href="#什么结果？注：NA为缺失值" target="_blank" rel="noopener"></a><a href="#什么结果？注：NA为缺失值" class="tag" target="_blank" rel="noopener">#什么结果？注：NA为缺失值</a> | <a class="internal-link" data-href="#从1" href="#从1" target="_blank" rel="noopener"></a><a href="#从1" class="tag" target="_blank" rel="noopener">#从1</a> | <a class="internal-link" data-href="#从x放回地随机抽取工00个值作为样本" href="#从x放回地随机抽取工00个值作为样本" target="_blank" rel="noopener"></a><a href="#从x放回地随机抽取工00个值作为样本" class="tag" target="_blank" rel="noopener">#从x放回地随机抽取工00个值作为样本</a> | <a class="internal-link" data-href="#从列表中选择有变量名的数据" href="#从列表中选择有变量名的数据" target="_blank" rel="noopener"></a><a href="#从列表中选择有变量名的数据" class="tag" target="_blank" rel="noopener">#从列表中选择有变量名的数据</a> | <a class="internal-link" data-href="#从工，" href="#从工，" target="_blank" rel="noopener"></a><a href="#从工，" class="tag" target="_blank" rel="noopener">#从工，</a> | <a class="internal-link" data-href="#以1" href="#以1" target="_blank" rel="noopener"></a><a href="#以1" class="tag" target="_blank" rel="noopener">#以1</a> | <a class="internal-link" data-href="#以y为下标的n的元素值" href="#以y为下标的n的元素值" target="_blank" rel="noopener"></a><a href="#以y为下标的n的元素值" class="tag" target="_blank" rel="noopener">#以y为下标的n的元素值</a> | <a class="internal-link" data-href="#使用全部变邕用决策树拟合全部数据并打印输出" href="#使用全部变邕用决策树拟合全部数据并打印输出" target="_blank" rel="noopener"></a><a href="#使用全部变邕用决策树拟合全部数据并打印输出" class="tag" target="_blank" rel="noopener">#使用全部变邕用决策树拟合全部数据并打印输出</a> | <a class="internal-link" data-href="#使用全部变量，用决策树拟合全部数据并打印输出" href="#使用全部变量，用决策树拟合全部数据并打印输出" target="_blank" rel="noopener"></a><a href="#使用全部变量，用决策树拟合全部数据并打印输出" class="tag" target="_blank" rel="noopener">#使用全部变量，用决策树拟合全部数据并打印输出</a> | <a class="internal-link" data-href="#做Fisher精确检验" href="#做Fisher精确检验" target="_blank" rel="noopener"></a><a href="#做Fisher精确检验" class="tag" target="_blank" rel="noopener">#做Fisher精确检验</a> | <a class="internal-link" data-href="#做回归" href="#做回归" target="_blank" rel="noopener"></a><a href="#做回归" class="tag" target="_blank" rel="noopener">#做回归</a> | <a class="internal-link" data-href="#做逐步回归筛选变量" href="#做逐步回归筛选变量" target="_blank" rel="noopener"></a><a href="#做逐步回归筛选变量" class="tag" target="_blank" rel="noopener">#做逐步回归筛选变量</a> | <a class="internal-link" data-href="#准备画两个并排的图" href="#准备画两个并排的图" target="_blank" rel="noopener"></a><a href="#准备画两个并排的图" class="tag" target="_blank" rel="noopener">#准备画两个并排的图</a> | <a class="internal-link" data-href="#函数可以不写return" href="#函数可以不写return" target="_blank" rel="noopener"></a><a href="#函数可以不写return" class="tag" target="_blank" rel="noopener">#函数可以不写return</a> | <a class="internal-link" data-href="#分开两个区域" href="#分开两个区域" target="_blank" rel="noopener"></a><a href="#分开两个区域" class="tag" target="_blank" rel="noopener">#分开两个区域</a> | <a class="internal-link" data-href="#分开两个数据" href="#分开两个数据" target="_blank" rel="noopener"></a><a href="#分开两个数据" class="tag" target="_blank" rel="noopener">#分开两个数据</a> | <a class="internal-link" data-href="#分析结果" href="#分析结果" target="_blank" rel="noopener"></a><a href="#分析结果" class="tag" target="_blank" rel="noopener">#分析结果</a> | <a class="internal-link" data-href="#创建一个D6" href="#创建一个D6" target="_blank" rel="noopener"></a><a href="#创建一个D6" class="tag" target="_blank" rel="noopener">#创建一个D6</a> | <a class="internal-link" data-href="#创建一个RandomWalk实例" href="#创建一个RandomWalk实例" target="_blank" rel="noopener"></a><a href="#创建一个RandomWalk实例" class="tag" target="_blank" rel="noopener">#创建一个RandomWalk实例</a> | <a class="internal-link" data-href="#创建一个Randomwalk实例" href="#创建一个Randomwalk实例" target="_blank" rel="noopener"></a><a href="#创建一个Randomwalk实例" class="tag" target="_blank" rel="noopener">#创建一个Randomwalk实例</a> | <a class="internal-link" data-href="#创建两个D6" href="#创建两个D6" target="_blank" rel="noopener"></a><a href="#创建两个D6" class="tag" target="_blank" rel="noopener">#创建两个D6</a> | <a class="internal-link" data-href="#创建悬停文本" href="#创建悬停文本" target="_blank" rel="noopener"></a><a href="#创建悬停文本" class="tag" target="_blank" rel="noopener">#创建悬停文本</a> | <a class="internal-link" data-href="#删去缺失值的数据" href="#删去缺失值的数据" target="_blank" rel="noopener"></a><a href="#删去缺失值的数据" class="tag" target="_blank" rel="noopener">#删去缺失值的数据</a> | <a class="internal-link" data-href="#判断每行有没有缺失值" href="#判断每行有没有缺失值" target="_blank" rel="noopener"></a><a href="#判断每行有没有缺失值" class="tag" target="_blank" rel="noopener">#判断每行有没有缺失值</a> | <a class="internal-link" data-href="#制表" href="#制表" target="_blank" rel="noopener"></a><a href="#制表" class="tag" target="_blank" rel="noopener">#制表</a> | <a class="internal-link" data-href="#力或仇-仇a" href="#力或仇-仇a" target="_blank" rel="noopener"></a><a href="#力或仇-仇a" class="tag" target="_blank" rel="noopener">#力或仇-仇a</a> | <a class="internal-link" data-href="#升塞排列的x的下标" href="#升塞排列的x的下标" target="_blank" rel="noopener"></a><a href="#升塞排列的x的下标" class="tag" target="_blank" rel="noopener">#升塞排列的x的下标</a> | <a class="internal-link" data-href="#单位特征向量等" href="#单位特征向量等" target="_blank" rel="noopener"></a><a href="#单位特征向量等" class="tag" target="_blank" rel="noopener">#单位特征向量等</a> | <a class="internal-link" data-href="#博征值的平方根" href="#博征值的平方根" target="_blank" rel="noopener"></a><a href="#博征值的平方根" class="tag" target="_blank" rel="noopener">#博征值的平方根</a> | <a class="internal-link" data-href="#去掉矩阵重复的行" href="#去掉矩阵重复的行" target="_blank" rel="noopener"></a><a href="#去掉矩阵重复的行" class="tag" target="_blank" rel="noopener">#去掉矩阵重复的行</a> | <a class="internal-link" data-href="#双等号为逻辑等式" href="#双等号为逻辑等式" target="_blank" rel="noopener"></a><a href="#双等号为逻辑等式" class="tag" target="_blank" rel="noopener">#双等号为逻辑等式</a> | <a class="internal-link" data-href="#只要程序处于活动状态，就不断地模拟随机游走" href="#只要程序处于活动状态，就不断地模拟随机游走" target="_blank" rel="noopener"></a><a href="#只要程序处于活动状态，就不断地模拟随机游走" class="tag" target="_blank" rel="noopener">#只要程序处于活动状态，就不断地模拟随机游走</a> | <a class="internal-link" data-href="#可以对部分维做均值运算" href="#可以对部分维做均值运算" target="_blank" rel="noopener"></a><a href="#可以对部分维做均值运算" class="tag" target="_blank" rel="noopener">#可以对部分维做均值运算</a> | <a class="internal-link" data-href="#可以对部分维做求乘积运算" href="#可以对部分维做求乘积运算" target="_blank" rel="noopener"></a><a href="#可以对部分维做求乘积运算" class="tag" target="_blank" rel="noopener">#可以对部分维做求乘积运算</a> | <a class="internal-link" data-href="#可以对部分维做求和运算" href="#可以对部分维做求和运算" target="_blank" rel="noopener"></a><a href="#可以对部分维做求和运算" class="tag" target="_blank" rel="noopener">#可以对部分维做求和运算</a> | <a class="internal-link" data-href="#可视化" href="#可视化" target="_blank" rel="noopener"></a><a href="#可视化" class="tag" target="_blank" rel="noopener">#可视化</a> | <a class="internal-link" data-href="#可视化结果" href="#可视化结果" target="_blank" rel="noopener"></a><a href="#可视化结果" class="tag" target="_blank" rel="noopener">#可视化结果</a> | <a class="internal-link" data-href="#各数目庙到的概率与1" href="#各数目庙到的概率与1" target="_blank" rel="noopener"></a><a href="#各数目庙到的概率与1" class="tag" target="_blank" rel="noopener">#各数目庙到的概率与1</a> | <a class="internal-link" data-href="#同上" href="#同上" target="_blank" rel="noopener"></a><a href="#同上" class="tag" target="_blank" rel="noopener">#同上</a> | <a class="internal-link" data-href="#同上，只不过显示出来" href="#同上，只不过显示出来" target="_blank" rel="noopener"></a><a href="#同上，只不过显示出来" class="tag" target="_blank" rel="noopener">#同上，只不过显示出来</a> | <a class="internal-link" data-href="#同上：升幕排列的x" href="#同上：升幕排列的x" target="_blank" rel="noopener"></a><a href="#同上：升幕排列的x" class="tag" target="_blank" rel="noopener">#同上：升幕排列的x</a> | <a class="internal-link" data-href="#向量乘法" href="#向量乘法" target="_blank" rel="noopener"></a><a href="#向量乘法" class="tag" target="_blank" rel="noopener">#向量乘法</a> | <a class="internal-link" data-href="#向量加法" href="#向量加法" target="_blank" rel="noopener"></a><a href="#向量加法" class="tag" target="_blank" rel="noopener">#向量加法</a> | <a class="internal-link" data-href="#和上面一样" href="#和上面一样" target="_blank" rel="noopener"></a><a href="#和上面一样" class="tag" target="_blank" rel="noopener">#和上面一样</a> | <a class="internal-link" data-href="#和上面一样，有些繁琐，是吧！没有人这么用" href="#和上面一样，有些繁琐，是吧！没有人这么用" target="_blank" rel="noopener"></a><a href="#和上面一样，有些繁琐，是吧！没有人这么用" class="tag" target="_blank" rel="noopener">#和上面一样，有些繁琐，是吧！没有人这么用</a> | <a class="internal-link" data-href="#四舍五入" href="#四舍五入" target="_blank" rel="noopener"></a><a href="#四舍五入" class="tag" target="_blank" rel="noopener">#四舍五入</a> | <a class="internal-link" data-href="#四舍五入，等于round" href="#四舍五入，等于round" target="_blank" rel="noopener"></a><a href="#四舍五入，等于round" class="tag" target="_blank" rel="noopener">#四舍五入，等于round</a> | <a class="internal-link" data-href="#回归结果" href="#回归结果" target="_blank" rel="noopener"></a><a href="#回归结果" class="tag" target="_blank" rel="noopener">#回归结果</a> | <a class="internal-link" data-href="#因子得分" href="#因子得分" target="_blank" rel="noopener"></a><a href="#因子得分" class="tag" target="_blank" rel="noopener">#因子得分</a> | <a class="internal-link" data-href="#在pl。t命令后面追加点" href="#在pl。t命令后面追加点" target="_blank" rel="noopener"></a><a href="#在pl。t命令后面追加点" class="tag" target="_blank" rel="noopener">#在pl。t命令后面追加点</a> | <a class="internal-link" data-href="#在指定位置加文字" href="#在指定位置加文字" target="_blank" rel="noopener"></a><a href="#在指定位置加文字" class="tag" target="_blank" rel="noopener">#在指定位置加文字</a> | <a class="internal-link" data-href="#在直方图下面加上实际点的大小" href="#在直方图下面加上实际点的大小" target="_blank" rel="noopener"></a><a href="#在直方图下面加上实际点的大小" class="tag" target="_blank" rel="noopener">#在直方图下面加上实际点的大小</a> | <a class="internal-link" data-href="#均值差的估计" href="#均值差的估计" target="_blank" rel="noopener"></a><a href="#均值差的估计" class="tag" target="_blank" rel="noopener">#均值差的估计</a> | <a class="internal-link" data-href="#处理有关仓库的信息" href="#处理有关仓库的信息" target="_blank" rel="noopener"></a><a href="#处理有关仓库的信息" class="tag" target="_blank" rel="noopener">#处理有关仓库的信息</a> | <a class="internal-link" data-href="#处理有关每篇文章的信息" href="#处理有关每篇文章的信息" target="_blank" rel="noopener"></a><a href="#处理有关每篇文章的信息" class="tag" target="_blank" rel="noopener">#处理有关每篇文章的信息</a> | <a class="internal-link" data-href="#如果知道根为极值" href="#如果知道根为极值" target="_blank" rel="noopener"></a><a href="#如果知道根为极值" class="tag" target="_blank" rel="noopener">#如果知道根为极值</a> | <a class="internal-link" data-href="#字符向量" href="#字符向量" target="_blank" rel="noopener"></a><a href="#字符向量" class="tag" target="_blank" rel="noopener">#字符向量</a> | <a class="internal-link" data-href="#完整观测值的个数" href="#完整观测值的个数" target="_blank" rel="noopener"></a><a href="#完整观测值的个数" class="tag" target="_blank" rel="noopener">#完整观测值的个数</a> | <a class="internal-link" data-href="#定义一个二次函数" href="#定义一个二次函数" target="_blank" rel="noopener"></a><a href="#定义一个二次函数" class="tag" target="_blank" rel="noopener">#定义一个二次函数</a> | <a class="internal-link" data-href="#实部" href="#实部" target="_blank" rel="noopener"></a><a href="#实部" class="tag" target="_blank" rel="noopener">#实部</a> | <a class="internal-link" data-href="#对两变量相关做卡方检验" href="#对两变量相关做卡方检验" target="_blank" rel="noopener"></a><a href="#对两变量相关做卡方检验" class="tag" target="_blank" rel="noopener">#对两变量相关做卡方检验</a> | <a class="internal-link" data-href="#对乂工及n的并的元素与x是否一样" href="#对乂工及n的并的元素与x是否一样" target="_blank" rel="noopener"></a><a href="#对乂工及n的并的元素与x是否一样" class="tag" target="_blank" rel="noopener">#对乂工及n的并的元素与x是否一样</a> | <a class="internal-link" data-href="#对于每篇文章，都创建一个字典" href="#对于每篇文章，都创建一个字典" target="_blank" rel="noopener"></a><a href="#对于每篇文章，都创建一个字典" class="tag" target="_blank" rel="noopener">#对于每篇文章，都创建一个字典</a> | <a class="internal-link" data-href="#对于每篇文章，都执行一个API调用" href="#对于每篇文章，都执行一个API调用" target="_blank" rel="noopener"></a><a href="#对于每篇文章，都执行一个API调用" class="tag" target="_blank" rel="noopener">#对于每篇文章，都执行一个API调用</a> | <a class="internal-link" data-href="#对列" href="#对列" target="_blank" rel="noopener"></a><a href="#对列" class="tag" target="_blank" rel="noopener">#对列</a> | <a class="internal-link" data-href="#对每一组训练集和测试集做一次，共k次" href="#对每一组训练集和测试集做一次，共k次" target="_blank" rel="noopener"></a><a href="#对每一组训练集和测试集做一次，共k次" class="tag" target="_blank" rel="noopener">#对每一组训练集和测试集做一次，共k次</a> | <a class="internal-link" data-href="#对测试集预测" href="#对测试集预测" target="_blank" rel="noopener"></a><a href="#对测试集预测" class="tag" target="_blank" rel="noopener">#对测试集预测</a> | <a class="internal-link" data-href="#对结果进行可视化" href="#对结果进行可视化" target="_blank" rel="noopener"></a><a href="#对结果进行可视化" class="tag" target="_blank" rel="noopener">#对结果进行可视化</a> | <a class="internal-link" data-href="#对行" href="#对行" target="_blank" rel="noopener"></a><a href="#对行" class="tag" target="_blank" rel="noopener">#对行</a> | <a class="internal-link" data-href="#将A库名转换为链接" href="#将A库名转换为链接" target="_blank" rel="noopener"></a><a href="#将A库名转换为链接" class="tag" target="_blank" rel="noopener">#将A库名转换为链接</a> | <a class="internal-link" data-href="#将所有的点都绘制出来" href="#将所有的点都绘制出来" target="_blank" rel="noopener"></a><a href="#将所有的点都绘制出来" class="tag" target="_blank" rel="noopener">#将所有的点都绘制出来</a> | <a class="internal-link" data-href="#将数据作为字符串读取并转换为Python对象" href="#将数据作为字符串读取并转换为Python对象" target="_blank" rel="noopener"></a><a href="#将数据作为字符串读取并转换为Python对象" class="tag" target="_blank" rel="noopener">#将数据作为字符串读取并转换为Python对象</a> | <a class="internal-link" data-href="#将数据文件转换为更易于阅读的版本" href="#将数据文件转换为更易于阅读的版本" target="_blank" rel="noopener"></a><a href="#将数据文件转换为更易于阅读的版本" class="tag" target="_blank" rel="noopener">#将数据文件转换为更易于阅读的版本</a> | <a class="internal-link" data-href="#差分" href="#差分" target="_blank" rel="noopener"></a><a href="#差分" class="tag" target="_blank" rel="noopener">#差分</a> | <a class="internal-link" data-href="#平方根" href="#平方根" target="_blank" rel="noopener"></a><a href="#平方根" class="tag" target="_blank" rel="noopener">#平方根</a> | <a class="internal-link" data-href="#应该是单位向量，但浮点运算不可能得到干净的0" href="#应该是单位向量，但浮点运算不可能得到干净的0" target="_blank" rel="noopener"></a><a href="#应该是单位向量，但浮点运算不可能得到干净的0" class="tag" target="_blank" rel="noopener">#应该是单位向量，但浮点运算不可能得到干净的0</a> | <a class="internal-link" data-href="#建立一些向量以存结果" href="#建立一些向量以存结果" target="_blank" rel="noopener"></a><a href="#建立一些向量以存结果" class="tag" target="_blank" rel="noopener">#建立一些向量以存结果</a> | <a class="internal-link" data-href="#得到上三角阵，" href="#得到上三角阵，" target="_blank" rel="noopener"></a><a href="#得到上三角阵，" class="tag" target="_blank" rel="noopener">#得到上三角阵，</a> | <a class="internal-link" data-href="#所有随机游走都始于" href="#所有随机游走都始于" target="_blank" rel="noopener"></a><a href="#所有随机游走都始于" class="tag" target="_blank" rel="noopener">#所有随机游走都始于</a> | <a class="internal-link" data-href="#打印" href="#打印" target="_blank" rel="noopener"></a><a href="#打印" class="tag" target="_blank" rel="noopener">#打印</a> | <a class="internal-link" data-href="#扫描文件数值数据到y" href="#扫描文件数值数据到y" target="_blank" rel="noopener"></a><a href="#扫描文件数值数据到y" class="tag" target="_blank" rel="noopener">#扫描文件数值数据到y</a> | <a class="internal-link" data-href="#把数据" href="#把数据" target="_blank" rel="noopener"></a><a href="#把数据" class="tag" target="_blank" rel="noopener">#把数据</a> | <a class="internal-link" data-href="#把数据变量的名字放入内存" href="#把数据变量的名字放入内存" target="_blank" rel="noopener"></a><a href="#把数据变量的名字放入内存" class="tag" target="_blank" rel="noopener">#把数据变量的名字放入内存</a> | <a class="internal-link" data-href="#把预测结果转换成原先的值" href="#把预测结果转换成原先的值" target="_blank" rel="noopener"></a><a href="#把预测结果转换成原先的值" class="tag" target="_blank" rel="noopener">#把预测结果转换成原先的值</a> | <a class="internal-link" data-href="#抽样" href="#抽样" target="_blank" rel="noopener"></a><a href="#抽样" class="tag" target="_blank" rel="noopener">#抽样</a> | <a class="internal-link" data-href="#指数也可以是向量" href="#指数也可以是向量" target="_blank" rel="noopener"></a><a href="#指数也可以是向量" class="tag" target="_blank" rel="noopener">#指数也可以是向量</a> | <a class="internal-link" data-href="#掷几次骰子并将结果存储在一个列表中" href="#掷几次骰子并将结果存储在一个列表中" target="_blank" rel="noopener"></a><a href="#掷几次骰子并将结果存储在一个列表中" class="tag" target="_blank" rel="noopener">#掷几次骰子并将结果存储在一个列表中</a> | <a class="internal-link" data-href="#掷骰子多次，并将结果存储到一个列表中" href="#掷骰子多次，并将结果存储到一个列表中" target="_blank" rel="noopener"></a><a href="#掷骰子多次，并将结果存储到一个列表中" class="tag" target="_blank" rel="noopener">#掷骰子多次，并将结果存储到一个列表中</a> | <a class="internal-link" data-href="#提取日期、最高温度和最低温度" href="#提取日期、最高温度和最低温度" target="_blank" rel="noopener"></a><a href="#提取日期、最高温度和最低温度" class="tag" target="_blank" rel="noopener">#提取日期、最高温度和最低温度</a> | <a class="internal-link" data-href="#提取日期和最高温度" href="#提取日期和最高温度" target="_blank" rel="noopener"></a><a href="#提取日期和最高温度" class="tag" target="_blank" rel="noopener">#提取日期和最高温度</a> | <a class="internal-link" data-href="#提高温" href="#提高温" target="_blank" rel="noopener"></a><a href="#提高温" class="tag" target="_blank" rel="noopener">#提高温</a> | <a class="internal-link" data-href="#散点图" href="#散点图" target="_blank" rel="noopener"></a><a href="#散点图" class="tag" target="_blank" rel="noopener">#散点图</a> | <a class="internal-link" data-href="#方括号中为向量N的下标" href="#方括号中为向量N的下标" target="_blank" rel="noopener"></a><a href="#方括号中为向量N的下标" class="tag" target="_blank" rel="noopener">#方括号中为向量N的下标</a> | <a class="internal-link" data-href="#最后得到的mm的每一个分量mm" href="#最后得到的mm的每一个分量mm" target="_blank" rel="noopener"></a><a href="#最后得到的mm的每一个分量mm" class="tag" target="_blank" rel="noopener">#最后得到的mm的每一个分量mm</a> | <a class="internal-link" data-href="#有缺失值" href="#有缺失值" target="_blank" rel="noopener"></a><a href="#有缺失值" class="tag" target="_blank" rel="noopener">#有缺失值</a> | <a class="internal-link" data-href="#有缺失值的行号" href="#有缺失值的行号" target="_blank" rel="noopener"></a><a href="#有缺失值的行号" class="tag" target="_blank" rel="noopener">#有缺失值的行号</a> | <a class="internal-link" data-href="#极值，与range" href="#极值，与range" target="_blank" rel="noopener"></a><a href="#极值，与range" class="tag" target="_blank" rel="noopener">#极值，与range</a> | <a class="internal-link" data-href="#构造一个线性关系" href="#构造一个线性关系" target="_blank" rel="noopener"></a><a href="#构造一个线性关系" class="tag" target="_blank" rel="noopener">#构造一个线性关系</a> | <a class="internal-link" data-href="#查看数据集中的所有地屋" href="#查看数据集中的所有地屋" target="_blank" rel="noopener"></a><a href="#查看数据集中的所有地屋" class="tag" target="_blank" rel="noopener">#查看数据集中的所有地屋</a> | <a class="internal-link" data-href="#标准差" href="#标准差" target="_blank" rel="noopener"></a><a href="#标准差" class="tag" target="_blank" rel="noopener">#标准差</a> | <a class="internal-link" data-href="#根据数据绘图" href="#根据数据绘图" target="_blank" rel="noopener"></a><a href="#根据数据绘图" class="tag" target="_blank" rel="noopener">#根据数据绘图</a> | <a class="internal-link" data-href="#根据最低和最高温度绘图" href="#根据最低和最高温度绘图" target="_blank" rel="noopener"></a><a href="#根据最低和最高温度绘图" class="tag" target="_blank" rel="noopener">#根据最低和最高温度绘图</a> | <a class="internal-link" data-href="#根据最高温度和最低温度绘图" href="#根据最高温度和最低温度绘图" target="_blank" rel="noopener"></a><a href="#根据最高温度和最低温度绘图" class="tag" target="_blank" rel="noopener">#根据最高温度和最低温度绘图</a> | <a class="internal-link" data-href="#根据最高温度绘图" href="#根据最高温度绘图" target="_blank" rel="noopener"></a><a href="#根据最高温度绘图" class="tag" target="_blank" rel="noopener">#根据最高温度绘图</a> | <a class="internal-link" data-href="#检验" href="#检验" target="_blank" rel="noopener"></a><a href="#检验" class="tag" target="_blank" rel="noopener">#检验</a> | <a class="internal-link" data-href="#模" href="#模" target="_blank" rel="noopener"></a><a href="#模" class="tag" target="_blank" rel="noopener">#模</a> | <a class="internal-link" data-href="#正确的图" href="#正确的图" target="_blank" rel="noopener"></a><a href="#正确的图" class="tag" target="_blank" rel="noopener">#正确的图</a> | <a class="internal-link" data-href="#每个dd" href="#每个dd" target="_blank" rel="noopener"></a><a href="#每个dd" class="tag" target="_blank" rel="noopener">#每个dd</a> | <a class="internal-link" data-href="#比例图" href="#比例图" target="_blank" rel="noopener"></a><a href="#比例图" class="tag" target="_blank" rel="noopener">#比例图</a> | <a class="internal-link" data-href="#汇总" href="#汇总" target="_blank" rel="noopener"></a><a href="#汇总" class="tag" target="_blank" rel="noopener">#汇总</a> | <a class="internal-link" data-href="#没有第2行、第1、3列的x" href="#没有第2行、第1、3列的x" target="_blank" rel="noopener"></a><a href="#没有第2行、第1、3列的x" class="tag" target="_blank" rel="noopener">#没有第2行、第1、3列的x</a> | <a class="internal-link" data-href="#测试集的NMSE" href="#测试集的NMSE" target="_blank" rel="noopener"></a><a href="#测试集的NMSE" class="tag" target="_blank" rel="noopener">#测试集的NMSE</a> | <a class="internal-link" data-href="#演示画图" href="#演示画图" target="_blank" rel="noopener"></a><a href="#演示画图" class="tag" target="_blank" rel="noopener">#演示画图</a> | <a class="internal-link" data-href="#点出符号" href="#点出符号" target="_blank" rel="noopener"></a><a href="#点出符号" class="tag" target="_blank" rel="noopener">#点出符号</a> | <a class="internal-link" data-href="#然后建三维表：" href="#然后建三维表：" target="_blank" rel="noopener"></a><a href="#然后建三维表：" class="tag" target="_blank" rel="noopener">#然后建三维表：</a> | <a class="internal-link" data-href="#然后建立头发颜色和眼睛颜色的二维表：" href="#然后建立头发颜色和眼睛颜色的二维表：" target="_blank" rel="noopener"></a><a href="#然后建立头发颜色和眼睛颜色的二维表：" class="tag" target="_blank" rel="noopener">#然后建立头发颜色和眼睛颜色的二维表：</a> | <a class="internal-link" data-href="#用来修改任何函数或编写一个新函数" href="#用来修改任何函数或编写一个新函数" target="_blank" rel="noopener"></a><a href="#用来修改任何函数或编写一个新函数" class="tag" target="_blank" rel="noopener">#用来修改任何函数或编写一个新函数</a> | <a class="internal-link" data-href="#由于拟合结果是给每个观测值一个概率值，下面以0" href="#由于拟合结果是给每个观测值一个概率值，下面以0" target="_blank" rel="noopener"></a><a href="#由于拟合结果是给每个观测值一个概率值，下面以0" class="tag" target="_blank" rel="noopener">#由于拟合结果是给每个观测值一个概率值，下面以0</a> | <a class="internal-link" data-href="#画决策树" href="#画决策树" target="_blank" rel="noopener"></a><a href="#画决策树" class="tag" target="_blank" rel="noopener">#画决策树</a> | <a class="internal-link" data-href="#画出决策树的图" href="#画出决策树的图" target="_blank" rel="noopener"></a><a href="#画出决策树的图" class="tag" target="_blank" rel="noopener">#画出决策树的图</a> | <a class="internal-link" data-href="#画出变量重要性图" href="#画出变量重要性图" target="_blank" rel="noopener"></a><a href="#画出变量重要性图" class="tag" target="_blank" rel="noopener">#画出变量重要性图</a> | <a class="internal-link" data-href="#画出变量重要性的4个图" href="#画出变量重要性的4个图" target="_blank" rel="noopener"></a><a href="#画出变量重要性的4个图" class="tag" target="_blank" rel="noopener">#画出变量重要性的4个图</a> | <a class="internal-link" data-href="#画出变量重要性的8个图" href="#画出变量重要性的8个图" target="_blank" rel="noopener"></a><a href="#画出变量重要性的8个图" class="tag" target="_blank" rel="noopener">#画出变量重要性的8个图</a> | <a class="internal-link" data-href="#相减后检验" href="#相减后检验" target="_blank" rel="noopener"></a><a href="#相减后检验" class="tag" target="_blank" rel="noopener">#相减后检验</a> | <a class="internal-link" data-href="#矩阵之间相加" href="#矩阵之间相加" target="_blank" rel="noopener"></a><a href="#矩阵之间相加" class="tag" target="_blank" rel="noopener">#矩阵之间相加</a> | <a class="internal-link" data-href="#矩阵乘法" href="#矩阵乘法" target="_blank" rel="noopener"></a><a href="#矩阵乘法" class="tag" target="_blank" rel="noopener">#矩阵乘法</a> | <a class="internal-link" data-href="#矩阵的构造" href="#矩阵的构造" target="_blank" rel="noopener"></a><a href="#矩阵的构造" class="tag" target="_blank" rel="noopener">#矩阵的构造</a> | <a class="internal-link" data-href="#矩阵转置" href="#矩阵转置" target="_blank" rel="noopener"></a><a href="#矩阵转置" class="tag" target="_blank" rel="noopener">#矩阵转置</a> | <a class="internal-link" data-href="#研究有关仓库的信息" href="#研究有关仓库的信息" target="_blank" rel="noopener"></a><a href="#研究有关仓库的信息" class="tag" target="_blank" rel="noopener">#研究有关仓库的信息</a> | <a class="internal-link" data-href="#研究第一个仓库" href="#研究第一个仓库" target="_blank" rel="noopener"></a><a href="#研究第一个仓库" class="tag" target="_blank" rel="noopener">#研究第一个仓库</a> | <a class="internal-link" data-href="#第1" href="#第1" target="_blank" rel="noopener"></a><a href="#第1" class="tag" target="_blank" rel="noopener">#第1</a> | <a class="internal-link" data-href="#第1列" href="#第1列" target="_blank" rel="noopener"></a><a href="#第1列" class="tag" target="_blank" rel="noopener">#第1列</a> | <a class="internal-link" data-href="#第1列不大于0的元素的个数" href="#第1列不大于0的元素的个数" target="_blank" rel="noopener"></a><a href="#第1列不大于0的元素的个数" class="tag" target="_blank" rel="noopener">#第1列不大于0的元素的个数</a> | <a class="internal-link" data-href="#第1列大于0的元素的个数" href="#第1列大于0的元素的个数" target="_blank" rel="noopener"></a><a href="#第1列大于0的元素的个数" class="tag" target="_blank" rel="noopener">#第1列大于0的元素的个数</a> | <a class="internal-link" data-href="#第" href="#第" target="_blank" rel="noopener"></a><a href="#第" class="tag" target="_blank" rel="noopener">#第</a> | <a class="internal-link" data-href="#第工列大于0的元素" href="#第工列大于0的元素" target="_blank" rel="noopener"></a><a href="#第工列大于0的元素" class="tag" target="_blank" rel="noopener">#第工列大于0的元素</a> | <a class="internal-link" data-href="#简单线性回归，这里" href="#简单线性回归，这里" target="_blank" rel="noopener"></a><a href="#简单线性回归，这里" class="tag" target="_blank" rel="noopener">#简单线性回归，这里</a> | <a class="internal-link" data-href="#系数" href="#系数" target="_blank" rel="noopener"></a><a href="#系数" class="tag" target="_blank" rel="noopener">#系数</a> | <a class="internal-link" data-href="#累积最大值" href="#累积最大值" target="_blank" rel="noopener"></a><a href="#累积最大值" class="tag" target="_blank" rel="noopener">#累积最大值</a> | <a class="internal-link" data-href="#线性相关系数" href="#线性相关系数" target="_blank" rel="noopener"></a><a href="#线性相关系数" class="tag" target="_blank" rel="noopener">#线性相关系数</a> | <a class="internal-link" data-href="#组合" href="#组合" target="_blank" rel="noopener"></a><a href="#组合" class="tag" target="_blank" rel="noopener">#组合</a> | <a class="internal-link" data-href="#给x赋值20个标准正态数据值" href="#给x赋值20个标准正态数据值" target="_blank" rel="noopener"></a><a href="#给x赋值20个标准正态数据值" class="tag" target="_blank" rel="noopener">#给x赋值20个标准正态数据值</a> | <a class="internal-link" data-href="#给出了第一组变量的三个典型变量的系数" href="#给出了第一组变量的三个典型变量的系数" target="_blank" rel="noopener"></a><a href="#给出了第一组变量的三个典型变量的系数" class="tag" target="_blank" rel="noopener">#给出了第一组变量的三个典型变量的系数</a> | <a class="internal-link" data-href="#给出了第二组变量的三个典型变量的系数" href="#给出了第二组变量的三个典型变量的系数" target="_blank" rel="noopener"></a><a href="#给出了第二组变量的三个典型变量的系数" class="tag" target="_blank" rel="noopener">#给出了第二组变量的三个典型变量的系数</a> | <a class="internal-link" data-href="#给出了这三对变量的相关系数" href="#给出了这三对变量的相关系数" target="_blank" rel="noopener"></a><a href="#给出了这三对变量的相关系数" class="tag" target="_blank" rel="noopener">#给出了这三对变量的相关系数</a> | <a class="internal-link" data-href="#给出最大值的下标" href="#给出最大值的下标" target="_blank" rel="noopener"></a><a href="#给出最大值的下标" class="tag" target="_blank" rel="noopener">#给出最大值的下标</a> | <a class="internal-link" data-href="#能够用？" href="#能够用？" target="_blank" rel="noopener"></a><a href="#能够用？" class="tag" target="_blank" rel="noopener">#能够用？</a> | <a class="internal-link" data-href="#自己看，这又是什么呢？" href="#自己看，这又是什么呢？" target="_blank" rel="noopener"></a><a href="#自己看，这又是什么呢？" class="tag" target="_blank" rel="noopener">#自己看，这又是什么呢？</a> | <a class="internal-link" data-href="#自己观察并总结结果" href="#自己观察并总结结果" target="_blank" rel="noopener"></a><a href="#自己观察并总结结果" class="tag" target="_blank" rel="noopener">#自己观察并总结结果</a> | <a class="internal-link" data-href="#虚部" href="#虚部" target="_blank" rel="noopener"></a><a href="#虚部" class="tag" target="_blank" rel="noopener">#虚部</a> | <a class="internal-link" data-href="#行名字" href="#行名字" target="_blank" rel="noopener"></a><a href="#行名字" class="tag" target="_blank" rel="noopener">#行名字</a> | <a class="internal-link" data-href="#解方程：" href="#解方程：" target="_blank" rel="noopener"></a><a href="#解方程：" class="tag" target="_blank" rel="noopener">#解方程：</a> | <a class="internal-link" data-href="#解相关阵cor" href="#解相关阵cor" target="_blank" rel="noopener"></a><a href="#解相关阵cor" class="tag" target="_blank" rel="noopener">#解相关阵cor</a> | <a class="internal-link" data-href="#解联立方程" href="#解联立方程" target="_blank" rel="noopener"></a><a href="#解联立方程" class="tag" target="_blank" rel="noopener">#解联立方程</a> | <a class="internal-link" data-href="#计算10000以内的素数" href="#计算10000以内的素数" target="_blank" rel="noopener"></a><a href="#计算10000以内的素数" class="tag" target="_blank" rel="noopener">#计算10000以内的素数</a> | <a class="internal-link" data-href="#计算100以内的素数" href="#计算100以内的素数" target="_blank" rel="noopener"></a><a href="#计算100以内的素数" class="tag" target="_blank" rel="noopener">#计算100以内的素数</a> | <a class="internal-link" data-href="#计算决策树并输出决策树的细节" href="#计算决策树并输出决策树的细节" target="_blank" rel="noopener"></a><a href="#计算决策树并输出决策树的细节" class="tag" target="_blank" rel="noopener">#计算决策树并输出决策树的细节</a> | <a class="internal-link" data-href="#记录时间点" href="#记录时间点" target="_blank" rel="noopener"></a><a href="#记录时间点" class="tag" target="_blank" rel="noopener">#记录时间点</a> | <a class="internal-link" data-href="#设1■绘图的格式" href="#设1■绘图的格式" target="_blank" rel="noopener"></a><a href="#设1■绘图的格式" class="tag" target="_blank" rel="noopener">#设1■绘图的格式</a> | <a class="internal-link" data-href="#设置图形标题并给坐标轴加上标签" href="#设置图形标题并给坐标轴加上标签" target="_blank" rel="noopener"></a><a href="#设置图形标题并给坐标轴加上标签" class="tag" target="_blank" rel="noopener">#设置图形标题并给坐标轴加上标签</a> | <a class="internal-link" data-href="#设置图题并给坐标轴加上标签" href="#设置图题并给坐标轴加上标签" target="_blank" rel="noopener"></a><a href="#设置图题并给坐标轴加上标签" class="tag" target="_blank" rel="noopener">#设置图题并给坐标轴加上标签</a> | <a class="internal-link" data-href="#设置每个坐标轴的取值范围" href="#设置每个坐标轴的取值范围" target="_blank" rel="noopener"></a><a href="#设置每个坐标轴的取值范围" class="tag" target="_blank" rel="noopener">#设置每个坐标轴的取值范围</a> | <a class="internal-link" data-href="#设置绘图的格式" href="#设置绘图的格式" target="_blank" rel="noopener"></a><a href="#设置绘图的格式" class="tag" target="_blank" rel="noopener">#设置绘图的格式</a> | <a class="internal-link" data-href="#设里刻度标记的样式" href="#设里刻度标记的样式" target="_blank" rel="noopener"></a><a href="#设里刻度标记的样式" class="tag" target="_blank" rel="noopener">#设里刻度标记的样式</a> | <a class="internal-link" data-href="#设里每个坐标轴的取值范围" href="#设里每个坐标轴的取值范围" target="_blank" rel="noopener"></a><a href="#设里每个坐标轴的取值范围" class="tag" target="_blank" rel="noopener">#设里每个坐标轴的取值范围</a> | <a class="internal-link" data-href="#读入数据" href="#读入数据" target="_blank" rel="noopener"></a><a href="#读入数据" class="tag" target="_blank" rel="noopener">#读入数据</a> | <a class="internal-link" data-href="#费了多少时间" href="#费了多少时间" target="_blank" rel="noopener"></a><a href="#费了多少时间" class="tag" target="_blank" rel="noopener">#费了多少时间</a> | <a class="internal-link" data-href="#赋值带打印" href="#赋值带打印" target="_blank" rel="noopener"></a><a href="#赋值带打印" class="tag" target="_blank" rel="noopener">#赋值带打印</a> | <a class="internal-link" data-href="#转换一下" href="#转换一下" target="_blank" rel="noopener"></a><a href="#转换一下" class="tag" target="_blank" rel="noopener">#转换一下</a> | <a class="internal-link" data-href="#辐角" href="#辐角" target="_blank" rel="noopener"></a><a href="#辐角" class="tag" target="_blank" rel="noopener">#辐角</a> | <a class="internal-link" data-href="#输" href="#输" target="_blank" rel="noopener"></a><a href="#输" class="tag" target="_blank" rel="noopener">#输</a> | <a class="internal-link" data-href="#输入数据" href="#输入数据" target="_blank" rel="noopener"></a><a href="#输入数据" class="tag" target="_blank" rel="noopener">#输入数据</a> | <a class="internal-link" data-href="#输出回归系数" href="#输出回归系数" target="_blank" rel="noopener"></a><a href="#输出回归系数" class="tag" target="_blank" rel="noopener">#输出回归系数</a> | <a class="internal-link" data-href="#输出均值，中位数，极大极小值，上下四分位点" href="#输出均值，中位数，极大极小值，上下四分位点" target="_blank" rel="noopener"></a><a href="#输出均值，中位数，极大极小值，上下四分位点" class="tag" target="_blank" rel="noopener">#输出均值，中位数，极大极小值，上下四分位点</a> | <a class="internal-link" data-href="#进一步定制图形" href="#进一步定制图形" target="_blank" rel="noopener"></a><a href="#进一步定制图形" class="tag" target="_blank" rel="noopener">#进一步定制图形</a> | <a class="internal-link" data-href="#进行分解" href="#进行分解" target="_blank" rel="noopener"></a><a href="#进行分解" class="tag" target="_blank" rel="noopener">#进行分解</a> | <a class="internal-link" data-href="#逻辑符号的应用" href="#逻辑符号的应用" target="_blank" rel="noopener"></a><a href="#逻辑符号的应用" class="tag" target="_blank" rel="noopener">#逻辑符号的应用</a> | <a class="internal-link" data-href="#重复前面的拟合" href="#重复前面的拟合" target="_blank" rel="noopener"></a><a href="#重复前面的拟合" class="tag" target="_blank" rel="noopener">#重复前面的拟合</a> | <a class="internal-link" data-href="#附加，横或竖合并数据：append" href="#附加，横或竖合并数据：append" target="_blank" rel="noopener"></a><a href="#附加，横或竖合并数据：append" class="tag" target="_blank" rel="noopener">#附加，横或竖合并数据：append</a> | <a class="internal-link" data-href="#隐藏坐标轴" href="#隐藏坐标轴" target="_blank" rel="noopener"></a><a href="#隐藏坐标轴" class="tag" target="_blank" rel="noopener">#隐藏坐标轴</a> | <a class="internal-link" data-href="#（右尾检验）" href="#（右尾检验）" target="_blank" rel="noopener"></a><a href="#（右尾检验）" class="tag" target="_blank" rel="noopener">#（右尾检验）</a></span></p><p><span><h2 data-heading="04 Archive" dir="auto">04 Archive</h2></span></p><p><span></span></p><p><span><h2 data-heading="Omnivore" dir="auto">Omnivore</h2></span></p><p><span><a class="internal-link" data-href="#Omnivore" href="#Omnivore" target="_blank" rel="noopener"></a><a href="#Omnivore" class="tag" target="_blank" rel="noopener">#Omnivore</a></span></p>
```


```
<div><ul class="dataview list-view-ul"></ul></div>

[PKMer_Obsidian 插件：Dataview](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/dataview/dataview/)

[unable redener inline dataviewquery](https://github.com/oleeskild/digitalgarden/issues/141)

[Dataview 示例文件库](https://s-blu.github.io/obsidian_dataview_example_vault/)

[Dataview](https://blacksmithgu.github.io/obsidian-dataview/)

[DataviewJS 小白手册](https://forum-zh.obsidian.md/t/topic/27370)

[Dataviewjs的奇技淫巧](https://forum-zh.obsidian.md/t/topic/5954)



CSS 多栏布局

参考MCL CSS：[MCL Multi Column—通过 CSS 和Callout实现分栏样式](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/css-%E7%89%87%E6%AE%B5/obsidian%E6%A0%B7%E5%BC%8F-mcl-multi-column/)



