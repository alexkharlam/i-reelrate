const scoreOptions = [1, 2, 3, 4, 5];
import { useState } from "react";
import { Star } from "react-feather";

function OptionsList({ onScore }) {
    const [hoveredItemIdx, setHoveredItemIdx] = useState();

    function handleHover(value) {
        setHoveredItemIdx(value);
    }

    return (
        <div className='flex gap-1'>
            {scoreOptions.map((score, idx) => (
                <button
                    onClick={() => onScore(score)}
                    onMouseEnter={() => handleHover(idx)}
                    onMouseLeave={() => setHoveredItemIdx(-1)}
                    key={score}
                >
                    <Star
                        size={24}
                        stroke='#ffd43b'
                        fill={hoveredItemIdx >= idx ? "#ffd43b" : "#444"}
                    />
                </button>
            ))}
        </div>
    );
}

export default OptionsList;
