function Error({ error }) {
    return (
        <div className='flex flex-col items-center gap-4'>
            <p className='text-1xl font-semibold'>
                Oops! For some reason we cannot get review!{" "}
            </p>
            <p>{error}</p>
        </div>
    );
}

export default Error;
