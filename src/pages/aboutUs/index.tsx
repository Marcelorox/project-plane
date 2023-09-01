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

import { BsAirplaneEngines } from "react-icons/bs";

function AboutUsHomePage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="flex items-center justify-around w-full bg-gray-900 h-52">
        <div>
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
        <div
          className="text-yellow-500 transition duration-300 hover:scale-125"
          onClick={scrollToTop}
        >
          <BsAirplaneEngines />
        </div>

        <div className="max-w-[30rem] text-left text-gray-400">
          <p className="text-lg italic leading-relaxed">
            Discover a new era of customer service where advanced technology
            harmonizes with unparalleled client focus.
          </p>
        </div>

        <div
          className="text-yellow-500 transition duration-300 hover:scale-125"
          onClick={scrollToTop}
        >
          <BsAirplaneEngines />
        </div>
        <div>
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
