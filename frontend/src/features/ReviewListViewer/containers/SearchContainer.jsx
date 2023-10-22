import { useEffect, useState } from "react";

function SearchContainer() {
    const [value, setValue] = useState("");

    useEffect(() => {
        const identifier = setTimeout(() => {}, 3000);

        console.log("request to server with search");

        return () => {
            clearTimeout(identifier);
        };
    }, [value]);

    return (
        <input
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

export default SearchContainer;
