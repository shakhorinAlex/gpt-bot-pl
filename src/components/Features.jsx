import React from "react";
import { useState, useEffect } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import {
  BsTranslate,
  BsJournalCode,
  BsFillRocketTakeoffFill,
} from "react-icons/bs";
import { AiOutlineFileSearch } from "react-icons/ai";
import { RiArticleFill } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";



export default function Features({ item }) {
  const items = [
    {
      id: 1,
      title: "Pisanie postów dla social media",
      description:
        "Napisz angażujące posty na social media, które przyciągają uwagę Twojej publiczności i generują wartościowe interakcje.",
      icon: <RiArticleFill />,
      image: "/images/item1.webp",
    },
    {
      id: 2,
      title: "Tłumaczenie tekstu z dowolnego języka",
      description:
        "Przetłumacz tekst z dowolnego języka na język docelowy, zachowując jego oryginalne znaczenie i kontekst.",
      icon: <BsTranslate />,
      image: "/images/item2.webp",
    },
    {
      id: 3,
      title: "Pisanie kodu programistycznego",
      description:
        "Tworzenie lub naprawianie błędów w kodzie w oparciu o najnowsze standardy i najlepsze praktyki.",
      icon: <BsJournalCode />,
      image: "/images/item3.webp",
    },
    {
      id: 4,
      title: "Używaj bota zamiast wyszukiwarki",
      description:
        "Szybko i skutecznie uzyskaj odpowiedzi na zadane pytania, zamiast korzystania z tradycyjnych metod.",
      icon: <AiOutlineFileSearch />,
      image: "/images/item4.webp",
    },
    {
      id: 5,
      title: "Wiele innego",
      description:
        "Napisz list motywacyjny, znajdź przepis na obiad, napisz wiersz dla ukochanej osoby, wszystko co tylko wymyślisz :).",
      icon: <BsFillRocketTakeoffFill />,
      image: "/images/item5.webp",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleItemClick = (id, description, image) => {
    if (selectedItem === id) {
      setSelectedItem(null);
    } else {
      setSelectedItem({ id, description, image });
    }
  };

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="features__container__title">
          <h2 className="text-3xl font-bold leading-tight mb-12">Funkcje</h2>
        </div>
        <div className="features__container__items relative flex flex-col gap-4">
          {items.map((item) => {
            const { id, title, description, icon, image } = item;
            const isSelected = selectedItem && selectedItem.id === id;
            return (
              <div
                key={id}
                className={`features_items flex flex-col md:flex-row gap-8 md:w-1/2 p-4 rounded-xl cursor-pointer ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => handleItemClick(id, description, image)}
              >
                <div className="left-side w-full flex flex-col md:flex-row items-left md:items-center">
                  {screenSize > 768 && (
                    <div className="icon p-4  mr-4 h-fit rounded-lg mb-4 md:mb-0 w-fit self-start">
                      <p className="text-2xl">{icon}</p>
                    </div>
                  )}
                  <div className="feature-desc">
                    <h3 className="text-xl pr-2 md:pr-0 md:text-xl font-bold leading-tight">
                      {title}
                    </h3>
                    {selectedItem && selectedItem.id === id && (
                      <p className="text-sm md:text-base mt-3 w-11/12 pr-1 md:w-3/4">
                        {selectedItem.description}
                      </p>
                    )}
                  </div>
                  {selectedItem && selectedItem.id !== id && (
                    <p className="text-xl md:text-3xl ml-auto">
                      {screenSize >= 768 ? (
                        <BiRightArrowAlt />
                      ) : (
                        <SlArrowDown />
                      )}
                    </p>
                  )}
                </div>
                {selectedItem &&
                  selectedItem.id === id &&
                  screenSize >= 768 && (
                    <div className="features_image w-72 h-full md:absolute right-0 top-0 md:left-2/4 md:ml-12 lg:ml-0 lg:left-2/3 cursor-default bg-black p-4 rounded-3xl">
                      <img
                        className="rounded-xl w-full h-full "
                        src={selectedItem ? selectedItem.image : items[0].image}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
