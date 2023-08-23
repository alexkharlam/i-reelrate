function FormContainer({ children, formTitle, onSubmit }) {
  return (
    <div className="h-full w-full gap-2 flex items-center">
      <img className="w-1/2 max-h-full" src="/form.svg" />
      <form
        onSubmit={onSubmit}
        className=" w-1/2 shadow-lg border-2 border-gray-200 shadow-gray-200 bg-gray-100 p-3 rounded-sm"
      >
        <h2 className="text-2xl mb-3">{formTitle}</h2>
        {children}
        <button
          type="submit"
          className="w-full bg-primary-600 text-white font-bold text-lg p-2 rounded-sm hover:bg-primary-700"
        >
          {formTitle}
        </button>
      </form>
    </div>
  );
}

export default FormContainer;
