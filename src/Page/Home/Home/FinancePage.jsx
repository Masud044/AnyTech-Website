const FinancePage = () => {
  return (
    <div className="bg-[url('/Background/WaveLinesMobile2.svg')] bg-cover bg-center ">
      <div className="p-4 md:flex ">
        <div className="">
          <h1 className="text-blue-500 text-2xl mt-10">
            POWERING THE FUTURE OF FINANCE
          </h1>
          <h1 className="text-6xl font-bold mt-10 ">
            Uncovering new <br /> ways to delight <br /> customers
          </h1>
          <p className="text-2xl font-semibold mt-8">
            AnyTech is revolutionising financial technology by introducing{" "}
            <br /> innovative and real-time transaction account processing
            capabilities, <br /> specifically designed for retail financial
            services
          </p>
          <p className="mt-8">
            Our modern approach surpasses traditional banking and card
            processing <br /> systems, empowering you with the most advanced
            technology for lasting <br /> success.
          </p>
        </div>
        <div className="relative w-[400px] h-[500px] mx-auto rounded-lg  shadow-lg ">
          {/* Main Background Image */}
          <img
            src="https://i.ibb.co.com/4ZjK7d1R/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.jpg" // Replace with your image path
            alt="Finance Professional"
            className="md:w-full w-[90%] h-full  object-cover"
          />

          {/* Top Left Icon */}
          <div className="absolute top-20 left-[-12%] bg-gradient-to-r from-indigo-500 rounded-full  shadow-lg">
            <img
              src="https://i.ibb.co.com/tT6b2gzQ/c544c6e75349fb440fc0938052f9288519c87bec-74x75.png"
              alt="Card Icon"
              className="w-18 h-18"
            />
          </div>

          {/* Middle Left Icon */}
          <div className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-white rounded-full  shadow-lg">
            <img
              src="https://i.ibb.co.com/wrzVFNrG/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.png"
              alt="Chart Icon"
              className="w-18 h-18"
            />
          </div>

          {/* Top Right Icon */}
          <div className="absolute top-5 right-[-12%] bg-gradient-to-r from-indigo-500 rounded-full  shadow-lg">
            <img
              src="https://i.ibb.co.com/bg6ZdQxH/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.png"
              alt="Bank Icon"
              className="w-18 h-18"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancePage;
