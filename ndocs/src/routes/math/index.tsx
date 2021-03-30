import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Math from './Math';
import SetTheory from './set_theory/SetTheory';
import MathAnalysis from './math_analysis/MathAnalysis';

export default function () {
  return (
    <div className="math doc-level-2">
      <Routes>
        <Route path="/" element={<Math />} />
        <Route path="/set_theory" element={<SetTheory />} />
        <Route path="/math_analysis" element={<MathAnalysis />} />
      </Routes>
    </div>
  );
}
