import { useState } from "react";
import img1 from "../../../assets/img1.jpg";

const Avatar = () => {
  const [hasAvatar] = useState(true);

  return (
    <div className="p-4">
      {hasAvatar ? (
        <div className="w-10 h-10 aspect-square overflow-hidden rounded-full bg-primary ">
          <img
            id="avatarButton"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            className="bg-cover object-cover aspect-square bg-center"
            src={img1}
            loading="lazy"
            alt="User dropdown"
          />
        </div>
      ) : (
        <div
          className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 "
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
        >
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1 pointer-event-none"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Avatar;
