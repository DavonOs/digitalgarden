---
{"dg-publish":true,"dg-permalink":"design/design-app-experiences-with-charts","permalink":"/design/design-app-experiences-with-charts/","title":"如何用图表构建出色的应用体验","metatags":{"description":"学习如何通过图表增强您的应用，以更清晰和吸引人的方式传达数据。我们将向您展示何时使用图表，如何使用它们以及它们如何在图表设计系统中协同工作。","og:site_name":"DavonOs","og:title":"如何使用图表构建出色的应用体验","og:type":"article","og:url":"https://zuji.eu.org/design/design-app-experiences-with-charts","og:image":null,"og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"created":"2025-04-18T10:29:55.328+08:00","updated":"2025-05-09T09:53:13.247+08:00"}
---


为了展示如何通过图表增强应用程序，让我们看看一个为售卖华夫饼的食品车车主制作的 APP。该 APP 目前有一个输入订单的标签页，还有一个查看最近交易的标签页。这对于跟踪销售情况来说没问题，但这个信息可以更有用。

今年，我们推出了 Swift Charts。使用这个框架，为 Apple 设备制作图表从未如此简单。在接下来的部分中，我将分享我们在苹果公司设计图表体验时遵循的原则。我们将应用这些概念为食品车 APP 创建一个更信息丰富的线框图。

为了构建一个使用图表的出色体验，我们应该考虑三件事：何时使用图表、如何使用它们以及它们在图表设计系统中的相互关系。让我们首先讨论在应用程序中何时使用图表。以下是一些图表可以提升展示信息的一些常见情况：在展示历史或预测值时，图表可以生动地展示数据的变化。

通过可视化整体的一部分，我们可以使用图表来展示某事物完成、朝着目标进展或耗尽的状态。

当比较项目或类别时，我们可以轻松地用图表评估它们的值。

在决定这些方法是否适合您的应用之前，首先考虑体验需求。图表如何支持您应用的核心目标？当正确使用时，图表可以提供焦点。作为应用开发者，您可以选择可视化许多事物，但只有最重要的信息应该成为图表。

对于使用应用的人来说，图表是一个强烈的信号。它们将注意力引向您希望他们理解的信息。食品车应用的目标是改善使用该应用的企业运营。如果我们能使用图表将交易列表转化为可操作的信息，食品车车主将欢迎这种改进。以下是我们知道将对食品车车主有用的关键信息：查看最近的销售情况、了解哪些商品受欢迎以及知道每天的最佳访问地点。

在考虑您的应用时，请记住，图表应将注意力引向并聚焦于您体验中最重要的信息。现在我们已经确定了我们想要传达的内容，让我们看看如何使用图表来实现这一点。

为了展示最近的销售额，一个显示随时间变化的图表将很合适。

使用条形图展示过去 30 天的销售总额是一种方法。我们很快会添加轴标签，但首先，它需要一个描述来告诉人们这个图表代表什么。

类似于“过去 30 天的销售”这样的标题为图表的元素命名，并没有传达更多信息。我们如何总结展示的信息？图表应该伴随着描述图表内容的文本。

If read in isolation, it should be informative.
如果单独阅读，它应该是有信息的。

Adding the total number of pancakes sold transforms the title into a self-contained description. Now someone can quickly gather key information from the text, while the chart provides supporting details.
添加售出的总煎饼数量，将标题转变为一个自包含的描述。现在，人们可以快速从文本中获取关键信息，而图表则提供支持性细节。

当图表不直观时，使用完整的句子进行描述可以使理解更简单。

例如：“过去 30 天的销售额总计为 1,234 个煎饼。”另一种构建图表的方式是解读数据。例如：“过去 30 天的销售额上涨了 12%，总计 1,234 个煎饼。”这有助于人们理解最近的销售额水平是高是低，或者是在增加还是减少。这种技巧可以使描述更加有意义，尤其是在数据不熟悉的情况下。

每种方法都是描述图表的好方法，但这个概述只是解释我们销售数据的一种方式。我们还能做些什么来阐明这些交易呢？尝试从其他角度整合细节。总结数据很重要，但当我们找到提升类别或突出个别记录的方法时，图表就变得多维了。以下是一些可以考虑的额外视角：在宏观层面，我们寻找描述整个数据集的方法，如总数或平均值。在中观层面，我们查看数据子集。这些可能是基于时间的，比如比较工作日和周末，或调查与一天中时间相关的变化。其他方法可能按煎饼风格或销售的城市对销售进行分类。

在微观层面，我们关注单个数据点。最后一次交易或最大销售额是您可能在图表中强调的重要的小规模细节。

The more carefully you observe a data set, the more detail will emerge. Some of the perspectives we’ve identified could be useful to food truck owners planning their inventory or sales locations. It would be useful to augment the recent sales chart with some of these details. To do this, we can use a set of tappable rows under the chart. Each row provides a summary statistic, and when tapped, the chart is updated to match. We can show the daily average value or the difference between weekday and weekend sales or the best sales day. These overlays can be extremely useful, but this amount of information requires a large surface to work effectively.
观察数据集越仔细，出现的细节就越多。我们已识别的一些视角可能对计划库存或销售地点的食品车车主有用。将这些细节添加到最近的销售图表中会有所帮助。为此，我们可以在图表下方使用一组可点击的行。每一行提供汇总统计信息，点击后图表会更新以匹配。我们可以显示每日平均值或工作日与周末销售之间的差异，或最佳销售日。这些叠加可以非常有用，但这么多的信息需要较大的表面才能有效工作。

随着图表功能的增加，其大小也会增加。

小型图表往往趋于静态。例如，手表的表盘、股票中重复的缩略图图表以及健康中的趋势盘。

静态图表很少单独存在。它们通常为另一个视图中的更大图表提供预览。由于它们通常很小，静态图表不需要网格线、标签或交互性，因为它们会让人产生更多细节只是轻轻一触即可获得的预期。交互式图表通常更大，包含更多细节，如股票和健康中的图表。

交互式图表通常与视图宽度相同，但不是满高度。您应包括坐标轴线和标签，以便可以估计值。

Interactivity is recommended at this size for accessing precise values in the chart and the ability to change the time range or time scope will aid exploration.
交互性在此尺寸下推荐，以便访问图表中的精确值，并且能够更改时间范围或时间范围将有助于探索。

The largest and most interactive charts allow for deep investigation of data and require the most vertical space. As charts become more powerful, it’s important to introduce additional functionality gradually. You should progressively reveal chart complexity so that someone can choose the level of information that matches their interest.
最大的最互动的图表允许深入调查数据，需要最多的垂直空间。随着图表变得更强大，逐步引入附加功能很重要。你应该逐步揭示图表的复杂性，以便人们可以选择与他们兴趣相符的信息级别。

Use a small static chart higher in the navigation hierarchy to offer a path to expanded versions of the chart.
使用导航层次结构中较高位置的静态小图表，提供查看图表扩展版本的路径。

When you create a link between two versions of the same chart, that progression should maintain continuity by preserving values, context and state.
当你在两个相同图表的版本之间创建链接时，这种进展应该保持连续性，通过保留值、上下文和状态。

Keep in mind that when someone expresses interest in a chart, they want to see more of what they have already seen. This means that a chart should retain its shape and any numbers apparent in an earlier view should be preserved.
请记住，当有人对图表表示兴趣时，他们想看到他们已经看到的内容更多。这意味着图表应该保留其形状，并且在早期视图中出现的任何数字都应该被保留。

You can add information, but showing something different can be frustrating or disorienting.
您可以添加信息，但显示不同的内容可能会让人感到沮丧或迷失方向。

While we’re considering the functionality of different sized charts, let’s revisit our food truck app to determine where our planned charts will go. We currently have two tabs, one dedicated to placing orders, and a second that shows the sales history. These records are what we will be visualizing, so it makes sense to adapt this view to include our charts.
在考虑不同尺寸图表的功能时，让我们重新审视我们的食品卡车应用程序，以确定我们的计划图表将放置在哪里。我们目前有两个标签页，一个用于下订单，另一个显示销售历史。这些记录就是我们将要可视化的内容，因此将此视图调整为包含我们的图表是有意义的。

Let’s clear the tab by moving the sales to a separate view behind a "View all sales" navigational element. We now have a prominent canvas for our charts. As a result, it’s appropriate to use a static chart that lets someone scan the data and decide whether they want to see more.
让我们通过将销售移动到一个名为“查看所有销售”的导航元素背后的单独视图中来清除标签。现在，我们有一个突出的画布来展示我们的图表。因此，使用一个允许某人扫描数据并决定是否想查看更多内容的静态图表是合适的。

Here’s the static chart showing recent sales. Tapping the platter leads to an expanded interactive chart. We now have a complete recent sales experience. This interactive chart will support detailed analysis with 30-day and 1-year views, touch states, and tappable summary statistics.
这里显示了最近的销售额静态图表。点击托盘将显示一个扩展的交互式图表。我们现在拥有完整的最近销售额体验。这个交互式图表将支持详细分析，包括 30 天和 1 年视图、触摸状态和可点击的摘要统计信息。

As you’re working on your app, remember that charts need descriptions to inform the contents and provide a key takeaway, the details in your data can add richness to your charts, and that you should progressively reveal chart complexity within your app.
在您开发应用的过程中，请记住，图表需要描述来告知内容并提供关键要点，您数据中的细节可以为图表增添丰富性，并且您应该在应用中逐步展示图表的复杂性。

Now let’s look at chart design systems. When your app includes more than one chart, you’ve created a chart design system. Here are some things to remember when planning multiple charts: Use familiar forms. Start with common chart styles to aid comprehension. If someone has already used a similar chart, they will be more likely to understand yours. Bar charts and line charts are forms that many people encounter and use daily, while a scatter plot is less common and may require extra guidance to ensure that it is interpreted correctly.
现在让我们看看图表设计系统。当您的应用包含多个图表时，您就创建了一个图表设计系统。在规划多个图表时，请记住以下几点：使用熟悉的形式。从常见的图表样式开始，以帮助理解。如果某人已经使用过类似的图表，他们更有可能理解您的图表。柱状图和折线图是许多人每天都会遇到并使用的形式，而散点图则不太常见，可能需要额外的指导以确保正确解读。

If you want to do something unique, it should be introduced clearly, as demonstrated here in the onboarding flow for Activity. After the activity rings are introduced, they are split apart to show the move, exercise, and stand components.
如果您想做一些独特的事情，应该清楚地介绍，就像在这里为“活动”的入门流程所展示的那样。在介绍了活动铃声后，它们被分开来展示移动、锻炼和站立组件。

Ideally, a new form is central to your app, not supplementary. The prominence you give a novel chart will encourage people to explore and understand it.
理想情况下，新的形式是您应用的核心，而不是补充。您给予新颖图表的突出地位将鼓励人们探索和理解它。

When creating supporting charts, familiar forms are more important, as they will not be given as much prominence.
在创建辅助图表时，熟悉的形式更为重要，因为它们不会得到太多的突出。

Differences matter, and the variations between charts are a signal that something has changed.
差异很重要，图表之间的变化是有所改变的一个信号。

To demonstrate this, let’s start with two copies of our recent sales chart. I’ll slowly update the chart on the right to communicate different information, and we'll show how the design evolves to signal these distinctions. First, I’ll change the time scope of the chart on the right. Rather than showing recent sales, it now shows sales for the last 12 months. I have changed the description and updated the chart to show 12 months of data. Minimal changes are required for this modification. If I want to change the type of data being displayed in the right-hand chart, it may not be sufficient to only change the description.
为了展示这一点，让我们从两张我们最近的销售图表开始。我将缓慢更新右侧的图表以传达不同的信息，我们将展示设计如何演变以传达这些区别。首先，我将更改右侧图表的时间范围。而不是显示最近的销售，现在它显示过去 12 个月的销售。我已经更改了描述并更新了图表以显示 12 个月的数据。这个修改只需要进行最小更改。如果我想更改右侧图表中显示的数据类型，仅更改描述可能是不够的。

Noticing this change in text could be easily missed, so an additional change is necessary. Giving each of these charts a distinct color helps. Now it is easier to notice that these charts are unique. Creating this difference makes it more likely that someone will now read the description.
注意到这种文本变化很容易被忽略，因此需要额外的更改。给这些图表分配不同的颜色有助于。现在更容易注意到这些图表是独特的。创造这种差异使得有人现在会阅读描述。

Finally, I want to update the chart on the right to show the range of daily sales for each of past 12 months. This requires both a change to the description and the way that the data is represented.
最后，我想更新右侧图表，以显示过去 12 个月每天的销售范围。这需要更改描述以及数据表示方式。

To underscore the significance of this change, modifying the styling of the bars is appropriate.
强调这一变化的重大意义，修改条形图的样式是合适的。

The chart on the right now conveys a different subject, different time range, and different metrics. The design is purposefully distinct to ensure that these differences will be noticed. We can apply these principles to the two other charts we need for our food truck app.
右侧的图表现在传达了不同的主题、不同的时间范围和不同的指标。设计上有意区分，以确保这些差异会被注意到。我们可以将这些原则应用到我们食品车应用需要的另外两个图表上。

To compliment the recent sales, I’d like to add another chart that shows the most popular style of pancake.
为了补充最近的销售额，我想再添加一个图表，展示最受欢迎的煎饼风格。

One way of showing the most popular style is to compare the relative sales level for each pancake.
想要展示最受欢迎的风格，可以通过比较每种煎饼的相对销量水平来实现。

Since we are interested in the last 30 days as a whole, we only need one bar to compare the popularity of styles.
由于我们关注的是过去 30 天的整体情况，因此只需要一个条形图来比较风格的流行度。

If I separate the bars, I can compare their sizes more clearly, but this starts to look like a time series chart again.
如果我把柱状图分开，我可以更清楚地比较它们的大小，但这又开始看起来像时间序列图了。

By making the bars horizontal, I can accentuate the difference between this chart and the recent sales chart.
通过将条形图设置为水平，我可以突出显示此图表与最近的销售图表之间的差异。

The horizontal orientation also lets me make the bars longer without needing to make the platter on the sales tab taller.
水平方向也让我可以在不需要将销售标签的盘更高的情况下，使条形更长。

In this preview platter, I’ve omitted labels to focus only on the top style.
在这个预览托盘中，我省略了标签，只关注顶部样式。

In the detail view, each bar is labeled, and the relative values are visible.
在详细视图中，每个条形图都有标签，相对值也可见。

For our final chart, we would like to show sales in the two cities where the truck operates for each day of the week.
对于我们的最终图表，我们希望展示卡车运营的两个城市每天的销售额。

For this, we will need to do something a bit specialized. The context for this chart is sales by day of the week. In this case, we want to look at each day independently. Here are the average daily sales for each day of the week over the past 30 days.
为了这个，我们需要做一些专门的事情。这个图表的上下文是按周的销售。在这种情况下，我们想独立查看每一天。以下是过去 30 天内每周每天的平均日销售额。

由于食品车同时在库比蒂诺和旧金山两地运营，我们需要将这些柱状图分割以分别表示每个地点。最后，我们将这些柱状图转换为折线图，以突出每日变化。我已将此图表添加到销售标签页，并附上描述文字来总结数据。在这个案例中，过去30天内最佳销售日是旧金山的周日。随后的详情页是我们将在应用中添加的最后一个图表，它提供了额外的交互功能和细节，包括两条折线的图例说明。

我们已经概述了计划添加到煎饼食品车应用程序中的图表集。使用图表来展示最近的销售、热门商品以及最佳日期和地点将显著提高该应用程序的实用性。

在您开发应用的过程中，请记住使用熟悉的图表形式来帮助理解，并有意在图表之间创造差异以改善其解读。在本演讲中，我们讨论了何时使用图表、如何使用它们以及它们在图表设计系统中的相互关系。应用这些原则将帮助您以更清晰和吸引人的方式在应用中传达数据。要继续学习图表设计，您可以观看“设计有效的图表”，或观看“你好，Swift Charts”以了解 Swift 图表的介绍。

[如何用图表构建出色的应用体验](https://developer.apple.com/videos/play/wwdc2022/110342/)