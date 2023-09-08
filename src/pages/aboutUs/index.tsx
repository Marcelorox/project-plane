import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  PopoverTrigger,
} from "@chakra-ui/react";

// import { BsAirplaneEngines } from "react-icons/bs";

function AboutUsHomePage() {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <>
      <div className="flex w-full sm:p-8 p-[4rem] bg-gray-900 md:items-center sm:flex-col sm:justify-center md:flex-row md:justify-around h-max ">
        <div className="md:flex sm:justify-center sm:hidden">
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Button>Desires</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader fontWeight="semibold">
                Popover placement
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                As a purveyor of luxurious, technologically advanced, and
                stunningly beautiful aircraft.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>

        {/* <div
            className="flex justify-center text-yellow-500 transition duration-300 hover:scale-125"
            onClick={scrollToTop}
          >
            <BsAirplaneEngines />
          </div> */}

        <div className="flex text-left text-gray-400 sm:justify-center">
          <p className="text-lg italic max-w-[30rem]  md:mt-0 leading-relaxed">
            Discover a new era of customer service where advanced technology
            harmonizes with unparalleled client focus.
          </p>

          {/* <div
            className="text-yellow-500 transition duration-300 hover:scale-125"
            onClick={scrollToTop}
          >
            <BsAirplaneEngines />
          </div> */}
        </div>
        <div className="md:flex sm:justify-center sm:hidden">
          <Popover placement="bottom-start">
            <PopoverTrigger>
              <Button>About</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader fontWeight="semibold">
                Popover placement
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                We are a company that aims to bring the very best to all our
                customers, meeting their expectations.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
}
export { AboutUsHomePage };
