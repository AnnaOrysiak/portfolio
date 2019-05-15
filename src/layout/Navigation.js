import React from 'react';
import '../style/navigation.css'

const Navigation = () => {

  return (
    <div className='navigation'>
      <div className='burgerMenu'>
        <span />
        <span />
        <span />
      </div>

      <nav>
        <h3>Menu</h3>
        <h4>PL / EN</h4>

        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>

        </ul>

      </nav>
    </div>
  );
}

export default Navigation;