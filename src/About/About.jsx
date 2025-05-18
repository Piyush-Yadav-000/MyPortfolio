import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './About.css'
import Tilt from 'react-parallax-tilt'

const About = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'Java Developer', 'Frontend Developer', 'Backend Developer'],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 50
  })



  return (
    <div className='max-w-7xl h-svh mx-auto flex space-x-10 drop-shadow-amber-950  p-2 px-6  justify-between relative'>
      <div className=' flex flex-col md:flex-row mt-25 justify-center items-center'>
        <div className="about-content md:w-1/2 flex-col items-center space-y-7">
          <h1 className='text-3xl font-bold text-white font-["Bricolage Grotesque"]'>
            Hi, I am <br />Piyush Yadav
          </h1>
          <h2 className='text-3xl text-white font-bold font-["Bricolage Grotesque"]'>
            I am <span className='text-cyan-500'>{text}</span>
            <Cursor cursorColor='#06b6d4' />
          </h2>
          <p className='text-white  font-["Bricolage Grotesque"]'>
           Hi, I'm Piyush Yadav, a detail-oriented developer with a strong focus on Backend Development, Web Development, and Data Structures & Algorithm using Java. <br />I'm passionate about building scalable, efficient, and user-friendly applications.
          </p>
            <div className='flex py-2 space-x-5'>
                <div className='border-b-blue-50 text-2xl flex items-center justify-center bg-black text-white rounded-lg p-2'> <img src="/github.png" className='h-6' alt="Githubpng" /><a href="https://github.com/Piyush-Yadav-000" target='_blank'>Github</a></div>
                <div className='border-b-blue-50 text-2xl flex items-center justify-center bg-black text-white rounded-lg p-2'> <img src="/linkedin.webp" className='h-8' alt="" /><a href="https://github.com/Piyush-Yadav-000" target='_blank'>Linkedin</a></div>
</div>
          <a className='p-2  text-2xl font-["Bricolage Grotesque"]' id='testbutton' href="/Piyush_Yadav_Resume.docx"
          download="Piyush_Yadav_Resume.docx">Download Resume</a>
        

        </div>
        <Tilt
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    perspective={1000}
    transitionSpeed={1000}
    scale={1.05}
    glareEnable={true}
    glareMaxOpacity={0.3}
    glareBorderRadius="20px">
        <div className="profile-img flex justify-center items-center relative w-68 h-68 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 
            overflow-hidden border-4 border-yellow-400">
          <img src="src\assets\images\profile-image.jpg"  style={{ objectPosition: '50% 45%' }} className=' absolute  w-full h-full object-cover object-center ' alt="Profile Image" />
        </div>
        </Tilt>
      </div>
    </div>
  )
}

export default About
