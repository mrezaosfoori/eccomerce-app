import { useEffect, useState } from "react";

type Props = {
  images: [];
  autoPlayTime: number;
  width: number;
  height: number;
};

const ImageSlider = ({ images, autoPlayTime, width, height }: Props) => {
  const [index, setIndex] = useState(0);

  const backBtnHandler = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const forwardBtnHandler = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const myInterval = setInterval(forwardBtnHandler, autoPlayTime);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <div className=" rounded-xl relative ">
      <img
        src={images[index]}
        alt="image"
        style={{ objectFit: "cover", width: width, height: height }}
      />
      <div className="flex gap-3 absolute bottom-0 w-fit left-1/2 translate-x-[-50%] translate-y-[100%]  justify-center bg-[#8E6CEF] px-2 rounded-b-xl">
        <button onClick={backBtnHandler}>back</button>
        <div className="flex gap-4">
          {images.map((item, i) => {
            //console.log(item);
            return (
              <button
                value={i}
                onClick={() => setIndex(i)}
                className={
                  i === index ? "bg-dark-1 text-white px-3 rounded-md p-1" : ""
                }>
                {i}
              </button>
            );
          })}
        </div>
        <button onClick={forwardBtnHandler}>for</button>
      </div>
    </div>
  );
};

export default ImageSlider;
