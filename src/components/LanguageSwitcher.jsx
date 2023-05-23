import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  let timer = null;

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(timer);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setIsOpen(false);
    }, 500); // adjust timing as needed
  };

  const languages = {
    en: "🇬🇧 English",
    pl: "🇵🇱 Polski",
  };

  return (
    <div className="relative inline-block text-left">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button className="focus:outline-none">
          {languages[currentLanguage]}
        </button>
      </div>

      {isOpen && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="origin-top-right absolute mt-6 w-fit rounded-md shadow-lg bg-white z-10 transition-opacity ease-in-out duration-500"
        >
          <div className="rounded-md bg-white shadow-xs ">
            <div className="">
              {Object.entries(languages).map(([lng, display]) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className="block text-center px-4 py-2 text-sm hover:bg-[#52A6F8] hover:text-white focus:outline-none focus:bg-[#52A6F8] focus:text-white transition duration-500 ease-in-out first:rounded-t-md last:rounded-b-md"
                >
                  {display}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
