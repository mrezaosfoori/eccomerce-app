import React from "react";
import { cn } from "../../lib/utils";

const CustomInput = (props:any) => {
  const {
    register,
    name,
    label,
    type,
    onchange,
    errors,
    placeholder,
    className,
    disabled,
    tabIndex,
    required = false,
  } = props;

  return (
    <div
      className={cn("flex flex-col gap-2  col-span-1", className)}
    >
      <label htmlFor={name} className="text-[14px]">
        {label}
      </label>
      <input
        tabIndex={tabIndex ? tabIndex : "0"}
        className="h-[52px] px-4 outline-none rounded-v-md w-full border-[1px] border-[#ccc] disabled:bg-neutral-10 disabled:border-none"
        {...register(name, {
          required: required && {
            value: true,
            message: "این فیلد اجباری است ", // Custom required message here
          },
        })}
        name={name}
        disabled={disabled}
        type={type}
        onKeyUp={onchange}
        placeholder={placeholder}
        // onWheel={(e) => e.target.blur()}
      />
      {errors && (
        <span className="text-red-500 text-sm">{errors?.message}</span>
      )}
    </div>
  );
};

export default CustomInput;
