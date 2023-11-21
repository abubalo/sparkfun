import BrowseTalentCard from "@/pages/marketplace/BrowseTalentCard";
import { img1, img3, img5 } from "../Temp";

const RecentlyVisited = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl text-slate-300 font-semibold">Recently Visit</h2>
      <div className="grid  grid-cols-2 h-full gap-6 md:grid-cols-3">
        <BrowseTalentCard
          name="John Smith"
          title="Comedian"
          src={img1}
          userUrl={"johnsmith"}
          url="adjjas"
          stars={5}
        />
        <BrowseTalentCard
          name="John Smith"
          title="Comedian"
          src={img3}
          userUrl={"johnsmith"}
          url="adjjas"
          stars={4.5}
        />
        <BrowseTalentCard
          name="John Smith"
          title="Comedian"
          src={img5}
          userUrl={"johnsmith"}
          url="adjjas"
          stars={4.9}
        />
      </div>
    </div>
  );
};

export default RecentlyVisited;
