import { CategoryLink } from "../../lib/types";
import { Link } from "react-router-dom";
import BackButton from "@/components/shared/BackButton";
import AddCategory from "@/components/shared/AddCategory";
import { useGetAllCategory } from "@/lib/react-query/queriesAndMutations";

const CategoryPage = () => {
  const { data: category } = useGetAllCategory();

  //console.log({category})
  return (
    <div className="md:bg-dark-1 w-full md:w-[500px]  h-full md:h-fit flex flex-col gap-6 justify-between px-6 py-16   rounded-md ">
      <div className=" flex flex-col gap-6 justify-between    rounded-md ">
        <div className="flex flex-col gap-2  ">
          <div className=" mr-auto">
            <BackButton />
          </div>
          <p className="   text-white text-[32px] font-bold">
            Shop By Categories
          </p>
        </div>

        <div className="flex flex-col gap-6 justify-between    rounded-md">
          {category?.data.map((link: CategoryLink) => {
            return (
              <Link
                key={link.label}
                to={`/products/category/${link.label}`}
                className="flex   items-center gap-4 px-4 py-3 bg-[#342F3F] w-full rounded-md">
                <img
                  src={link.images[0]}
                  alt=""
                  className="rounded-full min-w-[56px] h-[56px] "
                />
                <p className="text-[18px] font-semibold text-light-2">
                  {" "}
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <AddCategory />
    </div>
  );
};

export default CategoryPage;
