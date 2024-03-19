import { TiStarFullOutline } from "react-icons/ti";

const Airlines = () => {
  const items = [
    {
      name: "American Airlines",
      image: "https://i.ibb.co/42G1q4s/american.png",
      description: "Description for American Airlines",
      rating: 4,
      review: "200 reviews",
    },
    {
      name: "Biman Bangladesh Airlines",
      image: "https://i.ibb.co/VtzVNH8/biman-bd.png",
      description: "Description for Biman Bangladesh Airlines",
      rating: 3,
      review: "300 reviews",
    },
    {
      name: "Emirates",
      image: "https://i.ibb.co/dr896St/emirates.png",
      description: "Description for Emirates",
      rating: 5,
      review: "400 reviews",
    },
    {
      name: "Malaysia Airlines",
      image: "https://i.ibb.co/LYMX7t6/malaysia.png",
      description: "Description for Malaysia Airlines",
      rating: 4,
      review: "250 reviews",
    },
    {
      name: "Singapore Airlines",
      image: "https://i.ibb.co/T1FGH8w/Singapore-Airlines.png",
      description: "Description for Singapore Airlines",
      rating: 5,
      review: "350 reviews",
    },
    {
      name: "Turkish Airlines",
      image: "https://i.ibb.co/92B29qf/turkish.png",
      description: "Description for Turkish Airlines",
      rating: 4,
      review: "280 reviews",
    },

    {
      name: "American Airlines",
      image: "https://i.ibb.co/42G1q4s/american.png",
      description: "Description for American Airlines",
      rating: 4,
      review: "200 reviews",
    },
    {
      name: "Biman Bangladesh Airlines",
      image: "https://i.ibb.co/VtzVNH8/biman-bd.png",
      description: "Description for Biman Bangladesh Airlines",
      rating: 3,
      review: "300 reviews",
    },
    {
      name: "Emirates",
      image: "https://i.ibb.co/dr896St/emirates.png",
      description: "Description for Emirates",
      rating: 5,
      review: "400 reviews",
    },
    {
      name: "Malaysia Airlines",
      image: "https://i.ibb.co/LYMX7t6/malaysia.png",
      description: "Description for Malaysia Airlines",
      rating: 4,
      review: "250 reviews",
    },
    {
      name: "Singapore Airlines",
      image: "https://i.ibb.co/T1FGH8w/Singapore-Airlines.png",
      description: "Description for Singapore Airlines",
      rating: 5,
      review: "350 reviews",
    },
    {
      name: "Turkish Airlines",
      image: "https://i.ibb.co/92B29qf/turkish.png",
      description: "Description for Turkish Airlines",
      rating: 4,
      review: "280 reviews",
    },
  ];

  return (
    <div className="mt-20 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold ml-3">Popular Airlines</h1>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {items?.map((item) => (
          <div className="flex gap-2">
            <img className="w-[50px]" src={item?.image} alt="" />
            <div>
              <p className="text-blue-500 font-bold text-lg">{item?.name}</p>
              <div className="flex items-center gap-2">
                <p className="text-yellow-500">
                  <TiStarFullOutline></TiStarFullOutline>
                </p>{" "}
                <p>{item?.rating}</p>
                <p>({item?.review})</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Airlines;
