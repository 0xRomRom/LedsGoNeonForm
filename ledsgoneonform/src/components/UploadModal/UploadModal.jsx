import stl from "./UploadModal.module.css";
import { HiOutlineUpload } from "react-icons/hi";
import VideoPlayer from "../videoplayer/VideoPlayer";
import { useDropzone } from "react-dropzone";
import { useEffect, useState, useCallback } from "react";
import { FiPlusSquare } from "react-icons/fi";

const UploadModal = ({ handleDragLeave, isDraggingOver }) => {
  const [uploaded, setUploaded] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      let newFiles = [];
      const filetypes = ["png", "jpg", "jpeg", "webp", "bmp", "tiff", "gif"];
      acceptedFiles.forEach((file) => {
        const newName = file.name;
        const newFile = {
          file,
          randomNum: Math.random(),
          newname: newName,
        };
        filetypes.forEach((type) => {
          if (type === newFile.file.name.split(".")[1].toLowerCase()) {
            newFiles.push(newFile);
          }
        });
      });

      setUploaded(newFiles[0]);
      handleDragLeave(false);
    },
    [handleDragLeave]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/": [] },
  });

  useEffect(() => {
    console.log(uploaded);
  }, [uploaded]);

  return (
    <>
      {!isDraggingOver && (
        <div
          className={stl.largedropbox}
          {...getRootProps()}
          onDragLeave={handleDragLeave}
        >
          <span className={stl.filedrop}>
            <FiPlusSquare /> Drop bestand
          </span>
        </div>
      )}
      <div className={stl.modal}>
        <div className={stl.videoWrapper}>
          <VideoPlayer videoID={"KSAwVuqlAT4"} />
        </div>
        <div className={stl.bottomBox}>
          <div className={stl.btnWrapper}>
            <div className={stl.btnBackground}>
              <button className={stl.uploadFileCta}>
                Upload bestand <HiOutlineUpload className={stl.uploadIcon} />
                <input {...getInputProps()} name="Fileinput" />
              </button>
            </div>
            <span className={stl.sleepBestanden}>
              Sleep je bestand hierheen
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadModal;
