import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home';
import Math from './math';
import Clang from './clang';

export default function MainLayout(): JSX.Element {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="math/*" element={<Math />} />
        <Route path="clang/*" element={<Clang />} />
      </Routes>
    </div>
  );
}
