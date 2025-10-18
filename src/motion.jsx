import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

function Motion () {
  useEffect(() => {
      AOS.init({ duration: 800, easing: 'ease-out', once: true });
    }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="200" className="mx-auto flex items-center mt-16 w-full lg:w-3/4 h-80 border-b border-t border-gray-300 overflow-hidden">
      <motion.div
        className="flex space-x-8"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 60,
          repeat: Infinity,
        }}
      >
      <div className="flex-shrink-0 flex items-center h-64 w-[75vw] lg:w-2/5 border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
        <img src="first.png" className="w-full h-full object-cover"/>
      </div>
      <div className="flex-shrink-0 flex items-center h-64 w-[75vw] lg:w-2/5 border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
        <img src="second.png" className="w-full h-full object-cover"/>
      </div>
      <div className="flex-shrink-0 flex items-center h-64 w-[75vw] lg:w-2/5 border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
        <img src="third.png" className="w-full h-full object-cover"/>
      </div>
      <div className="flex-shrink-0 flex items-center h-64 w-[75vw] lg:w-2/5 border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
        <img src="fourth.png" className="w-full h-full object-cover"/>
      </div>
      <div className="flex-shrink-0 flex items-center h-64 w-[75vw] lg:w-2/5 border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
        <img src="fifth.png" className="w-full h-full object-cover"/>
      </div>
     </motion.div>
    </div>
  );
}

export default Motion;