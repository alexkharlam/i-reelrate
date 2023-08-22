function FormInput({
  id,
  type,
  placeholder,
  value,
  onChange,
  required = true,
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      className="block w-full mb-3 border-gray-400 border-[1px] text-lg p-1.5 rounded-sm"
      id={id}
      required={required}
      type={type}
      placeholder={placeholder ? placeholder : ""}
    />
  );
}

export default FormInput;
