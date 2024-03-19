const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">About Airbook</h1>
          <p className="text-gray-700 leading-loose">
            {/* Add company description here */}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-end">
          <img
            className="rounded-lg shadow-md"
            src="{/* Add company logo image here */}"
            alt="Airbook Logo"
          />
        </div>
      </div>
      <div className="flex flex-wrap mt-10 justify-between">
        <div className="w-full md:w-1/3 px-2">
          <h3 className="text-xl font-bold mb-2">Address</h3>
          <p className="text-gray-700 leading-loose">
            House-75 Ka, Main Rd. Dhaka 1216
          </p>
          <a
            href="https://maps.google.com/"
            className="text-indigo-500 hover:text-indigo-700 underline mt-2 inline-block">
            View On Maps
          </a>
        </div>
        <div className="w-full md:w-1/3 px-2">
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p className="text-gray-700 leading-loose">
            <a href="tel:+8801234562890" className="underline">
              +880 1234562890
            </a>
            <br />
            <a href="tel:+8801345628980" className="underline">
              +880 1345628980
            </a>
            <br />
            <a href="mailto:Info@Airbook.Com" className="underline">
              Info@Airbook.Com
            </a>
          </p>
        </div>
        <div className="w-full md:w-1/3 px-2">
          <h3 className="text-xl font-bold mb-2">Links</h3>
          <ul className="list-none pl-4">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-500 underline">
                Stories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-500 underline">
                Terms Of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-500 underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-2">Social Media</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-indigo-500 hover:text-indigo-700">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-indigo-500 hover:text-indigo-700">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-16">
        <p className="text-gray-500">
          Copyright &copy; {new Date().getFullYear()} AIRBOOK
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
