const Alumini = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center gap-5 px-32">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative  w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" className=""/>
            <button className="px-5 py-1 border-2  absolute left-10 bottom-10 rounded-full">Hey</button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 flex gap-5 h-[50vh]">
        <div className="card w-1/2 h-full bg-zinc-800 rounded-xl flex items-center justify-center relative">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className="px-5 py-1 border-2  absolute left-10 bottom-10 rounded-full">Hey</button>
        </div>
        <div className="card w-1/2 h-full bg-zinc-800 rounded-xl flex items-center justify-center relative">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className=""/>
            <button className="px-5 py-1 border-2  absolute left-10 bottom-10 rounded-full">Hey</button>
        </div>
      </div>
    </div>
  );
};

export default Alumini;
