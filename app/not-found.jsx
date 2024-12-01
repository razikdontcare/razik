import React from "react";
import Link from "next/link";

export const metadata = {
  title: "404 Not Found",
  description: "The page you are looking for does not exist.",
};

function NotFound() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-200">
        <div className="flex flex-col items-center justify-center max-w-xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h1>
          <h2 className="text-2xl font-medium text-gray-600 text-center">
            We're sorry, but the page you were looking for does not exist. It
            may have been moved or removed altogether.
          </h2>

          <div className="mt-8">
            <Link
              href="/"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all flex space-x-2"
            >
              <span>Back to Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
