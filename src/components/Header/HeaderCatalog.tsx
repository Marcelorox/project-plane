import { Link } from "react-router-dom";
import Logo from "../../assets/logo.gif";

function HeaderCatalogPage() {
  return (
    <>
      <header className="flex z-50 items-center justify-between w-[100vw] h-20 p-8 text-white bg-gray-900 border-b-[1px] font-custom">
        <Link to="/">
          <div className="flex items-center">
            <img
              className="h-16 transition-transform duration-300 hover:scale-125"
              src={Logo}
              alt=""
            />
          </div>
        </Link>
        <div className="flex space-x-8 font-sans text-base">
          <span className="transition duration-300 cursor-pointer hover-underline hover:text-white hover:scale-110">
            <Link to={`/`}>Home</Link>
          </span>
          <span className="transition duration-300 cursor-pointer hover-underline hover:text-white hover:scale-110">
            <Link to={`/catalog`}>Catalog</Link>
          </span>
          <span className="transition duration-300 cursor-pointer hover-underline hover:text-white hover:scale-110">
            <Link to={`/contact`}>Contact</Link>
          </span>
          <span className="transition duration-300 cursor-pointer hover-underline hover:text-white hover:scale-110">
            <Link to={`/about-us`}>About Us</Link>
          </span>
        </div>
      </header>
    </>
  );
}

export { HeaderCatalogPage };
