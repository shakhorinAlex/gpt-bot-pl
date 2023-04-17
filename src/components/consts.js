const categories = [
  {
    id: 1,
    name: "Social media",
    items: [
      {
        id: 1,
        icon: "📝",
        name: "Pomysły na wpis",
        description:
          "Napisz 10 pomysłów na publikacje na Twittera o marketingu.",
      },
      {
        id: 2,
        icon: "✍️",
        name: "Napisz wpis",
        description:
          "Napisz wpis na Facebook o 10 pomysłach na prezent rodzinie.",
      },
      {
        id: 3,
        icon: "📹",
        name: "Skrypt dla wideo na Youtube",
        description:
          "Napisz skrypt do wideo na Youtube o nauce języka angielskiego.",
      },
      {
        id: 4,
        icon: "📸",
        name: "Bio na Instagramie",
        description:
          "Napisz bio na Instagramie dla firmy X, która zajmuje się Y.",
      },
    ],
  },
  {
    id: 2,
    name: "Kariera",
    items: [
      {
        id: 1,
        icon: "📝",
        name: "List motywacyjny",
        description: "Napisz list motywacyjny na stanowisko X w firmie Y.",
      },
      {
        id: 2,
        icon: "✍️",
        name: "Napisz swoje CV",
        description:
          "Napisz CV dla mnie [imie i nazwisko], mój cel w karierze to ..., moje doświadczenie to ..., umiejętności to ...",
      },
      {
        id: 3,
        icon: "📋",
        name: "Ogłoszenie o pracy",
        description:
          "Napisz ogłoszenie o pracę na stanowisko X w firmie Y z doświadczeniem Z.",
      },
      {
        id: 4,
        icon: "📧",
        name: "Email dla aplikacji o pracę",
        description:
          "Napisz email dla aplikacji do pracy, aplikacja do firmy X na stanowisko Y, co mnie wyróżnia Z.",
      },
    ],
  },
  {
    id: 3,
    name: "Marketing",
    items: [
      {
        id: 1,
        icon: "📱",
        name: "Opis produktu",
        description:
          "Napisz przekonujący opis produktu lub usługi [co za produkt], [korzyści], [grupa docelowa].",
      },
      {
        id: 2,
        icon: "📛",
        name: "Wymyśl nazwę firmy",
        description:
          "Wymyśl nazwę firmy, która zajmuje się [czym się zajmuje], [grupa docelowa].",
      },
      {
        id: 3,
        icon: "📋",
        name: "Tekst reklamowy",
        description:
          "Napisz tekst reklamowy który podkreśla unikalną wartość produktu lub usługi [co za produkt].",
      },
      {
        id: 4,
        icon: "📧",
        name: "Komunikat prasowy",
        description: "Napisz kominikat prasowy dla firmy [nazwa firmy]",
      },
      {
        id: 5,
        icon: "📧",
        name: "Pozyskaj klientów",
        description:
          "Jak pozyskać klientów dla firmy która zajmuje się [czym się zajmuje]?",
      },
      {
        id: 6,
        icon: "📧",
        name: "AIDA ",
        description:
          "Napisz tekst reklamowy, który będzie opierał się na modelu AIDA, aby przekonać klienta.",
      },
      {
        id: 7,
        icon: "📧",
        name: "SEO",
        description:
          "Utwórz liste zawierającą propozycje artykułów budujących autorytet tematyczny dla określonego słowa kluczowego. Słowo kluczowe to: [słowo kluczowe]",
      },
    ],
  },
  {
    id: 4,
    name: "Zabawa",
    items: [
      {
        id: 1,
        icon: "📝",
        name: "Stan umysłu",
        description:
          "Chcę, żebyś udawał osobę pijaną, odpowiadaj tylko tak, jakbyś bardzo był pod wpływem alkoholu. [Moje pytanie]",
      },
      {
        id: 2,
        icon: "✍️",
        name: "List miłosny",
        description: "Napisz list miłosny [dla kogo], [emocje], [wspomnienia].",
      },
      {
        id: 3,
        icon: "📋",
        name: "Motywacja",
        description:
          "Napisz cytat motywacyjny mający na celu zmotywowanie do działania.",
      },
    ],
  },
  {
    id: 5,
    name: "Programowanie",
    items: [
      {
        id: 1,
        icon: "👨‍🎓",
        name: "Ekspert",
        description:
          "Chcę, abyś działał jako ekspert w [język], który mówi i pisze biegle po polsku. Proszę, odpowiedz na poniższe pytanie w języku polskim: [PYTANIE].",
      },
      {
        id: 2,
        icon: "🔬",
        name: "Sprawdź kod",
        description:
          "Poniższy kod pokazuję błąd [błąd]. Proszę sprawdź go i napraw [co powinień wykonywać] [kod]",
      },
      {
        id: 3,
        icon: "🔄",
        name: "Przetłumacz kod",
        description: "Napisz kod który prześle w języku [nazwa języka]",
      },
    ],
  },

  {
    id: 6,
    name: "Uczenie się",
    items: [
      {
        id: 1,
        icon: "📝",
        name: "Napisz notatki z lekcji",
        description: "Napisz list motywacyjny na stanowisko X w firmie Y.",
      },
      {
        id: 2,
        icon: "✍️",
        name: "Napisz swoje CV",
        description:
          "Napisz CV dla mnie [imie i nazwisko], mój cel w karierze to ..., moje doświadczenie to ..., umiejętności to ...",
      },
      {
        id: 3,
        icon: "📋",
        name: "Ogłoszenie o pracy",
        description:
          "Napisz ogłoszenie o pracę na stanowisko X w firmie Y z doświadczeniem Z.",
      },
      {
        id: 4,
        icon: "📧",
        name: "Email dla aplikacji o pracę",
        description:
          "Napisz email dla aplikacji do pracy, aplikacja do firmy X na stanowisko Y, co mnie wyróżnia Z.",
      },
    ],
  },
  {
    id: 7,
    name: "Category 3",
    items: [
      {
        id: 1,
        icon: "📝",
        name: "List motywacyjny",
        description: "Napisz list motywacyjny na stanowisko X w firmie Y.",
      },
      {
        id: 2,
        icon: "✍️",
        name: "Napisz swoje CV",
        description:
          "Napisz CV dla mnie [imie i nazwisko], mój cel w karierze to ..., moje doświadczenie to ..., umiejętności to ...",
      },
      {
        id: 3,
        icon: "📋",
        name: "Ogłoszenie o pracy",
        description:
          "Napisz ogłoszenie o pracę na stanowisko X w firmie Y z doświadczeniem Z.",
      },
      {
        id: 4,
        icon: "📧",
        name: "Email dla aplikacji o pracę",
        description:
          "Napisz email dla aplikacji do pracy, aplikacja do firmy X na stanowisko Y, co mnie wyróżnia Z.",
      },
    ],
  },
  {
    id: 8,
    name: "Category 3",
    items: [
      {
        id: 1,
        icon: "📝",
        name: "List motywacyjny",
        description: "Napisz list motywacyjny na stanowisko X w firmie Y.",
      },
      {
        id: 2,
        icon: "✍️",
        name: "Napisz swoje CV",
        description:
          "Napisz CV dla mnie [imie i nazwisko], mój cel w karierze to ..., moje doświadczenie to ..., umiejętności to ...",
      },
      {
        id: 3,
        icon: "📋",
        name: "Ogłoszenie o pracy",
        description:
          "Napisz ogłoszenie o pracę na stanowisko X w firmie Y z doświadczeniem Z.",
      },
      {
        id: 4,
        icon: "📧",
        name: "Email dla aplikacji o pracę",
        description:
          "Napisz email dla aplikacji do pracy, aplikacja do firmy X na stanowisko Y, co mnie wyróżnia Z.",
      },
    ],
  },
];

export default categories;
