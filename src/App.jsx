import { useEffect } from 'react';
import { Home, User, Briefcase, Mail, FileText, Download } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';
import Motion from './Projects-Motion.jsx'
import MotionPractice from './Skills-Icon-Motion.jsx';
import SkillsMotion from './Skills-Section.jsx'
import ProjectsSection from './Projects-Section.jsx';
import ContactSection from './Contact-Section.jsx';
import { Link } from 'react-scroll'

function App () {
  useEffect(() => {
      AOS.init({ duration: 800, easing: 'ease-out', once: true });
    }, []);

  return (
    <>
      <header className="hidden lg:flex w-full h-16 border-b border-gray-300 flex items-center justify-between">
        <p className="pl-4 text-black font-black text-2xl italic">My-Portifolio</p>
        <nav className="flex space-x-8">
          <Link to="home" smooth={true} duration={500} className="flex text-black hover:underline font-bold text-base">Home</Link>
          <Link to="about" smooth={true} duration={500} className="flex text-black hover:underline font-bold text-base">About</Link>
          <Link to="projects" smooth={true} duration={500} className="flex text-black hover:underline font-bold text-base">Project</Link>
          <Link to="contact" smooth={true} duration={500} className="flex text-black hover:underline font-bold text-base">Contact</Link>
          <a href="resume.pdf" download="Anthony's resume.pdf" className="flex pr-8 text-black hover:underline font-bold text-base">Resume&nbsp;<Download/></a>
        </nav>
      </header>

      <header className="lg:hidden mt-16 mx-auto w-[75vw] h-16 rounded-2xl border border-gray-300 flex items-center justify-evenly shadow-sm">
        <Link to="home" smooth={true} duration={500}><Home/></Link>
        <div className="h-6 border-l border-gray-300"></div>
        <Link to="about" smooth={true} duration={500}><User/></Link>
        <div className="h-6 border-l border-gray-300"></div>
        <Link to="project" smooth={true} duration={500}><Briefcase/></Link>
        <div className="h-6 border-l border-gray-300"></div>
        <Link to="contact" smooth={true} duration={500}><Mail/></Link>
        <div className="h-6 border-l border-gray-300"></div>
        <a href="resume.pdf" download="Anthony's resume.pdf"><FileText/></a>
      </header>

      <div id="home" data-aos="fade-up" className="mt-32 ml-6">
        <img src="profile.webp" className="w-36 h-36 lg:w-40 lg:h-40 rounded-full shadow-lg object-cover"/>
      </div>

      <section data-aos="fade-up" data-aos-delay="200">
        <p className="mt-8 ml-4 text-2xl font-extrabold text-black">
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
        <p className="mt-2 ml-4 pr-5 text-lg font-medium text-gray-600">A Chemistry student with an enthusiasm for transforming ideas into code. I love bridging science and technology to build creative solutions.</p>
        <Link to="contact"><button className="mt-4 ml-6 p-2.5 bg-black text-white rounded-xl font-medium text-base">Reach Out!</button></Link>
      </section>

      <Motion />

      <MotionPractice/>

      <section id="about" data-aos="fade-up" data-aos-delay="400">
        <p className="mt-14 ml-4 text-2xl font-extrabold text-black">Just Me.</p>
        <p className='mt-3 ml-4 pr-5 text-base font-medium text-gray-600'>Hi, I'm Anthony, a Chemistry student with an enthusiasm for Software Engineering. I love solving problems-whether it's a tricky chemical equation or a stubborn piece of code. Who knew balancing equations could be as satisfying as debugging a program?</p>
        <p className='mt-4 ml-4 pr-5 text-base font-medium text-gray-600'>I'm fascinated by the blend of science and technology, always curious, experimenting, and learning. I enjoy turning challenges into creative solutions, and yes...sometimes my experiments explode-but that's just part of the fun!</p>
        <div className="mt-16 w-full border-t border-gray-300"></div>
      </section>
      
      <section data-aos="fade-up" data-aos-delay="600">
        <p className="mt-12 ml-2 text-2xl font-extrabold text-black">Roles & Experience</p>
        <p className='mt-6 ml-2 text-sm font-medium text-gray-600'>Sept 2025-Present</p>
        <p className='mt-4 ml-2 text-xl font-bold text-black'>Univad Campus Ambassador | University of Ilorin</p>
        <p className='mt-6 ml-2 text-sm font-medium text-gray-600'>Sept 2025-Present</p>
        <p className='mt-4 ml-2 text-xl font-bold text-black'>Cowrywise Campus Ambassador | University of Ilorin</p>
        <p className='mt-6 ml-2 text-sm font-medium text-gray-600'>Sept 2025-Present</p>
        <p className='mt-4 ml-2 text-xl font-bold text-black'>Software Engineering Intern | DevSphere</p>
        <p className='ml-2 mt-10 text-base font-medium text-gray-600'>Please check <a href="resume.pdf" download="Anthony's resume.pdf" className='underline text-blue-600'>resume</a> for more details.</p>
      </section>
      
      <SkillsMotion />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;
