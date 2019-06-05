import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import Logo from '../components/Logo';
import ScrollButton from '../components/ScrollButton';
import '../style/navigation.css'
import '../style/logo.css'

const Navigation = (props) => {

  const { naviHandler, langHandler, language, scrollY } = props;

  const { about, contact, home, portfolio } = props.content;

  return (
    <div className='navigation'>
      <div className='naviBurger' onClick={naviHandler}>
        <span className='naviBurgerSpan' />
        <span className='naviBurgerSpan' />
        <span className='naviBurgerSpan' />
        <span className='naviBurgerSpan' />
      </div>

      <nav>
        <Logo small={"small"} />

        <h3 className="naviHeader">Menu</h3>
        <div className="languageSelection">
          <button className={language === "pl" ? "naviButton current" : "naviButton"} value="pl" onClick={langHandler}>PL</button> / <button className={language === "en" ? "naviButton current" : "naviButton"} value="en" onClick={langHandler}>EN</button>
        </div>
        <ul className="naviList">
          <li className="naviListElement" onClick={naviHandler}><ScrollIntoView selector="header">
            <button className="naviListButton mdl-button mdl-js-button mdl-button--raised">
              {home}
            </button>
          </ScrollIntoView></li>

          <li className="naviListElement" onClick={naviHandler}><ScrollIntoView selector=".projectSection">
            <button className="naviListButton mdl-button mdl-js-button mdl-button--raised">
              {portfolio}
            </button>
          </ScrollIntoView></li>

          <li className="naviListElement" onClick={naviHandler}><ScrollIntoView selector=".aboutSection">
            <button className="naviListButton mdl-button mdl-js-button mdl-button--raised">
              {about}
            </button>
          </ScrollIntoView></li>

          <li className="naviListElement" onClick={naviHandler}><ScrollIntoView selector=".contactSection">
            <button className="naviListButton mdl-button mdl-js-button mdl-button--raised">
              {contact}
            </button>
          </ScrollIntoView></li>

        </ul>


      </nav>
      <ScrollButton scrollY={scrollY} scrollStepInPx="50" delayInMs="16.66" />

    </div>
  );
}

export default Navigation;