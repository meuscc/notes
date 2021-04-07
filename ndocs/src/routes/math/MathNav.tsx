import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MathNav() {
  return (
    <div>
      <NavLink to={'set_theory'}>SetTheory</NavLink>
      <NavLink to={'math_analysis'}>MathAnalysis</NavLink>
    </div>
  )
}
