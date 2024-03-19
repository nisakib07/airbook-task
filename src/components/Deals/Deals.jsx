import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Deals = () => {
  const items = [
    {
      name: "With bkash payment only",
      image: "https://i.ibb.co/dffm2Cs/bkash.png",
      description:
        "With bKash payment only - Up to 14% discount on the base fare of domestic flights.",
    },
    {
      name: "With bkash payment only",
      image: "https://i.ibb.co/6tDkjKm/flight.png",
      description: "Up to 14% discount on the base fare of domestic flights.",
    },
    {
      name: "With bkash payment only",
      image: "https://i.ibb.co/k8Nc2P1/trivia.png",
      description: "Up to 14% discount on the base fare of domestic flights.",
    },
    {
      name: "With bkash payment only",
      image: "https://i.ibb.co/dffm2Cs/bkash.png",
      description: "Up to 14% discount on the base fare of domestic flights.",
    },
    {
      name: "With bkash payment only",
      image: "https://i.ibb.co/6tDkjKm/flight.png",
      description: "Up to 14% discount on the base fare of domestic flights.",
    },
  ];

  return (
    <div className="mt-20 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold ml-3">Deals and Offers</h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-6">
        {items?.map((item) => (
          <SwiperSlide>
            <div className="flex items-center gap-3 shadow-2xl">
              <img src={item?.image} alt="" />
              <div>
                <p className="text-sm font-medium">{item?.name}</p>
                <p className="text-blue-500 font-bold">{item?.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Deals;
