# vue-spa

> Vue Spa 脚手架

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 代码规范 git在提交代码的时候会强制检查代码规范（如需更改相应规则请告知所有组员）
npm run lint 可以根据eslint做代码检查， --quiet为忽略警告项
npm run lint:fix 可以修复eslint的代码，不能修复的会报错，酌情处理错误
/* eslint-disable */     用于第三方类库忽略代码检查用（请尽量不要使用）
// eslint-disable-next-line  用于关闭下一行代码检查用（请尽量不要使用）

## 代码风格（如需更改相应规则请告知所有组员）
配置了项目根目录的.vscode下的setting.json
git config --global core.autocrlf false 关闭git自动转换成crlf

