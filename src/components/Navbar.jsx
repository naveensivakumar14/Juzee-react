// Navbar Component
function Navbar({ bgColor }) {
    return (
      <div className={`flex justify-between items-center ${bgColor} py-4 px-4 md:px-14`}>
        <h1 className=" text-2xl font-bold py-2 px-4">Juzee</h1>
        <ul className="hidden md:flex md:gap-14 md:text-lg font-semibold">
          <li>Home</li>
          <li>Products</li>
          <li>Clients</li>
          <li>Contact</li>
        </ul>
        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    );
  }
  export default Navbar;
  