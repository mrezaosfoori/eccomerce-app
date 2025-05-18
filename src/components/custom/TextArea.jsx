
import React from "react";
import { cn } from "../../lib/utils";

const TextArea = (props) => {
  const {
    register,
    name,
    label,
    type,
    onchange,
    errors,
    placeholder,
    className,
  } = props;

  return (
    <div
      className={cn("  flex flex-col gap-2", className)}
    >
      <label htmlFor="">{label}</label>
      <textarea
        className="min-h-[52px] max-h-[82px] no-scrollbar p-4 my-2 outline-none rounded-v-md  w-full border-[1px] border-[#ccc]"
        {...register(name, { required: true })}
        name={name}
        type={type}
        onKeyUp={onchange}
        placeholder={placeholder}
        onWheel={(e) => e.target.blur()}
      />
      {errors?.message && (
        <span className="text-red-500 text-sm">{errors?.message}</span>
      )}
    </div>
  );
};

export default TextArea;
