import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Linux from '../assets/linux.png';
import Django from '../assets/django.png';
import ExpressImg from '../assets/express.png';
import Cpp from '../assets/cpp.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen text-gray-300 bg-[#0a192f] py-4 pt-25 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
            <p className="py-4">These are the technologies I' have worked with.</p>
            </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="html" />
            <p className="my-4">HTML</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20  mx-auto" src={CSS} alt="html" />
            <p className="my-4">CSS</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20  mx-auto" src={JavaScript} alt="html" />
            <p className="my-4">JAVASCRIPT</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20  mx-auto" src={ReactImg} alt="html" />
            <p className="my-4">REACT</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="html" />
            <p className="my-4">NODE</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="html" />
            <p className="my-4">MONGODB</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="html" />
            <p className="my-4">TAILWIND</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-25 mx-auto" src={ExpressImg} alt="html" />
            <p className="my-4">EXPRESS</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 mx-auto" src={GitHub} alt="html" />
            <p className="my-4">GITHUB</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Cpp} alt="html" />
            <p className="my-4">C++</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Django} alt="html" />
            <p className="my-4">DJANGO</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Linux} alt="html" />
            <p className="my-4">LINUX</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Skills