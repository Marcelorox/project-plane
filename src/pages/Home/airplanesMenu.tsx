import AirplaneCard from "../../components/AirPlaneCard";
import image from "../../assets/aviao.jpg";
function Airplanes() {
  return (
    <>
      <div className="flex flex-col h-[100vh] w-[100vw] bg-gray-900 items-center">
        <div className="flex flex-col items-center mt-16">
          <div className="">
            <h1 className="text-white">PLANES</h1>
          </div>
          <div className="flex mt-24 overflow-auto max-w-[88vw]">
            <AirplaneCard
              name="Antonov An-124 Ruslan."
              description="    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque repellat praesentium earum neque eos fuga consectetur, aut debitis ratione a similique aperiam natus tempore nisi maiores? Id tempore porro perspiciatis."
              imageSrc={image}
              price=" 5.000.000"
              key={1}
            />
            <AirplaneCard
              name="Antonov An-124 Ruslan."
              description="    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque repellat praesentium earum neque eos fuga consectetur, aut debitis ratione a similique aperiam natus tempore nisi maiores? Id tempore porro perspiciatis."
              imageSrc={image}
              price=" 5.000.000"
              key={1}
            />
            <AirplaneCard
              name="Antonov An-124 Ruslan."
              description="    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque repellat praesentium earum neque eos fuga consectetur, aut debitis ratione a similique aperiam natus tempore nisi maiores? Id tempore porro perspiciatis."
              imageSrc={image}
              price=" 5.000.000"
              key={1}
            />
            <AirplaneCard
              name="Antonov An-124 Ruslan."
              description="    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque repellat praesentium earum neque eos fuga consectetur, aut debitis ratione a similique aperiam natus tempore nisi maiores? Id tempore porro perspiciatis."
              imageSrc={image}
              price=" 5.000.000"
              key={1}
            />
            <AirplaneCard
              name="Antonov An-124 Ruslan."
              description="    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque repellat praesentium earum neque eos fuga consectetur, aut debitis ratione a similique aperiam natus tempore nisi maiores? Id tempore porro perspiciatis."
              imageSrc={image}
              price=" 5.000.000"
              key={1}
            />
          </div>

          {/* <div className="inline-block w-64 p-6 m-4 bg-white rounded-lg shadow-md"></div> */}
        </div>

        <div className="p-4"></div>
      </div>
    </>
  );
}

export { Airplanes };
