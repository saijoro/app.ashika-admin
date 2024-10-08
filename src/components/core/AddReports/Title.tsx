import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";

export interface TitleInputProps {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const TitleInput = ({ value, onChange, errorMessage }: TitleInputProps) => {
  return (
    <div>
      <Input
        placeholder="Title"
        className="w-full"
        name="title"
        value={value}
        onChange={onChange}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default TitleInput;
