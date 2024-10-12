import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full py-10">
      <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        Sorry, the page you're looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-900"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
