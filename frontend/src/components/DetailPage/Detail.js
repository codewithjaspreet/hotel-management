import React from "react";
const Detail = () => {
  return (
    <div>
      <div class="grid h-screen place-items-center ">
          <h1 className="text-black font-bold font-serif text-4xl sm:text-2xl md:text-3xl ">Book Your Dream Hotel Room Now </h1>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="p-8 rounded-t-lg"
              src="https://media.istockphoto.com/id/626673214/photo/interior-of-the-hotel-bedroom.jpg?s=612x612&w=0&k=20&c=Stj0mw0U58qVFeYpXQTSvD7iDHjsBdSiC8ScNqwIS5A="
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Room A
              </h5>
            </a>

            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                $100
              </span>
              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Confirm Booking
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
