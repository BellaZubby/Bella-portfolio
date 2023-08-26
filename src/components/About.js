import React from 'react';

function About() {
  const info = [
    {text:'Years experience', count:'01'},
    {text:'Completed projects', count:'02'},
    {text:'Companies work', count: '01'},
  ];
  return (
    <section className='py-10 text-white' id='about'>
      <div className='text-center mt-8 bg-white'>
        <h3 className='md:text-3xl text-xl font-semibold text-black pt-5'>
          About <span className='text-orange-400'>Me</span>
        </h3>
        <p className='text-gray-900 my-3 text-xl'>My introduction</p>
        <div className='flex md:flex row flex-col-reverse items-center
         md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div className='p-2'>
            <div className='text-gray-900 my-3'>
              <p className='md:lg text-sm text-justify leading-7 w-11/12 mx-auto'>
                My name is Nwankwo Nzubechukwu Amabella, a graduate of Parasitology and
                Entomology from Nnamdi Azikiwe university Awka. My love for technology
                drove me into web development. I am an enthusiastic frontend developer skilled in various tools and frameworks such as HTML5,
                CSS3, Javascript, React js, tailwind css, and bootstrap. I am very much open
                to opportunities that allows me expand my knowledge and helps me attain the level
                of a highly skilled and professional fullstack developer.
              </p>
              <div className='flex mt-10 items-center gap-7'>
                {
                  info.map(content=>(
                    <div key={content.text}>
                      <h3 className='md:text-2xl text-2xl font-semibold text-black'>
                        {content.count}
                        <span className='text-orange-400'>+</span>{''}
                      </h3>
                      <span className='text:xl md:text-base'>{content.text}</span>
                    </div>
                  ))
                }
              </div>
              <br/>
              <br/>
              <a href ='/files/Amabella.resume.pdf' download>
                <button className='btn-primary bg-red-950'>Download Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About