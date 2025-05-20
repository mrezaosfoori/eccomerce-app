
import TextField from '@mui/material/TextField';
import { Controller } from "react-hook-form";

type Props = {
  control: any;
  name: string;
  type: string;
  label: string;
  placeholder: string;
};

const CustomControl = ({ control, name, type, label, placeholder }: Props) => {
  switch (type) {
    case "input":
      return (
        <div className="flex flex-col p-2">
          <label htmlFor="">{label} </label>
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value ,ref} ,fieldState: {error} }) => (
           <div className="flex flex-col gap-1">
              <TextField 
              inputRef={ref}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeholder={placeholder}
              id="standard-basic"  variant="standard"
              />
            {error && (
                  <span className="text-red text-sm">
                    {error.message}
                  </span>
                )}
           </div>
            )}
          />
        </div>
      );

    default:
      break;
  }
};

export default CustomControl;
