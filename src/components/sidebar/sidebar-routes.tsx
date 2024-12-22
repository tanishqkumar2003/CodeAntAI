"use client";

import { useState } from "react";
import {
  BookText,
  Cloud,
  CodeXml,
  Home,
  LogOut,
  Phone,
  Settings,
} from "lucide-react";

import SidebarItem from "./sidebar-item";

export const routes = [
  {
    icon: Home,
    label: "Repositories",
    href: "#",
  },
  {
    icon: CodeXml,
    label: "AI Code Review",
    href: "#",
  },
  {
    icon: Cloud,
    label: "Cloud Security",
    href: "#",
  },
  {
    icon: BookText,
    label: "How to Use",
    href: "#",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "#",
  },
];

export const bottomRoutes = [
  {
    icon: Phone,
    label: "Support",
    href: "#",
  },
  {
    icon: LogOut,
    label: "Logout",
    href: "#",
  },
];

const SidebarRoutes = () => {
  const [active, setActive] = useState<string>("Repositories");

  return (
    <div className="flex flex-col justify-between h-full w-full px-4">
      <div className="flex flex-col gap-1">
        {routes.map((route, index) => (
          <SidebarItem
            key={index}
            active={active}
            setActive={setActive}
            label={route.label}
            icon={route.icon}
            href={route.href}
          />
        ))}
      </div>

      <div className="flex flex-col gap-1">
        {bottomRoutes.map((route, index) => (
          <SidebarItem
            key={index}
            active={active}
            setActive={setActive}
            label={route.label}
            icon={route.icon}
            href={route.href}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarRoutes;
