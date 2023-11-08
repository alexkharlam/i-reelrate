import { useTranslation } from "react-i18next";

const SORT_OPTIONS = [
    { value: "-createdAt", text: "sort.latest" },
    { value: "-rating.numRates", text: "sort.popular" },
    { value: "-rating.value", text: "sort.rating" },
];

function SortOptions() {
    const { t } = useTranslation();

    return SORT_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
            {t(option.text)}
        </option>
    ));
}

export default SortOptions;
