
import React from "react";
import { cn } from "../../lib/utils";

const CustomSelect = (props) => {
  const {
    register,
    name,
    label,
    type,
    onchange,
    errors,
    placeholder,
    className,
    options,
  } = props;


  return (
    <div
      className={cn(
        " col-span-2 md:col-span-1 flex flex-col gap-2 relative",
        className
      )}
    >
      <label htmlFor=""> {label}</label>
      <select
        {...register(name)}
        name={name}
        type={type}
        onKeyUp={onchange}
        placeholder={placeholder}
        onWheel={(e) => e.target.blur()}
        className="h-[52px] px-4  outline-none rounded-v-md  w-full border-[1px] border-[#ccc] appearance-none"
      >
        <option value="" hidden disabled selected>
          {" "}
          انتخاب کنید ...
        </option>
        {options.map((option,index) => {
          return <option key={index} value={option.value}>{option.label}</option>;
        })}
      </select>
      <div className="pointer-events-none absolute top-1/2 translate-y-[50%] left-0 flex items-center px-2 text-gray-700 ">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
      {errors?.message && (
        <span className="text-red-500 text-sm">{errors?.message}</span>
      )}
    </div>
  );
};

export default CustomSelect;
