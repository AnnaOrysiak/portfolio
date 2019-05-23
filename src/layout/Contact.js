import React from 'react';

const Contact = (props) => {

  const { contact, your_name, your_email, your_message, send_message } = props.content


  return (
    <>
      <h3>{contact}</h3>

      <div className='form'>
        <input type="text" className="name" id="type" placeholder={your_name} />
        <input type="email" className="email" id="email" placeholder={your_email} />
        <textarea name="message" id="message" cols="30" rows="10" placeholder={your_message}></textarea>
        <input type="submit" value={send_message} />
      </div>

    </>
  );
}

export default Contact;