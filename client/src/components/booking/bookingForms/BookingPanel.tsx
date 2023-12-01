import { CheckMark } from "@components/shared/icons/Icons";
import ProfilePicture from "@components/user/profilePicture/ProfilePicture";
import { useLocation } from "react-router-dom";

const BookingPanel = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[3];
  return (
    <div className="basis-1/3 ">
      <div className="sticky top-8 space-y-6">
        <div className="flex gap-3">
          <ProfilePicture className="w-20 h-20" />
          <div className="">
            <h2 className="text-lg font-medium">Daren Oslog</h2>
            <p className="text-sm text-textColor">
              Comedian | Actor | TV Personality
            </p>
          </div>
        </div>
        <div className="">
          <div className="max-w-xl mx-auto  my-8">
            <div className="relative w-full flex justify-between items-center md:flex-col">
              {/* <!-- Timeline Step 1 --> */}
              <div className="flex flex-col items-center mb-6 md:flex-row">
                <div className="z-10 border-none w-6 h-6 flex justify-center items-center p-1 aspect-square bg-green-500 border-2 border-green-500 text-3xl rounded-full">
                  <CheckMark />
                </div>
                <div className="ml-4">
                  <h2 className="text-sm font-medium md:font-semibold md:text-lg  ">
                    Pick a Talent
                  </h2>
                  <p className="hidden md:block">
                    Browse thousands of stars offering personalized videos.
                  </p>
                </div>
              </div>

              {/* <!-- Timeline Step 2 --> */}
              <div className="flex flex-col items-center mb-6 md:flex-row">
                <div
                  className={`z-10 w-6 h-6 flex justify-center items-center p-1 aspect-square bg-background border-2 border-green-500 text-3xl rounded-full ${
                    currentPath === "checkout" ? "bg-green-500" : ""
                  }`}
                >
                  <CheckMark />
                </div>
                <div className="ml-4">
                  <h2 className="text-sm font-medium md:font-semibold md:text-lg ">Write your request</h2>
                  <p className="hidden md:block">
                    The more details you give, the more personalized your video
                    will be.
                  </p>
                </div>
              </div>

              {/* <!-- Dashed Line --> */}
              <div className="absolute w-full left-3   border-primary border border-dashed md:h-full md:border-0 md:border-l md:top-10"></div>

              {/* <!-- Timeline Step 3 --> */}
              <div className="flex flex-col items-center mb-6 md:flex-row">
                <div className="z-10 w-6 h-6 flex justify-center items-center p-1 aspect-square bg-background border-2 border-green-500 text-3xl rounded-full">
                  <CheckMark />
                </div>
                <div className="ml-4">
                  <h2 className="text-sm font-medium md:font-semibold md:text-lg ">Review and pay</h2>
                  <p className="hidden md:block">
                    Choose your delivery speed and enter your payment
                    information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPanel;
