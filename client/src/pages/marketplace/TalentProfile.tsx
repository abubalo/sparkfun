import {
  Academic,
  Fire,
  Gift,
  ChatIcon,
  QuestionMark,
  Star,
  StarSolid,
  Rocket,
} from "@/components/shared/icons/Icons";
import { img3 } from "@/components/Temp";
import ProfilePicture from "@/components/user/profilePicture/ProfilePicture";
import { Link, useLocation } from "react-router-dom";
import TalentProfilePanel from "./TalentProfilePanel";

const TalentProfile = () => {
  const location = useLocation();

  const d = location.pathname.split("/").join(" > ");

  const videoType = [
    { name: "Birthday", icon: <Gift /> },
    { name: "Academic", icon: <Academic /> },
    { name: "PepTalk", icon: <Rocket /> },
    { name: "Advice", icon: <ChatIcon /> },
    { name: "Questions", icon: <QuestionMark /> },
    { name: "Roast", icon: <Fire /> },
    { name: "Other", icon: <Star /> },
  ];

  return (
    <main className="container mx-auto space-y-6">
      <div id="breadcrumb" className="">
        {/* {location.pathname} */}
        <Link to={d}>{d}</Link>
      </div>
      <section className="flex space-x-10">
        <div className="basis-4/5 space-y-8">
          <div className="space-y-3">
            <ProfilePicture src={img3} />
            <h2 className="text-xl font-bold">Alan Cora</h2>
            <p className="text-textColor">Singer</p>
            <p className="flex gap-5">
              <span className="flex">
                4.97 <StarSolid className="text-yellow-500 " />
              </span>
              <span>(200)</span>
            </p>
            <p className="font-medium text-textColor">
              Ricky Tomlinson - send me a request from me, or my character Jim
              Royle in The Royle Family.
            </p>
          </div>
          <div className="space-y-10">
            <h1 className="text-lg font-semibold text-slate-300 md:text-3xl">
              Select video type
            </h1>
            <div className="grid grid-cols-5 gap-6">
              {videoType.map((item, index) => (
                <Link
                key={index}
                  to={`book?occation=${item.name.toLocaleLowerCase()}`}
                  className="w-36 h-36 flex flex-col justify-between p-4  bg-foreground border border-slate-500/30 rounded-lg"
                >
                  {item.icon}
                  <h3 className="text-xl font-bold text-slate-500">
                    {item.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <TalentProfilePanel />
      </section>
      <section id="how-it-works"></section>
      <section id="video-delivery"></section>
      <section id="testimony "></section>
      <section>Recently Viewed</section>
      <section id="fag">
        <h1>Frequently Asked questions</h1>
      </section>
    </main>
  );
};

export default TalentProfile;
