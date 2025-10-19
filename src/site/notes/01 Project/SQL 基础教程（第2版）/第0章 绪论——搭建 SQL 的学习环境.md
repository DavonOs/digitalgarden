---
{"dg-publish":true,"dg-permalink":"books/27055712/00","permalink":"/books/27055712/00/","metatags":{"description":"","og:site_name":"DavonOs","og:title":"第0章 绪论——搭建 SQL 的学习环境","og:type":"article","og:url":"https://zuji.eu.org/books/27055712/00","og:image":"https://file.ituring.com.cn/LargeCover/1712477631b07b9f5895","og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"tags":["program/sql"],"dgShowInlineTitle":true,"created":"2025-09-10 14:32","updated":"2025-09-11 08:17"}
---


## PostgreSQL 的安装和连接设置

### 安装步骤

1. 下载安装程序

大家可以从 PostgreSQL 的[下载页面](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#windows)下载安装程序。

本书将会介绍使用 64 位版的 Windows 安装程序（Win x 86- 64）在 Windows 10（64 位）系统中安装 PostgreSQL 的步骤，请大家结合自身实际下载相应的安装程序。例如，如果大家使用的是 32 位的 Windows 操作系统，请下载“Win x 86- 32”版本的安装程序（图 0-1），安装步骤都是一样的。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/a270ace37e9be51df7989f18fb2ce4da264bd0aa29e3499b587122ba2c5785f6.jpg)  
图 0-1 下载面向 Windows 的 PostgreSQL 安装程序

2. 运行安装程序

运行安装程序的时候，鼠标右键点击安装文件，然后选择“以管理员身份运行”。

> [!note]+ 注意
> 由于安装 PostgreSQL 需要操作系统的管理员权限，因此不能直接双击安装程序运行，必须“以管理员身份运行”才可以。这个过程中有可能会需要输入管理员密码，或者弹出运行许可的询问窗口，此时请输入密码，或点击“是”（OK）按钮。

然后点击安装画面（图 0-2）中的“Next > ”按钮。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/a5f94ef0735045f13eed0bd3722c1cff7bb6cdd4c3d0e2a7a99ddcf3eb26f959.jpg)  
图 0-2 安装开始

3. 选择安装路径
接下来会显示选择安装路径的画面（图 0-3）。默认的安装路径是“C:\Program Files\PostgreSQL\9.5”，但是因为有些用户的账号可能无法直接访问“Program Files”文件夹，所以我们把路径改为“C:\PostgreSQL\9.5”，然后点击“Next > ”按钮。安装过程中会自动创建文件夹，因此大家无需提前创建。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/8ce8544170e0ad3041cddc81aaff0bba6ab77f294ea0982578d0f97ad7ab0aa3.jpg)  
图 0-3 选择安装路径

4. 选择数据的保存路径
接下来显示的是选择数据保存路径的画面（图 0-4），无需修改默认路径“C:\PostgreSQL\9.5\data”，直接点击“Next >”按钮。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/59b5a67322ff551b48a7e6780d5ab0d99d0c75c2aba55fc8c1ebdaacd279f4ab.jpg)  
图 0-4 选择数据保存路径

5. 设置数据库管理员密码
在接下来的数据库管理员密码设置画面（图 0-5）中输入任意密码，点击“Next >”按钮。登录 PostgreSQL 时会用到这个密码，请大家务必牢记。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/397d5128f6208a5a0e00dec38f297a5634ed53763931e12e734e3c270063b042.jpg)  
图 0-5 设置数据库管理员密码

6. 设置端口号
接下来会出现端口号设置画面（图 0-6），无需修改，直接点击“Next >”按钮。通常情况下保持默认选项即可。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/f91eaf5f605089d47455f1c4bfdee67c070536c9db1b6ed619a33d51d97d0463.jpg)  
图 0-6 设置端口号

7. 设置地区
接下来是 PostgreSQL 地区设置画面（图 0-7）。选择“Chinese（Simplified），Singapore”，点击“Next >”按钮。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/599dbad1a1bfbe1c2499c9b1f29ef506a7225cb192c975adeefdcb0ab69a412b.jpg)  
图 0-7 设置地区

7. 安装
接下来是安装开始的画面（图 0-8）。直接点击“Next >”按钮，开始安装（图 0-9）。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/d383f44c0fe8eab3f253fc5d0c228cec1b12dbf857f244fa47662b419d19d2de.jpg)  
图 0-8 开始安装

接下来会显示安装完成的画面（图 0-10）。取消选中的“Launch Stack Builder at exit？”，点击“Finish”按钮。“Launch Stack Builder”会安装各种附带工具，如果只需要使用 PostgreSQL，就没必要安装这些工具。这样安装就完成了。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/225a1920e85d883246a527fdd75aa0e3426ffd02a2e342f0eb566e7ad6954843.jpg)  
图 0-9 安装进行中

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/c77b194b1fd2e265650b5eb7e3a802036ab8f7181cf127cf4b69b8429f79906b.jpg)  
图 0-10 安装完成

### 修改设置文件

为了提高安全性，我们需要修改一下 PostgreSQL 的设置文件。请使用记事本或其他文本编辑工具打开下面这个文件。

`C:\PostgreSQL\9.5\data\postgresql.conf`

使用 `listen_addresses` 作为关键词来查询文件内容。安装完成之后，该关键词会被设置成 `listen_addresses = '*'`。虽然这意味着允许所有远程主机进行连接，但是这次的学习环境只需要通过本地机器进行连接就可以了，因此我们在这一行的最前面添加一个 `#`，注释掉该行。

`listen_addresses = '*'`

添加如下一行新的内容，然后覆盖保存文件（图 0-11）。

`listen_addresses = 'localhost'`

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/a95dd75bdcac18597e69cbc53f16edbe37703dd998bf62bd3cfcef3f6723ff54.jpg)
图 0-11 添加 `listen_addresses = 'localhost'`

这样就设置成只允许本地机器进行连接了。

必须重新启动 PostgreSQL，该设置才能生效。点击“控制面板”  $\twoheadrightarrow$  “管理工具”  $\twoheadrightarrow$  “服务”。如果在控制面板中没有找到“管理工具”，那么请点击控制面板右上角的“查看方式”，选择“大图标”或者“小图标”，切换到图标显示模式。

在显示出来的窗口中找到“postgresql- x 64- 9.5”，用鼠标右键进行点击（图 0-12），然后在弹出的菜单中选择“启动”或者“重新启动”。

> [!note]+ 注意
> 如果 PostgreSQL 是已经启动的状态，那么“启动”选项就是灰色的，无法选择。反之，如果 PostgreSQL 是停止状态，那么“重新启动”选项就是灰色的，无法选择。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/4b5812eb9848c1001cf029dd4b33831b43765a5bf2cb2cb86a1d40f5ef46293e.jpg)  
图 0-12 在“服务”窗口中重新启动 PostgreSQL

这样，之前我们对 PostgreSQL 所做的“listen_addresses”的修改就生效了。

> [!note]+ 注意
> 如果错误地停止了“postgresql- x 64- 9.5”之外的其他服务，可能会造成操作系统无法正常工作，所以请一定不要停止其他服务。

此外，如果使用的是 32 位的安装程序，那么显示出来的服务名就是“postgresql-9.5”。

## 通过 PostgreSQL 执行 SQL 语句

PostgreSQL 提供了一个可以通过命令行来执行 SQL 语句的工具“psql”。psql 会把 SQL 语句发送给 PostgreSQL，然后再将接收到的执行结果显示出来。下面就来介绍一下使用 psql 执行 SQL 语句的方法。

下面将要执行的 SQL 语句的语法和意义将会在接下来的第 1 章和第 2 章学习，因此大家不必太过在意。

### 连接 PostgreSQL（登录）

现在已经完成了安装，接下来就让我们启动 psql，连接 PostgreSQL 吧。首先，启动命令提示符窗口。使用鼠标右键点击电脑桌面左下角的“Windows”图标，在弹出的菜单中选择“命令提示符（管理员）（A）”（图 0-13）。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/e106cb8b347afe2d73a2bf72d703e6e59b3ff01d26e2bb7cbe546e7a7047fae0.jpg)  
图 0-13 启动命令提示符窗口

> [!tip]+ 备忘
> 如果使用的是 Window 8/8.1，按如下步骤启动命令提示符窗口：
> 1. 在电脑的开始画面，同时点击键盘上的“Windows”键和“X”键。
> 2. 在画面左下角显示的菜单一览中点击“命令提示符（管理员）”。
> 
> 如果使用的是 Window 7，按如下步骤启动命令提示符窗口：
> 1. 在电脑的开始画面，点击键盘上的“Windows”键，在“搜索程序和文件”输入框中输入“cmd”。
> 2. 右键点击检索结果中的“cmd. exe”，选择“以管理员身份运行（A）”。

打开命令提示符窗口（图 0-14）之后，输入如下命令，然后按下回车键（Enter）。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/529153f91244f7a79d2a05f587a3297a08b81f03a68b32433a819bc9f6d890a2.jpg)  
图 0-14 命令提示符窗口

`C:\PostgreSQL\9.5\bin\psql.exe-U postgres`

接下来会显示出 `用户 postgres 的口令：`，要求输入密码。输入安装时设置的密码，按下回车键，然后就会在命令提示符窗口显示出 ` postgres=# `，意味着连接成功了（图 0-15）。

下面就可以执行 SQL 语句了。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/03817fc488c9732b6f6d41859d4dfa1cb920b8d491ed72bc5b74e61479ac6155.jpg)  
图 0-15 通过 psql 连接 PostgreSQL

> [!note]+ 注意
> 出于安全考虑，输入的密码不会在画面上显示出来。输入密码时，光标会一直在同一位置闪烁，看上去就像什么也没输入一样，但其实密码已经正常输入了，所以请在输入结束时按下回车键。

### 执行 SQL 语句

连接数据库之后，就可以执行 SQL 语句了。下面就让我们试着来执行一个简单的 SQL 语句吧。

1. 输入 SQL 语句

通过 psql 连接到示例数据库（postgres）之后，输入如下一行命令。
```postgresql
select 1; --空格键为半角空格
```

2. 按下回车键

输入结束之后，按下回车键，这样就可以执行这条 SQL 语句了。如果显示出如下信息，就表示执行成功了。

```
?column?
--------
1
```

> [!note]+ 注意
> `;` 是 SQL 的结束符，如果没有输入的话，即使按下回车键，SQL 语句也不会执行。因此，在执行 SQL 语句的时候，请大家注意不要忘记输入 `;`。

上面我们介绍了手动输入 SQL 语句的例子，其实直接复制本书的示例代码，粘贴在命令提示符窗口，也同样可以执行 SQL 语句。详细情况请参考本书 9- 2 节的专栏“在命令提示符窗口中的粘贴方法”。

### 创建学习用的数据库

本书将从第 1 章后半部分开始介绍各种 SQL 语句的书写方法。这里我们来创建一个学习用的数据库，提前准备一下吧。

数据库的创建步骤如下所示

1. 执行创建数据库的 SQL 语句

在命令提示符窗口，保持 PostgreSQL 连接的状态下，输入如下一行 SQL 语句，按下回车键。请注意，数据库的名称只能使用小写字母。

```postgresql
CREATE DATABASE shop;
--- 创建成功后，画面会显示如下信息：
CREATE DATABASE
```

2. 结束 psql

数据库创建成功之后，结束 psql。为了结束 psql，需要输入 `\q`，然后按下回车键。这样就切断了与 postgresql 的连接，返回到命令提示符窗口（图 0-19）。`\q` 中的 `q` 是“quit”（退出）的缩写。

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/751965e91fa0c1f3f417a0516d07d6b5c2b3c6c0625ed085cb6760249d8a34d6.jpg)  
图 0-19 从 PostgreSQL 登出

> [!note]+ 注意
> 现在通过 psql 连接（登录）的是安装 PostgreSQL 时自动创建的示例数据库 postgres。为了连接刚刚创建的数据库，我们需要暂时结束（退出）psql。由于 psql 在窗口关闭时也会结束，因此也可以通过点击 psql 窗口右上角的“X”按钮结束 psql。

### 连接学习用的数据库（登录）

下面就让我们登录刚刚创建的数据库“shop”吧。在命令提示符窗口执行如下命令。

```postgresql
C:\PostgreSQL\9.5\bin\psql.exe -U postgres - d shop
```

选项 `- dshop` 是指定“数据库 shop”的意思。

此时会要求输入 postgres 的密码，输入之后按下回车键。登录成功后会显示如下信息（图 0-20）。

`shop=#`

![](https://cdn-mineru.openxlab.org.cn/result/2025-09-10/73f80d02-cbfb-4685-880f-8c0771d72bfe/8533fbe4f9bd7d078d5422a69da50ff1d6fcfae4e63cb1cc3580d0db943efa49.jpg)  
图 0-20 示例数据库 shop 登录成功

这样数据库 shop 就登录成功了。接下来只需要根据本书的内容输入 SQL 语句，然后按下回车键，就可以执行 SQL 语句了。

本书将使用这个数据库 shop，通过执行各种各样的 SQL 语句来学习 SQL 语句的书写方法和功能。