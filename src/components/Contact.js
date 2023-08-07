import React, { useRef} from 'react'
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_xyqxzwk", "template_3fcf3qh", form.current, "33A2HIixF3PotwVlx").then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    };
  
    return (
        <div className="container">
          <form ref={form} onSubmit={sendEmail} className="form">
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <button type="submit">Envoyer</button>
          </form>
        </div>    );
  };
  

export default Contact