import CategoriesList from "../components/CategoriesList";

const CATEGORIES = [
    "movies",
    "music",
    "tv",
    "games",
    "books",
    "science",
    "tech",
];

function CategoriesContainer() {
    return <CategoriesList categories={CATEGORIES} />;
}

export default CategoriesContainer;
