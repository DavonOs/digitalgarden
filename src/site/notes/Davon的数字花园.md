---
{"dg-publish":true,"dg-home":true,"tags":["digitalgarden","gardenEntry"],"sticker":"emoji//1f3e1","permalink":"/Davon的数字花园/","dgPassFrontmatter":true}
---


Hello 👋，我是 Davon，欢迎来到我的数字花园🌱。

>[!tip]+ 这是什么
>- 是思考过程的容器，不按日期时间组织，而是通过上下文关联链接在一起。
>- 是不断发展的想法的集合，在可探索的空间中，随时间推移不断成长发展。
>- 是自然的，但不是偶然发生的，需要播种、修剪并塑造蜿蜒穿过它们的路径。
>- 是探索性的，作为半成品发布，并不精致或完整，每条路径都是新想法的起点。

作为开放式的花园，这是项目的[开源地址](https://github.com/DavonOs/digitalgarden)，可参考 [[花园配置办法\|花园配置办法]] 自行配置。花园使用 [Obsidian](https://obsidian.md/) 浇灌，并按照 [[03 Resource/Book/图书专著/Building a Second Brain#PARA组织系统\|第二大脑的PARA系统]] 进行组织管理：
- [[01 Project/项目\|项目]]
- [[02 Area/领域\|领域]]
- [[03 Resource/资源\|资源]]
- [[04 Archive/归档\|归档]]

若发现令人不适或涉及隐私的内容，请联系我，🦀🦀: dth1995911@gmail.com。

---
**🆕 最近创建**：
```dataviewjs
const now = moment();
dv.list(
	dv.pages()
		.filter(p=>moment(Number(p.file.cday)).isBetween(now.clone().subtract(7, 'days'), now, null, '[]'))
		.sort(p=>p.file.cday,'desc')
		.map(p=>moment(Number(p.file.cday)).format('yyyy-MM-DD')+' — '+p.file.link)
		.limit(5)
)
```

**⏰ 最近更新**：
```dataviewjs
const now = moment();
dv.list(
	dv.pages()
		.filter(p=>moment(Number(p.file.mday)).isBetween(now.clone().subtract(7, 'days'), now, null, '[]'))
		.sort(p=>p.file.mday,'desc')
		.map(p=>moment(Number(p.file.mday)).format('yyyy-MM-DD')+' — '+p.file.link)
		.limit(5)
)
```



