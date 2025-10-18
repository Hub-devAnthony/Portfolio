import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function Motion () {
  const controls = useAnimation();

  const getDuration = () => {
    if (window.innerWidth < 640) return 15; // phones
    if (window.innerWidth < 1024) return 30; // tablets
    return 50; // desktops
  };

  const startScroll = (duration = getDuration()) => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        ease: "linear",
        duration,
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startScroll();
    window.addEventListener("resize", () => startScroll());
    return () => window.removeEventListener("resize", () => startScroll());
  }, []);

  return (
    <div
      className="overflow-hidden bg-gray-100 py-10"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => startScroll()}
    >
      <motion.div className="flex space-x-4 md:space-x-6" animate={controls}>
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex space-x-4 md:space-x-6">
            {[1, 2, 3, 4, 5].map((img) => (
              <div
                key={img}
                className="
                  flex-shrink-0
                  w-[75vw]       sm:w-[45vw] md:w-[30vw] lg:w-[20vw]
                  h-64
                  rounded-2xl
                  overflow-hidden
                  shadow-md
                "
              >
                <img
                  src={`/img${img}.jpg`}
                  alt={`img${img}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}


export default Motion;