import React from "react";
import Dropdown from "../../utils/Dropdown";

const All = () => {
  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-between ">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Room Booking Order #13342
          </h1>
          <p className="text-base font-medium leading-6 text-gray-600">
            10th March 2023 at 10:34 PM
          </p>
        </div>

          <Dropdown/>
      </div>

      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
              My Bookings
            </p>
            <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
              <div className="pb-4 md:pb-8 w-full md:w-40">
                <img
                  className="w-full hidden md:block"
                  src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
                  alt="dress"
                />
                <img
                  className="w-full md:hidden"
                  src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
                  alt="dress"
                />
              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    Room Type: A
                  </h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">Start Time: </span> 17:00
                      pm
                    </p>
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">Size: </span> 20:00 pm
                    </p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base xl:text-lg leading-6">$100.00 </p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">
              <div className="w-full md:w-40">
                <img
                  className="w-full hidden md:block"
                  src="data:image/jpeg;base64,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"
                  alt="dress"
                />
                <img
                  className="w-full md:hidden"
                  src="https://insights.ehotelier.com/wp-content/uploads/sites/6/2020/01/hotel-room-300x300.jpg"
                  alt="dress"
                />
              </div>
              <div className="  flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0  ">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    Room Type: B
                  </h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">Start Time : </span>2:00
                      Pm
                    </p>
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">End Time: </span> 5:00 Pm
                    </p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base xl:text-lg leading-6">$80.00 </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Summary
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">
                    Total Bill
                  </p>
                  <p className="text-base leading-4 text-gray-600">$180.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
