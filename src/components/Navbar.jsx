
import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" w-full h-[45px]   p-4 bg-gray-800 gap-x-5 flex items-center justify-between">

<span className="text-white">
  <h3>Notepad++</h3>
</span>
      <span className="w-full h-[45px] flex justify-center items-center p-4 bg-gray-800 gap-x-5">

        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold text-xl"
                : "text-white font-medium text-xl"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </span>
    </div>
  );
};

export default Navbar;
