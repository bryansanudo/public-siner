import React from "react";
import { NavLink } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import { MdExitToApp } from "react-icons/md";

const HeaderDesktop = ({ activeLink, logout, userEmail }) => {
  return (
    <>
      <div className="hidden md:flex justify-between mx- gap-8">
        <ul className="flex gap-6  items-center justify-center">
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/get-files">
              Listar Expedientes
            </NavLink>
          </li>
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/post-files">
              Crear Expediente
            </NavLink>
          </li>
        </ul>
        <ul className="flex gap- items-center justify-center">
          <li>
            <span className="text-primary">hola</span>, {userEmail}
          </li>
          <li className=" hover:scale-105 duration-400 ml-4 ">
            <NavLink onClick={logout}>
              <div className="flex items-center justify-center gap-1">
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

export default HeaderDesktop;
