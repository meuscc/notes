import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Clang() {
  return (
    <div>
      <NavLink to={'c'}>C</NavLink>
      <NavLink to={'go'}>Go</NavLink>
      <NavLink to={'js'}>JS</NavLink>
      <NavLink to={'rust'}>Rust</NavLink>
      <NavLink to={'swift'}>Swift</NavLink>
      <NavLink to={'julia'}>Julia</NavLink>
      <NavLink to={'python'}>Python</NavLink>
    </div>
  )
}
