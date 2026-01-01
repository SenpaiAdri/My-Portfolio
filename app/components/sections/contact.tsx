import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
        <div className="bg-black flex flex-col py-5
        md:py-20 px-5 md:px-10 h-screen"
        >
          <h1 className="text-3xl font-bold text-center mt-10 
          md:text-5xl 
          lg:text-5xl text-white">Get in touch with me</h1>
          <p className="text-gray-300 text-center mt-5">
            I'm always looking for new opportunities and collaborations. Feel free to contact me via email or through the contact form below.
          </p>
          <div className="flex flex-row justify-center">
            <div className="flex flex-col mt-20 ml-20 gap-4 w-1/3">
              <input type="email" placeholder="Email" className="w-full p-2 rounded-md border border-gray-300" />
              <textarea placeholder="Message" className="w-full h-40 p-2 rounded-md border border-gray-300" />
              <button className="bg-white/90 text-black self-end w-1/3 px-4 py-2 rounded-md
              hover:bg-white/50 hover:text-white animate-ease-in-out duration-300">Send</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact