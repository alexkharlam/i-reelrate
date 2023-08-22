function FormLabel({ htmlFor, text }) {
  return (
    <label className="text-gray-500 text-lg mb-1.5 block" htmlFor={htmlFor}>
      {text}
    </label>
  );
}

export default FormLabel;
