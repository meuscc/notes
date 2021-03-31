import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MathAnalysisNav from './MathAnalysisNav';
import MATextBook from './ma_textbook/MATextBook';

export default function MathAnalysis() {
  return (
    <div className="c doc-level-2">
      <Routes>
        <Route path="/" element={<MathAnalysisNav />} />
        <Route path="text_book" element={<MATextBook />} />
      </Routes>
    </div>
  );
}
