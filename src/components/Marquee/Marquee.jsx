import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1"
      data-scroll-section
      className="w-full h-[50vh] rounded-tl-3xl rounded-tr-3xl
    bg-[#004d43] py-20 text-white"
    >
      <div className="text border-t-[1px] border-b-[1px] border-zinc-500 flex whitespace-nowrap items-center overflow-hidden pr-10">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw]  leading-none font-Founders-Grotesk  uppercase"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw]   leading-none font-Founders-Grotesk  uppercase"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[15vw]   leading-none font-Founders-Grotesk  uppercase"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
