---
{"dg-publish":true,"dg-permalink":"books/36924049/flexbox","permalink":"/books/36924049/flexbox/","title":"Flexbox 弹性盒布局","metatags":{"description":"","og:site_name":"DavonOs","og:title":"第四章 Flexbox 弹性盒布局","og:type":"article","og:url":"https://zuji.eu.org/books/36924049/flexbox","og:image":"https://images.manning.com/360/480/resize/book/f/235f14b-90f6-43b8-8abd-62bc945d1624/Grant-2ed-HI.png","og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"tags":["program/css"],"dgShowInlineTitle":true}
---

>[!summary]+ 本章概要
>- 使用 Flexbox 布局页面元素
>- 弹性容器与弹性元素
>- 主轴与副轴
>- Flexbox 里的元素大小
>- Flexbox 里的元素对齐

第三章介绍了常规文档流（normal document flow），它是浏览器默认的页面元素布局方式。接下来的几章内容，将重点考察其他现成的布局形式，尤其是弹性盒布局、网格布局以及定位。有了这些工具，布局时就有了更多的选择，并能用可以想象到的任何方式来构建页面。

Flexbox，全称为 弹性盒子布局（Flexible Box Layout），是一种布局页面元素的新方法，主要用于单行或单列的元素排列。弹性盒布局也能轻松解决困扰我们许久的垂直居中和等高列问题。

要说 Flexbox 有什么缺点的话，应该就是那多到令人望而生畏的配置项了。它为 CSS 引入了十几种新属性，包括一些简写属性。若要一口气拿下这些属性，难度可想而知。我刚开始学 Flexbox 时感觉就像拿着高压水枪喝水，很难记住所有的新属性。这次我将从最核心的属性入手，循序渐进拿下 Flexbox。

我会先介绍 Flexbox 布局的一些的基本原理，然后看几个实战案例。Flexbox 不必等到学完所有新属性才能用，大多数繁重的工作往往只需要搞定其中的某几个属性就可以了。剩下的属性则用于进一步控制元素的对齐和间距，它们放在本章末尾进行介绍。最后再提供一份 Flexbox 参考指南，以备不时之需。

## 4.1 Flexbox 的原理

一切得从我们熟悉的 display 属性开始。给元素设置样式 `display: flex`，该元素就成为了一个 **弹性容器**（flex container），其直接子元素也相应地变为 **弹性子元素**（flex items）。默认情况下，弹性子元素会在同一行从左至右并排排列。宽度方面，弹性容器类似块级元素，会填满所有可用宽度；而弹性子元素则未必。这些弹性子元素的高度相等，均由其内容决定。

提示
弹性容器还可以用 `display: inline-flex` 来创建，但这样的容器在行为上更像一个行内块级元素（inline-block element），而非块级（block）元素。它会和其他行内元素一起流动，但宽度不会自动扩展到 100%。而内部的弹性子元素，行为上则通常跟用 `display: flex` 创建的一致。实际开发中很少用到 `display: inline-flex`。

之前介绍的 display 的取值，如 inline、inline-block 等，只会影响设置了该样式的元素，而 Flexbox 则不同。一个弹性容器可以控制其内部元素的布局。典型的弹性容器及其子元素布局情况如图 4.1 所示。

![Figure 4.1 A flexbox container and its elements](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/ceb213208ce68425390605a346d1b4fd10056e1e22e265f585bbc8959fca2d5f.jpg)  
图 4.1 弹性容器及其子元素示意图

各弹性子元素沿着 主轴（main axis） 从左边的 主轴起点（main start） 顺次排列到右边的 主轴终点（main end）。同理，垂直于主轴的叫 副轴（cross axis），方向则是从顶部的 副轴起点（cross start） 到底部的 副轴终点（cross end）。

主轴和副轴的概念有点类似行内（inline）方向和块（block）方向。学到后面您就会发现，Flexbox 的很多属性都是以“起点（start）”和“终点（end）”这样的叫法成对出现的。这些轴的方向是可以改变的，以满足元素向其他方向流动的需要。本章稍后会进行演示。

这些概念（弹性容器、弹性子元素以及主轴、副轴）涉及 Flexbox 布局的大量知识点。在掌握这些新属性之前，仅用一句 display: flex 就已经完成了大量准备工作。为了验证 Flexbox 的威力，接下来将构建如图 4.2 所示的页面布局。

![Figure 4.2 Finished page with a flexbox layout](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/facb435f93790135e998422bf8f19d89f22606311728347202561fe8dc2cca7b.jpg)  

该页面旨在演示 Flexbox 的几种方法，将分别在页面顶部的导航菜单、三个白色区域、以及右下角的 $20.00 字样中应用 Flexbox 布局。

按照代码清单 4.1 给出的内容，新建一个页面，关联新的样式表，并更新 HTML 标记：

代码清单 4.1 页面 HTML 标记

```html
<!doctype html>
<html lang="en-US">
<head>
  <title>Flexbox example page</title>
  <link href="styles.css" rel="stylesheet"
    type="text/css" />
</head>
<body>
  <div class="container">
    <header>
      <h1>Ink</h1>
    </header>
    <nav>
      <!-- 导航菜单 -->
      <ul class="site-nav">
        <li><a href="/features">Features</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/support">Support</a></li>
        <li class="nav-right">
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
 
    <main class="flex">
      <!-- 大主体板块 -->
      <div class="column-main tile">
        <h1>Team collaboration done right</h1>
        <p>Thousands of teams from all over the
          world turn to <b>Ink</b> to communicate
          and get things done.</p>
      </div>
 
      <!-- 侧边栏包含两个上下堆叠的子版块 -->
      <div class="column-sidebar">
        <div class="tile">
          <form class="login-form">
            <h3>Login</h3>
            <p>
              <label for="username">Username</label>
              <input id="username" type="text"
                name="username"/>
            </p>
            <p>
              <label for="password">Password</label>
              <input id="password" type="password"
                name="password"/>
            </p>
            <button type="submit">Login</button>
          </form>
        </div>
        <div class="tile centered stack">
          <small>Starting at</small>
          <div class="cost">
            <span class="cost-currency">$</span>
            <span class="cost-dollars">20</span>
            <span class="cost-cents">.00</span>
          </div>
          <a class="cta-button" href="/pricing">
            Sign up
          </a>
        </div>
      </div>
    </main>
  </div>
</body>
</html>
```

这段 HTML 关联了一个文件名为 styles.css 的样式表，需要在本地同步创建，然后将代码清单 4.2 的样式更新进去。经过上一章的学习，里面的大部分样式应该不会陌生了。

代码清单 4.2 页面基本样式
```css
*,
::before,
::after { 
  /* 全局 box-sizing 设置 */
  box-sizing: border-box;
}

body {
  /* 给网页设置绿色背景及 sans-serif 无衬线字体 */
  margin: unset;
  background-color: #709b90;
  font-family: Helvetica, Arial, sans-serif;
}

.stack > * + * {
  /* 用来间隔元素的 stack 样式类 */
  margin-block-start: 1.5em;
}

/* 用于居中页面内容的双容器设置 */
.container {
  max-inline-size: 1080px;
  margin-inline: auto;
}
```

这样页面就初具雏形了，接下来应用 Flexbox 布局。先从顶部的导航菜单入手。

### 4.1.1 构建一个基础的 Flexbox 菜单
本例要实现的导航菜单效果如图 4.3 所示。其中大部分菜单项为靠左对齐，只有一个菜单项靠右对齐。

![Figure 4.3 Navigation menu with items laid out using flexbox](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/3a16e1249a90f07a659bee139085a1458e1ac55c5a15cd05641c62b282690dfe.jpg)  
图 4.3 导航菜单中的菜单项用 Flexbox 处理后的效果图

要实现这样的菜单，需要考虑清楚让哪个元素做弹性容器。选定容器后，要时刻谨记其子元素将成为弹性子元素。本例中的弹性容器应该是那个无序列表（`<ul>`）。它的子元素，即列表项（`<li>`）就是弹性子元素，如以下代码所示：

```html
<ul class="site-nav">
  <li><a href="/features">Features</a></li>
  <li><a href="/pricing">Pricing</a></li>
  <li><a href="/support">Support</a></li>
  <li class="nav-right"><a href="/about">About</a></li>
</ul>
```

接下来分步骤实现导航菜单效果。首先给列表元素设置样式 display: flex；然后再覆盖掉浏览器默认的列表样式，并设置字体颜色。最终效果如图 4.4 所示。

![Figure 4.4 Menu with flexbox and colors applied](https://i-blog.csdnimg.cn/direct/3fcb72bdf2a54ba1a457c55da70bda67.png)
图 4.4 设置了字体颜色和 Flexbox 属性的导航菜单效果

在页面 HTML 标记中，元素 `<ul>` 上的 site-nav 类，可以用作样式选择器。按以下代码更新本地样式表。

代码清单 4.3 将菜单设为 Flexbox 并添加字体颜色

```css
.site-nav {
  display: flex;  /* 令 site-nav 为弹性容器，则其子元素成为弹性子元素 */
  padding: unset;  /* 移除浏览器默认的左内边距 */
  list-style-type: none;  /* 移除浏览器默认的列表项目符号 */
  background-color: #5f4b44;
}
 
.site-nav > li > a {
  background-color: #cc6b5a;
  color: white;
  text-decoration: none;  /* 删除浏览器默认的链接下划线样式 */
}
```

注意，这里需要处理三个层级的元素：site-nav 列表（弹性容器）、列表项（弹性子元素）以及内部的锚点标记（链接）。选择器用的是直接后代组合器（>），确保选中其直接子元素。严格来讲，这样写不是很有必要，况且后续也不大可能在导航菜单中加入嵌套的列表，但保险起见，限制一下也无伤大雅。想了解更多组合选择器的写法，可以参阅 附录 A。

### 4.1.2 添加内边距和元素间距
这时的菜单看着还有点“营养不良”，得来点内边距让它更“饱满”些，而且加内边距的时候弹性容器和菜单链接上都要加。实现后的效果如图 4.5 所示。

![Figure 4.5 Menu with padding and link styles added](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/95c16f983b33b1665ae63e5a30229c59bb480ef4292301a067d4f7bf528b6fd8.jpg)  
图 4.5 加上内边距及链接样式后的菜单效果

要是还不太熟悉这类菜单的构建要领（甭管是用 Flexbox 还是其他布局方法），请务必重视这一实现细节。本例应该把菜单项的内边距设置到列表项 内部 的 `<a>` 元素上，而非列表项 `<li>` 元素本身。因为当用户点击某个菜单链接时，可供点击的整个区域无论是从外观还是行为上看，都应当符合用户对点击一个链接元素的预期。鉴于链接行为本身来自 `<a>` 元素，要是把 `<li>` 元素仅仅做成一个美观大气的按钮，而给点击行为只预留很小一块目标区域（`<a>`）的话，这样的设计显然不符合用户预期。

按照以下内容更新本地样式表，给菜单填充内边距。

代码清单 4.4 为菜单及其链接添加内边距样式

```css
.site-nav {
  display: flex;
  padding: 0.5rem;  /* 在菜单容器上、链接外部添加内边距 */
  list-style-type: none;
  background-color: #5f4b44;
}

.site-nav > li > a {
  display: block;  /* 令链接为块级元素，以撑开父元素的高度 */
  padding: 0.5em 1em;  /* 在链接元素上设置内边距 */
  background-color: #cc6b5a;
  color: white;
  text-decoration: none;
}
```

注意，此时的链接被设置成了块级元素。倘若仍保持行内元素不变，则它们的父元素高度将由其行高（line height）决定，而非内边距及内容本身。这显然不符合预期。

再来看看菜单项的间隔该怎么设置。借助外边距 margin 固然可以实现，但 Flexbox 为元素间距量身定制了一个叫 gap 的特殊属性，只要一句 gap: 1rem 就能在每个弹性子元素之间预留出 1rem 的空间。

此外，Flexbox 还可以用 margin: auto 来填充弹性子元素间的所有可用空间。利用这个特性就能把最后一个菜单项推到容器最右边。至此，菜单样式就都搞定了（如图 4.6 所示）。

![Figure 4.6 Gap and margins apply spacing between flex items.](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/12b49137c0c1303c403a99f9184df19cd57a58e6e449133a9d613b9dac279284.jpg)  
图 4.6 间距 gap 和外边距 margin 让各弹性子元素间隔开来

上图中的具体样式详见代码清单 4.5。该样式设置了元素间隙（gap），并将间隙的取值存入一个自定义属性中，以便复用；此外，还给最后一个按钮指定了一个值为 auto 的左侧外边距，从而实现了按钮的右对齐。按照以下代码清单更新本地样式表。

代码清单 4.5 利用外边距给弹性子元素添加间距

```css
:root {
  --gap-size: 1.5rem;
}

.site-nav {
  display: flex;
  gap: var(--gap-size);  /* 为各弹性子元素加上 1.5rem 的间隙 */
  padding: 0.5rem;
  list-style-type: none;
  background-color: #5f4b44;
}

.site-nav > .nav-right {
  /* 弹性容器内的 auto 外边距将填满所有可用空间 */
  margin-inline-start: auto;
}
```

这里只对一个元素（即菜单项“About”）设置了值为 auto 的外边距。要是设置到菜单项“Support”上，则两个菜单项都会靠右对齐。

弹性子元素的间隙设置还有很多其他配置，比如在弹性容器内均匀分布各弹性子元素等，后续会有介绍。不过本节介绍的样式对于导航菜单这个示例而言已经够用了。

## 4.2 弹性子元素的大小

弹性子元素的尺寸大小固然可以用熟悉的 `width` 和 `height` 属性来指定，但 Flexbox 布局提供了更丰富的选择。本节就来重点考察其中之一：`flex` 属性。

`flex` 属性控制的是沿主轴方向（通常为宽度）上的弹性子元素大小。如代码清单 4.6 所示，先在页面主区域应用 Flexbox 布局，再通过 `flex` 属性设置各列的尺寸。样式更新后的主区域效果如图 4.7 所示。

![Figure 4.7 Main area with a flex layout applied to the white tiles](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/614250792872416381f64c5956338a1d4074c917323931557c25426415a46504.jpg)  
图 4.7 应用了弹性布局的白色主区域效果图

根据代码清单 4.6 更新本地样式表。该样式通过 `tile` 类设置白色背景，然后用 `flex` 类指定 `<main>` 元素为弹性容器。

**代码清单 4.6 在主容器上应用 Flexbox 布局**

```css
.tile {
  /* 给三个板块加上白色背景和内边距 */
  padding: 1.5em;
  background-color: #fff;
}
 
.flex {
  /* 在主容器上应用 flexbox 布局并设置间隙 */
  display: flex;
  gap: var(--gap-size);
}
```

这样，页面内容就分为了两列：左边的大块区域（`column-main`）为页面正文区，右边一栏则是登录表单和一个较小的报价区（`column-sidebar`）。但此时还没有指定列宽，因此宽度是随内容本身自行调整的。如图 4.7 所示，两列内容未能完全填满可用空间，当然对小窗口而言或许没问题。

弹性子元素上的 `flex` 属性包含了好几个配置项。先通过一个最基本的案例来熟悉它。用 `column-main` 和 `column-sidebar` 类来定位两列，再通过 `flex` 分别指定 ⅔ 和 ⅓ 的列宽：

代码清单 4.7 使用 flex 属性设置列宽
```css
.column-main {
  flex: 2;
}
.column-sidebar {
  flex: 1;
}
```

这样，两列的宽度就扩展开来，二者之和与 `nav` 导航条的宽度相等，并保持正文列的宽度是侧边栏的两倍。Flexbox 贴心地完成了所有数学计算。下面具体考察一下这一计算过程。

`flex` 属性其实是三个尺寸属性 `flex-grow`、`flex-shrink` 和 `flex-basis` 的简写形式。上面的样式相当于只设置了 `flex-grow`，其余两个属性则取默认值（分别为 `1` 和 `0%`）。因此 `flex: 2` 等效于 `flex: 2 1 0%`。通常首选简写形式，但也可以像这样分开声明：

```css
flex-grow: 2;
flex-shrink: 1;
flex-basis: 0%;
```

下面就来分别学习这三个属性。先从 `flex-basis` 开始，因为它是其余两个属性的基础。

### 4.2.1 使用 flex-basis 属性

`flex-basis` 定义了元素大小的基准值，即一个初始的“主尺寸”。`flex-basis` 属性可以设置为任意合法的 `width` 属性值，如 `px`、`em` 及百分比；其初始值（initial value）为 `auto`，此时如果浏览器发现元素指定了 `width` 属性，则该 `width` 值即为 `flex-basis` 的值，否则根据元素内容确定大小。如果 `flex-basis` 的值不为 `auto`，其 `width` 属性值也将被忽略。如图 4.8 所示。

![Figure 4.8 Three flex items with a flex basis of 20% , giving each an initial main size (width) of  20%](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/af531eb5bd8051e7e7fa4b22b6978217b5736e3ebf3666407925e9c28e5d6a07.jpg)  
图 4.8 三个弹性子元素的 flex-basis 均为 20%，各占初始主尺寸（宽度）的 20%

初始主尺寸全部确定后，这些弹性子元素可能还需要沿主轴方向适度伸缩，以适应（或填充）弹性容器的大小。此时就需要 `flex-grow` 和 `flex-shrink` 这两个属性做进一步控制。

### 4.2.2 使用 flex-grow 属性

子元素的 `flex-basis` 全部确定后，连同子元素间的所有间隙与外边距，加起来的总宽度未必刚好等于弹性容器的宽度，很可能会留白（如图 4.8 所示）。

这部分留白（或剩余宽度）会根据 `flex-grow` 的值按比例分配给每个弹性子元素。`flex-grow` 的值为非负整数。当值为 0 时，表示该弹性子元素的宽度最多延展到 `flex-basis` 的大小；而当值大于 0 时，则表示该元素将按比例延展，直至填满整个弹性容器（如图 4.9 所示）。

![Figure 4.9 Flex items with flex-grow values will grow to fill available space (remainder) of the flex container.](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/b6863d3b5863534fe290af2d5e1887ab2914a064334bf777c55bead952d059c5.jpg)  
图 4.9 带有 flex-grow 值的子元素将按比例延展，直到填满整个弹性容器

`flex-grow` 的值越大，该元素的“权重”越高，占据的剩余宽度也就越多。如图 4.10 所示，`flex-grow: 2` 的子元素延展量是 `flex-grow: 1` 的子元素的两倍。

![Figure 4.10 Items with a higher flex-grow value consume a higher proportion of the remaining available width.](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/7f1c4993b34d2ac274b52ea0c9f68133a3bbdfe94452248d8a419274a2ec0cec.jpg)  
图 4.10 flex-grow 值越大，子元素延展时分得的剩余可用宽度的比重就越高

回到本节开头那个示例。简写声明 `flex: 2` 与 `flex: 1` 对应的 `flex-basis` 均为 `0%`，因此，用整个容器的宽减去两列间的间隙 `1.5em`，就得到了总剩余宽度的大小。剩余宽度再按比例分配给这两列：总量的 ⅔ 分给第一列，剩下的 ⅓ 分给第二列（如图 4.11 所示）。

![Figure 4.11 The two columns fill the flex container's width.](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/98a75d70a3e416dd9d6438d4291057b2b47f9e8ca8da7c1dfcb2727f935fc3bb.jpg)  
图 4.11 两个内容列完全填充弹性容器宽度后的效果图

推荐使用简写属性 `flex`，而不是单独声明 `flex-grow`。`flex` 属性与大多数简写属性不同，其省略的样式值不会被设为对应的初始值（initial value）；相反，简写形式会默认给它们赋上有用的值：`flex-grow` 为 `1`，`flex-shrink` 也为 `1`，而 `flex-basis` 默认取 `0%`。在大多数情况下这些值都是满足需要的。

### 4.2.3 使用 flex-shrink 属性

`flex-shrink` 属性与 `flex-grow` 遵循相似的原则。初始主尺寸确定后，累加后的总宽度可能会超出弹性容器的可用宽度。如果不设置 `flex-shrink`，内容就会溢出（如图 4.12 所示）。

![Figure 4.12 Flex items can have an initial size exceeding that of the flex container.](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/c311c357ca694f87f07f834eb7c6fc49e14b218b0eda2986864530c0e317b38f.jpg)  
图 4.12 弹性子元素总的初始宽度可能超出弹性容器

各子元素上的 `flex-shrink` 值表示该元素是否应该收缩尺寸，以防溢出容器。若值为 `0`，则不收缩；若值大于 `0`，则对应元素将一直收缩，直到总尺寸不再溢出。`flex-shrink` 的值所占比重越高，其子元素收缩的幅度相应就越大（由于收缩时初始主尺寸也算在内，因此尺寸大的元素会比尺寸小的收缩得更多）。

作为备选方案，也可以在示例页中通过 `flex-shrink` 来实现类似的两列布局效果。先将两个内容列的 `flex-basis` 设为想要的比例（即 66.67% 和 33.33%），这样二者的总宽度加上 `1.5em` 的间隙，总量将比容器多出 `1.5em`。再将两列的 `flex-shrink` 分别设为 `1`，这样每一列就会收缩相同的宽度以避免溢出容器。所需样式如代码清单 4.8 所示。

代码清单 4.8 使用 flex 属性设置宽度
```css
.column-main {
  flex: 66.67%;  /* 等效于 flex: 1 1 66.67% */
}
.column-sidebar {
  flex: 33.33%;  /* 等效于 flex: 1 1 33.33% */
}
```

该解决方案与前面（即代码清单 4.7）给出的方案可谓殊途同归，都能满足页面布局的需要。

> [!note]+
>
> 如果深究细节，代码清单 4.7 和 4.8 之间还是存在细微差别的。具体原因有点复杂，但简单来讲，是因为 `column-main` 列设置了内边距 `padding`，而 `column-sidebar` 列则没有。当 `flex-basis` 为 `0%` 时，内边距会改变弹性子元素初始主尺寸的计算方式。因此，代码清单 4.7 中的正文列 `column-main` 会比 4.8 中的略宽一些。如果对测量精度有要求，网格布局不失为一种更好的解决方案（详见第 5 章）。

### 4.2.4 实际应用

`flex` 属性的用法有很多，可以像前面的网页那样，用 `flex-grow` 值或者 `flex-basis` 百分比来定义每列的占比；也可以定义一组宽度固定的列，外加可以随视口动态缩放的“流体”列（“fluid” columns）；还可以效仿 Bootstrap 那样的第三方库，通过构建出一套“网格系统”，提供一系列可复用的样式类，来定义具有不同预设尺寸的布局列。图 4.13 给出了 Flexbox 可以实现的几种布局效果。

![Figure 4.13 Some ways you can define item sizes using flex](https://imglink.io/i/d396a1e6-6e19-4fd0-9f98-b4e77b8d5d82.png)
图 4.13 用 flex 属性定义元素尺寸的几种方式

第三个示例展示的是曾经的“圣杯”布局（“Holy Grail” layout）—— 一个在过去用 CSS 实现起来异常困难的布局效果。该布局中，两个侧边栏的宽度是固定的，而中间那一栏则是“流动的”（“fluid”），即要求自动填满可用空间。最要命的是，这三列的高度还要完全相等，而高度又是其内容决定的。现在，人们只要利用不同的弹性子元素，略加想像就能组合出各式各样的解决方案轻松实现这样的效果。

## 4.3 弹性布局的方向

Flexbox 的另一重要功能是切换主轴与副轴的方向，通过弹性容器上的 `flex-direction` 属性进行控制。该属性的初始值（`row`）规定子元素从左至右排列，一如前面演示的案例效果。若改为 `flex-direction: column`，则沿垂直方向从上到下排列。此外，属性值还支持 `row-reverse` 从右到左排列，以及 `column-reverse` 从下到上排列（如图 4.14 所示）。

![Figure 4.14 Changing the flex direction changes the main axis. The cross axis also changes to remain perpendicular to the main axis.](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/c59215cc83e5faa2109bc4856aad64ee131acdfc237b5a0da752f2345fe2911f.jpg)  
图 4.14 改变 flex-direction 就改变了主轴的方向，与之垂直的副轴方向也会随之改变

本节将在示例页靠右的侧边栏演示该属性的用法，让两个子板块产生纵向堆叠效果。这貌似有些画蛇添足，毕竟它们已经竖直排列好了，块级元素也理应如此。但这样的页面布局存在一个极为隐蔽的漏洞，仅在左边的正文板块包含更多内容时才会显现，如图 4.15 所示。

只要给正文区 `column-main` 列添加一些标题及段落内容，就会发现主板块的高度超过了右边的侧边栏。按理来说 Flexbox 是可以让两列高度相等的，这里怎么不生效了呢？

![Figure 4.15 The main tile grows beyond the height of the tiles in the right column (dashed line indicates the size of column-sidebar).](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/8590bab9ffa92a34c89b6d8b61d09f58e5da303d153bbb01fb9f95c8e0aad982.jpg)  
图 4.15 主板块延伸到了右侧板块总高度外围（虚线标出了 column-sidebar 的大小）

如图 4.15（注意标注的虚线框）所示，左右两个弹性子元素确实是等高的。问题在于右侧子元素中的两个子板块没能填满整个侧边栏区域。

理想的布局效果应如图 4.16 所示。即使左侧内容区更长，右侧的两个子板块也会自动延展开来，填满整个侧边栏。在 Flexbox 出现以前，纯靠 CSS 几乎是无法实现的（需要略微借助 JavaScript 才行）

![Figure 4.16 The Ideal layout: tiles in the right column align with the large tile on the left.](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/deff48d6044ce06d46e3d56479b2fca1b6fa89d184bbd311219a6cc78b82c874.jpg)  
图 4.16 目标布局效果：右边栏的板块与左边的大板块对齐。

### 4.3.1 变更弹性布局的方向

要让两个子板块延展到填满整个容器的高，就得把右边栏（`column-sidebar`）改为弹性容器，并设置 `flex-direction: column`；再给其中的两个子板块的 `flex-grow` 都赋上一个非零的属性值。如代码清单 4.9 所示，将以下样式更新到本地样式表。

**代码清单 4.9 在右侧创建一个弹性布局列**

```css
.column-sidebar { 
  /* 对外部弹性盒而言是弹性子元素，对内部元素而言则是弹性容器 */
  flex: 1;
  display: flex;          
  flex-direction: column; 
  gap: var(--gap-size);   
}

.column-sidebar > .tile {
  /* 给侧边栏内部的弹性子元素一个非零的 flex-grow 值 */
  flex: 1;
}
```

至此就创建了一个嵌套的弹性盒子。元素 `<div class="column-sidebar">` 既是外层弹性盒子的弹性子元素，又是内部两个子板块的弹性容器。其整体结构如下所示（简洁起见，文本内容已省略）：

```html
<main class="flex">
  <div class="column-main tile">
    ...
  </div>
  <div class="column-sidebar">
    <div class="tile">...</div>
    <div class="tile">...</div>
  </div>
</div>
```

这个内部的弹性盒子，其弹性布局的方向为 `column`，主轴方向由此转为从上到下（副轴方向则变为从左到右）。也就是说，此时 `flex-basis`、`flex-grow` 以及 `flex-shrink` 属性仅对其弹性子元素的高度生效，而非宽度。由于子元素设置了 `flex: 1`，它们的高度在必要时会延展到填满整个容器。无论左右两栏的高矮，此时主板块的底边都会和右边第二个小板块的底边始终对齐。

水平弹性盒子的大部分概念对于垂直方向（`column` 或 `column-reverse`）同样适用，但有个 **关键区别** 务必牢记：在 CSS 中高度的处理方式与宽度存在本质上的不同。弹性容器会 100% 填满可用宽度，而高度则始终由自身的内容决定。即便改变主轴方向，也不会改变这个本质特征。

弹性容器的高度则由弹性子元素决定，它们会正好填满容器。在纵向 Flexbox 布局中，子元素的 `flex-grow` 和 `flex-shrink` 属性不会起作用，除非有其他因素强行改变弹性容器的高度。本例中的“其他因素”就是外层弹性容器衍生过来的高度。

### 4.3.2 登录表单的样式设计

页面的整体布局告一段落，剩下的工作是给右侧两个子板块中更小的内容元素设计样式，即登录表单和注册链接部分。登录表单就不用弹性盒布局了，但为了演示的完整性再简要过一遍。最终设计好的表单效果如图 4.17 所示。

![Figure 4.17 Login form](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/e6eb1a47c1dfd807f49eaf7b3fc25c111b2f14e621328bb561f40e3bd110b3bb.jpg)  
图 4.17 登录表单的最终效果

以 `<form>` 的样式类 `login-form` 为 CSS 选择器，分别对登录表单中的标题、输入框及按钮三个部分进行样式设计，并根据代码清单 4.10 更新到示例页面。

代码清单 4.10 登录表单的样式设计
```css
/* 标题设为加粗、右对齐、全大写 */
.login-form h3 {
  margin: 0;
  font-size: 0.9em;
  font-weight: bold;
  text-align: end;
  text-transform: uppercase;
}

/* 仅为文本类型的输入框（不包含复选框与单选按钮）设置样式 */
.login-form input:not([type=checkbox]):not([type=radio]) {
  display: block;
  inline-size: 100%;
}

/* 按钮的样式 */
.login-form button {
  margin-block-start: 1em;
  border: 1px solid #cc6b5a;
  background-color: white;
  padding: 0.5em 1em;
  cursor: pointer;
}
```

先来看标题，用的都是熟悉的字体属性。`text-align` 用于文字右对齐，`text-transform` 则用于设置文字大写。注意观察，示例 HTML 里的内容并没有写成大写形式。当字母大写仅仅视为一种样式时，正常的做法是在 HTML 中按照标准的语法规则书写，再用 CSS 转成大写。这样今后无需重新输入 HTML 中的文字就能控制大小写。

第二组规则集处理的是输入框。这里的选择器比较特殊，主要是因为 `<input>` 元素很特殊。`<input>` 元素既可以输入文本和密码，也可以输入很多类似的 HTML 5 数据，如数字、电子邮箱及日期；此外还能记录看上去截然不同的表单项数据，比如单选按钮和复选框的选中结果。

示例中 `:not()` 伪类选择器与属性选择器 `[type=checkbox]`、`[type=radio]` 组合起来的写法（详见 [**附录 A**](https://blog.csdn.net/frgod/article/details/144163032)），可以选中除复选框和单选按钮以外的所有 `<input>` 元素。这是一个黑名单方式：把不想选中的元素剔除掉。也可以采用白名单方式：将想要选中的所有 `<input>` 元素类型通过属性选择器一一罗列，但这样写起来就会显得十分冗长。

> [!note]+
> 尽管示例表单只出现了文本和密码输入框，但演示的重点在于，该 CSS 样式可能影响到后续其他的 HTML 标记，需要尽量予以兼顾。

在这组规则集中，输入框加上了 `display: block` 的样式，令其独占一行，同时将宽度设为 `100%`。通常情况下，块级元素会自动填满可用宽度，但 `<input>` 比较特殊，其宽度由 `size` 属性决定。该属性表示输入框在不出现滚动条的情况下大致能够容纳的字符数。若不指定 `size` 的值，则会赋一个默认值。也可以用 CSS 的 `width` 或 `inline-size` 属性强制设置一个宽度。

第三组规则集处理的是登录按钮。这些样式大多很简单，只有 `cursor` 属性可能相对陌生。它控制的是鼠标指针悬停在元素上方时的外观效果。其值为 `pointer` 时，鼠标指针会变成一个具有指示效果的手型，鼠标悬停到链接元素时的默认效果就是这个形状。它告诉用户该元素是可以点击的，这一细节处理可以让按钮样式更加完美。

## 4.4 对齐、间距等细节处理

至此，我们已经对 Flexbox 最为核心的知识点有了全面深入的了解。不过前面提到过，还有很多设置项偶尔也能派上用场，它们大多与弹性子元素在弹性容器中的对齐方式或间距设置有关。还有一些设置用于控制换行，或者重新对子元素单独排序。

这些控制属性都罗列在了以下几张图表中：图 4.18 和图 4.19 列出了可在弹性容器上设置的所有属性；图 4.20 则列出了弹性子元素的所有属性。这些属性中很多也适用于下一章将要重点介绍的 **网格布局（grid layout）**。

![图 4.18 弹性容器的属性](https://i-blog.csdnimg.cn/direct/7248f4064c934224aa57d63f47b7125a.png#pic_center)

**图 4.18 弹性容器的属性**

![图 4.19 弹性容器的属性（续）](https://i-blog.csdnimg.cn/direct/8fc9ffee5c0c45758771259cb656bbea.png#pic_center)

**图 4.19 弹性容器的属性（续）**

![图 4.20 弹性子元素的属性](https://i-blog.csdnimg.cn/direct/45fe46eea9ec4e28b63686fb14291461.png#pic_center)
图 4.20 弹性子元素的属性

通常情况下，创建一个弹性盒子需要用到前面介绍的以下方法：

* 选定一个容器及其子元素，并给容器设置 `display: flex`；
* 如有必要，再对容器设置 `gap` 和/或 `flex-direction` 属性；
* 必要时，为弹性子元素设置 `flex` 属性值来控制尺寸大小。

待元素大致摆放就位后，就可以按需设置其他 Flexbox 属性了。我建议先熟悉迄今为止学过的知识点，然后再继续本章后续内容，了解 Flexbox 提供的这些功能属性，等到用得着的时候再来记住它们，毕竟一口气记住所有这些以 `align-*` 和 `justify-*` 开头的属性名绝非易事。什么时候用得上了，再回过头来参考参考就行了。剩下的大部分属性其实都比较简单。

### 4.4.1 理解弹性容器的属性

弹性容器上有好几个属性可以控制弹性子元素的布局，首先是前面 4.3 小节介绍过的 `flex-direction`，本节再来看看其他属性。

#### 1 flex-wrap 属性

`flex-wrap` 属性可以让弹性子元素换到新的一行或多行显示，其属性值可以是 `nowrap`（初始值）、`wrap` 或 `wrap-reverse`。启用换行后，子元素不再随指定的 `flex-shrink` 值收缩；相反，任何溢出弹性容器的子元素都将换行显示。

如果弹性布局的方向是 `column` 或 `column-reverse`，`flex-wrap` 也能让弹性子元素换到下一列展示，只不过是在容器高度被限制的情况下才会发生；否则容器会纵向延展来包含溢出的子元素。

#### 2 flex-flow 属性

`flex-flow` 属性是 `flex-direction` 和 `flex-wrap` 的简写形式。例如 `flex-flow: column wrap` 指定弹性子元素从上到下排列，必要时换到下一列显示。

#### 3 justify-content 属性

当弹性子元素未填满容器时，可以用 `justify-content` 属性来控制子元素沿主轴方向的间距。支持的属性值还有几个新关键字：`flex-start`、`flex-end`、`center`、`space-between`、`space-around` 以及 `space-evenly`。当值为默认的 `flex-start` 时，各子元素将从主轴的起始位置顺序排列。例如主轴方向通常为从左至右，起始位置就是左侧。如果不设置 `gap` 或外边距，子元素间就不存在间距。若值为 `flex-end`，则从主轴终点位置开始排列，`center` 则让子元素整体居中。

注意，这里的 `start` 和 `end` 其实是让子元素靠左或靠右排列的逻辑值，它们取决于具体的书写模式，而与主轴方向无关；而 `left` 与 `right` 则是绝对值，始终按靠左和靠右排列执行，与书写模式及弹性布局方向无关。

均匀分布弹性子元素的方法共有三种，每种方法在首个子元素之前、末尾子元素之后提供不同的空间：`space-between` 令首尾子元素分别紧贴主轴的起点与终点，其余间隙均匀分布；`space-around` 则令首尾子元素的外围空间等于各子元素间均布间隙的一半；而 `space-evenly` 则是令首尾子元素的外围空间与子元素间的均布间隙相等。

间距（spacing）是在算出外边距与 `flex-grow` 值之后生效的。换言之，如果任意子元素的 `flex-grow` 属性不为 `0`、或者任何子元素在主轴方向的外边距值为 `auto`，那么属性 `justify-content` 就失效了。

#### 4 align-content 属性

若启用换行（即 `flex-wrap`），`align-content` 属性就可以控制弹性容器内沿副轴方向各行之间的间距。支持的属性值有 `flex-start`、`flex-end`、`center`、`stretch`（初始值）、`space-between` 以及 `space-around`。这些值对间距的处理类似上面的 `justify-content`。

此外还有一个 `place-content` 属性，它是 `align-content` 与 `justify-content` 的简写形式。

#### 5 align-items 属性

控制子元素主轴方向对齐方式的是 `justify-content` 属性；而控制它们在副轴方向对齐的则是 `align-items` 属性，其初始值为 `stretch`，可以让子元素在水平布局时填满容器高度，而在垂直布局时填满容器宽度，因此可用于实现等高列。

其他的属性值能让弹性子元素保留自身的大小，而不必填充容器大小（类似 `vertical-align` 的概念）

* `flex-start` 与 `flex-end`：令子元素与副轴的开始和结束位置对齐（分别对应水平布局时的顶部与底部）。
* `start` 与 `end`：均为逻辑值，根据弹性容器的书写模式对各子元素进行对齐。
* `self-start` 与 `self-end`：也是逻辑值；也是根据各子元素的书写模式来设置对齐方式；但仅在某弹性子元素的书写模式与弹性容器各异时，二者才会与 `start` 及 `end` 不同。
* `center`：令子元素居中。
* `baseline`：让元素根据每个弹性子元素的首行文本的基线对齐。基线（baseline）是文本底边所在的参考线。

当想让一个弹性子元素中大字号标题的基线与其他子元素中的小号字的文本基线对齐时，`baseline` 就能大展身手了。另外，还可以在此基础上加注 `first` 或 `last` 字样，指定要对齐到文本的哪一行。例如，`align-items: last baseline` 就能让各弹性子元素按各自文本的最后一行对齐。

> **提示**
> `justify-content` 与 `align-items` 属性的名称很容易混淆。我是参考文本处理器中的文本样式的含义来分辨它们的：可以“调整”（justify）文字，使其在水平方向的两端之间均匀分布；而 `align-items` 更像 `vertical-align`，能让行内文本在垂直方向上“对齐”（align）。

最后还有一个 `place-items` 属性，它是 `align-items` 与 `justify-items` 的简写形式。特别注意，`justify-items` 只能在第 5 章即将介绍的 **网格布局（grid layout）** 中使用，而在弹性容器中会被忽略。
### 4.4.2 理解弹性子元素的属性

前面已经介绍过属性 `flex-grow`、`flex-shrink`、`flex-basis` 以及它们的简写属性 `flex`（详见 4.2 小节）。本节再介绍两个用在弹性子元素上的属性：`align-self` 与 `order`。
#### 1. align-self 属性

该属性控制弹性子元素在副轴方向上的对齐方式。它与设置在弹性容器上的 `align-items` 属性效果相同，但 `align-self` 可以单独给弹性子元素设置不同的对齐方式。指定初始值 `auto` 后，将以容器的 `align-items` 值为准；其他属性值则会覆盖容器上的对应设置。此外，`align-self` 支持的关键字还与 `align-items` 相同，即：`flex-start`、`flex-end`、`start`、`end`、`self-start`、`self-end`、`center`、`stretch` 以及 `baseline`。

Flexbox 中还有一个 `place-self` 属性，它是 `align-self` 和 `justify-self` 的简写形式。特别注意，`justify-self` 仅在网格布局（第 5 章将重点介绍）中使用，在弹性容器中会被忽略。
#### 2. order 属性

正常情况下，弹性子元素会按照其在 HTML 源码中出现的顺序，从主轴起点开始，沿主轴方向进行排列。借助 `order` 属性，则可以变更子元素的排列顺序。其属性值可以为任意正整数或负整数。若出现重复的 `order` 值，则按源码顺序排列各子元素。

初始状态下，所有弹性子元素的 `order` 值都为 `0`。若值为 `-1`，则元素会移动到列表的开头；若值为 `1`，则移动到最后。这样就可以根据需求设置每个子元素的 `order` 值，以便重新排序。属性值之间可以不连续。

> [!warning]+
> 请务必谨慎使用 `order` 属性。当屏幕上的视觉布局顺序与源码顺序差别过大时，可能会影响网站的可访问性（accessibility）。在大多数浏览器中使用 `Tab` 健浏览页面元素的顺序是与源码保持一致的，倘若视觉上差异过大，难免会令人费解。此外，视力受损的用户所使用的大部分屏幕阅读器也是基于页面源码顺序来实现各种功能的。

### 4.4.3 使用对齐属性

本节将利用前面介绍的这些 Flexbox 属性来给本章的示例页面画上一个圆满的句号。示例中的最后一个板块包含一个带样式的价格以及一个引导（即 call-to-action，缩写为 CTA，又译为行动召唤）按钮。最终效果如图 4.21 所示。

![Figure 4.21 Stylized text using flexbox](https://cdn-mineru.openxlab.org.cn/result/2025-08-10/3d9ea514-ce45-4a73-bfe6-f1045836965a/0f4cba5b5165250804c4e77148b55c3ffad9b271d910f6a8689d646b53668cc0.jpg)  
图 4.21 应用 Flexbox 布局实现的文字效果

该板块的 HTML 标记已在页面写好了，如下所示：

```html
<div class="tile centered">
  <small>Starting at</small>
  <div class="cost">
    <span class="cost-currency">$</span>
    <span class="cost-dollars">20</span>
    <span class="cost-cents">.00</span>
  </div>
  <a class="cta-button" href="/pricing">
    Sign up
  </a>
</div>
```

`$20.00` 字样包裹在元素 `<div class="cost">` 中，该元素可视为弹性容器。它有三个弹性子元素，分别对应需要设置对齐方式的三处文字部分（即 `$`、`20` 以及 `.00`）。这里选用 `span` 元素而非 `div` 来放置文本，因为 `span` 本就是行内元素。这样，即便因为某些原因无法加载 CSS，文本 `$20.00` 也依旧能在同一行进行显示。

在下面的代码清单 4.11 中，我利用了 `justify-content` 属性让弹性子元素在弹性容器内水平居中。然后再用 `align-items` 和 `align-self` 令它们垂直对齐。将这些样式更新到本地示例页，查看最终效果。

**代码清单 4.11 价格板块的样式设计**

```css
.centered {
  text-align: center;
}
 
.cost {
  display: flex;
  justify-content: center;  /* 在主轴方向上居中对齐 */
  align-items: center;  /* 在副轴方向上居中对齐 */
  line-height: 0.7;
}

/* 给价格的不同部分设置不同的字号 */
.cost-currency {
  font-size: 2rem;
}
.cost-dollars {
  font-size: 4rem;
}
.cost-cents {
  font-size: 1.5rem;
  align-self: flex-start;  /* 覆盖该元素的 align-items 设置，令其与容器顶部而非中间部分对齐 */
}
 
.cta-button {
  display: block;
  background-color: #cc6b5a;
  color: white;
  padding: 0.5em 1em;
  text-decoration: none;
}
```

以上代码对带样式的标价部分 `$20.00` 应用了 Flexbox 布局，同时定义了一个 `centered` 类来居中剩下的文字，最后借助样式类 `cta-button` 为 CTA 引导按钮设置了对应样式。

代码中有个比较特殊的样式声明：`line-height: 0.7`。这是因为每个弹性子元素的文字行高决定了各子元素的高度。也就是说，元素高度要比文字本身的高度略高一些。因为 `1em` 的高度包含了文字内容的下行部分（descenders），而示例中的文字刚好没有，于是实际字符要比 `1em` 略矮一些。经过反复尝试，直到 `20` 的顶部与 `.00` 在视觉上对齐，才得到这个样式值。想了解更多文本相关的内容，请参考本书第 13 章。

Flexbox 的出现是 CSS 的一大进步。一旦熟悉，就可能想在页面的每个地方都用用看。算是给你个提醒吧：多多拥抱常规文档流，Flexbox 仅在必要的时候再考虑使用。这样讲并不是不让您用 Flexbox，而是希望您不要拿着锤子满世界找钉子。


## 4.5 本章小结

* 弹性容器的各个子元素即弹性子元素（flex items），将在浏览器中排成一行或一列。
* 简写属性 `flex` 指定了 `flex-grow`、`flex-shrink` 及 `flex-basis` 的值，可用于设置弹性子元素的大小尺寸。
* 嵌套的弹性盒子既可以用于构建复杂的网页布局，又可以用来填满自适应大小的盒子高度。
* Flexbox 可以自动创建等高列。
* Flexbox 具备的多个配置属性，能够以数不清的方式灵活设置各弹性子元素的对齐方式及其间距。
* 利用 `align-items` 或 `align-self` 属性可以在弹性容器内垂直居中某个单独的弹性子元素。
