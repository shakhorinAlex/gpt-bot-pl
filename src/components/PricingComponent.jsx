import React, { useState } from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";

function PricingComponent() {
  const [period, setPeriod] = useState("month");

  const pricing = {
    month: "19.99 PLN",
    "2-month": "35 PLN",
    "3-month": "50 PLN",
  };

  const { t } = useTranslation();

  return (
    <section className="section" id="pricing">
      <h2 className="text-4xl font-bold mb-4 text-center">
        {t("pricing_title")}
      </h2>
      <p className="text-center mb-6">{t("pricing_description")}</p>
      <div className="flex flex-col md:flex-row justify-center p-6 w-full text-center">
        <div className="flex flex-col rounded p-4 m-2 lg:w-1/3 bg-[#f8f8f8] h-full">
          <h2 className="text-2xl font-semibold mb-4">{t("free_tier.name")}</h2>
          <p className="text-center px-8 lg:px-16 text-sm mb-6">
            {t("free_tier.description")}
          </p>
          <p className="text-5xl font-bold mb-6">
            {t("free_tier.price", { price: "0" })}
          </p>
          <ul className=" list-inside mb-6 self-center justify-center">
            <li>
              <span className="font-bold">
                {t("free_tier.features.ftr_1_bold")}
              </span>{" "}
              dziennie
            </li>
            <li className="before:content-['X'] before:mr-1 before:text-red-500 before:text-xs">
              <span className="font-bold">wysoka szybkość</span> odpowiedzi
            </li>
            <li className="before:content-['X'] before:mr-1 before:text-red-500 before:text-xs">
              dodatkowe <span className="font-bold">gotowe szablony</span>
            </li>
            <li className="before:content-['X'] before:mr-1 before:text-red-500 before:text-xs">
              zapytania <span className="font-bold">głosowe</span>
            </li>
            <li className="before:content-['X'] before:mr-1 before:text-red-500 before:text-xs">
              wsparcie 24/7
            </li>
          </ul>
          <Button />
        </div>
        <div className="flex flex-col bg-white rounded p-4 m-2 lg:w-1/3 relative">
          {/* <p className="absolute top-[-1.25rem] left-0 w-full bg-blue-950 text-white ">
            🔥 Najlepszy wybór
          </p> */}
          <h2 className="text-2xl font-semibold mb-6">Premium</h2>
          <p className="text-center px-8 lg:px-16 text-sm mb-6">
            Nasza opcja Premium została stworzona z myślą o tych, którzy chcą
            cieszyć się pełnym zakresem naszych funkcji.
          </p>
          <p className="text-5xl font-bold mb-6">{pricing[period]}</p>
          <ul className=" list-inside mb-6">
            <li>
              <span className="font-bold">50 zapytań</span> dziennie
            </li>
            <li>
              <span className="font-bold">wysoka szybkość</span> odpowiedzi
            </li>
            <li>
              dodatkowe <span className="font-bold">gotowe szablony</span>
            </li>
            <li className="before:content-['new'] before:mr-1 before:text-red-500 before:text-xs">
              zapytania <span className="font-bold">głosowe</span>
            </li>
            <li>wsparcie 24/7</li>
          </ul>
          <div className="mb-6">
            <label className="block">
              <span className="text-gray-700">Wybierz okres subskrybcji</span>
              <select
                className="form-select mt-1 block w-full bg-white border border-gray-200 rounded p-2"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option value="month">1 miesiąc</option>
                <option value="2-month">2 miesiące</option>
                <option value="3-month">3 miesiące</option>
              </select>
            </label>
          </div>
          <Button />
        </div>
      </div>
    </section>
  );
}

export default PricingComponent;
