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
          userPanel: {
            title: "Manage account",
            name: "Name",
            email: "email",
            role: "role",
            totalReviews: "Total reviews",
            logoutButton: "Logout",
            deleteAccountButton: "Delete account",
            deleteWarning1: "Are you sure you want to delete your account?",
            deleteWarning2:
              "This action will remove all your reviews, likes, comments andrates. Account will be permanently deleted from the database",

            deleteWarning3: "You can register again with the same email",
            deleteWarning4: "Note: this is a destrictive action!",
          },
          favourites: {
            favourites: "Favourite reviews",
            addTo: "Add to favourites",
            deleteFrom: "Delete from favourites",
          },
          rate: {
            rate: "Rate this review",
            rates: "rates",
            deleteRate: "Delete my rate",
            changeRate: "Change your rate",
          },
          reviewList: {
            popular: "Trending now",
            myReviews: "My reviews",
            allReviews: "All reviews",
          },
          errors: {
            generic: "Unknown error, please try again!",
            provideFields: "Please provide all required fields",
            403: "Only for registered users. Please sign in",
            404: "404 - Not found",
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
            favourites: "Favourites",
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
            verdict: "verdict",
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
          comments: {
            comments: "Comments",
            placeholder: "Write comment here...",
            submitComment: "Comment",
          },
        },
      },
      ru: {
        translation: {
          userPanel: {
            title: "Ваш аккаунт",
            name: "Имя",
            email: "Почта",
            role: "Роль",
            totalReviews: "Всего обзоров",
            logoutButton: "Выйти",
            deleteAccountButton: "Удалить аккаунт",
            deleteWarning1: "Вы уверены, что хотите удалить аккаунт?",
            deleteWarning2:
              "Это действие удалит все ваши отзывы, лайки, комментарии и оценки. Аккаунт будет удален из базы данных навсегда.",
            deleteWarning3: "Вы можете зарегистрироваться снова",
            deleteWarning4: "Обратите внимание: это действие нельзя отменить",
          },
          favourites: {
            favourites: "Избранное",
            addTo: "Добавить в избранное",
            deleteFrom: "Удалить из избранного",
          },
          rate: {
            rate: "Оценить обзор",
            rates: "Оценок",
            deleteRate: "Удалить оценку",
            changeRate: "Изменить оценку",
          },
          reviewList: {
            popular: "В\u00A0тренде",
            myReviews: "Мои обзоры",
            allReviews: "Все обзоры",
          },
          errors: {
            generic: "Неизвестная ошибка, попробуйте перезагрузить страницу!",
            403: "Только для зарегестрированных пользователей. Пожалуйста, войдите в аккаунт",
            404: "404 - Не найдено",
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
            favourites: "Избранные обзоры",
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
            verdict: "вердикт",
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
          comments: {
            comments: "Комментарии",
            placeholder: "Написать комментарий",
            submitComment: "Отправить",
          },
        },
      },
    },
  });

export default i18n;
