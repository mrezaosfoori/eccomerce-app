import AddProductButoon from "@/components/shared/AddProductButoon";
import BackButton from "@/components/shared/BackButton";
import FilterBar from "@/components/shared/FilterBar";
import ProductCard from "@/components/shared/ProductCard";
import ProductLoadingCard from "@/components/shared/ProductCard/loading";
import { useGetCategoryProducts } from "@/lib/react-query/queriesAndMutations";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CategoryProdcts = () => {


  const [options, setOptions] = useState([
    {
      id: 1,
      title: "On Sale",
      options: [],
    },
    {
      id: 2,
      title: "Price",
      options: [
        { id: 1, value: "Min", active: false },
        { id: 2, value: "Max", active: true },
      ],
    },
    {
      id: 3,
      title: "Sort By",
      options: [
        { id: 1, value: "Recommended", active: false },
        { id: 2, value: "Newest", active: false },
        { id: 3, value: "Lowest to Highest Price", active: true },
        { id: 4, value: "Highest to Lowest Price", active: false },
      ],
    },
    {
      id: 4,
      title: "Gender",
      options: [
        { id: 1, value: "Men", active: false },
        { id: 2, value: "Women", active: false },
        { id: 3, value: "Kids", active: false },
      ],
    },
  ]);

  const { id } = useParams();
  const { data: products, isLoading, isSuccess } = useGetCategoryProducts(id);

  if (isLoading || !isSuccess) {
    return (
      <div className="flex flex-col gap-6  h-full pb-[200px]   px-6 pt-[64px]">
        <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5  w-full mx-auto">
        {[1, 2, 3, 4].map(() => {
          return <ProductLoadingCard />;
        })}
      </div>
    </div>
    );
  }

  return (
    <div className="flex flex-col gap-6  h-full pb-[200px]   px-6 pt-[64px]">
      <div className="flex gap-[9px]  items-center h-10">
        <BackButton />

        <div className="flex-1 flex  relative h-10">
          <img
            src="/assets/icons/searchnormal1.png"
            width={16}
            height={16}
            className="absolute left-4 top-[50%] translate-y-[-50%]"
            alt="ثبت پست"
          />
          <input
            placeholder="search entire website ... "
            className=" bg-[#342F3F] border-none focus:border-none focus:outline-[#8E6CEF]  px-12 py-5 w-full rounded-[100px]"
          />
        </div>
      </div>

      <FilterBar options={options} setOptions={setOptions} />
     
      <div className="  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5   ">
        {products ? (
          products?.data.map(
            ({ _id, images, title, description, amount }) => {
              return (
                <ProductCard
                  productId={_id}
                  images={images}
                  title={title}
                  description={description}
                  amount={amount}
                />
              );
            }
          )
        ) : (
          <p>nothing found</p>
        )}
      </div>
    </div>
  );
};

export default CategoryProdcts;
