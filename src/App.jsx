import { Home, User, Briefcase, Mail, FileText, Download } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import   Motion from './motion.jsx';
import SkillsMotion from './skills-motion.jsx'

function App () {
  return (
    <>
      <header className="hidden lg:flex w-full h-16 border-b-2 border-gray-500 flex items-center justify-between">
        <p className="pl-4 text-gray-800 font-black text-2xl italic">My-Portifolio</p>
        <nav className="flex space-x-8">
          <a href="home" className="flex text-gray-700 hover:text-gray-900 font-semibold text-lg hover:underline">Home</a>
          <a href="about" className="flex text-gray-700 hover:text-gray-900 font-semibold text-lg hover:underline">About</a>
          <a href="projects" className="flex text-gray-700 hover:text-gray-900 font-semibold text-lg hover:underline">Project</a>
          <a href="contact" className="flex text-gray-700 hover:text-gray-900 font-semibold text-lg hover:underline">Contact</a>
          <a href="resume.pdf" download="Anthony's resume.pdf" className="pr-8 flex text-gray-900 hover:text-black font-semibold text-lg hover:underline">Resume&nbsp;<Download/></a>
        </nav>
      </header>

      <header className="lg:hidden mt-6 mx-auto w-[75vw] h-16 rounded-2xl border-2 border-gray-300 flex items-center justify-evenly shadow-sm">
        <a href="home"><Home/></a>
        <div className="h-6 border-l border-gray-400"></div>
        <a href="about"><User/></a>
        <div className="h-6 border-l border-gray-400"></div>
        <a href="projects"><Briefcase/></a>
        <div className="h-6 border-l border-gray-400"></div>
        <a href="contact"><Mail/></a>
        <div className="h-6 border-l border-gray-400"></div>
        <a href="resume.pdf" download="Anthony's resume.pdf"><FileText/></a>
      </header>

      <div className="mt-16 ml-6">
        <img src="profile-image.png" className="w-36 h-36 lg:w-40 lg:h-40 rounded-full shadow-lg object-cover"/>
      </div>

      <p className="mt-8 ml-4 text-2xl font-bold text-gray-900">
        <Typewriter
          words={[ 'Hey, I"m Anthony.', 'SWE Intern @DevSphere.' ]}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={120}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      <p className="mt-2 ml-4 text-xl font-semibold text-gray-600">Chemistry student with a passion for transforming ideas into code. I love bridging science and technology to build creative solutions.</p>

      <a href="contact"><button className="mt-6 ml-6 p-2.5 bg-black text-white rounded-xl font-medium text-base">Reach Out!</button></a>

      <Motion/>

      <p className="mt-14 ml-2 text-2xl font-bold text-gray-900">About Me</p>

      <p className='mt-4 ml-4 text-lg font-medium text-gray-600'>Hi, I'm Anthony, a 17-year-old Chemistry student with a passion for Software Engineering. I love solving problems-whether it's a tricky chemical equation or a stubborn piece of code. Who knew balancing equations could be as satisfying as debugging a program?</p>

      <p className='mt-2 ml-4 text-lg font-medium text-gray-600'>I'm fascinated by the blend of science and technology, always curious, experimenting, and learning. I enjoy turning challenges into creative solutions, and yes...sometimes my experiments explode-but that's just part of the fun!</p>

      <div className="mt-16 w-full border-t-2 border-gray-300"></div>

      <p className="mt-12 ml-2 text-2xl font-bold text-gray-900">Roles & Experience</p>

      <p className='mt-6 ml-2 text-lg font-medium text-gray-800'>Sept 2025-Present</p>

      <p className='mt-2 ml-2 text-xl font-semibold text-black'>- Univad Campus Ambassador | University of 
      Ilorin</p>

      <p className='mt-6 ml-2 text-lg font-medium text-gray-800'>Sept 2025-Present</p>

      <p className='mt-2 ml-2 text-xl font-semibold text-black'>- Cowrywise Campus Ambassador | University of Ilorin</p>

      <p className='mt-6 ml-2 text-lg font-medium text-gray-800'>Sept 2025-Present</p>

      <p className='mt-2 ml-2 text-xl font-semibold text-black'>- Software Engineering Intern | DevSphere</p>

      <p className='mt-8 ml-2 text-lg font-medium text-gray-900'>Please check <a href="resume.pdf" download="Anthony's resume.pdf" className='underline'>resume</a> for more details.</p>

      <SkillsMotion />
    </>
  );
}

export default App;
