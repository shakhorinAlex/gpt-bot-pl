import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:justify-between p-6 md:p-24">
          <div className="max-w-xl">
            {/* optimize h1 above for different devices */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
              Bot który pomoże Ci uzyskać odpowiedź na dowolne pytanie
            </h1>

            <p className="text-lg mb-12">
              Polska wersja GPT która ułatwia korzystanie z AI
            </p>
            <div className="btn-bg-hero p-2 w-fit rounded-md">
              <button className="btn bg-blue-500 hover:bg-blue-700 text-white text-md font-bold py-4 px-6 rounded-md">
                Zacznij bezpłatnie
              </button>
            </div>

            {/* p with small text */}
            <p className=" text-xs mt-8">
              Zacznij bezpłatnie, nie wymagamy karty kredytowej
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
