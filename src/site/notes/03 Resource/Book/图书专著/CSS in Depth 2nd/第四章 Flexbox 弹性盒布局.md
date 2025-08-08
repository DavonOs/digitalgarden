---
{"dg-publish":true,"dg-permalink":"books/36924049/flexbox","permalink":"/books/36924049/flexbox/","metatags":{"description":"","og:site_name":"DavonOs","og:title":"第四章 Flexbox 弹性盒布局","og:type":"article","og:url":"https://zuji.eu.org/books/36924049/flexbox","og:image":"https://images.manning.com/360/480/resize/book/f/235f14b-90f6-43b8-8abd-62bc945d1624/Grant-2ed-HI.png","og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"tags":["program/css"],"dgShowInlineTitle":true}
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
一切得从我们熟悉的 display 属性开始。给元素设置样式 display: flex，该元素就成为了一个 弹性容器（flex container），其直接子元素也相应地变为 弹性子元素（flex items）。默认情况下，弹性子元素会在同一行从左至右并排排列。宽度方面，弹性容器类似块级元素，会填满所有可用宽度；而弹性子元素则未必。这些弹性子元素的高度相等，均由其内容决定。

提示

弹性容器还可以用 display: inline-flex 来创建，但这样的容器在行为上更像一个行内块级元素（inline-block element），而非块级（block）元素。它会和其他行内元素一起流动，但宽度不会自动扩展到 100%。而内部的弹性子元素，行为上则通常跟用 display: flex 创建的一致。实际开发中很少用到 display: inline-flex。

之前介绍的 display 的取值，如 inline、inline-block 等，只会影响设置了该样式的元素，而 Flexbox 则不同。一个弹性容器可以控制其内部元素的布局。典型的弹性容器及其子元素布局情况如图 4.1 所示。

![Figure 4.1 A flexbox container and its elements](https://i-blog.csdnimg.cn/direct/df4965284eb24369a4626ceedfcfcf46.png)
图 4.1 弹性容器及其子元素示意图

各弹性子元素沿着 主轴（main axis） 从左边的 主轴起点（main start） 顺次排列到右边的 主轴终点（main end）。同理，垂直于主轴的叫 副轴（cross axis），方向则是从顶部的 副轴起点（cross start） 到底部的 副轴终点（cross end）。

主轴和副轴的概念有点类似行内（inline）方向和块（block）方向。学到后面您就会发现，Flexbox 的很多属性都是以“起点（start）”和“终点（end）”这样的叫法成对出现的。这些轴的方向是可以改变的，以满足元素向其他方向流动的需要。本章稍后会进行演示。

这些概念（弹性容器、弹性子元素以及主轴、副轴）涉及 Flexbox 布局的大量知识点。在掌握这些新属性之前，仅用一句 display: flex 就已经完成了大量准备工作。为了验证 Flexbox 的威力，接下来将构建如图 4.2 所示的页面布局。

![Figure 4.2 Finished page with a flexbox layout](https://i-blog.csdnimg.cn/direct/27c9b162cb944a3a82e107f41936d089.png)
图 4.2 使用 Flexbox 布局的最终效果

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
        <li><a href="/">Home</a></li>
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

![Figure 4.3 Navigation menu with items laid out using flexbox](https://i-blog.csdnimg.cn/direct/6c8ca401c653442fa71e5d1a5246cfde.png)
图 4.3 导航菜单中的菜单项用 Flexbox 处理后的效果图

要实现这样的菜单，需要考虑清楚让哪个元素做弹性容器。选定容器后，要时刻谨记其子元素将成为弹性子元素。本例中的弹性容器应该是那个无序列表（`<ul>`）。它的子元素，即列表项（`<li>`）就是弹性子元素，如以下代码所示：

```html
<ul class="site-nav">
  <li><a href="/">Home</a></li>
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

![Figure 4.5 Menu with padding and link styles added](https://i-blog.csdnimg.cn/direct/4a8226a7f8624e5b9ccd79bfd8f16cf9.png)
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


![Figure 4.6 Gap and margins apply spacing between flex items](https://i-blog.csdnimg.cn/direct/f54671cceed049cabf5ed1506ace1c7f.png)
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

![图 4.7 应用了弹性布局的白色主区域效果图](https://i-blog.csdnimg.cn/direct/15284e8ef2064812a33a606cc96f0e4e.png#pic_center)

**图 4.7 应用了弹性布局的白色主区域效果图**

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

**代码清单 4.7 使用 flex 属性设置列宽**

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

![图 4.8 三个弹性子元素的 flex-basis 均为 20%，各占初始主尺寸（宽度）的 20%](https://i-blog.csdnimg.cn/direct/3e9843d73af247ee830d7a50cd38937f.png#pic_center)

**图 4.8 三个弹性子元素的 flex-basis 均为 20%，各占初始主尺寸（宽度）的 20%**

初始主尺寸全部确定后，这些弹性子元素可能还需要沿主轴方向适度伸缩，以适应（或填充）弹性容器的大小。此时就需要 `flex-grow` 和 `flex-shrink` 这两个属性做进一步控制。

### 4.2.2 使用 flex-grow 属性

子元素的 `flex-basis` 全部确定后，连同子元素间的所有间隙与外边距，加起来的总宽度未必刚好等于弹性容器的宽度，很可能会留白（如图 4.8 所示）。

这部分留白（或剩余宽度）会根据 `flex-grow` 的值按比例分配给每个弹性子元素。`flex-grow` 的值为非负整数。当值为 0 时，表示该弹性子元素的宽度最多延展到 `flex-basis` 的大小；而当值大于 0 时，则表示该元素将按比例延展，直至填满整个弹性容器（如图 4.9 所示）。

![图 4.9 带有 flex-grow 值的子元素将按比例延展，直到填满整个弹性容器](https://i-blog.csdnimg.cn/direct/5848b41bfa024cd7acf8691dbd399ac3.png#pic_center)

**图 4.9 带有 flex-grow 值的子元素将按比例延展，直到填满整个弹性容器**

`flex-grow` 的值越大，该元素的“权重”越高，占据的剩余宽度也就越多。如图 4.10 所示，`flex-grow: 2` 的子元素延展量是 `flex-grow: 1` 的子元素的两倍。

![图 4.10 flex-grow 值越大，子元素延展时分得的剩余可用宽度的比重就越高](https://i-blog.csdnimg.cn/direct/4306b9b2fee74aeba5d6a11720370ee8.png#pic_center)

**图 4.10 flex-grow 值越大，子元素延展时分得的剩余可用宽度的比重就越高**

回到本节开头那个示例。简写声明 `flex: 2` 与 `flex: 1` 对应的 `flex-basis` 均为 `0%`，因此，用整个容器的宽减去两列间的间隙 `1.5em`，就得到了总剩余宽度的大小。剩余宽度再按比例分配给这两列：总量的 ⅔ 分给第一列，剩下的 ⅓ 分给第二列（如图 4.11 所示）。

![图 4.11 两个内容列完全填充弹性容器宽度后的效果图](https://i-blog.csdnimg.cn/direct/a37d139aa11e4993a703c8362383ff95.png#pic_center)

**图 4.11 两个内容列完全填充弹性容器宽度后的效果图**

推荐使用简写属性 `flex`，而不是单独声明 `flex-grow`。`flex` 属性与大多数简写属性不同，其省略的样式值不会被设为对应的初始值（initial value）；相反，简写形式会默认给它们赋上有用的值：`flex-grow` 为 `1`，`flex-shrink` 也为 `1`，而 `flex-basis` 默认取 `0%`。在大多数情况下这些值都是满足需要的。

### 4.2.3 使用 flex-shrink 属性

`flex-shrink` 属性与 `flex-grow` 遵循相似的原则。初始主尺寸确定后，累加后的总宽度可能会超出弹性容器的可用宽度。如果不设置 `flex-shrink`，内容就会溢出（如图 4.12 所示）。

![图 4.12 弹性子元素总的初始宽度可能超出弹性容器](https://i-blog.csdnimg.cn/direct/588f98cf414b489b9d1c2a741fad2331.png#pic_center)

**图 4.12 弹性子元素总的初始宽度可能超出弹性容器**

各子元素上的 `flex-shrink` 值表示该元素是否应该收缩尺寸，以防溢出容器。若值为 `0`，则不收缩；若值大于 `0`，则对应元素将一直收缩，直到总尺寸不再溢出。`flex-shrink` 的值所占比重越高，其子元素收缩的幅度相应就越大（由于收缩时初始主尺寸也算在内，因此尺寸大的元素会比尺寸小的收缩得更多）。

作为备选方案，也可以在示例页中通过 `flex-shrink` 来实现类似的两列布局效果。先将两个内容列的 `flex-basis` 设为想要的比例（即 66.67% 和 33.33%），这样二者的总宽度加上 `1.5em` 的间隙，总量将比容器多出 `1.5em`。再将两列的 `flex-shrink` 分别设为 `1`，这样每一列就会收缩相同的宽度以避免溢出容器。所需样式如代码清单 4.8 所示。

**代码清单 4.8 使用 flex 属性设置宽度**

```css
.column-main {
  flex: 66.67%;  /* 等效于 flex: 1 1 66.67% */
}
.column-sidebar {
  flex: 33.33%;  /* 等效于 flex: 1 1 33.33% */
}
```

该解决方案与前面（即代码清单 4.7）给出的方案可谓殊途同归，都能满足页面布局的需要。

> **注意**
>
> 如果深究细节，代码清单 4.7 和 4.8 之间还是存在细微差别的。具体原因有点复杂，但简单来讲，是因为 `column-main` 列设置了内边距 `padding`，而 `column-sidebar` 列则没有。当 `flex-basis` 为 `0%` 时，内边距会改变弹性子元素初始主尺寸的计算方式。因此，代码清单 4.7 中的正文列 `column-main` 会比 4.8 中的略宽一些。如果对测量精度有要求，网格布局不失为一种更好的解决方案（详见第 5 章）。

### 4.2.4 实际应用

`flex` 属性的用法有很多，可以像前面的网页那样，用 `flex-grow` 值或者 `flex-basis` 百分比来定义每列的占比；也可以定义一组宽度固定的列，外加可以随视口动态缩放的“流体”列（“fluid” columns）；还可以效仿 Bootstrap 那样的第三方库，通过构建出一套“网格系统”，提供一系列可复用的样式类，来定义具有不同预设尺寸的布局列。图 4.13 给出了 Flexbox 可以实现的几种布局效果。

![图 4.13 用 flex 属性定义元素尺寸的几种方式](https://i-blog.csdnimg.cn/direct/d96bed2403ff4b1388c23befe6d7c4bb.png#pic_center)

**图 4.13 用 flex 属性定义元素尺寸的几种方式**

第三个示例展示的是曾经的“圣杯”布局（“Holy Grail” layout）—— 一个在过去用 CSS 实现起来异常困难的布局效果。该布局中，两个侧边栏的宽度是固定的，而中间那一栏则是“流动的”（“fluid”），即要求自动填满可用空间。最要命的是，这三列的高度还要完全相等，而高度又是其内容决定的。现在，人们只要利用不同的弹性子元素，略加想像就能组合出各式各样的解决方案轻松实现这样的效果。
