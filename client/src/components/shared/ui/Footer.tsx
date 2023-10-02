import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="m-4 bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}
          <Link to="/" className="hover:underline">
            Sparkfun™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
