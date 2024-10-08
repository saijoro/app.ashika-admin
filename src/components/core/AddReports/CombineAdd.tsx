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
// import { useNavigate } from "react-router-dom";

const CombineAdd = () => {
  // const router = useRouter();
  // const navigate = useNavigate();

  const context: CreateReportContextProps = useContext(
    CreateReportContext
  ) as CreateReportContextProps;

  const [errMessages, setErrorMessages] = useState<any>({});

  //   console.log(context, "context");

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
    addReports,
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
          // onClick={() => navigate(-1)}
          variant="outline"
          className="flex items-center space-x-1 mb-4"
        >
          <ArrowLeft className="mr-1" />
          <span>Back</span>
        </Button>

        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex-1 space-y-6">
            <TitleInput
              value={reportsData?.title}
              onChange={handleInputChange}
              errorMessage={errMessages?.title ? errMessages?.title[0] : ""}
            />

            <div className="flex space-x-4">
              <YearSelect
                onChange={handleYearChange}
                errorMessage={errMessages?.date ? errMessages?.date[0] : ""}
              />
              <MonthSelect onChange={handleMonthChange} />
            </div>
            <CategorySelect
              onChange={handleCategory}
              errorMessage={
                errMessages?.category ? errMessages?.category[0] : ""
              }
            />

            <div>
              <FileUpload accept="*/*" setFileKey={setFileKey} />
              {errMessages?.file_key && (
                <p className="text-red-500">{errMessages.file_key[0]}</p>
              )}
            </div>
          </div>

          <ThumbnailPreview
            accept="image/*"
            setThumbnailKey={setThumbnailKey}
            errMessage={
              errMessages?.thumbnail_key ? errMessages.thumbnail_key[0] : ""
            }
          />
        </div>

        <ActionButtons
          loading={loading}
          onCancel={() => addReports}
          onSave={addReports}
        />
      </div>
      <Loading loading={loading} />
    </>
  );
};

export default CombineAdd;
