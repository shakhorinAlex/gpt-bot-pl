import React from "react";
import { Link } from "react-scroll";
import Button from "./Button";

const Nav = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between py-5 shadow-md">
      <div className="container flex items-center justify-between">
        <div className="">
          <div className="flex items-center">
            <a
              href="/"
              className="font-semibold text-gray-800 text-xl tracking-tight"
            >
              GPT Bot Polska
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
                Funkcje
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
                Przypadki użycia
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
                Cennik
              </Link>
            </li>
            <li>
              <Link
                className="inline-block no-underline py-2 px-4 cursor-pointer"
                to="contact"
                smooth={true}
              >
                Kontakt
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
