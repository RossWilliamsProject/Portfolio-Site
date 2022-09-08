import "./FormStyles.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaMailBulk, FaLinkedin } from "react-icons/fa"

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
        <div>
            <div className="formBox">
                <form ref={form} onSubmit={sendEmail} className="formBox">
                    <h1>
                        Contact Form:
                    </h1>
                    <label className="text">
                        Name
                    </label>
                    <input type="text" name="user_name" className="box" />

                    <label className="text">
                        Email
                    </label>
                    <input type="email" name="user_email" className="box" />

                    <label className="text">
                        Message
                    </label>
                    <textarea name="message" className="box" rows="6" placeholder="Type Your Message Here" />

                    <input type="submit" value="Send" className="btn" />
                </form>
            </div>

            <div className="altbox">
                <h1>
                    Alternative Contact
                </h1>
                <br></br>
                <div className="email">
                    <h4 href='rosswilliamsrw11@gmail.com'>
                        <FaMailBulk size={20} style={{
                            color: "#000", marginRight: "2rem"
                        }} />
                        rosswilliamsrw11@gmail.com
                    </h4>
                </div>
                <div className="LinkedIn">
                    <h4 href='https://www.linkedin.com/in/ross-williams-3a433b213/'>
                        <FaLinkedin size={20} style={{
                            color: "#000", marginRight: "2rem"
                        }} />
                        www.linkedin.com/in/ross-williams-3a433b213/
                    </h4>
                </div>
            </div>
        </div>        
    )
}

export default Form
