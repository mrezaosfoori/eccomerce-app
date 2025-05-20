import {
  useAddProductToUserBasket,
  useDeletePost,
  useGetProduct,
} from "@/lib/react-query/queriesAndMutations";
import styles from "./Styles.module.css";
import { useParams } from "react-router-dom";
import Loader from "@/components/shared/Loader";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id?: string }>();

  const { data: productData, isLoading } = useGetProduct(id);
  const [quantity, setQuantity] = useState(0);

  // const handleBuyProduct = async (product: ProductCardProps) => {
  //   //console.log({ productId });
  //   const response = await addToBasket(product);
  //   //console.log({ response });
  // };
  // const handleRemove = async (productId: string) => {
  //   //console.log({ productId });
  //   const response = await deletePost(productId);
  //   //console.log({ response });
  // };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="  px-6 py-16 w-full h-full  flex flex-col gap-6">
      <div className="w-full flex justify-between ">
        <img src="/assets/icons/BackButoon.png" alt="" className=" " />
        <img src="/assets/icons/LikeButton.png" alt="" className=" " />
      </div>
      <div className="flex w-full  overflow-x-scroll gap-[10px]">
        {productData?.data?.images.map((img: string) => (
          <img src={img} className=" bg-white w-[161px] h-[248px]  " alt="" />
        ))}
      </div>

      <div className="flex flex-col">
        <p className="text-[20px] font-bold">{productData?.data?.title}</p>
        <p className="text-[18px] font-bold text-[#8E6CEF] ">
          $ {productData?.data?.amount}
        </p>
        {/* <div onClick={() => handleRemove(productId)}>remove</div> */}
      </div>
      <div className="flex justify-between items-center gap-8 px-4 py-2 bg-[#342F3F] w-full rounded-[100px]">
        <p>Quantity</p>
        <div className="flex gap-8 items-center">
          <img
            // onClick={()=>handleAddProduct(productId)}
            onClick={() => setQuantity((prev) => prev + 1)}
            src={"/assets/icons/plusIcon.svg"}
            className="w-10 h-10 hover:shadow-md hover:shadow-white rounded-full cursor-pointer   "
            alt=""
          />
          {quantity}
          <img
            // onClick={()=>handleMinusProduct(productId)}
            onClick={() => setQuantity((prev) => (prev === 0 ? 0 : prev - 1))}
            src={"/assets/icons/minusIcon.svg"}
            className="w-10 h-10 hover:shadow-md hover:shadow-white rounded-full cursor-pointer   "
            alt=""
          />
        </div>
      </div>

      <div className="flex gap-1">
        <p>available :</p>
        <p>3</p>
      </div>
      <div className="bg-[#8E6CEF] px-6 py-4 flex justify-between items-center text-light-1 w-full rounded-[100px]">
        <p>${productData?.data?.amount * quantity}</p>
        <button
        //   onClick={() => handleBuyProduct(product)}
        >
          Add To Bag
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
