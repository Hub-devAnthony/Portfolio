import { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";

const techIcons = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <FaGitAlt className="text-red-600" />, name: "Git" },
];

function MotionPractice () {
  useEffect(() => {
      AOS.init({ duration: 800, easing: 'ease-out', once: true });
    }, []);
  
  const loopedIcons = [...techIcons, ...techIcons];

  return (
    <div data-aos="fade-up" data-aos-delay="200" className="mt-12 overflow-hidden w-full sm:w-[75%] mx-auto py-8">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {loopedIcons.map((tech, index) => (
          <div
            key={index}
            className="flex-none w-16 h-16 sm:w-20 sm:h-20 bg-grya-400 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/20 hover:scale-110 transition-transform"
            title={tech.name}
          >
            <div className="text-4xl">{tech.icon}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default MotionPractice;