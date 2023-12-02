import { StarSolid } from "@components/shared/icons/Icons";
import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  src: string;
  alt?: string;
  name: string;
  title: string;
  stars: number;
  url: string;
  userUrl: string;
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
    <Link to={url} className="space-y-2 overflow-hidden md:space-y-4">
      <div className="h-auto overflow-hidden rounded-md">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="object-cover bg-center bg-cover aspect-video"
        />
      </div>
      <div>
        <div className="text-xl font-semibold">{name}</div>
        <div className="flex justify-between">
          <p className="text-textColor">{title}</p>
          <span className="flex gap-1">
            {stars}
            <StarSolid className="text-yellow-500" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BrowseTalentCard;
