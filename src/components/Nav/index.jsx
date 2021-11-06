import React from 'react';
import { Link } from 'wouter';
import { Navbar } from './style';

export default function Nav() {
  return (
    <Navbar>
      <Link href='/'>Home</Link>
      <Link href='/saved'>Saved</Link>
    </Navbar>
  );
}
