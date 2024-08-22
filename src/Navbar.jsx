import { NavLink } from 'react-router-dom';
import { FaBackspace } from 'react-icons/fa';
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white/30 backdrop-blur-lg border border-white/30 shadow-md items-center">
        <div className="flex justify-between p-3 items-center ">
          <div className="flex items-center text-3xl">
            <FaBackspace className="cursor-pointer mt-3" />
            <h1 className="m-4 text-black">
              remove<span className="text-[#BAC0C4] mx-2">bg</span>
            </h1>
          </div>
          <div className="text-xl -ml-32">
            <ul className="flex text-[#67737D] space-x-10">
              <NavLink to="/" className='hover:bg-slate-300 p-2 hover:rounded-xl min-w-[150px] text-center'>Remove Background</NavLink>
              <NavLink className='hover:bg-slate-300 p-2 hover:rounded-xl min-w-[150px] text-center flex items-center'>How to Use
              <RiArrowDropDownLine className='space-x-2 ml-2' />
                 </NavLink>
              <NavLink className='hover:bg-slate-300 p-2 hover:rounded-xl min-w-[150px] text-center'>Tools & API</NavLink>
              <NavLink className='hover:bg-slate-300 p-2 hover:rounded-xl min-w-[150px] text-center'>Pricing</NavLink>
            </ul>
          </div>
          <div className="flex space-x-4">
            <NavLink className='hover:bg-slate-300 p-2 hover:rounded-xl min-w-[100px] text-center'>Login</NavLink>
            <NavLink className='bg-slate-300 p-2 rounded-xl min-w-[100px] text-center'>Sign up</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
