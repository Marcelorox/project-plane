import { Carousel } from "react-responsive-carousel";
import rimaPlane4 from "../../assets/kingair.jpeg"
import rimaPlane3 from "../../assets/private-jet.jpg"
import rimaPlane2 from "../../assets/grand-caravan.jpg"
import rimaPlane from "../../assets/rimaplane.webp"
import FooterPages from "../../components/Footer/FooterPages";
import { Header } from "../../components/Header";
import ServicesCard from "../../components/ServicesCard";

const services = [
  {
    id: "1",
    title: "PRIVATE JET SALES",
    imageSrc: rimaPlane,
    imageDescription: "Eleve Jet",
    paragraphOne: "Eleve is a specialized company in the sale of executive aircraft, with over 20 years of experience in the aviation market.",
    paragraphTwo: "Our team of experts is dedicated to helping you find the perfect private jet to meet your unique travel needs. Whether you're a business executive or a discerning traveler, we have the right aircraft for you.",
    buttonText: "View our planes",
    buttonLink: "/catalog"
  },
  {
    id: "2",
    title: "AIRCRAFT SHARING",
    imageSrc: rimaPlane2,
    imageDescription: "Eleve Jet",
    paragraphOne: "Eleve offers aircraft sharing services, allowing you to enjoy the benefits of private aviation without the full ownership costs.",
    paragraphTwo: "With our aircraft sharing program, you can access a fleet of luxurious jets and travel in style to your desired destinations. Experience the convenience and comfort of private jet travel like never before.",
    buttonText: "Contact us",
    buttonLink: "/contact"
  },
  {
    id: "3",
    title: "DELUXE AIR TRAVEL",
    imageSrc: rimaPlane3,
    imageDescription: "Eleve Jet",
    paragraphOne: "Experience the epitome of luxury and comfort with Eleve's deluxe air travel services.",
    paragraphTwo: "Our deluxe flights are designed to cater to the most discerning travelers, offering unparalleled levels of service and sophistication. Elevate your travel experience with Eleve.",
    buttonText: "Contact us",
    buttonLink: "/contact"
  },
  {
    id: "4",
    title: "PRE-PURCHASE CONSULTING",
    imageSrc: rimaPlane4,
    imageDescription: "Rima Jet",
    paragraphOne: "Eleve provides expert pre-purchase consultancy services to guide you through the process of acquiring your dream aircraft.",
    paragraphTwo: "Our consultants have in-depth knowledge of the aviation industry and will ensure that your aircraft acquisition is a smooth and informed decision. Trust Eleve for all your pre-purchase needs.",
    buttonText: "Contact us",
    buttonLink: "/contact"
  }
]


function ServicesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <section className="py-16 text-white bg-black">
          <div className="container mx-auto text-center">
            <h1 className="mt-[72px] text-5xl font-bold">Services</h1>
            <h2 className="font-light mt-4 text-xl">At Eleve we offer a series of Services to aid you with all your aviation related needs</h2>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto mb-6">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              interval={6600}
            >
              {services.map(item => (
                <ServicesCard buttonLink={item.buttonLink} buttonText={item.buttonText} id={item.id} title={item.title} imageSrc={item.imageSrc} imageDescription={item.imageDescription} paragraphOne={item.paragraphOne} paragraphTwo={item.paragraphTwo}/>
              ))}
            </Carousel>
          </div>
        </section>
        <div className="">
          <FooterPages />
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
