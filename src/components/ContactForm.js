import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: '',
      errors: {
        name: '',
        email: '',
        message: ''
      },
      messageStatus: '',
      color: ''
    }
  }

  handleInputChange = (e) => {
    e.preventDefault();
    const target = e.target
    const name = target.name
    const value = target.value
    this.setState({ [name]: value })
  }

  validateMail() {
    let errors = {}
    let formIsValid = true
    const lang = this.props.language

    if (!this.state.name || this.state.name.length < 3) {
      errors.name = lang === "pl" ? 'Imię musi zawierać więcej niż 3 znaki' : 'Your name should consist of at least 3 characters'
      formIsValid = false
    }
    if (!this.state.message || this.state.message.length < 10) {
      errors.message = lang === "pl" ? 'Wiadomość musi zawierać więcej niż 10 znaków' : 'Your message should consist of at least 10 characters'
      formIsValid = false
    }
    if (!this.state.email || this.state.email.length < 3) {
      errors.email = lang === "pl" ? 'Adres email powinien składać się conajmniej z 3 znaków ' : 'Use minimum 3 symbols'
      formIsValid = false
    }

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (!pattern.test(this.state.email)) {
      errors.email = lang === "pl" ? 'Wpisz poprawny adres email' : 'Enter a valid email address'
      formIsValid = false
    }

    this.setState({
      errors
    })

    return formIsValid

  }

  sentMessage = (e) => {
    e.preventDefault()
    if (!this.validateMail()) {
      return
    }

    const templateParams = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      auto_reply: this.props.language === "pl" ? 'Dziękuję za wiadomość' : 'Thnak you for your message'
    }

    const successMessage = this.props.language === "pl" ? 'Wiadomość została wysłana' : 'Message send successful';

    const failMessage = this.props.language === "pl" ? 'Wysyłanie wiadomości nie powiodło się' : 'Failed to send the message';

    const sendingSuccessfully = () => {
      this.setState({
        messageStatus: successMessage,
        color: 'green'
      })
    }

    const sendingFailed = () => {
      this.setState({
        messageStatus: failMessage,
        color: 'red'
      })
    }

    emailjs.send('gmail', 'contact_form', templateParams, 'user_1JHrohf0HBj65A9oo5yHu')
      .then(function (res) {

        // SUCCESS
        sendingSuccessfully();
        console.log(successMessage, res.status, res.text)
      }, function (err) {

        //FAIL
        sendingFailed();
        console.log(err);
      })

    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

  render() {

    const { your_name, your_email, your_message, send_message } = this.props.props;

    return (

      <form className='contactForm'>
        <label htmlFor="name">{your_name}:</label>
        <input type="text" className="name" name="name" id="name" placeholder={your_name} required onChange={this.handleInputChange} />
        {this.state.errors.name ? <span className="error"> {this.state.errors.name}</span> : ""}

        <label htmlFor="email">{your_email}:</label>
        <input type="email" className="email" name="email" id="email" placeholder={your_email} required onChange={this.handleInputChange} />
                {this.state.errors.email ? <span className="error"> {this.state.errors.email}</span> : ""}

        <label htmlFor="message">{your_message}:</label>
        <textarea className="message" name="message" id="message" cols="30" rows="10" placeholder={your_message} required onChange={this.handleInputChange}></textarea>
                {this.state.errors.message ? <span className="error"> {this.state.errors.message}</span> : ""}

        <button className="formButton" type="submit" onClick={this.sentMessage} >{send_message}</button>
        {this.state.messageStatus ? <span className={this.state.color}> {this.state.messageStatus}</span> : ""}
      </form>

    );
  }
}

export default ContactForm;