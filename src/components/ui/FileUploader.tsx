import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import upload from "../../assets/images/uploadIcon.svg";
import useFileUpload from "../../hooks/useFileUpload";
import closeicon from "../../assets/images/closeicon.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import Loader from "../shared/Loader";
import emptyImage from "../../assets/images/emptyAvatar.svg";
import { updateBussinessProfile } from "../../lib/api/api";
import { useQueryClient } from "@tanstack/react-query";
import excelIcon from "../../assets/icons/excel2-svgrepo-com.svg";
import pdfIcon from "../../assets/icons/pdf-file-svgrepo-com.svg";
import wordIcon from "../../assets/icons/word2-svgrepo-com.svg";
import ImageContainer from "../shared/ImageContainer";

const FileUploader = ({
  fieldChange,
  mediaUrl = "",
  disabled,
  acceptedFormats,
  emptyAvatar,
  pic_type,
  bussiness_type,
  bussiness_id,
  type,
  text,
  label,
}) => {
  const [fileUrl, setFileUrl] = useState("");
  const [file, setFile] = useState([]);
  const [fileIsUploading, setFileIsUploading] = useState(false);
  const queryClient = useQueryClient();

  const { progress, uploading, error, uploadFile } = useFileUpload();

  const handleUpload = async ({ file, pic_type }) => {
    setFileIsUploading(true);

    try {
      const session = await uploadFile({ file, pic_type });

      if (session?.status === 200) {
        const { url } = session.data;
        fieldChange(url);

        const isProfileUpdate =
          (pic_type === "REAL_PROFILE" || pic_type === "LEGAL_PROFILE") &&
          type === "detail";

        if (isProfileUpdate) {
          const response = await updateBussinessProfile(
            bussiness_type,
            bussiness_id,
            url
          );
          ////console.log(response,"response updateBussinessProfile(bussiness_type, bussiness_id, url) ")

          if (response?.status === 200) {
            queryClient.invalidateQueries({
              queryKey: ["getUserBusinessList"],
              exact: true,
            });
            queryClient.invalidateQueries({
              queryKey: ["getUserBusinessList"],
              exact: true,
            });
          }
        }
      } else {
        fieldChange("");
      }

      return session;
    } catch (err) {
      fieldChange("");
      console.error("Error uploading file:", err);
      throw err; // Re-throw to handle errors elsewhere if needed
    } finally {
      setFileIsUploading(false);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      // fieldChange(URL.createObjectURL(acceptedFiles[0]))
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
      handleUpload({ file: acceptedFiles[0], pic_type: pic_type });
    },
    [file]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": acceptedFormats,
    },
    disabled,
  });

  const renderAttachmentPreview = (file) => {
    if (!file) return null;

    let icon = null;

    if (file.includes("xlsx")) icon = excelIcon;
    if (file.includes("docs")) icon = wordIcon;
    if (file.includes("pdf")) icon = pdfIcon;

    return (
      <div className="attachment-preview w-full  rounded-t-lg flex justify-between items-center ">
        {false ? (
          <Loader />
        ) : (
          <div className="attachment-info flex items-center gap-2 w-full ">
            {icon ? (
              <>
                <img src={icon} alt="file icon" className="w-10 h-10 " />
                <span className="truncate text-end max-w-[300px]">{file}</span>
              </>
            ) : (
              <ImageContainer src={file} width="64px" height="64px" />
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      {...getRootProps()}
      className="flex flex-col flex-center   bg-dark-3 rounded-xl cursor pointer gap-2 text-[12px] md:text-[16px] ">
      <label className=" ml-auto" htmlFor="">
        {label}
      </label>
      <input {...getInputProps()} className="cursor-pointer" />

      {fileIsUploading ? (
        <>
          <Loader /> در حال ذخیره سازی ...
        </>
      ) : (
        <>
          <div
            className={
              disabled
                ? "hidden"
                : "userStatus border-dashed border-2 border-black rounded-xl cursor pointer gap-2 w-full flex flex-col items-center p-2"
            }>
            <img className="cursor-pointer" src={upload} alt="uploadIcon" />

            <div className="flex flex-col items-center gap-1 w-full ">
              {text ? (
                text
              ) : (
                <>
                  <p>تصویر مدرک را درون کادر کشیده</p>
                  <p>و یا از میان پوشه‌هایتان انتخاب کنید </p>
                </>
              )}
              <p dir="ltr" className="text-neutral-70 small-regular mb-1">
                {acceptedFormats.map((item, index) => (
                  <span key={index} className="mx-[0.25px]">
                    {item}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </>
      )}

      {mediaUrl ? (
        <div className="bg-neutral-30 flex-between  gap-4 w-full p-2  rounded-xl">
          {uploading ? (
            <ProgressBar
              completed={progress}
              maxCompleted={100}
              className="w-full"
              bgColor="#39A78E"
            />
          ) : (
            <>
              <div className="flex items-center gap-4">
                {renderAttachmentPreview(mediaUrl)}
              </div>
              {!disabled && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    fieldChange("");
                  }}>
                  <img
                    className="w-7 h-7  ml-[6px]"
                    src={closeicon}
                    alt="closeicon-arrow"
                  />
                </button>
              )}
            </>
          )}
        </div>
      ) : (
        <>
          {emptyAvatar ? (
            <div className="bg-neutral-30 flex-between  gap-4 w-full p-2  rounded-xl">
              <img
                src={emptyImage}
                alt="emptyAvatar"
                className="size-1 h-[150px] rounded-lg min-w-[150px] min-h-[150px]"
              />
            </div>
          ) : (
            <></>
          )}
        </>
      )}

      {error && <div style={{ color: "red" }}>خطا:{error.message} </div>}
    </div>
  );
};

export default FileUploader;
