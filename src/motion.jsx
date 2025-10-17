import { motion, useAnimation } from 'framer-motion';

function Motion () {
  const controls = useAnimation();

  return (
    <div className="flex items-center mt-8 w-full h-72 border-b-2 border-t-2 border-gray-400 overflow-hidden"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start({
        x: ["100%", "-100%"],
        transition: {
          ease: "linear",
          duration: 60,
          repeat: Infinity,
        },
      })}
      >
      <motion.div
      className="flex space-x-10"
      animate={{ x: ["100%", "-100%"] }}
      transition={{
        ease: "linear",
        duration: 60,
        repeat: Infinity,
      }}
      >
      <div className="flex-shrink-0 flex items-center h-56 w-[75vw] lg:w-2/5 border-2 border-gray-500 rounded-xl shadow-lg overflow-hidden">
        <img src="profile-image.png" className="w-full h-auto object-contain"/>
      </div>
      <div className="flex-shrink-0 flex items-center h-56 w-[75vw] lg:w-2/5 border-2 border-gray-500 rounded-xl shadow-lg overflow-hidden">
        <img src="profile-image.png" className="w-full h-auto object-contain"/>
      </div>
      <div className="flex-shrink-0 flex items-center h-56 w-[75vw] lg:w-2/5 border-2 border-gray-500 rounded-xl shadow-lg overflow-hidden">
        <img src="profile-image.png" className="w-full h-auto object-contain"/>
      </div>
      <div className="flex-shrink-0 flex items-center h-56 w-[75vw] lg:w-2/5 border-2 border-gray-500 rounded-xl shadow-lg overflow-hidden">
        <img src="profile-image.png" className="w-full h-auto object-contain"/>
      </div>
     </motion.div>
    </div>
  );
}

export default Motion;