---
{"dg-publish":true,"dg-permalink":"git","permalink":"/git/","tags":["learn/program/git"]}
---

>[!tip]- Git是一个分布式的版本控制软件
>什么是分布式：文件夹拷贝→本地版本控制→集中式版本控制→分布式版本控制
>为什么要做版本控制：保留之前所有的版本，方便回滚和修改。

Git简介与安装（略）


Github项目下载

在Github上找到您要同步的项目，并复制项目的URL。

打开命令行工具（如Terminal或Command Prompt）。

输入：`git clone <项目URL>`，将项目的URL替换为您复制的项目URL即可将项目克隆到本地。

>注意，如此下载只有项目的主分支，而本地不存在其他项目分支。

要将 GitHub 项目上的所有分支克隆到本地，可以为`git clone`命令添加 `--mirror` 参数：`git clone --mirror <项目URL>`

例：`git clont --mirror https://github.com/tangly1024/NotionNext.git`

输入命令后， Git 会在本地创建一个裸版本的存储库，保存项目的所有分支和标签信息。

如何将git仓库克隆到指定文件夹中？

`git clone <repository_url> <destination_folder>`

`<repository_url>`是被克隆仓库的url地址，`<destination_folder>`是指定目标文件夹路径。

示例：`git clone <https://github.com/tangly1024/NotionNext.git> myfolder`

NotionNext项目会被克隆到当前目录下的myfolder文件夹中。

项目的本地管理

通过cd命令进入项目目录，查看所有文件和文件夹。

git对项目文件进行版本控制需要：文件管理—版本生成—版本回滚与恢复

1. 进入要管理的文件夹
2. 执行初始化命令，让Git帮我们管理当前文件夹：`git init`
管理当前目录下的文件状态：`git status`
🔔新增和修改过后的文件都是 <mark style="background: transparent; color: red">红色</mark>的。
3. 管理指定文件，如 <mark style="background: transparent; color: green">index.html</mark>（红变绿）：`git add index.html`
管理当前目录下所有文件： `git add .`

❗初次使用要进行个人信息配置用户名、邮箱，告诉Git你是谁再生成版本（仅需一次即可）：
```git
git config --global user.email "you@example.com"
git config --global user.name "Your Name"`
```
4. 生成版本：`git commit -m '描述信息'`

回滚到指定版本

要回滚到指定版本，可使用 `git reset` 命令指定要回滚的提交的哈希值或引用（如分支名）。以下是具体的步骤：

查询要回滚到的提交的哈希值或引用：

使用 `git log`命令查看提交历史，找到您希望回滚到的具体提交的哈希值或引用（如分支名）。

执行 `git reset` 命令进行版本回滚：

回滚到上一个版本：`git reset --hard HEAD^`

这个命令将当前分支的 HEAD 指针回滚到上一个提交（即上一个版本），并丢弃之后的所有修改。如果您只需要撤销最后一次提交，而不是回滚到上一个版本，您可以使用 git reset --soft HEAD^ 命令。这个命令将撤销最后一次提交的内容，但保留对文件的更改，使其成为暂存区的状态。

回滚到指定提交的版本，可以执行：`git reset --hard <commit-hash>`
将当前分支的 HEAD 指针直接指向指定的提交（即上一个版本），并丢弃之后的所有修改。

回滚到指定分支最新提交的版本，可以执行：`git reset --hard <branch-name>`

强制推送到远程分支：如果您想将回滚后的本地分支内容同步到远程分支，需要使用强制推送操作。执行类似以下命令：`git push -f origin <branch-name>`
请注意，使用强制推送命令会更改远程分支的历史记录，谨慎操作。

通过上述步骤，您可以将分支回滚到指定版本。请确保您了解回滚操作的后果，并在执行前备份重要数据。

您可以使用`git pull`命令来获取远程仓库的最新更新。输入以下命令：`git pull`就可以将Github项目的当前分支完整同步到本地，并随时获取最新的更新。

您可以通过 cd 命令进入项目文件夹，然后使用 `git fetch --all` 命令来获取所有分支的最新更新

查看所有本地和远程的分支：`git branch -a`

这样，您就可以将 GitHub 上项目的所有分支（包括主干和其他分支）克隆到本地。要切换到其他分支，可以使用 git checkout 命令。

远程分支已经删除的情况下，在本地输入 git branch -a 为和还会显示已删除的分支
是的，即使远程分支已经被删除，当您运行 git branch -a 命令时，仍会显示已删除的远程分支。这是因为 git branch -a 命令显示了本地分支和远程跟踪分支（包括已删除的）。这些已删除的远程分支会以 remotes/origin/branch_name 的形式显示在列表中。

如果您想要清理已删除的远程分支，可以进行以下操作：

拉取最新的远程分支列表： 运行以下命令拉取最新的远程分支列表：

git fetch --prune
这将删除已经在远程仓库中不存在的分支的远程跟踪分支。

之后再次运行 git branch -a 命令查看已删除的远程分支是否被清理，已删除的远程分支应该不再显示在列表中。

通过运行 git fetch --prune 命令，您可以及时清理本地存储库中不再存在的远程分支。如果您有任何其他问题或需要进一步帮助，请随时告诉我。我很乐意帮助您。

如何删除本地git项目

要删除本地Git项目，您可以按照以下步骤操作：

打开命令行工具（如Terminal或Command Prompt）。

使用cd命令进入要删除的Git项目的目录，确保您在项目目录中，然后输入以下命令删除整个Git项目：`rm -rf .git`

这将删除项目目录中名为.git的Git版本控制文件夹，从而完全删除与Git相关的信息。

如果您只想删除项目文件，而保留Git的版本控制信息，可以直接删除项目文件夹。在命令行中，输入以下命令删除整个NotionNext项目目录：`rm -rf NotionNext`

注意：在执行删除操作之前，请确保您确实要删除项目，并且已经备份了任何重要的文件。删除项目后，将无法恢复删除的文件。

您也可以同时删除Git版本控制信息和项目文件夹。您可以使用以下命令将完全删除项目：

在项目所在的文件夹中（不是项目文件夹本身）执行以下命令：rm -rf myproject

这样会完全删除项目文件夹及其中所有文件和Git版本控制信息。请注意，一旦执行此操作，您将无法恢复删除的文件，请确保您真的想要删除项目。

git 删除本地分支并同步到远程GitHub

要在本地删除分支并将更改同步到远程 GitHub，您可以执行以下步骤：

删除本地分支： 使用以下命令删除本地分支：`git branch -d <branch-name>`

如果分支未完全合并，则可以使用 -D 选项强制删除：`git branch -D <branch-name>`

推送删除的分支到远程仓库： 如果您想要在远程仓库中删除相应的分支，可以使用以下命令：`git push origin --delete <branch-name>`
这将删除远程仓库中名为 `branch-name` 的分支。

通过执行以上步骤，您可以删除本地分支并将删除操作同步到远程 GitHub 仓库。请确保您要删除的分支不再需要，并谨慎执行删除操作，因为这将不可逆转。如果还有其他问题或疑问，请随时告诉我。

