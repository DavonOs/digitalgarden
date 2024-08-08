---
{"dg-publish":true,"dg-permalink":"hugo_mini","permalink":"/hugo_mini/","dgPassFrontmatter":true,"noteIcon":""}
---



这个迷你课程将教你如何使用一个叫Hugo的简单静态网站生成器从头开始建立你自己的博客网站--免费的!。

<!--more-->

>Hugo，世界上最快的网站建设框架。

## 简介

了解我们要建造的东西，以及如何设置你的电脑以开始开发。

### 欢迎

课程介绍和解释我们要建造的东西。

---

欢迎来到这个Hugo使用系列教程。

它是为绝对的初学者准备的，会尽可能为你详细地介绍一切。目标是让你了解如何创建你自己的第一个Hugo博客网站，掌握构建自己的 Hugo 网站的基础知识，并在结束后尽可能地定制它。

#### 什么是Hugo？

Hugo 是非常简单的一个静态网站生成器，因为它是以单一的二进制文件分发的--这是Go程序的众多好处之一。它需要一个源文件目录，并在其上运行一个构建过程，以生成一个纯粹的静态网站。

Hugo 的独特之处在于其无与伦比的构建速度和围绕布局(layouts)、分类(taxonomies)和内容(content)的严格约定。它是一个静态网站生成器，为Let's Encrypt，1Password，Linode和 digital.gov 等知名网站提供支持。

#### 我们将学习哪些技术？

* Hugo

Hugo是本课程中最重要的部分。它是一个生成实际页面的工具，当人们访问你的网站时，他们会看到这些页面！我们将讨论Hugo的细节，学习如何使用Hugo的基础知识。如果你有一个问题没有得到解决，请查看他们的文档，它有你需要知道的一切。

* Markdown

Markdown是我们用来写博文的语言。它是一种非常简约和容易学习的语言，专门为内容作者设计。

* HTML

HTML将被用于我们的模板。这是Hugo用来生成我们文章和页面布局的代码。

* CSS

![css.png](https://hugo-mini-course.netlify.app/img/css.png)

CSS是我们用来使我们的网站漂亮的语言。如果没有CSS，大多数网页看起来就像90年代初的东西。

#### 我需要什么？

你最起码需要一台运行Mac、Linux或Windows的电脑--以及一些互联网！

我们也强烈建议你下载一个专门用于编写代码的文本编辑器。我们推荐VS Code，一个来自微软的非常流行的文本编辑器--当然使用任何代码文本编辑器也可以工作。

### 安装 Installation

在我们开始之前，让我们在电脑上安装一些工具，这些工具将帮助我们建立我们的网站。

Hugo CLI

首先，我们将安装Hugo命令行界面（CLI）。Hugo CLI将帮助我们生成我们的项目文件夹，并为我们提供一个开发服务器，这样我们就可以在没有任何真正的服务器的情况下在我们的网站上工作。

MacOS|Linux

如果你使用macOS或Linux，那么Homebrew是安装Hugo最简单的方法。一旦你安装了Homebrew，就可以运行：

```cmd
brew install hugo
```

如果你并没有安装Homebrew。前往[Hugo发布页面](https://github.com/gohugoio/hugo/releases)，找到hugo_extended_xxxx_Linux-64bit.tar.gz
文件。x代表的是版本号，会有所不同。点击该链接，下载压缩文件，并将压缩文件解压到你希望项目运行的文件夹中。

打开一个新的终端，写下 `hugo version` 以验证该命令是否有效。你应该看到打印出来的版本。

如果你看到应用程序不能被打开，因为它来自一个不明身份的开发者，请到系统偏好->安全和隐私->常规。你应该看到一个选项，点击Hugo应用程序旁边的 "允许"。

Windows

与其他操作系统相比，Windows有一些额外的步骤，但在[Windows的官方安装页面](https://gohugo.io/getting-started/installing/#windows)上有明确的记录。按照这些说明进行，完成后再回来看看。

如果你是在Windows上，那么Chocolatey软件包管理器就是你的选择，运行：

```cmd
choco install hugo-extended -confirm
```

如果没有安装，同样可以前往[Hugo发布页面](https://github.com/gohugoio/hugo/releases)，找到hugo_extended_xxxx_windows-64bit.tar.gz 下载压缩文件并解压到你希望运行的文件夹中。

任何用于编辑代码的文本编辑器都是好的，但建议使用VSCode，因为它有一个广泛的扩展库，使开发更快。

在这里下载[VSCode](https://code.visualstudio.com/download)，适用于任何操作系统。

让我们检查一下，确保一切都按计划进行。在您的终端中检查 Hugo 版本：

```cmd
hugo version
```

如果打印出一个版本号，您就可以开始了！

如果没有，请查阅 [Hugo 文档](https://gohugo.io/getting-started/installing/) 或访问 [Hugo 社区论坛](https://gohugo.io/getting-started/installing/) 。

### 设置您的 Hugo 网站

现在我们的工具已经安装完毕并开始工作，我们可以开始我们的项目。

---

#### 生成站点

打开你的终端程序（或Windows上的命令行程序），导航到你希望你的 Hugo 项目所在的目录并运行以下命令：

```cmd
cd hugo
hugo new site my-blog
Congratulations! Your new Hugo site is created in X:\Hugo\my-blog.

Just a few more steps and you're ready to go:

1. Download a theme into the same-named folder.
   Choose a theme from https://themes.gohugo.io/ or
   create your own with the "hugo new theme <THEMENAME>" command.
2. Perhaps you want to add some content. You can add single files
   with "hugo new <SECTIONNAME>\<FILENAME>.<FORMAT>".
3. Start the built-in live server via "hugo server".

Visit https://gohugo.io/ for quickstart guide and full documentation.
```

一个名为`my-blog`的新文件夹将在你的根目录文件夹中生成，这是Hugo为你的网站建立的脚手架。

在你最喜欢的代码编辑器中打开你的`my-blog`文件夹，浏览一下内容，你应该能看到以下目录：

```cmd
my-blog
├── archetypes
|   └── default.md
├── content
├── data
├── layouts
├── static
├── themes
└── config.toml
```

这些目录在这个阶段可能对你没有任何意义，如果你现在不了解它们，也不要着急。我们会在本教程的过程中使用它们，这将建立起熟悉感。

* __archetypes__ - 定义了新内容的默认元数据（也称为正面内容）。对于这个系列，你不需要担心原型问题。

* __config.toml__ - 为你即将蓬勃发展的Hugo网站编写配置文件。

* __content__ 你的页面内容（通常是markdown）就放在这里。

* __data__ - csv、json、xml或toml文件，可以像只读数据库一样被访问。

* __layouts__ - 为你的内容提供页面模板。

* __data__ - 你所有不需要处理的资源（通常是图像、字体、pdf等）。

* __theme__ - 用一个现有的主题来启动你的Hugo网站。(我们不会在这个系列中使用主题）。

#### 启动开发服务器

现在我们将启动我们的开发服务器。开发服务器是一个在你的计算机上运行的本地服务器，严格用于开发目的。它将你的程序托管在一个端口上，你可以在浏览器中访问该网站。

在你站点根目录中打开你的终端，运行这个命令：

```cmd
hugo server
```

这意味着在1313端口启动一个本地服务器，你可以通过你的网络浏览器进入<http://localhost:1313/>（默认地址）访问该网站。你应该看到一个空白的白色页面，因为我们还没有添加任何东西。

每次你对你的代码进行修改时，这个服务器会自动重新启动，你的网络浏览器也会重新加载!

### Markdown简介

学习Markdown的基础知识，这是一种用于编写内容的语言。

在我们开始开发我们新的花哨的网站之前。我们要学习一下Markdown。

Markdown是一种用于编写内容的语言。内容可以是任何东西，比如博客文章、食谱、书籍、文档等等。Markdown然后被转换为像HTML一样的代码，可以被浏览器理解，比如Chrome或Firefox在屏幕上显示。

它非常简单易学，它使我们能够一致和轻松地格式化我们的内容，这意味着所有的页面标题和字幕看起来都一样，所有的引号和段落看起来都一样，所有的列表看起来都一样。

Markdown的部分放在其他教程里

## Templating

HTML模板是Hugo的核心，在本节中，我们将介绍启动网站所需的基础知识。

### HTML Introuduction HTML简介

学习如何用元素和属性从头开始编写HTML。

HTML模板是Hugo的核心，在我们开始接触Hugo模板之前，我们将先对HTML做一个简单的概述，它是所有模板的基础语言。

#### 什么是HTML？

HTML是用来描述网页布局的语言。它允许我们把按钮、链接、文本、图像和视频放到一个页面中。

要开始尝试使用HTML和本概述中所涉及的内容，请在你的桌面上创建一个名为index.html的文件，并在VSCode中打开该文件，同时在你的网络浏览器中打开该文件。

#### Elements（元素）

HTML有许多元素，它们描述了我们想在页面上显示的内容。例如，有一个段落元素，它看起来像这样：

```html
<p>Your sentence here</p>
```

继续写在你创建的index.html文件中。保存该文件，然后在你的网络浏览器中打开它，看看你的段落。

我们将在下面讨论主要的元素，并随时在你的index.html文件中测试每一个元素。记得每次修改后都要保存，并重新加载你的浏览器窗口以查看你的修改。

* __Headings（标题）__

标题用于在你的网页上创建更大的文本标题。例如，在这个页面上，有些文字比较大，因为它是下面内容的标题。要创建一个标题，你需要写：

```html
<h1>Heading 1</h1>
```

`<h1>`元素创建了最大的标题，但你可以一直到`<h6>`的子标题。

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

h2将比h1略小，h3比h2略小，以此类推......

* __Paragraph（段落）__

段落元素用于显示没有格式化的基本文本。

```html
<p>I am a paragraph</p>
```

* __Images（图像）__

图像元素用于显示图像。

```html
<img src="/path/to/my/image.jpg" />
```

`img`元素必须有一个`src`属性，（我们将在下面讨论属性），但`src`属性代表`source`，它必须是你电脑上的图像文件的路径或互联网上图像的网址。

来吧，在你的电脑上保存一张图片，放在你的`index.html`旁边，并尝试在屏幕上显示它。

图片也可以有一个`alt`属性，即`alternate`的缩写，这些属性用于在图片无法正常加载时显示文本，或者用于使用语音辅助技术的人在浏览网站时显示文本，因此alt文本将被大声读给用户听。

```html
<img src="bird.jpg" alt="bird flying through the sky" />
```

* __Lists（列表）__

列表是用来显示一组项目的。它们看起来像这样。

* 我是一个列表项
* 我是一个列表项
* 我是一个列表项

或者像这样:

1. 我是第一
2. 我是第二
3. 我是第三

第一个列表可以这样做。

```html
<ul>
  <li>I am a list item</li>
  <li>I am a list item</li>
  <li>I am a list item</li>
</ul>
```

`<ul>`代表无序列表，当顺序不重要时，应该使用它。如果顺序很重要，你可以用`<ol>`来表示有序列表。

```html
<ol>
  <li>I am first</li>
  <li>I am second</li>
  <li>I am third</li>
</ol>
```

* __Links（链接）__

链接在你的页面上创建一个可点击的链接。这个链接可以把用户带到你想要的任何地方，如另一个网站或你网站上的另一个页面，甚至只是当前页面的另一个滚动位置。

```html
<a href="https://google.com">I am a link to Google</a>
```

`<a>`元素代表锚，href属性是目标。

你也可以通过包含一个目标属性，使新链接在浏览器中自动打开一个新标签。

```html
<a href="https://google.com" target="_blank">Click to open in a new tab</a>
```

你也可以让链接打开用户默认的邮件应用程序，向特定地址发送电子邮件。

```html
<a href="mailto:test@gmail.com">Send me an email</a>
```

* __Divs（分区）__

Divs用于将其他元素组合在一起。这使得拥有数千种元素的大型网页能够被合理地组织起来。

除了在Divs之间添加新行之外，Divs不提供格式化。

```html
<div>
  <h1>Welcome</h1>
  <p>My name is Bob</p>
  <a href="https://youtube.com">Check out my youtube channel!</a>
</div>
```

#### Attributes（属性）

属性是用来向元素传递额外信息的。我们在上面已经看到了很多例子，比如src和href，但还有几十个属性可以使用，每个元素都可以有自己的特定属性。

要了解所有可用的元素和属性，请查看[w3schools html](https://www.w3schools.com/html/default.asp)教程以获得更多信息。

在进入下一课之前，先尝试用许多不同的元素创建一个完整的网页，先不要担心造型问题，让它看起来漂亮。

### Template Syntax 模板语法

关于Hugo的模板语法，你需要知道的一切。

#### 基础知识

Hugo模板是添加了额外语法的HTML文件，使其更加动态。它允许我们根据内容为我们生成HTML代码，而不是为每篇文章手动编写代码。在HTML文件中访问Hugo的特殊功能的方法，我们需要写的是`{{ }}`，在这些大括号内我们写Hugo代码。

#### Variables 变量

Hugo会根据当前屏幕上显示的模板类型，在模板中注入一堆有用的变量。访问这些变量的方法是通过添加大括号，然后在变量名称上加一个点，像这样：`{{ .VariableNameHere }}`。

我们经常会写这样的代码：`<title>{{ .Title }}</title>`来动态地设置我们的页面标签标题。

在接下来的章节中，我们会经常看到这种语法，它对Hugo至关重要。我们将在后面的章节中复习所有重要的变量注入。

#### Fuctions 函数

Hugo还提供了许多函数，我们可以在我们的模板中使用。函数与变量不同，因为它们根据输入改变输出。

例如，如果我们使用`add`函数，`<p>{{ add 1 2 }}</p>`那么输出将是`<p>3</p>`，输出将根据我们输入的数字而改变。这与变量不同，因为变量并不根据输入而变化，因为变量没有输入。

#### Logic 逻辑

Hugo允许在模板中使用基于逻辑的基本操作，如`if`语句和`loops`。

#### 条件运算符

Hugo为我们提供了一些特殊的操作符来进行条件渲染。if, else, with, or and, 都是用来决定在我们的模板中渲染哪些元素的。

有许多不同的方法来使用这些运算符，完整的文档可以在[这里](https://gohugo.io/templates/introduction/#conditionals)找到，但我们也会在本课程的其余部分看到许多例子。

#### Loops 循环

循环是任何编程语言或框架的一个重要特征。它允许在许多项目中重复使用逻辑。

我们可以使用`range`操作符，通过Hugo在注入模板的数据上进行循环，例如页面列表或标签或类别的列表。

```html
<ul>
{{ range $list }}
    <li>{{ . }}</li> <!-- The . represents an element in $list variable .代表$list变量中的一个元素 -->
{{ end }}
</ul>
```

上述内容的输出将是：

```html
<!-- This output assumes the $list variable held 3 items with the text below
这个输出假设$list变量有3个项目，文本如下-->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

这是我们需要了解的关于Hugo模板的大部分内容，以便继续进行下面的章节。

### Baseof Pages 基准页

了解Hugo的 `baseof` 页面如何被用于每个模板。

现在我们将开始学习Hugo，我们的静态网站生成器。在这一页，我们将学习`baseof.html`模板。

#### 什么是baseof.html？

在开始解释之前，我想让你在你新的hugo项目中的layouts文件夹内创建一个名为_default的文件夹。然后，在里面创建一个名为`baseof.html`的文件。

你的文件目录结构现在应该是这样的：

```cmd
my-blog
├── archetypes
|   └── default.md
├── content
├── data
├── layouts
|   └── _default
|       └── baseof.html
├── static
├── themes
└── config.toml
```

打开新的`baseof.html`文件，粘贴以下片段：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{ block "title" . }}
      {{ .Site.Title }}
    {{ end }}</title>
  </head>
  <body>
    {{ block "main" . }}
      <!-- The part of the page that begins to differ between templates -->
    {{ end }}
  </body>
</html>
```

现在这个文件里有很多代码，我们将解释每一部分。

第一行：`<！DOCTYPE html>`

这是一个文档类型的声明，它告诉浏览器里面有什么样的代码，这样浏览器就知道如何阅读它，并将它转换成用户在屏幕上可以看到的东西。

下一个区块是`<html>`元素，这个元素应该包含在每个页面上，它是根元素。其他每个元素都会在这个根元素里面。

我们看到的下一个元素是`<head>`元素，这个元素被用来存放关于页面的额外元数据。

#### Head 头部

存储在`<head>`内的元素在屏幕上是不可见的，但浏览器和谷歌等搜索引擎会读取这些元素来索引你的页面。

#### Title 标题

头部也用于存储信息，如页面标题，通过使用`<title>元素`。标题内的文本用于你在浏览器中的标签文本。如果你现在看看你的网络浏览器窗口，看看顶部的标签，你会看到描述页面的文字，这是由`title`元素控制的。如果没有提供标题，则只显示页面的URL。

#### Meta 元

还有许多不同的`<meta>`元素，也可以添加到你的头部。这些元元素有些是给你的浏览器阅读的，有些是给抓取你网站的搜索引擎阅读的。

#### Body 主体

`<body>`元素在`<head>`之后，它是容纳所有其他元素的第一个元素，用于在屏幕上实际显示东西。

我们在上一节学到的关于HTML的所有元素都可以放在`<body>`元素中，它们将被显示在屏幕上。

#### Comment 注释

还有一种方法可以在HTML中写注释，使用的语法是`<！--你的注释在这里-->`，这些只是供开发人员使用。你可以在这里写任何你想写的东西，浏览器和搜索引擎会忽略它。没有人会看到它，除非他们在看代码。

#### Template Blocks 模板区块

在普通的HTML文件中，你写元素，并在元素里面写数据，显示在屏幕上--但如果你的网站有30个页面，甚至1000个页面呢？我们需要为每个页面重复写同样的代码吗？当他们只想在博客上介绍他们最喜欢的新食物时，没有人愿意写代码。

答案是否定的。我们不必在每次想改变网站内容的时候都写代码。这就是Hugo的意义所在，它允许我们分别编写HTML模板和内容，并让Hugo不费吹灰之力地将它们无缝地拼接起来。

我相信你已经注意到上面的片段中这些奇怪的双大括号，它们看起来像这样。`{{这里的代码}}`。这些是Hugo特有的，它将使我们把这些HTML文件变成更多的动态文件，可以作为很多不同内容的模板。

在上面的片段中，我们看到我们的第一个模板语法叫做`block`。我们可以使用这些块作为内容的占位符。这将使我们能够生成无限量的页面，其布局完全相同，但里面的文字和信息完全不同。

在这个片段中，我们定义了 __两个`block`__ ，并给它们起了名字，这样我们就可以在其他模板中引用它们，这样Hugo就知道如何将模板拼接起来。

##### Title Block 标题块

第一个块是标题块 `{{block "title". }`，它位于我们的`<title>`元素内。这将允许我们以后为我们博客的不同部分制作模板，并为每个模板使用不同的标题。

##### Main Block 主块

主块`{{block "main". }}`是用于在屏幕上显示元素的块，它可以在不同的页面上改变。主块之外的任何东西都不会在页面之间改变（除非它是一个不同的块）。

还要注意的是，像`main`这样的块名是任意的，你可以给这些块起任何你喜欢的名字。

如果你还没有完全理解区块，请不要担心。我们会有更多关于如何使用它们的例子，而且会更有意义。

### Homepage 主页

我们将一起创建的第一个真正的页面是我们的主页。

如果你没有运行你的本地Hugo开发服务器，现在就在你的终端运行`hugo server`命令来启动你的网站。当你运行该命令时，请确保你在你的my-blog文件夹内。

#### Index.html

要创建一个主页，首先在`layouts`文件夹中创建一个名为`index.html`的文件。

你的文件夹结构现在应该看起来像这样：

```cmd
my-blog
├── archetypes
|   └── default.md
├── content
├── data
├── layouts
|   ├── _default
|   |   └── baseof.html
|   └── index.html
├── static
├── themes
└── config.toml
```

在你的代码编辑器中打开`index.html`文件，粘贴以下代码：

```html
{{ define "main" }}
  <main>
    <header>
      <h1>{{ .Title }}</h1>
    </header>
    <div>
      {{ range first 5 .Site.RegularPages }}
          {{ .Render "summary" }}
      {{ end }}
    </div>
  </main>
{{ end }}
```

我们将讨论这一切意味着什么，但首先，你应该保存你的文件，并打开你的浏览器到<http://localhost:1313>，你应该看到一个白色的页面，上面有一个大标题说。我的新Hugo网站。

这是你的新网站的标题，可以通过编辑你项目中的`config.toml`文件来改变它。

继续修改`config.toml`文件中的`title`，保存你的修改，看你的网站在浏览器中以你的新标题更新。

#### Main block

现在我们看到在第1行的片段中，我们以`{{ define "main" }}`开始，最后一行是`{{ end }}`，这两个声明之间的所有内容都将放在`baseof.html`的 __main block__ 内。

如果你不记得了，在我们的`baseof.html`模板里面，我们有一个看起来像这样的块：`{{ block "main" . }} {{end}}`。所以现在我们知道如何在其他模板的块内注入不同的模板。

这就是Hugo让我们不在每个页面上重复代码的方式。

#### Title

在上面的片段中，我们还看到`{{ .Title }}`，这是从你的`config.toml`中提取的标题。Hugo会在你的模板中注入很多不同的数据供你访问，几乎所有`config.toml`中的数据都可以用于显示或逻辑判断，如语言选择或元数据。

#### Page range 页面范围

在标题之后，我们看到了新的东西--`range block`（范围块）。范围块是用来在许多项目上循环的。在这个例子中，我们正在循环浏览我们项目中`content`文件夹中的所有内容页，并将它们显示为一个摘要。现在，我们的content文件夹中没有任何文件，所以这个范围没有输出任何东西。

为了测试这个范围块是否工作，我们将创建我们的第一个博客文章文件：

#### First Blog Post

在`content`文件夹内创建一个名为`post`的文件夹。然后，创建一个名为`my-first-post.md`的文件。

你的文件夹结构现在应该是这样的：

```cmd
my-blog
├── archetypes
|   └── default.md
├── content
|   └── posts
|       └── my-first-post.md
├── data
├── layouts
|   ├── _default
|   |   └── baseof.html
|   └── index.html
├── static
├── themes
└── config.toml
```

打开my-first-post.md文件，粘贴以下内容：

```md
---
title: 'My first post'
date: '2020-08-01'
---

Hello world!
```

这是一个markdown文件，它是我们为网站创建内容和博文的方式。我们将在下一节中详细介绍markdown。

#### Summary Template 摘要模板

现在你可能期望在你的主页上看到你的新博文。但你还不应该，因为我们还没有告诉hugo如何呈现一篇博文的摘要。这就是我们的范围块里面的`{{ .Render "summary" }}`的片段。

创建一个名为`summary.html`的文件，并把它放在`layouts/_default`文件夹中。

你的文件夹结构现在应该是这样的：

```cmd
my-blog
├── archetypes
|   └── default.md
├── content
|   └── posts
|       └── my-first-post.md
├── data
├── layouts
|   ├── _default
|   |   ├── summary.html
|   |   └── baseof.html
|   └── index.html
├── static
├── themes
└── config.toml
```

在这个新的`summary.html`文件中，粘贴以下内容：

```html
<a href="{{ .Permalink }}">
  <div>{{ .Title }}</div>
  <div>{{ .Summary }}</div>
  <div>
    <span>{{ .ReadingTime }} Minutes</span>
    <span>{{ .Date.Format "Jan 2, 2006" }}</span>
    <span>{{ .WordCount }} Words</span>
  </div>
</a>
```

现在，当我们回到我们的网络浏览器，看看我们的主页：我们应该看到一个链接到我们创建的第一个帖子。

它还不是很美观，但我们以后会对它进行修改。

如果你点击这个链接，你应该得到一个`404页面未找到`的错误，这是因为我们还没有创建显示完整帖子的布局。

### Single Pages 单页

了解用于显示单个文章的单页模板

在我们开始写很棒的博客文章之前，我们需要创建一个显示这些文章的布局。

现在，当我们点击主页上的链接时，我们会看到一个404错误。让我们来解决这个问题。

#### Single.html

在`layouts/_default`文件夹下创建一个名为`single.html`的文件。

你的项目结构应该是这样的：

```cmd
my-blog
├── archetypes
|   └── default.md
├── content
|   └── posts
|       └── my-first-post.md
├── data
├── layouts
|   ├── _default
|   |   ├── summary.html
|   |   ├── single.html
|   |   └── baseof.html
|   └── index.html
├── static
├── themes
└── config.toml
```

打开新的`single.html`文件并粘贴以下内容：

```html
{{ define "main" }}
<section>
  <h1>{{ .Title }}</h1>
  <div>
    <article>
      {{ .Content }}
    </article>
  </div>
</section>
<aside>
  <div>
    <section>
      <h4>{{ .Date.Format "Mon Jan 2, 2006" }}</h4>
      <h5>{{ .WordCount }} Words</h5>
    </section>
  </div>
  <div>
    {{ with .PrevInSection }}
    <a class="previous" href="{{ .Permalink }}"> {{.Title}}</a>
    {{ end }}
    {{ with .NextInSection }}
    <a class="next" href="{{ .Permalink }}"> {{.Title}}</a>
    {{ end }}
  </div>
</aside>
{{ end }}
```

在解释上述片段的细节之前，继续保存，并访问你在本地主机上运行的网站。如果你现在点击主页上的链接，你应该被引导到一个真正的页面，上面有关于帖子的细节。

我们现在可以看到，这个`single.html`布局是为一次显示一个帖子而做的。无论帖子里有什么样的内容，Hugo都会用这个布局来显示它。

如果你编辑`my-first-post.md`文件并在其中添加一些文字，你会看到服务器更新并显示新的内容。

#### Title标题

在`single.html`布局中，我们使用Hugo为我们注入的`{{ .Title }}`变量来显示我们文章的标题。这是直接取自markdown前面的内容，这是在markdown文件顶部的奇怪的元数据。

#### Content

我们也显示文章的内容。内容是markdown文件中位于前言部分下面的所有内容。

我们通过Hugo给我们的内容变量来访问这些数据，像这样：`{{ .Content }}`，它将自动把我们的markdown转换成HTML。这就是为什么内容作者使用Markdown而不是HTML来写博文的原因，因为Markdown写起来更快，而且计算机很容易把它转换成更复杂的HTML代码在浏览器中显示。

#### Date 日期

我们也在我们的单页布局中显示帖子的日期。Hugo从我们的markdown文件的前面内容中获取它，并允许我们使用`.Date.Format`函数以任何我们喜欢的方式来格式化它。

如果你有一篇日期为`2017-03-03T14:15:59-06:00`的博客文章，那么下面的表格显示了如果你使用第1列的格式，它在第2列会被格式化成什么。

Format|Output
------|------|
“Monday, January 2, 2006”|Friday, March 3, 2017
“Mon Jan 2 2006”|Fri Mar 3 2017
“January 2006”|March 2017
“2006-01-02”|2017-03-03
“Monday”|Friday

>请注意，第1列中的数值不应该被改变。星期一、一月、二月和2006年是特殊的值，只是用于格式化。在真正的HTML生成中，它们将被替换成你的文章前言中的正确日期。

有关日期格式化的更多细节，请访问[Hugo日期格式文档页面](https://gohugo.io/functions/format/)。

Hugo有几十个函数可用于模板内部，但我们在本课程中只涉及几个基本的函数。

#### Word Count 字数统计

Hugo也会在我们的模板中注入一些信息，比如，我们的帖子的字数，阅读该帖子所需的时间等等。

要访问字数，我们可以在一个单页模板中这样写：`{{ .WordCount }}`。

我们可以在Hugo关于页面变量的[完整文档](https://gohugo.io/variables/page/)中看到所有可用的页面变量。

#### 下一篇和上一篇

Hugo还可以让你知道文件夹中的下一篇文章是哪一篇。这使我们可以在我们的帖子底部创建链接，以链接到下一篇和上一篇帖子。Hugo会自动按日期对我们的帖子进行排序，所以我们不必担心这个问题。但是，如果我们想要一个特定的顺序，我们可以在我们的文章前台添加一个权重字段`weight`，Hugo会根据这个值来排序。权重的数字越低，它的排名就越高。

为了创建下一个和上一个链接，我们使用`{{ with }}`语法，它在显示里面的代码之前自动检查变量是否存在，然后通过`{{ . }}`语法提供变量的上下文。

### Lists Pages 列表页

了解如何使用列表页模板来显示Hugo中的多个项目。

现在，我们有一个主页，显示我们最近写的5篇文章--当我们点击链接时，它会把我们带到该文章的全页面视图。

但是，如果我们想看到我们所有文章的列表呢？

这就是Hugo的列表模板的用处。

#### Template 模板

在`/layouts/_default`中创建一个名为`list.html`的文件。

我们的文件夹结构现在应该是这样的：

```cmd
my-blog
├── archetypes
|   └── default.md
├── content
|   └── posts
|       └── my-first-post.md
├── data
├── layouts
|   ├── _default
|   |   ├── summary.html
|   |   ├── single.html
|   |   ├── list.html
|   |   └── baseof.html
|   └── index.html
├── static
├── themes
└── config.toml
```

打开新的`list.html`文件，粘贴以下代码：

```html
{{ define "main" }}
<main>
  <header>
    <h1>{{ .Title }}</h1>
  </header>
  <div>
    {{ range .Pages }}
      {{ .Render "summary" }}
    {{ end }}
  </div>
</main>
{{ end }}
```

你会注意到，这与我们的主页模板非常相似，但有一个很大的区别。

我们的主页模板使用`前5个`函数来呈现我们的前5个帖子，而在这个模板中，我们不使用这个函数--所以我们将显示 __所有__ 的帖子。

为了验证这个模板是否有效，保存你的修改并访问你的本地开发服务器，地址是<localhost:1313/posts>。

如果你的开发服务器运行在一个不同的端口上（运行`hugo serve`后输出），那么用你的端口号替换`1313`。

#### Summary 摘要

你可能还注意到，我们在这个页面上也重复使用了`summary.html`模板。这可以确保我们在主页上的格式与我们的帖子列表页完全一样，因为我们使用的是完全相同的代码。

#### 关于路径的说明

你可能想知道为什么我们必须在浏览器中进入`/posts`来查看我们的帖子。嗯，这是因为我们把帖子放在内容文件夹中的帖子文件夹里。

Hugo的内容文件夹很特别，因为它将根据里面的文件夹和文件名来创建路径。如果我们把帖子放在一个叫做`recipes`的文件夹里，那么在我们的浏览器中要看到所有的菜谱，我们就需要访问`/recipes`路径。

只要内容文件夹内有一个文件夹，Hugo就会使用`list.html`模板。

关于你可以在列表页中做什么的更多信息，请查看[Hugo关于列表模板的文档](https://gohugo.io/templates/lists/)。

### 404页面

当没有找到给定URL的内容时，创建一个默认显示。

Hugo在建立我们的网站时生成了一堆URL。Hugo通过分析我们的`content`文件夹和`layouts`文件夹来完成这一工作。

但有时用户在访问我们的网站时，会转到一个不存在的URL。那么，当这种情况发生时，我们要显示什么呢？

大多数网站都会显示一个默认的404页面，404是当网络服务器无法找到所请求的东西时使用的[http状态代码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)。在这种情况下，网络服务器不能找到浏览器正在寻找的页面。

#### 404模板

为了给找不到的页面显示一些默认信息，在`layouts`中创建一个`404.html`文件。

你的文件夹结构现在应该是这样的：

```cmd
my-blog
├── archetypes
|   └── default.md
├── content
|   └── posts
|       └── my-first-post.md
├── data
├── layouts
|   ├── _default
|   |   ├── summary.html
|   |   ├── single.html
|   |   ├── list.html
|   |   └── baseof.html
|   ├── 404.html
|   └── index.html
├── static
├── themes
└── config.toml
```

打开`404.html`文件并粘贴以下片段：

```html
{{ define "main"}}
<main>
  <div>
    <h1><a href="/">Go Home</a></h1>
  </div>
</main>
{{ end }}
```

在我们的案例中，我们将只显示一个写着 `Go Home`的页面，如果他们点击它--它将把他们带回我们的主页。

#### 测试

你现在可能正试图通过保存你的修改并进入一个在你的浏览器中不存在的路径来测试，你可能会困惑为什么没有显示`Go Home`的信息。

这是因为Hugo的开发服务器不会自动显示这个模板。要测试它是否可用，你可以访问 <localhost:1313/404.html>。

在本课程的 __优化部分__ ，我们将讨论如何配置我们的网络服务器，以便在没有找到页面时自动提供404模板。

### Partials

了解Hugo Partials，以创建可重复使用的组件，在不同的模板中共享。

Hugo提供了一个强大的功能，叫做 __Partials__ ，它允许我们创建可重复使用的小模板，可以在大的页面模板中使用。

在本课中，我们将在网站的顶部创建一个导航栏，这个导航栏对所有页面都是一样的，我们将使用一个*Partials*来实现。

#### Navbar 导航栏

在你的`layouts`文件夹中创建一个名为`partials`的文件夹。在新的partials文件夹中，创建一个名为`navbar.html`的文件。

你的文件夹结构现在应该是这样的：

```cmd
my-blog
├── archetypes
|   └── default.md
├── content
|   └── posts
|       └── my-first-post.md
├── data
├── layouts
|   ├── _default
|   |   ├── summary.html
|   |   ├── single.html
|   |   ├── list.html
|   |   └── baseof.html
|   ├── partials
|   |   └── navbar.html
|   ├── 404.html
|   └── index.html
├── static
├── themes
└── config.toml
```

打开新的`navbar.html`文件，粘贴以下代码：

```html
<nav>
  <div>
    <a href="/">
      {{ $.Site.Title }}
    </a>
  </div>

  <div>
    <a href="/">
      Home
    </a>
    <a href="/posts">
      Posts
    </a>
  </div>
</nav>
```

现在我们需要弄清楚如何在每个页面上获得一个导航条。

好在我们使用的是Hugo，我们已经有了每个页面都使用的`baseof.html`模板，所以我们可以修改我们的`baseof.html`模板并在`<body>`中添加`{{partial "navbar.html". }}`到`<body>`中，让这个新的导航条显示在每个页面上。

我们新修改的`baseof.html`文件现在看起来应该是这样的：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{ block "title" . }}
      {{ .Site.Title }}
    {{ end }}</title>
  </head>
  <body>
    {{ partial "navbar.html" . }}
    {{ block "main" . }}
      <!-- The part of the page that begins to differ between templates -->
    {{ end }}
  </body>
</html>
```

现在，如果我们保存我们的修改，并在我们的浏览器中访问我们本地运行的网络服务器，我们应该看到每个页面的顶部都有一个新的导航条，使我们能够轻松地导航到我们的主页和帖子页面，无论我们当前访问的是哪个页面。

#### footer 页脚

让我们也为我们的网站创建一个`footer`。页脚通常用于显示版权文本和其他不太重要的页面的链接。在我们的例子中，我们将只显示当前的年份和版权。

在我们新的`partials`文件夹中创建一个名为`footer.html`的文件。

你的文件夹结构现在应该是这样的：

```cmd
my-blog
├── archetypes
|   └── default.md
├── content
|   └── posts
|       └── my-first-post.md
├── data
├── layouts
|   ├── _default
|   |   ├── summary.html
|   |   ├── single.html
|   |   ├── list.html
|   |   └── baseof.html
|   ├── partials
|   |   ├── footer.html
|   |   └── navbar.html
|   ├── 404.html
|   └── index.html
├── static
├── themes
└── config.toml
```

打开`footer.html`文件，粘贴以下片段：

```html
<footer>
  <p>
    Copyright &copy; {{ now.Format "2006" }} {{ $.Site.Title }} | All rights reserved.
  </p>
</footer>
```

然后编辑`baseof.html`，将Partial内容放在`<body>`中，就像我们对导航条所做的那样。

新的baseof文件应该是这样的：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{ block "title" . }}
      {{ .Site.Title }}
    {{ end }}</title>
  </head>
  <body>
    {{ partial "navbar.html" . }}
    {{ block "main" . }}
      <!-- The part of the page that begins to differ between templates -->
    {{ end }}
    {{ partial "footer.html" . }}
  </body>
</html>
```

如果我们现在在浏览器中访问我们的网站，我们会在底部看到一个漂亮的页脚，上面有当前年份、我们的网站标题和漂亮的版权实体。

我们得到这个版权圆圈的方法是使用HTML实体代码，`&copy;`被浏览器转换成你所看到的圆圈标志。

对于所有可能的HTML实体代码，请查看这个[参考网站](https://dev.w3.org/html5/html-author/charref)。

## CSS样式设计

学习如何通过样式设计和格式化使你的网站与众不同。

### 自定义CSS

学习如何编写CSS来为你的Hugo网站添加样式

现在到了真正有趣的部分。我们可以使我们的网站感觉到我们想要的方式。我们可以选择颜色、字体和风格来配合我们的个性。

CSS是一种专门为HTML元素设计风格的语言，使其看起来像我们想要的那样。

#### Properties属性

有超过一百种不同的CSS属性可用，这意味着样式的组合几乎是无限的。我们可以创建前所未有的风格组合--让我们的网站变得独一无二。

一些常用的属性有：

* __margin__：一个元素周围的空白。
* __font-family__：用于文本的字体。
* __font-size__：字体大小。字体的大小。
* __font-weight__：字体的粗细。
* __color__： 文本的颜色。
* __background__: 背景的颜色，或作为背景的图像。
* __border__：用特定颜色和宽度的线条勾勒一个元素。
* __text-align__：用来决定文本是左对齐、居中还是右对齐。
* __height__：一个元素应该有多高。
* __width__：一个元素应该有多宽。

这些只是一些基本的属性，但有这么多的属性，如果在这里全部写出来就太长了，不如看看这个[参考资料](https://www.w3schools.com/cssref/default.asp)，看看所有可用的属性。

#### Selectors 选择器

我们有几种不同的方法可以将我们的样式应用到我们的HTML元素，样式标签，类名，或ID。

#### Style Tag 样式标签

开始尝试使用CSS的最快方法是在你的HTML元素上写一个你想要的`style`属性。

如果我们有一些文字，我们希望它是 __黑色__ 的背景 __白色__ 的字，我们可以这样做：

```html
<p style="color: white; background: black;">I am some text</p>
```

在样式标签中，我们用分号 `;` 分隔每个样式。每个样式都有两个部分：属性名称，如`color`或`background`，以及值，如`white`、`black`、`blue`或`#4287f5`。

使用样式标签的缺点是，我们必须一遍又一遍地写相同的样式，而且没有办法重复使用它们。为了重复使用样式，我们使用`class name`（类名）。

#### Class Names 类名

类名允许我们在HTML文档中创建一个`<style>`标签，并在其中写入我们的样式，而不是在每个元素中。

```html
<style>
  .some-text {
    color: blue;
    font-size: 24px;
  }

  .box {
    border: 1px solid red;
    padding: 30px;
    height: 45px;
    width: 45px;
    text-align: center;
  }
</style>

<p class="some-text">I am text</p>
<div class="box">I am a box</div>
```

正如我们所看到的，我们把*classes*写在我们的样式标签里面，那么我们就可以在整个HTML文档中多次重复使用同一个样式，让我们不至于重复自己。

此外，我们也可以将我们的类样式完全写在一个单独的文件中，并给它一个.css扩展名。

#### 为我们的网站设计样式

创建一个名为`style.css`的文件，放在你的静态文件夹中。

你的文件夹结构现在应该是这样的：

```cmd
my-blog
├── archetypes
|   └── default.md
├── content
|   └── posts
|       └── my-first-post.md
├── data
├── layouts
|   ├── _default
|   |   ├── summary.html
|   |   ├── single.html
|   |   ├── list.html
|   |   └── baseof.html
|   ├── partials
|   |   ├── footer.html
|   |   └── navbar.html
|   ├── 404.html
|   └── index.html
├── static
|   └── styles.css
├── themes
└── config.toml
```

在VS Code中打开新的`style.css`文件并粘贴以下内容：

```css
body {
  background: blue;
}
```

这将自动为我们页面上的`<body>`标签应用一个蓝色背景。

为了使其发挥作用，我们需要在我们的页面中添加对该文件的引用。

打开我们的`baseof.html`模板，在`<head>`标签内添加这一行（记住`<head>`是用于元数据）。`<link rel="styleheet" href="/styles.css">`。

我们的`baseof.html`现在看起来应该像这样：

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="/styles.css">
  <title>{{ block "title" . }}
    {{ .Site.Title }}
    {{ end }}</title>
</head>

<body>
  {{ partial "navbar.html" . }}
  {{ block "main" . }}
  <!-- The part of the page that begins to differ between templates -->
  {{ end }}
  {{ partial "footer.html" . }}
</body>

</html>
```

现在，如果我们在浏览器中访问我们的本地开发服务器，我们应该在所有页面上看到一个蓝色的背景。

这可能是非常刺眼的，所以我们将从`style.css`文件中删除这个样式，并在下一节介绍Bulma，以帮助我们更快地编写CSS。

### Bulma CSS

了解Bulma CSS，以帮助简化CSS开发。

掌握CSS是出了名的费时费力，但现在有许多不同的库可以帮助你更快地编写CSS，减少错误。

Bulma是流行的CSS库，它带有预制的类，我们可以在我们的HTML元素上使用，使它们看起来更漂亮。这可以减少我们需要编写的CSS的数量。

#### 添加Bulma

打开`baseof.html`，在`style.css`文件上方的头部，添加这一行。`<link rel="styleheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">`。这是一个指向CDN服务器的链接，该服务器托管了Bulma的CSS文件。

一旦我们点击保存，一些基本的Bulma样式就会应用到我们的网站上。

我们的`baseof.html`应该看起来像：

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
  <link rel="stylesheet" href="/styles.css">
  <title>{{ block "title" . }}
    {{ .Site.Title }}
    {{ end }}</title>
</head>

<body>
  {{ partial "navbar.html" . }}
  {{ block "main" . }}
  <!-- The part of the page that begins to differ between templates -->
  {{ end }}
  {{ partial "footer.html" . }}
</body>

</html>
```

如果我们现在在浏览器中访问我们的网站，我们会看到样式发生了一些变化，就像应用了一种新字体。

>不要忘记从我们之前创建的自定义样式.css文件中删除`background: blue;`属性。

#### 塑造我们的网站

现在我们将开始把Bulma类名应用到我们网站的各种元素中，就像这样：class="bulma class names here"。

因此，我们不需要自己编写类和样式，而是使用Bulma的预制类和样式来完成90%的造型，然后我们仍然可以在Bulma之上添加自己的自定义样式。

#### 导航条

打开`navbar.html`部分文件，用下面的片段替换内容：

```html
<nav class="navbar is-dark">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        {{ $.Site.Title }}
      </a>
    </div>

    <div class="navbar-start">
      <a class="navbar-item" href="/">
        Home
      </a>
      <a class="navbar-item" href="/posts">
        Posts
      </a>
    </div>
  </div>
</nav>
```

这些元素没有改变，但我们为每个元素添加了一些类，使其具有良好的风格。保存这些变化，在浏览器中看看你的新导航条。

#### 页脚

现在让我们打开footer.html文件，为我们的footer元素添加footer类，像这样。`<footer class="footer has-text-centered">`。

这只是在文本周围增加了一些空间，并将其置于页面的中央。

#### Homepage

现在，我们将对我们的主页进行一些设计。打开index.html模板，用下面的代码替换它：

```html
{{ define "main" }}
<section class="section">
  <main class="container">
    {{ range first 5 .Site.RegularPages }}
    {{ .Render "summary" }}
    {{ end }}
  </main>
</section>
{{ end }}
```

这也只是在主要内容周围增加一些间距。关于每个Bulma类到底在做什么的更多细节，请查看[Bulma docs](https://bulma.io/documentation/)。

#### List Page

我们将对我们的list.html模板做同样的事情，我们还将为该模板添加一个标题，因为它可以是任何基于内容文件夹中的文件夹名称。

你的list.html现在应该看起来像这样：

```html
{{ define "main" }}
<section class="section">
  <main class="container">
    <h1 class="title">{{ .Title }}</h1>
    <div>
      {{ range .Pages }}
      {{ .Render "summary" }}
      {{ end }}
    </div>
  </main>
</section>
{{ end }}
```

#### 摘要

现在我们将格式化我们的summary.html模板，以显示一个漂亮的可点击的框，而不是未格式化的蓝色文本。

将summary.html文件替换为以下内容：

```html
<a class="box" href="{{ .Permalink }}">
  <h4 class="title is-4">{{ .Title }}</h4>
  <h6 class="subtitle has-text-grey is-6">{{ .Summary }}</h6>
  <div>
    <span class="tag is-link">{{ .ReadingTime }} Minutes</span>
    <span class="tag is-dark">{{ .Date.Format "Jan 2, 2006" }}</span>
    <span class="tag is-warning">{{ .WordCount }} Words</span>
  </div>
</a>
```

现在我们的主页和我们的列表页将使用那个漂亮的摘要组件。

#### Single

最后，我们将设计我们的`single.html`模板。由于这是一个博客，我们希望它没有杂乱和干净，所以我们不会添加任何太花哨的东西。

把`single.html`替换成以下内容：

```html
{{ define "main" }}
<section class="section">
  <main class="container mb-6">
    <h1 class="title">{{ .Title }}</h1>
    <h3 class="subtitle">
      <span class="tag is-link">{{ .ReadingTime }} Minutes</span>
      <span class="tag is-dark">{{ .Date.Format "Jan 2, 2006" }}</span>
      <span class="tag is-warning">{{ .WordCount }} Words</span>
    </h3>

    <article class="content">
      {{ .Content }}
    </article>
  </main>

  <div class="container content">
    <ul>
      {{ with .PrevInSection }}
      <li>Previous Post: <a class="previous" href="{{ .Permalink }}">{{.Title}}</a></li>
      {{ end }}
      {{ with .NextInSection }}
      <li>Next Post: <a class="next" href="{{ .Permalink }}">{{.Title}}</a></li>
      {{ end }}
    </ul>
  </div>
</section>
{{ end }}
```

#### 404

最后，我们将为我们的404页面设计样式

```md
{{ define "main" }}
<section class="section">
  <main class="container">
    <h1 class="title">Page not found</h1>
    <a href="/">Go Home</a>
  </main>
</section>
{{ end }}
```

现在我们有了一个漂亮的网站，我们可以开始添加我们自己的风格。请随意修改任何元素的类别和样式。实验以获得你喜欢的外观和感觉。

## 优化

使你的网站快速有效，这样你的访问者就会留下深刻印象，搜索引擎也会给你留下高排名。

### 图像

了解如何使用Hugo来压缩和优化你的图片。

### 搜索引擎优化(SEO)

使你的网站能够被谷歌等搜索引擎所访问

### CSS最小化

将Hugo中的CSS文件压缩得更小，使其加载速度更快

CSS最小化是指删除CSS文件中的大量空白和空行的过程。留白有利于人类轻松阅读代码，但对计算机来说是不必要的，它导致文件的大小比它们需要的大得多，而更大的文件=更慢的下载速度=用户等待的时间很短。

#### 最小化

Hugo提供了一个对自定义CSS文件进行最小化的功能，就像我们学到的Hugo压缩图片的能力一样。

之前我们在静态文件夹中创建了一个`style.css`文件。如果这个文件仍然是空的，那么你不需要做任何事情，但是如果你已经写了一些CSS，请按照下面的步骤进行。

将`style.css`文件从静态文件夹中移出，移到`assets`文件夹中。
打开`baseof.html`，将`<link rel="stylesheet" href="/styles.css">`一行替换为以下内容：

```html
{{ $style := resources.Get "styles.css" | minify | fingerprint }}
<link rel="stylesheet" href="{{ $style.Permalink }}">
```

现在我们的样式将被Hugo处理，Hugo将在我们构建和部署网站时生成一个新文件，这个新文件将被最小化和指纹化，以避免浏览器缓存问题。

#### 指纹

指纹功能是为了防止浏览器在我们的CSS被修改时进行缓存。通常情况下，浏览器会下载一个CSS文件，并将其保存在缓存（或内存）中，这样下一个加载相同CSS文件的页面就会加载得更快。浏览器使用文件的名称来做这件事，所以如果名称没有变化，它就不会重新下载该文件。

但是，如果我们改变了文件中的一些内容，并将其部署到我们的服务器上呢？浏览器不会知道，因为名称是一样的。因此，指纹识别是一种解决这个问题的方法，它在文件名中加入一串随机的数字和字母，这样浏览器就知道什么时候要更新它的缓存。

我们的style.css文件现在看起来是这样的：style.sdfgj12344sfg.css，当它发生变化时，浏览器会从我们的服务器重新下载它。

## 部署

建立并将你的网站部署到云服务器上，这样每个人都可以访问并看到你所创造的东西。

### Build 建立

构建你网站的生产版本以部署到云端。

祝贺你创建新的网站! 🎉

你已经完成了完全从零开始的构建工作，现在是向世界展示它的时候了。

在我们开始部署我们的服务器之前，我们需要了解构建过程。

#### The Process

Hugo的构建过程在理论上很简单，我们在终端运行一个命令，而不是启动一个本地开发服务器，我们告诉Hugo构建一个`production`站点。

什么是Production site？它是一个以服务器为中心建立的网站，我们写的每一个代码文件都会被分析和拼接起来，这样它就可以为世界服务了。

Hugo所做的是读取我们`content`文件夹里模板文件和内容文件的所有内容，并开始将它们合并在一起--最终的结果是一个文件夹中包含所有需要传输到网络服务器的文件。

#### Build

在运行生产构建之前，确保你在`config.toml`中的`baseURL`看起来像这样：`baseURL = "/"`。

要运行生产构建，请到你的终端，如果开发服务器正在运行，按`ctrl-c`取消它，然后写`hugo-gc-minify`。这将迅速生成你的新网站文件，并把它们放在你的项目的`Public`文件夹中。如果你愿意，你可以打开它们并探索其输出，但这并不是必须的。

这些是我们将上传到云端的真正文件。

### Netlify

将您的Hugo网站部署到Netlify的云服务器上。

[Netlify](https://www.netlify.com/)提供了一个免费的网络服务来托管我们所需要的静态文件，它还免费提供了一个漂亮的域名，如`[项目名称].netlify.app`!

这是最简单的部署方法，也是我们本课程的首选方法。

#### 注册

如果您还没有账户，请到Netlify的网站上注册。

#### 上传文件

一旦你注册，登录，并遵循步骤，前往你的团队页面，在页面的底部应该有一个大的区域，上面写着`Want to deploy a new site without connecting to Git? Drag and drop your site folder here.`（想在不连接Git的情况下部署一个新网站？把你的网站文件夹拖放到这里。）

找到我们在上一节中建立的名为`public`的文件夹，把它拖到屏幕上的这个区域。

Netlify会部署它并给它一个随机的域名。

#### 域名

现在你可以通过点击屏幕上方的`Domain settings`按钮或`Settings`按钮来设置你自己的域名。

找到`Custom domains`部分，点击你的随机域名旁边的`options`下拉按钮，点击`Edit site name`，给它你自己的名字，然后点击保存，用显示的域名访问你的新网站。

如果一切顺利，你的网站应该是活的，你可以开始把它发送给你的朋友了

如果你不想要你的URL中的`.netlify.app`部分，你可以付费购买一个真正的域名并按照这些文档进行设置。

### 完成

恭喜你！你已经完成了 您已经完成了!

<https://hugo-mini-course.netlify.app/>
