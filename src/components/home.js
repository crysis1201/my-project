import profile from '../Images/IMG_7243.png'
import '../hamburger.css'
import { useState }  from 'react'
import { motion } from 'framer-motion'

const Home = () => {

  const toggleClass = () => {
    document.querySelector('.hamburger').classList.toggle('is-active')
  }
  const toggleOpen = () => {
    document.querySelector('.blur').classList.toggle('hidden')
  }
    return (
    <div className=" bg-black">
       <div id="Home" className="max-w-screen-lg mx-auto pt-12" >
          <header className="flex justify-between items-center">
              <div>
                <p id="logo" className="lg:text-6xl text-5xl tracking-wider text-white" >
                  Eazhil amuthan
                </p>
              </div>
              <div className=" lg:flex hidden justify-between items-center ">
                <a href="#Home" className="text-xl mr-7 uppercase text-white" >
                  Home
                </a>
                <a href="#Skills" className="text-xl mr-7 uppercase text-white" >
                  Skills
                </a>
                <a href="Works" className="text-xl mr-7 uppercase text-white" >
                  Works
                </a>
                <p className="text-xl mr-7 uppercase text-white" >
                  Contact 
                </p>
              </div>
              <div onClick={toggleOpen} className="lg:hidden inline-flex font-semibold items-center">
                <button onClick={toggleClass} class="hamburger hamburger--slider focus:outline-none" type="button">
                    <span class="hamburger-box ">
                      <span class="hamburger-inner"></span>
                    </span>
                </button>
                <p className="text-sm text-white -mt-2 -ml-1" >Menu</p>
              </div>
          </header>
          <div className="lg:hidden m-auto left-0 right-0 z-10 absolute w-11/12 h-auto mt-4 blur hidden transition-opacity">
                <a href="#Home" className="block text-center text-xl pt-10 uppercase text-white" >
                  Home
                </a>
                <a href="#Skills" className=" block text-center  text-xl pt-10 uppercase text-white" >
                  Skills
                </a>
                <a href="Works" className="block text-center  text-xl pt-10 uppercase text-white" >
                  Works
                </a>
                <a href="Works" className="block text-center text-xl pt-10 pb-10 uppercase text-white" >
                  Contact
                </a>
          </div>
          
          <div className="pt-40 lg:flex items-center  ">
              <div className="text-white lg:max-w-lg max-w-xl lg:mx-0 mx-auto lg:text-left text-center leading-loose text-2xl ">
                <p className="font-extralight" >
                   Hi, I'm Eazhilamuthan, Co-Founder of Tweak Enterprises, a Front End Web Developer. I enjoy creating designs and making them real-life. 
                </p>
              </div>
              <div className="Rectangle-2 p-1 lg:pt-1 mt-12 max-w-xs mx-auto lg:max-w-none">
                  <motion.img drag dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }} dragElastic={0.2} className=" mx-auto" src={profile} alt=""></motion.img>
              </div>
          </div>
       </div>
    </div>

      );
}
 
export default Home;