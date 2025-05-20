type OrderCardProps = {
  order_id: string;
  count: number;
  // available: number;
};

const OrderCard = (props: OrderCardProps) => {
  const { order_id, count } = props;

  return (
    <div className="flex justify-between items-center gap-8 px-4 py-5 bg-[#342F3F] w-full rounded-md">
      <div className="flex gap-1 items-center">
        <img
          src="/assets/icons/order-main.svg"
          alt=""
          className=" w-10 h-10 "
        />
        <div className="flex flex-col text-[16px] font-semibold">
          <div className="flex gap-1 ">
            <p>Order</p>
            <p>{order_id}</p>
          </div>
          <div className="flex gap-1 text-gray-400 text-[12px]">
            <p>{count}</p>
            <p>items</p>
          </div>
        </div>
      </div>
      <img src="/assets/icons/arrowright2.png" alt="" className=" w-6  h-6  " />
      {/* <div onClick={() => handleRemove(productId)}>remove</div> */}
    </div>
  );
};

export default OrderCard;
