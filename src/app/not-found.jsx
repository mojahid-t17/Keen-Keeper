import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold text-[#244D3F]">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-sm text-gray-500">
        Sorry, we couldn’t find the page you’re looking for. It may have been
        moved or the link might be incorrect.
      </p>

      <Link
        href="/"
        className="btn mt-6 rounded-lg border-none bg-[#244D3F] px-6 text-white hover:bg-[#1b3b30]"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;