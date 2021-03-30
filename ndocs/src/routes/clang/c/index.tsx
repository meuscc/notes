import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CContent from './CContent';
import CDoc from './cdoc/CDoc';

export default function () {
  return (
    <div className="c doc-level-2">
      <Routes>
        <Route path="/" element={<CContent />} />
        <Route path="cdoc" element={<CDoc />} />
      </Routes>
    </div>
  );
}
