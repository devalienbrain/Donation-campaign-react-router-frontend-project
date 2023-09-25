import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-7 min-h-screen justify-center items-center">
      <h2 className="text-4xl font-semibold text-red-700">Oops!!!</h2>
      <Link
        to={"/"}
        className="px-3 py-2 bg-slate-100 border border-black hover:bg-white rounded-lg"
      >
        Click to go home page.
      </Link>
    </div>
  );
};

export default ErrorPage;
