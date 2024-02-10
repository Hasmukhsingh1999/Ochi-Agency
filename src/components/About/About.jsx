const About = () => {
  return (
    <div className="w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="font-Neueue-Montreal text-6xl leading-[4vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>

      <div className="w-full border-t-[1px] mt-20 pt-10  border-[#a1b562] flex gap-5">
        <div className="w-1/2">
          <h1 className="text-6xl">Our approach :</h1>
          <button className="px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 flex items-center gap-10 uppercase">
            Read More <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>

        <div className="w-1/2 h-[70vh]  rounded-2xl overflow-hidden">
          <img src="https://i.pinimg.com/564x/f3/9d/f5/f39df54ecadaade7c680fda0d23a2776.jpg" className="h-full w-full object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default About;
