import { Link } from "react-router-dom";
import Avatar from "@/components/shared/ui/Avatar";
import Dropdown from "@/components/shared/ui/dropdown/Drowpdown";
import { twMerge } from "tailwind-merge";
import { FC } from "react";

type Props = {
  className?: string;
};

const Toggle = () => (
  <Link to="">
    <Avatar />
  </Link>
);

const UserContent: FC<Props> = ({ className }) => {
  const handleLogout = ()=>{
    //implement logut logic
  }
  return (
    <div
      className={twMerge(
        `absolute transform -translate-x-48 z-10 w-80 bg-foreground border-gray-100  rounded-lg  ${className}`
      )}
    >
      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
        <h2 className="text-lg font-semibold">Bonnie Green</h2>
        <div className="font-medium truncate">bonniegreen@gmail.com</div>
      </div>
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="avatarButton"
      >
        <li>
          <Link
            to="/dashboard"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/profile/settings"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Settings
          </Link>
        </li>
        <li>
          <Link
            to="/profile/earnings"
            className="block px-4 py-2 hover-bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Earnings
          </Link>
        </li>
      </ul>
      <div className="py-1 border-t">
        <Link
          to="/"
          onClick={handleLogout}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
};

const UserDropdownMenu = () => {
  return <Dropdown content={<UserContent />} toggle={<Toggle />} />;
};

export default UserDropdownMenu;
