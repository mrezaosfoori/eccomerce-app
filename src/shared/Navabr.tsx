import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import DarkModeButton from "./DarkModeButton";

const Navbar = () => {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <header className="flex justify-between gap-6 w-full mb-6 shadow-blue-100 shadow-sm py-5 px-6">
      <div className="flex items-center gap-2">
        <LogoutButton />
        <DarkModeButton />
        <p>
          {userData?.email ? `Welcome, ${userData.email}` : "Welcome, Guest"}
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <div className="relative h-10 w-full">
          <img
            src="/assets/icons/searchnormal1.png"
            width={16}
            height={16}
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            alt="Search Icon"
          />
          <input
            placeholder="Search entire website..."
            className="bg-[#342F3F] text-white px-12 py-2 w-full rounded-full focus:outline-[#8E6CEF]"
          />
        </div>

        <Link to="/basket" className="flex items-center">
          <img
            src="/assets/icons/basket.svg"
            width={40}
            height={40}
            alt="Basket"
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
