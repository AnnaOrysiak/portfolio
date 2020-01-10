import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import '../style/contact.css';

class Contact extends Component {
  render() {

    const { contact, contact_invitation } = this.props.content;

    return (
      <div className="contactSection">
        <h3>{contact}</h3>

        <div className="socialmedia">
          <a href="https://github.com/AnnaOrysiak"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/anna-orysiak-b1796a137/"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.facebook.com/anna.walkiewicz.77"><i className="fab fa-facebook"></i></a>
        </div>

        <h4 className="contactHeader">{contact_invitation}</h4>

        <ContactForm id="mainContactForm" className="contactForm" name="contactForm" method="post" action="" content={this.props.content} language={this.props.language} />

      </div>
    );
  }
}

export default Contact;