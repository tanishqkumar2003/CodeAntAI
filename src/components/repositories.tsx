import { Plus, RefreshCcw } from "lucide-react";

import { Button } from "./ui/button";

import SearchInput from "./ui/search-input";
import RepositoryRow from "./repository-row";

const repositoriesList = [
  {
    title: "design-system",
    visibility: "Public",
    techStack: "React",
    size: "7320",
    updatedAt: "1 day",
  },
  {
    title: "codeant-ci-app",
    visibility: "Private",
    techStack: "Javascript",
    size: "5871",
    updatedAt: "2 days",
  },
  {
    title: "analytics-dashboard",
    visibility: "Private",
    techStack: "Python",
    size: "4521",
    updatedAt: "5 days",
  },
  {
    title: "mobile-app",
    visibility: "Public",
    techStack: "Swift",
    size: "3096",
    updatedAt: "3 days",
  },
  {
    title: "e-commerece-platform",
    visibility: "Private",
    techStack: "Java",
    size: "6210",
    updatedAt: "6 days",
  },
  {
    title: "blog-website",
    visibility: "Public",
    techStack: "HTML/CSS",
    size: "1876",
    updatedAt: "4 days",
  },
  {
    title: "social-network",
    visibility: "Private",
    techStack: "PHP",
    size: "5432",
    updatedAt: "7 days",
  },
];

const RepositoiresList = () => {
  return (
    <div className="h-full w-full bg-[#FFFFFF] lg:border lg:border-[#E9EAEB] lg:rounded-xl flex flex-col">
      {/* Header with info buttons */}
      <div className="px-4 lg:px-6 py-5 flex flex-col items-start justify-center w-full gap-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-[#181D27]">
              Repositories
            </h1>
            <p className="text-[14px] text-[#414651]">33 total repositories</p>
          </div>

          <div className="space-x-2">
            <Button variant={"outline"}>
              <RefreshCcw className="h-4 w-4" />
              Refresh All
            </Button>

            <Button className="bg-[#1570EF] text-[#FFFFFF] hover:bg-[#1570EF] border-2 border-blue-500/60">
              <Plus className="h-4 w-4" /> Add Repository
            </Button>
          </div>
        </div>

        <SearchInput />
      </div>

      {/* Repositories Row */}
      <div className="flex flex-col">
        {repositoriesList.map((repository, index) => (
          <RepositoryRow
            {...repository}
            key={index}
            index={index}
            maxLength={repositoriesList.length}
          />
        ))}
      </div>
    </div>
  );
};

export default RepositoiresList;
