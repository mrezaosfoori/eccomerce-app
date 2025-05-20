import {
  useAddProductToUserBasket,
  useRemoveProductFromUserBasket,
} from "@/lib/react-query/queriesAndMutations";
import { BasketCardProps } from "@/lib/types";

type ProductCardProps = {
  images: any;
  title: string;
  description: string;
  amount: number;
  // available: number;
};

const index = ({
  productId,
  logo,
  title,
  quantity,
  amount,
}: BasketCardProps) => {
  const { mutateAsync: addToBasket } = useAddProductToUserBasket();
  const { mutateAsync: removeFromBasket } = useRemoveProductFromUserBasket();

  // const handleAddProduct=async(productId:string)=>{
  //   //console.log({productId})
  //  const response=await addToBasket(productId)
  //  //console.log({response})
  // }
  // const handleMinusProduct=async(productId:string)=>{
  //   //console.log({productId})
  //  const response=await removeFromBasket(productId)
  //  //console.log({response})

  // }
  return (
    <div className="bg-[#342f3f] p-3 rounded-md flex items-center gap-3  ">
      {logo && <img src={logo} className="w-16 h-16   " alt="" />}
      <div className="flex flex-col w-full  p-1">
        <div className="flex justify-between items-center">
          <p>{title}</p>
          <p className="text-[14px] font-bold ">{amount}$</p>
        </div>
        <div className="flex justify-between  items-center">
          <div className="text-center flex  items-center">
            <p className="  flex items-center  h-[20px]">vailable :</p>
            <p>{quantity}</p>
          </div>
          <div className="flex gap-1">
            <img
              // onClick={()=>handleAddProduct(productId)}
              src={"/assets/icons/plusIcon.svg"}
              className="w-6 h-6 hover:shadow-md hover:shadow-white rounded-full cursor-pointer   "
              alt=""
            />
            <img
              // onClick={()=>handleMinusProduct(productId)}
              src={"/assets/icons/minusIcon.svg"}
              className="w-6 h-6 hover:shadow-md hover:shadow-white rounded-full cursor-pointer   "
              alt=""
            />
          </div>
          {/* <button className="bg-[#8E6CEF] px-4 py-2 rounded-md text-light-1">
            Buy
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default index;
