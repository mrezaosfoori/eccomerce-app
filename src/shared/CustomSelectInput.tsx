import { Controller } from "react-hook-form";

// Memoized component
const CustomSelectInput = ({
  control,
  name,
  className,
  options,
}: any) => {
  console.log({ options });
  return (
    <div className={className}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => {
          return (
            <select className="select-style" onChange={(e)=>onChange(e.target.value)}>
              <option className="text-white bg-black" value="" hidden>
                select category ...
              </option>
              ;
              {options.map((item: any) => (
                <option className="text-white bg-black" value={item._id}>
                  {item.label}
                </option>
              ))}
            </select>
          );
        }}
      />
    </div>
  );
};

export default CustomSelectInput;
