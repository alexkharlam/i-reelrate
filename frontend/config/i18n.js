import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          errors: {
            provideFields: "Please provide all required fields",
          },
          reviews: {
            allReviews: "All reviews",
            notFound:
              "We didn't find reviews for this filter. Please try another category",
          },
          sort: {
            latest: "Sort by latest",
            popular: "Sort by popular",
            rating: "Sort by rating",
          },
          search: {
            title: "Search for reviews",
            placeholder: "No results yet! Try to type something else",
            notFound: "Reviews not found. Try again!",
          },
          categories: {
            all: "All",
            movies: "Movies",
            music: "Music",
            tv: "TV shows",
            games: "Games",
            books: "Books",
            science: "science",
            tech: "tech",
          },
          navigation: {
            home: "Home",
            topReviews: "Top reviews",
            createReview: "Create review",
            myReviews: "My reviews",
            search: "Search",
          },
          header: {
            authButton: "Log in / Sign up",
            logoutButton: "Logout",
            searchPlaceholder: "Search reviews",
            searchButton: "Search",
          },
          login: {
            google: "Log in with Google",
            github: "Log in with Github",
            title: "ReelRate - log into your account",
            features: {
              title: "And get access to all features",
              1: "Rate reviews",
              2: "Commenting",
              3: "Creating your own reviews",
            },
          },
          review: {
            rating: "Rating",
            yourRating: "Your rating:",
          },
          editReview: {
            coverImage: "Cover image",
            reviewTitle: "Review title",
            reviewSubject: "Reviewing subject",
            category: "Category",
            tags: "Tags",
            reviewText: "Review text",
            verdict: "You verdict",
            submit: "Submit review",
          },
        },
      },
      ru: {
        translation: {
          errors: {
            provideFields: "Пожалуйста, заполните все нужные поля",
          },
          reviews: {
            allReviews: "Все обзоры",
            notFound:
              "Мы не нашли обзоры, подходящие под фильтр. Пожалуйста, попробуйте поменять категорию",
          },
          sort: {
            latest: "По дате ",
            popular: "По популярности",
            rating: "По рейтингу",
          },
          search: {
            title: "Искать обзоры",
            placeholder:
              "Пока нет результатов! Попробуйте напечатать что-то еще!",
            notFound: "Мы не нашли обзоров по вашему запросу. Попробуйте еще!",
          },
          categories: {
            all: "Все",
            movies: "Фильмы",
            music: "Музыка",
            tv: "Сериалы",
            games: "Игры",
            books: "Книги",
            science: "Наука",
            tech: "Техника",
          },
          navigation: {
            home: "Главная",
            topReviews: "Лучшие обзоры",
            createReview: "Создать обзор",
            myReviews: "Мои обзоры",
            search: "Поиск",
          },
          header: {
            authButton: "Вход / Регистрация",
            logoutButton: "Выйти",
            searchPlaceholder: "Найти обзоры",
            searchButton: "Поиск",
          },
          login: {
            google: "Войти с аккаунтом Google",
            github: "Войти с аккаунтом Github",
            title: "ReelRate - войти в аккаунт",
            features: {
              title: "И получите доступ ко всем функциям",
              1: "Оценивайте обзоры",
              2: "Комментируйте",
              3: "Станьте автором",
            },
          },
          review: {
            rating: "Рейтинг",
            yourRating: "Ваша оценка:",
          },
          editReview: {
            coverImage: "Шапка (изображение)",
            reviewTitle: "Название обзора",
            reviewSubject: "Название произведения",
            category: "Категория",
            tags: "Теги",
            reviewText: "Обзор",
            verdict: "Оценка произведения",
            submit: "Поделиться обзором",
          },
        },
      },
    },
  });

export default i18n;
