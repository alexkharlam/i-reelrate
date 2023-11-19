import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "./MobileHeader";
import DekstopHeader from "./DekstopHeader";
import MobileNavigation from "../components/MobileNavigation";

function Container({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {!isMobile && <Sidebar />}
      {isMobile && <MobileNavigation />}
      <div className="relative h-full w-full overflow-x-hidden overflow-y-scroll dark:bg-gray-700 bg-[#ddd]">
        {isMobile ? <MobileHeader /> : <DekstopHeader />}
        <main className="py-3 px-2.5 md:px-3 lg:px-4.5 mb-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Container;
