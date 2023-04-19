import React from "react";
import { useStore } from "../store";

const Policy = () => {
  const { isRegulaminOpen, setIsRegulaminOpen, handleRegulaminOpen } =
    useStore();

  return (
    <div>
      <div
        className={`block fixed z-10 inset-0 overflow-y-auto" ${
          isRegulaminOpen ? "block" : "hidden"
        }`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={handleRegulaminOpen}
          ></div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Regulamin serwisu
                  </h3>
                  <div className="mt-2 overflow-y-auto h-96 flex flex-col gap-2">
                    {/* h4 */}
                    <p className="text-sm text-gray-700">
                      1. Serwis "GPTbot.pl" oferuje możliwość korzystania z botu
                      w aplikacji Telegram, który umożliwia zadawanie pytań
                      modelowi językowemu ChatGPT.
                    </p>
                    <p className="text-sm text-gray-700">
                      2. Wszelkie dane przekazywane do serwisu "GPTbot.pl" są
                      traktowane jako poufne i nie są udostępniane osobom
                      trzecim. <br></br>
                      <br></br>
                      Serwis nie posiada dostępu do takich danych użytownika
                      jak: <br></br> adres e-mail, numer telefonu, dane
                      płatności, itp.
                    </p>
                    <p className="text-sm text-gray-700">
                      3. Każdy użytkownik ma prawo do 10 bezpłatnych zapytań
                      dziennie. Po przekroczeniu tej liczby użytkownik zostanie
                      poinformowany o możliwości wykupienia planu premium.
                    </p>
                    <p className="text-sm text-gray-700">
                      4. Plan premium daje użytkownikowi prawo do zadawania 50
                      zapytań dziennie.
                    </p>
                    <p className="text-sm text-gray-700">
                      5. Wykupienie planu premium jest dobrowolne i następuje
                      poprzez dokonanie płatności zgodnie z cennikiem:
                    </p>
                    <p className="text-sm text-gray-700">
                      - Plan premium na 1 miesiąc - 19.99zł
                    </p>
                    <p className="text-sm text-gray-700">
                      - Plan premium na 2 miesiące - 30zł
                    </p>
                    <p className="text-sm text-gray-700">
                      - Plan premium na 3 miesięcy - 50zł
                    </p>
                    <p className="text-sm text-gray-700">
                      6. Płatność za plan premium jest jednorazowa i nie podlega
                      zwrotowi.
                    </p>
                    <p className="text-sm text-gray-700">
                      7. Serwis "gptbot.pl" zastrzega sobie prawo do zmiany
                      cennika oraz warunków korzystania z serwisu w każdym
                      czasie.
                    </p>
                    <p className="text-sm text-gray-700">
                      8. Użytkownik zobowiązuje się do korzystania z serwisu
                      "gptbot.pl" zgodnie z obowiązującymi przepisami prawa oraz
                      dobrymi obyczajami.
                    </p>
                    <p className="text-sm text-gray-700">
                      9. Serwis "gptbot.pl" nie ponosi odpowiedzialności za
                      szkody wyrządzone przez użytkowników lub wynikłe z
                      niedostępności serwisu.
                    </p>
                    <p className="text-sm text-gray-700">
                      10. W sprawach nieuregulowanych w niniejszym regulaminie
                      zastosowanie mają przepisy prawa polskiego.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-900 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleRegulaminOpen}
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
