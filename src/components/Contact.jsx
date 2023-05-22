import React from "react";
import { useStore } from "../store";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {
    handleOpen,

    handleRegulaminOpen,
  } = useStore();

  const { t } = useTranslation();

  return (
    <section className="py-6 bg-slate-100" id="contact">
      <div className="container flex gap-4 items-center justify-center">
        <p
          className="text-sm text-left cursor-pointer hover:text-amber-500"
          onClick={handleOpen}
        >
          {t("privacy_policy")}
        </p>
        <p
          className="text-sm text-left cursor-pointer hover:text-amber-500"
          onClick={handleRegulaminOpen}
        >
          {t("terms_of_use")}
        </p>
      </div>
    </section>
  );
};

export default Contact;
