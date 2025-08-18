---
{"dg-publish":true,"dg-permalink":"design/Figma-Design/Frames-in-Figma-Design","permalink":"/design/Figma-Design/Frames-in-Figma-Design/","metatags":{"description":"Before you start Who can use this feature Available on all plansAnyone with can edit access to a file can create and edit frames...","og:site_name":"DavonOs","og:title":"Figma Design 中的框架","og:type":"article","og:url":"https://zuji.eu.org/design/Figma-Design/Frames-in-Figma-Design","og:image":"https://help.figma.com/hc/theming_assets/01HZFG1N1QJPKABHT3PHQQ0J9J","og:image: width":"200","og:image: alt":"articlecover","og:locale":"zh_cn"},"tags":["Design/UI/Figma"],"dgShowInlineTitle":true,"created":"2025-07-03 09:56","updated":"2025-07-21 20:31"}
---

谁可以使用此功能

[所有计划](https://help.figma.com/hc/en-us/articles/360040328273) 均可用

任何拥有 `can edit` 文件访问权限的人都可以创建和编辑框架

框架（Frames）是作为容器来组织其他图层（如形状、图像和文本）形成整体设计的图层。你甚至可以在其他框架内嵌套框架，从而创建更复杂的设计。框架允许你从单个元素（如图标或按钮）构建到整个网站布局和移动应用设计。

直接位于画布上的框架称为**顶级框架**。包含其他图层的框架称为**父**对象。父框架内的任何图层或嵌套框架都称为**子**对象。了解更多关于[[父子关系和兄弟关系\|父级、子级和同级关系]] 的信息。

与其他图层类型类似，你可以[调整框架的属性](https://help.figma.com/hc/en-us/articles/#h_01J1981B7AHRK7DX39NYD817VQ) ，包括其尺寸和填充。

框架还为您提供访问其他功能的方式，包括[布局指南](https://help.figma.com/hc/en-us/articles/360040450513)、[自动布局](https://help.figma.com/hc/en-us/articles/360040451373)、[约束](https://help.figma.com/hc/en-us/articles/360039957734)、和[原型设计](https://help.figma.com/hc/en-us/articles/360040314193)。

您可以通过左侧边栏的图层面板中的框架图标 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="23" height="23" rx="3" stroke="#CCCCCC" stroke-width="1" fill="none" /><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 4C7.22386 4 7 4.22386 7 4.5V7H4.5C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H7V16H4.5C4.22386 16 4 16.2239 4 16.5C4 16.7761 4.22386 17 4.5 17H7V19.5C7 19.7761 7.22386 20 7.5 20C7.77614 20 8 19.7761 8 19.5V17H16V19.5C16 19.7761 16.2239 20 16.5 20C16.7761 20 17 19.7761 17 19.5V17H19.5C19.7761 17 20 16.7761 20 16.5C20 16.2239 19.7761 16 19.5 16H17V8H19.5C19.7761 8 20 7.77614 20 7.5C20 7.22386 19.7761 7 19.5 7H17V4.5C17 4.22386 16.7761 4 16.5 4C16.2239 4 16 4.22386 16 4.5V7H8V4.5C8 4.22386 7.77614 4 7.5 4ZM16 8H8V16H16V8Z" fill="currentcolor" fill-opacity="0.9"/></svg> 来识别框架。

![Image showing a frame in the Layers panel with a grid-like icon.png](https://help.figma.com/hc/article_attachments/26978254616727)

## 选择框架工具

通过在工具栏中选择它，或使用键盘快捷键 <kbd>F</kbd> 或 <kbd>A</kbd> 来启用框架工具。

![Location of the frame tool as the second option in the Figma toolbar.png](https://help.figma.com/hc/article_attachments/24793898578711)

## 创建框架

选择框架工具后，有几种方法可以创建框架：
### 点击画布

选择框架工具后，执行以下操作之一：

- 点击画布创建顶级框架。如果这是您在本文件当前会话中创建的第一个顶级框架，该框架的尺寸将被设置为 100 x 100。否则，顶级框架将使用您创建的最后一个顶级框架的相同尺寸。
- 在现有框架内点击以添加一个 100 x 100 的嵌套框架。
- 在画布上或现有框架内点击并拖动以添加具有自定义尺寸的框架。

提示：您也可以使用框架选择功能围绕现有对象创建框架。选择一个或多个图层，然后使用框架选择的键盘快捷键：

- Mac：⌥ Option ⌘ Command G Mac: 0 1 2
- Win：Ctrl Alt G Windows: 0 1 2

### 使用框架预设

当框架工具启用时，右侧边栏会出现一系列框架预设。点击箭头展开该部分，从列表中选择一个预设。您可以选择适用于流行设备和资源模板的预设：

- Phone 手机
- Tablet 平板电脑
- Desktop 桌面电脑
- Presentation 演示
- Watch 手表
- Paper 论文
- Social Media 社交媒体
- Figma Community Figma 社区
- Archive 存档

如果你想将一个框架更改为不同的预设，请选择该框架，并使用右侧边栏中的框架下拉菜单选择不同的框架预设。

### 复制现有框架

复制现有框架有两种方法：

- 快速添加：启用框架工具后，将鼠标悬停在现有框架上，并点击框架两侧的加号"+"。这将复制框架，并使其他框架移动以适应新框架。 ![3 mobile frames sitting horizontally in a section. Cursor clicks on frame tool in the toolbar, hovers over the third mobile frame and two dots appear on either side of the frame. Cursor hovers over the left-side dot and the dot becomes a plus icon. Cursor clicks on it, and the third mobile frame is duplicated in between the second and third frame. The original third mobile frame (now the fourth frame) moves over to the right and the section expands to accommodate. ](https://help.figma.com/hc/article_attachments/29097254706455)
- 复制快捷键：选择一个框架并使用复制键盘快捷键 ⌘ Command D （Mac） / ⌃ Control D （Windows）。您无需启用框架工具即可使用此方法。了解更多关于[复制选项](https://help.figma.com/hc/en-us/articles/4409078832791-Copy-and-paste-objects#h_01J92HBF9A2T61H5YH99SGW24A)的信息。

对于这两种方法，如果您的框架位于一个区域中，该区域将调整大小以适应新的框架。

你也可以通过按住键盘修饰键，点击框架两侧的+号，快速创建一个相同大小的空白框架：

- Mac：<kbd>⌥Option</kbd>
- Windows：<kbd>Alt</kbd>

![Two mobile frames side horizontally in a section. An overlay in the bottom left writes 'quick add blank frame' with mac and windows keyboard modifiers. Cursor selects frame tool from toolbar, hovers over the first frame and two dots appear on either side of the frame. Cursor hovers over the right-side dot, which then turns into a plus icon. Cursor clicks it while holding the keyboard modifer and a blank frame of the same size appears between first and second frame. The second frame (now the third frame) moves to the right and the section expands to accommodate.](https://help.figma.com/hc/article_attachments/29097254713111)

## 框架属性

框架有一些相关属性。框架支持以下属性。

- 圆角半径：将框架的角圆化，以创建更柔和的边缘。
- 裁剪内容：隐藏任何超出框架边界的对象。
- 布局指南：创建指南，以帮助设计中的视觉结构。
- 自动布局：创建能响应内容的动态框架
- 填充：将实色、渐变、图片（PNG、JPEG、GIF、TIFF 和 WEBP）应用于框架。
- 描边：为框架添加描边以创建边框或轮廓
- 效果：为框架添加阴影或模糊

### 额外功能

框架允许你访问 Figma 中的额外功能。你需要使用框架来使用以下功能或功能：

- **[Layout Guides](https://help.figma.com/hc/en-us/articles/360040450513 "Visual aids that give structure and coherence to your design. They can only be applied to Frames and help to keep objects aligned as you adjust the Frame. They are not visible on the final design or in exports.")**: Apply transparent uniform grids, columns, and/or rows to frames to provide visual structure  
    布局指南：将透明均匀的网格、列和/或行应用于框架，以提供视觉结构
- [**Constraints**](https://help.figma.com/hc/en-us/articles/360039957734): Define how child objects respond when you resize a frame. Apply constraints to **objects** within a frame.  
    约束：定义当调整框架大小时，子对象如何响应。将约束应用于框架内的对象。
- **[Auto Layout](https://help.figma.com/hc/en-us/articles/360040451373)**: Add Auto layout to frames to create dynamic layouts that respond to their contents  
    自动布局：将自动布局添加到框架中，以创建响应其内容的动态布局
- [**Prototyping**](https://help.figma.com/hc/en-us/articles/360040314193): Create interactive prototypes that move between frames in your canvas  
    原型设计：创建可在画布中不同框架间切换的交互式原型

框架是一个父级对象。这意味着它可以控制或影响其中放置的任何子对象。

[[父子关系和兄弟关系\|了解更多关于 Figma 中父子关系的信息。]] 

Tip: You can hand off frames for development without reorganizing your file. [Create a section for your frame](https://help.figma.com/hc/en-us/articles/9771500257687), or convert the frame to a section. Then, [mark the section as **Ready for dev**](https://help.figma.com/hc/en-us/articles/9771500257687#h_01HHN2CDAMSCQ3XVSEA2JYSEQJ).  
提示：您可以在不重新组织文件的情况下将框架移交给开发。为您的框架创建一个区域，或将框架转换为区域。然后，将区域标记为“准备开发”。

### Adjust properties of the frame  
调整框架属性

过去，在选中框架时可以调整子对象的属性。现在，你可以直接调整框架本身的属性。

使用键盘快捷键 Enter 或 Return 选择子对象。
按 Tab 键选择下一个同级对象。

按 Shift + Tab 组合键选择上一个同级对象。

按下 Shift + Enter 选择父级

If you want to adjust the fill and stroke properties of a frame and it's children, you can use **Selection colors** to [view or adjust colors in a mixed selection](https://help.figma.com/hc/en-us/articles/360042553434).  
如果你想调整框架及其子框架的填充和描边属性，可以使用选择颜色来查看或调整混合选择中的颜色。

## 在框架内嵌套框架

在 Figma 中，你可以在其他框架内创建框架。我们称这个过程为嵌套。这使你能够将具有不同属性的框架组合起来，以构建复杂的界面。

这会创建新的层级或关系：

- 顶层框架：任何直接位于画布上的框架。要使框架成为顶层框架，你不能将其嵌套在另一个框架、组或对象内
- 嵌套框架：任何放置在另一个框架内的框架。你可以将框架放置在顶层框架内，或放置在其他嵌套框架内。嵌套框架既是父框架也是子框架
- 子对象：任何位于框架内的对象

[Learn more about parent, child, and sibling relationships.  了解更多关于父级、子级和同级关系。](https://help.figma.com/hc/en-us/articles/360039959014)

### 顶层框架

Figma 在图层面板中加粗顶级框架，并在画布上显示任何顶级框架的名称。

![Image showing a top-level frame in the canvas and layers panel.png](https://help.figma.com/hc/article_attachments/26978261914391)

### 嵌套框架

嵌套框架是指你放置在另一个框架或对象内的框架。这使得它们既是父框架也是子框架。你可以将框架放置在：

- Top-level frames  顶层框架
- Other nested frames  其他嵌套框架
- In groups  组内

在我们的示例中，每个元素都在自己的框架内。我们在顶部有一个状态栏，底部有一个导航菜单。我们还有一个包含我们即将到来的票务详情的卡片。

使用我们设备预设之一，我们可以为我们的元素创建一个顶层框架。我们可以将我们的元素添加到顶层框架中，以构建我们移动应用的一个屏幕。

![Image of an example app design in the canvas, where you can see the individual frames by themselves on the left and then combined into a single frame on the right.png](https://help.figma.com/hc/article_attachments/24436758037399)

## 调整框架大小

你可以像操作画布上的其他对象一样与框架交互，包括改变框架的大小或比例。改变框架大小有几种方法：

### 拖动框架

手动拖动以调整框架大小。

1. 在画布上或左侧边栏的图层面板中选择框架。
2. 点击其中一个角上的控制柄并拖动以调整大小。或者，点击其中一条边缘并拖动。

提示！要忽略子对象上的任何[[应用约束以定义图层如何调整大小\|约束]]，请按住修饰键：

- Mac：<kbd>⌘Command</kbd>
- Win：<kbd>Ctrl</kbd>

### 更改框架预设

选择另一个框架预设来更改框架的大小。

1. 选择框架。
2. 在右侧边栏的属性面板中，选择框架字段。
3. 从列表中选择预设。
4. 为流行的设备和资源模板选择预设：
    - Phone  手机
    - Tablet  平板电脑
    - Desktop  桌面
    - Presentation  演示文稿
    - Watch  观看
    - Paper  论文
    - Social Media  社交媒体
    - Figma Community  Figma 社区
    - Archive  存档
5. Figma 将更新你的框架尺寸以匹配预设。

注意：如果你已对任何子对象应用了[[应用约束以定义图层如何调整大小\|约束]]，Figma 将调整它们的大小以匹配新的框架预设。否则，框架内的对象将保持原始尺寸和位置。

### 属性面板

使用右侧边栏更新框架的宽度和高度。

在 W 和 H 字段中输入一个新数字，或将鼠标悬停在图标上以拖动调整字段。向左拖动以减小，向右拖动以增加。

选择宽度（Width）和高度（Height）字段旁边的 `<icon>` 锁定长宽比（Lock aspect ratio）以在调整图层大小时保持其比例。
![aspect-ratio-right-sidebar.png](https://help.figma.com/hc/article_attachments/29799683542679)  

提示：您可以使用尺寸字段进行计算。这使您能够快速缩放或调整对象大小。

- `%` 百分比，例如 50% 
- `+` 增加，例如 +100 
- `-` 减少，例如 -20 
- `*` 乘法，例如 \*4 
- `/` 分割，例如 /8 

无法将宽度或高度乘以百分比，例如 ×50% 将得到原始值 50 倍的结果，而不是 50。

### 调整以适应

你可以调整框架的大小，使其缩小或放大以适应其子对象。这将重新绘制框架，使其围绕其内部对象的边界。
使用键盘快捷键：
- Mac：<kbd>⌥Option</kbd> <kbd>Shift</kbd> <kbd>⌘Command</kbd> <kbd>R</kbd> 
        Mac: 0 1 2 3
- Win：<kbd>Alt</kbd> <kbd>Shift</kbd> <kbd>Control</kbd> <kbd>R</kbd>  
        Win: 0 1 2 3

点击右侧边栏的布局部分![Image showing the location of the resize to fit icon in the top-right corner of the Design tab in the right sidebar.png](https://help.figma.com/hc/article_attachments/24436878068247)

## 取消组合框架

要取消组合框架，请选择框架并按下：

Mac：<kbd>⌘Command</kbd> <kbd>Shift</kbd> <kbd>G</kbd> 或 <kbd>⌘Command</kbd> <kbd>Delete</kbd>

Win：<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>G</kbd> 或 <kbd>Control</kbd> <kbd>Backspace</kbd>