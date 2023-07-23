import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
    const data = "pen : 10 \n color : 23"
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <div>
                <label>Message</label>
                <textarea name="message" value={data} />
            </div>
            <input type="submit" value="Send" />
        </form>
    );
};