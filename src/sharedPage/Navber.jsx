const Navber = () => {
  return (
    <div>
     <div className="navbar  fixed z-10 max-w-screen-xl bg-blue-400 shadow-md  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
              <details>
                <summary>Solustions</summary>
                <ul className=" text-black opacity-70">
                  <li>
                    <a>AnyCaaS</a>
                  </li>
                  <hr />
                  <li>
                    <a>AnyBaaS</a>
                  </li>
                  <hr />
                  <li>
                    <a>AnyPaaS</a>
                  </li>
                </ul>
              </details>
            </li>
            

            <li>
              <a>Service</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <details>
                <summary className="px-4 py-2 border border-black rounded-full">English</summary>
                <ul className="text-black opacity-70">
                  <li>
                    <a>En</a>
                  </li>
                  <hr />
                  <li>
                    <a>Thai</a>
                  </li>
                  <hr />
                  <li>
                    <a>Indonesia</a>
                  </li>
                </ul>
              </details>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><img src="https://i.ibb.co.com/jknSK8qr/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.webp" alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl  space-x-8 text-white font-normal">
           
            <li>
              <details>
                <summary>Solustions</summary>
                <ul className=" text-black opacity-70 shadow-md">
                  <li>
                    <a>AnyCaaS</a>
                  </li>
                  <hr />
                  <li>
                    <a>AnyBaaS</a>
                  </li>
                  <hr />
                  <li>
                    <a>AnyPaaS</a>
                  </li>
                </ul>
              </details>
            </li>
            

            <li>
              <a>Service</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <details>
                <summary className="px-4 py-2 border border-white rounded-full">EN</summary>
                <ul className=" text-black opacity-70 shadow-lg ">
                  <li>
                    <a>En</a>
                  </li>
                  <hr />
                  <li>
                    <a>Thai</a>
                  </li>
                  <hr />
                  <li>
                    <a>Indonesia</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="border border-white btn bg-blue-400 text-white">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
