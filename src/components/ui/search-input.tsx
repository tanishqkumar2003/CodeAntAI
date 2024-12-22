"use client";

import { useEffect, useState } from "react";
import { LoaderCircle, Search } from "lucide-react";

import { Input } from "@/components/ui/input";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
    setIsLoading(false);
  }, [inputValue]);

  return (
    <div className="w-full space-y-2">
      <div className="relative">
        <Input
          className="peer ps-10 w-full lg:w-[366px] lg:h-[44px] border-[#D5D7DA] rounded-lg"
          placeholder="Search Repositories"
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          {isLoading ? (
            <LoaderCircle
              className="animate-spin text-[#171717]"
              size={16}
              strokeWidth={2}
              role="status"
              aria-label="Loading..."
            />
          ) : (
            <Search size={20} strokeWidth={2} aria-hidden="true" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
