import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const userData = useSelector((state) => state.auth.userData);
  const [theme, setTheme] = useState("light");


  useEffect(() => {
    // Initialize theme based on current data-theme
    const currentTheme = document.documentElement.dataset.theme || "light";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = newTheme;
     
    setTheme(newTheme);
  };

  return (
    <header className="flex justify-between gap-6 w-full mb-6">
      <button onClick={()=>toggleTheme()} className="text-sm px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>

      <div className="text-white">
        {userData?.email ? `Welcome, ${userData.email}` : "Welcome, Guest"}
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
