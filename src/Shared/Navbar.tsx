import { useState } from 'react';
// import bg from "../assets/image.png"
import logo from "../assets/Images/Logo.svg";
import '../index.css'



const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (

<>
  <div className="w-full bg-gray-900/25 absolute z-50">
    <div className="h-20 px-4 lg:px-6 flex items-center justify-between max-w-[1420px] mx-auto">
      {/* Left Section: Logo */}
      <div className="h-full flex-shrink-0">
        <img src={logo} className="h-full object-contain" alt="Logo" />
      </div>

      {/* Right Section: Menu */}
      <div className="hidden lg:flex">
        <ul className="flex gap-6 text-base lg:text-lg text-white">
          <li><a className="hover:font-medium transition" href="#">The Experience</a></li>
          <li><a className="hover:font-medium transition" href="#">About</a></li>
          <li><a className="hover:font-medium transition" href="#">Featured Collaborators</a></li>
          <li><a className="hover:font-medium transition" href="#">Partner or Sponsor</a></li>
          <li><a className="hover:font-medium transition" href="#">Exhibit</a></li>
          <li><a className="hover:font-medium transition" href="#">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-center">
        <button className="text-white focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="bg-gray-800 lg:hidden">
        <ul className="flex flex-col items-start p-4 gap-4 text-white text-base">
          <li><a className="hover:font-medium transition" href="#">The Experience</a></li>
          <li><a className="hover:font-medium transition" href="#">About</a></li>
          <li><a className="hover:font-medium transition" href="#">Featured Collaborators</a></li>
          <li><a className="hover:font-medium transition" href="#">Partner or Sponsor</a></li>
          <li><a className="hover:font-medium transition" href="#">Exhibit</a></li>
          <li><a className="hover:font-medium transition" href="#">Contact</a></li>
        </ul>
      </div>
    )}
  </div>
</>


    // {/* <div className='text-9xl' style={{ backgroundImage: `url(${bg})` }}>Navbar</div> */}

  )
}

export default Navbar