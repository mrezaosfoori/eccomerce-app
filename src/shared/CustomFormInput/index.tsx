
import { Controller } from "react-hook-form";
import styles from "./Styles.module.css";

// Memoized component
const CustomFormInput = ({
  control,
  name,
  label,
  type,
  errors,
  className,
  placeholder,
}:any) => {
  return (
    <div className={className}>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => {
          return (
            <div className={styles.formField}>
              <input
                
                dir="ltr"
                value={value}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
              />
              <span>
               <div dir="rtl" className="flex gap-2 text-dark-4 text-[18px]  items-center">
                 {label}{" "}
                 {errors && (
                   <div className="text-red text-sm">
                     {errors?.message}
                   </div>
                 )}
               </div>
              </span>
            </div>
          );
        }}
      />
    </div>
  );
};

export default CustomFormInput;
