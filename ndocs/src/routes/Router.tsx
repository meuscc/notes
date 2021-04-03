import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Main'
import UserLayout from './user/User'

export function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />} />
      <Route path="auth/*" element={<UserLayout />} />
    </Routes>
  )
}
