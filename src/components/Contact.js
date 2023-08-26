import React, {useRef} from 'react';
import { HiMail } from 'react-icons/hi';
import {FaWhatsapp} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.
    sendForm('service_ti4xptb', 'template_eh09ivk', form.current, 'mWXHezphf389lJVN-')
      .then((result) => {
          console.log(result.text);
          alert('message sent');
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  
  const contact_info = [
    {logo: <HiMail/>, text:'nwankwonzubechukwu217@gmail.com'},
    {logo: <FaWhatsapp/>, text: '+234 802 424 8144'},
  ]
  return (
    <section id='contact' className='py-10 px-3 bg-slate-900 text-white'>
      <div className='text-center mt-8'>
        <h3 className='md:text-3xl text-xl font-semibold'>
          Contact <span className='text-orange-400'>Me</span>
        </h3>
        <p className='text-gray-300 mt-3 md:text-lg text-sm'>Get in touch</p>
        <div 
        className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-black
        md:p-6 p-2 rounded-lg mx-auto'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col flex-1 gap-5'>
            <input type='text' placeholder='Your Name' name='user_name'/>
            <input type='email' placeholder='Your Email Address' name='user_email'/>
            <textarea name='message' placeholder='Your Message' rows={10}></textarea>
            <button className='btn-primary w-fit'>Send Message</button>
          </form>
          <div className=' flex flex-col gap-7'>
            {
              contact_info.map((contact, i) => (
                <div key={i} className='flex flex-wrap gap-4 w-fit items-center'>
                  <div className='min-w-[1.5rem] min-h-[1.5rem] flex items-center
                  justify-center text-white bg-orange-500 rounded-full'>
                    {contact.logo}
                  </div>
                  <p className='text-sm'>{contact.text}</p>
                </div>  
              ))
            }

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact