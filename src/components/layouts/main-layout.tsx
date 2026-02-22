import React from 'react';
import NavBar from '@/components/common/navbar';
import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="max-w-5xl mx-auto">
        <Outlet />
      </main>
    </React.Fragment>
  );
}
