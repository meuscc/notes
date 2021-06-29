import React from 'react'
import { Main } from './pages/Main'
import Home from './pages/index/Home'
import Detail from './pages/detail/Detail'

import { useRoutes } from 'react-router-dom'

export const routes = [
  {
    path: '/',
    element: <Main />,
    name: 'Home',
    children: [
      {
        path: '/',
        fullPath: '/',
        element: <Home />,
        name: 'Home',
        label: '首页',
      },
      {
        path: '/detail',
        fullPath: '/detail',
        element: <Detail />,
        name: 'Detail',
        label: '首页',
      },
    ],
  },
]

function Routes() {
  return useRoutes(routes)
}

export function Router() {
  return <Routes />
}

export function App() {
  return <Router />
}
