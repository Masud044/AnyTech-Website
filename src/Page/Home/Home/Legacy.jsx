

const Legacy = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r text-white overflow-hidden py-32 rounded-t-lg">
      {/* Slanted Background with Light Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0072ff] to-[#0057e7] clip-path-custom">
        {/* Light streaks effect */}
        <div className="absolute inset-0 bg-[url('/path-to-light-streaks.png')] bg-cover bg-no-repeat opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 flex flex-col items-start">
        <h1 className="text-4xl md:text-5xl font-bold">Legacy no longer</h1>
        <p className="text-lg mt-3">
          Talk to us to find out how we can transform your organisation for the future
        </p>

        {/* Call to Action Button */}
        <button className="mt-6 px-6 py-3 bg-orange-400 text-white font-semibold rounded-md shadow-md hover:bg-orange-500 transition">
          Contact Us &rsaquo;
        </button>
      </div>

     
    </div>
    </div>
  );
};

export default Legacy;
