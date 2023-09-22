import { useTranslation } from "react-i18next";

function SortDropdown({ sortBy, setSortBy }) {
  const { t } = useTranslation();

  return (
    <select
      className="dark:bg-black border-[1px] bg-white border-gray-400 hover:border-gray-300 py-1.5 pl-2 pr-3.5 font-semibold  rounded-sm mb-3"
      id="sort"
      name="sort"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="-createdAt">{t("sort.latest")}</option>
      <option value="-rating.numRates">{t("sort.popular")}</option>
      <option value="-rating.value">{t("sort.rating")}</option>
    </select>
  );
}

export default SortDropdown;
