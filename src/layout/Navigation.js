import React from 'react';
import Logo from '../components/Logo';
import '../style/navigation.css'
import '../style/logo.css'

const Navigation = (props) => {

  const { naviHandler, langHandler } = props;

  const { about, contact, home, portfolio } = props.content;

  return (
    <div className='navigation'>
      <div className='navigation__burger' onClick={naviHandler}>
        <span className='navigation__burger__span' />
        <span className='navigation__burger__span' />
        <span className='navigation__burger__span' />
      </div>

      <nav>
        <Logo small={"small"} />

        <h3>Menu</h3>
        <div>
          <button className="navigation__button" value="pl" onClick={langHandler}>PL</button> / <button className="navigation__button" value="en" onClick={langHandler}>EN</button>
        </div>

        <ul>
          <li>{home}</li>
          <li>{portfolio}</li>
          <li>{about}</li>
          <li>{contact}</li>

        </ul>

      </nav>
    </div>
  );
}

export default Navigation;