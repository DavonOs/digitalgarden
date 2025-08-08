---
{"dg-publish":true,"dg-permalink":"books/36924049/appendix-B-preprocessors","permalink":"/books/36924049/appendix-B-preprocessors/","metatags":{"description":"","og:site_name":"DavonOs","og:title":"附录B：预处理器","og:type":"article","og:url":"https://zuji.eu.org/books/36924049/appendix-B-preprocessors","og:image":null,"og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"tags":["program/css"],"dgShowInlineTitle":true}
---


对现代 CSS 工作流而言，预处理器的使用是必不可少的一环。预处理器不仅有助于提高代码书写效率，而且有利于基础代码的维护。例如，我们有时候只需要写几行代码，就可以在整个样式表中反复使用。

很多 CSS 特性功能，例如变量和嵌套语法，起初都是在预处理器中率先实现的，随后才被正式引入 CSS。在很多方面，预处理器都充当了试验场的重要角色，以供开发者们检验这些新功能的实用性；而 W3C 协会最终会将部分特性添加到 CSS 语言中。也正因为很多特性都得以在 CSS 中实现，预处理器的必要性也大不如前了；然而它们依旧很受欢迎，因此在考虑是否将其集成到项目中时，仍具有一定的价值。

预处理器的工作原理是把我们书写的源码文件转译为输出文件，即常规 CSS 样式表。大部分情况下，源码文件看上去和常规 CSS 差不多，只是增加了一些额外的功能。使用预处理器变量的一个简单示例如下：

```
$brand-blue: #0086b3;

a:link {
  color: $brand-blue;
}

.page-heading {
  font-size: 1.6rem;
  color: $brand-blue;
}
```

上述代码片段定义了一个名为 $brand-blue 的变量，并在样式表后面的两个不同位置进行调用。使用 Sass 预处理器运行的时候，整个样式表的变量都被替换了，得到以下 CSS 代码段：

```
a:link {
  color: #0086b3;
}

.page-heading {
  font-size: 1.6rem;
  color: #0086b3;
}
```

需要注意的是，对浏览器而言，由于最终输出的是常规 CSS，所以预处理器不会向 CSS 语言本身添加任何新特性。但对我们开发者而言，预处理器确实提供了许多便利。

在前面的例子中，通过变量来表示颜色值，就能多次重复使用它，而无需每次复制粘贴需要的十六进制编码。在生成输出 CSS 文件的过程中，预处理器帮我们完成了目标值的拷贝工作。这样就能实现在一个地方修改变量的值，整个样式表都会同步进行更新。

预处理器有很多种，其中最流行的两个分别是 Sass（http://sass-lang.com/）和 Less（http://lesscss.org/）。因为 Sass 是最为流行的预处理器，因此本附录也将基于 Sass 进行介绍。Less 与 Sass 类型，主要在一些语法细节上存在差异。例如，Sass 使用 $ 来表示变量（如 $brand-blue），而 Less 则使用 @ 符号（如 @brand-blue）。本附录中提到的所有 Sass 特性在 Less 中均支持。您也可以浏览 Less 的官方文档了解其语法上的差异。

B.1 Sass 预处理器（Sass）
Sass 提供了多种安装方式，具体根据您熟悉的语言或打包工具进行选择即可。如果熟悉 JavaScript 和 Node 环境，则可以通过 npm 包管理工具来进行安装。

如果本地还没安装 Node.js，可以浏览 Node.js 官网 https://nodejs.org/ 并根据提示下载安装。本节会给出必要的操作命令，如果想对 npm 有更多了解，或者遇到问题需要帮助，可以访问 npm 文档：https://docs.npmjs.com/about-npm。

B.1.1 Sass 的安装 Installing Sass
要安装 Sass，先要在命令终端新建一个项目目录并进入该目录，然后依次运行以下两条命令：

npm init -y —— 初始化一个新的 npm 项目，并创建一个 package.json 文件。
npm install --save-dev sass —— 安装 Sass 包，并将其作为开发依赖写入 package.json。
接着需要确认使用哪种语法。Sass 提供了两种语法：Sass 和 SCSS。它们的语言特性一样，但 Sass 语法去掉了所有的大括号和分号，并严格使用缩进来表示代码结构，例如：

body
  font-family: Helvetica, sans-serif
  color: black
AI写代码
scss
1
2
3
该写法类似于 Ruby 和 Python 这样的编程语言，空格是有具体含义的。而 SCSS 语法则使用大括号和分号，因此看起来更像常规的 CSS，例如：

body {
  font-family: Helvetica, sans-serif;
  color: black;
}
AI写代码
css
1
2
3
4
SCSS 相对来讲更常用些。如果拿不准，建议选择 SCSS，这也是本附录中使用的语法。

说明

SCSS 文件扩展名为 .scss，而 Sass 文件的扩展名为 .sass。

B.1.2 Sass 的运行 Running Sass
完成 Sass 的安装后，就可以创建样式表了。先在项目目录新建两个子文件夹，文件名分别为 sass 和 build。我们会把源文件放到 sass 文件夹，然后利用 Sass 将其转成 CSS 文件并放入 build 文件夹。接着修改 package.json 文件，按照代码清单 B.1 同步更新 scripts 入口：

代码清单 B.1 为 package.json 添加一条 sass 命令

"scripts": {
  "sass": "sass sass/index.scss build/styles.css"
},
AI写代码
json
1
2
3
这样就定义了一条 sass 命令。运行时该命令会把 sass/index.scss 文件编译为 build/styles.css 文件。当前项目中还不存在 sass/index.scss 文件，先手动创建它，我们的 Sass 源码就写到这里面。然后运行命令 npm run sass，执行后就会生成（或者重新生成）build/styles.css 样式表文件。

提示

在 Webpack 或 Vite 这些常见的任务运行工具中，有一些现成的插件可供加载，例如 sass-loader。若想启用插件，也可以找一款支持 Sass 或者 Less 的插件集成到自己熟悉的工作流中。

B.1.3 理解 Sass 的核心特性 Understanding important Sass features
前面已经演示过 Sass 变量的用法了（即 $brand-blue）。将代码清单 B.2 中的源码添加到 index.scss 文件，看看 Sass 是如何编译的。

代码清单 B.2 关于 Sass 变量的示例代码

$brand-blue: #0086b3; /* 定义变量 */

a:link {
  color: $brand-blue; /* 使用变量 */
}
.page-heading {
  font-size: 1.6rem;
  color: $brand-blue; /* 使用变量 */
}
AI写代码
scss
1
2
3
4
5
6
7
8
9
运行命令 npm run sass，就能将上述代码编译为对应的 CSS。其输出文件（即 build/styles.css）如下所示：

a:link {
  color: #0086b3;
}

.page-heading {
  font-size: 1.6rem;
  color: #0086b3;
}
/*# sourceMappingURL=styles.css.map */
AI写代码
css
1
2
3
4
5
6
7
8
9
可以看到，变量已经被替换为十六进制颜色值，可供浏览器直接运行。此外 Sass 还生成了一个源码映射文件，并在 CSS 样式表底部通过一行注释来标明该 源码映射（source map） 的路径。

源码映射的定义


源码映射（source map） 是一个特殊的文件；计算机可利用它来追踪每一行生成的代码（本例即为 CSS），并关联到生成该行代码的源代码位置（本例即 Sass 源代码）。该映射文件可以在一些调试工具中使用，包括浏览器的开发者工具（DevTools）。

1 行内计算 Inline computation
Sass 同样支持使用 +、-、*、/ 及 %（求模运算）。这样就能从某个初始值算得多个值：

代码清单 B.3 Sass 行内计算示例代码

$padding-left: 3em;

.note-author {
  left-padding: $padding-left; /* 使用变量 */
  font-weight: bold;
}

.note-body {
  left-padding: $padding-left * 2; /* 将变量乘以 2 */
}
AI写代码
scss
1
2
3
4
5
6
7
8
9
10
运行 npm run sass 编译上述源码，会得到一下生成结果：

.note-author {
  left-padding: 3em;
  font-weight: bold;
}
.note-body {
  left-padding: 6em;
}
AI写代码
css
1
2
3
4
5
6
7
该特性在两个值相关但不同的时候特别有用。在本例中，无论 $padding-left 的值是多少，note-body 的左侧内边距始终为 note-author 的两倍。该功能也启发了 CSS 引入 calc() 函数。

2 嵌套选择器 Nested selectors
Sass 允许在代码块内嵌套选择器。这样就能通过嵌套将有关联的代码写到同一个代码块中，如代码清单 B.4 所示。

代码清单 B.4 嵌套选择器示例

.site-nav {
  display: flex;

  > li { /* 嵌套选择器 */
    margin-top: 0;

    &.is-active { /* & 符号用于指代外层选择器 */
      display: block;
    }
  }
}
AI写代码
css
1
2
3
4
5
6
7
8
9
10
11
Sass 会把外层声明块的选择器与嵌套选择器进行合并。编译上述示例代码得将到以下结果：

.site-nav {
  display: flex;
}

.site-nav > li {
  margin-top: 0;
}

.site-nav > li.is-active {
  font-weight: bold;
}
AI写代码
css
1
2
3
4
5
6
7
8
9
10
11
默认情况下，外层的 .site-nav 选择器会自动添加到编译代码的每个选择器前面，拼接的位置还会插入一个空格。要修改默认配置，可以使用 & 符号表示外层选择器将要插入的位置。

警告

嵌套语法会升高最终生成的选择器优先级。使用嵌套时务必当心，避免嵌套层级过深。

该写法与 CSS 中的嵌套语法非常类似，但也存在一些细微差别，例如，二者对选择器优先级的影响各不相同。具体情况详见本书第 8 章。另外，在启用 Sass 对 CSS 做预处理时，无法正常使用 CSS 的嵌套语法；Sass 会始终对存在嵌套的样式作扁平化处理（a flat structure）。

此外，还可以在声明块内嵌套媒体查询，这样就能避免反复书写相同的选择器，如代码清单 B.5 所示。

代码清单 B.5 嵌套媒体查询

html {
  font-size: 1rem;
  @media (min-width: 45em) { /* 声明块内的媒体查询 */
    font-size: 1.25rem;
  }
}
AI写代码
css
1
2
3
4
5
6
上述代码的编译结果如下：

html {
  font-size: 1rem;
}
@media (min-width: 45em) {
  html {
    font-size: 1.25rem;
  }
}
AI写代码
css
1
2
3
4
5
6
7
8
这样一来，如果要修改选择器，就不必再到媒体查询中修改对应的选择器了。

3 局部文件（@use） Partials (@use)
局部文件可以将样式分割成多个独立的文件，Sass 会把这些文件拼接在一起生成一个文件。利用局部文件可以按照自己的想法随意组织文件，但最终只提供给浏览器一个文件，从而减少网络请求的数量。

Sass 局部文件的命名按惯例常以一个下划线开头。在项目中创建一个新的源码文件并命名为 sass/_button.scss。然后将代码清单 B.6 中的样式添加到该文件中：

代码清单 B.6 按钮的局部文件示例样式代码

.button {
  padding: 1em 1.25em;
  background-color: #265559;
  color: #333;
}
AI写代码
css
1
2
3
4
5
然后在 index.scss 中使用 @use 规则引入上述局部样式表，写法如代码清单 B.7 所示。该代码片段须在样式表的开头位置添加；@use 只能在其他样式规则前引用。

代码清单 B.7 引入局部文件的写法

@use "button"; /* 注意局部文件的路径，没有写下划线 */
AI写代码
css
1
运行 Sass 时，局部文件会被编译，然后插入 @use 规则指定的位置。

我认为这是预处理器最重要的特性。随着样式表变得越来越大，滚动上千行代码去定位样式表中相关的部分会变得极其困难。有了这个特性就能将样式表拆分为小巧又不实逻辑完整性的一个个模块，并且还不会造成网络性能下降。更多细节介绍，详见本书第 9 章补充内容【预处理器和模块化 CSS】（译注：具体在 9.2 节）。

@use 规则还具有更为复杂的功能，包括命名空间和只导入局部文件的特定部分等等。更多详情，请参考 Sass 官方在线文档：https://sass-lang.com/guide/#modules。

4 混入 Mixins
混入（mixin) 是一小段 CSS 代码块，可以在样式表的任意位置复用。如果遇到某段特定文字样式需要在多个地方使用，或者作为可复用的通用样式，使用混入就非常合适。

混入通过 @mixin 规则来定义，并通过 @include 规则来完成调用。以下代码给出了混入的一个简单示例：

代码清单 B.8 Sass 中的混入语法示例

@mixin box { /* 定义一个名为 box 的混入 */
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.1);
}

.main-tile { /* 调用该混入 */
  @include box;
  color: #333;
}
AI写代码
css
1
2
3
4
5
6
7
8
9
预处理器会提取 mixin 中的代码，并将其复制到 @include 规则所在的位置。最终编译生成的代码如下：

.main-tile {
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  color: #333;
}
AI写代码
css
1
2
3
4
5
注意，最终编译生成的样式代码并没有 box 混入的身影。Sass 只是将混入的内容添加到了样式表调用它的位置。

您还可以定义带参数的混入，就像平时编程使用的函数那样。代码清单 B.9 给出了一个警示框的 mixin 混入示例。其中有两个参数 $color 和 $bg-color，它们都是在混入的作用域内定义的变量。

代码清单 B.9 带参数的 mixin 混入

@mixin alert-variant($color, $bg-color) { /* 定义一个包含两个参数的混入 */
  padding: 0.3em 0.5em;
  /* 参数变量可在混入内使用 */
  border: 1px solid $color;
  color: $color;
  background-color: $bg-color;
}
.alert-info {
  @include alert-variant(blue, lightblue) /* 将值传入 mixin 混入 */
}
.alert-danger {
  @include alert-variant(red, pink) /* 将值传入 mixin 混入 */
}
AI写代码
css
1
2
3
4
5
6
7
8
9
10
11
12
13
每次调用混入，都可以传递不同的值。这些值会相应赋给两个变量。上述代码片段最终输出的 CSS 如下：

.alert-info {
  padding: 0.3em 0.5em;
  border: 1px solid blue;
  color: blue;
  background-color: lightblue;
}
.alert-danger {
  padding: 0.3em 0.5em;
  border: 1px solid red;
  color: red;
  background-color: pink;
}
AI写代码
css
1
2
3
4
5
6
7
8
9
10
11
12
这样，混入又一次实现了同一段代码的复用，但在这种情况下，最终生成了两个不同的版本。生成的代码之所以不同，是因为传入的参数值本就不同。

5 继承 Extend
Sass 还支持 @extend 规则。它和 mixin 类似，只是编译方式有所不同。对于继承，Sass 不会多次复制相同的样式声明，而是把选择器组合在一起，这样它们就会包含同样的规则集。还是通过一个示例来说明最为合适。在代码清单 B.10 中，%message 包含的样式规则继承到了另两个规则集中。

代码清单 B.10 基础样式类的继承

%message {
  padding: 0.3em 0.5em;
  border-radius: 0.5em;
}

.message-info {
  @extend %message; /* 共享 .message 类中的样式 */
  color: blue;
  background-color: lightblue;
}

.message-danger {
  @extend %message; /* 共享 .message 类中的样式 */
  color: red;
  background-color: pink;
}
AI写代码
css
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
上述代码编译后的结果如下：

.message-info,
.message-danger {
  padding: 0.3em 0.5em;
  border-radius: 0.5em;
}
.message-info {
  color: blue;
  background-color: lightblue;
}
.message-danger {
  color: red;
  background-color: pink;
}
AI写代码
css
1
2
3
4
5
6
7
8
9
10
11
12
13
注意，Sass 将 .message-info 和 .messag-danger 选择器复制到了第一个规则集上。

警告

@extend 不同于 mixin，它会把选择器移动到样式表中更靠前的位置。这意味着我们书写的源码的最终顺序可能跟预期不完全相同，这样可能会影响样式叠加的效果。

@extend 的输出长度通常会比 mixin 短一些。这是显而易见的，也很容易想到 @extend 更好一些，因为它最终输出的样式表更轻量（因此网络传输速度更快）。但同时也要知道，mixin 产生的大量重复代码，可以通过 gzip 得到很好地压缩。只要服务器使用 gzip 压缩处理过所有的网络流量（也理应这样处理），最终增加的重复代码会比预期小很多。

但也不要为了性能优化就完全放弃 mixin、只用 @extend。要综合考虑代码的组织方式，看看 mixin 和 extend 谁更合适。通常情况下，您可能更倾向于用 mixin。

6 颜色的处理 Color manipulation
Sass 还有个不错的特性，它提供了一系列处理颜色的函数。如果需要两个同类型的颜色（例如，同一种绿色下的深浅两个版本），就可以使用代码清单 B.11 中的函数来生成。

代码清单 B.11 Sass 颜色函数的用法示例

$green: #63a35c;

$green-dark: darken($green, 10%); /* 加深 10% */
$green-light: lighten($green, 10%); /* 淡化 10% */

/* 饱和度调整 */
$green-vivid: saturate($green, 20%);
$green-dull: desaturate($green, 20%);

/* 在色相环上旋转颜色 */
$purple: adjust-hue($green, 180deg);
$yellow: adjust-hue($green, -70deg);
AI写代码
css
1
2
3
4
5
6
7
8
9
10
11
12
通过这些函数，您就能修改颜色中的某个变量，并且同步修改与之相关联的其他颜色值。这样就不必把所有颜色都存入变量中，而是在需要的属性（property）上直接修改，例如：

.page-header {
  color: $green;
  background-color: lighten($green, 50%);
}
AI写代码
css
1
2
3
4
如果需要实现更多高级操作，还有一些其他的颜色函数，可以参考这篇文章：A visual guide to Sass & Compass Color Functions。注意，CSS 颜色操作函数通常更加强大，并且已经在浏览器中获得了支持（详见本书第 11 章），但使用 Sass 提供的版本可以不同考虑浏览器兼容问题。

7 循环 Loops
针对某个值使用循环，可以生成一系列细小的变化。在第 16 章中介绍了几个 :nth-child() 选择器来匹配连续的菜单元素，然后为每个元素添加不同的 transition-delay（详见代码清单 16.11）。这类代码可以更轻松地通过 Sass 循环来实现，需要使用 @for 规则，如代码清单 B.12 所示。

代码清单 B.12 迭代一组取值

@for $index from 2 to 5 { /* 由 2 到 4 遍历 $index 的值 */
  .nav-links > li:nth-child(#{$index}) { /* 在选择器中使用变量 */
    transition-delay: (0.1s * $index) – 0.1s; /* 令变量乘以某时间值 */
  }
}
AI写代码
css
1
2
3
4
5
这样就把相同的代码块输出了好几遍，每次变量 $index 的值都会增加。我们在选择器中使用了该变量，并通过 #{} 的写法进行转义。最终编译后的 CSS 代码如下：

.nav-links > li:nth-child(2) {
  transition-delay: 0.1s;
}
.nav-links > li:nth-child(3) {
  transition-delay: 0.2s;
}
.nav-links > li:nth-child(4) {
  transition-delay: 0.3s;
}
AI写代码
css
1
2
3
4
5
6
7
8
9
在原生 CSS 中，修改这样的代码往往较为繁琐。比如要将 transition-delay 属性改为每次增加 0.15 秒，就得分别将每个声明手动改为 0.15 秒、0.3 秒和 0.45 秒；若要再添加一组重复动作，就得手动复制代码然后依次修改所有值。而现在有了 Sass 循环，只需编辑数学公式或者修改迭代次数就能轻松搞定。

8 它还是 CSS（It’s all CSS ）
预处理器不会修改 CSS 的基本原理。我在整本书中讲到的内容依然全部适用。之所有没有贯穿全书使用 Sass，是因为我希望书中讲解的所有话题都是这门语言本身自带的知识点，而不是某个特定的预处理器。即便要使用 Sass，也依然需要深入理解 CSS；但 Sass（或者 Less）可以完成原生 CSS 中绝大部分比较费时费力的苦差事。

B.2 PostCSS
PostCSS（https://postcss.org/）是另一种类型的预处理器。它同样需要编译源文件并输出一个处理过的 CSS 文件，这一点与 Sass 或 Less 类似；但 PostCSS 是完全依赖插件工作的。如果没有安装相关插件（plugins），输出文件就是没有任何变化的源文件副本。

您能从 PostCSS 实现什么功能，完全取决于您使用哪些插件。您可以使用多个插件，使其具备和 Sass 一样的功能；也可以只用一两个插件，并同时启用 Sass 和 Less 运行代码。如有必要，甚至可以用 JavaScript 编写自己的插件。

这当中有一点很关键：PostCSS 运行插件需要考虑顺序。如果配置了多个插件，它们的执行顺序有时候对最终结果影响很大，可能需要反复试验才能让 PostCSS 实现预期的工作方式。具体配置方法可以参考 PostCSS 文档。

B.2.1 使用前缀自动补全工具 Autoprefixer
PostCSS 中最重要的插件可能就是 Autoprefixer 了。该插件可以将相关的所有浏览器前缀都添加到 CSS 中。想要了解更多有关浏览器前缀的信息，可以参考本书第 14 章介绍的扩展知识 “浏览器前缀”（“Vendor prefixes”）。

如果您的源代码如下所示：

.example {
  backdrop-filter: blur(5px);
  mask-image: url(star-mask.png);
}
AI写代码
css
1
2
3
4
Autoprefixer 就会添加额外的样式声明，为旧版浏览器提供带前缀的回退写法，输出以下代码：

.example {
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  -webkit-mask-image: url(images/star-mask.png);
  mask-image: url(images/star-mask.png);
}
AI写代码
css
1
2
3
4
5
6
如果要手动补全所有的浏览器前缀，既耗时又容易出错。同时源码中会增加大量的无意义代码，因为不需要过多关注这些带浏览器前缀的 CSS 如何运行。

您可以为 Autoprefixer 配置想要支持的浏览器列表，这样它就能根据需要自动添加浏览器前缀来支持这些浏览器。例如，使用数组 ["last 3"] 来进行配置，就可以确保您的代码与主流浏览器的最新三个版本兼容（如果可行的话）。Autoprefixer 使用 Can I Use 网站（caniuse.com）数据库中的最新数据来确定何时需要添加前缀。

B.2.2 使用 cssnano
cssnano（https://cssnano.github.io/cssnano/）是一款基于 PostCSS 的压缩工具。压缩工具（minifier） 可以从代码中剥离所有无关的空格，使代码体积尽可能变小，但同时依然保持相同的语法含义。

注意

压缩工具不能代替 gzip 压缩，gzip 压缩功能应当由服务器提供。一般来说，最好是对 CSS 同时使用体积压缩和 gzip 压缩，这样可以加快网络加载时间。

CSS 压缩工具有很多种，但将其作为 PostCSS 构建过程中的一部分而非单独的步骤，显然更有意义。cssnano 就能满足这一需求。

B.3 Lightning CSS
Lightning CSS（https://lightningcss.dev/）是一款相对较新的 CSS 工具，它包含了前面介绍的许多功能，并将所有功能集成到一个工具中，例如：预处理器相关的便捷功能、自动补全浏览器前缀的功能以及压缩功能。此外，Lightning CSS 还为许多尚未得到浏览器广泛支持的 CSS 新特性提供了预处理支持，例如样式嵌套、宽色域颜色函数支持、以及支持小于（<）和大于（>）符号写法的新版媒体查询语法等。

最重要的是，Lightning CSS 具有高度的可配置性，因此当您感觉原生浏览器的兼容情况足够可靠时，大可禁用这些功能而无需经过转义环节。强烈推荐您查阅 Lightning CSS 相关文档，获取现有功能完整列表。

此外，Lightning CSS 还可以帮你压缩 CSS，并根据您的配置添加浏览器相应前缀。要是源代码中存在不必要或者过时的浏览器前缀，Lightning CSS 甚至还能将其删除。它还支持通过 @import 规则引入局部文件（partials），与 Sass 类似。

CSS 在过去几年中取得了长足的进步，今后这些工具可能也会过气，但我认为这一天还没那么快到来。在开始一个项目时，认真考虑您的工具集至关重要。本附录列出的所有预处理工具都得到了业内普遍认可。花时间去了解每个工具所具备的功能是很有必要的，这样才知道哪款工具（如果存在的话）最契合您的需求。