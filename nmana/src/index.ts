import { Router } from '@vaadin/router'
import './styles/index.scss'
import './components/math'
import './components/code'
import './pages/index'
import './pages/about'

const outlet = document.getElementById('root')
const router = new Router(outlet)

router
  .setRoutes([
    { path: '/', component: 'page-index' },
    { path: '/about', component: 'page-about' },
  ])
  .then()
