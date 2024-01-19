import stl from "./ImageEditor.module.css";
import setCanvasPreview from "./setCanvasPreview";
import { useRef, useState, useEffect } from "react";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";

const MIN_DIMENSION = 150;

const ImageEditor = ({ uploaded }) => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState();
  const [error, setError] = useState("");
  const [ASPECT_RATIO, SET_ASPECT_RAIO] = useState(16 / 9);

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  useEffect(() => {
    const handleFileChange = () => {
      const file = uploaded.file;
      console.log(file);
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const imageElement = new Image();
        const imageUrl = reader.result; // use reader.result to get the data URL
        imageElement.src = imageUrl;

        imageElement.addEventListener("load", (e) => {
          if (error) setError("");
          const { naturalWidth, naturalHeight } = e.currentTarget;
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

    // Assuming uploaded is coming from some external source or a prop
    // and you need to watch for changes to it
    handleFileChange({ target: { files: [uploaded] } });

    // Add any dependencies if needed
  }, [uploaded, error, setImgSrc]);

  return (
    <div className={stl.imageEditor}>
      <div className={stl.workSpace}>
        {imgSrc && (
          <div className={stl.workSpaceInner}>
            <div className={stl.cropDimensions}>
              <span>Hoogte: {Math.floor(crop?.height)} cm</span>
              <span>Lengte: {Math.floor(crop?.width)} cm</span>
            </div>
            <ReactCrop
              crop={crop}
              onChange={(pixelCrop, percentCrop) => {
                setCrop(percentCrop);
                console.log(percentCrop);
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

            <button
              className={`${"text-white font-mono text-xs py-2 px-4 rounded-2xl mt-4 bg-sky-500 hover:bg-sky-600 hi"} ${
                stl.hi
              }`}
              onClick={() => {
                setCanvasPreview(
                  imgRef.current, // HTMLImageElement
                  previewCanvasRef.current, // HTMLCanvasElement
                  convertToPixelCrop(
                    crop,
                    imgRef.current.width,
                    imgRef.current.height
                  )
                );
                const dataUrl = previewCanvasRef.current.toDataURL();
              }}
            >
              Crop Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageEditor;
