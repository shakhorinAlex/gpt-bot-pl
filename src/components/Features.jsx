import React from "react";
import { useState } from "react";
// import BiRightArrowAlt
import { BiRightArrowAlt } from "react-icons/bi";

// import react icons arrow to right
// import { AiOutlineArrowRight } from "react-icons/ai";

export default function Features({ item }) {
  const items = [
    {
      id: 1,
      title: "Pisanie postów dla social mediów",
      description: "Description of item 1",
      icon: <BiRightArrowAlt />,
      image: "./images/item1.webp",
    },
    {
      id: 2,
      title: "Tłumaczenie tekstu z dowolnego języka",
      description: "Description of item 2",
      icon: <BiRightArrowAlt />,
      image: "./images/item2.jpg",
    },
    {
      id: 3,
      title: "Pisanie kodu programistycznego",
      description: "Description of item 3",
      icon: <BiRightArrowAlt />,
      image: "./images/item3.jpg",
    },
    {
      id: 4,
      title: "Używaj bota zamiast wyszukiwarki",
      description: "Description of item 4",
      icon: <BiRightArrowAlt />,
      image: "./images/item4.jpg",
    },
    {
      id: 5,
      title: "Wiele innego",
      description:
        "Napisz list motywacyjny, znajdź przepis na obiad, napisz wiersz dla ukochanej osoby",
      icon: <BiRightArrowAlt />,
      image: "./images/item5.jpg",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  // toggle function to update the selected item on click of item in map using id of item
  const handleItemClick = (id, description, image) => {
    if (selectedItem === id) {
      setSelectedItem(null);
    } else {
      setSelectedItem({ id, description, image });
    }
  };

  return (
    <section className="features section">
      <div className="container">
        <div className="features__container__title">
          {/* h2 with text */}
          <h2 className="text-3xl font-bold leading-tight mb-12">Features</h2>
        </div>
        <div className="features__container__items relative flex flex-col gap-4">
          {/* map over items */}
          {items.map((item) => {
            const { id, title, description, icon, image } = item;
            const isSelected = selectedItem && selectedItem.id === id;
            return (
              <div
                key={id}
                className={`features_items flex gap-8 w-1/2 p-4 rounded-xl cursor-pointer ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => handleItemClick(id, description, image)}
              >
                <div className="left-side w-full flex items-center">
                  <div className="icon p-4 bg-white mr-4 h-fit">
                    <p className=" text-2xl">{icon}</p>
                  </div>
                  <div className="feature-desc">
                    <h3 className="text-xl font-bold leading-tight">{title}</h3>
                    {selectedItem && selectedItem.id === id && (
                      <p className="text-md mt-3 w-3/4">
                        {selectedItem.description}
                      </p>
                    )}
                  </div>
                  {selectedItem && selectedItem.id !== id && (
                    <p className="text-3xl ml-auto">
                      <BiRightArrowAlt />
                    </p>
                  )}
                </div>
                <div
                  className="features_image w-60 absolute right-0 top-0 left-2/3 cursor-default bg-black p-4 rounded-3xl h-fit"
                  lazy
                >
                  <img
                    className="rounded-xl"
                    src={selectedItem ? selectedItem.image : items[0].image}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
