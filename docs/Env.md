# lerna使用说明

## 框架编译方法
```
git clone https://github.com/fw-assets/omelop.git
cd omelop
yarn
yarn run build
```

## 中文手册：https://juejin.cn/post/7136925215388499998
## 初次发布可以采用下面两种发布方式：

 > 1.运行 lerna publish from-git。会将当前标签中涉及的NPM包再发布一次。（不会再更新package.json，只是执行npm publish）；

 > 2.运行 lerna publish from-package。会将当前所有本地包中的 package.json 和远端 npm 比对，如果 npm 上不存在此包的最新版本，都执行一次 npm publish。

 ## 包更新
 > 1. yarn global add npm-check-updates
 

