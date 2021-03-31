import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home';
import Math from './math';
import Clang from './clang';
import Nsound from './nsound';

export default function MainLayout(): JSX.Element {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="math/*" element={<Math />} />
        <Route path="clang/*" element={<Clang />} />
        <Route path="nsound/*" element={<Nsound />} />
      </Routes>
    </div>
  );
}
