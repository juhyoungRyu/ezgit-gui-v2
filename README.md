# ezgit-gui-v2

🥳 GUI-based service that will make using `Git` easier for you

## 📚 STACKS

<img src="https://img.shields.io/badge/Vue3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white">
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">

## Features

🤩 List of Git services that are working by one-click  
1️⃣ Push  
2️⃣ Pull  
3️⃣ Checkout  
4️⃣ Manage Branch  (Next Update 😉)

## Contributor Guide

```sh
# clone the project
git clone https://github.com/juhyoungRyu/ezgit-gui-v2.git

# enter the project directory
cd ezgit-gui-v2

# install dependency
pnpm install 

# develop
pnpm run dev
```

## Directory

```diff
+ ├─┬ electron
+ │ ├─┬ main
+ │ │ └── index.ts    entry of Electron-Main
+ │ └─┬ preload
+ │   └── index.ts    entry of Preload-Scripts
  ├─┬ src
  │ └── Component     Custom Vue Component
  │ └── App.vue       entry of Vue Component (#app)
  │ └── main.ts       entry of Electron-Renderer
  ├── index.html
  ├── package.json
  └── vite.config.ts
```
