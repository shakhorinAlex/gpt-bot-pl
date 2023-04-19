import React from "react";
import { Link } from "react-scroll";
import Button from "./Button";

const Nav = () => {
  return (
    // rewrite full nav component with tailwind it should have 4 links to blocks on the page and logo on the left and button on the right and styles
    <nav className="flex flex-col md:flex-row items-center justify-between px-4 py-5 shadow-md">
      <div className="container flex items-center justify-between">
        <div className="">
          <div className="flex items-center">
            <a
              href="/"
              className="font-semibold text-gray-800 text-xl tracking-tight ml-2"
            >
              GPT Bot Polska
            </a>
          </div>
          <button className="block md:hidden border border-gray-500 rounded p-1 focus:outline-none">
            <svg
              className="h-3 w-3 fill-current text-gray-600"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                fillRule="evenodd"
                d="M3 7h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 4h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 4h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
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
                className="inline-block no-underline py-2 px-4"
                href="#"
                to="pricing"
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
