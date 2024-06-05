import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div  className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={HTML} alt="html icon" className='w-20 mx-auto'/>
                    <p className='my-4 uppercase'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={CSS} alt="CSS icon" className='w-20 mx-auto'/>
                    <p className='my-4 uppercase'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={JavaScript} alt="JavaScript icon" className='w-20 mx-auto'/>
                    <p className='my-4 uppercase'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={ReactImg} alt="ReactImg icon" className='w-20 mx-auto'/>
                    <p className='my-4 uppercase'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Node} alt="Node icon" className='w-20 mx-auto'/>
                    <p className='my-4 uppercase'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={FireBase} alt="FireBase icon" className='w-20 mx-auto'/>
                    <p className='my-4 uppercase'>FireBase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={GitHub} alt="GitHub icon" className='w-20 mx-auto'/>
                    <p className='my-4 uppercase'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Tailwind} alt="Tailwind icon" className='w-20 mx-auto'/>
                    <p className='my-4 uppercase'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Mongo} alt="Mongo icon" className='w-20 mx-auto'/>
                    <p className='my-4 uppercase'>Mongo</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills