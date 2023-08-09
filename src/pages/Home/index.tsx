import { Airplanes } from "./airplanesMenu";

function Home() {
  return (
    <>
      <main className="">
        <section className="flex h-full w-772 relative left-0 top-0 z-999 opacity-100">
          <video
            muted
            autoPlay
            loop
            playsInline
            src="//cdn-cf-east.streamable.com/video/mp4/jq7at9.mp4?Expires=1691797620&Signature=Cv0TYewr6gfEKyjJfZX9bEpYZ-FHqKv1TCmFlx-vKlPJy3oHJNWfozIgGfMCIIDSDA08fMVplLEDnNYXt-hS4hyhEwHnH67yFuN6Q5W7BuHyH9WSOiJI66amRWk30mPwFUaPftsdB3fJmK8TUqIza~Uqq46SXUpmwieGY0SDWKgK-GSPSDXW80xA-XYonaqDQdN2nLSrQbhKLufCpsmBD21VS1y~S6-lb2Bih~OybSOz~odxzfvCUGe4KlfgH9Csk3yEzlOOVLRurof-mEXOQZDnHHlXQdPUW9PgSgC~eJtsV5dCAn8Mm8w8N0JKP3kF5ITur0R~wIoiJxlmCJ~nog__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"
            className="h-100vh w-[100%]"
          ></video>
          <div className=" flex justify-center absolute w-full h-full bg-black opacity-70 z-10">
            <div className=" items-center text-sm text-center mt-[28vh] flex flex-col text-white gap-4">
              <p className="max-w-md font-mono">
                ELITE JETS LUXURY PRIVATE JET COMPANY. UNPARALLELED AMENITIES,
                PREMIUM SERVICE, SMOOTH FLIGHTS. CONTACT US TODAY.
              </p>
              <button className="flex w-[96%] justify-center border-[1px] p-2 border-yellow-300 inset-yellow-300 hover:bg-yellow-200 hover:text-black transition duration-300">
                CATALOGO
              </button>
            </div>
          </div>
        </section>

        <Airplanes />
      </main>
    </>
  );
}
export default Home;
