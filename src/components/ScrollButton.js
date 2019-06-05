import React from 'react';

class ScrollButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render() {
    return <button title='Back to top' className={this.props.scrollY > (window.innerHeight - (window.innerHeight / 2)) ? 'scroll' : 'scroll hidden'}
      onClick={() => { this.scrollToTop(); }}>
      <span className='fas fa-chevron-up'></span>
    </button>;
  }
}

export default ScrollButton;