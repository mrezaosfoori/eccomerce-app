import React from "react";
import { useAddProductToUserBasket } from "./../../lib/react-query/queriesAndMutations";

const LandingPage = () => {
  return (
    <div className="bg-[#1D182A]  text-light-1 min-h-screen  ">
      <img
        src="/assets/images/backgound-svg-1.svg"
        alt=""
        className="absolute top-0 left-0 z-[10] max-w-[40vw]   "
      />
      <img
        src="/assets/images/same-day-delivery.svg"
        alt=""
        className=" absolute max-w-[800px] top-[90px] left-[50px]   z-[50]"
      />

<div className="flex justify-between items-center gap-8 px-8 py-8 bg-[#342F3F] w-2/5 rounded-md absolute right-[70px] top-[30vh] ">
  <div className="flex flex-col gap-2">
    <p className="text-[28px] font-bold">Online Shopping Center</p>
    <p className="text-[20px] font-bold opacity-50">Shop with ease</p>
    <p className="text-[20px] font-bold opacity-50">Best deals, best prices</p>
  </div>
</div>

    </div>
  );
};

export default LandingPage;
