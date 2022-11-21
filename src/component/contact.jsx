import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact(){
    const form =useRef();

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_9v94n0a', 'template_ihqoeq2', form.current, 'ns0dETlWDNhjdsN6T').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return(
        <section className= "Contact" id='contact'>
            <form ref={form} onSubmit={sendEmail}>
                <h1>Contact Me below!</h1>
                <div className="contact_name">
                    <input type= "text" name="contact_name" required></input>
                    <label htmlFor="contact_name" className="contact_lable">
                        <span className="contact_span">Name<small>*</small></span>
                    </label>
                </div>
                <div className="contact_email">
                    <input type="email" name="contact_Email" required></input>
                    <label htmlFor="contact_Email" className="contact_lable">
                        <span className="contact_span">Email<small>*</small></span>
                    </label>
                </div>
                <div className="contact_text">
                    <textarea name="contact_text" required></textarea>
                    <label htmlFor="contact_text" className="contact_text_lable">
                        <span className="text_span">Messege<small>*</small></span>
                    </label>
                </div>
                <input className="Contact_button" type="submit" value="Send" />
            </form>
        </section>
    );
};
export default Contact
