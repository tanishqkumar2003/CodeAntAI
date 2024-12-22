import { Database } from "lucide-react";

import { cn } from "@/lib/utils";

const RepositoryRow = ({
  index,
  maxLength,
  title,
  visibility,
  techStack,
  size,
  updatedAt,
}: {
  index: number;
  maxLength: number;
  title: string;
  visibility: string;
  techStack: string;
  size: string;
  updatedAt: string;
}) => {
  return (
    <div
      className={cn(
        "p-4 lg:p-6 border-t border-[#D5D7DA] flex items-center justify-start hover:bg-[#F5F5F5] hover:cursor-pointer transition-all duration-200",
        index == maxLength - 1 && "rounded-b-xl"
      )}
    >
      <div className="flex flex-col items-start gap-3">
        <div className="flex items-center gap-2">
          <h2 className="text-[18px] lg:text-[20px] font-medium text-[#181D27]">
            {title}
          </h2>

          <span className="text-[14px] text-[#175CD3] border bg-[#EFF8FF] border-[#B2DDFF] rounded-full px-2 py-0.5">
            {visibility}
          </span>
        </div>

        <div className="flex items-center gap-5 lg:gap-10 text-[14px] lg:text-[16px]">
          <div>
            {techStack}
            <span className="ml-2 h-2 w-2 inline-flex rounded-full bg-[#1570EF]" />
          </div>

          <div className="flex items-center gap-1">
            <Database className="h-3 w-3" /> {size} KB
          </div>

          <div>Updated {updatedAt} ago</div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryRow;
