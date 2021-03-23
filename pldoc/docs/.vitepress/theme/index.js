import Layout from './Layout.vue'
import DefaultTheme from 'vitepress/theme'

import Header from '../../../components/Header.vue'
export default {
    ...DefaultTheme,

    enhanceApp({ app, router, siteData }) {
        app.component('Header', Header)

    }
}