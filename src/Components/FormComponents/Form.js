import "./FormStyles.css"
import React from 'react'

const Form = () => {
    return (
        <div className="formBox">

            <label className="text">
                Your Name
            </label>
            <input className="box" type="text"></input>

            <label className="text">
                Email
            </label>
            <input className="box" type="text"></input>

            <label className="text">
                Subject
            </label>
            <input className="box" type="text"></input>

            <label className="text">
                Message
            </label>
            <textarea className="box" rows="6" placeholder="Type Your Message Here"/>

            <button className="btn"> Submit</button>
        </div>
    )
}

export default Form