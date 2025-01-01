"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./logo.png";
import { ProgressBarLink } from "@/app/progress-bar";

const navigation = [
  { name: "Homepage", href: "/" },
  { name: "All Heroes", href: "/heroes" },
  { name: "Equipment", href: "/equipment" },
  { name: "Gallery List", href: "/gallery-list" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <nav className="fixed top-0 left-0 start-0 bg-midnight w-full z-40">
      <div className="container mx-auto px-2 relative flex items-center">
        {/* Mobile menu button */}
        <div className="relative z-10 inset-y-0 left-0 flex items-center sm:hidden">
          <button
            onClick={() => setOpenSidebar(!openSidebar)}
            className="relative inline-flex justify-center rounded-md p-2 text-soft-white hover:bg-midnight focus:outline-none focus:ring-2 focus:ring-inset focus:ring-soft-white"
          >
            {openSidebar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Desktop menu */}
        <div className="sm:hidden absolute top-0 inset-x-0 h-14 z-0 flex flex-1 items-center justify-center">
          <div className="flex flex-shrink-0 items-center">
            <Image src={Logo} alt="Logo Z4FL" className="h-8 w-auto" />
          </div>
        </div>
        <div className="hidden sm:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Image src={Logo} alt="Logo Z4FL" className="h-8 w-auto" />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <ProgressBarLink
                  key={item.name}
                  href={item.href}
                  className={`${
                    pathName === item.href ||
                    (pathName.startsWith("/heroes/") && item.href === "/heroes")
                      ? "bg-highlight text-midnight"
                      : "text-soft-white hover:bg-info"
                  } block p-3 text-base font-dinnext uppercase font-bold`}
                >
                  {item.name}
                </ProgressBarLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      {openSidebar && (
        <div className="sm:hidden">
          <div className="space-y-1 p-2 pb-3">
            {navigation.map((item) => (
              <ProgressBarLink
                key={item.name}
                href={item.href}
                className={`${
                  pathName === item.href ? "bg-highlight" : "hover:bg-info"
                } text-soft-white block rounded-md px-3 py-2 text-lg font-dinnext font-medium`}
                aria-current={pathName === item.href ? "page" : undefined}
              >
                {item.name}
              </ProgressBarLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
