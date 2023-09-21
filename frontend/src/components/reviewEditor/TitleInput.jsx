import { useEffect, useState } from "react";

function TitleInput({ value, setValue }) {
  const maxCharacters = 35;
  const [isFocused, setIsFocused] = useState(false);
  const [charactersLeft, setCharactersLeft] = useState(maxCharacters);

  function handleChange(e) {
    setValue(e.target.value);
    setCharactersLeft(maxCharacters - e.target.value.length);
  }

  useEffect(() => {
    setCharactersLeft(maxCharacters - value.length);
  }, []);

  return (
    <div className="relative mb-3.5">
      <input
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        className="block rounded-sm border-gray-600 border-2 w-full text-1xl p-2 font-[Montserrat] bg-[rgba(0,0,0,0)]"
        type="text"
        placeholder="Your title..."
        maxLength={maxCharacters}
      />
      {charactersLeft > 0 && isFocused && (
        <p className="absolute text-[#5cbe46] top-1/2 px-3 text-1xl -translate-y-1/2 right-[0px] ">
          {charactersLeft}
        </p>
      )}
    </div>
  );
}

export default TitleInput;
