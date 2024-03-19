const Navbar = () => {
  return (
    <nav className="bg-gray-200 p-4">
      <div className="flex justify-between">
        <div className="text-2xl font-bold">
          <span className="text-blue-500"></span> AirBook
        </div>
        <div className="flex space-x-2">
          <div>Blog</div>
          <div>Offer</div>
          <div>Airlines</div>
          <div>About</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
