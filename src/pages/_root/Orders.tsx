import { useGetUserBasket } from "@/lib/react-query/queriesAndMutations";

import Loader from "@/components/shared/Loader";
import OrderCard from "@/components/shared/OrderCard";

const Orders = () => {
  type OrderCardProps = {
    order_id: string;
  count: number;
  // available: number;
};
  

  const ordersData = [
    { order_id: "#456765", count: 3 },
    { order_id: "#856765", count: 7 },
    { order_id: "#356765", count: 1 },
    { order_id: "#9056765", count: 3 },
  ];

 
  return (
    <div className=" w-full md:w-[500px]  h-full md:h-fit flex flex-col gap-6 justify-between   rounded-md ">
      <div className=" flex flex-col gap-6 justify-between    rounded-md ">
        <div className="flex justify-center  ">
          <p className="flex-1 text-center  text-white text-[19px] font-bold">
            Orders
          </p>
        </div>

        {ordersData.map(({order_id,count}:OrderCardProps) => (
          <OrderCard order_id={order_id} count={count}  />
        ))}
      </div>
    </div>
  );
};

export default Orders;
