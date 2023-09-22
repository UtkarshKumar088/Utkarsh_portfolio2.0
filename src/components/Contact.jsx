import React,{useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rhw5z0d', 'template_b2gw3sq', form.current, '4BBO7K_X2IYgeTWcs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div name='contact' className='w-full h-1800px bg-[#0a192f] flex justify-center items-center pt-20'>

      <form  ref={form} onSubmit ={sendEmail} action="" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Contact</p>
          <p className='py-4 text-gray-300'>Shoot me an email utkarshjarial08@gmail.com</p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name"/>
        <input className="my-4 bg-[#ccd6f6] p-2" type="email" placeholder="Email" name="email"/>
        <textarea className="bg-[#ccd6f6] p-2" name="message" id=""  rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 max-w-xs flex justify-center items-center mx-auto'> Let's Collaborate</button>

      </form>
    
    
    </div>
  )
}

export default Contact
