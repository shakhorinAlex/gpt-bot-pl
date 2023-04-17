import React from "react";
import { useState, useEffect } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

// import react icons arrow to right
// import { AiOutlineArrowRight } from "react-icons/ai";

export default function ComingSoonCard() {
  const newFeature = [
    {
      id: 1,
      title: "Gotowe szablony do wyboru bezpośrednio z aplikacji",
      description:
        "Nie będziesz musiał kopiować i wklejać tekst, wystarczy wybrać szablon bezpośrednio w aplikacji i zmodyfikować tylko kilka słów.",
      icon: <BiRightArrowAlt />,
      image: "/images/item1.webp",
    },
  ];

  return (
    <section className="features section" id="new-features">
      <div className="container">
        <div className="features__container__title flex flex-col gap-4">
          <div className="new-features_left-side w-1/2 flex flex-col gap-4">
            <p className="text-sm text-white py-2 px-4 font-bold leading-tight bg-amber-500 w-max rounded-md  ">
              Dostępne wkrótce...
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              {newFeature[0].title}
            </h2>
            <p className="text-md">{newFeature[0].description}</p>
          </div>
          <img src="#" alt="" />
        </div>
      </div>
    </section>
  );
}
