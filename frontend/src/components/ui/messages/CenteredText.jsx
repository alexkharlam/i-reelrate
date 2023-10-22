function CenteredText({ children, additionalText, className }) {
    return (
        <div className={`flex flex-col items-center gap-4 ${className || ""}`}>
            <p className='text-1xl font-semibold'>{children}</p>
            {additionalText && <p>{additionalText}</p>}
        </div>
    );
}

export default CenteredText;
