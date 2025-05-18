import { cn, unixCoverter } from "../../utils/utils";
import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller } from "react-hook-form";
import birthdateicon from "../../assets/images/birthdateicon.svg";

const DateInput = (props) => {
  const {
    dateType,
    control,
    name,
    label,
    errors,
    className,
    placeholder,
    disabled,
    maxDate,
    hour = 0,
    minute = 0,
    second = 0,
    minDate,
    defaultDate,
    setValue,
  } = props;

  return (
    <>
      <div
        className={cn(
          " col-span-2 xl:col-span-1 flex flex-col gap-2 z-90 ",
          className
        )}
      >
        <label htmlFor="" className="text-[14px] md:text-[16px]">
          {label}
        </label>
        <div className="relative">
          <img
            src={birthdateicon}
            className="absolute right-2 top-[50%] translate-y-[-50%] w-6 h-6    "
            alt="datePicker-icon"
          />
          {!disabled && (
            <img
              src={"/icons/close-icon.svg"}
              onClick={() => setValue(name, null)}
              className="absolute left-2  top-[50%] translate-y-[-50%] w-6 h-6  bg-neutral-10 rounded-full cursor-pointer hover:bg-neutral-20  "
              alt="datePicker-icon"
            />
          )}

          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value } }) => {
              ////console.log(value);
              return (
                <DatePicker
                  style={{
                    width: "100%",
                    height: "52px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    border: disabled ? "none" : "1px solid #ccc",
                    backgroundColor: disabled ? "#F5F5F5" : "white",
                    padding: "12px 36px 12px 16px",
                  }}
                  containerStyle={{
                    width: "100%",
                  }}
                  disabled={disabled}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="top-right"
                  placeholder={placeholder}
                  onChange={(date) => {
                    //console.log(unixCoverter(date.unix));
                    if (dateType === "search") {
                      const selectedDate = new Date(date);
                      selectedDate.setHours(hour, minute, second);
                      onChange(selectedDate);
                    } else {
                      onChange(unixCoverter(date.unix));
                    }
                  }}
                  onBlur={onBlur}
                  value={
                    value ? new Date(value) : defaultDate ? defaultDate : null
                  }
                  maxDate={maxDate}
                  minDate={minDate}
                />
              );
            }}
          />
        </div>
        {errors?.message && (
          <div className="text-red-500  text-sm">{errors?.message}</div>
        )}
      </div>
    </>
  );
};

export default DateInput;
