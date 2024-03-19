import React from "react";
import banner from "../../assets/banner.png";
import { IoMdSearch } from "react-icons/io";

const Banner = () => {
  const bannerInfo = [
    {
      id: 1,
      name: "DAC",
      place: "Dhaka",
      date: "Hazrat Shahjalal International",
    },
    {
      id: 2,
      name: "Cxb",
      place: "Cox's Bazar",
      date: "Hazrat Shahjalal International",
    },
    {
      id: 3,
      name: "03",
      place: "October",
      date: "Tuesday, 2023",
    },
    {
      id: 4,
      name: "05",
      place: "October",
      date: "Tuesday, 2023",
    },
  ];

  return (
    <div>
      <div className="">
        <img src={banner} className="h-[650px] w-full absolute" alt="" />
      </div>
      <div className="relative top-40 px-24">
        <h1 className="text-6xl text-white ml-4">
          Welcome To{" "}
          <span className="text-blue-600 font-semibold">AirBook</span>{" "}
        </h1>

        <div className="bg-white rounded-lg p-5 mt-6">
          <div className="flex justify-between">
            <div className="p-3 flex gap-4">
              <div className="flex items-center gap-3 bg-slate-400 rounded-md p-3">
                <div className="h-5 w-5 border-2 rounded-full"></div>
                <h3>One Way</h3>
              </div>
              <div className="flex items-center gap-3 bg-blue-600 rounded-md p-3 text-white">
                <div className="border-2 p-1 rounded-full">
                  <div className="h-4 w-4 bg-white rounded-full"></div>
                </div>
                <h3>Round Trip</h3>
              </div>
            </div>
            <div className="flex gap-3">
              <select className="text-blue-500 font-semibold bg-slate-300 p-1 my-3 rounded-md">
                <option value="1">1 Traveler</option>
                <option value="2">2 Traveler</option>
                <option value="3">3 Traveler</option>
              </select>
              <select className="text-blue-500 font-semibold bg-slate-300 p-1 my-3 rounded-md">
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="higher">Higher</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="grid grid-cols-4">
              {bannerInfo?.map((banner) => (
                <div>
                  <div className="m-2 border-2 rounded-md px-4 py-3 flex items-center justify-center">
                    <h1 className="font-semibold text-xl border-r-2 pr-3 text-start">
                      {banner.name}
                    </h1>
                    <div className="pl-3">
                      <h3 className="text-xl font-semibold">{banner?.place}</h3>
                      <p className="text-sm">{banner?.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-yellow-500 my-2 flex justify-center items-center px-6 rounded-md text-3xl text-white">
              <IoMdSearch></IoMdSearch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
