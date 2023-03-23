// components/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <span>Login</span>
            </Link>
          </li>
          <li>
            <Link href="/admin">
              <span>Admin</span>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <span>Search</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
