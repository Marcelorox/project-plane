import { Link } from "react-router-dom";
import Logo from "../../assets/eleve-black.png"
import { useState, useEffect } from "react";
function Header() {
  const sloganText = "Elevate your journey with Eleve";
  const [visibleLetters, setVisibleLetters] = useState<number[]>([]);

  useEffect(() => {
    if (visibleLetters.length === sloganText.length) {
      return;
    }

    const interval = setInterval(() => {
      setVisibleLetters((prevVisibleLetters) => {
        if (prevVisibleLetters.length === sloganText.length) {
          clearInterval(interval);
          return prevVisibleLetters;
        }
        return [...prevVisibleLetters, prevVisibleLetters.length];
      });
    }, 170);

    return () => clearInterval(interval);
  }, [visibleLetters, sloganText.length]);

  return (
    <>
      <header className="flex md:flex-row sm:flex sm:flex-col sm:h-[8rem] fixed z-50 items-center md:justify-between sm:justify-normal w-full md:h-20 md:p-8 sm:p-1 text-gray-900 bg-white border-b-[1px] font-custom">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="h-16 transition-transform duration-300 hover:scale-105 bg-black rounded-[50%]"
              src={Logo}
              alt=""
            />
          </Link>
          <span className="inline-block ml-6 tracking-wide text-white md:text-lg sm:text-sm">
            {sloganText.split("").map((letter, index) => (
              <span
                key={index}
                className={`inline-block text-gray-900 ${
                  visibleLetters.includes(index) ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 ease-in-out`}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
        </div>

        <div className="flex space-x-8 font-sans text-base">
          <span className="text-[14px] md:text-base transition duration-300 cursor-pointer hover-underline hover:scale-110">
            <Link to={`/`}>HOME</Link>
          </span>
          <span className="text-[14px] md:text-base transition duration-300 cursor-pointer hover-underline hover:scale-110">
            <Link to={`/services`}>SERVICES</Link>
          </span>
          <span className="text-[14px] md:text-base transition duration-300 cursor-pointer hover-underline hover:scale-110">
            <Link to={`/catalog`}>CATALOG</Link>
          </span>
          <span className="text-[14px] md:text-base transition duration-300 cursor-pointer hover-underline hover:scale-110">
            <Link to={`/contact`}>CONTACT</Link>
          </span>
          <span className="text-[14px] md:text-base transition duration-300 cursor-pointer hover-underline hover:scale-110">
            <Link to={`/about-us`}>ABOUT US</Link>
          </span>
        </div>
      </header>
    </>
  );
}

export { Header };
