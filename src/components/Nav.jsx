import React from "react";
import { Link } from "react-scroll";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Nav = () => {

  const { t } = useTranslation();

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between py-5 shadow-md">
      <div className="container flex items-center justify-between">
        <div className="">
          <div className="flex items-center">
            <a
              href="/"
              className="font-semibold text-gray-800 text-xl tracking-tight"
            >
              {t("nav.logo-title")}
            </a>
          </div>
        </div>
        <div className="md:block hidden">
          <ul className="nav-links flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li>
              <Link
                className="inline-block no-underline py-2 px-4 cursor-pointer"
                to="features"
                smooth={true}
                duration={1000}
                offset={-50}
              >
                {t("nav.features")}
              </Link>
            </li>
            <li>
              <Link
                className="inline-block no-underline py-2 px-4 cursor-pointer"
                to="prompts"
                smooth={true}
                duration={1000}
                offset={-50}
              >
                {t("nav.use-cases")}
              </Link>
            </li>
            <li>
              <Link
                className="inline-block no-underline py-2 px-4 cursor-pointer"
                to="pricing"
                smooth={true}
                duration={1000}
                offset={-50}
              >
                {t("nav.pricing")}
              </Link>
            </li>
            <li>
              <Link
                className="inline-block no-underline py-2 px-4 cursor-pointer"
                to="contact"
                smooth={true}
              >
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:block hidden">
          <Button />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
