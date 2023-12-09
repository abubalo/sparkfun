import { useState } from "react";
import { Link } from "react-router-dom";
import LinkButton from "./button/LinkButton";
import UserDropdownMenu from "@components/shared/ui/dropdown/UserDropdownMenu";
import useAuth from "@utils/hooks/useAuth";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useAuth();

  return (
    <>
      <header
        className="text-white bg-transparent "
      >
        <nav
          className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="flex gap-4">
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="sparkfun"
              />
              <h2 className="text-xl font-bold text-white">Sparkfun</h2>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`z-20 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 ${isOpen ? "text-white" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">isOpen main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {!user ? (
              <UserDropdownMenu />
            ) : (
              <LinkButton href="/login">
                Log in <span aria-hidden="true">&rarr;</span>
              </LinkButton>
            )}
          </div>
        </nav>
        {/* <!-- Mobile menu, show/hide based on menu isOpen state. --> */}
        <div
          className={`relative md:hidden inset-y-0 transition-all ease-in-out ${
            isOpen ? "right-0" : "right-[-100%]"
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
          {/* <div className="fixed inset-0 z-10"></div> */}
          <div
            className={`fixed inset-y-0  z-10 w-full px-6 py-6 overflow-y-auto bg-purple-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 `}
          >
            <div className="flow-root mt-6 ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  <div className="-mx-3">
                    <Link
                      to="#"
                      className="block px-3 py-2 -mx-3 text-base leading-7 rounded-lg font-sesemibold hover:bg-gray-50"
                    >
                      Features
                    </Link>
                    <Link
                      to="#"
                      className="block px-3 py-2 -mx-3 text-base leading-7 rounded-lg font-sesemibold hover:bg-gray-50"
                    >
                      Marketplace
                    </Link>
                    <Link
                      to="#"
                      className="block px-3 py-2 -mx-3 text-base leading-7 rounded-lg font-sesemibold hover:bg-gray-50"
                    >
                      Company
                    </Link>
                  </div>
                  <div className="py-6">
                    <Link
                      to="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-sesemibold leading-7 bg-primary hover:bg-primary/50"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
