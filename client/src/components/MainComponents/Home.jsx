import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full -mt-16 -ms-16">
      <div className="flex flex-1 w-full h-full">
        <div className="flex flex-col ml-auto w-5/6 h-full">
          <div className="flex flex-col flex-1 items-center justify-center">
            <div className="text-5xl font-bold mb-6">OTC CATCHUP</div>
            <div className="text-lg mb-4 ">
              Informal Tech discussions every Saturday from 10:30 PM IST
            </div>
            <div className="text-sm mb-4 ">
              NOTE: OTC CatchUp is not in session right now.
            </div>
            <div className="text-sm mb-8">
              Please come back on Saturday (10:30 PM IST onwards), we would love
              to have you!
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                Join the catchup meet
              </button>
              <button className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300">
                Read latest summary
              </button>
              <button className="bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:border-yellow-300">
                Read all summaries
              </button>
              <button className="bg-gray-500 text-white py-3 px-6 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-gray-300">
                Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
