function Verdict({ value, setValue }) {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="w-full flex flex-wrap gap-2 mb-3.5">
      {options.map((option) => (
        <button
          type="button"
          onClick={() => setValue(option)}
          className={`hover:bg-gray-500 py-1.5 px-2.5 rounded-full text-1xl border-[1px] border-gray-500 ${
            option === value && "bg-primary-600 hover:bg-primary-600"
          }`}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Verdict;
