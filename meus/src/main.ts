// @ts-ignore
import { ViteSSG } from 'vite-ssg'
// @ts-ignore
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'layouts-generated'
import App from './App.vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import './styles/main.css'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(App, { routes }, (ctx: any) => {
  Object.values(import.meta.globEager('./modules/*.ts')).map(i =>
    i.install?.(ctx),
  )
})
