import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import resume from '../assets/Resume.docx'
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen ">
      {/*  container*/}
      <div className="container mx-auto px-10 flex flex-col justify-center items-center h-full ">
        <p className="text-pink-600 text-2xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          John Jegede
        </h1>
        <div className="text-[#8892b0] font-bold sm:text-7xl text-3xl">
        <h2 className=" inline">
          I am a
        </h2>
        <ReactTyped
          className=' inline  pl-2'
            strings={['Full Stack Developer', 'Mobile Developer', 'Product Manager']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          </div>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a full stack developer specializing in building and occasionally
          designing exceptional digital experiences, currently I am focused on
          building responsive full-stack web applications
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <a href={resume} download='Resume'>Download CV</a>
          
            {/* <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
