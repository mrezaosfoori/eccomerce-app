import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Loader from "../shared/Loader";
import icons from "../../lib/icons";

const ExerciseFormUploader = ({
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
    <div className="space-y-2  ">
      <p className="text-[14px] font-normal">{label}</p>
      <div className="p-5  bg-slate-100 space-y-5 border-2">
        <div
          {...getRootProps()}
          className=" flex flex-col  mx-auto items-center gap-2  bg-slate-100  w-full  "
        >
          <input {...getInputProps()} className="cursor-pointer" />

          {fileIsUploading ? (
            <>
              <Loader /> در حال ذخیره سازی ...
            </>
          ) : (
            <>
              <div className=" p-5  bg-blue-200 rounded-full  ">
                <img
                  className="cursor-pointer  w-4   "
                  src={icons.plus}
                  alt="uploadIcon"
                />
              </div>
              <p>بکشید ویدیو را اینجا رها کنید</p>
              <p>
                شما می‌توانید ویدیوهایی با فرمت MP4 و حداکثر حجم ۱۰۰ مگابایت
                آپلود کنید.
              </p>
            </>
          )}
        </div>
        <div className="w-full flex items-center gap-4">
          <div className="bg-red-900 h-[1px] w-full" />
          <div>یا</div>
          <div className="bg-red-900 h-[1px] w-full" />
        </div>
        <p> آدرس یوتیوب</p>
        <div className="w-full  p-1 relative " dir="ltr">
          <img
            src={icons.logo}
            alt=""
            className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6"
          />
          <input className="bg-white w-full py-4 px-10 " />
        </div>
      </div>
    </div>
  );
};

export default ExerciseFormUploader;
