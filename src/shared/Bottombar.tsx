import { bottombarLinks } from "@/constants";
import { INavLink } from "../../lib/types";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const { pathname } = useLocation();

  return (
    <section className=" bg-[#342F3F] fixed max-w-[560px] mx-auto left-1/2 translate-x-[-50%] bottom-0 flex  w-full justify-evenly py-4 shadow-md shadow-white">
      {bottombarLinks.map((link: INavLink) => {
        const isActive = pathname === link.route;
        return (
          <Link
          key={link.label}
            to={link.route}
             className={` rounded-full p-2 ${isActive ? "shadow-md shadow-gray-500" : ""}`}
          >
            <img
              src={link.imgURL}
              alt=""
              width={32}
              height={32}
              // className={isActive ? "invert-white" : ""}
            />
            {/* <p className="tiny-medium text-light-2"> {link.label}</p> */}
          </Link>
        );
      })}
    </section>
  );
};

export default BottomBar;
