import { useContext, useEffect, useState } from "react";
import ReviewsList from "../../../components/ReviewsList";
import useSearch from "../hooks/useSearch";
import CenteredText from "../../../components/ui/messages/CenteredText";
import LoadingSpinner from "../../../components/ui/spinners/LoadingSpinner";
import { InputContext } from "../context/inputContext";

function SearchContainer() {
    const [results, setResults] = useState([]);
    const { inputValue } = useContext(InputContext);
    const { searchReviews, isLoading, error } = useSearch();

    useEffect(() => {
        if (!inputValue) return;

        const identifier = setTimeout(() => {
            searchReviews(inputValue, (data) => setResults(data?.results));
        }, 1000);

        return () => clearTimeout(identifier);
    }, [inputValue, searchReviews]);

    //

    if (isLoading) return <LoadingSpinner />;

    if (error)
        return (
            <CenteredText additionalText={error}>
                For some reason we cannot get reviews. Please try again!
            </CenteredText>
        );

    if (results.length > 0 && inputValue)
        return <ReviewsList reviews={results} />;

    return (
        <CenteredText>No results yet. Try to type something else!</CenteredText>
    );
}

export default SearchContainer;
