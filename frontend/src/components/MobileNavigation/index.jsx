import { Home, Plus, Search, User } from "react-feather";
import IconLink from "../ui/links/IconLink";
import { useSelector } from "react-redux";

function MobileNavigation() {
    const { isAuthenticated } = useSelector((state) => state.auth);

    return (
        <div className='md:hidden z-50 flex justify-around gap-1 items-center fixed bottom-[0px] left-[0px] w-full h-4 bg-gray-1100 bg-opacity-95'>
            <IconLink Icon={Home} url='/' />
            <IconLink Icon={Search} url='/search' />
            {isAuthenticated && (
                <>
                    <IconLink Icon={Plus} url='/reviews/create' />
                    <IconLink Icon={User} url='/profile/reviews' />
                </>
            )}
            {!isAuthenticated && <IconLink Icon={User} url='/login' />}
        </div>
    );
}

export default MobileNavigation;
