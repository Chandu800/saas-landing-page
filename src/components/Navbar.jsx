import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import logo from "../assets/logo.png"
import { navItems } from "../constants"
import { Link } from "react-scroll"


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    }

// const scrollToTop = () => {
//   window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
  
// }

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto text-sm">
          <div className="flex justify-between items-center">
            <div className="lg:ml-10 flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2 cursor-pointer" src={logo} alt="logo-image" />
              <span className="font-[500] text-xl tracking-wide cursor-pointer">VirtulR</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} offset={-80} smooth duration={1000} className="hover:text-orange-500 cursor-pointer ">{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center items-center space-x-4 mr-10">
              <a href="#" className="py-2 px-3 border rounded-md bg-black hover:scale-[1.05] active:scale-[1] duration-300 ease-in-out">Sign In</a>
              <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:scale-[1.05] active:scale-[1] duration-300 ease-in-out">Create an account</a>
            </div>
            <div className="lg:hidden md:flex justify-end flex-col mr-3">
              <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu/> }</button>
            </div>
          </div> 
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 p-12 mt-[13px] bg-black w-full flex flex-col justify-center items-center text-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <Link onClick={toggleNavbar} to={item.href} offset={-80} smooth duration={500} className="hover:text-orange-500 cursor-pointer">{item.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center items-center space-x-6">
                <a href="#" className="mt-4 py-2 px-3 border rounded-md text-center hover:scale-[1.05] active:scale-[1] duration-300 ease-in-out">Sign In</a>
                <a href="#" className="mt-4 py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-center hover:scale-[1.05] active:scale-[1] duration-300 ease-in-out">Create an account</a>
              </div>
            </div>
          )}
        </div>
        
      </nav>
      {/* <button onClick={scrollToTop} className="fixed w-[50px] h-[50px] bottom-[25px] right-[25px] bg-neutral-600 rounded-full cursor-pointer text-white p-[15px] justify-center items-center text-[18px] font-bold py-1 hover:bg-neutral-500 active:scale-90 duration-200 active:bg-neutral-700">▲</button> */}
    </>
  );
}

export default Navbar;