import { Link } from "react-router-dom";

function MobileNavLink({ Icon, url }) {
  return (
    <Link to={url}>
      <Icon className="text-white" size={32} />
    </Link>
  );
}

export default MobileNavLink;
