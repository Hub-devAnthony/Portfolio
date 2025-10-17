import { Home, User, Briefcase, Mail, FileText, Download } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import   Motion from './motion.jsx';

function App () {
  return (
    <>
      <header className="hidden lg:flex w-full h-16 border-b-2 border-gray-500 flex items-center justify-between">
        <p className="pl-4 text-gray-800 font-black text-2xl italic">My-Portifolio</p>
        <nav className="flex space-x-10">
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

      <div className="mt-10 ml-6">
        <img src="profile-image.png" className="w-40 h-40 rounded-full shadow-lg object-cover"/>
      </div>

      <p className="mt-6 ml-4 text-2xl font-bold text-gray-900">
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

      <a href="contact"><button className="mt-4 ml-6 p-2.5 bg-gray-900 text-white rounded-xl font-normal text-base">Reach Out!</button></a>

      <Motion/>
    </>
  );
}

export default App;
