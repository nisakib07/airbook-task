import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";

const Blog = () => {
  const blogs = [
    {
      image: "https://i.ibb.co/G0H4PM5/blog1.png",
      type: "Travel",
      date: "18 March 2024", // This remains the same for demonstration purposes
      title: "Exploring the hidden beauty of Ashulia",
      bloggerImg: "https://i.ibb.co/YhBpQLj/blogger1.png",
      blogger: "John Doe",
    },
    {
      image: "https://i.ibb.co/WcZRSh2/blog2.png",
      type: "Food",
      date: "14 September 2023",
      title: "Must-try street food in Dhaka",
      bloggerImg: "https://i.ibb.co/zsHhqgv/blogger2.png",
      blogger: "Jane Smith",
    },
    {
      image: "https://i.ibb.co/xSQFKy8/blog3.png",
      type: "Culture",
      date: "16 March 2024", // This remains the same for demonstration purposes
      title: "Experiencing the rich culture of Bangladesh",
      bloggerImg: "https://i.ibb.co/PmT1BX1/blogger3.png",
      blogger: "Michael Lee",
    },
    {
      image: "https://i.ibb.co/xSQFKy8/blog3.png",
      type: "Culture",
      date: "16 March 2024", // This remains the same for demonstration purposes
      title: "Experiencing the rich culture of Bangladesh",
      bloggerImg: "https://i.ibb.co/PmT1BX1/blogger3.png",
      blogger: "Michael Lee",
    },
    {
      image: "https://i.ibb.co/xSQFKy8/blog3.png",
      type: "Culture",
      date: "16 March 2024", // This remains the same for demonstration purposes
      title: "Experiencing the rich culture of Bangladesh",
      bloggerImg: "https://i.ibb.co/PmT1BX1/blogger3.png",
      blogger: "Michael Lee",
    },
  ];

  return (
    <div className="mt-20 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold ml-3">Deals and Offers</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper mt-6">
        {blogs?.map((item) => (
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

export default Blog;
