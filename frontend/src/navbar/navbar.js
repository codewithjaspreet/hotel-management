import { useState } from "react";
import { logo } from "../utils/logo.jpg";

import { Link } from "react-router-dom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-black shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">

            <a><h1 className="text-2xl font-bold text-white">Hotel Management Admin Panel</h1></a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link to="/edit">EditBooking</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link to="/delete">CancelBooking</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link to="/details">Details</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link to="/allbookings">AllBookings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

// import React from "react";
// import logo from "../utils/logo.jpg";
// import { Link } from "react-router-dom";
// const NavBar = () => {
//    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//       setIsMobileMenuOpen(!isMobileMenuOpen);
//     };
//   return (
//     <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
//       <div class="container flex flex-wrap items-center justify-between mx-auto">
//         <a href="/" class="flex items-center">
//           <img src={logo} class="h-6 mr-3 sm:h-9" alt="Logo" />
//           <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
//             Hotel Management Admin Panel
//           </span>
//         </a>

//         <button
//           data-collapse-toggle="navbar-default"
//           type="button"
//           class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-default"
//           aria-expanded="false"
//         >
//           <span class="sr-only">Open main menu</span>
//           <svg
//             class="w-6 h-6"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//         </button>
//         <div class="hidden w-full md:block md:w-auto" id="navbar-default">
//           <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <Link
//                 to="/"
//                 className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/edit"
//                 className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
//               >
//                 EditBooking
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/delete"
//                 className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
//               >
//                 CancelBooking
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/details"
//                 className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
//               >
//                 DetailPage
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/allbookings"
//                 className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
//               >
//                 All Bookings
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
