import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">

<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
<p className="text-pink-600">Hi, My name is</p>
<h1 className="text-4xl sm:text-7xl font-bold text-[#ffffff]">Utkarsh kumar</h1>
<h2 className="text-4xl sm:text-7xl font-bold text-[#b0b2b6]">I'm a full Stack Developer</h2>
<p className="py-6  max-w-[700px] text-[#8e95ac]">I am Innovative and highly motivated software developer with a solid foundation in the MERN stack.Eager to contribute my technical skills, adaptability, and enthusiasm for learning to a dynamic development team.</p>

<div><button className="text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-pink-600"><Link to="about" spy={true} smooth={true} offset={50} duration={500} >
          View Work
        </Link><HiArrowNarrowRight className="ml-2 group-hover:rotate-90 duration-300"/></button></div>
</div>



    </div>
  )
}

export default Home