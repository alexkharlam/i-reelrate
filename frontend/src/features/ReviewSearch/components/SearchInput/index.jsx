import { useContext } from "react";
import { Search } from "react-feather";
import { InputContext } from "../../context/inputContext";

function SearchInput() {
    const { inputValue, setInputValue } = useContext(InputContext);

    return (
        <div className='relative mb-3 max-w-2xl text-base font-semibold text-gray-900 w-full'>
            <Search
                className='absolute left-2 top-1/2 -translate-y-1/2 text-1xl '
                strokeWidth={2}
            />
            <input
                type='text'
                placeholder='Search for reviews'
                className='w-full rounded-lg py-1.5 pl-3.5 pr-2'
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
            />
        </div>
    );
}

export default SearchInput;
