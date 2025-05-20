import { useGetMe } from "@/lib/react-query/queriesAndMutations";
import Loader from "@/components/shared/Loader";
import { profileLinks } from "@/constants";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";

const Profile = () => {
  const { data: user, isLoading } = useGetMe();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="  px-1 pb-16 w-full h-full  flex flex-col gap-6">
      <div className="w-full flex flex-col items-center gap-2 ">
        <img
          src="/assets/icons/profile.jpg"
          alt=""
          className=" w-20 h-20 rounded-full  "
        />
        <p className="text-[18px] font-bold text-[#8E6CEF] ">
          {user?.data?.fullName}
        </p>
      </div>

      <div className="flex  justify-between items-center gap-8 px-4 py-3 bg-[#342F3F] w-full rounded-md">
        <div className="flex flex-col gap-2">
          <p className="text-[20px] font-bold">{user?.data?.username}</p>
          <p className="text-[20px] font-bold opacity-50">
            {user?.data?.email}
          </p>
          <p className="text-[20px] font-bold opacity-50">09373765646</p>
        </div>
        <button className="text-[14px] font-bold text-[#8E6CEF] ">Edit</button>
        {/* <div onClick={() => handleRemove(productId)}>remove</div> */}
      </div>
      <section className="flex flex-col gap-2">
        {profileLinks.map((link: any) => {
          return (
            <Link
              key={link.label}
              to={link.route}
              className="flex justify-between items-center gap-8 px-4 py-5 bg-[#342F3F] w-full rounded-md ">
              <p className="text-[20px] font-bold"> {link.label}</p>
              <img
                src="/assets/icons/arrowright2.png"
                alt=""
                className=" w-6  h-6  "
              />
            </Link>
          );
        })}
      </section>
      <Button
        className="flex gap-2 bg-transparent hover:bg-transparent"
        onClick={() => {
          Cookies.remove("authToken");
          navigate("/sign-in");
        }}>
      
        <p className="text-[18px] font-bold text-[#FA3636]">Sign Out</p>
      </Button>
    </div>
  );
};

export default Profile;
