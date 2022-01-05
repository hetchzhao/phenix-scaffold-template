# phenix-scaffold-simple

> A TypeScript simple template

## Usage

```bash
# 安装依赖
$ npm install

# 启动服务
$ npm start
```

## 目录

```md
├── .vscode
├── public/
│   ├── index.html                 # 应用入口 HTML
│   └── favicon.png                # Favicon
├── src/                           # 源码路径
│   ├── components/                # 自定义业务组件
│   │   └── Guide/
│   │       ├── index.[j,t]sx
│   │       └── index.module.scss
│   ├── pages/                     # 页面
│   │   └── index.tsx/
│   ├── global.scss                # 全局样式
│   └── app.[j,t]s[x]              # 首页
|   └── main.[j,t]s                # 应用入口脚本
|   └── typings.d.ts
├── README.md
├── package.json
├── .editorconfig
├── .eslintignore
├── .eslintrc.[j,t]s
├── .gitignore
├── .stylelintignore
├── .stylelintrc.[j,t]s
├── .prettierignore
├── .prettierrc.js
├── babel.config.js
|__ phenix.config.js               # 配置文件
└── [j,t]sconfig.json
```