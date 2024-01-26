//Skills.jsx
import React from 'react'

function Skills() {
  return (
    <div id='skills' >
        <div className='text-center'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600  mb-8'>Skills</p>
        </div>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='/images/react.png' alt="React icon" />
                  <p className='my-4'>React</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='/images/mongo.png' alt="Mongo DB icon" />
                  <p className='my-4'>MongoDB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='/images/node.png' alt="NodeJs icon" />
                  <p className='my-4'>NodeJs</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-25 h-20 mx-auto' src='/images/Expressjs.png' alt="NodeJs icon" />
                  <p className='my-4'>ExressJS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='/images/javascript.png' alt="JavaScript icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='/images/html.png' alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='/images/css.png' alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='/images/bootstrap.png' alt="Bootstrap icon" />
                  <p className='my-4'>Bootstrap</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='/images/tailwind.png' alt="Tailwind icon" />
                  <p className='my-4'>Tailwind CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-25 h-20 mx-auto' src='/images/daisyui.png' alt="Daisyui icon" />
                  <p className='my-4'>Daisy UI</p>
              </div>
              
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='/images/github.png' alt="GitHub icon" />
                  <p className='my-4'>Github</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='/images/postman.png' alt="Postman icon" />
                  <p className='my-4'>Postman API</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='/images/aws.png' alt="AWS icon" />
                  <p className='my-4'>AWS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-25 h-20 mx-auto' src='/images/netlify.png' alt="Netlify icon" />
                  <p className='my-4'>Netlify</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-23 h-10 mx-auto' src='/images/render.png' alt="Render icon" />
                  <p className='my-4'>Render</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Skills