import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export function Main() {
  return (
    <div>
      <NavLink to={'/'}>首页</NavLink>
      <NavLink to={'/detail'}>详情</NavLink>
      <Outlet />
    </div>
  )
}
