import React from 'react';
import Logo from '../components/Logo';

const Header = () => {
  return (
    <header>
      <Logo />

      <section className="logoName">
        <h1>
          <div className="letter">A</div>
          <div className="letter">n</div>
          <div className="letter">n</div>
          <div className="letter">a</div>
          <div className="letter"> &nbsp; </div>
          <div className="letter">O</div>
          <div className="letter">r</div>
          <div className="letter">y</div>
          <div className="letter">s</div>
          <div className="letter">i</div>
          <div className="letter">a</div>
          <div className="letter">k</div>
        </h1>
        <div className="logoNameDark">
        <h2>
         <div className="letter">F</div>
         <div className="letter">r</div>
         <div className="letter">o</div>
         <div className="letter">n</div>
         <div className="letter">t</div>
         <div className="letter">e</div>
         <div className="letter">n</div>
         <div className="letter">d</div>
         <div className="letter">&nbsp; </div>
         <div className="letter">D</div>
         <div className="letter">e</div>
         <div className="letter">v</div>
         <div className="letter">e</div>
         <div className="letter">l</div>
         <div className="letter">o</div>
         <div className="letter">p</div>
         <div className="letter">e</div>
         <div className="letter">r</div>
       </h2>
       </div>
      </section>
    </header>
  );
}

export default Header;