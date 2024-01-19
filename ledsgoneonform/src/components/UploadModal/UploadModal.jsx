import stl from "./UploadModal.module.css";
import { HiOutlineUpload } from "react-icons/hi";
import VideoPlayer from "../videoplayer/VideoPlayer";

const UploadModal = () => {
  return (
    <div className={stl.modal}>
      <div className={stl.videoWrapper}>
        <VideoPlayer videoID={"vN33HJIZxWI"} />
      </div>
      <div className={stl.btnWrapper}>
        <div className={stl.btnBackground}>
          <button className={stl.uploadFileCta}>
            Upload bestand <HiOutlineUpload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
