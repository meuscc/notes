import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CNav from './CNav'
import CTextbook from './c_textbook/CTextbook'

export default function () {
  return (
    <div className="c doc-level-2">
      <Routes>
        <Route path="/" element={<CNav />} />
        <Route path="textbook" element={<CTextbook />} />
      </Routes>
    </div>
  )
}
