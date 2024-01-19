import stl from "./UploadModal.module.css";
import { HiOutlineUpload } from "react-icons/hi";
import VideoPlayer from "../videoplayer/VideoPlayer";
import { useDropzone } from "react-dropzone";
import { useEffect, useState, useCallback } from "react";
import { FiPlusSquare } from "react-icons/fi";

const UploadModal = ({
  handleDragLeave,
  isDraggingOver,
  uploaded,
  setUploaded,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      let newFiles = [];
      const filetypes = ["png", "jpg", "jpeg", "webp", "bmp", "tiff", "gif"];
      acceptedFiles.forEach((file) => {
        const newFile = {
          file,
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
    if (uploaded) {
      console.log(uploaded);
    }
  }, [uploaded]);

  return (
    <>
      <div className={stl.modal}>
        <div className={stl.videoWrapper}>
          <VideoPlayer videoID={"KSAwVuqlAT4"} />
        </div>
        <div className={stl.bottomBox}>
          <div className={stl.btnWrapper}>
            <div className={stl.btnBackground}>
              <button className={stl.uploadFileCta} {...getRootProps()}>
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
      {isDraggingOver && (
        <div
          className={stl.largedropbox}
          {...getRootProps()}
          onDragLeave={handleDragLeave}
        >
          <div className={stl.sphere}></div>
          <div className={stl.cornerBox}>
            <span className={stl.filedrop}>
              <FiPlusSquare /> Drop bestand
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadModal;