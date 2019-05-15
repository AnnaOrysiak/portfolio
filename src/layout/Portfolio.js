import React, { Component } from 'react';
import '../style/portfolio.css'

import Navigation from './Navigation';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

class Portfolio extends Component {
  state = {
    language: "pl",
    content: [],
    mobile: true,
    menuActive: false,
    sectionActive: "header",
  }

  componentDidMount() {
    // tutaj pobieramy dane i umieszczamy w state (content)
    // tutaj sprawdzamy typ urządzenia: mobile/desktop (mobile)
  }

  componentDidUpdate() {
    // tutaj włączamy animację 1
    // tutaj zmieniamy state (sectionActive, menuActive, language)
    // tutaj włączamy animację 2
  }

  render() {

    return (
      <>
        <Navigation />
        <Header />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Portfolio;
