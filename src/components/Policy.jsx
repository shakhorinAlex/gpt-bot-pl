import React from "react";
import { useStore } from "../store";

const Policy = () => {
  const { isOpen, setIsOpen, handleOpen } = useStore();

  return (
    <div>
      <div
        className={`fixed z-10 inset-0 overflow-y-auto" ${
          isOpen ? "block" : "hidden"
        }`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={handleOpen}
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
                    Polityka prywatności
                  </h3>
                  <div className="mt-2 overflow-y-auto h-96 flex flex-col gap-2">
                    {/* h4 */}
                    <h4 className="text-sm font-medium text-gray-900">
                      1. Postanowienia ogólne.
                    </h4>

                    <p className="text-sm text-gray-500">
                      Przykładamy ogromną wagę do kwestii ochrony prywatności
                      wszystkich osób korzystających z naszych usług. Strona
                      internetowa GPTBot.pl ma zadanie poinformować naszych
                      obecnych, byłych i potencjalnych klientów o zasadach
                      działania bota.
                    </p>
                    <p className="text-sm text-gray-500">
                      Niniejsza polityka dotyczy Serwisu www, funkcjonującego
                      pod adresem url: gptbot.pl Operatorem serwisu oraz
                      Administratorem danych osobowych jest: gptbot.pl
                    </p>
                    <p className="text-sm text-gray-500">
                      Adres kontaktowy poczty elektronicznej operatora:
                      aleksander.szachorin@gmail.com <br></br>
                      Operator jest Administratorem Twoich danych osobowych w
                      odniesieniu do danych podanych dobrowolnie w Serwisie.
                    </p>
                    <p className="text-sm text-gray-500">
                      Serwis wykorzystuje dane osobowe w następujących celach:
                    </p>
                    <p className="text-sm text-gray-500">
                      - Prezentacja strony internetowej
                    </p>
                    <p className="text-sm text-gray-500">
                      - Realizacja zamówionych usług
                    </p>
                    <p className="text-sm text-gray-500">
                      - Obsługa odpowiednich dokumentów księgowych
                    </p>
                    <p className="text-sm text-gray-500">
                      - Prezentacja oferty lub informacji
                    </p>
                    <p className="text-sm text-gray-500">
                      - Wykonanie przez Administratora danych osobowych prawnie
                      ciążących na nim obowiązków zgodnie z art. 6 ust. 1 lit. c
                      RODO w zakresie w jakim przewidują to przepisy szczególne
                      (np. prowadzenie księgowości).
                    </p>
                    <h4 className="text-sm font-medium text-gray-900">
                      2. Wybrane metody ochrony danych stosowane przez Operatora
                    </h4>
                    <p className="text-sm text-gray-500">
                      Miejsca logowania i wprowadzania danych osobowych są
                      chronione w warstwie transmisji (certyfikat SSL). Dzięki
                      temu dane osobowe i dane logowania, wprowadzone na
                      stronie, zostają zaszyfrowane w komputerze użytkownika i
                      mogą być odczytane jedynie na docelowym serwerze.
                    </p>
                    <p className="text-sm text-gray-500">
                      Hasła użytkowników są przechowywane w postaci hashowanej.
                      Funkcja hashująca działa jednokierunkowo – nie jest
                      możliwe odwrócenie jej działania, co stanowi obecnie
                      współczesny standard w zakresie przechowywania haseł
                      użytkowników.
                    </p>
                    <p className="text-sm text-gray-500">
                      W serwisie jest stosowana autentykacja dwuskładnikowa, co
                      stanowi dodatkową formę ochrony logowania do Serwisu.
                    </p>
                    <p className="text-sm text-gray-500">
                      Operator okresowo zmienia swoje hasła administracyjne.
                    </p>
                    <p className="text-sm text-gray-500">
                      W celu ochrony danych Operator regularnie wykonuje kopie
                      bezpieczeństwa.
                    </p>
                    <p className="text-sm text-gray-500">
                      Istotnym elementem ochrony danych jest regularna
                      aktualizacja wszelkiego oprogramowania, wykorzystywanego
                      przez Operatora do przetwarzania danych osobowych, co w
                      szczególności oznacza regularne aktualizacje komponentów
                      programistycznych.
                    </p>

                    <h4 className="text-sm font-medium text-gray-900">
                      3. Hosting
                    </h4>
                    <p className="text-sm text-gray-500">
                      Serwis jest hostowany (technicznie utrzymywany) na
                      serwerach operatora: gptbot.pl
                    </p>
                    <h4 className="text-sm font-medium text-gray-900">
                      4. Twoje prawa i dodatkowe informacje o sposobie
                      wykorzystania danych
                    </h4>
                    <p className="text-sm text-gray-500">
                      W niektórych sytuacjach Administrator ma prawo przetwarzać
                      Twoje dane osobowe na podstawie przepisów prawa, w
                      szczególności gdy jest to konieczne do wykonania prawnie
                      uzasadnionych celów realizowanych przez Operatora lub do
                      wykonania prawnie uzasadnionych celów przetwarzania,
                      których realizacja wymaga przetwarzania danych osobowych,
                      w tym realizacji zobowiązań wynikających z prawa,
                      zawartych w umowach lub w stosunku do Ciebie zasad
                      działania Serwisu.
                    </p>
                    <p className="text-sm text-gray-500">
                      Podanie danych osobowych nie jest konieczne do obsługi
                      Serwisu.
                    </p>
                    <p className="text-sm text-gray-500">
                      Dane osobowe przetwarzane przez Administratora nie dłużej,
                      niż jest to konieczne do wykonania związanych z nimi celów
                      przetwarzania, a w przypadku przechowywania danych
                      osobowych w celach archiwalnych – nie dłużej, niż jest to
                      konieczne do celów archiwalnych zgodnie z przepisami
                      prawa.
                    </p>
                    <p className="text-sm text-gray-500">
                      Przysługuje Ci prawo żądania od Administratora dostępu do
                      danych osobowych Ciebie dotyczących, ich sprostowania,
                      usunięcia lub ograniczenia przetwarzania, a także prawo do
                      przenoszenia danych.
                    </p>

                    <p className="text-sm text-gray-500">
                      Przysługuje Ci prawo do złożenia sprzeciwu w zakresie
                      przetwarzania wskazanego w pkt 3 c) wobec przetwarzania
                      danych osobowych w celu wykonania prawnie uzasadnionych
                      celów realizowanych przez Administratora, w tym
                      profilowania, przy czym prawo sprzeciwu nie będzie mogło
                      być wykonane w przypadku istnienia ważnych prawnie
                      uzasadnionych podstaw do przetwarzania, w szczególności do
                      realizacji zobowiązań wynikających z prawa, zawartych w
                      umowach lub w stosunku do Ciebie zasad działania Serwisu.
                    </p>
                    <p className="text-sm text-gray-500">
                      W każdej chwili możesz wycofać zgodę na przetwarzanie
                      danych osobowych, którą udzieliłeś w dowolnym momencie.
                    </p>
                    <p className="text-sm text-gray-500">
                      W celu wycofania zgody prosimy o kontakt z
                      Administratorem.
                    </p>
                    <p className="text-sm text-gray-500">
                      W celu skorzystania z praw, jakie przysługują Ci jako
                      osobie, której dane dotyczą, prosimy o kontakt z
                      Administratorem.
                    </p>
                    <h4 className="text-sm font-medium text-gray-900">
                      5. Logi Administratora
                    </h4>
                    <p className="text-sm text-gray-500">
                      Informacje zachowaniu użytkowników w serwisie mogą
                      podlegać logowaniu. Dane te są wykorzystywane w celu
                      administrowania serwisem.
                    </p>
                    <h4 className="text-sm font-medium text-gray-900">
                      6. Istotne techniki marketingowe
                    </h4>
                    <p className="text-sm text-gray-500">
                      Operator stosuje analizę statystyczną ruchu na stronie,
                      poprzez Google Analytics (Google Inc. z siedzibą w USA).
                      Operator nie przekazuje do operatora tej usługi danych
                      pozwalających na identyfikację osób korzystających ze
                      strony.
                    </p>
                    <p className="text-sm text-gray-500">
                      Operator nie stosuje automatycznych systemów decyzyjnych,
                      w tym profilowania.
                    </p>
                    <p className="text-sm text-gray-500">
                      Operator stosuje techniki remarketingowe, pozwalające na
                      dopasowanie przekazów reklamowych do zachowania
                      użytkownika na stronie, co może dawać złudzenie, że dane
                      osobowe użytkownika są wykorzystywane do jego śledzenia,
                      jednak w praktyce nie dochodzi do przekazania żadnych
                      danych osobowych od Operatora do operatorom reklam.
                      Technologicznym warunkiem takich działań jest włączona
                      obsługa plików cookie.
                    </p>
                    <p className="text-sm text-gray-500">
                      Operator stosuje korzysta z piksela Facebooka. Ta
                      technologia powoduje, że serwis Facebook (Facebook Inc. z
                      siedzibą w USA) wie, że dana osoba w nim zarejestrowana
                      korzysta z Serwisu. Bazuje w tym wypadku na danych, wobec
                      których sam jest administratorem, Operator nie przekazuje
                      od siebie żadnych dodatkowych danych osobowych serwisowi
                      Facebook. Usługa bazuje na wykorzystaniu ciasteczek w
                      urządzeniu końcowym użytkownika.
                    </p>
                    <p className="text-sm text-gray-500">
                      Operator stosuje rozwiązanie badające zachowanie
                      użytkowników poprzez tworzenie map ciepła oraz nagrywanie
                      zachowania na stronie. Te informacje są anonimizowane
                      zanim zostaną przesłane do operatora usługi tak, że nie
                      wie on jakiej osoby fizycznej one dotyczą. W szczególności
                      nagrywaniu nie podlegają wpisywane hasła oraz inne dane
                      osobowe.
                    </p>

                    <h4 className="text-sm font-medium text-gray-900">
                      7. Pliki cookies
                    </h4>
                    <p className="text-sm text-gray-500">
                      Serwis wykorzystuje pliki cookies. Pliki cookies (tzw.
                      „ciasteczka”) stanowią dane informatyczne, w szczególności
                      pliki tekstowe, które przechowywane są w urządzeniu
                      końcowym Użytkownika Serwisu i przeznaczone są do
                      korzystania ze stron internetowych Serwisu. Cookies
                      zazwyczaj zawierają nazwę strony internetowej, z której
                      pochodzą, czas przechowywania ich na urządzeniu końcowym
                      oraz unikalny numer.
                    </p>
                    <p className="text-sm text-gray-500">
                      Pliki cookies wykorzystywane są w następujących celach:
                      utrzymanie sesji użytkownika Serwisu (po zalogowaniu),
                      dzięki której użytkownik nie musi na każdej podstronie
                      Serwisu ponownie wpisywać loginu i hasła; realizacji celów
                      określonych powyżej w części “Istotne techniki
                      marketingowe”;
                    </p>
                    <p className="text-sm text-gray-500">
                      W ramach Serwisu stosowane są dwa zasadnicze rodzaje
                      plików cookies: „sesyjne” (session cookies) oraz „stałe”
                      (persistent cookies). Cookies „sesyjne” są plikami
                      tymczasowymi, które przechowywane są w urządzeniu końcowym
                      Użytkownika do czasu wylogowania, opuszczenia strony
                      internetowej lub wyłączenia oprogramowania (przeglądarki
                      internetowej). „Stałe” pliki cookies przechowywane są w
                      urządzeniu końcowym Użytkownika przez czas określony w
                      parametrach plików cookies lub do czasu ich usunięcia
                      przez Użytkownika.
                    </p>
                    <p className="text-sm text-gray-500">
                      Oprogramowanie do przeglądania stron internetowych
                      (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza
                      przechowywanie plików cookies w urządzeniu końcowym
                      Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany
                      ustawień w tym zakresie. Przeglądarka internetowa
                      umożliwia usunięcie plików cookies. Możliwe jest także
                      automatyczne blokowanie plików cookies Szczegółowe
                      informacje na ten temat zawiera pomoc lub dokumentacja
                      przeglądarki internetowej.
                    </p>
                    <p className="text-sm text-gray-500">
                      Ograniczenia stosowania plików cookies mogą wpłynąć na
                      niektóre funkcjonalności dostępne na stronach
                      internetowych Serwisu.
                    </p>
                    <p className="text-sm text-gray-500">
                      Pliki cookies zamieszczane w urządzeniu końcowym
                      Użytkownika Serwisu wykorzystywane mogą być również przez
                      współpracujące z operatorem Serwisu podmioty, w
                      szczególności dotyczy to firm: Google (Google Inc. z
                      siedzibą w USA), Facebook (Facebook Inc. z siedzibą w
                      USA), Twitter (Twitter Inc. z siedzibą w USA), LinkedIn
                      (LinkedIn Ireland Unlimited Company z siedzibą w
                      Irlandii), YouTube (Google Inc. z siedzibą w USA).
                    </p>
                    <h4 className="text-sm font-medium text-gray-900">
                      8. Zarządzanie plikami cookies – jak w praktyce wyrazić
                      zgodę?
                    </h4>
                    <p className="text-sm text-gray-500">
                      Jeśli użytkownik nie chce otrzymywać plików cookies, może
                      zmienić ustawienia przeglądarki. Można wtedy dokonać
                      wyboru, które strony internetowe mogą zapisywać pliki
                      cookies w urządzeniu końcowym użytkownika, a które nie.
                      Przeglądarka internetowa umożliwia usunięcie plików
                      cookies. Możliwe jest także automatyczne blokowanie plików
                      cookies. Szczegółowe informacje na ten temat zawiera pomoc
                      lub dokumentacja przeglądarki internetowej.
                    </p>
                    <p className="text-sm text-gray-500">
                      Ograniczenia stosowania plików cookies mogą wpłynąć na
                      niektóre funkcjonalności dostępne na stronach
                      internetowych Serwisu.
                    </p>

                    <h4 className="text-sm font-medium text-gray-900">
                      9. Zasady aktualizacji dokumentów
                    </h4>
                    <p className="text-sm text-gray-500">
                      Niniejszy dokument może ulec zmianie w związku z rozwojem
                      Serwisu. Wszelkie zmiany wchodzą w życie od momentu
                      opublikowania ich na stronie internetowej Serwisu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-900 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleOpen}
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
