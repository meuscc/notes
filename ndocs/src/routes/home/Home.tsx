import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <NavLink to={'math'}>math</NavLink>
      <NavLink to={'clang'}>clang</NavLink>
    </div>
  );
}
