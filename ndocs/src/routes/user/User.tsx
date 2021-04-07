import React from 'react'
import { Outlet } from 'react-router-dom'

export default function UserLayout(): JSX.Element {
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      User
      <Outlet />
    </div>
  )
}
