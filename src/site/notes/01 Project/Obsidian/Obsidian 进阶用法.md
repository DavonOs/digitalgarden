---
{"cssClass":"two-column-grid-list","dg-publish":true,"dg-permalink":"obsidian/advance","tags":["obsidian"],"permalink":"/obsidian/advance/","dgPassFrontmatter":true}
---


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

# 插件

社区插件搜索下载&复制到plugins文件夹

使用插件的提醒：本身的功能定位最重要

不推荐的插件：改变OB自身定位、改变数据结构

插件类型：提供个性化功能；界面增强；展现增强；数据格式增强

推荐插件

`File Explorer Note Count`：文件数量

`Recent File`：最近文件

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


多栏布局

参考MCL CSS：[MCL Multi Column—通过 CSS 和Callout实现分栏样式](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/css-%E7%89%87%E6%AE%B5/obsidian%E6%A0%B7%E5%BC%8F-mcl-multi-column/)

> [!multi-column]
>
>> [!note]+ Work
>> your notes or lists here. using markdown formatting
>
>> [!warning]+ Personal
>> your notes or lists here. using markdown formatting
>
>> [!summary]+ Charity
>> your notes or lists here. using markdown formatting



DateView
```
| File                                                                         | 创建日期                       |
| ---------------------------------------------------------------------------- | -------------------------- |
| [[视觉笔记术\|视觉笔记术]]                                                          | 8:13 PM - August 20, 2024  |
| [[Film &TV/豆瓣同步结果_20240819200532\|豆瓣同步结果_20240819200532]]                 | 8:05 PM - August 19, 2024  |
| [[Film &TV/movie/光荣之路\|光荣之路]]                                             | 8:05 PM - August 19, 2024  |
| [[Film &TV/movie/从海底出击\|从海底出击]]                                           | 8:05 PM - August 19, 2024  |
| [[Film &TV/movie/阿甘正传\|阿甘正传]]                                             | 8:05 PM - August 19, 2024  |
| [[Film &TV/movie/三傻大闹宝莱坞 3\|三傻大闹宝莱坞 3]]                                   | 8:05 PM - August 19, 2024  |
| [[Film &TV/movie/盗梦空间\|盗梦空间]]                                             | 8:04 PM - August 19, 2024  |
| [[Film &TV/movie/美丽人生\|美丽人生]]                                             | 8:04 PM - August 19, 2024  |
| [[Film &TV/movie/辛德勒的名单\|辛德勒的名单]]                                         | 8:04 PM - August 19, 2024  |
| [[Film &TV/movie/楚门的世界\|楚门的世界]]                                           | 8:04 PM - August 19, 2024  |
| [[Film &TV/movie/教父\|教父]]                                                 | 8:04 PM - August 19, 2024  |
| [[Film &TV/movie/辩护人\|辩护人]]                                               | 8:04 PM - August 19, 2024  |
| [[Film &TV/movie/十二怒汉 12\|十二怒汉 12]]                                       | 8:03 PM - August 19, 2024  |
| [[Film &TV/movie/布达佩斯大饭店\|布达佩斯大饭店]]                                       | 8:03 PM - August 19, 2024  |
| [[Film &TV/movie/闻香识女人\|闻香识女人]]                                           | 8:03 PM - August 19, 2024  |
| [[Film &TV/movie/窃听风暴\|窃听风暴]]                                             | 8:03 PM - August 19, 2024  |
| [[Film &TV/movie/超能陆战队\|超能陆战队]]                                           | 8:03 PM - August 19, 2024  |
| [[Film &TV/movie/美丽心灵\|美丽心灵]]                                             | 8:03 PM - August 19, 2024  |
| [[Film &TV/movie/七宗罪\|七宗罪]]                                               | 8:03 PM - August 19, 2024  |
| [[Film &TV/movie/两杆大烟枪\|两杆大烟枪]]                                           | 8:02 PM - August 19, 2024  |
| [[Film &TV/movie/恐怖直播\|恐怖直播]]                                             | 8:02 PM - August 19, 2024  |
| [[Film &TV/movie/第六感\|第六感]]                                               | 8:02 PM - August 19, 2024  |
| [[Film &TV/movie/超脱\|超脱]]                                                 | 8:02 PM - August 19, 2024  |
| [[Film &TV/movie/记忆碎片\|记忆碎片]]                                             | 8:02 PM - August 19, 2024  |
| [[Film &TV/movie/危楼愚夫\|危楼愚夫]]                                             | 8:02 PM - August 19, 2024  |
| [[Film &TV/movie/浪潮\|浪潮]]                                                 | 8:02 PM - August 19, 2024  |
| [[Film &TV/movie/秒速5厘米 秒速5\|秒速5厘米 秒速5]]                                   | 8:01 PM - August 19, 2024  |
| [[Film &TV/movie/摩登时代\|摩登时代]]                                             | 8:01 PM - August 19, 2024  |
| [[Film &TV/movie/雨人\|雨人]]                                                 | 8:01 PM - August 19, 2024  |
| [[Film &TV/movie/幸福终点站\|幸福终点站]]                                           | 8:01 PM - August 19, 2024  |
| [[Film &TV/movie/教父3\|教父3]]                                               | 8:01 PM - August 19, 2024  |
| [[Film &TV/movie/教父2\|教父2]]                                               | 8:01 PM - August 19, 2024  |
| [[Film &TV/movie/白日梦想家\|白日梦想家]]                                           | 8:01 PM - August 19, 2024  |
| [[Film &TV/movie/地球上的星星\|地球上的星星]]                                         | 8:01 PM - August 19, 2024  |
| [[Film &TV/movie/消失的爱人\|消失的爱人]]                                           | 8:00 PM - August 19, 2024  |
| [[Film &TV/movie/追随\|追随]]                                                 | 8:00 PM - August 19, 2024  |
| [[Film &TV/movie/嫌疑人\|嫌疑人]]                                               | 8:00 PM - August 19, 2024  |
| [[Film &TV/movie/罪恶之家\|罪恶之家]]                                             | 8:00 PM - August 19, 2024  |
| [[Film &TV/movie/控方证人\|控方证人]]                                             | 8:00 PM - August 19, 2024  |
| [[Film &TV/movie/金色梦乡\|金色梦乡]]                                             | 8:00 PM - August 19, 2024  |
| [[Film &TV/movie/一级恐惧\|一级恐惧]]                                             | 8:00 PM - August 19, 2024  |
| [[Film &TV/movie/公民凯恩\|公民凯恩]]                                             | 7:59 PM - August 19, 2024  |
| [[Film &TV/movie/最佳出价\|最佳出价]]                                             | 7:59 PM - August 19, 2024  |
| [[Film &TV/movie/刺杀肯尼迪\|刺杀肯尼迪]]                                           | 7:59 PM - August 19, 2024  |
| [[Film &TV/movie/迷魂记\|迷魂记]]                                               | 7:59 PM - August 19, 2024  |
| [[Film &TV/movie/摩斯探长前传 试映集\|摩斯探长前传 试映集]]                                 | 7:59 PM - August 19, 2024  |
| [[Film &TV/movie/古畑任三郎完结篇 重生之死 古畑任三郎\|古畑任三郎完结篇 重生之死 古畑任三郎]]               | 7:59 PM - August 19, 2024  |
| [[Film &TV/movie/红辣椒\|红辣椒]]                                               | 7:59 PM - August 19, 2024  |
| [[Film &TV/movie/心迷宫\|心迷宫]]                                               | 7:58 PM - August 19, 2024  |
| [[Film &TV/movie/罗生门 羅生門\|罗生门 羅生門]]                                       | 7:58 PM - August 19, 2024  |
| [[Film &TV/movie/致命\|致命]]                                                 | 7:58 PM - August 19, 2024  |
| [[Film &TV/movie/蝴蝶效应\|蝴蝶效应]]                                             | 7:58 PM - August 19, 2024  |
| [[Film &TV/movie/白丝带\|白丝带]]                                               | 7:58 PM - August 19, 2024  |
| [[Film &TV/movie/疯狂动物城\|疯狂动物城]]                                           | 7:58 PM - August 19, 2024  |
| [[Film &TV/movie/触不可及\|触不可及]]                                             | 7:57 PM - August 19, 2024  |
| [[Film &TV/movie/完美陌生人\|完美陌生人]]                                           | 7:57 PM - August 19, 2024  |
| [[Film &TV/movie/虎口脱险\|虎口脱险]]                                             | 7:57 PM - August 19, 2024  |
| [[Film &TV/movie/东京教父 東京\|东京教父 東京]]                                       | 7:57 PM - August 19, 2024  |
| [[Film &TV/movie/上帝也疯狂\|上帝也疯狂]]                                           | 7:57 PM - August 19, 2024  |
| [[Film &TV/movie/我的个神啊\|我的个神啊]]                                           | 7:57 PM - August 19, 2024  |
| [[Film &TV/movie/上帝也疯狂2\|上帝也疯狂2]]                                         | 7:57 PM - August 19, 2024  |
| [[Film &TV/movie/西力传\|西力传]]                                               | 7:57 PM - August 19, 2024  |
| [[Film &TV/movie/热天午后\|热天午后]]                                             | 7:56 PM - August 19, 2024  |
| [[Film &TV/movie/南极料理人 南極料理人\|南极料理人 南極料理人]]                               | 7:56 PM - August 19, 2024  |
| [[Film &TV/movie/超人总动员\|超人总动员]]                                           | 7:56 PM - August 19, 2024  |
| [[Film &TV/movie/当幸福来敲门\|当幸福来敲门]]                                         | 7:56 PM - August 19, 2024  |
| [[Film &TV/movie/大闹天宫\|大闹天宫]]                                             | 7:56 PM - August 19, 2024  |
| [[Film &TV/movie/沉默的羔羊\|沉默的羔羊]]                                           | 7:56 PM - August 19, 2024  |
| [[Film &TV/movie/聚焦\|聚焦]]                                                 | 7:56 PM - August 19, 2024  |
| [[Film &TV/movie/未麻的部屋\|未麻的部屋]]                                           | 7:56 PM - August 19, 2024  |
| [[Film &TV/movie/模仿游戏\|模仿游戏]]                                             | 7:55 PM - August 19, 2024  |
| [[Film &TV/movie/卢旺达饭店\|卢旺达饭店]]                                           | 7:55 PM - August 19, 2024  |
| [[Film &TV/movie/地雷区\|地雷区]]                                               | 7:55 PM - August 19, 2024  |
| [[Film &TV/movie/天书奇谭\|天书奇谭]]                                             | 7:55 PM - August 19, 2024  |
| [[Film &TV/movie/狗镇\|狗镇]]                                                 | 7:55 PM - August 19, 2024  |
| [[Film &TV/movie/老炮儿\|老炮儿]]                                               | 7:55 PM - August 19, 2024  |
| [[Film &TV/movie/盗钥匙的方法 鍵泥棒\|盗钥匙的方法 鍵泥棒]]                                 | 7:55 PM - August 19, 2024  |
| [[Film &TV/movie/杀人回忆\|杀人回忆]]                                             | 7:55 PM - August 19, 2024  |
| [[Film &TV/movie/思悼\|思悼]]                                                 | 7:54 PM - August 19, 2024  |
| [[Film &TV/movie/帝国的毁灭\|帝国的毁灭]]                                           | 7:54 PM - August 19, 2024  |
| [[Film &TV/movie/希特勒回来了\|希特勒回来了]]                                         | 7:54 PM - August 19, 2024  |
| [[Film &TV/movie/釜山行\|釜山行]]                                               | 7:54 PM - August 19, 2024  |
| [[Film &TV/movie/丈夫得了抑郁症\|丈夫得了抑郁症]]                                       | 7:54 PM - August 19, 2024  |
| [[Film &TV/movie/投靠女与出走男 駆込\|投靠女与出走男 駆込]]                                 | 7:54 PM - August 19, 2024  |
| [[Film &TV/movie/愚人节\|愚人节]]                                               | 7:54 PM - August 19, 2024  |
| [[Film &TV/movie/诈欺游戏 电影版\|诈欺游戏 电影版]]                                     | 7:53 PM - August 19, 2024  |
| [[Film &TV/movie/追凶者也\|追凶者也]]                                             | 7:53 PM - August 19, 2024  |
| [[Film &TV/movie/死亡医生\|死亡医生]]                                             | 7:53 PM - August 19, 2024  |
| [[Film &TV/movie/惊曝内幕\|惊曝内幕]]                                             | 7:53 PM - August 19, 2024  |
| [[Film &TV/movie/丹尼·科林斯\|丹尼·科林斯]]                                         | 7:53 PM - August 19, 2024  |
| [[Film &TV/movie/盗火线\|盗火线]]                                               | 7:53 PM - August 19, 2024  |
| [[Film &TV/movie/疤面煞星\|疤面煞星]]                                             | 7:53 PM - August 19, 2024  |
| [[Film &TV/movie/忠奸人\|忠奸人]]                                               | 7:52 PM - August 19, 2024  |
| [[Film &TV/movie/西蒙妮\|西蒙妮]]                                               | 7:52 PM - August 19, 2024  |
| [[Film &TV/movie/市政大厅\|市政大厅]]                                             | 7:52 PM - August 19, 2024  |
| [[Film &TV/movie/烈日灼心\|烈日灼心]]                                             | 7:51 PM - August 19, 2024  |
| [[Film &TV/movie/西游记之大圣归来\|西游记之大圣归来]]                                     | 7:51 PM - August 19, 2024  |
| [[Film &TV/movie/捉妖记\|捉妖记]]                                               | 7:51 PM - August 19, 2024  |
| [[Film &TV/movie/煎饼侠\|煎饼侠]]                                               | 7:51 PM - August 19, 2024  |
| [[Film &TV/movie/万万没想到\|万万没想到]]                                           | 7:51 PM - August 19, 2024  |
| [[Film &TV/movie/飞越疯人院\|飞越疯人院]]                                           | 7:51 PM - August 19, 2024  |
| [[Film &TV/movie/让子弹飞\|让子弹飞]]                                             | 7:51 PM - August 19, 2024  |
| [[Film &TV/movie/心灵捕手\|心灵捕手]]                                             | 7:51 PM - August 19, 2024  |
| [[Film &TV/movie/地下\|地下]]                                                 | 7:50 PM - August 19, 2024  |
| [[Film &TV/movie/惊魂记\|惊魂记]]                                               | 7:50 PM - August 19, 2024  |
| [[Film &TV/movie/大独裁者\|大独裁者]]                                             | 7:49 PM - August 19, 2024  |
| [[Film &TV/movie/笑之大学 笑\|笑之大学 笑]]                                         | 7:49 PM - August 19, 2024  |
| [[Film &TV/movie/中国王朝 女性传说 恶女的真相 西太后慈禧 中国王朝\|中国王朝 女性传说 恶女的真相 西太后慈禧 中国王朝]] | 7:48 PM - August 19, 2024  |
| [[Film &TV/movie/星降大洗城 大洗\|星降大洗城 大洗]]                                     | 7:48 PM - August 19, 2024  |
| [[Film &TV/movie/第四公民\|第四公民]]                                             | 7:48 PM - August 19, 2024  |
| [[Film &TV/movie/我是谁：没有绝对安全的系统\|我是谁：没有绝对安全的系统]]                           | 7:47 PM - August 19, 2024  |
| [[Film &TV/movie/杰出公民\|杰出公民]]                                             | 7:47 PM - August 19, 2024  |
| [[Film &TV/movie/大空港2013\|大空港2013]]                                       | 7:47 PM - August 19, 2024  |
| [[Film &TV/movie/间谍之桥\|间谍之桥]]                                             | 7:47 PM - August 19, 2024  |
| [[Film &TV/movie/怦然心动\|怦然心动]]                                             | 7:46 PM - August 19, 2024  |
| [[Film &TV/movie/致命魔术\|致命魔术]]                                             | 7:46 PM - August 19, 2024  |
| [[Film &TV/movie/荒蛮故事\|荒蛮故事]]                                             | 7:46 PM - August 19, 2024  |
| [[Film &TV/movie/射雕英雄传之东成西就 射鵰英雄傳之東成西就\|射雕英雄传之东成西就 射鵰英雄傳之東成西就]]           | 7:46 PM - August 19, 2024  |
| [[Film &TV/movie/看不见的客人\|看不见的客人]]                                         | 7:46 PM - August 19, 2024  |
| [[Film &TV/movie/彗星来的那一夜\|彗星来的那一夜]]                                       | 7:46 PM - August 19, 2024  |
| [[Film &TV/movie/登堂入室\|登堂入室]]                                             | 7:45 PM - August 19, 2024  |
| [[Film &TV/movie/月球\|月球]]                                                 | 7:45 PM - August 19, 2024  |
| [[Film &TV/movie/后窗\|后窗]]                                                 | 7:45 PM - August 19, 2024  |
| [[Film &TV/movie/唐人街探案\|唐人街探案]]                                           | 7:45 PM - August 19, 2024  |
| [[Film &TV/movie/阳光下的罪恶\|阳光下的罪恶]]                                         | 7:45 PM - August 19, 2024  |
| [[Film &TV/movie/恐怖游轮\|恐怖游轮]]                                             | 7:45 PM - August 19, 2024  |
| [[Film &TV/movie/大卫·戈尔的一生\|大卫·戈尔的一生]]                                     | 7:45 PM - August 19, 2024  |
| [[Film &TV/movie/神探夏洛克：可恶的新娘\|神探夏洛克：可恶的新娘]]                               | 7:44 PM - August 19, 2024  |
| [[Film &TV/movie/禁闭岛\|禁闭岛]]                                               | 7:44 PM - August 19, 2024  |
| [[Film &TV/movie/换子疑云\|换子疑云]]                                             | 7:44 PM - August 19, 2024  |
| [[Film &TV/movie/雨月物语 雨月物語\|雨月物语 雨月物語]]                                   | 7:44 PM - August 19, 2024  |
| [[Film &TV/movie/西北偏北\|西北偏北]]                                             | 7:44 PM - August 19, 2024  |
| [[Film &TV/movie/狙击电话亭\|狙击电话亭]]                                           | 7:44 PM - August 19, 2024  |
| [[Film &TV/movie/405谋杀案\|405谋杀案]]                                         | 7:43 PM - August 19, 2024  |
| [[Film &TV/movie/电话谋杀案\|电话谋杀案]]                                           | 7:43 PM - August 19, 2024  |
| [[Film &TV/movie/惊天魔盗团\|惊天魔盗团]]                                           | 7:43 PM - August 19, 2024  |
| [[Film &TV/movie/杀死一只知更鸟\|杀死一只知更鸟]]                                       | 7:43 PM - August 19, 2024  |
| [[Film &TV/movie/第三人\|第三人]]                                               | 7:43 PM - August 19, 2024  |
| [[Film &TV/movie/头脑特工队\|头脑特工队]]                                           | 7:43 PM - August 19, 2024  |
| [[Film &TV/movie/遗愿清单\|遗愿清单]]                                             | 7:43 PM - August 19, 2024  |
| [[Film &TV/movie/淘金记\|淘金记]]                                               | 7:42 PM - August 19, 2024  |
| [[Film &TV/movie/钢的琴\|钢的琴]]                                               | 7:42 PM - August 19, 2024  |
| [[Film &TV/movie/小鬼当家\|小鬼当家]]                                             | 7:42 PM - August 19, 2024  |
| [[Film &TV/movie/笑林小子\|笑林小子]]                                             | 7:42 PM - August 19, 2024  |
| [[Film &TV/movie/阿凡达\|阿凡达]]                                               | 7:42 PM - August 19, 2024  |
| [[Film &TV/movie/勇敢的心\|勇敢的心]]                                             | 7:42 PM - August 19, 2024  |
| [[Film &TV/movie/偷自行车的人\|偷自行车的人]]                                         | 7:42 PM - August 19, 2024  |
| [[Film &TV/movie/摔跤吧！爸爸\|摔跤吧！爸爸]]                                         | 7:42 PM - August 19, 2024  |
| [[Film &TV/movie/盛夏的方程式 真夏\|盛夏的方程式 真夏]]                                   | 7:39 PM - August 19, 2024  |
| [[Film &TV/movie/上锁的房间\|上锁的房间]]                                           | 7:39 PM - August 19, 2024  |
| [[Film &TV/movie/骗中骗\|骗中骗]]                                               | 7:39 PM - August 19, 2024  |
| [[Film &TV/movie/唐人街\|唐人街]]                                               | 7:38 PM - August 19, 2024  |
| [[Film &TV/movie/是，大臣 1984圣诞特辑\|是，大臣 1984圣诞特辑]]                           | 7:34 PM - August 19, 2024  |
| [[Film &TV/movie/大护法\|大护法]]                                               | 7:33 PM - August 19, 2024  |
| [[Film &TV/movie/小王子\|小王子]]                                               | 7:32 PM - August 19, 2024  |
| [[Film &TV/movie/十二公民\|十二公民]]                                             | 7:32 PM - August 19, 2024  |
| [[Film &TV/movie/战争之王\|战争之王]]                                             | 7:32 PM - August 19, 2024  |
| [[Film &TV/movie/万物理论\|万物理论]]                                             | 7:32 PM - August 19, 2024  |
| [[Film &TV/movie/叫我第一名\|叫我第一名]]                                           | 7:32 PM - August 19, 2024  |
| [[Film &TV/movie/网络谜踪\|网络谜踪]]                                             | 7:32 PM - August 19, 2024  |
| [[Film &TV/movie/金刚川\|金刚川]]                                               | 7:26 PM - August 19, 2024  |
| [[Film &TV/movie/唐人街探案3\|唐人街探案3]]                                         | 7:26 PM - August 19, 2024  |
| [[Film &TV/movie/暴裂无声\|暴裂无声]]                                             | 7:26 PM - August 19, 2024  |
| [[Film &TV/movie/源代码\|源代码]]                                               | 7:26 PM - August 19, 2024  |
| [[Film &TV/movie/利刃出鞘\|利刃出鞘]]                                             | 7:26 PM - August 19, 2024  |
| [[Film &TV/movie/夺魂索\|夺魂索]]                                               | 7:26 PM - August 19, 2024  |
| [[Film &TV/movie/洋芋片\|洋芋片]]                                               | 7:24 PM - August 19, 2024  |
| [[Film &TV/movie/杀手寓言\|杀手寓言]]                                             | 7:24 PM - August 19, 2024  |
| [[Film &TV/movie/爱的成人式\|爱的成人式]]                                           | 7:24 PM - August 19, 2024  |
| [[Film &TV/movie/薙刀社青春日记\|薙刀社青春日记]]                                       | 7:24 PM - August 19, 2024  |
| [[Film &TV/movie/肖申克的救赎\|肖申克的救赎]]                                         | 7:23 PM - August 19, 2024  |
| [[Film &TV/movie/霸王别姬\|霸王别姬]]                                             | 7:23 PM - August 19, 2024  |
| [[Film &TV/movie/我不是药神\|我不是药神]]                                           | 7:23 PM - August 19, 2024  |
| [[Film &TV/movie/大话西游之大圣娶亲 西遊記大結局之仙履奇緣\|大话西游之大圣娶亲 西遊記大結局之仙履奇緣]]           | 7:23 PM - August 19, 2024  |
| [[Film &TV/movie/绿皮书\|绿皮书]]                                               | 7:23 PM - August 19, 2024  |
| [[Film &TV/movie/搏击俱乐部\|搏击俱乐部]]                                           | 7:23 PM - August 19, 2024  |
| [[Film &TV/movie/鬼子来了\|鬼子来了]]                                             | 7:23 PM - August 19, 2024  |
| [[Film &TV/movie/功夫\|功夫]]                                                 | 7:22 PM - August 19, 2024  |
| [[Film &TV/movie/狮子王\|狮子王]]                                               | 7:22 PM - August 19, 2024  |
| [[Film &TV/movie/素媛\|素媛]]                                                 | 7:22 PM - August 19, 2024  |
| [[Film &TV/movie/熔炉\|熔炉]]                                                 | 7:22 PM - August 19, 2024  |
| [[Film &TV/movie/疯狂的石头\|疯狂的石头]]                                           | 7:22 PM - August 19, 2024  |
| [[Film &TV/movie/狩猎\|狩猎]]                                                 | 7:22 PM - August 19, 2024  |
| [[Film &TV/movie/背靠背，脸对脸\|背靠背，脸对脸]]                                       | 7:22 PM - August 19, 2024  |
| [[Film &TV/movie/哪吒闹海\|哪吒闹海]]                                             | 7:21 PM - August 19, 2024  |
| [[Film &TV/movie/城市之光\|城市之光]]                                             | 7:21 PM - August 19, 2024  |
| [[Film &TV/movie/名侦探柯南：贝克街的亡灵 名探偵\|名侦探柯南：贝克街的亡灵 名探偵]]                     | 7:21 PM - August 19, 2024  |
| [[Film &TV/movie/羊之树 羊\|羊之树 羊]]                                           | 7:20 PM - August 19, 2024  |
| [[Film &TV/movie/在京都小住\|在京都小住]]                                           | 7:20 PM - August 19, 2024  |
| [[Film &TV/movie/世界奇妙物语 2019雨之特别篇 世\|世界奇妙物语 2019雨之特别篇 世]]                 | 7:19 PM - August 19, 2024  |
| [[Film &TV/movie/99.9_刑事专业律师 电影版 99.9\|99.9_刑事专业律师 电影版 99.9]]             | 7:19 PM - August 19, 2024  |
| [[Film &TV/movie/美国骗局\|美国骗局]]                                             | 7:18 PM - August 19, 2024  |
| [[Film &TV/movie/忠犬八公的故事\|忠犬八公的故事]]                                       | 7:18 PM - August 19, 2024  |
| [[Film &TV/movie/猫鼠游戏\|猫鼠游戏]]                                             | 7:18 PM - August 19, 2024  |
| [[Film &TV/movie/鬼灭之刃 浅草篇 鬼滅\|鬼灭之刃 浅草篇 鬼滅]]                               | 7:18 PM - August 19, 2024  |
| [[Film &TV/movie/必胜球探\|必胜球探]]                                             | 7:18 PM - August 19, 2024  |
| [[Film &TV/movie/鬼灭之刃 那田蜘蛛山篇 鬼滅\|鬼灭之刃 那田蜘蛛山篇 鬼滅]]                         | 7:18 PM - August 19, 2024  |
| [[Film &TV/movie/鬼灭之刃 兄妹的羁绊 鬼滅\|鬼灭之刃 兄妹的羁绊 鬼滅]]                           | 7:18 PM - August 19, 2024  |
| [[Film &TV/movie/我们仍未知道那天所看见的花的名字 剧场版 劇場版\|我们仍未知道那天所看见的花的名字 剧场版 劇場版]]     | 7:18 PM - August 19, 2024  |
| [[Film &TV/movie/哆啦\|哆啦]]                                                 | 7:17 PM - August 19, 2024  |
| [[Film &TV/movie/泰坦尼克号\|泰坦尼克号]]                                           | 7:17 PM - August 19, 2024  |
| [[Film &TV/movie/美国往事\|美国往事]]                                             | 7:17 PM - August 19, 2024  |
| [[Film &TV/movie/黄金三镖客\|黄金三镖客]]                                           | 7:17 PM - August 19, 2024  |
| [[Film &TV/movie/血钻\|血钻]]                                                 | 7:17 PM - August 19, 2024  |
| [[Film &TV/movie/流浪地球\|流浪地球]]                                             | 7:17 PM - August 19, 2024  |
| [[Film &TV/movie/帷幕：波洛的最后一案\|帷幕：波洛的最后一案]]                                 | 7:13 PM - August 19, 2024  |
| [[Film &TV/movie/八恶人\|八恶人]]                                               | 7:12 PM - August 19, 2024  |
| [[Film &TV/movie/绿里奇迹\|绿里奇迹]]                                             | 7:12 PM - August 19, 2024  |
| [[Film &TV/movie/忠犬八公物语\|忠犬八公物语]]                                         | 7:12 PM - August 19, 2024  |
| [[Film &TV/movie/茶馆\|茶馆]]                                                 | 7:12 PM - August 19, 2024  |
| [[Film &TV/movie/低俗小说\|低俗小说]]                                             | 7:12 PM - August 19, 2024  |
| [[Film &TV/movie/海上钢琴师\|海上钢琴师]]                                           | 7:12 PM - August 19, 2024  |
| [[Film &TV/movie/星际穿越\|星际穿越]]                                             | 7:11 PM - August 19, 2024  |
| [[Film &TV/movie/被解救的姜戈\|被解救的姜戈]]                                         | 7:11 PM - August 19, 2024  |
| [[Film &TV/movie/唐伯虎点秋香 唐伯虎點秋香\|唐伯虎点秋香 唐伯虎點秋香]]                           | 7:11 PM - August 19, 2024  |
| [[Film &TV/movie/驴得水\|驴得水]]                                               | 7:11 PM - August 19, 2024  |
| [[Film &TV/movie/误杀瞒天记\|误杀瞒天记]]                                           | 7:11 PM - August 19, 2024  |
| [[Film &TV/movie/九品芝麻官\|九品芝麻官]]                                           | 7:11 PM - August 19, 2024  |
| [[Film &TV/movie/百鸟朝凤\|百鸟朝凤]]                                             | 7:10 PM - August 19, 2024  |
| [[Film &TV/movie/长征\|长征]]                                                 | 7:10 PM - August 19, 2024  |
| [[Film &TV/movie/大佛普拉斯\|大佛普拉斯]]                                           | 7:10 PM - August 19, 2024  |
| [[Film &TV/movie/扬名立万\|扬名立万]]                                             | 7:09 PM - August 19, 2024  |
| [[Film &TV/movie/决战之后\|决战之后]]                                             | 7:09 PM - August 19, 2024  |
| [[Film &TV/movie/大决战之辽沈战役\|大决战之辽沈战役]]                                     | 7:09 PM - August 19, 2024  |
| [[Film &TV/movie/高山下的花环\|高山下的花环]]                                         | 7:09 PM - August 19, 2024  |
| [[Film &TV/movie/英雄儿女\|英雄儿女]]                                             | 7:08 PM - August 19, 2024  |
| [[Film &TV/movie/大决战之淮海战役\|大决战之淮海战役]]                                     | 7:08 PM - August 19, 2024  |
| [[Film &TV/movie/大决战之平津战役\|大决战之平津战役]]                                     | 7:08 PM - August 19, 2024  |
| [[Film &TV/movie/开国大典\|开国大典]]                                             | 7:08 PM - August 19, 2024  |
| [[Film &TV/movie/特级英雄黄继光\|特级英雄黄继光]]                                       | 7:08 PM - August 19, 2024  |
| [[Film &TV/movie/这个杀手不太冷\|这个杀手不太冷]]                                       | 7:08 PM - August 19, 2024  |
| [[Film &TV/movie/无间道 無間道\|无间道 無間道]]                                       | 7:08 PM - August 19, 2024  |
| [[Film &TV/movie/穿条纹睡衣的男孩\|穿条纹睡衣的男孩]]                                     | 7:07 PM - August 19, 2024  |
| [[Film &TV/movie/血战钢锯岭\|血战钢锯岭]]                                           | 7:07 PM - August 19, 2024  |
| [[Film &TV/movie/喜剧之王 喜劇之王\|喜剧之王 喜劇之王]]                                   | 7:07 PM - August 19, 2024  |
| [[Film &TV/movie/洛城机密\|洛城机密]]                                             | 7:07 PM - August 19, 2024  |
| [[Film &TV/movie/焦土之城\|焦土之城]]                                             | 7:07 PM - August 19, 2024  |
| [[Film &TV/movie/东方快车谋杀案\|东方快车谋杀案]]                                       | 7:07 PM - August 19, 2024  |
| [[Film &TV/movie/悬崖山庄奇案\|悬崖山庄奇案]]                                         | 7:07 PM - August 19, 2024  |
| [[Film &TV/movie/神探夏洛克：最后的誓言\|神探夏洛克：最后的誓言]]                               | 7:07 PM - August 19, 2024  |
| [[Film &TV/movie/天才枪手\|天才枪手]]                                             | 7:06 PM - August 19, 2024  |
| [[Film &TV/movie/血观音 血觀音\|血观音 血觀音]]                                       | 7:06 PM - August 19, 2024  |
| [[Film &TV/movie/神探\|神探]]                                                 | 7:06 PM - August 19, 2024  |
| [[Film &TV/movie/神探夏洛克(试播集)\|神探夏洛克(试播集)]]                                 | 7:06 PM - August 19, 2024  |
| [[Film &TV/movie/尼罗河上的惨案\|尼罗河上的惨案]]                                       | 7:06 PM - August 19, 2024  |
| [[Film &TV/movie/唐人街探案2\|唐人街探案2]]                                         | 7:06 PM - August 19, 2024  |
| [[Film &TV/movie/利刃出鞘2\|利刃出鞘2]]                                           | 7:05 PM - August 19, 2024  |
| [[Film &TV/movie/古畑任三郎 最后之舞 古畑任三郎\|古畑任三郎 最后之舞 古畑任三郎]]                     | 7:02 PM - August 19, 2024  |
| [[Film &TV/movie/调音师(短片)\|调音师(短片)]]                                       | 7:02 PM - August 19, 2024  |
| [[Film &TV/movie/金田一少年事件簿\|金田一少年事件簿]]                                     | 7:02 PM - August 19, 2024  |
| [[Film &TV/movie/名侦探柯南：通向天国的倒计时 名探偵\|名侦探柯南：通向天国的倒计时 名探偵]]                 | 7:02 PM - August 19, 2024  |
| [[Film &TV/movie/古畑任三郎\|古畑任三郎]]                                           | 7:02 PM - August 19, 2024  |
| [[Film &TV/movie/金田一少年事件簿：雪夜叉传说杀人事件 金田一少年\|金田一少年事件簿：雪夜叉传说杀人事件 金田一少年]]     | 7:02 PM - August 19, 2024  |
| [[Film &TV/movie/：翔\|：翔]]                                                 | 7:02 PM - August 19, 2024  |
| [[Film &TV/movie/古畑任三郎 公平的杀人者 古畑任三郎\|古畑任三郎 公平的杀人者 古畑任三郎]]                 | 7:02 PM - August 19, 2024  |
| [[Film &TV/movie/古畑任三郎 黑岩博士的恐怖 古畑任三郎 黒岩博士\|古畑任三郎 黑岩博士的恐怖 古畑任三郎 黒岩博士]]     | 7:01 PM - August 19, 2024  |
| [[Film &TV/movie/古畑任三郎 凶手是大使阁下 古畑任三郎\|古畑任三郎 凶手是大使阁下 古畑任三郎]]               | 7:01 PM - August 19, 2024  |
| [[Film &TV/movie/十二猴子\|十二猴子]]                                             | 7:01 PM - August 19, 2024  |
| [[Film &TV/movie/古畑任三郎  暂时的分离 古畑任三郎\|古畑任三郎  暂时的分离 古畑任三郎]]                 | 7:01 PM - August 19, 2024  |
| [[Film &TV/movie/发条橙\|发条橙]]                                               | 7:01 PM - August 19, 2024  |
| [[Film &TV/movie/非常嫌疑犯\|非常嫌疑犯]]                                           | 7:01 PM - August 19, 2024  |
| [[Film &TV/movie/美国\|美国]]                                                 | 7:01 PM - August 19, 2024  |
| [[Film &TV/movie/古畑任三郎 微笑的袋鼠 古畑任三郎 笑\|古畑任三郎 微笑的袋鼠 古畑任三郎 笑]]               | 7:00 PM - August 19, 2024  |
| [[Film &TV/movie/圈套剧场版1\|圈套剧场版1]]                                         | 7:00 PM - August 19, 2024  |
| [[Film &TV/movie/圈套剧场版2\|圈套剧场版2]]                                         | 7:00 PM - August 19, 2024  |
| [[Film &TV/movie/金田一少年事件簿之上海人鱼传说 金田一少年\|金田一少年事件簿之上海人鱼传说 金田一少年]]           | 7:00 PM - August 19, 2024  |
| [[Film &TV/movie/三块广告牌\|三块广告牌]]                                           | 7:00 PM - August 19, 2024  |
| [[Film &TV/movie/亲爱的篮球\|亲爱的篮球]]                                           | 7:00 PM - August 19, 2024  |
| [[Film &TV/movie/大话西游之月光宝盒 西遊記第壹佰零壹回之月光寶盒\|大话西游之月光宝盒 西遊記第壹佰零壹回之月光寶盒]]     | 7:00 PM - August 19, 2024  |
| [[Film &TV/movie/指环王1：护戒使者\|指环王1：护戒使者]]                                   | 6:59 PM - August 19, 2024  |
| [[Film &TV/movie/指环王2：双塔奇兵\|指环王2：双塔奇兵]]                                   | 6:59 PM - August 19, 2024  |
| [[Film &TV/movie/指环王3：王者无敌\|指环王3：王者无敌]]                                   | 6:59 PM - August 19, 2024  |
| [[Film &TV/movie/头号玩家\|头号玩家]]                                             | 6:59 PM - August 19, 2024  |
| [[Film &TV/movie/色，戒\|色，戒]]                                               | 6:59 PM - August 19, 2024  |
| [[Film &TV/movie/无人区\|无人区]]                                               | 6:59 PM - August 19, 2024  |
| [[Film &TV/movie/魔鬼代言人\|魔鬼代言人]]                                           | 6:59 PM - August 19, 2024  |
| [[Film &TV/movie/前目的地\|前目的地]]                                             | 6:59 PM - August 19, 2024  |
| [[Film &TV/movie/逃出绝命镇\|逃出绝命镇]]                                           | 6:59 PM - August 19, 2024  |
| [[Film &TV/movie/！树先生\|！树先生]]                                             | 6:58 PM - August 19, 2024  |
| [[Film &TV/movie/盲井\|盲井]]                                                 | 6:58 PM - August 19, 2024  |
| [[Film &TV/movie/天下无贼\|天下无贼]]                                             | 6:58 PM - August 19, 2024  |
| [[Film &TV/movie/华尔街之狼\|华尔街之狼]]                                           | 6:58 PM - August 19, 2024  |
| [[Film &TV/movie/正传\|正传]]                                                 | 6:57 PM - August 19, 2024  |
| [[Film &TV/movie/偷拐抢骗\|偷拐抢骗]]                                             | 6:57 PM - August 19, 2024  |
| [[Film &TV/movie/赛德克·巴莱 賽德克·巴萊\|赛德克·巴莱 賽德克·巴萊]]                           | 6:57 PM - August 19, 2024  |
| [[Film &TV/movie/落叶归根\|落叶归根]]                                             | 6:57 PM - August 19, 2024  |
| [[Film &TV/movie/疯狂的赛车\|疯狂的赛车]]                                           | 6:57 PM - August 19, 2024  |
| [[Film &TV/movie/食神\|食神]]                                                 | 6:57 PM - August 19, 2024  |
| [[Film &TV/movie/赌圣 賭聖\|赌圣 賭聖]]                                           | 6:56 PM - August 19, 2024  |
| [[Film &TV/movie/百变星君 百變星君\|百变星君 百變星君]]                                   | 6:56 PM - August 19, 2024  |
| [[Film &TV/movie/审死官 審死官\|审死官 審死官]]                                       | 6:56 PM - August 19, 2024  |
| [[Film &TV/movie/不速来客\|不速来客]]                                             | 6:56 PM - August 19, 2024  |
| [[Film &TV/movie/黑社会 黑社會\|黑社会 黑社會]]                                       | 6:56 PM - August 19, 2024  |
| [[Film &TV/movie/黑社会2：以和为贵 黑社會以和為貴\|黑社会2：以和为贵 黑社會以和為貴]]                   | 6:56 PM - August 19, 2024  |
| [[Film &TV/movie/冰辙 氷\|冰辙 氷]]                                             | 6:55 PM - August 19, 2024  |
| [[Film &TV/movie/三毛从军记\|三毛从军记]]                                           | 6:55 PM - August 19, 2024  |
| [[Film &TV/movie/寻枪\|寻枪]]                                                 | 6:55 PM - August 19, 2024  |
| [[Film &TV/movie/我是谁 我是誰\|我是谁 我是誰]]                                       | 6:55 PM - August 19, 2024  |
| [[Film &TV/movie/计划\|计划]]                                                 | 6:54 PM - August 19, 2024  |
| [[Film &TV/movie/警察故事\|警察故事]]                                             | 6:54 PM - August 19, 2024  |
| [[Film &TV/movie/荒野大镖客\|荒野大镖客]]                                           | 6:54 PM - August 19, 2024  |
| [[Film &TV/movie/流浪地球2\|流浪地球2]]                                           | 6:54 PM - August 19, 2024  |
| [[Book/图书专著/专注力就是你的超能力\|专注力就是你的超能力]]                                      | 10:36 AM - August 18, 2024 |

{ .block-language-dataview}

把满足今天的日期减去创建文件的日期小于等于三天的文件，按照倒序排列，以表格的形式展示满足条件的文件的创建日期。


