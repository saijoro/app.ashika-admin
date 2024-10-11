"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useContext, useState } from "react";
import dayjs from "dayjs";
import TitleInput from "./Title";
import YearSelect from "./Year";
import MonthSelect from "./Month";
import ActionButtons from "./ActionButtons";
import CategorySelect from "./Category";
import { CreateReportContext } from "./CreateReportContext";
import { CreateReportContextProps } from "@/lib/interfaces/context";
import FileUpload from "../CommonComponents/UploadPage";
import ThumbnailPreview from "../CommonComponents/thumbnailUpload";
import Loading from "../CommonComponents/Loading";
// import { router } from '@tanstack/router';

// import { useNavigate } from "react-router-dom";

interface AddProps {
  showTitle?: boolean;
  showYear?: boolean;
  showMonth?: boolean;
  showCategory?: boolean;
  showFileUpload?: boolean;
  showThumbnail?: boolean;
  asset_group: string;
  asset_type: string;
  asset_category?: string;
}

const CombineAdd = ({
  showTitle = true,
  showYear = true,
  showMonth = true,
  showCategory = true,
  showFileUpload = true,
  showThumbnail = true,
  asset_group,
  asset_type,
  asset_category = "",
}: AddProps) => {
  // const router = useRouter();
  // const navigate = useNavigate();

  const context: CreateReportContextProps = useContext(
    CreateReportContext
  ) as CreateReportContextProps;

  const [errMessages, setErrorMessages] = useState<any>({});

  const {
    fileKey,
    setFileKey,
    reportsData,
    setReportsData,
    thumbnailKey,
    setThumbnailKey,
    selectedYear,
    setSelectedYear,
    selectedMonth,
    setSelectedMonth,
    loading,
    setLoading,
    handleInputChange,
    handleCategory,
    addReport,
  } = context as CreateReportContextProps;

  const updateDate = (year: string, month: string) => {
    if (year && month) {
      const formattedDate = dayjs(`${year}-${month}-01`).format("YYYY-MM-DD");
      setReportsData((prevData: any) => ({
        ...prevData,
        date: formattedDate,
      }));
    }
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    updateDate(year, selectedMonth);
  };

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    updateDate(selectedYear, month);
  };

  return (
    <>
      <div className="p-6 w-full max-w-4xl mt-5 mx-auto bg-white rounded-xl shadow-md space-y-6">
        <Button
          onClick={() => console.log("back")}
          // onClick={() => window.history.back()}
          variant="outline"
          className="flex items-center space-x-1 mb-4"
        >
          <ArrowLeft className="mr-1" />
          <span>Back</span>
        </Button>

        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex-1 space-y-6">
            {showTitle && (
              <TitleInput
                value={reportsData?.title}
                onChange={handleInputChange}
                errorMessage={errMessages?.title ? errMessages?.title[0] : ""}
              />
            )}

            <div className="flex space-x-4">
              {showYear && (
                <YearSelect
                  onChange={handleYearChange}
                  errorMessage={errMessages?.date ? errMessages?.date[0] : ""}
                />
              )}
              {showMonth && <MonthSelect onChange={handleMonthChange} />}
            </div>
            {showCategory && (
              <CategorySelect
                onChange={handleCategory}
                errorMessage={
                  errMessages?.category ? errMessages?.category[0] : ""
                }
              />
            )}
            {showFileUpload && (
              <div>
                <FileUpload accept="*/*" setFileKey={setFileKey} />
                {errMessages?.file_key && (
                  <p className="text-red-500">{errMessages.file_key[0]}</p>
                )}
              </div>
            )}
          </div>

          {showThumbnail && (
            <ThumbnailPreview
              accept="image/*"
              setThumbnailKey={setThumbnailKey}
              errMessage={
                errMessages?.thumbnail_key ? errMessages.thumbnail_key[0] : ""
              }
            />
          )}
        </div>

        <ActionButtons
          loading={loading}
          onCancel={() => window.history.back()}
          onSave={() => addReport({ asset_group, asset_type, asset_category })}
        />
      </div>
      <Loading loading={loading} />
    </>
  );
};

export default CombineAdd;
