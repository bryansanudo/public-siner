import { useState } from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { MdExitToApp, MdClose } from "react-icons/md";

const HeaderMobile = ({ activeLink, logout }) => {
  const [showMenu, setShowMenu] = useState(false);

  /*  const hideMenu = () => {
    setShowMenu(false);
  }; */

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {/* {<div
        onClick={hideMenu}
        className={
          showMenu
            ? "absolute top-0 right-0 w-full h-[100vh] bg-[rgba(0,0,0,0.5)] transition-all duration-700 "
            : ""
        }
      />} */}
      <div className="absolute right-6 top-6 md:hidden ">
        {showMenu ? (
          <MdClose className="text-5xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <HiOutlineMenuAlt3
            className="text-5xl cursor-pointer "
            onClick={toggleMenu}
          />
        )}
      </div>
      <div
        className={
          showMenu
            ? "z-40 flex flex-col p-3 fixed inset-0 right-1/2 bg-black/40 backdrop-blur-xl gap-8 "
            : "hidden"
        }
      >
        <ul
          onClick={toggleMenu}
          className="flex flex-col gap-6   justify-center"
        >
          <li className="flex justify-between items-center">
            <Link to="/">
              <h2>
                SINER<span className="text-primary">app</span>
              </h2>
            </Link>
          </li>
          <li className="hover:text-primary  duration-400">
            <NavLink className={activeLink} to="/get-files">
              Lista Expedientes
            </NavLink>
          </li>
          <li className="hover:text-primary  duration-400">
            <NavLink className={activeLink} to="/post-files">
              Crear Expediente
            </NavLink>
          </li>
        </ul>
        <ul className="flex flex-col  justify-center ">
          <li className="   mt-10 ">
            <NavLink onClick={logout}>
              <div className="flex items-center gap-1">
                Salir
                <MdExitToApp className="text-3xl" />
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderMobile;
