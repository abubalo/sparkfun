import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <header className="bg-transparent text-whiteite">
        <nav
          className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">SparkFun</span>
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={()=> setIsOpen(!isOpen)}
            >
              <span className="sr-only">isOpen main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
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
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="relative">
              <button
                type="button"
                className="flex items-center text-sm leading-6 font-sesemibold gap-x-1"
                aria-expanded="false"
              >
                Product
                <svg
                  className="flex-none w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              {/* 
        <!--
          'Product' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
        --> */}
              <div className={`absolute ${isOpen ? "block" : "hidden"} z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5`}>
                <div className="p-4">
                  <div className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50">
                    <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                      <svg
                        className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <Link to="#" className="block font-sesemibold">
                        Analytics
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">
                        Get a better understanding of your traffic
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50">
                    <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                      <svg
                        className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <Link to="#" className="block font-sesemibold">
                        Engagement
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">
                        Speak directly to your customers
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50">
                    <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                      <svg
                        className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <Link to="#" className="block font-sesemibold">
                        Security
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">
                        Your customers’ data will be safe and secure
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50">
                    <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                      <svg
                        className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <Link to="#" className="block font-sesemibold">
                        Integrations
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">
                        Connect with third-party tools
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50">
                    <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                      <svg
                        className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <Link to="#" className="block font-sesemibold">
                        Automations
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">
                        Build strategic funnels that will convert
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <Link
                    to="#"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-sesemibold leading-6 hover:bg-gray-100"
                  >
                    <svg
                      className="flex-none w-5 h-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Watch demo
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-sesemibold leading-6 hover:bg-gray-100"
                  >
                    <svg
                      className="flex-none w-5 h-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Contact sales
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="#"
              className="text-sm leading-6 text-white font-white semibold"
            >
              Features
            </Link>
            <Link
              to="#"
              className="text-sm leading-6 text-white font-white semibold"
            >
              Marketplace
            </Link>
            <Link
              to="#"
              className="text-sm leading-6 text-white font-white semibold"
            >
              Company
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="#"
              className="text-sm leading-6 text-white font-white semibold"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        {/* <!-- Mobile menu, show/hide based on menu isOpen state. --> */}
        <div className={`relative md:hidden inset-y-0 transition-all ease-in-out ${isOpen ? "right-0" : "right-[-600px]"}`} role="dialog" aria-modal="true">
          {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
          <div className="fixed inset-0 z-10"></div>
          <div className={`fixed inset-y-0  z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 `}>
            <div className="flex items-center justify-between">
              <Link to="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={()=> setIsOpen(!isOpen)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flow-root mt-6 ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  <div className="-mx-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-sesemibold leading-7 text-white hover:bg-gray-50"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                      onClick={()=> setIsOpen(!isOpen)}
                    >
                      Product
                      {/* <!--
                  Expand/collapse icon, toggle classNamees based on menu isOpen state.

                  isOpen: "rotate-180", Closed: ""
                --> */}
                      <svg
                        className="flex-none w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                    <div className="mt-2 space-y-2" id="disclosure-1">
                      <Link
                        to="#"
                        className="block py-2 pl-6 pr-3 text-sm leading-7 rounded-lg text-whiteite font-sesemibold hover:bg-gray-50"
                      >
                        Analytics
                      </Link>
                      <Link
                        to="#"
                        className="block py-2 pl-6 pr-3 text-sm leading-7 rounded-lg text-whiteite font-sesemibold hover:bg-gray-50"
                      >
                        Engagement
                      </Link>
                      <Link
                        to="#"
                        className="block py-2 pl-6 pr-3 text-sm leading-7 rounded-lg text-whiteite font-sesemibold hover:bg-gray-50"
                      >
                        Security
                      </Link>
                      <Link
                        to="#"
                        className="block py-2 pl-6 pr-3 text-sm leading-7 rounded-lg text-whiteite font-sesemibold hover:bg-gray-50"
                      >
                        Integrations
                      </Link>
                      <Link
                        to="#"
                        className="block py-2 pl-6 pr-3 text-sm leading-7 rounded-lg text-whiteite font-sesemibold hover:bg-gray-50"
                      >
                        Automations
                      </Link>
                      <Link
                        to="#"
                        className="block py-2 pl-6 pr-3 text-sm leading-7 rounded-lg text-whiteite font-sesemibold hover:bg-gray-50"
                      >
                        Watch demo
                      </Link>
                      <Link
                        to="#"
                        className="block py-2 pl-6 pr-3 text-sm leading-7 rounded-lg text-whiteite font-sesemibold hover:bg-gray-50"
                      >
                        Contact sales
                      </Link>
                    </div>
                  </div>
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
      </header>
    </>
  );
};

export default Header;
