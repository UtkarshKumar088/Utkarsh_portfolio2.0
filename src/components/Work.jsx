import React from 'react'
import Sb from "../assets/sb.png"
import Ed from "../assets/ed.png"
import Cm from "../assets/cm.png"
import Nc from "../assets/nc.png"

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000] max-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Work</p>
                <p className='py-6'>Check out some of my projects </p>
            </div>
            <div 
            className='grid sd:grid-cols-2 md:grid-cols-3 gap-4'>
                <div  style={{backgroundImage:`url(${Sb})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center max-auto items-center content-div' >
                    {/*Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                         <span className='text-4xl font-bold text-white tracking-wider'>
                            Django Application

                         </span>
                    
                    <div className='pt-8 text-center'>
                        
                        <a href="https://github.com/UtkarshKumar088/StuddyBuddy">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

                    </div>
                    </div>


                </div>
                    {/**2 */}
                    <div  style={{backgroundImage:`url(${Ed})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center max-auto items-center content-div' >
                    {/*Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                         <span className='text-4xl font-bold text-white tracking-wider'>
                            Emotion Detection Application

                         </span>
                    
                    <div className='pt-8 text-center'>
                       
                        <a href="https://github.com/UtkarshKumar088/Emotion-detection">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

                    </div>
                    </div>


                </div>


                <div  style={{backgroundImage:`url(${Cm})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center max-auto items-center content-div' >
                    {/*Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                         <span className='text-4xl font-bold text-white tracking-wider'>
                            Contact Manager

                         </span>
                    
                    <div className='pt-8 text-center'>
                        
                        <a href="https://github.com/UtkarshKumar088/Contact_Manager">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

                    </div>
                    </div>


                </div>

                <div  style={{backgroundImage:`url(${Nc})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center max-auto items-center content-div' >
                    {/*Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                         <span className='text-4xl font-bold text-white tracking-wider'>
                            Netflix clone UI

                         </span>
                    
                    <div className='pt-8 text-center'>
                        
                        <a href="https://github.com/UtkarshKumar088/netflix-clone">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

                    </div>
                    </div>


                </div>


                


            </div>


        </div>

    </div>

  )
}

export default Work