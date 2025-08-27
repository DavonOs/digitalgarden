---
{"dg-publish":true,"dg-permalink":"books/36924049/container-queries","permalink":"/books/36924049/container-queries/","title":"CSS 容器查询","metatags":{"description":"","og:site_name":"DavonOs","og:title":"第十章 CSS 容器查询","og:type":"article","og:url":"https://zuji.eu.org/books/36924049/container-queries","og:image":"https://images.manning.com/360/480/resize/book/f/235f14b-90f6-43b8-8abd-62bc945d1624/Grant-2ed-HI.png","og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"tags":["program/css"],"dgShowInlineTitle":true}
---



> **本章概要**
>
> * 容器的定义与 `@container` 规则的用法
> * 根据容器大小实现模块的响应式
> * 容器相对单位的用法
> * 利用样式查询实现基于自定义属性值的样式变更

至此我们已经掌握了将 CSS 组织为方便重用的模块的具体方法。在大型项目团队构建大型网站或 Web 应用时，利用该方法可以得到效果完全一致的CSS 样式。然而，要是遇到响应式设计的场景，要让设计出的模块在页面任意位置都能使用，难度就会直线攀升。可能经常会遇到要将某个模块放入像侧边栏这样的狭长的列内。虽然视口本身可能够宽了，但留给特定模块的可用空间就另说了。因此，普通的 `@media` 媒体查询在模块的响应式设计方面未必可行。

而 CSS 新推出的 **容器查询（*container query*）** 功能则提供了更为灵活实用的解决方案。容器查询分为两大类：**容器尺寸查询（container size queries）** 和 **容器样式查询（container style queries）**。前者可以根据容器元素的宽度调整页面元素的样式；而后者则可以根据容器的自定义属性实现样式修改。

> **容器的定义**
>
> 在容器查询的语境下，**容器（*container*）** 是指包含了相关元素的特定祖先元素。容器可以是父元素或者更高层级的 DOM 树节点。容器元素在容器尺寸查询和容器样式查询中有各自的确定方式，稍后会详述。

本章将对媒体查询的局限性作简要说明，并介绍容器查询在响应式设计中的具体用法。之后将结合几个实际案例进行深入探讨，助您彻底拿下这个前端期盼已久 CSS 特性。

## 10.1 容器查询的一个简单示例
A basic example of a container query

不妨再来仔细考察一下上一章介绍过的媒体模块（如图 10.1 所示）。先将该模块添加到一个简单的两栏布局中，并让页面符合响应式的设计要求，以便在视口尺寸较小时两个内容列可以呈上下分布。下面将演示在页面响应式特性的控制上，尤其是在涉及模块化 CSS 的相关场景时，媒体查询的表现未必会令人满意。

![图 10.1 第 9 章中构建的媒体模块效果图](https://i-blog.csdnimg.cn/direct/bb19031688394054ad1c384e4cb17599.png#pic_center)
图 10.1 第 9 章中构建的媒体模块效果图

上述模块的 HTML 标记如以下代码清单 10.1 所示。媒体模块位于一个 `<aside>` 元素内，该元素在页面上渲染为一个狭长的侧边栏列。

**代码清单 10.1 带媒体模块的简单两栏布局页 HTML 标记**

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport"
      content="width=device-width, initial-scale=1" /><!-- 视口的 meta 标签 -->
    <link href="style.css" rel="stylesheet" />
  </head>
  <body class="l-page">
    <main>
      <h1>Franklin Running Club</h1>
    </main>
    <aside>
      <h3>Running tips</h3>
      <div class="media"><!-- 媒体模块 -->
        <img class="media__image" src="runner.png" />
        <div class="media__body">
          <h4>Change it up</h4>
          <p>
            Don't run the same every time you
            hit the road. Vary your pace, and
            vary the distance of your runs.
          </p>
        </div>
      </div>
    </aside>
  </body>
</html>
```

此时，正文列 `main` 元素中并没有多少内容，本章稍后会进行扩充。这里先关注侧边栏中的媒体模块。

接着打开样式表，并根据代码清单 10.2 提供的样式进行更新。此时页面中的媒体模块效果和上一章相比，除了引入一些媒体查询来实现页面的响应式外，并没有什么不同之处。整体的页面布局也使用了一个媒体查询，以便在视口尺寸较小时，整个侧边栏可以叠放在 `<main>` 元素的下方。该写法本质上与第 7 章介绍过的响应式知识是一样的。

**代码清单 10.2 两栏布局与媒体模块的样式代码**

```css
@layer reset, layout, modules;

@layer base {
  img {
    display: block;
    max-width: 100%;
  }
}

@layer layout {
  .l-page {
    margin-inline: 1rem;
  }

  @media (min-width: 800px) { /* 大尺寸视口下使用双栏布局 */
    .l-page {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 30%;
    }
  }
}

@layer modules {
  .media {
    padding: 1.5rem;
    background-color: #eee;
    border-radius: 5px;
  }

  .media__image {
    margin-inline: auto;
  }

  @media (min-width: 450px) { /* 对于 450px 以上的视口，将文本移至图片旁边 */
    .media {
      display: flex;
      gap: 1.5em;
    }

    .media__image {
      align-self: start;
      margin-inline: revert;
    }
  }
}
```

在浏览器中加载该页面，媒体模块会出现在较窄的右边栏；而当视口尺寸变得很小时，各列又会叠放在一起，同时媒体模块内部元素也会发生堆叠，最终令图片出现在文本上方，如下图 10.2 所示。由于在小尺寸断点的图片上设置了 `margin-inline: auto`，因此图片可以水平居中展示。

![图 10.2 媒体模块在小尺寸视口的响应式页面中的叠放效果图](https://i-blog.csdnimg.cn/direct/bd97e31128b74094b054e18450646cf5.png#pic_center)
图 10.2 媒体模块在小尺寸视口的响应式页面中的叠放效果图

在本例中，页面所有内容在视口尺寸较大时显示正常，在视口较小时页面的响应式渲染也表现良好；然而，当视口尺寸处在二者之间时，情况就不太理想了。当视口宽度稍微迈过 `800px` 时，页面会按两栏布局渲染。此时右边栏的宽度无法按响应式设计很好地处理媒体模块的渲染，导致媒体模块中的文本内容被强行挤到一处非常狭窄的位置，如图 10.3 所示：

![图 10.3 两栏布局中的侧边栏由于宽度不够，无法正确处理媒体模块的渲染](https://i-blog.csdnimg.cn/direct/e187126cbf464d0e8b40f61db7af9428.png#pic_center)
图 10.3 两栏布局中的侧边栏由于宽度不够，无法正确处理媒体模块的渲染

这里的媒体查询模块的问题在于，尽管视口本身的宽度已经够宽了，似乎可以按并排模式来渲染媒体模块了；但媒体模块却被放到了一个宽度严重不足的容器内。

这个问题理论上可以通过再加一个媒体查询来解决。这样一来，当视口宽度介于 `800px` 到大约 `1100px` 之间时，媒体模块将位于较窄的侧边栏内，并按照一个“动态的”（“mobile”）上下布局进行渲染。这无疑需要写更多样式代码，并且还得时刻关注页面其他位置是否也有类似的狭窄容器；更要命的是，这样的解决方案严重违背了模块化设计的一个核心原则：设计模块时不应该依赖可能会用到该模块的上下文。

一种更好地解决方案是完全放弃媒体查询，转而使用 **容器查询**。使用了容器查询的模块，视口大小与否都无关紧要；重要的是该模块所在的容器大小。

#### 10.1.1 容器尺寸查询的用法
Using container size queries

启用容器尺寸查询只需两个步骤：先定义一个 **容器（*container*）**，再用 `@container` 规则查询该容器。接下来将通过容器查询的一个简单示例来完善刚才的媒体模块，之后将带您深入考察定义容器时可用的其他配置项。

> **注意**
>
> 容器查询功能虽然已于 2023 年初得到了当时所有主流浏览器最新版的支持，但在决定是否使用该功能时，也要考虑到用户可能推迟升级浏览器的情况。获取浏览器最新的版本支持情况，详见 <https://caniuse.com/css-container-queries>。

在 CSS 中，**容器** 这一术语长期以来一直用于指代某个祖先级元素，并通过指定尺寸大小或背景颜色来界定页面上的某个区域；而在容器查询的上下文中同样如此。但在容器尺寸查询中，必须通过设置 `container-type` 属性来显式定义容器。您也可以在同一元素上设置 `container-name`，例如：

```css
container-name: layout;
container-type: inline-size;
```

这样就给容器指定了一个名称 `layout`，并且限定开发者只能根据其行内尺寸或宽度进行容器查询。稍后我们还将重点考察这些属性中的各种取值，但眼下这些配置已经足以构建出一个容器查询的基本示例了。

上述两个属性声明也可以通过 `container` 简写属性等效替换。这通常也是设置它们的最简单的方式：

```css
container: layout / inline-size;
```

定义好了容器，就可以使用 `@container` 来查询宽度了，然后再对容器内的任意元素设置相应的样式。具体写法类似于媒体查询，例如 `@container layout (min-width: 450px)`；或者使用带区间范围的写法 `@container layout (width >= 450px)`。这里的 `layout` 指代容器上定义的容器名称。当目标容器满足指定的尺寸大小时，该查询内的样式声明就会生效，在本例中即为：当容器的宽度大于或等于 `450px` 时生效对应的样式。

代码清单 10.3 给出了示例媒体模块的容器查询样式代码，请按照以下内容更新本地样式表。

**代码清单 10.3 添加容器查询后的示例样式代码**

```css
@layer layout {
  .l-page {
    margin-inline: 1rem;
  }

  .l-page > * {
    container: layout / inline-size; /* 令每列均为一个容器 */
  }

  @media (min-width: 800px) {
    .l-page {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 30%;
    }
  }
}

@layer modules {
  .media {
    padding: 1.5rem;
    background-color: #eee;
    border-radius: 5px;
  }

  .media__image {
    margin-inline: auto;
  }

  @container layout (width >= 450px) { /* 查询 layout 容器的宽度 */
    .media {
      display: flex;
      gap: 1.5em;
    }

    .media__image {
      align-self: start;
      margin-inline: revert;
    }
  }
}
```

通过调整浏览器窗口大小来查看上述变更情况（或者利用浏览器的 `DevTools` 开发者工具启用响应式的设计模式）。此时，媒体模块相当于拥有了四个断点尺寸：在小尺寸视口中作上下布局排列；宽度介于 `450px` 到 `800px` 时则恢复为水平布局；宽度介于 `800px` 到约 `1530px` 时（即侧边栏较窄时）再次作上下排列；最后当宽度大于该断点时，又恢复为水平布局排列。

更重要的是，侧边栏的代码和媒体模块的代码并没有纠缠到一起，可以放心修改二者中的任意一个。至于媒体模块在哪个上下文里响应哪种布局，则完全交由浏览器自行决定。

> **警告**
>
> 鉴于容器的固有特性，需要严格遵守一项特殊规定：容器查询不能在容器本身指定样式。容器查询中的选择器只能选中容器内的 **后代元素**。

与媒体查询一样，您也可以使用 `not` 关键字来对查询逻辑取反，令样式声明在查询条件为 `false` 时生效，例如 `@container layout not (width >= 450px)`。

## 10.2 深入理解容器
A closer look at containers

上一节定义容器时，我们给容器指定了一个名称和对应的容器类型。本节我们将深入考察这些属性的行为模式，并了解它们的具体用途。虽然前面的示例并不难，但在使用容器时，也需要了解一些特定的限制；深入理解容器类型带来的影响尤为重要。

### 10.2.1 容器的类型
Container types

十多年来，浏览器厂商一直认为这个功能永远无法实现，主要是因为他们担心会产生无限循环。假设有这样一个场景，需要查询一个高度小于 `300px` 的容器；当符合查询条件时，其中一个元素的字号会放大至 `2em`，这反过来又将增加该元素的高度，从而撑大所在容器的高度，最终导致容器查询条件匹配失败——进而字号回落到原始大小，然后查询条件再次触发，循环往复，永无休止。

而在容器查询的设计过程中，决不允许出现这样的无限循环。为此，CSS 引入了 **局限（*containment*）** 的概念。它为部分隔离 DOM 子节点和页面其余部分提供了一种有效途径。

在容器查询的上下文或语境中，这就意味着不能使用容器查询来改变被查容器的尺寸大小，并且该尺寸的设置也只能通过不依赖于其子元素的方式来予以明确。

该限制的具体表现取决于容器类型的具体取值。属性 `container-type` 的合法值有三个：`normal`、`inline-size` 以及 `size`；其初始值为 `normal`，表示该元素并非查询容器，因此也无法对其进行容器查询。

> **注意**
>
> 也可以通过 `contain` 属性（property）直接设置元素的局限。但这往往并不常用，因为指定 `container-type` 属性就能同步设置所需的局限。有关局限的更多设置，详见 MDN 在线文档 <https://mng.bz/WEg4>。

#### 10.2.1.1 inline-size 容器类型
The inline-size container type

令容器类型的值为 `inline-size`，正如在之前的示例中演示的那样，可以仅凭行内尺寸（即元素宽度）来实现容器查询。设为 `inline-size` 的容器也无法使用基于高度的容器查询。在大多数实际应用中，`inline-size` 往往就是开发者需要的容器类型。容器的高度仍然会根据其内容的高度正常确定，您也可以根据可用空间的宽度调整样式，但容器中的任何内容都无法改变容器的行内尺寸。而这也正是 `inline-size` 起到的作用。

在常规文档流（normal document flow）中，块级元素的宽度将自动填满所有可用的空间。这就为容器查询提供了一个已知的宽度。在某些情况下，或许需要添加额外的样式声明来明确指定宽度，例如当容器为一个弹性元素时这一点尤为重要：务必确保弹性元素设置了 `flex-basis` 或 `flex-grow` 属性的值，否则容器宽度将为零，导致后续容器查询无法进行。

#### 10.2.1.2 size 容器类型
The size container type

若 `container-type` 的值为 `size`，则容器将在行内方向（inline direction）与块级方向（block direction）上实现全尺寸局限（full-size containment）。换句话说，浏览器将无法通过子元素来确定其容器的高度；相反，子元素会根据容器的高度进行查询。

容器类型指定为 `size` 后，容器的高度就需要以某种方式显式地定义，例如直接设置 `height` 或 `min-height` 属性；或者通过容器外部的样式声明来定义其高度大小，比如网格布局或 Flexbox 布局；再或者，如果容器用到了绝对定位或固定定位，也可以利用 `inset` 属性来指定容器高度。而当上述方法都无法确定容器高度时，容器高度将为零，基于该高度的容器查询也将无法正常工作。

一般来说，在大多数情况下，容器类型都应该设为 `inline-size`。而当容器为网格布局或 Flexbox 的一部分、并且高度可以明确确定时，如果想针对高度做容器查询，则可以将容器类型设为 `size`。但大多数响应式设计都是基于行内尺寸实现的，因此通常也不需要这样设置。

### 10.2.2 容器的名称
Container names

指定容器名称后，就可以针对具体的容器实现容器查询。为此 CSS 提供了很大的自由度，既可以为某容器指定一个唯一的名称，同时也可以为多个容器复用相同的名称。

其中一个好的做法是使用一个通用名称，例如指定为 `layout`，并将其应用到页面上的大多数（或者所有）容器。在大多数情况下，它们多半就是您要查询的目标容器，因为您大概率希望模块能根据现有宽度做出响应。容器查询将沿 DOM 树向上查找，并选中指定名称的最近的祖先级容器（如图 10.4 所示）。

![图 10.4 容器查询将选中所有匹配名称中距离最近的容器](https://i-blog.csdnimg.cn/direct/79efb54d22b442219803cbb0dc796b6e.png#pic_center)

**【图 10.4 容器查询将选中所有匹配名称中距离最近的容器】**

遇到需要不同容器的特殊情况时，也可以指定不同的名称，甚至可以对同一容器指定多个容器名称。例如 `container: layout sidebar / inline-size` 就将名称 `layout` 和 `sidebar` 同时指定给该容器，这样一来，带有这两个名称中任意一个的 `@container` 查询都将与该容器成功匹配。

容器查询还会绕过所有名称匹配失败的容器，如图 10.5 所示。通常情况下，我们要匹配的都是距离最近的容器；当需要对某个特定容器做出响应时，就可以使用此类技术。

![图 10.5 容器查询忽略了名称匹配失败的容器](https://i-blog.csdnimg.cn/direct/c7f35e5f7efe4e6fbef58081a82fc59c.png#pic_center)

**【图 10.5 容器查询忽略了名称匹配失败的容器】**

为容器添加名称不是必需操作，您也可以利用 `container-type: inline-size` 来建立一个不带名称的容器，并在容器查询时省略名称（如 `@container (min-width: 450px)`）；此时浏览器将查找 DOM 树，直至找到第一个容器。

> **注意**
>
> 使用简写属性 `container` 时必须指定容器名称。而定义一个不带名称的容器只能通过 `container-type` 属性实现。

虽然可以在容器查询中省略容器名称（例如写作 `@container (width > 400px)` 完全有效），但我还是强烈建议您养成为所有容器命名的习惯。对于不带名称的容器查询，浏览器会从当前元素开始，向上遍历 DOM 树中第一个匹配到的容器，无论该容器是否命名。

### 10.2.3 容器与模块化 CSS
Containers and modular CSS

在为网站构建模块化 CSS 的过程中，开发人员应当采取某种策略来确保容器能以可预测的方式进行定义，以便后续对模块进行有效的查询。每当一个模块存在某个包裹元素、并且可能包含其他模块时，我更倾向于将该包裹元素视为容器。

例如在媒体模块中，`media__body` 用于装填内容，同时也可能包含其他模块。因此在这种情况下，我通常会将 `media__body` 定义为一个容器，这样就能对放置其中的任何内容作出适当响应。

根据如下代码清单 10.4 所示的示例代码，同步更新您的本地示例页面。该代码片段对容器进行了定义，同时还对媒体模块的正文部分（media body）设置了一个 `flex-grow` 属性值，以确保其具有确定的宽度。

**代码清单 10.4 将媒体模块中的正文部分设置为容器**

```css
@layer modules {
  .media {
    padding: 1.5rem;
    background-color: #eee;
    border-radius: 5px;
  }

  .media__image {
    margin-inline: auto;
  }

  .media__body {
    container: layout / inline-size;
    flex-grow: 1;
  }
}
```

这样，该模块就可以放置后期可能需要嵌入其中的其他模块了，甚至可以在一个模块内嵌套多个媒体模块，它们会根据情况分别做出响应——尽管没有什么实用价值，但看到这些模块的实际效果也挺有意思的。采用这种方法时，还需要确保任何布局样式也能定义容器，就像对 `.l-page` 设置布局时那样（详见 10.1 小节代码清单 10.3）。

这种方法的另一个替代方案，是通过各自带有的容器来定义模块。例如，用 `<div class="media-container">` 来包裹媒体模块，并指定 `container-type: inline-size` 来设计样式。但我不太喜欢给众多模块添加额外的 HTML 标记，因此这种方法用得也不多。

在使用模块时，容器查询的表现向来优于媒体查询。只要能在整个页面中始终如一地定义好容器，往往就能将它们用于所有模块。

## 10.3 容器相对单位
Container-relative units

容器查询也引出了几个基于容器的相对单位。它们在概念上类似于第二章中介绍的视口相对单位，只不过是基于查询容器而言的。具体包括以下六种：

* `cqw` —— `1cqw` 表示容器宽度的 1%；
* `cqh` —— `1cqh` 表示容器高度的 1%；
* `cqi` —— `1cqi` 表示容器行内尺寸的 1%；
* `cqb` —— `1cqb` 表示容器块级尺寸的 1%；
* `cqmin` —— 一单位 `cqmin` 指代 `cqi` 和 `cqb` 中较小的那个相对单位；
* `cqmax` —— 一单位 `cqmax` 指代 `cqi` 和 `cqb` 中较大的那个相对单位。

就像无法对设置了 `inline-size` 类型的容器进行块级尺寸查询一样，容器类型为 `inline-size` 的容器也无法使用块级方向上的相对单位（即水平书写模式下的 `cqb` 和 `cqh`）。如果在 DOM 树的更高层级存在一个容器类型为 `size` 的容器，则这些相对单位均以该容器为基础进行度量；否则将回退到视口相对单位的行为模式。

接下来演示这些相对单位在一些容器查询中的具体用法。示例页面包含一组公路赛跑的详情卡片。本例将对这些卡片设置网格布局，并让某些卡片比其他卡片更大，以此来演示容器相对单位在响应不同容器尺寸时的工作原理。最终效果如图 10.6 所示 [^1]。

![图 10.6 经过容器查询相对单位处理后的公路赛跑详情卡片效果图](https://i-blog.csdnimg.cn/direct/2cd0529367924bc08273d580f1d29150.png#pic_center)
图 10.6 经过容器查询相对单位处理后的公路赛跑详情卡片效果图

首先要在您的本地示例页添加一些卡片的 HTML 标记，包括一个 `<main>` 元素，里面又包含一个 `<h1>` 标题；还应该有个与 `<main>` 平级的 `<aside>` 元素（详见第 10 章概述部分的代码清单 10.1）。然后将代码清单 10.5 中的示例 HTML 同步更新到本地页面，里面的几个带图片的详情卡片共同构成了本例中的比赛网格；而 `<aside>` 元素暂时不变。

代码清单 10.5 公路赛跑网格及详情卡片 HTML 标记
```html
<main>
  <h1>Franklin Running Club</h1>
  <div class="race-grid">
    <div class="race-detail">
      <img src="race.jpg" />
      <div class="race-detail__body">
        <h3>Union County 10K</h3>
        <p class="rate-detail__date">Saturday, April 14</p>
      </div>
    </div>
    <div class="race-detail">
      <img src="shoe.jpg" />
      <div class="race-detail__body">
        <h3>St. Patrick's Day 5K</h3>
        <p class="rate-detail__date">Saturday, March 17</p>
      </div>
    </div>
    <div class="race-detail">
      <img src="runner-hill.jpg" />
      <div class="race-detail__body">
        <h3>2 mile uphill</h3>
        <p class="rate-detail__date">Thursday, March 29</p>
      </div>
    </div>
  </div>
</main>
```

如您所见，每个详情卡片都包含一张图片和一段正文，而正文部分又包含一个标题和一个日期。

接下来设置网格布局，并给详情卡片设计一些基础样式，如代码清单 10.6 所示。示例代码中的相对单位 `cqi` 主要有两个作用，分别控制图片和标题文字的大小。按照示例代码更新样式，也放到样式表的 `modules` 图层：

代码清单 10.6 响应式设计下的详情卡片示例样式代码
```css
@layer modules {
 .race-grid {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-auto-rows: 1fr;
    gap: 1rem;
  }

  .race-grid > :nth-child(3n - 1) { /* 从第二个详情卡片开始，每隔两张卡片横跨两个网格行 */
    grid-row: span 2;
  }

  .race-detail {
    container: layout / inline-size; /* 为卡片建立容器 */
    border: 1px solid #ccc;
  }

  .race-detail > img {
    inline-size: 100%;
    max-block-size: 30cqi; /* 图像高度不超过容器宽度的 30% */
    object-fit: cover; /* 图片填充过程中允许裁剪，以免拉伸变形 */
  }

  .race-detail__body {
    padding: 1rem 1.5rem;
  }

  .race-detail__body > h3 {
    font-size: clamp(1rem, 3.5cqi, 1.8rem); /* 字号定义为容器宽度的 3.5% */
    font-family: Helvetica, sans-serif;
  }
}
```

以上代码用到了伪类选择器 `:nth-child()` 来选中自然编号为三的倍数的网格单元，从第二个元素开始。这样就能满足本例中右侧卡片列较宽的实际需要。这么写之所以有效，是因为 `:nth-child(3n)` 依次选中的是页面第三、第六、第九项……以此类推；而写作 `:nth-child(3n - 1)` 就能对应选中第二、第五、第八项……以此类推。有关 `:nth-child()` 选择器的更多写法，详见本书[[03 Resource/Book/图书专著/CSS in Depth 2nd/附录 A：选择器参考\|附录A]]。

此外，代码中也用到了相对单位 `cqi`，使得标题字号直接与详情卡片的宽度成正比，具体取值为容器尺寸的 `3.5%`；而内置函数 `clamp()` 进一步限制了字号的上下边界：最小字号为 `1rem`、最大字号为 `1.8rem`。同理，图片高度的设置也是响应式的，具体取值为容器宽度的 `30%`。这些样式声明不仅能在大小两类详情卡片中响应容器尺寸的变化，还能根据整体视口的宽度同步缩放，因为网格本身的尺寸也在发生改变。

值得注意的是，尽管上述代码使用了容器相对单位，但并不需要添加任何 `@container` 查询规则。容器查询的应用场景仅限于需要基于容器尺寸大小选择性地生效某些 CSS 样式；而在本例中，样式始终是生效的。

## 10.4 容器样式查询
Container style queries

**容器查询（*container query*）** 一词长期以来一直用于指代根据容器的尺寸大小做出相应调整的基本思路；但除了响应容器尺寸的变化情况，还可以根据容器样式的其他方面做出响应，由此引入了另一个与 **容器尺寸查询（*container size queries*）** 相对的全新概念，人们称之为 **容器样式查询（*container style queries*）**。

有了容器样式查询，人们就能根据自定义属性的取值有选择性地应用某些样式。书写时需要利用 `style()` 函数语法，具体格式如下：

```css
@container style(--color-theme: dark) {
  /* conditional styles */
}
```

当一个元素继承了指定的自定义属性值后，样式查询代码块内的选择器就可以选中其后代元素，并对这些元素应用条件样式。例如上述代码，其判定条件即：自定义属性 `--color-theme` 的值是否为 `dark`。

使用样式查询前无需显式地定义某个容器。这是因为当您无需基于容器尺寸进行容器查询时，自然也不需要对容器的尺寸进行限制或约束。

> **警告**
>
> `Chrome` 和 `Edge` 浏览器已于 2023 年 3 月正式添加了对容器样式查询的特性支持。截至 2024 年 6 月前后，`Firefox` 和 `Safari` 浏览器仍未提供相应支持，该功能仍被视为实验阶段的功能特性，未来可能会有所变化。查看容器样式查询在当前浏览器的最新支持情况，请参阅 `Can I use` 官网：<https://mng.bz/8wQZ>。

> **译注**
>
> 根据 `Can I use` 官网提供的最新数据，截至 2024 年 11 月 29 日，`Safari` 已经对容器样式查询提供了相应支持，当前主流浏览器中仅 `Firefox` 暂不支持该特性，该功能的整体覆盖率已达 74.12%，以下为最新查询结果截图：
>
> ![当前浏览器各大厂商对容器样式查询功能的最新支持情况（截至 2024 年 11 月 29 日）](https://i-blog.csdnimg.cn/direct/f80454405e8a4391a3fef4910c5d2be7.png#pic_center)
>
> **【当前浏览器各大厂商对容器样式查询功能的最新支持情况（截至 2024 年 11 月 29 日）】**

由于尚未得到浏览器的广泛支持，容器样式查询也仅限部分支持渐进式增强的应用场景，该功能的全面推广应用尚需时日；然而这丝毫不影响容器样式查询成为前端一个非常实用的全新工具，越来越多的开发者都热切期盼着容器样式查询真正推广普及这一天的到来。接下来就让我们先睹为快，看看这个容器样式查询究竟好用在哪里。

### 10.4.1 将模块与所在容器解耦
Decoupling a module from its container

有时候，人们希望模块能在页面某个特定的上下文中渲染出不一样的效果。为了举例说明，本节将通过样式查询对放置在特定上下文中的详情卡片样式进行调整，并通过设置一个自定义属性 `--sidebar` 来识别该上下文。

如图 10.7 所示，示例页面的右侧边栏中已经添加了一个上节演示过的详情卡片。同时在这个侧边栏中设置了 `--sidebar` 属性，详情卡片将基于该属性实现响应式布局。

![图 10.7 公路赛跑详情卡片在侧边栏中改为横向布局](https://i-blog.csdnimg.cn/direct/b242ada208e64ca9873578af119e8ebc.png#pic_center)
图 10.7 公路赛跑详情卡片在侧边栏中改为横向布局

我们先将主内容区的一个比赛详情卡片复制到旁边的 `<aside>` 元素中。在真实网站场景下，也许并不会像这样重复使用一张卡片，而是以某个独立的页面单独渲染到侧边栏中；但对于本节要演示的重点而言已经完全够用了。

接着添加 CSS 样式来设置自定义属性 `--sidebar`，并让详情卡片的样式布局基于该属性作响应式变更。根据代码清单 10.7 所示内容同步更新本地样式表的 `layout` 及 `modules` 图层。这样就触发了对属性 `--sidebar` 的样式查询，容器样式仅在该属性值为 `true` 时生效：

**代码清单 10.7 利用容器样式查询变更模块的布局样式**

```css
@layer layout {
  .l-page > aside {
    --sidebar: true; /* 在侧边栏中设置属性 --sidebar 的值 */
  }
}

@layer modules {
  @container style(--sidebar: true) { /* 容器样式仅在 --sidebar 属性为 true 时生效 */
    .race-detail {
      margin-block: 1em;
      display: flex;
    }

    .race-detail > img {
      flex: 0 0 30cqi;
    }

    .race-detail__body > h3 {
      margin-block-start: 0;
    }
  }
}
```

上述代码中，容器样式查询通过设置 Flexbox 布局将侧边栏内的详情卡片改为了横向布局，图片宽度则调整为容器行内尺寸（译注：即容器宽度）的 `30%`；此外还对标题部分的外边距作了微调。这些基于自定义属性 `--sidebar` 的布局样式变更仅在右侧边栏中生效。

#### 10.4.1.1 样式查询相较于其他方法的优势
The benefits of style queries over other approaches

如果不用容器样式查询，通过其他方式也能实现类似的效果，但它们往往需要开发者做出一些必要的取舍（tradeoff）。

例如，可以根据模块在 DOM 树中的位置直接修改对应的样式，比如通过选择器 `.l-page > aside .race-detail` 实现。但正如我在第 9 章中提过的，该方案违背了模块化 CSS 的核心构建原则 —— 此时 `race-detail` 与 `l-page` 严重耦合，对其中一个的样式进行修改很可能需要同步修改另一个的样式。

此外，后续可能还会出现其他上下文，也需要做类似的调整。如果侧边栏出现在另一个单独的页面布局中，之前那个选择器就失效了，只能再加一个类似 `.l-search-results > .sidebar .race-detail` 的选择器，其优先级（selector specificity）也会因此居高不下。

另一个替代方案是引入模块的变体形式（module variant）。例如将侧边栏的 HTML 标记改为 `<div class="race-detail race-detail--horizontal">`，并利用第二个样式类定义一个模块变体，与第 9 章示例中的做法类似。

使用模块变体的解决方案固然没有明显的硬伤，并且在某些特定场景下甚至还可能是最佳方案，例如希望构建 HTML 的开发者能根据需求使用相应的变体，这时就可以考虑这种实现方式；然而有时拿到的需求是希望通过 CSS 而非 HTML 来实现响应式效果，此时样式查询就派上用场了，无需将模块样式与特定的包裹元素耦合到一起。

### 10.4.2 减少重复代码
Reducing code duplication

有时也会遇到这样的情况：只要预设几种情况发生了其中任意一种，就选择性地启用相应的样式。此时，容器样式查询就提供了一个单一的切入口，可以省去书写大量重复代码的麻烦。您可以通过 `JavaScript`、媒体查询或者元素的类名来设置需要的自定义属性；然后让容器样式查询基于该属性对这些预设情况做出响应，让对应的样式规则生效。

上述问题的一个常见应用场景，出现在需要切换明暗模式的网站中。理想情况下，我们可以利用一个 `prefers-color-scheme` 的媒体查询来初始化页面的正常渲染模式；同时也允许网站通过一些由 `JavaScript` 控制的用户输入来自主切换明暗模式。

接下来通过实现一个页面的深色模式来演示样式查询在当中所起到的简化作用。本节演示分三步走。首先通过 `prefers-color-scheme` 媒体查询来设置一个自定义属性 `--color-theme`；然后规定当 `<html>` 元素中存在 `data-theme` 属性，就覆盖该自定义属性的值；接着再添加一些按钮来切换 `data-theme` 的属性值，从而实现页面主题的切换。最后就可以利用样式查询在特定位置将模块切到深色模式。启用页面深色模式的最终效果如图 10.8 所示。

![图 10.8 利用样式查询实现的页面深色模式效果图](https://i-blog.csdnimg.cn/direct/f249346ea84747228cbc1cbee1221bbd.png#pic_center)

**【图 10.8 利用样式查询实现的页面深色模式效果图】**

代码清单 10.8 给出了第一步的示例代码，即根据用户的系统设置或者 HTML 元素是否存在 `data-theme` 属性来决定是否启用页面深色模式。请按照以下代码同步更新本地样式表。

代码清单 10.8 通过自定义属性启用深色模式的样式代码
```css
@layer base {
 :root {
    --color-theme: light; /* 根据系统设置切换浅色主题 */
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --color-theme: dark; /* 根据系统设置切换深色主题 */
    }
  }

  /* 如果用户手动指定了主题，则覆盖系统设置 */
  [data-theme="light"] {
    --color-theme: light;
  }
  [data-theme="dark"] {
    --color-theme: dark;
  }

  /* 将深色主题色应用到页面 */
  @container style(--color-theme: dark) {
    body {
      background-color: #555;
      color: white;
      color-scheme: dark;
    }
  }
}
```

通过这里的容器样式查询，您已经不用重复编写最终的样式了：只要根据媒体查询条件和 HTML 属性的变更情况作出响应，就能启用相应的样式了。要是不用容器样式查询来实现，最终的 CSS 代码估计会像下面这样（切勿添加到本地样式表）：

```css
@layer base {
  body {
    background-color: white;
    color: black;
    color-scheme: light;
  }
  @media (prefers-color-scheme: dark) {
    body {
      background-color: #555;
      color: white;
      color-scheme: dark;
    }
  }
  [data-theme="light"] body {
    background-color: white;
    color: black;
    color-scheme: light;
  }
  [data-theme="dark"] body {
    background-color: #555;
    color: white;
    color-scheme: dark;
  }
}
```

对比代码清单 10.8，为了确保主题颜色准确无误地渲染，平替方案需要在相对简单的前一版样式基础上编写大量的重复代码。此外，当需要根据深色模式对模块进行样式调整时——稍后就会这么干——每次都得重复类似的操作，无疑将使样式表变得越来越复杂。因此大多数开发者都认为这样的平替方案不太可靠。

现如今有了样式查询来解决重复代码的问题，就可以进一步在页面设置按钮，让用户自行切换主题了。代码清单 10.9 给出了对应的 `HTML` 标记和 `JavaScript` 示例脚本。请将它们同步添加到页面的 `<aside>` 标签后、`</body>` 闭标签前。

**代码清单 10.9 允许用户自主切换深色或浅色模式的示例组件代码**

```html
<footer>
  <button id="light-theme">Light mode</button>
  <button id="dark-theme">Dark mode</button>
</footer>
<script type="text/javascript">
  const lightThemeButton = document.getElementById("light-theme");
  const darkThemeButton = document.getElementById("dark-theme");

  lightThemeButton.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "light");
  });
  darkThemeButton.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "dark");
  });
</script>
```

上述代码中的按钮可以在 `<html>` 元素指定适当的 `data-theme` 属性值。结合代码清单 10.8 中的 CSS 样式，可以实现用户自主切换颜色主题。

最后一步，是在启用深色模式时，根据需要对页面上的模块样式进行微调。浅色模式已经能正常工作了，毕竟它是页面构建时的默认主题。

代码清单 10.10 给出了具体的样式变更设置。将这些代码同步到本地样式表。为了方便演示，这里省略了已有的 CSS 样式；但作为最佳实践，应该将当中关于媒体模块的调整代码与页面其他媒体模块的代码放到一起；而与详情卡片相关的调整代码与页面其他详情卡片的代码放到一起。（同时还需要确保这两个样式查询位于浅色模式的样式代码后面，确保它们能按预期方式覆盖掉那些样式）

**代码清单 10.10 页面启用深色模式后相关模块的样式调整代码**

```css
@layer modules {
  @container style(--color-theme: dark) {
    .media {
      background-color: #5f5f5f;
    }
  }

  @container style(--color-theme: dark) {
    .race-detail {
      background-color: #333;
      color: #eee;
    }
  }
}
```

至此，页面深色模式的切换就大功告成了。当页面首次加载时，页面主题会根据操作系统的设置进行初始化；当用户单击浅色模式或深色模式按钮，页面则切换到对应的页面主题。

本例中的部分内容还可以进一步优化，例如通过精心规划自定义属性来进一步调整相关元素的背景色及文字颜色。这些细节处理也可以在样式表的开头根据样式查询一次性变更过来。下一章我将介绍一些利用这种方式管理页面颜色变量的实用策略。

作为进一步的功能增强，还可以添加更多 JavaScript 逻辑，确保相关设置在后续的页面访问中自动加载，比如调用 `localStorage` 相关的 API 接口。不过，为了不超出本书讲述的知识范围，这里就不过多展开 JavaScript 的应用了。

遗憾的是，容器样式查询至今尚未得到广泛支持（译注：其实主流浏览器中目前只剩 `Firefox` 浏览器了），无法用于日常工作。在对页面进行功能方面的小幅增强时可以放心大胆地尝试；若要将其作为页面核心功能使用，最好先关注一下最新的浏览器兼容情况，综合各方面因素后再做打算。

> **容器样式查询展望**
>
> 在未来，浏览器可能会支持基于 CSS 值（CSS values）的容器样式查询，而不仅限于自定义属性。起初，这一概念是包含了这个想法的 —— 例如，可以基于字体颜色来查询，写作 `@container style(color: black)`。但最终的规范将适用范围缩小至仅限自定义属性，似乎这样就已经能满足绝大多数的实际需求；但后续不排除将 CSS 值重新纳入语法规范中，相关进展值得进一步关注。

容器尺寸查询为响应式设计带来了期待已久的重大改进，而容器样式查询则有望在此基础上实现相关功能的进一步提升。这两个新特性可谓近年来 CSS 语言领域里极为重要的增强功能。

在实际应用这些功能时，请务必考虑浏览器的兼容情况。容器尺寸查询目前仍是前端开发非常新的特性功能，在某些浏览器中仍处于有待支持状态。如果对旧版浏览器中展示的备选样式还算满意的话，可以考虑通过 CSS 的渐进式增强来启用这些新写法；但要注意尽量在 `@container` 规则外书写样式，以便更好地定义这些备选样式。

## 10.5 本章小结 Summary

* 容器尺寸查询可以基于容器尺寸的变化响应不同的样式，这往往比传统的媒体查询更加实用。
* 给元素指定容器类型就能建立一个容器。再利用 `@container` 规则查询容器尺寸，就能对其子元素设置相应的样式。
* 对于设置了 `inline-size` 或 `size` 类型的容器，其内部元素可能不会影响对应维度上的尺寸大小。
* 容器相对单位通过目标元素的实际尺寸与所在容器的行内或块级尺寸的百分比来丈量大小，概念上与视口相对单位非常类似。
* 在容器查询中，`style()` 函数可以基于容器中的自定义属性值来选择性地启用相关样式。这是一个当前浏览器正在逐步提供支持的全新功能特性。

1. 详见随书源码示例页 `ch10/listing-10.06.html` 
