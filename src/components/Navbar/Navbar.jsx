import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="w-full fixed">
      <div className=" bg-white">
        <div className="flex justify-between items-center py-5 w-[1280px] mx-auto">
          <div className="flex items-center gap-2">
            <img className="w-6" src={logo} alt="" />
            <h1 className="text-3xl">
              <span className="text-yellow-500 font-bold">Air</span>
              <span className="text-blue-500">Book</span>
            </h1>
          </div>
          <div>
            <ul className="flex space-x-8 items-center text-lg font-medium text-textPrimary">
              <li>Blog</li>
              <li>Offer</li>
              <li>Airlines</li>
              <li>About</li>
            </ul>
          </div>
          <div>
            <button className="bg-[#006CE4] text-white px-8 text-base font-medium py-2 rounded-[10px]">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
