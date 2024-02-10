import { useEffect, useState } from "react";

const Parallax = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        data-scroll-section
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] "
      >
        <div className="absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  flex gap-10 justify-between">
          <div className=" w-[15vw] h-[15vw] rounded-full bg-zinc-200 flex items-center justify-center">
            <div className="w-2/3 h-2/3 relative  rounded-full bg-zinc-900">
              <div
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
                style={{
                  transform: `translate(-50%,-50%)  rotate(${rotate}deg)`,
                }}
              >
                <div className="h-10 w-10  bg-zinc-200 rounded-full "></div>
              </div>
            </div>
          </div>
          <div className=" w-[15vw] h-[15vw] rounded-full bg-zinc-200 items-center justify-center flex">
            <div className="w-2/3 h-2/3   rounded-full bg-zinc-900 relative">
              <div
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
                style={{
                  transform: `translate(-50%,-50%)  rotate(${rotate}deg)`,
                }}
              >
                <div className="h-10 w-10  bg-zinc-200 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
