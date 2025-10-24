import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectsSection () {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out', once: true });
  }, []);

  return (
    <div id="project" data-aos="fade-up" data-aos-delay="600">
       <p className="mt-6 text-center text-2xl font-extrabold text-black">My Articles.</p>

       <div className="flex flex-col justify-evenly mt-10 mx-auto h-[500px] w-[85vw] border-gray-300 border rounded-2xl shadow-lg">
        <div className="mx-auto rounded-2xl border-gray-300 border w-5/6 h-2/5 overflow-hidden">
          <img className="w-full h-full object-cover" src="article.jpg" />
        </div>
        <p className="ml-6 text-xl font-bold text-black">SOLID (Open/Closed Principle)</p>
        <p className="ml-6 text-base font-medium text-gray-600">Exploring the SOLID principles - beaking down the Open/Closed principle using acid-base neutralization reaction as a relatable analogy.</p>
        <a href="https://medium.com/@isijolaayomikun04"><button className="ml-6 h-[48px] w-48 bg-gray-400 rounded-xl font-medium text-base">Read Article</button></a>
      </div>

      <a href="https://medium.com/@isijolaayomikun04">
        <div className="mx-auto mt-6 flex flex-col items-center justify-evenly h-56 w-48">
          <button className="w-48 h-16 bg-black text-white rounded-xl shadow-sm font-medium text-base">Explore More Articles</button>
        </div>
      </a>

      <p className="mt-6 ml-4 text-2xl font-extrabold text-black">Here are my Innovations & Experiments.</p>

      <div className="flex flex-col justify-evenly mt-10 mx-auto h-[500px] w-[85vw] border-gray-300 border rounded-2xl shadow-lg">
        <div className="mx-auto rounded-2xl border-gray-300 border w-5/6 h-2/5 overflow-hidden">
          <img className="w-full h-full object-cover" src="package.png" />
        </div>
        <p className="ml-6 text-xl font-bold text-black">Universities in Nigeria - NPM Package</p>
        <p className="ml-6 text-base font-medium text-gray-600">An NPM package that provides a complete and up-to-date list of all federal, state, and private universities in Nigeria for easy integration into web and data applications.</p>
        <button className="ml-6 h-[48px] w-48 bg-gray-400 rounded-xl font-medium text-base">View Package</button>
      </div>

      <div className="flex flex-col justify-evenly mt-10 mx-auto h-[500px] w-[85vw] border-gray-300 border rounded-2xl shadow-lg">
        <div className="mx-auto rounded-2xl border-gray-300 border w-5/6 h-2/5 overflow-hidden">
          <img className="w-full h-full object-cover" src="inerface.png" />
        </div>
        <p className="ml-6 text-xl font-bold text-black">Nigerian Universities - Demo Interface</p>
        <p className="ml-6 text-base font-medium text-gray-600">A quick sneak peak into how the Nigerian Universities package works - clean UI, simple data display and smooth experience.</p>
        <button className="ml-6 h-[48px] w-48 bg-gray-400 rounded-xl font-medium text-base">View Project</button>
      </div>

      <div className="flex flex-col justify-evenly mt-6 mx-auto h-[500px] w-[85vw] border-gray-300 border rounded-2xl shadow-lg">
        <div className="rounded-xl mx-auto border-gray-300 border w-5/6 h-2/5 overflow-hidden">
          <img className="w-full h-full object-cover" src="third.png" />
        </div>
        <p className="ml-6 text-xl font-bold text-black">GreenLab</p>
        <p className="ml-6 text-base font-medium text-gray-600">Building a mobile web app that allows users to identify households chemicals, understand safe usage and promotes eco-friendly alternatives.</p>
        <button className="ml-6 h-[48px] w-48 bg-gray-400 rounded-xl font-medium text-base">View Project</button>
      </div>

      <div className="flex flex-col justify-evenly mt-10 mx-auto h-[500px] w-[85vw] border-gray-300 border rounded-2xl shadow-lg">
        <div className="mx-auto rounded-xl border-gray-300 border w-5/6 h-2/5 overflow-hidden">
          <img className="w-full h-full object-cover" src="fourth.png" />
        </div>
        <p className="ml-6 text-xl font-bold text-black">ChemQuest</p>
        <p className="ml-6 text-base font-medium text-gray-600">An interactive quiz game that helps users learn about different chemicals, their use, and their effects on the environment.</p>
        <button className="ml-6 h-[48px] w-48 bg-gray-400 rounded-xl font-medium text-base">View Project</button>
      </div>

      <div className="flex flex-col justify-evenly mt-10 mx-auto h-[500px] w-[85vw] border-gray-300 border rounded-2xl shadow-lg">
        <div className="mx-auto rounded-xl border-gray-300 border w-5/6 h-2/5 overflow-hidden">
          <img className="w-full h-full object-cover" src="first.png" />
        </div>
        <p className="ml-6 text-xl font-bold text-black">An E-commerce Website</p>
        <p className="ml-6 text-base font-medium text-gray-600">Working on a responsive e-commerce website with React.js and Tailwind CSS, with ongoing work to make it fully interactive.</p>
        <button className="ml-6 h-[48px] w-48 bg-gray-400 rounded-xl font-medium text-base">View Project</button>
      </div>

      <div className="flex flex-col justify-evenly mt-10 mx-auto h-[500px] w-[85vw] border-gray-300 border rounded-2xl shadow-lg">
        <div className="mx-auto rounded-2xl border-gray-300 border w-5/6 h-2/5 overflow-hidden">
          <img className="w-full h-full object-cover" src="second.png" />
        </div>
        <p className="ml-6 text-xl font-bold text-black">A ChatBot</p>
        <p className="ml-6 text-base font-medium text-gray-600">Built a simple chatbot with React.js that answers user questions in real time, working on adding more data to it.</p>
        <button className="ml-6 h-[48px] w-48 bg-gray-400 rounded-xl font-medium text-base">View Project</button>
      </div>

      <div className="mx-auto mt-8 flex flex-col items-center justify-evenly h-56 w-48">
        <button className="px-5 py-3 bg-black text-white rounded-xl shadow-sm font-medium text-base">View More</button>
      </div>
    </div>
  );
}

export default ProjectsSection;