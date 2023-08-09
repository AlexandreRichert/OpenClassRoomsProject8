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
        <div className="flex justify-center items-center h-screen bg-green-600">
          <form ref={form} onSubmit={sendEmail} className=' flex justify-center items-center my-10  w-2/3'>
            <div className='flex flex-col justify-center items-center w-2/3 bg-blue-600'>
              <h1 className='text-center'>Me contacter</h1>
              <label>Nom</label>
              <input type="text" name="name" />
              <label>Email</label>
              <input type="email" name="email" />
              <label>Objet</label>
              <input type="text" name="objet" />
              <label>Message</label>
              <textarea name="message" className='p-1 h-52 w-1/2 text-base border border-[#cccccc] border-solid bg-[#ffffff] rounded-none shadow-1 text-[#000000]' />
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>    );
  };
  

export default Contact