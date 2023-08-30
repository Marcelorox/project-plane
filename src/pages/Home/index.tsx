import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { AboutUsHomePage } from "../aboutUs";
import { DescribeHomePage } from "../aboutUs/describe";
import { Airplanes } from "./airplanesMenu";

function Home() {
  return (
    <>
      <main className="">
        <section className="relative top-0 left-0 flex h-full mt-16 opacity-100 w-772 z-999">
          <video
            muted
            autoPlay
            loop
            playsInline
            src="//cdn-cf-east.streamable.com/video/mp4/jq7at9.mp4?Expires=1691797620&Signature=Cv0TYewr6gfEKyjJfZX9bEpYZ-FHqKv1TCmFlx-vKlPJy3oHJNWfozIgGfMCIIDSDA08fMVplLEDnNYXt-hS4hyhEwHnH67yFuN6Q5W7BuHyH9WSOiJI66amRWk30mPwFUaPftsdB3fJmK8TUqIza~Uqq46SXUpmwieGY0SDWKgK-GSPSDXW80xA-XYonaqDQdN2nLSrQbhKLufCpsmBD21VS1y~S6-lb2Bih~OybSOz~odxzfvCUGe4KlfgH9Csk3yEzlOOVLRurof-mEXOQZDnHHlXQdPUW9PgSgC~eJtsV5dCAn8Mm8w8N0JKP3kF5ITur0R~wIoiJxlmCJ~nog__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"
            className="h-100vh w-[100%]"
          ></video>
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
