import React from 'react';
import project1 from './images/projectimg.png';
import project2 from './images/main.png';

function Project() {
  const projects = [
    {
      photo : project1, 
      title: 'Berlog website', 
      github:'https://github.com/BellaZubby/my-react-website', 
      live:'https://my-react-website.vercel.app/'
    },
    {
      photo: project2, 
      title:'my portfolio', 
      github:'', 
      live:''
    },
  ]
  return (
    <section id='project' className='py-10 text-white '>
       <div className='mt-8 text-gray-100 text-center bg-white p-8'>
        <h3 className='text-4xl font-semibold text-black'>My <span className='text-rose-700'>Projects</span></h3>
        <div className='flex items-center justify-center mt-12
         gap-10 flex-wrap'>
          {
            projects?.map((project, i) => (
              <div key ={i} className='border-2 group border-gray-300 relative 
              min-w-[14rem] max-w-[18rem] bg-red-950 pb-3 rounded-xl'>
                <img src={project?.photo} alt='photo' className='rounded-t-xl'/>
                <p className='md:text-2xl text-l mt-2 text-left pl-2 mb-2'>{project.title}</p>
                <div className='flex gap-3 px-2'>
                  <a href={project.github} target='_blank'
                  className='text-l text-rose-300 bg-gray-700 px-2 py-1 inline-block rounded'>
                  Github</a>
                  <a href={project.live} target='_blank'
                  className='text-l text-rose-300 bg-gray-700 px-2 py-1 inline-block'>Live Demo</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Project