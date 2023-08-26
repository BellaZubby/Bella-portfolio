import React from 'react';
import project1 from './images/projectimg.png';
import project2 from './images/profilescreen.png';

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
      github:'https://github.com/BellaZubby/Bella-portfolio.git', 
      live:'https://bella-portfolio.vercel.app'
    },
  ]
  return (
    <section id='project' className='py-10 text-white '>
       <div className='mt-8 text-gray-100 text-center bg-white p-8'>
        <h3 className='text-4xl font-semibold text-black'>My <span className='text-orange-400'>Projects</span></h3>
        <div className='flex items-center justify-center mt-12
         gap-10 flex-wrap'>
          {
            projects?.map((project, i) => (
              <div key ={i} className='border-2 group border-slate-900 relative 
              min-w-[14rem] max-w-[18rem] bg-orange-500 pb-3 rounded-xl'>
                <img src={project?.photo} alt='photo' className='rounded-t-xl'/>
                <p className='md:text-2xl text-l mt-2 text-left pl-2 mb-2'>{project.title}</p>
                <div className='flex gap-3 px-2'>
                  <a href={project.github} target='_blank'
                  className='text-l text-orange-600 bg-slate-900 px-2 py-1 inline-block rounded'>
                  Github</a>
                  <a href={project.live} target='_blank'
                  className='text-l text-orange-600 bg-slate-900 px-2 py-1 inline-block'>Live Demo</a>
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