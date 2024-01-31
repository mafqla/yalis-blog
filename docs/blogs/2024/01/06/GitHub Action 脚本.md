---
title: GitHub Action脚本
description: GitHub Action - 自动部署及发布版本及生成更新日志
author: yalis
date: 2024-01-06 15:25
categories:
  - github
tags:
  - github
lastUpdated: true
showComment: true
---

# GitHub Action 脚本 <Badge text="持续更新" type="warning" />

## Deploy-action


```yml
name: Build and Deploy
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout  code
        uses: actions/checkout@v3

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: latest

      - name: Set node version to 20
        uses: actions/setup-node@v2
        with:
          node-version: 20
          cache: 'pnpm'

      - run: pnpm install
      - name: Install and Build
        run: |
          pnpm build
        env:
          NODE_OPTIONS: '--max_old_space_size=4096'

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.3
        with:
          BRANCH: gh-pages
          FOLDER: docs/.vitepress/dist
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
```

## release-please-action

首先在根目录 `.github/workflows` 下创建 `release.yml` 文件，并添加以下代码

```yml
yml复制代码on:
  push:
    branches:
      - master

name: Release

jobs:
  release-please:
    runs-on: ubuntu-latest
    steps:
      - uses: GoogleCloudPlatform/release-please-action@v3
        id: release
        with:
          token: ${{ secrets.RELEASE_TOKEN }}
          release-type: node
          package-name: standard-version
          changelog-types: '[{"type": "types", "section":"Types", "hidden": false},{"type": "revert", "section":"Reverts", "hidden": false},{"type": "feat", "section": "Features", "hidden": false},{"type": "fix", "section": "Bug Fixes", "hidden": false},{"type": "improvement", "section": "Feature Improvements", "hidden": false},{"type": "docs", "section":"Docs", "hidden": false},{"type": "style", "section":"Styling", "hidden": false},{"type": "refactor", "section":"Code Refactoring", "hidden": false},{"type": "perf", "section":"Performance Improvements", "hidden": false},{"type": "test", "section":"Tests", "hidden": false},{"type": "build", "section":"Build System", "hidden": false},{"type": "ci", "section":"CI", "hidden":false}]'
```

当监听到 `master` 分支变化时，该 action 会根据项目中符合规范的 `commit` ，自动生成更新日志，并提交发布版本的 `pull request` 。

`changelog-types` 字段默认只有 `feat` 和 `fix` 类型，如果需要展示其他的更新日志，可以如上自行设置。

接着我们还需要配置 `RELEASE_TOKEN` 变量。

## 生成 Token

脚本编写完成之后，我们需要配置 `RELEASE_TOKEN` 这个变量，确保 `release-please-action` 有对应的权限进行一些必要的修改和更新。

首先进入到设置页面，找到 `Developer settings` 中的 `Personal access tokens`，然后点击 `Generate new token` 进行新增。

```
Note` 可以随意填写，不需要与 `action` 配置的 `RELEASE_TOKEN` 一样，这里我们填 `release-test
```

`Expiration` 设置不过期 `No expiration`，然后勾选以下权限

最后点击 `Generate token`，即可生成对应 `Token`，然后点击复制按钮进行复制。

**注意：该页面关闭之后，如果没有复制或者保存的话，token 将会消失，只能重新执行上述步骤重新生成。**

## 生成 RELEASE_TOKEN

接下来，需要到项目中的 `Settings` 去配置 `RELEASE_TOKEN`

点击 `New repostory secret`，`Name` 需要与 `action` 中的 `secrets.xxx` 一致，`Value` 的话就是我们上一步生成出来的 `Token`，直接粘贴即可。

之后点击 `Add secret` 即可生成 `RELEASE_TOKEN`

## automerge-action

我们使用 `automerge-action` 来自动合并 pr 。

根目录 `.github/workflows` 下创建 `auto-merge.yml` 文件，并添加以下代码

```yml
yml复制代码name: Automerge

on:
  pull_request:
    types:
      - labeled
      - unlabeled
      - synchronize
      - opened
      - edited
      - ready_for_review
      - reopened
      - unlocked
  pull_request_review:
    types:
      - submitted
  status: {}

jobs:
  # 合并发布版本的 pr 到 master
  auto-merge:
    runs-on: ubuntu-latest
    steps:
      - name: Automerge
        uses: 'pascalgn/automerge-action@v0.14.3'
        env:
          GITHUB_TOKEN: '${{ secrets.RELEASE_TOKEN }}'
          MERGE_LABELS: ''
          MERGE_FILTER_AUTHOR: 'mafqla'
```

这样我们就配置完成了，推送到 `master` 的时候，即可查看效果。
