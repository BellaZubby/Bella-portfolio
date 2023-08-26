import React from 'react'
import'./Hero.css';
import hero from './images/profileImg.jpg';

function Hero() {
  const social_media = [
    {logo:'logo-instagram', link:'https://www.instagram.com/amabellanwankwo'},
    {logo:'logo-github', link:'https://github.com/BellaZubby'},
    {logo:'logo-twitter', link:'https://www.twitter.com/Nwankwo_Bella20'},
    {logo:'logo-linkedin', link:'https://www.linkedin.com/in/nwankwo-nzubechukwu-29014724a'},
  ];
  return (
    <section id='home' className='min-h-screen flex py-10 md:flex-row flex-col 
      items-center'> 
       <div className='flex-1 flex items-center justify-center h-full'>
        <img src={hero} alt='photo' className='hero md:w-11/12 w-52 h-full object-cover'/>
       </div>
       <div className='flex-1'>
          <div className='md:text-left text-center'>
            <h1 className='md:text-3xl text-2xl md:leading-normal 
            leading-10 text-white font-bold'>
              <span className='text-orange-400 md:text-5xl text-3xl'>
                Hello!
                <br/>
              </span>
              My Name is <span>Amabella</span>
            </h1>
            <h4 className='md:text-xl text-sm md:leading-mormal leading-5 mt-4 
            font-bold text-gray-300'>React Developer</h4>
            <button className='btn-primary mt-8'>Contact Me</button>
            <div className='mt-8 text-2xl flex items-center md:justify-start justify-center gap-5'>
              {
                social_media?.map(icon => (
                    <div key={icon} className='text-gray-300 hover:text-white cursor-pointer'>
                      <a href ={icon.link} target='_blank'><ion-icon name={icon.logo}></ion-icon></a>
                    </div>
                ))
              }
            </div>
          </div>
       </div>
    </section>
  )
}

export default Hero