const Landing = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Cretae", "Eye Opening", "Presentations"].map((item, index) => (
          <div className="masker font-Neueue-Montreal" key={index}>
            <h1 className="uppercase text-9xl  -leading-[-4vw] tracking-tighter font-md">
              {item}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
