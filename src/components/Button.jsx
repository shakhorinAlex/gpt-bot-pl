import React from "react";
import { useTranslation } from "react-i18next";


const Button = () => {
  const { t } = useTranslation();
  return (
    <>
      <a
        href="https://t.me/chatGPTPolskaBot"
        className="btn text-white text-md font-bold py-4 px-6 rounded-md cursor-pointer"
        target="_blank"
      >
        {t("main_button")}
      </a>
    </>
  );
};

export default Button;
