import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-1800px bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='md:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4'>
            <div className='md:text-right text-4xl font-bold'>
              <p>Hi. I'm Utkarsh Kumar, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>A recent graduate with a strong passion for web development. Armed with a good understanding of the MERN stack, I'm eager to dive into the world of technology and contribute to innovative web applications.I'm excited to apply my knowledge and problem-solving skills to real-world projects. I'm a quick learner, a team player, and I'm actively seeking opportunities to collaborate and grow in the tech industry. Let's connect and explore the possibilities together.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
