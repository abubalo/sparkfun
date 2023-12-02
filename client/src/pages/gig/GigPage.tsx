import GigSidePanel from "@components/gigs/GigSidePanel";
import GigDescription from "@components/gigs/GigDescription";
import VideoPlayer from "@components/video/VideoPlayer";
import RecentlyVisited from "@components/gigs/RecentlyVisited";
import GigCard from "@components/gigs/GigCard";
import { setGigId } from "@utils/redux/reducers/gigIdSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const GigPage = () => {
  const dispatch = useDispatch();
  const {gigId} = useParams();
  dispatch(setGigId(gigId));


  return (
    <div className="w-full p-4 md:flex md:w-4/5 md:gap-10 md:mx-auto">
      <div className="space-y-8 md:basis-4/5 md:w-max">
        <div className="w-full">
          <VideoPlayer
            src={
              "https://media.gettyimages.com/id/1149058288/video/diverse-group-of-hipster-friends-dance-the-night-away-on-downtown-austin-street-corner-as.mp4?s=mp4-640x640-gi&k=20&c=wVLL7QBo1a-Z4CMzYqwTEIzgbQcZAPtfGqxgCnbrfCk="
            }
          />
        </div>
        <GigDescription />
        <GigCard price={50} />
        <RecentlyVisited />
      </div>
      <div className="">
        <GigSidePanel />
      </div>
    </div>
  );
};

export default GigPage;
