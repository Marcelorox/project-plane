import { FaEnvelope, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Airplane {
  id: string;
  name: string;
  imageSrc: string;
  price: string;
  description: string;
  speed: string
}

function AirplaneCard(props: Airplane) {
  return (
    <div className="overflow-hidden transition duration-300 bg-white w-[22rem] min-w-[22rem] rounded-lg shadow-lg hover:shadow-xl ml-5 hover:scale-95">
      <div
        className="w-full h-64 bg-center bg-cover"
        style={{ backgroundImage: `url(${props.imageSrc})` }}
      ></div>
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          {props.name}
        </h2>
        <p className="mb-2 text-sm text-gray-500 text-start">
          {props.description}
        </p>
        <p className="mb-2 text-sm text-gray-500 text-start">
          {props.speed}
        </p>
        <div className="flex flex-col items-center justify-between">
          <div className="flex w-full">
            <p className="text-lg font-semibold text-yellow-600">
              ${props.price}
            </p>
          </div>

          <div className="flex mt-4">
            <Link to="/contact">
              <button className="flex items-center mr-3 text-gray-800 transition-colors hover:text-yellow-600 focus:outline-none">
                <FaEnvelope className="w-5 h-5" />
                <span className="ml-3 text-sm">Entrar em contato</span>
              </button>
            </Link>

            <button className="flex items-center text-gray-800 transition-colors hover:text-yellow-600 focus:outline-none">
              <FaSearch className="w-5 h-5" />
              <span className="ml-1 text-sm" id={props.id}>
                Ver mais detalhes
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirplaneCard;
