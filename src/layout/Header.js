import React from 'react';
import Logo from '../components/Logo';

const Header = () => {
  return (
    <header>
      <Logo />

      <section className="logoName">
        <h1>Anna Orysiak</h1>
        <h2>Frontend Developer</h2>
      </section>
    </header>
  );
}

export default Header;