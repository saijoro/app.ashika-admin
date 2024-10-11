import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { YearSelectProps } from "./Year";

const CategorySelect = ({ onChange, errorMessage }: YearSelectProps) => {
  const categories = ["IPO Buy Bank OFS", "Event Update", "Other Report"];

  return (
    <div>
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-full  h-[30px]">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default CategorySelect;
