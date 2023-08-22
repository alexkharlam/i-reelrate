import Header from "../components/Header";

function ErrorPage({ message }) {
  return (
    <div className="container mx-auto px-1 h-screen flex flex-col grow">
      <Header />
      <div className="w-full flex flex-col items-center  gap-4 h-full">
        <p className="text-2xl text-gray-500">Oops, something went wrong!</p>
        <p className="font-bold text-6xl text-gray-700">{message}</p>
      </div>
      <img
        src="/error.svg"
        className="fixed top-[0px] left-[0px] -z-50 h-screen w-full"
      />
    </div>
  );
}

export default ErrorPage;
