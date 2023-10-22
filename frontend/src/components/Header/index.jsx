import { useMediaQuery } from "react-responsive";

import Dekstop from "./Dekstop";
import Mobile from "./Mobile";

function Header() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return isMobile ? <Mobile /> : <Dekstop />;
}

export default Header;
