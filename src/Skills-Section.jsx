import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

function SkillsMotion () {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out', once: true });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="600" className="mx-auto flex flex-col items-center justify-evenly mt-14 w-full lg:w-1/2 h-96 border-t border-b border-gray-300 overflow-hidden">
        <p className='text-center text-2xl font-extrabold text-black'>What i bring to the table?</p>
        <p className='text-center text-xl font-bold text-gray-600'>Always learning, always innovating.</p>
        <motion.div
          className='flex items-center justify-center space-x-8 h-16'
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 60,
            repeat: Infinity,
          }}
          >
            <button className="px-6 py-3.5 bg-black text-white rounded-2xl font-medium text-base shadow-lg">HTML</button>
            <button className="px-6 py-3.5 bg-black text-white rounded-2xl font-medium text-base shadow-lg">CSS</button>
            <button className="px-6 py-3.5 bg-black text-white rounded-2xl font-medium text-base">JavaScript</button>
            <button className="px-6 py-3.5 bg-black text-white rounded-2xl font-medium text-sm lg:text-base shadow-lg">React.js</button>
            <button className="px-6 py-3.5 bg-black text-white rounded-2xl font-medium text-base shadow-lg">TailwindCSS</button>
            <button className="px-6 py-3.5 bg-black text-white rounded-2xl font-medium text-base shadow-lg">Git</button>
            <button className="px-6 py-3.5 bg-black text-white rounded-2xl font-medium text-base shadow-lg">GitHub</button>
            <button className="px-6 py-3.5 bg-black text-white rounded-2xl font-medium text-base shadow-lg">Vercel</button>
            <button className="px-6 py-3.5 bg-black text-white rounded-2xl font-medium text-base shadow-lg">VSCode</button>
            <button className="px-6 py-3.5 bg-black text-white rounded-2xl font-medium text-base shadow-lg">Pesticide</button>
            <button className="px-6 py-3.5 bg-black text-white rounded-2xl font-medium text-base shadow-lg">ChromeDevTools</button>
        </motion.div>
    </div>
  );
}

export default SkillsMotion;
