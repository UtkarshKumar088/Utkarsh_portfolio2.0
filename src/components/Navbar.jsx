import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo1 from '../assets/logo1.png'
import {Link} from "react-scroll"

const Navbar = () => {
   const [nav,setNav]=useState(false)
   const handleClick=()=>setNav(!nav)

  return (
    <div className="fixed h-[80px] flex justify-between items-center w-full px-4 bg-[#0a192f] text-gray-300" >
      <div>
        <img src={logo1} alt="Logo Image" style={{width:"280px"}}/>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
     

      <div >
        <ul className="hidden md:flex">
          <li>
          <Link to="home" spy={true} smooth={true} offset={50} duration={500} >
          Home
        </Link>
          </li>
          <li><Link to="about" spy={true} smooth={true} offset={50} duration={500} >
          About
        </Link></li>
          <li><Link to="skills" spy={true} smooth={true} offset={50} duration={500} >
          Skills
        </Link></li>
          <li><Link to="work" spy={true} smooth={true} offset={50} duration={500} >
          Work
        </Link></li>
          <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500} >
          Contact
        </Link></li>

        </ul>
      </div>
      {/* Hamburger                         750px approx ki taraf jate hue */}
      <div  onClick={handleClick} className="md:hidden z-10">    
        {!nav? <FaBars/>:<FaTimes/>}
      </div>
      {/* MobileMenu*/}
      <div>
      <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skill</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl">Contact</li>

        </ul>
      </div>
      {/* Social icons*/}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
      <ul >
      <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600"> <a className=" flex justify-between items-center text-gray-200 w-full" href="https://www.linkedin.com/in/utkarsh-kumar-95036b193/">Linkdin<FaLinkedin/></a></li>
      <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]"> <a className=" flex justify-between items-center text-gray-200 w-full" href="https://github.com/UtkarshKumar088">Github<FaGithub/></a></li>
      <li className="w-[165px] h-[60px] flex justify-between items-center ml-[-115px] hover:ml-[0px] duration-300 bg-[#6fc2b0]"> <a className=" flex justify-between items-center text-gray-200 w-full" href="https://www.linkedin.com/in/utkarsh-kumar-95036b193/overlay/1635540369205/single-media-viewer/?profileId=ACoAAC1wCYwBPyb64e4lQeU4i_x6XN877WazuIc">Resume<BsFillPersonLinesFill/></a></li>
      
      </ul>
      </div>

    </div>
  )
}

export default Navbar