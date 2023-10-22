import { Link } from "react-router-dom";

function IconLink({ Icon, url }) {
    return (
        <Link to={url}>
            <Icon className='text-white' size={32} />
        </Link>
    );
}

export default IconLink;
