import React from "react";
import { useState, useEffect } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export default function ComingSoonCard() {
  const newFeature = [
    {
      id: 1,
      title: "Gotowe szablony do wyboru bezpośrednio z aplikacji",
      description:
        "Nie będzie potrzeby kopiować i wklejać tekst, wystarczy wybrać szablon bezpośrednio w aplikacji i zmodyfikować tylko kilka słów.",
      icon: <BiRightArrowAlt />,
      image: "/images/item1.webp",
    },
  ];

  const { t } = useTranslation();

  return (
    <section className="features section" id="new-features">
      <div className="container">
        <div className="features__container__title flex flex-col md:flex-row items-center gap-4">
          <div className="new-features_left-side md:w-1/2 flex flex-col gap-6">
            <p className="text-sm text-white py-2 px-4 font-bold leading-tight bg-amber-500 w-max rounded-md  ">
              {t("new_feature.sub_title")}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight ">
              {t("new_feature.title")}
            </h2>
            <p className="text-lg lg:pr-6">{t("new_feature.description")}</p>
          </div>
          <img className=" md:w-1/2" src="/images/new-feature.webp" alt="" />
        </div>
      </div>
    </section>
  );
}
