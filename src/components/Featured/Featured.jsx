const Featured = () => {
  const items = [
    {
      name: "Stopover opportunity in İstanbul with Turkish Airlines",
      image: "https://i.ibb.co/jgDjWGn/featured1.jpg",
    },
    {
      name: "Discover the timeless city with Touristanbul of Turkish Airlines",
      image: "https://i.ibb.co/RQx58dc/featured2.jpg",
    },
    {
      name: "the best of Abu Dhabi with exclusive Etihad Airways!",
      image: "https://i.ibb.co/RQx58dc/featured2.jpg",
    },
  ];

  return (
    <div className="mt-20 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold ml-3">Featured Destinations</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3">
        {items?.map((item) => (
          <div className="card bg-base-100 shadow-xl">
            <figure className="p-2">
              <img
                src={item?.image}
                alt="Shoes"
                className="rounded-xl h-[250px] w-full"
              />
            </figure>
            <div className="p-2 text-xl font-bold">
              <h3>{item?.name}</h3>
              <div className="flex items-center justify-center mt-3">
                <button className="btn bg-yellow-500 px-12 text-semibold">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
