import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MathAnalysisNav from './MathAnalysisNav'
import MATextbook from './ma_textbook/MATextbook'

export default function MathAnalysis() {
  return (
    <div className="c doc-level-2">
      <Routes>
        <Route path="/" element={<MathAnalysisNav />} />
        <Route path="textbook" element={<MATextbook />} />
      </Routes>
    </div>
  )
}
