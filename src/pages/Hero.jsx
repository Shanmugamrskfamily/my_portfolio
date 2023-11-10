import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  return (
    <div id='about' className='mt-8'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-center mb-8'>About</p>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 px-4'>
          <div className='items-center'>
            <img src="/images/hero.gif" className='rounded-lg hero' alt="SHANMUGAM R" />
          </div>
          <div className='mt-12 ml-4'>
            <p className='sm:text-right  text-4xl font-bold'>Hi 👋 I'm SHANMUGAM R, nice to meet you. Please take a look around.</p>
            <p className='text-center mt-6 text-2xl'>I'm {' '}
            <span style={{ fontWeight: 'bold', color: 'green' }}><Typewriter
                words={['passionate Full Stack Developer', 'skilled in MERN stack', 'with a strong foundation in web development.', "Let's create something amazing together!"]}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              /></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
