import "./FormStyles.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zcgvpbe', 'template_cvlwx9s', form.current, 'cmACshnUpD9AHVIH2')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="formBox">

            <form ref={form} onSubmit={sendEmail}>
                <label className="text">
                    Name
                </label>
                <br></br>
                <input type="text" name="user_name" className="box" />
                <br></br>

                <label className="text">
                    Email
                </label>
                <br></br>
                <input type="email" name="user_email" className="box" />
                <br></br>

                <label className="text">
                    Message
                </label>
                <br></br>
                <textarea name="message" className="box" rows="6" placeholder="Type Your Message Here" />
                <br></br>

                <input type="submit" value="Send" className="btn" />
            </form>

        </div>
    )
}

export default Form
