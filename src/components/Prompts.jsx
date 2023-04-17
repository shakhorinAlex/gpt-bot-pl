import React from "react";
import categories from "./consts";

const Prompts = () => {
  const [activeCategory, setActiveCategory] = React.useState(1);

  function handleCategoryClick(event, categoryId) {
    event.preventDefault();
    setActiveCategory(categoryId);
  }

  const activeCategoryItems = categories.find(
    (category) => category.id === activeCategory
  ).items;

  return (
    <section className="section flex items-center bg-white">
      <div className="container">
        <h2 className="text-xl text-center w-5/6 md:w-3/5 m-auto md:text-2xl lg:text-3xl font-normal leading-tight mb-8">
          Darmowe zapytania, które pomogą Ci{" "}
          <span className="font-bold">zaoszczędzić godziny pracy</span> w kilka
          sekund.
        </h2>
        <div className="category_list overflow-x-auto ">
          <ul className="category-names flex flex-nowrap md:flex-wrap gap-4 items-center w-max justify-start mb-8">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`${
                  activeCategory === category.id ? "active" : ""
                } p-3 border border-gray-30 rounded-md hover:bg-gray-100 cursor-pointer `}
                onClick={(event) => handleCategoryClick(event, category.id)}
              >
                <a href="">{category.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="w-full flex flex-col gap-4  md:flex-row items-left md:items-center">
          {activeCategoryItems.map((item) => (
            <li
              className="flex flex-col gap-4 bg-slate-200 p-4 rounded-xl"
              key={item.id}
            >
              <div className="p-4 w-full flex gap-4 items-center rounded-lg md:mb-0 self-start bg-slate-100">
                <p className="text-xl">{item.icon}</p>
                <h3 className="text-lg pr-2 md:pr-0 md:text-xl font-bold text-black leading-tight">
                  {item.name}
                </h3>
              </div>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Prompts;
