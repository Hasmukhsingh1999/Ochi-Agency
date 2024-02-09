const Landing = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 text-white">
      <div className="textstructure mt-32 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div className="masker font-Neueue-Montreal" key={index}>
            <div className="w-fit flex items-center ">
              {index === 1 && (
                <div className="w-[9vw] mr-[1vw] h-[5vw] bg-red-500 rounded-md"></div>
              )}
              <h1 className="uppercase text-8xl h-full -leading-[-5vw] tracking-tighter font-semibold flex items-center">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to the IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-lg font-semibold tracking-tight leading-none "
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-3">
          <div className="px-7 py-2 border-[1px] border-zinc-600  rounded-full capitalize font-semibold text-sm">
            start the project
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-600 flex items-center justify-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
