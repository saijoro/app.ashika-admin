import { Input } from "@/components/ui/input";
import { CreateReportContextProps } from "@/lib/interfaces/context";
import React, { ChangeEvent, useContext } from "react";
import { CreateReportContext } from "./CreateReportContext";

export interface TitleInputProps {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const TitleInput = () => {
  const context: CreateReportContextProps = useContext(
    CreateReportContext
  ) as CreateReportContextProps;

  const { reportsData, handleInputChange, errMessages } = context;

  return (
    <div>
      <Input
        placeholder="Title"
        className="w-full h-[30px]"
        name="title"
        value={reportsData?.title}
        onChange={handleInputChange}
      />
      {errMessages?.title && (
        <p className="text-red-500">{errMessages?.title[0]}</p>
      )}
    </div>
  );
};

export default TitleInput;
