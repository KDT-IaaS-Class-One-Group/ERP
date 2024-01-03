import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Sidebar />;
}
