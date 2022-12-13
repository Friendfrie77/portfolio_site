import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact(){
    const form =useRef();
    const thanks = useRef();
    const msg = "suck a dick"
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_9v94n0a', 'template_ihqoeq2', form.current, 'ns0dETlWDNhjdsN6T').then((result) => {
            form.current.reset();
            const msg = 'test'
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <section className= "contact" id='contact'>
            <form ref={form} onSubmit={sendEmail} id="contact-form">
                <h1 className='email-message' ref={thanks}>{msg}</h1>
                <h1>Contact Me below!</h1>
                <div className="contact-name">
                    <input type= "text" name="contact-name" required></input>
                    <label htmlFor="contact-name" className="contact-lable">
                        <span className="contact-span">Name<small>*</small></span>
                    </label>
                </div>
                <div className="contact-email">
                    <input type="email" name="contact-email" placeholder='' autoccomplete= 'off' required></input>
                    <label htmlFor="contact-email" className="contact-lable">
                        <span className="contact-span">Email<small>*</small></span>
                    </label>
                </div>
                <div className="contact-text">
                    <textarea name="contact-text" required></textarea>
                    <label htmlFor="contact-text" className="contact-text-lable">
                        <span className="text-span">Messege<small>*</small></span>
                    </label>
                </div>
                <input className="contact-button" type="submit" value="Send" />
            </form>
        </section>
    );
};
export default Contact
