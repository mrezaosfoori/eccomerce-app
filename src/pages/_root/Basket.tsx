import {
  useGetAllProducts,
  useGetUserBasket,
} from "@/lib/react-query/queriesAndMutations";
import BasketCard from "@/components/shared/BasketCard";
import Loader from "@/components/shared/Loader";
import { BasketCardProps } from "@/lib/types";

const Basket = () => {
  const { data: userBasket, isLoading } = useGetUserBasket();
  //console.log(userBasket?.data?.items, "userBasket?.data?.items");

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="md:bg-dark-1 w-full md:w-[500px]  h-full md:h-fit flex flex-col gap-6 justify-between px-12 py-16   rounded-md ">
      <div className=" flex flex-col gap-6 justify-between    rounded-md ">
        <div className="flex justify-center relative ">
          <img src="/assets/icons/BackButoon.png" alt="" className=" mr-auto" />
          <p className="flex-1 text-center center-absolute text-white">Cart</p>
        </div>

        <p className="flex-1 text-end  text-white">Remove All</p>

        <div>
          {userBasket?.data?.items.map((item: BasketCardProps) => {
            return (
              <BasketCard
                productId={item.productId}
                quantity={item.quantity}
                logo={item.logo}
                title={item.title}
                amount={item.amount}
              />
            );
          })}
        </div>
        {/* //////////////////////////////////////// */}
        <div className="flex-col gap-3 my-[30px]">
          <div className="flex justify-between items-center">
            <p className="text-opacity-50 text-white text-[16px]">SubTotal</p>
            <p className="text-[16px] font-bold ">1212$</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-opacity-50 text-white text-[16px]">
              Shopping Cost
            </p>
            <p className="text-[16px] font-bold ">{userBasket?.data?.bill}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-opacity-50 text-white text-[16px]">Tax</p>
            <p className="text-[16px] font-bold ">1212$</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-opacity-50 text-white text-[16px]">Total</p>
            <p className="text-[16px] font-bold ">1212$</p>
          </div>
        </div>
      </div>
      {/* checkout button ///////////////// */}

      <button className="bg-[#8E6CEF] rounded-3xl p-4 w-full flex justify-center">
        Checkout
      </button>
    </div>
  );
};

export default Basket;
