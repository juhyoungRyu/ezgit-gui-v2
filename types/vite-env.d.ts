/// <reference types="vite/client" />

// 해당 파일이 필요 한지?
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
