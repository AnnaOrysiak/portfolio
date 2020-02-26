import React, { Component } from 'react';
import '../style/main.css';

import Navigation from './Navigation';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

class Portfolio extends Component {
  state = {
    language: 'pl',
    content: {},
    mobile: true,
    scrollY: 0
  };

  getData = (lang = 'pl') => {
    return fetch('./content.json')
      .then(response => response.json())
      .then(content => {
        const translation = content.filter(
          element => element.language === lang
        );
        this.setState({ content: translation[0] });
      })
      .catch(error => {
        console.log('Błąd! ', error);
      });
  };

  checkDevice() {
    const deviceWidth = window.innerWidth > 0 ? window.innerWidth : '640';
    const deviceHeight = window.innerHeight > 0 ? window.innerHeight : '360';

    if (deviceHeight >= 768 && deviceWidth >= 1024) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  naviHandler = e => {
    if (
      e.target.className === 'naviBurger' ||
      e.target.className === 'naviBurgerSpan' ||
      e.target.className.includes('naviListButton')
    ) {
      document.querySelector('.navigation').classList.toggle('active');
    }
  };

  langHandler = e => {
    const language = e.target.value;
    this.setState({ language });
  };

  handleScroll = e => {
    const scrollY = window.scrollY;
    this.setState({ scrollY });
  };

  componentDidMount() {
    this.getData();
    this.checkDevice();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    if (this.state.language !== this.state.content.language) {
      this.getData(this.state.language);
    }
  }

  render() {
    const { language, content, mobile, scrollY } = this.state;

    return (
      <>
        <Navigation
          naviHandler={this.naviHandler}
          langHandler={this.langHandler}
          scrollHandler={this.scrollHandler}
          language={language}
          content={content}
          scrollY={scrollY}
        />
        <Header />
        <main>
          <Projects content={content} mobile={mobile} />
          <About content={content} scrollY={scrollY} />
          <Contact content={content} language={language} />
        </main>
        <Footer />
      </>
    );
  }
}

export default Portfolio;
