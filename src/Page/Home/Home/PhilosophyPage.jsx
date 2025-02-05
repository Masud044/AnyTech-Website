const PhilosophyPage = () => {
  return (
    <div className="mt-60">
      <h1 className="text-blue-500 text-2xl text-center font-semibold font-sans ">
        OUR PHILOSOPHY
      </h1>
      <h1 className="text-center text-4xl font-bold font-mono mt-8">
        Human-centred innovation
      </h1>

      <div className="bg-blue-50 py-10  mt-8 rounded-2xl">
        {/* Left Section */}
        <div className="md:flex gap-4 items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:mb-0 mb-6">
            {/* Card Section */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white shadow-lg rounded-lg p-4 text-center w-72 h-32">
                <h2 className="text-blue-500 font-bold text-sm uppercase">
                  Core Tech
                </h2>
                <h1 className="text-2xl font-semibold text-gray-800 mt-3">
                  Artificial Intelligence
                </h1>
              </div>
              <p className="text-gray-600 mt-4 text-xs opacity-85 w-72">
                Using AI/ML to upgrade legacy processes, <br /> reduce cost, and
                improve efficiency.
              </p>
            </div>

            {/* Center Arrow */}
            <div>
              <img
                src="https://i.ibb.co.com/0RPjCGMh/Line4.png"
                alt="Arrow"
                className="transform sm:rotate-0 -rotate-90 md:w-auto w-12"
              />
            </div>
          </div>

          {/* Right Section */}

          {/* Grid Section */}
          <div className="flex justify-center items-center ">
            {/* Blockchain section */}
            <div>
              <div className="bg-white shadow-lg rounded-lg p-6 text-center w-44 h-24 ">
                <h2 className="text-orange-500 font-bold text-sm uppercase">
                  Mechanism
                </h2>
                <h1 className="text-2xl font-semibold text-gray-800 mt-3">
                  Blockchain
                </h1>
              </div>
              <div>
                <p className="text-gray-600 mt-2 text-xs opacity-85">
                  Enhanced security by <br /> eliminating intermediaries
                </p>
              </div>
            </div>
          </div>
          <div className=" md:flex-col flex md:gap-0 justify-center items-center  gap-8">
            {/* Cloud Section */}
            <div>
              <div className="md:flex gap-6">
                <div className="bg-white shadow-2xl rounded-lg p-6 text-center w-44 h-24">
                  <h2 className="text-teal-500 font-bold text-sm uppercase">
                    Infrastructure
                  </h2>
                  <h1 className="text-2xl font-semibold text-gray-800 mt-3">
                    Cloud
                  </h1>
                </div>
                <div>
                  <p className="text-gray-600 mt-4 text-xs opacity-85">
                    Scale resources <br /> easily on-demand
                  </p>
                </div>
              </div>
            </div>
            <div className="md:mx-20">
              <img
                src="https://i.ibb.co.com/gLPPJSfB/Line1.png"
                alt=""
                width={10}
                className="transform sm:rotate-0 -rotate-90"
              />
            </div>

            {/* Data Section */}

            <div className="md:flex gap-6">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center w-44 h-24 ">
                <h2 className="text-yellow-500 font-bold text-sm uppercase">
                  Resource
                </h2>
                <h1 className="text-2xl font-semibold text-gray-800 mt-3">
                  Data
                </h1>
              </div>
              <div>
                <p className="text-gray-600 text-xs opacity-85 mt-4 ">
                  Valuable, actionable <br /> insights from mass <br /> data
                  sources
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophyPage;
