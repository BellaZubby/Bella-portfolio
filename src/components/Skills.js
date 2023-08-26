import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';

function Skills() {
  const skills = [
    {
      logo: <FaHtml5 />,
      level: 'Advance',
      count: 65,
    },
    {
      logo: <FaCss3Alt />,
      level: 'Intermediate',
      count: 56,
    },
    {
      logo: <DiJavascript1 />,
      level: 'Beginner',
      count: 40,
    },
    {
      logo: <FaReact />,
      level: 'Beginner',
      count: 37,
    },
    {
      logo: <SiTailwindcss />,
      level: 'Beginner',
      count: 40
    }
  ]
  return (
    <section id='skills' className='py-10 bg-slate-900 relative'>
      <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold'>My <span className='text-orange-400'>Skills</span></h3>
        <p className='text-gray-300 mt-3 text-lg'>My knowledge</p>
        <div className='flex items-center justify-center mt-12
         gap-10 flex-wrap'>
          {
            skills?.map((skill, i) => (
              <div key ={i} className='border-2 group border-orange-500 relative 
              min-w-[10rem] max-w-[16rem] bg-orange-400 p-10 rounded-xl'>
                <div style={{
                  background: `conic-gradient(rgb(234,88, 12) ${skill.count}%, white ${skill.count}%)`,
                }} className='w-32 h-32 flex items-center 
                justify-center rounded-full'>
                  <div className='text-6xl w-28 h-28 bg-orange-400
                   rounded-full flex items-center justify-center group-hover:text-orange-500'>
                    {skill.logo}
                  </div>
                </div>
                <p className='text-xl mt-3'>{skill.level}</p>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Skills