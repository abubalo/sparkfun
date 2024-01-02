import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { img1 } from "../../Temp";

type Props<T = unknown> = {
  src?: string;
  alt?: string;
  className?: string;
  onClick?: (val: T) => T;
  onHover?: (val: T) => T;
};

const ProfilePicture: FC<Props> = ({
  src,
  alt = "",
  className,
  onClick,
  onHover,
}) => {
  className =
    twMerge(`"w-28 h-28 aspect-square overflow-hidden rounded-full bg-primary " ${
      className ?? ""
    }
  `);
  return (
    <div>
      <div className={className} onClick={onClick} onMouseOver={onHover}>
        <img
          src={src ?? img1}
          alt={alt}
          loading="lazy"
          className="bg-cover object-cover aspect-square bg-center"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
