import { StarSolid } from "@/components/shared/icons/Icons";
import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  src: string;
  alt?: string;
  name: string;
  url: string;
  userUrl: string;
  title: string;
  stars: number;
};
const BrowseTalentCard: FC<Props> = ({
  src,
  alt = "",
  name,
  title,
  stars,
  url,
  userUrl,
}) => {
  return (
    <Link to={url} className="space-y-2 md:space-y-4  overflow-hidden">
      <div className=" h-auto rounded-md  overflow-hidden">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="bg-cover object-cover aspect-video bg-center"
        />
      </div>
      <div>
        <Link to={`/${userUrl}`} onClick={(e) => e.stopPropagation()}>
          <h1 className="text-xl font-semibold">{name}</h1>
        </Link>
        <div className="flex justify-between">
          <p className="text-textColor">{title}</p>
          <span className="flex gap-1 ">
            {stars}
            <StarSolid className="text-yellow-500"/>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BrowseTalentCard;
