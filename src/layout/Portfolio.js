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
    scrollY: 0
  }

  getData = (lang = "pl") => {
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

    if (deviceHeight >= 768 && deviceWidth >= 1024) {
      this.setState({ mobile: false })
    } else {
      this.setState({ mobile: true })
    }
  }

  playAnimation = () => {
    console.log("Animacja startowa");
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

  handleScroll = (e) => {
    const scrollY = window.scrollY;
    this.setState({ scrollY });
  }

  componentDidMount() {
    // pobieramy dane (content)
    this.getData();

    // tutaj sprawdzamy typ urządzenia: mobile/desktop (mobile)
    this.checkDevice();

    // tutaj włączamy animację startową
    this.playAnimation();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    // sprawdzamy czy zmienił się status menu albo język
    if (this.state.language !== this.state.content.language) {
      this.getData(this.state.language);
    }
  }

  render() {

    const { language, content, mobile, scrollY } = this.state;

    return (
      <>
        <Navigation naviHandler={this.naviHandler} langHandler={this.langHandler} scrollHandler={this.scrollHandler} language={language} content={content} scrollY={scrollY} />
        <Header />
        <main>
          <Projects content={content} mobile={mobile} />
          <About content={content} />
          <Contact content={content} />
        </main>
        <Footer />
      </>
    );
  }
}

export default Portfolio;
