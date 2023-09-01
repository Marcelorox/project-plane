import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { AboutUsHomePage } from "../aboutUs";
import { DescribeHomePage } from "../aboutUs/describe";
import { Airplanes } from "./airplanesMenu";

function Home() {
  return (
    <>
      <main className="">
        <section className="relative top-0 left-0 flex w-full h-full mt-16 opacity-100 z-999">
          <div className="video-container">
            <video
              muted
              autoPlay
              loop
              playsInline
              src="https://aboveaviation.aero/wp-content/uploads/2022/10/above-aviation.mp4"
            ></video>
          </div>
          <div className="absolute z-10 flex justify-center w-full h-full bg-black opacity-50">
            <div className=" items-center text-sm text-center mt-[28vh] flex flex-col text-white gap-4">
              <p className="max-w-md font-mono font-bold">
                ELITE JETS LUXURY PRIVATE JET COMPANY. UNPARALLELED AMENITIES,
                PREMIUM SERVICE, SMOOTH FLIGHTS. CONTACT US TODAY.
              </p>
              <Link
                className="flex w-[96%] justify-center border-[1px] p-2 border-gray-900 inset-yellow-300 hover:bg-yellow-200 hover:text-black transition duration-300"
                to={`/catalog`}
              >
                <button className="">CATALOGO</button>
              </Link>
            </div>
          </div>
        </section>
        <AboutUsHomePage />
        <DescribeHomePage />
        <Airplanes />
        <Footer />
      </main>
    </>
  );
}
export default Home;
