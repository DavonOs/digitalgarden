---
{"dg-publish":true,"dg-permalink":"How-to-design-a-dashboard","permalink":"/How-to-design-a-dashboard/","metatags":{"description":"Dashboards help organizations make data driven decisions. Learn how to apply design thinking to creating useful dashboards.","og:site_name":"DavonOs","og:title":"How to design a dashboard","og:type":"article","og:url":"https://zuji.eu.org/How to design a dashboard","og:image":"https://dataschool.com/assets/images/book-covers/how-to-design-a-dashboard@thumbnail.png","og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"dgShowInlineTitle":true,"created":"2025-04-24 13:53","updated":"2025-07-22 22:02"}
---


[如何设计仪表板](https://dataschool.com/how-to-design-a-dashboard/introduction/)

仪表板使人们能够基于数据做出决策。本书将引导您完成定义、原型设计、构建和部署仪表板的过程。本书的重点是帮助人们制作可用于决策的仪表板。

简介
- 了解如何运用设计思维来创建有高度影响力的仪表板。
- 了解仪表板是什么以及为什么它们对决策至关重要。
- 学习仪表板设计的最佳实践，以支持决策制定。准确性、清晰度、授权和简洁。
- 了解设计思维原则如何映射到仪表板设计中。定义、原型制作、构建和部署仪表板。
- 了解仪表板设计过程的关键利益干系人。了解如何与设计师、开发人员和受众合作。
- 定义哪些指标对业务专业人员真正重要。使用客户开发技术来确定最佳指标。

不看数据，人们如何做决定？

过去人们基于以往的经验和对场景的理解，因为数据难以获取和理解。然而，数据已经变得更容易访问：

从业务的各个部分获取数据；
廉价地存储大量数据；
轻松提取、转换和可视化数据的工具。

仪表板无法改变人们过去的经历，但可以呈现数据以帮助人们更好地理解场景，做出更好的决策。

将设计思维应用于仪表板可能具有挑战性。

BI 工具使创建可视化和仪表板变得非常容易。人们可能会立即开始构建多个仪表板来帮助他人。然而，如果没有充分投资于定义问题、利益相关者和指标或原型理想设计，仪表板很可能无效。花时间在定义和原型设计阶段将有助于任何仪表板设计人员生成被受众更多地使用的仪表板，因为这将更好地满足受众需要做出的决策。

![dashboard design process: Define>Prototype>Build>Deploy](https://dataschool.com/assets/images/how-to-design-a-dashboard/introduction/intro-dash-1.jpg)

## 什么是仪表板 ？

“Dashboard”一词起源于马车车厢内置的一块木板，用于阻挡马匹溅起的尘土。当马车变成汽车时，仪表板仍然与阻挡前轮冲起的污垢有关。当汽车的设计转向将发动机放在前面时，仪表板的目的就变成了保护驾驶员免受热量和油的影响。仪表板也成为一个方便的位置，可以放置仪表来监控发动机的性能和有关汽车的其他数据点，例如燃油油位。

每当你想要展示信息来帮助人们做出更明智的决策时，你都应该考虑设计一个仪表板。一个精心设计的仪表板可以让我们安排多个数据可视化图表，以提供足够的上下文信息来做出明智的决策。

例如，这是一个跟踪 SaaS 公司主要指标的仪表盘。它提供了一目了然的信息，包括收入、运营成本、总用户数和其他相关数据，这些数据可以用来进行评估。
![Example dashboard for user data](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-is-a-dashboard/5cace68b51b229cebdb0fc4c_5c81b2f8cf5a793fa7742f9c_Building_a_Great_Dashboard-Dashboard.jpg)

这个仪表盘帮 CEO 或公司中的任何人从高层次了解情况，并帮他们决定关注的方向。该仪表板由各种数据可视化组成，为观众提供上下文以支持洞察并做出多个决策。一个有效的仪表板也是动态的——随着底层数据变化，仪表板自动更新，以便及时洞察和决策。

仪表板价值主张

让我们从每天亿万人使用的非常普遍的仪表板开始，即汽车上的仪表盘。想想显示的数据类型。这个仪表板展示了汽车的速度、转速、油温以及剩余油量。更不用说警告符号、挡位信息以及您是否开灯了等信息。它提供了所有需要监控的内容，以便您能够安全地驾驶。

驾驶员所看到的数据可以帮助他们做出关于速度、发动机健康状况以及是否需要去加油站等重要决策。这样的仪表板使人们能够做出明智的决定。

![Dashboard example](https://dataschool.com/assets/images/car%20dash.png)

让我们想象一下汽车仪表板只显示其中一个数据可视化。

![Speedometer in the car dashboard](https://dataschool.com/assets/images/car%20dash-speedometer%20only.png)

我们可能知道自己的速度，但随时可能耗尽燃料。只靠一张图表做出所有决策是危险的。不幸的是，人们通常就是这样接触数据的。孤立的数据缺乏做出决定的上下文和其他必要信息。

仪表板是如何被使用的

有许多的决策类型需要数据支持。包括随机的一次性场景、常规的预算决策和运营优先级。每种类型都需要不同的视角，让我们深入了解每种观点。

临时分析 Ad Hoc Analysis

临时分析有助于阐明您的思路或探索数据中的异常。这种类型的工作很少涉及规划或设计。人们会快速编写查询并选择简单的可视化来查看数据。他们可能会以几种不同的方式探索问题，这意味着多个（未优化的）可视化效果会被引入仪表板。此仪表板通常只有一个受众（您），或者与他人共享时附上它的书面或口头解释。

战略规划 Strategic Planning

战略规划仪表板适用于需要大量静态历史数据来做出最佳决策的大型项目或重要决策。它们结合了多个绩效视图，并将其与竞争对手比较。由于它们呈现的是数据的静态视图，因此通常只为特定的战略规划工作提供价值。虽然这些仪表板非常有用，但这不是它最常见的使用场景。

持续的决策支持 Ongoing Decision Support

仪表板最强大的用途是支持持续决策。这些可视化数据会定期更新或几乎实时，帮助助人们每天多次做出良好决策。这些仪表板专为使用它的受众而设计，并随着情况的变化而更新。

每个人都希望基于数据做出明智的决策。组织拥有的数据比以往任何时候都多，像这样的仪表板使人们能够利用上下文中所有数据进行有效地制定决策。

## 什么是一个出色的仪表板 （ACES）
![Dashboard Principles](https://dataschool.com/assets/images/ACES.png)
一个理想的仪表板应该是准确、清晰、赋能且简洁的。

### 准确 Accurate

仪表板的生死取决于受众对其所见内容的信任程度。如果人们怀疑仪表板的准确性，它将不会被用来做出决策。使用不准确的仪表板可能导致人们更加犹豫，不再信任组织拥有的任何仪表板或不再自行查询数据。一个仪表板缺乏准确性也可能导致对底层数据的信任度下降。

影响观众对仪表板准确性信任度的因素：
#### 数据质量

1. 展示的数据是否正确？

这个问题的答案应该始终是“是”。如果由于某种原因答案为“否”，请立即标记仪表板需要修复，以便受众不会使用不正确的信息进行决策。

查看者将假定他们遇到的任何仪表板都是准确的，除非它被正确标记为其他情况。使用括号语言（BROKEN） 和/或表情符号来明确仪表板的状态。

在下列仪表板名称中，我们可以清楚地看到哪些应该避免：

总体增长
网站转化率
❌ 活跃用户（故障） ❌
营销支出

2. 展示的数据是否为全部数据？

大多数情况下不是，因为数据是如何加载到数据仓库中的。工程师使用批处理定期将数据从生产数据库加载数据到数据仓库，这通常是仪表板查询的内容。这可能会使实时处理客户或方案的查看者带来困惑，因为他们在仪表板中看不到最新的数据。如果仪表板由于批处理而未显示所有数据，则应在仪表板上注明上次更新数据的时间及其计划。

![Database update statistics](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72e6afc1aa5c948833ea_Screen%20Shot%202019-04-08%20at%208.59.47%20AM.png)

#### 指标理解力

将注释直接放在可视化效果旁边可提供最快的澄清。
![Clarifying note on metric](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c92898f35b5d638110dce12_IfVO8X6UIUDjclmJeJy8VEXkhf7oiI7nf0dA1t5yAk-TehjBg5msEyMMgQ7kkhJ1XkPAfw62C3sDCjYXJE3RSP3f_Dba-ldZ004sKF1LIARGy7QODE5iN1M3IK2wOKkXd3Tk6BUh.png)
在观众能准确解读图表前，必须先理解度量标准。最佳做法是在仪表板上直接包含任何非传统指标的公式、注释或定义。将注释直接放置在可视化旁边提供了最快速的澄清方式。这里我们可以轻松地看到有关哪些人不包括在此度量标准中的澄清说明。虽然工具提示也可以实现这一点，但它们更隐蔽，因此效果不如直接注释。

#### 可视化设计

人是视觉动物，在解释任何数据可视化时都存在很多偏见。一个常见的错误是 Y 轴范围设置不正确。我们想强调变化，但又不想影响解释。对于折线图，我们不必从 0 开始，我们希望捕获数据如何变化；如果没有必要，则排除 0 基线是可以的。最好将线值的范围设定为垂直轴范围的三分之二左右。

良好的 Y 轴范围 - 可以清楚地看到可变性
![good y axis range](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72ab9562dba031541f6e_sT_5wEyFrpyYXI7F1PEfgbxw6k21Wf1h5ze4MzUzxAo4Eb2myAOjCqpieshDH4X9jhgYtNvTPKS2bS7N0D-OWJ-LpBqfhZ57HcZ5YpbmdwwUCyezwRdNNLzQwzwBHRT16Q1JqRb0.png)

糟糕的 Y 轴范围 - 看不到可变性
![bad y axis range](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72a9e5f4b62beafcecf1_r-t1Mt_b9s0pYCuMnhBfowDkCkGe2vlyCvunZXUoodPWoLLCbEIAQmMrsoz96wI56kCyP8hAdrVKj0ApWyj31XmtLFGUeobW4RePb760sYYYm3LQIY2aUtWtLr5mFA09ObxylFw3.png)
对于[条形图](https://chartio.com/learn/charts/bar-chart-complete-guide)，Y 轴必须从 0 开始，因为如果它从不同的点开始，则会阻止我们用条形的大小来判断它们之间的差异。当我们查看下面的两个示例时，在第2个示例中，我们可以看到 HR 成本约为 Support 的一半（Support 约为 50,000，HR 为0~200,000）。但是，当我们查看第二个示例时，由于轴被修剪，HR 看起来只要 Support 的 1/5，这是一个错误的推断。

良好的 Y 轴范围 - 从 0 开始
![good y axis on bar graph](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72aaafc1aa40a1880a83_d8_7CK6UOnayzgfQHQV2JYbrftsCfmLxDIo0uNhoIWxCy-firHSOIhSoaeYGY3kv08-1Oer0kS08V-hxvjIyW1J6j-WiNZP2sIsTPutGRpSKBDcYTqhxyjWizxpGSxfEC6u0e1lv.png)

错误的 Y 轴范围 - 不从 0 开始
![bad y axis on bar graph](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72aae5f4b66101fced15_6SdwQuyB9VMghXQX4oOlnf5R9tfe20Vbm7oPub0xtrnQTcXhHdcKWG1HfxC01tIxeK6chNO0ESUaZCP7msYU7KCMEQGlTtOuPrbBmdNtNdheWO4XMTKwOq-25DSvhr4nq3CpvJQh.png)

### 清晰 Clear

要基于仪表板做出决策，必须清楚地显示数据。可以使数据变得清晰的元素：
#### Fonts 字体

图表标题、轴标签和详细信息的字体不应是装饰性的。目标是易读性。我们建议使用无衬线字体，例如 Arial，Helvetica 或 Verdana。

![Legible vs Illegible fonts](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72fac775ff80b53b2080_Screen%20Shot%202019-04-08%20at%209.00.01%20AM.png)

考虑将在仪表板上显示的任何指标的字体大小。同时，要考虑观众将在哪种类型的设备上查看此内容。仪表板上的所有文本都不应该需要您眯着眼睛才能阅读。

![small dashboard picture](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c9271bd9c457ed3923fd2bf_nFSWRDYkMRbBtNcXRvc5O0h5ui-47ycYjgLt2mwL0HWKKHK58RHRT8iltn43MTL0qEDjczfYqqtCLj4opWCTR7avjKCytJJg2YeM_Gd-9Fovohccj7go2byenGr4OxqbYT8tqNV1.png)
#### Colors 颜色

为了保持视觉清晰度，您需要谨慎使用仪表板中的颜色。过于夸张或不够最终会使用户更难理解数据应该告诉他们什么。

通常情况下，您应该通过色轮上的不同色调来区分组别。尽量避免使用过于鲜艳的颜色以减少眼部疲劳。将所有颜色保持在相似的亮度和饱和度范围内，以便一组颜色不会与其他组相比过于突出。

![](https://dataschool.com/assets/images/colorComparison.png)

有一个例外情况，就是如果你有两个相互关联的组，比如每日指标值和滚动的每周平均值。在这种情况下，您可以给它们相似的色调以显示它们之间的相关关系，但是给其中一组更高的饱和度和更低的亮度以强调它而不是另一组。
![line-plot-rolling-average.png](https://dataschool.com/assets/images/line-plot-rolling-average.png)
如果所有的组之间都有顺序关系，那么你可以使用连续的颜色范围来表示。将亮度从浅到深或者反过来将数值从小到大进行编码也是常用方法。
![sequential-colors.png](https://dataschool.com/assets/images/sequential-colors.png)
当您在图表之间使用相同的指标或组时，使用的颜色应保持一致。这样可以更轻松地跨图形、表格和图表在数据中形成连接。
![colorlink.png](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c926d2f35b5d620b3025ac1_9Z1xfJw0MFTjfj4MBQr6EEzetgwfq3WDzvg6LA7QQ7GPc2Ei8tOLfqEwMP3W9iH093xjZ7y2ZV7VRwG_NjeacJBlJeTiON6_BPjKjfqdcHnVu6f4WoM0qciLJGg6f_bMJSNmfCzM.png)
大多数仪表板工具都包含一个用于清晰区分不同颜色的默认配色方案。如果由于某种原因它们没有提供或者它与您的数据不匹配，请自定义颜色，以便可以一目了然地评估数据。

您可以在 Chartio 文章 [如何选择数据可视化的颜色](https://www.atlassian.com/data/charts/how-to-choose-colors-data-visualization)中找到更多关于使用颜色进行数据可视化的信息和技巧。

#### Context 上下文

没有适当的标题和标签，解释图表可能会很困难。请始终包括以下信息：
描述性标题
描述性坐标轴标题
分类标签
这些附加项使新观众更容易理解正在发生的事情。
![Labels.png](https://dataschool.com/assets/images/Labels.png)
如果数据难以描述，它就不会被读取。理解仪表板上的图表所需的解释或上下文越多，仪表板作为智能工具的效率就越低。请记住，快速获得洞察是关键。眯眼是有挑战性的，并且花费时间寻找报告作者以获取进一步解释会减弱仪表板目标的影响力。

#### Layout 布局

大多数国家的观众都是从左到右、从上到下阅读。因此，最重要的信息应该放在左上角，而最不重要的信息则应该放在右下角。
![Layout.png (1000×720)](https://dataschool.com/assets/images/Layout.png)
可视化应该对齐。如果图表与其他可视化不对齐，将会分散观众的注意力，从而影响清晰呈现所有信息的目标。
![Screen Shot 2020-02-11 at 11.01.53 AM.png](https://dataschool.com/assets/images/Screen%20Shot%202020-02-11%20at%2011.01.53%20AM.png)
由于年度订阅未对齐，它突出并吸引了观众的注意力，因此可能看起来更重要。

### 赋能 Empowering

仪表板是否经常被使用并且有助于人们做出决策？这些特性最好由仪表板的最终用户/查看者在创建后进行评估。
#### 他们经常查看它吗 ？

大多数 BI 工具都提供查询日志，您可以在其中跟踪每个仪表板的查看次数：
![reviewtime.png](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c926d2fbafe0452e59d202f_jdoWYLISPDsfh1-7OJNjWyzEHmQetjxotx2Ed-1SJDmnZwCJjb3JEr6N6otpEgUB8ut_KfetsY5mPmvZ0LutbadciV3UsafQhHyXMyiw2vOYXOU7yQSIy1mbIrNtH1rEPm7PuaYw.png)
如果您开始看到查看次数下降，则应跟进不再查看仪表板的个人。提出以下问题可能会有所帮助：

- 仪表板对他们有用吗？
- 仪表板是否缺少一些关键信息？
- 他们目前使用哪些来源来访问准确的数据以做出决策？
- 如何更新仪表板以更好地满足他们的需求？

如果某些仪表板是为长期决策而设置的，则查看这些仪表板的频率可能会降低。这些间隙指示何时未使用仪表板。定期波峰显示何时使用它以及它的有用性。
![dashboardview.png](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c926d2fed88234cf2b797d1_NyKMwfvelkTCKsLnOOPDyPohysbNjkkucaaxmgNW3FPt_0wWGKaOPwPnVsOiL9Rz63472GYiVS2Wq4zKjy7EmIQUdi0QEIi6W7aqXpP8aHb0gh11g2y-8JyjUlZWpSb5vcwjIQCC.png)
如果某些仪表板设置为长期决策而被较少频繁地查看，则表示存在这些间隙。定期波峰显示它何时被使用及其实用性。

在这种情况下，这些观点可能与季度计划或报告相关。如果你在较短的时间范围内查看数据，则似乎没有用处。
![5cae7c2761e6fb1eaf187bc2_Screen Shot 2019-04-10 at 4.28.18 PM.png](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cae7c2761e6fb1eaf187bc2_Screen%20Shot%202019-04-10%20at%204.28.18%20PM.png)
#### 仪表板上显示的数据是否会影响他们的决策 ？

一个简单的检查方法是询问查看者：如果这个仪表板上的数字变成了 0 或翻倍，你会采取任何行动吗？如果答案是否定的，那么这个仪表板可能没有用。如果答案是肯定的，那么这个仪表板可能有用。

### 简明 Succinct
仪表板的主要好处之一是可以同时显示多个数据可视化。这有助于将所有信息一起处理。

由于人们的工作记忆有限，需要滚动才能查看其他数据可视化，会使观众无法得出重要结论。滚动变得适得其反。

在下图中，我们可以看到在左侧的报告中有几个圈出来的图表无法同时进行比较，因为我们需要滚动才能查看每一个。
![DASHBOARD-vs-REPORT-PNG-1.jpg ](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c81b2bb32b01728f174af7e_DASHBOARD-vs-REPORT-PNG-1.jpg)
将仪表板上的信息隐藏在“首屏”或屏幕底部下方通常表示该仪表板上的信息过多。问问自己这些数据是否必要，或者它们是否可以在不影响清晰度的情况下以更小的空间显示。

很容易将更多有用的图表放在一个仪表板上，但并非所有有用的图表都与仪表板目标相关。

在仪表板上添加更多有用的图表很容易，但并非所有有用的图表都与仪表板的目的相关。
![weatherandacuisition.png](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab73884eb4db27a1d3ef66_Screen%20Shot%202019-04-08%20at%209.14.35%20AM.png)
虽然天气预报很有用，支出与客户获取预测图也很有用，但两者并不相关。将它们并排放置只会造成混淆。请将你的预测分开处理。

与仪表板上其他信息相关的数据应该放在靠近它们的位置。
![closeproximity.png](https://dataschool.com/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c926d2fbafe0473e29d2030_smh7v8ndmVC7GH98CEfo7hHFaQ1Em98GlJ8j5b6nG0zlfXWcximEwzq-g9Gutf4zj0NE6KuhELcafGJUdY3RDStvZnXyug5M8EJgg91cDnLOiOZ65Qfc_P44qriTglCdX2u1Up0R.png)
回顾我们最初的仪表板，我们可以注意到相关数据的简洁放置，这使得作为一组评估数据显示变得容易。

总结-思考 ACES

准确 - 如果可视化数据不正确或可视化方式偏离其解释，仪表板将变得不可用
清晰 - 清晰可提高洞察速度
赋能 - 人们是否会定期访问仪表板以做出决策（确保仪表板实现其支持决策的目标）
简洁 - 保持仪表板简短且与关键信息相关，便于同时评估所有数据并做出决策

## 仪表板设计流程

仪表板设计过程与任何设计过程都非常相似-在这种情况下，输出只是一个仪表板。
### 为什么设计流程很重要

人们对于他们为某个问题提出的解决方案会非常执着。他们投入越多时间和精力到自己的解决方案中，就越坚信它能够很好地解决问题，而不管实际上它是否真正有效。这就是为什么避免通过构建仪表板直接解决问题至关重要。我们不希望那些不能很好地解决问题的仪表板被使用。

花时间理解我们为什么要构建一个仪表盘，并给自己时间去探索多个想法，然后再选择一个我们实际要构建的解决方案。

仪表板设计过程始于定义我们的利益相关者并确定他们需要做出哪些决策，然后确定哪些指标将支持这些决策。接下来，我们用笔和纸制作仪表板原型，收集反馈并迭代。在验证原型是否达到项目目标后，我们需要找到实际数据并构建仪表板。最后，我们需要分享仪表板并对其进行维护，使其成为受众的有用工具。
### 仪表板设计步骤
![Four steps of the design process: Define > Prototype > Build > Deploy](https://dataschool.com/assets/images/how-to-design-a-dashboard/dashboard-design-process/dash-design-process-overview.jpg)

#### 1. 定义 Define

![Example of potential audience](https://dataschool.com/assets/images/how-to-design-a-dashboard/dashboard-design-process/dash-design-define-audience.jpg)

这是第一步，也是最关键的一步。明确这个仪表板是为谁准备的，以及哪些指标对他们来说很重要，对于创建一个会被使用的仪表板至关重要。

Stakeholders  利益相关者

有 4 个主要利益相关者

- 设计师（你）
- 受众（将查看此仪表板的人）
- 负责人（观众中最有经验的人）
- 数据守门人（数据团队成员，将协助数据库工作）

我们将在下一章“识别关键角色”中定义他们的职责以及他们在流程中的角色。

Metrics  指标

你将与负责人一起从需要做出的决策过渡到可以查询和跟踪的指标。这个过程涉及大量的来回沟通，以筛选出有趣但最终不相关的指标，从而为决策提供基于关键任务数据的基础。我们将在“确定要监控的指标”中进一步详细说明如何进行此操作。

#### 2. 原型 Prototype

![visualization of the prototyping process](https://dataschool.com/assets/images/how-to-design-a-dashboard/dashboard-design-process/dash-design-prototype.jpg)

一旦我们确定了要放入仪表板的指标，就需要弄清楚如何最佳地展示它们，以便仪表板对整个受众都有用。

Visualizations  可视化

使用能够清晰准确地呈现指标的可视化。即使在绘制和原型设计图表时，做出正确的可视化决策也将改进原型和反馈循环。我们将在“为您的指标找到最佳可视化方案”中深入探讨何时使用何种图表。

Dashboards  仪表盘

在仪表盘中组合可视化图表有最佳实践。事实上，某些组合选择可能会让你改变之前选择的最佳可视化方式。我们将在“如何将图表排列为仪表盘”中讨论仪表盘排列的最佳实践。

Sketching and Iteration  绘制和迭代

在这个阶段，建议在纸上或使用低保真工具绘制可视化图表和仪表盘，这些工具不连接任何真实数据。这样做的目的是让你能够快速抛弃不好的想法，而不必担心时间投入。它还让你能够专注于设计，而不是检查数字是否正确。我们在“仪表盘原型设计和反馈”中讨论可视化和仪表盘原型设计策略。

#### 3. 构建 Build

![Building process visualization](https://dataschool.com/assets/images/how-to-design-a-dashboard/dashboard-design-process/dash-desig-build.jpg)
一旦我们对原型满意，就必须使用真实数据来创建仪表板。

Find the Data  寻找数据

在这一点上，可能会出现许多挑战。数据存储在哪里？数据是否杂乱？我们甚至是否有数据可用？与数据团队和数据守护者合作对于应对这一步骤至关重要。我们在《寻找构建指标的数据》中讨论了常见的困难以及如何克服它们。

Build Metrics/Dashboard  构建指标/仪表板

我们需要创建查询来支持指标，创建公式，并将数据转换为图表。使用框架来记录指标、公式和数据源可以使创建查询变得更容易。我们在《构建指标》中概述了如何最佳地完成这一点。

#### 4. 部署 Deploy

![Deploying the product](https://dataschool.com/assets/images/how-to-design-a-dashboard/dashboard-design-process/dash-design-deploy.png)

最后，我们有一个功能完善的仪表板。现在我们需要将其分享给全体受众。我们应该增强仪表板，使其在规模上更有效，并且我们需要确保随着使用量的增长和变化，对其进行维护。

Sharing  分享

受众对仪表板中呈现的数据的数据素养和背景会有所不同。您需要验证仪表板中是否包含足够的背景信息，并提供足够的培训，以便人们能够轻松地从仪表板中获取洞察。我们在“分享仪表板 - 分发策略”中讨论了这些技术。

Scaling  扩展

如果仪表板有用，其浏览量和观众数量很可能会增长。向仪表板添加链接、交互性和文档有助于它适应更多使用场景并激励其他仪表板创建者。此外，随着浏览量和观众数量的增加，优化查询所花费的时间成为保持仪表板有用的一个重要方式。我们概述了扩展仪表板的步骤。

Maintenance  维护

数据源、表和字段会变化，仪表板也需要随之变化。设定定期审查仪表板的时间对于保持其相关性和功能性至关重要。为受众提供一种报告问题的方法，将使你能够对仪表板进行有针对性的改进。我们将在“确保你的仪表板持续改进”中讨论维护问题。

# 识别关键角色

![group of people](https://dataschool.com/assets/images/how-to-design-a-dashboard/identifying_key_roles/groupPic.png)

在一个仪表板设计项目中，多个人参与使其成功。从项目开始就需要定义关键利益相关者，以促进在适当步骤中最佳的合作和沟通。一个典型的仪表板项目中，有四个关键利益相关者及其相应的职责。

这些角色可能由同一个人担任，但通常不是这样。

## 关键利益相关者

### 1. 设计师

![Define > Prototype > Build > Deploy process](https://dataschool.com/assets/images/how-to-design-a-dashboard/identifying_key_roles/allHighlighted.png)

这是负责创建仪表板和管理项目的人。由于您正在阅读这本书，很可能就是您。由于您将参与所有步骤，您应该负责协调项目的所有工作。

设计师职责：

- 定义利益相关者
- 指标计算
- SQL 查询
- 图表确定
- 仪表板构建
- 负责人批准

### 2. 受众

![Highlighting the deploy phase to find the audience](https://dataschool.com/assets/images/how-to-design-a-dashboard/identifying_key_roles/deployHighlighted.png)

这个利益相关者群体在仪表板创建过程中最为被动，但在仪表板最终确定后最为活跃。

受众责任：

- 提供反馈，以确定仪表板是否实用

在设计构建阶段，这个角色没有直接责任。然而，所有设计决策都应考虑受众如何与仪表板互动。这个项目中几乎做出的每一个决策都应该以受众为出发点。在完成仪表板项目的几乎每个步骤时，他们的产品或业务知识、业务角色以及任何文化或其他敏感性都需要被考虑。

关于受众需要牢记的问题：

- 他们将通过什么设备查看这个仪表板？
- 每个指标需要多少背景信息？
- 他们多久会参考这个仪表板？

这些问题将帮助指导你的设计决策，以确保仪表板对用户最有效。

然而，在过程中有一位参与者非常投入，我们将称这位个人为关键人物。

### 3. 负责人

![Highlighting Define, Prototype, and depoynnpw](https://dataschool.com/assets/images/how-to-design-a-dashboard/identifying_key_roles/notBuild.png)

需求提出者是请求仪表板的人。这是需要创建仪表板以满足业务需求的人，例如想要了解营销漏斗或用户随时间如何与产品互动。他们应该参与所有决策点，因为他们拥有最多的背景信息，以确保仪表板是有用的。

负责人职责：

- 提供该仪表板将提供决策支持
- 确定关键指标
- 确定该仪表板的受众
- 提供仪表板设计的批准

### 4. 数据守门人

![Highlight the build phase](https://dataschool.com/assets/images/how-to-design-a-dashboard/identifying_key_roles/buildHighlighted.png)

这是数据团队的一员，他了解数据源、架构以及将用于创建指标的其他库。在某些情况下，数据守门员和设计师的角色可能是同一个人。

数据守门员的主要职责包括：

- 设置数据权限和访问权限
- 帮助他人理解数据源架构
- 协助 SQL 查询

确定在可视化和仪表板中使用哪些列可能具有挑战性，因为许多数据库缺乏良好文档，且数据建模不适当。数据守护者可以大大简化这一过程，因为他们熟悉架构，并且可以授予您对您可能无法访问的表的权限。他们还可能亲自编写 SQL 查询，或帮助您优化您编写的查询。

## 摘要

- 制作一个出色的仪表板是一项团队工作，所有角色在其完成中都至关重要。
- 设计师协调项目并创建仪表盘
- 消费者是受众，设计应满足他们的需求
- 关键决策者定义仪表盘需要支持的核心决策
- 数据看门人帮助在数据库中找到相关数据

# 确定要监控的指标

![Dau logo](https://dataschool.com/assets/images/how-to-design-a-dashboard/determine_the_metrics_to_follow/dau.png)

在定义相关利益相关者之后，我们需要明确这个仪表板将帮助人们做出哪些决策。仪表板的作用是通过提供信息和背景来帮助人们做出更好的决策。负责人将帮助你确定这些决策，因为他们将是主要使用仪表板做出决策的受众。

通常情况下，负责人对于想要一个仪表板只有一个模糊的总体目标。你的任务是帮助他们将愿景细化为几个需要做出的关键决策，然后找到可以帮助这些决策的指标。这个细化过程需要几个步骤：

1. 理解负责人的动机
2. 聚焦少数决策
3. 定义指标理解负责人

### 总体目标

在定义目标方面，虽然有很多策略被写出来，但它们都归结为同一点：明确你想要达成的具体结果。结果越具体，就越容易采取行动。

对于仪表板来说，这个具体结果将是他们想要**_更明智_**决策的**_依据_** 。

### 动机

了解负责人为何希望获取更多信息，将有助于我们设计出理想的仪表盘。我们可以通过了解他们目前如何在这些决策上获取信息来理解这一点。使用客户开发框架逐一深入他们的决策：

- 做那个决定最困难的是什么？
- 为什么那很难？
- 你能告诉我你上次尝试做那个决定是什么时候吗？
- 你在做决定之前是如何获得信息的？
- 你的决策通知流程有什么不喜欢的地方？

他们的回答将让我们了解决策的重要性以及通知他们的创意方式。如果他们容易做出知情决策，新的仪表板对他们来说可能不太有价值。如果他们觉得困难，理解为什么做这个决策是困难的，将有助于洞察为什么仪表板可能是他们需要的解决方案。

他们上次尝试做那个决定的故事将为你提供关于他们考虑了哪些不同类型信息的洞察。如果他们在做决定之前没有尝试以某种方式了解情况，那么这个决定很可能并不重要。如果他们确实尝试过了解情况，那么你可以借鉴他们当前为决策提供信息的方式用于仪表板。了解他们不喜欢自己获取信息过程的地方，将确保你在仪表板中不会重复同样的错误。

在了解了负责人（Point Person）的目标和动机之后，我们需要分解在实现其目标过程中所有需要数据支持的决策。

## 定义决策

### 最佳情况

从理想场景开始，然后倒推。让负责人想象自己已经达成目标，然后倒推思考。

- 这是怎么发生的？
- 他们为了实现目标做出了哪些决策？
- 他们基于哪些数据做出了这些决策？

这项练习消除了任何技术限制，捕捉了他们希望仪表板能够支持的理想决策。

### 最坏情况场景

探索最坏情况，并逆向工作。让负责人想象完全未能实现他们的目标。

- 这是怎么发生的？
- 是什么糟糕的决策导致了这个结果？
- 哪些决策是在缺乏数据的情况下做出的？

这个练习确定了那些绝对需要数据支持的决策。它专注于识别可能出错的情况，因此可能会浮现更多实际决策。

### 优先级

与负责人一起，将理想和实际决策的清单进行排序。虽然对于希望用仪表板支持的决策数量没有硬性数字，但越少越好。这有助于集中用例，并使仪表板的设计更加容易。在确定此仪表板的决策后，我们需要看看如何用指标来指导这些决策。

## 定义指标

在了解哪些决策重要之后，我们需要确定哪些指标能最好地支持这些决策。在讨论定义指标的方法之前，我们先介绍一个框架来填写。下面是一个表格，概述了你创建围绕某个指标的查询所需的所有必要部分。我们将称这个表格为指标表格。

一个指标电子表格将帮助你跟踪负责人想要的内容，并帮助你快速构建最终的视觉化。与负责人合作，写出他们希望如何聚合、分组和过滤指标。如果你擅长从业务人员那里提取指标公式，这可能不是必需的，但如果你需要一个清晰的方式来记录他们的指标定义，我们建议使用指标电子表格。无论如何，这本书将使用指标电子表格来跟踪和参考对仪表板设计过程重要的指标。

![](https://dataschool.com/assets/images/Screen%20Shot%202020-02-10%20at%201.58.58%20PM.png)

有两种方法可以帮助确定合适的指标来支持他们的决策，分别是可视化和对话式。它们可以独立使用，也可以一起使用。

### 视觉方法

有些请求仪表板的人可能难以清晰地表达他们的需求。解决这个问题的一个简单方法是让他们填写一个能够帮助他们做决策的仪表板应该是什么样子的模板。这里是一个示例模板：

![Blank sample of a hand drawn dashboard template](https://dataschool.com/assets/images/how-to-design-a-dashboard/determine_the_metrics_to_follow/blankVisual.png)

他们填写完这份表格后，就更容易就他们可视化背后的指标进行更详细的讨论。在下面的“整合所有内容”部分，我们将讨论如何深入分析这些可视化。

### 对话方法

在确定了他们需要做出的优先决策列表后，通过以下问题来明确哪些指标将指导这些决策：

- 哪些数据能帮助做出这个决策？
- 还有哪些数据可能有助于提供背景信息？
- 我们还能如何提高这个决策的质量？

在与负责人一起分析每个决策时，他们很可能希望为每个决策拥有多种类型的数据。他们想要看到的数据将成为你在仪表盘中可视化的指标。

## 将所有内容整合在一起

在确定 Point Person 感兴趣并用于指导其决策的指标集之后，无论是通过其绘图还是通过对话，现在是具体化每个指标的时候了。

### 这个指标是如何计算的？

- 写出每个指标背后的公式。例如：LTV 是 平均每客户收入 / 客户流失率

### 你希望如何分组数据？

- 类别（例如：用户类型、人口统计）
- 时间范围（例如：每日、每周、每月）
- 等等。

### 你想如何过滤数据？

- 组
- 时间段
- 特定标准（例如：电子邮件地址、现有客户、流量来源）

推动负责人从不同角度思考每个指标，以找到最有价值的格式。回顾常见的聚合方式（SUM、COUNT、AVG、MAX、MIN 等）。讨论不同统计数据之间的权衡，例如平均值比中位数更容易受到异常值的影响。讨论不同级别的聚合方式，以及它们如何分别揭示不同的问题。

我们将所有有价值的指标变化记录在指标电子表格中。上述问题直接对应指标电子表格的列。这里是一个关于运营成本、收入和订阅的指标电子表格的填写示例：

![Filled out Metric Spreadsheet example](https://dataschool.com/assets/images/how-to-design-a-dashboard/determine_the_metrics_to_follow/filledSpreadsheet.png)

现在我们已经明确了具体的指标，我们可以开始思考如何最有效地展示这些指标。在接下来的几章中，我们将回顾一些选择指标可视化方法和安排仪表盘的最佳实践。

## 摘要

- 构建一个出色的仪表盘的第一步是理解构建该仪表盘的核心前提或目的。
- 这种理解可以通过采访仪表盘的关键人物，了解他们想要回答的问题来获得。
- 然后，你可以与负责人一起，更详细地定义将指导他们决策并回答他们问题的指标。

# 找到最适合您指标的图表

为您的指标选择最佳图表并不总是一个简单的过程。某些图表无法很好地表示某些数据集，而某些图表根本无法表示某些数据集。有时您只需要一个表格、单个值，或者只是展示一些文本。了解何时使用每种类型的图表将帮助您设计最有用的仪表板。

## 数据可视化的优势

图表比查看包含数字的表格更快地帮助人们识别模式。例如，看看下面的表格。

![Example data table](https://dataschool.com/assets/images/Screen%20Shot%202020-02-13%20at%201.37.38%20PM.png)

现在看看这个图表。

![Example chart made with data table](https://dataschool.com/assets/images/Cost%20vs%20Revenue_2020-02-13-133838.png)

通过[条形图](https://chartio.com/learn/charts/bar-chart-complete-guide/)可以清晰地看出当收入大于成本时的情况，以及收入在不同月份的差异。与表格相比，更容易从中得出见解，因为在表格中，我们需要读取我们正在比较的两个单元格中的完整数字。

数据可视化是一个通用术语，描述了通过将数据置于视觉环境中来帮助人们理解数据意义所做的任何努力。在基于文本的数据中可能未被发现的模式、趋势和相关性，可以通过数据可视化更容易地暴露和识别。

## 最常见的可视化

在 Chartio 上研究了超过 10 万个仪表板后，我们发现大多数数据显示在少数几种图表选项中。

![Graph of  most commonly used visualization types](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/dashboardCreationCount.png)

虽然这些可能不是最优化设计的，但它们最常被创建。人们创建数据表格视图、单个值、条形图和折线图。

然而，当我们查看仪表板上平均观看量最高的可视化内容时，我们会得到一个不同的排名。

![graph of most viewed visualization types](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/dashboardAverageViews.png)

条形图、气泡图、仪表图、单一值图和条形图是最常被查看的。在进入更专业的可视化类型之前，请考虑这些选项。

## 选择可视化

我们创建了一个决策树来帮助您选择最适合您数据的图表。您可以使用这个流程图来选择您的可视化。请下载它，打印出来，并将其放在您桌子附近的墙上。

![flow chart outlining how to choose what visualization to use](https://dataschool.com/assets/images/Decision%20Tree%206.png)

我们还创建了一个列表，列出了每种图表类型在何种情况下最适合使用，以便观众能够更详细地正确解读数据：

## 单一值

![Comparison of different single value charts](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/singleValueCharts.png)

## 多个值

要显示多个值，有四种常见类别：

- **关系：** 多个独立变量之间如何相互关联。
- **比较：** 两个或多个数据集相互之间的比较。
- **构成：** 一组数据是如何由更小的部分组成的。
- **分布：** 不同的数据集是如何在人口或其他分布中分布的。

### 关系

![Scatter plot vs bubble plot](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/relationshipCharts.png)

### 比较

![Bar Chart vs Line Chart vs Bar Line Chart](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/comparisonCharts.png)

### 组合

![Area Chart vs Pie Chart](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/compositionCharts.png)

### 分布

![Bar Chart vs Line Chart vs Heat Map vs Box Plot vs Funnel chart](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/distributionCharts.png)

## 示例

使用流程图或更详细的列表视图，我们可以回顾上一章中为每个指标创建的决策过程。查看指标电子表格中的公式和分组内容，让我们为每一个创建可视化。

![example metric spreadsheet](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/metricSpreadsheet.png)

### 运营成本

我们需要以多种方式汇总运营成本。我们需要计算总额，还需要按部门和月份分组计算总额。对于总额，使用单一值图表是合适的。对于按部门和按月份的汇总，我们应该使用折线图。

![Example single value metric](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/operationCost.png)

![Example of a line chart](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/operationChart.png)

### 收入

正如我们之前在表格中识别的，我们需要的结果是一个单一值。由于负责人没有留下想要将其与以往时期或目标进行比较的评论，因此“单一值”图表是表现该数据的最佳方式。

![Single aggregate for revenue](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/revenueCost.png)

### 订阅

我们获得了一个数字，但可以添加一个火花线（一种没有坐标轴的小线形图）来让我们了解该数字的历史变化背景。

![Subscriptions graph and single value](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/subscribers.png)

## 不该做的事情

### 3个维度

在比较数值时，人们已经难以比较二维面积。例如，下面所有的矩形面积都相同。

![3 different shapes that have the same ares](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/3dNotToDo.png)

这也是为什么许多人建议在使用饼图或面积图时要谨慎，因为它们利用了二维空间。它们可以用，但只有当类别非常少的时候。

人们也不擅长比较 3D 体积。下面所有的形状（除了位于中心上方的绿色 L 形）都有相同的体积（由 4 个相同大小的立方体组成）。

![7 3d objects with equal volume](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/3dShapes.png)

此外，传达 3D 信息通常需要比以 2D 方式展示占用更多的空间。坚持使用简单的 2D 可视化。

### 太多类别

一旦类别超过5-7个，就很难快速理解图表。

![line graph with 8 categories](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/tooManyCategories.png)

考虑限制可视化中显示的类别数量，或者尝试将较小的类别合并到“其他”类别中。

![line graph with only 5 categories](https://dataschool.com/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/otherBuckets.png)

通常也会将"其他"列设为灰色，以弱化这个类别，因为它是多个类别的组合。

## 摘要

- 选择图表应根据你拥有的数据类型和你想要展示的内容来决定。使用流程图可以帮助你做出最佳选择。
- 如果你正在展示多个值，考虑一下你是否试图展示这些值之间的关系、比较、组成或分布，以帮助你选择最合适的图表。

# 将图表排列为仪表板

图表的排列是仪表板项目中科学让位于艺术的地方。在排列和调整图表大小以及选择[字体和颜色](https://dataschool.com/how-to-design-a-dashboard/what-makes-a-great-dashboard-aces/)时，需要考虑许多因素。仪表板中可视化的组合方式可能会促进或阻碍决策过程。

## 对齐与分组

在我们这本书中一直在处理的仪表板中，我们最终得到了十三个单独的图表，监控八个不同的指标。一些指标被监控两次，以显示当前状态，以及随时间的趋势分析。

当我们开始创建仪表板时，我们最终将图表分成了三个区域。通过将密切相关的图表和指标分组，它给我们提供了一个更连贯的画面。

![Dashboard grouping breakdown example](https://dataschool.com/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/dashboardBreakdown.jpeg)

在这里我们可以看到用蓝色阴影表示的收入和运营指标，用橙色阴影表示的营销指标，以及用绿色阴影表示的[用户指标](https://chartio.com/learn/product-analytics/top-product-metrics/) 。将关于相似主题的图表放在一起。

### 对齐快速技巧

- 如果某个特定指标以两种方式显示，它们应该紧挨着放置。例如，这里我们可以同时看到当前的[用户计数](https://chartio.com/learn/product-analytics/what-are-active-users/)以及过去一年中的趋势。![Different views of the same metric](https://dataschool.com/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/sameMetrics.png)
- [折线图](https://chartio.com/learn/charts/line-chart-complete-guide/)应使用相同的时间框架垂直堆叠，以便进行比较。例如，下面我们可以看到我们的 MRR（月经常收入）如何与按部门划分的运营成本进行比较。![vertically stacked charts with same time period](https://dataschool.com/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/sameTime.png)
- 将项目紧挨着放置，不要间隔，以便为两个可视化使用相同的标题。在这里，你可以看到这两个可视化之间似乎没有任何间隔。这使数据分组，并清楚地表明它们描述的是同一件事。![Using a title for multiple charts on a dashboard](https://dataschool.com/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/sameTitle.png)

## 检查布局

通过咨询负责人，确定你要构建的仪表板最终将在哪种设备（如 iPhone、笔记本电脑、电视等）上呈现的宽高比。查看我们的模板，以获取关于如何组合可视化元素的建议。

![Example dashboard layout](https://dataschool.com/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/exampleLayout.png)

查看更多： [Figma 中的仪表盘模板](https://www.figma.com/file/dTND29GywRZ16tgsv7nORhKx/Dashboard-Templates?node-id=0%3A1)

现在也是使用 Google 搜索例如你使用的带有仪表板界面的示例仪表板和应用程序的好时机，以获得关于哪些组合有效的灵感。

这里有一个 Google Analytics 使用的好布局：

![A good example dashboard from Google Analytics](https://dataschool.com/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/googleAnalytics.png)

[https://medium.freecodecamp.org/how-and-why-to-get-started-with-google-analytics-153dc35b7812](https://medium.freecodecamp.org/how-and-why-to-get-started-with-google-analytics-153dc35b7812 "https://medium.freecodecamp.org/how-and-why-to-get-started-with-google-analytics-153dc35b7812")

在仪表盘设计中创新可以积极挑战我们看待事物的方式，但过多的创新也可能让您的受众感到困惑。坚持简单的布局，不要违背 [ACES 仪表盘设计原则](https://dataschool.com/how-to-design-a-dashboard/what-makes-a-great-dashboard-aces/) 。

## 有限种类

在 Chartio，我们也注意到包含多种图表类型的仪表板在达到某个程度前会获得更多浏览量。虽然我们可以看到，随着图表类型增多，创建的仪表板越来越少，在超过 6 种不同类型后急剧下降：

![Chartio chart types variety](https://dataschool.com/assets/images/Number%20of%20Dashboard%20vs%20Number%20of%20types%20of%20chart%20o_2020-02-16-075607.png)

当使用六种不同类型的图表时，平均观看量会达到峰值：

![](https://dataschool.com/assets/images/AVG%20Number%20of%20Views%20by%20Number%20of%20Chart%20Yypes%20on%20D_2020-02-16-082623.png)

由于包含超过6种图表类型的仪表板中存在异常值，我们没有包含超过6种图表类型的平均观看量。

## 避免过多信息（TMI）

除了在仪表板中使用适当数量的图表类型外，请记住不要在仪表板中包含过多的可视化。会有很多机会让仪表板因信息过多而超载。信息过载会削弱仪表板的功能。如果需要整理的信息过多，用户将难以找到他们需要的内容。

在 Chartio，我们查看了每个仪表板中的可视化数量，发现其分布严重不均。绝大多数仪表板只包含几个图表，而超过十几个图表之后则呈现非常长的尾部：

![](https://dataschool.com/assets/images/Charts%20Per%20Dashboard_2020-02-16-080727.png)

然而需要注意的是，包含更多图表的仪表板的平均查看次数确实会上升。

![](https://dataschool.com/assets/images/AVG%20Number%20of%20Views%20by%20Charts%20Per%20Dashboard_2020-02-16-082317.png)

所以虽然这看起来可能与我们最初关于避免过多图表的声明相冲突，但实际上并不矛盾。随着图表数量的增加，平均浏览量也在上升，这意味着人们需要更多信息。仪表板所有者不断在现有仪表板中添加更多图表。相反，他们应该退一步，遵循仪表板设计流程，以确定需要做出的新决策，并为这些决策创建一个新的仪表板。

如果信息需要以原始形式查看并在更细粒度的层面上进行汇总，你应该创建一个包含这种下钻视图的第二个仪表板。不要害怕链接到其他仪表板。这保留了当前仪表板的核心决策和目标，并允许人们在需要时更详细地探索数据。

## 摘要

- 将可视化对齐以方便比较。
- 将可视化分组以促进洞察。
- 熟悉各种仪表板布局，以帮助您为自己的仪表板制定有用的布局方案。
- 要警惕 BI 工具中能够实现的过于花哨的仪表盘布局。
- 不要让仪表板堆砌过多可视化。在适当的地方提供链接以便进一步调查。

# 仪表板原型设计与反馈

![Dashboard prototyping feedback loop](https://dataschool.com/assets/images/how-to-design-a-dashboard/dashboard_prototyping_and_feedback/feedbackLoop.png)

## 从理论到实践

我们已经回顾了不同类型的数据可视化以及它们如何最适合不同类型的指标。我们还涵盖了仪表板布局和组成的最佳实践。现在，是时候深入并开始创建您自己的仪表板概念了。

## 评审

将说明目标、决策和指标的所有文档集中在一起。快速评审以确保你理解仪表板的全部需求。

现在，是时候动笔了。在典型的设计过程中，原型设计阶段需要大量的发散性思维来探索多种解决方案。在仪表盘设计过程中，输出通常局限于几种图表类型。这意味着你可以立即开始绘制相当准确的设计。

## 草图

从单个指标开始，将其绘制为可视化。尝试以不同的聚合和分组方式绘制它们。

![Multiple chat drawings](https://dataschool.com/assets/images/three%20charts.png)

不断问自己：

- 观众需要做出哪些决定？
- 观众需要了解哪些信息才能做出这些决策？

在构思时，常常会有新的指标想法。先画出来，然后评估它们是否有助于从仪表板中获取需要做出的决策信息。如果你决定保留它们，回去填写指标表格的详细信息，以便日后能轻松构建它们。

然后尝试将多个可视化放在一起绘制。

![Dashboard Sketch](https://dataschool.com/assets/images/Dashboard%20Sketch.png)

在为仪表板绘制不同可视化组合时，尝试在每次尝试中使用的图表数量尽可能少。首先问自己，如果只有一张图表，你会选择哪张。对两张、三张或更多张图表重复相同的过程。这将帮助你确定哪些图表应该在视觉上优先显示。

## 反馈

向负责人征求对草图的意见。你的草图仪表板能否更好地帮助他们做决策？在这个阶段，向最终受众的其他成员征求反馈。与查询新数据相比，修改草图相对容易。

有时人们会犹豫不决，不愿意提供反馈。有一些简单的方法能让他们给出五个可操作的批评意见。针对每个可视化，请询问以下问题：

- 他们基于这个仪表板将做出哪些决策？
- 他们需要知道这些信息来做决定吗？
- 他们还想了解这个指标的其他哪些信息？
- 他们从可视化中得出的结论是否显而易见？
- 如果这个指标远高于或远低于正常水平，是否会影响他们的决定？

针对整个仪表盘，请询问以下问题：

- 这个仪表板是否支持这个项目的决策和目标？
- 哪个可视化最先吸引眼球？应该吗？
- 这些可视化是否应该被归为一组？
- 仪表板有什么缺失的吗？

## 迭代

要乐于接受反馈。目标是创建一个对受众有用的仪表板，而不是说服人们你的设计很棒。你可能需要做多轮原型设计、反馈和迭代，才能找到合适的可视化组合。

当你确信仪表板包含了有助于支持决策的相关信息时，你就可以让各种图表生动起来。

# 找到构建指标的数据

![Finding data icon](https://dataschool.com/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/findingData.png)

从前面的章节中，我们为构建仪表板奠定了基础，回答了以下问题：

- 这个仪表板将支持哪些决策？
- 这些决策将依据哪些指标？
- 哪些可视化方式最能展示这些指标？

然而，仪表盘设计中最大的挑战可能是“如何”，即我们如何获取数据来构建每个可视化。

在寻找数据时，你会遇到三种数据场景：

- 你有干净的数据
- 你有混乱的数据（最常见）
- 你没有数据

如果你有这些数据，这将是一个简单的步骤。如果数据杂乱无章或不存在，事情将变得更具挑战性。

## 当你有数据时

![](https://dataschool.com/assets/images/clean%20data.png)

找到你需要的数据可能是整个过程中最困难的部分。通常，数据没有良好的文档记录，而你需要的信息可能分散在多个数据库中。首先，搜索包含你的指标电子表格中关键词的表格。

检查你能够访问的[数据库的架构](https://dataschool.com/how-to-teach-people-sql/accessing-data/) 。一些 BI 工具为你提供可视化的实体关系图来帮助你探索：

![available schemas](https://dataschool.com/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/schema.png)

有些产品如 [Chartio](https://chartio.com/product/visual-sql/) 也允许你通过自动补全来搜索以找到相关的列和表：

![](https://dataschool.com/assets/images/autocomplete.png)

当你找到一些有潜力的东西，比如一个包含你搜索关键词的表，或者一个包含与你关键词匹配字段的表时，运行一个快速查询：

```
SELECT *
FROM operations
LIMIT 3;
```

![check for relevant info with limit](https://dataschool.com/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/fromOperations3.png)

一旦你获取结果，可以快速查看是否包含相关信息。在这种情况下，我们可以看到该表有一个部门列，看起来很合适，而金额列可能是我们正在寻找的成本数据。如果像这样的表与某个指标相关，就记下来或直接放入[指标电子表格](https://dataschool.com/how-to-design-a-dashboard/determine-the-metrics-to-monitor/) 。

你的下一步将是确定哪些数据你自己找不到。如果你找到一个表，但不确定它是否是正确数据，在表名后加上一个？。如果你为一个指标找不到任何相关表，在指标电子表格中放入三个？。

![Full metric spreadsheet](https://dataschool.com/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/metricsSpreadsheetFull.png)

如果你对找到的表格或列有任何疑问，是时候咨询数据守门人了。我强烈建议带着你有关表格和字段的疑问清单去咨询数据守门人，并使用指标电子表格作为结构化对话的便捷方式。

与数据守门员一起逐一审查每个指标，解释你认为应该使用哪些表和字段，以及哪些表和字段你有疑问。

![table structure with desired tables highlighted](https://dataschool.com/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/highlightedSchema.png)

数据守门员将确认您已选择的表格和字段，或帮助您找到所需的表格和字段。由于访问权限，您可能无法访问某些需要的数据。数据守门员可能会授予您访问权限，帮助创建查询，或提供关于如何绕过此限制的反馈。定位相关表格后，更新指标电子表格。

![Metrics spreadsheet with datasources highlighted](https://dataschool.com/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/metricsSpreadsheetDatasource.png)

我们还需要指定表格中将要使用的字段，以便简化 SQL 查询的创建。在内容列中，将字段名放在分组类别的括号下方。请注意，“总计”没有与之关联的列，因为它是在汇总整个表格。

![Metrics spreadsheet with the formulae highlighted](https://dataschool.com/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/metricsSpreadsheetFormula.png)

## 当你有杂乱的数据时

![messy data](https://dataschool.com/assets/images/messy%20data.png)

大多数数据都是混乱的数据。它可能存在明显的问题，比如缺失值。它可能存在更神秘的问题，比如手动输入时明显的拼写错误，或者更糟，模糊不清的值。无论原因如何，在使用这些数据制作可视化之前，所有这些问题都需要被处理或记录下来。

### 缺失值

对于你将在指标计算中使用的任何列，都应检查空值和空白记录。以下是一个查询示例，用于获取空值的总数：

```
SELECT COUNT(*)
FROM table
WHERE field is null
```

要检查空白值，我们可以使用：

```
SELECT COUNT(*)
FROM table
WHERE field = '' or field = ' '
```

你需要评估如何处理缺失值。

#### 忽略 - 保持原值

- 这是处理缺失数据最常见的方法。注意现有缺失值的数量，然后继续进行。
- 如果一个字段中缺失数据量很大，不建议将其用于计算，因为它可能不再能代表该字段。

#### 删除 - 删除任何包含缺失数据的记录

- 只有在记录是数据集非常小的一部分，因此其删除不会扭曲数据时，才建议删除。
- 删除记录的一个正当理由是因为它在多个字段中存在缺失值。

#### 插补 - 用一个值替换缺失值

- 如果数据相对正态分布，如果只有少量记录缺失该值，可以用平均值或中位数来替换该值。这将使分布更偏向中心，因此要谨慎。
- 在某些情况下，留空一个字段可能表明真实值是0。在这种情况下，用0进行插补是合适的。

无论你选择哪个选项，务必将决策记录下来，以便其他人可以重现计算，并判断他们所看到的数据是否应该被视为100%准确。

### 显然错误的值

在用于指标计算的任何列中，你也应该检查异常值。对将要使用的任何字段的最高和最低值进行快速检查。你可以使用 ORDER BY 子句来完成这项操作。

```
SELECT *
FROM table
ORDER BY field DESC
```

```
SELECT *
FROM table
ORDER BY field ASC
```

这将快速揭示该领域与其他值差异很大的数值。

在文本字段中，这显然是错误的，因为错误可能不会显示在有序列表的开头或结尾，因此难以检测。但是，有几种常见的情况需要检查：

#### 电话号码

- 常见的假号码：123-456-7890、000-000-0000和999-999-9999

#### 姓名

- 常见的假姓名：John Doe、Jane Doe、
- 重复的字母，如“aa”、“bb”

#### 生日

- 太老：超过100年前
- 太年轻：不足13年前

### 可能错误的值

虽然之前的方法处理了明显错误的值，但可能存在更微妙的外部值[异常值](https://dataschool.com/fundamentals-of-analysis/what-is-an-outlier/)以及潜在的错误值，你可能需要处理。

例如，我们将演示一种使用四分位距法确定异常值的方法。首先，我们需要在数据中确定四分位数。四分位数将一个定量变量分成四个相等的部分。四分位距（IQR）是上四分位数（Q3）和下四分位数（Q1）之间的差值，这两个值覆盖了数据中间的 50%。如果一个值与中间值相差足够远，我们可能会认为它是异常值。

![](https://dataschool.com/assets/images/interquartile%20range.png)

一个普遍接受的离群值定义是 1.5 * IQR + Q3 或 Q1 - 1.5 * IQR。本质上，如果一个数据点比上四分位数大 1.5 倍的 IQR，或者比下四分位数小 1.5 倍的 IQR，那么它就是一个离群值。

这里是一个应用此公式来[使用 IQR 查找异常值](https://dataschool.com/how-to-teach-people-sql/how-to-find-outliers-with-sql/)的查询示例。

```
WITH orderedlist
     AS (SELECT Row_number()
                  OVER(
                    ORDER BY amount)AS num,
                quantity
         FROM   table)
SELECT num,
       quantity
FROM   orderedlist
WHERE  num > Floor((SELECT Count(*) AS c
                    FROM   table) * 0.75 + ( Floor((SELECT Count(*) AS c
                                                    FROM   table) * 0.75)
                                             - Floor(
                                             (SELECT Count(*) AS c
                                              FROM   table) * 0.25) ))
        OR num < Floor((SELECT Count(*) AS c
                        FROM   table) * 0.25 - ( Floor((SELECT Count(*) AS c
                                                        FROM   table) * 0.75)
                                                 - Floor(
                                                 (SELECT Count(*) AS c
                                                  FROM   table) * 0.25) ))
```

在文本字段中，潜在的错误值更难检测。注意以下几点：

#### 拼写错误

- 轻微的错误会影响查询的分组或过滤：'Hamburger'，'Hamburdr'，'Hanburger'

#### 不同的大小写

- 任何差异都可能影响查询的分组或过滤：“Hamburger”、“HamBurger”、“hamburger”

SQL 会将这些变化视为独特。一种检测这些变化的方法是按包含文本值的列分组，并检查记录非常少的任何组。这些很可能是较大类别的拼写错误版本。

## 当你没有数据时

![](https://dataschool.com/assets/images/no%20data.png)

有时你的数据库中没有用于你的指标的数据。这可能是一个巨大的障碍，但有几种方法可以前进。首先，我们需要知道：

- 我们是否关心历史数据？
- 这个指标是否真的可以追踪？
- 需要多少数据才能使这个指标有价值？

有了这些答案，我们可以用几种不同的方法来解决这个问题。

### 为新的数据点添加指标

如果历史数据不重要，可以考虑与数据守门员合作，开始追踪你想要用于构建指标的数据。这可能需要工程团队来实现新的追踪功能。根据可用的工程资源来帮助，这可能会延迟仪表板项目的完成。

如果这里所需的指标是用于统计测试，应与数据守护者讨论进行测试所需的数据量。考虑获取这些数据所需的时间，并告知负责人。通常情况下，人们希望在足够的数据来确保结果之前就尽快得出结论。不要让您的仪表板被这样错误地使用。在引入新的数据点时，提前设定时间预期，甚至可以在仪表板上注明何时可以得出结论。

### 代理指标

如果我们想要历史数据但我们没有想要指标的原始数据，我们可以使用代理指标。代理指标是在我们无法直接测量所需指标时，能给我们相同或相似信息的一些指标。

**示例：**

负责人想知道客户对产品的看法。

期望指标：净推荐值

- 这尚未实施，依赖于人们填写表格，因此可能没有足够的数据来得出结论。

替代指标：回访用户

- 我们可以将客户使用产品的频率视为一个代理指标。在这种情况下，我们将客户的常规使用等同于他们喜欢这个产品。

虽然代理指标并不精确，但它们能给我们一个很好的估计。然而，在使用代理指标时需谨慎，因为它们可能会测量到你意想不到的事物，并可能引导你做出错误的决定。

#### 代理指标示例

考虑一家需要很长时间才能知道其产品对消费者是否有价值的公司，例如教育公司。他们为学生提供了大量知识，但如果他们的最终目标是就业安置，他们必须等待数月才能知道他们的教育是否有效。

他们如何在期望的指标事件发生之前衡量自己是否做得好？

你可以通过调查来衡量学生对就业前景的信心，可以衡量毕业率，或者可以衡量外部雇主对学生产生的兴趣量。这些代理指标中的每一个，你都可以比“他们是否找到工作”的指标更早地评估，这将引导你关注不同的活动。

## 摘要

- 找到数据所在位置可能具有挑战性。
- 很可能你需要在搜索中涉及数据守门人。在与他们接触之前，准备好你要查找的数据。
- 有时由于您的访问权限级别，您可能无法找到数据，需要咨询数据看门人。
- 填写您的指标架构，以了解每个指标需要哪些表和字段。
- 确定您的数据有多混乱，并进行适当的清理。
- 如果您没有某个指标的所需数据，请与数据看门人合作，以收集新的数据点或使用替代指标。

# 构建指标

_最后修改时间：2020年2月15日_

![Build the metrics: image of how db metrics interact with technology](https://dataschool.com/assets/images/how-to-design-a-dashboard/build_the_metrics/coverImage.png)

在前面的章节中，我们填写了[指标电子表格](https://dataschool.com/how-to-design-a-dashboard/determine-the-metrics-to-monitor/) 。我们与负责人一起定义了一组指标。然后我们联系了数据看门人，以确定我们需要哪些数据源。现在我们将使用完成的指标电子表格来创建各种 SQL 查询。

指标电子表格的列映射到 SQL 查询。

![SQL query metric architecture](https://dataschool.com/assets/images/how-to-design-a-dashboard/build_the_metrics/metricArchitectureMap.png)

看看我们可以从这张电子表格中为运营成本指标创建的几个示例查询：

![](https://dataschool.com/assets/images/operationsCost.png)

## 总运营成本

```
SELECT SUM(amount)
FROM Operations
WHERE department != 'marketing'
```

![SUM of all departments. Sum = 2628498](https://dataschool.com/assets/images/how-to-design-a-dashboard/build_the_metrics/costsSum.png)

### 按部门划分的总运营成本

（当我们引入 GROUP BY 语句时，必须在 SELECT 语句中也包含该列）

```
SELECT SUM(amount), department
FROM Operations
WHERE department != 'marketing'
GROUP BY department
```

![SUM separated by department](https://dataschool.com/assets/images/how-to-design-a-dashboard/build_the_metrics/costsSumByDepartment.png)

### 按部门按月总运营成本

```
SELECT SUM(amount), department, TO_CHAR(created_date, 'YYYY-MM') AS month
FROM Operations
WHERE department != 'marketing'
GROUP BY department, month
```

![SUM separated by department and month](https://dataschool.com/assets/images/how-to-design-a-dashboard/build_the_metrics/costSumByMonth.png)

SQL 的一大优点在于它能够处理查找数据源中列的逻辑工作，同时还能计算数学方程式。大多数其他方法需要你首先通过 SQL 访问未聚合的数据，然后将数据导出到工具中以进行计算。由于 SQL 与访问数据库相关联，当底层数据发生变化时，你可以重新运行查询以查看最新数据。这比将数据导出到其他工具更高效。

## SQL 资源

如果你在理解聚合或子查询的工作原理方面遇到困难，可以查看：

- [SQL Count 聚合的工作原理](https://dataschool.com/how-to-teach-people-sql/how-sql-aggregations-work/)
- [SQL 子查询的工作原理](https://dataschool.com/how-to-teach-people-sql/how-sql-subqueries-work/)

如果你遇到错误或返回0行结果，可以查看：

- [调试 SQL 语法错误](https://dataschool.com/how-to-teach-people-sql/debugging-sql-syntax-errors/)
- [调试 SQL 返回 0 行](https://dataschool.com/how-to-teach-people-sql/debugging-sql-0-rows-returned/)

## 检查你的查询

不要假设你的查询是完美的。你应该通过查看其他人的查询和/或由数据守门员审查它来检查它。

### 检查其他人的查询

根据你使用的 BI 工具，你可以看到其他人的 SQL 查询。这可以非常有启发性。你可以留意他们使用的数据源，这些是你之前不知道的。你也可以查看其他人是否在他们的查询中存在复杂性。

复杂查询示例：

```
SELECT DATE_TRUNC('day', "Payments"."payment_date")::DATE AS "Day of Payment Date",
SUM("Payments"."amount") AS "MRR"
FROM "public"."payments" AS "Payments"
WHERE ("Payments"."payment_date"::DATE BETWEEN {CALENDAR_INTERVAL.START} AND {CALENDAR_INTERVAL.END})
GROUP BY DATE_TRUNC('day', "Payments"."payment_date")::DATE
ORDER BY "Day of Payment Date" ASC
LIMIT 1000;
```

上述查询的复杂性通常表明数据具有细微差别、杂乱无章，或者需要遵循某些业务逻辑。如果你遇到一个复杂的查询，该查询与你正在处理的指标相同或相似，可以尝试联系该复杂查询的创建者。你应该尝试理解额外部分的内容，以便将相关内容整合到自己的查询中。

另一方面，如果其他人有类似看起来查询相似指标，你可能没问题。然而，你仍然想要让其他人看看以验证。

### 咨询数据守门人

对你的查询进行代码审查。再次联系数据守门人，以验证你的查询是否正确计算它们的指标。拥有指标电子表格有助于此过程，因为他们可以看到你的工作以及你是如何到达你编写的查询的。

## 构建仪表板

逐个查看每个表格，创建相应的查询，然后使用这些数据在您的 BI 工具上构建可视化。将所有可视化排列整齐，以匹配您最终绘制的仪表板草图。完成后，您将创建一个设计良好的仪表板。

![Dashboard version of those queries](https://dataschool.com/assets/images/how-to-design-a-dashboard/build_the_metrics/exampleDashboard.jpeg)

然而，尽管我们已经投入了这么多思考和努力，但仍有一些关键步骤需要确保这个良好的设计变得更好。

## 摘要

- 通过将列插入 SQL 语句的相关部分来构建指标。
- 获取数据需要使用 SQL。使用它来直接计算指标，并反映任何潜在的变化。
- 通过评估公司内其他人的查询和/或让数据守门员审查来检查你的查询。

# 分享仪表盘 – 分发策略

_最后修改时间：2020年2月15日_

![Share the dashboard](https://dataschool.com/assets/images/how-to-design-a-dashboard/sharing_the_dashboard_distribution_strategies/distribution.jpeg)

现在你已经建好了仪表盘，可以开始共享它了。在点击“发送”之前，花点时间考虑如何优化其影响：

- 背景
- 媒介
- 调度

## 背景

![Chart label confusion](https://dataschool.com/assets/images/how-to-design-a-dashboard/sharing_the_dashboard_distribution_strategies/context.png)

无论你的受众有多聪明，你都应该设计得让公司里的任何人都能读懂。仪表板跨越部门界限共享，用于演示，并帮助新员工了解业务。在所有这些情况下，查看仪表板的人几乎没有背景信息。为了让每个图表更容易被更广泛的受众理解，你需要包含的基本要素是：

- 描述性图表标题
- 标注坐标轴
- 提供图例
- 添加定义

### 描述性图表标题

图表的标题应该让受众知道展示或比较的是什么。没有标题，他们不清楚自己在看什么，处理图表信息的时间也会更长。

![Chart with no title](https://dataschool.com/assets/images/how-to-design-a-dashboard/sharing_the_dashboard_distribution_strategies/chart1.png)

很明显，这个图表是关于货币成本的，但轴标签并没有指明所测量的成本类型。当然，这些信息应该是标题的作用。

![chart with title](https://dataschool.com/assets/images/how-to-design-a-dashboard/sharing_the_dashboard_distribution_strategies/chart2.png)

添加标题后，这个图表的目的就明确了。我们正在按部门评估随时间推移的运营成本。

### 标签轴

这是图表中不包括的最常见的上下文之一。坐标轴上的标签应包含对定量指标的描述和单位。如果我们看上面同样的图形，但没有坐标轴标签，我们可以看到它如何变得难以解释。

![Chart with no axis labels](https://dataschool.com/assets/images/how-to-design-a-dashboard/sharing_the_dashboard_distribution_strategies/chart3.png)

虽然 X 轴的标签相对容易理解，但 Y 轴的标签有些模糊。标题暗示我们应该看到成本，但成本是如何衡量的？可能是不同的货币、员工数量或工作小时数。

![Chart with axis labels](https://dataschool.com/assets/images/how-to-design-a-dashboard/sharing_the_dashboard_distribution_strategies/chart4.png)

添加 Y 轴标签可以清楚地表明我们正在查看的是以美元计价的成本。虽然偶尔可以省略轴标签，但最佳实践是首先包含它，然后根据观众的反馈将其移除。

### 提供密钥

任何时候使用颜色来划分组别或表示数值范围，都需要一个图例来确定颜色代表什么。没有图例，就无法确定哪个条形属于哪个部门。

![Chart without key](https://dataschool.com/assets/images/how-to-design-a-dashboard/sharing_the_dashboard_distribution_strategies/chart5.png)

而上一节的这个图表版本非常明显，紫色代表工资，绿色代表支持，蓝色代表人力资源，黄色代表 IT。

当使用颜色编码数量范围时，缺少颜色图例也会让人非常困惑。正如我们能在下方的图表中看到的那样，我们可以推断出一些州的用户数量与其他州不同。我们也可以假设较深的色调代表比浅色调更多，但我们不知道具体多多少。

![Map without key](https://dataschool.com/assets/images/how-to-design-a-dashboard/sharing_the_dashboard_distribution_strategies/map1.png)

一旦我们添加一个键，值的范围就变得清晰，地图对决策更有用。

![Map with key](https://dataschool.com/assets/images/how-to-design-a-dashboard/sharing_the_dashboard_distribution_strategies/map2.png)

### 添加定义

虽然有些指标定义得相当一致，例如[净推荐值](https://chartio.com/learn/product-analytics/what-is-net-promoter-score-nps/) ，但有些指标如 MQL（营销合格线索）、DAU（日活跃用户）等，在公司之间的计算方式差异很大。这些差异通常是由于某些群体被排除在指标计算之外。在这种情况下，在仪表板上直接提供注释或使其易于从仪表板访问，对于准确解读信息至关重要。

![Define metrics in dashboard](https://dataschool.com/assets/images/how-to-design-a-dashboard/sharing_the_dashboard_distribution_strategies/newTrials.png)

在指标下方添加简短描述可以阐明所代表的信息及其局限性。对于常用指标，数据守门员将其建模到模式本身也是一种最佳实践，这样可以更轻松地进行查询。关于建模的更多信息，可以查看另一本数据学校书籍：《 [云数据管理](https://dataschool.com/data-governance/) 》。

## 媒介

![Chart distribution medium](https://dataschool.com/assets/images/how-to-design-a-dashboard/sharing_the_dashboard_distribution_strategies/medium.jpeg)

### 邮箱

通过邮件发送仪表板是一种简单直接的工作分享方式。然而，要避免一些常见错误，可以问自己以下几个问题：

- 这个仪表盘可以对外共享吗？（通常不可以）
- 人们需要什么级别的访问权限才能查看仪表盘？（通常他们需要的权限比你想象的要多）
- 我应该多久发送一次数据，以防止人们忽视它？（将发送频率与仪表盘支持决策的频率保持一致）

你应该在包含仪表盘链接的邮件中说明所有相关的政策。你还应该为发送仪表盘设定一个与其目标相适应的发送计划。

### 电视或显示器

仪表板可以经过样式化和格式化，以便在办公室内的电视或其他大型显示器上展示。您在这里可以看到需要滚动的问题，因为这不是一个选项。有时仪表板会呈现在安装在会议室、办公室空间、会议室和午餐/休息室墙上的多台电视上。

![Dashboard on TV](https://dataschool.com/assets/images/photo.jpg)

由于许多不同类型的员工将查看以这种方式呈现的数据，他们对应该如何更改的看法可能会非常多样化。收集你能收集到的所有反馈，然后与负责人合作确定更新的优先级。一旦这些类型的仪表板发布，就要准备好对其进行重大更改。

从技术角度来看，还有一些其他问题需要考虑。

- 你需要了解电视如何连接到网络，以便确定如何首先在电视上显示它。
- 你可能需要一个专用计算机，或者通过 Google Chromecast、Apple TV 或类似技术建立无线连接。
- 你需要了解电视的分辨率，因为这将决定你是否需要调整仪表板设计，以确保其清晰易读。

在正式将仪表板放到电视上之前，请准备好测试和排错这些连接和显示。

### 应用程序的 URL

大多数帮助您构建仪表板的软件也会支持通过 URL 共享。这些软件可能对您的受众来说比较新。在这种情况下，您需要验证您的受众是否拥有登录凭证、接受一些基本培训，并能访问仪表板的 URL，以便他们能够查看仪表板。

许多这些平台提供为每个仪表板设置访问权限的功能。在仪表板上适当设置这些权限可以防止它被其他员工意外删除或编辑。最佳实践是不给人们编辑权限，除非他们提出请求或他们是数据团队成员。

### 纸质副本

偶尔，高管希望收到仪表板的打印版本。虽然这可能会带来一些不便，但请确保以以下方式交付仪表板。

### 及时

不要错过预定送达时间。高管们每天通常有很多会议，这些信息可能对他们做出最佳决策至关重要。

### 安全地

你也许不知道仪表板上的信息有多敏感。在打印仪表板后，将其放入文件夹中，并确保当文件夹关闭时，文件夹内的纸张无法被看到。

### 个人交付

最初，你希望亲自交付仪表盘，以保持我们稍后将要讨论的反馈循环所必需的关系。亲自交付将始终给你提问的机会，即使回答简短，你也能收集到一些关于仪表盘如何满足高管需求的信息。

## 调度

![Schedule your posts](https://dataschool.com/assets/images/how-to-design-a-dashboard/sharing_the_dashboard_distribution_strategies/clock.jpeg)

排程应当模拟决策需要做出的节奏。如果基于仪表盘做出的决策是临时的，那么不要发送关于仪表盘的定期邮件，而是提供链接，让他们需要时随时查看。如果人们每天早上都需要了解情况以便开始做决策，那么在早上8点发送包含仪表盘的每日邮件是合适的。

最后，如果人们不需要查看仪表板来做出决策，除非某个指标发生巨大变化，那么可以设置一个警报。大多数仪表板软件支持在图表上设置一个变化水平，一旦超过这个水平，就会向您选择的电子邮件发送警报。设置警报时要小心。如果您选择一个人为地低或高的标准来触发电子邮件，您可能会收到太多或太少。

在不符合他们决策需求的时间表上发送仪表板，可能会导致人们忽视仪表板，并且不使用数据来支持他们的决策。

## 摘要

- 为仪表板提供足够的背景信息，以便您的受众能够清晰、准确、高效地理解（从而减少疑问）
- 选择与受众期望相符的媒介
- 使用调度来帮助人们做决定，而不是提醒他们仪表板可用。

# 扩展仪表盘

_最后修改时间：2020年2月15日_

![Scaling your dashboards](https://dataschool.com/assets/images/how-to-design-a-dashboard/scaling_dashboards/scaling.png)

当您的仪表盘面向全部受众时，仪表盘的使用方式可能会发生变化。这可能包括他们希望看到的决策支持扩展，或是更多希望使用它来满足特定场景的团队数量。为了适应这些变化，需要考虑一些扩展策略。

## 外部链接

当收到大量关于深入查看某个图表或查看更详细信息反馈时，可以考虑为这些需求设计一个新的仪表盘。然后，您可以在原始仪表盘上提供链接，以便导航到这些更细粒度的仪表盘。

![Dashboard with Link](https://dataschool.com/assets/images/how-to-design-a-dashboard/scaling_dashboards/dashboard.png)

这里有一个示例，在底部有蓝色文字链接到另一个仪表板。并非所有 BI 工具都提供此功能，但它对于帮助您的受众导航数据至关重要。否则，他们可能需要记住特定仪表板的名称，或者浏览一个很长的列表来找到他们想要的内容。

链接外部也有技术优势。链接外部可以限制每个仪表板的查询数量，使仪表板加载快速。

## 交互性

如果仪表板的反馈是要支持更多组的特定场景，您需要加入交互功能。这意味着需要为变量设置下拉菜单，以便使用仪表板相同的框架评估多种情况。这通常用于能够更改仪表板中数据的日期范围。

![Dashboard with interactivity](https://dataschool.com/assets/images/how-to-design-a-dashboard/scaling_dashboards/interactive.png)

这里有一个示例，在顶部有一个交互式元素，用于更改我们正在查看的日期范围。

如果你在仪表板中添加了多个交互式元素，最佳实践是关闭任何自动刷新，这样你就不会为每个应用的过滤器运行所有查询。相反，应将刷新限制在确认交互式设置之后，这样查询只会运行一次。解决此潜在性能问题的另一种方法是缓存数据，这样过滤器只会访问该数据而不是查询你的数据库。

## 优化

无论它如何发展，如果仪表板的用量很高，对数据库的需求就会增加。你需要确保仪表板仍然可以快速加载，并且减轻数据库的工作量。这可以通过以下方式实现：

- 优化查询
- 设置计划
- 删除未使用的查询

### 优化查询

如果一个查询完成时间超过 30 秒，很可能可以做一些优化。如果聚合操作耗时过长，请前往数据守门员讨论创建预聚合表，以便从中进行查询。这种[数据建模](https://dataschool.com/sql-optimization/start-modeling-data/)可以显著提高查询性能。

此外，任何数据操作（截断、类型转换等）都应推迟到聚合之后。这意味着您需要先聚合数据，然后再将转换应用于聚合后的数据。

在这里我们可以看到一个示例，展示了映射前后和聚合：

```
SELECT SUM(num), category
FROM table
GROUP BY CAST(category AS VARCHAR)
```

```
SELECT SUM(num), CAST(category AS VARCHAR)
FROM table
GROUP BY category
```

这比在聚合之前对每条记录进行更改要高效得多。您可以在这里查看更多查询优化策略： [优化您的 SQL 查询](https://dataschool.com/sql-optimization/optimize-your-sql-query/)

### 设置计划

大多数商业仪表板并未使用实时数据。数据会定期批量传输到数据仓库，你从中查询数据。这个时间表由数据守门员设定。你应该询问他们你所用数据源的时间表，并与受众沟通数据实际的“实时性”。你还可以通过设置默认日期范围来帮助人们正确解读数据，使其符合该时间表。通常人们会将日期范围设置为前一天，以确保看到的数据准确无误。

你还可以与数据守门员讨论人们基于数据做决策的速度，以便他们调整数据加载到数据仓库的时间表。

### 移除未使用的仪表板

定期归档90天以上未查看的仪表板，这些仪表板即使在季度规划层面也可能无法提供价值。所有仪表板都在查询数据库，查询的仪表板越多，所有人的使用速度就越慢。归档前，应通过邮件通知人们哪些仪表板将被归档，以便他们做出回应并标记不应归档的仪表板。

## 文档

在受众之外，你的仪表板还有另一个消费者，那就是试图构建他们自己的仪表板的未来分析师。为了帮助未来的分析师，请记录你的查询，以便他们能够轻松理解，并快速识别任何特殊之处。这可以通过在 SQL 中添加注释或在仪表板中添加注释来完成。

为未来分析师清除的另一个障碍是确保其他人可以访问你的查询和你使用的数据源，以便他们可以将其用于其他仪表板。这可能需要与数据管理员交谈，以更改不同数据源的默认权限。总的来说，你希望让下一个人更容易导航数据并发现见解。

## 摘要

- 链接到支持更多决策
- 增加交互性以适应更多需要做出相同决策的个人/团队
- 设置刷新频率以模拟决策速度，避免不必要的频繁刷新
- 记录你的工作，以便你和他人能从未来的查询决策中学习

# 确保您的仪表盘始终在进步

_最后修改时间：2020年2月15日_

![Iterate on your dashboard](https://dataschool.com/assets/images/how-to-design-a-dashboard/making_sure_your_dashboard_always_gets_better/gettingBetter.jpeg)

持续改进不仅仅是一个口号或流行词汇，它是实用仪表盘的关键。您不应为了迭代而迭代。迭代应基于仪表盘使用者和仪表盘负责人的反馈。

## 发布后获取反馈

在发布仪表盘后从其受众那里收集反馈将提供最有用的信息。受众会看到仪表盘是否真正帮助他们完成工作。他们可以告诉您仪表盘上哪些部分最有用和最无用。他们还会指出希望拥有哪些其他信息。确保您有收集、处理并最终基于反馈进行迭代的方法。

### 反馈渠道

![Feedback Source](https://dataschool.com/assets/images/feedback%20google%20forms.png)

你需要开启某种形式的便捷书面反馈渠道，为用户提供评论、提供建议和提问的空间。提供你的电子邮件或 Slack 用户名可以快速沟通，但可能会让人应接不暇。像 Google 表单这样的工具可以将反馈收集到表格中，你可以根据需要查看。为了清晰跟踪，你可以选择像 JIRA 这样的工具，并在人们有反馈时提交工单。

随着提供反馈所需付出的努力增加，你收到的反馈就会越来越少。而随着你将反馈整合为可执行更改所需付出的努力增加，你迭代仪表盘的可能性就会降低。因此，需要在让提供反馈变得容易与让你处理反馈变得容易之间取得平衡。这将确保受众的声音被听到，并用于使仪表盘越来越好。

### 负面反馈

![Negative feedback and bugs](https://dataschool.com/assets/images/negative%20feedback.png)

当事情出错时，人们最愿意提供反馈。这种反馈很有力，但不总是建设性的。关注他们不满的根源是有帮助的。这是设计选择的问题，还是数据的问题？对他们来说是否无用，或者他们只是心情不好？考虑他们的反馈，并将其与仪表板的目的进行权衡。为了鼓励更高质量的反馈，你能做的最好的事情是告诉给你反馈的人，你打算如何处理他们的反馈。

常见的负面反馈类型之一是仪表盘上的某些功能无法正常工作。这与其说是设计批评，不如说是报告一个错误。这是一种不同类型的反馈，应该被标记以引起你的注意。为这类问题创建命名标准，例如在反馈的开头放置[BUG]或[BROKEN]，以便你可以优先处理修复。在某些工具中，你也可以在提交反馈时将其标记为错误来实现这一点。

### 受众到社区

![](https://dataschool.com/assets/images/feedback%20slack.png)

将受众从单向反馈渠道转变为社区，可以发掘更有价值的反馈。使用像 Slack 这样的社区建设工具，了解观众如何与其他观众讨论你的仪表板。这些讨论通常会提供更坦诚的反馈。

你也可以通过这些渠道征集反馈。一旦有人参与，其他遇到相同问题的人也倾向于添加反馈。如果很多人都在要求相同的事情，这很可能是一些需要重视的问题。

## 迭代时间表

![Do maintenance on dashboards](https://dataschool.com/assets/images/how-to-design-a-dashboard/making_sure_your_dashboard_always_gets_better/schedule.png)

设定一个迭代计划，定期回顾你收到的反馈。每周或每月这样的固定间隔效果最佳。比起临时处理，按计划来审查反馈（除虫/故障反馈项外）会更好。这能让你有机会优先处理工作，并查看反馈中是否存在某种主题。

创建一个包含以下项目的清单，以彻底审查仪表板。

### 仪表板的采用和使用情况指标

- 仪表板总浏览量
- 仪表板重复浏览量
- 仪表板唯一浏览者

这也可以转换成一个仪表板，帮助你决定何时迭代原始仪表板。*

### 准确度检查

- 查询是否产生预期结果？
- 此仪表板的底层数据源或数据模型是否已更改？

这很可能是你从仪表盘受众那里收到的最大反馈来源。

### 数据维护

- 检查仪表板上的负载情况。
- 如有必要，优化 SQL 查询。
- 打开并运行仪表板，查看是否出现任何错误。

由于性能和系统原因，你的数据源可能会不时进行重新架构。确保列、表和数据库仍然与你编写初始查询时提供的名称一致。

大多数仪表板被创建后只使用很短的时间。为了确保仪表板持续提供价值，你需要致力于接收反馈、审查反馈，并对仪表板进行迭代。

## 摘要

- 来自终端用户的反馈有助于人们使仪表板更有用，并快速发现错误。
- 安排时间审查反馈，以确定趋势并确定工作优先级。
- 定期检查仪表板的健康状况，以查看人们是否在使用它，数据是否仍然准确，以及是否有优化的机会。

# 结论

在本书中，我们涵盖了仪表板设计的最佳实践，并概述了为任何组织创建有用仪表板的过程。

1. 定义利益相关者、指标和决策
2. 在纸上制作原型并获取反馈
3. 通过寻找合适的数据和使用合适的图表来构建仪表板
4. 将仪表板部署给受众并迭代

现在你已经具备了设计和构建仪表板的能力，以帮助你的组织做出更明智的决策。我们希望你喜欢这本书，并期待在 Slack 中听到你的想法。

![Dashboard design process](https://dataschool.com/assets/images/how-to-design-a-dashboard/Conclusion/conclusionImages.png)