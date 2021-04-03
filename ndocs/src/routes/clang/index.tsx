import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clang from './Clang'
import C from './c'
import Go from './go/Go'
import Js from './js/Js'
import Julia from './julia/Julia'
import Python from './python/Python'
import Rust from './rust/Rust'
import Swift from './swift/Swift'

export default function () {
  return (
    <div className="clang doc-level-1">
      <Routes>
        <Route path="/" element={<Clang />} />
        <Route path="/c/*" element={<C />} />
        <Route path="/go" element={<Go />} />
        <Route path="/js" element={<Js />} />
        <Route path="/julia" element={<Julia />} />
        <Route path="/python" element={<Python />} />
        <Route path="/rust" element={<Rust />} />
        <Route path="/swift" element={<Swift />} />
      </Routes>
    </div>
  )
}
