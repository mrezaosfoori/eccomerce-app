import { useState } from "react";
import PropTypes from "prop-types";



const FilterBar = ({ options, setOptions }) => {
  const [activeIndex, setActiveIndex] = useState("0");

  // Calculate the number of active items across all filter options
  const activeItems = options.reduce(
    (count, group) =>
      count + group.options.filter((option) => option.active).length,
    0
  );

  // Get the active menu title and options
  const activeGroup = options.find((group) => group.id === activeIndex);
  const menuTitle = activeGroup?.title || "";
  const menuOptions = activeGroup?.options || [];

  // Handle filter activation
  const handleFilter = (id) => {
    setOptions((prevOptions) =>
      prevOptions.map((group) =>
        group.id === activeIndex
          ? {
              ...group,
              options: group.options.map((option) =>
                option.id === id
                  ? { ...option, active: true }
                  : { ...option, active: false }
              ),
            }
          : group
      )
    );
  };

  // Handle clearing filters
  const handleRemoveFilter = () => {
    setOptions((prevOptions) =>
      prevOptions.map((group) =>
        group.id === activeIndex
          ? {
              ...group,
              options: group.options.map((option) => ({
                ...option,
                active: false,
              })),
            }
          : group
      )
    );
  };

  return (
    <div className="flex gap-[2px] text-[12px] text-white">
      {/* Active Items Count */}
      <div className="bg-[#342F3F] px-2 flex items-center gap-1 min-w-fit rounded-[100px]">
        <img src="/assets/icons/filter.svg" alt="Filter Icon" width={16} height={16} />
        <p>{activeItems}</p>
      </div>

      {/* Filter Group Tabs */}
      {options.map((group) => {
        const isActive = group.options.some((option) => option.active);
        return (
          <div
            key={group.id}
            className={`${
              isActive ? "bg-[#8E6CEF]" : "bg-[#342F3F]"
            } px-2 py-1 flex items-center gap-1 min-w-fit rounded-[100px] cursor-pointer`}
            onClick={() => setActiveIndex(group.id)}
          >
            {group.title}
            <img src="/assets/icons/arrowdown2.svg" alt="Arrow Icon" width={16} height={16} />
          </div>
        );
      })}

      {/* Filter Options Popup */}
      {activeIndex && (
        <div
          className={`fixed right-0 bottom-0  w-screen bg-[#484255] shadow-xl shadow-white overflow-hidden ${
            menuOptions.length > 0
              ? "rounded-t-xl flex flex-col gap-4 p-4"
              : "h-0"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="w-full flex justify-between">
            <button
              onClick={handleRemoveFilter}
              className="h4-semibold text-light-1"
            >
              Clear
            </button>
            <p className="h4-bold text-light-1">{menuTitle}</p>
            <button
              onClick={() => setActiveIndex("")}
              className="bg-transparent text-light-1"
            >
              <img
                src="/assets/icons/closeicon.svg"
                alt="Close Icon"
                className="invert-white"
                width={24}
                height={24}
              />
            </button>
          </div>
          {/* Menu Options */}
          {menuOptions.map((option) => (
            <div
              key={option.id}
              className={`${
                option.active ? "bg-[#8E6CEF]" : "bg-[#342F3F]"
              } px-[34px] py-[18px] flex justify-between items-center gap-1 min-w-fit rounded-[100px] cursor-pointer`}
              onClick={() => handleFilter(option.id)}
            >
              {option.value}
              {option.active && (
                <img src="/assets/icons/check-2.svg" alt="Check Icon" width={24} height={24} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

FilterBar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
          active: PropTypes.bool,
        })
      ),
    })
  ).isRequired,
  setOptions: PropTypes.func.isRequired,
};

export default FilterBar;
