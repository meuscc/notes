import { Router } from '@vaadin/router'
import './pages/index'
import './pages/about'

const outlet = document.getElementById('root')
const router = new Router(outlet)

router.setRoutes([
  { path: '/', component: 'page-index' },
  { path: '/about', component: 'page-about' },
])
