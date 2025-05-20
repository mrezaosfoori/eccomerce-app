import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import arrowDown from "../../../public/assets/icons/downArrow.svg";
import arrowUp from "../../../public/assets/icons/upArrow.svg";
import { sidebarLinks } from "@/constants";

const Sidebar = () => {
  const navigate = useNavigate();
  
  const [activeMenu, setActiveMenu] = useState(() => {
    const savedActiveMenu = localStorage.getItem("activeMenu");
    return savedActiveMenu ? JSON.parse(savedActiveMenu) : null;
  });

  const [selectedSubMenu, setSelectedSubMenu] = useState(() => {
    const savedSelectedSubMenu = localStorage.getItem("selectedSubMenu");
    return savedSelectedSubMenu ? JSON.parse(savedSelectedSubMenu) : null;
  });

  useEffect(() => {
    localStorage.setItem("activeMenu", JSON.stringify(activeMenu));
  }, [activeMenu]);

  useEffect(() => {
    localStorage.setItem("selectedSubMenu", JSON.stringify(selectedSubMenu));
  }, [selectedSubMenu]);

  const menuClickHandler = (index:number) => {
    setActiveMenu((prevActiveMenu:any) => (prevActiveMenu === index ? null : index));
  };

  const subMenuClickHandler = (navPath:string, subPath:string) => {
    const fullPath = navPath + subPath;
    navigate(fullPath);
    setSelectedSubMenu(fullPath);
  };

  return (
    <div className="min-w-[240px] h-fit  text-white  text-title-sm-regular  p-2 absolute   ">
      {sidebarLinks.map((nav, index) => (
        <div key={index} className="flex flex-col w-full mx-auto">
          <div
            className="flex justify-between p-4 bg-neutral-20 hover:bg-neutral-40 cursor-pointer"
            onClick={() => menuClickHandler(index)}
          >
            <p className={activeMenu === index ? "text-title-lg-semibold" : ""} >{nav.title}</p>
            {!!nav.subNav.length && <img src={activeMenu === index ? arrowUp : arrowDown} alt="" width={16} height={16}  />}
          </div>

          {activeMenu === index && (
            <div className="my-2 bg-neutral-10 rounded-lg">
              {nav.subNav.map((sub, subIndex) => {
                const isSelected = selectedSubMenu === nav.path + sub.path;
                return (
                  <div
                    key={subIndex}
                    onClick={() => subMenuClickHandler(nav.path, sub.path)}
                    className={`flex justify-between px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-30 ${
                      isSelected ? "bg-primary-100 text-white hover:bg-primary-100" : ""
                    }`}
                  >
                    <p>{sub.title}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
