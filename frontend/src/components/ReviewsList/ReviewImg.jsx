function ReviewImg({ imgUrl }) {
    return (
        <img
            className='md:w-7 w-full h-6 object-cover object-center'
            src={imgUrl}
        />
    );
}

export default ReviewImg;
