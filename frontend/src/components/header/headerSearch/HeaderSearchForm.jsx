import { Search } from "react-feather";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function HeaderSearchForm({ onSubmit }) {
  const [query, setQuery] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    onSubmit(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm font-semibold flex w-full"
    >
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="px-1.5 w-full focus:outline-none focus:border-[#5f3dc4] py-1 rounded-l-sm block bg-transparent dark:text-gray-200 border-r-0  dark:border-gray-600 border-gray-400 border-2"
        type="text"
        placeholder={t("header.searchPlaceholder")}
      />
      <button
        className="flex gap-1 items-center hover:bg-opacity-90 px-2 bg-primary  rounded-r-sm text-white"
        type="submit"
      >
        <Search />
        <span>{t("header.searchButton")}</span>
      </button>
    </form>
  );
}

export default HeaderSearchForm;
