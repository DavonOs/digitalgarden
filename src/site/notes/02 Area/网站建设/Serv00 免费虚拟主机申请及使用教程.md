---
{"dg-publish":true,"dg-permalink":"/Serv00-Apply","permalink":"/Serv00-Apply/","metatags":{"description":"","og:site_name":"DavonOs","og:title":"Serv00 免费虚拟主机申请及使用教程","og:type":"article","og:url":"https://zuji.eu.org/Serv00-Apply","og:image":null,"og:image:width":"200","og:image:alt":"articlecover","og:locale":"zh_cn"},"dgShowInlineTitle":true,"dg-note-properties":{"tags":null}}
---


[Serv00.com](https://www.serv00.com/)是一家提供免费虚拟主机服务的网站，用户可以免费申请一个虚拟主机，享受无限流量，支持PHP，Ruby，Python，NodeJS等多种编程语言和SSH登录。

注册和申请虚拟主机：

1. 打开 [官网](https://www.serv00.com) ，点击“Register”按钮进入注册页面。
2. 填写所需信息，其中“What is the cost of hosting on serv00.com?”一栏需要填写0。
3. 点击“Register”按钮完成注册后等待邮箱。
4. 按照邮箱信息登录账号，点击“Create New Account”按钮申请一个新的虚拟主机。

SSH登录
在申请虚拟主机后，用户可以使用SSH登录虚拟主机进行操作。以下是使用SSH登录的步骤：

1. 打开终端，输入命令 `ssh username@server_address` 登录虚拟主机。(`username` 是你在Serv00.com上注册的用户名，`server_address` 是虚拟主机的地址。)

2. 输入密码登录虚拟主机。

3. 定时任务
为了避免账号被清除，需要每3个月登录一次SSH或控制面板。为了方便，可以设置定时任务来实现自动登录。
	1. 编辑定时任务：`crontab -e`
	2. 在打开的文件中添加以下内容：`0 0 1 */3 * ssh username@server_address`

[【解决方案】serv00 ssh连不上应该怎么办？](https://www.nodeseek.com/post-157684-1)

若你分配的虚拟主机地址是s11.serv00.com，可以尝试改为如下地址连接：
- web11.serv00.com
- cache11.serv00.com
- panel11.serv00.com
- panel11.serv00.net
- （你的注册用户名）.serv00.net

如果你的 IP 被 ban，官方解锁：[点我](https://www.nodeseek.com/jump?to=https%3A%2F%2Fwww.serv00.com%2Fip_unban%2F)

ps：建议连 ssh 前，先用 cmd 命令 ping 一下是否能连通，提高效率。

[官方文档](https://docs.serv00.com/ )
[官方论坛](https://forum.serv00.com)

[[02 Area/网站建设/Serv00 玩转 MySQL\|Serv00 玩转 MySQL]]

[[02 Area/网站建设/Serv00 部署 Alist 并借助 PicList 实现图床功能\|Serv00 部署 Alist 并借助 PicList 实现图床功能]]