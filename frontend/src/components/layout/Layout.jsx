import Header from "../header/Header";
import MobileNavigation from "../navigation/mobileNavigation/MobileNavigation";
import Sidebar from "../sideBar/Sidebar";
import { useMediaQuery } from "react-responsive";

function Layout({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {!isMobile && <Sidebar />}
      {isMobile && <MobileNavigation />}
      <div className="relative h-full w-full overflow-x-hidden overflow-y-scroll dark:bg-gray-900 bg-gray-100">
        <Header />
        <main className="p-3 mb-4">{children}</main>
      </div>
    </>
  );
}

export default Layout;
