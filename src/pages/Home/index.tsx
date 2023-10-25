import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { DescribeHomePage } from "../aboutUs/describe";
import { Airplanes } from "./airplanesMenu";
import LuxurySection from "../../components/LuxurySession";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Video from "../../assets/hero.mp4";
import Logo from "../../assets/eleve-black.png"

function Home() {
  const boxVariant = {
    hidden: {
      opacity: 0,
      z: -100,
    },
    visible: {
      opacity: 1,
      z: 0,
      transition: {
        duration: 2,
      },
    },
  };
  const buttonVariant = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <>
      <main>
        <section className="relative top-0 left-0 flex w-full h-full opacity-100 sm:mt-28 md:mt-20 z-999">
          <div className="video-container">
            <video
              muted
              autoPlay
              loop
              playsInline
              src={Video}
            ></video>
          </div>

          <div className="absolute z-10 flex justify-center w-full h-full bg-black opacity-50">
            <div className="items-center text-md text-center sm:mt-[rem] md:mt-[20vh] flex flex-col text-white gap-4">
              <p className="mt-[30px] max-w-md font-mono font-bold max-sm:text-sm">
                <motion.div
                  className="box mb-12"
                  ref={ref}
                  variants={boxVariant}
                  initial="hidden"
                  animate={control}
                >
                  <div
                    className="w-full h-32 bg-center bg-cover"
                    style={{ backgroundImage: `url(${Logo})` }}
                  ></div>
                </motion.div>
                <motion.div
                  className="box"
                  ref={ref}
                  variants={boxVariant}
                  initial="hidden"
                  animate={control}
                >
                  ELITE JETS LUXURY PRIVATE JET COMPANY. UNPARALLELED AMENITIES,
                  PREMIUM SERVICE, SMOOTH FLIGHTS. CONTACT US TODAY.
                </motion.div>
              </p>

              <motion.div
                ref={ref}
                className="box cursor-pointer flex w-[96%] justify-center border-[1px] p-2 border-gray-900 inset-yellow-300 hover:bg-yellow-200 hover:text-black transition duration-300"
                variants={buttonVariant}
                initial="hidden"
                animate={control}
              >
                <Link to={`/catalog`}>
                  <button>OUR PLANES</button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/*<AboutUsHomePage />*/}
        <DescribeHomePage />
        <Airplanes />
        <LuxurySection />
        <Footer />
      </main>
    </>
  );
}
export default Home;
