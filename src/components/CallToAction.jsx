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
import { useTranslation } from "react-i18next";

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

  // useTranslation hook
  const { t } = useTranslation();

  return (
    <section className="section cta flex items-center bg-white" id="contact">
      <div className="container">
        <h2 className="text-xl text-center px-4 md:w-8/12 m-auto md:text-2xl lg:text-3xl font-medium leading-tight mb-8">
          {t("start_using_app")}{" "}
          <span className="font-bold">{t("seven_days_bold")} </span>
          {t("see_productivity_increase")} <b>{t("productivity_bold")}</b>{" "}
          {t("in_daily_life")}
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="left-side flex flex-col gap-4">
            <h4 className="text-lg font-bold leading-tight">
              {t("to_use_bot")}
            </h4>
            <p className="text-sm">{t("app_available")}</p>
            <ol className=" list-decimal list-inside text-sm">
              <li className="mb-2">{t("steps.download_telegram")}</li>
              <li className="mb-2">{t("steps.log_into_app")}</li>
              <li className="mb-2">{t("steps.click_try_free")}</li>
              <li className="mb-2">{t("steps.start_conversation")}</li>
            </ol>

            <div className="download_links grid grid-cols-2 gap-4 ">
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
              {t("if_you_have_telegram")}
            </p>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
