// / <reference types="vite/client" />

// declare module '*.vue' {
//     import { DefineComponent } from 'vue'
//     const component: DefineComponent<{}, {}, any>
//     export default component
//   }
  
//   declare module 'entities/decode';

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASE_URL: string
  // Ajoutez d'autres variables ici...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}