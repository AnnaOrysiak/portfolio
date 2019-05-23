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
    content: {},
    mobile: true,
    menuActive: false,
    sectionActive: "header",
  }

  getData = (lang = "pl") => {
    console.log("otrzymany język", lang);
    return fetch('./content.json')
      .then((response) => response.json())
      .then((content) => {
        const translation = content.filter(element => element.language === lang)

        this.setState({ content: translation[0] })
      })
      .catch((error) => {
        console.log("Błąd! ", error)
      })
  }

  checkDevice() {
    const deviceWidth = (window.innerWidth > 0) ? window.innerWidth : "640";
    const deviceHeight = (window.innerHeight > 0) ? window.innerHeight : "360";
    if (deviceWidth > 823 && deviceHeight >= 1024) {
      this.setState({ mobile: false })
    }
  }

  playAnimation = () => {
    this.state.menuActive === false ? console.log("włączam animację_1") : console.log("włączam animację_2");
  }

  naviHandler = () => {
    this.setState(prevState => ({ menuActive: !prevState.menuActive })
    )
    document.querySelector(".navigation").classList.toggle("active");
  }

  langHandler = (e) => {
    const language = e.target.value;
    console.log("włączam język: ", language);

    this.setState({ language });
  }

  componentDidMount() {
    // pobieramy dane (content)
    this.getData();

    // tutaj sprawdzamy typ urządzenia: mobile/desktop (mobile)
    this.checkDevice();
  }

  componentDidUpdate() {
    // sprawdzamy czy zmienił się status menu, sekcja albo język

    if (this.state.language !== this.state.content.language) {
      this.getData(this.state.language);
    }

    // tutaj włączamy animację 1
    this.playAnimation();
    // tutaj zmieniamy state (sectionActive, menuActive, language)
    // tutaj włączamy animację 2
  }

  render() {

    const { content } = this.state;

    return (
      <>
        <Navigation naviHandler={this.naviHandler} langHandler={this.langHandler} content={content} />
        <Header />
        <Projects content={content} />
        <About content={content} />
        <Contact content={content} />
        <Footer />
      </>
    );
  }
}

export default Portfolio;
