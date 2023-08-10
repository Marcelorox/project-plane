import Logo from "../../assets/logo.gif";
import { useState, useEffect } from "react";

function Header() {
  const sloganText = "Elevate your journey with Airplane";
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
      <header className="flex items-center justify-between w-full h-20 p-8 text-white bg-gray-900 border-b-[1px] font-custom">
        <div className="flex items-center">
          <img
            className="h-16 transition-transform duration-300 hover:scale-125"
            src={Logo}
            alt=""
          />
          <span className="inline-block ml-6 text-lg tracking-wide text-white">
            {sloganText.split("").map((letter, index) => (
              <span
                key={index}
                className={`inline-block text-gray-300 ${
                  visibleLetters.includes(index) ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 ease-in-out`}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
        </div>

        <div className="flex space-x-8 font-sans text-base">
          <span className="transition duration-300 cursor-pointer hover-underline hover:text-white hover:scale-110">
            Home
          </span>
          <span className="transition duration-300 cursor-pointer hover-underline hover:text-white hover:scale-110">
            Aircraft
          </span>
          <span className="transition duration-300 cursor-pointer hover-underline hover:text-white hover:scale-110">
            Contact
          </span>
          <span className="transition duration-300 cursor-pointer hover-underline hover:text-white hover:scale-110">
            About Us
          </span>
        </div>
      </header>
    </>
  );
}

export { Header };
