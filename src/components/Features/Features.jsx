import { motion, useAnimation } from "framer-motion";

const Features = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    console.log("Hover end triggered for index:", index);
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[2px] border-zinc-700 pb-20">
        <h1 className="text-6xl tracking-tight">Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card w-1/2 h-[75vh] cardcontainer relative"
          >
            <h1 className="absolute -translate-x-24 text-[#CDEA68] z-[9] text-8xl -pb-20 leading-none tracking-tighter left-full top-1/2 -translate-y-1/2 flex overflow-hidden">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: index * 0.6,
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full  rounded-lg overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            className="card w-1/2 h-[75vh] cardcontainer relative"
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
          >
            <h1 className="absolute translate-x-1/2 text-[#CDEA68] z-[9] text-8xl -pb-20 leading-none tracking-tighter right-full top-1/2 -translate-y-1/2 flex overflow-hidden">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: index * 0.6,
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full  rounded-lg overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
