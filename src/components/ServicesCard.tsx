import { Button } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

interface Service {
    id: string;
    title: string;
    imageSrc: string;
    imageDescription: string;
    paragraphOne: string;
    paragraphTwo: string;
    buttonText: string;
    buttonLink: string;
}


function ServicesCard(props: Service) {
    return (
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 mb-12" key={props.id}>
            <img style={{ maxHeight: "500px", minWidth: "500px", maxWidth: "800px", width: "100%" }} src={props.imageSrc} alt={props.imageDescription} />
            <div className="w-full flex flex-col justify-start text-left">
                <h2 className="mb-4 text-3xl font-bold w-max text-black">{props.title}</h2>
                <p className="text-lg max-w-[600px] font-light text-black w-max break-words">
                    {props.paragraphOne}
                    <br></br>
                    <br></br>
                    {props.paragraphTwo}
                </p>
                <Link to={props.buttonLink} className="mt-6">
                    <Button

                        colorScheme="yellow"
                        size="lg" // Customize the size as needed
                    >
                        {props.buttonText}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default ServicesCard
