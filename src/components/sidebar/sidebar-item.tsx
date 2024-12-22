"use client";

import { Dispatch, SetStateAction } from "react";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface SidebarItemProps {
  icon: LucideIcon;
  href: string;
  label: string;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

const SidebarItem = ({
  icon: Icon,
  label,
  active,
  setActive,
}: SidebarItemProps) => {
  return (
    <Button
      onClick={() => setActive(label)}
      variant={"sidebar"}
      size={"routes"}
      className={cn(
        "flex items-center justify-start gap-x-2 px-2 border-2 border-transparent",
        active == label &&
          "bg-[#1570EF] text-[#FFFFFF] hover:bg-[#1570EF] border-2 border-blue-500/60"
      )}
    >
      <div className="flex items-center justify-start gap-x-2">
        <Icon
          className={cn("text-[#414651]", active == label && "text-[#FFFFFF]")}
        />

        {label}
      </div>
    </Button>
  );
};

export default SidebarItem;
