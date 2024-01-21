import stl from "./UploadModal.module.css";
import { HiOutlineUpload } from "react-icons/hi";
import VideoPlayer from "../videoplayer/VideoPlayer";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { FiPlusSquare } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

const UploadModal = ({
  handleDragLeave,
  isDraggingOver,
  setUploadedImg,
  uploadedImg,
  setProgressState,
  progressState,
  setAspectRatio,
  setLongestSide,
  setToggleIconBool,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      let newFiles = [];
      const filetypes = [
        "png",
        "jpg",
        "jpeg",
        "webp",
        "bmp",
        "tiff",
        "gif",
        "PNG",
        "JPG",
        "JPEG",
        "WEBP",
        "BMP",
        "TIFF",
        "GIF",
      ];
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

      if (newFiles.length === 0) return;

      setUploadedImg(newFiles[0]);
      handleDragLeave(false);
      setAspectRatio(null);
      setLongestSide(null);
      setToggleIconBool(false);
      if (progressState === 0) {
        setProgressState(1);
        return;
      }
      setProgressState(2);
    },
    [
      handleDragLeave,
      setUploadedImg,
      progressState,
      setAspectRatio,
      setLongestSide,
      setProgressState,
      setToggleIconBool,
    ]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <>
      <div className={`${stl.modal} ${uploadedImg ? stl.checked : ""}`}>
        <div className={stl.videoWrapper}>
          <VideoPlayer videoID={"G8p6vr0Of4I"} />
        </div>
        <div className={stl.bottomBox}>
          <div className={stl.btnWrapper}>
            <div
              className={`${stl.btnBackground} ${
                uploadedImg ? stl.activeBackground : ""
              }`}
            >
              <button
                className={`${stl.uploadFileCta} ${
                  uploadedImg ? stl.activeCta : ""
                }`}
                {...getRootProps()}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {uploadedImg ? (
                  <span className={stl.uploadSpan}>
                    {isHovered ? "Upload bestand" : "Bestand Geupload"}{" "}
                    {isHovered && (
                      <HiOutlineUpload className={stl.uploadIcon} />
                    )}
                    {!isHovered && <FaCheck />}
                  </span>
                ) : (
                  <span className={stl.uploadSpan}>
                    Upload bestand
                    <HiOutlineUpload className={stl.uploadIcon} />
                  </span>
                )}
                <input {...getInputProps()} name="Fileinput" accept="image/*" />
              </button>
            </div>
            <span className={stl.sleepBestanden}>
              Sleep uw bestand hierheen
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
