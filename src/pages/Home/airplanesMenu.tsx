import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import AirplaneCard from "../../components/AirPlaneCard";
import image from "../../assets/aviao.jpg";

function Airplanes() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    const nextIndex = currentCardIndex + 1;
    if (nextIndex < airplaneCards.length) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };
  console.log(currentCardIndex);

  const handlePreviousCard = () => {
    const previousIndex = currentCardIndex - 1;
    if (previousIndex >= 0) {
      setCurrentCardIndex(previousIndex);
    }
  };

  const airplaneCards = [
    {
      name: "Antonov An-124 Ruslan.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      imageSrc: image,
      price: "5.000.000",
    },
    {
      name: "Antonov An-124 Ruslan.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      imageSrc: image,
      price: "5.000.000",
    },
    {
      name: "Antonov An-124 Ruslan.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      imageSrc: image,
      price: "5.000.000",
    },
    {
      name: "Antonov An-124 Ruslan.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      imageSrc: image,
      price: "5.000.000",
    },
  ];

  return (
    <>
      <div className="flex flex-col h-[100vh] w-[100vw] bg-gray-900 items-center">
        <div className="relative flex flex-col items-center mt-16 ">
          <div className="">
            <h1 className="text-white">PLANES</h1>
          </div>

          <div className="flex mt-24 max-w-[88vw] relative overflow-hidden">
            <div
              className="flex transition-all duration-300 ease-in-out"
              style={{ marginLeft: `-${currentCardIndex * 100}%` }}
            >
              {airplaneCards.map((card, index) => (
                <AirplaneCard
                  key={index}
                  name={card.name}
                  description={card.description}
                  imageSrc={card.imageSrc}
                  price={card.price}
                />
              ))}
            </div>
          </div>
          <AiOutlineArrowLeft
            onClick={handlePreviousCard}
            className={`text-white absolute left-[1px] text-2xl cursor-pointer hover:text-gray-300 transition ${
              currentCardIndex === 0 ? "hidden" : "block"
            }`}
          />
          <AiOutlineArrowRight
            onClick={handleNextCard}
            className={`text-white text-2xl cursor-pointer absolute right-[1px] hover:text-gray-300 transition ${
              currentCardIndex === airplaneCards.length - 1
                ? "hidden"
                : "block cursor-pointer"
            }`}
          />
        </div>
      </div>
    </>
  );
}

export { Airplanes };