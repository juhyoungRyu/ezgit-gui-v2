# ezgit-gui-v2

🥳 GUI-based service that will make using `Git` easier for you

## 📚 STACKS

<img src="https://img.shields.io/badge/Vue3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white"> <img src="https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white"> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">

## Features

🤩 List of Git services that are working by one-click  
- Push  
- Pull  
- Checkout  
- Manage Branch  (Next Update 😉)

## Contributor Guide

```sh
# if using pnpm, edit global config
pnpm config set node-linker=hoisted
pnpm config set public-hoist-pattern=*
pnpm config set shamefully-hoist=true

# clone the project
git clone https://github.com/juhyoungRyu/ezgit-gui-v2.git

# enter the project directory
cd ezgit-gui-v2

# install dependency
npm install | pnpm install 

# develop
pnpm run dev
```

## Directory

```diff
  ├─┬ src
+ │ └── main
  │   └── index.ts      entry of Electron-Main
+ │   └─┬ preload
  │     └── index.ts    entry of Preload-Scripts
+ │ └── renderer
+ │   └── Component
  │   └── App.vue       entry of Vue Component (#app)
  │   └── main.ts       entry of Electron-Renderer
  ├── index.html
  ├── package.json
  └── vite.config.ts
```

## Todo
- [x] 폴더 구조 변경
- [x] Layout 변경
- [ ] 기능 추가
  - [ ] Push
  - [ ] Pull
  - [ ] Checkout
- [ ] 디자인 추가
