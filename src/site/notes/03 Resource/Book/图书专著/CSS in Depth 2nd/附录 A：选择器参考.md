---
{"dg-publish":true,"dg-permalink":"books/36924049/appendix-A-selectors-reference","permalink":"/books/36924049/appendix-A-selectors-reference/","metatags":{"description":"","og:site_name":"DavonOs","og:title":"附录 A：选择器参考","og:type":"article","og:url":"https://zuji.eu.org/books/36924049/appendix-A-selectors-reference","og:image":null,"og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"tags":["program/css"],"dgShowInlineTitle":true}
---


选择器可以选中页面上的特定元素并为其指定样式。CSS 提供了各种各样的选择器。

## A.1 基础选择器
Basic selectors

`tagname`—— 类型选择器（Type selector）或者标签选择器。该选择器匹配目标元素的标签名。它的优先级是 0, 0, 1。例如：`p`、`h1`、`strong`。
`.class`—— 类选择器。该选择器匹配 class 属性（attribute）中存在指定类名的元素。它的优先级为 0, 1, 0。例如：`.media`、`.nav-menu`。
`#id`—— ID 选择器。该选择器匹配拥有指定 ID 属性的元素，其优先级为 1, 0, 0。例如：`#sidebar`。
`*`—— 通用选择器。该选择器匹配所有元素。它的优先级为 0, 0, 0。

## A.2 组合器
Combinators

组合器可以将多个基础选择器连接起来，组成一个复杂选择器。例如，在选择器 `.nav-menu li` 中，两个基础选择器之间的空格被称为 **后代组合器**（descendant combinator）。它表示目标元素 `<li>` 是一个拥有 `nav-menu` 类的元素的后代。后代组合器是最常见的组合器，不过还存在其他的组合器，它们分别代表了元素间的某种特定关系：

- 子组合器（Child combinator，即 `>`）—— 匹配的目标元素是其他元素的直接后代元素。例如：`.parent > .child`。
- 相邻兄弟组合器（Adjacent sibling combinator，即 `+`）—— 匹配的目标元素紧跟在其他元素后面。例如：`p + h2` 选中紧跟在 `<p>` 后面的 `<h2>`。
- 通用兄弟组合器（General sibling combinator，即 `~`）—— 匹配所有跟随在指定元素 **之后** 的兄弟元素。注意，该组合器 **不会选中** 目标元素 **之前** 的兄弟的元素。例如：`li.active ~ li`。

注意，上述两类兄弟组合器只能选中跟随在指定兄弟后面的元素，无法选中指定兄弟之前的元素。若要选中指定元素前的兄弟元素，需使用 `:has()` 选择器。例如，`li:has(~ li.featured)` 将选中指定元素 `<li class="feature">` 之前的列表项；再比如，通过选择器 `ul:has(> li.featured) > li`，选中包含列表项元素 `<li class="featured">` 的列表元素 `ul` 内的所有列表项元素 `li`。

## A.3 复合选择器
Compound selectors

多个基础选择器可以连起来组成一个 **复合**（compound） 选择器（例如：`h1.page-header`）。复合选择器选中的元素将匹配其全部基础选择器。例如，`.dropdown.is-active` 可以选中 `<div class="dropdown is-active">` 元素，但无法选中 `<div class="dropdown">` 元素。

## A.4 伪类选择器
Pseudo-class selectors

伪类选择器用于选中处于某个特定状态的元素。这种状态可能是由于用户交互，也可能是由于元素相对于其父级或兄弟元素的位置。伪类选择器始终以一个冒号（`:`）开始。其优先级与类选择器相同，均为 (0, 1, 0)，但 `:is()` 和 `:where()` 除外。`:is()` 和 `:where()` 的优先级比较特殊，稍后详述。

可用的伪类选择器有很多，我将它们大致分为三类：通用选择器、基于同级元素位置进行匹配的选择器、以及与表单相关的选择器。

这些选择器既可以单独使用，又可以参与组建复合选择器。例如，`:focus` 可以选中任何已获得焦点的元素，而 `input:focus` 则只能选中获得焦点的 `<input>` 元素。还有一些伪类必须在紧随其后的小括号中补充更多目标元素的相关信息；根据不同的定义，有时候括号（parentheses）也是必需的。

请注意，本节给出的伪类列表并不完整。查看完整版伪类选择器，详见 MDN 线上文档：https://mng.bz/ma5a。

### A.4.1 通用伪类选择器
General-purpose pseudo-classes

`:active` —— 选中当前通过鼠标或键盘操作被用户激活的元素，通常与链接（links）或按钮相关。
`:any-link` —— 选中伪类 `:link` 或 `:visited` 对应的元素。
`:empty` —— 选中没有子元素的元素。注意，该伪类选择器不会选中包含空格的元素，因为空格在 DOM 中属于文本节点。
`:focus` —— 选中通过鼠标单击、屏幕轻触或 Tab 键导航而获得焦点的元素。
`:focus-visible` —— 选中那些在浏览器认为应当突出显示焦点时获得焦点的元素。选中元素的焦点往往是由键盘导航获得，而不是鼠标单击获得的。在用户单击某个按钮或输入框时，如果不希望看到“焦点框”（“focus ring”，通常以外围轮廓线的方式出现）时，该伪类会非常实用；而出于可访问性方面的考虑，又希望在使用键盘导航时出现焦点框，这样就能清楚知道正在浏览的页面位置。
`:focus-within` —— 选中的元素要么像 `:focus` 那样自身获得焦点、要么其包含的后代元素获得了焦点。
`:has(<selector list>)` —— 有时也称为 “父级选择器”（“parent selector”）。该伪类将选中包含括号内指定元素的被修饰元素。例如，`article:has(h2)` 选中其后代元素中包含 `<h2>` 元素的 `<article>` 元素。括号内的关联选择器也可以以组合器（combinator）开头（译注：因此并不仅限于选中父级元素），例如 `h1:has(+ h2)` 将选中紧随其后的元素为 `<h2>` 的 `<h1>` 元素。目前该伪类选择器仍然相对较新，查询浏览器最新的支持情况详见 https://caniuse.com/css-has
`:hover` ——选中鼠标光标正悬停在其上方的元素。
`:is(<selector list>)` —— 选中与括号内浏览器列表相匹配的任意元素。该伪类的优先级，为选择器列表中优先级最高的那个。例如，:is(h1, h2, h3)。更多用法介绍详见第 8 章。
`:lang(<language>)` —— 选中指定语言的元素。语言（Language）信息可以通过 HTML 的 lang 属性（attribute）或者 `<meta>` 标签指定。例如：`article:lang(en-US)`。
`:link` —— 选中尚未访问过的链接元素（即 `<a>` 元素）。
`:modal` —— 选中通过 JavaScript 的 showModal() 方法打开的 `<dialog>` 元素。另请参考伪元素 `::backdrop`。
`:not(<selector>)` —— 选中不匹配括号内选择器的元素。括号内的选择器须为基础选择器，它只能指定元素本身，无法用于排除祖先元素。同时不允许包含另一个排除选择器（negation selector）。
:root —— 选中文档的根节点元素。在 HTML 中即为 `<html>`。但 CSS 也可以对其他 XML 或类似 XML 的文档中，例如 SVG。此时该选择器将具有更通用的含义。
:scope —— 选中当前 CSS 作用域的根节点元素（详见第 9 章）。
:visited —— 选中已经访问过的链接元素（即 `<a>` 元素）。
`:where(<selector list>)` —— 该伪类的行为模式与 :is() 伪类相同，但其选择器优先级始终为 0, 0, 0。例如：:where(:hover, .is-selected)。更多用法及注意事项，详见第 8 章。

### A.4.2 基于同级元素位置的选择
Selecting based on position among sibling elements

有些伪类选择器可以基于目标元素在兄弟元素中的位置来选中元素。这当中有一些是很直观的，比如选中第一个或最后一个兄弟元素；而另一些则需利用公式【an + b】来进行定位。

在这个公式中，a 和 b 均为确定的整数。想要确切了解公式代表的含义，可以从 0 开始将所有整数值依次代入参数 n 求值（该公式也可以换成关键字 even 或 odd，分别指代偶数与奇数序列）。求出的结果即代表将被选中的元素。图 A.1 给出了部分示例。

![图 A.1 an + b 型伪类公式举例](https://i-blog.csdnimg.cn/direct/e7343d525e9b453e8b4da8cf04fb9497.png)
【图 A.1 `an + b` 型伪类公式举例】

下列伪类选择器均与元素在其兄弟元素中的位置相关：

`:first-child` —— 选中其父元素的第一个子元素。
`:first-of-type` —— 类似于 `:first-child`，但不是根据在全部子元素中的位置查找元素，而是根据拥有相同标签名的子元素中的数字编号顺序查找第一个元素。
`:last-child` —— 选中其父元素的最后一个子元素。
`:last-of-type` —— 选中指定标签的最后一个子元素。
`:nth-child(an+b)` —— 选中元素基于其在兄弟元素中的特定位置。例如，`.card:nth-child(2n)` 将选中所有编号为偶数、且样式类包含 card 的元素。
`:nth-child(an+b of <selector>)` —— 添加关键字 of 及后面的选择器后，该选择器将选中指定选择器的第 n 个元素。例如，`li:nth-child(3 of .featured)` 将选中带 featured 样式类的第三个 `<li>` 元素。
`:nth-last-child(an+b)` —— 类似于 `:nth-child()`，但不是从第一个元素往后数，而是从最后一个元素往前数。括号内的公式与 `:nth-child()` 中的公式规则相同，包括对可选项 `of <selector>` 的语法支持。
:nth-last-of-type(an+b) —— 根据元素类型（type）以及特定公式选中对应元素，从当中的最后一个元素往前计数，类似于 :nth-last-child。
:nth-of-type(an+b) —— 根据目标元素在特定类型（type）下的数字顺序以及特定公式选中对应元素，类似于 :nth-child。
:only-child —— 选中其父元素的唯一一个子元素（没有兄弟元素）。
:only-of-type —— 选中指定类型的唯一一个子元素。

### A.4.3 表单字段伪类
Form field pseudo-classes

下列伪类选择器均与表单及表单字段相关：

`:checked` —— 选中已被勾选的复选框、单选按钮或 select 下拉框选项元素。
`:disabled` —— 选中已禁用的元素，包括 input 输入框、select 下拉列表及按钮元素。
`:enabled` —— 选中已启用的元素，即那些能够被激活（activated）或者可以接受焦点的元素。
:invalid —— 根据输入类型中的定义，匹配存在非法输入值的元素。例如，当 `<input type="email">` 的值不是一个合法的邮箱地址时，该元素将被选中。
`:optional` —— 选中没有设置 required 属性（attribute）的元素。
:placeholder-shown —— 选中当前正显示占位符文本的 `<input>` 或 `<textarea>` 元素。
:required —— 选中设置了 required 属性的元素。
:user-invlid —— 仅选中用户与表单字段交互后、存在非法输入值的表单字段元素。本书撰写时浏览器对该伪类的支持还不充分（limited）。
:user-valid —— 仅选中用户与表单字段交互后、拥有合法输入值的表单字段元素。本书撰写时浏览器对该伪类的支持还不充分（limited）。
:valid —— 选中拥有合法值的表单字段元素。

## A.5 伪元素选择器
Pseudo-element selectors

伪元素类似于伪类，但它们选中的不是具有特定状态的元素，而是那些在文档中没有直接对应的 HTML 元素的特殊部分。伪元素选择器可能只选中元素的某一部分，甚至是向 HTML 页面插入的、尚不存在定义的那部分内容。

这些选择器以双冒号（`::`）开头，尽管大多数浏览器出于向下兼容的考虑也支持单冒号的写法。伪元素选择器的优先级与标签选择器相同（译注：原文为 type selector，即类型选择器。这里译为标签选择器旨在避免与类选择器混淆），均为 (0, 0, 1)。

::after —— 创建一个伪元素，使其匹配元素的最后一个子元素。该元素默认为行内（inline）元素，可用于插入文字、图片或其他形状。必须指定 content 属性（property）才能让该元素出现，例如：.menu::after。
::backdrop —— 选中一个与视口尺寸相同的盒子（box）。该盒子会立即渲染到对应元素的后面。这个对应元素必须是 `<dialog>`，或者通过 JavaScript 的 requestFullscreen() 方法（例如视频元素）全屏显示的元素。例如：dialog::backdrop。
::before —— 创建一个伪元素，使其成为匹配元素的第一个子元素。该元素默认为行内（inline）元素，可用于插入文字、图片或其他形状。必须指定 content 属性（property）才能让该元素出现，例如：.menu::before。
::first-letter —— 用于设置匹配元素首个文本字符的样式，例如：h2::first-letter。
::first-line —— 用于设置匹配元素的首行文本样式。
::marker —— 选中列表项的标记（marker）或者任何声明了 display: list-item 的元素。该伪类元素通常为一个项目符号或数字，具体视列表类型决定。利用它可以给列表标记指定颜色或尺寸大小。例如，可以使用 content 属性（property）将该标记替换为新的内容（比如不同的 Unicode 字符等）。
::placeholder —— 用于对 `<input>` 或 `<textarea>` 元素中显示的占位符文本指定样式。
::selection —— 用于指定用户通过鼠标高亮选中的任意文本的样式。通常用于变更选中文本的 background-color 值。只有少数属性（properties）可供样式调整，包括 color、background-color、cursor、text-decoration 等。

## A.6 属性选择器
Attribute selectors

属性选择器用于根据 HTML 的属性（attribute）来匹配元素。其优先级与一个类选择器相同，均为 (0, 1, 0)。

`[attr]` —— 选中存在指定属性 `attr` 的元素，无论属性值是什么。例如：`input[disabled]`。

`[attr="value"]` —— 选中具有指定属性 `attr`、且属性值等于指定字符串 `value` 的元素。例如：`input[type="radio"]`。

`[attr^="value"]` —— 属性 **前缀（“Starts with”）** 选择器。选中拥有指定属性 `attr`、且属性值以指定字符串 `value` 开头的元素，例如：`a[href^="https"]`。

`[attr$="value"]` —— 属性 **后缀（“Ends with”）** 选择器。选中拥有指定属性 `attr`、且属性值以指定字符串 `value` 结尾的元素，例如：`a[href$=".pdf"]`。

`[attr*="value"]` —— **包含（“Contains”）** 属性选择器。选中拥有指定属性 `attr`、且属性值包含指定字符串 `value` 的元素，例如：`[class*="sprite-"]`。

`[attr~="value"]` —— **空格分隔的列表（“Space-separated list”）** 属性选择器。选中拥有指定属性 `attr`、且属性值为一个以空格分隔的值的列表、且列表中的某个值与指定字符串 `value` 相同的元素。例如：`a[rel~="author"]`。

`[attr|="value"]` —— 选中的元素须同时满足：具有指定属性 `attr`；其属性值要么为指定的字符串 `value`，要么以 `value` 开头并紧跟一个连字符（hyphen，即 `-`）。适用于语言属性，因为该属性偶尔会指定某种语言的子集（例如墨西哥西班牙语用 `es-MX` 表示；而普通的西班牙语则为 `es`）。示例：`[lang|="es"]`。

上述写法均用到了方括号，第一次遇到时可能不太习惯，但它们和前面列举的所有选择器一样，都是普通的常规选择器。以下为利用属性选择器构建的样式声明。该代码选中所有 `<input type="password">` 元素并将其设置为蓝色边框。

```css
input[type="password"] {
  border: 2px solid blue;
}
```
另外，上述所有选择器都是 区分大小写 的。您也可以在右括号前添加一个 `i` 来忽略大小写，例如：`input[value="search" i]`。