import ImageSlider from "./ImageSlider";

const images = [
  { url: "../../../public/assets/images/side-img.svg" },
  { url: "../../../public/assets/images/logo.svg" },
  { url: "../../../public/assets/images/profile.png" },
  { url: "../../../public/assets/images/side-img.svg" },
  { url: "../../../public/assets/images/side-img.svg" },
];

const HomeSlideShow = () => {
  return (
    <div className=" mx-auto flex  h-full items-center">
      <ImageSlider images={images} autoPlayTime={3700} width={1350} height={584}/>
    </div>
  );
};

export default HomeSlideShow;
