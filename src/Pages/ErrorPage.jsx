import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const routerError = useRouteError();
  return (
    <div>
      <h1 className="text-2xl text-center font-bold text-red-600">
        {routerError.statusText || routerError.message}
      </h1>
      <Link to="/" className="btn btn-red p-3 ">
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
