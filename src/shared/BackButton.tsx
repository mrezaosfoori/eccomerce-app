import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Goes back one step in history
  };

  return (
    <button
      onClick={handleBackClick}
      className=" hover:bg-secondary-40 rounded-full">
      <img src="/assets/icons/BackButoon.png" alt="" width={40} height={40} />
    </button>
  );
};

export default BackButton;
