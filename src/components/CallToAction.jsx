import React from "react";
import Button from "./Button";
import { useState, useEffect } from "react";
// import icons from links
import {
  FaAndroid,
  FaApple,
  FaWindows,
  FaLinux,
  FaAppleAlt,
} from "react-icons/fa";

const CallToAction = () => {
  // state to detect user device and operating system
  const [isMobile, setIsMobile] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isWindows, setIsWindows] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const [isLinux, setIsLinux] = useState(false);
  const [isOther, setIsOther] = useState(false);

  // detect user device and operating system
  const detectDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      setIsAndroid(true);
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setIsIOS(true);
    } else if (/windows phone/i.test(userAgent)) {
      setIsWindows(true);
    } else if (/mac/i.test(userAgent)) {
      setIsMac(true);
    } else if (/linux/i.test(userAgent)) {
      setIsLinux(true);
    } else {
      setIsOther(true);
    }

    if (/Mobi|Android/i.test(userAgent)) {
      setIsMobile(true);
    }
  };

  // run detectDevice function on component mount
  useEffect(() => {
    detectDevice();
  }, []);

  // create array of links to download Telegram app for different devices
  const links = [
    {
      name: "Android",
      link: "https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=pl&gl=US",
      icon: "fab fa-android",
    },
    {
      name: "iOS",
      link: "https://apps.apple.com/pl/app/telegram-messenger/id686449807",
      icon: "fab fa-apple",
    },
    {
      name: "Windows",
      link: "https://desktop.telegram.org/",
      icon: "fab fa-windows",
    },
    {
      name: "MacOS",
      link: "https://macos.telegram.org/",
      icon: "fab fa-apple",
    },
  ];

  return (
    <section className="section cta flex items-center bg-white">
      <div className="container">
        <h2 className="text-xl text-center px-4 md:w-8/12 m-auto md:text-2xl lg:text-3xl font-medium leading-tight mb-8">
          Zacznij używać aplikacji teraz, a w ciągu{" "}
          <span className="font-bold">7 dni</span> dni zobaczysz wzrost swojej{" "}
          <b>produktywność</b> w codziennym życiu.
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="left-side flex flex-col gap-4">
            <h4 className="text-lg font-bold leading-tight">
              Aby skorzystać z bota, musisz pobrać aplikację Telegram
            </h4>
            <p className="text-sm">
              Aplikacja jest dostępna na wszystkich urządzeniach mobilnych i
              komputerach.
            </p>
            {/* ul with steps to install */}
            <ol className=" list-decimal list-inside text-sm">
              <li className="mb-2">
                Pobierz aplikację Telegram na swoje urządzenie
              </li>
              <li className="mb-2">Zaloguj się do aplikacji</li>
              <li className="mb-2">
                Kliknij na tej stronie przycisk "Spróbuj bezpłatnie" albo
                znajdź bota @chatGPTPolskaBot
              </li>
              <li className="mb-2">Rozpocznij rozmowę z botem</li>
            </ol>

            <div className="download_links grid grid-cols-2 gap-4 ">
              {/* show 4 icons - winodows, mac, ios, androind */}
              {links.map((link, index) => {
                return (
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    className="link-tg bg-slate-500 flex items-center gap-2 text-sm rounded-xl px-4 py-2 text-white"
                    key={index}
                  >
                    {link.name === "Android" && (
                      <FaAndroid className="text-4xl" />
                    )}
                    {link.name === "iOS" && <FaApple className="text-4xl" />}
                    {link.name === "Windows" && (
                      <FaWindows className="text-4xl" />
                    )}
                    {link.name === "MacOS" && (
                      <FaAppleAlt className="text-4xl" />
                    )}
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className=" flex flex-col gap-4 items-center text-center">
            <p className="px-12 md:text-lg md:selection:w-3/4 mb-6 md:mb-8">
              Jeśli już masz aplikacje telegram kliknij w przycisk poniżej
            </p>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
