import { Star } from "react-feather";

function ScoreBadge({ value }) {
    return (
        <div className='bg-primary text-white py-0.5 px-2.5 rounded-full text-sm font-bold flex gap-1 items-center'>
            <Star size={16} />
            <span>{value}</span>
        </div>
    );
}

export default ScoreBadge;
