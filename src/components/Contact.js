import React, { useRef} from 'react'
import emailjs from "@emailjs/browser";
//import background from '../assets/shape.svg';


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
    /*const backgroundStyle = {
      backgroundImage: `url(${background})`, // Utilisez l'URL de votre image SVG ici
    };*/
  
  
    return (
        <div id='contact' className=" flex justify-center items-center h-screen bg-hero-pattern" >
          <form ref={form} onSubmit={sendEmail} className='  rounded-md backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100
 flex justify-center items-center my-10 w-11/12 max-w-xl'>
            <div className='flex flex-col justify-center items-center px-14 w-full'>
              <h1 className='text-center text-white text-5xl mt-5'>Me contacter</h1>
              <label>Nom</label>
              <input type="text" name="name" />
              <label>Email</label>
              <input type="email" name="email" />
              <label>Objet</label>
              <input type="text" name="objet" />
              <label>Message</label>
              <textarea name="message" className='w-full h-28 text-base ' />
              <button type="submit" className='my-7 w-28 h-8 rounded-lg shadow-2xl bg-blue-300 hover:bg-[#EDB88B] ease-in-out duration-300'>Envoyer</button>
            </div>
          </form>
        </div>    );
  };
  

export default Contact