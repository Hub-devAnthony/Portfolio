import { motion } from 'framer-motion';

function Motion () {

  return (
    <div className="mx-auto flex items-center mt-16 w-full lg:w-3/4 h-80 border-b-2 border-t-2 border-gray-300 overflow-hidden">
      <motion.div
      className="flex space-x-10"
      animate={{ x: ["100%", "-100%"] }}
      transition={{
        ease: "linear",
        duration: 60,
        repeat: Infinity,
      }}
      >
      <div className="flex-shrink-0 flex items-center h-64 w-[75vw] lg:w-2/5 rounded-xl shadow-lg overflow-hidden">
        <img src="first.png" className="w-full h-full object-cover"/>
      </div>
      <div className="flex-shrink-0 flex items-center h-64 w-[75vw] lg:w-2/5 rounded-xl shadow-lg overflow-hidden">
        <img src="second.png" className="w-full h-full object-cover"/>
      </div>
      <div className="flex-shrink-0 flex items-center h-64 w-[75vw] lg:w-2/5 rounded-xl shadow-lg overflow-hidden">
        <img src="third.png" className="w-full h-full object-cover"/>
      </div>
      <div className="flex-shrink-0 flex items-center h-64 w-[75vw] lg:w-2/5 rounded-xl shadow-lg overflow-hidden">
        <img src="fourth.png" className="w-full h-full object-cover"/>
      </div>
      <div className="flex-shrink-0 flex items-center h-64 w-[75vw] lg:w-2/5 rounded-xl shadow-lg overflow-hidden">
        <img src="fifth.png" className="w-full h-full object-cover"/>
      </div>
     </motion.div>
    </div>
  );
}

export default Motion;