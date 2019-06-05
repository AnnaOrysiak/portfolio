import React from 'react';
import '../style/contact.css';

class Contact extends React.Component {

  state = {
    name: "",
    email: "",
    message: ""
  }

  render() {

    const { contact, contact_invitation, your_name, your_email, your_message, send_message } = this.props.content;

    return (
      <div className="contactSection">
        <h3>{contact}</h3>

        <div className="socialmedia">
          <a href="https://github.com/AnnaOrysiak"><i className="fab fa-github"></i></a>
          <a href="linkedin.com/in/anna-orysiak-b1796a137/"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.facebook.com/anna.walkiewicz.77"><i className="fab fa-facebook"></i></a>
        </div>

        <h4 className="contactHeader">{contact_invitation}</h4>

        <div className='contactForm'>
          <label htmlFor="name">{your_name}:</label>
          <input type="text" className="name" id="name" placeholder={your_name} required autoComplete="off" />

          <label htmlFor="email">{your_email}:</label>
          <input type="email" className="email" id="email" placeholder={your_email} required autoComplete="off" />

          <label htmlFor="message">{your_message}:</label>
          <textarea className="message" id="message" cols="30" rows="10" placeholder={your_message} required></textarea>

          <input className="formButton" type="submit" value={send_message} />
        </div>
      </div>
    );
  }
}

export default Contact;