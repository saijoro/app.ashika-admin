import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

export interface YearSelectProps {
  onChange: (value: string) => void;
  errorMessage?: string;
}

const YearSelect: React.FC<YearSelectProps> = ({ onChange, errorMessage }) => {
  return (
    <div>
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-full  h-[30px]">
          <SelectValue placeholder="Select Year" />
        </SelectTrigger>
        <SelectContent>
          {["2028", "2027", "2026", "2025", "2024", "2023"].map((year) => (
            <SelectItem key={year} value={year}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default YearSelect;
