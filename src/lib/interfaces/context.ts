
import React, {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
    ChangeEvent,
  } from "react";
  
  export interface CreateReportContextProps {
    reportsData: reportsDataProps;
    setReportsData: Dispatch<React.SetStateAction<reportsDataProps>>;
    fileKey: string;
    setFileKey: Dispatch<SetStateAction<string>>;
    thumbnailKey: string;
    setThumbnailKey: Dispatch<SetStateAction<string>>;
    selectedYear: string;
    setSelectedYear: Dispatch<SetStateAction<string>>;
    selectedMonth: string;
    setSelectedMonth: Dispatch<SetStateAction<string>>;
    selectedCategory: string;
    setSelectedCategory: Dispatch<SetStateAction<string>>;
    loading: boolean;
    setLoading : Dispatch<SetStateAction<boolean>>;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleCategory:  (value: string) => void;
    addReports: () => void;
  }

  export interface reportsDataProps {
    title: string,
    date: string,
    file_key: string,
    thumbnail_key: string,
    category: string,
  }