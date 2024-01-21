import stl from "./ImageEditor.module.css";
import { useRef, useState, useEffect } from "react";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { GrTopCorner } from "react-icons/gr";

const MIN_DIMENSION = 25;
const ASPECT_RATIO = 0;

const ImageEditor = ({
  uploadedImg,
  setAspectRatio,
  setProgressState,
  setToggleIconBool,
  setLongestSide,
  setCutUploadedImg,
}) => {
  const imgRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState(null);
  const [error, setError] = useState("");
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [imageWidth, setImageWidth] = useState(null);
  const [imageHeight, setImageHeight] = useState(null);

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    console.log(width);
    console.log(height);
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent,
      },
      2,
      width * 3,
      height * 3
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  useEffect(() => {
    const handleFileChange = () => {
      const file = uploadedImg.file;
      if (!file) {
        return;
      }
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const imageElement = new Image();
        const imageUrl = reader.result;
        imageElement.src = imageUrl;

        imageElement.addEventListener("load", (e) => {
          if (error) setError("");
          const { naturalWidth, naturalHeight } = e.currentTarget;
          console.log(naturalHeight);
          setImageWidth(naturalWidth);
          setImageHeight(naturalHeight);
          if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
            setError("Image must be at least 150 x 150 pixels.");
            setImgSrc("");
          } else {
            setImgSrc(imageUrl);
          }
        });
      });

      if (file) {
        reader.readAsDataURL(file);
      }
    };

    handleFileChange({ target: { files: [uploadedImg] } });

    // Add any dependencies if needed
  }, [uploadedImg, error, setImgSrc]);

  const handleCropSave = () => {
    if (!crop || crop.width === 0 || crop.height === 0) {
      // If no crop is set, or the width/height is 0, do not proceed
      return;
    }

    const cropObject = convertToPixelCrop(
      crop,
      imgRef.current.width,
      imgRef.current.height
    );

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = cropObject.width; // Set canvas width to the width of the cropped area
    canvas.height = cropObject.height; // Set canvas height to the height of the cropped area

    // Draw the selected part of the image onto the canvas
    ctx.drawImage(
      imgRef.current, // Source image
      cropObject.x, // Source x-coordinate (start cropping from this point)
      cropObject.y, // Source y-coordinate (start cropping from this point)
      cropObject.width, // Source width (width of the cropped area)
      cropObject.height, // Source height (height of the cropped area)
      0, // Destination x-coordinate on canvas (start drawing from the left)
      0, // Destination y-coordinate on canvas (start drawing from the top)
      cropObject.width, // Destination width on canvas (width of the drawn area)
      cropObject.height // Destination height on canvas (height of the drawn area)
    );

    // Save the cropped image as data URL
    const croppedImageDataUrl = canvas.toDataURL("image/png");
    setCutUploadedImg(croppedImageDataUrl);

    // Set other state variables as needed
    const aspectRatio = +(cropObject.width / cropObject.height).toFixed(4);
    setAspectRatio(aspectRatio);
    setProgressState(3);
    setToggleIconBool(false);
    setLongestSide(null);
  };

  const handleCancel = () => {
    setProgressState(2);
    setToggleIconBool(false);
  };

  return (
    <div className={stl.imageEditor}>
      {imgSrc && (
        <div className={stl.workSpace}>
          <h2 className={stl.logoBijSnijden}>Oppervlakte Berekenen</h2>
          <span className={stl.subSpan}>Selecteer de gewenste omtrek</span>
          <div className={stl.workSpaceInner}>
            <span>{}</span>
            <GrTopCorner className={stl.cornerLeftTop} />
            <GrTopCorner className={stl.cornerRightTop} />
            <GrTopCorner className={stl.cornerBottomLeft} />
            <GrTopCorner className={stl.cornerBottomRight} />
            <ReactCrop
              crop={crop}
              onChange={(pixelCrop, percentCrop) => {
                setCrop(percentCrop);
                setCurrentPosition({
                  x: Math.round(pixelCrop.x),
                  y: Math.round(pixelCrop.y),
                });
              }}
              // keepSelection
              aspect={ASPECT_RATIO}
              minWidth={MIN_DIMENSION}
              className={stl.parent}
            >
              <img
                ref={imgRef}
                src={imgSrc}
                alt="Upload"
                style={{ maxHeight: "70vh" }}
                onLoad={onImageLoad}
              />
            </ReactCrop>
          </div>
          <div className={stl.btnsWrapper}>
            <button className={stl.annuleer} onClick={handleCancel}>
              Annuleren
            </button>
            <button
              className={`${stl.bevestigenCta} ${
                crop?.width > 0 && crop?.height > 0 ? "" : stl.disabledBtn
              }`}
              onClick={handleCropSave}
            >
              Bevestigen
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;
