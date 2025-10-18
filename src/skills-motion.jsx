import { motion } from 'framer-motion';

function SkillsMotion () {
  return (
    <div className="mx-auto flex flex-col items-center justify-evenly mt-14 w-full lg:w-1/2 h-80 border-t-2 border-b-2 border-gray-300 overflow-hidden">
        <p className='text-4xl font-extrabold text-gray-900'>What I Bring to the Table?</p>
        <p className='text-2xl font-bold text-gray-600'>What I Know... and What I'm Learning</p>
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