function Divider({ className }) {
    return (
        <div
            className={`w-full my-2 dark:bg-gray-600 bg-gray-300 h-[1px] ${
                className || ""
            }`}
        ></div>
    );
}

export default Divider;
