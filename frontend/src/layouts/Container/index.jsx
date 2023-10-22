import Header from "../../components/Header";
import MobileNavigation from "../../components/MobileNavigation";
import Sidebar from "../Sidebar";
import useMediaQuery from "react-responsive";

function Container({ children }) {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <>
            {!isMobile && <Sidebar />}
            {isMobile && <MobileNavigation />}
            <div className='relative h-full w-full overflow-x-hidden overflow-y-scroll dark:bg-gray-700 bg-[#ddd]'>
                <Header />
                <main className='py-3 px-2.5 md:px-3 lg:px-4.5 mb-4'>
                    {children}
                </main>
            </div>
        </>
    );
}

export default Container;
