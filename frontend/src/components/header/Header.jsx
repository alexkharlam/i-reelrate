import { useMediaQuery } from "react-responsive";

import MobileHeader from "./MobileHeader";
import DekstopHeader from "./DekstopHeader";

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? <MobileHeader /> : <DekstopHeader />;
}

export default Header;
