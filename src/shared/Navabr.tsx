import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navabr = () => {
  const userData = useSelector((state) => state.auth.userData);
  return (
    <div className="flex justify-between gap-6  w-full mb-6  ">
      {userData.email ? `welcome ${userData.email}` : "welcome guest"}
      <div className="flex gap-2 ">
        <div className=" flex gap-2 relative h-10 w-full">
          <img
            src="/assets/icons/searchnormal1.png"
            width={16}
            height={16}
            className="absolute left-4 top-[50%] translate-y-[-50%]"
            alt="ثبت پست"
          />
          <input
            placeholder="search entire website ... "
            className=" bg-[#342F3F] border-none focus:border-none focus:outline-[#8E6CEF]  px-12 py-5 w-full rounded-[100px] text-white"
          />
        </div>
        <div className=" flex h-fit justify-between  items-center gap-4  relative ">
          <Link to={"/basket"}>
            <img
              src="/assets/icons/basket.svg"
              width={40}
              height={40}
              alt="ثبت پست"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navabr;
