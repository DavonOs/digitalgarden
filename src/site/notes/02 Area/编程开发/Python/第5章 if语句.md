---
{"dg-publish":true,"dg-permalink":"program/python/if-statements","permalink":"/program/python/if-statements/","metatags":{"description":"Python编程：从入门到实践（第3版）第5章 if语句的学习笔记","og:site_name":"DavonOs","og:title":"第5章 IF语句","og:type":"article","og:url":"https://zuji.eu.org/program/python/if-statements","og:image":"https://img.alicdn.com/i2/101450072/O1CN01vnmrBj1CP1LlhPSyR-101450072.jpg","og:image:width":"400","og:image:alt":"articlecover","og:locale":"zh_cn"},"tags":["program/python"],"dgShowInlineTitle":true,"created":"2024-10-25 10:20","updated":"2025-07-17 12:58"}
---


学习目标

编写结果为True/False的条件测试
编写简单if语句、if-else语句、if-elif-else语句
使用for循环处理列表元素时，对某些元素做特殊处理。

## 条件测试

编程时经常需要检查一系列条件，并据此决定采取什么措施。在Python 中，if 语句让你能够检查程序的当前状态，并采取相应的措施。

每条 if 语句的核心都是一个值为 True 或 False 的表达式，这种表达式称为条件测试。

Python 根据条件测试的值是 True 还是 False 来决定是否执行 if 语句中的代码。如果条件测试的值为 True，Python 就执行紧跟在 if 语句后面的代码；如果为 False，Python 就忽略这些代码。

### 检查是否相等

最简单的条件测试：检查比较当前变量的值是否与特定的值相等。
```python
>>> car = 'bmw'
>>> car == 'bmw'
True
```

第一行使用一个等号将 car 的值设置为 'bmw'，这种做法你已经见过很多次了。接下来的一行使用两个等号检查 car 的值是否为 'bmw'。这个相等运算符在它两边的值相等时返回 True，否则返回 False。在这个示例中，两边的值相等，因此 Python 返回 True。 如果变量 car 的值不是 'bmw'，上述条件测试将返回 False：

```python
>>> car = 'audi'
>>> car == 'bmw'
False
```

一个等号是陈述，于是第一行代码可解读为：将变量 car 的值设置为 'audi'。
两个等号则是发问，于是第二行代码可解读为：变量 car 的值是 'bmw' 吗？
大多数编程语言使用等号的方式与这里的示例相同。

假设你有一个汽车列表，想将其中每辆汽车的名称打印出来。对于大多数汽车，应以首字母大写的方式打印其名称，但是汽车名'bmw'应以全大写的方式打印。

下面的代码遍历这个列表，并以首字母大写的方式打印其中的汽车名，以全大写的方式打印'bmw'：

```python
cars = ['audi', 'bmw', 'subaru', 'toyota']

for car in cars:
		if car == 'bmw':
				print(car.upper())
		else:
				print(car.title())
>>>
Audi
BMW
Subaru
Toyota
```

这个示例中的循环首先检查当前的汽车名是否是 `'bmw'`。如果是，就以全大写的方式打印，否则以首字母大写的方式打印。

### 如何在检查是否相等时忽略大小写

在 Python 中检查是否相等时是区分大小写的。例如，两个大小写不同的值被视为不相等：

```python
>>> car = 'Audi' 
>>> car == 'audi'
False
```

如果大小写很重要，这种行为有其优点。但如果大小写无关紧要，你只想检查变量的值，可先将变量的值转换为全小写的，再进行比较：

```python
>>> car = 'Audi'
>>> car.lower() == 'audi'
True
```

无论值`'Audi'`的大小写如何，上述条件测试都将返回 True，因为它不区分大小写。`lower()`方法不会修改存储在变量`car`中的值，因此进行这样的比较不会影响原来的变量：

```python
>>> car = 'Audi'
>>> car.lower() == 'audi'
True
>>> car
'Audi'
```

网站采用类似的方式让用户输入的数据符合特定的格式。

例如，网站可能使用类似的条件测试来确保用户名是独一无二的，而并非只是与另一个用户名的大小写不同：在用户提交新的用户名时，把它转换为全小写的，并与所有既有用户名的小写版本进行比较。执行这种检查，如果已经有用户名 `'john'`（不管大小写如何），则用户在提交用户名`'John'`时将遭到拒绝。

### 检查是否不等

要判断两个值是否不等，可使用不等运算符（!=）。下面使用一条 if 语句来演示如何使用不等运算符。我们将把顾客点的比萨配料（topping）存储在一个变量中，再打印一条消息，指出这名顾客点的配料是否是意式小银⻥（anchovies）：

```python
requested_topping = 'mushrooms'
if requested_topping != 'anchovies':
		print("Hold the anchovies!")
>>>
Hold the anchovies!
```

这些代码行将`requested_topping`的值与`'anchovies'`进行比较。如果这两个值不等，Python 将返回 True，进而执行紧跟在 if 语句后面的代码；如果相等，Python 将返回 False，不执行紧跟在 if 语句后面的代码。

由于`requested_topping`的值不是`'anchovies'`，因此执行print()函数。

你编写的大多数条件表达式会检查两个值是否相等，但有时候检查两个值是否不等的效率更高。

### 数值比较

检查数值非常简单。例如，下面的代码检查一个人是否是 18 岁：
```python
age = 18
age == 18
>>>
True
```

还可以检查两个数是否不等。例如，下面的代码在提供的答案不正确时打印一条消息：

```python
magic_number = 17
if magic_number != 42:
		print("That is not the correct answer. Please try again!")
>>>
That is not the correct answer. Please try again!
```

神秘数（magic number）的值17不是神秘数42，条件得到满足，因此缩进的代码行得以执行。
神秘数42出自科幻小说《银河系漫游指南》，指“生命、宇宙以及任何事情的终极答案”。——编者注

条件语句可包含各种数学比较，如小于、小于等于、大于、大于等于：

```python
age = 19
age < 21
>>>
True
age <= 21
>>>
True
age > 21 
>>>
False
age >= 21
>>>
False
```

每种数学比较都能成为 if 语句的一部分，从而让你能够直接检查你感兴趣的多个条件。

### 检查多个条件

你可能想同时检查多个条件。例如，有时候需要在两个条件都为 True 时才执行相应的操作，而有时候只要求一个条件为 True。在这些情况下，关键字 `and` 和 `or` 可助你一臂之力。

使用 and 检查多个条件

要检查两个条件是否都为 True，可使用关键字 and 将两个条件测试合而为一。如果每个条件测试都通过了，整个表达式就为 True；如果至少一个条件测试没有通过，整个表达式就为 False。 

例如，要检查两个人是否都不小于 21 岁，可使用下面的条件测试：
```Python
age_0 = 22
>>> age_1 = 18
>>> age_0 >= 21 and age_1 >= 21
False
>>> age_1 = 22
>>> age_0 >= 21 and age_1 >= 21
True
```

首先，定义两个用于存储年龄的变量：`age_0` 和 `age_1`。然后，检查这两个变量是否都大于或等于 21。and 左边的条件测试通过了，但 and 右边的条件测试没有通过，因此整个条件表达式的结果为 False。接下来，将 `age_1` 改为 22，这样 `age_1` 的值也大于 21，因此两个条件测试都通过了，导致整个条件表达式的结果为True。

为了改善可读性，可将每个条件测试都分别放在一对括号内，但并非必须这样做。如果使用括号，条件测试将类似于：`(age_0 >= 21) and (age_1 >= 21)`

使用 or 检查多个条件

关键字 or 也能够让你检查多个条件，但只要满足其中一个条件，就能通过整个条件测试。仅当所有条件测试都没有通过时，使用 or 的表达式才为 False。

下面再次检查两个人的年龄，但检查的条件是至少有一个人的年龄不小于 21 岁：

```python
>>> age_0 = 22
>>> age_1 = 18
>>> age_0 >= 21 or age_1 >= 21
True
>>> age_0 = 18
>>> age_0 >= 21 or age_1 >= 21
False
```

同样，首先定义两个用于存储年龄的变量。由于对 age_0 的条件测试通过了，因此整个表达式的结果为 True。接下来，将 age_0 减小为18。在最后的条件测试中，两个条件测试都没有通过，因此整个表达式的结果为 False。

### 检查特定的值是否在列表中

有时候，执行操作前必须检查列表是否包含特定的值。例如，在结束用户的注册过程之前，需要检查他提供的用户名是否已在用户名列表中；在地图程序中，需要检查用户提交的位置是否在已知位置的列表中。

要判断特定的值是否在列表中，可使用关键字`in`。下面看看你可能会为比萨店编写的一些代码。这些代码首先创建一个列表，其中包含用户点的比萨配料，然后检查特定的配料是否在该列表中。

```python
>>> requested_toppings = ['mushrooms', 'onions', 'pineapple']
>>> 'mushrooms' in requested_toppings
True
>>> 'pepperoni' in requested_toppings
False
```

关键字 in 让 Python 检查列表 requested_toppings 是否包含 'mushrooms' 和 'pepperoni'。这种技巧很有用，让你能够在创建一个列表后，轻松地检查其中是否包含特定的值。

### 检查特定的值是否不在列表中

还有些时候，确定特定的值不在列表中很重要。在这种情况下，可使用关键字 `not in`。例如，有一个列表包含被禁止在论坛上发表评论的用户，这样就可以在允许用户提交评论前检查他是否被禁言了：

```python
banned_users = ['andrew', 'carolina', 'david']
user = 'marie'
if user not in banned_users:
		print(f"{user.title()}, you can post a response if you wish.")
>>>
Marie, you can post a response if you wish.
```

这里的 if 语句明白易懂：如果 user 的值不在列表banned_users中， Python 将返回 True，进而执行缩进的代码行。 用户 'marie' 不在列表 banned_users 中，因此她将看到一条邀请她发表评论的消息：

### 布尔表达式

随着对编程的了解越来越深入，你将遇到术语布尔表达式，它不过是条件测试的别名罢了。与条件表达式一样，布尔表达式的结果要么为 True，要么为 False。

布尔值通常用于记录条件，如游戏是否正在运行或用户是否可以编辑网站的特定内容：game_active = True can_edit = False

在跟踪程序状态或程序中重要的条件方面，布尔值提供了一种高效的方式。

## 5.3 IF 语句

理解条件测试之后，就可以开始编写 if 语句了。if 语句有很多种，选择使用哪一种取决于要测试的条件数。前面在讨论条件测试时，列举了多个if 语句示例，下面更深入地讨论这个主题。

### 简单的 IF 语句
最简单的 if 语句只有一个条件测试和一个操作：

```python
if conditional_test:
		do something
'''
if 你的条件表达式:
		满足条件下，需要执行的代码
'''
```

第一行可包含任意条件测试，而在紧跟在测试后面的缩进代码块中，可执行任意操作。如果条件测试的结果为 True，Python 就会执行紧跟在 if 语句后面的代码，否则 Python 将忽略这些代码。

假设有一个表示某个人年龄的变量，而你想知道这个人是否到了投票的年龄，可使用如下代码：

```python
age = 19
if age >= 18:
		print("You are old enough to vote!")
>>>
You are old enough to vote!
```

Python 检查变量 age 的值是否大于或等于 18。答案是肯定的，因此 Python 执行缩进的函数调用 print() 打印信息：You are old enough to vote!

在 if 语句中，缩进的作用与 for 循环中相同。

如果条件测试通过了，将执行 if 语句后面所有缩进的代码行，否则将忽略它们。可根据需要，在紧跟在 if 语句后面的代码块中添加任意数量的代码行。

下面在一个人已到投票年龄时再打印一行输出，问他是否登记了：

```python
age = 19
if age >= 18:
		print("You are old enough to vote!")
		print("Have you registered to vote yet?")
>>>
You are old enough to vote!
Have you registered to vote yet?
```

如果 age 的值小于 18，这个程序将不会有任何输出。

### if-else 语句

你经常需要在条件测试通过时执行一个操作，在没有通过时执行另一个操作。在这种情况下，可使用 Python 提供的 `if-else` 语句。

if-else 语句块类似于简单的 if 语句，但其中的 else 让你能指定条件测试未通过时要执行的操作。

```python
if conditional_test:
		do something
else:
		do anotherthing
'''
if 你的条件表达式:
    满足条件下，需要执行的代码
else:
    未满足条件，需要执行的代码
'''
```

在一个人已到投票年龄时显示与前面相同的消息，在不到投票年龄时显示一条新消息：

```python
age = 17
if age >= 18:
		print("You are old enough to vote!")
		print("Have you registered to vote yet?")
else:
		print("Sorry, you are too young to vote.")
		print("Please register to vote as soon as you turn 18!")
>>>
Sorry, you are too young to vote.
Please register to vote as soon as you turn 18!
```

上述代码之所以可行，是因为只存在两种情形：要么已到投票年龄，要么不到。

**if-else 结构非常适合于让 Python 执行两种操作之一的情形**。在这样简单的 if-else 结构中，总会执行两个操作中的一个。

### if-elif-else 语句

现实世界通常需要考虑两个以上的情形，此时可使用 Python 提供的 `if-elif- else` 语句。

Python 只执行 `if-elif-else` 结构中的一个代码块。它依次检查每个条件测试，直到遇到通过了的条件测试。条件测试通过后，Python 将执行紧跟在它后面的代码，并跳过余下的条件测试。

```python
'''
if 你的条件表达式:
    满足条件下，需要执行的代码
elif 你的条件表达式:
    满足条件下，需要执行的代码
elif 你的条件表达式:
    满足条件下，需要执行的代码
else:
    满足条件下，需要执行的代码
'''
```

例如，来看一个根据年龄段收费的游乐场。
4岁以下免费。
4（含）〜18岁收费25美元。
年满18岁收费40美元。
如果只使用一条if语句，该如何确定一个人所属的年龄段，并打印一条包含门票价格的消息呢？

```python
age = 12
if age < 4:
		print("Your admission cost is $0.")
elif age < 18:
		print("Your admission cost is $25.")
else:
		print("Your admission cost is $40.")
>>>
Your admission cost is $25.
```

if 测试检查一个人是否未满4岁。如果是，Python 就打印一条合适的消息，并跳过余下的测试。elif 代码行其实是另一个 if 测试，它仅在前面的测试未通过时才会运行。在这里，我们知道这个人不小于4岁，因为第一个条件测试未通过。如果这个人未满18岁，Python 将打印相应的消息，并跳过 else 代码块。如果 if 测试和 elif 测试都未通过， Python 将运行下一个else 代码块中的代码。 

在这个示例中，if 测试的结果为 False，因此不执行其代码块。elif 测试的结果为 True（12 小于 18），因此执行其代码块。输出为一个句子， 向用户指出门票价格。只要年满 18 岁，前两个条件测试就都不能通过。在这种情况下，将执行else 代码块，指出门票价格为 40 美元。

为了让代码更简洁，可不在 if-elif-else 代码块中打印门票价格，而是只在其中设置门票价格，并在它后面添加一个函数调用 print()：

```python
age = 12
if age < 4:
		price = 0
elif age < 18:
		price = 25
else:
		price = 40
print(f"Your admission cost is ${price}.")
```

像上一个示例那样，缩进的代码行根据年龄设置变量 price 的值。在 if-elif-else 语句中设置 price 的值后，一个未缩进的函数调用 print()会根据这个变量的值打印一条消息，指出门票价格。

这些代码的输出与上一个示例相同，但 if-elif-else 语句所做的事更少：它只确定门票价格，而不是在确定门票价格的同时打印一条消息。除了效率更高以外，这些修订后的代码还更容易修改：要调整输出消息的内容，只需修改一个而不是三个函数调用 print()。

### 使用多个 elif 代码块

假设前述游乐场要给⽼年人打折，可再添加一个条件测试，判断顾客是否符合打折条件。下面假设年满65岁的⽼人可半价（即 20 美元）购买门票：

```python
age = 12
if age < 4:
		price = 0
elif age < 18:
		price = 25
elif age < 65:
		price = 40
else:
		price = 20
print(f"Your admission cost is ${price}.")
```

这些代码大多未变。第二个 elif 代码块通过检查确定年龄不到 65 岁后， 才将门票价格设置为全票价格——40 美元。请注意，在 else 代码块中， 必须将所赋的值改为 20，因为仅当年龄达到 65 岁时，才会执行这个代码块。

### 省略 else 代码块

Python 并不要求 if-elif 结构后面必须有 else 代码块。在一些情况下，else 代码块很有用；而在其他情况下，使用一条 elif 语句来处理特定的情形更清晰：

```python
age = 12
if age < 4:
		price = 0
elif age < 18:
		price = 25
elif age < 65:
		price = 40
elif age >= 65:
		price = 20
print(f"Your admission cost is ${price}.")
```

最后的 elif 代码块在顾客年满65岁时，将价格设置为20 美元。这比使用 else 代码块更清晰一些。经过这样的修改，每个代码块都仅在通过了相应的条件测试时才会执行。

else 是一条包罗万象的语句，只要不满足任何 if 或 elif 中的条件测试，其中的代码就会执行。这可能引入无效甚至恶意的数据。

如果知道最终要测试的条件，应考虑使用一个 elif 代码块来代替 else 代码块。这样就可以肯定，仅当满足相应的条件时，代码才会执行。

### 测试多个条件

if-elif-else 语句虽然功能强大，但仅适用于只有一个条件满足的情况：在遇到通过了的条件测试后，Python 就会跳过余下的条件测试。这种行为很好，效率很高，让你能够测试一个特定的条件。

然而，有时候必须检查你关心的所有条件。在这种情况下，应使用一系列不包含 elif 和 else 代码块的简单 if 语句。在可能有多个条件为 True，且需要在每个条件为 True 时都采取相应措施时，适合使用这种方法。

下面再来看看前面的比萨店示例。如果顾客点了两种配料，就需要确保在其比萨中放入这些配料：
```python
requested_toppings = ['mushrooms', 'extra cheese']
if 'mushrooms' in requested_toppings:
		print("Adding mushrooms.")
if 'pepperoni' in requested_toppings:
		print("Adding pepperoni.")
if 'extra cheese' in requested_toppings:
		print("Adding extra cheese.")
print("\nFinished making your pizza!")
>>>
Adding mushrooms.
Adding extra cheese.
Finished making your pizza!
```

首先创建一个列表，其中包含顾客点的配料。第一条 if 语句检查顾客是否点了配料蘑菇（mushrooms）。如果点了，就打印一条确认消息。检查配料辣香肠（pepperoni）的代码也是一条简单的 if 语句，而不是 elif 或 else 语句。因此不管前一个条件测试是否通过，都将执行这个测试。最后一条 if 语句检查顾客是否要求多加芝士（extra cheese）；不管前两个条件测试的结果如何，都会执行这些代码。每当这个程序运行时，都会执行这三个独立的条件测试。因为这个示例检查了每个条件，所以将在比萨中添加蘑菇并多加芝⼠。

如果像下面这样转而使用 if-elif-else 语句，代码将不能正确运行，因为只要有一个条件测试通过，就会跳过余下的条件测试：
```python
requested_toppings = ['mushrooms', 'extra cheese']
if 'mushrooms' in requested_toppings:
		print("Adding mushrooms.")
elif 'pepperoni' in requested_toppings:
		print("Adding pepperoni.")
elif 'extra cheese' in requested_toppings:
		print("Adding extra cheese.")
print("\nFinished making your pizza!")
>>>
Adding mushrooms.
Finished making your pizza!
```

第一个条件测试检查列表中是否包含 'mushrooms'。它通过了，因此将在比萨中添加蘑菇。然而，Python 将跳过 if-elif-else 语句中余下的条件测试，不再检查列表中是否包含 'extra cheese' 和 'pepperoni'。结果就是，只会添加顾客点的第一种配料，不会添加其他配料。

总之，如果只想运行一个代码块，就使用 `if-elif-else` 语句；如果要运行多个代码块，就使用一系列独立的`if` 语句。

## 5.4 使用 if 语句处理列表

结合使用 if 语句和列表，可完成一些有趣的任务：对列表中特定的值做特殊处理；高效管理不断变化的情形，如餐馆是否还有特定的⾷材；证明代码在各种情形下都将按预期运行。

### 检查特殊元素

本章开头通过一个简单的示例演示了如何处理特殊值 `'bmw'`——需要采用不同的格式打印它。现在你对条件测试和 if 语句有了大致的认识，下面进一步研究如何检查列表中的特殊值，并对其做合适的处理。

继续使用前面的比萨店示例。这家比萨店在制作比萨时，每添加一种配料都打印一条消息。要以极高的效率编写这样的代码，可以创建一个包含顾客所点配料的列表，并使用一个循环来指出添加到比萨中的配料：
```python
requested_toppings = ['mushrooms', 'green peppers', 'extra cheese']
for requested_topping in requested_toppings:
		print(f"Adding {requested_topping}.")
print("\nFinished making your pizza!")
>>>
Adding mushrooms.
Adding green peppers.
Adding extra cheese.

Finished making your pizza!
```

输出很简单，因为上述代码不过是一个简单的 for 循环。

然而，如果比萨店的⻘椒（green peppers）用完了，该如何处理呢？为了妥善地处理这种情况，可在 for 循环中包含一条 if 语句：

```python
requested_toppings = ['mushrooms', 'green peppers', 'extra cheese']
for requested_topping in requested_toppings:
		if requested_topping == 'green peppers':
				print("Sorry, we are out of green peppers right now.")
		else:
				print(f"Adding {requested_topping}.")
print("\nFinished making your pizza!")
>>>
Adding mushrooms.
Sorry, we are out of green peppers right now.
Adding extra cheese.

Finished making your pizza!
```

这里在为比萨添加每种配料前都进行检查。if 语句检查顾客点的是否是⻘椒。如果是，就显示一条消息，指出不能点⻘椒的原因。else 代码块确保其他配料都将被添加到比萨中。输出表明，已经妥善地处理了顾客点的每种配料。

### 确定列表非空

目前为止，我们对于要处理的每个列表都做了一个简单的假设——它们都至少包含一个元素。因为马上就要让用户来提供存储在列表中的信息，所以不能再假设循环运行时列表非空。有鉴于此，在运行 for 循环前确定列表非空很重要。

下面在制作比萨前检查顾客点的配料列表是否为空。如果列表为空，就向顾客确认是否要点原味比萨（plain pizza）；如果列表非空，就像前面的示例那样制作比萨：

```python
requested_toppings = []
if requested_toppings:
		for requested_topping in requested_toppings:
				print(f"Adding {requested_topping}.")
		print("\nFinished making your pizza!")
else:
		print("Are you sure you want a plain pizza?")
>>>
Are you sure you want a plain pizza?
```

首先创建一个空列表，其中不包含任何配料。然后进行简单的检查，而不是直接执行 for 循环。在 if 语句中将列表名用作条件表达式时，Python 将在列表至少包含一个元素时返回 True，在列表为空时返回 False。如果`requested_toppings`非空，就运行与前一个示例相同的 for 循环；否则打印一条消息，询问顾客是否确实要点不加任何配料的原味比萨。

> 对于数值0、空值 None、单引号空字符串 ''、双引号空字符串 ""、空列表 []、空元组 ()、空字典 {}，Python 都会返回 False。——编者注


### 使用多个列表

顾客的要求五花八门，在比萨配料方面尤其如此。如果顾客要在比萨中添加炸薯条（French fries），该怎么办呢？可以使用列表和 if 语句来确定能否满足顾客的要求。

我们来看看如何在制作比萨前拒绝怪异的配料要求。

下面的示例定义了两个列表，其中第一个包含比萨店供应的配料，第二个则包含顾客点的配料。这次对于`requested_toppings`中的每个元素，都先检查它是否是比萨店供应的配料，再决定是否在比萨中添加它：

首先定义一个列表，其中包含比萨店供应的配料。请注意，如果比萨店供应的配料是固定的，也可以使用一个元组来存储它们。然后创建另一个列表，其中包含顾客点的配料。请注意那个不同寻常的配料——'french fries'。接下来，遍历顾客点的配料列表。在这个循环中，对于顾客点的每种配料，都检查它是否在供应的配料列表中。如果答案是肯定的，就将其加入比萨，否则运行 else 代码块：打印一条消息，告诉顾客不供应这种配料。
```python
available_toppings = ['mushrooms','olives','green peppers','pepperoni','pineapple','extra cheese']
requested_toppings = ['mushrooms','french fries','extra cheese']
for requested_topping in requested_toppings:
		if requested_topping in available_toppings:
				print(f"Adding {requested_topping}.")
		else:
				print(f"Sorry, we don't have {requested_topping}.")
print("\nFinished making your pizza!")
>>>
Adding mushrooms.
Sorry, we don't have french fries.
Adding extra cheese.

Finished making your pizza!
```
## 动手一试
条件测试：编写一系列条件测试，将每个条件测试以及对结果的预测和实际结果都打印出来。类似于：
```python
car = 'subaru'
print("Is car == 'subaru'? I predict True.")
print(car == 'subaru')
print("\nIs car == 'audi'? I predict False.")
print(car == 'audi')
```
详细研究实际结果，直到明白为何为 True 或 False。
创建至少10个条件测试，结果为 True 和 False 至少5个。

更多条件测试：对于下列情况，至少编写两个条件测试，结果分别为 True 和 False。
- 检查两个字符串是否相等和不等。
- 用`lower()`方法条件测试。
- 涉及相等、不等、大于、小于、大于等于和小于等于的数值比较。
- 使用关键字and和or的条件测试。
- 测试特定的值是否在列表中。
- 测试特定的值是否不在列表中。

外星人颜色：假设玩家在游戏中消灭了一个外星人，请创建一个名为alien_color的变量，并将其赋值为'green'、'yellow'或'red'。
- 编写一条if语句，测试外星人是否为绿色。若是，打印消息指出玩家获得5分。
- 编写两个版本，上述条件测试在其中一个版本通过，另一个版本中未通过（未通过条件测试时没有输出）。
编写一个if-else结构
若外星人是绿色，打印消息，指出玩家得5分。
若外星人不是绿色，打印消息，指出玩家得10分。
编写这个程序的两个版本，在一个版本中执行if代码块，另一版本中执行else代码块。

将if-else结构改为if-elif-else结构。
若外星人是绿色，打印消息，指出玩家得5分。
若外星人是黄色，打印消息，指出玩家得10分。
若外星人是红色，打印消息，指出玩家得15分。
编写这个程序的三个版本，分别在外星人为绿、黄、红时打印消息。

人生的不同阶段：设置变量 age 的值，再编写一个 if- elif-else 结构，根据 age 的值判断这个人处于人生的哪个阶段。
若年龄小于 2 岁，打印消息，指出这个人是婴儿。
若年龄为 2（含）~4 岁，打印消息，指出这个人是幼儿。
若年龄为 4（含）~13 岁，打印消息，指出这个人是儿童。
若年龄为 13（含）~18 岁，打印消息，指出这个人是少年。
若年龄为 18（含）~65 岁，打印消息，指出这个人是中青年人。
若年龄达到65岁，打印消息，指出这个人是老年人

喜欢的水果：创建一个你喜欢的水果列表，名为favorite_fruits，再编写一系列if语句，检查列表是否包含特定水果。如果是，打印一条类似消息：You really like bananas!

练习 5.8：以特殊方式跟管理员打招呼

创建一个至少包含 5 个用户名的列表，并且其中一个用户名为 'admin'。想象你要编写代码，在每个用户登录网站后都打印一条问候消息。遍历用户名列表，向每个用户打印一条问候消息。如果用户名为 'admin'，就打印一条特殊的问候消息，如下所示。
Hello admin, would you like to see a status report?
否则，打印一条普通的问候消息，如下所示。
Hello Jaden, thank you for logging in again.

练习 5.9：处理没有用户的情形

在为练习 5.8 编写的程序中，添加一条 if 语句，检查用户名列表是否为空。 如果为空，就打印如下消息。
We need to find some users!
删除列表中的所有用户名，确认将打印正确的消息。

练习 5.10：检查用户名

按照下面的说明编写一个程序，模拟网站如何确保每个用户的用户名都独一无二。
创建一个至少包含 5 个用户名的列表，并将其命名为current_users。
再创建一个包含 5 个用户名的列表，将其命名为 new_users，并确保其中有一两个用户名也在列表 current_users 中。 遍历列表 new_users，检查其中的每个用户名是否已被使用。如果是，就打印一条消息，指出需要输入别的用户名；否则，打印一条消息，指出这个用户名未被使用。
确保比较时不区分大小写。换句话说，如果用户名 'John' 已被使用，应拒绝用户名 'JOHN'。（为此，需要创建列表current_users 的副本，其中包含当前所有用户名的全小写版本。）

练习 5.11：序数

序数表示顺序位置，如 1st 和 2nd。序数大多以 th 结尾，只有 1st、2nd、3rd 例外。
在一个列表中存储数字 1〜9。
遍历这个列表。
在循环中使用一个 if-elif-else 结构，打印每个数字对应的序数。输出内容应为 "1st 2nd 3rd 4th 5th 6th 7th 8th9th"，每个序数都独占一行。

5.5 设置 if 语句的格式

本章的每个示例都展示了良好的格式设置习惯。在条件测试的格式设置方面，PEP 8 提供的唯一建议是：在诸如双等号、>= 和 <= 等比较运算符两边各添加一个空格。例如：`if age < 4:`要比`if age<4:`更好。这样的空格不会影响 Python 对代码的解读，只是让代码阅读起来更容易。

练习 5.12：设置 if 语句的格式

审核你在本章编写的程序，确保正确地设置了条件测试的格式。

练习 5.13：自己的想法

与刚拿起本书时相比，现在你是一名能力更强的程序员了。鉴于你对如何在程序中模拟现实情形有了更深入的认识，可以考虑使用程序来解决一些问题了。随着编程技能不断提高，你可能想解决一些问题，请将这方面的想法记录下来。想想你可能想编写的游戏，想研究的数据集，以及想创建的 Web 应用程序。