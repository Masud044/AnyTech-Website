

const Footer = () => {
    return (
        <footer className="bg-[#002147] text-white">
        {/* Top Section */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-16 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-gray-200 tracking-wide">ANY</span>
            <span className="text-white">TECH</span>
          </div>
  
          {/* Navigation */}
          <nav className="flex space-x-6 text-cyan-300 text-sm">
            <span className="font-semibold">Our Solutions</span>
            <a href="#" className="hover:text-white">AnyCaaS</a>
            <a href="#" className="hover:text-white">AnyBaaS</a>
            <a href="#" className="hover:text-white">AnyPaaS</a>
          </nav>
        </div>
  
        {/* Bottom Section */}
        <div className="bg-[#001830] py-8 text-sm text-center flex flex-col md:flex-row justify-between px-6">
          <p className="text-blue-600">
            <span className="text-blue-600 font-semibold">©2025 All rights reserved.</span> Any Technology Pte Ltd.
          </p>
          <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
        </div>
      </footer>
    );
};

export default Footer;