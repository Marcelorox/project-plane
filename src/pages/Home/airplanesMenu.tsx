import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import AirplaneCard from "../../components/AirPlaneCard";
import gcImage from "../../assets/grand-caravan.jpg"
import g6000Image from "../../assets/global6000.jpeg"
import g650Image from "../../assets/g650.jpg"
import kaImage from "../../assets/kingair.jpeg"

function Airplanes() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const airplaneCards = [
    {
      id: "1",
      name: "Grand Caravan",
      description: "Alcance de 1.700km",
      speed: "Até 340km/h",
      imageSrc: gcImage,
      price: "5.000.000",
    },
    {
      id: "2",
      name: "Global 6000",
      description: "Alcance de 11.000km",
      speed: "Até 900km/h",
      imageSrc: g6000Image,
      price: "5.000.000",
    },
    {
      id: "3",
      name: "Gulfstream G650",
      description: "Alcance de 13.000km",
      speed: "Até 950km/h",
      imageSrc: g650Image,
      price: "5.000.000",
    },
    {
      id: "4",
      name: "Kingair B200",
      description: "Alcance de 3.200km",
      speed: "Até 520km/h",
      imageSrc: kaImage,
      price: "5.000.000",
    },
  ]

  return (
    <>
      <div className="flex flex-col h-[80vh] w-[100vw] bg-gray-900 items-center">
        <div className="relative flex flex-col items-center mt-16 ">
          <div className="">
            <h1 className="text-white text-4xl">OUR FLEET</h1>
          </div>

          <div className="flex mt-16 max-w-[88vw] relative overflow-hidden">
            <div
              className="flex transition-all duration-300 ease-in-out"
            >
              {airplaneCards.map((card, index) => (
                <AirplaneCard
                  key={index}
                  name={card.name}
                  description={card.description}
                  imageSrc={card.imageSrc}
                  price={card.price}
                  speed={card.speed}
                  id={card.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Airplanes };
