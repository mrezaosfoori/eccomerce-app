import {
  useGetAllProducts,
  useGetUserBasket,
} from "@/lib/react-query/queriesAndMutations";
import BasketCard from "@/components/shared/BasketCard";
import Loader from "@/components/shared/Loader";
import { BasketCardProps } from "@/lib/types";
import BackButton from "@/components/shared/BackButton";

const Address = () => {
  const { data: userBasket, isLoading } = useGetUserBasket();
  //console.log(userBasket?.data?.items, "userBasket?.data?.items");

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="md:bg-dark-1 w-full md:w-[500px]  h-full md:h-fit flex flex-col gap-6 justify-between px-12 py-16   rounded-md ">
      <div className=" flex flex-col gap-6 justify-between    rounded-md ">
        <div className="flex justify-center relative ">
          {/* <img src="/assets/icons/BackButoon.png" alt="" className=" mr-auto" /> */}
          <div className=" mr-auto">
            <BackButton />
          </div>
          <p className="flex-1 text-center center-absolute text-white text-[16px] font-bold">
            Address
          </p>
        </div>

        <div className="flex  justify-between items-center gap-8 px-4 py-3 bg-[#342F3F] w-full rounded-md">
          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-bold ">
              shahr ara,bolvar dovom ,...
            </p>
          </div>
          <button className="text-[14px] font-bold text-[#8E6CEF] ">
            Edit
          </button>
          {/* <div onClick={() => handleRemove(productId)}>remove</div> */}
        </div>
        <div className="flex  justify-between items-center gap-8 px-4 py-3 bg-[#342F3F] w-full rounded-md">
          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-bold ">
              shahr ara,bolvar dovom ,...
            </p>
          </div>
          <button className="text-[14px] font-bold text-[#8E6CEF] ">
            Edit
          </button>
          {/* <div onClick={() => handleRemove(productId)}>remove</div> */}
        </div>
        <div className="flex  justify-between items-center gap-8 px-4 py-3 bg-[#342F3F] w-full rounded-md">
          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-bold ">
              shahr ara,bolvar dovom ,...
            </p>
          </div>
          <button className="text-[14px] font-bold text-[#8E6CEF] ">
            Edit
          </button>
          {/* <div onClick={() => handleRemove(productId)}>remove</div> */}
        </div>
      </div>
    </div>
  );
};

export default Address;
