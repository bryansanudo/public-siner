import { Link, Outlet } from "react-router-dom";

import HeaderDesktop from "@/components/header/HeaderDesktop";
import HeaderMobile from "@/components/header/HeaderMobile";
import { auth } from "@/configFirebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";

const activeLink = ({ isActive }) =>
  isActive
    ? " relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-white"
    : ``;

const Header = () => {
  const userEmail = useSelector(selectEmail);

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.error("Cierre de sesion exitoso");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <>
      <header className="bg-black w-full text-white overflow-hidden fixed z-40">
        <div className="w-full h-24 max-w-[1200px] mx-auto p-4 flex justify-between items-center ">
          <div className="text-white w-[20%] text-lg">
            <Link to="/">
              <h2>
                Siner<span className="text-primary">App</span>
              </h2>
            </Link>
          </div>

          <nav className="w-[80%] text-lg ">
            {/* desktop */}

            <HeaderDesktop
              activeLink={activeLink}
              logout={logout}
              userEmail={userEmail}
            />
            <HeaderMobile activeLink={activeLink} logout={logout} />

            {/* mobile */}
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
