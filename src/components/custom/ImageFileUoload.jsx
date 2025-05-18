import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
// import upload from "../../assets/images/uploadIcon.svg";
// import useFileUpload from "../../hooks/useFileUpload";

import Loader from "../shared/Loader";
import icons from "../../lib/icons";

const FileUploader = ({
  fieldChange,
  mediaUrl = "",
  disabled,
  acceptedFormats,
  emptyAvatar,
  pic_type,
  text,
  label,
}) => {
  const [fileUrl, setFileUrl] = useState("");
  const [file, setFile] = useState([]);
  const [fileIsUploading, setFileIsUploading] = useState(false);

  //   const { progress, uploading, error, uploadFile } = useFileUpload();

  //   const handleUpload = async ({ file, pic_type }) => {
  //     setFileIsUploading(true);

  //     try {
  //       const session = await uploadFile({ file, pic_type });

  //       if (session?.status === 200) {
  //         const { url } = session.data;
  //         fieldChange(url);
  //       } else {
  //         fieldChange("");
  //       }

  //       return session;
  //     } catch (err) {
  //       fieldChange("");
  //       console.error("Error uploading file:", err);
  //       throw err; // Re-throw to handle errors elsewhere if needed
  //     } finally {
  //       setFileIsUploading(false);
  //     }
  //   };

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      // fieldChange(URL.createObjectURL(acceptedFiles[0]))
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
      //   handleUpload({ file: acceptedFiles[0], pic_type: pic_type });
    },
    [file]
  );
  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    onDrop,
    accept: {
      "image/*": acceptedFormats,
    },
    disabled,
  });

  return (
    <div
      {...getRootProps()}
      className=" flex flex-col w-fit mx-auto items-center gap-2 "
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {fileIsUploading ? (
        <>
          <Loader /> در حال ذخیره سازی ...
        </>
      ) : (
        <>
          <div className="flex justify-center items-center  border-2 border-slate-200 w-[200px] h-[200px] rounded-full p-8 ">
            <img
              className="cursor-pointer w-10 h-10 opacity-50 "
              src={icons.camera}
              alt="uploadIcon"
            />
          </div>
          <p>افزودن عکس</p>
        </>
      )}

      {/* {error && (
        <div className="text-red-500 w-full flex gap-2">
          خطا:{error.message}{" "}
        </div>
      )} */}

      {fileRejections.map(({ file, errors }) => {
        //console.log({ errors });
        return (
          <div key={file.path} className="text-red-500 w-full flex gap-2">
            {file.path}
            {errors.map((e) => (
              <span key={e.code}>
                {e.code === "file-invalid-type"
                  ? "فرمت فایل نامعتبراست"
                  : e.message}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default FileUploader;
