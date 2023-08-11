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
  return (
    <>
      <div className="flex items-center justify-around w-full bg-gray-900 border-b-2 h-52">
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
        <div className="text-yellow-300 transition duration-300 hover:scale-125">
          <BsAirplaneEngines />
        </div>

        <div className="max-w-[28rem] text-left text-gray-400">
          <p className="leading-relaxed">
            Discover a new era of customer service where advanced technology
            harmonizes with unparalleled client focus.
          </p>
        </div>

        <div className="text-yellow-300 transition duration-300 hover:scale-125">
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
