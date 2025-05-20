import {
  useAddProductToUserBasket,
  useDeletePost,
} from "@/lib/react-query/queriesAndMutations";
import styles from "./Styles.module.css";
import { Link, useNavigate } from "react-router-dom";

type ProductCardProps = {
  productId: string;
  images: any;
  title: string;
  description: string;
  amount: number;
  // available: number;
};

const index = (product: ProductCardProps) => {
  const { productId, images, title, description, amount } = product;
  //console.log({ images });

  const navigate = useNavigate();

  const { mutateAsync: addToBasket } = useAddProductToUserBasket();
  const { mutateAsync: deletePost } = useDeletePost();

  const handleBuyProduct = async (product: ProductCardProps) => {
    //console.log({ productId });
    const response = await addToBasket(product);
    //console.log({ response });
  };
  const handleRemove = async (productId: string) => {
    //console.log({ productId });
    const response = await deletePost(productId);
    //console.log({ response });
  };
  return (
    <Link
      className="bg-[#342F3F] col-span-1 rounded-lg text-white "
      to={`/product/detail/${productId}`}>
      <div>
        {images && (
          <img
            src={images[0]}
            className=" bg-white h-[220px] rounded-t-lg "
            alt=""
          />
        )}
      </div>

      <div className="flex  flex-col  py-2 px-1   gap-2 ">
        <p className="text-[16px] font-bold">{title}</p>
        <p className="text-[16px] font-bold ">{amount}$</p>
      </div>
    </Link>
  );
};

export default index;
// import {
//   useAddProductToUserBasket,
//   useDeletePost,
// } from "@/lib/react-query/queriesAndMutations";
// import styles from "./Styles.module.css";

// type ProductCardProps = {
//   productId: string;
//   images: any;
//   title: string;
//   description: string;
//   amount: number;
//   // available: number;
// };

// const index = (product: ProductCardProps) => {
//   const { productId, images, title, description, amount } = product;
//   //console.log({ images });

//   const { mutateAsync: addToBasket } = useAddProductToUserBasket();
//   const { mutateAsync: deletePost } = useDeletePost();

//   const handleBuyProduct = async (product: ProductCardProps) => {
//     //console.log({ productId });
//     const response = await addToBasket(product);
//     //console.log({ response });
//   };
//   const handleRemove = async (productId: string) => {
//     //console.log({ productId });
//     const response = await deletePost(productId);
//     //console.log({ response });
//   };
//   return (
//     <div className="bg-[#342F3F] col-span-1 ">
//       <div>
//         {images && <img src={images[0]} className=" bg-white h-[220px] rounded-t-lg "  alt="" />}{" "}
//       </div>
//       <div>{description}</div>
//       <div className="flex justify-between">
//         <div>{title}</div>
//         <div onClick={() => handleRemove(productId)}>remove</div>
//       </div>
//       <div>
//         <div className="flex gap-1 w-full justify-between items-end">
//           <div className="flex  items-center   gap-2 ">
//             <p className="text-[22px] font-bold ">{amount}$</p>
//             <div className="flex gap-1">
//               <p>available :</p>
//               {/* <p>{available}</p> */}
//             </div>
//           </div>

//           <button
//             onClick={() => handleBuyProduct(product)}
//             className="bg-[#8E6CEF] px-4 py-2 rounded-md text-light-1">
//             {" "}
//             Buy{" "}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default index;
