import Logo from "../../assets/logo.gif";
import { useState, useEffect } from "react";

function Header() {
  const sloganText = "Alcance novas alturas com a airplane";
  // const [numero, setnumero] = useState<number>(0);
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
      <header className="p-8 flex h-20 w-full items-center justify-between font-custom border-b-[0.5px] border-opacity-40 bg-sky-300 border-gray-500">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <img
              className="h-20 hover:scale-125 tensition duration-300"
              src={Logo}
              alt=""
            />
            <span className="text-white ml-6 inline-block">
              {sloganText.split("").map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block text-yellow-200 ${
                    visibleLetters.includes(index) ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500 ease-in-out`}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
          </div>

          <div className="">
            <ol className="flex">
              <li className="cursor-pointer relative hover:scale-110 transition focus:scale-110">
                <span className="hover-underline focus:hover-underline font-custom text-sm text-white hover:text-yellow-200">
                  Home
                </span>
              </li>
              <li className="ml-6 cursor-pointer relative hover:scale-110 transition focus:scale-110">
                <span className="hover-underline focus:hover-underline font-custom text-sm text-white hover:text-yellow-200">
                  Avioes
                </span>
              </li>
              <li className="ml-6 cursor-pointer relative hover:scale-110 transition focus:scale-110">
                <span className="hover-underline focus:hover-underline font-custom text-sm text-white hover:text-yellow-200">
                  Contato
                </span>
              </li>
              <li className="ml-4 cursor-pointer relative hover:scale-110 transition focus:scale-110">
                <span className="hover-underline focus:hover-underline font-custom text-sm text-white hover:text-yellow-200">
                  Sobre nós
                </span>
              </li>
            </ol>
          </div>
        </div>
      </header>
    </>
  );
}

export { Header };
