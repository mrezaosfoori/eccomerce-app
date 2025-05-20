import { useState, useCallback } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

type FileUploaderProps = {
  fieldChange: (FILES: File[]) => void;
  mediaUrl: any;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
  const [fileUrl, setFileUrl] = useState(mediaUrl);

  const [file, setFile] = useState<File[]>([]);
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      const files: any = [];
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      acceptedFiles.map((item) => {
        const url = URL.createObjectURL(item);
        files.push(url);
      });
      setFileUrl(files);
    },
    [file]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-col flex-center bg-[#342F3F] rounded-xl cursor pointer">
      <input {...getInputProps()} className="cursor-pointer" />
      {fileUrl.length > 0 ? (
        <>
          <div className="flex flex-col  bg-red-500">
            {fileUrl.map((item: any) => {
              return <img src={item} alt="" className="max-h-[250px] max-w-full" />;
            })}
          </div>
          <p>کلیک کن یا عکس را بردار</p>
        </>
      ) : (
        <div className="file_uploader-box">
          <img src="/assets/icons/file-upload.svg" alt="upload" />
          <h3 className="text-dark-2 base-medium mb-2 mt-6 ">
            {" "}
            فایل را در اینجا یارگذاری کنید
          </h3>
          <p className="text-light-4 small-regular mb-6"> SVG, PNG,JPG</p>
          <Button className="shad-button_dark_4">از سیستم بردار</Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
