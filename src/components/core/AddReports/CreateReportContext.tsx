"use client";
import {
  CreateReportContextProps,
  reportsDataProps,
} from "@/lib/interfaces/context";
import { addReportsAPI } from "@/utils/services/reports";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import dayjs from "dayjs";

const data = {
  title: "",
  date: "",
  file_key: "",
  thumbnail_key: "",
  category: "",
};

interface ReportPayload {
  asset_group: string;
  asset_type: string;
  asset_category: string;
  title: string;
  date?: string;
  file_key: string;
  thumbnail_key: string;
  category?: string;
}

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
  addReport: () => {},
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

  const { mutate, isPending, isError, error, data, isSuccess } = useMutation({
    mutationFn: async (payload: ReportPayload) => {
      return await addReportsAPI(payload);
    },
  });

  const formattedDate = dayjs("2024/10/10").toISOString();

  const addReport = () => {
    const payload = {
      asset_group: "research-reports",
      asset_type: "monthly-insights-reports",
      asset_category: "",
      title: reportsData?.title,
      date: formattedDate,
      // date: dayjs(reportsData?.date).toISOString(),
      file_key: fileKey,
      thumbnail_key: thumbnailKey,
      // category: reportsData?.category,
    };
    mutate(payload);
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
        addReport,
      }}
    >
      {children}
    </CreateReportContext.Provider>
  );
};
