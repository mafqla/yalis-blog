import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'
import './styles/custom.css'
import './styles/index.scss'
import { EnhanceAppContext } from 'vitepress'
import Layout from './Layout.vue'

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp(ctx: EnhanceAppContext) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)

    // register your custom global components
    // ctx.app.component('MyGlobalComponent' /* ... */)
  }
}
