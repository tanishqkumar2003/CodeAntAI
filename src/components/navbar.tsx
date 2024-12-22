"use client";

import { useState } from "react";
import { Menu, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { bottomRoutes, routes } from "./sidebar/sidebar-routes";
import UserDropdown from "./user-dropdown";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const expandNavbar = () => {
    setIsExpanded((prev) => !prev);
  };

  const allRoutes = routes.concat(bottomRoutes);

  return (
    <div className="fixed top-0 bg-[#FFFFFF] border-b p-4 flex flex-col items-start gap-6 w-full z-[9999]">
      <div className="flex items-center justify-between w-full">
        <Link href={"/dashboard"}>
          <Image
            src={"/codeant-logo.png"}
            alt="card"
            width={122}
            height={26}
            className=""
          />
        </Link>

        <button onClick={expandNavbar}>
          {isExpanded ? (
            <Plus className="h-6 w-6 rotate-45" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="w-full">
          <UserDropdown />

          <div className="flex flex-col items-start ease-in transition-all duration-300 pt-3">
            {allRoutes.map((route, index) => (
              <div
                key={index}
                className="flex items-center px-2 py-2 text-[16px] font-semibold"
              >
                <route.icon className="h-4 w-4 mr-2" /> {route.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
