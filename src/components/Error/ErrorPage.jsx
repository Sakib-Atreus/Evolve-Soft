import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className='text-center text-red-600 p-6 rounded-xl font-bold text-9xl mt-12'>
            <h1 className='mb-6'>404</h1>
            <h2>Error!</h2>
        </div>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-indigo-500 text-white">
            Back To Home
          </Link>
        
      </div>
    </section>
  );
};

export default ErrorPage;
