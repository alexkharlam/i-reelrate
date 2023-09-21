import Header from "../header/Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative h-full w-full overflow-x-hidden overflow-y-scroll dark:bg-gray-900 bg-gray-100">
        <Header />
        <main className="p-3">{children}</main>
      </div>
    </>
  );
}

export default Layout;
