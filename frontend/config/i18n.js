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
          reviewList: {
            popular: "Trending now",
            myReviews: "My reviews",
            allReviews: "All reviews",
          },
          errors: {
            provideFields: "Please provide all required fields",
          },
          cta: {
            createReview: "Want to review something?",
          },
          reviews: {
            popular: "Trending now",
            myReviews: "My reviews",
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
            didYouLike: "Did you like this review?",
          },
          editReview: {
            coverImage: "Cover image",
            title: "Review title",
            product: "Reviewing product",
            category: "Category",
            tags: "Tags",
            text: "Review text",
            verdict: "Your verdict",
            submit: "Submit review",
            reset: "Reset",
          },
        },
      },
      ru: {
        translation: {
          reviewList: {
            popular: "В\u00A0тренде",
            myReviews: "Мои обзоры",
            allReviews: "Все обзоры",
          },
          errors: {
            provideFields: "Пожалуйста, заполните все нужные поля",
          },
          cta: {
            createReview: "Хотите рассказать о\u00A0чем-нибудь?",
          },
          reviews: {
            popular: "В\u00A0тренде",
            myReviews: "Мои обзоры",
            allReviews: "Все обзоры",
            notFound:
              "Мы не\u00A0нашли обзоры, подходящие под\u00A0фильтр. Пожалуйста, попробуйте поменять категорию",
          },
          sort: {
            latest: "По дате",
            popular: "По популярности",
            rating: "По рейтингу",
          },
          search: {
            title: "Искать обзоры",
            placeholder:
              "Пока нет результатов! Попробуйте напечатать что-то еще!",
            notFound:
              "Мы не\u00A0нашли обзоров по\u00A0вашему запросу. Попробуйте еще!",
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
            google: "Войти с Google",
            github: "Войти с Github",
            title: "ReelRate - войти в аккаунт",
            features: {
              title: "И получите доступ ко\u00A0всем функциям",
              1: "Оценивайте обзоры",
              2: "Комментируйте",
              3: "Станьте автором",
            },
          },
          review: {
            rating: "Рейтинг",
            yourRating: "Ваша оценка:",
            didYouLike: "Понравился обзор?",
          },
          editReview: {
            coverImage: "Шапка (изображение)",
            title: "Название обзора",
            product: "Название произведения",
            category: "Категория",
            tags: "Теги",
            text: "Обзор",
            verdict: "Оценка произведения",
            submit: "Поделиться обзором",
            reset: "Сбросить",
          },
        },
      },
    },
  });

export default i18n;
