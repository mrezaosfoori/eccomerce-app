import AddProductButoon from "../../shared/AddProductButoon";
// import ProductCard from "../../shared//ProductCard";
// import ProductLoadingCard from "../../shared//ProductCard/loading";


const Products = () => {
  type ProductCardProps = {
    images: any;
    _id: string;
    title: string;
    description: string;
    amount: number;
  };

 

  // if (isLoading || !isSuccess) {
  //   return (
  //     <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5  w-full mx-auto">
  //       {[1, 2, 3, 4].map(() => {
  //         return <ProductLoadingCard />;
  //       })}
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col  h-full pb-[200px] pt-8">
      {/* <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5   ">
        {products ? (
          products?.data.map(
            ({ _id, images, title, description, amount }: ProductCardProps) => {
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
      </div> */}

      <AddProductButoon />
    </div>
  );
};

export default Products;
