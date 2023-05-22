import React from "react";
import { Link } from "react-scroll";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero relative">
      <div className="container ">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left md:justify-between p-6 md:p-24">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              {t("hero.title")}
            </h1>

            <p className="text-lg mb-12">{t("hero.description")}</p>
            <div className="flex flex-col md:flex-row items-center m-auto md:m-0 justify-center gap-2 btn-bg-hero p-2 w-fit rounded-md">
              <Button />
              <Link
                to="features"
                smooth={true}
                duration={1000}
                className="btn2 text-black text-md font-bold py-4 px-6 rounded-md cursor-pointer"
              >
                {t("hero.ctaLink")}
              </Link>
            </div>

            <p className=" text-xs mt-8">{t("hero.disclaimer")}</p>
          </div>
        </div>
        <img
          src="/images/rocket.webp"
          alt=""
          className="hidden md:block absolute md:top-48 right-0 lg:top-6 lg:right-4 w-3/6"
        />
      </div>
    </section>
  );
};

export default Hero;
