import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <div className=" flex flex-col items-center mt-10 lg:mt-16">
      <div className="anime1 h-[25vw] w-[25vw]  rounded-full filter blur-[4vw] absolute left-[-20px] top-[-20vh] bg-gradient-to-r from-orange-400 to-orange-700 -z-40"></div>
      <div className="anime2 h-[25vw] w-[25vw] rounded-full filter blur-[4vw] absolute left-0 top-[-10vh] bg-gradient-to-r from-orange-400 to-orange-700 -z-40"></div>
      <h1 className="font-[600] text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> for developers</span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Empower your creativity and bring your VR ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</p>
      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:scale-[1.05] active:scale-[1] duration-300 ease-in-out">Start for free</a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border hover:scale-[1.05] active:scale-[1] duration-300 ease-in-out">Documentation</a>
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 ">
          <source src={video1} type="video/mp4"/>
          Your browser does not support the video tag. 
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 ">
          <source src={video2} type="video/mp4"/>
          Your browser does not support the video tag. 
        </video>
      </div>
    </div>
  )
}

export default HeroSection;