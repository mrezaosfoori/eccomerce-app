import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="col-span-1 ">
      <SkeletonTheme baseColor="#555" highlightColor="#444">
        <div className="flex flex-col gap-2 p-1 rounded-md  bg-[#3d3b3b]  ">
          {/* Large Skeleton */}
          <Skeleton count={1} className="h-[200px]" />

          <Skeleton count={1} className=" h-[50px]    " />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default Loading;
