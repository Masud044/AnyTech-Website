// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useRef, useState } from "react";


const FeatureFinance = () => {
   const [ activeIndex, setActiveIndex] = useState(0);
   const swiperRef = useRef(null);
   const slide = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };
   

  return (
    <div className="mt-20">
      <h1 className="text-blue-500 text-2xl font-bold mt-10 font-sans text-center">
        TECHNOLOGY BUILT FOR YOU
      </h1>
      <h1 className="text-6xl font-bold mt-10 font-mono text-blue-950 opacity-95 text-center">
        The future of finance
      </h1>

      <div className="flex gap-10 justify-center mt-20 mb-20">
        <button onClick={()=>slide(0)}  className={`btn-wide font-bold hidden md:block mt-10 font-sans px-4 py-2 rounded-lg transition-all 
              ${activeIndex===0 ? "bg-blue-500 text-white" : "text-blue-500 "}`}
          >
          Customer focused
        </button>
        <button onClick={()=>slide(1)} className={`btn-wide hidden md:block  font-bold mt-10 font-sans px-4 py-2 rounded-lg transition-all 
              ${activeIndex===1 ? "bg-blue-500 text-white" : "text-blue-500 "}`}>
          Agile and adaptable
        </button>
        <button onClick={()=>slide(2)} className={`btn-wide font-bold hidden md:block mt-10 font-sans px-4 py-2 rounded-lg transition-all 
              ${activeIndex===2 ? "bg-blue-500 text-white" : "text-blue-500 "}`}>
          Complince ready
        </button>
        <button onClick={()=>slide(3)} className={`btn-wide font-bold mt-10 font-sans px-4 py-2 rounded-lg transition-all hidden md:block 
              ${activeIndex===3 ? "bg-blue-500 text-white" : "text-blue-500 "}`}>
          Secure and safe
        </button>
      </div>

      <div>
        <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide >
             <div className="md:grid md:grid-cols-2 gap-10 p-10 bg-base-100 shadow-2xl rounded-xl">
                  <div>
                    <h1 className="text-blue-500 text-2xl font-bold font-sans ">Customer focused</h1>
                  <h2 className="text-4xl font-bold mt-6 font-mono text-blue-950 opacity-95 ">Purpouse built financial service</h2>
                  <p className="mt-6 mb-6 text-xl"> <strong>Elevate customer experience and achieve agile  financial product innovation with the world’s first,  consumer-centric, real-time transaction account processing and credit  limit system.</strong>
                    </p>
                    <p className="text-xl">
                    Experience the advantages of integrated retail financial services  technology, real-time analysis of transactional behaviour and product marketing opportunities.
                    </p>
                  </div>
                  <div>
                  <img className="rounded-xl"
                  src="https://i.ibb.co.com/x8Lcqt4V/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg"
                  alt="img"
                />
                  </div>
             </div>
            
          </SwiperSlide>
          <SwiperSlide>
           
            <div className="md:grid md:grid-cols-2 gap-10 p-10 bg-base-100 shadow-2xl rounded-xl">
                  <div>
                    <h1 className="text-blue-500 text-2xl font-bold font-sans ">Customer focused</h1>
                  <h2 className="text-4xl font-bold mt-6 font-mono text-blue-950 opacity-95 ">Purpouse built financial service</h2>
                  <p className="mt-6 mb-6 text-xl"> <strong>Elevate customer experience and achieve agile  financial product innovation with the world’s first,  consumer-centric, real-time transaction account processing and credit  limit system.</strong>
                    </p>
                    <p className="text-xl">
                    Experience the advantages of integrated retail financial services  technology, real-time analysis of transactional behaviour and product marketing opportunities.
                    </p>
                  </div>
                  <div>
                  <img className="rounded-xl" 
                  src="https://i.ibb.co.com/Vknn4Xg/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg"
                  alt=""
                />
                  </div>
             </div>
          </SwiperSlide>
          <SwiperSlide>
           
            <div className="md:grid md:grid-cols-2 gap-10 p-10 bg-base-100 shadow-2xl rounded-xl">
                  <div>
                    <h1 className="text-blue-500 text-2xl font-bold font-sans ">Customer focused</h1>
                  <h2 className="text-4xl font-bold mt-6 font-mono text-blue-950 opacity-95 ">Purpouse built financial service</h2>
                  <p className="mt-6 mb-6 text-xl"> <strong>Elevate customer experience and achieve agile  financial product innovation with the world’s first,  consumer-centric, real-time transaction account processing and credit  limit system.</strong>
                    </p>
                    <p className="text-xl">
                    Experience the advantages of integrated retail financial services  technology, real-time analysis of transactional behaviour and product marketing opportunities.
                    </p>
                  </div>
                  <div>
                  <img className="rounded-xl" 
                  src="https://i.ibb.co.com/bxB7CkZ/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg"
                  alt=""
                />
                  </div>
             </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="md:grid md:grid-cols-2 gap-10 p-10 bg-base-100 shadow-2xl rounded-xl">
                  <div>
                    <h1 className="text-blue-500 text-2xl font-bold font-sans ">Customer focused</h1>
                  <h2 className="text-4xl font-bold mt-6 font-mono text-blue-950 opacity-95 ">Purpouse built financial service</h2>
                  <p className="mt-6 mb-6 text-xl"> <strong>Elevate customer experience and achieve agile  financial product innovation with the world’s first,  consumer-centric, real-time transaction account processing and credit  limit system.</strong>
                    </p>
                    <p className="text-xl">
                    Experience the advantages of integrated retail financial services  technology, real-time analysis of transactional behaviour and product marketing opportunities.
                    </p>
                  </div>
                  <div>
                  <img className="rounded-xl" 
                  src="https://i.ibb.co.com/dwLrpBtD/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.jpg"
                  alt="Album"
                />
                  </div>
             </div>
           
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureFinance;
