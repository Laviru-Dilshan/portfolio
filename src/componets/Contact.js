import {React,useRef} from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_km3uf22', 'template_rlu5eyc', form.current, 'PL0_Esvzp8nb73yeN')
      .then((result) => {
          console.log(result.text);
          alert("Thank You... I recived Your message reply queckly.")
          form.current.reset()
      }, (error) => {
          console.log(error.text);
          alert("Sorry Some error..!")
          form.current.reset()
      });
  };

  return (
    <div className='form'>
        <h1 className='title' id='contact'>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name </label>
        <br />
        <input type="text" name="name" required/>
        <br />
        <label>Email </label>
        <br />
        <input type="email" name="email" required/>
        <br />
        <label>Message </label>
        <br />
        <textarea name="message" required/>
        <br />
        <input type="submit" value="Send" />
        </form>
    </div>
  );
};

export default ContactUs;