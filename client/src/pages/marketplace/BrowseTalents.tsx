// import SearchFilter from "@/components/shared/ui/search/SearchFilter";
import { img1, img2, img3, img4, img5 } from "@/components/Temp";
import ProfilePicture from "@/components/user/profilePicture/ProfilePicture";
import BrowseTalentCard from "./BrowseTalentCard";

const BrowseTalents = () => {
  const categories = ["Birthday", "Wedding Aniversary", "Roast", "Others"];

  // const filter

  return (
    <main className="container mx-auto md:space-y-16">
      <div>
        <h2 className="text-2xl font-bold">Explore</h2>
        <div className="flex gap-10 justify-center ">
          {categories.map((category) => (
            <div className="flex flex-col items-center text-center gap-3">
              <ProfilePicture />
              <div>
                <p className="font-medium">{category}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <SearchFilter /> */}
      </div>
      <div className="grid  grid-cols-2 mt-6 h-full gap-6 md:grid-cols-3">
        <BrowseTalentCard
          name="John Smith"
          title="Comedian"
          src={img1}
          userUrl={"johnsmith"}
          url="adjjas"
          stars={5}
        />
        <BrowseTalentCard
          name="Ruben Gasslow"
          title="Signer"
          src={img2}
          userUrl={"rubengasslow"}
          url="dffs"
          stars={5}
        />
        <BrowseTalentCard
          name="Jora Allan"
          title="Artist"
          src={img3}
          userUrl={"joraallan"}
          url="sdfsd"
          stars={5}
        />
        <BrowseTalentCard
          name="Tope Bose"
          title="Reality TV"
          src={img4}
          userUrl={"topebose"}
          url="bbdsfvsge"
          stars={5}
        />
        <BrowseTalentCard
          name="Lilla Greenwood"
          title="Comedian"
          src={img5}
          userUrl={"johnsmith"}
          url="gbrfdfgf"
          stars={5}
        />
      </div>
    </main>
  );
};

export default BrowseTalents;
