import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBackspace } from 'react-icons/fa';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 backdrop-blur-lg border border-gray-700 shadow-md">
  <div className="flex justify-between p-3 items-center">
    <div className="flex items-center text-4xl">
      <FaBackspace className="cursor-pointer mt-3 text-white" />
      <h1 className="m-4 text-white cursor-pointer">
        remove<span className="text-gray-400 mx-1">bg</span>
      </h1>
    </div>

    <div className="flex sm:hidden items-center text-3xl text-white">
      {!isMenuOpen ? (
        <IoMdMenu className="cursor-pointer" onClick={toggleMenu} />
      ) : (
        <RxCross2 className="cursor-pointer" onClick={toggleMenu} />
      )}
    </div>

    <div className="hidden sm:flex space-x-10 text-xl text-gray-300">
      <NavLink to="/remove" className='hover:bg-gray-700 p-2 hover:rounded-xl min-w-[150px] text-center'>Remove Background</NavLink>
      <NavLink className='hover:bg-gray-700 p-2 hover:rounded-xl min-w-[150px] text-center flex items-center'>How to Use
        <RiArrowDropDownLine className='space-x-2 ml-2' />
      </NavLink>
      <NavLink className='hover:bg-gray-700 p-2 hover:rounded-xl min-w-[150px] text-center'>Tools & API</NavLink>
      <NavLink className='hover:bg-gray-700 p-2 hover:rounded-xl min-w-[150px] text-center'>Pricing</NavLink>
    </div>

    <div className="hidden sm:flex space-x-4 text-xl">
      <NavLink className='hover:bg-gray-700 p-2 hover:rounded-xl min-w-[100px] text-center text-white'>Login</NavLink>
      <NavLink className='bg-blue-500 p-2 rounded-xl min-w-[100px] text-center hover:bg-blue-600'>Sign up</NavLink>
    </div>
  </div>

  <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:hidden flex-col items-center bg-gray-800 backdrop-blur-lg border-t border-gray-700 shadow-md`}>
    <ul className="flex flex-col text-xl text-gray-300 space-y-4 mt-4">
      <NavLink to="/remove" className='hover:bg-gray-700 p-2 hover:rounded-xl min-w-[150px] text-center'>Remove Background</NavLink>
      <NavLink className='hover:bg-gray-700 p-2 hover:rounded-xl min-w-[150px] text-center flex items-center'>How to Use
        <RiArrowDropDownLine className='space-x-2 ml-2' />
      </NavLink>
      <NavLink className='hover:bg-gray-700 p-2 hover:rounded-xl min-w-[150px] text-center'>Tools & API</NavLink>
      <NavLink className='hover:bg-gray-700 p-2 hover:rounded-xl min-w-[150px] text-center'>Pricing</NavLink>
    </ul>

    <div className="space-y-4 space-x-4 text-xl mt-6 mb-4">
      <NavLink className='hover:bg-gray-700 p-2 hover:rounded-xl min-w-[100px] text-center text-white'>Login</NavLink>
      <NavLink className='bg-blue-500 p-2 rounded-xl min-w-[100px] text-center hover:bg-blue-600'>Sign up</NavLink>
    </div>
  </div>
</nav>

    </>
  );
};

export default Navbar;
