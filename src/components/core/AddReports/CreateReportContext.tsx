"use client";
import {
  CreateReportContextProps,
  reportsDataProps,
} from "@/lib/interfaces/context";
import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

const data = {
  title: "",
  date: "",
  file_key: "",
  thumbnail_key: "",
  category: "",
};

export const CreateReportContext = createContext<CreateReportContextProps>({
  reportsData: data,
  setReportsData: () => {},
  fileKey: "",
  setFileKey: () => {},
  thumbnailKey: "",
  setThumbnailKey: () => {},
  selectedYear: "",
  setSelectedYear: () => {},
  selectedMonth: "",
  setSelectedMonth: () => {},
  selectedCategory: "",
  setSelectedCategory: () => {},
  loading: false,
  setLoading: () => {},
  handleInputChange: () => {},
  handleCategory: () => {},
  addReports: () => {},
});

export const CreateReportProvider = ({ children }: { children: ReactNode }) => {
  const [reportsData, setReportsData] = useState<reportsDataProps>({
    title: "",
    date: "",
    file_key: "",
    thumbnail_key: "",
    category: "",
  });
  const [fileKey, setFileKey] = useState("");
  const [thumbnailKey, setThumbnailKey] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReportsData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategory = (category: string) => {
    setReportsData((prevData: any) => ({
      ...prevData,
      category: category,
    }));
  };

  const addReports = async () => {
    setLoading(true);
    try {
      const payload = {
        title: reportsData?.title,
        date: reportsData?.date,
        file_key: fileKey,
        thumbnail_key: thumbnailKey,
      };
      console.log(payload, "payload");
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  console.log(reportsData, "reports");

  return (
    <CreateReportContext.Provider
      value={{
        reportsData,
        setReportsData,
        fileKey,
        setFileKey,
        thumbnailKey,
        setThumbnailKey,
        selectedYear,
        setSelectedYear,
        selectedMonth,
        setSelectedMonth,
        selectedCategory,
        setSelectedCategory,
        loading,
        setLoading,
        handleInputChange,
        handleCategory,
        addReports,
      }}
    >
      {children}
    </CreateReportContext.Provider>
  );
};
