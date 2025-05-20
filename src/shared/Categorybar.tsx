import { CategoryLink } from "../../lib/types";
import { Link } from "react-router-dom";
import { useGetAllCategory } from "@/lib/react-query/queriesAndMutations";

const Categorybar = () => {
    const { data: category } = useGetAllCategory();
  return (
    <section className="flex flex-col gap-4">
      <div className="w-full flex justify-between">
        <p className="h4-bold text-light-1">Categories</p>
        <Link to={"/categories"} className="h4-semibold text-light-1">See All</Link>
      </div>

      <div className="flex gap-3">
        {category?.data.map((link: CategoryLink) => {
          return (
            <Link
              key={link.label}
              to={`/products/category/${link.label}`}
              className="flex-center flex-col gap-1 transition">
              <img
                  src={link.images[0]}
                alt=""
                className="rounded-full min-w-[56px] h-[56px] "
              />
              <p className="text-[14px] text-light-2"> {link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categorybar;
