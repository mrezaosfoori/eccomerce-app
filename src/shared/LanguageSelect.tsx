import {  useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";

const LanguageSelect = () => {
  const {t,i18n: { changeLanguage, language }} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const options = [
    { value: "en", label: language === "en" ? "english" : "انگلیسی" },
    { value: "fa", label: language === "fa" ? "فارسی" : "persian" },
  ];

  const handleChangeLanguage = (e: any) => {
    setCurrentLanguage(e.value);
    changeLanguage(e.value);
  };

  return (
    <div className="max-w-[150px] text-dark-3">
      <Select
        styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: "black",
              border:"black",
              color:"white"
            }),
            singleValue: (baseStyles) => ({
              ...baseStyles,
              color:"white"
            }),
          }}
        key={currentLanguage}
        onChange={handleChangeLanguage}
        value={options.find((option) => option.value === currentLanguage)}
        options={options}
        placeholder={`${t("languageSelectPlaceholder")}`}
      />
    </div>
  );
};

export default LanguageSelect;
